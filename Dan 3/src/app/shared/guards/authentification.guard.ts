import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthentificationService } from "../authentification.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthentificationGuard implements CanActivate{

    constructor(
        private auth: AuthentificationService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        let user = this.auth.getUserInfo();

        if(user && user.active){
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

}