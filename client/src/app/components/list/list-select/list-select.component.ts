import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../../../core/models/list';
import { ListService } from '../../../core/services/list.service';

@Component({
    selector: 'app-list-select',
    templateUrl: './list-select.component.html',
    styleUrls: ['./list-select.component.css']
})
export class ListSelectComponent implements OnInit {
    list$: Observable<Array<List>>;
    @ViewChild('select') select: ElementRef;

    constructor(private listService: ListService) { }

    ngOnInit() {
        this.list$ = this.listService.getUsersLists();
    }
}
