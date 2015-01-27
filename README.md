# angularLabExample
Playing with Node, Express and Angular.


#Setup:
Install dependencies with npm and bower by running:
```
npm install && bower install
```
> npm is generally used to manage server and development dependencies, whereas bower is generally used to manage client side dependencies

#Running Your Project:
To serve your project, run:
```
grunt serve
``` 
> Grunt is a task runner that helps automate all that stuff you had to type during the last lab. Right now, ``grunt serve`` is set up to run nodemon, which will automatically
restart your node server whenever it detects changes to your project.

Served projects should be available on localhost:9000 by default.

>If you get an error something along the lines of ``bash: grunt: command not found`` you probably don't have grunt installed correctly. Please let a professor or DM know about this. 

#Testing Your Project

To run your tests, run:
```
grunt test
```
> If this doesn't work, please let a professor or DM know about it.

You can also run your tests through the webstorm karma run configuration (right click karma.conf.js, etc.)

##Resoures
#####Bootstrap Components:
http://getbootstrap.com/components/

#####Getting started with grunt:
http://gruntjs.com/getting-started

#####Tutorial for testing with jasmine
http://jasmine.github.io/2.0/introduction.html



