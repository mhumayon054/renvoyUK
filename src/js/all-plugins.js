/**
 * Template: Ilmiya - People
 * Author: iqonicthemes.in
 * Version: 2
 * Design and Developed by: iqonicthemes.in
 *
 * @format
 */

/*================================================
[  Table of contents  ]
================================================

==> Modernizr
==> WOW js
==> jQuery Appear
==> Retina js
==> jQuery CountDown
==> jQuery Counter
==> Magnific Popup
==> MediaElement.js

======================================
[ End table content ]
======================================*/

/*---------------------- Modernizr ----------------------*/
window.Modernizr = (function (e, t, n) {
  function r(e) {
    b.cssText = e;
  }
  function o(e, t) {
    return r(S.join(e + ';') + (t || ''));
  }
  function a(e, t) {
    return typeof e === t;
  }
  function i(e, t) {
    return !!~('' + e).indexOf(t);
  }
  function c(e, t) {
    for (var r in e) {
      var o = e[r];
      if (!i(o, '-') && b[o] !== n) return 'pfx' == t ? o : !0;
    }
    return !1;
  }
  function s(e, t, r) {
    for (var o in e) {
      var i = t[e[o]];
      if (i !== n)
        return r === !1 ? e[o] : a(i, 'function') ? i.bind(r || t) : i;
    }
    return !1;
  }
  function u(e, t, n) {
    var r = e.charAt(0).toUpperCase() + e.slice(1),
      o = (e + ' ' + k.join(r + ' ') + r).split(' ');
    return a(t, 'string') || a(t, 'undefined')
      ? c(o, t)
      : ((o = (e + ' ' + T.join(r + ' ') + r).split(' ')), s(o, t, n));
  }
  function l() {
    (p.input = (function (n) {
      for (var r = 0, o = n.length; o > r; r++) j[n[r]] = !!(n[r] in E);
      return (
        j.list &&
          (j.list = !(!t.createElement('datalist') || !e.HTMLDataListElement)),
        j
      );
    })(
      'autocomplete autofocus list placeholder max min multiple pattern required step'.split(
        ' '
      )
    )),
      (p.inputtypes = (function (e) {
        for (var r, o, a, i = 0, c = e.length; c > i; i++)
          E.setAttribute('type', (o = e[i])),
            (r = 'text' !== E.type),
            r &&
              ((E.value = x),
              (E.style.cssText = 'position:absolute;visibility:hidden;'),
              /^range$/.test(o) && E.style.WebkitAppearance !== n
                ? (g.appendChild(E),
                  (a = t.defaultView),
                  (r =
                    a.getComputedStyle &&
                    'textfield' !==
                      a.getComputedStyle(E, null).WebkitAppearance &&
                    0 !== E.offsetHeight),
                  g.removeChild(E))
                : /^(search|tel)$/.test(o) ||
                  (r = /^(url|email)$/.test(o)
                    ? E.checkValidity && E.checkValidity() === !1
                    : E.value != x)),
            (P[e[i]] = !!r);
        return P;
      })(
        'search tel url email datetime date month week time datetime-local number range color'.split(
          ' '
        )
      ));
  }
  var d,
    f,
    m = '2.8.3',
    p = {},
    h = !0,
    g = t.documentElement,
    v = 'modernizr',
    y = t.createElement(v),
    b = y.style,
    E = t.createElement('input'),
    x = ':)',
    w = {}.toString,
    S = ' -webkit- -moz- -o- -ms- '.split(' '),
    C = 'Webkit Moz O ms',
    k = C.split(' '),
    T = C.toLowerCase().split(' '),
    N = { svg: 'http://www.w3.org/2000/svg' },
    M = {},
    P = {},
    j = {},
    $ = [],
    D = $.slice,
    F = function (e, n, r, o) {
      var a,
        i,
        c,
        s,
        u = t.createElement('div'),
        l = t.body,
        d = l || t.createElement('body');
      if (parseInt(r, 10))
        for (; r--; )
          (c = t.createElement('div')),
            (c.id = o ? o[r] : v + (r + 1)),
            u.appendChild(c);
      return (
        (a = ['&#173;', '<style id="s', v, '">', e, '</style>'].join('')),
        (u.id = v),
        ((l ? u : d).innerHTML += a),
        d.appendChild(u),
        l ||
          ((d.style.background = ''),
          (d.style.overflow = 'hidden'),
          (s = g.style.overflow),
          (g.style.overflow = 'hidden'),
          g.appendChild(d)),
        (i = n(u, e)),
        l
          ? u.parentNode.removeChild(u)
          : (d.parentNode.removeChild(d), (g.style.overflow = s)),
        !!i
      );
    },
    z = function (t) {
      var n = e.matchMedia || e.msMatchMedia;
      if (n) return (n(t) && n(t).matches) || !1;
      var r;
      return (
        F(
          '@media ' + t + ' { #' + v + ' { position: absolute; } }',
          function (t) {
            r =
              'absolute' ==
              (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)
                .position;
          }
        ),
        r
      );
    },
    A = (function () {
      function e(e, o) {
        (o = o || t.createElement(r[e] || 'div')), (e = 'on' + e);
        var i = e in o;
        return (
          i ||
            (o.setAttribute || (o = t.createElement('div')),
            o.setAttribute &&
              o.removeAttribute &&
              (o.setAttribute(e, ''),
              (i = a(o[e], 'function')),
              a(o[e], 'undefined') || (o[e] = n),
              o.removeAttribute(e))),
          (o = null),
          i
        );
      }
      var r = {
        select: 'input',
        change: 'input',
        submit: 'form',
        reset: 'form',
        error: 'img',
        load: 'img',
        abort: 'img',
      };
      return e;
    })(),
    L = {}.hasOwnProperty;
  (f =
    a(L, 'undefined') || a(L.call, 'undefined')
      ? function (e, t) {
          return t in e && a(e.constructor.prototype[t], 'undefined');
        }
      : function (e, t) {
          return L.call(e, t);
        }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (e) {
        var t = this;
        if ('function' != typeof t) throw new TypeError();
        var n = D.call(arguments, 1),
          r = function () {
            if (this instanceof r) {
              var o = function () {};
              o.prototype = t.prototype;
              var a = new o(),
                i = t.apply(a, n.concat(D.call(arguments)));
              return Object(i) === i ? i : a;
            }
            return t.apply(e, n.concat(D.call(arguments)));
          };
        return r;
      }),
    (M.flexbox = function () {
      return u('flexWrap');
    }),
    (M.flexboxlegacy = function () {
      return u('boxDirection');
    }),
    (M.canvas = function () {
      var e = t.createElement('canvas');
      return !(!e.getContext || !e.getContext('2d'));
    }),
    (M.canvastext = function () {
      return !(
        !p.canvas ||
        !a(t.createElement('canvas').getContext('2d').fillText, 'function')
      );
    }),
    (M.webgl = function () {
      return !!e.WebGLRenderingContext;
    }),
    (M.touch = function () {
      var n;
      return (
        'ontouchstart' in e || (e.DocumentTouch && t instanceof DocumentTouch)
          ? (n = !0)
          : F(
              [
                '@media (',
                S.join('touch-enabled),('),
                v,
                ')',
                '{#modernizr{top:9px;position:absolute}}',
              ].join(''),
              function (e) {
                n = 9 === e.offsetTop;
              }
            ),
        n
      );
    }),
    (M.geolocation = function () {
      return 'geolocation' in navigator;
    }),
    (M.postmessage = function () {
      return !!e.postMessage;
    }),
    (M.websqldatabase = function () {
      return !!e.openDatabase;
    }),
    (M.indexedDB = function () {
      return !!u('indexedDB', e);
    }),
    (M.hashchange = function () {
      return A('hashchange', e) && (t.documentMode === n || t.documentMode > 7);
    }),
    (M.history = function () {
      return !(!e.history || !history.pushState);
    }),
    (M.draganddrop = function () {
      var e = t.createElement('div');
      return 'draggable' in e || ('ondragstart' in e && 'ondrop' in e);
    }),
    (M.websockets = function () {
      return 'WebSocket' in e || 'MozWebSocket' in e;
    }),
    (M.rgba = function () {
      return (
        r('background-color:rgba(150,255,150,.5)'), i(b.backgroundColor, 'rgba')
      );
    }),
    (M.hsla = function () {
      return (
        r('background-color:hsla(120,40%,100%,.5)'),
        i(b.backgroundColor, 'rgba') || i(b.backgroundColor, 'hsla')
      );
    }),
    (M.multiplebgs = function () {
      return (
        r('background:url(https://),url(https://),red url(https://)'),
        /(url\s*\(.*?){3}/.test(b.background)
      );
    }),
    (M.backgroundsize = function () {
      return u('backgroundSize');
    }),
    (M.borderimage = function () {
      return u('borderImage');
    }),
    (M.borderradius = function () {
      return u('borderRadius');
    }),
    (M.boxshadow = function () {
      return u('boxShadow');
    }),
    (M.textshadow = function () {
      return '' === t.createElement('div').style.textShadow;
    }),
    (M.opacity = function () {
      return o('opacity:.55'), /^0.55$/.test(b.opacity);
    }),
    (M.cssanimations = function () {
      return u('animationName');
    }),
    (M.csscolumns = function () {
      return u('columnCount');
    }),
    (M.cssgradients = function () {
      var e = 'background-image:',
        t = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
        n = 'linear-gradient(left top,#9f9, white);';
      return (
        r(
          (e + '-webkit- '.split(' ').join(t + e) + S.join(n + e)).slice(
            0,
            -e.length
          )
        ),
        i(b.backgroundImage, 'gradient')
      );
    }),
    (M.cssreflections = function () {
      return u('boxReflect');
    }),
    (M.csstransforms = function () {
      return !!u('transform');
    }),
    (M.csstransforms3d = function () {
      var e = !!u('perspective');
      return (
        e &&
          'webkitPerspective' in g.style &&
          F(
            '@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}',
            function (t) {
              e = 9 === t.offsetLeft && 3 === t.offsetHeight;
            }
          ),
        e
      );
    }),
    (M.csstransitions = function () {
      return u('transition');
    }),
    (M.fontface = function () {
      var e;
      return (
        F(
          '@font-face {font-family:"font";src:url("https://")}',
          function (n, r) {
            var o = t.getElementById('smodernizr'),
              a = o.sheet || o.styleSheet,
              i = a
                ? a.cssRules && a.cssRules[0]
                  ? a.cssRules[0].cssText
                  : a.cssText || ''
                : '';
            e = /src/i.test(i) && 0 === i.indexOf(r.split(' ')[0]);
          }
        ),
        e
      );
    }),
    (M.generatedcontent = function () {
      var e;
      return (
        F(
          [
            '#',
            v,
            '{font:0/0 a}#',
            v,
            ':after{content:"',
            x,
            '";visibility:hidden;font:3px/1 a}',
          ].join(''),
          function (t) {
            e = t.offsetHeight >= 3;
          }
        ),
        e
      );
    }),
    (M.video = function () {
      var e = t.createElement('video'),
        n = !1;
      try {
        (n = !!e.canPlayType) &&
          ((n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('video/ogg; codecs="theora"')
            .replace(/^no$/, '')),
          (n.h264 = e
            .canPlayType('video/mp4; codecs="avc1.42E01E"')
            .replace(/^no$/, '')),
          (n.webm = e
            .canPlayType('video/webm; codecs="vp8, vorbis"')
            .replace(/^no$/, '')));
      } catch (r) {}
      return n;
    }),
    (M.audio = function () {
      var e = t.createElement('audio'),
        n = !1;
      try {
        (n = !!e.canPlayType) &&
          ((n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, '')),
          (n.mp3 = e.canPlayType('audio/mpeg;').replace(/^no$/, '')),
          (n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '')),
          (n.m4a = (
            e.canPlayType('audio/x-m4a;') || e.canPlayType('audio/aac;')
          ).replace(/^no$/, '')));
      } catch (r) {}
      return n;
    }),
    (M.localstorage = function () {
      try {
        return localStorage.setItem(v, v), localStorage.removeItem(v), !0;
      } catch (e) {
        return !1;
      }
    }),
    (M.sessionstorage = function () {
      try {
        return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0;
      } catch (e) {
        return !1;
      }
    }),
    (M.webworkers = function () {
      return !!e.Worker;
    }),
    (M.applicationcache = function () {
      return !!e.applicationCache;
    }),
    (M.svg = function () {
      return (
        !!t.createElementNS && !!t.createElementNS(N.svg, 'svg').createSVGRect
      );
    }),
    (M.inlinesvg = function () {
      var e = t.createElement('div');
      return (
        (e.innerHTML = '<svg/>'),
        (e.firstChild && e.firstChild.namespaceURI) == N.svg
      );
    }),
    (M.smil = function () {
      return (
        !!t.createElementNS &&
        /SVGAnimate/.test(w.call(t.createElementNS(N.svg, 'animate')))
      );
    }),
    (M.svgclippaths = function () {
      return (
        !!t.createElementNS &&
        /SVGClipPath/.test(w.call(t.createElementNS(N.svg, 'clipPath')))
      );
    });
  for (var H in M)
    f(M, H) &&
      ((d = H.toLowerCase()), (p[d] = M[H]()), $.push((p[d] ? '' : 'no-') + d));
  return (
    p.input || l(),
    (p.addTest = function (e, t) {
      if ('object' == typeof e) for (var r in e) f(e, r) && p.addTest(r, e[r]);
      else {
        if (((e = e.toLowerCase()), p[e] !== n)) return p;
        (t = 'function' == typeof t ? t() : t),
          'undefined' != typeof h &&
            h &&
            (g.className += ' ' + (t ? '' : 'no-') + e),
          (p[e] = t);
      }
      return p;
    }),
    r(''),
    (y = E = null),
    (function (e, t) {
      function n(e, t) {
        var n = e.createElement('p'),
          r = e.getElementsByTagName('head')[0] || e.documentElement;
        return (
          (n.innerHTML = 'x<style>' + t + '</style>'),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = y.elements;
        return 'string' == typeof e ? e.split(' ') : e;
      }
      function o(e) {
        var t = v[e[h]];
        return t || ((t = {}), g++, (e[h] = g), (v[g] = t)), t;
      }
      function a(e, n, r) {
        if ((n || (n = t), l)) return n.createElement(e);
        r || (r = o(n));
        var a;
        return (
          (a = r.cache[e]
            ? r.cache[e].cloneNode()
            : p.test(e)
            ? (r.cache[e] = r.createElem(e)).cloneNode()
            : r.createElem(e)),
          !a.canHaveChildren || m.test(e) || a.tagUrn
            ? a
            : r.frag.appendChild(a)
        );
      }
      function i(e, n) {
        if ((e || (e = t), l)) return e.createDocumentFragment();
        n = n || o(e);
        for (
          var a = n.frag.cloneNode(), i = 0, c = r(), s = c.length;
          s > i;
          i++
        )
          a.createElement(c[i]);
        return a;
      }
      function c(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return y.shivMethods ? a(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            'h,f',
            'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
              r()
                .join()
                .replace(/[\w\-]+/g, function (e) {
                  return (
                    t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                  );
                }) +
              ');return n}'
          )(y, t.frag));
      }
      function s(e) {
        e || (e = t);
        var r = o(e);
        return (
          !y.shivCSS ||
            u ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}'
            )),
          l || c(e, r),
          e
        );
      }
      var u,
        l,
        d = '3.7.0',
        f = e.html5 || {},
        m =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        h = '_html5shiv',
        g = 0,
        v = {};
      !(function () {
        try {
          var e = t.createElement('a');
          (e.innerHTML = '<xyz></xyz>'),
            (u = 'hidden' in e),
            (l =
              1 == e.childNodes.length ||
              (function () {
                t.createElement('a');
                var e = t.createDocumentFragment();
                return (
                  'undefined' == typeof e.cloneNode ||
                  'undefined' == typeof e.createDocumentFragment ||
                  'undefined' == typeof e.createElement
                );
              })());
        } catch (n) {
          (u = !0), (l = !0);
        }
      })();
      var y = {
        elements:
          f.elements ||
          'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',
        version: d,
        shivCSS: f.shivCSS !== !1,
        supportsUnknownElements: l,
        shivMethods: f.shivMethods !== !1,
        type: 'default',
        shivDocument: s,
        createElement: a,
        createDocumentFragment: i,
      };
      (e.html5 = y), s(t);
    })(this, t),
    (p._version = m),
    (p._prefixes = S),
    (p._domPrefixes = T),
    (p._cssomPrefixes = k),
    (p.mq = z),
    (p.hasEvent = A),
    (p.testProp = function (e) {
      return c([e]);
    }),
    (p.testAllProps = u),
    (p.testStyles = F),
    (p.prefixed = function (e, t, n) {
      return t ? u(e, t, n) : u(e, 'pfx');
    }),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +
      (h ? ' js ' + $.join(' ') : '')),
    p
  );
})(this, this.document);

/*---------------------- WOW js ----------------------*/
/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */ !(function (a, b) {
  if ('function' == typeof define && define.amd)
    define(['module', 'exports'], b);
  else if ('undefined' != typeof exports) b(module, exports);
  else {
    var c = { exports: {} };
    b(c, c.exports), (a.WOW = c.exports);
  }
})(this, function (a, b) {
  'use strict';
  function c(a, b) {
    if (!(a instanceof b))
      throw new TypeError('Cannot call a class as a function');
  }
  function d(a, b) {
    return b.indexOf(a) >= 0;
  }
  function e(a, b) {
    for (var c in b)
      if (null == a[c]) {
        var d = b[c];
        a[c] = d;
      }
    return a;
  }
  function f(a) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      a
    );
  }
  function g(a) {
    var b =
        arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
      c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
      d =
        arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
      e = void 0;
    return (
      null != document.createEvent
        ? ((e = document.createEvent('CustomEvent')),
          e.initCustomEvent(a, b, c, d))
        : null != document.createEventObject
        ? ((e = document.createEventObject()), (e.eventType = a))
        : (e.eventName = a),
      e
    );
  }
  function h(a, b) {
    null != a.dispatchEvent
      ? a.dispatchEvent(b)
      : b in (null != a)
      ? a[b]()
      : 'on' + b in (null != a) && a['on' + b]();
  }
  function i(a, b, c) {
    null != a.addEventListener
      ? a.addEventListener(b, c, !1)
      : null != a.attachEvent
      ? a.attachEvent('on' + b, c)
      : (a[b] = c);
  }
  function j(a, b, c) {
    null != a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : null != a.detachEvent
      ? a.detachEvent('on' + b, c)
      : delete a[b];
  }
  function k() {
    return 'innerHeight' in window
      ? window.innerHeight
      : document.documentElement.clientHeight;
  }
  Object.defineProperty(b, '__esModule', { value: !0 });
  var l,
    m,
    n = (function () {
      function a(a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          (d.enumerable = d.enumerable || !1),
            (d.configurable = !0),
            'value' in d && (d.writable = !0),
            Object.defineProperty(a, d.key, d);
        }
      }
      return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    })(),
    o =
      window.WeakMap ||
      window.MozWeakMap ||
      (function () {
        function a() {
          c(this, a), (this.keys = []), (this.values = []);
        }
        return (
          n(a, [
            {
              key: 'get',
              value: function (a) {
                for (var b = 0; b < this.keys.length; b++) {
                  var c = this.keys[b];
                  if (c === a) return this.values[b];
                }
              },
            },
            {
              key: 'set',
              value: function (a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                  var d = this.keys[c];
                  if (d === a) return (this.values[c] = b), this;
                }
                return this.keys.push(a), this.values.push(b), this;
              },
            },
          ]),
          a
        );
      })(),
    p =
      window.MutationObserver ||
      window.WebkitMutationObserver ||
      window.MozMutationObserver ||
      ((m = l =
        (function () {
          function a() {
            c(this, a),
              'undefined' != typeof console &&
                null !== console &&
                (console.warn(
                  'MutationObserver is not supported by your browser.'
                ),
                console.warn(
                  'WOW.js cannot detect dom mutations, please call .sync() after loading new content.'
                ));
          }
          return n(a, [{ key: 'observe', value: function () {} }]), a;
        })()),
      (l.notSupported = !0),
      m),
    q =
      window.getComputedStyle ||
      function (a) {
        var b = /(\-([a-z]){1})/g;
        return {
          getPropertyValue: function (c) {
            'float' === c && (c = 'styleFloat'),
              b.test(c) &&
                c.replace(b, function (a, b) {
                  return b.toUpperCase();
                });
            var d = a.currentStyle;
            return (null != d ? d[c] : void 0) || null;
          },
        };
      },
    r = (function () {
      function a() {
        var b =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        c(this, a),
          (this.defaults = {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
            resetAnimation: !0,
          }),
          (this.animate = (function () {
            return 'requestAnimationFrame' in window
              ? function (a) {
                  return window.requestAnimationFrame(a);
                }
              : function (a) {
                  return a();
                };
          })()),
          (this.vendors = ['moz', 'webkit']),
          (this.start = this.start.bind(this)),
          (this.resetAnimation = this.resetAnimation.bind(this)),
          (this.scrollHandler = this.scrollHandler.bind(this)),
          (this.scrollCallback = this.scrollCallback.bind(this)),
          (this.scrolled = !0),
          (this.config = e(b, this.defaults)),
          null != b.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              b.scrollContainer
            )),
          (this.animationNameCache = new o()),
          (this.wowEvent = g(this.config.boxClass));
      }
      return (
        n(a, [
          {
            key: 'init',
            value: function () {
              (this.element = window.document.documentElement),
                d(document.readyState, ['interactive', 'complete'])
                  ? this.start()
                  : i(document, 'DOMContentLoaded', this.start),
                (this.finished = []);
            },
          },
          {
            key: 'start',
            value: function () {
              var a = this;
              if (
                ((this.stopped = !1),
                (this.boxes = [].slice.call(
                  this.element.querySelectorAll('.' + this.config.boxClass)
                )),
                (this.all = this.boxes.slice(0)),
                this.boxes.length)
              )
                if (this.disabled()) this.resetStyle();
                else
                  for (var b = 0; b < this.boxes.length; b++) {
                    var c = this.boxes[b];
                    this.applyStyle(c, !0);
                  }
              if (
                (this.disabled() ||
                  (i(
                    this.config.scrollContainer || window,
                    'scroll',
                    this.scrollHandler
                  ),
                  i(window, 'resize', this.scrollHandler),
                  (this.interval = setInterval(this.scrollCallback, 50))),
                this.config.live)
              ) {
                var d = new p(function (b) {
                  for (var c = 0; c < b.length; c++)
                    for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                      var f = d.addedNodes[e];
                      a.doSync(f);
                    }
                });
                d.observe(document.body, { childList: !0, subtree: !0 });
              }
            },
          },
          {
            key: 'stop',
            value: function () {
              (this.stopped = !0),
                j(
                  this.config.scrollContainer || window,
                  'scroll',
                  this.scrollHandler
                ),
                j(window, 'resize', this.scrollHandler),
                null != this.interval && clearInterval(this.interval);
            },
          },
          {
            key: 'sync',
            value: function () {
              p.notSupported && this.doSync(this.element);
            },
          },
          {
            key: 'doSync',
            value: function (a) {
              if (
                (('undefined' != typeof a && null !== a) || (a = this.element),
                1 === a.nodeType)
              ) {
                a = a.parentNode || a;
                for (
                  var b = a.querySelectorAll('.' + this.config.boxClass), c = 0;
                  c < b.length;
                  c++
                ) {
                  var e = b[c];
                  d(e, this.all) ||
                    (this.boxes.push(e),
                    this.all.push(e),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(e, !0),
                    (this.scrolled = !0));
                }
              }
            },
          },
          {
            key: 'show',
            value: function (a) {
              return (
                this.applyStyle(a),
                (a.className = a.className + ' ' + this.config.animateClass),
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation &&
                  (i(a, 'animationend', this.resetAnimation),
                  i(a, 'oanimationend', this.resetAnimation),
                  i(a, 'webkitAnimationEnd', this.resetAnimation),
                  i(a, 'MSAnimationEnd', this.resetAnimation)),
                a
              );
            },
          },
          {
            key: 'applyStyle',
            value: function (a, b) {
              var c = this,
                d = a.getAttribute('data-wow-duration'),
                e = a.getAttribute('data-wow-delay'),
                f = a.getAttribute('data-wow-iteration');
              return this.animate(function () {
                return c.customStyle(a, b, d, e, f);
              });
            },
          },
          {
            key: 'resetStyle',
            value: function () {
              for (var a = 0; a < this.boxes.length; a++) {
                var b = this.boxes[a];
                b.style.visibility = 'visible';
              }
            },
          },
          {
            key: 'resetAnimation',
            value: function (a) {
              if (a.type.toLowerCase().indexOf('animationend') >= 0) {
                var b = a.target || a.srcElement;
                b.className = b.className
                  .replace(this.config.animateClass, '')
                  .trim();
              }
            },
          },
          {
            key: 'customStyle',
            value: function (a, b, c, d, e) {
              return (
                b && this.cacheAnimationName(a),
                (a.style.visibility = b ? 'hidden' : 'visible'),
                c && this.vendorSet(a.style, { animationDuration: c }),
                d && this.vendorSet(a.style, { animationDelay: d }),
                e && this.vendorSet(a.style, { animationIterationCount: e }),
                this.vendorSet(a.style, {
                  animationName: b ? 'none' : this.cachedAnimationName(a),
                }),
                a
              );
            },
          },
          {
            key: 'vendorSet',
            value: function (a, b) {
              for (var c in b)
                if (b.hasOwnProperty(c)) {
                  var d = b[c];
                  a['' + c] = d;
                  for (var e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    a['' + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
                  }
                }
            },
          },
          {
            key: 'vendorCSS',
            value: function (a, b) {
              for (
                var c = q(a), d = c.getPropertyCSSValue(b), e = 0;
                e < this.vendors.length;
                e++
              ) {
                var f = this.vendors[e];
                d = d || c.getPropertyCSSValue('-' + f + '-' + b);
              }
              return d;
            },
          },
          {
            key: 'animationName',
            value: function (a) {
              var b = void 0;
              try {
                b = this.vendorCSS(a, 'animation-name').cssText;
              } catch (c) {
                b = q(a).getPropertyValue('animation-name');
              }
              return 'none' === b ? '' : b;
            },
          },
          {
            key: 'cacheAnimationName',
            value: function (a) {
              return this.animationNameCache.set(a, this.animationName(a));
            },
          },
          {
            key: 'cachedAnimationName',
            value: function (a) {
              return this.animationNameCache.get(a);
            },
          },
          {
            key: 'scrollHandler',
            value: function () {
              this.scrolled = !0;
            },
          },
          {
            key: 'scrollCallback',
            value: function () {
              if (this.scrolled) {
                this.scrolled = !1;
                for (var a = [], b = 0; b < this.boxes.length; b++) {
                  var c = this.boxes[b];
                  if (c) {
                    if (this.isVisible(c)) {
                      this.show(c);
                      continue;
                    }
                    a.push(c);
                  }
                }
                (this.boxes = a),
                  this.boxes.length || this.config.live || this.stop();
              }
            },
          },
          {
            key: 'offsetTop',
            value: function (a) {
              for (; void 0 === a.offsetTop; ) a = a.parentNode;
              for (var b = a.offsetTop; a.offsetParent; )
                (a = a.offsetParent), (b += a.offsetTop);
              return b;
            },
          },
          {
            key: 'isVisible',
            value: function (a) {
              var b = a.getAttribute('data-wow-offset') || this.config.offset,
                c =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset,
                d = c + Math.min(this.element.clientHeight, k()) - b,
                e = this.offsetTop(a),
                f = e + a.clientHeight;
              return d >= e && f >= c;
            },
          },
          {
            key: 'disabled',
            value: function () {
              return !this.config.mobile && f(navigator.userAgent);
            },
          },
        ]),
        a
      );
    })();
  (b['default'] = r), (a.exports = b['default']);
});

/*---------------------- jQuery Appear ----------------------*/
(function ($) {
  $.fn.appear = function (fn, options) {
    var settings = $.extend(
      { data: undefined, one: true, accX: 0, accY: 0 },
      options
    );
    return this.each(function () {
      var t = $(this);
      t.appeared = false;
      if (!fn) {
        t.trigger('appear', settings.data);
        return;
      }
      var w = $(window);
      var check = function () {
        if (!t.is(':visible')) {
          t.appeared = false;
          return;
        }
        var a = w.scrollLeft();
        var b = w.scrollTop();
        var o = t.offset();
        var x = o.left;
        var y = o.top;
        var ax = settings.accX;
        var ay = settings.accY;
        var th = t.height();
        var wh = w.height();
        var tw = t.width();
        var ww = w.width();
        if (
          y + th + ay >= b &&
          y <= b + wh + ay &&
          x + tw + ax >= a &&
          x <= a + ww + ax
        ) {
          if (!t.appeared) t.trigger('appear', settings.data);
        } else {
          t.appeared = false;
        }
      };
      var modifiedFn = function () {
        t.appeared = true;
        if (settings.one) {
          w.unbind('scroll', check);
          var i = $.inArray(check, $.fn.appear.checks);
          if (i >= 0) $.fn.appear.checks.splice(i, 1);
        }
        fn.apply(this, arguments);
      };
      if (settings.one) t.one('appear', settings.data, modifiedFn);
      else t.bind('appear', settings.data, modifiedFn);
      w.scroll(check);
      $.fn.appear.checks.push(check);
      check();
    });
  };
  $.extend($.fn.appear, {
    checks: [],
    timeout: null,
    checkAll: function () {
      var length = $.fn.appear.checks.length;
      if (length > 0) while (length--) $.fn.appear.checks[length]();
    },
    run: function () {
      if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
      $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
    },
  });
  $.each(
    [
      'append',
      'prepend',
      'after',
      'before',
      'attr',
      'removeAttr',
      'addClass',
      'removeClass',
      'toggleClass',
      'remove',
      'css',
      'show',
      'hide',
    ],
    function (i, n) {
      var old = $.fn[n];
      if (old) {
        $.fn[n] = function () {
          var r = old.apply(this, arguments);
          $.fn.appear.run();
          return r;
        };
      }
    }
  );
})(jQuery);

/*---------------------- jQuery CountDown ----------------------*/
/* jQuery CountDown Clock */
// CountDown Clock
// Version   : 1.0.1
// Developer : Ekrem KAYA
// Website   : http://e-piksel.com
// GitHub    : https://github.com/epiksel/countdown
!(function (t) {
  t.fn.countdown = function (e, n) {
    function o() {
      var t = new Date(r.date),
        e = s(),
        o = t - e;
      if (0 > o)
        return clearInterval(d), void (n && 'function' == typeof n && n());
      var a = 1e3,
        f = 60 * a,
        u = 60 * f,
        l = 24 * u,
        c = Math.floor(o / l),
        h = Math.floor((o % l) / u),
        x = Math.floor((o % u) / f),
        g = Math.floor((o % f) / a),
        y = 1 === c ? r.day : r.days,
        m = 1 === h ? r.hour : r.hours,
        v = 1 === x ? r.minute : r.minutes,
        D = 1 === g ? r.second : r.seconds;
      (c = String(c).length >= 2 ? c : '0' + c),
        (h = String(h).length >= 2 ? h : '0' + h),
        (x = String(x).length >= 2 ? x : '0' + x),
        (g = String(g).length >= 2 ? g : '0' + g),
        i.find('.days').text(c),
        i.find('.hours').text(h),
        i.find('.minutes').text(x),
        i.find('.seconds').text(g),
        i.find('.days_text').text(y),
        i.find('.hours_text').text(m),
        i.find('.minutes_text').text(v),
        i.find('.seconds_text').text(D);
    }
    var r = t.extend(
      {
        date: null,
        offset: null,
        day: 'Day',
        days: 'Days',
        hour: 'Hour',
        hours: 'Hours',
        minute: 'Minute',
        minutes: 'Minutes',
        second: 'Second',
        seconds: 'Seconds',
      },
      e
    );
    r.date || t.error('Date is not defined.'),
      Date.parse(r.date) ||
        t.error(
          'Incorrect date format, it should look like this, 12/24/2012 12:00:00.'
        );
    var i = this,
      s = function () {
        var t = new Date(),
          e = t.getTime() + 6e4 * t.getTimezoneOffset(),
          n = new Date(e + 36e5 * r.offset);
        return n;
      },
      d = setInterval(o, 1e3);
  };
})(jQuery);

/*---------------------- jQuery Counter ----------------------*/
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {
  var CountTo = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
    this.init();
  };
  CountTo.DEFAULTS = {
    from: 0,
    to: 0,
    speed: 1000,
    refreshInterval: 100,
    decimals: 0,
    formatter: formatter,
    onUpdate: null,
    onComplete: null,
  };
  CountTo.prototype.init = function () {
    this.value = this.options.from;
    this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
    this.loopCount = 0;
    this.increment = (this.options.to - this.options.from) / this.loops;
  };
  CountTo.prototype.dataOptions = function () {
    var options = {
      from: this.$element.data('from'),
      to: this.$element.data('to'),
      speed: this.$element.data('speed'),
      refreshInterval: this.$element.data('refresh-interval'),
      decimals: this.$element.data('decimals'),
    };
    var keys = Object.keys(options);
    for (var i in keys) {
      var key = keys[i];
      if (typeof options[key] === 'undefined') {
        delete options[key];
      }
    }
    return options;
  };
  CountTo.prototype.update = function () {
    this.value += this.increment;
    this.loopCount++;
    this.render();
    if (typeof this.options.onUpdate == 'function') {
      this.options.onUpdate.call(this.$element, this.value);
    }
    if (this.loopCount >= this.loops) {
      clearInterval(this.interval);
      this.value = this.options.to;
      if (typeof this.options.onComplete == 'function') {
        this.options.onComplete.call(this.$element, this.value);
      }
    }
  };
  CountTo.prototype.render = function () {
    var formattedValue = this.options.formatter.call(
      this.$element,
      this.value,
      this.options
    );
    this.$element.text(formattedValue);
  };
  CountTo.prototype.restart = function () {
    this.stop();
    this.init();
    this.start();
  };
  CountTo.prototype.start = function () {
    this.stop();
    this.render();
    this.interval = setInterval(
      this.update.bind(this),
      this.options.refreshInterval
    );
  };
  CountTo.prototype.stop = function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };
  CountTo.prototype.toggle = function () {
    if (this.interval) {
      this.stop();
    } else {
      this.start();
    }
  };
  function formatter(value, options) {
    return value.toFixed(options.decimals);
  }
  $.fn.countTo = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('countTo');
      var init = !data || typeof option === 'object';
      var options = typeof option === 'object' ? option : {};
      var method = typeof option === 'string' ? option : 'start';
      if (init) {
        if (data) data.stop();
        $this.data('countTo', (data = new CountTo(this, options)));
      }
      data[method].call(data);
    });
  };
});

