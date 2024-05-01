import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenInputComponent } from './ben-input.component';

describe('BenInputComponent', () => {
  let component: BenInputComponent;
  let fixture: ComponentFixture<BenInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
