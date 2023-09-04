import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; //funcion iniciar sesion 
import { Usuario } from 'src/app/models/usuario'; //interface usuario
import { Router } from '@angular/router'; //nevagacion
import { FirestoreService } from 'src/app/shared/services/firestore.service'; //nos rtae los datos

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true; 

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    rol: '',
    contrasena: ''
  }

  constructor(public servicioauth: AuthService, public firestore: FirestoreService, public router: Router) {

  }

  async iniciar() {
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    }

    const res = await this.servicioauth.iniciarSesion(credenciales.email, credenciales.contrasena)
    .then(res => {
      alert("Se ha logueado con exito");

      this.router.navigate(['/inicio']);
    })
    .catch(error => {
      alert("Hubo un error al iniciar sesion: " + error)
    })
  }
}
