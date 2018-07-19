module.exports = app => {
    return class ArticleService extends app.Service {
        async findArticleById(aid) {
            const article = await this.app.mysql.get('tb_news_doc_info', {
                fl_sid: aid
            });
            if (!article) {
                return 0;
            } else {
                return article;
            }
        }
        async findLastArticleById(id) {
                const article = await this.app.mysql.query(`select * from tb_news_doc_info where fl_sid = (select fl_sid from tb_news_doc_info where fl_sid < ${id} order by fl_publish_time desc limit 1`);
                console.log(article);
                // select * from tb_news_doc_info where fl_sid = 
                // (select fl_sid from tb_news_doc_info where fl_sid < 539303 order by fl_publish_time desc limit 1);   
                return article;
            }
            // async findUserByName(uname) {
            //     const user = await this.app.mysql.get('user', { name: uname });
            //     if (!user) {
            //         return '该用户不存在';
            //     } else {
            //         return { user };
            //     }
            // }
        async findAll(data) {
            // const articles = await this.app.mysql.select('article', { state: 1 });
            // const articles = await this.app.mysql.query('SELECT article.title, article.content, article.boardname, article.publishtime, user.name, user.headimg FROM article, user WHERE article.userid = user.id AND article.state=1 ORDER BY publishtime desc');
            const pageSize = data.pageSize;
            let start = (data.page - 1) * data.pageSize;
            const articles = await this.app.mysql.query('select * from tb_news_doc_info limit ' + start + ',' + pageSize);
            const ta = await this.app.mysql.query('SELECT COUNT(*) FROM tb_news_doc_info ');
            const totalAmount = ta[0]['COUNT(*)'];
            const totalPage = Math.ceil(totalAmount / pageSize)
            let resulta = {};
            resulta.totalAmount = totalAmount;
            resulta.data = articles;
            resulta.totalPage = totalPage;
            const result = JSON.stringify({ msg: '操作成功', status: '100', totalPage: totalPage, data: articles, totalAmount: totalAmount })
            return result;
        }

        async addArticle(data) {
            const now = Date.now();
            if (data.title && data.content) {
                const result = await this.app.mysql.insert('article', {
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

        async deleteArticle(aid) {
            // 该用户不存在
            const findResult = this.findArticleById(aid);
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

        // state 修改为0 不可见
        async updateArticle(data) {
            if (data.id) {
                const findResult = this.findArticleById(aid);
                console.log(findResult);
                if (findResult) { // 这个判断
                    const result = await this.app.mysql.update('article', {
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