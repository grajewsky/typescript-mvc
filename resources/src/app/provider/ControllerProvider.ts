import { Provider } from "../../interface/provider/Provider";
import { Controller } from "../../core/controller/Controller";
import { HomeController } from "../components/home/Home.controller";
import { LoginController } from "../components/login/Login.controller";

export class ControllerProvider implements Provider<Controller[]> {
    async provide(): Promise<Controller[]> {
        return [
            new HomeController(),
            new LoginController()
        ]
    }

}