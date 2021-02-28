import { Component, OnInit } from '@angular/core';
import { PostService } from '../../app/services/post/post.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../app/services/comment/comment.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {
  posts = {};
  comments = [];
  postId = this.activatedRoute.snapshot.paramMap.get("id");

  constructor(public commentService: CommentService,
    public postService: PostService,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  showPost(){
    this.postService.showPost(this.postId).subscribe(
      (res) => {
        console.log(res);
        this.posts = res.post;
      },
      (err) => {
        console.log(err);
      })
    }

  listPostComments(){
    this.postService.listPostComments(this.postId).subscribe(
      (res) => {
        console.log(res);
        this.posts = res.post;
      },
      (err) => {
        console.log(err);
      })
  }

  // createComment(){
  //   this.commentService.createComment(this.submitForm, this.userToken).subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.posts = res.post;
  //     },
  //     (err) => {
  //       console.log(err);
  //     })
  //   )
  // }
}