import { TestBed, inject } from '@angular/core/testing';

import { UtilisateurManagerService } from './utilisateur-manager.service';

describe('UtilisateurManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilisateurManagerService]
    });
  });

  it('should be created', inject([UtilisateurManagerService], (service: UtilisateurManagerService) => {
    expect(service).toBeTruthy();
  }));
});
