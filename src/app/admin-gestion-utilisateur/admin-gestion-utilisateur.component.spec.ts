import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGestionUtilisateurComponent } from './admin-gestion-utilisateur.component';

describe('AdminGestionUtilisateurComponent', () => {
  let component: AdminGestionUtilisateurComponent;
  let fixture: ComponentFixture<AdminGestionUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGestionUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGestionUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
