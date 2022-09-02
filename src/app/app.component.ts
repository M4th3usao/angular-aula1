import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html', //apontamento para outro arquivo, no caso para o my-app
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Matheus Henrique';
  nascimento = 2001;
}
