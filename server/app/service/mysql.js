// app/service/mysql.js

'use strict';

const Service = require('egg').Service;

class MysqlService extends Service {
  async sql(sql, vals) {
  // "users" 为test数据库数据表名
    const data = await this.app.mysql.query(sql, vals);
    return data;
  }

  async get(table, query = {}) {
    const data = await this.app.mysql.get(table, query);
    return data;
  }
  
  async select (table, query = {} ){
    const data = await this.app.mysql.select(table, query);
    return data;
  }

  async insert(table, query) {
    const data = await this.app.mysql.insert(table, query);
    return data;
  }

  async update(table, query) {
    const data = await this.app.mysql.update(table, query);
    return data;
  }

  async delete(table, query) {
    const data = await this.app.mysql.delete(table, query);
    return data;
  }
}

module.exports = MysqlService;