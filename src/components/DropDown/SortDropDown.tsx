import { Button } from "../ui/button";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type SortDropDownProps = {
  sortField: string;
  setSortField: React.Dispatch<React.SetStateAction<string>>;
};

const SortDropDown = ({ sortField, setSortField }: SortDropDownProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <p className="font-medium text-sm text-center">Sort By:</p>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="border" variant={undefined} size="sm">
            {sortField
              ? sortField.charAt(0).toUpperCase() + sortField.slice(1)
              : "Relevance"}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white">
          <DropdownMenuItem
            className="flex justify-between items-center"
            onClick={() => setSortField("")}
          >
            Relevance
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex justify-between items-center"
            onClick={() => setSortField("title")}
          >
            Title
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex justify-between items-center"
            onClick={() => setSortField("rating asc")}
          >
            Ratings (Low to High)
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex justify-between items-center"
            onClick={() => setSortField("rating desc")}
          >
            Ratings (High to Low)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortDropDown;
