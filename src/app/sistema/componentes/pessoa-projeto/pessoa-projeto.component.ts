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

  constructor (private pessoaProjetosService: PessoaProjetoService, private atualizar: AtualizarService) {
    this.getPessoasProjetos();
  }

  editarPessoaProjeto(pessoaProjeto: PessoaProjeto) {
    this.atualizar.alterarPessoaProjeto(pessoaProjeto);
  }

  getPessoasProjetos(): void { 
    this.pessoaProjetosService.consultarTodos().subscribe((pessoasProjetos) => (this.pessoasProjetos = pessoasProjetos));
  }

  removePessoaProjeto(idPessoa: number, idProjeto: number) {
    this.pessoasProjetos = this.pessoasProjetos.filter((a) => idPessoa !== a.idPessoa || idProjeto !== a.idProjeto);
    this.pessoaProjetosService.removerPorId(idPessoa).subscribe();
  }

}
