import { Controller } from "../../../core/controller/Controller";
import { Path } from "../../../core/annotations/RouteMap";
import { HomeView } from "./Home.view";
import { AuthMiddleware } from "../../../core/middleware/AuthMiddleware";
import { User } from "../auth/domain/User";
import { UserService } from "../auth/service/UserService";


export class HomeController extends Controller {
    protected view: HomeView;

    protected userService: UserService;

    constructor(){
        super();
        this.userService = new UserService(User);
        this.view = new HomeView();
        this.middlewares = [new AuthMiddleware()];

    }
    @Path("/home")
    async home() {
        this.view.getTemplateUrl("/home:index");
        let user: User = await this.userService.get(1);
        console.log(user);
        
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