import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListSelectComponent } from '../list/list-select/list-select.component';
import { ListService } from '../../core/services/list.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    @ViewChild('listSelect') listSelect: ListSelectComponent; 

    constructor(private authService: AuthenticationService, 
        private listService: ListService, public toastr: ToastrService) { }

    ngOnInit() {
    }

    addBookToList(bookId) {
        const listId = this.listSelect.select.nativeElement.value;
        
        if(!listId) {
            this.toastr.error('Select a valid list!', 'Error!')
        } else {
            const data = { listId, bookId };

            this.listService.addBook(data).subscribe();
        }
    }
}
