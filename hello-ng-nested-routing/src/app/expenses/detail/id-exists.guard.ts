import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RouterModule, Router, Route, ActivatedRouteSnapshot } from '@angular/router';
import { ExpenseService } from '../expense.service';

@Injectable()
export class ExistingIdGuard implements CanActivate {
    constructor(private router: Router, private expenseService: ExpenseService) {
    }

    canActivate(route: ActivatedRouteSnapshot) {
        let id = +route.params['id'];
        console.log('canActivate called', id);
        return this.expenseService.getExpense(id).map(expense => {
            if (expense) {
                return true;
            } this.router.navigate(['/expense', 1]);
            return false;
        });
    }
}