import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiLayoutHeaderComponent } from './ui-layout-header.component';

describe('UiLayoutHeaderComponent', () => {
  let component: UiLayoutHeaderComponent;
  let fixture: ComponentFixture<UiLayoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiLayoutHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
