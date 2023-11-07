const path = require('path');
// importuję bibliotękę [path] z [node.js]
const HtmlWebpackPlugin = require('html-webpack-plugin');
// importuję odpowiedni plugin
module.exports = {
	entry: './src/index.js',
	// definiuje plik wejściowy
	output: {
		path: path.resolve(__dirname, 'build'),
		// definiuje ścieżką wyjściową
		filename: 'index.min.js',
		// definiuję nazwę pliku wyjściowego
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				// określam jakie pliki
				// będą brane pod uwagę
				exclude: /node_modules/,
				// określam wykluczenia
				use: 'babel-loader',
				// określam jaki [loader]
				// ma być wykorzystany
			},
			// {
			// 	test: /\.scss$/,
			// 	use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			// },
		],
		// obecnie brak dodatkowych ustawień
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			// wskazuje plik źródłowy
			filename: 'index.html',
			// określan nazwę dla pliku
		}),
	],
};
// eksportuję ustawienia dla webpacka
