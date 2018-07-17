// // 'use strict';

// // const Controller = require('egg').Controller;

// // class HomeController extends Controller {
// //     async index() {
// //         const ctx = this.ctx;
// //         const user = await ctx.service.home.add();
// //         console.log('/*************************************/');
// //         console.log(user);
// //     }
// // }

// // module.exports = HomeController;
// module.exports = app => {
//     class HomeController extends app.Controller { *
//         index() {
//                 yield this.ctx.render('index.tpl');
//             } *
//             add() {
//                 const data = this.ctx.params.data;
//                 console.log(data);
//                 console.log(this.service.mysql.add(data));
//                 const result = yield this.service.home.add(data);
//                 console.log(result);
//                 this.ctx.body = result;
//             }

//         *
//         del() {
//             const data = this.ctx.params.data;
//             const result = yield this.service.mysql.del(data);
//             this.ctx.body = result;
//         }

//         // 查询
//         *
//         reach() {
//             const data = this.ctx.params.data;
//             const result = yield this.service.mysql.reach(data);
//             console.log(result);
//             this.ctx.body = result;
//         }

//         *
//         update() {
//             const data = this.ctx.params.data;
//             const result = yield this.service.mysql.update(data);
//             this.ctx.body = result;
//         }

//     }
//     return HomeController;
// };
module.exports = app => {
    class HomeController extends app.Controller { *
        index() {
            yield this.ctx.render('index.tpl');
        }
        async info() {
            const data = this.ctx.params.data;
            const result = await this.ctx.service.test.find(data);
            console.log(result);
            this.ctx.body = result;
        }
        async add() {
            const data = this.ctx.params.data;
            const result = await this.ctx.service.test.add(data);
            console.log(result);
            this.ctx.body = result;
        }

        // *
        // del() {
        //     const data = this.ctx.params.data;
        //     const result = yield this.service.mysql.del(data);
        //     this.ctx.body = result;
        // }

        // // 查询
        // *
        // reach() {
        //     const data = this.ctx.params.data;
        //     const result = yield this.service.mysql.reach(data);
        //     this.ctx.body = result;
        // }

        // *
        // update() {
        //     const data = this.ctx.params.data;
        //     const result = yield this.service.mysql.update(data);
        //     this.ctx.body = result;
        // }

    }
    return HomeController;
};