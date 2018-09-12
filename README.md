# nodets

It's under construction!

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
