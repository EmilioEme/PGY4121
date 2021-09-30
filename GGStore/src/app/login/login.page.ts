import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  login(form) {
    
    var usuario = form.value ["name"]
    var contrasena = form.value ["password"]

    if(usuario == "admin" && contrasena == "123"){
       
      localStorage.setItem("datosUsuario", usuario);
      this.router.navigate(['/home'])
    }
  }
}
