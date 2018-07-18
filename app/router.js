'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // app.get('/', 'home.index');
    // // app.get('/add/:data', 'home.add');
    // app.get('/add/:data', controller.home.add);
    // app.get('/get/:data', controller.home.info);

    // 重定向
    // app.router.redirect('/', '/home/index', 302);
    app.passport.mount('github');
    app.router.get('/logout', 'user.logout');

    router.get('/', controller.user.findAll);
    router.get('/api/updateUser', controller.user.updateUser);
    router.get('/api/addUser', controller.user.addUser);
    router.get('/api/deleteUser/:id', controller.user.deleteUser);
    router.get('/api/findUserByName/:name', controller.user.findUserByName);
    router.get('/api/findUserById/:id', controller.user.findUserById);
    router.get('/api/getAllUser', controller.user.findAll);

    router.get('/api/updateArticle', controller.article.updateArticle);
    router.get('/api/addArticle', controller.article.addArticle);
    router.get('/api/deleteArticle/:id', controller.article.deleteArticle);
    router.get('/api/getDetail/:id', controller.article.getDetail);
    router.get('/api/getAllArticle', controller.article.findAll);

    router.get('/api/areas', controller.area.findAll);
};
// 'use strict';

// /**
//  * @param {Egg.Application} app - egg application
//  */
// module.exports = app => {};