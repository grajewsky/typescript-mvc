export class TemplatesManager {
    public static mainContainer: JQuery<HTMLElement>;
    public static template: Map<string, JQuery<HTMLElement>> = new Map<string, JQuery<HTMLElement>>();
    public static html: Map<string, string> = new Map();
}