import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminReservationsComponent } from './page-admin-reservations.component';

describe('PageAdminReservationsComponent', () => {
  let component: PageAdminReservationsComponent;
  let fixture: ComponentFixture<PageAdminReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdminReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
