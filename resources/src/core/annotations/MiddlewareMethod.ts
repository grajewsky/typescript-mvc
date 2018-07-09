import { Middlewares } from "../bucket/Middlewares";
import RegisteredMiddlewares from "../bucket/RegisteredMiddlewares";
import { Middleware } from "../middleware/Middleware";

export function MiddlewareMethod(label: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
       RegisteredMiddlewares.store<Middleware>(target.constructor.name + propertyKey, Middlewares.get(label));

    }
}