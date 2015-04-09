// Watch - Monitors directories for changes, then runs specific tasks

module.exports = {

    options: {
        spawn: true, // Reduces latency by ~500ms but may cause errors. Set true if error prone process
        interrupt: true,
        debounceDelay: 250
    },

    // Clear the terminal, compile all changed .scss files
    sass: {
        files: ["<%= sassDir %>/**/*.scss"],
        tasks: ["clear", "newer:scsslint:all", "sass"]
    },

    // Clear the terminal, lint js files
    js: {
        files: ["<%= jsDir %>/**/*.js"],
        tasks: ["clear", "newer:jshint"]
    }

};