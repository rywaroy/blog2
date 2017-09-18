const router = require('koa-router')();
const db = require('../database');
const Data = require('../config/sendData')

router.post('/login',async(ctx) => {
    let account = ctx.request.body.account
    let password = ctx.request.body.password
    let data = await findAdmin(account,password)

    if(data.length == 1){
        ctx.session.uid =  data[0].id
        ctx.session.account = data[0].account
        ctx.body = Data('0000',null,'登录成功')
    }else{
        ctx.body = Data('0011',null,'账户或密码错误')
    }
})

function findAdmin(account,password) {
    return new Promise(function (resolve,reject) {

        db.query('select * from admin where account = "' + account + '"' + ' and password = "' + password + '"',function (err,rows) {
            if(err){
                reject(err)
            }else{
                resolve(rows)
            }
        })
    })

}

module.exports = router;