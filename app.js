
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const convert = require('koa-convert');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser')();

const article = require('./routes/article');
// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });


//中间件
app.use(convert(require('koa-static2')("/public",__dirname + '/public')));
app.use(convert(bodyparser));
app.use(convert(json()));

router.use('/api/article', article.routes(), article.allowedMethods());

app.use(router.routes(), router.allowedMethods());

app.listen(8081);
console.log('app started at port 3000...');