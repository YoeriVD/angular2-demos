import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class IdExistsGuard implements CanActivate{
    constructor(private router : Router) { }
    canActivate(route : ActivatedRouteSnapshot){
        
        let id = route.params['id'];
        if(id && id > 0 && id < 5) return true; //existing element
        this.router.navigate(['']); // redirecting to list
        return false; 
    }
}