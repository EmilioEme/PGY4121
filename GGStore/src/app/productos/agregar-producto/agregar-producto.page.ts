import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';
import { ClasificacionService } from '../../clasificacion.service'
import { AlertController } from '@ionic/angular'

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
    private clasificacion: ClasificacionService,
    private alert : AlertController) { }

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
  
  async agregarProducto(nombre,anio,genero,desarrolladora,precio, comentario, imagenURL, clasif, favorito, disponible){
    
    if(nombre.value.length>0 && desarrolladora.value.length>0 && clasif.value!=null && anio.value>0){

      this.productoServicio.addProductos(nombre.value ,anio.value, genero.value, desarrolladora.value, precio.value, 
        comentario.value, imagenURL.value, clasif.value, favorito.value, disponible.checked).subscribe(
        (respuesta) => {
          console.log(respuesta)
          console.log(clasif)
          this.router.navigate(['/productos'])
        },
        (error) => {
          console.log(error)
        }
      )
    }else{
      const alert = await this.alert.create({
        cssClass: 'addProductoError',
        header: 'No se pudo agregar el producto',
        subHeader: 'Campos obligatorios:',
        message: 'Nombre, Año, Desarrolladora, Clasificacion',
        buttons: ['OK']
        }
      );

      await alert.present()
    }

    
  }

  
}
