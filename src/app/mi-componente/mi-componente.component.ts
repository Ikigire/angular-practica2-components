import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { ActiveMenuItem } from '../models/active-menu-item.model';
import { MenuItem } from '../models/menu-item.model';
import { TareaCardItem } from '../models/tarea-card-item.model';
import { Tarea } from '../models/tarea.model';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  // public menuItems: {item:string, active:boolean}[] = [];
  // Opciones para el menú
  activeMenuItem: MenuItem = { item: 'Mis tareas', active: false };
  activeMenuItemIndex: number = 1;
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

  public catchMenuItem(item: ActiveMenuItem): void {
    this.activeMenuItem = item.menuItem;
    this.activeMenuItemIndex = item.activeIndex;
    console.log("Item activo: ",this.activeMenuItemIndex);
    
  }

  private almacenarDatos(): void {
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }

  catchOnStatusChange(info: TareaCardItem) {
    let { indice, tarea } = info;
    this.tareas[indice] = tarea;
    this.almacenarDatos()
  }

  catchOnAddTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    // Navegar a la lista
    this.activeMenuItemIndex = 1;
    console.log("Item activo: ",this.activeMenuItemIndex);
    // Almacenar los datos
    this.almacenarDatos();
  }
}
