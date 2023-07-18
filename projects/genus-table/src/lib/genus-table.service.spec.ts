import { TestBed } from '@angular/core/testing';

import { GenusTableService } from './genus-table.service';

describe('GenusTableService', () => {
  let service: GenusTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenusTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
