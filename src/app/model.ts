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

export class Color{
  constructor(
    public red: number,
    public green: number,
    public blue: number) { }
}

export interface Lang{
  lang: string,
  confidence: number
}

export interface liResponse{
  detectedLangs: Lang[]
}

export interface simResponse{
  similarity: number;
}

export interface Image{
  full: string,
  thumbnail: string,
}

export interface Annotation{
  abstract: string,
  image: Image,
  categories: string[],
  spot: string,

}

export interface extResponse{
  annotations: Annotation[],
}
