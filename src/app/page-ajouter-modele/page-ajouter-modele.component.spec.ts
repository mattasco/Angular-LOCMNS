import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjouterModeleComponent } from './page-ajouter-modele.component';

describe('PageAjouterModeleComponent', () => {
  let component: PageAjouterModeleComponent;
  let fixture: ComponentFixture<PageAjouterModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjouterModeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjouterModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
