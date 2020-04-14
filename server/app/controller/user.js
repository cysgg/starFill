// app/controller/home.js

'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.user.find();
    ctx.body = user;
  }
}

module.exports = UserController;
