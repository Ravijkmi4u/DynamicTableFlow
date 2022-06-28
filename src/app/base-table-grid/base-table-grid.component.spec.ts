import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTableGridComponent } from './base-table-grid.component';

describe('BaseTableGridComponent', () => {
  let component: BaseTableGridComponent;
  let fixture: ComponentFixture<BaseTableGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseTableGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseTableGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
