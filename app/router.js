'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // router.get('/', controller.home.index);
    // router.get('/home', controller.home.index);
    app.get('/', 'home.index');
    // app.get('/add/:data', 'home.add');
    app.get('/add/:data', controller.home.add);
    app.get('/get/:data', controller.home.info);
    // app.get('/del/:data', 'home.del');
    // app.get('/get/:data', 'home.reach');
    // app.get('/update/:data', 'home.update');
};
// 'use strict';

// /**
//  * @param {Egg.Application} app - egg application
//  */
// module.exports = app => {};