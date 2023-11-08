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
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192, // Przekształci małe obrazy (poniżej 8 KB) w dane URL
							name: 'images/[name].[hash].[ext]', // Ustaw nazwę i ścieżkę do skopiowanych obrazów
						},
					},
					'image-webpack-loader', // Optymalizacja obrazów
				],
			},
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
