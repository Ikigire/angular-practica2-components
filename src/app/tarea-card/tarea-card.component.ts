import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TareaCardItem } from '../models/tarea-card-item.model';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-tarea-card',
  templateUrl: './tarea-card.component.html',
  styleUrls: []
})
export class TareaCardComponent {
  @Input()
  tarea!: Tarea;
  @Input()
  indice: number = -1;

  @Output("onStatusChange") emitter: EventEmitter<TareaCardItem>;

  constructor() {
      this.emitter = new EventEmitter();
  }


  cambiarStatus(status:string): void {
      this.tarea.status = status;

      this.emitter.emit({
          indice: this.indice,
          tarea: this.tarea
      });
  }
}
