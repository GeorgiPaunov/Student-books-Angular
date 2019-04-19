import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../../../core/models/list';
import { ListService } from '../../../core/services/list.service';

@Component({
    selector: 'app-list-all',
    templateUrl: './list-all.component.html',
    styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {
    list$: Observable<Array<List>>;

    constructor(private listService: ListService) { }

    ngOnInit() {
        this.list$ = this.listService.getUsersLists();
    }

    delete(id) {
        this.listService.delete(id).subscribe(() => {
            this.list$ = this.listService.getUsersLists();
        });
    }
}
