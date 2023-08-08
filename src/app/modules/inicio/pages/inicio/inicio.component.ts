import { Component, OnInit } from '@angular/core';
import { TarjetaInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PUBLICA (TIPO ARRAY)
  public info: TarjetaInicio[];

  constructor(){
    this.info = [
      {
        titulo: "Goku",
        descripcion: "Goku fase dios",
        image: "https://i.blogs.es/023c0d/goku-super-saiyajin-dios-akira-toriayma-4/1366_2000.jpeg",
        alt: "kame kame kame haaaaaaaaaaaa"
      }
    ]
  }

  // EVENTO DE CONSUTRUCCION/INICIALIZACION
  ngOnInit(): void{}
}
