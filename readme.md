## Purpose
Self contained template for generic tasks that apply to all builds. This is not intended to build projects for deployment. It is expected you will extend this to fit your development environment/workflow.
This can also be used as a template for laying out your own grunt projects with dynamic loading. 

## Requirement
1. ruby ```apt-get install ruby```
1. gem scss-lint ```gem install scss-lint```

## Install
Note: All commands should be ran from your project root directory
```
silverstripe/themes/<project>
```

### Automatic Install
There is a simple ```install.sh``` script written for Debian based systems
* Copy ```install.sh``` contents into a file placed in the projects root directory.
* Execute with root permissions ```sudo sh install.sh```

### Manual Install
Install as a submodule: 

Note: If this is your first time using a submodule run ```git submodule init``` first, then:
```
git submodule add https://gitlab.cwp.govt.nz/themes/grunt-base.git
```

Confirm success install:
```
cat .gitmodules
```

The output should match:
```
[submodule "grunt-base"]
        path = grunt-base
        url = https://gitlab.cwp.govt.nz/themes/grunt-base.git
```

Create a soft link to the two required files in your project directory: 
```
ln -s grunt-base/Gruntfile.js ./
ln -s grunt-base/package.json ./
```

Finally install dependencies with:
```
npm install
```
---

## Grunt Tasks
| Command                   | Effect    |
| ---                       | ---   |
| ```grunt```               | The default task enables the watcher process. This is set to monitor for scss and javascript changes. On change of each file it a linter will be ran, and the the file will be compiled.  |
| ```grunt lint```          | Lints all scss and js files to meet Ministry of Education standard.   |
| ```grunt self-update```   | Updates this submodule with the latest from master.   |
| ```grunt abc```           | Each file in the tasks directory can be called to preform a single action with its filename.  |

## Project Specific Tasks
1. Create a root level folder named grunt-custom/tasks
1. Uncomment ```overridePath: path.join(process.cwd(), 'grunt-custom/tasks),```
1. Any task file placed in here will be auto-loaded and act as part of the base.
 
## Feedback
If we have missed the obvious, are doing something a silly way or making life harder than it needs to be please let us know! 

We can only improve with feedback

mailto: chris.turner@minedu.govt.nz