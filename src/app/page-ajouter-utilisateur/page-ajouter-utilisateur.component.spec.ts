import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjouterUtilisateurComponent } from './page-ajouter-utilisateur.component';

describe('PageAjouterUtilisateurComponent', () => {
  let component: PageAjouterUtilisateurComponent;
  let fixture: ComponentFixture<PageAjouterUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjouterUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjouterUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
