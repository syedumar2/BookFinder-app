
export interface SearchResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  num_found: number;
  documentation_url: string;
  q: string;
  offset: number | null;
  docs: SearchDoc[];
}


export interface SearchDoc {
  key: string;
  title: string;

  author_key?: string[];
  author_name?: string[];

  cover_edition_key?: string;
  cover_i?: number;

  ebook_access?: "public" | "borrowable" | "no_ebook";
  edition_count: number;
  first_publish_year?: number;

  has_fulltext?: boolean;
  ia?: string[];
  ia_collection_s?: string;

  lending_edition_s?: string;
  lending_identifier_s?: string;
  public_scan_b?: boolean;

  language?: string[];
}
export type ListingMode =
  "general" | "filter" | "advanced" 
export type SearchFilters = "title" | "author" | "subject" | "publisher" | "";