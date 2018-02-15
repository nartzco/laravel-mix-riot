# laravel-mix-riot
Laravel Mix Plugin for RiotJS.

## Usage

Install this package into your project:

```
npm install laravel-mix-riot --save-dev
```
Head over to your `webpack.mix.js` and register it on the Laravel Mix API:

```js
let mix = require('laravel-mix');
mix.riot = require('laravel-mix-riot');

mix.riot('src/app.js', 'public/js');
```