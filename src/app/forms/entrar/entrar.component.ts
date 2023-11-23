import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/sistema/interfaces/usuario';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.less']
})
export class EntrarComponent {
  @Output() onSubmit = new EventEmitter<Usuario>();

  entrarForm!: FormGroup;

  ngOnInit(): void {
    this.entrarForm = new FormGroup({
      nomeUsuario: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    })
  }

  get nomeUsuario() {
    return this.entrarForm.get('nomeUsuario')!;
  }

  get senha() {
    return this.entrarForm.get('senha')!;
  }

  submit() {
    if (this.entrarForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.entrarForm.value);
  }

}
