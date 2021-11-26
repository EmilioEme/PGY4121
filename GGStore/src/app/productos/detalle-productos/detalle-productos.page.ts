import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ProductosService } from '../productos.service';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {

  datos : any = [];

  private idProducto;

  constructor(private ActivatedRoute: ActivatedRoute, private ProdService: ProductosService,
            private Router: Router, private alert : AlertController) { }

  ngOnInit() {

    this.ActivatedRoute.paramMap.subscribe( paramMap => {

      const valor = paramMap.get('ProdId')

      this.idProducto = valor;
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

    })
  }

  async eliminar(){
    const alert = await this.alert.create({
      cssClass: 'deleteProducto',
      header: '¿Estas seguro de que quieres borrar este juego?',
      message: 'Los cambios realizados no podran revertirse',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si, borralo',
          handler: () => {
            this.ProdService.deleteProductos(this.datos.id).subscribe(
              (respuesta : any) => {
                this.datos = respuesta
                console.log(respuesta)
                this.Router.navigate(['/productos'])
              },
              (error) => {
                console.log(error)
              }
            )
          }
        }
      ]
    });

    await alert.present();

    console.log("Eliminado")
    
  }
  actualizar(){
    this.Router.navigate(['actualizar-producto/' + this.idProducto])
  }
}
