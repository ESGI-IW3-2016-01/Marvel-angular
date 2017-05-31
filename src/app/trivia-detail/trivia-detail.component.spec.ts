import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaDetailComponent } from './trivia-detail.component';

describe('TriviaDetailComponent', () => {
  let component: TriviaDetailComponent;
  let fixture: ComponentFixture<TriviaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
