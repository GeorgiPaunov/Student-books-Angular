import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../../core/models/list';
import { ListService } from '../../../core/services/list.service';

@Component({
    selector: 'app-list-details',
    templateUrl: './list-details.component.html',
    styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
    list: List;
    listId: string;

    constructor(private route: ActivatedRoute, private listService: ListService) { }

    ngOnInit() {
        this.list = this.route.snapshot.data['list']['list'];
        this.listId = this.list._id;
    }

    removeBookFromList(bookId) {
        const listId = this.list._id;
        const data = { listId, bookId };

        this.listService.removeBook(data).subscribe(() => {
            this.listService.getOne(this.listId)
                .subscribe((listData) => {
                    this.list = listData['list'];
                });
        });
    }
}
