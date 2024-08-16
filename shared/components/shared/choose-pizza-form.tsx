"use client";

import React from "react";
import { Ingredient, ProductItem } from "@prisma/client";

import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import { cn } from "@/shared/lib/utils";
import { ProductImage } from "./product-image";

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
}

/**
 * Форма выбора ПИЦЦЫ
 */
export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
  className,
}) => {
  const textDetaills = "Средняя 30 см";
  const totalPrice = 350;
  const size = 30;

  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetaills}</p>

        <div className="flex flex-col gap-4 mt-5"></div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3"></div>
        </div>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
