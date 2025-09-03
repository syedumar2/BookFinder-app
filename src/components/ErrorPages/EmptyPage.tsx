import { Search } from "lucide-react";

export const EmptyPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4 px-4">
      <Search size={64} className="text-gray-400" />
      <h2 className="text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        "Start your search!"
      </h2>
      <h3 className="font-semibold text-lg text-gray-600 text-center">
        Type a book name, author, or subject above to begin.
      </h3>
    </div>
  );
};
