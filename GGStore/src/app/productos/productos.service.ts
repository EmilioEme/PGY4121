import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos = [
    {
      id : '1',
      nombre : 'The Last of Us Parte II',
      imagenURL : 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png',
      anio : '2020',
      genero : 'Horror de Supervivencia, Acción, Aventura, Disparos en Tercera Persona',
      desarrolladora : 'Naughty Dog',
      distribuidora : 'Sony Interactive Entertainment',
      comentarios : ['Gráficos excelentes, dignos de una película', 'Narrativa interesante y bien planteada', 'Mapa muy grande, demasiada aventura', 'Exclusivo de PS, no me gusta', 'No me gustó porque matan a un personaje importante al inicio']
    },
    {
      id : '2',
      nombre : 'Super Mario 3D World + Bowser Fury',
      imagenURL : 'https://sm.ign.com/ign_es/game/s/super-mari/super-mario-3d-world-bowsers-fury_4s3v.jpg',
      anio : '2021',
      genero : 'Plataformas en 3D',
      desarrolladora : 'Nintendo',
      distribuidora : 'Nintendo',
      comentarios : ['El gameplay engancha mucho, muy bueno', 'Bowser siempre es un jefe muy difícil y divertido', 'Juego repetido con una expansión simplemente, no me gustó']
    },
    {
      id : '3',
      nombre : 'Crash Bandicoot 4: Its About Time',
      imagenURL : 'https://d2r9epyceweg5n.cloudfront.net/stores/001/241/783/products/photo_2021-07-29_21-52-121-391e31cae2c0d2175816276064404957-1024-1024.jpg',
      anio : '2020',
      genero : 'Plataformas en 3D',
      desarrolladora : 'Toys For Bob',
      distribuidora : 'Activision',
      comentarios : ['Nostálgico, fiel a la franquicia','Gráficos excelentes para estos tiempos','Prefiero el Crash 4 de PS2','Crash para Smash Bros']
    },
    {
      id : '4',
      nombre : 'Mortal Kombat 11 Ultimate',
      imagenURL : 'https://image.api.playstation.com/vulcan/ap/rnd/202010/0822/SbTOirUJUZ3oNQG0eGDZAuCr.png',
      anio : '2019',
      genero : 'Lucha',
      desarrolladora : 'NetherRealm Studios',
      distribuidora : 'Warner Bros Interactive Entertainment',
      comentarios : ['Buen argumento','Gráficos buenísimos, modo historia espléndido y online competitivo','Mucho dinero ahorrado en esta edición por los DLCs','Personajes rotos y desequilibrados en el meta']
    }
  ]

  constructor() { }

  getProductos(){

    return [...this.productos]

  }

  getProductosById(prodID : string){

    return {
      ...this.productos.find( serv => {
      return serv.id === prodID
      })
    }

  }

  addProductos(name: string, imgURL: string, year: string, gen: string, desa: string, dist: string, com: string[]){

    this.productos.push(
      {
        id : this.productos.length + 1 + "",
        nombre : name,
        imagenURL : imgURL,
        anio : year,
        genero : gen,
        desarrolladora : desa,
        distribuidora : dist,
        comentarios : com
      }
    )
    
  }

  deleteProductos(prodID: string){

    this.productos = this.productos.filter( serv => {
                      return serv.id !== prodID
                    })
  }

}
