import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginApiService } from '../../app/login-api.service';
import { AppComponent } from "../../app/app.component";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  user: string;



  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginApiService,
    private router: Router,
    private app: AppComponent
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  // for accessing to form fields
  get fval() { return this.loginForm.controls; }

  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.fval.email.value);
    this.loading = true;
    this.user = this.fval.email.value;
    this.loginService.login(this.fval.email.value, this.fval.password.value)
      .subscribe(
        data => {

          if (data == "success") {
            this.app.onLogin(this.user);
            console.log("router works")
            this.router.navigate(['/dashboard']);
          }
        },
        error => {
          this.error = error.message;
          this.loading = false;
        });
  }

}
