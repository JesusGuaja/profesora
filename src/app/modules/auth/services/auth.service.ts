import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // referenciamos Auth de Firebase
  constructor(public auth: AngularFireAuth) { }

  iniciarSesion(email: string, contrasena: string){
    return this.auth.signInWithEmailAndPassword(email, contrasena)
  }

  registrar(email: string, contrasena: string){
    return this.auth.createUserWithEmailAndPassword(email,contrasena);
  }

  async getUid(){
    const user = await this.auth.currentUser;
    if (user == null){
      return null;
    }else{
      return user.uid;
    }
  }
}
