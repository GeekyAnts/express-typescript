# nodets

It's under construction!

## What is required globally?

* tsc `Version >= Latest`
* typescript `Version >= Latest`
* node `Version >= LTS`

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