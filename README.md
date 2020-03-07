# create-fs-app
A custom CLI tool to help setup an empty (starting point) full stack web app which uses react, redux, react-router, scss, webpack and express.

---

### File structure
This tool will generate a front-end and back-end folder respectively. The folder structure is as follows...

```
/client
  /src
    /components
/server
  /routes
```

### Package.json scripts

###### Client
* **start** -- runs the front-end of the application only (includes hot reloading & automatic opening)
* **build** -- prepares the application for development using webpack
* **lint** -- uses eslint to check all js and jsx files for issues inside the client directory

###### server
* **start** -- starts the back-end server in watch mode
* **dev** -- runs both the front-end and back-end of the application

### Packages included
Below are a full list of the packages that are installed...
