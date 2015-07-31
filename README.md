# Intial setup

Node.js / npm must be installed.

```
npm install -g grunt-cli yo bower
npm install
bower install
```

# Serving the application

Run the following command to make the application available at http://localhost:9001

```
grunt serve
```

# Running unit tests

To run the Jasmine unit tests using Karma, use this command:

```
grunt test
```

# Extend the application

The easiest way to extend the application with new Angular components is to use Yeoman. First, install the *cg-angular* generator:

```
npm install -g generator-cg-angular
```

In the project folder use a command like this to create a **module**, **service**, **directive**, **filter**, **partial** or **modal**:

```
yo cg-angular:service my-service
```

See also https://github.com/cgross/generator-cg-angular
