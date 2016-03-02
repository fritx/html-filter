'use strict'
// https://github.com/heroku/react-refetch/blob/master/test%2Fsetup.js
const jsdom = require('jsdom').jsdom
global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.self = document.defaultView
global.navigator = global.window.navigator
global.Node = window.Node
