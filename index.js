function riot(entry, output, options) {
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