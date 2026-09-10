"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link, LayoutGrid, Square, List } from "lucide-react";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface DataItem {
  id: string;
  name: string;
  tags: string;
  slug: string;
  iconBgColor: string;
}

const data: DataItem[] = [
  {
    id: "1",
    name: "Styling Elements",
    tags: "Styling Elements",
    slug: "styling-elements",
    iconBgColor: "bg-orange-500",
  },
  {
    id: "2",
    name: "Importing Content",
    tags: "Importing Content",
    slug: "importing-content",
    iconBgColor: "bg-purple-500",
  },
  {
    id: "3",
    name: "Best Practices",
    tags: "Best Practices",
    slug: "best-practices",
    iconBgColor: "bg-blue-500",
  },
];

export default function DataTable() {
  return (
    <div className="w-full max-w-4xl">
      {" "}
      {/* Outer wrapper for the table and controls */}
      <div className="flex justify-end mb-2">
        {" "}
        {/* Container for the toggle buttons */}
        <ToggleGroup type="single" defaultValue="grid" aria-label="View toggle">
          <ToggleGroupItem value="grid" aria-label="Toggle grid view">
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="square" aria-label="Toggle square view">
            <Square className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="Toggle list view">
            <List className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        {" "}
        {/* Table container */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Tags <Link className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Slug</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className={cn("h-8 w-8", item.iconBgColor)}>
                      <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {item.name}
                  </div>
                </TableCell>
                <TableCell>{item.tags}</TableCell>
                <TableCell>{item.slug}</TableCell>
                <TableCell>{item.slug}</TableCell>
                <TableCell>{item.slug}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
