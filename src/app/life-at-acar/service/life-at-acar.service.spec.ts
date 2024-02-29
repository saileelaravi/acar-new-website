import { TestBed } from '@angular/core/testing';

import { LifeAtAcarService } from './life-at-acar.service';

describe('LifeAtAcarService', () => {
  let service: LifeAtAcarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifeAtAcarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
