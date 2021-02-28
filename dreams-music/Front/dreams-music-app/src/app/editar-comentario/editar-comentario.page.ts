import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post/post.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-comentario',
  templateUrl: './editar-comentario.page.html',
  styleUrls: ['./editar-comentario.page.scss'],
})
export class EditarComentarioPage implements OnInit {
  editPostForm: FormGroup;
  postId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(public formbuilder: FormBuilder,
  public router: Router,
  public postService: PostService,
  public activatedRoute: ActivatedRoute,
  private location: Location) { 
  this.editPostForm = this.formbuilder.group({
    musicname: [null, [Validators.required]],
    genre: [null, [Validators.email, Validators.required]],
    text: [null, [Validators.required]],
    url: [null, [Validators.required]],
    })
  }

  ngOnInit() {
  }

  editPost(form){
    console.log(form);
    console.log(form.value);
    this.postService.updatePost(this.postId,form.value).subscribe((res) =>{
      //this.router.navigate(['/perfil']);
     }, (err) =>{
      console.log(err);
    })
    this.location.back();
  }

}
