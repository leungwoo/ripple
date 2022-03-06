import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from '../components/blogs/blogs.component';
import { EventsComponent } from '../components/events/events.component';
import { ResourcesComponent } from './resources.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent,

    children: [
      { path: 'blogs', component: BlogsComponent },
      { path: 'events', component: EventsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
