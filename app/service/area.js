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
            console.log(area);
            return area;
        }


    }
}