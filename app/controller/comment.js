module.exports = app => {
    class CommentController extends app.Controller {
        async addComment() {
            const query = this.ctx.query;
            const result = await this.ctx.service.comment.addComment(query);
            this.ctx.body = result;
        }
        async deleteComment() {
            const id = this.ctx.params.id;
            const result = await this.ctx.service.comment.deleteComment(id);
            this.ctx.body = result;
        }
        async findCommentById() {
            const id = this.ctx.params.id; // 是路径中‘/’后面的
            const comment = await this.ctx.service.comment.findCommentById(id);
            this.ctx.body = comment;
        }
        async findCommentsByArticleId() {
            const query = this.ctx.query;
            const comments = await this.ctx.service.comment.findCommentsByArticleId(query);
            this.ctx.body = comments;
        }
    }
    return CommentController;
};