import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {

      title:'Home',
      url:'/home',
      icon:'home',

    },

    {

      title:'Login',
      url:'/login',
      icon:'home',

    },

    {

      title:'Cadastro',
      url:'/cadastro',
      icon:'home',

    },

    {
      title:'Apresentação',
      url:'/apresentacao',
      icon:'heart',

    },

    {
      title:'Novo Post',
      url:'/nova-postagem',
      icon:'heart',
    },

    {

      title:'Editar Perfil',
      url:'/editar-perfil',
      icon:'heart',

    },
    
    {

      title:'Perfil',
      url:'/perfil',
      icon:'heart',

    },

    {

      title:'Lista de Amigos',
      url:'/lista-amigos',
      icon:'heart',

    },
    {

      title:'Lista de Usuários',
      url:'/lista-usuarios',
      icon:'heart',

    },

  ];
  constructor() {}
}
