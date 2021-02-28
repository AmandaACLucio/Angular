import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletarPerfilPage } from './deletar-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: DeletarPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletarPerfilPageRoutingModule {}
