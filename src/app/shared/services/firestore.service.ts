import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private usuariosCollection:AngularFirestoreCollection<Usuario>

  constructor(private databse: AngularFirestore) {
    // referenciamos colleccion de la BD
    this.usuariosCollection = this.databse.collection<Usuario>('usuarios')
   }

   agregarUsuario(usuario: Usuario, id: string){
    // RESOLVE: promesa resulta -> similar al then
    // REJECT: promesa rechazada -> similar al catch
    return new Promise(async(resolve, reject) => {
      try {
        usuario.uid = id;

        const resultado = await this.usuariosCollection.doc(id).set(usuario)
        //muestra el resultado sin problema
        resolve(resultado)
      }catch(error){
        // en caso de que ocurra un error
        reject(error)
      }
    })
   }
}
