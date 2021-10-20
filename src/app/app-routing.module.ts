import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenComponent} from "./components/token/token.component";
import {EntityExtractionComponent} from "./components/entityExt/entity-extraction.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";

const routes: Routes = [
  {
    path: "",
    component: TokenComponent
  },
  {
    path: "entityExtraction",
    component: EntityExtractionComponent
  },
  {
    path: "textSimilarity",
    component: TextSimilarityComponent,
  },
  {
    path: "languageDetection",
    component: LanguageDetectionComponent,
  },
  {
    path: "sentimentAnalysis",
    component: SentimentAnalysisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
