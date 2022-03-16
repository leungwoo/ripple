import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineofcreditComponent } from '../components/lineofcredit/lineofcredit.component';
import { RipplenetComponent } from '../components/ripplenet/ripplenet.component';
import { PaymentNetworkComponent } from './paymentnetwork.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentNetworkComponent,
    children: [
      { path: 'ripplenet', component: RipplenetComponent },
      { path: 'lineofcredit', component: LineofcreditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentNetworkRoutingModule {}
