import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjouterTypeComponent } from './page-ajouter-type.component';

describe('PageAjouterTypeComponent', () => {
  let component: PageAjouterTypeComponent;
  let fixture: ComponentFixture<PageAjouterTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjouterTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjouterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
