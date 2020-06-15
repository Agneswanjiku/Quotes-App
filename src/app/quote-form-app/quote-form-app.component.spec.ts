import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFormAppComponent } from './quote-form-app.component';

describe('QuoteFormAppComponent', () => {
  let component: QuoteFormAppComponent;
  let fixture: ComponentFixture<QuoteFormAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteFormAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFormAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
