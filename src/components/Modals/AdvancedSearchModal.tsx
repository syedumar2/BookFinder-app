import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import type { ListingMode, SearchFilters } from "@/types/search";
import { useState } from "react";

type AdvancedSearchModalProps = {
  advancedFilters: Partial<Record<SearchFilters, string>>;
  setAdvancedFilters: React.Dispatch<
    React.SetStateAction<Partial<Record<SearchFilters, string>>>
  >;
  setMode: React.Dispatch<React.SetStateAction<ListingMode>>;
};

const AdvancedSearchModal = ({
  setMode,
  setAdvancedFilters,
}: AdvancedSearchModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<
    Partial<Record<SearchFilters, string>>
  >({
    title: "",
    author: "",
    subject: "",
    publisher: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const hasValue = Object.values(formData).some((v) => v && v.trim() !== "");
    if (!hasValue) {
      return alert("Enter at least one field to perform an advanced search");
    }

    setMode("advanced");
    setAdvancedFilters(formData);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <button
          className="w-full md:ml-4  sm:w-auto h-12 px-4  sm:px-6 font-medium tracking-wide 
               text-white bg-gray-700 rounded-lg shadow-md 
               hover:bg-gray-800 transition text-sm sm:text-base"
        >
          Advanced
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md w-full p-6 rounded-lg shadow-lg bg-white">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-semibold">
            Advanced Search
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm mt-1">
            Combine filters like title, author, subject, and publisher to narrow
            your search.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Title */}
          <div className="flex flex-col">
            <Label htmlFor="title" className="mb-1 text-gray-700 font-medium">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter book title"
              value={formData.title ?? ""}
              onChange={handleChange}
              className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
            />
          </div>

          {/* Author */}
          <div className="flex flex-col">
            <Label htmlFor="author" className="mb-1 text-gray-700 font-medium">
              Author
            </Label>
            <Input
              id="author"
              name="author"
              placeholder="Enter author name"
              value={formData.author ?? ""}
              onChange={handleChange}
              className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <Label htmlFor="subject" className="mb-1 text-gray-700 font-medium">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject ?? ""}
              onChange={handleChange}
              className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
            />
          </div>

          {/* Publisher */}
          <div className="flex flex-col">
            <Label
              htmlFor="publisher"
              className="mb-1 text-gray-700 font-medium"
            >
              Publisher
            </Label>
            <Input
              id="publisher"
              name="publisher"
              placeholder="Enter publisher name"
              value={formData.publisher ?? ""}
              onChange={handleChange}
              className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-2 w-full py-2 bg-red-700 text-white font-medium rounded-md hover:bg-red-800 transition-colors"
          >
            Search
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdvancedSearchModal;
