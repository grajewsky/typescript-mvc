import { Routes } from "./core/bucket/Routes";
import { ControllerProvider } from "./app/provider/ControllerProvider";
import { AjaxProvider } from "./app/provider/AjaxProvider";
import { MainViewProvider } from "./app/provider/MainViewProvider";
import { ConfigProvider } from "./app/provider/ConfigProvider";
import { MiddlewareProvider } from "./app/provider/MiddlewareProvider";

export class App {

    async boot(): Promise<boolean> {


        await new MiddlewareProvider().provide();
        setTimeout( () => {
        Routes.instance();
        [
            new MainViewProvider,
            new AjaxProvider,
            new ControllerProvider,
            new ConfigProvider,

        ].forEach( async provider => {
            await provider.provide();
        });
        },100);
        return Promise.resolve(true);


    }
}
new App().boot();