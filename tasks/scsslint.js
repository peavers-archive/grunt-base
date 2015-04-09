// Scss-Lint - Wrapper for the ruby gem scss-lint.

module.exports = {

    options: {
        config: "<%= gruntConfigDir %>/moe-scss-style.yml",
        colorizeOutput: true,
        compact: true
    },



    all: [
        "<%= sassDir %>/**/*.scss",
        "!<%= sassDir %>/vendor/*.scss", //Ignore the vendor folder as we don't really care.
        "!<%= sassDir %>/lib/*.scss" //Ignore the lib folder as we don't really care.
    ]

};