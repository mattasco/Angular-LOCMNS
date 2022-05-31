import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMesReservationsComponent } from './page-mes-reservations.component';

describe('PageMesReservationsComponent', () => {
  let component: PageMesReservationsComponent;
  let fixture: ComponentFixture<PageMesReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMesReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMesReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