/*---------------------- Magnific Popup ----------------------*/
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (e) {
  'function' == typeof define && define.amd
    ? define(['jquery'], e)
    : e(
        'object' == typeof exports
          ? require('jquery')
          : window.jQuery || window.Zepto
      );
})(function (e) {
  var t,
    i,
    n,
    o,
    r,
    a,
    s = 'Close',
    l = 'BeforeClose',
    c = 'MarkupParse',
    d = 'Open',
    u = 'Change',
    p = 'mfp',
    f = '.' + p,
    m = 'mfp-ready',
    g = 'mfp-removing',
    v = 'mfp-prevent-close',
    h = function () {},
    y = !!window.jQuery,
    C = e(window),
    w = function (e, i) {
      t.ev.on(p + e + f, i);
    },
    b = function (t, i, n, o) {
      var r = document.createElement('div');
      return (
        (r.className = 'mfp-' + t),
        n && (r.innerHTML = n),
        o ? i && i.appendChild(r) : ((r = e(r)), i && r.appendTo(i)),
        r
      );
    },
    I = function (i, n) {
      t.ev.triggerHandler(p + i, n),
        t.st.callbacks &&
          ((i = i.charAt(0).toLowerCase() + i.slice(1)),
          t.st.callbacks[i] &&
            t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]));
    },
    x = function (i) {
      return (
        (i === a && t.currTemplate.closeBtn) ||
          ((t.currTemplate.closeBtn = e(
            t.st.closeMarkup.replace('%title%', t.st.tClose)
          )),
          (a = i)),
        t.currTemplate.closeBtn
      );
    },
    k = function () {
      e.magnificPopup.instance ||
        ((t = new h()).init(), (e.magnificPopup.instance = t));
    };
  (h.prototype = {
    constructor: h,
    init: function () {
      var i = navigator.appVersion;
      (t.isLowIE = t.isIE8 = document.all && !document.addEventListener),
        (t.isAndroid = /android/gi.test(i)),
        (t.isIOS = /iphone|ipad|ipod/gi.test(i)),
        (t.supportsTransition = (function () {
          var e = document.createElement('p').style,
            t = ['ms', 'O', 'Moz', 'Webkit'];
          if (void 0 !== e.transition) return !0;
          for (; t.length; ) if (t.pop() + 'Transition' in e) return !0;
          return !1;
        })()),
        (t.probablyMobile =
          t.isAndroid ||
          t.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (n = e(document)),
        (t.popupsCache = {});
    },
    open: function (i) {
      var o;
      if (!1 === i.isObj) {
        (t.items = i.items.toArray()), (t.index = 0);
        var a,
          s = i.items;
        for (o = 0; o < s.length; o++)
          if (((a = s[o]), a.parsed && (a = a.el[0]), a === i.el[0])) {
            t.index = o;
            break;
          }
      } else
        (t.items = e.isArray(i.items) ? i.items : [i.items]),
          (t.index = i.index || 0);
      if (!t.isOpen) {
        (t.types = []),
          (r = ''),
          i.mainEl && i.mainEl.length ? (t.ev = i.mainEl.eq(0)) : (t.ev = n),
          i.key
            ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}),
              (t.currTemplate = t.popupsCache[i.key]))
            : (t.currTemplate = {}),
          (t.st = e.extend(!0, {}, e.magnificPopup.defaults, i)),
          (t.fixedContentPos =
            'auto' === t.st.fixedContentPos
              ? !t.probablyMobile
              : t.st.fixedContentPos),
          t.st.modal &&
            ((t.st.closeOnContentClick = !1),
            (t.st.closeOnBgClick = !1),
            (t.st.showCloseBtn = !1),
            (t.st.enableEscapeKey = !1)),
          t.bgOverlay ||
            ((t.bgOverlay = b('bg').on('click' + f, function () {
              t.close();
            })),
            (t.wrap = b('wrap')
              .attr('tabindex', -1)
              .on('click' + f, function (e) {
                t._checkIfClose(e.target) && t.close();
              })),
            (t.container = b('container', t.wrap))),
          (t.contentContainer = b('content')),
          t.st.preloader &&
            (t.preloader = b('preloader', t.container, t.st.tLoading));
        var l = e.magnificPopup.modules;
        for (o = 0; o < l.length; o++) {
          var u = l[o];
          (u = u.charAt(0).toUpperCase() + u.slice(1)), t['init' + u].call(t);
        }
        I('BeforeOpen'),
          t.st.showCloseBtn &&
            (t.st.closeBtnInside
              ? (w(c, function (e, t, i, n) {
                  i.close_replaceWith = x(n.type);
                }),
                (r += ' mfp-close-btn-in'))
              : t.wrap.append(x())),
          t.st.alignTop && (r += ' mfp-align-top'),
          t.fixedContentPos
            ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: 'hidden',
                overflowY: t.st.overflowY,
              })
            : t.wrap.css({ top: C.scrollTop(), position: 'absolute' }),
          (!1 === t.st.fixedBgPos ||
            ('auto' === t.st.fixedBgPos && !t.fixedContentPos)) &&
            t.bgOverlay.css({ height: n.height(), position: 'absolute' }),
          t.st.enableEscapeKey &&
            n.on('keyup' + f, function (e) {
              27 === e.keyCode && t.close();
            }),
          C.on('resize' + f, function () {
            t.updateSize();
          }),
          t.st.closeOnContentClick || (r += ' mfp-auto-cursor'),
          r && t.wrap.addClass(r);
        var p = (t.wH = C.height()),
          g = {};
        if (t.fixedContentPos && t._hasScrollBar(p)) {
          var v = t._getScrollbarSize();
          v && (g.marginRight = v);
        }
        t.fixedContentPos &&
          (t.isIE7
            ? e('body, html').css('overflow', 'hidden')
            : (g.overflow = 'hidden'));
        var h = t.st.mainClass;
        return (
          t.isIE7 && (h += ' mfp-ie7'),
          h && t._addClassToMFP(h),
          t.updateItemHTML(),
          I('BuildControls'),
          e('html').css(g),
          t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
          (t._lastFocusedEl = document.activeElement),
          setTimeout(function () {
            t.content
              ? (t._addClassToMFP(m), t._setFocus())
              : t.bgOverlay.addClass(m),
              n.on('focusin' + f, t._onFocusIn);
          }, 16),
          (t.isOpen = !0),
          t.updateSize(p),
          I(d),
          i
        );
      }
      t.updateItemHTML();
    },
    close: function () {
      t.isOpen &&
        (I(l),
        (t.isOpen = !1),
        t.st.removalDelay && !t.isLowIE && t.supportsTransition
          ? (t._addClassToMFP(g),
            setTimeout(function () {
              t._close();
            }, t.st.removalDelay))
          : t._close());
    },
    _close: function () {
      I(s);
      var i = g + ' ' + m + ' ';
      if (
        (t.bgOverlay.detach(),
        t.wrap.detach(),
        t.container.empty(),
        t.st.mainClass && (i += t.st.mainClass + ' '),
        t._removeClassFromMFP(i),
        t.fixedContentPos)
      ) {
        var o = { marginRight: '' };
        t.isIE7 ? e('body, html').css('overflow', '') : (o.overflow = ''),
          e('html').css(o);
      }
      n.off('keyup.mfp focusin' + f),
        t.ev.off(f),
        t.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
        t.bgOverlay.attr('class', 'mfp-bg'),
        t.container.attr('class', 'mfp-container'),
        !t.st.showCloseBtn ||
          (t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type]) ||
          (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
        t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
        (t.currItem = null),
        (t.content = null),
        (t.currTemplate = null),
        (t.prevHeight = 0),
        I('AfterClose');
    },
    updateSize: function (e) {
      if (t.isIOS) {
        var i = document.documentElement.clientWidth / window.innerWidth,
          n = window.innerHeight * i;
        t.wrap.css('height', n), (t.wH = n);
      } else t.wH = e || C.height();
      t.fixedContentPos || t.wrap.css('height', t.wH), I('Resize');
    },
    updateItemHTML: function () {
      var i = t.items[t.index];
      t.contentContainer.detach(),
        t.content && t.content.detach(),
        i.parsed || (i = t.parseEl(t.index));
      var n = i.type;
      if (
        (I('BeforeChange', [t.currItem ? t.currItem.type : '', n]),
        (t.currItem = i),
        !t.currTemplate[n])
      ) {
        var r = !!t.st[n] && t.st[n].markup;
        I('FirstMarkupParse', r), (t.currTemplate[n] = !r || e(r));
      }
      o && o !== i.type && t.container.removeClass('mfp-' + o + '-holder');
      var a = t['get' + n.charAt(0).toUpperCase() + n.slice(1)](
        i,
        t.currTemplate[n]
      );
      t.appendContent(a, n),
        (i.preloaded = !0),
        I(u, i),
        (o = i.type),
        t.container.prepend(t.contentContainer),
        I('AfterChange');
    },
    appendContent: function (e, i) {
      (t.content = e),
        e
          ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i]
            ? t.content.find('.mfp-close').length || t.content.append(x())
            : (t.content = e)
          : (t.content = ''),
        I('BeforeAppend'),
        t.container.addClass('mfp-' + i + '-holder'),
        t.contentContainer.append(t.content);
    },
    parseEl: function (i) {
      var n,
        o = t.items[i];
      if (
        (o.tagName
          ? (o = { el: e(o) })
          : ((n = o.type), (o = { data: o, src: o.src })),
        o.el)
      ) {
        for (var r = t.types, a = 0; a < r.length; a++)
          if (o.el.hasClass('mfp-' + r[a])) {
            n = r[a];
            break;
          }
        (o.src = o.el.attr('data-mfp-src')),
          o.src || (o.src = o.el.attr('href'));
      }
      return (
        (o.type = n || t.st.type || 'inline'),
        (o.index = i),
        (o.parsed = !0),
        (t.items[i] = o),
        I('ElementParse', o),
        t.items[i]
      );
    },
    addGroup: function (e, i) {
      var n = function (n) {
        (n.mfpEl = this), t._openClick(n, e, i);
      };
      i || (i = {});
      var o = 'click.magnificPopup';
      (i.mainEl = e),
        i.items
          ? ((i.isObj = !0), e.off(o).on(o, n))
          : ((i.isObj = !1),
            i.delegate
              ? e.off(o).on(o, i.delegate, n)
              : ((i.items = e), e.off(o).on(o, n)));
    },
    _openClick: function (i, n, o) {
      if (
        (void 0 !== o.midClick
          ? o.midClick
          : e.magnificPopup.defaults.midClick) ||
        !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)
      ) {
        var r =
          void 0 !== o.disableOn
            ? o.disableOn
            : e.magnificPopup.defaults.disableOn;
        if (r)
          if (e.isFunction(r)) {
            if (!r.call(t)) return !0;
          } else if (C.width() < r) return !0;
        i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()),
          (o.el = e(i.mfpEl)),
          o.delegate && (o.items = n.find(o.delegate)),
          t.open(o);
      }
    },
    updateStatus: function (e, n) {
      if (t.preloader) {
        i !== e && t.container.removeClass('mfp-s-' + i),
          n || 'loading' !== e || (n = t.st.tLoading);
        var o = { status: e, text: n };
        I('UpdateStatus', o),
          (e = o.status),
          (n = o.text),
          t.preloader.html(n),
          t.preloader.find('a').on('click', function (e) {
            e.stopImmediatePropagation();
          }),
          t.container.addClass('mfp-s-' + e),
          (i = e);
      }
    },
    _checkIfClose: function (i) {
      if (!e(i).hasClass(v)) {
        var n = t.st.closeOnContentClick,
          o = t.st.closeOnBgClick;
        if (n && o) return !0;
        if (
          !t.content ||
          e(i).hasClass('mfp-close') ||
          (t.preloader && i === t.preloader[0])
        )
          return !0;
        if (i === t.content[0] || e.contains(t.content[0], i)) {
          if (n) return !0;
        } else if (o && e.contains(document, i)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    },
    _removeClassFromMFP: function (e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    },
    _hasScrollBar: function (e) {
      return (
        (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || C.height())
      );
    },
    _setFocus: function () {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    },
    _onFocusIn: function (i) {
      return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target)
        ? void 0
        : (t._setFocus(), !1);
    },
    _parseMarkup: function (t, i, n) {
      var o;
      n.data && (i = e.extend(n.data, i)),
        I(c, [t, i, n]),
        e.each(i, function (i, n) {
          if (void 0 === n || !1 === n) return !0;
          if ((o = i.split('_')).length > 1) {
            var r = t.find(f + '-' + o[0]);
            if (r.length > 0) {
              var a = o[1];
              'replaceWith' === a
                ? r[0] !== n[0] && r.replaceWith(n)
                : 'img' === a
                ? r.is('img')
                  ? r.attr('src', n)
                  : r.replaceWith(
                      e('<img>').attr('src', n).attr('class', r.attr('class'))
                    )
                : r.attr(o[1], n);
            }
          } else t.find(f + '-' + i).html(n);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement('div');
        (e.style.cssText =
          'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'),
          document.body.appendChild(e),
          (t.scrollbarSize = e.offsetWidth - e.clientWidth),
          document.body.removeChild(e);
      }
      return t.scrollbarSize;
    },
  }),
    (e.magnificPopup = {
      instance: null,
      proto: h.prototype,
      modules: [],
      open: function (t, i) {
        return (
          k(),
          ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
          (t.index = i || 0),
          this.instance.open(t)
        );
      },
      close: function () {
        return e.magnificPopup.instance && e.magnificPopup.instance.close();
      },
      registerModule: function (t, i) {
        i.options && (e.magnificPopup.defaults[t] = i.options),
          e.extend(this.proto, i.proto),
          this.modules.push(t);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: '',
        preloader: !0,
        focus: '',
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: 'auto',
        fixedBgPos: 'auto',
        overflowY: 'auto',
        closeMarkup:
          '<button title="%title%" type="button" className="mfp-close">&#215;</button>',
        tClose: 'Close (Esc)',
        tLoading: 'Loading...',
        autoFocusLast: !0,
      },
    }),
    (e.fn.magnificPopup = function (i) {
      k();
      var n = e(this);
      if ('string' == typeof i)
        if ('open' === i) {
          var o,
            r = y ? n.data('magnificPopup') : n[0].magnificPopup,
            a = parseInt(arguments[1], 10) || 0;
          r.items
            ? (o = r.items[a])
            : ((o = n), r.delegate && (o = o.find(r.delegate)), (o = o.eq(a))),
            t._openClick({ mfpEl: o }, n, r);
        } else
          t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
      else
        (i = e.extend(!0, {}, i)),
          y ? n.data('magnificPopup', i) : (n[0].magnificPopup = i),
          t.addGroup(n, i);
      return n;
    });
  var T,
    _,
    P,
    S = 'inline',
    E = function () {
      P && (_.after(P.addClass(T)).detach(), (P = null));
    };
  e.magnificPopup.registerModule(S, {
    options: {
      hiddenClass: 'hide',
      markup: '',
      tNotFound: 'Content not found',
    },
    proto: {
      initInline: function () {
        t.types.push(S),
          w(s + '.' + S, function () {
            E();
          });
      },
      getInline: function (i, n) {
        if ((E(), i.src)) {
          var o = t.st.inline,
            r = e(i.src);
          if (r.length) {
            var a = r[0].parentNode;
            a &&
              a.tagName &&
              (_ || ((T = o.hiddenClass), (_ = b(T)), (T = 'mfp-' + T)),
              (P = r.after(_).detach().removeClass(T))),
              t.updateStatus('ready');
          } else t.updateStatus('error', o.tNotFound), (r = e('<div>'));
          return (i.inlineElement = r), r;
        }
        return t.updateStatus('ready'), t._parseMarkup(n, {}, i), n;
      },
    },
  });
  var z,
    O = 'ajax',
    M = function () {
      z && e(document.body).removeClass(z);
    },
    B = function () {
      M(), t.req && t.req.abort();
    };
  e.magnificPopup.registerModule(O, {
    options: {
      settings: null,
      cursor: 'mfp-ajax-cur',
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        t.types.push(O),
          (z = t.st.ajax.cursor),
          w(s + '.' + O, B),
          w('BeforeChange.' + O, B);
      },
      getAjax: function (i) {
        z && e(document.body).addClass(z), t.updateStatus('loading');
        var n = e.extend(
          {
            url: i.src,
            success: function (n, o, r) {
              var a = { data: n, xhr: r };
              I('ParseAjax', a),
                t.appendContent(e(a.data), O),
                (i.finished = !0),
                M(),
                t._setFocus(),
                setTimeout(function () {
                  t.wrap.addClass(m);
                }, 16),
                t.updateStatus('ready'),
                I('AjaxContentAdded');
            },
            error: function () {
              M(),
                (i.finished = i.loadError = !0),
                t.updateStatus(
                  'error',
                  t.st.ajax.tError.replace('%url%', i.src)
                );
            },
          },
          t.st.ajax.settings
        );
        return (t.req = e.ajax(n)), '';
      },
    },
  });
  var L;
  e.magnificPopup.registerModule('image', {
    options: {
      markup:
        '<div className="mfp-figure"><div className="mfp-close"></div><figure><div className="mfp-img"></div><figcaption><div className="mfp-bottom-bar"><div className="mfp-title"></div><div className="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: 'mfp-zoom-out-cur',
      titleSrc: 'title',
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var i = t.st.image,
          n = '.image';
        t.types.push('image'),
          w(d + n, function () {
            'image' === t.currItem.type &&
              i.cursor &&
              e(document.body).addClass(i.cursor);
          }),
          w(s + n, function () {
            i.cursor && e(document.body).removeClass(i.cursor),
              C.off('resize' + f);
          }),
          w('Resize' + n, t.resizeImage),
          t.isLowIE && w('AfterChange', t.resizeImage);
      },
      resizeImage: function () {
        var e = t.currItem;
        if (e && e.img && t.st.image.verticalFit) {
          var i = 0;
          t.isLowIE &&
            (i =
              parseInt(e.img.css('padding-top'), 10) +
              parseInt(e.img.css('padding-bottom'), 10)),
            e.img.css('max-height', t.wH - i);
        }
      },
      _onImageHasSize: function (e) {
        e.img &&
          ((e.hasSize = !0),
          L && clearInterval(L),
          (e.isCheckingImgSize = !1),
          I('ImageHasSize', e),
          e.imgHidden &&
            (t.content && t.content.removeClass('mfp-loading'),
            (e.imgHidden = !1)));
      },
      findImageSize: function (e) {
        var i = 0,
          n = e.img[0],
          o = function (r) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return n.naturalWidth > 0
                  ? void t._onImageHasSize(e)
                  : (i > 200 && clearInterval(L),
                    void (3 === ++i
                      ? o(10)
                      : 40 === i
                      ? o(50)
                      : 100 === i && o(500)));
              }, r));
          };
        o(1);
      },
      getImage: function (i, n) {
        var o = 0,
          r = function () {
            i &&
              (i.img[0].complete
                ? (i.img.off('.mfploader'),
                  i === t.currItem &&
                    (t._onImageHasSize(i), t.updateStatus('ready')),
                  (i.hasSize = !0),
                  (i.loaded = !0),
                  I('ImageLoadComplete'))
                : 200 > ++o
                ? setTimeout(r, 100)
                : a());
          },
          a = function () {
            i &&
              (i.img.off('.mfploader'),
              i === t.currItem &&
                (t._onImageHasSize(i),
                t.updateStatus('error', s.tError.replace('%url%', i.src))),
              (i.hasSize = !0),
              (i.loaded = !0),
              (i.loadError = !0));
          },
          s = t.st.image,
          l = n.find('.mfp-img');
        if (l.length) {
          var c = document.createElement('img');
          (c.className = 'mfp-img'),
            i.el &&
              i.el.find('img').length &&
              (c.alt = i.el.find('img').attr('alt')),
            (i.img = e(c).on('load.mfploader', r).on('error.mfploader', a)),
            (c.src = i.src),
            l.is('img') && (i.img = i.img.clone()),
            (c = i.img[0]).naturalWidth > 0
              ? (i.hasSize = !0)
              : c.width || (i.hasSize = !1);
        }
        return (
          t._parseMarkup(
            n,
            {
              title: (function (i) {
                if (i.data && void 0 !== i.data.title) return i.data.title;
                var n = t.st.image.titleSrc;
                if (n) {
                  if (e.isFunction(n)) return n.call(t, i);
                  if (i.el) return i.el.attr(n) || '';
                }
                return '';
              })(i),
              img_replaceWith: i.img,
            },
            i
          ),
          t.resizeImage(),
          i.hasSize
            ? (L && clearInterval(L),
              i.loadError
                ? (n.addClass('mfp-loading'),
                  t.updateStatus('error', s.tError.replace('%url%', i.src)))
                : (n.removeClass('mfp-loading'), t.updateStatus('ready')),
              n)
            : (t.updateStatus('loading'),
              (i.loading = !0),
              i.hasSize ||
                ((i.imgHidden = !0),
                n.addClass('mfp-loading'),
                t.findImageSize(i)),
              n)
        );
      },
    },
  });
  var H;
  e.magnificPopup.registerModule('zoom', {
    options: {
      enabled: !1,
      easing: 'ease-in-out',
      duration: 300,
      opener: function (e) {
        return e.is('img') ? e : e.find('img');
      },
    },
    proto: {
      initZoom: function () {
        var e,
          i = t.st.zoom,
          n = '.zoom';
        if (i.enabled && t.supportsTransition) {
          var o,
            r,
            a = i.duration,
            c = function (e) {
              var t = e
                  .clone()
                  .removeAttr('style')
                  .removeAttr('class')
                  .addClass('mfp-animated-image'),
                n = 'all ' + i.duration / 1e3 + 's ' + i.easing,
                o = {
                  position: 'fixed',
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  '-webkit-backface-visibility': 'hidden',
                },
                r = 'transition';
              return (
                (o['-webkit-' + r] = o['-moz-' + r] = o['-o-' + r] = o[r] = n),
                t.css(o),
                t
              );
            },
            d = function () {
              t.content.css('visibility', 'visible');
            };
          w('BuildControls' + n, function () {
            if (t._allowZoom()) {
              if (
                (clearTimeout(o),
                t.content.css('visibility', 'hidden'),
                !(e = t._getItemToZoom()))
              )
                return void d();
              (r = c(e)).css(t._getOffset()),
                t.wrap.append(r),
                (o = setTimeout(function () {
                  r.css(t._getOffset(!0)),
                    (o = setTimeout(function () {
                      d(),
                        setTimeout(function () {
                          r.remove(), (e = r = null), I('ZoomAnimationEnded');
                        }, 16);
                    }, a));
                }, 16));
            }
          }),
            w(l + n, function () {
              if (t._allowZoom()) {
                if ((clearTimeout(o), (t.st.removalDelay = a), !e)) {
                  if (!(e = t._getItemToZoom())) return;
                  r = c(e);
                }
                r.css(t._getOffset(!0)),
                  t.wrap.append(r),
                  t.content.css('visibility', 'hidden'),
                  setTimeout(function () {
                    r.css(t._getOffset());
                  }, 16);
              }
            }),
            w(s + n, function () {
              t._allowZoom() && (d(), r && r.remove(), (e = null));
            });
        }
      },
      _allowZoom: function () {
        return 'image' === t.currItem.type;
      },
      _getItemToZoom: function () {
        return !!t.currItem.hasSize && t.currItem.img;
      },
      _getOffset: function (i) {
        var n,
          o = (n = i
            ? t.currItem.img
            : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
          r = parseInt(n.css('padding-top'), 10),
          a = parseInt(n.css('padding-bottom'), 10);
        o.top -= e(window).scrollTop() - r;
        var s = {
          width: n.width(),
          height: (y ? n.innerHeight() : n[0].offsetHeight) - a - r,
        };
        return (
          void 0 === H &&
            (H = void 0 !== document.createElement('p').style.MozTransform),
          H
            ? (s['-moz-transform'] = s.transform =
                'translate(' + o.left + 'px,' + o.top + 'px)')
            : ((s.left = o.left), (s.top = o.top)),
          s
        );
      },
    },
  });
  var A = 'iframe',
    F = function (e) {
      if (t.currTemplate[A]) {
        var i = t.currTemplate[A].find('iframe');
        i.length &&
          (e || (i[0].src = '//about:blank'),
          t.isIE8 && i.css('display', e ? 'block' : 'none'));
      }
    };
  e.magnificPopup.registerModule(A, {
    options: {
      markup:
        '<div className="mfp-iframe-scaler"><div className="mfp-close"></div><iframe className="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: 'iframe_src',
      patterns: {
        youtube: {
          index: 'youtube.com',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1',
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1',
        },
        gmaps: { index: '//maps.google.', src: '%id%&output=embed' },
      },
    },
    proto: {
      initIframe: function () {
        t.types.push(A),
          w('BeforeChange', function (e, t, i) {
            t !== i && (t === A ? F() : i === A && F(!0));
          }),
          w(s + '.' + A, function () {
            F();
          });
      },
      getIframe: function (i, n) {
        var o = i.src,
          r = t.st.iframe;
        e.each(r.patterns, function () {
          return o.indexOf(this.index) > -1
            ? (this.id &&
                (o =
                  'string' == typeof this.id
                    ? o.substr(
                        o.lastIndexOf(this.id) + this.id.length,
                        o.length
                      )
                    : this.id.call(this, o)),
              (o = this.src.replace('%id%', o)),
              !1)
            : void 0;
        });
        var a = {};
        return (
          r.srcAction && (a[r.srcAction] = o),
          t._parseMarkup(n, a, i),
          t.updateStatus('ready'),
          n
        );
      },
    },
  });
  var j = function (e) {
      var i = t.items.length;
      return e > i - 1 ? e - i : 0 > e ? i + e : e;
    },
    N = function (e, t, i) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i);
    };
  e.magnificPopup.registerModule('gallery', {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" className="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '%curr% of %total%',
    },
    proto: {
      initGallery: function () {
        var i = t.st.gallery,
          o = '.mfp-gallery';
        return (
          (t.direction = !0),
          !(!i || !i.enabled) &&
            ((r += ' mfp-gallery'),
            w(d + o, function () {
              i.navigateByImgClick &&
                t.wrap.on('click' + o, '.mfp-img', function () {
                  return t.items.length > 1 ? (t.next(), !1) : void 0;
                }),
                n.on('keydown' + o, function (e) {
                  37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                });
            }),
            w('UpdateStatus' + o, function (e, i) {
              i.text && (i.text = N(i.text, t.currItem.index, t.items.length));
            }),
            w(c + o, function (e, n, o, r) {
              var a = t.items.length;
              o.counter = a > 1 ? N(i.tCounter, r.index, a) : '';
            }),
            w('BuildControls' + o, function () {
              if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                var n = i.arrowMarkup,
                  o = (t.arrowLeft = e(
                    n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, 'left')
                  ).addClass(v)),
                  r = (t.arrowRight = e(
                    n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, 'right')
                  ).addClass(v));
                o.click(function () {
                  t.prev();
                }),
                  r.click(function () {
                    t.next();
                  }),
                  t.container.append(o.add(r));
              }
            }),
            w(u + o, function () {
              t._preloadTimeout && clearTimeout(t._preloadTimeout),
                (t._preloadTimeout = setTimeout(function () {
                  t.preloadNearbyImages(), (t._preloadTimeout = null);
                }, 16));
            }),
            void w(s + o, function () {
              n.off(o),
                t.wrap.off('click' + o),
                (t.arrowRight = t.arrowLeft = null);
            }))
        );
      },
      next: function () {
        (t.direction = !0), (t.index = j(t.index + 1)), t.updateItemHTML();
      },
      prev: function () {
        (t.direction = !1), (t.index = j(t.index - 1)), t.updateItemHTML();
      },
      goTo: function (e) {
        (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var e,
          i = t.st.gallery.preload,
          n = Math.min(i[0], t.items.length),
          o = Math.min(i[1], t.items.length);
        for (e = 1; e <= (t.direction ? o : n); e++)
          t._preloadItem(t.index + e);
        for (e = 1; e <= (t.direction ? n : o); e++)
          t._preloadItem(t.index - e);
      },
      _preloadItem: function (i) {
        if (((i = j(i)), !t.items[i].preloaded)) {
          var n = t.items[i];
          n.parsed || (n = t.parseEl(i)),
            I('LazyLoad', n),
            'image' === n.type &&
              (n.img = e('<img className="mfp-img" />')
                .on('load.mfploader', function () {
                  n.hasSize = !0;
                })
                .on('error.mfploader', function () {
                  (n.hasSize = !0), (n.loadError = !0), I('LazyLoadError', n);
                })
                .attr('src', n.src)),
            (n.preloaded = !0);
        }
      },
    },
  });
  var W = 'retina';
  e.magnificPopup.registerModule(W, {
    options: {
      replaceSrc: function (e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return '@2x' + e;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
            i = e.ratio;
          (i = isNaN(i) ? i() : i) > 1 &&
            (w('ImageHasSize.' + W, function (e, t) {
              t.img.css({
                'max-width': t.img[0].naturalWidth / i,
                width: '100%',
              });
            }),
            w('ElementParse.' + W, function (t, n) {
              n.src = e.replaceSrc(n, i);
            }));
        }
      },
    },
  }),
    k();
});

