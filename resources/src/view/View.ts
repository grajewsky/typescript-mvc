import * as $ from "jquery";
import { AppConfig } from "../app/config/AppConfig";
import { TemplateOptions } from "../core/template/TemplateOptions";
import { TemplatesManager } from "../core/bucket/TemplatesManager";

export abstract class View {
    protected container: JQuery<HTMLElement>;

    public element(element: string): Promise<JQuery<HTMLElement>>{
        return  Promise.resolve($(element)); 
    }

    public getTemplateUrl(url: string, settings?: TemplateOptions): Promise<JQuery<HTMLElement>> {
        let p: Promise<JQuery<HTMLElement>>;

        p = new Promise<JQuery<HTMLElement>>( (resolve, reject) => {

            let resultElement: JQuery<HTMLElement> = $("<div></div>");
            if(TemplatesManager.template.has(url)) {
                resolve(TemplatesManager.template.get(url));
            } 
            else {
                $.ajax({
                    method: "GET",
                    url: AppConfig.viewPath + url
                }).done( (data) => {
                    let el: JQuery<HTMLElement> = resultElement.html(data).children();
                    if (settings != null) {
                        if (settings.cache == true) {
                            TemplatesManager.template.set(url, el);
                        }
                    } else {
                        TemplatesManager.template.set(url, el);
                    }

                    resolve(el);
                });
            }

        });
        return p;

    }
    public abstract render(): void;

    public append(_handler: string | JQuery<HTMLElement>, container?: JQuery<HTMLElement>) {
        let handler: JQuery<HTMLElement>;

        if(_handler instanceof String) {
            handler = $(_handler.toString());
        }
        
        handler.append(
            (container != null) ? 
                container 
            : (this.container != null) ? this.container : null
        );
    }
}