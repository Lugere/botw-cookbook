import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, Typography, Divider } from "@mui/joy";
import Recipe from "../types/Recipe";
import { FC } from "react";

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }: RecipeCardProps) => {
    return (
        <Box className="recipe-card-container">
            <Card className="recipe-card" variant="soft" orientation="horizontal" color="success">
                <img
                    className="recipe-image"
                    src={require(`../assets/img/recipes/${recipe.image}`)}
                />
                <Box className="content">
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
                                    <Box className="extra-hearts-container">
                                        <Typography level="body3" className="extra-hearts">{`+${
                                            recipe.healthPoints - 5
                                        }`}</Typography>
                                    </Box>
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
                                          require("../assets/img/status_effects/hearty.svg").default
                                      }
                                  />
                              ))
                            : recipe.category === "mighty"
                            ? [...Array(recipe.potency)].map((e, i) => (
                                  <img
                                      className="status-icon"
                                      src={
                                          require("../assets/img/status_effects/mighty.svg").default
                                      }
                                  />
                              ))
                            : recipe.category === "hasty"
                            ? [...Array(recipe.potency)].map((e, i) => (
                                  <img
                                      className="status-icon"
                                      src={
                                          require("../assets/img/status_effects/hasty.svg").default
                                      }
                                  />
                              ))
                            : null}
                    </Box>
                    <Divider>
                        <span className="triforce-divider hylian-symbol">b</span>
                    </Divider>
                    <Box className="ingredients">
                        {recipe.ingredients.map(ingredient => (
                            <Box className="ingredient">
                                <img
                                    src={require(`../assets/img/ingredients/${ingredient.ingredient.image}`)}
                                />
                                <Typography level="body4" className="multiplier">
                                    x{ingredient.amount}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Card>
        </Box>
    );
};

export default RecipeCard;
