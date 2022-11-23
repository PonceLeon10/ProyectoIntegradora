import { Component, OnInit } from '@angular/core';

interface Elemento{
  icono: string;
  nombre:string;
  ruta:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  elementos: Elemento[]=[
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
    icono: 'sparkles-sharps',
    nombre:'  Secretos',
    ruta:'/secretos'
    },
    ];

  constructor() { }

  ngOnInit() {
  }

}
