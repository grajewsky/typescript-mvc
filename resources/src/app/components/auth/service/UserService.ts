import { Service } from "../../../../core/service/Service";
import { User } from "../domain/User";

export class UserService extends Service<number, User> {
    protected name: string = "user";
    
    public getName(): string {
        return this.name;
    }

}