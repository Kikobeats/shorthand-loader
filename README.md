# shorthand-loader

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/shorthand-loader.svg)](https://greenkeeper.io/)

![Last version](https://img.shields.io/github/tag/Kikobeats/shorthand-loader.svg?style=flat-square)
[![Dependency status](https://img.shields.io/david/Kikobeats/shorthand-loader.svg?style=flat-square)](https://david-dm.org/Kikobeats/shorthand-loader)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/shorthand-loader.svg?style=flat-square)](https://david-dm.org/Kikobeats/shorthand-loader#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/shorthand-loader.svg?style=flat-square)](https://www.npmjs.org/package/shorthand-loader)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Webpack Loader that rewrite CSS rules in short mode if is possible.

Turns CSS rules like:

```css
body {
  background-image: url(/img/meow.jpg);
  background-position: top center;
}
```

in the short mode:

```css
body{background:url(/img/meow.jpg) top}
```

And Saves bytes!

## Install

```bash
$ npm install shorthand-loader --save
```

## Usage

Load it at the end of your CSS loaders pipeline, for example:

```js
module: {
  loaders: [{
    test: /(\.scss|\.css)$/,
    loader: ExtractTextPlugin.extract('style', 'css?minimize&sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass!shorthand')
  }]
}
```

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
