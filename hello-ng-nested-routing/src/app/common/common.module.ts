import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { CustomHttpService } from './http.service'
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe'
import { CurrencySignComponent } from './currency-sign.component'
import { ZoomDirective } from './zoom.directive'

@NgModule({
    imports: [HttpModule],
    exports: [OrderByPipe, FilterPipe, CurrencySignComponent, ZoomDirective],
    declarations: [OrderByPipe, FilterPipe, CurrencySignComponent, ZoomDirective],
    providers: [
        //  { provide: Http, useValue: CustomHttpService }
    ],
})
export class CommonModule { }
