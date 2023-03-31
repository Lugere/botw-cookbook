interface Ingredient {
    /**
     * Id of Ingredient
     */
    id: string;
    /**
     * Name of Ingredient
     */
    label: string;
    /**
     * Short Description of Ingredient
     */
    description?: string;
    /**
     * Number of hearts in quarters
     */
    heartsRecovered?: number;
    /**
     * List of Locations where ingredient can be found
     */
    commonLocations?: string[];
}

export default Ingredient;
