import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { PessoaComponent } from './componentes/pessoa/pessoa.component';
import { MaterialComponent } from './componentes/material/material.component';
import { ProjetoComponent } from './componentes/projeto/projeto.component';
import { PessoaProjetoComponent } from './componentes/pessoa-projeto/pessoa-projeto.component';
import { AcessoComponent } from './componentes/acesso/acesso.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: '/sistema/pessoa', pathMatch: 'full' },
  { path: 'sistema', title: 'Sistema', component: DashboardComponent, children: [
    { path: 'usuario', title: 'Usuário', component: UsuarioComponent },
    { path: 'pessoa', title: '', component: PessoaComponent },
    { path: 'material', title: '', component: MaterialComponent },
    { path: 'projeto', title: '', component: ProjetoComponent },
    { path: 'pessoa-projeto', title: '', component: PessoaProjetoComponent },
    { path: 'acesso', title: '', component: AcessoComponent },
    { path: 'registro', title: '', component: RegistroComponent },
  ] },
  { path: '**', title: 'Página Não Encontrada', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
