const mix = require('laravel-mix');

mix
.js('src/js/drop-in-ui-client.js', 'dist/')
.sourceMaps();

mix.webpackConfig({
	output: {
		library: 'DropInUIClient',
		libraryTarget: 'umd',
		umdNamedDefine: true
	}
});