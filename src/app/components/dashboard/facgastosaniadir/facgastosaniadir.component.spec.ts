import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacgastosaniadirComponent } from './facgastosaniadir.component';

describe('FacgastosaniadirComponent', () => {
  let component: FacgastosaniadirComponent;
  let fixture: ComponentFixture<FacgastosaniadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacgastosaniadirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacgastosaniadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
