import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorTokensComponent } from './color-tokens.component';

describe('ColorTokensComponent', () => {
  let component: ColorTokensComponent;
  let fixture: ComponentFixture<ColorTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorTokensComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
