import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Recipe from "../types/Recipe";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography, Input, Link, Divider, Tooltip } from "@mui/joy";
import { motion, AnimatePresence } from "framer-motion";
import { useCookies } from "react-cookie";

import "./Home.scss";

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

const Home = () => {
    const [cookies, setCookie] = useCookies(["disclaimerVisibility"]);
    const [searchInput, setSearchInput] = useState("");
    const [isDisclaimerVisible, setIsDisclaimerVisible] = useState<boolean>(true);

    useEffect(() => {
        if (cookies) setIsDisclaimerVisible(cookies.disclaimerVisibility);
    }, []);

    const toggleDisclaimer = () => {
        const disclaimerVisibility = !isDisclaimerVisible;
        setIsDisclaimerVisible(disclaimerVisibility);
        setCookie("disclaimerVisibility", disclaimerVisibility, { path: "/", expires: new Date(2039, 12, 31) });
    };

    const temp_effects = ["Hearty", "Sneaky", "Mighty", "Hasty", "Spicy", "Chilly"];
    const temp_ingredients = ["Radish", "Carrot", "Pumpkin", "Durian", "Truffle", "Lotus Seeds"];

    const searchAnimationVariants = {
        hidden: { opacity: 0 },
        visible: (custom: number) => ({
            opacity: 1,
            transition: { delay: custom },
        }),
    };

    return (
        <>
            <header>
                <div className="logo">
                    <img
                        src={require("../assets/img/botw-logo.svg").default}
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
                    <motion.div
                        whileFocus={{ boxShadow: "0px 0px 38px 8px rgba(0,0,0,1)" }}
                        className="search-container"
                    >
                        <Input
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            variant="solid"
                            color="neutral"
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
                    </motion.div>
                </div>
                <div className="text-line" aria-hidden="true">
                    {
                        "itsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethisitsdangeroustogoalonetakethis"
                    }
                </div>
            </header>
            <main>
                <AnimatePresence>
                    {searchInput.length > 0 ? (
                        <motion.div
                            className="search-list-container"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: "auto",
                                opacity: 1,
                            }}
                            exit={{
                                height: 0,
                                opacity: 0,
                                transition: { opacity: { duration: 0.125 } },
                            }}
                        >
                            <motion.div className="search-list">
                                {[...Array(Math.floor(Math.random() * 10 + 1))].map((e, i) => (
                                    <motion.div
                                        variants={searchAnimationVariants}
                                        initial="hidden"
                                        custom={(i + 1) * 0.1}
                                        animate="visible"
                                        exit={{ translateY: `-${i * 2}rem` }}
                                        key={i}
                                        className="search-item-container"
                                    >
                                        <div className="search-item">
                                            <img
                                                className="item-img"
                                                src={require(`../assets/img/ingredients/${Math.floor(
                                                    Math.random() * 149 + 1,
                                                )}.png`)}
                                                alt=""
                                            />
                                            <div className="item-information">
                                                <Typography className="title" level="body2">
                                                    {`${
                                                        temp_effects[Math.floor(Math.random() * temp_effects.length)]
                                                    } ${
                                                        temp_ingredients[
                                                            Math.floor(Math.random() * temp_ingredients.length)
                                                        ]
                                                    }`}
                                                </Typography>
                                            </div>
                                            <div className="item-counter">
                                                <motion.div
                                                    className="counter-button subtract"
                                                    aria-disabled
                                                    whileHover={{ scale: 1.125 }}
                                                    whileTap={{ translateX: "-0.25rem" }}
                                                >
                                                    <FontAwesomeIcon className="icon" icon={solid("caret-left")} />
                                                </motion.div>
                                                <div className="counter">0</div>
                                                <motion.div
                                                    className="counter-button add"
                                                    whileHover={{ scale: 1.125 }}
                                                    whileTap={{ translateX: "0.25rem" }}
                                                >
                                                    <FontAwesomeIcon className="icon" icon={solid("caret-right")} />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
                <motion.div
                    animate={!isDisclaimerVisible ? { translateX: "calc(-100% - 4rem)" } : {}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <Box className={"description-container"}>
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
                                    rel="noreferrer"
                                >
                                    <Typography
                                        endDecorator={
                                            <FontAwesomeIcon
                                                size="2xs"
                                                // style={{ marginLeft: "0.25rem", fontStyle: "italic" }}
                                                icon={solid("arrow-up-right-from-square")}
                                            />
                                        }
                                    >
                                        TikTok
                                    </Typography>
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
                                <motion.div
                                    animate={{ translateX: ["12.5%", "0%", "12.5%"] }}
                                    transition={{ ease: "easeInOut", duration: 1.75, repeat: Infinity }}
                                >
                                    <Tooltip
                                        title={`${isDisclaimerVisible ? "Hide" : "Show"} Disclaimer`}
                                        size="sm"
                                        variant="solid"
                                        color="danger"
                                        arrow
                                        placement="left"
                                    >
                                        <motion.div
                                            animate={!isDisclaimerVisible ? { rotate: 180 } : {}}
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <img
                                                onClick={() => toggleDisclaimer()}
                                                src={require("../assets/img/caret.svg").default}
                                            />
                                        </motion.div>
                                    </Tooltip>
                                </motion.div>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
                <motion.div
                    animate={!isDisclaimerVisible ? { translateY: "-225px" } : {}}
                    transition={!isDisclaimerVisible ? { delay: 0.5 } : {}}
                >
                    <Box className="inventory">
                        <Typography
                            className="title"
                            startDecorator={
                                <img alt="" className="icon" src={require("../assets/img/inventory.svg").default} />
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
                </motion.div>
                <motion.div
                    animate={!isDisclaimerVisible ? { y: "-225px" } : { y: 0 }}
                    transition={!isDisclaimerVisible ? { delay: 0.55 } : {}}
                >
                    <Box className="general-recipes">
                        <Typography
                            startDecorator={
                                <img className="header-icon" src={require("../assets/img/pot.svg").default} />
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
                </motion.div>
            </main>
            <footer>
                <Box className="content">
                    <Box className="about">
                        <Typography level="body1" className="header">
                            KOKO'S KITCHEN
                        </Typography>
                        <Box className="content">
                            <Box className="made-with-love">
                                <Typography level="body3">Made with </Typography>
                                <Box className="hearts">
                                    <img src={require("../assets/img/status_effects/heart_4_4.svg").default} alt="" />
                                    <img src={require("../assets/img/status_effects/heart_4_4.svg").default} alt="" />
                                    <img src={require("../assets/img/status_effects/heart_2_4.svg").default} alt="" />
                                </Box>
                                <Typography level="body3">© 2023 Robin Leber</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="links">
                        <Box className="icons">
                            <a href="https://www.robinleber.de" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon size="lg" icon={solid("globe")} />
                            </a>
                            <a href="https://www.github.com/Lugere/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon size="lg" icon={brands("github")} />
                            </a>
                            <a href="https://www.linkedin.com/in/robinleber/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon size="lg" icon={brands("linkedin")} />
                            </a>
                            <a href="https://www.xing.com/profile/Robin_Leber2/cv/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon size="lg" icon={brands("xing")} />
                            </a>
                        </Box>
                    </Box>
                </Box>
            </footer>
        </>
    );
};

export default Home;
