import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteAppComponent } from './quote-app.component';

describe('QuoteAppComponent', () => {
  let component: QuoteAppComponent;
  let fixture: ComponentFixture<QuoteAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
