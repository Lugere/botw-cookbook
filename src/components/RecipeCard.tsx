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
                <Box display="flex" flexDirection="column">
                    <Box className="title">
                        <Typography level="h2" fontWeight={200} fontSize="md">
                            {recipe.name}
                        </Typography>
                    </Box>
                    <Box className="status-effects">
                        {typeof recipe.healthPoints === "number" ? (
                            recipe.healthPoints <= 5 ? (
                                [...Array(recipe.healthPoints)].map((e, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        className="heart"
                                        icon={solid("heart")}
                                    />
                                ))
                            ) : (
                                <>
                                    {[...Array(5)].map((e, i) => (
                                        <FontAwesomeIcon
                                            key={i}
                                            className="heart"
                                            icon={solid("heart")}
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
                                    <FontAwesomeIcon
                                        size="sm"
                                        className="heart"
                                        icon={solid("heart")}
                                    />
                                    Full Restore
                                </Typography>
                            </Box>
                        )}
                        {recipe.category === "enduring"
                            ? [...Array(recipe.potency)].map((e, i) => (
                                  <FontAwesomeIcon
                                      key={i}
                                      className="stamina"
                                      icon={solid("circle-dot")}
                                  />
                              ))
                            : recipe.category === "hearty"
                            ? [...Array(recipe.potency)].map((e, i) => (
                                  <FontAwesomeIcon
                                      key={i}
                                      className="hearty"
                                      icon={solid("heart")}
                                  />
                              ))
                            : null}
                    </Box>
                    <Divider sx={{ my: 1, mb: 0.0625 }}>
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
