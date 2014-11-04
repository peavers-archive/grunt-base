// Shell - Allows running shell commands from grunt

module.exports = {

    update: {
        command: 'git submodule foreach git pull origin master'
    }

};