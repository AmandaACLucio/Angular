import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaPostagemPageRoutingModule } from './nova-postagem-routing.module';

import { NovaPostagemPage } from './nova-postagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaPostagemPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NovaPostagemPage]
})
export class NovaPostagemPageModule {}
