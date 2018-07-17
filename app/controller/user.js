module.exports = app => {
    class HomeController extends app.Controller {
        async findAll() {
            const users = await this.ctx.service.user.findAll();
            this.ctx.body = users;
        }
        async addUser() {
            const query = this.ctx.query;
            const result = await this.ctx.service.user.addUser(query);
            this.ctx.body = result;
        }
        async deleteUser() {
            const id = this.ctx.params.id;
            const result = await this.ctx.service.user.deleteUser(id);
            this.ctx.body = result;
        }
        async updateUser() {
            const query = this.ctx.query;
            const result = await this.ctx.service.user.updateUser(query);
            this.ctx.body = result;
        }
        async findUserByName() {
            const name = this.ctx.params.name; // 是路径中‘/’后面的
            const user = await this.ctx.service.user.findUserByName(name);
            this.ctx.body = user;
        }
        async findUserById() {
            // const query = this.ctx.query; // 是路径中？后面的 参数不能重复，若重复只取第一个
            const id = this.ctx.params.id; // 是路径中‘/’后面的
            const user = await this.ctx.service.user.findUserById(id);
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