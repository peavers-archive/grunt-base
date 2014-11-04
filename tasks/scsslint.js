// Scss-Lint - Wrapper for the ruby gem scss-lint.

module.exports = {

    options: {
        exclude: "<%= sassDir %>/helpers/_shame.scss",
        config: "<%= gruntConfigDir %>/moe-scss-style.yml",
        reporterOutput: "<%= gruntConfigDir %>/scss-lint-report.xml",
        colorizeOutput: true,
        compact: true
    },

    // Specific folders here to encourage standard project structure. Add/remove as required
    all: [
        "<%= sassDir %>/components",
        "<%= sassDir %>/helpers",
        "<%= sassDir %>/pagetypes"
    ]

};