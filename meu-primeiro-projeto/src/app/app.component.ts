import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-data-biding></app-data-biding>
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <app-diretivas-atributos
      ><h1>Aulas de Diretivas Atributo</h1>
      <h3>Final da aula</h3>
    </app-diretivas-atributos>

    <app-diretivas-atributos
      ><h1>Testando</h1>
      <h3>Testando ...</h3>
    </app-diretivas-atributos>

    <app-diretivas-atributos></app-diretivas-atributos>

    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
