import { Component, Input } from "@angular/core";

@Component({
    selector : 'warning',
    templateUrl: './warning.component.html'
})
export class WarningComponent{
    @Input('show')showWarning = true;
    @Input()message : string;
}
