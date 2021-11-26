import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from 'selenium-webdriver';
import { ServicioService } from './servicio.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router, private ser : ServicioService) { }


  private usuarios : any = []

  ngOnInit() {
    this.ser.getUser().subscribe(
      (response) => {
        this.usuarios = response
      },
      (error) => {
        console.log(error)
      }
    )
  }

  login(form) {
    
    var usuario = form.value ["name"]
    var contrasena = form.value ["password"]
    
    this.usuarios.forEach(user => {
      console.log(user.username)
      console.log(user.password)
      
      if(usuario === user.username && contrasena === user.password){
      
        localStorage.setItem("datosUsuario", JSON.stringify(usuario));
        localStorage.setItem("datosPass", JSON.stringify(contrasena));
        this.router.navigate(['/home'])
        
      }else{
        console.log("No existe ese usuario")
      }
    });
    
    
  }
}
