import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/sistema/interfaces/usuario';
import { AtualizarService } from 'src/app/sistema/services/atualizar.service';
import { UsuarioService } from 'src/app/sistema/services/routes/usuario.service';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.less']
})
export class AtualizarUsuarioComponent {

  usuarioForm!: FormGroup;

  constructor(public atualizar: AtualizarService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      id: new FormControl(''),
      nomeUsuario: new FormControl(''),
      senha: new FormControl(''),
      nivel: new FormControl(''),
      idPessoa: new FormControl(''),
    })
  }

  get id() {
    return this.usuarioForm.get('id');
  }

  get nomeUsuario() {
    return this.usuarioForm.get('nomeUsuario');
  }

  get senha() {
    return this.usuarioForm.get('senha')!;
  }

  get nivel() {
    return this.usuarioForm.get('nivel')!;
  }
  
  get idPessoa() {
    return this.usuarioForm.get('idPessoa')!;
  }

  submit() {
    if (this.usuarioForm.invalid) {
      return;
    }
    this.atualizarUsuario(this.usuarioForm.value)
  }

  async atualizarUsuario(usuario: Usuario) {
    const formData = new FormData;
    
    formData.append('nomeUsuario', usuario.nomeUsuario);
    formData.append('senha', usuario.senha!);
    formData.append('nivel', usuario.nivel as any); 
    formData.append('idPessoa', usuario.idPessoa as any);

    await this.usuarioService.atualizar(this.atualizar.usuario.id!, formData).subscribe();

  }

}
