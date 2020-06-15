import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountInputAppComponent } from './count-input-app.component';

describe('CountInputAppComponent', () => {
  let component: CountInputAppComponent;
  let fixture: ComponentFixture<CountInputAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountInputAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountInputAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
