import React from "react";
import { Container } from "./container";
import { SortPopup } from "./sort-popup";
import { Categories } from "./categories";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";

interface Props {
  className?: string;
  items: Category[];
}

export const TopBar: React.FC<Props> = ({ className, items }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between ">
        <Categories items={items} />
        <SortPopup />
      </Container>
    </div>
  );
};
