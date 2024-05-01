import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenSelectComponent } from './ben-select.component';

describe('BenSelectComponent', () => {
  let component: BenSelectComponent;
  let fixture: ComponentFixture<BenSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BenSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
