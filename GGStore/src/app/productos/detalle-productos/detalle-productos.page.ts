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

  datos : Producto;

  constructor(private ActivatedRoute: ActivatedRoute, private ProdService: ProductosService,
            private Router: Router) { }

  ngOnInit() {

    this.ActivatedRoute.paramMap.subscribe( paramMap => {

      const valor = paramMap.get('ProdId')
      console.log("ID del producto: " + valor)

      this.datos = this.ProdService.getProductosById(valor)
      console.log(this.datos)

    })
  }

  eliminar(){

    console.log("Eliminado")
    this.ProdService.deleteProductos(this.datos.id)
    
    this.Router.navigate(['/productos'])
  }

}
