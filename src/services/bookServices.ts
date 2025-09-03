import { bookApi } from "@/api/bookApi";
import type { BookInformation, RatingSummary } from "@/types/book";
import type { SearchResponse } from "@/types/search";

export const bookService = {
  getBooksByAll: async (
    query: string,
    page: number,
    limit: number,
    sort?: string
  ): Promise<SearchResponse> => {
    try {
      const data = await bookApi.searchAllBooks(query, page, limit, sort);
      return data || {};
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      throw new Error(`Failed to fetch books: ${message}`);
    }
  },

  getBookDetails: async (workId: string): Promise<BookInformation> => {
    try {
      const data = await bookApi.getBookById(workId);
      return data || {};
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      throw new Error(`Failed to fetch book details: ${message}`);
    }
  },


  getBookRatings: async (workId: string): Promise<RatingSummary> => {
    try {
      const data = await bookApi.bookRatings(workId);
      return data || {};
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      throw new Error(`Failed to fetch book ratings: ${message}`);
    }
  },


  search: async (params: Record<string, string>,
    page: number,
    limit: number,
    sort?: string): Promise<SearchResponse> => {
    try {
      const data = await bookApi.search(params, page, limit, sort);
      return data || {};
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      throw new Error(`Failed to fetch books: ${message}`);
    }
  },

  getBookAuthors: async (authorKey: string) => {
    try {
      const data = await bookApi.bookAuthor(authorKey);
      return data || {};
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      throw new Error(`Failed to fetch authors: ${message}`);
    }
  }
};
