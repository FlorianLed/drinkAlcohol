import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagePrincipalComponent } from './admin-page-principal.component';

describe('AdminPagePrincipalComponent', () => {
  let component: AdminPagePrincipalComponent;
  let fixture: ComponentFixture<AdminPagePrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPagePrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
