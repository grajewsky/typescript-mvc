import { Controller } from "../../../core/controller/Controller";
import { Middleware } from "../../../core/annotations/Middleware";
import { Path } from "../../../core/annotations/RouteMap";

export class LoginController extends Controller{

    @Path("/login")
    login() {
    }

}