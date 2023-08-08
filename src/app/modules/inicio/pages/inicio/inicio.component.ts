import { Component, OnInit } from '@angular/core';
import { Messi } from 'src/app/models/messi';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PUBLICA (TIPO ARRAY)
  public info: Messi[];


  constructor(){
    this.info = [
      {
        id: 1,
        titulo: "Goku",
        descripcion: "Goku fase dios",
        image: "https://i.blogs.es/023c0d/goku-super-saiyajin-dios-akira-toriayma-4/1366_2000.jpeg",
        alt: "kame kame kame haaaaaaaaaaaa"
      },
      {
        id: 2,
        titulo: "Messi",
        descripcion: "El mejor jugador del mundo",
        image: "https://media.tycsports.com/files/2023/02/10/532928/lionel-messi_1440x810_wmk.webp",
        alt: "messi"
      },
      {
        id: 3,
        titulo: "Julian Alvarez",
        descripcion: "Otro mejor jugador del mundo",
        image: "https://tmssl.akamaized.net/images/foto/galerie/alvarez-julian-2022-23-argentina-1669219939-97261.jpg?lm=1669219952",
        alt: "hola"
      }
    ]
  }

  // EVENTO DE CONSUTRUCCION/INICIALIZACION
  ngOnInit(): void{}
}
