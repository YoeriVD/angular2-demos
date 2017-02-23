import { NgModule } from '@angular/core';

import { OrderByPipe } from './order-by.pipe';
import {FilterPipe } from './filter.pipe'
import { CurrencySignComponent} from './currency-sign.component'

@NgModule({
    imports: [],
    exports: [OrderByPipe, FilterPipe, CurrencySignComponent],
    declarations: [OrderByPipe, FilterPipe, CurrencySignComponent],
    providers: [],
})
export class CommonModule { }
