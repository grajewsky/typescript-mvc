import { Provider } from "../../interface/provider/Provider";
import { Middleware } from "../../core/middleware/Middleware";
import { AuthMiddleware } from "../../core/middleware/AuthMiddleware";
import { Middlewares } from "../../core/bucket/Middlewares";

export class MiddlewareProvider implements Provider<Map<string, Middleware>> {

    provide(): Promise<Map<string, Middleware>> {
        let middlewares: Array<Middleware> = [
            new AuthMiddleware()
        ];

        let mapMiddles: Map<string, Middleware> = new Map();
        middlewares.forEach( middle => {
            mapMiddles.set(middle.getLabel(), middle);
            Middlewares.store(middle.getLabel(), middle);
        });
        return Promise.resolve(mapMiddles);
        
    }

}