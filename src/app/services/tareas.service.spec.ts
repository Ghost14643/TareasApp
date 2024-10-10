import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async agregarTarea(tarea: string) {
    let tareas = await this.storage.get('tareas') || [];
    tareas.push(tarea);
    await this.storage.set('tareas', tareas);
  }

  obtenerTareas(): Promise<string[]> {
    return this.storage.get('tareas') || [];
  }
}
