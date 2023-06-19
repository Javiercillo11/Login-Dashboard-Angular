import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamiliaaniadirComponent } from './familiaaniadir.component';

describe('FamiliaaniadirComponent', () => {
  let component: FamiliaaniadirComponent;
  let fixture: ComponentFixture<FamiliaaniadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamiliaaniadirComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FamiliaaniadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});