import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteAppComponent } from './quote-app/quote-app.component';
import { QuotedetailAppComponent } from './quotedetail-app/quotedetail-app.component';
import { QuoteDetailAppComponent } from './quote-detail-app/quote-detail-app.component';
import { CountInputAppComponent } from './count-input-app/count-input-app.component';

@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    QuoteAppComponent,
    QuotedetailAppComponent,
    QuoteDetailAppComponent,
    CountInputAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
