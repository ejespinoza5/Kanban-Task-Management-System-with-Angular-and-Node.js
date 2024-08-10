import { Routes } from '@angular/router';
import {EditarTareaComponent} from "./editar-tarea/editar-tarea.component";
import {CrearTareaComponent} from "./crear-tarea/crear-tarea.component";

export const routes: Routes = [
  {path: 'editarTarea/:id', component: EditarTareaComponent, pathMatch: 'full'},
  {path: 'crearTarea', component: CrearTareaComponent, pathMatch: 'full'}
];
