import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paymentnetwork',
  templateUrl: './paymentnetwork.component.html',
  styleUrls: ['./paymentnetwork.component.scss'],
})
export class PaymentNetworkComponent {
  public show: boolean = false;
  public customerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    dateOfBirth: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required),
  });
  public onSubmit(form: FormGroup): void {}
}
