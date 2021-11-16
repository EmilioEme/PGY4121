import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ProductosService } from '../productos.service';
import { Producto } from './producto.model';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {

  datos : any = [];

  private idProducto;

  constructor(private ActivatedRoute: ActivatedRoute, private ProdService: ProductosService,
            private Router: Router) { }

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

  eliminar(){

    console.log("Eliminado")
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
  actualizar(){
    this.Router.navigate(['actualizar-producto/' + this.idProducto])
  }
}
