// Update all grunt dependencies

module.exports = {
    main: {
        options: {
            updateType: 'force',
            reportUpdated: true,
            semver: false,
            packages: {
                devDependencies: true,
                dependencies: false
            }
        }
    }
};