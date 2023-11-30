import { Component } from '@angular/core';
import { PessoaProjeto } from '../../interfaces/pessoa-projeto';
import { PessoaProjetoService } from '../../services/routes/pessoa-projeto.service';
import { AtualizarService } from '../../services/atualizar.service';

@Component({
  selector: 'app-pessoa-projeto',
  templateUrl: './pessoa-projeto.component.html',
  styleUrls: ['./pessoa-projeto.component.less']
})
export class PessoaProjetoComponent {

  pessoasProjetos: PessoaProjeto[] = [];
  colunasE: boolean = false;

  constructor (private pessoaProjetosService: PessoaProjetoService, private atualizar: AtualizarService) {
    this.getPessoasProjetos();
  }

  editarPessoaProjeto(pessoaProjeto: PessoaProjeto) {
    this.atualizar.alterarPessoaProjeto(pessoaProjeto);
  }

  recaregarTabela(): void {
    this.getPessoasProjetos();
  }

  getPessoasProjetos(): void { 
    this.pessoaProjetosService.consultarTodos().subscribe((pessoasProjetos) => (this.pessoasProjetos = pessoasProjetos));
  }

}
