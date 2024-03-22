import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmBottomDrawerComponent } from './vsm-bottom-drawer.component';

describe('VsmBottomDrawerComponent', () => {
  let component: VsmBottomDrawerComponent;
  let fixture: ComponentFixture<VsmBottomDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VsmBottomDrawerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VsmBottomDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
