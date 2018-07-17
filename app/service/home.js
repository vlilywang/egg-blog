// const Service = require('egg').Service;
// class HomeService extends Service {
//     async add() {
//         const result = yield this.app.mysql.insert('user', {
//             name: 'testadd'
//         });
//         if (result.serverStatus == 2) {
//             return "success";
//         } else {
//             return "fail";
//         }
//     }
// }
// module.exports = HomeService;

// // module.exports = app => {
// //     return class Home extends app.Service { *
// //             add() {
// //                 const data = this.ctx.params.data;
// //                 const result = yield this.app.mysql.insert('user', { 'name': data });
// //                 if (result.serverStatus == 2) {
// //                     return "success";
// //                 } else {
// //                     return "fail";
// //                 }
// //             }
// //         }
// //         // return class User extends app.Service { *
// //         //     add() {
// //         //         const data = this.ctx.params.data;
// //         //         const result = yield this.app.mysql.insert('user', {
// //         //             'data': new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, ''),
// //         //             'name': data
// //         //         });
// //         //         if (result.serverStatus == 2) {
// //         //             return 'success';
// //         //         } else {
// //         //             return "fail";
// //         //         }
// //         //     }
// //         // }
// // }