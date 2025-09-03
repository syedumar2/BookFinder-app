import type { ListingMode, SearchDoc } from "@/types/search";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import SortDropDown from "../DropDown/SortDropDown";

type BookListingProps = {
  currentPage: number;
  loading: boolean;
  books: SearchDoc[];

  handlePageChange: (page: number) => void;
  total: number;
  sortField: string;
  setSortField: React.Dispatch<React.SetStateAction<string>>;
  setMode: React.Dispatch<React.SetStateAction<ListingMode>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
};

export const BookListing = ({
  currentPage,
  loading,
  books,
  setSortField,
  handlePageChange,
  total,
  sortField,
  searchValue,
  setSearchValue,
  setMode,
}: BookListingProps) => {
  return (
    <section>
      {/* Header bar */}
      <div className="flex mx-auto px-6 pt-4 justify-between w-full">
        {/* Example search mode */}
        <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl shadow-sm">
          {books && searchValue.length > 0 && (
            <>
              <h3 className="text-lg font-medium text-gray-800">
                Showing results for:{" "}
                <span className="font-semibold text-gray-900">
                  {searchValue}
                </span>
              </h3>
              <button
                className="text-gray-500 hover:text-red-600 hover:bg-red-50 transition"
                type="button"
                onClick={() => {
                  setMode("general");
                  setSearchValue("");
                }}
                disabled={loading}
              >
                ✕
              </button>
            </>
          )}
        </div>

        <SortDropDown setSortField={setSortField} sortField={sortField} />
      </div>

      {/* Book Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 px-4 pb-12 justify-items-center">
        {/* Book Card */}

        {books?.map((book) => (
          <Link key={book.key} to={`/book/${book.key.split("/")[2]}`} className="w-[260px]">
            <div className="border border-gray-300 rounded-xl shadow hover:shadow-lg transition overflow-hidden bg-white">
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600">
                  Author:{book.author_name}
                </p>
                <p className="text-sm text-gray-500">
                  First Published: {book.first_publish_year}
                </p>
                <p className="text-sm text-gray-500">
                  Editions: {book.edition_count}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Pagination */}
      <Pagination
        className="flex justify-center items-center my-8"
        currentPage={currentPage}
        totalPages={Math.floor(total / 12)}
        onPageChange={handlePageChange}
      />
    </section>
  );
};
