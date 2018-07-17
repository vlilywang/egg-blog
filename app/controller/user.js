// // const Controller = require('egg').Controller;

// // // class UserController extends Controller {
// // //     async info() {
// // //         const ctx = this.ctx;
// // //         const userId = ctx.params.id;
// // //         const user = await ctx.service.user.find(userId);
// // //         ctx.body = user;
// // //         console.log(user);
// // //     }
// // // }
// // class UserController extends Controller {
// //     async info() {
// //         const ctx = this.ctx;
// //         const userId = ctx.params.id;
// //         const user = await ctx.service.user.find(userId);
// //         console.log(user);
// //         ctx.body = user;
// //     }
// // }
// // module.exports = UserController;
// class UserController extends Controller {
//     async create() {
//         const {
//             ctx,
//         } = this;
//         ctx.body = await ctx.service.user.create(ctx.request.body);
//     }

//     async destroy() {
//         const {
//             ctx,
//         } = this;
//         const id = +ctx.params.id;
//         ctx.body = await ctx.service.user.del(id);
//     }

//     async update() {
//         const {
//             ctx,
//         } = this;
//         const id = +ctx.params.id;
//         const user = ctx.request.body;
//         ctx.body = await ctx.service.user.update({
//             id,
//             user,
//         });
//     }

//     async login() {
//         const {
//             ctx,
//         } = this;
//         const {
//             username,
//             password,
//         } = ctx.request.body;
//         ctx.body = await ctx.service.user.login({
//             username,
//             password,
//         });
//     }

//     async find() {
//         const {
//             ctx,
//         } = this;
//         const id = +ctx.params.id;
//         ctx.body = await ctx.service.user.find(id);
//     }
// }

// module.exports = UserController;