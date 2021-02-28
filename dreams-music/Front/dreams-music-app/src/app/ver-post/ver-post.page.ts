import { Component, OnInit } from '@angular/core';
import { PostService } from '../../app/services/post/post.service';

@Component({
  selector: 'app-ver-post',
  templateUrl: './ver-post.page.html',
  styleUrls: ['./ver-post.page.scss'],
})
export class VerPostPage implements OnInit {

  data: any;
  usuario:any;
  postagem:any;
  comments:[];
  token = localStorage.getItem('userToken');

  constructor(public postService: PostService) { }

  ngOnInit() {
    let id = localStorage.getItem("post_id");
    this.verPost(id);
    this.listComments(id);
    this.getToken(this.token)  
    console.log(this.token)  
  }

  verPost(id) {
    this.postService.showPost(id).subscribe((res) =>{
    this.data = [res]
    console.log(this.data);
  })
  }

  getToken(userToken){
    localStorage.setItem('userToken', userToken);
    console.log(userToken)
  }

  getIdPost(id){
    localStorage.setItem('post_id', id);
  }

  listComments(id){
    this.postService.listPostComments(id).subscribe((res) =>{
      this.comments = res.postComments;
      console.log(res.postComments);
    })    
  }
}
