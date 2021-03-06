import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompararArtigoComponent } from './comparar-artigo/comparar-artigo.component';
import { CadastrarEditarArtigoComponent } from './cadastrar-editar-artigo/cadastrar-editar-artigo.component';
import { HomeComponent } from './home/home.component';
import { EditorModule } from 'primeng/primeng';


import { AppRoutingModule } from './app.routing.module';
import { ArtigosDestaqueComponent } from './artigos-destaque/artigos-destaque.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompararArtigoComponent,
    CadastrarEditarArtigoComponent,
    HomeComponent,
    ArtigosDestaqueComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
