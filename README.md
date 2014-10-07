Ember Heroku Cors Client
========================

A demo application for figuring out a good CORS solution for an Ember frontend running with a Rails API backend.

The API server for this project is [here](https://github.com/jeffcressman/ember-heroku-cors-server).

The frontend is on Heroku [here](ember-heroku-cors-client.herokuapp.com).

# TODO

You can check out the Ember Wknd demo [client](https://github.com/jeffcressman/ember-wknd) and [server](https://github.com/jeffcressman/ember-wknd-server) for the following items which are currently implemented in that project.

* CRUD operations for User
* Add Devise
* Add Ember Simple-Auth

# Questions 

* Check if we should be using RESTAdapter or ActiveModelAdapter

## Heroku Setup

```bash
heroku create ember-heroku-cors-client --buildpack https://github.com/tonycoco/heroku-buildpack-ember-cli.git
git push heroku master
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Run

* `ember serve`
* Visit your app at http://localhost:4200.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

