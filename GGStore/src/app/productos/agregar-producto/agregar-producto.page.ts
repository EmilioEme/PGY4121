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

  agregarProducto(nombre,anio,genero,desarrolladora,precio, comentario){
    const axios = require('axios')
    const STRAPI_BASE_URL = 'http://localhost:1337'


    const datos = new FormData()

    datos.append('files',this.archivo)
    datos.append('ref', 'Juegos')
    datos.append('refId','6')
    datos.append('field', 'imagen')

    axios.post(`${STRAPI_BASE_URL}/upload`,datos)

    var lista = []
    if(comentario.value!==""){
      lista.push(comentario.value)
    }else{
      lista = null
    }

    var listaGenero = []
    if(genero.value!==""){
      listaGenero.push(genero.value)
    }else{
      listaGenero = null
    }

    this.productoServicio.addProductos(nombre.value ,anio.value, listaGenero, desarrolladora.value, precio.value, lista).subscribe(
      (respuesta) => {
        console.log(respuesta)
        this.router.navigate(['/productos'])
      },
      (error) => {
        console.log(error)
      }
    )
  }

  capturarImagen(event){
    this.archivo = <File>event.target.files[0]
  }
}
