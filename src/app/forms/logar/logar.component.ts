import { Component } from '@angular/core';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Usuario } from 'src/app/sistema/interfaces/usuario';
import { UsuarioService } from 'src/app/sistema/services/routes/usuario.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.less']
})
export class LogarComponent {

  constructor (private usuarioService: UsuarioService, private mensagem: MensagensService) {

  }

  async createHandler(usuario: Usuario) {
    const formData = new FormData();

    formData.append('nomeUsuario', usuario.nomeUsuario);
    formData.append('senha', usuario.senha!);

    await this.usuarioService.entrar(formData).subscribe();
    
    this.mensagem.adicionar(usuario.nomeUsuario + " Logado com sucesso! ");

  }
}
