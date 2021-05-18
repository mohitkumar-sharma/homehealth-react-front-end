# HomeHealth

This is the code repository of HomeHealth project compatible with web app

# Clone the project

1. You can [Clone project using HTTPS](https://github.com/mohitkumar-sharma/homehealth-react-front-end.git).
2. If your ssh already setup then [Clone project using git url](git@github.com:mohitkumar-sharma/homehealth-react-front-end.git) and if not then [Setup ssh for GitHub](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

# Development

## Running the app locally

1. Instructions to setup ssh for bitbucket - [Setup ssh for GitHub](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
2. Install js dependencies by running `yarn install` in terminal.
3. Run your project by running `yarn start`

# Package - @crowdapps-developers/homehealth-common-feature

We are using our own custom made package to provide the redux states, redux saga, common config, api services which are common in between mobile and web app. This is a private package, so to install this package you need to follow below steps:-

1. Create a `Personal access token` in your github account in `Settings -> Developer Settings -> Personal access tokens`.
2. Copy this token and save it somewhere because it will not be shown again.
3. Paste this `@mohitkumar-sharma:registry=https://npm.pkg.github.com/` and `//npm.pkg.github.com/:_authToken=Personal access token (Replace Personal access token with the token you have copied)` in to `.npmrc` file in your system root.
4. Now you can install the package.

# Structure

We're using `redux` for state management. All redux store management handled in `states` directory in `@crowdapps-developers/homehealth-common-feature` package.

The bulk of the code is in the `src` directory.

| location       | contents                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------ |
| src/App.tsx    | This is the entry point of app is wrapped in Redux Provider.                                     |
| src/components | Lower level components, e.g. buttons, custom views and small components etc.                     |
| src/pages      | Components representing entire screens within the app, where integration with redux would happen |
| src/config     | App-wide config - things like env. Configuration of the redux store.                             |
| src/assets     | All the assets of app. e.g. images, fonts, etc.                                                  |
| src/types      | Types used in app screens, components, utils etc.                                                |
| src/utils      | All business logic and commonly used functionality.                                              |

# Redux

Our typical redux setup would be done in `config/store.ts`. This would setup the redux store, add default middleware.

We would then add the react-redux `Provider` to `app/App.tsx`. Root screen would be wrapped by `Provider` in `app/App.tsx`.

Redux state (`Actions` and `Reducers`) would be managed in `app/states` for whole app.

Packages needed to setup store:

| package     | purpose                            |
| ----------- | ---------------------------------- |
| react-redux | to setup provider in `app/App.tsx` |
| redux       | main redux package                 |
