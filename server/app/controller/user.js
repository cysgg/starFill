// app/controller/user.js

'use strict';

const Controller = require('egg').Controller;
const { SuccessResponse, DataResponse } = require('../utils/Response')
class UserController extends Controller {
  async getAll() {
    const { ctx } = this;
    const user = await ctx.service.user.getAll();
    ctx.body = new DataResponse(user);
  }

  async register() {
    const { ctx } = this;
    const body = ctx.request.body
    const {name, password} = body
    const data = await ctx.service.user.register({name, password});
    ctx.body = new SuccessResponse();
  }

  async login() {
    const { ctx } = this;
    const query = ctx.query
    const {name, password} = query
    const data = await ctx.service.user.login({name});
    let result = false
    if(data) {
      result = password === data.password
    }
    ctx.body = new DataResponse(result);
  }
}

module.exports = UserController;
