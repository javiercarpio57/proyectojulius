import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
import { User } from '../../interfaces/user';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: FormControl = new FormControl('', Validators.required);
  public password: FormControl = new FormControl('', Validators.required);
  form: FormGroup = new FormGroup({
    email: this.email,
    password: this.password,
  });
  title = 'julius';


  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private route: Router,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.spinnerService.GuardarLoading(true);
    console.log(this.email.value, this.password.value);

    const user: User = {
      email: this.email.value,
      password: this.password.value
    }
    
    this.accountService.login(user)
      .then(() => {
        console.log('EXITO');
        this.accountService.user = {
          email: this.email.value,
        }

        this.route.navigate(['/menu']);
      })
      .catch(
        err => this.snackBar.open(
          err.error,
          'OK', { duration: 5000 }
        )
      )
      .finally(
        () => this.spinnerService.GuardarLoading(false)
      )
  }
}
