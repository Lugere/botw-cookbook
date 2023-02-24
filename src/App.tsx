import React from "react";
import Home from "./views/Home";
import defaultTheme from "./themes/default";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import { CookiesProvider } from "react-cookie";

import "./App.scss";

const App = () => {
    return (
        <BrowserRouter>
            <CssVarsProvider defaultMode="dark" theme={defaultTheme}>
                <CookiesProvider>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </CookiesProvider>
            </CssVarsProvider>
        </BrowserRouter>
    );
};

export default App;
