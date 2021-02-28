import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from '../../app/services/comment/comment.service';

@Component({
  selector: 'app-criar-comentario',
  templateUrl: './criar-comentario.page.html',
  styleUrls: ['./criar-comentario.page.scss'],
})
export class CriarComentarioPage implements OnInit {

  commentForm: FormGroup;
  userToken: string;
  postId = localStorage.getItem("post_id");

  constructor(
    public alertController: AlertController, 
    public formbuilder: FormBuilder, 
    public router: Router,
    public commentService: CommentService) { 
    this.commentForm = this.formbuilder.group({
      text: [null, [Validators.required]],
      post_id: this.postId,
    })
  }
  
  publish(form){
    this.userToken = localStorage.getItem("userToken");
    this.commentService.createComment(form.value, this.userToken).subscribe((res) =>{
      this.router.navigate(['/ver-post'])
    }, (err) =>{
      this.errorAlert();
      console.log(err);

    })
  }

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Você tem certeza de que deseja comentar nesta postagem?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log('Confirm Sim');
            console.log(this.userToken)
            this.publish(this.commentForm);
          }
        }
      ]
    });

    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Erro!',
      message: 'Você precisa estar logado para poder publicar postagens',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
