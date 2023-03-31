import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Recipe from "../types/Recipe";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography, Input, Link, Divider, Tooltip } from "@mui/joy";
import { motion, AnimatePresence } from "framer-motion";
import { useCookies } from "react-cookie";

import "./Home.scss";
import Ingredient from "../types/Ingredient";

let recipes: Recipe[] = [
    {
        id: "gourmet_poultry_curry",
        label: "Gourmet Poultry Curry",
        heartsRecovered: 13,
        category: "hasty",
        duration: 90,
        level: 3,
        ingredients: [
            [
                {
                    id: "acorn",
                    label: "Acorn",
                    description:
                        "Often found on the ground near trees. Squirrels adore this nut, so you may have competition while foraging. Add one to a meal for a nutty seasoning.",
                    heartsRecovered: 1,
                    commonLocations: ["East Necluda", "Gerudo Desert"],
                },
            ],
            [
                {
                    id: "amber",
                    label: "Amber",
                    description:
                        "Often found on the ground near trees. Squirrels adore this nut, so you may have competition while foraging. Add one to a meal for a nutty seasoning.",
                    heartsRecovered: 0,
                    commonLocations: ["East Necluda", "Gerudo Desert"],
                },
            ],
            [
                {
                    id: "hearty_durian",
                    label: "Hearty Durian",
                    description:
                        'This fruit\'s mighty odor has earned it the nicklabel "king of fruits". It offers immense restorative powers; dishjes cooked with it will temporarily increase your maximum hearts.',
                    heartsRecovered: 3,
                    commonLocations: ["West Necluda", "Faron Grasslands"],
                },
            ],
        ],
    },
];

