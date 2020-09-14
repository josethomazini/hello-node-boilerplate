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
```
Remote-Containers: Open Folder in Container
```

3.3 Choose this project's folder.

4. Either from inside the container or from your local system you can call the scripts to prepare the environment

```sh
npm run yarn:install
npm run development:start
```

Your app should now be running on [localhost:5000](http://localhost:5000/)
