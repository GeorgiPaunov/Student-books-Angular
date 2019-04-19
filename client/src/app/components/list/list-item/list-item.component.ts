import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../core/models/book';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
    @Input() book: Book;
    @Output() idToRemoveEmitter: EventEmitter<string> = new EventEmitter<string>();

    emitId() {
        this.idToRemoveEmitter.emit(this.book._id);
    }
}
