import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform{
    transform(value : any[], propertyName : string){
        if(!value || value.length < 2) return value;
        return value.sort((current, other)=>{
            let currentProperty = current[propertyName];
            let otherProperty = other[propertyName];
            if(currentProperty < otherProperty) return -1;
            if(currentProperty > otherProperty) return 1;
            return 0;
        });
    }
}
































// import { Pipe, PipeTransform } from '@angular/core'

// @Pipe({
//     name: 'orderBy'
// })
// export class OrderByPipe implements PipeTransform {
//     transform(value: any[], propertyName: string) {
//         if(!value || value.length < 2) return value;
//         return value.sort((current, other) =>{
//             let thisProperty = current[propertyName];
//             let otherProperty = other[propertyName];
//             if(thisProperty < otherProperty) return -1;
//             if(thisProperty > otherProperty) return 1;
//             return 0;
//         })
//     }
// }