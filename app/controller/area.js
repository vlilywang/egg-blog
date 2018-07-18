module.exports = app => {
    class AreaController extends app.Controller {
        async findAll() {
            const areas = await this.ctx.service.area.findAll();
            this.ctx.body = areas;
            // await this.ctx.render('userlist.tpl', { areaslist: areas });
        }
        async findAreaById() {
            const id = this.ctx.params.id; // 是路径中‘/’后面的
            const article = await this.ctx.service.area.findAreaById(id);
            this.ctx.body = article;
        }
    }
    return AreaController;
};