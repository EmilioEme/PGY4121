import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.page.html',
  styleUrls: ['./actualizar-producto.page.scss'],
})
export class ActualizarProductoPage implements OnInit {

  datos : any = [];

  private idproducto;

  constructor(private ActivatedRoute: ActivatedRoute, private ProdService: ProductosService,
    private Router: Router) { }

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

    })
  }
  actualizarProducto(nombre,url,anio,genero,desarrolladora,precio,comentario){

    this.ProdService.updateProductos(this.idproducto,nombre,url,anio,genero,desarrolladora,precio,comentario).subscribe(
      (resp : any) => {
        this.Router.navigate(['/productos'])
        console.log("Funciona el metodo Actualizar")
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
