import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  private productos = []
  

  constructor(private serviceProd: ProductosService , private router: Router) { }

  ngOnInit() {
    this.productos = this.serviceProd.getProductos();
  }

  ionViewWillEnter(){
    this.productos = this.serviceProd.getProductos();
  }

  RedirectAgregar(){
    console.log('funciona!')
    this.router.navigate(['/agregar-producto'])
  }
  volverHome(){
    this.router.navigate(['/home'])
  }

}
