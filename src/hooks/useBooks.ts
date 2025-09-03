import { bookService } from "@/services/bookServices";
import type { ListingMode, SearchDoc, SearchFilters } from "@/types/search";
import { useEffect, useReducer } from "react";


type State = {
    books: SearchDoc[];
    loading: boolean;
    error: string | null;
    total: number;
};

type Action =
    | { type: "FETCH_START" }
    | { type: "FETCH_SUCCESS"; payload: { books: SearchDoc[]; total: number } }
    | { type: "FETCH_ERROR"; error: string };

const initialState: State = { books: [], loading: false, error: null, total: 0 };

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "FETCH_START": return { ...state, loading: true, error: null };
        case "FETCH_SUCCESS": return { books: action.payload.books, total: action.payload.total, loading: false, error: null };
        case "FETCH_ERROR": return { ...state, loading: false, error: action.error };
        default: return state;
    }
}
export function useBooks(
    mode: ListingMode,
    searchValue: string,
    currentPage: number,
    limit: number,
    sortField: string,
    filter?: SearchFilters,
    advancedSearchFilters?: Partial<Record<SearchFilters, string>>
) {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {


        let ignore = false;
        const fetchBooks = async () => {
            dispatch({ type: "FETCH_START" })
            try {
                let data;
                if (mode === "general" && searchValue.length > 0) {
                    console.log("a general search was triggered")
                    data = await bookService.getBooksByAll(searchValue, currentPage, limit, sortField);
                    console.log(data)

                } else if (mode === "filter" && filter && searchValue.length > 0) {
                    console.log("a filtered search was triggered")

                    data = await bookService.search({ [filter]: searchValue }, currentPage, limit, sortField);
                    console.log(data)
                } else if (mode === "advanced" && advancedSearchFilters) {
                    console.log("an advanced search was triggered")
                    if (advancedSearchFilters)
                        data = await bookService.search(advancedSearchFilters, currentPage, limit, sortField);
                    console.log(data)

                }

                if (!ignore && data) {
                    dispatch({
                        type: "FETCH_SUCCESS",

                        payload: { books: data.docs, total: data.numFound }
                    });
                }
            } catch (err: unknown) {
                if (!ignore) {
                    const message = err instanceof Error ? err.message : "Unknown Error"; dispatch({
                        type: "FETCH_ERROR",
                        error: message,
                    });
                }

            }
        }
        if (
            (mode === "general" && searchValue.length > 0) ||
            (mode === "filter" && filter && searchValue.length > 0) ||
            (mode === "advanced" && advancedSearchFilters)
        ) {
            fetchBooks();
        }
        return () => { ignore = true; }

    }, [mode, searchValue, currentPage, limit, sortField, filter, advancedSearchFilters]);


    return state;
}


