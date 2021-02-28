import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarComentarioPage } from './criar-comentario.page';

const routes: Routes = [
  {
    path: '',
    component: CriarComentarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarComentarioPageRoutingModule {}
