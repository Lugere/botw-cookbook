import Ingredient from "./Ingredient";

interface Recipe {
    id: string;
    label: string;
    heartsRecovered: number | "full";
    description?: string;
    /**
     * Effect of recipe
     */
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
    /**
     * Number of golden hearts
     */
    potency?: number;
    /**
     * Level ranges from 1-3
     */
    level?: number;
    /**
     * Time of cooking effect in seconds
     */
    duration?: number;
    /**
     * List of all Ingredients needed for a recipe
     *
     */
    ingredients: Ingredient[][];
}

export default Recipe;
