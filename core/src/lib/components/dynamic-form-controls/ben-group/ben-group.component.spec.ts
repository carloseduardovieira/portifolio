import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenGroupComponent } from './ben-group.component';

describe('BenGroupComponent', () => {
  let component: BenGroupComponent;
  let fixture: ComponentFixture<BenGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BenGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
