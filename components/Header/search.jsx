"use client";

import * as React from "react";
import { SearchIcon, Command } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const mockSearchResults = [
  { id: "1", title: "Dashboard", category: "Pages" },
  { id: "2", title: "User Settings", category: "Pages" },
  { id: "3", title: "Button Component", category: "Components" },
  { id: "4", title: "Input Component", category: "Components" },
  { id: "5", title: "Modal Component", category: "Components" },
  { id: "6", title: "Authentication", category: "Features" },
  { id: "7", title: "Data Fetching", category: "Features" },
  { id: "8", title: "Responsive Design", category: "Design" },
  { id: "9", title: "Dark Mode", category: "Design" },
  { id: "10", title: "Performance Optimization", category: "Development" },
];

const SearchModal = () => {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredResults = mockSearchResults.filter(
    (result) =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-sm text-muted-foreground"
        >
          <SearchIcon className="mr-1 h-4 w-4" />
          Search...
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]" isClose aria-describedby="">
        <DialogTitle className="flex items-center relative">
          <SearchIcon className="absolute left-1.5 right-1.5 h-4 w-4 shrink-0 opacity-50" />
          <Input
            className="w-full bg-transparent ps-6 py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed focus-visible:ring-teal-200 disabled:opacity-50"
            placeholder="Type to search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </DialogTitle>
        <ScrollArea className="h-[300px]">
          {filteredResults.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground">
              No results found.
            </p>
          ) : (
            <div className="space-y-2">
              {filteredResults.map((result) => (
                <Button
                  key={result.id}
                  variant="ghost"
                  className="w-full justify-start text-left"
                  onClick={() => {
                    // Handle selection (e.g., navigation)
                    console.log(`Selected: ${result.title}`);
                    setOpen(false);
                  }}
                >
                  <Command className="mr-2 h-4 w-4" />
                  <div className="flex flex-col">
                    <span>{result.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {result.category}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
