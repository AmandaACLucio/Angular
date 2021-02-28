import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../app/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})


export class CadastroPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder, public authService: AuthService, public router: Router) {
    this.registerForm = this.formbuilder.group({
      name: [null, [Validators.required]],
      username: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirm_password: [null, [Validators.required, Validators.minLength(6)]],
      is_admin: [0],
    })
  }

  static passwordsMatch(cg: FormGroup): {[err: string]: any} {
    let password = cg.get('password');
    let confirm_password = cg.get('confirm_password');
    let rv: {[error: string]: any} = {};
    if ((password.touched || confirm_password.touched) && password.value !== confirm_password.value) {
      rv['passwordMismatch'] = true;
    }
    return rv;
  }

  ngOnInit() {
  }

  register(form){
    this.authService.register(form.value).subscribe((res) =>{
      localStorage.setItem('userToken', res.original.token);
      this.router.navigate(['/home'])
    }, (err) =>{
      console.log(err);
    })
  }

}

