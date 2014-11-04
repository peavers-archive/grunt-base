// SASS - Compiles and compresses all .scss files inside the sass directory.

module.exports = {

    options: {
        outputStyle: "compressed"
    },

    all: {
        files: [{
            expand: true,
            cwd: "<%= sassDir %>",
            src: ["*.scss"],
            dest: "<%= cssDir %>",
            ext: ".css"
        }]
    }
};