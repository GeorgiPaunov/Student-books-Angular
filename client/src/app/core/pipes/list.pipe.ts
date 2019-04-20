import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list';

@Pipe({
    name: 'sortLists'
})
export class SortListsPipe implements PipeTransform {
    transform(value: Array<List>) {
        if(value === null) {
            return [];
        }

        return value.sort((a, b) => a.title.localeCompare(b.title));
    }
}