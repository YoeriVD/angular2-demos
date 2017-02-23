import { NgModule } from '@angular/core';

import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe'
import { CurrencySignComponent } from './currency-sign.component'
import { ZoomDirective } from './zoom.directive'

@NgModule({
    imports: [],
    exports: [OrderByPipe, FilterPipe, CurrencySignComponent, ZoomDirective],
    declarations: [OrderByPipe, FilterPipe, CurrencySignComponent, ZoomDirective],
    providers: [],
})
export class CommonModule { }
