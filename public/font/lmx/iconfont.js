;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-taluoliumangxing" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M632.494817 767.588119 962.443527 767.588119l-164.974355-258.20062 161.959695-253.484202L635.508453 255.903298 511.999488 62.597687 389.154649 255.902274 60.967048 255.902274l164.093289 258.213923L63.980685 767.588119l322.159304 0L508.985852 960.892707 632.494817 767.588119zM888.304993 726.978213 658.441768 726.978213l114.931612-179.87881L888.304993 726.978213zM610.25121 726.978213 408.450111 726.978213 273.178241 514.116197 411.464771 296.513204l201.800076 0L749.278613 509.386476 610.25121 726.978213zM885.291356 296.513204 773.374404 471.674573 661.456429 296.513204 885.291356 296.513204zM512.092609 138.166803l75.226309 117.735471L437.27153 255.902274 512.092609 138.166803zM134.890688 296.513204l228.456179 0L249.119289 476.258984 134.890688 296.513204zM137.905348 726.978213 249.119289 551.974433l111.213941 175.004803L137.905348 726.979236zM584.304258 767.588119 509.077949 885.323591l-74.821079-117.736495L584.304258 767.587096z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
