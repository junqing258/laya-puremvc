import NotificationNames from "constants/NotificationNames";
import StartupCommand from "controller/StartupCommand";

export default class ApplicationFacade extends puremvc.Facade {

    startup() {
        this.sendNotification(NotificationNames.STARTUP);
    }

    initializeController() {
        super.initializeController();
        this.registerCommand(NotificationNames.STARTUP, StartupCommand); // this.removeCommand
    }

    static getInstance() {
        if (!puremvc.Facade.instance) {
            puremvc.Facade.instance = new ApplicationFacade('app');
        }
        return puremvc.Facade.instance;
    }

}
