module.exports = api => {
    return { plugins: ["macros"], presets: ["@babel/preset-typescript", "@babel/preset-env"] };
};
