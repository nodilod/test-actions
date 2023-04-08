import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StockMovementMenuPage} from './stock-movement-menu.page';
import {CanLeaveGuard} from '@app/guards/can-leave/can-leave.guard';

const routes: Routes = [
    {
        path: '',
        component: StockMovementMenuPage,
        canDeactivate: [CanLeaveGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StockMovementMenuPageRoutingModule {
}
