import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, Typography, Divider } from "@mui/joy";
import Recipe from "../types/Recipe";
import { FC } from "react";

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }: RecipeCardProps) => {
    const getTimeFromSeconds = (duration: number): string => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    };

    return (
        <Box className="recipe-card-container">
            <Card className="recipe-card" variant="soft" orientation="horizontal" color="success">
                <Box className="content">
                    <Box className="top-half">
                        <img
                            className="recipe-image"
                            src={require(`../assets/img/recipes/${recipe.image}`)}
                        />
                        <Box className="top-half-right-side">
                            <Box className="title">
                                <Typography level="h2" fontWeight={200} fontSize="md">
                                    {recipe.name}
                                </Typography>
                            </Box>
                            <Box className="status-effects">
                                {typeof recipe.healthPoints === "number" ? (
                                    recipe.healthPoints <= 5 ? (
                                        [...Array(recipe.healthPoints)].map((e, i) => (
                                            <img
                                                className="status-icon heart"
                                                src={
                                                    require("../assets/img/status_effects/heart_4_4.svg")
                                                        .default
                                                }
                                            />
                                        ))
                                    ) : (
                                        <>
                                            {[...Array(5)].map((e, i) => (
                                                <img
                                                    className="status-icon heart"
                                                    src={
                                                        require("../assets/img/status_effects/heart_4_4.svg")
                                                            .default
                                                    }
                                                />
                                            ))}
                                            <Typography level="body4" className="extra-hearts">{`${
                                                recipe.healthPoints - 5
                                            }`}</Typography>
                                        </>
                                    )
                                ) : (
                                    <Box className="full-restore-container">
                                        <Typography className="full-restore" level="body3">
                                            <img
                                                className="status-icon"
                                                src={
                                                    require("../assets/img/status_effects/heart_4_4.svg")
                                                        .default
                                                }
                                            />
                                            Full Restore
                                        </Typography>
                                    </Box>
                                )}
                                {recipe.category === "enduring"
                                    ? [...Array(recipe.potency)].map((e, i) => (
                                          <img
                                              className="status-icon enduring "
                                              src={
                                                  require("../assets/img/status_effects/enduring_5_5.svg")
                                                      .default
                                              }
                                          />
                                      ))
                                    : recipe.category === "hearty"
                                    ? [...Array(recipe.potency)].map((e, i) => (
                                          <img
                                              className="status-icon heart"
                                              src={
                                                  require("../assets/img/status_effects/hearty.svg")
                                                      .default
                                              }
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
                                                    <>
                                                        {recipe.category === "hasty" ? (
                                                            <img
                                                                className="status-icon"
                                                                src={
                                                                    require("../assets/img/status_effects/hasty.svg")
                                                                        .default
                                                                }
                                                            />
                                                        ) : recipe.category === "mighty" ? (
                                                            <img
                                                                className="status-icon heart"
                                                                src={
                                                                    require("../assets/img/status_effects/mighty.svg")
                                                                        .default
                                                                }
                                                            />
                                                        ) : null}
                                                    </>
                                                ))}
                                            </Box>
                                            <FontAwesomeIcon
                                                size="2xs"
                                                icon={solid("hourglass-half")}
                                            />
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
                        <img
                            className="divider-icon"
                            src={require("../assets/img/pot.svg").default}
                        />
                    </Divider>
                    <Box className="ingredients">
                        {[...Array(5)].map((e, i) => (
                            <Box className="ingredient">
                                {recipe.ingredients[i] ? (
                                    <img
                                        src={require(`../assets/img/ingredients/${recipe.ingredients[i].ingredient.image}`)}
                                    />
                                ) : (
                                    <img
                                        className="empty-ingredient"
                                        src={require("../assets/img/ingredient.svg").default}
                                        alt=""
                                    />
                                )}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Card>
        </Box>
    );
};

export default RecipeCard;
