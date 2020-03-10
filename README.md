# Coalition Building App

This is a simple frontend-only application that lets you build (and share!) a coalition following the 2020 Israeli national election results. 
The repo is updated with the latest results from the central election committee for eligible parties and mandate divisions.

**Demo**: https://www.udidollberg.com/coalitiomat2020/

## Installation

1. Clone the repo.
2. In the project folder, run `npm install` to install all project dependencies, which include create-react-app (This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)).

## Scripts

The app was built using create-react-app, so: 
- You can run the dev server at `http://localhost:3000` by running `npm start`
- You can run the test runner with `npm test`
- You can build the project for production using `npm run build`
- You can **eject** your build tools with `npm run eject`, but be careful obv.

## App configuration - Important!
The app has a small config file, `config.js`, in which you can configure the following:
- `appBaseURL`: The app's production TLD URL, for example: `'https://www.example.com/'`
- `appSubPath`: If the app does not sit in the root directory of your server, you enter the relative path here. For example, if your app sits at `https://www.example.com/apps/coalition-game`, the value would be `apps/coalition-game`
- `themeColor`: Controls the website's theme color, works for smartphone browsers like chrome on android. default is `#4575cc`

## Sharing buttons
The sharing buttons use the [react-social-sharing](https://www.npmjs.com/package/react-social-sharing) NPM package which implements http://sharingbuttons.io/ in React
