import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiLayoutFooterComponent } from './ui-layout-footer.component';

describe('UiLayoutFooterComponent', () => {
  let component: UiLayoutFooterComponent;
  let fixture: ComponentFixture<UiLayoutFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiLayoutFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
