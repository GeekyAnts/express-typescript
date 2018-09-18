# Description

A boilerplate for [Node.js](https://nodejs.org/en) App.

This boilerplate is built using [Express.js](https://expressjs.com/) web framework, and have used [Typescript Lang](https://www.typescriptlang.org/) for writing the app's logic. 

This app also uses the Node.js's [Cluster API](https://nodejs.org/api/cluster.html), this helps us to take advantage of multi-core systems to handle the load.

For storing configuration into the `process.env`, [DOTENV](https://github.com/motdotla/dotenv) for Node.js is used.

For Database, this repo contains the use of [Mongoose](https://mongoosejs.com/) (ie. [MongoDB](https://www.mongodb.com/) object modeling for [Node.js](https://nodejs.org/en/)).

For Cache, this repo contains the use of [memory-cache](https://github.com/ptarjan/node-cache#readme) (ie. A simple in-memory cache for node.js).

For Routing, this repo contains the use [express-router](https://expressjs.com/en/guide/routing.html) & have distributed Routes into two files ie. Web Routes & API Routes. The web routes are using [CSRF Token](https://github.com/krakenjs/lusca) while the API routes are using [JSON Web Token](https://github.com/auth0/express-jwt).

For Strategies Authentication, this repo contains the use of the [Passport.js](https://github.com/jaredhanson/passport). Passport.js is compatible with Express.js and is authentication middleware for Node.js.

For views, this repo contains the use of [PUG](https://github.com/pugjs/pug) template engine.

# Contents

* [Global Requisite](#global-requisite)
* [App Structure](#app-structure)
* [Install, Configure & Run](#install-configure--run)
* [List of Routes](#list-of-routes)
* [Screens](#screens)

# Global Requisite

* node (>= 10.5.0)
* tsc (>= 3.0.1)
* typescript (>= 3.0.1)
* mongoose (>= 3.6.2)

# App Structure

> _Note: I am mentioning only files/folders which you need to configure if required_

```bash
├── dist
├── public
├── src
│   ├── controllers
│   │   ├── Api
│   │   │   ├── Auth
│   │   │   │   ├── Login.ts
│   │   │   │   ├── RefreshToken.ts
│   │   │   │   └── Register.ts
│   │   │   └── Home.ts
│   │   ├── Auth
│   │   │   ├── Login.ts
│   │   │   ├── Logout.ts
│   │   │   ├── Register.ts
│   │   │   └── Social.ts
│   │   ├── Account.ts
│   │   └── Home.ts
│   ├── exception
│   │   └── Handler.ts
│   ├── interfaces
│   │   ├── models
│   │   │   └── user.ts
│   │   └── vendors
│   │        ├── index.ts
│   │        ├── INext.ts
│   │        ├── IRequest.ts
│   │        └── IResponse.ts
│   ├── middlewares
│   │   ├── CORS.ts
│   │   ├── CsrfToken.ts
│   │   ├── Http.ts
│   │   ├── Kernel.ts
│   │   ├── Statistics.ts
│   │   └── View.ts
│   ├── models
│   │   └── User.ts
│   ├── providers
│   │   ├── App.ts
│   │   ├── Cache.ts
│   │   ├── Database.ts
│   │   ├── Express.ts
│   │   ├── Locals.ts
│   │   ├── Passport.ts
│   │   └── Routes.ts
│   ├── routes
│   │   ├── Api.ts
│   │   └── Web.ts
│   ├── services
│   │   └── strategies
│   │        ├── Google.ts
│   │        ├── Local.ts
│   │        └── Twitter.ts
│   └── index.ts
├── views
│   ├── includes
│   ├── modals
│   ├── pages
│   ├── partials
│   ├── static
│   │   ├── css/*.css
│   │   └── js/*.js
│   └── layout.pug
├── .env
├── .gitignore
├── nodemon.json
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json
```

# Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions.

> Note: It is preassumed here that you have mongoose running in background & you have created the database.

```bash
# Clone the repo.
git clone https://github.com/faizahmedfarooqui/nodets.git;

# Goto the cloned project folder.
cd nodets;

# Install NPM dependencies.
# Note: You can review the list of dependencies from the below link.
# https://github.com/faizahmedfarooqui/nodets/network/dependencies
npm install;

# Edit your DotEnv file using any editor of your choice.
# Please Note: You should add all the configurations details
# or else default values will be used!
vim .env;

# Run the app
npm run dev;
```

# List of Routes:

```sh
# Web Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET    | /
  GET    | /signup
  POST   | /signup
  GET    | /login
  POST   | /login
  GET    | /logout
  GET    | /account
  GET    | /auth/google
  GET    | /auth/google/callback
  GET    | /auth/twitter
  GET    | /auth/twitter/callback
+--------+-------------------------+

# API Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  POST   | /api
  POST   | /api/auth/login
  POST   | /api/auth/register
  POST   | /api/auth/refresh-token
+--------+-------------------------+
```

# Screens

### Home / Landing Page

![Home / Landing Page](/screens/Home.png)
> Note: This page has sub-sections, like about-us, contact-us & portfolio

### LogIn Page

![LogIn Page](/screens/Login.png)
> Note: LogIn with Providers

### SignUp Page

![SignUp Page](/screens/SignUp.png)
> Note: SignUp with Providers

### Dashboard Page

![Dashboard Page](/screens/Dashboard.png)

### With Dropdown Menu

![Dashboard Page with Dropdown Menu](/screens/DashboardWithDropdown.png)

### Page Not Found Page

![Page Not Found Page](/screens/PageNotFound.png)
> Note: In case, the requested URI does not exist, app shows this page

### Under Maintenance Page

![Under Maintenance Page](/screens/UnderMaintenance.png)
> Note: In case, a error is generated so instead of plain error we show under maintenance page
