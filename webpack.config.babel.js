import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  entry: './src/index.js',
  resolve: { 
    extensions: ["*", ".js", ".jsx"] 
  },
  output: {
    filename: 'bundle.js?[fullhash]',
    path: path.resolve(__dirname, '/public/'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        removeComments: true,
      },
      inject: true,
    })
  ],
  devtool: 'inline-source-map',
  mode:'development',
  devServer: {
    port: 8000,
    liveReload: true,
    open: false,
    client: {
      logging: 'verbose',
      // webSocketURL: {
      //   hostname: "0.0.0.0",
      //   pathname: "",
      //   port: 8000,
      // },
    },
    // devMiddleware: {
    //   publicPath: "/public",
    // },
    static: {
      directory: path.resolve(__dirname, ''),
      staticOptions: {},
      publicPath: "/public/",
      serveIndex: true,
      watch: true,
    },
  },
};

export default config;
