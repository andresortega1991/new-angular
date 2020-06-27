import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  constructor() {
    this.titulo = "Componente Peliculas"
    console.log("1");
  }

  ngOnInit() {
    console.log("2");
  }
  ngDoCheck() {
    console.log("docheck lanzado");

  }
  cambiarTitulo() {
    this.titulo = "el titulo lo cambieeee!!!"
  }
  ngOnDestroy() {
    console.log("EL COMPONENTE SE VA A ELIMINAR");
  }

}
