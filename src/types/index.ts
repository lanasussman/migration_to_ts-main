export interface IResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}
export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
type Source = {
    id: string;
    name: string
}