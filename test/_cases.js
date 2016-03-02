'use strict'
module.exports = [
  [
    'should filter img.picMsg',
    `<html>
<body>
<!--StartFragment--><img class="picMsg" src="media/AAEAAQAAAAAAAAKdAAAAJDhmYmVjMWUzLTRhZjYtNDAxYi05NGJjLWNiMjIzYjVhOWE4Ng.jpg" style="border: 0px; color: rgb(0, 0, 0); font-family: sans-serif; font-size: medium; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgba(127, 0, 0, 0.0980392);"><!--EndFragment-->
</body>
</html>`,
    `<div><img src="media/AAEAAQAAAAAAAAKdAAAAJDhmYmVjMWUzLTRhZjYtNDAxYi05NGJjLWNiMjIzYjVhOWE4Ng.jpg"></div>`,
  ],

  [
    'should filter a\\n\\nb',
    `a\n\nb`,
    `<div>a

b</div>`,
  ],

  [
    'should filter <div>a</div><div>\\n</div><div>b</div>',
    `<div>a</div><div>
</div><div>b</div>`,
    `<div>a</div><div>
</div><div>b</div>`,
  ],

// fixme
//   [
//     'should filter <div>a</div><div><br></div><div>b</div>',
//     `<div>a</div><div><br></div><div>b</div>`,
//     `<div>a</div><div>
// </div><div>b</div>`,
//   ],

  [
    'should filter ul.mixedMsg',
    `<html>
<body>
<!--StartFragment--><ul class="mixedMsg" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: sans-serif; font-size: medium; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgba(127, 0, 0, 0.0980392);"><li style="display: inline;"><span>Ihlivdim hogbaaj ecebo vuzav behzos geas upu pis tim medala kuwo toojiler.</span></li><li style="display: inline;"><span>Ceos vendepog cu jidtuk zufrodem cezepeca dec hahav gedubuk akwimpaw celu serubo ciklidez do.</span></li></ul><!--EndFragment-->
</body>
</html>`,
    `<div>Ihlivdim hogbaaj ecebo vuzav behzos geas upu pis tim medala kuwo toojiler.</div><div>Ceos vendepog cu jidtuk zufrodem cezepeca dec hahav gedubuk akwimpaw celu serubo ciklidez do.</div>`,
  ],

  [
    'should filter ul.msgList',
    `<html>
<body>
<!--StartFragment--><ul class="msgList" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: sans-serif; font-size: medium; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px;"><li><div class="msg" style="-webkit-user-select: auto;"><p>test.user:</p><div><ul class="mixedMsg" style="margin: 0px; padding: 0px;"><li style="display: inline;"><span>Ihlivdim hogbaaj ecebo vuzav behzos geas upu pis tim medala kuwo toojiler.</span></li><li style="display: inline;"><span>Ceos vendepog cu jidtuk zufrodem cezepeca dec hahav gedubuk akwimpaw celu serubo ciklidez do.</span></li></ul></div></div></li><li><div class="msg" style="-webkit-user-select: auto;"><p>Michael Arnold:</p><div><img class="picMsg" src="media/AAEAAQAAAAAAAAKdAAAAJDhmYmVjMWUzLTRhZjYtNDAxYi05NGJjLWNiMjIzYjVhOWE4Ng.jpg" style="border: 0px;"></div></div></li><li><div class="msg" style="-webkit-user-select: auto;"><p>test.user:</p><div><ul class="mixedMsg" style="margin: 0px; padding: 0px;"><li style="display: inline;"><br></li><li style="display: inline;"><span>Pumu lu inadeid ugo fiacijep bucanewu ebeis udifum nurukajo umgez pafpeboba jujoisi<span class="Apple-converted-space"> </span></span></li></ul></div></div></li></ul><!--EndFragment-->
</body>
</html>`,
    `<div>test.user:</div><div>Ihlivdim hogbaaj ecebo vuzav behzos geas upu pis tim medala kuwo toojiler.</div><div>Ceos vendepog cu jidtuk zufrodem cezepeca dec hahav gedubuk akwimpaw celu serubo ciklidez do.</div><div>Michael Arnold:</div><div><img src="media/AAEAAQAAAAAAAAKdAAAAJDhmYmVjMWUzLTRhZjYtNDAxYi05NGJjLWNiMjIzYjVhOWE4Ng.jpg"></div><div>test.user:</div><div>Pumu lu inadeid ugo fiacijep bucanewu ebeis udifum nurukajo umgez pafpeboba jujoisi&nbsp;</div>`,
  ],

  [
    // https://github.com/sindresorhus/awesome-electron
    'should filter awesome-electron',
    `<html>
<body>
<!--StartFragment--><h1 style="box-sizing: border-box; font-size: 2.25em; margin-top: 0px !important; margin-right: 0px; margin-bottom: 16px; margin-left: 0px; line-height: 1.2; font-weight: bold; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-style: normal; font-variant: normal; letter-spacing: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px;">Awesome Electron<span class="Apple-converted-space"> </span><a href="https://github.com/sindresorhus/awesome" style="box-sizing: border-box; color: rgb(64, 120, 192); text-decoration: none; background-color: transparent;"><img src="https://camo.githubusercontent.com/13c4e50d88df7178ae1882a203ed57b641674f94…3536353265336136336531353464643865383832392f6d656469612f62616467652e737667" alt="Awesome" data-canonical-src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" style="box-sizing: content-box; border: 0px; max-width: 100%; background-color: rgb(255, 255, 255);"></a></h1><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 25.6px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px;"><a href="http://electron.atom.io/" style="box-sizing: border-box; color: rgb(64, 120, 192); text-decoration: none; background-color: transparent;"><img src="https://camo.githubusercontent.com/79904b8ba0d1bce43022bbd5710f0ea1db33f54f…6f6d652d656c656374726f6e2f6d61737465722f656c656374726f6e2d6c6f676f2e737667" align="right" width="100" data-canonical-src="https://rawgit.com/sindresorhus/awesome-electron/master/electron-logo.svg" style="box-sizing: content-box; border: 0px; max-width: 100%; padding-left: 20px; background-color: rgb(255, 255, 255);"></a></p><blockquote style="box-sizing: border-box; margin: 0px 0px 16px; padding: 0px 15px; color: rgb(119, 119, 119); border-left-width: 4px; border-left-style: solid; border-left-color: rgb(221, 221, 221); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 25.6px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px;"><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;">Useful resources for creating apps with<span class="Apple-converted-space"> </span><a href="http://electron.atom.io/" style="box-sizing: border-box; color: rgb(64, 120, 192); text-decoration: none; background-color: transparent;">Electron</a></p></blockquote><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 25.6px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px;"><em style="box-sizing: border-box;">Inspired by the<span class="Apple-converted-space"> </span><a href="https://github.com/sindresorhus/awesome" style="box-sizing: border-box; color: rgb(64, 120, 192); text-decoration: none; background-color: transparent;">awesome</a><span class="Apple-converted-space"> </span>list thing. You might also like<span class="Apple-converted-space"> </span><a href="https://github.com/sindresorhus/awesome-nodejs" style="box-sizing: border-box; color: rgb(64, 120, 192); text-decoration: none; background-color: transparent;">awesome-nodejs</a>.</em></p><h2 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.225; font-size: 1.75em; font-weight: bold; padding-bottom: 0.3em; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-style: normal; font-variant: normal; letter-spacing: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px;"><a id="user-content-example-apps" class="anchor" href="https://github.com/sindresorhus/awesome-electron#example-apps" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); text-decoration: none; display: inline-block; padding-right: 2px; margin-left: -18px; line-height: 1; background-color: transparent;"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Example apps</h2><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 25.6px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px;">Some good apps written with Electron.</p><h3 style="box-sizing: border-box; margin-top: 1em; margin-bottom: 16px; line-height: 1.43; font-size: 1.5em; font-weight: bold; color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-style: normal; font-variant: normal; letter-spacing: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px;"><a id="user-content-open-source" class="anchor" href="https://github.com/sindresorhus/awesome-electron#open-source" aria-hidden="true" style="box-sizing: border-box; color: rgb(64, 120, 192); text-decoration: none; display: inline-block; padding-right: 2px; margin-left: -18px; line-height: 1.2; background-color: transparent;"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Open Source</h3><ul style="box-sizing: border-box; padding: 0px 0px 0px 2em; margin-top: 0px; margin-bottom: 16px; color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 25.6px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px;"><li style="box-sizing: border-box;"><a href="https://github.com/atom/atom" style="box-sizing: border-box; color: rgb(64, 120, 192); text-decoration: none; background-color: transparent;">Atom</a><span class="Apple-converted-space"> </span>- Code editor.</li><li style="box-sizing: border-box;"><a href="http://nuclide.io/" style="box-sizing: border-box; color: rgb(64, 120, 192); text-decoration: none; background-color: transparent;">Nuclide</a><span class="Apple-converted-space"> </span>- Unified IDE.</li><li style="box-sizing: border-box;"><a href="https://github.com/mafintosh/playback" style="box-sizing: border-box; color: rgb(64, 120, 192); text-decoration: none; background-color: transparent;">Playback</a><span class="Apple-converted-space"> </span>- Video player.</li><li style="box-sizing: border-box;"><a href="https://github.com/moose-team/friends" style="box-sizing: border-box; color: rgb(64, 120, 192); text-decoration: none; background-color: transparent;">Friends</a><span class="Apple-converted-space"> </span>- P2P chat.</li></ul><!--EndFragment-->
</body>
</html>`,
    `<div>Awesome Electron&nbsp;<img src="https://camo.githubusercontent.com/13c4e50d88df7178ae1882a203ed57b641674f94…3536353265336136336531353464643865383832392f6d656469612f62616467652e737667"></div><div><img src="https://camo.githubusercontent.com/79904b8ba0d1bce43022bbd5710f0ea1db33f54f…6f6d652d656c656374726f6e2f6d61737465722f656c656374726f6e2d6c6f676f2e737667"></div><div>Useful resources for creating apps with&nbsp;Electron</div><div>Inspired by the&nbsp;awesome&nbsp;list thing. You might also like&nbsp;awesome-nodejs.</div><div>Example apps</div><div>Some good apps written with Electron.</div><div>Open Source</div><div>Atom&nbsp;- Code editor.</div><div>Nuclide&nbsp;- Unified IDE.</div><div>Playback&nbsp;- Video player.</div><div>Friends&nbsp;- P2P chat.</div>`,
  ],

  [
    'should filter email',
    `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Style-Type" content="text/css">
<title></title>
<meta name="Generator" content="Cocoa HTML Writer">
<meta name="CocoaVersion" content="1347.57">
<style type="text/css">
p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; text-align: center; font: 26.0px 'Helvetica Neue Light'; color: #282c33; -webkit-text-stroke: #282c33}
p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; text-align: center; font: 14.0px 'Helvetica Neue Light'; color: #7d8795; -webkit-text-stroke: #7d8795}
span.s1 {font-kerning: none}
td.td1 {width: 530.0px; margin: 0.5px 0.5px 0.5px 0.5px}
</style>
</head>
<body>
<table cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="middle" class="td1">
<p class="p1"><span class="s1">参加 Gopher China 大会是一种怎样的体验？</span></p>
</td>
</tr>
<tr>
<td valign="middle" class="td1">
<p class="p2"><span class="s1">2015 年的春天，一位叫 Astaxie 的大牛，在上海举办了一场 Golang 开发者大会。这场大会浩浩荡荡吸引了近 500 人的参与。</span></p>
</td>
</tr>
</tbody>
</table>
</body>
</html>`,
    `<div>
</div><div>

</div><div>

</div><div>参加 Gopher China 大会是一种怎样的体验？</div><div>

</div><div>
</div><div>

</div><div>2015 年的春天，一位叫 Astaxie 的大牛，在上海举办了一场 Golang 开发者大会。这场大会浩浩荡荡吸引了近 500 人的参与。</div><div>

</div><div>

</div><div>
</div>`,
  ],
]
