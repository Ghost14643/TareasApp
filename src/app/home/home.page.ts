import { Component, OnInit } from '@angular/core';
import { TareasService } from '../services/tareas.service';  // Verifica esta importación

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tarea: string = '';
  listaTareas: string[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    this.cargarTareas();
  }

  async agregarTarea() {
    if (this.tarea.trim().length > 0) {
      await this.tareasService.agregarTarea(this.tarea);
      this.tarea = '';
      this.cargarTareas();
    }
  }

  async cargarTareas() {
    this.listaTareas = await this.tareasService.obtenerTareas();
  }
}
