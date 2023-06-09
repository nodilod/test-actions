import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DemandeLivraisonArticleTakePage} from './demande-livraison-article-take.page';
import {CanLeaveGuard} from '@app/guards/can-leave/can-leave.guard';

const routes: Routes = [
    {
        path: '',
        component: DemandeLivraisonArticleTakePage,
        canDeactivate: [CanLeaveGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DemandeLivraisonArticleTakePageRoutingModule {
}
