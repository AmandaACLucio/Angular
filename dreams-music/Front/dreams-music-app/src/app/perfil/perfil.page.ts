import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../app/services/auth/auth.service';
import { UserService } from '../../app/services/user/user.service';
import { FriendService } from '../../app/services/friend/friend.service';
import { PostService } from '../../app/services/post/post.service';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user_id = localStorage.getItem('user_id');
  token = localStorage.getItem('userToken');
  userLogado;
  user;
  posts: [];
  friendshipForm;
  textBtnFriendship = "Seguir";

  constructor(
    public userService: UserService,
    public friendService: FriendService,
    public authService: AuthService,
    public postService: PostService,
    public router: Router,
    public toastController: ToastController) {
      this.friendshipForm = {
        friend_id: this.user_id,    
      }
    }

  async presentToast() {
    const toast = await this.toastController.create({
    message: 'Você agora está seguindo essa pessoa!',
    duration:2000
    });
    toast.present();
  }

  async deleteToast() {
    const toast = await this.toastController.create({
    message: 'Seu post foi deletado!',
    duration:2000
    });
    toast.present();
  }

  ngOnInit() {
    this.showUser();
    this.listAllPosts();
    this.logado();
  }


  getId(id){
    localStorage.setItem('user_id', id);
    console.log(this.user_id)
  }

  logado(){
    this.authService.getDetails().subscribe(
      (res) => {
        this.userLogado = res.user;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  showUser(){
    this.userService.showUser(this.user_id).subscribe(
      (res) => {
        this.user = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  listAllPosts(){
    this.userService.listUserPosts(this.user_id).subscribe(
      (res) => {
      this.posts = res.userPosts;
    },
    (err) => {
      console.log(err);
    })
  }

  postNavigate (id) {
    localStorage.setItem("post_id", id);
    console.log("executando setVerPost")
  }

  createFriend(){
    this.friendService.createFriend(this.friendshipForm, this.token).subscribe(
      (res) => {
      this.presentToast();
      this.textBtnFriendship="Seguindo";
    },
    (err) => {
      console.log(err);
    })
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe(
      (res) => {
        console.log(this.user_id);
        localStorage.setItem("user_id", this.user_id);
        this.deleteToast();
    },
    (err) => {
      console.log(err);
    })
  }

  gotoFunction(id) {
    this.router.navigate(['/editar-comentario', {id:id}]);
  }
}
