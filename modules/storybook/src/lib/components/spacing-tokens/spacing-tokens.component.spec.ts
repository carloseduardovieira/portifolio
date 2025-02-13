import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpacingTokensComponent } from './spacing-tokens.component';

describe('SpacingTokensComponent', () => {
  let component: SpacingTokensComponent;
  let fixture: ComponentFixture<SpacingTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacingTokensComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacingTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
