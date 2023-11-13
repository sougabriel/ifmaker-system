import { Component } from '@angular/core';
import { UsuariosService } from '../services/routes/usuarios.service';
import { Usuarios } from '../interfaces/usuarios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {

  usuarios?: Usuarios[] = [];

  constructor (private usuariosService: UsuariosService) {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuariosService.getAll().subscribe((usuarios) => (this.usuarios = usuarios));
  }

}
