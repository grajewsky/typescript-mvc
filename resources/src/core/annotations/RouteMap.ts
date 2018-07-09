import { Routes } from "../bucket/Routes";
import { Controllers } from "../bucket/Controllers";
import RegisteredMiddlewares from "../bucket/RegisteredMiddlewares";
import { Middleware } from "../middleware/Middleware";
import { Controller } from "../controller/Controller";

export function Path(path: string, middlewares?: Middleware[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        if (target[propertyKey] != null) {
            let _target: Controller = new target.constructor;
            Controllers.store(target.constructor.name, _target);
            let options =  {
                before: function(done, params) {
                    let promises: Array<Promise<boolean>> = new Array();
                    if (middlewares != null) {
                    
                        middlewares.forEach(  middle => {
                            promises.push(middle.validate());
                        });
                    }
                    if(_target.getMiddlewares() != null) {
                        _target.getMiddlewares().forEach(  middle => {
                            promises.push(middle.validate());
                        });
                    }
                    Promise.all(promises).then( values => {
                        let find: boolean = values.find( (el: boolean, index: number): boolean => {
                            return el == false;
                        });
                        if(find != null) {
                            done(false);
                        }else {
                            done();
                        }
                    });
                    


                }
            };
            Routes.instance().on(path, target[propertyKey].bind(Controllers.get(target.constructor.name)), options).resolve();
        }
        
    }
}