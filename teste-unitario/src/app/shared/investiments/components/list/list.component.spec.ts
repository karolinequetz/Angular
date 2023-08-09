import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investments', () => {
    let investments = component.investments;
    expect(investments.length).toBe(4);
    expect(investments[0].name).toContain('Itaú');
    expect(investments[3].name).toContain('Inter');
  });

  it('(I) should list investments', () => {
    let investments =
      fixture.debugElement.nativeElement.querySelectorAll('.list-items');

    expect(investments.length).toBe(4);
    expect(investments[0].textContent.trim()).toEqual('Itaú | 100');
    expect(investments[3].textContent.trim()).toEqual('Inter | 100');
  });
});
