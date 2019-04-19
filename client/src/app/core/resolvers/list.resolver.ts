import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { List } from '../models/list';
import { ListService } from '../services/list.service';

@Injectable()
export class ListResolver implements Resolve<List> {
    
    constructor(private listService: ListService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'];

        return this.listService.getOne(id);
    }
}