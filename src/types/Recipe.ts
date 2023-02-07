import Ingredient from "./Ingredient";

interface Recipe {
    recipeId: string;
    name: string;
    healthPoints: number | "full";
    image: string;
    description?: string;
    category?:
        | "chilly"
        | "electro"
        | "enduring"
        | "energizing"
        | "fireproof"
        | "hasty"
        | "hearty"
        | "mighty"
        | "sneaky"
        | "spicy"
        | "tough";
    potency?: number;
    level?: number;
    duration?: number;
    ingredients: { ingredient: Ingredient; amount: number }[];
}

export default Recipe;
