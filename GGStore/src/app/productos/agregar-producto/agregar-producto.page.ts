import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';
import { ClasificacionService } from '../../clasificacion.service'
declare var require: any
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  clasi: any = []

  private archivo : File = null;
  
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

  agregarProducto(nombre,anio,genero,desarrolladora,precio, comentario, imagenURL){
    

    

    this.productoServicio.addProductos(nombre.value ,anio.value, genero.value, desarrolladora.value, precio.value, comentario.value, imagenURL.value).subscribe(
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
