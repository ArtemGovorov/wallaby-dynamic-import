# wallaby-dynamic-import

> Repository to reproduce dynamic import issue in Wallaby


## Install

```
$ git clone https://github.com/kevva/wallaby-dynamic-import.git
$ npm install
$ npm link dynamic-import-module
```


## Steps to reproduce

Run `npm test` and it should run Jest successfully with tests passing. If you run this with Wallaby it'll error because the dynamic import plugin isn't lodaded. Wallaby should load Babel config using the same behaviour as Jest, i.e. using the `babel.config.js` for everything if it exists. See https://babeljs.io/docs/en/configuration.
