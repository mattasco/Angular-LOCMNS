import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjouterMaterielComponent } from './page-ajouter-materiel.component';

describe('PageAjouterMaterielComponent', () => {
  let component: PageAjouterMaterielComponent;
  let fixture: ComponentFixture<PageAjouterMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjouterMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjouterMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
