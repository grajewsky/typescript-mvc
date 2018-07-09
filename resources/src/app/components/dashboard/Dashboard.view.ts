import { View } from "../../../view/View";
import { Middleware } from "../../../core/annotations/Middleware";

@Middleware("auth")
export class DashboardView extends View {
    
    public render(): void {

    }

}