import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthentificationService } from "../authentification.service";
import { RolesEnum } from "../roles.enum";

@Injectable()
export class AuthorizationGuard implements CanActivate{

    constructor(
        private auth: AuthentificationService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let user = this.auth.getUserInfo();

        let allowedRoles = route.data['roles'] as Array<RolesEnum>;

        let allowed = allowedRoles.find(x => x == user.role) != null;

        if (allowed){
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}