import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth/auth.service';
import { UserService } from '../../app/services/user/user.service';
import { PostService } from '../../app/services/post/post.service';
import { CommentService } from '../../app/services/comment/comment.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  posts: [];
  userLogadoId;
  token = localStorage.getItem('userToken');

  constructor(
    public postService: PostService,
    public commentService: CommentService,
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public toastController: ToastController, 
    public authService: AuthService) { }

  ngOnInit() {
    this.listAllPosts();
    this.logado();
    this.getToken(this.token)
  }

  getToken(userToken){
    localStorage.setItem('userToken', userToken);
  }

  getId(id){
    localStorage.setItem('user_id', id);
  }

  getIdPost(id){
    localStorage.setItem('post_id', id);
    console.log(id)
  }

  logado(){
    this.authService.getDetails().subscribe(
      (res) => {
        this.userLogadoId = res.user.id;
        this.getId(this.userLogadoId);
        console.log(this.userLogadoId)
      },
      (err) => {
        console.log(err);
      }
    )
  }

  listAllPosts(){
    this.postService.listAllPosts().subscribe(
      (res) => {
      this.posts = res.post;
    },
    (err) => {
      console.log(err);
    })
  }

  postNavigate (id) {
    localStorage.setItem("post_id", id);
    console.log("executando setVerPost")
  }

  async likeToast() {
    const toast = await this.toastController.create({
    message: 'Você curtiu esse post!',
    duration:2000
    });
    toast.present();
  }

}