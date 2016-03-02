'use strict'
const $ = require('jquery')
const _ = require('lodash')

module.exports = function filter(html) {
  let mat = html.match(/<!--StartFragment-->([\s\S]*?)<!--EndFragment-->/)
  if (mat) html = mat[1]
  mat = html.match(/<body>([\s\S]*?)<\/body>/)
  if (mat) html = mat[1]
  const $src = $('<div>').html(html)
  const $dest = $('<div>')
  filterContent($src, $dest)
  $dest.children('[x-block]').removeAttr('x-block')
  $dest.children(':empty').remove()
  return $dest.html()
}

/* eslint-disable */
// https://github.com/fritx/none/blob/dev/elec%2Fapp%2Feditor.js
var blockElements = 'address, article, aside, blockquote, canvas, dd, div, dl, fieldset, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, main, nav, noscript, ol, output, p, pre, section, table, tfoot, ul, video'
blockElements += ', li' // display:iist-item => block
blockElements += ', tr'

// 过滤清理 内容
function filterContent($src, $dest){
  _.each($src[0].childNodes, function(node, i){
    if (node.nodeType === Node.TEXT_NODE) {
      getLine().append(node.cloneNode())
      return
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return
    }

    var $node = $(node)

    if ($node.is('img')) {

      // 如果可能是emoji 则优先使用alt
      // case: 右侧 http://changba.com/s/MWN6SYnX0zJwnnKNijYL-w?&code=Kxhsv6044ik
      if ($node.is('[class*=emoji], [src*=emoji]') && $node.attr('alt')) {
        getLine().append($node.attr('alt'))
        return
      }

      getLine().append('<img src="'+ $node.attr('src') +'">')
      return
    }

    if ($node.is('br')) {
      // getLine().append('<br>')
      getLine(true) // br直接转div
      return
    }

    // var html = $node.html().trim()
    var html = $node.html()
    if (!html) return

    var isBlock = $node.is(blockElements)
    if (isBlock) getLine(true)

    if ($node.children().length > 0) {
      filterContent($node, $dest)
      if (isBlock) getLine(true)
      return
    }

    var text = $node.text()
    if (!text) return
    getLine().append(document.createTextNode(text))
    if (isBlock) getLine(true)
  })

  function getLine(newBlock){
    var $prev = $dest.children('div').last()
    var $line = $prev
    if ($prev.length > 0 && !$prev.html()) {
      $prev.remove() // 清除空div
    }
    if ($prev.length <= 0 || $prev.is('[x-block]')) {
      $prev.removeAttr('x-block')
      $line = $('<div>').appendTo($dest)
    }
    if (newBlock) {
      $line.attr('x-block', '') // block标记
    }
    return $line
  }
}
