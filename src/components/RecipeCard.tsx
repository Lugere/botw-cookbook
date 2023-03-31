import React, { FC, useState } from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography, Divider } from "@mui/joy";
import Recipe from "../types/Recipe";
import { motion } from "framer-motion";

import "./RecipeCard.scss";

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }: RecipeCardProps) => {
    const getTimeFromSeconds = (duration: number): string => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    };

    const [isHovering, setIsHovering] = useState<boolean>(false);

    return (
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="recipe-card-container">
            <motion.div
                className="border-motion"
                onHoverStart={e => setIsHovering(true)}
                onHoverEnd={e => setIsHovering(false)}
                initial="invisible"
                whileHover="visible"
                animate={
                    isHovering ? { scale: [1, 1.03, 1], opacity: [1, 1, 1] } : { scale: [1, 1, 1], opacity: [0, 0, 0] }
                }
                transition={{ repeat: Infinity, duration: 1 }}
            >
                <Box className="caret-container">
                    <FontAwesomeIcon className="caret top-left" icon={solid("caret-up")} />
                    <FontAwesomeIcon className="caret top-right" icon={solid("caret-up")} />
                    <FontAwesomeIcon className="caret bottom-left" icon={solid("caret-up")} />
                    <FontAwesomeIcon className="caret bottom-right" icon={solid("caret-up")} />
                </Box>
            </motion.div>
            <motion.div className="recipe-card" whileHover={{ borderColor: "red" }}>
                <Box className="content">
                    <Box className="top-half">
                        <img alt="" className="recipe-image" src={require(`../assets/img/recipes/${recipe.id}.png`)} />
                        <Box className="top-half-right-side">
                            <Box className="title">
                                <Typography level="h2" fontWeight={200} fontSize="md">
                                    {recipe.label}
                                </Typography>
                            </Box>
                            <Box className="status-effects">
                                {typeof recipe.heartsRecovered === "number" ? (
                                    recipe.heartsRecovered <= 5 ? (
                                        [...Array(recipe.heartsRecovered)].map((e, i) => (
                                            <img
                                                alt=""
                                                key={i}
                                                className="status-icon heart"
                                                src={require("../assets/img/status_effects/heart_4_4.svg").default}
                                            />
                                        ))
                                    ) : (
                                        <>
                                            {[...Array(5)].map((e, i) => (
                                                <img
                                                    alt=""
                                                    key={i}
                                                    className="status-icon heart"
                                                    src={require("../assets/img/status_effects/heart_4_4.svg").default}
                                                />
                                            ))}
                                            <Typography level="body4" className="extra-hearts">{`${
                                                recipe.heartsRecovered - 5
                                            }`}</Typography>
                                        </>
                                    )
                                ) : (
                                    <Box className="full-restore-container">
                                        <Typography className="full-restore" level="body3">
                                            <img
                                                alt=""
                                                className="status-icon"
                                                src={require("../assets/img/status_effects/heart_4_4.svg").default}
                                            />
                                            Full Restore
                                        </Typography>
                                    </Box>
                                )}
                                {recipe.category === "enduring"
                                    ? [...Array(recipe.potency)].map((e, i) => (
                                          <img
                                              alt=""
                                              key={i}
                                              className="status-icon enduring "
                                              src={require("../assets/img/status_effects/enduring_5_5.svg").default}
                                          />
                                      ))
                                    : recipe.category === "hearty"
                                    ? [...Array(recipe.potency)].map((e, i) => (
                                          <img
                                              alt=""
                                              key={i}
                                              className="status-icon heart"
                                              src={require("../assets/img/status_effects/hearty.svg").default}
                                          />
                                      ))
                                    : null}
                            </Box>
                            <Box className="level-time">
                                {recipe.category && recipe.category !== "hearty" ? (
                                    <Box className="time-container">
                                        <Box className="time">
                                            <Box className="level">
                                                {[...Array(recipe.level)].map((e, i) => (
                                                    <Box key={i}>
                                                        {recipe.category === "hasty" ? (
                                                            <img
                                                                alt=""
                                                                className="status-icon"
                                                                src={
                                                                    require("../assets/img/status_effects/hasty.svg")
                                                                        .default
                                                                }
                                                            />
                                                        ) : recipe.category === "mighty" ? (
                                                            <img
                                                                alt=""
                                                                className="status-icon heart"
                                                                src={
                                                                    require("../assets/img/status_effects/mighty.svg")
                                                                        .default
                                                                }
                                                            />
                                                        ) : null}
                                                    </Box>
                                                ))}
                                            </Box>
                                            <FontAwesomeIcon size="2xs" icon={solid("hourglass-half")} />
                                            <Typography level="body3">
                                                {getTimeFromSeconds(recipe.duration ?? 0)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ) : null}
                            </Box>
                        </Box>
                    </Box>
                    <Divider className="divider">
                        <img alt="" className="divider-icon" src={require("../assets/img/pot.svg").default} />
                    </Divider>
                    <Box className="ingredients">
                        {[...Array(5)].map((e, i) => {
                            return (
                                <Box key={i} className="ingredient">
                                    {recipe.ingredients[i] ? (
                                        <img
                                            alt=""
                                            className="ingredient-image"
                                            src={require(`../assets/img/ingredients/${recipe.ingredients[i][0].id}.png`)}
                                        />
                                    ) : (
                                        <img
                                            alt=""
                                            className="empty-ingredient-image"
                                            src={require("../assets/img/ingredient.svg").default}
                                        />
                                    )}
                                    {recipe.ingredients[i] ? (
                                        recipe.ingredients[i].length > 1 ? (
                                            <div className="multiple-ingredients-indicator" />
                                        ) : null
                                    ) : null}
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </motion.div>
        </motion.div>
    );
};

export default RecipeCard;
