import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AlertModule } from 'ngx-bootstrap/ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ZoomDirective } from './zoom/zoom.directive';
import { WarningComponent } from './warning/warning.component'
import { SkipPipe } from './skip/skip.pipe'
@NgModule({
    imports: [BrowserModule, AlertModule.forRoot(), FormsModule, ReactiveFormsModule],
    exports: [
        BrowserModule, ReactiveFormsModule,
        ZoomDirective, WarningComponent, SkipPipe],
    declarations: [ZoomDirective, WarningComponent, SkipPipe],
    providers: [],
})
export class CommonModule { }
