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

  addProductos(name: string, year: string, gen: string, desa: string, prec: number, com: string, imagenURL: string, clasificacion: string){

    var productos =
      {
        
        "nombre" : name,
        "anio" : year,
        "genero" : gen,
        "desarrolladora" : desa,
        "precio" : prec,
        "comentarios" : com,
        "imagenURL": imagenURL,
        "clasificacion": clasificacion
      }
    return this.http.post('http://localhost:1337/Juegos/', productos)
    
  }

  deleteProductos(prodID: string){

    return this.http.delete('http://localhost:1337/Juegos/' + prodID)
  }

  updateProductos(idproducto: string, nombre: string, anio: string, genero: string, desarrolladora: string, precio: number, comentario: string, url: string) {
    
    var productos =
      {
        
        "nombre" : nombre,
        "anio" : anio,
        "genero" : genero,
        "desarrolladora" : desarrolladora,
        "precio" : precio,
        "comentarios" : comentario,
        "imagenURL" : url
      }

    return this.http.put('http://localhost:1337/Juegos/' + idproducto, productos)
  }
}
