# nodets

It's under construction!

## Contents

* [Screens](#screens)
* [Global Requisite](#global-requisite)
* [App Structure](#app-structure)
* [Install, Configure & Run](#install-configure--run)

## Screens

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

### Dashboard Page with Dropdown Menu

![Dashboard Page with Dropdown Menu](/screens/DashboardWithDropdown.png)

### Page Not Found Page

![Page Not Found Page](/screens/PageNotFound.png)
> Note: In case, the requested URI does not exist, app shows this page

### Under Maintenance Page

![Under Maintenance Page](/screens/UnderMaintenance.png)
> Note: In case, a error is generated so instead of plain error we show under maintenance page

## Global Requisite

* node (>= 10.5.0)
* tsc (>= 3.0.1)
* typescript (>= 3.0.1)
* mongoose (>= 3.6.2)

## App Structure

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

## Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions.

> Note: It is preassumed here that you have mongoose running in background & you have created the database.

```bash
# Clone the repo.
git clone https://github.com/faizahmedfarooqui/nodets.git;

# Goto the cloned project folder.
cd nodets;

# Install NPM dependencies.
npm install;

# Edit your DotEnv file using any editor of your choice.
# Please Note: You should add all the configurations details
# or else default values will be used!
vim .env;

# Run the app
npm run dev;
```
