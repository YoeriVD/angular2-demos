import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap'
import { AppComponent } from './app.component';
import { ExpensesModule } from './expenses/expenses.module'
import { CommonModule } from './common/common.module'
import { ShellComponent } from './shell.component'
import { AppRoutingModule } from './routing/routes.module'

import { CustomHttpService} from './common/http.service'
function httpClientFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new CustomHttpService(xhrBackend, requestOptions);//xhrBackend, requestOptions);
}

@NgModule({
  declarations: [
    AppComponent, ShellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    ExpensesModule, CommonModule,
    AppRoutingModule    
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'nl-BE'
    },
    {provide : Http, useFactory : httpClientFactory, deps:[XHRBackend, RequestOptions]}
  ],
  bootstrap: [ShellComponent]
})
export class AppModule { }
