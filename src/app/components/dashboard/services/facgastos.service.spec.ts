import { TestBed } from '@angular/core/testing';
import { FacgastosService } from './facgastos.service';

describe('Service: Facgastos', () => {
  let service: FacgastosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacgastosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
