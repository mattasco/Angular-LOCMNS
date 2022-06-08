import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifierTypeComponent } from './page-modifier-type.component';

describe('PageModifierTypeComponent', () => {
  let component: PageModifierTypeComponent;
  let fixture: ComponentFixture<PageModifierTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifierTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModifierTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
