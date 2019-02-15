import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Resources Management system';
  loginForm: FormGroup;
  submitted = false;
  userdetails:any;
  get form() { 
    return this.loginForm.controls;
   }
  constructor(  private formBuilder: FormBuilder,private authservice:AuthenticationService,private router:Router,private localstorage:LocalStorageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email_id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
 
  OnLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
      }
      this.localstorage.setitem("Email_id",<string>this.loginForm.get("email_id").value);
      this.authservice.login(this.form.email_id.value,this.form.password.value)
      .subscribe(
        userdetails => {
          this.userdetails = userdetails;
          console.log(this.userdetails);
          this.router.navigate(["/resourcelist"])
        },
        error => console.log('http error',error),
      );


  }
}