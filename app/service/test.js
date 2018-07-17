module.exports = app => {
    // 接受请求的参数,查询服务器,返回对应信息
    return class Test extends app.Service {
        async find(data) {
            console.log('***********************************************************');
            const user = await this.app.mysql.get('user', { id: data });
            console.log('this.app.mysql:' + this.app.mysql);
            console.log('user:' + user);
            return { user };
        }
        async add(data) {
                console.log('//////////////////////////////////////////////////////////');
                // const result = yield this.app.mysql.insert('posts', { title: 'Hello World' });
                const result = await this.app.mysql.insert('user', { name: data });
                return result;
            }
            // *
            // add() {
            //     console.log('***********************************************************');
            //     const data = this.ctx.params.data;
    }
}