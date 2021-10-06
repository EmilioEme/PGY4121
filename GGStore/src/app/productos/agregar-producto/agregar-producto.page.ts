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
    var lista
    var listaGenero
    
    if(comentario!=null){
      if(comentario.value != ""){
        lista = comentario.value.split(",")
      }else{
        lista = null;
      }
    }

    if(genero!=null){
      if(genero.value != ""){
        listaGenero = genero.value.split(",")
      }else{
        listaGenero = null;
      }
    }
    this.productoServicio.addProductos(nombre.value ,url.value,anio.value,listaGenero,desarrolladora.value,distribuidora.value, lista);
    this.router.navigate(['/productos'])
  }
}
