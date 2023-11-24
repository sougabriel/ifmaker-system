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
import { EmprestimoComponent } from './componentes/emprestimo/emprestimo.component';

const routes: Routes = [
  { path: '', redirectTo: '/sistema/pessoa', pathMatch: 'full' },
  { path: 'sistema', title: 'Sistema', component: DashboardComponent, children: [
    { path: 'usuario', title: 'Usuário', component: UsuarioComponent },
    { path: 'pessoa', title: 'Pessoa', component: PessoaComponent },
    { path: 'material', title: 'Material', component: MaterialComponent },
    { path: 'emprestimo', title: 'Emprestimos', component: EmprestimoComponent },
    { path: 'projeto', title: 'Projeto', component: ProjetoComponent },
    { path: 'pessoa-projeto', title: 'Pessoas em Projetos', component: PessoaProjetoComponent },
    { path: 'acesso', title: 'Acessos', component: AcessoComponent },
    { path: 'registro', title: 'Registros', component: RegistroComponent },
  ] },
  { path: '**', title: 'Página Não Encontrada', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
