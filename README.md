# bdapp

# Welcome to BD App

# Installing 

Checkout the repo
npm install
npm start



# Setting up for the first time

Used the following guide:
https://medium.com/@TeeFouad/create-a-react-application-from-scratch-part-3-using-es2015-syntax-4ab0ba7a4254

npm init

edited package.json to have a start script

npm start

which npx
npm install -g npx

npm install --save babel-core babel-cli

npm install --save babel-preset-es2015 babel-preset-stage-0

npx babel-node index.js

edited package.json to use babel-node

npm install --save-dev eslint


npm install --save-dev eslint-config-airbnb

npm install --save-dev eslint-plugin-import
npm install --save-dev eslint-plugin-jsx-a11y
npm install --save-dev eslint-plugin-react

edited .eslintrc to extend airbnb

npm install --save-dev babel-eslint

npm run lint

edited package.json to use lint script


npm install --save-dev pre-commit

edited package.json to use pre-commit lint




npm install --save express