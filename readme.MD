# NodeJs React and Express 

### Install express
```
npm install express -g
npm install express-generator -g
npm install nodemon -g
npm install -g webpack
npm install -g webpack-cli
```
### Create Express project
```express project-name --hogan```

### Install all dependencies
```cd project-name
npm install
```
### Install react and babel related stuffs
```npm i -S react react-dom
npm i -S babel-loader @babel/core @babel/preset-env
npm i -S @babel/preset-react
npm i -S @babel/preset-es2015
```

### Steps to Setup your project
 * Delete everything inside public folder
 * Under public folder add your theme assets files.
 * Create directory named /src and create file named app.js inside it, this will act as the entry point for react code.
 * Create webpack.config.js necessary modules for building the react code
    * Your webpack config should contain 
        * mode : which determines if you are using it for development or production
        * entry : the entry point for your react code (app.js)
        * output : is where do you want to build the output file
        * module : to define javascript complier like Babel to convert your JSX code to pure javascript.
 * Add bundle build js script to views/index.hjs (This is the entry point of Express)
    ```<script type="text/javascript" src="build/bundle.js"></script>```
 * Add div with id="root" to same file which will act as deployment for react code.

### Steps to start node and compile react code
 * To start Node Daemon use ```nodemon``` 
    * This will start a webserver at port 3000. 
    * You can browse to http://localhost:3000/ to see the basic view.
 * To compile React data to bundle.js run ```webpack -w``` 
    * This will run a watch daemon and will keep building files if you change them
    * You can also run ```webpack``` to compile it once.