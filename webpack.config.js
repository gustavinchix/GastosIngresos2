// Detecta rutas relativas y absolutas en el computador
const path = require('path')
// Plugin para compilar todo e insertarlo en el código HTML
const HtmlWebpackPlugin = require('html-webpack-plugin')
// Plugin para limpiar y evitar que se vuelva a cachear
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  /**
   * 'entry': punto de entrada de la aplicación, desde aquí, todas las rutas son relativas
   * @type {Object}
   */
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js'),
  },
  /**
   * 'output': punto de salida o directorio donde se guardará la aplicación empaquetada
   * @type {Object}
   */
  output: {
    path: path.resolve(__dirname, 'build'), // nombre de la carpeta
    filename: 'app.min.js'
  },
  /**
   * 'module': dependencias que necesita webpack para interpretar archivos
   * @type {Object}
   */
  module: {
    rules: [
      { // Para archivos CSS o SCSS (compilables)
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { // Para archivos Javascript (que no estén dentro de node_modules)
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { // Para imágenes, Webpack tiene su propio convertidor de recursos
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  /**
   * 'plugins': complementos configurables para tareas específicas de Webpack
   * @type {Array}
   */
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Proyecto de Finanzas Personales para 4Geeks', // título del proyecto
      template: path.resolve(__dirname, "src", "index.html") // página inicial
    })
  ]
}
