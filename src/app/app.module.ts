import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MuralComponent } from './components/mural/mural.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FormNovoCartaoComponent } from './components/form-novo-cartao/form-novo-cartao.component';


@NgModule({
  declarations: [
    AppComponent,
    MuralComponent,
    CabecalhoComponent,
    FormNovoCartaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
