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

  addProductos(name: string, year: number, gen: string, desa: string, prec: number, 
    com: string, clasificacion: string, favorito : string, disponible : boolean){

    var productos =
      {
        
        "nombre" : name,
        "anio" : year,
        "genero" : gen,
        "desarrolladora" : desa,
        "precio" : prec,
        "comentarios" : com,
        "clasificacion": clasificacion,
        "favorito" : favorito,
        "disponible" : disponible
      }
    return this.http.post('http://localhost:1337/Juegos/', productos)
    
  }

  deleteProductos(prodID: string){

    return this.http.delete('http://localhost:1337/Juegos/' + prodID)
  }

  updateProductos(idproducto: string, nombre: string, anio: number, genero: string, desarrolladora: string, 
    precio: number, comentario: string, clasificacion : string, favorito : string, disponible : boolean) {
    
    var productos =
      {
        
        "nombre" : nombre,
        "anio" : anio,
        "genero" : genero,
        "desarrolladora" : desarrolladora,
        "precio" : precio,
        "comentarios" : comentario,
        "clasificacion" : clasificacion,
        "favorito" : favorito,
        "disponible" : disponible
      }

    return this.http.put('http://localhost:1337/Juegos/' + idproducto, productos)
  }
}
