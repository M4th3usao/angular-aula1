import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html', //apontamento para outro arquivo, no caso para o my-app
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Matheus Henrique';
  nascimento = 2001;
  counter = 0;
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 100);

  getIdade() {
    return 2022 - this.nascimento;
  }
  getMinutos() {
    return Math.trunc(this.counter / 60);
  }
  getSegundos() {
    return Math.trunc(this.counter % 60);
  }
}
