import { Component } from '@angular/core';

interface menu{
  icono: string;
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  elementos: menu[] = [
    { // elemento de la lista
      icono: 'brush-sharp',
      nombre:'Escenario',
      ruta:'/escenario'
      },
      { //elemento de la lista
      icono: 'cube-sharp',
      nombre:'Items',
      ruta:'/items'
      },
      { // elemento de la lista
      icono: 'body-sharp',
      nombre:'Personajes',
      ruta:'/personajes'
      },
      { // elemento de la lista
      icono: 'sparkles-sharp',
      nombre:'  Secretos',
      ruta:'/secretos'
      },
      ];

  constructor() {}
}
