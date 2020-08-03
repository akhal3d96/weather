# Weather 
<p align="center">
  <img src="https://raw.githubusercontent.com/nemoload/weather/master/public/logo192.png" alt="Weather">
</p>

A very simple web application made using React that fetches weather using **OpenWeatherMap** API alongside few small features and a dark mode of course!


Live demo: [Here](https://nemoload.github.io/weather/)

<p align="center">
  <img src="https://media.giphy.com/media/JQdlKjM2o6lUmprscr/giphy.gif" alt="Weather">
</p>

## Technologies

* [React](https://reactjs.org/) v16
* [Bulma](https://bulma.io/) v0.9

This app was bootstrapped using Create React App, you can learn more about the commands from [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Installing and running
```sh
git clone https://github.com/nemoload/weather
cd weather
yarn # or npm i
```

Optain an API key from [OpenWeatherMAP](https://openweathermap.org) and in `src/config.js` change `OPENWEATHER_API_KEY` to your API key.

Then, to run the project:
```sh
yarn start # npm start
```

## Deployment

To build the project for deployment make sure to change the `homepage` property in `package.json` to suit your needs, then:

```sh
yarn build # npm run-script build
```

The files will be available in `public` directory.

## To-DO
* Better location search
* Improve dark mode settings
* Pack it as a Web Extension
* Tests and documentation 
