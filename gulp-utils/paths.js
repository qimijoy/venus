export const src = './src/';
export const dist = './dist/';

export default {
	clean: dist,

	build: {
		html: dist,
		css: dist + 'styles',
		js: dist + 'scripts',
		images: dist + 'assets/images',
		fonts: dist + 'assets/fonts',
	},

	src: {
		html: src + '*.html',
		templates: src + 'templates',
		css: src + 'styles/*.less',
		js: src + 'scripts/**/*.js',
		images: src + 'assets/images/**/*.{jpeg,jpg,gif,png}',
		svg: src + 'assets/images/**/*.svg',
		fonts: src + 'assets/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
	},

	watch: {
		html: src + '**/*.html',
		templates: src + 'templates/**/*.html',
		css: src + 'styles/**/*.less',
		js: src + 'scripts/**/*.js',
		images: src + 'assets/images/**/*.{jpeg,jpg,gif,png}',
		svg: src + 'assets/images/**/*.svg',
		fonts: src + 'assets/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
	},
};
