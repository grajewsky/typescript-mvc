import { Provider } from "../../interface/provider/Provider";
import { AppConfig } from "../config/AppConfig";
import { Routes } from "../../core/bucket/Routes";

export class ConfigProvider implements Provider<AppConfig> {
    provide(): Promise<AppConfig> {
        let Router = Routes.instance()
        if ( Router != null) {
            Router.navigate(AppConfig.homePage);
        }
        return null;
    }

}