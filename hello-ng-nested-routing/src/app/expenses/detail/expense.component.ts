import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'expense',
    templateUrl: 'expense.component.html'
})
export class ExpenseComponent implements OnInit {
    constructor(
        private router : Router,
        private route: ActivatedRoute,
        private location: Location,
        private http: Http) { }

    ngOnInit() {
    }

    goBack(){
        //this.location.back();
        this.router.navigate(['']); //safe (bookmarks)
    }
}