/*---------------------- MediaElement.js ----------------------*/
!(function e(t, n, i) {
  function o(r, s) {
    if (!n[r]) {
      if (!t[r]) {
        var l = 'function' == typeof require && require;
        if (!s && l) return l(r, !0);
        if (a) return a(r, !0);
        var d = new Error("Cannot find module '" + r + "'");
        throw ((d.code = 'MODULE_NOT_FOUND'), d);
      }
      var u = (n[r] = { exports: {} });
      t[r][0].call(
        u.exports,
        function (e) {
          var n = t[r][1][e];
          return o(n || e);
        },
        u,
        u.exports,
        e,
        t,
        n,
        i
      );
    }
    return n[r].exports;
  }
  for (
    var a = 'function' == typeof require && require, r = 0;
    r < i.length;
    r++
  )
    o(i[r]);
  return o;
})(
  {
    1: [function (e, t, n) {}, {}],
    2: [
      function (e, t, n) {
        (function (n) {
          var i = void 0 !== n ? n : 'undefined' != typeof window ? window : {},
            o = e(1);
          if ('undefined' != typeof document) t.exports = document;
          else {
            var a = i['__GLOBAL_DOCUMENT_CACHE@4'];
            a || (a = i['__GLOBAL_DOCUMENT_CACHE@4'] = o), (t.exports = a);
          }
        }).call(
          this,
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {}
        );
      },
      { 1: 1 },
    ],
    3: [
      function (e, t, n) {
        (function (e) {
          'undefined' != typeof window
            ? (t.exports = window)
            : void 0 !== e
            ? (t.exports = e)
            : 'undefined' != typeof self
            ? (t.exports = self)
            : (t.exports = {});
        }).call(
          this,
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {}
        );
      },
      {},
    ],
    4: [
      function (e, t, n) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 });
        var i,
          o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          a = e(6),
          r = (i = a) && i.__esModule ? i : { default: i },
          s = e(14),
          l = e(25);
        var d = {
          lang: 'en',
          en: s.EN,
          language: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            if (null !== t && void 0 !== t && t.length) {
              if ('string' != typeof t[0])
                throw new TypeError('Language code must be a string value');
              if (!/^[a-z]{2}(\-[a-z]{2})?$/i.test(t[0]))
                throw new TypeError(
                  'Language code must have format `xx` or `xx-xx`'
                );
              (d.lang = t[0]),
                void 0 === d[t[0]]
                  ? ((t[1] =
                      null !== t[1] && void 0 !== t[1] && 'object' === o(t[1])
                        ? t[1]
                        : {}),
                    (d[t[0]] = (0, l.isObjectEmpty)(t[1]) ? s.EN : t[1]))
                  : null !== t[1] &&
                    void 0 !== t[1] &&
                    'object' === o(t[1]) &&
                    (d[t[0]] = t[1]);
            }
            return d.lang;
          },
          t: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            if ('string' == typeof e && e.length) {
              var n = void 0,
                i = void 0,
                a = d.language(),
                r = function (e, t, n) {
                  return 'object' !== (void 0 === e ? 'undefined' : o(e)) ||
                    'number' != typeof t ||
                    'number' != typeof n
                    ? e
                    : [
                        function () {
                          return arguments.length <= 1 ? void 0 : arguments[1];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : arguments.length <= 2
                            ? void 0
                            : arguments[2];
                        },
                        function () {
                          return 0 ===
                            (arguments.length <= 0 ? void 0 : arguments[0]) ||
                            1 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : arguments.length <= 2
                            ? void 0
                            : arguments[2];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            10 ==
                            1 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 !=
                              11
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 0 !==
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0]) ||
                            11 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 ===
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) ||
                              12 ===
                                (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) >
                                2 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) <
                                20
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : arguments.length <= 4
                            ? void 0
                            : arguments[4];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 0 ===
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) ||
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >
                                0 &&
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 <
                                  20)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            10 ==
                            1 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 !=
                              11
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 >=
                                2 &&
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                10 ||
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 >=
                                  20)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : [3];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            10 ==
                            1 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 !=
                              11
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 >=
                                2 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 <=
                                4 &&
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                10 ||
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 >=
                                  20)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) >=
                                2 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) <=
                                4
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 >=
                                2 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 <=
                                4 &&
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                10 ||
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 >=
                                  20)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            100 ==
                            1
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 ==
                              2
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 ==
                                3 ||
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 ==
                                4
                            ? arguments.length <= 4
                              ? void 0
                              : arguments[4]
                            : arguments.length <= 1
                            ? void 0
                            : arguments[1];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) >
                                2 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) <
                                7
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) >
                                6 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) <
                                11
                            ? arguments.length <= 4
                              ? void 0
                              : arguments[4]
                            : arguments.length <= 5
                            ? void 0
                            : arguments[5];
                        },
                        function () {
                          return 0 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 1 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >=
                                3 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <=
                                10
                            ? arguments.length <= 4
                              ? void 0
                              : arguments[4]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >=
                              11
                            ? arguments.length <= 5
                              ? void 0
                              : arguments[5]
                            : arguments.length <= 6
                            ? void 0
                            : arguments[6];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 0 ===
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) ||
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >
                                1 &&
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 <
                                  11)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >
                                10 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                20
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : arguments.length <= 4
                            ? void 0
                            : arguments[4];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            10 ==
                            1
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 ==
                              2
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 11 !==
                            (arguments.length <= 0 ? void 0 : arguments[0]) &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 ==
                              1
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : arguments.length <= 2
                            ? void 0
                            : arguments[2];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 >=
                                2 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 <=
                                4 &&
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                10 ||
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 >=
                                  20)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 8 !==
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) &&
                              11 !==
                                (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : arguments.length <= 4
                            ? void 0
                            : arguments[4];
                        },
                        function () {
                          return 0 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : arguments.length <= 2
                            ? void 0
                            : arguments[2];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 3 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : arguments.length <= 4
                            ? void 0
                            : arguments[4];
                        },
                        function () {
                          return 0 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 1 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                      ][n].apply(null, [t].concat(e));
                };
              return (
                void 0 !== d[a] &&
                  ((n = d[a][e]),
                  null !== t &&
                    'number' == typeof t &&
                    ((i = d[a]['mejs.plural-form']),
                    (n = r.apply(null, [n, t, i])))),
                !n &&
                  d.en &&
                  ((n = d.en[e]),
                  null !== t &&
                    'number' == typeof t &&
                    ((i = d.en['mejs.plural-form']),
                    (n = r.apply(null, [n, t, i])))),
                (n = n || e),
                null !== t && 'number' == typeof t && (n = n.replace('%1', t)),
                (0, l.escapeHTML)(n)
              );
            }
            return e;
          },
        };
        (r.default.i18n = d),
          'undefined' != typeof mejsL10n &&
            r.default.i18n.language(mejsL10n.language, mejsL10n.strings),
          (n.default = d);
      },
      { 14: 14, 25: 25, 6: 6 },
    ],
    5: [
      function (e, t, n) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 });
        var i = u(e(3)),
          o = u(e(2)),
          a = u(e(6)),
          r = e(25),
          s = e(26),
          l = e(7),
          d = e(23);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var c = function e(t, n, u) {
          var c = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e);
          var f = this;
          (u = Array.isArray(u) ? u : null),
            (f.defaults = {
              renderers: [],
              fakeNodeName: 'mediaelementwrapper',
              pluginPath: 'build/',
              shimScriptAccess: 'sameDomain',
              customError: '',
            }),
            (n = Object.assign(f.defaults, n)),
            (f.mediaElement = o.default.createElement(n.fakeNodeName)),
            (f.mediaElement.options = n);
          var p = t,
            m = !1;
          if (
            ('string' == typeof t
              ? (f.mediaElement.originalNode = o.default.getElementById(t))
              : ((f.mediaElement.originalNode = t), (p = t.id)),
            (p = p || 'mejs_' + Math.random().toString().slice(2)),
            void 0 !== f.mediaElement.originalNode &&
              null !== f.mediaElement.originalNode &&
              f.mediaElement.appendChild)
          ) {
            f.mediaElement.originalNode.setAttribute('id', p + '_from_mejs');
            var h = f.mediaElement.originalNode.tagName.toLowerCase();
            ['video', 'audio'].indexOf(h) > -1 &&
              !f.mediaElement.originalNode.getAttribute('preload') &&
              f.mediaElement.originalNode.setAttribute('preload', 'none'),
              f.mediaElement.originalNode.parentNode.insertBefore(
                f.mediaElement,
                f.mediaElement.originalNode
              ),
              f.mediaElement.appendChild(f.mediaElement.originalNode);
          }
          (f.mediaElement.id = p),
            (f.mediaElement.renderers = {}),
            (f.mediaElement.renderer = null),
            (f.mediaElement.rendererName = null),
            (f.mediaElement.changeRenderer = function (e, t) {
              var n = c;
              if (
                void 0 !== n.mediaElement.renderer &&
                null !== n.mediaElement.renderer &&
                n.mediaElement.renderer.name === e
              )
                return (
                  n.mediaElement.renderer.pause(),
                  n.mediaElement.renderer.stop &&
                    n.mediaElement.renderer.stop(),
                  n.mediaElement.renderer.show(),
                  n.mediaElement.renderer.setSrc(t[0].src),
                  !0
                );
              void 0 !== n.mediaElement.renderer &&
                null !== n.mediaElement.renderer &&
                (n.mediaElement.renderer.pause(),
                n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(),
                n.mediaElement.renderer.hide());
              var i = n.mediaElement.renderers[e],
                o = null;
              if (void 0 !== i && null !== i)
                return (
                  i.show(),
                  i.setSrc(t[0].src),
                  (n.mediaElement.renderer = i),
                  (n.mediaElement.rendererName = e),
                  !0
                );
              for (
                var a = n.mediaElement.options.renderers.length
                    ? n.mediaElement.options.renderers
                    : l.renderer.order,
                  r = 0,
                  s = a.length;
                r < s;
                r++
              ) {
                var d = a[r];
                if (d === e) {
                  o = l.renderer.renderers[d];
                  var u = Object.assign(o.options, n.mediaElement.options);
                  return (
                    ((i = o.create(n.mediaElement, u, t)).name = e),
                    (n.mediaElement.renderers[o.name] = i),
                    (n.mediaElement.renderer = i),
                    (n.mediaElement.rendererName = e),
                    i.show(),
                    !0
                  );
                }
              }
              return !1;
            }),
            (f.mediaElement.setSize = function (e, t) {
              void 0 !== f.mediaElement.renderer &&
                null !== f.mediaElement.renderer &&
                f.mediaElement.renderer.setSize(e, t);
            }),
            (f.mediaElement.createErrorMessage = function (e) {
              e = Array.isArray(e) ? e : [];
              var t = o.default.createElement('div');
              (t.className = 'me_cannotplay'),
                (t.style.width = '100%'),
                (t.style.height = '100%');
              var n = f.mediaElement.options.customError;
              if (!n) {
                var i = f.mediaElement.originalNode.getAttribute('poster');
                i &&
                  (n +=
                    '<img src="' +
                    i +
                    '" width="100%" height="100%" alt="' +
                    a.default.i18n.t('mejs.download-file') +
                    '">');
                for (var r = 0, s = e.length; r < s; r++) {
                  var l = e[r];
                  n +=
                    '<a href="' +
                    l.src +
                    '" data-type="' +
                    l.type +
                    '"><span>' +
                    a.default.i18n.t('mejs.download-file') +
                    ': ' +
                    l.src +
                    '</span></a>';
                }
              }
              (t.innerHTML = n),
                f.mediaElement.originalNode.parentNode.insertBefore(
                  t,
                  f.mediaElement.originalNode
                ),
                (f.mediaElement.originalNode.style.display = 'none'),
                (m = !0);
            });
          var v = a.default.html5media.properties,
            y = a.default.html5media.methods,
            g = function (e, t, n, i) {
              var o = e[t];
              Object.defineProperty(e, t, {
                get: function () {
                  return n.apply(e, [o]);
                },
                set: function (t) {
                  return (o = i.apply(e, [t]));
                },
              });
            },
            b = function (e) {
              if ('src' !== e) {
                var t = '' + e.substring(0, 1).toUpperCase() + e.substring(1),
                  n = function () {
                    return void 0 !== f.mediaElement.renderer &&
                      null !== f.mediaElement.renderer
                      ? f.mediaElement.renderer['get' + t]()
                      : null;
                  },
                  i = function (e) {
                    void 0 !== f.mediaElement.renderer &&
                      null !== f.mediaElement.renderer &&
                      f.mediaElement.renderer['set' + t](e);
                  };
                g(f.mediaElement, e, n, i),
                  (f.mediaElement['get' + t] = n),
                  (f.mediaElement['set' + t] = i);
              }
            },
            E = function () {
              return void 0 !== f.mediaElement.renderer &&
                null !== f.mediaElement.renderer
                ? f.mediaElement.renderer.getSrc()
                : null;
            },
            S = function (e) {
              var t = [];
              if ('string' == typeof e)
                t.push({ src: e, type: e ? (0, s.getTypeFromFile)(e) : '' });
              else
                for (var n = 0, i = e.length; n < i; n++) {
                  var o = (0, s.absolutizeUrl)(e[n].src),
                    a = e[n].type;
                  t.push({
                    src: o,
                    type:
                      ('' !== a && null !== a && void 0 !== a) || !o
                        ? a
                        : (0, s.getTypeFromFile)(o),
                  });
                }
              var d = l.renderer.select(
                  t,
                  f.mediaElement.options.renderers.length
                    ? f.mediaElement.options.renderers
                    : []
                ),
                u = void 0;
              if (
                (f.mediaElement.paused ||
                  (f.mediaElement.pause(),
                  (u = (0, r.createEvent)('pause', f.mediaElement)),
                  f.mediaElement.dispatchEvent(u)),
                f.mediaElement.originalNode.setAttribute('src', t[0].src || ''),
                f.mediaElement.querySelector('.me_cannotplay') &&
                  f.mediaElement.querySelector('.me_cannotplay').remove(),
                null === d)
              )
                return (
                  f.mediaElement.createErrorMessage(t),
                  ((u = (0, r.createEvent)('error', f.mediaElement)).message =
                    'No renderer found'),
                  void f.mediaElement.dispatchEvent(u)
                );
              f.mediaElement.changeRenderer(d.rendererName, t),
                (void 0 !== f.mediaElement.renderer &&
                  null !== f.mediaElement.renderer) ||
                  (((u = (0, r.createEvent)('error', f.mediaElement)).message =
                    'Error creating renderer'),
                  f.mediaElement.dispatchEvent(u),
                  f.mediaElement.createErrorMessage(t));
            },
            x = function (e) {
              f.mediaElement[e] = function () {
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                  n[i] = arguments[i];
                if (
                  void 0 !== f.mediaElement.renderer &&
                  null !== f.mediaElement.renderer &&
                  'function' == typeof f.mediaElement.renderer[e]
                )
                  try {
                    f.mediaElement.renderer[e](n);
                  } catch (e) {
                    f.mediaElement.createErrorMessage();
                  }
                return null;
              };
            };
          g(f.mediaElement, 'src', E, S),
            (f.mediaElement.getSrc = E),
            (f.mediaElement.setSrc = S);
          for (var w = 0, P = v.length; w < P; w++) b(v[w]);
          for (var T = 0, C = y.length; T < C; T++) x(y[T]);
          (f.mediaElement.events = {}),
            (f.mediaElement.addEventListener = function (e, t) {
              (f.mediaElement.events[e] = f.mediaElement.events[e] || []),
                f.mediaElement.events[e].push(t);
            }),
            (f.mediaElement.removeEventListener = function (e, t) {
              if (!e) return (f.mediaElement.events = {}), !0;
              var n = f.mediaElement.events[e];
              if (!n) return !0;
              if (!t) return (f.mediaElement.events[e] = []), !0;
              for (var i = 0; i < n.length; i++)
                if (n[i] === t)
                  return f.mediaElement.events[e].splice(i, 1), !0;
              return !1;
            }),
            (f.mediaElement.dispatchEvent = function (e) {
              var t = f.mediaElement.events[e.type];
              if (t) for (var n = 0; n < t.length; n++) t[n].apply(null, [e]);
            });
          var k = function (e, t) {
              if (
                a.default.html5media.mediaTypes.indexOf(t) > -1 &&
                'https:' === i.default.location.protocol &&
                d.IS_IOS &&
                !i.default.MSStream
              ) {
                var n = new XMLHttpRequest();
                (n.onreadystatechange = function () {
                  if (4 === this.readyState && 200 === this.status) {
                    var t = (
                      i.default.URL || i.default.webkitURL
                    ).createObjectURL(this.response);
                    return (
                      f.mediaElement.originalNode.setAttribute('src', t), t
                    );
                  }
                  return e;
                }),
                  n.open('GET', e),
                  (n.responseType = 'blob'),
                  n.send();
              }
              return e;
            },
            _ = void 0;
          if (null !== u) _ = u;
          else if (null !== f.mediaElement.originalNode)
            switch (
              ((_ = []), f.mediaElement.originalNode.nodeName.toLowerCase())
            ) {
              case 'iframe':
                _.push({
                  type: '',
                  src: f.mediaElement.originalNode.getAttribute('src'),
                });
                break;
              case 'audio':
              case 'video':
                var N = f.mediaElement.originalNode.childNodes.length,
                  A = f.mediaElement.originalNode.getAttribute('src');
                if (A) {
                  var L = f.mediaElement.originalNode,
                    F = (0, s.formatType)(A, L.getAttribute('type'));
                  _.push({ type: F, src: k(A, F) });
                }
                for (var j = 0; j < N; j++) {
                  var I = f.mediaElement.originalNode.childNodes[j];
                  if (
                    I.nodeType === Node.ELEMENT_NODE &&
                    'source' === I.tagName.toLowerCase()
                  ) {
                    var M = I.getAttribute('src'),
                      O = (0, s.formatType)(M, I.getAttribute('type'));
                    _.push({ type: O, src: k(M, O) });
                  }
                }
            }
          return (
            _.length && (f.mediaElement.src = _),
            f.mediaElement.options.success &&
              f.mediaElement.options.success(
                f.mediaElement,
                f.mediaElement.originalNode
              ),
            m &&
              f.mediaElement.options.error &&
              f.mediaElement.options.error(
                f.mediaElement,
                f.mediaElement.originalNode
              ),
            f.mediaElement
          );
        };
        (i.default.MediaElement = c), (n.default = c);
      },
      { 2: 2, 23: 23, 25: 25, 26: 26, 3: 3, 6: 6, 7: 7 },
    ],
    6: [
      function (e, t, n) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 });
        var i,
          o = e(3);
        var a = {
          version: '4.1.1',
          html5media: {
            properties: [
              'volume',
              'src',
              'currentTime',
              'muted',
              'duration',
              'paused',
              'ended',
              'buffered',
              'error',
              'networkState',
              'readyState',
              'seeking',
              'seekable',
              'currentSrc',
              'preload',
              'bufferedBytes',
              'bufferedTime',
              'initialTime',
              'startOffsetTime',
              'defaultPlaybackRate',
              'playbackRate',
              'played',
              'autoplay',
              'loop',
              'controls',
            ],
            readOnlyProperties: [
              'duration',
              'paused',
              'ended',
              'buffered',
              'error',
              'networkState',
              'readyState',
              'seeking',
              'seekable',
            ],
            methods: ['load', 'play', 'pause', 'canPlayType'],
            events: [
              'loadstart',
              'progress',
              'suspend',
              'abort',
              'error',
              'emptied',
              'stalled',
              'play',
              'pause',
              'loadedmetadata',
              'loadeddata',
              'waiting',
              'playing',
              'canplay',
              'canplaythrough',
              'seeking',
              'seeked',
              'timeupdate',
              'ended',
              'ratechange',
              'durationchange',
              'volumechange',
            ],
            mediaTypes: [
              'audio/mp3',
              'audio/ogg',
              'audio/oga',
              'audio/wav',
              'audio/x-wav',
              'audio/wave',
              'audio/x-pn-wav',
              'audio/mpeg',
              'audio/mp4',
              'video/mp4',
              'video/webm',
              'video/ogg',
              'video/ogv',
            ],
          },
        };
        (((i = o) && i.__esModule ? i : { default: i }).default.mejs = a),
          (n.default = a);
      },
      { 3: 3 },
    ],
    7: [
      function (e, t, n) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.renderer = void 0);
        var i,
          o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          a = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  'value' in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          r = e(6),
          s = (i = r) && i.__esModule ? i : { default: i };
        var l = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this.renderers = {}),
                (this.order = []);
            }
            return (
              a(e, [
                {
                  key: 'add',
                  value: function (e) {
                    if (void 0 === e.name)
                      throw new TypeError(
                        'renderer must contain at least `name` property'
                      );
                    (this.renderers[e.name] = e), this.order.push(e.name);
                  },
                },
                {
                  key: 'select',
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [],
                      n = t.length;
                    if (((t = t.length ? t : this.order), !n)) {
                      var i = [/^(html5|native)/i, /^flash/i, /iframe$/i],
                        o = function (e) {
                          for (var t = 0, n = i.length; t < n; t++)
                            if (i[t].test(e)) return t;
                          return i.length;
                        };
                      t.sort(function (e, t) {
                        return o(e) - o(t);
                      });
                    }
                    for (var a = 0, r = t.length; a < r; a++) {
                      var s = t[a],
                        l = this.renderers[s];
                      if (null !== l && void 0 !== l)
                        for (var d = 0, u = e.length; d < u; d++)
                          if (
                            'function' == typeof l.canPlayType &&
                            'string' == typeof e[d].type &&
                            l.canPlayType(e[d].type)
                          )
                            return { rendererName: l.name, src: e[d].src };
                    }
                    return null;
                  },
                },
                {
                  key: 'order',
                  set: function (e) {
                    if (!Array.isArray(e))
                      throw new TypeError('order must be an array of strings.');
                    this._order = e;
                  },
                  get: function () {
                    return this._order;
                  },
                },
                {
                  key: 'renderers',
                  set: function (e) {
                    if (
                      null !== e &&
                      'object' !== (void 0 === e ? 'undefined' : o(e))
                    )
                      throw new TypeError(
                        'renderers must be an array of objects.'
                      );
                    this._renderers = e;
                  },
                  get: function () {
                    return this._renderers;
                  },
                },
              ]),
              e
            );
          })(),
          d = (n.renderer = new l());
        s.default.Renderers = d;
      },
      { 6: 6 },
    ],
    8: [
      function (e, t, n) {
        'use strict';
        var i = c(e(3)),
          o = c(e(2)),
          a = c(e(4)),
          r = e(16),
          s = c(r),
          l = (function (e) {
            {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return (t.default = e), t;
            }
          })(e(23)),
          d = e(25),
          u = e(24);
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(r.config, {
          usePluginFullScreen: !0,
          fullscreenText: null,
        }),
          Object.assign(s.default.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            isPluginClickThroughCreated: !1,
            fullscreenMode: '',
            containerSizeTimeout: null,
            buildfullscreen: function (e) {
              if (e.isVideo) {
                (e.isInIframe =
                  i.default.location !== i.default.parent.location),
                  e.detectFullscreenMode();
                var t = this,
                  n = (0, d.isString)(t.options.fullscreenText)
                    ? t.options.fullscreenText
                    : a.default.t('mejs.fullscreen'),
                  r = o.default.createElement('div');
                if (
                  ((r.className =
                    t.options.classPrefix +
                    'button ' +
                    t.options.classPrefix +
                    'fullscreen-button'),
                  (r.innerHTML =
                    '<button type="button" aria-controls="' +
                    t.id +
                    '" title="' +
                    n +
                    '" aria-label="' +
                    n +
                    '" tabindex="0"></button>'),
                  t.addControlElement(r, 'fullscreen'),
                  r.addEventListener('click', function () {
                    (l.HAS_TRUE_NATIVE_FULLSCREEN && l.IS_FULLSCREEN) ||
                    e.isFullScreen
                      ? e.exitFullScreen()
                      : e.enterFullScreen();
                  }),
                  (e.fullscreenBtn = r),
                  t.globalBind('keydown', function (n) {
                    27 === (n.which || n.keyCode || 0) &&
                      ((l.HAS_TRUE_NATIVE_FULLSCREEN && l.IS_FULLSCREEN) ||
                        t.isFullScreen) &&
                      e.exitFullScreen();
                  }),
                  (t.normalHeight = 0),
                  (t.normalWidth = 0),
                  l.HAS_TRUE_NATIVE_FULLSCREEN)
                ) {
                  e.globalBind(l.FULLSCREEN_EVENT_NAME, function () {
                    e.isFullScreen &&
                      (l.isFullScreen()
                        ? ((e.isNativeFullScreen = !0), e.setControlsSize())
                        : ((e.isNativeFullScreen = !1), e.exitFullScreen()));
                  });
                }
              }
            },
            detectFullscreenMode: function () {
              var e =
                  null !== this.media.rendererName &&
                  /(native|html5)/i.test(this.media.rendererName),
                t = '';
              return (
                (t =
                  l.HAS_TRUE_NATIVE_FULLSCREEN && e
                    ? 'native-native'
                    : l.HAS_TRUE_NATIVE_FULLSCREEN && !e
                    ? 'plugin-native'
                    : this.usePluginFullScreen && l.SUPPORT_POINTER_EVENTS
                    ? 'plugin-click'
                    : 'fullwindow'),
                (this.fullscreenMode = t),
                t
              );
            },
            cleanfullscreen: function (e) {
              e.exitFullScreen();
            },
            enterFullScreen: function () {
              var e = this,
                t =
                  null !== e.media.rendererName &&
                  /(html5|native)/i.test(e.media.rendererName),
                n = getComputedStyle(e.container);
              if (l.IS_IOS && l.HAS_IOS_FULLSCREEN)
                'function' == typeof e.media.webkitEnterFullscreen
                  ? e.media.webkitEnterFullscreen()
                  : e.media.originalNode.webkitEnterFullscreen();
              else {
                if (
                  ((0, u.addClass)(
                    o.default.documentElement,
                    e.options.classPrefix + 'fullscreen'
                  ),
                  (0, u.addClass)(
                    e.container,
                    e.options.classPrefix + 'container-fullscreen'
                  ),
                  (e.normalHeight = parseFloat(n.height)),
                  (e.normalWidth = parseFloat(n.width)),
                  ('native-native' !== e.fullscreenMode &&
                    'plugin-native' !== e.fullscreenMode) ||
                    (l.requestFullScreen(e.container),
                    e.isInIframe &&
                      setTimeout(function t() {
                        if (e.isNativeFullScreen) {
                          var n =
                              i.default.innerWidth ||
                              o.default.documentElement.clientWidth ||
                              o.default.body.clientWidth,
                            a = screen.width;
                          Math.abs(a - n) > 0.002 * a
                            ? e.exitFullScreen()
                            : setTimeout(t, 500);
                        }
                      }, 1e3)),
                  (e.container.style.width = '100%'),
                  (e.container.style.height = '100%'),
                  (e.containerSizeTimeout = setTimeout(function () {
                    (e.container.style.width = '100%'),
                      (e.container.style.height = '100%'),
                      e.setControlsSize();
                  }, 500)),
                  t)
                )
                  (e.node.style.width = '100%'), (e.node.style.height = '100%');
                else
                  for (
                    var a = e.container.querySelectorAll(
                        'iframe, embed, object, video'
                      ),
                      r = a.length,
                      s = 0;
                    s < r;
                    s++
                  )
                    (a[s].style.width = '100%'), (a[s].style.height = '100%');
                e.options.setDimensions &&
                  'function' == typeof e.media.setSize &&
                  e.media.setSize(screen.width, screen.height);
                for (
                  var c = e.layers.childNodes, f = c.length, p = 0;
                  p < f;
                  p++
                )
                  (c[p].style.width = '100%'), (c[p].style.height = '100%');
                e.fullscreenBtn &&
                  ((0, u.removeClass)(
                    e.fullscreenBtn,
                    e.options.classPrefix + 'fullscreen'
                  ),
                  (0, u.addClass)(
                    e.fullscreenBtn,
                    e.options.classPrefix + 'unfullscreen'
                  )),
                  e.setControlsSize(),
                  (e.isFullScreen = !0);
                var m = Math.min(
                    screen.width / e.width,
                    screen.height / e.height
                  ),
                  h = e.container.querySelector(
                    '.' + e.options.classPrefix + 'captions-text'
                  );
                h &&
                  ((h.style.fontSize = 100 * m + '%'),
                  (h.style.lineHeight = 'normal'),
                  (e.container.querySelector(
                    '.' + e.options.classPrefix + 'captions-position'
                  ).style.bottom = '45px'));
                var v = (0, d.createEvent)('enteredfullscreen', e.container);
                e.container.dispatchEvent(v);
              }
            },
            exitFullScreen: function () {
              var e = this,
                t =
                  null !== e.media.rendererName &&
                  /(native|html5)/i.test(e.media.rendererName);
              if (
                (clearTimeout(e.containerSizeTimeout),
                l.HAS_TRUE_NATIVE_FULLSCREEN &&
                  (l.IS_FULLSCREEN || e.isFullScreen) &&
                  l.cancelFullScreen(),
                (0, u.removeClass)(
                  o.default.documentElement,
                  e.options.classPrefix + 'fullscreen'
                ),
                (0, u.removeClass)(
                  e.container,
                  e.options.classPrefix + 'container-fullscreen'
                ),
                e.options.setDimensions)
              ) {
                if (
                  ((e.container.style.width = e.normalWidth + 'px'),
                  (e.container.style.height = e.normalHeight + 'px'),
                  t)
                )
                  (e.node.style.width = e.normalWidth + 'px'),
                    (e.node.style.height = e.normalHeight + 'px');
                else
                  for (
                    var n = e.container.querySelectorAll(
                        'iframe, embed, object, video'
                      ),
                      i = n.length,
                      a = 0;
                    a < i;
                    a++
                  )
                    (n[a].style.width = e.normalWidth + 'px'),
                      (n[a].style.height = e.normalHeight + 'px');
                'function' == typeof e.media.setSize &&
                  e.media.setSize(e.normalWidth, e.normalHeight);
                for (
                  var r = e.layers.childNodes, s = r.length, c = 0;
                  c < s;
                  c++
                )
                  (r[c].style.width = e.normalWidth + 'px'),
                    (r[c].style.height = e.normalHeight + 'px');
              }
              e.fullscreenBtn &&
                ((0, u.removeClass)(
                  e.fullscreenBtn,
                  e.options.classPrefix + 'unfullscreen'
                ),
                (0, u.addClass)(
                  e.fullscreenBtn,
                  e.options.classPrefix + 'fullscreen'
                )),
                e.setControlsSize(),
                (e.isFullScreen = !1);
              var f = e.container.querySelector(
                '.' + e.options.classPrefix + 'captions-text'
              );
              f &&
                ((f.style.fontSize = ''),
                (f.style.lineHeight = ''),
                (e.container.querySelector(
                  '.' + e.options.classPrefix + 'captions-position'
                ).style.bottom = ''));
              var p = (0, d.createEvent)('exitedfullscreen', e.container);
              e.container.dispatchEvent(p);
            },
          });
      },
      { 16: 16, 2: 2, 23: 23, 24: 24, 25: 25, 3: 3, 4: 4 },
    ],
    9: [
      function (e, t, n) {
        'use strict';
        var i = d(e(2)),
          o = e(16),
          a = d(o),
          r = d(e(4)),
          s = e(25),
          l = e(24);
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, { playText: null, pauseText: null }),
          Object.assign(a.default.prototype, {
            buildplaypause: function (e, t, n, o) {
              var a = this,
                d = a.options,
                u = (0, s.isString)(d.playText)
                  ? d.playText
                  : r.default.t('mejs.play'),
                c = (0, s.isString)(d.pauseText)
                  ? d.pauseText
                  : r.default.t('mejs.pause'),
                f = i.default.createElement('div');
              (f.className =
                a.options.classPrefix +
                'button ' +
                a.options.classPrefix +
                'playpause-button ' +
                a.options.classPrefix +
                'play'),
                (f.innerHTML =
                  '<button type="button" aria-controls="' +
                  a.id +
                  '" title="' +
                  u +
                  '" aria-label="' +
                  c +
                  '" tabindex="0"></button>'),
                f.addEventListener('click', function () {
                  o.paused ? o.play() : o.pause();
                });
              var p = f.querySelector('button');
              function m(e) {
                'play' === e
                  ? ((0, l.removeClass)(f, a.options.classPrefix + 'play'),
                    (0, l.removeClass)(f, a.options.classPrefix + 'replay'),
                    (0, l.addClass)(f, a.options.classPrefix + 'pause'),
                    p.setAttribute('title', c),
                    p.setAttribute('aria-label', c))
                  : ((0, l.removeClass)(f, a.options.classPrefix + 'pause'),
                    (0, l.removeClass)(f, a.options.classPrefix + 'replay'),
                    (0, l.addClass)(f, a.options.classPrefix + 'play'),
                    p.setAttribute('title', u),
                    p.setAttribute('aria-label', u));
              }
              a.addControlElement(f, 'playpause'),
                m('pse'),
                o.addEventListener('loadedmetadata', function () {
                  -1 === o.rendererName.indexOf('flash') && m('pse');
                }),
                o.addEventListener('play', function () {
                  m('play');
                }),
                o.addEventListener('playing', function () {
                  m('play');
                }),
                o.addEventListener('pause', function () {
                  m('pse');
                }),
                o.addEventListener('ended', function () {
                  e.options.loop ||
                    ((0, l.removeClass)(f, a.options.classPrefix + 'pause'),
                    (0, l.removeClass)(f, a.options.classPrefix + 'play'),
                    (0, l.addClass)(f, a.options.classPrefix + 'replay'),
                    p.setAttribute('title', u),
                    p.setAttribute('aria-label', u));
                });
            },
          });
      },
      { 16: 16, 2: 2, 24: 24, 25: 25, 4: 4 },
    ],
    10: [
      function (e, t, n) {
        'use strict';
        var i = u(e(2)),
          o = e(16),
          a = u(o),
          r = u(e(4)),
          s = e(23),
          l = e(28),
          d = e(24);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, {
          enableProgressTooltip: !0,
          useSmoothHover: !0,
        }),
          Object.assign(a.default.prototype, {
            buildprogress: function (e, t, n, o) {
              var a = 0,
                u = !1,
                c = !1,
                f = this,
                p = e.options.autoRewind,
                m = e.options.enableProgressTooltip
                  ? '<span className="' +
                    f.options.classPrefix +
                    'time-float"><span className="' +
                    f.options.classPrefix +
                    'time-float-current">00:00</span><span className="' +
                    f.options.classPrefix +
                    'time-float-corner"></span></span>'
                  : '',
                h = i.default.createElement('div');
              (h.className = f.options.classPrefix + 'time-rail'),
                (h.innerHTML =
                  '<span className="' +
                  f.options.classPrefix +
                  'time-total ' +
                  f.options.classPrefix +
                  'time-slider"><span className="' +
                  f.options.classPrefix +
                  'time-buffering"></span><span className="' +
                  f.options.classPrefix +
                  'time-loaded"></span><span className="' +
                  f.options.classPrefix +
                  'time-current"></span><span className="' +
                  f.options.classPrefix +
                  'time-hovered no-hover"></span><span className="' +
                  f.options.classPrefix +
                  'time-handle"><span className="' +
                  f.options.classPrefix +
                  'time-handle-content"></span></span>' +
                  m +
                  '</span>'),
                f.addControlElement(h, 'progress'),
                (t.querySelector(
                  '.' + f.options.classPrefix + 'time-buffering'
                ).style.display = 'none'),
                (f.rail = t.querySelector(
                  '.' + f.options.classPrefix + 'time-rail'
                )),
                (f.total = t.querySelector(
                  '.' + f.options.classPrefix + 'time-total'
                )),
                (f.loaded = t.querySelector(
                  '.' + f.options.classPrefix + 'time-loaded'
                )),
                (f.current = t.querySelector(
                  '.' + f.options.classPrefix + 'time-current'
                )),
                (f.handle = t.querySelector(
                  '.' + f.options.classPrefix + 'time-handle'
                )),
                (f.timefloat = t.querySelector(
                  '.' + f.options.classPrefix + 'time-float'
                )),
                (f.timefloatcurrent = t.querySelector(
                  '.' + f.options.classPrefix + 'time-float-current'
                )),
                (f.slider = t.querySelector(
                  '.' + f.options.classPrefix + 'time-slider'
                )),
                (f.hovered = t.querySelector(
                  '.' + f.options.classPrefix + 'time-hovered'
                )),
                (f.newTime = 0),
                (f.forcedHandlePause = !1),
                (f.setTransformStyle = function (e, t) {
                  (e.style.transform = t),
                    (e.style.webkitTransform = t),
                    (e.style.MozTransform = t),
                    (e.style.msTransform = t),
                    (e.style.OTransform = t);
                });
              var v = function (t) {
                  var n = getComputedStyle(f.total),
                    i = (0, d.offset)(f.total),
                    a = parseFloat(n.width),
                    r =
                      void 0 !== n.webkitTransform
                        ? 'webkitTransform'
                        : void 0 !== n.mozTransform
                        ? 'mozTransform '
                        : void 0 !== n.oTransform
                        ? 'oTransform'
                        : void 0 !== n.msTransform
                        ? 'msTransform'
                        : 'transform',
                    c =
                      'WebKitCSSMatrix' in window
                        ? 'WebKitCSSMatrix'
                        : 'MSCSSMatrix' in window
                        ? 'MSCSSMatrix'
                        : 'CSSMatrix' in window
                        ? 'CSSMatrix'
                        : void 0,
                    p = 0,
                    m = 0,
                    h = void 0;
                  if (
                    ((h =
                      t.originalEvent && t.originalEvent.changedTouches
                        ? t.originalEvent.changedTouches[0].pageX
                        : t.changedTouches
                        ? t.changedTouches[0].pageX
                        : t.pageX),
                    o.duration &&
                      (h < i.left
                        ? (h = i.left)
                        : h > a + i.left && (h = a + i.left),
                      (p = (m = h - i.left) / a),
                      (f.newTime = p <= 0.02 ? 0 : p * o.duration),
                      u &&
                        null !== o.currentTime &&
                        f.newTime.toFixed(4) !== o.currentTime.toFixed(4) &&
                        (f.setCurrentRailHandle(f.newTime),
                        f.updateCurrent(f.newTime)),
                      !s.IS_IOS && !s.IS_ANDROID && f.timefloat))
                  ) {
                    if (
                      (m < 0 && (m = 0),
                      f.options.useSmoothHover &&
                        null !== c &&
                        void 0 !== window[c])
                    ) {
                      var v = new window[c](getComputedStyle(f.handle)[r]).m41,
                        y =
                          m / parseFloat(getComputedStyle(f.total).width) -
                          v / parseFloat(getComputedStyle(f.total).width);
                      (f.hovered.style.left = v + 'px'),
                        f.setTransformStyle(f.hovered, 'scaleX(' + y + ')'),
                        f.hovered.setAttribute('pos', m),
                        y >= 0
                          ? (0, d.removeClass)(f.hovered, 'negative')
                          : (0, d.addClass)(f.hovered, 'negative');
                    }
                    (f.timefloat.style.left = m + 'px'),
                      (f.timefloatcurrent.innerHTML = (0, l.secondsToTimeCode)(
                        f.newTime,
                        e.options.alwaysShowHours,
                        e.options.showTimecodeFrameCount,
                        e.options.framesPerSecond,
                        e.options.secondsDecimalLength
                      )),
                      (f.timefloat.style.display = 'block');
                  }
                },
                y = function () {
                  new Date() - a >= 1e3 && o.play();
                };
              f.slider.addEventListener('focus', function () {
                e.options.autoRewind = !1;
              }),
                f.slider.addEventListener('blur', function () {
                  e.options.autoRewind = p;
                }),
                f.slider.addEventListener('keydown', function (t) {
                  if (
                    (new Date() - a >= 1e3 && (c = o.paused),
                    f.options.keyActions.length)
                  ) {
                    var n = t.which || t.keyCode || 0,
                      i = o.duration,
                      r = e.options.defaultSeekForwardInterval(o),
                      l = e.options.defaultSeekBackwardInterval(o),
                      d = o.currentTime;
                    switch (n) {
                      case 37:
                      case 40:
                        o.duration !== 1 / 0 && (d -= l);
                        break;
                      case 39:
                      case 38:
                        o.duration !== 1 / 0 && (d += r);
                        break;
                      case 36:
                        d = 0;
                        break;
                      case 35:
                        d = i;
                        break;
                      case 32:
                        return void (
                          s.IS_FIREFOX || (o.paused ? o.play() : o.pause())
                        );
                      case 13:
                        return void (o.paused ? o.play() : o.pause());
                      default:
                        return;
                    }
                    (d = d < 0 ? 0 : d >= i ? i : Math.floor(d)),
                      (a = new Date()),
                      c || o.pause(),
                      d < o.duration && !c && setTimeout(y, 1100),
                      o.setCurrentTime(d),
                      t.preventDefault(),
                      t.stopPropagation();
                  }
                });
              var g = ['mousedown', 'touchstart'];
              f.slider.addEventListener('dragstart', function () {
                return !1;
              });
              for (var b = 0, E = g.length; b < E; b++)
                f.slider.addEventListener(g[b], function (t) {
                  if (
                    ((f.forcedHandlePause = !1),
                    o.duration !== 1 / 0 && (1 === t.which || 0 === t.which))
                  ) {
                    o.paused || (f.media.pause(), (f.forcedHandlePause = !0)),
                      (u = !0),
                      v(t);
                    for (
                      var n = ['mouseup', 'touchend'], i = 0, a = n.length;
                      i < a;
                      i++
                    )
                      f.container.addEventListener(n[i], function (e) {
                        var t = e.target;
                        (t === f.slider ||
                          t.closest(
                            '.' + f.options.classPrefix + 'time-slider'
                          )) &&
                          v(e);
                      });
                    f.globalBind('mouseup.dur touchend.dur', function () {
                      u &&
                        null !== o.currentTime &&
                        f.newTime.toFixed(4) !== o.currentTime.toFixed(4) &&
                        (o.setCurrentTime(f.newTime),
                        e.setCurrentRail(),
                        f.updateCurrent(f.newTime)),
                        f.forcedHandlePause && f.media.play(),
                        (f.forcedHandlePause = !1),
                        (u = !1),
                        f.timefloat && (f.timefloat.style.display = 'none'),
                        f.globalUnbind(
                          'mousemove.dur touchmove.dur mouseup.dur touchend.dur'
                        );
                    });
                  }
                });
              f.slider.addEventListener('mouseenter', function (e) {
                e.target === f.slider &&
                  o.duration !== 1 / 0 &&
                  (f.container.addEventListener('mousemove', function (e) {
                    var t = e.target;
                    (t === f.slider ||
                      t.closest('.' + f.options.classPrefix + 'time-slider')) &&
                      v(e);
                  }),
                  !f.timefloat ||
                    s.IS_IOS ||
                    s.IS_ANDROID ||
                    (f.timefloat.style.display = 'block'),
                  f.hovered &&
                    !s.IS_IOS &&
                    !s.IS_ANDROID &&
                    f.options.useSmoothHover &&
                    (0, d.removeClass)(f.hovered, 'no-hover'));
              }),
                f.slider.addEventListener('mouseleave', function () {
                  o.duration !== 1 / 0 &&
                    (u ||
                      (f.globalUnbind('mousemove.dur'),
                      f.timefloat && (f.timefloat.style.display = 'none'),
                      f.hovered &&
                        f.options.useSmoothHover &&
                        (0, d.addClass)(f.hovered, 'no-hover')));
                }),
                o.addEventListener('progress', function (n) {
                  var a = t.querySelector(
                    '.' + f.options.classPrefix + 'broadcast'
                  );
                  if (o.duration !== 1 / 0)
                    a && ((f.slider.style.display = ''), a.remove()),
                      e.setProgressRail(n),
                      f.forcedHandlePause || e.setCurrentRail(n);
                  else if (!a) {
                    var s = i.default.createElement('span');
                    (s.className = f.options.classPrefix + 'broadcast'),
                      (s.innerText = r.default.t('mejs.live-broadcast')),
                      (f.slider.style.display = 'none');
                  }
                }),
                o.addEventListener('timeupdate', function (n) {
                  var a,
                    s,
                    d,
                    u,
                    c = t.querySelector(
                      '.' + f.options.classPrefix + 'broadcast'
                    );
                  if (o.duration !== 1 / 0)
                    c && ((f.slider.style.display = ''), c.remove()),
                      e.setProgressRail(n),
                      f.forcedHandlePause || e.setCurrentRail(n),
                      (a = o.currentTime),
                      (s = r.default.t('mejs.time-slider')),
                      (d = (0, l.secondsToTimeCode)(
                        a,
                        e.options.alwaysShowHours,
                        e.options.showTimecodeFrameCount,
                        e.options.framesPerSecond,
                        e.options.secondsDecimalLength
                      )),
                      (u = o.duration),
                      f.slider.setAttribute('role', 'slider'),
                      (f.slider.tabIndex = 0),
                      o.paused
                        ? (f.slider.setAttribute('aria-label', s),
                          f.slider.setAttribute('aria-valuemin', 0),
                          f.slider.setAttribute('aria-valuemax', u),
                          f.slider.setAttribute('aria-valuenow', a),
                          f.slider.setAttribute('aria-valuetext', d))
                        : (f.slider.removeAttribute('aria-label'),
                          f.slider.removeAttribute('aria-valuemin'),
                          f.slider.removeAttribute('aria-valuemax'),
                          f.slider.removeAttribute('aria-valuenow'),
                          f.slider.removeAttribute('aria-valuetext'));
                  else if (!c) {
                    var p = i.default.createElement('span');
                    (p.className = f.options.classPrefix + 'broadcast'),
                      (p.innerText = r.default.t('mejs.live-broadcast')),
                      t
                        .querySelector(
                          '.' + f.options.classPrefix + 'time-rail'
                        )
                        .appendChild(p),
                      (f.slider.style.display = 'none');
                  }
                }),
                f.container.addEventListener('controlsresize', function (t) {
                  o.duration !== 1 / 0 &&
                    (e.setProgressRail(t),
                    f.forcedHandlePause || e.setCurrentRail(t));
                });
            },
            setProgressRail: function (e) {
              var t = this,
                n = void 0 !== e ? e.target : t.media,
                i = null;
              n &&
              n.buffered &&
              n.buffered.length > 0 &&
              n.buffered.end &&
              n.duration
                ? (i = n.buffered.end(n.buffered.length - 1) / n.duration)
                : n &&
                  void 0 !== n.bytesTotal &&
                  n.bytesTotal > 0 &&
                  void 0 !== n.bufferedBytes
                ? (i = n.bufferedBytes / n.bytesTotal)
                : e &&
                  e.lengthComputable &&
                  0 !== e.total &&
                  (i = e.loaded / e.total),
                null !== i &&
                  ((i = Math.min(1, Math.max(0, i))),
                  t.loaded &&
                    t.total &&
                    t.setTransformStyle(t.loaded, 'scaleX(' + i + ')'));
            },
            setCurrentRailHandle: function (e) {
              this.setCurrentRailMain(this, e);
            },
            setCurrentRail: function () {
              this.setCurrentRailMain(this);
            },
            setCurrentRailMain: function (e, t) {
              if (void 0 !== e.media.currentTime && e.media.duration) {
                var n = void 0 === t ? e.media.currentTime : t;
                if (e.total && e.handle) {
                  var i = parseFloat(getComputedStyle(e.total).width),
                    o = Math.round((i * n) / e.media.duration),
                    a = o - Math.round(e.handle.offsetWidth / 2);
                  if (
                    ((a = a < 0 ? 0 : a),
                    e.setTransformStyle(e.current, 'scaleX(' + o / i + ')'),
                    e.setTransformStyle(e.handle, 'translateX(' + a + 'px)'),
                    e.options.useSmoothHover &&
                      !(0, d.hasClass)(e.hovered, 'no-hover'))
                  ) {
                    var r = parseInt(e.hovered.getAttribute('pos')),
                      s = (r = isNaN(r) ? 0 : r) / i - a / i;
                    (e.hovered.style.left = a + 'px'),
                      e.setTransformStyle(e.hovered, 'scaleX(' + s + ')'),
                      s >= 0
                        ? (0, d.removeClass)(e.hovered, 'negative')
                        : (0, d.addClass)(e.hovered, 'negative');
                  }
                }
              }
            },
          });
      },
      { 16: 16, 2: 2, 23: 23, 24: 24, 28: 28, 4: 4 },
    ],
    11: [
      function (e, t, n) {
        'use strict';
        var i = l(e(2)),
          o = e(16),
          a = l(o),
          r = e(28),
          s = e(24);
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, {
          duration: 0,
          timeAndDurationSeparator: '<span> | </span>',
        }),
          Object.assign(a.default.prototype, {
            buildcurrent: function (e, t, n, o) {
              var a = this,
                s = i.default.createElement('div');
              (s.className = a.options.classPrefix + 'time'),
                s.setAttribute('role', 'timer'),
                s.setAttribute('aria-live', 'off'),
                (s.innerHTML =
                  '<span className="' +
                  a.options.classPrefix +
                  'currenttime">' +
                  (0, r.secondsToTimeCode)(
                    0,
                    e.options.alwaysShowHours,
                    e.options.showTimecodeFrameCount,
                    e.options.framesPerSecond,
                    e.options.secondsDecimalLength
                  ) +
                  '</span>'),
                a.addControlElement(s, 'current'),
                o.addEventListener('timeupdate', function () {
                  a.controlsAreVisible && e.updateCurrent();
                });
            },
            buildduration: function (e, t, n, o) {
              var a = this;
              if (
                t.lastChild.querySelector(
                  '.' + a.options.classPrefix + 'currenttime'
                )
              )
                t.querySelector(
                  '.' + a.options.classPrefix + 'time'
                ).innerHTML +=
                  a.options.timeAndDurationSeparator +
                  '<span className="' +
                  a.options.classPrefix +
                  'duration">' +
                  (0, r.secondsToTimeCode)(
                    a.options.duration,
                    a.options.alwaysShowHours,
                    a.options.showTimecodeFrameCount,
                    a.options.framesPerSecond,
                    a.options.secondsDecimalLength
                  ) +
                  '</span>';
              else {
                t.querySelector('.' + a.options.classPrefix + 'currenttime') &&
                  (0, s.addClass)(
                    t.querySelector('.' + a.options.classPrefix + 'currenttime')
                      .parentNode,
                    a.options.classPrefix + 'currenttime-container'
                  );
                var l = i.default.createElement('div');
                (l.className =
                  a.options.classPrefix +
                  'time ' +
                  a.options.classPrefix +
                  'duration-container'),
                  (l.innerHTML =
                    '<span className="' +
                    a.options.classPrefix +
                    'duration">' +
                    (0, r.secondsToTimeCode)(
                      a.options.duration,
                      a.options.alwaysShowHours,
                      a.options.showTimecodeFrameCount,
                      a.options.framesPerSecond,
                      a.options.secondsDecimalLength
                    ) +
                    '</span>'),
                  a.addControlElement(l, 'duration');
              }
              o.addEventListener('timeupdate', function () {
                a.controlsAreVisible && e.updateDuration();
              });
            },
            updateCurrent: function () {
              var e = this,
                t = e.media.currentTime;
              isNaN(t) && (t = 0),
                e.controls.querySelector(
                  '.' + e.options.classPrefix + 'currenttime'
                ) &&
                  (e.controls.querySelector(
                    '.' + e.options.classPrefix + 'currenttime'
                  ).innerText = (0, r.secondsToTimeCode)(
                    t,
                    e.options.alwaysShowHours,
                    e.options.showTimecodeFrameCount,
                    e.options.framesPerSecond,
                    e.options.secondsDecimalLength
                  ));
            },
            updateDuration: function () {
              var e = this,
                t = e.media.duration;
              (isNaN(t) || t === 1 / 0 || t < 0) &&
                (e.media.duration = e.options.duration = t = 0),
                e.options.duration > 0 && (t = e.options.duration);
              var n = (0, r.secondsToTimeCode)(
                t,
                e.options.alwaysShowHours,
                e.options.showTimecodeFrameCount,
                e.options.framesPerSecond,
                e.options.secondsDecimalLength
              );
              n.length > 5 &&
                (0, s.toggleClass)(
                  e.container,
                  e.options.classPrefix + 'long-video'
                ),
                e.controls.querySelector(
                  '.' + e.options.classPrefix + 'duration'
                ) &&
                  t > 0 &&
                  (e.controls.querySelector(
                    '.' + e.options.classPrefix + 'duration'
                  ).innerHTML = n);
            },
          });
      },
      { 16: 16, 2: 2, 24: 24, 28: 28 },
    ],
    12: [
      function (e, t, n) {
        'use strict';
        var i = c(e(2)),
          o = c(e(6)),
          a = c(e(4)),
          r = e(16),
          s = c(r),
          l = e(28),
          d = e(25),
          u = e(24);
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(r.config, {
          startLanguage: '',
          tracksText: null,
          chaptersText: null,
          tracksAriaLive: !1,
          hideCaptionsButtonWhenEmpty: !0,
          toggleCaptionsButtonWhenOnlyOne: !1,
          slidesSelector: '',
        }),
          Object.assign(s.default.prototype, {
            hasChapters: !1,
            buildtracks: function (e, t, n, o) {
              if (
                e.tracks.length ||
                (e.trackFiles && 0 !== !e.trackFiles.length)
              ) {
                var r = this,
                  s = r.options.tracksAriaLive
                    ? ' role="log" aria-live="assertive" aria-atomic="false"'
                    : '',
                  l = (0, d.isString)(r.options.tracksText)
                    ? r.options.tracksText
                    : a.default.t('mejs.captions-subtitles'),
                  c = (0, d.isString)(r.options.chaptersText)
                    ? r.options.chaptersText
                    : a.default.t('mejs.captions-chapters'),
                  f =
                    null === e.trackFiles
                      ? e.tracks.length
                      : e.trackFiles.length;
                if (r.domNode.textTracks)
                  for (var p = r.domNode.textTracks.length - 1; p >= 0; p--)
                    r.domNode.textTracks[p].mode = 'hidden';
                r.cleartracks(e),
                  (e.captions = i.default.createElement('div')),
                  (e.captions.className =
                    r.options.classPrefix +
                    'captions-layer ' +
                    r.options.classPrefix +
                    'layer'),
                  (e.captions.innerHTML =
                    '<div className="' +
                    r.options.classPrefix +
                    'captions-position ' +
                    r.options.classPrefix +
                    'captions-position-hover"' +
                    s +
                    '><span className="' +
                    r.options.classPrefix +
                    'captions-text"></span></div>'),
                  (e.captions.style.display = 'none'),
                  n.insertBefore(e.captions, n.firstChild),
                  (e.captionsText = e.captions.querySelector(
                    '.' + r.options.classPrefix + 'captions-text'
                  )),
                  (e.captionsButton = i.default.createElement('div')),
                  (e.captionsButton.className =
                    r.options.classPrefix +
                    'button ' +
                    r.options.classPrefix +
                    'captions-button'),
                  (e.captionsButton.innerHTML =
                    '<button type="button" aria-controls="' +
                    r.id +
                    '" title="' +
                    l +
                    '" aria-label="' +
                    l +
                    '" tabindex="0"></button><div className="' +
                    r.options.classPrefix +
                    'captions-selector ' +
                    r.options.classPrefix +
                    'offscreen"><ul className="' +
                    r.options.classPrefix +
                    'captions-selector-list"><li className="' +
                    r.options.classPrefix +
                    'captions-selector-list-item"><input type="radio" className="' +
                    r.options.classPrefix +
                    'captions-selector-input" name="' +
                    e.id +
                    '_captions" id="' +
                    e.id +
                    '_captions_none" value="none" checked disabled><label className="' +
                    r.options.classPrefix +
                    'captions-selector-label ' +
                    r.options.classPrefix +
                    'captions-selected" for="' +
                    e.id +
                    '_captions_none">' +
                    a.default.t('mejs.none') +
                    '</label></li></ul></div>'),
                  r.addControlElement(e.captionsButton, 'tracks'),
                  (e.captionsButton.querySelector(
                    '.' + r.options.classPrefix + 'captions-selector-input'
                  ).disabled = !1),
                  (e.chaptersButton = i.default.createElement('div')),
                  (e.chaptersButton.className =
                    r.options.classPrefix +
                    'button ' +
                    r.options.classPrefix +
                    'chapters-button'),
                  (e.chaptersButton.innerHTML =
                    '<button type="button" aria-controls="' +
                    r.id +
                    '" title="' +
                    c +
                    '" aria-label="' +
                    c +
                    '" tabindex="0"></button><div className="' +
                    r.options.classPrefix +
                    'chapters-selector ' +
                    r.options.classPrefix +
                    'offscreen"><ul className="' +
                    r.options.classPrefix +
                    'chapters-selector-list"></ul></div>');
                for (var m = 0, h = 0; h < f; h++) {
                  var v = e.tracks[h].kind;
                  'subtitles' === v || 'captions' === v
                    ? m++
                    : 'chapters' !== v ||
                      t.querySelector(
                        '.' + r.options.classPrefix + 'chapter-selector'
                      ) ||
                      e.captionsButton.parentNode.insertBefore(
                        e.chaptersButton,
                        e.captionsButton
                      );
                }
                (e.trackToLoad = -1),
                  (e.selectedTrack = null),
                  (e.isLoadingTrack = !1);
                for (var y = 0; y < f; y++) {
                  var g = e.tracks[y].kind;
                  ('subtitles' !== g && 'captions' !== g) ||
                    e.addTrackButton(
                      e.tracks[y].trackId,
                      e.tracks[y].srclang,
                      e.tracks[y].label
                    );
                }
                e.loadNextTrack();
                var b = ['mouseenter', 'focusin'],
                  E = ['mouseleave', 'focusout'];
                if (r.options.toggleCaptionsButtonWhenOnlyOne && 1 === m)
                  e.captionsButton.addEventListener('click', function () {
                    var t = 'none';
                    null === e.selectedTrack && (t = e.tracks[0].trackId),
                      e.setTrack(t);
                  });
                else {
                  for (
                    var S = e.captionsButton.querySelectorAll(
                        '.' + r.options.classPrefix + 'captions-selector-label'
                      ),
                      x =
                        e.captionsButton.querySelectorAll('input[type=radio]'),
                      w = 0,
                      P = b.length;
                    w < P;
                    w++
                  )
                    e.captionsButton.addEventListener(b[w], function () {
                      (0,
                      u.removeClass)(this.querySelector('.' + r.options.classPrefix + 'captions-selector'), r.options.classPrefix + 'offscreen');
                    });
                  for (var T = 0, C = E.length; T < C; T++)
                    e.captionsButton.addEventListener(E[T], function () {
                      (0,
                      u.addClass)(this.querySelector('.' + r.options.classPrefix + 'captions-selector'), r.options.classPrefix + 'offscreen');
                    });
                  for (var k = 0, _ = x.length; k < _; k++)
                    x[k].addEventListener('click', function () {
                      e.setTrack(this.value);
                    });
                  for (var N = 0, A = S.length; N < A; N++)
                    S[N].addEventListener('click', function () {
                      var e = (0, u.siblings)(this, function (e) {
                          return 'INPUT' === e.tagName;
                        })[0],
                        t = (0, d.createEvent)('click', e);
                      e.dispatchEvent(t);
                    });
                  e.captionsButton.addEventListener('keydown', function (e) {
                    e.stopPropagation();
                  });
                }
                for (var L = 0, F = b.length; L < F; L++)
                  e.chaptersButton.addEventListener(b[L], function () {
                    this.querySelector(
                      '.' + r.options.classPrefix + 'chapters-selector-list'
                    ).childNodes.length &&
                      (0, u.removeClass)(
                        this.querySelector(
                          '.' + r.options.classPrefix + 'chapters-selector'
                        ),
                        r.options.classPrefix + 'offscreen'
                      );
                  });
                for (var j = 0, I = E.length; j < I; j++)
                  e.chaptersButton.addEventListener(E[j], function () {
                    (0,
                    u.addClass)(this.querySelector('.' + r.options.classPrefix + 'chapters-selector'), r.options.classPrefix + 'offscreen');
                  });
                e.chaptersButton.addEventListener('keydown', function (e) {
                  e.stopPropagation();
                }),
                  e.options.alwaysShowControls
                    ? (0, u.addClass)(
                        e.container.querySelector(
                          '.' + r.options.classPrefix + 'captions-position'
                        ),
                        r.options.classPrefix + 'captions-position-hover'
                      )
                    : (e.container.addEventListener(
                        'controlsshown',
                        function () {
                          (0, u.addClass)(
                            e.container.querySelector(
                              '.' + r.options.classPrefix + 'captions-position'
                            ),
                            r.options.classPrefix + 'captions-position-hover'
                          );
                        }
                      ),
                      e.container.addEventListener(
                        'controlshidden',
                        function () {
                          o.paused ||
                            (0, u.removeClass)(
                              e.container.querySelector(
                                '.' +
                                  r.options.classPrefix +
                                  'captions-position'
                              ),
                              r.options.classPrefix + 'captions-position-hover'
                            );
                        }
                      )),
                  o.addEventListener('timeupdate', function () {
                    e.displayCaptions();
                  }),
                  '' !== e.options.slidesSelector &&
                    ((e.slidesContainer = i.default.querySelectorAll(
                      e.options.slidesSelector
                    )),
                    o.addEventListener('timeupdate', function () {
                      e.displaySlides();
                    }));
              }
            },
            cleartracks: function (e) {
              e &&
                (e.captions && e.captions.remove(),
                e.chapters && e.chapters.remove(),
                e.captionsText && e.captionsText.remove(),
                e.captionsButton && e.captionsButton.remove(),
                e.chaptersButton && e.chaptersButton.remove());
            },
            rebuildtracks: function () {
              var e = this;
              e.findTracks(), e.buildtracks(e, e.controls, e.layers, e.media);
            },
            findTracks: function () {
              var e = this,
                t =
                  null === e.trackFiles
                    ? e.node.querySelectorAll('track')
                    : e.trackFiles,
                n = t.length;
              e.tracks = [];
              for (var i = 0; i < n; i++) {
                var o = t[i],
                  a = o.getAttribute('srclang').toLowerCase() || '',
                  r =
                    e.id +
                    '_track_' +
                    i +
                    '_' +
                    o.getAttribute('kind') +
                    '_' +
                    a;
                e.tracks.push({
                  trackId: r,
                  srclang: a,
                  src: o.getAttribute('src'),
                  kind: o.getAttribute('kind'),
                  label: o.getAttribute('label') || '',
                  entries: [],
                  isLoaded: !1,
                });
              }
            },
            setTrack: function (e) {
              for (
                var t = this,
                  n = t.captionsButton.querySelectorAll('input[type="radio"]'),
                  i = t.captionsButton.querySelectorAll(
                    '.' + t.options.classPrefix + 'captions-selected'
                  ),
                  o = t.captionsButton.querySelector(
                    'input[value="' + e + '"]'
                  ),
                  a = 0,
                  r = n.length;
                a < r;
                a++
              )
                n[a].checked = !1;
              for (var s = 0, l = i.length; s < l; s++)
                (0, u.removeClass)(
                  i[s],
                  t.options.classPrefix + 'captions-selected'
                );
              o.checked = !0;
              for (
                var c = (0, u.siblings)(o, function (e) {
                    return (0,
                    u.hasClass)(e, t.options.classPrefix + 'captions-selector-label');
                  }),
                  f = 0,
                  p = c.length;
                f < p;
                f++
              )
                (0, u.addClass)(
                  c[f],
                  t.options.classPrefix + 'captions-selected'
                );
              if ('none' === e)
                (t.selectedTrack = null),
                  (0, u.removeClass)(
                    t.captionsButton,
                    t.options.classPrefix + 'captions-enabled'
                  );
              else
                for (var m = 0, h = t.tracks.length; m < h; m++) {
                  var v = t.tracks[m];
                  if (v.trackId === e) {
                    null === t.selectedTrack &&
                      (0, u.addClass)(
                        t.captionsButton,
                        t.options.classPrefix + 'captions-enabled'
                      ),
                      (t.selectedTrack = v),
                      t.captions.setAttribute('lang', t.selectedTrack.srclang),
                      t.displayCaptions();
                    break;
                  }
                }
              var y = (0, d.createEvent)('captionschange', t.media);
              (y.detail.caption = t.selectedTrack), t.media.dispatchEvent(y);
            },
            loadNextTrack: function () {
              var e = this;
              e.trackToLoad++,
                e.trackToLoad < e.tracks.length
                  ? ((e.isLoadingTrack = !0), e.loadTrack(e.trackToLoad))
                  : ((e.isLoadingTrack = !1), e.checkForTracks());
            },
            loadTrack: function (e) {
              var t = this,
                n = t.tracks[e];
              void 0 === n ||
                (void 0 === n.src && '' === n.src) ||
                (0, u.ajax)(
                  n.src,
                  'text',
                  function (e) {
                    (n.entries =
                      'string' == typeof e && /<tt\s+xml/gi.exec(e)
                        ? o.default.TrackFormatParser.dfxp.parse(e)
                        : o.default.TrackFormatParser.webvtt.parse(e)),
                      (n.isLoaded = !0),
                      t.enableTrackButton(n),
                      t.loadNextTrack(),
                      'slides' === n.kind
                        ? t.setupSlides(n)
                        : 'chapters' !== n.kind ||
                          t.hasChapters ||
                          (t.drawChapters(n), (t.hasChapters = !0));
                  },
                  function () {
                    t.removeTrackButton(n.trackId), t.loadNextTrack();
                  }
                );
            },
            enableTrackButton: function (e) {
              var t = this,
                n = e.srclang,
                r = i.default.getElementById('' + e.trackId);
              if (r) {
                var s = e.label;
                '' === s && (s = a.default.t(o.default.language.codes[n]) || n),
                  (r.disabled = !1);
                for (
                  var l = (0, u.siblings)(r, function (e) {
                      return (0,
                      u.hasClass)(e, t.options.classPrefix + 'captions-selector-label');
                    }),
                    c = 0,
                    f = l.length;
                  c < f;
                  c++
                )
                  l[c].innerHTML = s;
                if (t.options.startLanguage === n) {
                  r.checked = !0;
                  var p = (0, d.createEvent)('click', r);
                  r.dispatchEvent(p);
                }
              }
            },
            removeTrackButton: function (e) {
              var t = i.default.getElementById('' + e);
              if (t) {
                var n = t.closest('li');
                n && n.remove();
              }
            },
            addTrackButton: function (e, t, n) {
              var i = this;
              '' === n && (n = a.default.t(o.default.language.codes[t]) || t),
                (i.captionsButton.querySelector('ul').innerHTML +=
                  '<li className="' +
                  i.options.classPrefix +
                  'captions-selector-list-item"><input type="radio" className="' +
                  i.options.classPrefix +
                  'captions-selector-input" name="' +
                  i.id +
                  '_captions" id="' +
                  e +
                  '" value="' +
                  e +
                  '" disabled><label className="' +
                  i.options.classPrefix +
                  'captions-selector-label"for="' +
                  e +
                  '">' +
                  n +
                  ' (loading)</label></li>');
            },
            checkForTracks: function () {
              var e = this,
                t = !1;
              if (e.options.hideCaptionsButtonWhenEmpty) {
                for (var n = 0, i = e.tracks.length; n < i; n++) {
                  var o = e.tracks[n].kind;
                  if (
                    ('subtitles' === o || 'captions' === o) &&
                    e.tracks[n].isLoaded
                  ) {
                    t = !0;
                    break;
                  }
                }
                (e.captionsButton.style.display = t ? '' : 'none'),
                  e.setControlsSize();
              }
            },
            displayCaptions: function () {
              if (void 0 !== this.tracks) {
                var e = this,
                  t = e.selectedTrack;
                if (null !== t && t.isLoaded) {
                  var n = e.searchTrackPosition(t.entries, e.media.currentTime);
                  if (n > -1)
                    return (
                      (e.captionsText.innerHTML = (function (e) {
                        var t = i.default.createElement('div');
                        t.innerHTML = e;
                        for (
                          var n = t.getElementsByTagName('script'),
                            o = n.length;
                          o--;

                        )
                          n[o].remove();
                        for (
                          var a = t.getElementsByTagName('*'),
                            r = 0,
                            s = a.length;
                          r < s;
                          r++
                        )
                          for (
                            var l = a[r].attributes,
                              d = Array.prototype.slice.call(l),
                              u = 0,
                              c = d.length;
                            u < c;
                            u++
                          )
                            d[u].name.startsWith('on') ||
                            d[u].value.startsWith('javascript')
                              ? a[r].remove()
                              : 'style' === d[u].name &&
                                a[r].removeAttribute(d[u].name);
                        return t.innerHTML;
                      })(t.entries[n].text)),
                      (e.captionsText.className =
                        e.options.classPrefix +
                        'captions-text ' +
                        (t.entries[n].identifier || '')),
                      (e.captions.style.display = ''),
                      void (e.captions.style.height = '0px')
                    );
                  e.captions.style.display = 'none';
                } else e.captions.style.display = 'none';
              }
            },
            setupSlides: function (e) {
              (this.slides = e),
                (this.slides.entries.imgs = [this.slides.entries.length]),
                this.showSlide(0);
            },
            showSlide: function (e) {
              var t = this,
                n = this;
              if (void 0 !== n.tracks && void 0 !== n.slidesContainer) {
                var o = n.slides.entries[e].text,
                  a = n.slides.entries[e].imgs;
                if (void 0 === a || void 0 === a.fadeIn) {
                  var r = i.default.createElement('img');
                  (r.src = o),
                    r.addEventListener('load', function () {
                      var e = t,
                        i = (0, u.siblings)(e, function (e) {
                          return i(e);
                        });
                      (e.style.display = 'none'),
                        (n.slidesContainer.innerHTML += e.innerHTML),
                        (0, u.fadeIn)(n.slidesContainer.querySelector(r));
                      for (var o = 0, a = i.length; o < a; o++)
                        (0, u.fadeOut)(i[o], 400);
                    }),
                    (n.slides.entries[e].imgs = a = r);
                } else if (!(0, u.visible)(a)) {
                  var s = (0, u.siblings)(self, function (e) {
                    return s(e);
                  });
                  (0, u.fadeIn)(n.slidesContainer.querySelector(a));
                  for (var l = 0, d = s.length; l < d; l++)
                    (0, u.fadeOut)(s[l]);
                }
              }
            },
            displaySlides: function () {
              if (void 0 !== this.slides) {
                var e = this.slides,
                  t = this.searchTrackPosition(
                    e.entries,
                    this.media.currentTime
                  );
                t > -1 && this.showSlide(t);
              }
            },
            drawChapters: function (e) {
              var t = this,
                n = e.entries.length;
              if (n) {
                t.chaptersButton.querySelector('ul').innerHTML = '';
                for (var i = 0; i < n; i++)
                  t.chaptersButton.querySelector('ul').innerHTML +=
                    '<li className="' +
                    t.options.classPrefix +
                    'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" className="' +
                    t.options.classPrefix +
                    'captions-selector-input" name="' +
                    t.id +
                    '_chapters" id="' +
                    t.id +
                    '_chapters_' +
                    i +
                    '" value="' +
                    e.entries[i].start +
                    '" disabled><label className="' +
                    t.options.classPrefix +
                    'chapters-selector-label"for="' +
                    t.id +
                    '_chapters_' +
                    i +
                    '">' +
                    e.entries[i].text +
                    '</label></li>';
                for (
                  var o = t.chaptersButton.querySelectorAll(
                      'input[type="radio"]'
                    ),
                    a = t.chaptersButton.querySelectorAll(
                      '.' + t.options.classPrefix + 'chapters-selector-label'
                    ),
                    r = 0,
                    s = o.length;
                  r < s;
                  r++
                )
                  (o[r].disabled = !1),
                    (o[r].checked = !1),
                    o[r].addEventListener('click', function () {
                      var e = t.chaptersButton.querySelectorAll('li'),
                        n = (0, u.siblings)(this, function (e) {
                          return (0,
                          u.hasClass)(e, t.options.classPrefix + 'chapters-selector-label');
                        })[0];
                      (this.checked = !0),
                        this.parentNode.setAttribute('aria-checked', !0),
                        (0, u.addClass)(
                          n,
                          t.options.classPrefix + 'chapters-selected'
                        ),
                        (0, u.removeClass)(
                          t.chaptersButton.querySelector(
                            '.' + t.options.classPrefix + 'chapters-selected'
                          ),
                          t.options.classPrefix + 'chapters-selected'
                        );
                      for (var i = 0, o = e.length; i < o; i++)
                        e[i].setAttribute('aria-checked', !1);
                      t.media.setCurrentTime(parseFloat(this.value)),
                        t.media.paused && t.media.play();
                    });
                for (var l = 0, c = a.length; l < c; l++)
                  a[l].addEventListener('click', function () {
                    var e = (0, u.siblings)(this, function (e) {
                        return 'INPUT' === e.tagName;
                      })[0],
                      t = (0, d.createEvent)('click', e);
                    e.dispatchEvent(t);
                  });
              }
            },
            searchTrackPosition: function (e, t) {
              for (
                var n = 0, i = e.length - 1, o = void 0, a = void 0, r = void 0;
                n <= i;

              ) {
                if (
                  ((a = e[(o = (n + i) >> 1)].start),
                  (r = e[o].stop),
                  t >= a && t < r)
                )
                  return o;
                a < t ? (n = o + 1) : a > t && (i = o - 1);
              }
              return -1;
            },
          }),
          (o.default.language = {
            codes: {
              af: 'mejs.afrikaans',
              sq: 'mejs.albanian',
              ar: 'mejs.arabic',
              be: 'mejs.belarusian',
              bg: 'mejs.bulgarian',
              ca: 'mejs.catalan',
              zh: 'mejs.chinese',
              'zh-cn': 'mejs.chinese-simplified',
              'zh-tw': 'mejs.chines-traditional',
              hr: 'mejs.croatian',
              cs: 'mejs.czech',
              da: 'mejs.danish',
              nl: 'mejs.dutch',
              en: 'mejs.english',
              et: 'mejs.estonian',
              fl: 'mejs.filipino',
              fi: 'mejs.finnish',
              fr: 'mejs.french',
              gl: 'mejs.galician',
              de: 'mejs.german',
              el: 'mejs.greek',
              ht: 'mejs.haitian-creole',
              iw: 'mejs.hebrew',
              hi: 'mejs.hindi',
              hu: 'mejs.hungarian',
              is: 'mejs.icelandic',
              id: 'mejs.indonesian',
              ga: 'mejs.irish',
              it: 'mejs.italian',
              ja: 'mejs.japanese',
              ko: 'mejs.korean',
              lv: 'mejs.latvian',
              lt: 'mejs.lithuanian',
              mk: 'mejs.macedonian',
              ms: 'mejs.malay',
              mt: 'mejs.maltese',
              no: 'mejs.norwegian',
              fa: 'mejs.persian',
              pl: 'mejs.polish',
              pt: 'mejs.portuguese',
              ro: 'mejs.romanian',
              ru: 'mejs.russian',
              sr: 'mejs.serbian',
              sk: 'mejs.slovak',
              sl: 'mejs.slovenian',
              es: 'mejs.spanish',
              sw: 'mejs.swahili',
              sv: 'mejs.swedish',
              tl: 'mejs.tagalog',
              th: 'mejs.thai',
              tr: 'mejs.turkish',
              uk: 'mejs.ukrainian',
              vi: 'mejs.vietnamese',
              cy: 'mejs.welsh',
              yi: 'mejs.yiddish',
            },
          }),
          (o.default.TrackFormatParser = {
            webvtt: {
              pattern:
                /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
              parse: function (e) {
                for (
                  var t = e.split(/\r?\n/),
                    n = [],
                    i = void 0,
                    o = void 0,
                    a = void 0,
                    r = 0,
                    s = t.length;
                  r < s;
                  r++
                ) {
                  if ((i = this.pattern.exec(t[r])) && r < t.length) {
                    for (
                      r - 1 >= 0 && '' !== t[r - 1] && (a = t[r - 1]),
                        o = t[++r],
                        r++;
                      '' !== t[r] && r < t.length;

                    )
                      (o = o + '\n' + t[r]), r++;
                    (o = o
                      .trim()
                      .replace(
                        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                        "<a href='$1' target='_blank'>$1</a>"
                      )),
                      n.push({
                        identifier: a,
                        start:
                          0 === (0, l.convertSMPTEtoSeconds)(i[1])
                            ? 0.2
                            : (0, l.convertSMPTEtoSeconds)(i[1]),
                        stop: (0, l.convertSMPTEtoSeconds)(i[3]),
                        text: o,
                        settings: i[5],
                      });
                  }
                  a = '';
                }
                return n;
              },
            },
            dfxp: {
              parse: function (e) {
                var t = (e = $(e).filter('tt')).firstChild,
                  n = t.querySelectorAll('p'),
                  i = e.getElementById('' + t.attr('style')),
                  o = [],
                  a = void 0;
                if (i.length) {
                  i.removeAttribute('id');
                  var r = i.attributes;
                  if (r.length) {
                    a = {};
                    for (var s = 0, d = r.length; s < d; s++)
                      a[r[s].name.split(':')[1]] = r[s].value;
                  }
                }
                for (var u = 0, c = n.length; u < c; u++) {
                  var f = void 0,
                    p = { start: null, stop: null, style: null, text: null };
                  if (
                    (n.eq(u).attr('begin') &&
                      (p.start = (0, l.convertSMPTEtoSeconds)(
                        n.eq(u).attr('begin')
                      )),
                    !p.start &&
                      n.eq(u - 1).attr('end') &&
                      (p.start = (0, l.convertSMPTEtoSeconds)(
                        n.eq(u - 1).attr('end')
                      )),
                    n.eq(u).attr('end') &&
                      (p.stop = (0, l.convertSMPTEtoSeconds)(
                        n.eq(u).attr('end')
                      )),
                    !p.stop &&
                      n.eq(u + 1).attr('begin') &&
                      (p.stop = (0, l.convertSMPTEtoSeconds)(
                        n.eq(u + 1).attr('begin')
                      )),
                    a)
                  ) {
                    f = '';
                    for (var m in a) f += m + ':' + a[m] + ';';
                  }
                  f && (p.style = f),
                    0 === p.start && (p.start = 0.2),
                    (p.text = n
                      .eq(u)
                      .innerHTML.trim()
                      .replace(
                        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                        "<a href='$1' target='_blank'>$1</a>"
                      )),
                    o.push(p);
                }
                return o;
              },
            },
          });
      },
      { 16: 16, 2: 2, 24: 24, 25: 25, 28: 28, 4: 4, 6: 6 },
    ],
    13: [
      function (e, t, n) {
        'use strict';
        var i = u(e(2)),
          o = e(16),
          a = u(o),
          r = u(e(4)),
          s = e(23),
          l = e(25),
          d = e(24);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, {
          muteText: null,
          unmuteText: null,
          allyVolumeControlText: null,
          hideVolumeOnTouchDevices: !0,
          audioVolume: 'horizontal',
          videoVolume: 'vertical',
        }),
          Object.assign(a.default.prototype, {
            buildvolume: function (e, t, n, o) {
              if (
                (!s.IS_ANDROID && !s.IS_IOS) ||
                !this.options.hideVolumeOnTouchDevices
              ) {
                var a = this,
                  u = a.isVideo ? a.options.videoVolume : a.options.audioVolume,
                  c = (0, l.isString)(a.options.muteText)
                    ? a.options.muteText
                    : r.default.t('mejs.mute'),
                  f = (0, l.isString)(a.options.unmuteText)
                    ? a.options.unmuteText
                    : r.default.t('mejs.unmute'),
                  p = (0, l.isString)(a.options.allyVolumeControlText)
                    ? a.options.allyVolumeControlText
                    : r.default.t('mejs.volume-help-text'),
                  m = i.default.createElement('div');
                if (
                  ((m.className =
                    a.options.classPrefix +
                    'button ' +
                    a.options.classPrefix +
                    'volume-button ' +
                    a.options.classPrefix +
                    'mute'),
                  (m.innerHTML =
                    'horizontal' === u
                      ? '<button type="button" aria-controls="' +
                        a.id +
                        '" title="' +
                        c +
                        '" aria-label="' +
                        c +
                        '" tabindex="0"></button>'
                      : '<button type="button" aria-controls="' +
                        a.id +
                        '" title="' +
                        c +
                        '" aria-label="' +
                        c +
                        '" tabindex="0"></button><a href="javascript:void(0);" className="' +
                        a.options.classPrefix +
                        'volume-slider" aria-label="' +
                        r.default.t('mejs.volume-slider') +
                        '" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span className="' +
                        a.options.classPrefix +
                        'offscreen">' +
                        p +
                        '</span><div className="' +
                        a.options.classPrefix +
                        'volume-total"><div className="' +
                        a.options.classPrefix +
                        'volume-current"></div><div className="' +
                        a.options.classPrefix +
                        'volume-handle"></div></div></a>'),
                  a.addControlElement(m, 'volume'),
                  'horizontal' === u)
                ) {
                  var h = i.default.createElement('a');
                  (h.className =
                    a.options.classPrefix + 'horizontal-volume-slider'),
                    (h.href = 'javascript:void(0);'),
                    h.setAttribute(
                      'aria-label',
                      r.default.t('mejs.volume-slider')
                    ),
                    h.setAttribute('aria-valuemin', 0),
                    h.setAttribute('aria-valuemax', 100),
                    h.setAttribute('role', 'slider'),
                    (h.innerHTML +=
                      '<span className="' +
                      a.options.classPrefix +
                      'offscreen">' +
                      p +
                      '</span><div className="' +
                      a.options.classPrefix +
                      'horizontal-volume-total"><div className="' +
                      a.options.classPrefix +
                      'horizontal-volume-current"></div><div className="' +
                      a.options.classPrefix +
                      'horizontal-volume-handle"></div></div>'),
                    m.parentNode.insertBefore(h, m.nextSibling);
                }
                var v = !1,
                  y = !1,
                  g =
                    'vertical' === u
                      ? a.container.querySelector(
                          '.' + a.options.classPrefix + 'volume-slider'
                        )
                      : a.container.querySelector(
                          '.' +
                            a.options.classPrefix +
                            'horizontal-volume-slider'
                        ),
                  b =
                    'vertical' === u
                      ? a.container.querySelector(
                          '.' + a.options.classPrefix + 'volume-total'
                        )
                      : a.container.querySelector(
                          '.' +
                            a.options.classPrefix +
                            'horizontal-volume-total'
                        ),
                  E =
                    'vertical' === u
                      ? a.container.querySelector(
                          '.' + a.options.classPrefix + 'volume-current'
                        )
                      : a.container.querySelector(
                          '.' +
                            a.options.classPrefix +
                            'horizontal-volume-current'
                        ),
                  S =
                    'vertical' === u
                      ? a.container.querySelector(
                          '.' + a.options.classPrefix + 'volume-handle'
                        )
                      : a.container.querySelector(
                          '.' +
                            a.options.classPrefix +
                            'horizontal-volume-handle'
                        ),
                  x = function (e) {
                    if (((e = Math.max(0, e)), 0 === (e = Math.min(e, 1)))) {
                      (0, d.removeClass)(m, a.options.classPrefix + 'mute'),
                        (0, d.addClass)(m, a.options.classPrefix + 'unmute');
                      var t = m.firstElementChild;
                      t.setAttribute('title', f),
                        t.setAttribute('aria-label', f);
                    } else {
                      (0, d.removeClass)(m, a.options.classPrefix + 'unmute'),
                        (0, d.addClass)(m, a.options.classPrefix + 'mute');
                      var n = m.firstElementChild;
                      n.setAttribute('title', c),
                        n.setAttribute('aria-label', c);
                    }
                    var i = 100 * e + '%',
                      o = getComputedStyle(S);
                    'vertical' === u
                      ? ((E.style.bottom = 0),
                        (E.style.height = i),
                        (S.style.bottom = i),
                        (S.style.marginBottom =
                          -parseFloat(o.height) / 2 + 'px'))
                      : ((E.style.left = 0),
                        (E.style.width = i),
                        (S.style.left = i),
                        (S.style.marginLeft = -parseFloat(o.width) / 2 + 'px'));
                  },
                  w = function (e) {
                    var t = (0, d.offset)(b),
                      n = getComputedStyle(b),
                      i = null;
                    if ('vertical' === u) {
                      var a = parseFloat(n.height);
                      if (
                        ((i = (a - (e.pageY - t.top)) / a),
                        0 === t.top || 0 === t.left)
                      )
                        return;
                    } else {
                      var r = parseFloat(n.width);
                      i = (e.pageX - t.left) / r;
                    }
                    (i = Math.max(0, i)),
                      (i = Math.min(i, 1)),
                      x(i),
                      0 === i ? o.setMuted(!0) : o.setMuted(!1),
                      o.setVolume(i),
                      e.preventDefault(),
                      e.stopPropagation();
                  };
                m.addEventListener('mouseenter', function (e) {
                  e.target === m &&
                    ((g.style.display = 'block'),
                    (y = !0),
                    e.preventDefault(),
                    e.stopPropagation());
                }),
                  m.addEventListener('focusin', function () {
                    (g.style.display = 'block'), (y = !0);
                  }),
                  m.addEventListener('focusout', function (e) {
                    e.relatedTarget.matches(
                      '.' + a.options.classPrefix + 'volume-slider'
                    ) ||
                      'vertical' !== u ||
                      (g.style.display = 'none');
                  }),
                  m.addEventListener('mouseleave', function () {
                    (y = !1),
                      v || 'vertical' !== u || (g.style.display = 'none');
                  }),
                  m.addEventListener('focusout', function () {
                    y = !1;
                  }),
                  m.addEventListener('keydown', function (e) {
                    if (a.options.keyActions.length) {
                      var t = e.which || e.keyCode || 0,
                        n = o.volume;
                      switch (t) {
                        case 38:
                          n = Math.min(n + 0.1, 1);
                          break;
                        case 40:
                          n = Math.max(0, n - 0.1);
                          break;
                        default:
                          return !0;
                      }
                      (v = !1),
                        x(n),
                        o.setVolume(n),
                        e.preventDefault(),
                        e.stopPropagation();
                    }
                  }),
                  m
                    .querySelector('button')
                    .addEventListener('click', function () {
                      o.setMuted(!o.muted);
                      var e = (0, l.createEvent)('volumechange', o);
                      o.dispatchEvent(e);
                    }),
                  g.addEventListener('dragstart', function () {
                    return !1;
                  }),
                  g.addEventListener('mouseover', function () {
                    y = !0;
                  }),
                  g.addEventListener('focusin', function () {
                    (g.style.display = 'block'), (y = !0);
                  }),
                  g.addEventListener('focusout', function () {
                    (y = !1),
                      v || 'vertical' !== u || (g.style.display = 'none');
                  }),
                  g.addEventListener('mousedown', function (e) {
                    w(e),
                      a.globalBind('mousemove.vol', function (e) {
                        var t = e.target;
                        v &&
                          (t === g ||
                            t.closest(
                              'vertical' === u
                                ? '.' + a.options.classPrefix + 'volume-slider'
                                : '.' +
                                    a.options.classPrefix +
                                    'horizontal-volume-slider'
                            )) &&
                          w(e);
                      }),
                      a.globalBind('mouseup.vol', function () {
                        (v = !1),
                          a.globalUnbind('mousemove.vol mouseup.vol'),
                          y || 'vertical' !== u || (g.style.display = 'none');
                      }),
                      (v = !0),
                      e.preventDefault(),
                      e.stopPropagation();
                  }),
                  o.addEventListener('volumechange', function (e) {
                    var t;
                    v ||
                      (o.muted
                        ? (x(0),
                          (0, d.removeClass)(m, a.options.classPrefix + 'mute'),
                          (0, d.addClass)(m, a.options.classPrefix + 'unmute'))
                        : (x(o.volume),
                          (0, d.removeClass)(
                            m,
                            a.options.classPrefix + 'unmute'
                          ),
                          (0, d.addClass)(m, a.options.classPrefix + 'mute'))),
                      (t = Math.floor(100 * o.volume)),
                      g.setAttribute('aria-valuenow', t),
                      g.setAttribute('aria-valuetext', t + '%');
                  }),
                  0 === e.options.startVolume && o.setMuted(!0),
                  o.setVolume(e.options.startVolume),
                  a.container.addEventListener('controlsresize', function () {
                    o.muted
                      ? (x(0),
                        (0, d.removeClass)(m, a.options.classPrefix + 'mute'),
                        (0, d.addClass)(m, a.options.classPrefix + 'unmute'))
                      : (x(o.volume),
                        (0, d.removeClass)(m, a.options.classPrefix + 'unmute'),
                        (0, d.addClass)(m, a.options.classPrefix + 'mute'));
                  });
              }
            },
          });
      },
      { 16: 16, 2: 2, 23: 23, 24: 24, 25: 25, 4: 4 },
    ],
    14: [
      function (e, t, n) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 });
        n.EN = {
          'mejs.plural-form': 1,
          'mejs.download-file': 'Download File',
          'mejs.install-flash':
            'You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/',
          'mejs.fullscreen': 'Fullscreen',
          'mejs.play': 'Play',
          'mejs.pause': 'Pause',
          'mejs.time-slider': 'Time Slider',
          'mejs.time-help-text':
            'Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.',
          'mejs.live-broadcast': 'Live Broadcast',
          'mejs.volume-help-text':
            'Use Up/Down Arrow keys to increase or decrease volume.',
          'mejs.unmute': 'Unmute',
          'mejs.mute': 'Mute',
          'mejs.volume-slider': 'Volume Slider',
          'mejs.video-player': 'Video Player',
          'mejs.audio-player': 'Audio Player',
          'mejs.captions-subtitles': 'Captions/Subtitles',
          'mejs.captions-chapters': 'Chapters',
          'mejs.none': 'None',
          'mejs.afrikaans': 'Afrikaans',
          'mejs.albanian': 'Albanian',
          'mejs.arabic': 'Arabic',
          'mejs.belarusian': 'Belarusian',
          'mejs.bulgarian': 'Bulgarian',
          'mejs.catalan': 'Catalan',
          'mejs.chinese': 'Chinese',
          'mejs.chinese-simplified': 'Chinese (Simplified)',
          'mejs.chinese-traditional': 'Chinese (Traditional)',
          'mejs.croatian': 'Croatian',
          'mejs.czech': 'Czech',
          'mejs.danish': 'Danish',
          'mejs.dutch': 'Dutch',
          'mejs.english': 'English',
          'mejs.estonian': 'Estonian',
          'mejs.filipino': 'Filipino',
          'mejs.finnish': 'Finnish',
          'mejs.french': 'French',
          'mejs.galician': 'Galician',
          'mejs.german': 'German',
          'mejs.greek': 'Greek',
          'mejs.haitian-creole': 'Haitian Creole',
          'mejs.hebrew': 'Hebrew',
          'mejs.hindi': 'Hindi',
          'mejs.hungarian': 'Hungarian',
          'mejs.icelandic': 'Icelandic',
          'mejs.indonesian': 'Indonesian',
          'mejs.irish': 'Irish',
          'mejs.italian': 'Italian',
          'mejs.japanese': 'Japanese',
          'mejs.korean': 'Korean',
          'mejs.latvian': 'Latvian',
          'mejs.lithuanian': 'Lithuanian',
          'mejs.macedonian': 'Macedonian',
          'mejs.malay': 'Malay',
          'mejs.maltese': 'Maltese',
          'mejs.norwegian': 'Norwegian',
          'mejs.persian': 'Persian',
          'mejs.polish': 'Polish',
          'mejs.portuguese': 'Portuguese',
          'mejs.romanian': 'Romanian',
          'mejs.russian': 'Russian',
          'mejs.serbian': 'Serbian',
          'mejs.slovak': 'Slovak',
          'mejs.slovenian': 'Slovenian',
          'mejs.spanish': 'Spanish',
          'mejs.swahili': 'Swahili',
          'mejs.swedish': 'Swedish',
          'mejs.tagalog': 'Tagalog',
          'mejs.thai': 'Thai',
          'mejs.turkish': 'Turkish',
          'mejs.ukrainian': 'Ukrainian',
          'mejs.vietnamese': 'Vietnamese',
          'mejs.welsh': 'Welsh',
          'mejs.yiddish': 'Yiddish',
        };
      },
      {},
    ],
    15: [
      function (e, t, n) {
        'use strict';
        var i = a(e(3)),
          o = a(e(6));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        'undefined' != typeof jQuery
          ? (o.default.$ = i.default.jQuery = i.default.$ = jQuery)
          : 'undefined' != typeof Zepto
          ? (o.default.$ = i.default.Zepto = i.default.$ = Zepto)
          : 'undefined' != typeof ender &&
            (o.default.$ = i.default.ender = i.default.$ = ender);
      },
      { 3: 3, 6: 6 },
    ],
    16: [
      function (e, t, n) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.config = void 0);
        var i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  'value' in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          a = h(e(3)),
          r = h(e(2)),
          s = h(e(6)),
          l = h(e(5)),
          d = h(e(4)),
          u = e(23),
          c = e(25),
          f = e(28),
          p = e(26),
          m = (function (e) {
            {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return (t.default = e), t;
            }
          })(e(24));
        function h(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (s.default.mepIndex = 0), (s.default.players = {});
        var v = (n.config = {
          poster: '',
          showPosterWhenEnded: !1,
          showPosterWhenPaused: !1,
          defaultVideoWidth: 480,
          defaultVideoHeight: 270,
          videoWidth: -1,
          videoHeight: -1,
          defaultAudioWidth: 400,
          defaultAudioHeight: 40,
          defaultSeekBackwardInterval: function (e) {
            return 0.05 * e.duration;
          },
          defaultSeekForwardInterval: function (e) {
            return 0.05 * e.duration;
          },
          setDimensions: !0,
          audioWidth: -1,
          audioHeight: -1,
          startVolume: 0.8,
          loop: !1,
          autoRewind: !0,
          enableAutosize: !0,
          timeFormat: '',
          alwaysShowHours: !1,
          showTimecodeFrameCount: !1,
          framesPerSecond: 25,
          alwaysShowControls: !1,
          hideVideoControlsOnLoad: !1,
          hideVideoControlsOnPause: !1,
          clickToPlayPause: !0,
          controlsTimeoutDefault: 1500,
          controlsTimeoutMouseEnter: 2500,
          controlsTimeoutMouseLeave: 1e3,
          iPadUseNativeControls: !1,
          iPhoneUseNativeControls: !1,
          AndroidUseNativeControls: !1,
          features: [
            'playpause',
            'current',
            'progress',
            'duration',
            'tracks',
            'volume',
            'fullscreen',
          ],
          isVideo: !0,
          stretching: 'auto',
          classPrefix: 'mejs__',
          enableKeyboard: !0,
          pauseOtherPlayers: !0,
          secondsDecimalLength: 0,
          keyActions: [
            {
              keys: [32, 179],
              action: function (e, t) {
                u.IS_FIREFOX || (t.paused || t.ended ? t.play() : t.pause());
              },
            },
            {
              keys: [38],
              action: function (e, t) {
                (e.container
                  .querySelector('.' + v.classPrefix + 'volume-button>button')
                  .matches(':focus') ||
                  e.container
                    .querySelector('.' + v.classPrefix + 'volume-slider')
                    .matches(':focus')) &&
                  (e.container.querySelector(
                    '.' + v.classPrefix + 'volume-slider'
                  ).style.display = ''),
                  e.isVideo && (e.showControls(), e.startControlsTimer());
                var n = Math.min(t.volume + 0.1, 1);
                t.setVolume(n), n > 0 && t.setMuted(!1);
              },
            },
            {
              keys: [40],
              action: function (e, t) {
                (e.container
                  .querySelector('.' + v.classPrefix + 'volume-button>button')
                  .matches(':focus') ||
                  e.container
                    .querySelector('.' + v.classPrefix + 'volume-slider')
                    .matches(':focus')) &&
                  (e.container.querySelector(
                    '.' + v.classPrefix + 'volume-slider'
                  ).style.display = ''),
                  e.isVideo && (e.showControls(), e.startControlsTimer());
                var n = Math.max(t.volume - 0.1, 0);
                t.setVolume(n), n <= 0.1 && t.setMuted(!0);
              },
            },
            {
              keys: [37, 227],
              action: function (e, t) {
                if (!isNaN(t.duration) && t.duration > 0) {
                  e.isVideo && (e.showControls(), e.startControlsTimer());
                  var n = Math.max(
                    t.currentTime - e.options.defaultSeekBackwardInterval(t),
                    0
                  );
                  t.setCurrentTime(n);
                }
              },
            },
            {
              keys: [39, 228],
              action: function (e, t) {
                if (!isNaN(t.duration) && t.duration > 0) {
                  e.isVideo && (e.showControls(), e.startControlsTimer());
                  var n = Math.min(
                    t.currentTime + e.options.defaultSeekForwardInterval(t),
                    t.duration
                  );
                  t.setCurrentTime(n);
                }
              },
            },
            {
              keys: [70],
              action: function (e, t, n, i) {
                i.ctrlKey ||
                  (void 0 !== e.enterFullScreen &&
                    (e.isFullScreen
                      ? e.exitFullScreen()
                      : e.enterFullScreen()));
              },
            },
            {
              keys: [77],
              action: function (e) {
                (e.container.querySelector(
                  '.' + v.classPrefix + 'volume-slider'
                ).style.display = ''),
                  e.isVideo && (e.showControls(), e.startControlsTimer()),
                  e.media.muted ? e.setMuted(!1) : e.setMuted(!0);
              },
            },
          ],
        });
        s.default.MepDefaults = v;
        var y,
          g = (function () {
            function e(t, n) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e);
              var i = this,
                o = 'string' == typeof t ? r.default.getElementById(t) : t;
              if (
                ((i.hasFocus = !1),
                (i.controlsAreVisible = !0),
                (i.controlsEnabled = !0),
                (i.controlsTimer = null),
                !(i instanceof e))
              )
                return new e(o, n);
              if (((i.node = i.media = o), i.node)) {
                if (void 0 !== i.media.player) return i.media.player;
                if (void 0 === n) {
                  var a = i.node.getAttribute('data-mejsoptions');
                  n = a ? JSON.parse(a) : {};
                }
                (i.options = Object.assign({}, v, n)),
                  i.options.timeFormat ||
                    ((i.options.timeFormat = 'mm:ss'),
                    i.options.alwaysShowHours &&
                      (i.options.timeFormat = 'hh:mm:ss'),
                    i.options.showTimecodeFrameCount &&
                      (i.options.timeFormat += ':ff')),
                  (0, f.calculateTimeFormat)(
                    0,
                    i.options,
                    i.options.framesPerSecond || 25
                  ),
                  (i.id = 'mep_' + s.default.mepIndex++),
                  (s.default.players[i.id] = i);
                var h = Object.assign({}, i.options, {
                    success: function (e, t) {
                      i._meReady(e, t);
                    },
                    error: function (e) {
                      i._handleError(e);
                    },
                  }),
                  y = i.node.tagName.toLowerCase();
                if (
                  ((i.isDynamic = 'audio' !== y && 'video' !== y),
                  (i.isVideo = i.isDynamic
                    ? i.options.isVideo
                    : 'audio' !== y && i.options.isVideo),
                  (i.mediaFiles = null),
                  (i.trackFiles = null),
                  (u.IS_IPAD && i.options.iPadUseNativeControls) ||
                    (u.IS_IPHONE && i.options.iPhoneUseNativeControls))
                )
                  i.node.setAttribute('controls', !0),
                    u.IS_IPAD && i.node.getAttribute('autoplay') && i.play();
                else if (
                  !(i.isVideo || (!i.isVideo && i.options.features.length)) ||
                  (u.IS_ANDROID && i.options.AndroidUseNativeControls)
                )
                  i.isVideo ||
                    i.options.features.length ||
                    (i.node.style.display = 'none');
                else {
                  i.node.removeAttribute('controls');
                  var g = i.isVideo
                      ? d.default.t('mejs.video-player')
                      : d.default.t('mejs.audio-player'),
                    b = r.default.createElement('span');
                  if (
                    ((b.className = i.options.classPrefix + 'offscreen'),
                    (b.innerText = g),
                    i.media.parentNode.insertBefore(b, i.media),
                    (i.container = r.default.createElement('div')),
                    (i.container.id = i.id),
                    (i.container.className =
                      i.options.classPrefix +
                      'container ' +
                      i.options.classPrefix +
                      'container-keyboard-inactive ' +
                      i.media.className),
                    (i.container.tabIndex = 0),
                    i.container.setAttribute('role', 'application'),
                    i.container.setAttribute('aria-label', g),
                    (i.container.innerHTML =
                      '<div className="' +
                      i.options.classPrefix +
                      'inner"><div className="' +
                      i.options.classPrefix +
                      'mediaelement"></div><div className="' +
                      i.options.classPrefix +
                      'layers"></div><div className="' +
                      i.options.classPrefix +
                      'controls"></div><div className="' +
                      i.options.classPrefix +
                      'clear"></div></div>'),
                    i.container.addEventListener('focus', function (e) {
                      if (
                        !i.controlsAreVisible &&
                        !i.hasFocus &&
                        i.controlsEnabled
                      ) {
                        i.showControls(!0);
                        var t = (0, c.isNodeAfter)(e.relatedTarget, i.container)
                          ? '.' +
                            i.options.classPrefix +
                            'controls .' +
                            i.options.classPrefix +
                            'button:last-child > button'
                          : '.' +
                            i.options.classPrefix +
                            'playpause-button > button';
                        i.container.querySelector(t).focus();
                      }
                    }),
                    i.node.parentNode.insertBefore(i.container, i.node),
                    i.options.features.length ||
                      ((i.container.style.background = 'transparent'),
                      (i.container.querySelector(
                        '.' + i.options.classPrefix + 'controls'
                      ).style.display = 'none')),
                    i.isVideo &&
                      'fill' === i.options.stretching &&
                      !m.hasClass(
                        i.container.parentNode,
                        i.options.classPrefix + 'fill-container'
                      ))
                  ) {
                    i.outerContainer = i.media.parentNode;
                    var E = r.default.createElement('div');
                    (E.className = i.options.classPrefix + 'fill-container'),
                      i.container.parentNode.insertBefore(E, i.container),
                      E.appendChild(i.container);
                  }
                  if (
                    (u.IS_ANDROID &&
                      m.addClass(
                        i.container,
                        i.options.classPrefix + 'android'
                      ),
                    u.IS_IOS &&
                      m.addClass(i.container, i.options.classPrefix + 'ios'),
                    u.IS_IPAD &&
                      m.addClass(i.container, i.options.classPrefix + 'ipad'),
                    u.IS_IPHONE &&
                      m.addClass(i.container, i.options.classPrefix + 'iphone'),
                    m.addClass(
                      i.container,
                      i.isVideo
                        ? i.options.classPrefix + 'video'
                        : i.options.classPrefix + 'audio'
                    ),
                    u.IS_SAFARI && !u.IS_IOS)
                  ) {
                    m.addClass(
                      i.container,
                      i.options.classPrefix + 'hide-cues'
                    );
                    for (
                      var S = i.node.cloneNode(),
                        x = i.node.childNodes,
                        w = [],
                        P = [],
                        T = 0,
                        C = x.length;
                      T < C;
                      T++
                    ) {
                      var k = x[T];
                      k &&
                        k.nodeType !== Node.TEXT_NODE &&
                        (function () {
                          switch (k.tagName.toLowerCase()) {
                            case 'source':
                              var e = {};
                              Array.prototype.slice
                                .call(k.attributes)
                                .forEach(function (t) {
                                  e[t.name] = t.value;
                                }),
                                (e.type = (0, p.formatType)(e.src, e.type)),
                                w.push(e);
                              break;
                            case 'track':
                              (k.mode = 'hidden'), P.push(k);
                              break;
                            default:
                              S.appendChild(k);
                          }
                        })();
                    }
                    i.node.remove(),
                      (i.node = i.media = S),
                      w.length && (i.mediaFiles = w),
                      P.length && (i.trackFiles = P);
                  }
                  i.container
                    .querySelector('.' + i.options.classPrefix + 'mediaelement')
                    .appendChild(i.node),
                    (i.media.player = i),
                    (i.controls = i.container.querySelector(
                      '.' + i.options.classPrefix + 'controls'
                    )),
                    (i.layers = i.container.querySelector(
                      '.' + i.options.classPrefix + 'layers'
                    ));
                  var _ = i.isVideo ? 'video' : 'audio',
                    N = _.substring(0, 1).toUpperCase() + _.substring(1);
                  i.options[_ + 'Width'] > 0 ||
                  i.options[_ + 'Width'].toString().indexOf('%') > -1
                    ? (i.width = i.options[_ + 'Width'])
                    : '' !== i.node.style.width && null !== i.node.style.width
                    ? (i.width = i.node.style.width)
                    : i.node.getAttribute('width')
                    ? (i.width = i.node.getAttribute('width'))
                    : (i.width = i.options['default' + N + 'Width']),
                    i.options[_ + 'Height'] > 0 ||
                    i.options[_ + 'Height'].toString().indexOf('%') > -1
                      ? (i.height = i.options[_ + 'Height'])
                      : '' !== i.node.style.height &&
                        null !== i.node.style.height
                      ? (i.height = i.node.style.height)
                      : i.node.getAttribute('height')
                      ? (i.height = i.node.getAttribute('height'))
                      : (i.height = i.options['default' + N + 'Height']),
                    (i.initialAspectRatio =
                      i.height >= i.width
                        ? i.width / i.height
                        : i.height / i.width),
                    i.setPlayerSize(i.width, i.height),
                    (h.pluginWidth = i.width),
                    (h.pluginHeight = i.height);
                }
                if (
                  (new l.default(i.media, h, i.mediaFiles),
                  void 0 !== i.container &&
                    i.options.features.length &&
                    i.controlsAreVisible &&
                    !i.options.hideVideoControlsOnLoad)
                ) {
                  var A = (0, c.createEvent)('controlsshown', i.container);
                  i.container.dispatchEvent(A);
                }
                return i;
              }
            }
            return (
              o(e, [
                {
                  key: 'showControls',
                  value: function (e) {
                    var t = this;
                    if (
                      ((e = void 0 === e || e),
                      !t.controlsAreVisible && t.isVideo)
                    ) {
                      if (e)
                        !(function () {
                          m.removeClass(
                            t.controls,
                            t.options.classPrefix + 'offscreen'
                          ),
                            m.fadeIn(t.controls, 200, function () {
                              var e = (0, c.createEvent)(
                                'controlsshown',
                                t.container
                              );
                              t.container.dispatchEvent(e);
                            });
                          for (
                            var e = t.container.querySelectorAll(
                                '.' + t.options.classPrefix + 'control'
                              ),
                              n = function (n, i) {
                                m.fadeIn(e[n], 200, function () {
                                  m.removeClass(
                                    e[n],
                                    t.options.classPrefix + 'offscreen'
                                  );
                                });
                              },
                              i = 0,
                              o = e.length;
                            i < o;
                            i++
                          )
                            n(i);
                        })();
                      else {
                        m.removeClass(
                          t.controls,
                          t.options.classPrefix + 'offscreen'
                        ),
                          (t.controls.style.display = ''),
                          (t.controls.style.opacity = 1);
                        for (
                          var n = t.container.querySelectorAll(
                              '.' + t.options.classPrefix + 'control'
                            ),
                            i = 0,
                            o = n.length;
                          i < o;
                          i++
                        )
                          m.removeClass(
                            n[i],
                            t.options.classPrefix + 'offscreen'
                          ),
                            (n[i].style.display = '');
                        var a = (0, c.createEvent)(
                          'controlsshown',
                          t.container
                        );
                        t.container.dispatchEvent(a);
                      }
                      (t.controlsAreVisible = !0), t.setControlsSize();
                    }
                  },
                },
                {
                  key: 'hideControls',
                  value: function (e, t) {
                    var n = this;
                    if (
                      ((e = void 0 === e || e),
                      !0 === t ||
                        !(
                          !n.controlsAreVisible ||
                          n.options.alwaysShowControls ||
                          n.keyboardAction ||
                          (n.media.paused &&
                            4 === n.media.readyState &&
                            ((!n.options.hideVideoControlsOnLoad &&
                              n.media.currentTime <= 0) ||
                              (!n.options.hideVideoControlsOnPause &&
                                n.media.currentTime > 0))) ||
                          (n.isVideo &&
                            !n.options.hideVideoControlsOnLoad &&
                            !n.media.readyState) ||
                          n.media.ended
                        ))
                    ) {
                      if (e)
                        !(function () {
                          m.fadeOut(n.controls, 200, function () {
                            m.addClass(
                              n.controls,
                              n.options.classPrefix + 'offscreen'
                            ),
                              (n.controls.style.display = '');
                            var e = (0, c.createEvent)(
                              'controlshidden',
                              n.container
                            );
                            n.container.dispatchEvent(e);
                          });
                          for (
                            var e = n.container.querySelectorAll(
                                '.' + n.options.classPrefix + 'control'
                              ),
                              t = function (t, i) {
                                m.fadeOut(e[t], 200, function () {
                                  m.addClass(
                                    e[t],
                                    n.options.classPrefix + 'offscreen'
                                  ),
                                    (e[t].style.display = '');
                                });
                              },
                              i = 0,
                              o = e.length;
                            i < o;
                            i++
                          )
                            t(i);
                        })();
                      else {
                        m.addClass(
                          n.controls,
                          n.options.classPrefix + 'offscreen'
                        ),
                          (n.controls.style.display = ''),
                          (n.controls.style.opacity = 0);
                        for (
                          var i = n.container.querySelectorAll(
                              '.' + n.options.classPrefix + 'control'
                            ),
                            o = 0,
                            a = i.length;
                          o < a;
                          o++
                        )
                          m.addClass(i[o], n.options.classPrefix + 'offscreen'),
                            (i[o].style.display = '');
                        var r = (0, c.createEvent)(
                          'controlshidden',
                          n.container
                        );
                        n.container.dispatchEvent(r);
                      }
                      n.controlsAreVisible = !1;
                    }
                  },
                },
                {
                  key: 'startControlsTimer',
                  value: function (e) {
                    var t = this;
                    (e = void 0 !== e ? e : t.options.controlsTimeoutDefault),
                      t.killControlsTimer('start'),
                      (t.controlsTimer = setTimeout(function () {
                        t.hideControls(), t.killControlsTimer('hide');
                      }, e));
                  },
                },
                {
                  key: 'killControlsTimer',
                  value: function () {
                    null !== this.controlsTimer &&
                      (clearTimeout(this.controlsTimer),
                      delete this.controlsTimer,
                      (this.controlsTimer = null));
                  },
                },
                {
                  key: 'disableControls',
                  value: function () {
                    this.killControlsTimer(),
                      (this.controlsEnabled = !0),
                      this.hideControls(!1, !0);
                  },
                },
                {
                  key: 'enableControls',
                  value: function () {
                    (this.controlsEnabled = !0), this.showControls(!1);
                  },
                },
                {
                  key: '_meReady',
                  value: function (e, t) {
                    var n = this,
                      i = t.getAttribute('autoplay'),
                      o = !(void 0 === i || null === i || 'false' === i),
                      l =
                        null !== e.rendererName &&
                        /(native|html5)/i.test(n.media.rendererName);
                    if (
                      (n.controls && n.enableControls(),
                      n.container &&
                        n.container.querySelector(
                          '.' + n.options.classPrefix + 'overlay-play'
                        ) &&
                        (n.container.querySelector(
                          '.' + n.options.classPrefix + 'overlay-play'
                        ).style.display = ''),
                      !n.created)
                    ) {
                      if (
                        ((n.created = !0),
                        (n.media = e),
                        (n.domNode = t),
                        !(
                          (u.IS_ANDROID &&
                            n.options.AndroidUseNativeControls) ||
                          (u.IS_IPAD && n.options.iPadUseNativeControls) ||
                          (u.IS_IPHONE && n.options.iPhoneUseNativeControls)
                        ))
                      ) {
                        if (!n.isVideo && !n.options.features.length)
                          return (
                            o && l && n.play(),
                            void (
                              n.options.success &&
                              ('string' == typeof n.options.success
                                ? a.default[n.options.success](
                                    n.media,
                                    n.domNode,
                                    n
                                  )
                                : n.options.success(n.media, n.domNode, n))
                            )
                          );
                        n.buildposter(n, n.controls, n.layers, n.media),
                          n.buildkeyboard(n, n.controls, n.layers, n.media),
                          n.buildoverlays(n, n.controls, n.layers, n.media),
                          n.findTracks(),
                          (n.featurePosition = {});
                        for (
                          var d = 0, p = n.options.features.length;
                          d < p;
                          d++
                        ) {
                          var h = n.options.features[d];
                          if (n['build' + h])
                            try {
                              n['build' + h](n, n.controls, n.layers, n.media);
                            } catch (e) {
                              console.error('error building ' + h, e);
                            }
                        }
                        var v = (0, c.createEvent)(
                          'controlsready',
                          n.container
                        );
                        n.container.dispatchEvent(v),
                          n.setPlayerSize(n.width, n.height),
                          n.setControlsSize(),
                          n.isVideo &&
                            ((n.clickToPlayPauseCallback = function () {
                              if (n.options.clickToPlayPause) {
                                var e = n.container.querySelector(
                                    '.' +
                                      n.options.classPrefix +
                                      'overlay-button'
                                  ),
                                  t = e.getAttribute('aria-pressed');
                                n.media.paused && t
                                  ? n.pause()
                                  : n.media.paused
                                  ? n.play()
                                  : n.pause(),
                                  e.setAttribute('aria-pressed', !t);
                              }
                            }),
                            n.createIframeLayer(),
                            n.media.addEventListener(
                              'click',
                              n.clickToPlayPauseCallback
                            ),
                            (!u.IS_ANDROID && !u.IS_IOS) ||
                            n.options.alwaysShowControls
                              ? (n.container.addEventListener(
                                  'mouseenter',
                                  function () {
                                    n.controlsEnabled &&
                                      (n.options.alwaysShowControls ||
                                        (n.killControlsTimer('enter'),
                                        n.showControls(),
                                        n.startControlsTimer(
                                          n.options.controlsTimeoutMouseEnter
                                        )));
                                  }
                                ),
                                n.container.addEventListener(
                                  'mousemove',
                                  function () {
                                    n.controlsEnabled &&
                                      (n.controlsAreVisible || n.showControls(),
                                      n.options.alwaysShowControls ||
                                        n.startControlsTimer(
                                          n.options.controlsTimeoutMouseEnter
                                        ));
                                  }
                                ),
                                n.container.addEventListener(
                                  'mouseleave',
                                  function () {
                                    n.controlsEnabled &&
                                      (n.media.paused ||
                                        n.options.alwaysShowControls ||
                                        n.startControlsTimer(
                                          n.options.controlsTimeoutMouseLeave
                                        ));
                                  }
                                ))
                              : n.node.addEventListener(
                                  'touchstart',
                                  function () {
                                    n.controlsAreVisible
                                      ? n.hideControls(!1)
                                      : n.controlsEnabled && n.showControls(!1);
                                  }
                                ),
                            n.options.hideVideoControlsOnLoad &&
                              n.hideControls(!1),
                            o &&
                              !n.options.alwaysShowControls &&
                              n.hideControls(),
                            n.options.enableAutosize &&
                              n.media.addEventListener(
                                'loadedmetadata',
                                function (e) {
                                  n.options.videoHeight <= 0 &&
                                    !n.domNode.getAttribute('height') &&
                                    null !== e.target &&
                                    !isNaN(e.target.videoHeight) &&
                                    (n.setPlayerSize(
                                      e.target.videoWidth,
                                      e.target.videoHeight
                                    ),
                                    n.setControlsSize(),
                                    n.media.setSize(
                                      e.target.videoWidth,
                                      e.target.videoHeight
                                    ));
                                }
                              )),
                          n.media.addEventListener('play', function () {
                            n.hasFocus = !0;
                            for (var e in s.default.players)
                              if (s.default.players.hasOwnProperty(e)) {
                                var t = s.default.players[e];
                                t.id === n.id ||
                                  !n.options.pauseOtherPlayers ||
                                  t.paused ||
                                  t.ended ||
                                  (t.pause(), (t.hasFocus = !1));
                              }
                          }),
                          n.media.addEventListener('ended', function () {
                            if (n.options.autoRewind)
                              try {
                                n.media.setCurrentTime(0),
                                  setTimeout(function () {
                                    var e = n.container.querySelector(
                                      '.' +
                                        n.options.classPrefix +
                                        'overlay-loading'
                                    );
                                    e &&
                                      e.parentNode &&
                                      (e.parentNode.style.display = 'none');
                                  }, 20);
                              } catch (e) {}
                            'function' == typeof n.media.stop
                              ? n.media.stop()
                              : n.media.pause(),
                              n.setProgressRail && n.setProgressRail(),
                              n.setCurrentRail && n.setCurrentRail(),
                              n.options.loop
                                ? n.play()
                                : !n.options.alwaysShowControls &&
                                  n.controlsEnabled &&
                                  n.showControls();
                          }),
                          n.media.addEventListener(
                            'loadedmetadata',
                            function () {
                              (0, f.calculateTimeFormat)(
                                n.duration,
                                n.options,
                                n.options.framesPerSecond || 25
                              ),
                                n.updateDuration && n.updateDuration(),
                                n.updateCurrent && n.updateCurrent(),
                                n.isFullScreen ||
                                  (n.setPlayerSize(n.width, n.height),
                                  n.setControlsSize());
                            }
                          );
                        var y = null;
                        n.media.addEventListener('timeupdate', function () {
                          y !== n.media.duration &&
                            ((y = n.media.duration),
                            (0, f.calculateTimeFormat)(
                              y,
                              n.options,
                              n.options.framesPerSecond || 25
                            ),
                            n.updateDuration && n.updateDuration(),
                            n.updateCurrent && n.updateCurrent(),
                            n.setControlsSize());
                        }),
                          n.container.addEventListener('click', function (e) {
                            m.addClass(
                              e.currentTarget,
                              n.options.classPrefix +
                                'container-keyboard-inactive'
                            );
                          }),
                          n.container.addEventListener('focusin', function (e) {
                            m.removeClass(
                              e.currentTarget,
                              n.options.classPrefix +
                                'container-keyboard-inactive'
                            ),
                              n.controlsEnabled &&
                                !n.options.alwaysShowControls &&
                                n.showControls(!1);
                          }),
                          n.container.addEventListener(
                            'focusout',
                            function (e) {
                              setTimeout(function () {
                                e.relatedTarget &&
                                  n.keyboardAction &&
                                  !e.relatedTarget.closest(
                                    '.' + n.options.classPrefix + 'container'
                                  ) &&
                                  ((n.keyboardAction = !1),
                                  n.isVideo &&
                                    !n.options.alwaysShowControls &&
                                    n.hideControls(!0));
                              }, 0);
                            }
                          ),
                          setTimeout(function () {
                            n.setPlayerSize(n.width, n.height),
                              n.setControlsSize();
                          }, 0),
                          n.globalBind('resize', function () {
                            n.isFullScreen ||
                              (u.HAS_TRUE_NATIVE_FULLSCREEN &&
                                r.default.webkitIsFullScreen) ||
                              n.setPlayerSize(n.width, n.height),
                              n.setControlsSize();
                          });
                      }
                      o && l && n.play(),
                        n.options.success &&
                          ('string' == typeof n.options.success
                            ? a.default[n.options.success](
                                n.media,
                                n.domNode,
                                n
                              )
                            : n.options.success(n.media, n.domNode, n));
                    }
                  },
                },
                {
                  key: '_handleError',
                  value: function (e) {
                    var t = this;
                    t.controls && t.disableControls();
                    var n = t.layers.querySelector(
                      '.' + t.options.classPrefix + 'overlay-play'
                    );
                    n && (n.style.display = 'none'),
                      t.options.error && t.options.error(e);
                  },
                },
                {
                  key: 'setPlayerSize',
                  value: function (e, t) {
                    var n = this;
                    if (!n.options.setDimensions) return !1;
                    switch (
                      (void 0 !== e && (n.width = e),
                      void 0 !== t && (n.height = t),
                      n.options.stretching)
                    ) {
                      case 'fill':
                        n.isVideo
                          ? n.setFillMode()
                          : n.setDimensions(n.width, n.height);
                        break;
                      case 'responsive':
                        n.setResponsiveMode();
                        break;
                      case 'none':
                        n.setDimensions(n.width, n.height);
                        break;
                      default:
                        !0 === n.hasFluidMode()
                          ? n.setResponsiveMode()
                          : n.setDimensions(n.width, n.height);
                    }
                  },
                },
                {
                  key: 'hasFluidMode',
                  value: function () {
                    var e = this;
                    return (
                      -1 !== e.height.toString().indexOf('%') ||
                      (e.node &&
                        e.node.style.maxWidth &&
                        'none' !== e.node.style.maxWidth &&
                        e.node.style.maxWidth !== e.width) ||
                      (e.node &&
                        e.node.currentStyle &&
                        '100%' === e.node.currentStyle.maxWidth)
                    );
                  },
                },
                {
                  key: 'setResponsiveMode',
                  value: function () {
                    var e,
                      t = this,
                      n = (function () {
                        for (var e = void 0, n = t.container; n; ) {
                          try {
                            if (
                              u.IS_FIREFOX &&
                              'html' === n.tagName.toLowerCase() &&
                              a.default.self !== a.default.top &&
                              null !== a.default.frameElement
                            )
                              return a.default.frameElement;
                            e = n.parentElement;
                          } catch (t) {
                            e = n.parentElement;
                          }
                          if (e && m.visible(e)) return e;
                          n = e;
                        }
                        return null;
                      })(),
                      i = n
                        ? getComputedStyle(n, null)
                        : getComputedStyle(r.default.body, null),
                      o = t.isVideo
                        ? t.media.videoWidth && t.media.videoWidth > 0
                          ? t.media.videoWidth
                          : t.node.getAttribute('width')
                          ? t.node.getAttribute('width')
                          : t.options.defaultVideoWidth
                        : t.options.defaultAudioWidth,
                      s = t.isVideo
                        ? t.media.videoHeight && t.media.videoHeight > 0
                          ? t.media.videoHeight
                          : t.node.getAttribute('height')
                          ? t.node.getAttribute('height')
                          : t.options.defaultVideoHeight
                        : t.options.defaultAudioHeight,
                      l =
                        ((e = 1),
                        t.isVideo
                          ? ((e =
                              t.media.videoWidth &&
                              t.media.videoWidth > 0 &&
                              t.media.videoHeight &&
                              t.media.videoHeight > 0
                                ? t.height >= t.width
                                  ? t.media.videoWidth / t.media.videoHeight
                                  : t.media.videoHeight / t.media.videoWidth
                                : t.initialAspectRatio),
                            (isNaN(e) || e < 0.01 || e > 100) && (e = 1),
                            e)
                          : e),
                      d = parseFloat(i.height),
                      c = void 0,
                      f = parseFloat(i.width);
                    if (
                      ((c = t.isVideo
                        ? '100%' === t.height
                          ? parseFloat((f * s) / o, 10)
                          : t.height >= t.width
                          ? parseFloat(f / l, 10)
                          : parseFloat(f * l, 10)
                        : s),
                      isNaN(c) && (c = d),
                      t.container.parentNode.length > 0 &&
                        'body' ===
                          t.container.parentNode.tagName.toLowerCase() &&
                        ((f =
                          a.default.innerWidth ||
                          r.default.documentElement.clientWidth ||
                          r.default.body.clientWidth),
                        (c =
                          a.default.innerHeight ||
                          r.default.documentElement.clientHeight ||
                          r.default.body.clientHeight)),
                      c && f)
                    ) {
                      (t.container.style.width = f + 'px'),
                        (t.container.style.height = c + 'px'),
                        (t.node.style.width = '100%'),
                        (t.node.style.height = '100%'),
                        t.isVideo && t.media.setSize && t.media.setSize(f, c);
                      for (
                        var p = t.layers.childNodes, h = 0, v = p.length;
                        h < v;
                        h++
                      )
                        (p[h].style.width = '100%'),
                          (p[h].style.height = '100%');
                    }
                  },
                },
                {
                  key: 'setFillMode',
                  value: function () {
                    var e = this,
                      t = void 0,
                      n = !1;
                    try {
                      a.default.self !== a.default.top
                        ? ((n = !0), (t = a.default.frameElement))
                        : (t = e.outerContainer);
                    } catch (n) {
                      t = e.outerContainer;
                    }
                    var i = getComputedStyle(t);
                    'none' !== e.node.style.height &&
                      e.node.style.height !== e.height &&
                      (e.node.style.height = 'auto'),
                      'none' !== e.node.style.maxWidth &&
                        e.node.style.maxWidth !== e.width &&
                        (e.node.style.maxWidth = 'none'),
                      'none' !== e.node.style.maxHeight &&
                        e.node.style.maxHeight !== e.height &&
                        (e.node.style.maxHeight = 'none'),
                      e.node.currentStyle &&
                        ('100%' === e.node.currentStyle.height &&
                          (e.node.currentStyle.height = 'auto'),
                        '100%' === e.node.currentStyle.maxWidth &&
                          (e.node.currentStyle.maxWidth = 'none'),
                        '100%' === e.node.currentStyle.maxHeight &&
                          (e.node.currentStyle.maxHeight = 'none')),
                      n ||
                        parseFloat(i.width) ||
                        (t.style.width = e.media.offsetWidth + 'px'),
                      n ||
                        parseFloat(i.height) ||
                        (t.style.height = e.media.offsetHeight + 'px'),
                      (i = getComputedStyle(t));
                    var o = parseFloat(i.width),
                      r = parseFloat(i.height);
                    e.setDimensions('100%', '100%');
                    var s = e.container.querySelector(
                      e.options.classPrefix + 'poster img'
                    );
                    s && (s.style.display = '');
                    for (
                      var l = e.container.querySelectorAll(
                          'object, embed, iframe, video'
                        ),
                        d = e.height,
                        u = e.width,
                        c = o,
                        f = (d * o) / u,
                        p = (u * r) / d,
                        m = r,
                        h = p > o == !1,
                        v = h ? Math.floor(c) : Math.floor(p),
                        y = h ? Math.floor(f) : Math.floor(m),
                        g = h ? o + 'px' : v + 'px',
                        b = h ? y + 'px' : r + 'px',
                        E = 0,
                        S = l.length;
                      E < S;
                      E++
                    )
                      (l[E].style.height = b),
                        (l[E].style.width = g),
                        e.media.setSize && e.media.setSize(g, b),
                        (l[E].style.marginLeft =
                          Math.floor((o - v) / 2) + 'px'),
                        (l[E].style.marginTop = 0);
                  },
                },
                {
                  key: 'setDimensions',
                  value: function (e, t) {
                    (e =
                      (0, c.isString)(e) && e.indexOf('%') > -1
                        ? e
                        : parseFloat(e) + 'px'),
                      (t =
                        (0, c.isString)(t) && t.indexOf('%') > -1
                          ? t
                          : parseFloat(t) + 'px'),
                      (this.container.style.width = e),
                      (this.container.style.height = t);
                    for (
                      var n = this.layers.childNodes, i = 0, o = n.length;
                      i < o;
                      i++
                    )
                      (n[i].style.width = e), (n[i].style.height = t);
                  },
                },
                {
                  key: 'setControlsSize',
                  value: function () {
                    var e = this;
                    if (m.visible(e.container) && e.rail && m.visible(e.rail)) {
                      for (
                        var t = getComputedStyle(e.rail),
                          n = getComputedStyle(e.total),
                          i =
                            parseFloat(t.marginLeft) +
                            parseFloat(t.marginRight),
                          o =
                            parseFloat(n.marginLeft) +
                              parseFloat(n.marginRight) || 0,
                          a = 0,
                          r = m.siblings(e.rail, function (t) {
                            return t !== e.rail;
                          }),
                          s = r.length,
                          l = 0;
                        l < s;
                        l++
                      )
                        a += r[l].offsetWidth;
                      a += o + (0 === o ? 2 * i : i) + 1;
                      var d = parseFloat(e.controls.offsetWidth);
                      e.rail.style.width = (a > d ? 0 : d - a) + 'px';
                      var u = (0, c.createEvent)('controlsresize', e.container);
                      e.container.dispatchEvent(u);
                    }
                  },
                },
                {
                  key: 'addControlElement',
                  value: function (e, t) {
                    var n = this;
                    if (void 0 !== n.featurePosition[t]) {
                      var i = n.controls.childNodes[n.featurePosition[t] - 1];
                      i.parentNode.insertBefore(e, i.nextSibling);
                    } else {
                      n.controls.appendChild(e);
                      for (
                        var o = n.controls.childNodes, a = 0, r = o.length;
                        a < r;
                        a++
                      )
                        if (e == o[a]) {
                          n.featurePosition[t] = a;
                          break;
                        }
                    }
                  },
                },
                {
                  key: 'createIframeLayer',
                  value: function () {
                    var e = this;
                    if (
                      e.isVideo &&
                      null !== e.media.rendererName &&
                      e.media.rendererName.indexOf('iframe') > -1 &&
                      !r.default.getElementById(e.media.id + '-iframe-overlay')
                    ) {
                      var t = r.default.createElement('div'),
                        n = r.default.getElementById(
                          e.media.id + '_' + e.media.rendererName
                        );
                      (t.id = e.media.id + '-iframe-overlay'),
                        (t.className =
                          e.options.classPrefix + 'iframe-overlay'),
                        t.addEventListener('click', function (t) {
                          e.options.clickToPlayPause &&
                            (e.media.paused ? e.media.play() : e.media.pause(),
                            t.preventDefault(),
                            t.stopPropagation());
                        }),
                        n.parentNode.insertBefore(t, n);
                    }
                  },
                },
                {
                  key: 'resetSize',
                  value: function () {
                    var e = this;
                    setTimeout(function () {
                      e.setPlayerSize(e.width, e.height), e.setControlsSize();
                    }, 50);
                  },
                },
                {
                  key: 'setPoster',
                  value: function (e) {
                    var t = this.container.querySelector(
                        '.' + this.options.classPrefix + 'poster'
                      ),
                      n = t.querySelector('img');
                    n ||
                      (((n = r.default.createElement('img')).className =
                        this.options.classPrefix + 'poster-img'),
                      (n.width = '100%'),
                      (n.height = '100%'),
                      t.appendChild(n)),
                      n.setAttribute('src', e),
                      (t.style.backgroundImage = 'url("' + e + '")');
                  },
                },
                {
                  key: 'changeSkin',
                  value: function (e) {
                    var t = this;
                    (t.container.className =
                      t.options.classPrefix + 'container ' + e),
                      t.setPlayerSize(t.width, t.height),
                      t.setControlsSize();
                  },
                },
                {
                  key: 'globalBind',
                  value: function (e, t) {
                    var n = this.node ? this.node.ownerDocument : r.default;
                    if ((e = (0, c.splitEvents)(e, this.id)).d)
                      for (
                        var i = e.d.split(' '), o = 0, s = i.length;
                        o < s;
                        o++
                      )
                        i[o].split('.').reduce(function (e, i) {
                          return n.addEventListener(i, t, !1), i;
                        }, '');
                    if (e.w)
                      for (
                        var l = e.w.split(' '), d = 0, u = l.length;
                        d < u;
                        d++
                      )
                        l[d].split('.').reduce(function (e, n) {
                          return a.default.addEventListener(n, t, !1), n;
                        }, '');
                  },
                },
                {
                  key: 'globalUnbind',
                  value: function (e, t) {
                    var n = this.node ? this.node.ownerDocument : r.default;
                    if ((e = (0, c.splitEvents)(e, this.id)).d)
                      for (
                        var i = e.d.split(' '), o = 0, s = i.length;
                        o < s;
                        o++
                      )
                        i[o].split('.').reduce(function (e, i) {
                          return n.removeEventListener(i, t, !1), i;
                        }, '');
                    if (e.w)
                      for (
                        var l = e.d.split(' '), d = 0, u = l.length;
                        d < u;
                        d++
                      )
                        l[d].split('.').reduce(function (e, n) {
                          return a.default.removeEventListener(n, t, !1), n;
                        }, '');
                  },
                },
                {
                  key: 'buildposter',
                  value: function (e, t, n, i) {
                    var o = r.default.createElement('div');
                    (o.className =
                      this.options.classPrefix +
                      'poster ' +
                      this.options.classPrefix +
                      'layer'),
                      n.appendChild(o);
                    var a = e.media.getAttribute('poster');
                    '' !== e.options.poster && (a = e.options.poster),
                      a ? this.setPoster(a) : (o.style.display = 'none'),
                      i.addEventListener('play', function () {
                        o.style.display = 'none';
                      }),
                      i.addEventListener('playing', function () {
                        o.style.display = 'none';
                      }),
                      e.options.showPosterWhenEnded &&
                        e.options.autoRewind &&
                        i.addEventListener('ended', function () {
                          o.style.display = '';
                        }),
                      i.addEventListener('error', function () {
                        o.style.display = 'none';
                      }),
                      e.options.showPosterWhenPaused &&
                        i.addEventListener('pause', function () {
                          i.ended || (o.style.display = '');
                        });
                  },
                },
                {
                  key: 'buildoverlays',
                  value: function (e, t, n, i) {
                    if (e.isVideo) {
                      var o = this,
                        a = r.default.createElement('div'),
                        s = r.default.createElement('div'),
                        l = r.default.createElement('div'),
                        f = t.querySelector(
                          '.' + o.options.classPrefix + 'time-buffering'
                        );
                      (a.style.display = 'none'),
                        (a.className =
                          o.options.classPrefix +
                          'overlay ' +
                          o.options.classPrefix +
                          'layer'),
                        (a.innerHTML =
                          '<div className="' +
                          o.options.classPrefix +
                          'overlay-loading"><span className="' +
                          o.options.classPrefix +
                          'overlay-loading-bg-img"></span></div>'),
                        n.appendChild(a),
                        (s.style.display = 'none'),
                        (s.className =
                          o.options.classPrefix +
                          'overlay ' +
                          o.options.classPrefix +
                          'layer'),
                        (s.innerHTML =
                          '<div className="' +
                          o.options.classPrefix +
                          'overlay-error"></div>'),
                        n.appendChild(s),
                        (l.className =
                          o.options.classPrefix +
                          'overlay ' +
                          o.options.classPrefix +
                          'layer ' +
                          o.options.classPrefix +
                          'overlay-play'),
                        (l.innerHTML =
                          '<div className="' +
                          o.options.classPrefix +
                          'overlay-button" role="button" tabindex="0"aria-label="' +
                          d.default.t('mejs.play') +
                          '" aria-pressed="false"></div>'),
                        l.addEventListener('click', function () {
                          if (o.options.clickToPlayPause) {
                            var e = o.container.querySelector(
                                '.' + o.options.classPrefix + 'overlay-button'
                              ),
                              t = e.getAttribute('aria-pressed');
                            i.paused ? i.play() : i.pause(),
                              e.setAttribute('aria-pressed', !!t);
                          }
                        }),
                        l.addEventListener('keydown', function (e) {
                          var t = e.keyCode || e.which || 0;
                          if (13 === t || (u.IS_FIREFOX && 32 === t)) {
                            var n = (0, c.createEvent)('click', l);
                            return l.dispatchEvent(n), !1;
                          }
                        }),
                        n.appendChild(l),
                        null !== o.media.rendererName &&
                          ((/(youtube|facebook)/i.test(o.media.rendererName) &&
                            !e.media.originalNode.getAttribute('poster') &&
                            !e.options.poster) ||
                            u.IS_STOCK_ANDROID) &&
                          (l.style.display = 'none'),
                        i.addEventListener('play', function () {
                          (l.style.display = 'none'),
                            (a.style.display = 'none'),
                            f && (f.style.display = 'none'),
                            (s.style.display = 'none');
                        }),
                        i.addEventListener('playing', function () {
                          (l.style.display = 'none'),
                            (a.style.display = 'none'),
                            f && (f.style.display = 'none'),
                            (s.style.display = 'none');
                        }),
                        i.addEventListener('seeking', function () {
                          (l.style.display = 'none'),
                            (a.style.display = ''),
                            f && (f.style.display = '');
                        }),
                        i.addEventListener('seeked', function () {
                          (l.style.display =
                            i.paused && !u.IS_STOCK_ANDROID ? '' : 'none'),
                            (a.style.display = 'none'),
                            f && (f.style.display = '');
                        }),
                        i.addEventListener('pause', function () {
                          (a.style.display = 'none'),
                            u.IS_STOCK_ANDROID || (l.style.display = ''),
                            f && (f.style.display = 'none');
                        }),
                        i.addEventListener('waiting', function () {
                          (a.style.display = ''), f && (f.style.display = '');
                        }),
                        i.addEventListener('loadeddata', function () {
                          (a.style.display = ''),
                            f && (f.style.display = ''),
                            u.IS_ANDROID &&
                              (i.canplayTimeout = setTimeout(function () {
                                if (r.default.createEvent) {
                                  var e = r.default.createEvent('HTMLEvents');
                                  return (
                                    e.initEvent('canplay', !0, !0),
                                    i.dispatchEvent(e)
                                  );
                                }
                              }, 300));
                        }),
                        i.addEventListener('canplay', function () {
                          (a.style.display = 'none'),
                            f && (f.style.display = 'none'),
                            clearTimeout(i.canplayTimeout);
                        }),
                        i.addEventListener('error', function (e) {
                          o._handleError(e),
                            (a.style.display = 'none'),
                            (l.style.display = 'none'),
                            f && (f.style.display = 'none'),
                            e.message &&
                              ((s.style.display = 'block'),
                              (s.querySelector(
                                '.' + o.options.classPrefix + 'overlay-error'
                              ).innerHTML = e.message));
                        }),
                        i.addEventListener('keydown', function (t) {
                          o.onkeydown(e, i, t);
                        });
                    }
                  },
                },
                {
                  key: 'buildkeyboard',
                  value: function (e, t, n, i) {
                    var o = this;
                    o.container.addEventListener('keydown', function () {
                      o.keyboardAction = !0;
                    }),
                      o.globalBind('keydown', function (t) {
                        var n = r.default.activeElement.closest(
                            '.' + o.options.classPrefix + 'container'
                          ),
                          a = o.media.closest(
                            '.' + o.options.classPrefix + 'container'
                          );
                        return (
                          (o.hasFocus = !(!n || !a || n.id !== a.id)),
                          o.onkeydown(e, i, t)
                        );
                      }),
                      o.globalBind('click', function (e) {
                        o.hasFocus = !!e.target.closest(
                          '.' + o.options.classPrefix + 'container'
                        );
                      });
                  },
                },
                {
                  key: 'onkeydown',
                  value: function (e, t, n) {
                    if (e.hasFocus && e.options.enableKeyboard)
                      for (
                        var i = 0, o = e.options.keyActions.length;
                        i < o;
                        i++
                      )
                        for (
                          var a = e.options.keyActions[i],
                            r = 0,
                            s = a.keys.length;
                          r < s;
                          r++
                        )
                          n.keyCode === a.keys[r] &&
                            (a.action(e, t, n.keyCode, n),
                            n.preventDefault(),
                            n.stopPropagation());
                    return !0;
                  },
                },
                {
                  key: 'play',
                  value: function () {
                    this.media.getCurrentTime() <= 0 && this.load(),
                      this.media.play();
                  },
                },
                {
                  key: 'pause',
                  value: function () {
                    try {
                      this.media.pause();
                    } catch (e) {}
                  },
                },
                {
                  key: 'load',
                  value: function () {
                    this.isLoaded || this.media.load(), (this.isLoaded = !0);
                  },
                },
                {
                  key: 'setMuted',
                  value: function (e) {
                    this.media.setMuted(e);
                  },
                },
                {
                  key: 'setCurrentTime',
                  value: function (e) {
                    this.media.setCurrentTime(e);
                  },
                },
                {
                  key: 'getCurrentTime',
                  value: function () {
                    return this.media.currentTime;
                  },
                },
                {
                  key: 'setVolume',
                  value: function (e) {
                    this.media.setVolume(e);
                  },
                },
                {
                  key: 'getVolume',
                  value: function () {
                    return this.media.volume;
                  },
                },
                {
                  key: 'setSrc',
                  value: function (e) {
                    var t = r.default.getElementById(
                      this.media.id + '-iframe-overlay'
                    );
                    t && t.remove(),
                      this.media.setSrc(e),
                      this.createIframeLayer();
                  },
                },
                {
                  key: 'remove',
                  value: function () {
                    var e = this,
                      t = e.media.rendererName;
                    e.media.paused || e.media.pause();
                    var n = e.media.getSrc();
                    e.media.setSrc('');
                    for (var o in e.options.features) {
                      var a = e.options.features[o];
                      if (e['clean' + a])
                        try {
                          e['clean' + a](e);
                        } catch (e) {
                          console.error('error cleaning ' + a, e);
                        }
                    }
                    var l = e.node.getAttribute('width'),
                      d = e.node.getAttribute('height');
                    (l ? -1 === l.indexOf('%') && (l += 'px') : (l = 'auto'),
                    d ? -1 === d.indexOf('%') && (d += 'px') : (d = 'auto'),
                    (e.node.style.width = l),
                    (e.node.style.height = d),
                    e.isDynamic
                      ? e.container.parentNode.insertBefore(e.node, e.container)
                      : (function () {
                          (e.node.setAttribute('controls', !0),
                          e.node.setAttribute(
                            'id',
                            e.node
                              .getAttribute('id')
                              .replace('_' + t, '')
                              .replace('_from_mejs', '')
                          ),
                          delete e.node.autoplay,
                          '' !==
                            e.media.canPlayType((0, p.getTypeFromFile)(n)) &&
                            e.node.setAttribute('src', n),
                          ~t.indexOf('iframe')) &&
                            r.default
                              .getElementById(e.media.id + '-iframe-overlay')
                              .remove();
                          var i = e.node.cloneNode();
                          if (
                            ((i.style.display = ''),
                            e.container.parentNode.insertBefore(i, e.container),
                            e.node.remove(),
                            e.mediaFiles)
                          )
                            for (
                              var o = 0, a = e.mediaFiles.length;
                              o < a;
                              o++
                            ) {
                              var s = r.default.createElement('source');
                              s.setAttribute('src', e.mediaFiles[o].src),
                                s.setAttribute('type', e.mediaFiles[o].type),
                                i.appendChild(s);
                            }
                          if (e.trackFiles)
                            for (
                              var l = function (t, n) {
                                  var o = e.trackFiles[t],
                                    a = r.default.createElement('track');
                                  (a.kind = o.kind),
                                    (a.label = o.label),
                                    (a.srclang = o.srclang),
                                    (a.src = o.src),
                                    i.appendChild(a),
                                    a.addEventListener('load', function () {
                                      (this.mode = 'showing'),
                                        (i.textTracks[t].mode = 'showing');
                                    });
                                },
                                d = 0,
                                u = e.trackFiles.length;
                              d < u;
                              d++
                            )
                              l(d);
                          delete e.node,
                            delete e.mediaFiles,
                            delete e.trackFiles;
                        })(),
                    'function' == typeof e.media.destroy && e.media.destroy(),
                    delete s.default.players[e.id],
                    'object' === i(e.container)) &&
                      (e.container.parentNode
                        .querySelector(
                          '.' + e.options.classPrefix + 'offscreen'
                        )
                        .remove(),
                      e.container.remove());
                    e.globalUnbind(), delete e.media.player;
                  },
                },
              ]),
              e
            );
          })();
        (a.default.MediaElementPlayer = g),
          (n.default = g),
          void 0 !== (y = s.default.$) &&
            ((y.fn.mediaelementplayer = function (e) {
              return (
                !1 === e
                  ? this.each(function () {
                      var e = y(this).data('mediaelementplayer');
                      e && e.remove(), y(this).removeData('mediaelementplayer');
                    })
                  : this.each(function () {
                      y(this).data('mediaelementplayer', new g(this, e));
                    }),
                this
              );
            }),
            y(r.default).ready(function () {
              y('.' + v.classPrefix + 'player').mediaelementplayer();
            }));
      },
      { 2: 2, 23: 23, 24: 24, 25: 25, 26: 26, 28: 28, 3: 3, 4: 4, 5: 5, 6: 6 },
    ],
    17: [
      function (e, t, n) {
        'use strict';
        var i = u(e(3)),
          o = u(e(6)),
          a = e(7),
          r = e(25),
          s = e(26),
          l = e(23),
          d = e(24);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var c = {
            promise: null,
            load: function (e) {
              'undefined' != typeof dashjs
                ? c._createPlayer(e)
                : ((e.options.path =
                    'string' == typeof e.options.path
                      ? e.options.path
                      : 'https://cdn.dashjs.org/latest/dash.mediaplayer.min.js'),
                  (c.promise = c.promise || (0, d.loadScript)(e.options.path)),
                  c.promise.then(function () {
                    c._createPlayer(e);
                  }));
            },
            _createPlayer: function (e) {
              var t = dashjs.MediaPlayer().create();
              i.default['__ready__' + e.id](t);
            },
          },
          f = {
            name: 'native_dash',
            options: {
              prefix: 'native_dash',
              dash: {
                path: 'https://cdn.dashjs.org/latest/dash.mediaplayer.min.js',
                debug: !1,
              },
            },
            canPlayType: function (e) {
              return (
                l.HAS_MSE &&
                ['application/dash+xml'].indexOf(e.toLowerCase()) > -1
              );
            },
            create: function (e, t, n) {
              var s = e.originalNode,
                l = e.id + '_' + t.prefix,
                d = s.getAttribute('preload'),
                u = s.autoplay,
                f = null,
                p = null;
              (f = s.cloneNode(!0)), (t = Object.assign(t, e.options));
              for (
                var m = o.default.html5media.properties,
                  h = function (e) {
                    var t =
                      '' + e.substring(0, 1).toUpperCase() + e.substring(1);
                    (f['get' + t] = function () {
                      return null !== p ? f[e] : null;
                    }),
                      (f['set' + t] = function (t) {
                        -1 ===
                          o.default.html5media.readOnlyProperties.indexOf(e) &&
                          null !== p &&
                          ('src' === e && (p.attachSource(t), u && f.play()),
                          (f[e] = t));
                      });
                  },
                  v = 0,
                  y = m.length;
                v < y;
                v++
              )
                h(m[v]);
              if (
                ((i.default['__ready__' + l] = function (n) {
                  (e.dashPlayer = p = n),
                    p.getDebug().setLogToBrowserConsole(t.dash.debug),
                    p.setAutoPlay((d && 'auto' === d) || u),
                    p.setScheduleWhilePaused((d && 'auto' === d) || u);
                  for (
                    var i,
                      a = o.default.html5media.events.concat([
                        'click',
                        'mouseover',
                        'mouseout',
                      ]),
                      s = dashjs.MediaPlayer.events,
                      l = 0,
                      c = a.length;
                    l < c;
                    l++
                  )
                    'loadedmetadata' === (i = a[l]) &&
                      p.initialize(f, f.src, !1),
                      f.addEventListener(i, function (t) {
                        var n = (0, r.createEvent)(t.type, e);
                        e.dispatchEvent(n);
                      });
                  var m = function (t) {
                    var n = (0, r.createEvent)(t.type, f);
                    (n.data = t),
                      e.dispatchEvent(n),
                      'error' === t.type.toLowerCase() && console.error(t);
                  };
                  for (var h in s) s.hasOwnProperty(h) && p.on(s[h], m);
                }),
                n && n.length > 0)
              )
                for (var g = 0, b = n.length; g < b; g++)
                  if (a.renderer.renderers[t.prefix].canPlayType(n[g].type)) {
                    f.setAttribute('src', n[g].src);
                    break;
                  }
              f.setAttribute('id', l),
                s.parentNode.insertBefore(f, s),
                (s.autoplay = !1),
                (s.style.display = 'none'),
                c.load({ options: t.dash, id: l }),
                (f.setSize = function (e, t) {
                  return (
                    (f.style.width = e + 'px'), (f.style.height = t + 'px'), f
                  );
                }),
                (f.hide = function () {
                  return f.pause(), (f.style.display = 'none'), f;
                }),
                (f.show = function () {
                  return (f.style.display = ''), f;
                });
              var E = (0, r.createEvent)('rendererready', f);
              return e.dispatchEvent(E), f;
            },
          };
        s.typeChecks.push(function (e) {
          return ~e.toLowerCase().indexOf('.mpd')
            ? 'application/dash+xml'
            : null;
        }),
          a.renderer.add(f);
      },
      { 23: 23, 24: 24, 25: 25, 26: 26, 3: 3, 6: 6, 7: 7 },
    ],
    18: [
      function (e, t, n) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.PluginDetector = void 0);
        var i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          o = f(e(3)),
          a = f(e(2)),
          r = f(e(6)),
          s = f(e(4)),
          l = e(7),
          d = e(25),
          u = e(23),
          c = e(26);
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var p = (n.PluginDetector = {
          plugins: [],
          hasPluginVersion: function (e, t) {
            var n = p.plugins[e];
            return (
              (t[1] = t[1] || 0),
              (t[2] = t[2] || 0),
              n[0] > t[0] ||
                (n[0] === t[0] && n[1] > t[1]) ||
                (n[0] === t[0] && n[1] === t[1] && n[2] >= t[2])
            );
          },
          addPlugin: function (e, t, n, i, o) {
            p.plugins[e] = p.detectPlugin(t, n, i, o);
          },
          detectPlugin: function (e, t, n, a) {
            var r = [0, 0, 0],
              s = void 0,
              l = void 0;
            if (
              null !== u.NAV.plugins &&
              void 0 !== u.NAV.plugins &&
              'object' === i(u.NAV.plugins[e])
            ) {
              if (
                (s = u.NAV.plugins[e].description) &&
                (void 0 === u.NAV.mimeTypes ||
                  !u.NAV.mimeTypes[t] ||
                  u.NAV.mimeTypes[t].enabledPlugin)
              )
                for (
                  var d = 0,
                    c = (r = s
                      .replace(e, '')
                      .replace(/^\s+/, '')
                      .replace(/\sr/gi, '.')
                      .split('.')).length;
                  d < c;
                  d++
                )
                  r[d] = parseInt(r[d].match(/\d+/), 10);
            } else if (void 0 !== o.default.ActiveXObject)
              try {
                (l = new ActiveXObject(n)) && (r = a(l));
              } catch (e) {}
            return r;
          },
        });
        p.addPlugin(
          'flash',
          'Shockwave Flash',
          'application/x-shockwave-flash',
          'ShockwaveFlash.ShockwaveFlash',
          function (e) {
            var t = [],
              n = e.GetVariable('$version');
            return (
              n &&
                ((n = n.split(' ')[1].split(',')),
                (t = [
                  parseInt(n[0], 10),
                  parseInt(n[1], 10),
                  parseInt(n[2], 10),
                ])),
              t
            );
          }
        );
        var m = {
          create: function (e, t, n) {
            var i = {};
            (i.options = t),
              (i.id = e.id + '_' + i.options.prefix),
              (i.mediaElement = e),
              (i.flashState = {}),
              (i.flashApi = null),
              (i.flashApiStack = []);
            for (
              var f = r.default.html5media.properties,
                p = function (e) {
                  i.flashState[e] = null;
                  var t = '' + e.substring(0, 1).toUpperCase() + e.substring(1);
                  (i['get' + t] = function () {
                    if (null !== i.flashApi) {
                      if (void 0 !== i.flashApi['get_' + e]) {
                        var t = i.flashApi['get_' + e]();
                        return 'buffered' === e
                          ? {
                              start: function () {
                                return 0;
                              },
                              end: function () {
                                return t;
                              },
                              length: 1,
                            }
                          : t;
                      }
                      return null;
                    }
                    return null;
                  }),
                    (i['set' + t] = function (t) {
                      'src' === e && (t = (0, c.absolutizeUrl)(t)),
                        null !== i.flashApi && void 0 !== i.flashApi['set_' + e]
                          ? i.flashApi['set_' + e](t)
                          : i.flashApiStack.push({
                              type: 'set',
                              propName: e,
                              value: t,
                            });
                    });
                },
                m = 0,
                h = f.length;
              m < h;
              m++
            )
              p(f[m]);
            var v = r.default.html5media.methods,
              y = function (e) {
                i[e] = function () {
                  if (null !== i.flashApi) {
                    if (i.flashApi['fire_' + e])
                      try {
                        i.flashApi['fire_' + e]();
                      } catch (e) {}
                  } else i.flashApiStack.push({ type: 'call', methodName: e });
                };
              };
            v.push('stop');
            for (var g = 0, b = v.length; g < b; g++) y(v[g]);
            for (var E = ['rendererready'], S = 0, x = E.length; S < x; S++) {
              var w = (0, d.createEvent)(E[S], i);
              e.dispatchEvent(w);
            }
            (o.default['__ready__' + i.id] = function () {
              if (
                ((i.flashReady = !0),
                (i.flashApi = a.default.getElementById('__' + i.id)),
                i.flashApiStack.length)
              )
                for (var e = 0, t = i.flashApiStack.length; e < t; e++) {
                  var n = i.flashApiStack[e];
                  if ('set' === n.type) {
                    var o = n.propName,
                      r = '' + o.substring(0, 1).toUpperCase() + o.substring(1);
                    i['set' + r](n.value);
                  } else 'call' === n.type && i[n.methodName]();
                }
            }),
              (o.default['__event__' + i.id] = function (e, t) {
                var n = (0, d.createEvent)(e, i);
                (n.message = t || ''), i.mediaElement.dispatchEvent(n);
              }),
              (i.flashWrapper = a.default.createElement('div')),
              -1 ===
                ['always', 'sameDomain'].indexOf(i.options.shimScriptAccess) &&
                (i.options.shimScriptAccess = 'sameDomain');
            var P = e.originalNode.autoplay,
              T = [
                'uid=' + i.id,
                'autoplay=' + P,
                'allowScriptAccess=' + i.options.shimScriptAccess,
              ],
              C =
                null !== e.originalNode &&
                'video' === e.originalNode.tagName.toLowerCase(),
              k = C ? e.originalNode.height : 1,
              _ = C ? e.originalNode.width : 1;
            e.originalNode.getAttribute('src') &&
              T.push('src=' + e.originalNode.getAttribute('src')),
              !0 === i.options.enablePseudoStreaming &&
                (T.push(
                  'pseudostreamstart=' +
                    i.options.pseudoStreamingStartQueryParam
                ),
                T.push('pseudostreamtype=' + i.options.pseudoStreamingType)),
              e.appendChild(i.flashWrapper),
              null !== e.originalNode &&
                (e.originalNode.style.display = 'none');
            var N = [];
            if (u.IS_IE) {
              var A = a.default.createElement('div');
              i.flashWrapper.appendChild(A),
                (N = [
                  'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',
                  'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"',
                  'id="__' + i.id + '"',
                  'width="' + _ + '"',
                  'height="' + k + '"',
                ]),
                C || N.push('style="clip: rect(0 0 0 0); position: absolute;"'),
                (A.outerHTML =
                  '<object ' +
                  N.join(' ') +
                  '><param name="movie" value="' +
                  i.options.pluginPath +
                  i.options.filename +
                  '?x=' +
                  new Date() +
                  '" /><param name="flashvars" value="' +
                  T.join('&amp;') +
                  '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' +
                  i.options.shimScriptAccess +
                  '" /><param name="allowFullScreen" value="true" /><div>' +
                  s.default.t('mejs.install-flash') +
                  '</div></object>');
            } else
              (N = [
                'id="__' + i.id + '"',
                'name="__' + i.id + '"',
                'play="true"',
                'loop="false"',
                'quality="high"',
                'bgcolor="#000000"',
                'wmode="transparent"',
                'allowScriptAccess="' + i.options.shimScriptAccess + '"',
                'allowFullScreen="true"',
                'type="application/x-shockwave-flash"',
                'pluginspage="//www.macromedia.com/go/getflashplayer"',
                'src="' + i.options.pluginPath + i.options.filename + '"',
                'flashvars="' + T.join('&') + '"',
                'width="' + _ + '"',
                'height="' + k + '"',
              ]),
                C || N.push('style="clip: rect(0 0 0 0); position: absolute;"'),
                (i.flashWrapper.innerHTML = '<embed ' + N.join(' ') + '>');
            if (
              ((i.flashNode = i.flashWrapper.lastChild),
              (i.hide = function () {
                C && (i.flashNode.style.display = 'none');
              }),
              (i.show = function () {
                C && (i.flashNode.style.display = '');
              }),
              (i.setSize = function (e, t) {
                (i.flashNode.style.width = e + 'px'),
                  (i.flashNode.style.height = t + 'px'),
                  null !== i.flashApi &&
                    'function' == typeof i.flashApi.fire_setSize &&
                    i.flashApi.fire_setSize(e, t);
              }),
              (i.destroy = function () {
                i.flashNode.remove();
              }),
              n && n.length > 0)
            )
              for (var L = 0, F = n.length; L < F; L++)
                if (l.renderer.renderers[t.prefix].canPlayType(n[L].type)) {
                  i.setSrc(n[L].src);
                  break;
                }
            return i;
          },
        };
        if (p.hasPluginVersion('flash', [10, 0, 0])) {
          c.typeChecks.push(function (e) {
            return (e = e.toLowerCase()).startsWith('rtmp')
              ? ~e.indexOf('.mp3')
                ? 'audio/rtmp'
                : 'video/rtmp'
              : /\.og(a|g)/i.test(e)
              ? 'audio/ogg'
              : ~e.indexOf('.m3u8')
              ? 'application/x-mpegURL'
              : ~e.indexOf('.mpd')
              ? 'application/dash+xml'
              : ~e.indexOf('.flv')
              ? 'video/flv'
              : null;
          });
          var h = {
            name: 'flash_video',
            options: {
              prefix: 'flash_video',
              filename: 'mediaelement-flash-video.swf',
              enablePseudoStreaming: !1,
              pseudoStreamingStartQueryParam: 'start',
              pseudoStreamingType: 'byte',
            },
            canPlayType: function (e) {
              return ~[
                'video/mp4',
                'video/rtmp',
                'audio/rtmp',
                'rtmp/mp4',
                'audio/mp4',
                'video/flv',
                'video/x-flv',
              ].indexOf(e.toLowerCase());
            },
            create: m.create,
          };
          l.renderer.add(h);
          var v = {
            name: 'flash_hls',
            options: {
              prefix: 'flash_hls',
              filename: 'mediaelement-flash-video-hls.swf',
            },
            canPlayType: function (e) {
              return ~[
                'application/x-mpegurl',
                'vnd.apple.mpegurl',
                'audio/mpegurl',
                'audio/hls',
                'video/hls',
              ].indexOf(e.toLowerCase());
            },
            create: m.create,
          };
          l.renderer.add(v);
          var y = {
            name: 'flash_dash',
            options: {
              prefix: 'flash_dash',
              filename: 'mediaelement-flash-video-mdash.swf',
            },
            canPlayType: function (e) {
              return ~['application/dash+xml'].indexOf(e.toLowerCase());
            },
            create: m.create,
          };
          l.renderer.add(y);
          var g = {
            name: 'flash_audio',
            options: {
              prefix: 'flash_audio',
              filename: 'mediaelement-flash-audio.swf',
            },
            canPlayType: function (e) {
              return ~['audio/mp3'].indexOf(e.toLowerCase());
            },
            create: m.create,
          };
          l.renderer.add(g);
          var b = {
            name: 'flash_audio_ogg',
            options: {
              prefix: 'flash_audio_ogg',
              filename: 'mediaelement-flash-audio-ogg.swf',
            },
            canPlayType: function (e) {
              return ~['audio/ogg', 'audio/oga', 'audio/ogv'].indexOf(
                e.toLowerCase()
              );
            },
            create: m.create,
          };
          l.renderer.add(b);
        }
      },
      { 2: 2, 23: 23, 25: 25, 26: 26, 3: 3, 4: 4, 6: 6, 7: 7 },
    ],
    19: [
      function (e, t, n) {
        'use strict';
        var i = u(e(3)),
          o = u(e(6)),
          a = e(7),
          r = e(25),
          s = e(23),
          l = e(26),
          d = e(24);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var c = {
            promise: null,
            load: function (e) {
              'undefined' != typeof flvjs
                ? c._createPlayer(e)
                : ((e.options.path =
                    'string' == typeof e.options.path
                      ? e.options.path
                      : 'https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.2.0/flv.min.js'),
                  (c.promise = c.promise || (0, d.loadScript)(e.options.path)),
                  c.promise.then(function () {
                    c._createPlayer(e);
                  }));
            },
            _createPlayer: function (e) {
              var t = flvjs.createPlayer(e.options);
              i.default['__ready__' + e.id](t);
            },
          },
          f = {
            name: 'native_flv',
            options: {
              prefix: 'native_flv',
              flv: {
                path: 'https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.2.0/flv.min.js',
                cors: !0,
              },
            },
            canPlayType: function (e) {
              return (
                s.HAS_MSE &&
                ['video/x-flv', 'video/flv'].indexOf(e.toLowerCase()) > -1
              );
            },
            create: function (e, t, n) {
              var s = e.originalNode,
                l = e.id + '_' + t.prefix,
                d = null,
                u = null;
              (d = s.cloneNode(!0)), (t = Object.assign(t, e.options));
              for (
                var f = o.default.html5media.properties,
                  p = function (e) {
                    var t =
                      '' + e.substring(0, 1).toUpperCase() + e.substring(1);
                    (d['get' + t] = function () {
                      return null !== u ? d[e] : null;
                    }),
                      (d['set' + t] = function (t) {
                        -1 ===
                          o.default.html5media.readOnlyProperties.indexOf(e) &&
                          null !== u &&
                          ((d[e] = t),
                          'src' === e &&
                            (u.unload(),
                            u.detachMediaElement(),
                            u.attachMediaElement(d),
                            u.load()));
                      });
                  },
                  m = 0,
                  h = f.length;
                m < h;
                m++
              )
                p(f[m]);
              if (
                ((i.default['__ready__' + l] = function (t) {
                  e.flvPlayer = u = t;
                  for (
                    var n,
                      i = o.default.html5media.events.concat([
                        'click',
                        'mouseover',
                        'mouseout',
                      ]),
                      a = 0,
                      s = i.length;
                    a < s;
                    a++
                  )
                    'loadedmetadata' === (n = i[a]) &&
                      (u.unload(),
                      u.detachMediaElement(),
                      u.attachMediaElement(d),
                      u.load()),
                      d.addEventListener(n, function (t) {
                        var n = (0, r.createEvent)(t.type, e);
                        e.dispatchEvent(n);
                      });
                }),
                n && n.length > 0)
              )
                for (var v = 0, y = n.length; v < y; v++)
                  if (a.renderer.renderers[t.prefix].canPlayType(n[v].type)) {
                    d.setAttribute('src', n[v].src);
                    break;
                  }
              d.setAttribute('id', l),
                s.parentNode.insertBefore(d, s),
                (s.autoplay = !1),
                (s.style.display = 'none'),
                (t.flv.type = 'flv'),
                (t.flv.url = d.getAttribute('src')),
                c.load({ options: t.flv, id: l }),
                (d.setSize = function (e, t) {
                  return (
                    (d.style.width = e + 'px'), (d.style.height = t + 'px'), d
                  );
                }),
                (d.hide = function () {
                  return null !== u && u.pause(), (d.style.display = 'none'), d;
                }),
                (d.show = function () {
                  return (d.style.display = ''), d;
                }),
                (d.destroy = function () {
                  null !== u && u.destroy();
                });
              var g = (0, r.createEvent)('rendererready', d);
              return e.dispatchEvent(g), d;
            },
          };
        l.typeChecks.push(function (e) {
          return ~e.toLowerCase().indexOf('.flv') ? 'video/flv' : null;
        }),
          a.renderer.add(f);
      },
      { 23: 23, 24: 24, 25: 25, 26: 26, 3: 3, 6: 6, 7: 7 },
    ],
    20: [
      function (e, t, n) {
        'use strict';
        var i = u(e(3)),
          o = u(e(6)),
          a = e(7),
          r = e(25),
          s = e(23),
          l = e(26),
          d = e(24);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var c = {
            promise: null,
            load: function (e) {
              'undefined' != typeof Hls
                ? c._createPlayer(e)
                : ((e.options.path =
                    'string' == typeof e.options.path
                      ? e.options.path
                      : 'https://cdn.jsdelivr.net/hls.js/latest/hls.min.js'),
                  (c.promise = c.promise || (0, d.loadScript)(e.options.path)),
                  c.promise.then(function () {
                    c._createPlayer(e);
                  }));
            },
            _createPlayer: function (e) {
              var t = new Hls(e.options);
              return i.default['__ready__' + e.id](t), t;
            },
          },
          f = {
            name: 'native_hls',
            options: {
              prefix: 'native_hls',
              hls: {
                path: 'https://cdn.jsdelivr.net/hls.js/latest/hls.min.js',
                autoStartLoad: !1,
                debug: !1,
              },
            },
            canPlayType: function (e) {
              return (
                s.HAS_MSE &&
                [
                  'application/x-mpegurl',
                  'vnd.apple.mpegurl',
                  'audio/mpegurl',
                  'audio/hls',
                  'video/hls',
                ].indexOf(e.toLowerCase()) > -1
              );
            },
            create: function (e, t, n) {
              var s = e.originalNode,
                l = e.id + '_' + t.prefix,
                d = s.getAttribute('preload'),
                u = s.autoplay,
                f = null,
                p = null;
              (p = s.cloneNode(!0)),
                ((t = Object.assign(t, e.options)).hls.autoStartLoad =
                  (d && 'none' !== d) || u);
              for (
                var m = o.default.html5media.properties,
                  h = function (e) {
                    var n =
                      '' + e.substring(0, 1).toUpperCase() + e.substring(1);
                    (p['get' + n] = function () {
                      return null !== f ? p[e] : null;
                    }),
                      (p['set' + n] = function (n) {
                        -1 ===
                          o.default.html5media.readOnlyProperties.indexOf(e) &&
                          null !== f &&
                          ((p[e] = n),
                          'src' === e &&
                            (f.destroy(),
                            (f = c._createPlayer({
                              options: t.hls,
                              id: l,
                            })).loadSource(n),
                            f.attachMedia(p)));
                      });
                  },
                  v = 0,
                  y = m.length;
                v < y;
                v++
              )
                h(m[v]);
              if (
                ((i.default['__ready__' + l] = function (t) {
                  e.hlsPlayer = f = t;
                  for (
                    var n = o.default.html5media.events.concat([
                        'click',
                        'mouseover',
                        'mouseout',
                      ]),
                      i = Hls.Events,
                      a = function (t) {
                        if ('loadedmetadata' === t) {
                          var n = e.originalNode.src;
                          f.detachMedia(), f.loadSource(n), f.attachMedia(p);
                        }
                        p.addEventListener(t, function (t) {
                          var n = (0, r.createEvent)(t.type, e);
                          e.dispatchEvent(n);
                        });
                      },
                      s = 0,
                      l = n.length;
                    s < l;
                    s++
                  )
                    a(n[s]);
                  var d = void 0,
                    u = void 0,
                    c = function (t, n) {
                      var i = (0, r.createEvent)(t, p);
                      if (
                        ((i.data = n),
                        e.dispatchEvent(i),
                        'hlsError' === t && (console.warn(t, n), n.fatal))
                      )
                        switch (n.type) {
                          case 'mediaError':
                            var o = new Date().getTime();
                            !d || o - d > 3e3
                              ? ((d = new Date().getTime()),
                                f.recoverMediaError())
                              : !u || o - u > 3e3
                              ? ((u = new Date().getTime()),
                                console.warn(
                                  'Attempting to swap Audio Codec and recover from media error'
                                ),
                                f.swapAudioCodec(),
                                f.recoverMediaError())
                              : console.error(
                                  'Cannot recover, last media error recovery failed'
                                );
                            break;
                          case 'networkError':
                            console.error('Network error');
                            break;
                          default:
                            f.destroy();
                        }
                    };
                  for (var m in i) i.hasOwnProperty(m) && f.on(i[m], c);
                }),
                n && n.length > 0)
              )
                for (var g = 0, b = n.length; g < b; g++)
                  if (a.renderer.renderers[t.prefix].canPlayType(n[g].type)) {
                    p.setAttribute('src', n[g].src);
                    break;
                  }
              'auto' === d ||
                u ||
                (p.addEventListener('play', function () {
                  null !== f && f.startLoad();
                }),
                p.addEventListener('pause', function () {
                  null !== f && f.stopLoad();
                })),
                p.setAttribute('id', l),
                s.parentNode.insertBefore(p, s),
                (s.autoplay = !1),
                (s.style.display = 'none'),
                c.load({ options: t.hls, id: l }),
                (p.setSize = function (e, t) {
                  return (
                    (p.style.width = e + 'px'), (p.style.height = t + 'px'), p
                  );
                }),
                (p.hide = function () {
                  return p.pause(), (p.style.display = 'none'), p;
                }),
                (p.show = function () {
                  return (p.style.display = ''), p;
                }),
                (p.destroy = function () {
                  null !== f && f.destroy();
                }),
                (p.stop = function () {
                  null !== f && f.stopLoad();
                });
              var E = (0, r.createEvent)('rendererready', p);
              return e.dispatchEvent(E), p;
            },
          };
        l.typeChecks.push(function (e) {
          return ~e.toLowerCase().indexOf('.m3u8')
            ? 'application/x-mpegURL'
            : null;
        }),
          a.renderer.add(f);
      },
      { 23: 23, 24: 24, 25: 25, 26: 26, 3: 3, 6: 6, 7: 7 },
    ],
    21: [
      function (e, t, n) {
        'use strict';
        var i = d(e(3)),
          o = d(e(2)),
          a = d(e(6)),
          r = e(7),
          s = e(25),
          l = e(23);
        function d(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = {
          name: 'html5',
          options: { prefix: 'html5' },
          canPlayType: function (e) {
            var t = o.default.createElement('video');
            return (l.IS_ANDROID && /\/mp(3|4)$/i.test(e)) ||
              (~[
                'application/x-mpegurl',
                'vnd.apple.mpegurl',
                'audio/mpegurl',
                'audio/hls',
                'video/hls',
              ].indexOf(e.toLowerCase()) &&
                l.SUPPORTS_NATIVE_HLS)
              ? 'yes'
              : t.canPlayType
              ? t.canPlayType(e.toLowerCase()).replace(/no/, '')
              : '';
          },
          create: function (e, t, n) {
            var i = e.id + '_' + t.prefix,
              l = null;
            void 0 === e.originalNode || null === e.originalNode
              ? ((l = o.default.createElement('audio')), e.appendChild(l))
              : (l = e.originalNode),
              l.setAttribute('id', i);
            for (
              var d = a.default.html5media.properties,
                u = function (e) {
                  var t = '' + e.substring(0, 1).toUpperCase() + e.substring(1);
                  (l['get' + t] = function () {
                    return l[e];
                  }),
                    (l['set' + t] = function (t) {
                      -1 ===
                        a.default.html5media.readOnlyProperties.indexOf(e) &&
                        (l[e] = t);
                    });
                },
                c = 0,
                f = d.length;
              c < f;
              c++
            )
              u(d[c]);
            for (
              var p,
                m = a.default.html5media.events.concat([
                  'click',
                  'mouseover',
                  'mouseout',
                ]),
                h = 0,
                v = m.length;
              h < v;
              h++
            )
              (p = m[h]),
                l.addEventListener(p, function (t) {
                  var n = (0, s.createEvent)(t.type, e);
                  e.dispatchEvent(n);
                });
            if (
              ((l.setSize = function (e, t) {
                return (
                  (l.style.width = e + 'px'), (l.style.height = t + 'px'), l
                );
              }),
              (l.hide = function () {
                return (l.style.display = 'none'), l;
              }),
              (l.show = function () {
                return (l.style.display = ''), l;
              }),
              n && n.length > 0)
            )
              for (var y = 0, g = n.length; y < g; y++)
                if (r.renderer.renderers[t.prefix].canPlayType(n[y].type)) {
                  l.setAttribute('src', n[y].src);
                  break;
                }
            var b = (0, s.createEvent)('rendererready', l);
            return e.dispatchEvent(b), l;
          },
        };
        (i.default.HtmlMediaElement = a.default.HtmlMediaElement = u),
          r.renderer.add(u);
      },
      { 2: 2, 23: 23, 25: 25, 3: 3, 6: 6, 7: 7 },
    ],
    22: [
      function (e, t, n) {
        'use strict';
        var i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          o = c(e(3)),
          a = c(e(2)),
          r = c(e(6)),
          s = e(7),
          l = e(25),
          d = e(26),
          u = e(24);
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var f = {
            isIframeStarted: !1,
            isIframeLoaded: !1,
            iframeQueue: [],
            enqueueIframe: function (e) {
              (f.isLoaded = 'undefined' != typeof YT && YT.loaded),
                f.isLoaded
                  ? f.createIframe(e)
                  : (f.loadIframeApi(), f.iframeQueue.push(e));
            },
            loadIframeApi: function () {
              f.isIframeStarted ||
                ((0, u.loadScript)('https://www.youtube.com/player_api'),
                (f.isIframeStarted = !0));
            },
            iFrameReady: function () {
              for (
                f.isLoaded = !0, f.isIframeLoaded = !0;
                f.iframeQueue.length > 0;

              ) {
                var e = f.iframeQueue.pop();
                f.createIframe(e);
              }
            },
            createIframe: function (e) {
              return new YT.Player(e.containerId, e);
            },
            getYouTubeId: function (e) {
              var t = '';
              return (
                e.indexOf('?') > 0
                  ? '' === (t = f.getYouTubeIdFromParam(e)) &&
                    (t = f.getYouTubeIdFromUrl(e))
                  : (t = f.getYouTubeIdFromUrl(e)),
                t
              );
            },
            getYouTubeIdFromParam: function (e) {
              if (void 0 === e || null === e || !e.trim().length) return null;
              for (
                var t = e.split('?')[1].split('&'), n = '', i = 0, o = t.length;
                i < o;
                i++
              ) {
                var a = t[i].split('=');
                if ('v' === a[0]) {
                  n = a[1];
                  break;
                }
              }
              return n;
            },
            getYouTubeIdFromUrl: function (e) {
              return void 0 !== e && null !== e && e.trim().length
                ? (e = e.split('?')[0]).substring(e.lastIndexOf('/') + 1)
                : null;
            },
            getYouTubeNoCookieUrl: function (e) {
              if (
                void 0 === e ||
                null === e ||
                !e.trim().length ||
                -1 === e.indexOf('//www.youtube')
              )
                return e;
              var t = e.split('/');
              return (
                (t[2] = t[2].replace('.com', '-nocookie.com')), t.join('/')
              );
            },
          },
          p = {
            name: 'youtube_iframe',
            options: {
              prefix: 'youtube_iframe',
              youtube: {
                autoplay: 0,
                controls: 0,
                disablekb: 1,
                end: 0,
                loop: 0,
                modestbranding: 0,
                playsinline: 0,
                rel: 0,
                showinfo: 0,
                start: 0,
                iv_load_policy: 3,
                nocookie: !1,
              },
            },
            canPlayType: function (e) {
              return ~['video/youtube', 'video/x-youtube'].indexOf(
                e.toLowerCase()
              );
            },
            create: function (e, t, n) {
              var i = {},
                s = [],
                d = null,
                u = !0,
                c = !1,
                p = null;
              (i.options = t),
                (i.id = e.id + '_' + t.prefix),
                (i.mediaElement = e);
              for (
                var m = r.default.html5media.properties,
                  h = function (t) {
                    var n =
                      '' + t.substring(0, 1).toUpperCase() + t.substring(1);
                    (i['get' + n] = function () {
                      if (null !== d) {
                        switch (t) {
                          case 'currentTime':
                            return d.getCurrentTime();
                          case 'duration':
                            return d.getDuration();
                          case 'volume':
                            return d.getVolume() / 100;
                          case 'paused':
                            return u;
                          case 'ended':
                            return c;
                          case 'muted':
                            return d.isMuted();
                          case 'buffered':
                            var e = d.getVideoLoadedFraction(),
                              n = d.getDuration();
                            return {
                              start: function () {
                                return 0;
                              },
                              end: function () {
                                return e * n;
                              },
                              length: 1,
                            };
                          case 'src':
                            return d.getVideoUrl();
                          case 'readyState':
                            return 4;
                        }
                        return null;
                      }
                      return null;
                    }),
                      (i['set' + n] = function (n) {
                        if (null !== d)
                          switch (t) {
                            case 'src':
                              var o = 'string' == typeof n ? n : n[0].src,
                                a = f.getYouTubeId(o);
                              e.originalNode.autoplay
                                ? d.loadVideoById(a)
                                : d.cueVideoById(a);
                              break;
                            case 'currentTime':
                              d.seekTo(n);
                              break;
                            case 'muted':
                              n ? d.mute() : d.unMute(),
                                setTimeout(function () {
                                  var t = (0, l.createEvent)('volumechange', i);
                                  e.dispatchEvent(t);
                                }, 50);
                              break;
                            case 'volume':
                              n,
                                d.setVolume(100 * n),
                                setTimeout(function () {
                                  var t = (0, l.createEvent)('volumechange', i);
                                  e.dispatchEvent(t);
                                }, 50);
                              break;
                            case 'readyState':
                              var r = (0, l.createEvent)('canplay', i);
                              e.dispatchEvent(r);
                          }
                        else s.push({ type: 'set', propName: t, value: n });
                      });
                  },
                  v = 0,
                  y = m.length;
                v < y;
                v++
              )
                h(m[v]);
              for (
                var g = r.default.html5media.methods,
                  b = function (e) {
                    i[e] = function () {
                      if (null !== d)
                        switch (e) {
                          case 'play':
                            return (u = !1), d.playVideo();
                          case 'pause':
                            return (u = !0), d.pauseVideo();
                          case 'load':
                            return null;
                        }
                      else s.push({ type: 'call', methodName: e });
                    };
                  },
                  E = 0,
                  S = g.length;
                E < S;
                E++
              )
                b(g[E]);
              var x = a.default.createElement('div');
              (x.id = i.id),
                i.options.youtube.nocookie &&
                  e.originalNode.setAttribute(
                    'src',
                    f.getYouTubeNoCookieUrl(n[0].src)
                  ),
                e.originalNode.parentNode.insertBefore(x, e.originalNode),
                (e.originalNode.style.display = 'none');
              var w = 'audio' === e.originalNode.tagName.toLowerCase(),
                P = w ? '1' : e.originalNode.height,
                T = w ? '1' : e.originalNode.width,
                C = f.getYouTubeId(n[0].src),
                k = {
                  id: i.id,
                  containerId: x.id,
                  videoId: C,
                  height: P,
                  width: T,
                  playerVars: Object.assign(
                    {
                      controls: 0,
                      rel: 0,
                      disablekb: 1,
                      showinfo: 0,
                      modestbranding: 0,
                      html5: 1,
                      playsinline: 0,
                      start: 0,
                      end: 0,
                      iv_load_policy: 3,
                    },
                    i.options.youtube
                  ),
                  origin: o.default.location.host,
                  events: {
                    onReady: function (t) {
                      if (
                        ((e.youTubeApi = d = t.target),
                        (e.youTubeState = { paused: !0, ended: !1 }),
                        s.length)
                      )
                        for (var n = 0, o = s.length; n < o; n++) {
                          var a = s[n];
                          if ('set' === a.type) {
                            var r = a.propName,
                              u =
                                '' +
                                r.substring(0, 1).toUpperCase() +
                                r.substring(1);
                            i['set' + u](a.value);
                          } else 'call' === a.type && i[a.methodName]();
                        }
                      p = d.getIframe();
                      for (
                        var c = ['mouseover', 'mouseout'],
                          f = function (t) {
                            var n = (0, l.createEvent)(t.type, i);
                            e.dispatchEvent(n);
                          },
                          m = 0,
                          h = c.length;
                        m < h;
                        m++
                      )
                        p.addEventListener(c[m], f, !1);
                      for (
                        var v = [
                            'rendererready',
                            'loadeddata',
                            'loadedmetadata',
                            'canplay',
                          ],
                          y = 0,
                          g = v.length;
                        y < g;
                        y++
                      ) {
                        var b = (0, l.createEvent)(v[y], i);
                        e.dispatchEvent(b);
                      }
                    },
                    onStateChange: function (t) {
                      var n = [];
                      switch (t.data) {
                        case -1:
                          (n = ['loadedmetadata']), (u = !0), (c = !1);
                          break;
                        case 0:
                          (n = ['ended']), (u = !1), (c = !0), i.stopInterval();
                          break;
                        case 1:
                          (n = ['play', 'playing']),
                            (u = !1),
                            (c = !1),
                            i.startInterval();
                          break;
                        case 2:
                          (n = ['pause']), (u = !0), (c = !1), i.stopInterval();
                          break;
                        case 3:
                          (n = ['progress']), (c = !1);
                          break;
                        case 5:
                          (n = ['loadeddata', 'loadedmetadata', 'canplay']),
                            (u = !0),
                            (c = !1);
                      }
                      for (var o = 0, a = n.length; o < a; o++) {
                        var r = (0, l.createEvent)(n[o], i);
                        e.dispatchEvent(r);
                      }
                    },
                    onError: function (t) {
                      var n = (0, l.createEvent)('error', i);
                      (n.data = t.data), e.dispatchEvent(n);
                    },
                  },
                };
              return (
                w && (k.playerVars.playsinline = 1),
                f.enqueueIframe(k),
                (i.onEvent = function (t, n, i) {
                  null !== i && void 0 !== i && (e.youTubeState = i);
                }),
                (i.setSize = function (e, t) {
                  null !== d && d.setSize(e, t);
                }),
                (i.hide = function () {
                  i.stopInterval(), i.pause(), p && (p.style.display = 'none');
                }),
                (i.show = function () {
                  p && (p.style.display = '');
                }),
                (i.destroy = function () {
                  d.destroy();
                }),
                (i.interval = null),
                (i.startInterval = function () {
                  i.interval = setInterval(function () {
                    var t = (0, l.createEvent)('timeupdate', i);
                    e.dispatchEvent(t);
                  }, 250);
                }),
                (i.stopInterval = function () {
                  i.interval && clearInterval(i.interval);
                }),
                i
              );
            },
          };
        o.default.postMessage &&
          i(o.default.addEventListener) &&
          ((o.default.onYouTubePlayerAPIReady = function () {
            f.iFrameReady();
          }),
          d.typeChecks.push(function (e) {
            return /\/\/(www\.youtube|youtu\.be)/i.test(e)
              ? 'video/x-youtube'
              : null;
          }),
          s.renderer.add(p));
      },
      { 2: 2, 24: 24, 25: 25, 26: 26, 3: 3, 6: 6, 7: 7 },
    ],
    23: [
      function (e, t, n) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.cancelFullScreen =
            n.requestFullScreen =
            n.isFullScreen =
            n.FULLSCREEN_EVENT_NAME =
            n.HAS_NATIVE_FULLSCREEN_ENABLED =
            n.HAS_TRUE_NATIVE_FULLSCREEN =
            n.HAS_IOS_FULLSCREEN =
            n.HAS_MS_NATIVE_FULLSCREEN =
            n.HAS_MOZ_NATIVE_FULLSCREEN =
            n.HAS_WEBKIT_NATIVE_FULLSCREEN =
            n.HAS_NATIVE_FULLSCREEN =
            n.SUPPORTS_NATIVE_HLS =
            n.SUPPORT_POINTER_EVENTS =
            n.HAS_MSE =
            n.IS_STOCK_ANDROID =
            n.IS_SAFARI =
            n.IS_FIREFOX =
            n.IS_CHROME =
            n.IS_EDGE =
            n.IS_IE =
            n.IS_ANDROID =
            n.IS_IOS =
            n.IS_IPHONE =
            n.IS_IPAD =
            n.UA =
            n.NAV =
              void 0);
        var i = r(e(3)),
          o = r(e(2)),
          a = r(e(6));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        for (
          var s = (n.NAV = i.default.navigator),
            l = (n.UA = s.userAgent.toLowerCase()),
            d = (n.IS_IPAD = /ipad/i.test(l)),
            u = (n.IS_IPHONE = /iphone/i.test(l)),
            c = ((n.IS_IOS = u || d), (n.IS_ANDROID = /android/i.test(l))),
            f = (n.IS_IE = /(trident|microsoft)/i.test(s.appName)),
            p = (n.IS_EDGE =
              ('msLaunchUri' in s) && !('documentMode' in o.default)),
            m = (n.IS_CHROME = /chrome/i.test(l)),
            h = (n.IS_FIREFOX = /firefox/i.test(l)),
            v = (n.IS_SAFARI = /safari/i.test(l) && !m),
            y = (n.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(
              l
            )),
            g = (n.HAS_MSE = ('MediaSource' in i.default)),
            b = (n.SUPPORT_POINTER_EVENTS = (function () {
              var e = o.default.createElement('x'),
                t = o.default.documentElement,
                n = i.default.getComputedStyle;
              if (!('pointerEvents' in e.style)) return !1;
              (e.style.pointerEvents = 'auto'),
                (e.style.pointerEvents = 'x'),
                t.appendChild(e);
              var a = n && 'auto' === n(e, '').pointerEvents;
              return e.remove(), !!a;
            })()),
            E = ['source', 'track', 'audio', 'video'],
            S = void 0,
            x = 0,
            w = E.length;
          x < w;
          x++
        )
          S = o.default.createElement(E[x]);
        var P = (n.SUPPORTS_NATIVE_HLS =
            v || (c && (m || y)) || (f && /edge/i.test(l))),
          T = void 0 !== S.webkitEnterFullscreen,
          C = void 0 !== S.requestFullscreen;
        T && /mac os x 10_5/i.test(l) && ((C = !1), (T = !1));
        var k = void 0 !== S.webkitRequestFullScreen,
          _ = void 0 !== S.mozRequestFullScreen,
          N = void 0 !== S.msRequestFullscreen,
          A = k || _ || N,
          L = A,
          F = '',
          j = void 0,
          I = void 0,
          M = void 0;
        _
          ? (L = o.default.mozFullScreenEnabled)
          : N && (L = o.default.msFullscreenEnabled),
          m && (T = !1),
          A &&
            (k
              ? (F = 'webkitfullscreenchange')
              : _
              ? (F = 'mozfullscreenchange')
              : N && (F = 'MSFullscreenChange'),
            (n.isFullScreen = j =
              function () {
                return _
                  ? o.default.mozFullScreen
                  : k
                  ? o.default.webkitIsFullScreen
                  : N
                  ? null !== o.default.msFullscreenElement
                  : void 0;
              }),
            (n.requestFullScreen = I =
              function (e) {
                k
                  ? e.webkitRequestFullScreen()
                  : _
                  ? e.mozRequestFullScreen()
                  : N && e.msRequestFullscreen();
              }),
            (n.cancelFullScreen = M =
              function () {
                k
                  ? o.default.webkitCancelFullScreen()
                  : _
                  ? o.default.mozCancelFullScreen()
                  : N && o.default.msExitFullscreen();
              }));
        var O = (n.HAS_NATIVE_FULLSCREEN = C),
          H = (n.HAS_WEBKIT_NATIVE_FULLSCREEN = k),
          q = (n.HAS_MOZ_NATIVE_FULLSCREEN = _),
          R = (n.HAS_MS_NATIVE_FULLSCREEN = N),
          U = (n.HAS_IOS_FULLSCREEN = T),
          V = (n.HAS_TRUE_NATIVE_FULLSCREEN = A),
          D = (n.HAS_NATIVE_FULLSCREEN_ENABLED = L),
          B = (n.FULLSCREEN_EVENT_NAME = F);
        (n.isFullScreen = j),
          (n.requestFullScreen = I),
          (n.cancelFullScreen = M),
          (a.default.Features = a.default.Features || {}),
          (a.default.Features.isiPad = d),
          (a.default.Features.isiPhone = u),
          (a.default.Features.isiOS =
            a.default.Features.isiPhone || a.default.Features.isiPad),
          (a.default.Features.isAndroid = c),
          (a.default.Features.isIE = f),
          (a.default.Features.isEdge = p),
          (a.default.Features.isChrome = m),
          (a.default.Features.isFirefox = h),
          (a.default.Features.isSafari = v),
          (a.default.Features.isStockAndroid = y),
          (a.default.Features.hasMSE = g),
          (a.default.Features.supportsNativeHLS = P),
          (a.default.Features.supportsPointerEvents = b),
          (a.default.Features.hasiOSFullScreen = U),
          (a.default.Features.hasNativeFullscreen = O),
          (a.default.Features.hasWebkitNativeFullScreen = H),
          (a.default.Features.hasMozNativeFullScreen = q),
          (a.default.Features.hasMsNativeFullScreen = R),
          (a.default.Features.hasTrueNativeFullScreen = V),
          (a.default.Features.nativeFullScreenEnabled = D),
          (a.default.Features.fullScreenEventName = B),
          (a.default.Features.isFullScreen = j),
          (a.default.Features.requestFullScreen = I),
          (a.default.Features.cancelFullScreen = M);
      },
      { 2: 2, 3: 3, 6: 6 },
    ],
    24: [
      function (e, t, n) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.removeClass = n.addClass = n.hasClass = void 0),
          (n.loadScript = s),
          (n.offset = l),
          (n.toggleClass = h),
          (n.fadeOut = v),
          (n.fadeIn = y),
          (n.siblings = g),
          (n.visible = b),
          (n.ajax = E);
        var i = r(e(3)),
          o = r(e(2)),
          a = r(e(6));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s(e) {
          return (function (e) {
            var t = [],
              n = -1,
              i = void 0,
              o = void 0;
            function a(e) {
              for (i = e; (o = t.shift()); ) o[n] && o[n](i);
            }
            return (
              e(
                function (e) {
                  return a(e, (n = 0));
                },
                function (e) {
                  return a(e, (n = 1));
                }
              ),
              {
                then: function () {
                  for (
                    var e = arguments.length, o = Array(e), a = 0;
                    a < e;
                    a++
                  )
                    o[a] = arguments[a];
                  ~n ? o[n] && o[n](i) : t.push(o);
                },
              }
            );
          })(function (t, n) {
            var i = o.default.createElement('script');
            (i.src = e),
              (i.async = !0),
              (i.onload = function () {
                i.remove(), t();
              }),
              (i.onerror = function () {
                i.remove(), n();
              }),
              o.default.head.appendChild(i);
          });
        }
        function l(e) {
          var t = e.getBoundingClientRect(),
            n = i.default.pageXOffset || o.default.documentElement.scrollLeft,
            a = i.default.pageYOffset || o.default.documentElement.scrollTop;
          return { top: t.top + a, left: t.left + n };
        }
        var d = void 0,
          u = void 0,
          c = void 0;
        'classList' in o.default.documentElement
          ? ((d = function (e, t) {
              return void 0 !== e.classList && e.classList.contains(t);
            }),
            (u = function (e, t) {
              return e.classList.add(t);
            }),
            (c = function (e, t) {
              return e.classList.remove(t);
            }))
          : ((d = function (e, t) {
              return new RegExp('\\b' + t + '\\b').test(e.className);
            }),
            (u = function (e, t) {
              f(e, t) || (e.className += ' ' + t);
            }),
            (c = function (e, t) {
              e.className = e.className.replace(
                new RegExp('\\b' + t + '\\b', 'g'),
                ''
              );
            }));
        var f = (n.hasClass = d),
          p = (n.addClass = u),
          m = (n.removeClass = c);
        function h(e, t) {
          f(e, t) ? m(e, t) : p(e, t);
        }
        function v(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 400,
            n = arguments[2];
          e.style.opacity || (e.style.opacity = 1);
          var o = null;
          i.default.requestAnimationFrame(function a(r) {
            var s = r - (o = o || r),
              l = parseFloat(1 - s / t, 2);
            (e.style.opacity = l < 0 ? 0 : l),
              s > t
                ? n && 'function' == typeof n && n()
                : i.default.requestAnimationFrame(a);
          });
        }
        function y(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 400,
            n = arguments[2];
          e.style.opacity || (e.style.opacity = 0);
          var o = null;
          i.default.requestAnimationFrame(function a(r) {
            var s = r - (o = o || r),
              l = parseFloat(s / t, 2);
            (e.style.opacity = l > 1 ? 1 : l),
              s > t
                ? n && 'function' == typeof n && n()
                : i.default.requestAnimationFrame(a);
          });
        }
        function g(e, t) {
          var n = [];
          e = e.parentNode.firstChild;
          do {
            (t && !t(e)) || n.push(e);
          } while ((e = e.nextSibling));
          return n;
        }
        function b(e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }
        function E(e, t, n, o) {
          var a = i.default.XMLHttpRequest
              ? new XMLHttpRequest()
              : new ActiveXObject('Microsoft.XMLHTTP'),
            r = 'application/x-www-form-urlencoded; charset=UTF-8',
            s = !1,
            l = '*/'.concat('*');
          switch (t) {
            case 'text':
              r = 'text/plain';
              break;
            case 'json':
              r = 'application/json, text/javascript';
              break;
            case 'html':
              r = 'text/html';
              break;
            case 'xml':
              r = 'application/xml, text/xml';
          }
          'application/x-www-form-urlencoded' !== r &&
            (l = r + ', */*; q=0.01'),
            a &&
              (a.open('GET', e, !0),
              a.setRequestHeader('Accept', l),
              (a.onreadystatechange = function () {
                if (!s && 4 === a.readyState)
                  if (200 === a.status) {
                    s = !0;
                    var e = void 0;
                    switch (t) {
                      case 'json':
                        e = JSON.parse(a.responseText);
                        break;
                      case 'xml':
                        e = a.responseXML;
                        break;
                      default:
                        e = a.responseText;
                    }
                    n(e);
                  } else 'function' == typeof o && o(a.status);
              }),
              a.send());
        }
        (a.default.Utils = a.default.Utils || {}),
          (a.default.Utils.offset = l),
          (a.default.Utils.hasClass = f),
          (a.default.Utils.addClass = p),
          (a.default.Utils.removeClass = m),
          (a.default.Utils.toggleClass = h),
          (a.default.Utils.fadeIn = y),
          (a.default.Utils.fadeOut = v),
          (a.default.Utils.siblings = g),
          (a.default.Utils.visible = b),
          (a.default.Utils.ajax = E),
          (a.default.Utils.loadScript = s);
      },
      { 2: 2, 3: 3, 6: 6 },
    ],
    25: [
      function (e, t, n) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.escapeHTML = r),
          (n.debounce = s),
          (n.isObjectEmpty = l),
          (n.splitEvents = d),
          (n.createEvent = u),
          (n.isNodeAfter = c),
          (n.isString = f);
        var i,
          o = e(6),
          a = (i = o) && i.__esModule ? i : { default: i };
        function r(e) {
          if ('string' != typeof e)
            throw new Error('Argument passed must be a string');
          var t = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
          return e.replace(/[&<>"]/g, function (e) {
            return t[e];
          });
        }
        function s(e, t) {
          var n = this,
            i = arguments,
            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if ('function' != typeof e)
            throw new Error('First argument must be a function');
          if ('number' != typeof t)
            throw new Error('Second argument must be a numeric value');
          var a = void 0;
          return function () {
            var r = n,
              s = i,
              l = o && !a;
            clearTimeout(a),
              (a = setTimeout(function () {
                (a = null), o || e.apply(r, s);
              }, t)),
              l && e.apply(r, s);
          };
        }
        function l(e) {
          return Object.getOwnPropertyNames(e).length <= 0;
        }
        function d(e, t) {
          var n =
              /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
            i = { d: [], w: [] };
          return (
            (e || '').split(' ').forEach(function (e) {
              var o = e + (t ? '.' + t : '');
              o.startsWith('.')
                ? (i.d.push(o), i.w.push(o))
                : i[n.test(e) ? 'w' : 'd'].push(o);
            }),
            (i.d = i.d.join(' ')),
            (i.w = i.w.join(' ')),
            i
          );
        }
        function u(e, t) {
          if ('string' != typeof e)
            throw new Error('Event name must be a string');
          var n = e.match(/([a-z]+\.([a-z]+))/i),
            i = { target: t };
          return (
            null !== n && ((e = n[1]), (i.namespace = n[2])),
            new window.CustomEvent(e, { detail: i })
          );
        }
        function c(e, t) {
          return !!(e && t && 2 & e.compareDocumentPosition(t));
        }
        function f(e) {
          return 'string' == typeof e;
        }
        (a.default.Utils = a.default.Utils || {}),
          (a.default.Utils.escapeHTML = r),
          (a.default.Utils.debounce = s),
          (a.default.Utils.isObjectEmpty = l),
          (a.default.Utils.splitEvents = d),
          (a.default.Utils.createEvent = u),
          (a.default.Utils.isNodeAfter = c),
          (a.default.Utils.isString = f);
      },
      { 6: 6 },
    ],
    26: [
      function (e, t, n) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.typeChecks = void 0),
          (n.absolutizeUrl = l),
          (n.formatType = d),
          (n.getMimeFromType = u),
          (n.getTypeFromFile = c),
          (n.getExtension = f),
          (n.normalizeExtension = p);
        var i,
          o = e(6),
          a = (i = o) && i.__esModule ? i : { default: i },
          r = e(25);
        var s = (n.typeChecks = []);
        function l(e) {
          if ('string' != typeof e)
            throw new Error('`url` argument must be a string');
          var t = document.createElement('div');
          return (
            (t.innerHTML = '<a href="' + (0, r.escapeHTML)(e) + '">x</a>'),
            t.firstChild.href
          );
        }
        function d(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
          return e && !t ? c(e) : u(t);
        }
        function u(e) {
          if ('string' != typeof e)
            throw new Error('`type` argument must be a string');
          return e && e.indexOf(';') > -1 ? e.substr(0, e.indexOf(';')) : e;
        }
        function c(e) {
          if ('string' != typeof e)
            throw new Error('`url` argument must be a string');
          for (var t = 0, n = s.length; t < n; t++) {
            var i = s[t](e);
            if (i) return i;
          }
          var o = p(f(e)),
            a = 'video/mp4';
          return (
            o &&
              (~[
                'mp4',
                'm4v',
                'ogg',
                'ogv',
                'webm',
                'flv',
                'mpeg',
                'mov',
              ].indexOf(o)
                ? (a = 'video/' + o)
                : ~['mp3', 'oga', 'wav', 'mid', 'midi'].indexOf(o) &&
                  (a = 'audio/' + o)),
            a
          );
        }
        function f(e) {
          if ('string' != typeof e)
            throw new Error('`url` argument must be a string');
          var t = e.split('?')[0].split('\\').pop().split('/').pop();
          return ~t.indexOf('.') ? t.substring(t.lastIndexOf('.') + 1) : '';
        }
        function p(e) {
          if ('string' != typeof e)
            throw new Error('`extension` argument must be a string');
          switch (e) {
            case 'mp4':
            case 'm4v':
              return 'mp4';
            case 'webm':
            case 'webma':
            case 'webmv':
              return 'webm';
            case 'ogg':
            case 'oga':
            case 'ogv':
              return 'ogg';
            default:
              return e;
          }
        }
        (a.default.Utils = a.default.Utils || {}),
          (a.default.Utils.typeChecks = s),
          (a.default.Utils.absolutizeUrl = l),
          (a.default.Utils.formatType = d),
          (a.default.Utils.getMimeFromType = u),
          (a.default.Utils.getTypeFromFile = c),
          (a.default.Utils.getExtension = f),
          (a.default.Utils.normalizeExtension = p);
      },
      { 25: 25, 6: 6 },
    ],
    27: [
      function (e, t, n) {
        'use strict';
        var i,
          o = e(2),
          a = (i = o) && i.__esModule ? i : { default: i };
        [
          Element.prototype,
          CharacterData.prototype,
          DocumentType.prototype,
        ].forEach(function (e) {
          e.hasOwnProperty('remove') ||
            Object.defineProperty(e, 'remove', {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value: function () {
                this.parentNode.removeChild(this);
              },
            });
        }),
          (function () {
            if ('function' == typeof window.CustomEvent) return !1;
            function e(e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
              var n = a.default.createEvent('CustomEvent');
              return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
            }
            (e.prototype = window.Event.prototype), (window.CustomEvent = e);
          })(),
          'function' != typeof Object.assign &&
            (Object.assign = function (e) {
              if (null === e || void 0 === e)
                throw new TypeError(
                  'Cannot convert undefined or null to object'
                );
              for (var t = Object(e), n = 1, i = arguments.length; n < i; n++) {
                var o = arguments[n];
                if (null !== o)
                  for (var a in o)
                    Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
              }
              return t;
            }),
          String.prototype.startsWith ||
            (String.prototype.startsWith = function (e, t) {
              return (t = t || 0), this.substr(t, e.length) === e;
            }),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.matchesSelector ||
              Element.prototype.mozMatchesSelector ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.oMatchesSelector ||
              Element.prototype.webkitMatchesSelector ||
              function (e) {
                for (
                  var t = (
                      this.document || this.ownerDocument
                    ).querySelectorAll(e),
                    n = t.length - 1;
                  --n >= 0 && t.item(n) !== this;

                );
                return n > -1;
              }),
          window.Element &&
            !Element.prototype.closest &&
            (Element.prototype.closest = function (e) {
              var t = (this.document || this.ownerDocument).querySelectorAll(e),
                n = void 0,
                i = this;
              do {
                for (n = t.length; --n >= 0 && t.item(n) !== i; );
              } while (n < 0 && (i = i.parentElement));
              return i;
            }),
          (function () {
            for (
              var e = 0, t = ['ms', 'moz', 'webkit', 'o'], n = 0;
              n < t.length && !window.requestAnimationFrame;
              ++n
            )
              (window.requestAnimationFrame =
                window[t[n] + 'RequestAnimationFrame']),
                (window.cancelAnimationFrame =
                  window[t[n] + 'CancelAnimationFrame'] ||
                  window[t[n] + 'CancelRequestAnimationFrame']);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (t) {
                var n = new Date().getTime(),
                  i = Math.max(0, 16 - (n - e)),
                  o = window.setTimeout(function () {
                    t(n + i);
                  }, i);
                return (e = n + i), o;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (e) {
                  clearTimeout(e);
                });
          })(),
          /firefox/i.test(navigator.userAgent) &&
            ((window.mediaElementJsOldGetComputedStyle =
              window.getComputedStyle),
            (window.getComputedStyle = function (e, t) {
              var n = window.mediaElementJsOldGetComputedStyle(e, t);
              return null === n ? { getPropertyValue: function () {} } : n;
            }));
      },
      { 2: 2 },
    ],
    28: [
      function (e, t, n) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.isDropFrame = r),
          (n.secondsToTimeCode = s),
          (n.timeCodeToSeconds = l),
          (n.calculateTimeFormat = d),
          (n.convertSMPTEtoSeconds = u);
        var i,
          o = e(6),
          a = (i = o) && i.__esModule ? i : { default: i };
        function r() {
          return !(
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 25) %
              1 ==
            0
          );
        }
        function s(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 25,
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0;
          e = !e || 'number' != typeof e || e < 0 ? 0 : e;
          var a = Math.round(0.066666 * i),
            s = Math.round(i),
            l = 24 * Math.round(3600 * i),
            d = Math.round(600 * i),
            u = r(i) ? ';' : ':',
            c = void 0,
            f = void 0,
            p = void 0,
            m = void 0,
            h = Math.round(e * i);
          if (r(i)) {
            h < 0 && (h = l + h);
            var v = (h %= l) % d;
            (h += 9 * a * Math.floor(h / d)),
              v > a && (h += a * Math.floor((v - a) / Math.round(60 * s - a)));
            var y = Math.floor(h / s);
            (c = Math.floor(Math.floor(y / 60) / 60)),
              (f = Math.floor(y / 60) % 60),
              (p = n ? y % 60 : ((h / s) % 60).toFixed(o));
          } else
            (c = Math.floor(e / 3600) % 24),
              (f = Math.floor(e / 60) % 60),
              (p = n ? Math.floor(e % 60) : (e % 60).toFixed(o));
          (c = c <= 0 ? 0 : c), (f = f <= 0 ? 0 : f), (p = p <= 0 ? 0 : p);
          var g = t || c > 0 ? (c < 10 ? '0' + c : c) + ':' : '';
          return (
            (g += (f < 10 ? '0' + f : f) + ':'),
            (g += '' + (p < 10 ? '0' + p : p)),
            n &&
              (g +=
                (m = (m = (h % s).toFixed(0)) <= 0 ? 0 : m) < 10
                  ? u + '0' + m
                  : '' + u + m),
            g
          );
        }
        function l(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
          if ('string' != typeof e)
            throw new TypeError('Time must be a string');
          if (
            (e.indexOf(';') > 0 && (e = e.replace(';', ':')),
            !/\d{2}(\:\d{2}){0,3}/i.test(e))
          )
            throw new TypeError('Time code must have the format `00:00:00`');
          var n = e.split(':'),
            i = void 0,
            o = 0,
            a = 0,
            s = 0,
            l = 0,
            d = 0,
            u = Math.round(0.066666 * t),
            c = Math.round(t),
            f = 3600 * c,
            p = 60 * c;
          switch (n.length) {
            default:
            case 1:
              s = parseInt(n[0], 10);
              break;
            case 2:
              (a = parseInt(n[0], 10)), (s = parseInt(n[1], 10));
              break;
            case 3:
              (o = parseInt(n[0], 10)),
                (a = parseInt(n[1], 10)),
                (s = parseInt(n[2], 10));
              break;
            case 4:
              (o = parseInt(n[0], 10)),
                (a = parseInt(n[1], 10)),
                (s = parseInt(n[2], 10)),
                (l = parseInt(n[3], 10));
          }
          return (
            (i = r(t)
              ? f * o +
                p * a +
                c * s +
                l -
                u * ((d = 60 * o + a) - Math.floor(d / 10))
              : (f * o + p * a + t * s + l) / t),
            parseFloat(i.toFixed(3))
          );
        }
        function d(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
          e = !e || 'number' != typeof e || e < 0 ? 0 : e;
          for (
            var i = Math.floor(e / 3600) % 24,
              o = Math.floor(e / 60) % 60,
              a = Math.floor(e % 60),
              r = [
                [Math.floor(((e % 1) * n).toFixed(3)), 'f'],
                [a, 's'],
                [o, 'm'],
                [i, 'h'],
              ],
              s = t.timeFormat,
              l = s[1] === s[0],
              d = l ? 2 : 1,
              u = s.length < d ? s[d] : ':',
              c = s[0],
              f = !1,
              p = 0,
              m = r.length;
            p < m;
            p++
          )
            if (~s.indexOf(r[p][1])) f = !0;
            else if (f) {
              for (var h = !1, v = p; v < m; v++)
                if (r[v][0] > 0) {
                  h = !0;
                  break;
                }
              if (!h) break;
              l || (s = c + s),
                (s = r[p][1] + u + s),
                l && (s = r[p][1] + s),
                (c = r[p][1]);
            }
          t.currentTimeFormat = s;
        }
        function u(e) {
          if ('string' != typeof e)
            throw new TypeError('Argument must be a string value');
          for (
            var t = ~(e = e.replace(',', '.')).indexOf('.')
                ? e.split('.')[1].length
                : 0,
              n = 0,
              i = 1,
              o = 0,
              a = (e = e.split(':').reverse()).length;
            o < a;
            o++
          )
            (i = 1), o > 0 && (i = Math.pow(60, o)), (n += Number(e[o]) * i);
          return Number(n.toFixed(t));
        }
        (a.default.Utils = a.default.Utils || {}),
          (a.default.Utils.secondsToTimeCode = s),
          (a.default.Utils.timeCodeToSeconds = l),
          (a.default.Utils.calculateTimeFormat = d),
          (a.default.Utils.convertSMPTEtoSeconds = u);
      },
      { 6: 6 },
    ],
  },
  {},
  [27, 5, 4, 14, 21, 18, 17, 19, 20, 22, 15, 16, 8, 9, 10, 11, 12, 13]
);
