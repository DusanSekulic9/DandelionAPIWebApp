import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenComponent} from "./components/token/token.component";
import {EntityExtractionComponent} from "./components/entityExt/entity-extraction.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import {TokenAuthGuard} from "./token-auth.guard";
import {HistoryComponent} from "./components/history/history.component";

const routes: Routes = [
  {
    path: "",
    component: TokenComponent
  },
  {
    path: "entityExtraction",
    component: EntityExtractionComponent,
    canActivate: [TokenAuthGuard]
  },
  {
    path: "textSimilarity",
    component: TextSimilarityComponent,
    canActivate: [TokenAuthGuard]
  },
  {
    path: "languageDetection",
    component: LanguageDetectionComponent,
    canActivate: [TokenAuthGuard]
  },
  {
    path: "sentimentAnalysis",
    component: SentimentAnalysisComponent,
    canActivate: [TokenAuthGuard]
  },
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [TokenAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
