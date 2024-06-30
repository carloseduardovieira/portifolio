import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenCheckboxComponent } from './ben-checkbox.component';

describe('BenCheckboxComponent', () => {
  let component: BenCheckboxComponent;
  let fixture: ComponentFixture<BenCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BenCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
