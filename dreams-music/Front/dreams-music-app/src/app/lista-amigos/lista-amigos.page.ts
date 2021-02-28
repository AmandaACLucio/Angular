import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { AuthService } from '../../app/services/auth/auth.service';


@Component({
  selector: 'app-lista-amigos',
  templateUrl: './lista-amigos.page.html',
  styleUrls: ['./lista-amigos.page.scss'],
})
export class ListaAmigosPage implements OnInit {

  friends:[];
  userLogadoId;
  friendsId:[];
  friendId;
  users:[];

  constructor(public userService: UserService,
    public authService: AuthService) { }

  ngOnInit() {
    this.logado();
    this.aboutFriend();
  }

  listFriend(id){
    this.userService.listUserFriends(id).subscribe((res) =>{
      this.friends = res.userFriends;
      console.log(this.friends)
    })    
  }

  aboutFriend(){
    this.userService.listUsers().subscribe((res) =>{
      this.users=res
      console.log(res)    
    })    
  }

  logado(){
    this.authService.getDetails().subscribe(
      (res) => {
        this.userLogadoId = res.user.id;
        this.listFriend(this.userLogadoId);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
