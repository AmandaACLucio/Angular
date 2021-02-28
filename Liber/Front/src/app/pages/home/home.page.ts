import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PrecoComponent } from '../../components/popover/preco/preco.component'
import { LivrosComponent } from '../../components/popover/livros/livros.component'
import { CategoriaComponent } from '../../components/popover/categoria/categoria.component'
import { AvaliacaoComponent } from '../../components/popover/avaliacao/avaliacao.component'

class Livro{
  titulo: string;
  preco: number;
  categoria: string;
  avaliacao: number;
  capa: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  livros: Livro[];
  
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    this.livros = [
      {
        titulo: "A menina que roubava livros",
        preco: 22.00,
        categoria: 'drama',
        avaliacao: 5,
        capa: "./assets/1.jpg",
      },
      {
        titulo: "A última carta de amor",
        preco: 30.00,
        categoria: 'romance',
        avaliacao: 3,
        capa: "./assets/2.jpg",
      },
      {
        titulo: "Coraline",
        preco: 50.00,
        categoria: 'Infanto-Juvenil',
        avaliacao: 5,
        capa: "../assets/3.jpg",
      },
      {
        titulo: "O código da Vinci",
        preco: 45.00,
        categoria: 'mistério',
        avaliacao: 4,
        capa: "./assets/4.jpg",
      },
      {
        titulo: "A menina que roubava livros",
        preco: 22.00,
        categoria: 'drama',
        avaliacao: 5,
        capa: "./assets/5.jpg",
      },
      {
        titulo: "A última carta de amor",
        preco: 30.00,
        categoria: 'romance',
        avaliacao: 3,
        capa: "./assets/6.jpg",
      },
      {
        titulo: "Coraline",
        preco: 50.00,
        categoria: 'Infanto-Juvenil',
        avaliacao: 5,
        capa: "../assets/7.jpg",
      },
      {
        titulo: "O código da Vinci",
        preco: 45.00,
        categoria: 'mistério',
        avaliacao: 4,
        capa: "./assets/8.jpg",
      },
      {
        titulo: "A menina que roubava livros",
        preco: 22.00,
        categoria: 'drama',
        avaliacao: 5,
        capa: "./assets/9.jpg",
      },
      {
        titulo: "A última carta de amor",
        preco: 30.00,
        categoria: 'romance',
        avaliacao: 3,
        capa: "./assets/10.jpg",
      },
      {
        titulo: "Coraline",
        preco: 50.00,
        categoria: 'Infanto-Juvenil',
        avaliacao: 5,
        capa: "../assets/11.jpg",
      },
      {
        titulo: "O código da Vinci",
        preco: 45.00,
        categoria: 'mistério',
        avaliacao: 4,
        capa: "./assets/12.jpg",
      },
      {
        titulo: "A menina que roubava livros",
        preco: 22.00,
        categoria: 'drama',
        avaliacao: 5,
        capa: "./assets/13.jpg",
      },
      {
        titulo: "A última carta de amor",
        preco: 30.00,
        categoria: 'romance',
        avaliacao: 3,
        capa: "./assets/14.jpg",
      },
      {
        titulo: "Coraline",
        preco: 50.00,
        categoria: 'Infanto-Juvenil',
        avaliacao: 5,
        capa: "../assets/15.jpg",
      },
      {
        titulo: "O código da Vinci",
        preco: 45.00,
        categoria: 'mistério',
        avaliacao: 4,
        capa: "./assets/16.jpg",
      }
    ]
  }

  async precoPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PrecoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async livrosPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LivrosComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async categoriaPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CategoriaComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async avaliacaoPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AvaliacaoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}

