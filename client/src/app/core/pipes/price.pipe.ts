import { Pipe, PipeTransform } from "@angular/core";
import { Book } from '../models/book';

@Pipe({
    name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {
    transform(value: Array<Book>) {
        return value.reduce((acc, sb) => acc + sb.price, 0).toFixed(2);
    }
}