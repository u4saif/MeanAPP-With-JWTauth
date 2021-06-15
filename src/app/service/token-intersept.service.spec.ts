import { TestBed } from '@angular/core/testing';

import { TokenInterseptService } from './token-intersept.service';

describe('TokenInterseptService', () => {
  let service: TokenInterseptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterseptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
