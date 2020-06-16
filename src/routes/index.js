const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  //console.log('before debugger')
  //debugger
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    isMe: true,
    blogList:[
      {
        id: 1,
        title: 'aaa'
      },
      {
        id: 2,
        title: 'bbb'
      },
      {
        id: 3,
        title: 'ccc'
      },
      {
        id: 4,
        title: 'ddd'
      }
    ]
  })
})

router.get('/json', async (ctx, next) => {
  // const session = ctx.session
  // if (session.viewNum == null) {
  //   session.viewNum = 0
  // }
  // session.viewNum ++
  ctx.body = {
    title: 'koa2 json'
    // viewNum: session.viewNum
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
