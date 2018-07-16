export class Services {
    private static services: Map<string, any> = new Map();

    public static store<T>(label:string, ctrl: T) {
        if(!Services.services.has(label)) {
            Services.services.set(label, ctrl);
        }
    }
    public static get(label:string): any {
        return Services.services.get(label);
    }

}