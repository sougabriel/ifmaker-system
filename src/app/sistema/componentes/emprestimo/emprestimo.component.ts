import { Component } from '@angular/core';
import { Emprestimo } from '../../interfaces/emprestimo';
import { EmprestimoService } from '../../services/routes/emprestimo.service';
import { AtualizarService } from '../../services/atualizar.service';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.less']
})
export class EmprestimoComponent {

  emprestimos: Emprestimo[] = [];

  constructor(private emprestimoService: EmprestimoService, private atualizar: AtualizarService) {
    this.getEmprestimos();
  }

  getEmprestimos(): void {
    this.emprestimoService.consultarTodos().subscribe((emprestimos) => (this.emprestimos = emprestimos));
  }

  recaregarTabela(): void {
    this.getEmprestimos();
  }

  editarEmprestimo(emprestimo: Emprestimo) {
    this.atualizar.alterarEmprestimo(emprestimo);
  }
  
}
