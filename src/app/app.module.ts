import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { EntityExtractionComponent } from './components/entityExt/entity-extraction.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TokenComponent } from './components/token/token.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { HistoryComponent } from './components/history/history.component';
import { DatePipe } from './pipes/date.pipe';



@NgModule({
  declarations: [
    AppComponent,
    EntityExtractionComponent,
    TokenComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent,
    HistoryComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
