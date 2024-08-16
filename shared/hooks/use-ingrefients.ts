import { Api } from "@/shared/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";
import { useState } from "react";

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);

  return {
    ingredients,
    loading,
  };
};
