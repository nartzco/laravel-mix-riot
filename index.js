const Verify = require('laravel-mix/src/Verify');

function riot(entry, output, options) {
    Verify.dependency('riot-tag-loader', ['riot-tag-loader', 'riot']);

    this.webpackConfig({
        module: {
            rules: [{
                test: /\.tag$/,
                loader: 'riot-tag-loader'
            }]
        }
    });

    return this.js(entry, output);
}

module.exports = riot;