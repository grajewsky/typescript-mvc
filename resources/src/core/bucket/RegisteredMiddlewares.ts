import { Middleware } from "../middleware/Middleware";

export default class RegisteredMiddlewares {
    private static middlewares: Map<string, any> = new Map();

    public static store<T>(label:string, obj: T) {
        if(!RegisteredMiddlewares.middlewares.has(label)) {
            RegisteredMiddlewares.middlewares.set(label, obj);
        }
    }
    public static get(label:string): Middleware {
        return RegisteredMiddlewares.middlewares.get(label);
    }
}