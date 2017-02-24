import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { JsonComponent } from './json.component';
import { StringComponent } from './string.component';
import { ExpenseComponent } from './expense.component';
import { ExistingIdGuard } from './id-exists.guard'

const detailRoutes : Route[] = [
    {
        path:'expense/:id',
        component : ExpenseComponent,
        canActivate : [ExistingIdGuard],
        children: [
            {
                path : 'json',
                component : JsonComponent
            },
            {
                path : 'string',
                component : StringComponent
            },
            {
                path : '',
                pathMatch: 'full',
                redirectTo: 'json'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(detailRoutes)],
    exports: [RouterModule],
    providers: [ExistingIdGuard]
})
export class DetailRoutingModule { }
