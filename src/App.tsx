import React from "react";
import {
    AspectRatio,
    Box,
    Button,
    Card,
    Chip,
    Divider,
    Input,
    Link,
    Typography,
    CardContent,
} from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import defaultTheme from "./themes/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./App.scss";

const App = () => {
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
                        <Divider className="divider" orientation="vertical" />
                        <Typography className="title">cookbook</Typography>
                    </div>
                    <div className="search">
                        <Input
                            variant="solid"
                            color="primary"
                            placeholder="Enter keyword..."
                            endDecorator={
                                <Button
                                    startDecorator={
                                        <FontAwesomeIcon icon={solid("search")} size="sm" />
                                    }
                                    variant="soft"
                                    color="neutral"
                                >
                                    Search
                                </Button>
                            }
                        />
                    </div>
                </header>
                <main>
                    <Typography fontWeight="lg" level="h4" sx={{ mb: 1.5 }}>
                        ALL RECIPES
                    </Typography>
                    <Card
                        className="recipe-card"
                        variant="soft"
                        orientation="horizontal"
                        color="success"
                    >
                        <img src="https://img.game8.co/3300873/ae14d8a0c7706c69a67268bc91ed5ca2.png/show" />
                        <Box display="flex" flexDirection="column">
                            <Box className="title">
                                <Typography level="h2" fontSize="md" mb={0.5}>
                                    Creamy Heart Soup
                                </Typography>
                                <FontAwesomeIcon className="bookmark" icon={solid("bookmark")} />
                            </Box>
                            <Box className="status-effects">
                                <FontAwesomeIcon className="heart" icon={solid("heart")} />
                                <FontAwesomeIcon className="heart" icon={solid("heart")} />
                                <FontAwesomeIcon className="heart" icon={solid("heart")} />
                                <FontAwesomeIcon className="stamina" icon={solid("circle-dot")} />
                            </Box>
                            <Box className="ingredients">
                                <img src={require("./assets/img/ingredients/fresh-milk.png")} />
                                <img src={require("./assets/img/ingredients/raddish.png")} />
                                <img src={require("./assets/img/ingredients/hydromelon.png")} />
                            </Box>
                        </Box>
                    </Card>
                </main>
            </CssVarsProvider>
        </Box>
    );
};

export default App;
