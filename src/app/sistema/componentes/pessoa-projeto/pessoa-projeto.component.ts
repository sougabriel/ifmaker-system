import { Component } from '@angular/core';
import { PessoaProjeto } from '../../interfaces/pessoa-projeto';
import { PessoaProjetoService } from '../../services/routes/pessoa-projeto.service';
import { AtualizarService } from '../../services/atualizar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from '../../interfaces/pessoa';
import { PessoaService } from '../../services/routes/pessoa.service';
import { ProjetoService } from '../../services/routes/projeto.service';
import { Projeto } from '../../interfaces/projeto';

@Component({
  selector: 'app-pessoa-projeto',
  templateUrl: './pessoa-projeto.component.html',
  styleUrls: ['./pessoa-projeto.component.less']
})
export class PessoaProjetoComponent {

  pessoas: Pessoa[] = [];
  projetos: Projeto[] = [];

  pessoaProjetoInForm!: FormGroup;
  pessoasProjetos: PessoaProjeto[] = [];
  colunasE: boolean = false;

  constructor (private pessoaProjetosService: PessoaProjetoService, private atualizar: AtualizarService, private pessoaService: PessoaService, private projetoService: ProjetoService) {
    this.getPessoasProjetos();
    this.getPessoas();
    this.getProjetos();
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
    this.pessoaProjetoInForm.reset();
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

  async getPessoasProjetos() { 
    await this.pessoaProjetosService.consultarTodos().subscribe((pessoasProjetos) => (this.pessoasProjetos = pessoasProjetos));
  }

  async getPessoas() {
    await this.pessoaService.consultarTodos().subscribe((pessoas) => (this.pessoas = pessoas));
  }

  async getProjetos() {
    await this.projetoService.consultarTodos().subscribe((projetos) => (this.projetos = projetos));
  }

}
