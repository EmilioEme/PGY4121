import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  private productos:any = []
  

  constructor(private serviceProd: ProductosService , private router: Router) { }

  ngOnInit() {
    this.serviceProd.getProductos().subscribe(
      (resp) => {
        this.productos = resp
        console.log(resp)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ionViewWillEnter(){
    this.serviceProd.getProductos().subscribe(
      (resp) => {
        this.productos = resp
        console.log(resp)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  RedirectAgregar(){
    console.log('funciona!')
    this.router.navigate(['/agregar-producto'])
  }
  
  volverHome(){
    this.router.navigate(['/home'])
  }

}
