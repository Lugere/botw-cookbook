import React from "react";
import { Box, Button, Input, Typography } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import defaultTheme from "./themes/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./App.scss";
import RecipeCard from "./components/RecipeCard";
import Recipe from "./types/Recipe";

const App = () => {
    const recipes: Recipe[] = [
        {
            recipeId: "r-008",
            name: "Creamy Heart Soup",
            image: "8.png",
            healthPoints: 8,
            category: "mighty",
            ingredients: [
                {
                    ingredient: {
                        ingredientId: "i-005",
                        name: "Hydromelon",
                        category: "chilly",
                        image: "5.png",
                    },
                    amount: 1,
                },
                {
                    ingredient: {
                        ingredientId: "i-007",
                        name: "Voltfruit",
                        category: "electro",
                        image: "7.png",
                    },
                    amount: 1,
                },
                {
                    ingredient: {
                        ingredientId: "i-022",
                        name: "Raddish",
                        category: "hearty",
                        image: "22.png",
                    },
                    amount: 1,
                },
                {
                    ingredient: {
                        ingredientId: "i-048",
                        name: "Fresh Milk",
                        image: "48.png",
                    },
                    amount: 1,
                },
            ],
        },
        {
            recipeId: "r-015",
            name: "Gourmet Poultry Curry",
            image: "15.png",
            healthPoints: 13,
            category: "hasty",
            ingredients: [
                {
                    ingredient: {
                        ingredientId: "i-048",
                        name: "Chicken",
                        image: "48.png",
                    },
                    amount: 2,
                },
                {
                    ingredient: {
                        ingredientId: "i-037",
                        name: "Wheat",
                        image: "37.png",
                    },
                    amount: 3,
                },
                {
                    ingredient: {
                        ingredientId: "i-051",
                        name: "Goron Spice",
                        image: "51.png",
                    },
                    amount: 1,
                },
            ],
        },
        {
            recipeId: "r-009",
            name: "Clam Chowder",
            image: "9.png",
            healthPoints: "full",
            category: "hearty",
            potency: 3,
            ingredients: [
                {
                    ingredient: {
                        ingredientId: "i-048",
                        name: "Fresh Milk",
                        image: "48.png",
                    },
                    amount: 1,
                },
                {
                    ingredient: {
                        ingredientId: "i-043",
                        name: "Wheat",
                        image: "43.png",
                    },
                    amount: 1,
                },
                {
                    ingredient: {
                        ingredientId: "i-050",
                        name: "Butter",
                        image: "50.png",
                    },
                    amount: 1,
                },
                {
                    ingredient: {
                        ingredientId: "i-081",
                        name: "Hearty Blueshell Snail",
                        image: "81.png",
                    },
                    amount: 1,
                },
            ],
        },
    ];

    return (
        <Box className="App">
            <CssVarsProvider theme={defaultTheme}>
                <header>
                    <div className="logo">
                        <img
                            src={require("./assets/img/botw-logo.svg").default}
                            className="botw-logo"
                            height="200"
                            alt="logo of the legend of zelda breath of the wild"
                        />
                        <span className="triforce-vert-divider hylian-symbol">b</span>
                        <Typography level="h4" fontWeight="md" className="title">
                            Koko's Kitchen
                        </Typography>
                    </div>
                    <div className="search">
                        <Input
                            variant="outlined"
                            color="neutral"
                            size="sm"
                            placeholder="Search ingredient or status effect..."
                            endDecorator={
                                <Button
                                    size="sm"
                                    endDecorator={
                                        <FontAwesomeIcon icon={solid("plus")} size="sm" />
                                    }
                                    startDecorator={
                                        <FontAwesomeIcon icon={solid("minus")} size="sm" />
                                    }
                                    variant="solid"
                                    color="danger"
                                >
                                    4
                                </Button>
                            }
                        />
                    </div>
                </header>
                <main>
                    <Box className="selected-list">
                        <Typography
                            className="title"
                            startDecorator={
                                <img
                                    alt=""
                                    className="icon"
                                    src={
                                        require("./assets/img/status_effects/inventory.svg").default
                                    }
                                />
                            }
                            level="body1"
                            fontWeight="md"
                        >
                            Your Inventory / Desired Status Effects
                        </Typography>
                        <Box className="empty-state-container">
                            <Box className="empty-state">
                                <FontAwesomeIcon className="icon" icon={solid("inbox")} />
                                <Box className="text">
                                    <Typography level="body2" className="text">
                                        Yawn! Big empty!
                                    </Typography>
                                    <Typography level="body3" className="text">
                                        Search for ingredients or status effects to add to the list
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="general-recipes">
                        <Typography
                            startDecorator={<FontAwesomeIcon icon={solid("fire-flame-curved")} />}
                            className="title"
                            level="body1"
                            fontWeight="md"
                        >
                            Possible Recipes
                        </Typography>
                        <Box className="recipes">
                            {recipes.map(recipe => (
                                <RecipeCard key={recipe.recipeId} recipe={recipe} />
                            ))}
                        </Box>
                    </Box>
                </main>
                <footer></footer>
            </CssVarsProvider>
        </Box>
    );
};

export default App;
