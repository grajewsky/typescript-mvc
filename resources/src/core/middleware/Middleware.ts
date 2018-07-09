import { Labelable } from "../interface/Labelable";

export abstract class Middleware implements Labelable{
    private label: string;

    constructor(label: string) {
        this.label = label;
    }
    getLabel(): string {
        return this.label;
    }
    public abstract validate(): Promise<boolean>;

}