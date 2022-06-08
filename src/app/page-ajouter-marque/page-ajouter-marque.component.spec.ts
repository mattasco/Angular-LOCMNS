import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjouterMarqueComponent } from './page-ajouter-marque.component';

describe('PageAjouterMarqueComponent', () => {
  let component: PageAjouterMarqueComponent;
  let fixture: ComponentFixture<PageAjouterMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjouterMarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjouterMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
