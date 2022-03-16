import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = { name: '', paswword: '', remember: false };
  constructor(private dialogRef: MatDialogRef<LoginComponent>) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.user);
    this.dialogRef.close();
  }
}
