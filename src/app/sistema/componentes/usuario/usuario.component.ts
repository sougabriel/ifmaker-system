import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../services/routes/usuario.service';
import { AtualizarService } from '../../services/atualizar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.less']
})
export class UsuarioComponent {

  usuarioInForm!: FormGroup;
  usuarios: Usuario[] = [];
  colunasE: boolean = false;

  constructor(private usuarioService: UsuarioService, private atualizar: AtualizarService) {
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

  submit() {
    if (this.usuarioInForm.invalid) {
      return;
    }
    this.adicionarUsuario(this.usuarioInForm.value);
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

  getUsuarios(): void {
    this.usuarioService.consultarTodos().subscribe((usuarios) => (this.usuarios = usuarios));
  }

  recaregarTabela(): void {
    this.getUsuarios();
  }

  editarUsuario(usuario: Usuario) {
    this.atualizar.alterarUsuario(usuario);
  }

}
