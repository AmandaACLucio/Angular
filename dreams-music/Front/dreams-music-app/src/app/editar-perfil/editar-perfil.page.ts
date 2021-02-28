import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../app/services/auth/auth.service';
import { UserService } from '../../app/services/user/user.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  editProfileForm: FormGroup;
  user_id = localStorage.getItem('user_id');


  constructor(
    public alertController: AlertController,
    public formbuilder: FormBuilder, 
    public authService: AuthService, 
    public userService: UserService,
    public router: Router,
    public toastController: ToastController) {
    this.editProfileForm = this.formbuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      phone: [null, [Validators.required]],
    })
  }

  ngOnInit() {
  }

  editProfile(){
    this.userService.updateUser(this.editProfileForm.value, this.user_id).subscribe((res) =>{
      this.router.navigate(['/perfil'])
     }, (err) =>{
      console.log(err);
    })
  }

  deleteUser(id){
      this.userService.deleteUser(id).subscribe(
        (res) => {
          console.log(res);
          localStorage.removeItem("user_id");
          this.deleteToast();
      },
      (err) => {
        console.log(err);
      })
    }
    
    async deleteToast() {
      const toast = await this.toastController.create({
      message: 'Seu usuário foi deletado!',
      duration:2000
      });
      toast.present();
    }

    async alertaDeletar() {
      const alert = await this.alertController.create({
        header: 'Deletar',
        message: 'Você tem certeza de que deseja deletar esse perfil?',
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
              this.deleteUser(this.user_id);
            }
          }
        ]
      });

      await alert.present();
    }
  }
