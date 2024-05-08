import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicFormTemplateComponent } from './dynamic-form-template.component';

describe('DynamicFormTemplateComponent', () => {
  let component: DynamicFormTemplateComponent;
  let fixture: ComponentFixture<DynamicFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
