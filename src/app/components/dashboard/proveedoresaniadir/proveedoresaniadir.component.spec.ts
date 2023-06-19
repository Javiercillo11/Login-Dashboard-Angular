import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresaniadirComponent } from './proveedoresaniadir.component';

describe('ProveedoresaniadirComponent', () => {
  let component: ProveedoresaniadirComponent;
  let fixture: ComponentFixture<ProveedoresaniadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoresaniadirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresaniadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
