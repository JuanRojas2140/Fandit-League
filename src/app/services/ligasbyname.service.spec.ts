import { TestBed } from '@angular/core/testing';

import { LigasbynameService } from './ligasbyname.service';

describe('LigasbynameService', () => {
  let service: LigasbynameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigasbynameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
