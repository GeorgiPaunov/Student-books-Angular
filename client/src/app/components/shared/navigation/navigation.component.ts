import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    username: string;

    constructor(public authService: AuthenticationService) { }

    ngOnInit() {
        this.username = localStorage.getItem('username');
    }

    logout() {
        this.authService.logout();
        this.username = '';
    }
}
