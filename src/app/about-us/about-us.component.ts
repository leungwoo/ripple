import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  links = ['ourstory', 'careers'];
  activeLink = this.links[0];
  constructor() {}

  ngOnInit(): void {}
}
