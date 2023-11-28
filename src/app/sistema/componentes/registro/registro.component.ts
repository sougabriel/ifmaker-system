import { Component } from '@angular/core';
import { Registro } from '../../interfaces/registro';
import { RegistroService } from '../../services/routes/registro.service';
import { AtualizarService } from '../../services/atualizar.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.less']
})
export class RegistroComponent {

  registros: Registro[] = [];

  constructor(private registroService: RegistroService, private atualizar: AtualizarService) {
    this.getRegistros();
  }

  getRegistros(): void {
    this.registroService.consultarTodos().subscribe((registros) => (this.registros = registros));
  }

  editarRegistro(registro: Registro) {
    this.atualizar.alterarRegistro(registro);
  }

  removeRegistro(id: number) {
    this.registros = this.registros.filter((a) => id !== a.id);
    this.registroService.removerPorId(id).subscribe();
  }

}
