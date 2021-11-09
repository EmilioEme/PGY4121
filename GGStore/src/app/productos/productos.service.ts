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

}
