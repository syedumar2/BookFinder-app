import type { ListingMode, SearchFilters } from "@/types/search";
import clsx from "clsx";
import { Search } from "lucide-react";
import { useState } from "react";
import AdvancedSearchModal from "../Modals/AdvancedSearchModal";

type SearchBarProps = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  loading: boolean;
  setFilter: React.Dispatch<React.SetStateAction<SearchFilters>>;
  filter: SearchFilters;
  advancedFilters: Partial<Record<SearchFilters, string>>;
  setAdvancedFilters: React.Dispatch<
    React.SetStateAction<Partial<Record<SearchFilters, string>>>
  >;
  setMode: React.Dispatch<React.SetStateAction<ListingMode>>;
};

export const SearchBar = ({
  setSearchValue,
  loading,
  setFilter,
  filter,
  setAdvancedFilters,
  advancedFilters,
  setMode,
}: SearchBarProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue === null || inputValue.length === 0) {
      return alert("Please enter a search term");
    }
    if (filter === "") {
      setMode("general");
      setSearchValue(inputValue);
    } else {
      setMode("filter");
      setSearchValue(inputValue);
    }
  };

  return (
    <section
      className="bg-[url('https://media.istockphoto.com/id/1034753636/photo/wide-book-shelves-with-blurry-effect-on-book-cover.jpg?s=612x612&w=0&k=20&c=n991ZqPqlo1pKmxvBcP3Y-EiAmG_sLcOUypMlMQ29JE=')] 
             bg-gray-800/50 bg-blend-multiply w-full min-h-[380px] bg-cover bg-center px-2 sm:px-4 lg:px-8"
    >
      {/* heading */}
      <div className="flex flex-col items-center text-center py-8 sm:py-12 px-2">
        <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-white leading-tight">
          Looking for a specific Book?
        </h2>
        <p className="mt-2 text-xs sm:text-sm lg:text-base font-semibold tracking-wide text-white">
          You've come to the right place
        </p>
      </div>

      {/* search filters + bar */}
      <section className="flex flex-col gap-4 p-4 bg-black/60 rounded-2xl mx-auto w-full max-w-6xl">
        {/* filter buttons */}
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-4 px-1 py-2">
          <h2 className="hidden sm:block text-white font-semibold lg:text-lg">
            Search By
          </h2>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <button
              disabled={loading}
              className={clsx(
                "text-white rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium shadow hover:bg-red-800 active:scale-95 transition",
                filter === "" ? "bg-red-700 " : ""
              )}
              onClick={() => setFilter("")}
            >
              All
            </button>
            <button
              disabled={loading}
              className={clsx(
                "text-white rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium shadow hover:bg-red-800 active:scale-95 transition",
                filter === "title" ? "bg-red-700 " : ""
              )}
              onClick={() => setFilter("title")}
            >
              Title
            </button>
            <button
              disabled={loading}
              className={clsx(
                "text-white rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium shadow hover:bg-red-800 active:scale-95 transition",
                filter === "author" ? "bg-red-700 " : ""
              )}
              onClick={() => setFilter("author")}
            >
              Author
            </button>
            <button
              disabled={loading}
              className={clsx(
                "text-white rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium shadow hover:bg-red-800 active:scale-95 transition",
                filter === "subject" ? "bg-red-700 " : ""
              )}
              onClick={() => setFilter("subject")}
            >
              Subject
            </button>
            <button
              disabled={loading}
              className={clsx(
                "text-white rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium shadow hover:bg-red-800 active:scale-95 transition",
                filter === "publisher" ? "bg-red-700 " : ""
              )}
              onClick={() => setFilter("publisher")}
            >
              Publisher
            </button>
          </div>
        </div>

        {/* search input + button */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <form
            className="flex flex-col sm:flex-row w-full items-stretch gap-3 sm:gap-0"
            onSubmit={handleSubmit}
          >
            {/* icon + input wrapper */}
            <div className="flex flex-1 h-12 px-4 border rounded-lg items-center gap-2 bg-white">
              <span className="mr-2">
                <Search />
              </span>
              <input
                type="text"
                className="flex-1 h-14 w-full border-none focus:outline-none text-sm sm:text-base"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={loading}
              />
            </div>

            {/* button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full md:ml-4  sm:w-auto h-12 px-4  sm:px-6 font-medium tracking-wide 
               text-white bg-red-700 rounded-lg shadow-md 
               hover:bg-red-800 transition text-sm sm:text-base"
            >
              Search
            </button>
          </form>

          <AdvancedSearchModal
            setMode={setMode}
            advancedFilters={advancedFilters}
            setAdvancedFilters={setAdvancedFilters}
          />
        </div>
      </section>
    </section>
  );
};

export default SearchBar;
