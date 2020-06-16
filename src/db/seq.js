/**
 * @description sequelize 实例
 * @author  李佳泽
 */
const Sequelize = require('sequelize');
const { MYSQL_CONF } = require('../conf/db')
const { host, user, password, database} = MYSQL_CONF
const { isProd, isTest } = require('../utils/env')

const conf = {
    host,
    dialect: 'mysql'
}

// 如果测试环境 单元测试 不打印 sql
if ( isTest ) {
    conf.logging = () => {}
}

const seq = new Sequelize(database, user, password, conf);

//连接池  线上环境使用
// if ( isProd ) {
//     conf.pool = {
//         max: 5,
//         min: 0,
//         idle: 10000  //一个链接池 10s之内没有被连接就被释放
//     }
// }

//测试链接
// seq.authenticate().then( () => {
//     console.log('ok')
// }).catch(() => {
//     console.log('err')
// })

module.exports = seq;