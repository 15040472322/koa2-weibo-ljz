/**
 * @description jest server
 * @author 李佳泽
 */

 const request = require('supertest')
 const server = require('../src/app').callback()

 module.exports = request(server)