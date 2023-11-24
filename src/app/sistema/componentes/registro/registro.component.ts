import { Component } from '@angular/core';
import { Registro } from '../../interfaces/registro';
import { RegistroService } from '../../services/routes/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.less']
})
export class RegistroComponent {

  registros: Registro[] = [];

  constructor(private registroService: RegistroService) {
    this.getRegistros();
  }

  getRegistros(): void {
    this.registroService.consultarTodos().subscribe((registros) => (this.registros = registros));
  }

  removeRegistro(id: number) {
    this.registros = this.registros.filter((a) => id !== a.id);
    this.registroService.removerPorId(id).subscribe();
  }

}
