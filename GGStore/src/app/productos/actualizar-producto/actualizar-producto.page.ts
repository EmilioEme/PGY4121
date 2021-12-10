import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ProductosService } from '../productos.service';
import { ClasificacionService } from '../../clasificacion.service'
import { AlertController } from '@ionic/angular'

declare var require: any
@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.page.html',
  styleUrls: ['./actualizar-producto.page.scss'],
})
export class ActualizarProductoPage implements OnInit {
  clasi : any = []
  datos : any = [];

  private archivo : File = null
  private idproducto;

  constructor(private ActivatedRoute: ActivatedRoute, private ProdService: ProductosService,
    private router: Router, private clasificacion : ClasificacionService,
    private alert : AlertController) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe( paramMap => {

      const valor = paramMap.get('ProdId')

      this.idproducto = valor;

      console.log("ID del producto: " + valor)

      this.ProdService.getProductosById(valor).subscribe(
        (resp : any) => {
          this.datos = resp
          console.log(resp)
        },
        (error) => {
          console.log(error)
        }
      )
      console.log(this.datos)

    });
    // Cargamos la clasificacion de los juegos
    this.clasificacion.getTipoProducto().subscribe(
      (respuesta) => {
        this.clasi = respuesta;
      },
      (error) => {
        console.log(error)
      }
    )
  }

  capturarImagen(event){
    this.archivo = <File>event.target.files[0]
  }

  async actualizarProducto(nombre,anio,genero,desarrolladora,precio,comentario,clasificacion,favorito,disponible){

    const STRAPI_API = 'https://proyectogear.herokuapp.com';


    const axios = require('axios')

    const datos = new FormData()

    datos.append('files',this.archivo)
    datos.append('ref','Juego')
    datos.append('refId',this.idproducto)
    datos.append('field','imagen')

    axios.put(`${STRAPI_API}/upload/files/${this.idproducto}`,datos)

    if(nombre.value.length>0 && desarrolladora.value.length>0 && clasificacion.value!=null && anio.value>0){

      this.ProdService.updateProductos(this.idproducto,nombre.value,anio.value,genero.value,desarrolladora.value,precio.value,
      comentario.value, clasificacion.value, favorito.value,disponible.checked).subscribe(
      (resp) => {
        this.router.navigate(['/productos/' + this.idproducto])
        console.log("Funciona el metodo Actualizar")
      },
      (error) => {
        console.log(error)
      }
    )}else{
      const alert = await this.alert.create({
        cssClass: 'updateProductoError',
        header: 'No se pudo actualizar el producto',
        subHeader: 'Campos obligatorios:',
        message: 'Nombre, Año, Desarrolladora, Clasificacion',
        buttons: ['OK']
        }
      );

      await alert.present()
    }
  }

}
