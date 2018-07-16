import { Entity } from "../../../../core/models/Entity";

export class User implements Entity<number> {
    
    id: number;
    login: string;
    email: string;

    getId(): number {
        return this.id;
    }

}