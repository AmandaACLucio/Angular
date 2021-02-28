import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../app/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(public formbuilder: FormBuilder, public authService: AuthService, public router: Router) {
    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    })
   }

  ngOnInit() {
  }

  login(form){
    this.authService.login(form.value).subscribe((res) =>{
      console.log(res);
      localStorage.setItem('userToken', res.token);
      localStorage.setItem('user_id',res.user.id);
      this.router.navigate(['/home'])
    })
  }
}
