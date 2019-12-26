import { TestBed } from '@angular/core/testing';

import { AccountsApiService } from './accounts-api.service';

describe('AccountsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountsApiService = TestBed.get(AccountsApiService);
    expect(service).toBeTruthy();
  });
});
