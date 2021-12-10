import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http : HttpClient) { }

  getUser(){
    return this.http.get('https://proyectogear.herokuapp.com/users')
  }
  getUserByID(prodID : string){
    return this.http.get('https://proyectogear.herokuapp.com/users/' + prodID)
  }
  
}
