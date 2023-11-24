import { Component } from '@angular/core';
import { Projeto } from '../../interfaces/projeto';
import { ProjetoService } from '../../services/routes/projeto.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.less']
})
export class ProjetoComponent {

  projetos: Projeto[] = [];

  constructor(private projetoService: ProjetoService) {
    this.getProjetos();
  }

  getProjetos(): void {
    this.projetoService.consultarTodos().subscribe((projetos) => (this.projetos = projetos));
  }

  removeProjeto(id: number) {
    this.projetos = this.projetos.filter((a) => id !== a.id);
    this.projetoService.removerPorId(id).subscribe();
  }

}
