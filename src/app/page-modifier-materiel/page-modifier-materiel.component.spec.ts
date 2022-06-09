import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifierMaterielComponent } from './page-modifier-materiel.component';

describe('PageModifierMaterielComponent', () => {
  let component: PageModifierMaterielComponent;
  let fixture: ComponentFixture<PageModifierMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifierMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModifierMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
