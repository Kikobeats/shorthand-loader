'use strict'

var shrthnd = require('shrthnd')

function shorthand (str) {
  if (!str) return str
  return shrthnd(str).string
}

module.exports = function (source, map) {
  this.cacheable()
  this.callback(null, shorthand(source), shorthand(map))
}
