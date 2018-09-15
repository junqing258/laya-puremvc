import Pannel from "./components/Pannel";

export default class PannelMediator extends puremvc.Mediator {

    constructor(name, viewComponent) {
        super(name, viewComponent);

        this.registerListeners();

        setTimeout(()=> {
            this.roleProxy = this.facade.retrieveProxy('ROLE_PROXY');
            console.log(this.roleProxy);
        });
    }

    getPannel() {
        return this.viewComponent;
    }

    registerListeners() {

    }

    unregisterListeners() {

    }

}
