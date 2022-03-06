import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, MatTabsModule, AboutUsRoutingModule],
})
export class AboutUsModule {}
