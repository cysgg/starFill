// app/service/user.js

'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getAll() {
  // "users" 为test数据库数据表名
    const user = await this.service.mysql.select('users');
    return { user };
  }

  async register (body) {
    const data = await this.service.mysql.insert('users', body);
    return data;
  }

  async login (body) {
    const data = await this.service.mysql.get('users', body);
    return data;
  }
}

module.exports = UserService;