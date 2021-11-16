import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  

  constructor(private http:HttpClient) { }

  getProductos(){

    return this.http.get('http://localhost:1337/Juegos')

  }

  getProductosById(prodID : string){

    return this.http.get('http://localhost:1337/Juegos/' + prodID)

  }

  addProductos(name: string, imgURL: string, year: string, gen: string[], desa: string, prec: number, com: string[]){

    var productos =
      {
        
        "nombre" : name,
        "imagenURL" : imgURL,
        "anio" : year,
        "genero" : gen[0],
        "desarrolladora" : desa,
        "precio" : prec,
        "comentarios" : com[0]
      }
    return this.http.post('http://localhost:1337/Juegos/', productos)
    
  }

  deleteProductos(prodID: string){

    return this.http.delete('http://localhost:1337/Juegos/' + prodID)
  }

  updateProductos(idproducto: string, nombre: string, url: string, anio: string, genero: string[], desarrolladora: string, precio: number, comentario: string[]) {
    
    var productos =
      {
        
        "nombre" : name,
        "imagenURL" : url,
        "anio" : anio,
        "genero" : genero[0],
        "desarrolladora" : desarrolladora,
        "precio" : precio,
        "comentarios" : comentario[0]
      }

    return this.http.put('http://localhost:1337/Juegos/' + idproducto, productos)
  }
}
