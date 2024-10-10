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
    // Inicializa el almacenamiento
    await this.storage.create();
  }

  // Método para agregar tareas al almacenamiento
  async agregarTarea(tarea: string) {
    let tareas = await this.storage.get('tareas') || [];
    tareas.push(tarea);
    await this.storage.set('tareas', tareas);
  }

  // Método para obtener todas las tareas del almacenamiento
  async obtenerTareas(): Promise<string[]> {
    return await this.storage.get('tareas') || [];
  }
}
