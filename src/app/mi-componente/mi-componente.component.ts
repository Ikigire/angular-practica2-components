import { Component, OnInit } from '@angular/core';
import { Tarea } from './models/tarea.model';
import { MenuItem } from './models/menu-item.model';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  // public menuItems: {item:string, active:boolean}[] = [];
  // Opciones para el menú
  activeMenuItem: MenuItem = {item: 'Mis tareas', active: false};
  // public tareas: {titulo:string, descripcion:string, status:string}[] = [];
  // Lista de tareas guardadas
  tareas: Tarea[] = [];
  // Objeto para agregar tareas
  newTarea: Tarea = {
    titulo: 'l,askdjaslkdhnaskjd', 
    descripcion: '',
    status: 'Pendiente'
  };

  constructor() {
    
  }

  ngOnInit(): void {
    const tareasJson = localStorage.getItem("tareas");
    if (tareasJson != null) {
      this.tareas = JSON.parse(tareasJson);
    }
  }

  public catchMenuItem(item: MenuItem): void {
    this.activeMenuItem = item;
  }

  private almacenarDatos(): void {
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }
}