const Home = () => {
    const [cookies, setCookie] = useCookies(["disclaimerVisibility"]);
    const [searchInput, setSearchInput] = useState("");
    const [isDisclaimerVisible, setIsDisclaimerVisible] = useState<boolean>(true);
    const [inventory, setInventory] = useState<{ ingredient: Ingredient; quantity: number }[]>([]);

    useEffect(() => {
        if (cookies) {
            console.log(cookies.disclaimerVisibility);
            setIsDisclaimerVisible(cookies.disclaimerVisibility);
        }
    }, [cookies]);

    const toggleDisclaimer = (): void => {
        const disclaimerVisibility = !isDisclaimerVisible;
        setCookie("disclaimerVisibility", disclaimerVisibility, { path: "/", expires: new Date(2039, 12, 31) });
        setIsDisclaimerVisible(disclaimerVisibility);
    };

    const addIngredientToInventory = (ingredient: Ingredient): void => {
        const item = inventory.find(item => item.ingredient.id === ingredient.id);
        if (!item) {
            setInventory([...inventory, { ingredient, quantity: 1 }]);
            return;
        }

        if (item.quantity < 99)
            setInventory(
                inventory.map(item => {
                    if (item.ingredient.id === ingredient.id) return { ...item, quantity: item.quantity + 1 };
                    return item;
                }),
            );
    };

    const removeIngredientFromInventory = (ingredient: Ingredient, whole?: boolean): void => {
        const item = inventory.find(item => item.ingredient.id === ingredient.id);
        if (!item) return;

        if (item.quantity === 1 || whole) {
            setInventory(inventory.filter(item => item.ingredient.id !== ingredient.id));
            return;
        }

        setInventory(
            inventory.map(item => {
                if (item.ingredient.id === ingredient.id) return { ...item, quantity: item.quantity - 1 };
                return item;
            }),
        );
    };

    const getItemQuantity = (ingredient: Ingredient) => {
        const item = inventory.find(item => item.ingredient.id === ingredient.id)?.quantity;
        return item ?? 0;
    };

    const ingredients: Ingredient[] = [
        {
            id: "acorn",
            label: "Acorn",
            description:
                "Often found on the ground near trees. Squirrels adore this nut, so you may have competition while foraging. Add one to a meal for a nutty seasoning.",
            heartsRecovered: 1,
            commonLocations: ["East Necluda", "Gerudo Desert"],
        },
        {
            id: "amber",
            label: "Amber",
            description:
                "Often found on the ground near trees. Squirrels adore this nut, so you may have competition while foraging. Add one to a meal for a nutty seasoning.",
            heartsRecovered: 0,
            commonLocations: ["East Necluda", "Gerudo Desert"],
        },
        {
            id: "hearty_durian",
            label: "Hearty Durian",
            description:
                'This fruit\'s mighty odor has earned it the nicklabel "king of fruits". It offers immense restorative powers; dishjes cooked with it will temporarily increase your maximum hearts.',
            heartsRecovered: 3,
            commonLocations: ["West Necluda", "Faron Grasslands"],
        },
        {
            id: "goat_butter",
            label: "Goat Butter",
            description:
                'This fruit\'s mighty odor has earned it the nicklabel "king of fruits". It offers immense restorative powers; dishjes cooked with it will temporarily increase your maximum hearts.',
            heartsRecovered: 3,
            commonLocations: ["West Necluda", "Faron Grasslands"],
        },
        {
            id: "fairy",
            label: "Fairy",
            description:
                'This fruit\'s mighty odor has earned it the nicklabel "king of fruits". It offers immense restorative powers; dishjes cooked with it will temporarily increase your maximum hearts.',
            heartsRecovered: 3,
            commonLocations: ["West Necluda", "Faron Grasslands"],
        },
        {
            id: "hightail_lizard",
            label: "Hightail Lizard",
            description:
                'This fruit\'s mighty odor has earned it the nicklabel "king of fruits". It offers immense restorative powers; dishjes cooked with it will temporarily increase your maximum hearts.',
            heartsRecovered: 3,
            commonLocations: ["West Necluda", "Faron Grasslands"],
        },
    ];

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
                                {ingredients
                                    .filter(ingredient => ingredient.label.toLowerCase().includes(searchInput))
                                    .map((ingredient: Ingredient, i) => (
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
                                                    src={require(`../assets/img/ingredients/${ingredient.id}.png`)}
                                                    alt=""
                                                />
                                                <div className="item-information">
                                                    <Typography className="title" level="body2">
                                                        {ingredient.label}
                                                    </Typography>
                                                </div>
                                                <div className="item-counter">
                                                    <motion.div
                                                        className="counter-button subtract"
                                                        aria-disabled={getItemQuantity(ingredient) < 1}
                                                        whileTap={
                                                            getItemQuantity(ingredient) > 0
                                                                ? { translateX: "-0.25rem" }
                                                                : {}
                                                        }
                                                        onClick={() => removeIngredientFromInventory(ingredient)}
                                                    >
                                                        <FontAwesomeIcon className="icon" icon={solid("caret-left")} />
                                                    </motion.div>
                                                    <div className="counter">{getItemQuantity(ingredient)}</div>
                                                    <motion.div
                                                        className="counter-button add"
                                                        whileTap={{ translateX: "0.25rem" }}
                                                        onClick={() => addIngredientToInventory(ingredient)}
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
                                                alt=""
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
                            Your Inventory
                        </Typography>
                        {inventory.length > 0 ? (
                            <Box className="inventory-container">
                                {inventory.map((item: { ingredient: Ingredient; quantity: number }) => (
                                    <motion.div
                                        variants={{
                                            hidden: { x: -60, opacity: 0 },
                                            visible: { x: 0, opacity: 1 },
                                        }}
                                        className="ingredient-container"
                                    >
                                        <img
                                            className="ingredient"
                                            alt=""
                                            src={require(`../assets/img/ingredients/${item.ingredient.id}.png`)}
                                        />
                                        <Box className="quantity">x{item.quantity}</Box>
                                        <Box
                                            role="button"
                                            className="remove-button"
                                            onClick={() => removeIngredientFromInventory(item.ingredient, true)}
                                        >
                                            <FontAwesomeIcon className="icon" size="xs" icon={solid("xmark")} />
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>
                        ) : (
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
                        )}
                    </Box>
                </motion.div>

                <motion.div
                    animate={!isDisclaimerVisible ? { y: "-225px" } : { y: 0 }}
                    transition={!isDisclaimerVisible ? { delay: 0.55 } : {}}
                >
                    <Box className="general-recipes">
                        <Typography
                            startDecorator={
                                <img alt="" className="header-icon" src={require("../assets/img/pot.svg").default} />
                            }
                            className="header"
                            level="body1"
                            fontWeight="md"
                        >
                            Possible Recipes
                        </Typography>
                        <Box className="recipes">
                            {recipes.map(recipe => (
                                <RecipeCard key={recipe.id} recipe={recipe} />
                            ))}
                        </Box>
                    </Box>
                </motion.div>
            </main>
            <footer>
                <Box className="top">
                    <Box className="about">
                        <Typography level="body1" className="header">
                            koko's kitchen
                        </Typography>
                        <Box className="content">
                            <Box className="made-with-love">
                                <Typography level="body3">Made with </Typography>
                                <Box className="hearts">
                                    <img src={require("../assets/img/status_effects/heart_4_4.svg").default} alt="" />
                                    <img src={require("../assets/img/status_effects/heart_4_4.svg").default} alt="" />
                                    <img src={require("../assets/img/status_effects/heart_2_4.svg").default} alt="" />
                                </Box>
                                <Typography level="body3">© 2023 Robin Leber. All rights reserved.</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="divine-beasts">
                        <img
                            className="eponator"
                            src={require("../assets/img/divine_beasts/eponator.svg").default}
                            alt=""
                        />
                        <img
                            className="vah-medoh"
                            src={require("../assets/img/divine_beasts/vah_medoh.svg").default}
                            alt=""
                        />
                        <img
                            className="vah-naboris"
                            src={require("../assets/img/divine_beasts/vah_naboris.svg").default}
                            alt=""
                        />
                        <img
                            className="vah-rudania"
                            src={require("../assets/img/divine_beasts/vah_rudania.svg").default}
                            alt=""
                        />
                        <img
                            className="vah-ruta"
                            src={require("../assets/img/divine_beasts/vah_ruta.svg").default}
                            alt=""
                        />
                    </Box>
                </Box>
                <Box className="bottom">
                    <Box className="links">
                        <Typography className="header">Follow me</Typography>
                        <Box className="icons">
                            <a href="https://www.robinleber.de" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon" size="lg" icon={solid("globe")} />
                            </a>
                            <a href="https://www.github.com/Lugere/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon" size="lg" icon={brands("github")} />
                            </a>
                            <a href="https://www.linkedin.com/in/robinleber/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon" size="lg" icon={brands("linkedin")} />
                            </a>
                            <a href="https://www.xing.com/profile/Robin_Leber2/cv/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="icon" size="lg" icon={brands("xing")} />
                            </a>
                        </Box>
                    </Box>
                    <Box className="logos">
                        <a
                            className="botw-logo"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.zelda.com/breath-of-the-wild/"
                        >
                            <img src={require("../assets/img/botw-logo.svg").default} alt="" />
                        </a>
                        <span className="triforce-vert-divider hylian-symbol">b</span>
                        <a className="rl-logo" target="_blank" rel="noreferrer" href="https://www.robinleber.de/">
                            <img src={require("../assets/img/rl_logo.svg").default} alt="" />
                        </a>
                    </Box>
                </Box>
            </footer>
        </>
    );
};

export default Home;
