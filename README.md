# meteor_exploration

###The project

This project is an exploration of Meteor JS.  My goal was to learn how to build a CRUD app with multiple pages.  I was successfully able to implement these functionalities in the form of a TODO application.


###How it works

There are two main files: todo.html and todo.js.

todo.html contains the "views" in the form of templates.  Each template can be rendered using {{> template_name}} syntax.  Data is passed into the template via helper functions that are defined in todo.js.  This helper functions can perform queries directly on the mongoDB database.

todo.js contains the javascript for both the client code and the server code (which runs inside of a Node.js container).  The app as is does not have any explicit server code, because it does not perform any server-side validations.  Note that due to this lack kof server-side validations, the app is insecure.
The page-routing is implemented with a 3rd party library called Iron Router.  Note that the pages for "Register" and "Login" are stub pages.  I created them only to explore how I would create a multi-page app.

### How to contribute

You can clone the repo and submit a pull request.


### Setup instructions

1) Install meteor by following instructions here: https://www.meteor.com/install

2) clone this repo

3) cd into the repo

4) type "meteor run" in the command line
