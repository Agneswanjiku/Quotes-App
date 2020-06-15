import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotedetailAppComponent } from './quotedetail-app.component';

describe('QuotedetailAppComponent', () => {
  let component: QuotedetailAppComponent;
  let fixture: ComponentFixture<QuotedetailAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotedetailAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotedetailAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
