import { Controller } from "../../../core/controller/Controller";
import { Path } from "../../../core/annotations/RouteMap";
import { View } from "../../../view/View";
import { HomeView } from "./Home.view";
import { AuthMiddleware } from "../../../core/middleware/AuthMiddleware";
export class HomeController extends Controller {
    protected view: HomeView;

    constructor(){
        super();
        this.view = new HomeView();
        this.middlewares = [new AuthMiddleware()];

    }
    @Path("/home")
    home() {
        this.view.getTemplateUrl("/home:index");
        this.view.render();
    }
    @Path("/redirect_example")
    redirect_example() {
        this.getRouter().navigate("/home");
    }
    @Path("/about")
    async about() {
        //ten route nie powinnien być obsługiowany ofkors przez home
        let el: JQuery<Element> = await this.view.element("#aboutTab");
        el.html("change html content");
    }
}