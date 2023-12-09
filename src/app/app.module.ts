import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EntrarComponent } from './forms/entrar/entrar.component';
import { MensagensComponent } from './componentes/mensagens/mensagens.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SistemaModule } from './sistema/sistema.module';
import { LogarComponent } from './forms/logar/logar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    InicioComponent,
    EntrarComponent,
    MensagensComponent,
    LogarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    SistemaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
