import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello', //nome da tag, é necessário.
  template: `<h1>{{name}}!</h1>`, // é qual é o código que está dentro dessa tag, interpolação
  styles: [`h1 { font-family: Lato; }`], //estilos utilizados no componente
})
export class HelloComponent {
  @Input() name: string;
}

//amostra de componente
//nome do arquivo nome.component.ts , senão vai dar erro.
