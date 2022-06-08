import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifierMarqueComponent } from './page-modifier-marque.component';

describe('PageModifierMarqueComponent', () => {
  let component: PageModifierMarqueComponent;
  let fixture: ComponentFixture<PageModifierMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifierMarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModifierMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
