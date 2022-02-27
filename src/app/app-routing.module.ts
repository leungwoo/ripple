import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutYouComponent } from './about-you/about-you.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'about-you', component: AboutYouComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
