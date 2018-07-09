import { Controller } from "../controller/Controller";

export class Controllers {
    private static controllers: Map<string, any> = new Map();

    public static store<T>(label:string, ctrl: T) {
        if(!Controllers.controllers.has(label)) {
            Controllers.controllers.set(label, ctrl);
        }
    }
    public static get(label:string): Controller {
        return Controllers.controllers.get(label);
    }

}