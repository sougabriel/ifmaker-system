import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../services/routes/usuario.service';
import { AtualizarService } from '../../services/atualizar.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.less']
})
export class UsuarioComponent {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private atualizar: AtualizarService) {
    this.getUsuarios();
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
