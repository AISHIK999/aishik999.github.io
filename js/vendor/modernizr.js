/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop !*/
! function (e, t, n) {
    function r(e) {
        var t = b.className,
            n = Modernizr._config.classPrefix || "";
        if (E && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), E ? b.className.baseVal = t : b.className = t)
    }

    function o() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : E ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function i(e, t) {
        return typeof e === t
    }

    function s() {
        var e, t, n, r, o, s, a;
        for (var l in w)
            if (w.hasOwnProperty(l)) {
                if (e = [], t = w[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (r = i(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) s = e[o], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), C.push((r ? "" : "no-") + a.join("-"))
            }
    }

    function a(e, t) {
        if ("object" == typeof e)
            for (var n in e) k(e, n) && a(n, e[n]);
        else {
            e = e.toLowerCase();
            var o = e.split("."),
                i = Modernizr[o[0]];
            if (2 == o.length && (i = i[o[1]]), "undefined" != typeof i) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == o.length ? Modernizr[o[0]] = t : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = t), r([(t && 0 != t ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function l(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function f() {
        var e = t.body;
        return e || (e = o(E ? "svg" : "body"), e.fake = !0), e
    }

    function d(e, n, r, i) {
        var s, a, l, u, d = "modernizr",
            c = o("div"),
            p = f();
        if (parseInt(r, 10))
            for (; r--;) l = o("div"), l.id = i ? i[r] : d + (r + 1), c.appendChild(l);
        return s = o("style"), s.type = "text/css", s.id = "s" + d, (p.fake ? p : c).appendChild(s), p.appendChild(c), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), a = n(c, e), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = u, b.offsetHeight) : c.parentNode.removeChild(c), !!a
    }

    function c(e) {
        return e.replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function p(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function m(e, t, n) {
        var r;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (r = t[e[o]], i(r, "function") ? p(r, n || t) : r);
        return !1
    }

    function h(t, n, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) {
                var s = i.error ? "error" : "log";
                i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !n && t.currentStyle && t.currentStyle[r];
        return o
    }

    function v(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(c(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + c(t[o]) + ":" + r + ")");
            return i = i.join(" or "), d("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == h(e, null, "position")
            })
        }
        return n
    }

    function A(e, t, r, s) {
        function a() {
            d && (delete j.style, delete j.modElem)
        }
        if (s = i(s, "undefined") ? !1 : s, !i(r, "undefined")) {
            var f = v(e, r);
            if (!i(f, "undefined")) return f
        }
        for (var d, c, p, m, h, A = ["modernizr", "tspan", "samp"]; !j.style && A.length;) d = !0, j.modElem = o(A.shift()), j.style = j.modElem.style;
        for (p = e.length, c = 0; p > c; c++)
            if (m = e[c], h = j.style[m], l(m, "-") && (m = u(m)), j.style[m] !== n) {
                if (s || i(r, "undefined")) return a(), "pfx" == t ? m : !0;
                try {
                    j.style[m] = r
                } catch (g) { }
                if (j.style[m] != h) return a(), "pfx" == t ? m : !0
            } return a(), !1
    }

    function g(e, t, n, r, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + L.join(s + " ") + s).split(" ");
        return i(t, "string") || i(t, "undefined") ? A(a, t, r, o) : (a = (e + " " + B.join(s + " ") + s).split(" "), m(a, t, n))
    }

    function y(e, t, r) {
        return g(e, n, n, t, r)
    }
    var C = [],
        b = t.documentElement,
        w = [],
        S = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e])
                }, 0)
            },
            addTest: function (e, t, n) {
                w.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function (e) {
                w.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function () { };
    Modernizr.prototype = S, Modernizr = new Modernizr, Modernizr.addTest("history", function () {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1
    });
    var x = !1;
    try {
        x = "WebSocket" in e && 2 === e.WebSocket.CLOSING
    } catch (_) { }
    Modernizr.addTest("websockets", x), Modernizr.addTest("postmessage", "postMessage" in e), Modernizr.addTest("customelements", "customElements" in e), Modernizr.addTest("webworkers", "Worker" in e), Modernizr.addTest("picture", "HTMLPictureElement" in e);
    var T = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    S._prefixes = T;
    var E = "svg" === b.nodeName.toLowerCase(),
        P = function () {
            function e(e, t) {
                var i;
                return e ? (t && "string" != typeof t || (t = o(t || "div")), e = "on" + e, i = e in t, !i && r && (t.setAttribute || (t = o("div")), t.setAttribute(e, ""), i = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), i) : !1
            }
            var r = !("onblur" in t.documentElement);
            return e
        }();
    S.hasEvent = P, Modernizr.addTest("webgl", function () {
        var t = o("canvas"),
            n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
        return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
    }), Modernizr.addTest("srcset", "srcset" in o("img"));
    var k;
    ! function () {
        var e = {}.hasOwnProperty;
        k = i(e, "undefined") || i(e.call, "undefined") ? function (e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        } : function (t, n) {
            return e.call(t, n)
        }
    }(), S._l = {}, S.on = function (e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, S._trigger = function (e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function () {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function () {
        S.addTest = a
    }), Modernizr.addAsyncTest(function () {
        var e, t, n, r = o("img"),
            i = "sizes" in r;
        !i && "srcset" in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function () {
            a("sizes", 2 == r.width)
        }, r.onload = n, r.onerror = n, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w," + t + " 8w", r.src = e) : a("sizes", i)
    });
    var z = "Moz O ms Webkit",
        B = S._config.usePrefixes ? z.toLowerCase().split(" ") : [];
    S._domPrefixes = B;
    var O = function (e, t) {
        var n = !1,
            r = o("div"),
            i = r.style;
        if (e in i) {
            var s = B.length;
            for (i[e] = t, n = i[e]; s-- && !n;) i[e] = "-" + B[s] + "-" + t, n = i[e]
        }
        return "" === n && (n = !1), n
    };
    S.prefixedCSSValue = O, Modernizr.addTest("pointerevents", function () {
        var e = !1,
            t = B.length;
        for (e = Modernizr.hasEvent("pointerdown"); t-- && !e;) P(B[t] + "pointerdown") && (e = !0);
        return e
    });
    var L = S._config.usePrefixes ? z.split(" ") : [];
    S._cssomPrefixes = L;
    var N = function () {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function (e) {
            var n = t(e);
            return n && n.matches || !1
        } : function (t) {
            var n = !1;
            return d("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    S.mq = N;
    var R = {
        elem: o("modernizr")
    };
    Modernizr._q.push(function () {
        delete R.elem
    });
    var j = {
        style: R.elem.style
    };
    Modernizr._q.unshift(function () {
        delete j.style
    });
    S.testProp = function (e, t, r) {
        return A([e], n, t, r)
    };
    S.testAllProps = g, S.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)),
        function () {
            Modernizr.addTest("csscolumns", function () {
                var e = !1,
                    t = y("columnCount");
                try {
                    e = !!t, e && (e = new Boolean(e))
                } catch (n) { }
                return e
            });
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t)
        }(), s(), r(C), delete S.addTest, delete S.addAsyncTest;
    for (var M = 0; M < Modernizr._q.length; M++) Modernizr._q[M]();
    e.Modernizr = Modernizr
}(window, document);