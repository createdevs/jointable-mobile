# Join The Table
A mobile App to help you schedule game night with your friends!

** THIS APP IS CURRENTLY IN DEVELOPMENT **
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Before you begin, ensure you have met the following requirements: 
  * You have installed the latest version of npm and node
  * You have installed Expo

Fork this reposity and clone to your local machine. 

This repo contains the client and server side code. 
Inside each of these run:

```
npm install
```

Run start in the app root to start the client with expo
```
npm start
```
For local database testing, you will need MySQL installed locally. 
Create a .env file in 'server' with appropriate variables: 
```
host = 'localhost'
dialect = 'msql'
database = YOURDATABASENAME
port = 3306 //(typical mysql port)
user = YOURUSERNAME
pwd = YOURPASSWORD 
```
Check that you can connect to MySQL and your database.

The client side 'app' also needs a .env file with the following variable, indicating the location of your running server. 
```
deployment=LOCALHOST or YOURSERVERSIPADDRESS
```


## Source Files
### assets 
  * 2 folders in here: fonts and images

### components 
  * This is where we place all our shared React components. Usually these components are the ones that we call stateless or function components, that have no state logic and can be easily reused across the app.

### screens
  * These are our application screens that we navigate from one to another. 

## Built With

* [React-Native](https://facebook.github.io/react-native/) - The mobile framework 
* [Expo.io](https://expo.io/) - Dev tools
* [Auth0](https://auth0.com/) - Authentication
* [Express](https://expressjs.com/) - Web framework
* [Jest](https://jestjs.io/) - Testing library
* [MySQL](https://mysql.com/) - Database Manager
* [Board Game Geeks API](https://boardgamegeek.com/wiki/page/BGG_XML_API&redirectedfrom=XML_API#)

