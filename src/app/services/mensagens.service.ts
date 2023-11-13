import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  mensagem: string = "";

  constructor() { }

  adicionar(mensagem: string) {
    this.mensagem = mensagem;
    setTimeout( () => {
      this.limpar();
    }, 5000); 
  }

  limpar() {
    this.mensagem = "";
  }

}
