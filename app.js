
const Koa = require('koa');
const app = new Koa();
var cors = require('koa-cors');
const router = require('koa-router')();
const convert = require('koa-convert');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser')();
const session = require('koa-session');

const article = require('./routes/article');
const admin = require('./routes/admin');
const fs = require('fs')
// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });







app.use(cors())


//中间件
app.use(convert(require('koa-static2')("/public",__dirname + '/public')));
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(require('./middlewares/returnData'));
//session

app.keys = ['admin'];
const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 600000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};
app.use(session(CONFIG, app));

router.use('/api/article', article.routes(), article.allowedMethods());
router.use('/api/admin',admin.routes(),admin.allowedMethods());
router.get('/admin', async (ctx) => {
    console.log(1)
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./admin/index.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    // res.sendFile(path.join(__dirname + '/admin/index.html'));
});
app.use(router.routes(), router.allowedMethods());

app.listen(3001);
console.log('app started at port 3000...');