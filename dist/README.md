# Mabel WCM

SDK to consume IBM WCM's REST API

## Development

### Setup

1. Install Dependencies:
    - [node.js 6+](https://nodejs.org/en/)
    - gulp: `npm install gulp -g` (you may need to run it as root)
    - jspm: `npm install jspm@beta -g` (you may need to run it as root)
    - typings: `npm install typings -g` (you may need to run it as root)
2. cd into the project's root directory
3. Run `npm install && jspm install && typings install`
4. To build the source code run `npm start`

### Publishing the Project

In order for users to use paths like `@mabel/core/some-module` all the compiled files need to live in the root of the published package. To accomplish this, only the `dist` folder is published. 
To publish a new version run:
1. `gulp build`
2. cd into `dist`
3. `npm publish --access=public`
You may need to login first [https://docs.npmjs.com/cli/adduser](https://docs.npmjs.com/cli/adduser)

### Gulp Tasks

- `build`: Same as `npm start`. Builds the source code and prepares it for production (inside the dist/ folder)
- `build:prepare-npm-package`: Prepares the `dist` folder to be ready for publishing it to npm
- `build:prepare-npm-package:copy-docs`: Copies common doc files to the `dist` folder so they can be published in the npm package
- `build:prepare-npm-package:copy:package-json`: Copies a modified version of this project's package.json. This modified version is the one that will be published to npm
- `build:sfx`: Bundles the source code into a single sfx executable `dist/bundles/core.sfx.js`
- `compile:typescript`: Compiles all the typescript source code and makes it accessible in the `dist` folder
- `clean:dist`: Cleans the `dist` folder
- `default`: Same as `build`
- `lint`: Lints the whole project to check that the code style is being followed
- `lint:typescript`: Lints typescript files

### File Structure

- **build**: Build related scripts.
    - **sfx.js**: Main file that feeds the SFX building process. Requires `@mabel/core` and exposes it in the global environment.
- **dist**: Compiled files.
    - **bundles**: Contains versions bundled for simplicity.
        **core.sfx.js**: Bundle that contains the core utilities of mabel and all of its dependencies.
- **node_modules**: npm dependencies (don't touch them)
- **src**: Source files
- **typings**: TypeScript definition files (See [typings](https://github.com/typings/typings))
    - **typings.d.ts**: Main definitions file
- **.gitignore**: Git configuration file to mark which files to ignore
- **CHANGELOG.md**: File to track changes. Any new addition needs to be added here
- **gulpfile.js**: Gulp configuration file
- **jspm.config.js**: JSPM SystemJS configuration file. Used by the sfx bundler and the test engine
- **LICENSE**: Self explanatory
- **package.json**: npm configuration file
- **README.md**: === this
- **tsconfig.json**: TypeScript compiler configuration file
- **tslint.json**: tslint configuration file
- **typings.json**: [typings](https://github.com/typings/typings) configuration file

## TODOs
- Add user documentation
- Add testing configuration

## License

	Copyright (c) 2015-present, Base22 Technology Group, LLC.
	All rights reserved.

	This source code is licensed under the BSD-style license found in the
	LICENSE file in the root directory of this source tree.
