import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiLayoutColumnComponent } from './ui-layout-column.component';

describe('UiLayoutColumnComponent', () => {
  let component: UiLayoutColumnComponent;
  let fixture: ComponentFixture<UiLayoutColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiLayoutColumnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiLayoutColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
