module.exports = app => {
    class HomeController extends app.Controller {
        async findAll() {
            console.log('findall');
            const users = await this.ctx.service.user.findAll();
            this.ctx.body = users;
        }
        async addUser() {
            const result = await this.ctx.service.user.addUser();
            this.ctx.body = result;
        }
        async deleteUser() {
            const result = await this.ctx.service.user.deleteUser();
            this.ctx.body = result;
        }
        async updateUser() {
            console.log('/////////////////////////////////////////');
            // const { ctx } = this;
            // const id = id + ctx.params.id;
            // const user = ctx.request.body;
            // console.log(id);
            // console.log(user);
            const query = this.ctx.query;
            // const result = this.ctx.params.data;
            // // ctx.body = await ctx.service.user.updateUser({id, user});
            const result = await this.ctx.service.user.updateUser(query);
            this.ctx.body = result;
        }
        async findUserByName() {
            const data = this.ctx.params.data;
            const user = await this.ctx.service.user.findUserByName(data);
            this.ctx.body = user;
        }
        async findUserById() {
            const data = this.ctx.params.data;
            const user = await this.ctx.service.user.findUserById(data);
            this.ctx.body = user;
        }
    }
    return HomeController;
};
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