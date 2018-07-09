import { View } from "../../view/View";

export class Views {
    private static views: Map<string, any> = new Map();

    public static store<T>(label:string, ctrl: T) {
        if(!Views.views.has(label)) {
            Views.views.set(label, ctrl);
        }
    }
    public static get(label:string): View {
        return Views.views.get(label);
    }

}