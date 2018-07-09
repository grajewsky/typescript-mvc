import { Provider } from "../../interface/provider/Provider";
import { TemplatesManager } from "../../core/bucket/TemplatesManager";

export class MainViewProvider implements Provider<JQuery<HTMLElement>> {
    provide(): Promise<JQuery<HTMLElement>> {
        if(TemplatesManager.mainContainer  == null) {
            TemplatesManager.mainContainer = $("#"+ $(document.body).data("main")); 
        }
        return Promise.resolve(TemplatesManager.mainContainer);
    }

}