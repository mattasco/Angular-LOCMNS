import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParcMaterielComponent } from './page-parc-materiel.component';

describe('PageParcMaterielComponent', () => {
  let component: PageParcMaterielComponent;
  let fixture: ComponentFixture<PageParcMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageParcMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageParcMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
