import { ServiceResponse } from "./ServiceResponse";
import { Entity } from "../models/Entity";

export abstract class Service<E, T extends Entity<E>> {
    protected name: string;

    public abstract getName(): string;
    
    constructor(private domain: {new(): T}) {

    }
    public list(): Promise<Array<T>> {
        return this.request<Array<T>>(null, null, "GET", Array);
    }
    public get(id: E): Promise<T> {
        return this.request<T>(null,{id:id }, "GET", this.domain);
    }
    public create(entity: T): Promise<T> {
        return this.request<T>(null, entity, "POST", this.domain);
    }

    public edit(entity: T): Promise<T> {
        return this.request<T>("create", entity, "POST", this.domain);
    }
    public update(entity: T): Promise<T> {
        return this.request<T>(null, {id: entity.getId()}, "PUT", this.domain);

    }
    public delete(id: E): Promise<T> {
        return this.request<T>(null, {id: id}, "DELETE", this.domain);
    }


    protected request<T extends Object>( 
        method: string,
        params: object,
        httpType : "GET" | "POST" | "DELETE" | "PUT",
        c: new () => T): Promise<T> {

        let p: Promise<T> = new Promise( (resolve, reject) => {
            console.log(this.parseSlashed(this.objectToArr(params)));
            $.ajax({
                url: this.getName() + "/" + ((method == null ) ? '' : method) + ((httpType == "GET")? this.parseSlashed(this.objectToArr(params)): ''),
                method: httpType,
                dataType: "json",
                data: (httpType != "GET") ? params: null,
                traditional: false
                
            }).done( data => {
                let result = new c();
                Object.assign(result, data);
                resolve(result); 
            }).fail(data => {
                reject(null);
            });
        });
        return p;
    }
    protected objectToArr(param: object): any[] {
        let params : Array<any> = new Array<any>();
        Object.keys(param).forEach(element => {
            params.push(param[element]);
        });
        return params;
    }
    protected parseSlashed(params: any[]): string {
        console.log(params.join("/"));
        return params.join("/");
    }
}