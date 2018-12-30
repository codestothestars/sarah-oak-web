# Sarah Oak Website Front-End
The public website front-end of Sarah Oak.

## Development
### Dependencies
* [Node.js](https://nodejs.org) 11.6.0 ([nvm](https://github.com/creationix/nvm) is recommended)

### Install
Once you've installed the above dependencies and cloned this repository, install NPM dependencies.

```shell
npm install
```

### Run
Run the following to serve the website from the Angular CLI.

```shell
npm start
```

The application will automatically recompile and update in your browser on every change.

### Contributing
Before committing changes, make sure that you...
1. Write/edit the [JSDoc](http://usejsdoc.org) documentation for all new/modified members.
1. Write/edit unit tests for all new/modified functionality. This repository uses [Jasmine](https://jasmine.github.io/2.8/introduction) for unit testing.
1. Consider writing end-to-end tests for new features. This repository uses [Protractor](https://protractor.angular.io) for end-to-end testing.
1. Run TSLint with `npm run lint` and correct all errors.
1. Run all unit tests with `npm test` and correct all failures.
1. Run all end-to-end tests with `npm run e2e` and correct all failures.

### Branching Model
This project uses the following branching rules.
* `master` contains the current production state. Merge changes into `master` to [trigger a production deployment](#deploying-to-production). Development does not occur here.
* `develop` contains the current development state planned for the next release. Feature branches are created from here and merged back in when the feature is complete.
* Use a named feature branch for each feature in development. This is where all main development should occur.
* `release-*` branches are created from `develop` to prepare the next release. Perform final testing and version checking here, then merge into `master` to trigger a production deployment and back into `develop` to update development.
* `hotfix-*` branches are created from `master` to fix immediate production issues. Merge back into `master` to deploy to production and into `develop` to update the development version.

## Deployment
### Deploying to Production
In order to deploy to production, merge the new production version into `master`.
