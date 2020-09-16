# Hello Node Boilerplate

A boilerplate for a Hello in Node.js.

This project uses:

```
Node 14.9.
```

You are not required to have that specific version, neither to have Node and yarn installed at all since you can develop it by using Docker and VSCode.

## Running Dev

1. Clone repo

```sh
git clone https://github.com/josethomazini/hello-node-boilerplate {YOUR_APP_NAME}
```

2. Access your new project

```sh
cd {YOUR_APP_NAME}
```

3. Remove the boilerplate's git folder and start a new one

```sh
rm -rf .git
git init
```

3.1 If you plan to develop it by using remote containers on VSCode, you must install the following extension:

```
Remote - Containers
```

3.2 Run on VSCode:

Open the root of your project on VSCode.

Execute the command:

```
Remote-Containers: Reopen in Container
```

Right after the container is up, install 3 apps in Dev Container:

- Prettier - Code formatter
- ESLint
- EditorConfig for VS Code

You will need to reload the container.

Finally open the settings (ctrl + ,), choose the tab "Remote [Dev Container: Existing Dockerfile]", change the view to Json and add this configuration:

```
  "editor.formatOnSave": false
```

3.3 Choose this project's folder.

4 Either from inside the container or from your local system you can call the scripts to prepare the environment

```
yarn:install
start:development
```

Your app should now be running on [localhost:5000](http://localhost:5000/)

## Running Prod

Call the scripts:

- build (to create the files to be served)
- bundle:analysis (to verify which scripts were compiled in each bundle)
- start:production (to serve the files from the dist folder)

## Additional scripts

- yarn-upgrade :: to upgrade all the modules, you should test everything right after this process
- lint :: applies an analysis using the AirBnB code style
- test :: run tests
- test:coverage :: verifies how much code the tests covers
- test:watch :: auto-executes tests whenever a file is saved
