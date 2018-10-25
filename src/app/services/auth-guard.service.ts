import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {LoginUserService} from './login-user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private logService: LoginUserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.logService.status().then((status: boolean) => {
      console.log(status);
      return status;
    });
  }
}
