import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.less']
})
export class PageNotFoundComponent {
  
  tempo: number = 5; 

  constructor(private route: Router, private message: MensagensService) {
    setTimeout(() => {
      this.message.adicionar("Redirecionado para página inicial! ");
      this.route.navigate(['/inicio']);
    }, 5000);
    setInterval(() => {
      this.tempo = this.tempof(this.tempo);
    }, 1000);
  }

  tempof(tempo: number): number {
    return tempo - 1;
  }

}
