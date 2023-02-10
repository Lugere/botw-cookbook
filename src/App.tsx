import React from "react";
import "./App.scss";
import {
    Box,
    Divider,
    Input,
    Link,
    List,
    ListItem,
    ListItemContent,
    ListItemDecorator,
    Tooltip,
    Typography,
} from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import defaultTheme from "./themes/default";
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
            duration: 210,
            level: 2,
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
            duration: 90,
            level: 3,
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
            recipeId: "r-015",
            name: "Gourmet Poultry Curry",
            image: "15.png",
            healthPoints: 13,
            category: "hasty",
            duration: 90,
            level: 3,
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
            recipeId: "r-015",
            name: "Gourmet Poultry Curry",
            image: "15.png",
            healthPoints: 13,
            category: "hasty",
            duration: 90,
            level: 3,
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
            recipeId: "r-015",
            name: "Gourmet Poultry Curry",
            image: "15.png",
            healthPoints: 13,
            category: "hasty",
            duration: 90,
            level: 3,
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
            recipeId: "r-015",
            name: "Gourmet Poultry Curry",
            image: "15.png",
            healthPoints: 13,
            category: "hasty",
            duration: 90,
            level: 3,
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
            recipeId: "r-015",
            name: "Gourmet Poultry Curry",
            image: "15.png",
            healthPoints: 13,
            category: "hasty",
            duration: 90,
            level: 3,
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
            <CssVarsProvider defaultMode="dark" theme={defaultTheme}>
                <header>
                    <div className="logo">
                        <img
                            src={require("./assets/img/botw-logo.svg").default}
                            className="botw-logo"
                            height="200"
                            alt="logo of the legend of zelda breath of the wild"
                        />
                        <span className="triforce-vert-divider hylian-symbol">b</span>
                        <Typography level="h2" fontWeight="md" className="title">
                            Koko's Kitchen
                        </Typography>
                    </div>
                    <div className="search">
                        <div className="search-container">
                            <Input
                                variant="solid"
                                color="success"
                                className="search-input"
                                size="sm"
                                placeholder="Search for ingredients or status effects..."
                                startDecorator={
                                    <FontAwesomeIcon
                                        size="sm"
                                        className="search-icon fa-flip-horizontal"
                                        icon={solid("search")}
                                    />
                                }
                            />
                        </div>
                    </div>
                    <div className="text-line" aria-hidden="true">
                        {
                            "loremipsumdolorsitametconsecteturadipisicingelitquospariaturmaximeisteoptioipsaquiofficiadoloribuseaenimcupiditateperspiciatisnihilsequiesseaspernaturdoloresperferendisexminimaveritatis!"
                        }
                    </div>
                </header>
                <main>
                    <div className="description-container">
                        <Box className="description">
                            <Typography
                                level="body1"
                                startDecorator={<span className="hylian-symbol">b</span>}
                                className="title"
                            >
                                What is Koko's Kitchen?
                            </Typography>
                            <Typography level="body3" className="content">
                                Koko's Kitchen is a Project inspired by this{" "}
                                <Link
                                    color="danger"
                                    href="https://www.tiktok.com/@bytesofbree/video/7196029507009269038"
                                    target="_blank"
                                >
                                    TikTok
                                    <FontAwesomeIcon
                                        size="sm"
                                        style={{ marginLeft: "0.25rem", fontStyle: "italic" }}
                                        icon={solid("arrow-up-right-from-square")}
                                    />
                                </Link>
                                . It's a collection of all recipes that can be made in 'The Legend of Zelda: Breath of
                                the Wild' and allows you to search for recipes based on your available ingredients,
                                desired stat, buffs etc.. Each recipe shows the needed ingredients and where they can be
                                found.
                            </Typography>
                            <Divider className="wop">
                                <Typography level="body3" className="wop">
                                    Currently a work in progress!
                                </Typography>
                            </Divider>
                            <Box className="hide-me-button">
                                <Tooltip
                                    title="Hide Disclaimer"
                                    size="sm"
                                    variant="solid"
                                    color="danger"
                                    arrow
                                    placement="left"
                                >
                                    <img src={require("./assets/img/caret.svg").default} />
                                </Tooltip>
                            </Box>
                        </Box>
                    </div>
                    <Box className="inventory">
                        <Typography
                            className="title"
                            startDecorator={
                                <img alt="" className="icon" src={require("./assets/img/inventory.svg").default} />
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
                            startDecorator={
                                <img className="header-icon" src={require("./assets/img/pot.svg").default} />
                            }
                            className="header"
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
                <footer>
                    {/* <div className="text-line" aria-hidden="true">
                        {
                            "loremipsumdolorsitametconsecteturadipisicingelitquospariaturmaximeisteoptioipsaquiofficiadoloribuseaenimcupiditateperspiciatisnihilsequiesseaspernaturdoloresperferendisexminimaveritatis!"
                        }
                    </div> */}
                    <Box className="content">
                        <Box className="about">
                            <Typography level="body1" className="header">
                                KOKO'S KITCHEN
                            </Typography>
                            <Box className="content">
                                <Box className="made-with-love">
                                    <Typography level="body3">Made with </Typography>
                                    <Box className="hearts">
                                        <img
                                            src={require("./assets/img/status_effects/heart_4_4.svg").default}
                                            alt=""
                                        />
                                        <img
                                            src={require("./assets/img/status_effects/heart_4_4.svg").default}
                                            alt=""
                                        />
                                        <img
                                            src={require("./assets/img/status_effects/heart_2_4.svg").default}
                                            alt=""
                                        />
                                    </Box>
                                    <Typography level="body3">
                                        by{" "}
                                        <Link className="link" href="https://www.robinleber.de/" target="_blank">
                                            Robin Leber
                                        </Link>
                                    </Typography>
                                </Box>
                                {/* <Box className="inspired-by">
                                <Typography level="body3">
                                    A Project inspired by this{" "}
                                    <Link
                                        className="link"
                                        href="https://www.tiktok.com/@bytesofbree/video/7196029507009269038"
                                        target="_blank"
                                    >
                                        TikTok
                                    </Link>
                                </Typography>
                            </Box> */}
                            </Box>
                        </Box>
                        <Box className="links">
                            {/* <Box>
                                <Typography level="body2" className="title">
                                    Links
                                </Typography>
                                <Box className="content">
                                    <List className="list" size="sm">
                                        <a href="https://www.github.com/Lugere/">
                                            <ListItem className="list-item" onClick={() => {}}>
                                                <ListItemDecorator>
                                                    <FontAwesomeIcon icon={brands("github")} />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    <Typography level="body3">GitHub</Typography>
                                                    <Typography level="body4" className="name">
                                                        /Lugere
                                                    </Typography>
                                                </ListItemContent>
                                                <FontAwesomeIcon
                                                    className="link-icon"
                                                    size="sm"
                                                    icon={solid("arrow-up-right-from-square")}
                                                />
                                            </ListItem>
                                        </a>
                                        <a href="https://www.linkedin.com/in/robinleber/">
                                            <ListItem className="list-item">
                                                <ListItemDecorator>
                                                    <FontAwesomeIcon icon={brands("linkedin")} />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    <Typography level="body3">LinkedIn</Typography>
                                                    <Typography className="name" level="body4" noWrap>
                                                        /in/robinleber
                                                    </Typography>
                                                </ListItemContent>
                                                <FontAwesomeIcon
                                                    className="link-icon"
                                                    size="sm"
                                                    icon={solid("arrow-up-right-from-square")}
                                                />
                                            </ListItem>
                                        </a>
                                        <a href="https://www.xing.com/profile/Robin_Leber2/cv/">
                                            <ListItem className="list-item">
                                                <ListItemDecorator>
                                                    <FontAwesomeIcon icon={brands("xing")} />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    <Typography level="body3">Xing</Typography>
                                                    <Typography className="name" level="body4" noWrap>
                                                        /profile/Robin_Leber2
                                                    </Typography>
                                                </ListItemContent>
                                                <FontAwesomeIcon
                                                    className="link-icon"
                                                    size="sm"
                                                    icon={solid("arrow-up-right-from-square")}
                                                />
                                            </ListItem>
                                        </a>
                                    </List>
                                </Box>
                            </Box> */}
                            <Box className="icons">
                                <a href="https://www.robinleber.de" target="_blank">
                                    <FontAwesomeIcon size="lg" icon={solid("globe")} />
                                </a>
                                <a href="https://www.github.com/Lugere/" target="_blank">
                                    <FontAwesomeIcon size="lg" icon={brands("github")} />
                                </a>
                                <a href="https://www.linkedin.com/in/robinleber/" target="_blank">
                                    <FontAwesomeIcon size="lg" icon={brands("linkedin")} />
                                </a>
                                <a href="https://www.xing.com/profile/Robin_Leber2/cv/" target="_blank">
                                    <FontAwesomeIcon size="lg" icon={brands("xing")} />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </footer>
            </CssVarsProvider>
        </Box>
    );
};

export default App;
