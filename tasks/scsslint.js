// Scss-Lint - Wrapper for the ruby gem scss-lint.

module.exports = {

    options: {
        exclude: "<%= sassDir %>/helpers/_shame.scss",
        config: "<%= gruntConfigDir %>/moe-scss-style.yml",
        reporterOutput: "<%= gruntConfigDir %>/scss-lint-report.xml",
        colorizeOutput: true,
        compact: true
    },


    all: [
        "<%= sassDir %>/**/*.scss",
        "!<%= sassDir %>/vendor/*.scss" //Ignore the vendor folder as we don't really care.
    ]

};