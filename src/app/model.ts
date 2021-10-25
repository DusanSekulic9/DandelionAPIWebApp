export interface Sentiment{
  score: number,
  type: string
}

export interface sentResponse {
  timestamp: string,
  time: number,
  lang: string,
  sentiment: Sentiment
}
