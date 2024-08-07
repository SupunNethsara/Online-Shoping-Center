import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizeComponent } from './categorize.component';

describe('CategorizeComponent', () => {
  let component: CategorizeComponent;
  let fixture: ComponentFixture<CategorizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorizeComponent]
    });
    fixture = TestBed.createComponent(CategorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
