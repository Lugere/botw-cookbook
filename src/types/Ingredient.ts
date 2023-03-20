interface Ingredient {
    /**
     * Id of Ingredient
     */
    id: string;
    /**
     * Name of Ingredient
     */
    name: string;
    /**
     * Short Description of Ingredient
     */
    description?: string;
    /**
     * Number of hearts in quarters
     */
    hearts_recovered?: 1;
    /**
     * Image URL to Firebase Bucket
     */
    image: string;
    /**
     * List of Locations where ingredient can be found
     */
    common_locations: string[];
}

export default Ingredient;
