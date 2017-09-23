const router = require('koa-router')();
const db = require('../database');
const login = require('../middlewares/isLogin')
//获取文章列表
router.get('/list',login.isLogin,async(ctx) => {
    console.log(ctx.session.uid)
    let page = ctx.query.page || '1'
    let limit = ctx.query.limit || '10'
    let data = await getList(page,limit)
    ctx.body = data;
})

function getList(page,limit) {
    return new Promise(function (resolve,reject) {
        db.query('select * from article limit ' +  (page-1)*limit + ' , ' + limit,function (err,row) {
            if (err) {
                reject(err)
            } else {
                resolve(row)
            }
        })
    })
}

//获取文章详情
router.get('/info', async(ctx) => {
    let id = ctx.query.id
    try{
        ctx.body = await getInfo(id)
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

module.exports = router;