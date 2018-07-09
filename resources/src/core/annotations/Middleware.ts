import RegisteredMiddlewares from "../bucket/RegisteredMiddlewares";
import { Middlewares } from "../bucket/Middlewares";
import { Middleware as Middle } from "../middleware/Middleware";

export function Middleware(label: string) {
    return function(target: any){
        RegisteredMiddlewares.store<Middle>(target.name, Middlewares.get(label));
    }
}