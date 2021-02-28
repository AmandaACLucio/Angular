import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'apresentacao',
    loadChildren: () => import('./apresentacao/apresentacao.module').then( m => m.ApresentacaoPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'nova-postagem',
    loadChildren: () => import('./nova-postagem/nova-postagem.module').then( m => m.NovaPostagemPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  
  {
    path: 'ver-post',
    loadChildren: () => import('./ver-post/ver-post.module').then( m => m.VerPostPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'deletar-perfil',
    loadChildren: () => import('./deletar-perfil/deletar-perfil.module').then( m => m.DeletarPerfilPageModule)
  },  {
    path: 'lista-amigos',
    loadChildren: () => import('./lista-amigos/lista-amigos.module').then( m => m.ListaAmigosPageModule)
  },
  {
    path: 'editar-comentario',
    loadChildren: () => import('./editar-comentario/editar-comentario.module').then( m => m.EditarComentarioPageModule)
  },
  {
    path: 'lista-usuarios',
    loadChildren: () => import('./lista-usuarios/lista-usuarios.module').then( m => m.ListaUsuariosPageModule)
  },
  {
    path: 'criar-comentario',
    loadChildren: () => import('./criar-comentario/criar-comentario.module').then( m => m.CriarComentarioPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
