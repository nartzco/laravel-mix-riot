# laravel-mix-riot
Laravel Mix Plugin for RiotJS.

<p align="center">
<a href="https://www.npmjs.com/package/laravel-mix-riot"><img src="https://img.shields.io/npm/v/laravel-mix-riot.svg" alt="NPM"></a>
<a href="https://www.npmjs.com/package/laravel-mix-riot"><img src="https://img.shields.io/npm/dt/laravel-mix-riot.svg" alt="NPM"></a>
<a href="https://www.npmjs.com/package/laravel-mix-riot"><img src="https://img.shields.io/npm/l/laravel-mix-riot.svg" alt="NPM"></a>
</p>

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

## License

Laravel Mix Riot is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).