import { Routes } from "../bucket/Routes";
import { View } from "../../view/View";
import { Middleware } from "../middleware/Middleware";

export abstract class Controller {
    private route;
    protected view: View;
    protected middlewares: Middleware[];

    constructor() {
        this.route = Routes.instance();
    }
    protected getRouter() {
        return this.route;
    }
    public getMiddlewares(): Middleware[] {
        return this.middlewares;
    }

}