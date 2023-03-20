import Ingredient from "./Ingredient";

interface Recipe {
    id: string;
    name: string;
    heartsRecovered: number | "full";
    /**
     * Image Link to Firebase Bucket
     */
    image: string;
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
    ingredients: {
        ingredient1: Ingredient[];
        ingredient2?: Ingredient[];
        ingredient3?: Ingredient[];
        ingredient4?: Ingredient[];
        ingredient5?: Ingredient[];
    };
}

export default Recipe;
