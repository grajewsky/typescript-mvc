import { Provider } from "../../interface/provider/Provider";

export class AjaxProvider implements Provider<JQueryAjaxSettings> {
    async provide(): Promise<JQueryAjaxSettings> {
        let promise = new Promise( (resolve, reject) => {
             let ajax = $.ajaxSetup({
                headers: {
                    "X-Token": "test"
                }
            });
            resolve(ajax);
        })
        return promise;

    }
}