import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailAppComponent } from './quote-detail-app.component';

describe('QuoteDetailAppComponent', () => {
  let component: QuoteDetailAppComponent;
  let fixture: ComponentFixture<QuoteDetailAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDetailAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
