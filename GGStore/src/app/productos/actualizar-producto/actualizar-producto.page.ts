import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ProductosService } from '../productos.service';
import { ClasificacionService } from '../../clasificacion.service'

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.page.html',
  styleUrls: ['./actualizar-producto.page.scss'],
})
export class ActualizarProductoPage implements OnInit {
  clasi : any = []
  datos : any = [];

  private idproducto;

  constructor(private ActivatedRoute: ActivatedRoute, private ProdService: ProductosService,
    private router: Router) { }

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
  actualizarProducto(nombre,anio,genero,desarrolladora,precio,comentario,url){

    this.ProdService.updateProductos(this.idproducto,nombre.value,anio.value,genero.value,desarrolladora.value,precio.value,comentario.value, url.value).subscribe(
      (resp) => {
        this.router.navigate(['/productos/' + this.idproducto])
        console.log("Funciona el metodo Actualizar")
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
