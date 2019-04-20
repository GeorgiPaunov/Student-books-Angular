import { Pipe, PipeTransform } from "@angular/core";
import { Book } from '../models/book';

@Pipe({
    name: 'sortBooks'
})
export class SortBooksPipe implements PipeTransform {
    transform(value: Array<Book>) {
        if(value === null) {
            return [];
        }

        return value.sort((a, b) => a.grade - b.grade 
                                    || a.subject.localeCompare(b.subject) 
                                    || a.publisher.localeCompare(b.publisher));
    }
}