## The folder structure

src
│   app.js          # App entry point
└───api             # Express route controllers for all the endpoints of the app
└───config          # Environment variables and configuration related stuff
└───jobs            # Jobs definitions for agenda.js
└───loaders         # Split the startup process into modules
└───models          # Database models
└───services        # All the business logic is here
└───subscribers     # Event handlers for async task
└───types           # Type declaration files (d.ts) for Typescript

## notice
* Don’t put your business logic inside the controllers!!
* Use a service layer for your business logic

## source
https://softwareontheroad.com/ideal-nodejs-project-structure/

