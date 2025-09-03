
import { bookService } from '@/services/bookServices';
import type { BookInformation } from '@/types/book';
import { useEffect, useState } from 'react';



export const useBookDetails = (id?: string) => {
    const [data, setData] = useState<BookInformation>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");


    useEffect(() => {
        const fetchDetails = async (id: string) => {
            setLoading(true);
            try {
                const res = await bookService.getBookDetails(id);
                if (res && res.authors && res.key) {

                    const authorDetails = await Promise.all(
                        res.authors.map((a: { author: { key: string } }) =>
                            bookService.getBookAuthors(a.author.key.split("/")[2]))
                    );
                    res.authors = authorDetails;
                    const ratings = await bookService.getBookRatings(res.key.split("/")[2]);
                    res.ratings = ratings;
                    setData(res);


                } else {
                    setError("No details found for this book");
                }

            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : "Something went wrong";
                setError(message);

            }
            finally {
                setLoading(false);
            }
        }
        if (id && !loading) fetchDetails(id);

    }, [id])


    return { data, loading, error }
}