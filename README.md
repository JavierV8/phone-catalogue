# Phone-Catalogue

This is a Demo for monitoring data from an Arduino that send the temperature and humidity from a sensor conected to it. The data is sending to a NodeJS server through MQTT. The client that represent the data in a web APP in a very beatufully way is conected to the server by websockets so it allow to show the data in real time.

---

Tools

---

Key tools used in this project are:

- ES6
- Bootstrap
- Reactstrap
- Express
- React
- Redux

# Installation

---

- On the app folder:

Execute the following command on your terminal to install all the needed packages:

    npm install

To build the React app:

    npm build

Start the server API, olso will serve the static files of the react app once the application has been built:

    npm run server

The server will run on port 3001

To run the app on development mode:

    npm run start

It will serve the app on port 3000 by default

Copyright and license

---

The MIT License (MIT). Please see License File for more information.
