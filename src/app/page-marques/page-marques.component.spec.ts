import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMarquesComponent } from './page-marques.component';

describe('PageMarquesComponent', () => {
  let component: PageMarquesComponent;
  let fixture: ComponentFixture<PageMarquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMarquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
