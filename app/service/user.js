module.exports = app => {
    return class UserService extends app.Service {
        async info(currentUserId) {
            const currentUser = await this.app.mysql.get('user', { id: currentUserId });
            return { currentUser };
        }
        async findUserById(uid) {
            const user = await this.app.mysql.get('user', { id: uid });
            if (!user) {
                return 0;
            } else {
                return { user };
            }
        }
        async findUserByName(uname) {
            const user = await this.app.mysql.get('user', { name: uname });
            if (!user) {
                return '该用户不存在';
            } else {
                return { user };
            }
        }
        async findAll() {
            const users = await this.app.mysql.select('user');
            return users;
        }
        async addUser(data) {
            const now = Date.now();
            if (data.name) {
                const result = await this.app.mysql.insert('user', { name: data.name, data: now });
                const re = 'success, insert id = ' + result.insertId;
                return re;
            } else {
                return 'error';
            }

        }

        async deleteUser(uid) {
            // 该用户不存在
            const findResult = this.findUserById(uid);
            console.log(findResult);
            return findResult;
            // if (findResult == 0) {
            //     return '该用户不存在';
            // } else {
            //     const result = await this.app.mysql.delete('user', { id: uid });
            //     if (result.affectedRows == 0) {
            //         return '删除失败'
            //     } else {
            //         return '删除成功';
            //     }
            // }
            // if (findResult == '该用户不存在') {
            //     return '该用户不存在';
            // } else {
            //     const result = await this.app.mysql.delete('user', { id: uid });
            //     if (result.affectedRows == 0) {
            //         return '删除失败'
            //     } else {
            //         return '删除成功';
            //     }
            // }
            // if (findResult.user !== null) {
            //     const result = await this.app.mysql.delete('user', { id: uid });
            //     if (result.affectedRows == 0) {
            //         return '删除失败'
            //     } else {
            //         return '删除成功';
            //     }
            // } else {
            //     return '该用户不存在';
            // }
            // return findResult;
            // if (findResult !== '该用户不存在') {
            //     const result = await this.app.mysql.delete('user', { id: uid });
            //     if (result.affectedRows == 0) {
            //         return '删除失败'
            //     } else {
            //         return '删除成功';
            //     }
            // } else {
            //     return '该用户不存在';
            // }
        }

        async updateUser(data) {
            if (data.id && data.name) {
                const result = await this.app.mysql.update('user', { id: data.id, name: data.name });
                if (result.changedRows == 1) {
                    return 'success';
                } else if (result.changedRows == 0) {
                    return 'fail';
                }
            } else {
                return 'error';
            }

        }

    }
}










// 'use strict';

// const Service = require('egg').Service;
// const md5 = require('js-md5')
// const {
//     ERROR,
//     SUCCESS,
// } = require('../util/util');
// class UserService extends Service {
//     async create(user) {
//         const {
//             ctx,
//         } = this;
//         try {
//             if (!user.username || !user.password) {
//                 ctx.status = 400;
//                 return Object.assign(ERROR, {
//                     msg: `expected an object with username, password but got: ${JSON.stringify(user)}`,
//                 });
//             }
//             const md5Passwd = md5(user.password)
//             user = Object.assign(user, {
//                 password: md5Passwd,
//             });
//             const userDB = await ctx.model.User.findOne({
//                 where: {
//                     username: user.username,
//                 },
//             });
//             if (!userDB) {
//                 const res = await this.ctx.model.User.create(user);
//                 ctx.status = 201;
//                 return Object.assign(SUCCESS, {
//                     data: res,
//                 });
//             }
//             ctx.status = 406;
//             return Object.assign(ERROR, {
//                 msg: 'username already exists',
//             });

//         } catch (error) {
//             ctx.status = 500;
//             throw (error);
//         }
//     }

//     async del(id) {
//         const {
//             ctx,
//         } = this;
//         try {
//             const user = await ctx.model.User.findById(id);
//             if (!user) {
//                 ctx.status = 400;
//                 return Object.assign(ERROR, {
//                     msg: 'user not found',
//                 });
//             }
//             user.destroy();
//             ctx.status = 200;
//             return Object.assign(SUCCESS, {
//                 data: user,
//             });

//         } catch (error) {
//             ctx.throw(500);
//         }
//     }

//     async update({ id, user }) {
//         const {
//             ctx,
//         } = this;
//         try {
//             const userDB = await ctx.model.User.findById(id);
//             if (!userDB) {
//                 ctx.status = 400;
//                 return Object.assign(ERROR, {
//                     msg: 'user not found',
//                 });
//             }
//             const md5Passwd = md5(user.password)
//             user = Object.assign(user, {
//                 password: md5Passwd,
//             });
//             const res = await userDB.update(user);
//             ctx.status = 200;
//             return Object.assign(SUCCESS, {
//                 data: res,
//             });

//         } catch (error) {
//             ctx.throw(500);
//         }
//     }

//     async login({ username, password }) {
//         const {
//             ctx,
//         } = this;
//         try {
//             const user = await ctx.model.User.findOne({
//                 where: {
//                     username: username.toString()
//                 },
//             });
//             if (!user) {
//                 return Object.assign(ERROR, {
//                     msg: 'username is error',
//                 });
//             }
//             if (md5(password) === user.password) {
//                 ctx.status = 200;
//                 const hash = md5.hex(password)
//                 ctx.cookies.set('token', hash, {
//                     httpOnly: false,
//                     signed: false,
//                     maxAge: 3600 * 1000,
//                     path: '/',
//                 });
//                 ctx.cookies.set('user_id', user.id, {
//                     httpOnly: false,
//                     signed: false,
//                     maxAge: 3600 * 1000,
//                     path: '/',
//                 });
//                 return Object.assign(SUCCESS, {
//                     data: Object.assign(user, {
//                         password: '',
//                     }),
//                 });
//             }
//             return Object.assign(ERROR, {
//                 msg: 'password is error',
//             });


//         } catch (error) {
//             ctx.status = 500;
//             throw (error);
//         }
//     }

//     async find(id) {
//         const {
//             ctx,
//         } = this;
//         try {
//             const user = await ctx.model.User.findById(id, {
//                 include: [{
//                     model: ctx.model.Authority,
//                     attributes: ['id', 'name'],
//                 }],
//             });
//             if (!user) {
//                 ctx.status = 401;
//                 return Object.assign(ERROR, {
//                     msg: 'user not found',
//                 });
//             }
//             ctx.status = 200;
//             return Object.assign(SUCCESS, {
//                 data: user,
//             });

//         } catch (error) {
//             throw (500);
//         }
//     }
// }

// module.exports = UserService;