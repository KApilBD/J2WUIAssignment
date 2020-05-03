const { resolve } = require("path");

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: resolve(__dirname , '../../dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', { loader: "css-loader", options: { importLoaders: 1 } }]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "sass-loader"
                ],
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}