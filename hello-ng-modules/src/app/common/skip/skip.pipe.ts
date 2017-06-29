import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name : 'skip'
})
export class SkipPipe implements PipeTransform{
    
    transform(value: any[], amountToSkip : number) {
        if(!value) return value;
        return value.slice(amountToSkip, value.length);
    }
}