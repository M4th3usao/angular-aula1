import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component'; //sem extensão é TypeS

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

//nesse arquivo que insere-se os parâmetros do módulo, ou seja, separar os componentes em módulos. Cada pasta terá um arquivo de configuração
