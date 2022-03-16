import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentNetworkRoutingModule } from './paymentnetwork-routing.module';
import { PaymentNetworkComponent } from './paymentnetwork.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [PaymentNetworkComponent],
  imports: [
    CommonModule,
    PaymentNetworkRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
})
export class PaymentNetworkModule {}
