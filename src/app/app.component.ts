import {Component, ChangeDetectorRef, Input} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import {TableroService} from "./tablero.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers:[TableroService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Tablero Kanban';

  public tareas:any=[];

  public TareasCurso:any=[];

  public TareasHechas:any=[];

  constructor(private tableroService: TableroService, private router: Router) {
    this.getTareas();
    this.getTareasCurso();
    this.getTareasHechas();
  }

  async getTareas(){
    try {
      this.tareas = await this.tableroService.ObtenerTodasTareasPendientes();
    } catch (e) {
      console.log("ocurrio un error",e);
    }
  }

  async getTareasCurso(){
    try {
      this.TareasCurso = await this.tableroService.ObtenerTodasTareasCurso();
    } catch (e) {
      console.log("ocurrio un error",e);
    }
  }

  async getTareasHechas(){
    try {
      this.TareasHechas = await this.tableroService.ObtenerTodasTareasHechas();
    } catch (e) {
      console.log("ocurrio un error",e);
    }
  }

  @Input() TableroService:any[]=[];
  modalIsActive: boolean = false;
  editarTarea(id: string){
    this.modalIsActive = true;
   this.router.navigate(['/editarTarea', id]);
  }
  closeModal() {
    this.modalIsActive = false;
  }
  crearTarea(){
    this.modalIsActive = true;
    this.router.navigate(['/crearTarea']);
  }


}
