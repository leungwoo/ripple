import { Component } from '@angular/core';
import { AboutYou } from './about-you';

@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.scss'],
})
export class AboutYouComponent {
  public show: boolean = false;
  public customer: AboutYou = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: null,
    occupation: '',
  };
  public onSubmit(): void {}
}
