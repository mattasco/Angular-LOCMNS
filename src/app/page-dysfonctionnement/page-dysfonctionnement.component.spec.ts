import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDysfonctionnementComponent } from './page-dysfonctionnement.component';

describe('PageDysfonctionnementComponent', () => {
  let component: PageDysfonctionnementComponent;
  let fixture: ComponentFixture<PageDysfonctionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDysfonctionnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDysfonctionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
