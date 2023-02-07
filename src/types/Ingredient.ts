interface Ingredient {
    ingredientId: string;
    name: string;
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
}

export default Ingredient;
