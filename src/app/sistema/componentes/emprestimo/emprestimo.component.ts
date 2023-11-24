import { Component } from '@angular/core';
import { Emprestimo } from '../../interfaces/emprestimo';
import { EmprestimoService } from '../../services/routes/emprestimo.service';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.less']
})
export class EmprestimoComponent {

  emprestimos: Emprestimo[] = [];

  constructor(private emprestimoService: EmprestimoService) {
    this.getEmprestimos();
  }

  getEmprestimos(): void {
    this.emprestimoService.consultarTodos().subscribe((emprestimos) => (this.emprestimos = emprestimos));
  }


  removeEmprestimo(id: number) {
    this.emprestimos = this.emprestimos.filter((a) => id !== a.id);
    this.emprestimoService.removerPorId(id).subscribe();
  }

}
