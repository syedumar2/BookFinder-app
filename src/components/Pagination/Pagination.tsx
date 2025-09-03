import { Button } from "../ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
  className?: string;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 2,
  className,
}: PaginationProps) => {
  const getPages = () => {
    const pages: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - maxVisible && i <= currentPage + maxVisible)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      {/* Previous */}
      <Button
        disabled={currentPage === 1}
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        className="hover:cursor-pointer"
      >
        Previous
      </Button>

      {/* Page numbers */}
      {getPages().map((page, idx) =>
        page === "..." ? (
          <span key={idx} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <Button
            key={idx}
            onClick={() => onPageChange(page as number)}
            className={`hover:cursor-pointer ${
              page === currentPage ? "bg-red-600 text-white" : "bg-gray-600"
            }`}
          >
            {page}
          </Button>
        )
      )}

      {/* Next */}
      <Button

        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className="hover:cursor-pointer"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
