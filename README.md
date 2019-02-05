# WeatherApp

## Install

Run `npm install` from the Client folder

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

## WebApi server

Open the visual studio solution file within the WebApi folder and run the application. You need to update the WepApi server url `BASE_API_URL` in `Environment.ts` file `\Client\src\environments\environment.ts`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## WebApi config info

Already configured external weather api (OpenWeatherMap.org) in appsettings.json file as `weatherApiUrl`. Configure the client (front-end app) url in appsettings.json file as `corsURL`.
