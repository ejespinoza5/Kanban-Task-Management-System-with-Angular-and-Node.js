import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TableroService} from "../tablero.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-tarea',
  standalone: true,
  imports: [
    FormsModule, HttpClientModule, CommonModule
  ],
  providers: [TableroService],
  templateUrl: './editar-tarea.component.html',
  styleUrl: './editar-tarea.component.css'
})
export class EditarTareaComponent implements OnInit{

  tarea: any = {};

  constructor(
    private route: ActivatedRoute,
    private tableroService: TableroService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.loadTarea();
  }

  loadTarea() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tableroService.ObtenerTarea(id).then(data => {
        this.tarea = Array.isArray(data) ? data[0] : data;
      }).catch(err => {
        console.error('Error al cargar la tarea', err);
      });
    }
  }
  modalIsActive: boolean = false;
  updateTarea() {
    this.tableroService.ActualizarTarea(this.tarea).then(() => {
      // Mostrar alerta de éxito
      Swal.fire({
        icon: 'success',
        title: 'Tarea actualizada',
        text: 'La tarea se ha actualizado exitosamente',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        // Redirigir después de que el usuario cierre la alerta
        this.router.navigate(['/']);
      });
    }).catch(err => {
      // Mostrar alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al actualizar la tarea',
        confirmButtonText: 'Aceptar'
      });
      console.error('Error al actualizar la tarea', err);
    });
  }


  closeModal(){
    this.modalIsActive=false
  }
}
