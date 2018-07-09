import { Middleware } from "../middleware/Middleware";

export class Middlewares {
    private static middlewares: Map<string, any> = new Map();

    public static store<T>(label:string, obj: T) {
        if(!Middlewares.middlewares.has(label)) {
            Middlewares.middlewares.set(label, obj);
        }
    }
    public static get(label:string): Middleware {
        return Middlewares.middlewares.get(label);
    }
}