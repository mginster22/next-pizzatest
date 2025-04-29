import { Ingredient, ProductItem } from "@/prisma/prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

export const getPizzaDetails = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number>,
  ) => {
    const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
    const textDetaills = `${size} см, ${mapPizzaType[type]} пицца`;
  
    return { totalPrice, textDetaills };
  };
  