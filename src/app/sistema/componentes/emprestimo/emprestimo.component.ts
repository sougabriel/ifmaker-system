import { Component } from '@angular/core';
import { Emprestimo } from '../../interfaces/emprestimo';
import { EmprestimoService } from '../../services/routes/emprestimo.service';
import { AtualizarService } from '../../services/atualizar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.less']
})
export class EmprestimoComponent {

  emprestimos: Emprestimo[] = [];
  emprestimoInForm!: FormGroup;
  colunasE: boolean = false;

  constructor(private emprestimoService: EmprestimoService, private atualizar: AtualizarService) {
    this.getEmprestimos();
  }

  ngOnInit(): void {
    this.emprestimoInForm = new FormGroup({
      dataInicial: new FormControl(null, Validators.required),
      dataFinal: new FormControl(null, Validators.required),
      finalidade: new FormControl(),
      pessoaId: new FormControl(null, Validators.required),
      materialId: new FormControl(null, Validators.required),
    })
  }

  get dataInicial() {
    return this.emprestimoInForm.get('dataInicial')!;
  }

  get dataFinal() {
    return this.emprestimoInForm.get('dataFinal')!;
  }

  get finalidade() {
    return this.emprestimoInForm.get('finalidade')!;
  }

  get pessoaId() {
    return this.emprestimoInForm.get('pessoaId')!;
  }

  get materialId() {
    return this.emprestimoInForm.get('materialId')!;
  }

  submit(): void {
    if (this.emprestimoInForm.invalid) {
      return;
    }
    this.adicionarPessoa(this.emprestimoInForm.value)
  }

  async adicionarPessoa(emprestimo: Emprestimo) {
    const formData = new FormData;

    formData.append('dataInicial', emprestimo.dataInicial as any);
    formData.append('dataFinal', emprestimo.dataFinal  as any);
    formData.append('finalidade', emprestimo.finalidade!);
    formData.append('pessoaId', emprestimo.pessoaId  as any);
    formData.append('materialId', emprestimo.materialId  as any);

    await this.emprestimoService.adicionar(formData).subscribe();
    this.recaregarTabela();
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
