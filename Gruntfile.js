module.exports = function (grunt) {
    var path = require('path');

    // auto load grunt config
    require('load-grunt-config')(grunt, {

        // path to task.js files
        configPath: path.join(process.cwd(), 'grunt-base/tasks'),
        overridePath: path.join(process.cwd(), 'grunt-custom/tasks'),

        // paths for our tasks to use.
        data: {
            root: path.resolve(),
            sassDir: "<%= root %>/sass",
            cssDir: "<%= root %>/css",
            jsDir: "<%= root %>/js",
            gruntConfigDir: "<%= root %>/grunt-base/config"
        }

    });

};