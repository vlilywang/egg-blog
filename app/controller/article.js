module.exports = app => {
    class ArticleController extends app.Controller {
        async findAll() {
            const query = this.ctx.query;
            const articles = await this.ctx.service.article.findAll(query);
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
            const article = await this.ctx.service.article.findArticleById(id);
            this.ctx.body = article;
        }
        async getLast() {
            console.log('////////////////////////////////////////////////////////////')
            const id = this.ctx.params.id;
            console.log(id);
            const article = await this.ctx.service.article.findLastArticleById(id);
            console.log(article);
            this.ctx.body = article;
        }
    }
    return ArticleController;
};