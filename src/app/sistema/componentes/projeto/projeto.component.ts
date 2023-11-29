import { Component } from '@angular/core';
import { Projeto } from '../../interfaces/projeto';
import { ProjetoService } from '../../services/routes/projeto.service';
import { AtualizarService } from '../../services/atualizar.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.less']
})
export class ProjetoComponent {

  projetos: Projeto[] = [];

  constructor(private projetoService: ProjetoService, private atualizar: AtualizarService) {
    this.getProjetos();
  }

  recaregarTabela(): void {
    this.getProjetos();
  }

  getProjetos(): void {
    this.projetoService.consultarTodos().subscribe((projetos) => (this.projetos = projetos));
  }

  editarProjeto(projeto: Projeto) {
    this.atualizar.alterarProjeto(projeto);
  }

}
