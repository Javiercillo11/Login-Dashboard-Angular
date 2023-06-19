import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesaniadirComponent } from './clientesaniadir.component';

describe('ClientesaniadirComponent', () => {
  let component: ClientesaniadirComponent;
  let fixture: ComponentFixture<ClientesaniadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesaniadirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesaniadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
