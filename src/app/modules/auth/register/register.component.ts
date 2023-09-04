import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; //esto es del input

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    rol: '',
    contrasena: ''
  }

  uid = '';

  //creamos una nueva coleccion para usuarios
  coleccionUsuarios: Usuario[] = [];

  // servicioAuth referencia a nuestro servicio Auth
  constructor(public servicioAuth: AuthService, public serviciofirestore: FirestoreService, public router: Router){
    
  }
  // tomamos nueovs registros y mostramos los resultados
  
  async registrarse(){
    const credenciales = {
      contrasena: this.usuarios.contrasena,
      email: this.usuarios.email
    }

    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.contrasena)
    .then(res => {
      this.router.navigate(['/inicio'])
    })
    .catch(error => {console.log('error =>',error)})

    console.log(res)

    const uid = await this.servicioAuth.getUid();
    this.usuarios.uid = uid;
    
    // GUARDA EL NUEVO USUARIO
    this.guardarUser();
  }

  async guardarUser(){
    this.serviciofirestore.agregarUsuario(this.usuarios, this.usuarios.uid).then(res => {
      console.log(this.usuarios)
    })
    .catch(error => {
      console.log('Error =>',error)
    })
  }
 
  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid)
  }

   
}
