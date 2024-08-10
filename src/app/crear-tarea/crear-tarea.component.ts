import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TableroService} from "../tablero.service";
import Swal from "sweetalert2";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-crear-tarea',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
      HttpClientModule,
        CommonModule
    ],
  providers: [TableroService],
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})
export class CrearTareaComponent {

  public titulo: string = "";
  public descripcion: string = "";
  public estado: string = "";
  public prioridad: string = "";
  public horas: string = "";

  constructor(public tableroService: TableroService) {}



  async saveTareaOnBDD() {
    try {
      let newTask = this.buildAndGetNewTaskObject();
      await this.tableroService.CrearTarea(newTask);
      Swal.fire({
        icon: 'success',
        title: 'Tarea guardada',
        text: 'La tarea se ha guardado correctamente.',
        confirmButtonText: 'Aceptar'
      });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al guardar la tarea.',
        confirmButtonText: 'Aceptar'
      });
      console.log("Ocurrió un error", e);
    }
  }

  buildAndGetNewTaskObject(){
    let newTask = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      estado: this.estado,
      prioridad: this.prioridad,
      horas: this.horas
    }
    return newTask;
  }
}
