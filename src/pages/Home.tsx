import { useState } from "react";
import { BookListing } from "../components/BookListing/BookListing";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import type { ListingMode, SearchFilters } from "@/types/search";
import { EmptyPage } from "@/components/ErrorPages/EmptyPage";
import { ErrorPage } from "@/components/ErrorPages/ErrorPage";
import { Loading } from "@/components/Loading/Loading";
import { useBooks } from "@/hooks/useBooks";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>("");
  const [filter, setFilter] = useState<SearchFilters>("");
  const [mode, setMode] = useState<ListingMode>("general");
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const [searchValue, setSearchValue] = useState<string>("");
  const [advancedFilters, setAdvancedFilters] = useState<
    Partial<Record<SearchFilters, string>>
  >({
    title: "",
    author: "",
    subject: "",
    publisher: "",
  });

  const { books, loading, error, total } = useBooks(
    mode,
    searchValue,
    currentPage,
    12,
    sortField,
    filter,
    advancedFilters
  );
  const hasAdvancedFilters = Object.values(advancedFilters).some(
    (val) => val && val.trim() !== ""
  );

  const hasSearchValue = searchValue.trim() !== "";

  return (
    <div className="w-full">
      <Header />
      <SearchBar
        setMode={setMode}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        loading={loading}
        setFilter={setFilter}
        filter={filter}
        advancedFilters={advancedFilters}
        setAdvancedFilters={setAdvancedFilters}
      />
      {!hasAdvancedFilters && !hasSearchValue ? (
        <EmptyPage />
      ) : error ? (
        <ErrorPage error={error} />
      ) : loading ? (
        <Loading />
      ) : books && books.length > 0 ? (
        <BookListing
          books={books}
          currentPage={currentPage}
          loading={loading}
          setSortField={setSortField}
          handlePageChange={handlePageChange}
          total={total}
          sortField={sortField}
          setSearchValue={setSearchValue}
          setMode={setMode}
          searchValue={searchValue}
        />
      ) : total === 0 ? (
        <EmptyPage />
      ) : (
        <ErrorPage error={error} />
      )}

      <Footer />
    </div>
  );
};

export default Home;
