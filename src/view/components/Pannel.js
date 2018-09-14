

export default class Pannel extends Laya.Sprite {

    constructor() {
        super();
        this.init();
    }

    init() {
        this.label = new Laya.Label();
        this.label.dataSource = { color: '#ffffff', fontSize: 40, text: 'Hello PureMvc' };
    }

    destroy() {
        super.destroy();
    }

}
