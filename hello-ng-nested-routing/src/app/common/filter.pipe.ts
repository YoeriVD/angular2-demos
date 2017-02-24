import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'filterBy',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(value: any[], filterFn: (item: any) => boolean) {
        if (!value || value.length < 2) return value;
        return value.filter((item) => filterFn(item));
    }
}