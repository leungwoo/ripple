import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurstoryComponent } from '../components/ourstory/ourstory.component';
import { AboutUsComponent } from './about-us.component';
import { CareersComponent } from '../components/careers/careers.component';
const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    children: [
      { path: 'ourstory', component: OurstoryComponent },
      { path: 'careers', component: CareersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
