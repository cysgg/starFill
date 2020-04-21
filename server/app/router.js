'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getAllUsers', controller.user.getAll);
  router.post('/register', controller.user.register);
  router.get('/login', controller.user.login)
};
