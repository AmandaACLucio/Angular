import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { AuthService } from '../../app/services/auth/auth.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {

  friends:[];
  userLogadoId;
  friendsId:[];
  friendId;
  users:[];

  constructor(public userService: UserService,
    public authService: AuthService) { }

  ngOnInit() {
    this.logado();
    this.aboutUser();
  }

  aboutUser(){
    this.userService.listUsers().subscribe((res) =>{
      this.users=res
      console.log(res)    
    })    
  }

  getId(id){
    localStorage.setItem('user_id', id);
  }

  logado(){
    this.authService.getDetails().subscribe(
      (res) => {
        this.userLogadoId = res.user.id;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
