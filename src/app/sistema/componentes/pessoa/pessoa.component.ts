import { Component, EventEmitter, Output } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa';
import { PessoaService } from '../../services/routes/pessoa.service';
import { AtualizarService } from '../../services/atualizar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.less']
})
export class PessoaComponent {

  pessoaInForm!: FormGroup;
  pessoas: Pessoa[] = [];
  colunasE: boolean = false;

  nomeBuscar: string = '';
  publicoBuscar: string = '';

  constructor (private pessoaService: PessoaService, private atualizar: AtualizarService) {
    this.getPessoas();
  }

  ngOnInit(): void {
    this.pessoaInForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      telefone: new FormControl(),
      publico: new FormControl(null, Validators.required),
    })
  }

  get nome() {
    return this.pessoaInForm.get('nome')!;
  }

  get email() {
    return this.pessoaInForm.get('email')!;
  }

  get telefone() {
    return this.pessoaInForm.get('telefone')!;
  }

  get publico() {
    return this.pessoaInForm.get('publico')!;
  }

  submit(): void {
    if (this.pessoaInForm.invalid) {
      return;
    }
    this.adicionarPessoa(this.pessoaInForm.value)
    this.pessoaInForm.reset();
  }

  async adicionarPessoa(pessoa: Pessoa) {
    const formData = new FormData;

    formData.append('nome', pessoa.nome);
    formData.append('email', pessoa.email);
    formData.append('telefone', pessoa.telefone as any);
    formData.append('publico', pessoa.publico);

    await this.pessoaService.adicionar(formData).subscribe();
    this.recaregarTabela();
  }

  recaregarTabela(): void {
    this.getPessoas();
  }

  editarPessoa(pessoa: Pessoa) {
    this.atualizar.alterarPessoa(pessoa);
  }

  getPessoasPorNome(nome: string): void {
    this.pessoaService.consultarPorNome(nome).subscribe((pessoas) => (this.pessoas = pessoas));
  }

  getPessoasPorPublico(publico: string): void {
    this.pessoaService.consultarPorPublico(publico).subscribe((pessoas) => (this.pessoas = pessoas));
  }

  getPessoas(): void {
    this.pessoaService.consultarTodos().subscribe((pessoas) => (this.pessoas = pessoas));
  }

}
