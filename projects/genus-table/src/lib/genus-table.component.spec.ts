import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenusTableComponent } from './genus-table.component';

describe('GenusTableComponent', () => {
  let component: GenusTableComponent;
  let fixture: ComponentFixture<GenusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenusTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
