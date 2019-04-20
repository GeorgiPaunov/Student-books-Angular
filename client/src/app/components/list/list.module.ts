import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ListResolver } from '../../core/resolvers/list.resolver';

import { ListCreateComponent } from './list-create/list-create.component';
import { ListAllComponent } from './list-all/list-all.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { ListItemComponent } from './list-item/list-item.component';

const routes: Routes = [
    { path: 'create', component: ListCreateComponent },
    { path: 'myLists', component: ListAllComponent },
    { path: 'details/:id', component: ListDetailsComponent, resolve: { list: ListResolver } }
];

@NgModule({
    declarations: [
        ListCreateComponent,
        ListAllComponent,
        ListDetailsComponent,
        ListItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    providers: [
        ListResolver
    ]
})
export class ListModule { }
