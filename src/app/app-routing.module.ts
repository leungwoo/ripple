import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', redirectTo: 'paymentnetwork', pathMatch: 'full' },

  {
    path: 'resources',
    loadChildren: () =>
      import('./resources/resources.module').then((m) => m.ResourcesModule),
  },

  {
    path: 'paymentnetwork',
    loadChildren: () =>
      import('./paymentnetwork/paymentnetwork.module').then(
        (m) => m.PaymentNetworkModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./about-us/about-us.module').then((m) => m.AboutUsModule),
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
