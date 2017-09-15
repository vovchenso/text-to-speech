const config = {
    context: __dirname + "/src",
    entry: "./main.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/output"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: `${__dirname}/node_modules/`,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
};

module.exports = config;