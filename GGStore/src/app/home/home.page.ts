import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController, private router: Router) {}
  usuario = localStorage.getItem("datosUsuario")
  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  RedirectProductos(){
    console.log('funciona!')
    this.router.navigate(['/productos'])
  }

}
