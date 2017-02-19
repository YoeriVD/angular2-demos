import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';

import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { PipesModule } from './common/pipes.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    PipesModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
