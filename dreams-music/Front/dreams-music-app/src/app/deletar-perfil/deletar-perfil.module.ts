import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletarPerfilPageRoutingModule } from './deletar-perfil-routing.module';

import { DeletarPerfilPage } from './deletar-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletarPerfilPageRoutingModule
  ],
  declarations: [DeletarPerfilPage]
})
export class DeletarPerfilPageModule {}
