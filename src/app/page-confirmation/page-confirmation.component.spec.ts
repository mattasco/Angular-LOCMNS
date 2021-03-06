import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfirmationComponent } from './page-confirmation.component';

describe('PageConfirmationComponent', () => {
  let component: PageConfirmationComponent;
  let fixture: ComponentFixture<PageConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
