/**
 * @description 配置
 * @author      李佳泽
 */

 const { isProd } = require('../utils/env')
 
 let REDIS_CONF = {
     host: '127.0.0.1',
     port: 6379
 }

 let MYSQL_CONF = {
    host: '49.233.136.14',
    user: 'koaBlogs',
    password: 'Ljz@1234',
    port: '3306',
    database: 'blogs'
}

 if ( isProd ) {
    //线上环境 比如
    REDIS_CONF = {
        host: '127.0.0.1',
        port: 6379
    }
    //线上的mysql配置
    MYSQL_CONF = {
        host: '49.233.136.14',
        user: 'koaBlogs',
        password: 'Ljz@1234',
        port: '3306',
        database: 'blogs'
    }
 }

 module.exports = {
    REDIS_CONF,
    MYSQL_CONF
 }