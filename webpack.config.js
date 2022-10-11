const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// loader css
const rulesForCss = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}
// loader js
const rulesForJs = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic' // 'classic'
                }
            ]
        ]
    }
}

const rules = [rulesForJs, rulesForCss]
module.exports = (env, argv) => {
    const {mode} = argv
    const isProduction = mode === 'production'
    return {
        // entry :  './src/index.js',
        output: {
            filename: isProduction ? '[name].[contenthash].js' :'main.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [
            new HtmlWebpackPlugin({ template: 'src/index.html' })
        ],
        module: { rules },
        devServer: {
            open: true, // abre navegador auto
            port: 3010,
            compress: true
        },
        devtool: 'source-map'
    }
}