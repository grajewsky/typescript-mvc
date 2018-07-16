import { Middleware } from "./Middleware";

export class AuthMiddleware extends Middleware {
    
    public validate(): Promise<boolean> {
        // todo
        return Promise.resolve(true);
    }
    constructor() {
        super("auth");
    }

}