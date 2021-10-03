import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController) {}
  usuario = localStorage.getItem("datosUsuario")
  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
