import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactereDetailComponent } from './charactere-detail.component';

describe('CharactereDetailComponent', () => {
  let component: CharactereDetailComponent;
  let fixture: ComponentFixture<CharactereDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactereDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactereDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
