import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosModalComponent } from './articulos-modal.component';

describe('ArticulosModalComponent', () => {
  let component: ArticulosModalComponent;
  let fixture: ComponentFixture<ArticulosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
