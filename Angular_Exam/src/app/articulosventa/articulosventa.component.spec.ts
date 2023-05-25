import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosventaComponent } from './articulosventa.component';

describe('ArticulosventaComponent', () => {
  let component: ArticulosventaComponent;
  let fixture: ComponentFixture<ArticulosventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosventaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
