// // // const database = "egg";
// // // module.exports = appInfo => {
// // //     // const config = {
// // //     //     // 渲染模板
// // //     //     view: {
// // //     //         defaultViewEngine: 'nunjucks',
// // //     //         mapping: {
// // //     //             '.tpl': 'nunjucks',
// // //     //         }
// // //     //     },
// // //     // };
// // //     // config.middleware = [];

// // //     const config = exports = {};
// // //     config.keys = appInfo.name + '_test';

// // //     config.middleware = [];

// // //     config.view = {
// // //         defaultViewEngine: 'nunjucks',
// // //         mapping: {
// // //             '.tpl': 'nunjucks',
// // //         }
// // //     };
// // //     // config.sequelize = {
// // //     //     dialect: 'mysql',
// // //     //     database: 'egg',
// // //     //     host: 'localhost',
// // //     //     port: '3306',
// // //     //     username: 'root',
// // //     //     password: '112358',
// // //     // };
// // //     config.sequelize = { // egg-sequelize 配置
// // //         dialect: "mysql", // db type
// // //         database: database,
// // //         host: "localhost",
// // //         port: "3306",
// // //         username: "root",
// // //         password: "112358"
// // //     };
// // //     return config;
// // // };

// // // /***
// // //  *    mysql: {
// // //             client: {
// // //                 host: 'localhost',
// // //                 port: '3306',
// // //                 user: 'root',
// // //                 password: '112358',
// // //                 database: 'egg',
// // //             },
// // //             app: true,
// // //             agent: false,
// // //         }
// // //  */
// // exports.sequelize = {
// //     dialect: 'mysql',
// //     database: 'egg',
// //     host: 'localhost',
// //     port: 3306,
// //     username: 'root',
// //     password: '',
// // };
// // exports.view = {
// //     defaultViewEngine: 'nunjucks',
// //     mapping: {
// //         '.tpl': 'nunjucks',
// //     }
// // };
// // exports.keys = '_test';

exports.mysql = {
    client: {
        host: 'localhost',
        port: '3306',
        user: 'other',
        password: '112358',
        database: 'egg',
    },
    app: true,
    agent: false,
};
exports.keys = '_test';
// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};