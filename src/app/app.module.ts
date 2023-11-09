import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { TareaCardComponent } from './tarea-card/tarea-card.component';
import { TareaFormularioComponent } from './tarea-formulario/tarea-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MiComponenteComponent,
    TareaCardComponent,
    TareaFormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
