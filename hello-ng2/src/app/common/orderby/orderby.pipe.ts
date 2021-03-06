import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy',
    pure: true
})

export class OrderByPipe implements PipeTransform {
    transform(value: any[], ...args: any[]): any {
        if(!value) return value;
        //console.debug("sorting on", args[0]);
        return value.sort((current, next) =>{
            const currentProperty = current[args[0]];
            const nextProperty = next[args[0]];
            if(currentProperty < nextProperty) return -1;
            if(currentProperty > nextProperty) return 1;
            return 0;
        })
    }
}