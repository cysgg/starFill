'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async index() {
    return 'hi egg'
  }
}

module.exports = HomeService;
