import { Component, EventEmitter, Output } from "@angular/core";
import { Tarea } from '../mi-componente/models/tarea.model';

@Component({
    selector: 'app-tarea-formulario',
    templateUrl: './tarea-formulario.component.html'
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