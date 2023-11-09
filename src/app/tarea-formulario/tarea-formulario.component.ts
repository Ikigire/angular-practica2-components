import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-tarea-formulario',
  templateUrl: './tarea-formulario.component.html',
  styleUrls: []
})
export class TareaFormularioComponent {

  @Output("onAddTarea") emitter: EventEmitter<Tarea>;

  constructor() {
      this.emitter = new EventEmitter();
  }

  emitirTarea(titulo: string, descripcion: string): void {
      const tarea: Tarea = {
          titulo,
          descripcion,
          status: 'Pendiente'
      };
      this.emitter.emit(tarea);
  }
}
