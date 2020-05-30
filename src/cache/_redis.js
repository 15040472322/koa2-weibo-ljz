/**
 * @description  连接redis的方法 get set
 * @author   李佳泽
 */

 const redis = require('redis')
 const { REDIS_CONF } = require('../conf/db')

 //创建客户端
 const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);
 redisClient.on('error', err => {
     console.log('redis error', err)
 })

/**
 * redis set
 * @param {string} key key
 * @param {string} val val
 * @param {number} timeout 过期时间 单位 s
 */
 function set(key, val, timeout = 60 * 60) {
    if (typeof val === 'object') {
        val = JSON.stringify(val)
    }
    redisClient.set(key, val)
    redisClient.expire(key, timeout)
 }

 function get(key) {
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err)
                return err
            }
            if (val == null) {
                resolve(val)
                return 
            }
            try {
                resolve(
                    JSON.parse(val)
                )
            } catch (ex) {
                resolve(val)
            }
        })
    })
    return promise
 }

 //get

 module.exports = {
     set,
     get
 }