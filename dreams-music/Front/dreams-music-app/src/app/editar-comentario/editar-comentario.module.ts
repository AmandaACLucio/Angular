import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarComentarioPageRoutingModule } from './editar-comentario-routing.module';

import { EditarComentarioPage } from './editar-comentario.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarComentarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarComentarioPage]
})
export class EditarComentarioPageModule {}
