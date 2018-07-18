module.exports = app => {
    return class CommentService extends app.Service {
        async findCommentById(aid) {
            const comment = await this.app.mysql.get('comment', {
                id: aid
            });
            if (!comment) {
                return 0;
            } else {
                return comment;
            }
        }

        async addComment(data) {
            const now = Date.now();
            if (data.title && data.content) {
                const result = await this.app.mysql.insert('comment', {
                    title: data.name,
                    content: data.content,
                    publishtime: now
                });
                const re = 'success, insert id = ' + result.insertId;
                return re;
            } else {
                return 'error';
            }
        }

        async deleteComment(aid) {
            // 该用户不存在
            const findResult = this.findCommentById(aid);
            console.log(findResult);
            return findResult;
        }

        // state 修改为0 不可见
        async updateArticle(data) {
            if (data.id) {
                const findResult = this.findCommentById(aid);
                console.log(findResult);
                if (findResult) { // 这个判断
                    const result = await this.app.mysql.update('comment', {
                        id: data.id,
                        state: 0
                    });
                    if (result.changedRows == 1) {
                        return 'success';
                    } else if (result.changedRows == 0) {
                        return 'fail';
                    }
                } else {
                    return '该文章不存在';
                }

            } else {
                return '请选择文章';
            }

        }

    }
}