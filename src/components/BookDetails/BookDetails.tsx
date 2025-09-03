import { useBookDetails } from "@/hooks/useBookDetails";
import { ErrorPage } from "../ErrorPages/ErrorPage";
import { Loading } from "../Loading/Loading";
import { EmptyPage } from "../ErrorPages/EmptyPage";
import { Star } from "lucide-react";
import clsx from "clsx";
import type { AuthorInformation } from "@/types/book";

const BookDetails = ({ id }: { id: string | undefined }) => {
  const { data, loading, error } = useBookDetails(id);
  const avgRating = data?.ratings?.summary?.average ?? null;
  console.log(data?.authors);

  if (error) return <ErrorPage error={error} />;
  if (loading) return <Loading />;

  return data ? (
    <>
      <div className="max-w-6xl mx-auto p-6 bg-white shadow rounded-lg">
        <section className="flex flex-col items-center md:flex-row gap-4 ">
          <div className="md:w-1/4 ">
            {data.covers && data.covers.length > 0 && (
              <div className="mb-4">
                <img
                  src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`}
                  alt={data.title}
                  className=" rounded shadow"
                />
              </div>
            )}{" "}
          </div>
          <div className="md:w-3/4 ml-3">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {data.title}
            </h1>
            {data.authors?.length > 0 && (
              <div className="mb-6">
                <h2 className="font-semibold text-gray-800 mb-2">Authors</h2>
                <div className="flex flex-wrap gap-2">
                  {data.authors.map((a: AuthorInformation) => (
                    <span
                      key={a.key}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full shadow-sm hover:bg-blue-200 transition-colors"
                    >
                      {a.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {avgRating !== null && (
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={clsx(
                      "w-5 h-5 transition",
                      avgRating >= i
                        ? "fill-yellow-400 text-yellow-400"
                        : avgRating >= i - 0.5
                        ? "fill-yellow-400 text-yellow-400 opacity-50"
                        : "text-gray-300"
                    )}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {avgRating.toFixed(1)} / 5
                </span>
              </div>
            )}

            {data.description ? (
              <div className="mb-4">
                <h2 className="font-semibold text-gray-800">Description</h2>
                <p className="text-gray-700 text-justify">
                  {typeof data.description === "string"
                    ? data.description
                    : data.description?.value}
                </p>
              </div>
            ) : (
              <div className="mb-4">
                <h2 className="font-semibold text-gray-800">
                  No Description or Ratings available
                </h2>
              </div>
            )}
          </div>
        </section>

        {data.subjects && data.subjects.length > 0 && (
          <div className="mb-4 h-24 overflow-y-auto">
            <h2 className="font-semibold text-gray-800">Subjects</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.subjects.map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {data.links && data.links.length > 0 && (
          <div className="mb-4">
            <h2 className="font-semibold text-gray-800">Links</h2>
            <ul className="list-disc list-inside text-blue-600">
              {data.links.map((l) => (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Metadata */}
        <div className="text-sm text-gray-500 mt-6">
          <p>
            Created:{" "}
            {new Date(data.created.value).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>
            Last modified:{" "}
            {new Date(data.last_modified.value).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </>
  ) : (
    <EmptyPage />
  );
};

export default BookDetails;
