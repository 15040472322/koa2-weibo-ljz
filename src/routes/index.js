const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:username', function (ctx, next) {
  //ctx.params获取所有参数
  const {username} =  ctx.params
  ctx.body = {
    title: 'this is profile page',
    username
  }
})


router.get('/loadMore/:username/:pageIndex', async (ctx, next) => {
  const {username, pageIndex} =  ctx.params
  ctx.body = {
    title: 'this is loadMore API',
    username,
    pageIndex
  }
})

module.exports = router
