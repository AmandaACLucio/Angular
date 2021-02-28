import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../app/services/post/post.service';

@Component({
  selector: 'app-nova-postagem',
  templateUrl: './nova-postagem.page.html',
  styleUrls: ['./nova-postagem.page.scss'],
})
export class NovaPostagemPage implements OnInit {
  publishForm: FormGroup;
  userToken: string;

  constructor(
    public alertController: AlertController, 
    public formbuilder: FormBuilder, 
    public router: Router,
    public postService: PostService) { 
    this.publishForm = this.formbuilder.group({
      musicname: [null, [Validators.required]],
      text: [null, [Validators.required]],
      url: [null, [Validators.required]],
      genre: [null, [Validators.required]],
      privacy: ["public"],
    })
  }
  
  publish(form){
    //this.userToken = localStorage.getItem("userToken");
    this.postService.createPost(form.value).subscribe((res) =>{
      this.router.navigate(['/home'])
    }, (err) =>{
      this.errorAlert();
      console.log(err);

    })
  }

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Você tem certeza de que deseja publicar essa postagem?',
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
            this.publish(this.publishForm);
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
