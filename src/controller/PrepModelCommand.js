import RoleProxy from "model/RoleProxy";


export class PrepModelCommand extends puremvc.SimpleCommand {

    execute(note) {
        var roleProxy = new RoleProxy('ROLE_PROXY', this.generateRoles());

        this.facade.registerProxy(roleProxy);
    }

    generateRoles() {
        return [];
    }

}
