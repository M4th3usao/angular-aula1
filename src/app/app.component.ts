import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html', //apontamento para outro arquivo, no caso para o my-app
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Matheus Henrique';
  nascimento = 2001;
  action = '-';
  round = 0;
  second = 5;
  counter = 0;
  timer = setInterval(() => {
    if (this.round < 1) this.action = 'PREPARE';
    else if (this.round > 8) this.action = 'DONE!';
    else if (this.second > 10) this.action = 'DO IT!!!';
    else this.action = 'REST!';
    document.getElementById('app-action').innerHTML = this.action;
    if (this.round >= 1 && this.round <= 8) {
      document.getElementById('app-round').innerHTML = this.round.toString();
    } else {
      document.getElementById('app-round').innerHTML = '-';
    }
    if (this.round <= 8) {
      document.getElementById('app-time').innerHTML =
        this.second.toString() + 's';
    } else {
      document.getElementById('app-time').innerHTML = '-';
    }
    this.counter = this.counter + 1;

    this.second -= 1;
    if (this.second == 0) {
      this.round += 1;
      this.second = 30;
    }
  }, 1000);

  getIdade() {
    return 2022 - this.nascimento;
  }
  getMinutos() {
    return Math.trunc(this.counter / 60);
  }
  getSegundos() {
    return Math.trunc(this.counter % 60);
  }
  getNumbers() {
    return [1, 89, 35, 22, 17];
  }
}
