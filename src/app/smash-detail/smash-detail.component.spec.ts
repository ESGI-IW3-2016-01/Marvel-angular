import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmashDetailComponent } from './smash-detail.component';

describe('SmashDetailComponent', () => {
  let component: SmashDetailComponent;
  let fixture: ComponentFixture<SmashDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmashDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmashDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
