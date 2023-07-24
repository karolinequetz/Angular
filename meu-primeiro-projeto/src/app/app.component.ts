import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-title *ngIf="destruir"></app-title>
    <br />
    {{ valor }}
    <button (click)="adicionar()">Adicionar</button>
    <br />
    <button (click)="destruirComponent()">Destruir componente</button>
    <router-outlet></router-outlet>`,
})
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  public valor: number = 1;
  public destruir: boolean = true;

  constructor() {}

  public adicionar(): number {
    return (this.valor += 1);
  }
  public destruirComponent() {
    this.destruir = false;
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngDoAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
}
