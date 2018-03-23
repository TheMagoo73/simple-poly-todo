# \<simple-poly-todo\>



## Getting it up and running

All of the below steps assume you have a command line prompt in the root of the project

### 0/ Pre-requisites

You'll need an LTS version of Node installed, along with an install of NPM and a global install of Bower and the Polymer CLI:

```npm install -g bower```

```npm install -g polymer-cli```


### 1/ Install all the dependancies

Ensure all of the Node and Bower packages needed to build and run the code are installed using the following commands

```npm install```

```bower install```


### 2/ Build the output bundles

Build the three optimised bundles that allow us to server content best suited to the users browser capabilities

```polymer build```


### 3/ Run the Node server

This runs a Node based server listening for traffic on port 8080

```npm start```