import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParcComponent } from './page-parc.component';

describe('PageParcComponent', () => {
  let component: PageParcComponent;
  let fixture: ComponentFixture<PageParcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageParcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageParcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
