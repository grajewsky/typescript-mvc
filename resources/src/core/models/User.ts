export class User {
    public readonly login: string;
    public readonly token: string;

    constructor(login: string, token: string) {
        this.login = login;
        this.token = token;
    }
}