import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosaniadirComponent } from './articulosaniadir.component';

describe('ArticulosaniadirComponent', () => {
  let component: ArticulosaniadirComponent;
  let fixture: ComponentFixture<ArticulosaniadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosaniadirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosaniadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
