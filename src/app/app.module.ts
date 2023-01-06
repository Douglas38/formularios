import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolasComponent } from './escolas/escolas.component';
import { AlunosComponent } from './alunos/alunos.component';
import { TurmasComponent } from './turmas/turmas.component';

@NgModule({
  declarations: [
    AppComponent,
    EscolasComponent,
    AlunosComponent,
    TurmasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
