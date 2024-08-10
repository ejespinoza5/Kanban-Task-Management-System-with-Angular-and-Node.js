import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TableroService {
  url = 'http://localhost:3001';


  constructor(private http: HttpClient) {
  }

  ObtenerTodasTareasCurso(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/tablero_curso')
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  ObtenerTodasTareasPendientes(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/tablero_pendiente')
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  ObtenerTodasTareasHechas(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/tablero_hecho')
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  //Obtener tarea por id
  ObtenerTarea(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/tablero/' + id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  //Actualizar tarea
  ActualizarTarea(tarea: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + '/tablero/' +tarea.id, tarea)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  //Crear tarea
  CrearTarea(tarea: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/tablero', tarea)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }


}
