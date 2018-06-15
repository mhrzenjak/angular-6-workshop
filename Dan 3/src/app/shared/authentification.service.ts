import { Injectable } from "@angular/core";
import { User } from "../users/user/user.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthentificationService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
    
    userList: Array<User>;

    login(username: string): Observable<boolean> {
         return this.http.get('api/users').pipe(map(value => {
            this.userList = value as Array<User>;
            let user = this.userList.find(x => x.name == username);
            return this.setUserInfo(user);
        }));
    }

    private setUserInfo(user: User): boolean {
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

    logout(): void {
        sessionStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}