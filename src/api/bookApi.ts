
export const bookApi = {
    searchAllBooks: async (
        query: string,
        page: number,
        limit: number,
        sort?: string
    ) => {
        const baseUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(
            query
        )}&page=${page}&limit=${limit}`;

        const url = sort ? `${baseUrl}&sort=${sort}` : baseUrl;

        const res = await fetch(url);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
    },

    getBookById: async (id: string) => {
        const res = await fetch(`https://openlibrary.org/works/${id}.json`);
        if (!res.ok) throw new Error("Failed to fetch book details");
        return res.json();
    },



    search: async (
        params: Record<string, string>,
        page: number,
        limit: number,
        sort?: string,
    ) => {
          const filteredParams = Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(params).filter(([key, value]) => value.trim() !== "")
    );
        const queryString = new URLSearchParams({
            ...filteredParams,
            page: page.toString(),
            limit: limit.toString(),
            ...(sort ? { sort } : {}),
        }).toString();
        const url = `https://openlibrary.org/search.json?${queryString}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
    },


    advancedSearch: async (
        params: Record<string, string>,
        page: number,
        limit: number,
        sort?: string
    ) => {
        const queryString = new URLSearchParams(params).toString();

        const baseUrl = `https://openlibrary.org/search.json?${queryString}&page=${page}&limit=${limit}`;

        const url = sort ? `${baseUrl}&sort=${sort}` : baseUrl;

        const res = await fetch(url);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
    },


    bookAuthor: async (
        authorId: string,

    ) => {
        const res = await fetch(`https://openlibrary.org/authors/${authorId}.json`);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
    },

    bookRatings: async (
        workId: string,
    ) => {
        const res = await fetch(`https://openlibrary.org/works/${workId}/ratings.json`);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
    }
};
