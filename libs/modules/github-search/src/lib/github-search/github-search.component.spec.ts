import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubSearchComponent } from './github-search.component';

describe('GithubSearchComponent', () => {
  let component: GithubSearchComponent;
  let fixture: ComponentFixture<GithubSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GithubSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
