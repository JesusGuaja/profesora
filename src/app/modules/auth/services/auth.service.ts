import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // referenciamos Auth de Firebase
  constructor(public auth: AngularFireAuth) { }

  registrar(nombre: string, contrasena: string){
    return this.auth.createUserWithEmailAndPassword(nombre,contrasena);
  }
}
