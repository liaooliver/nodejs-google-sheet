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

## google edit token
1h1bH_e93mwiydzSTI_SnUzUk8WJITvk37iZf52w1HhF1__yaGLrsYwIY

sheet 1tloIdgp49FCRyS2vg6ShKSTw-02f_6Cb9xCXlxfI_YI

https://theoephraim.github.io/node-google-spreadsheet/

