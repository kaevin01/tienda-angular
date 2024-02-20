import { TestBed } from '@angular/core/testing';

import { ProducByIdService } from './produc-by-id.service';

describe('ProducByIdService', () => {
  let service: ProducByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
