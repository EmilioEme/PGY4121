import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  constructor(private productoServicio: ProductosService, private router: Router) { }

  ngOnInit() {
  }

  agregarProducto(nombre,url,anio,genero,desarrolladora,distribuidora, comentario){

    this.productoServicio.addProductos(nombre.value ,url,anio.value,genero.value,desarrolladora.value,distribuidora.value, comentario);
    this.router.navigate(['/productos'])
  }
}
