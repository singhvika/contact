import { TestBed } from '@angular/core/testing';

import { ContactsProviderService } from './contacts-provider.service';

describe('ContactsProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactsProviderService = TestBed.get(ContactsProviderService);
    expect(service).toBeTruthy();
  });
});
