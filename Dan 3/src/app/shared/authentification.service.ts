import { Injectable } from "@angular/core";
import { User } from "../users/user/user.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthentificationService {

    constructor(private http: HttpClient) { }



    userList: Array<User>;

    login(username: string) {
         this.http.get('api/users').subscribe(value => {
            this.userList = value as Array<User>;
            let user = this.userList.find(x => x.name == username);
            return this.setUserInfo(user);
        });
    }

    setUserInfo(user: User): boolean {
        if (user){
            sessionStorage.setItem('user', JSON.stringify(user));

            return true;
        }

        return false;
    }

    getUserInfo(): User {
        let user = JSON.parse(sessionStorage.getItem('user')) as User;

        return user;
    }
}