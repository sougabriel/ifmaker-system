import { Component } from '@angular/core';
import { PessoaProjeto } from '../../interfaces/pessoa-projeto';
import { PessoaProjetoService } from '../../services/routes/pessoa-projeto.service';
import { AtualizarService } from '../../services/atualizar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-projeto',
  templateUrl: './pessoa-projeto.component.html',
  styleUrls: ['./pessoa-projeto.component.less']
})
export class PessoaProjetoComponent {

  pessoaProjetoInForm!: FormGroup;
  pessoasProjetos: PessoaProjeto[] = [];
  colunasE: boolean = false;

  constructor (private pessoaProjetosService: PessoaProjetoService, private atualizar: AtualizarService) {
    this.getPessoasProjetos();
  }

  ngOnInit(): void {
    this.pessoaProjetoInForm = new FormGroup({
      pessoaId: new FormControl(null, Validators.required),
      projetoId: new FormControl(null, Validators.required),
    });
  }

  get pessoaId() {
    return this.pessoaProjetoInForm.get('pessoaId');
  }
  get projetoId() {
    return this.pessoaProjetoInForm.get('projetoId');
  }

  submit(): void {
    if (this.pessoaProjetoInForm.invalid) {
      return;
    }
    this.adicionarPessoaProjeto(this.pessoaProjetoInForm.value);
  }

  async adicionarPessoaProjeto(pessoaProjeto: PessoaProjeto) {
    const formData = new FormData();

    formData.append('pessoaId', pessoaProjeto.pessoaId as any);
    formData.append('projetoId', pessoaProjeto.projetoId as any);

    await this.pessoaProjetosService.adicionar(formData).subscribe();
    this.recaregarTabela();
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
