import { TestBed, inject } from '@angular/core/testing';

import { ProduitManagerService } from './produit-manager.service';

describe('ProduitManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduitManagerService]
    });
  });

  it('should be created', inject([ProduitManagerService], (service: ProduitManagerService) => {
    expect(service).toBeTruthy();
  }));
});
