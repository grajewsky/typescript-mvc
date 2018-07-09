declare let Navigo: any;

export class Routes {
    private static routes: Array<string> = new Array();
    private static router: any = null;
    public static instance() {
        if(Routes.router == null) {        
            var root = null;
            var useHash = true; // Defaults to: false
            var hash = '#'; // Defaults to: '#'
            Routes.router = new Navigo(root, useHash, hash);
        }
        return Routes.router;

    }
    public static storage(label: string) {
        Routes.routes.push(label);
    }
}
