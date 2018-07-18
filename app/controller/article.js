module.exports = app => {
    class ArticleController extends app.Controller {
        async findAll() {
            const articles = await this.ctx.service.article.findAll();
            this.ctx.body = articles;
        }
        async addArticle() {
            const query = this.ctx.query;
            const result = await this.ctx.service.article.addArticle(query);
            this.ctx.body = result;
        }
        async deleteArticle() {
            const id = this.ctx.params.id;
            const result = await this.ctx.service.article.deleteArticle(id);
            this.ctx.body = result;
        }
        async updateArticle() {
            const query = this.ctx.query;
            const result = await this.ctx.service.article.updateUser(query);
            this.ctx.body = result;
        }
        async getDetail() {
            // const query = this.ctx.query; // 是路径中？后面的 参数不能重复，若重复只取第一个
            const id = this.ctx.params.id; // 是路径中‘/’后面的
            const article = await this.ctx.service.article.getDetail(id);
            this.ctx.body = article;
        }
    }
    return ArticleController;
};