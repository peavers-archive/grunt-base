// JSHint - Lints JS files

module.exports = {

    options: {
        ignores: ["<%= jsDir %>/vendor/**", "<%= jsDir %>/lib/**"],
        extensions: "js"
    },

    all: ['<%= jsDir %>']
};