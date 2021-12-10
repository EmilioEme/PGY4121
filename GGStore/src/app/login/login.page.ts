import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from './servicio.service';
import { AlertController } from '@ionic/angular';

declare var require : any


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private router : Router, private ser : ServicioService, private alert : AlertController) { }
  

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
    const axios = require('axios');
    
    var usuario = form.value ["name"]
    var contrasena = form.value ["password"]
    
    axios.post('http://localhost:1337/auth/local', {
      identifier: usuario,
      password: contrasena,
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);

      localStorage.setItem('token',response.data.jwt)

      this.router.navigate(['/home'])
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);

      this.alertLogin()
    });
    
    
  }
  async alertLogin(){
    const alert = await this.alert.create({
      cssClass: 'updateProductoError',
      header: 'Fallo al iniciar sesion',
      subHeader: 'Contraseña o usuario incorrecto',
      message: 'Por favor intentelo nuevamente',
      buttons: ['OK']
      }
    );

    await alert.present()
  }
}
