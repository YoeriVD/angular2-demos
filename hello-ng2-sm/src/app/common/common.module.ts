import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe'
import { CurrencySignComponent } from './currency-sign.component'
import { ZoomDirective } from './zoom.directive'

import { CustomHttpService } from './http.service'

function customHttpServiceFactory(backend: XHRBackend, options: RequestOptions) {
    return new CustomHttpService(backend, options);
}
 
@NgModule({
    imports: [HttpModule],
    exports: [HttpModule, OrderByPipe, FilterPipe, CurrencySignComponent, ZoomDirective],
    declarations: [OrderByPipe, FilterPipe, CurrencySignComponent, ZoomDirective],
    providers: [
        { provide: Http, useFactory: customHttpServiceFactory, deps: [XHRBackend, RequestOptions] }
    ],
})
export class CommonModule { }
