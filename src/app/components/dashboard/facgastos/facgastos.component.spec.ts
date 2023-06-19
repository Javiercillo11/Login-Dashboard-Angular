import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacgastosComponent } from './facgastos.component';

describe('FacgastosComponent', () => {
  let component: FacgastosComponent;
  let fixture: ComponentFixture<FacgastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacgastosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacgastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
