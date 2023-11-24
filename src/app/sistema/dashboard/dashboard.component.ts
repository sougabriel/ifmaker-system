import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {

  list: string[];

  constructor() {
    this.list = ["material", "pessoa", "projeto", "pessoa-projeto", "acesso", "usuario", "registro"];
  }



}
