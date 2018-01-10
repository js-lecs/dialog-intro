import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filter',
    pure: true
})
export class FilterPipe implements PipeTransform {
    transform(value: any, filterString) {

        return value.filter((data: any) => {
            return data['description'].match('^.*' + filterString + '.*$', 'i');
        });
    }

}
