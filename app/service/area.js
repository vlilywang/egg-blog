module.exports = app => {
    return class AreaService extends app.Service {
        async findAreaById(aid) {
            const area = await this.app.mysql.get('area', {
                id: aid
            });
            if (!area) {
                return 0;
            } else {
                return area;
            }
        }
        async findAll() {
            const area = await this.app.mysql.select('area');
            // const results = await this.app.mysql.select('area', 'user', {
            //     where: { state: 1, author: ['author1', 'author2'] }, // WHERE 条件
            //     columns: ['author', 'title'], // 要查询的表字段
            //     orders: [['created_at','desc'], ['id','desc']], // 排序方式
            //     limit: 10, // 返回数据量
            //     offset: 0, // 数据偏移量
            //   });
            /***
             * const postId = 1;
const results = await this.app.mysql.query('update posts set hits = (hits + ?) where id = ?', [1, postId]);

=> update posts set hits = (hits + 1) where id = 1;
             */
            return area;
        }


    }
}