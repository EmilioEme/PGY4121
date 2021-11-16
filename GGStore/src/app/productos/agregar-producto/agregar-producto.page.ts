import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';
import { ClasificacionService } from '../../clasificacion.service'

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  clasi: any = []
  
  constructor(private productoServicio: ProductosService, 
    private router: Router, 
    private clasificacion: ClasificacionService) { }

  ngOnInit() {
    this.clasificacion.getTipoProducto().subscribe(

      (respuesta) => {
        this.clasi = respuesta
      },
      (error) => {
        console.log("Error al cargar clasificacion")
      }
    );
  }

  agregarProducto(nombre,url,anio,genero,desarrolladora,precio, comentario){
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
    this.productoServicio.addProductos(nombre.value ,url.value,anio.value,listaGenero,desarrolladora.value,precio.value, lista).subscribe(
      (respuesta) => {
        console.log(respuesta)
        this.router.navigate(['/productos'])
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
