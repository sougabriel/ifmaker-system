import { Component } from '@angular/core';
import { Acesso } from '../../interfaces/acesso';
import { AcessoService } from '../../services/routes/acesso.service';
import { AtualizarService } from '../../services/atualizar.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Pessoa } from '../../interfaces/pessoa';
import { PessoaService } from '../../services/routes/pessoa.service';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.less']
})
export class AcessoComponent {

  acessoInForm!: FormGroup; 

  pessoas: Pessoa[] = [];
  acessos: Acesso[] = [];

  colunasE: boolean = false;

  dataBuscar!: Date;
  pessoaIdBuscar!: number;

  setPessoa(pessoaId: number) {
    this.pessoaIdBuscar = pessoaId;
  } 

  constructor (private acessoService: AcessoService, private atualizar: AtualizarService, private mensagem: MensagensService, private pessoaService: PessoaService) {
    this.getAcessos();
    this.getPessoasOrdNome();
  }

  ngOnInit(): void {
    this.acessoInForm = new FormGroup({
      id: new FormControl(),
      diaHoraEntrada: new FormControl(),
      finalidade: new FormControl(),
      pessoaId: new FormControl(),
    });
  }

  get id() {
    return this.acessoInForm.get('id');
  }
  get diaHoraEntrada() {
    return this.acessoInForm.get('diaHoraEntrada');
  }
  get finalidade() {
    return this.acessoInForm.get('finalidade');
  }
  get pessoaId() {
    return this.acessoInForm.get('pessoaId');
  }

  submit() {
    if (this.acessoInForm.invalid) {
      return;
    }
    this.adicionarAcesso(this.acessoInForm.value);
    this.acessoInForm.reset();
  }


  // Alterar Acesso
  editarAcesso(acesso: Acesso) {
    this.atualizar.alterarAcesso(acesso);
  }

  recaregarTabela(): void {
    this.getAcessos();
  }


  // Adicionar Acesso
  async adicionarAcesso(acesso: Acesso) {
    const formData = new FormData();

    formData.append('diaHoraEntrada', acesso.diaHoraEntrada as any);
    
    if (acesso.finalidade == null) {
      formData.append('finalidade', '');
    } else {
      formData.append('finalidade', acesso.finalidade!);
    }

    formData.append('pessoaId', acesso.pessoaId as any);

    await this.acessoService.adicionar(formData).subscribe();
    this.recaregarTabela();
    this.mensagem.adicionar("Acesso adicionado com suscesso!");
  }

  // Consultas de Acessos
  async getAcessos() {
    await this.acessoService.consultarTodos().subscribe((acessos) => (this.acessos = acessos));
  }

  async getAcessosOrdPorData() {
    await this.acessoService.consultarTodosOrdPorData().subscribe((acessos) => (this.acessos = acessos));
  }

  async getAcessoPorData(data: Date) {
    await this.acessoService.consultarPorData(data).subscribe((acessos) => (this.acessos = acessos));
    console.log(this.dataBuscar)
  }

  async getAcessoPorPessoa(pessoaId: number) {
    await this.acessoService.consultarPorPessoa(pessoaId).subscribe((acessos) => (this.acessos = acessos));
  }

  // Consulta de Pessoas
  async getPessoasOrdNome() {
    await this.pessoaService.consultarTodos().subscribe((pessoas) => (this.pessoas = pessoas));
  }

}
