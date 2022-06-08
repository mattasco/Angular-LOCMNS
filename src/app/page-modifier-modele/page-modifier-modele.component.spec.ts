import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifierModeleComponent } from './page-modifier-modele.component';

describe('PageModifierModeleComponent', () => {
  let component: PageModifierModeleComponent;
  let fixture: ComponentFixture<PageModifierModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifierModeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModifierModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
