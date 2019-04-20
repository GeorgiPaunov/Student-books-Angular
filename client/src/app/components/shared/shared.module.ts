import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortBooksPipe } from '../../core/pipes/book.pipe';
import { SortListsPipe } from '../../core/pipes/list.pipe';
import { TotalPricePipe } from '../../core/pipes/price.pipe';

@NgModule({
    declarations: [
        SortBooksPipe,
        SortListsPipe,
        TotalPricePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SortBooksPipe,
        SortListsPipe,
        TotalPricePipe
    ]
})
export class SharedModule { }
