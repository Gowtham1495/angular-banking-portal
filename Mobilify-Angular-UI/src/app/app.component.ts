import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginApiService } from './login-api.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ConfirmDialogModel, ConfirmpopupComponent } from './confirmpopup/confirmpopup.component';
import { AccountsComponent } from './accounts/accounts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Mo-UI';
  private isLogged: boolean;
  value: string;
  user: string;
  result: string;
  private accountcomp: AccountsComponent;
  constructor(
    private router: Router,
    private login: LoginApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this.isLogged = false;

  }

  onLogin(value) {
    this.isLogged = true;
    this.user = value;
    console.log("userrrrrr" + this.user)
  }

  confirmDialog(): void {
    const message = `Are you sure you want to logout?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmpopupComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result) {
        this.isLogged = false;
        this.router.navigate(['']);
      }
    });
  }
}
