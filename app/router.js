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


    router.get('/', controller.user.findAll); // 重定向
    router.get('/updateUser', controller.user.updateUser);
    router.get('/addUser', controller.user.addUser);
    router.get('/deleteUser/:id', controller.user.deleteUser);
    router.get('findUserByName/:name', controller.user.findUserByName);
    router.get('findUserById/:id', controller.user.findUserById);
    router.get('findAll', controller.user.findAll);
};
// 'use strict';

// /**
//  * @param {Egg.Application} app - egg application
//  */
// module.exports = app => {};