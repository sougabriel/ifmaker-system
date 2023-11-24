import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../services/routes/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.less']
})
export class UsuarioComponent {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.consultarTodos().subscribe((usuarios) => (this.usuarios = usuarios));
  }

  removeUsuario(id: number) {
    this.usuarios = this.usuarios.filter((a) => id !== a.id);
    this.usuarioService.removerPorId(id).subscribe();
  }

}
