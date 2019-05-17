# Upcoming Movies Web App

## Architecture

Basically, Javascript/Typescript: Front and Back End, using:

Front-end

- [Angular 7+ Framework for routing, components and layout](https://angular.io/)
- [Material 2 For UI and Icons](https://material.angular.io)
- [Angular Flex Layout as FlexLayout/CSS framework](https://github.com/angular/flex-layout)

Back-end

- nodejs
- [express - Routing and middlewares](https://expressjs.com/)
- [cors - Enable cors](https://github.com/expressjs/cors)
- [Body Parser - Request body conversion](https://www.npmjs.com/package/body-parser)
- [unirest - Easy HTTP Requests](http://unirest.io/)

The following app are using the listed libraries and frameworks to show the results coming from TMDB API.

The requests to the TMDB API are made by unirest, through the server that I've created (see ./server folder).

Deployed Version: [https://upcoming-employee.herokuapp.com/movies](https://upcoming-employee.herokuapp.com/movies)

## Build Instructions

- npm install # install dependencies and build
- npm start # run the project

## Assumptions

- You'll have the `tmdbApiKey` var on your ENV setup
- (For build only) You have nodejs on your machine

Cheers!
