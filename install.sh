#!/bin/sh

#==============
# Install requirements
#==============
requiredFiles() {

    apt-get install --yes ruby

    # Check if the gem is already installed, skip if it is.
    if [ ! 'gem list scss-lint -i' ]; then
        gem install scss-lint
    else
        echo 'INFO: Required gem already installed, skipping';
    fi

}

#==============
# Initiate and clone submodule
#==============
submodule() {

    # Make sure you're in a git directory before trying to create a submodule
    if [ -d ".git" ]; then
        git submodule init
        git submodule add https://gitlab.cwp.govt.nz/themes/grunt-base.git
    else
        echo 'ERROR: Must be ran from a git initalized directory';
        exit;
    fi

}

#==============
# Remove any old files and import new ones to project root
#==============
setupGrunt() {

    # remove Gruntfile.js if exist
    if [ -f Gruntfile.js ]; then
        rm Gruntfile.js
    fi

    # remove package.json if exist
    if [ -f package.json ]; then
        rm package.json
    fi

    # Create syslinks
    ln -s grunt-base/Gruntfile.js ./
    ln -s grunt-base/package.json ./

    # Install package.json dependencies
    npm install

    clear;

    echo 'COMPLETE: Type "grunt" to start watching!'

}

requiredFiles;
submodule;
setupGrunt;

