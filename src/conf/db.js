/**
 * @description 配置
 * @author      李佳泽
 */

 const { isProd } = require('../utils/env')
 
 let REDIS_CONF = {
     host: '127.0.0.1',
     port: 6379
 }

 if ( isProd ) {
    //线上环境 比如
    REDIS_CONF = {
        host: '127.0.0.1',
        port: 6379
    }
 }

 module.exports = {
    REDIS_CONF
 }