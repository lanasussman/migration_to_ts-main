export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface TopHeadlinesResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface EverythingParams {
    q: string;
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    language?: string;
    sortBy?: string;
    pageSize?: number;
    page?: number;
}

export interface EverythingResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}
