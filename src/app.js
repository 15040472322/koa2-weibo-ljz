const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')

const index = require('./routes/index')
const users = require('./routes/users')
const { REDIS_CONF } = require('./conf/db')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

//session 配置
app.keys = ['UIsd_13']
app.use(session({
  key: 'weibo.sid',       // cookie name  默认是 `koa.sid`
  prefix: 'weibo:sess:',  // redis key的前缀，默认是  `koa:sess:`
  cookie: {
    path: '/',            //在整个网络所有目录都能访问
    httpOnly: true,       //只能通过server端改，不能通过客户端修改
    maxAge: 24 * 60 * 60 * 1000  //过期时间
  },
  //ttl: 24 * 60 * 60 * 7 * 1000,  cookie写好过期时间默认redis过期时间和上面一致
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))
// // logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
