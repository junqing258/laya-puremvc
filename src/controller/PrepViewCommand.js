import PannelMediator from "view/PannelMediator";
import Pannel from "view/components/Pannel";

export class PrepViewCommand extends puremvc.SimpleCommand {

    /**
     * @override
     */
    execute(note) {
        let pannel = new Pannel();
        let pannelMediator = new PannelMediator('PANNEL_MEDIATOR', pannel);

        this.facade.registerMediator(pannelMediator);
    }

}
