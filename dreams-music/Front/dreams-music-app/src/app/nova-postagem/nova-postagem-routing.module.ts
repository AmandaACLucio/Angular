import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaPostagemPage } from './nova-postagem.page';

const routes: Routes = [
  {
    path: '',
    component: NovaPostagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaPostagemPageRoutingModule {}
