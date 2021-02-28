import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarComentarioPageRoutingModule } from './criar-comentario-routing.module';

import { CriarComentarioPage } from './criar-comentario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarComentarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CriarComentarioPage]
})
export class CriarComentarioPageModule {}
