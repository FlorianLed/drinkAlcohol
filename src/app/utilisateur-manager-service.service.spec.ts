import { TestBed, inject } from '@angular/core/testing';

import { UtilisateurManagerServiceService } from './utilisateur-manager-service.service';

describe('UtilisateurManagerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilisateurManagerServiceService]
    });
  });

  it('should be created', inject([UtilisateurManagerServiceService], (service: UtilisateurManagerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
