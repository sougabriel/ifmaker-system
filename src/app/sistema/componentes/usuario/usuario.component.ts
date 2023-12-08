import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../services/routes/usuario.service';
import { AtualizarService } from '../../services/atualizar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from '../../services/routes/pessoa.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.less']
})
export class UsuarioComponent {
  
  usuarios: Usuario[] = [];
  usuarioInForm!: FormGroup;
  
  colunasE: boolean = false;

  constructor(private usuarioService: UsuarioService, private atualizar: AtualizarService, private pessoaSevice: PessoaService) {
    this.getUsuarios();
  }

  ngOnInit(): void {
    this.usuarioInForm = new FormGroup({
      nomeUsuario: new FormControl(null, Validators.required),
      senha: new FormControl(null, Validators.required),
      nivel: new FormControl(null, Validators.required),
      pessoaId: new FormControl(null, Validators.required),
    }); 
  }

  get nomeUsuario() {
    return this.usuarioInForm.get('nomeUsuario');
  }

  get senha() {
    return this.usuarioInForm.get('senha');
  }

  get nivel() {
    return this.usuarioInForm.get('nivel');
  }

  get pessoaId() {
    return this.usuarioInForm.get('pessoaId');
  }

  submit() {
    if (this.usuarioInForm.invalid) {
      return;
    }
    this.adicionarUsuario(this.usuarioInForm.value);
    this.usuarioInForm.reset();
  }

  async adicionarUsuario(usuario: Usuario) {
    const formData = new FormData();

    formData.append('nomeUsuario', usuario.nomeUsuario);
    formData.append('senha', usuario.senha!);
    formData.append('nivel', usuario.nivel as any);
    formData.append('pessoaId', usuario.pessoaId as any);

    await this.usuarioService.adicionar(formData).subscribe();
    this.recaregarTabela();

  }

  async getUsuarios() {
    await this.usuarioService.consultarTodos().subscribe((usuarios) => (this.usuarios = usuarios));
  }

  recaregarTabela(): void {
    this.getUsuarios();
  }

  editarUsuario(usuario: Usuario) {
    this.atualizar.alterarUsuario(usuario);
  }

}
