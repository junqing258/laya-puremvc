import { PrepViewCommand } from "./PrepViewCommand";
import { PrepModelCommand } from "./PrepModelCommand";

export default class StartupCommand extends puremvc.MacroCommand {

    /**
     * @override
     */
    initializeMacroCommand() {
        this.addSubCommand(PrepViewCommand);
        this.addSubCommand(PrepModelCommand);
    }

}
