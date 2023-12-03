import { Injectable } from '@angular/core';
import { Pessoa } from '../interfaces/pessoa';
import { Usuario } from '../interfaces/usuario';
import { Material } from '../interfaces/material';
import { Projeto } from '../interfaces/projeto';
import { Acesso } from '../interfaces/acesso';
import { Emprestimo } from '../interfaces/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class AtualizarService {

  pessoa!: Pessoa;
  material!: Material;
  projeto!: Projeto;
  acesso!: Acesso;
  emprestimo!: Emprestimo;
  usuario!: Usuario;

  constructor() { }

  alterarPessoa(pessoa: Pessoa) {
    this.pessoa = pessoa;
  }

  alterarMaterial(material: Material) {
    this.material = material;
  }

  alterarProjeto(projeto: Projeto) {
    this.projeto = projeto;
  }

  alterarEmprestimo(emprestimo: Emprestimo) {
    this.emprestimo = emprestimo;
  }

  alterarAcesso(acesso: Acesso) {
    this.acesso = acesso;
  }

  alterarUsuario(usuario: Usuario) {
    this.usuario = usuario;
  }

  limpar(): void {
    this.pessoa = null!;
    this.material = null!;
    this.projeto = null!;
    this.emprestimo = null!;
    this.acesso = null!;
    this.usuario = null!;
  }

}
