/**
 * @description sequelize 同步数据库
 * @author 李佳泽
 */
const seq = require('./seq')

//require('./model')

//验证连接
seq.authenticate().then( () => {
    console.log('auth ok')
}).catch(() => {
    console.log('auth err')
})

//执行同步            如果 force 为 true, 则每次都会重建表 users
seq.sync({ force: true}).then(() => {
    console.log('ok')
    process.exit();
})
