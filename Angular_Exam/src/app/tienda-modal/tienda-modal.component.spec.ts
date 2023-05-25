import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaModalComponent } from './tienda-modal.component';

describe('TiendaModalComponentComponent', () => {
  let component: TiendaModalComponent;
  let fixture: ComponentFixture<TiendaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
