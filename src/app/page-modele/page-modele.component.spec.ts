import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModeleComponent } from './page-modele.component';

describe('PageModeleComponent', () => {
  let component: PageModeleComponent;
  let fixture: ComponentFixture<PageModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
