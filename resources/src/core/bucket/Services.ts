export class Services {
    private static controllers: Map<string, any> = new Map();

    public static store<T>(label:string, ctrl: T) {
        if(!Services.controllers.has(label)) {
            Services.controllers.set(label, ctrl);
        }
    }
    public static get(label:string): any {
        return Services.controllers.get(label);
    }

}