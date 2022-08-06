## About

Template for creating desktop applications with [Neutralino.js](https://neutralino.js.org/) + [Svelte](https://svelte.dev/) + [Vite](https://vitejs.dev/) and [TypeScript](https://www.typescriptlang.org/).

> **Hot reloading** [Vite](https://vitejs.dev/) works, but will stop if you start using the [Neutralino.js API](https://neutralino.js.org/docs/api/overview), maybe this is fixable, I leave that to you.

## Start

In fact, they are connected standard templates, so be sure to look at the configuration files and change the fields you need. 

Below are the required commands, write them down one by one.

```bash
$ npm install
$ neu update # Adds required Neutralino.js components
```

### TypeScript
1. Download - [neutralino.d.ts](https://github.com/neutralinojs/neutralino.js/releases) (The downloaded version must match the `clientVersion` from `neutralino.config.json`);
2. Place types in `/public/neutralino.d.ts` `(hint, if you can't find the folder: neutralino.js is in the public folder)`;
