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

  ngOnInit() {
  }

  login(form) {
    
    var usuario = form.value ["name"]
    var contrasena = form.value ["password"]
    
    for (let users in  this.ser.getUser()){
      if(usuario == "admin" && contrasena == "123"){
       
        localStorage.setItem("datosUsuario", JSON.stringify(usuario));
        localStorage.setItem("datosPass", JSON.stringify(contrasena));
        this.router.navigate(['/home'])
      }
    }
    
  }
}
