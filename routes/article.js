const router = require('koa-router')();
const db = require('../database');
const login = require('../middlewares/isLogin')
//获取文章列表
router.get('/list',async(ctx) => {
    let page = ctx.query.page || '1'
    let limit = ctx.query.limit || '10'
    let data = await getList(page,limit)
    let count = await getListCount()
    ctx.success('0000','获取成功',{list:data,total:count})
    // ctx.body = data;
})

function getList(page,limit) {
    return new Promise(function (resolve,reject) {
        db.query('select id,title,intro,time,tag from article limit ' +  (page-1)*limit + ' , ' + limit,function (err,row) {
            if (err) {
                reject(err)
            } else {
                resolve(row)
            }
        })
    })
}
function getListCount() {
	return new Promise(function (resolve,reject) {
		db.query('select count(*) from article', function (err, row) {
			if (err) {
				reject(err)
			} else {
				resolve(row[0]['count(*)'])
			}
		})
	})
}

//获取文章详情
router.get('/info', async(ctx) => {
    let id = ctx.query.id
    try{
        let data = await getInfo(id)
	    ctx.success('0000','获取成功',data)
    }catch(err) {
        ctx.throw(err)
    }
})
function getInfo(id) {
    return new Promise(function (resolve, reject) {
        db.query('select * from article where id = ' + id, function (err, row) {
            if (err) {
                reject(err)
            } else {
                resolve(row[0])
            }
        })
    })
}

//添加文章
router.post('/add',login.isLogin,async(ctx) => {
	let title = ctx.request.body.title;
	let intro = ctx.request.body.intro;
	let content = ctx.request.body.content;
	let time = new Date();
	let tagId = ctx.request.body.tagId;
	let tag = ctx.request.body.tag;

	try {
		await addArticle(title,intro,content,time,tagId,tag)
		ctx.success('0000','添加成功')
	}catch (err){
		ctx.error('0011','添加失败')
	}

})

function addArticle(title,intro,content,time,tagId,tag) {
	return new Promise(function (resolve,reject) {
		db.query('insert into article (title,intro,content,time,tagid,tag) values(?,?,?,?,?,?)',[title,intro,content,time,tagId,tag],function (err,rows) {
			if (rows.insertId) {
				resolve()
			} else {
				reject(err)
			}
		})
	})
}
//获取文章标签

router.get('/tag',async(ctx) => {
	let list = await getTag()
	ctx.success('0000','获取成功',list)
})

function getTag() {
	return new Promise(function (resolve,reject) {
		db.query('select * from tag',function (err,rows) {
			if(err){
				reject(err)
			}else{
				resolve(rows)
			}
		})
	})
}

//更新文章
router.post('/update' async(ctx) =>{
	let title = ctx.request.body.title;
	let intro = ctx.request.body.intro;
	let content = ctx.request.body.content;
	let tagId = ctx.request.body.tagId;
	let tag = ctx.request.body.tag;
	try {
		await addArticle(title,intro,content,time,tagId,tag)
		ctx.success('0000','更新成功')
	}catch (err){
		ctx.error('0011','更新失败')
	}

})	

function updateArticle(title,intro,content,time,tagId,tag){
	return new Promise(function (resolve,reject) {
		db.query('update article set title = ?,intro = ?,content = ?,,tagid = ?,tag = ?',[title,intro,content,time,tagId,tag],function (err,rows) {
			if(err){
				reject(err)
			}else{
				resolve()
			}
		})
	})
		
}

module.exports = router;