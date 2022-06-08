import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTypeMaterielComponent } from './page-type-materiel.component';

describe('PageTypeMaterielComponent', () => {
  let component: PageTypeMaterielComponent;
  let fixture: ComponentFixture<PageTypeMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTypeMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTypeMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
