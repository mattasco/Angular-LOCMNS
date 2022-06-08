import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParcModeleComponent } from './page-parc-modele.component';

describe('PageParcModeleComponent', () => {
  let component: PageParcModeleComponent;
  let fixture: ComponentFixture<PageParcModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageParcModeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageParcModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
