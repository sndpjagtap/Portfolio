

/* ---------------------------- Modernizer Library 1.7 Code START ------------------------------- */

window.Modernizr = function(t, e, n) {
    function i() {
        d.input = function(t) {
            for (var e = 0, n = t.length; e < n; e++) S[t[e]] = !!(t[e] in v);
            return S
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), d.inputtypes = function(t) {
            for (var i = 0, r, o, s, a = t.length; i < a; i++) v.setAttribute("type", o = t[i]), r = "text" !== v.type, r && (v.value = b, v.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && v.style.WebkitAppearance !== n ? (f.appendChild(v), s = e.defaultView, r = s.getComputedStyle && "textfield" !== s.getComputedStyle(v, null).WebkitAppearance && 0 !== v.offsetHeight, f.removeChild(v)) : /^(search|tel)$/.test(o) || (/^(url|email)$/.test(o) ? r = v.checkValidity && v.checkValidity() === !1 : /^color$/.test(o) ? (f.appendChild(v), f.offsetWidth, r = v.value != b, f.removeChild(v)) : r = v.value != b)), C[t[i]] = !!r;
            return C
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    function r(t, e) {
        var n = t.charAt(0).toUpperCase() + t.substr(1),
            i = (t + " " + T.join(n + " ") + n).split(" ");
        return !!o(i, e)
    }

    function o(t, e) {
        for (var i in t)
            if (y[t[i]] !== n && (!e || e(t[i], g))) return !0
    }

    function s(t, e) {
        return ("" + t).indexOf(e) !== -1
    }

    function a(t, e) {
        return typeof t === e
    }

    function u(t, e) {
        return c(x.join(t + ";") + (e || ""))
    }

    function c(t) {
        y.cssText = t
    }
    var l = "1.7",
        d = {},
        h = !0,
        f = e.documentElement,
        p = e.head || e.getElementsByTagName("head")[0],
        m = "modernizr",
        g = e.createElement(m),
        y = g.style,
        v = e.createElement("input"),
        b = ":)",
        w = Object.prototype.toString,
        x = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
        T = "Webkit Moz O ms Khtml".split(" "),
        E = {
            svg: "http://www.w3.org/2000/svg"
        },
        k = {},
        C = {},
        S = {},
        _ = [],
        L, I = function(t) {
            var n = e.createElement("style"),
                i = e.createElement("div"),
                r;
            return n.textContent = t + "{#modernizr{height:3px}}", p.appendChild(n), i.id = "modernizr", f.appendChild(i), r = 3 === i.offsetHeight, n.parentNode.removeChild(n), i.parentNode.removeChild(i), !!r
        },
        N = function() {
            function t(t, r) {
                r = r || e.createElement(i[t] || "div");
                var o = (t = "on" + t) in r;
                return o || (r.setAttribute || (r = e.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(t, ""), o = a(r[t], "function"), a(r[t], n) || (r[t] = n), r.removeAttribute(t))), r = null, o
            }
            var i = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return t
        }(),
        j = {}.hasOwnProperty,
        D;
    D = a(j, n) || a(j.call, n) ? function(t, e) {
        return e in t && a(t.constructor.prototype[e], n)
    } : function(t, e) {
        return j.call(t, e)
    }, k.flexbox = function() {
        function t(t, e, n, i) {
            t.style.cssText = x.join(e + ":" + n + ";") + (i || "")
        }

        function n(t, e, n, i) {
            e += ":", t.style.cssText = (e + x.join(n + ";" + e)).slice(0, -e.length) + (i || "")
        }
        var i = e.createElement("div"),
            r = e.createElement("div");
        n(i, "display", "box", "width:42px;padding:0;"), t(r, "box-flex", "1", "width:10px;"), i.appendChild(r), f.appendChild(i);
        var o = 42 === r.offsetWidth;
        return i.removeChild(r), f.removeChild(i), o
    }, k.canvas = function() {
        var t = e.createElement("canvas");
        return t.getContext && t.getContext("2d")
    }, k.canvastext = function() {
        return d.canvas && a(e.createElement("canvas").getContext("2d").fillText, "function")
    }, k.webgl = function() {
        return !!t.WebGLRenderingContext
    }, k.touch = function() {
        return "ontouchstart" in t || I("@media (" + x.join("touch-enabled),(") + "modernizr)")
    }, k.geolocation = function() {
        return !!navigator.geolocation
    }, k.postmessage = function() {
        return !!t.postMessage
    }, k.websqldatabase = function() {
        var e = !!t.openDatabase;
        return e
    }, k.indexedDB = function() {
        for (var e = -1, n = T.length; ++e < n;) {
            var i = T[e].toLowerCase();
            if (t[i + "_indexedDB"] || t[i + "IndexedDB"]) return !0
        }
        return !1
    }, k.hashchange = function() {
        return N("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
    }, k.history = function() {
        return !(!t.history || !history.pushState)
    }, k.draganddrop = function() {
        return N("dragstart") && N("drop")
    }, k.websockets = function() {
        return "WebSocket" in t
    }, k.rgba = function() {
        return c("background-color:rgba(150,255,150,.5)"), s(y.backgroundColor, "rgba")
    }, k.hsla = function() {
        return c("background-color:hsla(120,40%,100%,.5)"), s(y.backgroundColor, "rgba") || s(y.backgroundColor, "hsla")
    }, k.multiplebgs = function() {
        return c("background:url(//:),url(//:),red url(//:)"), new RegExp("(url\\s*\\(.*?){3}").test(y.background)
    }, k.backgroundsize = function() {
        return r("backgroundSize")
    }, k.borderimage = function() {
        return r("borderImage")
    }, k.borderradius = function() {
        return r("borderRadius", "", function(t) {
            return s(t, "orderRadius")
        })
    }, k.boxshadow = function() {
        return r("boxShadow")
    }, k.textshadow = function() {
        return "" === e.createElement("div").style.textShadow
    }, k.opacity = function() {
        return u("opacity:.55"), /^0.55$/.test(y.opacity)
    }, k.cssanimations = function() {
        return r("animationName")
    }, k.csscolumns = function() {
        return r("columnCount")
    }, k.cssgradients = function() {
        var t = "background-image:",
            e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return c((t + x.join(e + t) + x.join(n + t)).slice(0, -t.length)), s(y.backgroundImage, "gradient")
    }, k.cssreflections = function() {
        return r("boxReflect")
    }, k.csstransforms = function() {
        return !!o(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
    }, k.csstransforms3d = function() {
        var t = !!o(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
        return t && "webkitPerspective" in f.style && (t = I("@media (" + x.join("transform-3d),(") + "modernizr)")), t
    }, k.csstransitions = function() {
        return r("transitionProperty")
    }, k.fontface = function() {
        var t, n, i = p || f,
            r = e.createElement("style"),
            o = e.implementation || {
                    hasFeature: function() {
                        return !1
                    }
                };
        r.type = "text/css", i.insertBefore(r, i.firstChild), t = r.sheet || r.styleSheet;
        var s = o.hasFeature("CSS2", "") ? function(e) {
            if (!t || !e) return !1;
            var n = !1;
            try {
                t.insertRule(e, 0), n = /src/i.test(t.cssRules[0].cssText), t.deleteRule(t.cssRules.length - 1)
            } catch (t) {}
            return n
        } : function(e) {
            return !(!t || !e) && (t.cssText = e, 0 !== t.cssText.length && /src/i.test(t.cssText) && 0 === t.cssText.replace(/\r+|\n+/g, "").indexOf(e.split(" ")[0]))
        };
        return n = s('@font-face { font-family: "font"; src: url(data:,); }'), i.removeChild(r), n
    }, k.video = function() {
        var t = e.createElement("video"),
            n = !!t.canPlayType;
        if (n) {
            n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"');
            var i = 'video/mp4; codecs="avc1.42E01E';
            n.h264 = t.canPlayType(i + '"') || t.canPlayType(i + ', mp4a.40.2"'), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"')
        }
        return n
    }, k.audio = function() {
        var t = e.createElement("audio"),
            n = !!t.canPlayType;
        return n && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"'), n.mp3 = t.canPlayType("audio/mpeg;"), n.wav = t.canPlayType('audio/wav; codecs="1"'), n.m4a = t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")), n
    }, k.localstorage = function() {
        try {
            return !!localStorage.getItem
        } catch (t) {
            return !1
        }
    }, k.sessionstorage = function() {
        try {
            return !!sessionStorage.getItem
        } catch (t) {
            return !1
        }
    }, k.webWorkers = function() {
        return !!t.Worker
    }, k.applicationcache = function() {
        return !!t.applicationCache
    }, k.svg = function() {
        return !!e.createElementNS && !!e.createElementNS(E.svg, "svg").createSVGRect
    }, k.inlinesvg = function() {
        var t = e.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == E.svg
    }, k.smil = function() {
        return !!e.createElementNS && /SVG/.test(w.call(e.createElementNS(E.svg, "animate")))
    }, k.svgclippaths = function() {
        return !!e.createElementNS && /SVG/.test(w.call(e.createElementNS(E.svg, "clipPath")))
    };
    for (var P in k) D(k, P) && (L = P.toLowerCase(), d[L] = k[P](), _.push((d[L] ? "" : "no-") + L));
    return d.input || i(), d.crosswindowmessaging = d.postmessage, d.historymanagement = d.history, d.addTest = function(t, e) {
        if (t = t.toLowerCase(), !d[t]) return e = !!e(), f.className += " " + (e ? "" : "no-") + t, d[t] = e, d
    }, c(""), g = v = null, h && t.attachEvent && function() {
        var t = e.createElement("div");
        return t.innerHTML = "<elem></elem>", 1 !== t.childNodes.length
    }() && function(t, e) {
        function n(t, e) {
            for (var i = -1, r = t.length, o, s = []; ++i < r;) o = t[i], "screen" != (e = o.media || e) && s.push(n(o.imports, e), o.cssText);
            return s.join("")
        }

        function i(t) {
            for (var e = -1; ++e < s;) t.createElement(o[e])
        }
        var r = "abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            o = r.split("|"),
            s = o.length,
            a = new RegExp("(^|\\s)(" + r + ")", "gi"),
            u = new RegExp("<(/*)(" + r + ")", "gi"),
            c = new RegExp("(^|[^\\n]*?\\s)(" + r + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
            l = e.createDocumentFragment(),
            d = e.documentElement,
            h = d.firstChild,
            f = e.createElement("body"),
            p = e.createElement("style"),
            m;
        i(e), i(l), h.insertBefore(p, h.firstChild), p.media = "print", t.attachEvent("onbeforeprint", function() {
            var t = -1,
                i = n(e.styleSheets, "all"),
                r = [],
                h;
            for (m = m || e.body; null != (h = c.exec(i));) r.push((h[1] + h[2] + h[3]).replace(a, "$1.iepp_$2") + h[4]);
            for (p.styleSheet.cssText = r.join("\n"); ++t < s;)
                for (var g = e.getElementsByTagName(o[t]), y = g.length, v = -1; ++v < y;) g[v].className.indexOf("iepp_") < 0 && (g[v].className += " iepp_" + o[t]);
            l.appendChild(m), d.appendChild(f), f.className = m.className, f.innerHTML = m.innerHTML.replace(u, "<$1font")
        }), t.attachEvent("onafterprint", function() {
            f.innerHTML = "", d.removeChild(f), d.appendChild(m), p.styleSheet.cssText = ""
        })
    }(t, e), d._enableHTML5 = h, d._version = l, f.className = f.className.replace(/\bno-js\b/, "") + " js " + _.join(" "), d
}(this, this.document),
/* ---------------------------- Modernizer Library 1.7 Code End ------------------------------- */


/* ---------------------------- JQuery 1.12 Library Code Start ------------------------------- */

    function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = !!t && "length" in t && t.length,
                n = pt.type(t);
            return "function" !== n && !pt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function i(t, e, n) {
            if (pt.isFunction(e)) return pt.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return pt.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (kt.test(e)) return pt.filter(e, t, n);
                e = pt.filter(e, t)
            }
            return pt.grep(t, function(t) {
                return pt.inArray(t, e) > -1 !== n
            })
        }

        function r(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function o(t) {
            var e = {};
            return pt.each(t.match(Nt) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            rt.addEventListener ? (rt.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (rt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (rt.addEventListener || "load" === t.event.type || "complete" === rt.readyState) && (s(), pt.ready())
        }

        function u(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Mt, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : At.test(n) ? pt.parseJSON(n) : n)
                    } catch (t) {}
                    pt.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function c(t) {
            var e;
            for (e in t)
                if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function l(t, e, n, i) {
            if (Pt(t)) {
                var r, o, s = pt.expando,
                    a = t.nodeType,
                    u = a ? pt.cache : t,
                    c = a ? t[s] : t[s] && s;
                if (c && u[c] && (i || u[c].data) || void 0 !== n || "string" != typeof e) return c || (c = a ? t[s] = it.pop() || pt.guid++ : s), u[c] || (u[c] = a ? {} : {
                    toJSON: pt.noop
                }), "object" != typeof e && "function" != typeof e || (i ? u[c] = pt.extend(u[c], e) : u[c].data = pt.extend(u[c].data, e)), o = u[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pt.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[pt.camelCase(e)])) : r = o, r
            }
        }

        function d(t, e, n) {
            if (Pt(t)) {
                var i, r, o = t.nodeType,
                    s = o ? pt.cache : t,
                    a = o ? t[pt.expando] : pt.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        pt.isArray(e) ? e = e.concat(pt.map(e, pt.camelCase)) : e in i ? e = [e] : (e = pt.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                        for (; r--;) delete i[e[r]];
                        if (n ? !c(i) : !pt.isEmptyObject(i)) return
                    }(n || (delete s[a].data, c(s[a]))) && (o ? pt.cleanData([t], !0) : ht.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
                }
            }
        }

        function h(t, e, n, i) {
            var r, o = 1,
                s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return pt.css(t, e, "")
                },
                u = a(),
                c = n && n[3] || (pt.cssNumber[e] ? "" : "px"),
                l = (pt.cssNumber[e] || "px" !== c && +u) && Ht.exec(pt.css(t, e));
            if (l && l[3] !== c) {
                c = c || l[3], n = n || [], l = +u || 1;
                do o = o || ".5", l /= o, pt.style(t, e, l + c); while (o !== (o = a() / u) && 1 !== o && --s)
            }
            return n && (l = +l || +u || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = l, i.end = r)), r
        }

        function f(t) {
            var e = Vt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function p(t, e) {
            var n, i, r = 0,
                o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
            if (!o)
                for (o = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || pt.nodeName(i, e) ? o.push(i) : pt.merge(o, p(i, e));
            return void 0 === e || e && pt.nodeName(t, e) ? pt.merge([t], o) : o
        }

        function m(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) pt._data(n, "globalEval", !e || pt._data(e[i], "globalEval"))
        }

        function g(t) {
            Bt.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e, n, i, r) {
            for (var o, s, a, u, c, l, d, h = t.length, y = f(e), v = [], b = 0; b < h; b++)
                if (s = t[b], s || 0 === s)
                    if ("object" === pt.type(s)) pt.merge(v, s.nodeType ? [s] : s);
                    else if (Ut.test(s)) {
                        for (u = u || y.appendChild(e.createElement("div")), c = (Ft.exec(s) || ["", ""])[1].toLowerCase(), d = Xt[c] || Xt._default, u.innerHTML = d[1] + pt.htmlPrefilter(s) + d[2], o = d[0]; o--;) u = u.lastChild;
                        if (!ht.leadingWhitespace && $t.test(s) && v.push(e.createTextNode($t.exec(s)[0])), !ht.tbody)
                            for (s = "table" !== c || Qt.test(s) ? "<table>" !== d[1] || Qt.test(s) ? 0 : u : u.firstChild, o = s && s.childNodes.length; o--;) pt.nodeName(l = s.childNodes[o], "tbody") && !l.childNodes.length && s.removeChild(l);
                        for (pt.merge(v, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
                        u = y.lastChild
                    } else v.push(e.createTextNode(s));
            for (u && y.removeChild(u), ht.appendChecked || pt.grep(p(v, "input"), g), b = 0; s = v[b++];)
                if (i && pt.inArray(s, i) > -1) r && r.push(s);
                else if (a = pt.contains(s.ownerDocument, s), u = p(y.appendChild(s), "script"), a && m(u), n)
                    for (o = 0; s = u[o++];) Wt.test(s.type || "") && n.push(s);
            return u = null, y
        }

        function v() {
            return !0
        }

        function b() {
            return !1
        }

        function w() {
            try {
                return rt.activeElement
            } catch (t) {}
        }

        function x(t, e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) x(t, a, n, i, e[a], o);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = b;
            else if (!r) return t;
            return 1 === o && (s = r, r = function(t) {
                return pt().off(t), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = pt.guid++)), t.each(function() {
                pt.event.add(this, e, r, i, n)
            })
        }

        function T(t, e) {
            return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function E(t) {
            return t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type, t
        }

        function k(t) {
            var e = oe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function C(t, e) {
            if (1 === e.nodeType && pt.hasData(t)) {
                var n, i, r, o = pt._data(t),
                    s = pt._data(e, o),
                    a = o.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, r = a[n].length; i < r; i++) pt.event.add(e, n, a[n][i])
                }
                s.data && (s.data = pt.extend({}, s.data))
            }
        }

        function S(t, e) {
            var n, i, r;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !ht.noCloneEvent && e[pt.expando]) {
                    r = pt._data(e);
                    for (i in r.events) pt.removeEvent(e, i, r.handle);
                    e.removeAttribute(pt.expando)
                }
                "script" === n && e.text !== t.text ? (E(e).text = t.text, k(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ht.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Bt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
            }
        }

        function _(t, e, n, i) {
            e = st.apply([], e);
            var r, o, s, a, u, c, l = 0,
                d = t.length,
                h = d - 1,
                f = e[0],
                m = pt.isFunction(f);
            if (m || d > 1 && "string" == typeof f && !ht.checkClone && re.test(f)) return t.each(function(r) {
                var o = t.eq(r);
                m && (e[0] = f.call(this, r, o.html())), _(o, e, n, i)
            });
            if (d && (c = y(e, t[0].ownerDocument, !1, t, i), r = c.firstChild, 1 === c.childNodes.length && (c = r), r || i)) {
                for (a = pt.map(p(c, "script"), E), s = a.length; l < d; l++) o = c, l !== h && (o = pt.clone(o, !0, !0), s && pt.merge(a, p(o, "script"))), n.call(t[l], o, l);
                if (s)
                    for (u = a[a.length - 1].ownerDocument, pt.map(a, k), l = 0; l < s; l++) o = a[l], Wt.test(o.type || "") && !pt._data(o, "globalEval") && pt.contains(u, o) && (o.src ? pt._evalUrl && pt._evalUrl(o.src) : pt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(se, "")));
                c = r = null
            }
            return t
        }

        function L(t, e, n) {
            for (var i, r = e ? pt.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || pt.cleanData(p(i)), i.parentNode && (n && pt.contains(i.ownerDocument, i) && m(p(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function I(t, e) {
            var n = pt(e.createElement(t)).appendTo(e.body),
                i = pt.css(n[0], "display");
            return n.detach(), i
        }

        function N(t) {
            var e = rt,
                n = le[t];
            return n || (n = I(t, e), "none" !== n && n || (ce = (ce || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (ce[0].contentWindow || ce[0].contentDocument).document, e.write(), e.close(), n = I(t, e), ce.detach()), le[t] = n), n
        }

        function j(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function D(t) {
            if (t in Ce) return t;
            for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = ke.length; n--;)
                if (t = ke[n] + e, t in Ce) return t
        }

        function P(t, e) {
            for (var n, i, r, o = [], s = 0, a = t.length; s < a; s++) i = t[s], i.style && (o[s] = pt._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Rt(i) && (o[s] = pt._data(i, "olddisplay", N(i.nodeName)))) : (r = Rt(i), (n && "none" !== n || !r) && pt._data(i, "olddisplay", r ? n : pt.css(i, "display"))));
            for (s = 0; s < a; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function A(t, e, n) {
            var i = xe.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function M(t, e, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += pt.css(t, n + zt[o], !0, r)), i ? ("content" === n && (s -= pt.css(t, "padding" + zt[o], !0, r)), "margin" !== n && (s -= pt.css(t, "border" + zt[o] + "Width", !0, r))) : (s += pt.css(t, "padding" + zt[o], !0, r), "padding" !== n && (s += pt.css(t, "border" + zt[o] + "Width", !0, r)));
            return s
        }

        function O(e, n, i) {
            var r = !0,
                o = "width" === n ? e.offsetWidth : e.offsetHeight,
                s = me(e),
                a = ht.boxSizing && "border-box" === pt.css(e, "boxSizing", !1, s);
            if (rt.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), o <= 0 || null == o) {
                if (o = ge(e, n, s), (o < 0 || null == o) && (o = e.style[n]), he.test(o)) return o;
                r = a && (ht.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
            }
            return o + M(e, n, i || (a ? "border" : "content"), r, s) + "px"
        }

        function H(t, e, n, i, r) {
            return new H.prototype.init(t, e, n, i, r)
        }

        function z() {
            return t.setTimeout(function() {
                Se = void 0
            }), Se = pt.now()
        }

        function R(t, e) {
            var n, i = {
                    height: t
                },
                r = 0;
            for (e = e ? 1 : 0; r < 4; r += 2 - e) n = zt[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function q(t, e, n) {
            for (var i, r = (W.tweeners[e] || []).concat(W.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                if (i = r[o].call(n, e, t)) return i
        }

        function B(t, e, n) {
            var i, r, o, s, a, u, c, l, d = this,
                h = {},
                f = t.style,
                p = t.nodeType && Rt(t),
                m = pt._data(t, "fxshow");
            n.queue || (a = pt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                a.unqueued || u()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, pt.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = pt.css(t, "display"), l = "none" === c ? pt._data(t, "olddisplay") || N(t.nodeName) : c, "inline" === l && "none" === pt.css(t, "float") && (ht.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ht.shrinkWrapBlocks() || d.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (r = e[i], Le.exec(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        p = !0
                    }
                    h[i] = m && m[i] || pt.style(t, i)
                } else c = void 0;
            if (pt.isEmptyObject(h)) "inline" === ("none" === c ? N(t.nodeName) : c) && (f.display = c);
            else {
                m ? "hidden" in m && (p = m.hidden) : m = pt._data(t, "fxshow", {}), o && (m.hidden = !p), p ? pt(t).show() : d.done(function() {
                    pt(t).hide()
                }), d.done(function() {
                    var e;
                    pt._removeData(t, "fxshow");
                    for (e in h) pt.style(t, e, h[e])
                });
                for (i in h) s = q(p ? m[i] : 0, i, d), i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function F(t, e) {
            var n, i, r, o, s;
            for (n in t)
                if (i = pt.camelCase(n), r = e[i], o = t[n], pt.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = pt.cssHooks[i], s && "expand" in s) {
                    o = s.expand(o), delete t[i];
                    for (n in o) n in t || (t[n] = o[n], e[n] = r)
                } else e[i] = r
        }

        function W(t, e, n) {
            var i, r, o = 0,
                s = W.prefilters.length,
                a = pt.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (r) return !1;
                    for (var e = Se || z(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, s = 0, u = c.tweens.length; s < u; s++) c.tweens[s].run(o);
                    return a.notifyWith(t, [c, o, n]), o < 1 && u ? n : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: pt.extend({}, e),
                    opts: pt.extend(!0, {
                        specialEasing: {},
                        easing: pt.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Se || z(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = pt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) c.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                l = c.props;
            for (F(l, c.opts.specialEasing); o < s; o++)
                if (i = W.prefilters[o].call(c, t, l, c.opts)) return pt.isFunction(i.stop) && (pt._queueHooks(c.elem, c.opts.queue).stop = pt.proxy(i.stop, i)), i;
            return pt.map(l, q, c), pt.isFunction(c.opts.start) && c.opts.start.call(t, c), pt.fx.timer(pt.extend(u, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function V(t) {
            return pt.attr(t, "class") || ""
        }

        function X(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    o = e.toLowerCase().match(Nt) || [];
                if (pt.isFunction(n))
                    for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function U(t, e, n, i) {
            function r(a) {
                var u;
                return o[a] = !0, pt.each(t[a] || [], function(t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                }), u
            }
            var o = {},
                s = t === Ke;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function Q(t, e) {
            var n, i, r = pt.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && pt.extend(!0, t, n), t
        }

        function G(t, e, n) {
            for (var i, r, o, s, a = t.contents, u = t.dataTypes;
                 "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)
                for (s in a)
                    if (a[s] && a[s].test(r)) {
                        u.unshift(s);
                        break
                    }
            if (u[0] in n) o = u[0];
            else {
                for (s in n) {
                    if (!u[0] || t.converters[s + " " + u[0]]) {
                        o = s;
                        break
                    }
                    i || (i = s)
                }
                o = o || i
            }
            if (o) return o !== u[0] && u.unshift(o), n[o]
        }

        function Y(t, e, n, i) {
            var r, o, s, a, u, c = {},
                l = t.dataTypes.slice();
            if (l[1])
                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (o = l.shift(); o;)
                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = l.shift())
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                        if (s = c[u + " " + o] || c["* " + o], !s)
                            for (r in c)
                                if (a = r.split(" "), a[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                                    s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], l.unshift(a[1]));
                                    break
                                }
                        if (s !== !0)
                            if (s && t.throws) e = s(e);
                            else try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + u + " to " + o
                                }
                            }
                    }
            return {
                state: "success",
                data: e
            }
        }

        function J(t) {
            return t.style && t.style.display || pt.css(t, "display")
        }

        function K(t) {
            for (; t && 1 === t.nodeType;) {
                if ("none" === J(t) || "hidden" === t.type) return !0;
                t = t.parentNode
            }
            return !1
        }

        function Z(t, e, n, i) {
            var r;
            if (pt.isArray(e)) pt.each(e, function(e, r) {
                n || rn.test(t) ? i(t, r) : Z(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== pt.type(e)) i(t, e);
            else
                for (r in e) Z(t + "[" + r + "]", e[r], n, i)
        }

        function tt() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        }

        function et() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function nt(t) {
            return pt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }

        var it = [],
            rt = t.document,
            ot = it.slice,
            st = it.concat,
            at = it.push,
            ut = it.indexOf,
            ct = {},
            lt = ct.toString,
            dt = ct.hasOwnProperty,
            ht = {},
            ft = "1.12.0",
            pt = function(t, e) {
                return new pt.fn.init(t, e)
            },
            mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            gt = /^-ms-/,
            yt = /-([\da-z])/gi,
            vt = function(t, e) {
                return e.toUpperCase()
            };
        pt.fn = pt.prototype = {
            jquery: ft,
            constructor: pt,
            selector: "",
            length: 0,
            toArray: function() {
                return ot.call(this)
            },
            get: function(t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : ot.call(this)
            },
            pushStack: function(t) {
                var e = pt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return pt.each(this, t)
            },
            map: function(t) {
                return this.pushStack(pt.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(ot.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: at,
            sort: it.sort,
            splice: it.splice
        }, pt.extend = pt.fn.extend = function() {
            var t, e, n, i, r, o, s = arguments[0] || {},
                a = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || pt.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
                if (null != (r = arguments[a]))
                    for (i in r) t = s[i], n = r[i], s !== n && (c && n && (pt.isPlainObject(n) || (e = pt.isArray(n))) ? (e ? (e = !1, o = t && pt.isArray(t) ? t : []) : o = t && pt.isPlainObject(t) ? t : {}, s[i] = pt.extend(c, o, n)) : void 0 !== n && (s[i] = n));
            return s
        }, pt.extend({
            expando: "jQuery" + (ft + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === pt.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === pt.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t)) return !1;
                try {
                    if (t.constructor && !dt.call(t, "constructor") && !dt.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                if (!ht.ownFirst)
                    for (e in t) return dt.call(t, e);
                for (e in t);
                return void 0 === e || dt.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ct[lt.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && pt.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(gt, "ms-").replace(yt, vt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var i, r = 0;
                if (n(t))
                    for (i = t.length; r < i && e.call(t[r], r, t[r]) !== !1; r++);
                else
                    for (r in t)
                        if (e.call(t[r], r, t[r]) === !1) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(mt, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? pt.merge(i, "string" == typeof t ? [t] : t) : at.call(i, t)), i
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (ut) return ut.call(e, t, n);
                    for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n;) t[r++] = e[i++];
                if (n !== n)
                    for (; void 0 !== e[i];) t[r++] = e[i++];
                return t.length = r, t
            },
            grep: function(t, e, n) {
                for (var i, r = [], o = 0, s = t.length, a = !n; o < s; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
                return r
            },
            map: function(t, e, i) {
                var r, o, s = 0,
                    a = [];
                if (n(t))
                    for (r = t.length; s < r; s++) o = e(t[s], s, i), null != o && a.push(o);
                else
                    for (s in t) o = e(t[s], s, i), null != o && a.push(o);
                return st.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, r;
                if ("string" == typeof e && (r = t[e], e = t, t = r), pt.isFunction(t)) return n = ot.call(arguments, 2), i = function() {
                    return t.apply(e || this, n.concat(ot.call(arguments)))
                }, i.guid = t.guid = t.guid || pt.guid++, i
            },
            now: function() {
                return +new Date
            },
            support: ht
        }), "function" == typeof Symbol && (pt.fn[Symbol.iterator] = it[Symbol.iterator]), pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            ct["[object " + e + "]"] = e.toLowerCase()
        });
        var bt = function(t) {
            function e(t, e, n, i) {
                var r, o, s, a, u, c, d, f, p = e && e.ownerDocument,
                    m = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
                if (!i && ((e ? e.ownerDocument || e : q) !== D && j(e), e = e || D, A)) {
                    if (11 !== m && (c = vt.exec(t)))
                        if (r = c[1]) {
                            if (9 === m) {
                                if (!(s = e.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (p && (s = p.getElementById(r)) && z(e, s) && s.id === r) return n.push(s), n
                        } else {
                            if (c[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                            if ((r = c[3]) && x.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(r)), n
                        }
                    if (x.qsa && !X[t + " "] && (!M || !M.test(t))) {
                        if (1 !== m) p = e, f = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(wt, "\\$&") : e.setAttribute("id", a = R), d = C(t), o = d.length, u = ft.test(a) ? "#" + a : "[id='" + a + "']"; o--;) d[o] = u + " " + h(d[o]);
                            f = d.join(","), p = bt.test(t) && l(e.parentNode) || e
                        }
                        if (f) try {
                            return Z.apply(n, p.querySelectorAll(f)), n
                        } catch (t) {} finally {
                            a === R && e.removeAttribute("id")
                        }
                    }
                }
                return _(t.replace(ut, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[R] = !0, t
            }

            function r(t) {
                var e = D.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function u(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function l(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function d() {}

            function h(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function f(t, e, n) {
                var i = e.dir,
                    r = n && "parentNode" === i,
                    o = F++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) return t(e, n, o)
                } : function(e, n, s) {
                    var a, u, c, l = [B, o];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) {
                                if (c = e[R] || (e[R] = {}), u = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = u[i]) && a[0] === B && a[1] === o) return l[2] = a[2];
                                if (u[i] = l, l[2] = t(e, n, s)) return !0
                            }
                }
            }

            function p(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var r = 0, o = n.length; r < o; r++) e(t, n[r], i);
                return i
            }

            function g(t, e, n, i, r) {
                for (var o, s = [], a = 0, u = t.length, c = null != e; a < u; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), c && e.push(a)));
                return s
            }

            function y(t, e, n, r, o, s) {
                return r && !r[R] && (r = y(r)), o && !o[R] && (o = y(o, s)), i(function(i, s, a, u) {
                    var c, l, d, h = [],
                        f = [],
                        p = s.length,
                        y = i || m(e || "*", a.nodeType ? [a] : a, []),
                        v = !t || !i && e ? y : g(y, h, t, a, u),
                        b = n ? o || (i ? t : p || r) ? [] : s : v;
                    if (n && n(v, b, a, u), r)
                        for (c = g(b, f), r(c, [], a, u), l = c.length; l--;)(d = c[l]) && (b[f[l]] = !(v[f[l]] = d));
                    if (i) {
                        if (o || t) {
                            if (o) {
                                for (c = [], l = b.length; l--;)(d = b[l]) && c.push(v[l] = d);
                                o(null, b = [], c, u)
                            }
                            for (l = b.length; l--;)(d = b[l]) && (c = o ? et(i, d) : h[l]) > -1 && (i[c] = !(s[c] = d))
                        }
                    } else b = g(b === s ? b.splice(p, b.length) : b), o ? o(null, s, b, u) : Z.apply(s, b)
                })
            }

            function v(t) {
                for (var e, n, i, r = t.length, o = T.relative[t[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = f(function(t) {
                    return t === e
                }, s, !0), c = f(function(t) {
                    return et(e, t) > -1
                }, s, !0), l = [function(t, n, i) {
                    var r = !o && (i || n !== L) || ((e = n).nodeType ? u(t, n, i) : c(t, n, i));
                    return e = null, r
                }]; a < r; a++)
                    if (n = T.relative[t[a].type]) l = [f(p(l), n)];
                    else {
                        if (n = T.filter[t[a].type].apply(null, t[a].matches), n[R]) {
                            for (i = ++a; i < r && !T.relative[t[i].type]; i++);
                            return y(a > 1 && p(l), a > 1 && h(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(ut, "$1"), n, a < i && v(t.slice(a, i)), i < r && v(t = t.slice(i)), i < r && h(t))
                        }
                        l.push(n)
                    }
                return p(l)
            }

            function b(t, n) {
                var r = n.length > 0,
                    o = t.length > 0,
                    s = function(i, s, a, u, c) {
                        var l, d, h, f = 0,
                            p = "0",
                            m = i && [],
                            y = [],
                            v = L,
                            b = i || o && T.find.TAG("*", c),
                            w = B += null == v ? 1 : Math.random() || .1,
                            x = b.length;
                        for (c && (L = s === D || s || c); p !== x && null != (l = b[p]); p++) {
                            if (o && l) {
                                for (d = 0, s || l.ownerDocument === D || (j(l), a = !A); h = t[d++];)
                                    if (h(l, s || D, a)) {
                                        u.push(l);
                                        break
                                    }
                                c && (B = w)
                            }
                            r && ((l = !h && l) && f--, i && m.push(l))
                        }
                        if (f += p, r && p !== f) {
                            for (d = 0; h = n[d++];) h(m, y, s, a);
                            if (i) {
                                if (f > 0)
                                    for (; p--;) m[p] || y[p] || (y[p] = J.call(u));
                                y = g(y)
                            }
                            Z.apply(u, y), c && !i && y.length > 0 && f + n.length > 1 && e.uniqueSort(u)
                        }
                        return c && (B = w,
                            L = v), m
                    };
                return r ? i(s) : s
            }
            var w, x, T, E, k, C, S, _, L, I, N, j, D, P, A, M, O, H, z, R = "sizzle" + 1 * new Date,
                q = t.document,
                B = 0,
                F = 0,
                W = n(),
                V = n(),
                X = n(),
                U = function(t, e) {
                    return t === e && (N = !0), 0
                },
                Q = 1 << 31,
                G = {}.hasOwnProperty,
                Y = [],
                J = Y.pop,
                K = Y.push,
                Z = Y.push,
                tt = Y.slice,
                et = function(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = "\\[" + it + "*(" + rt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
                st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                at = new RegExp(it + "+", "g"),
                ut = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ct = new RegExp("^" + it + "*," + it + "*"),
                lt = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                ht = new RegExp(st),
                ft = new RegExp("^" + rt + "$"),
                pt = {
                    ID: new RegExp("^#(" + rt + ")"),
                    CLASS: new RegExp("^\\.(" + rt + ")"),
                    TAG: new RegExp("^(" + rt + "|[*])"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + nt + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                yt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /[+~]/,
                wt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                Tt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Et = function() {
                    j()
                };
            try {
                Z.apply(Y = tt.call(q.childNodes), q.childNodes), Y[q.childNodes.length].nodeType
            } catch (t) {
                Z = {
                    apply: Y.length ? function(t, e) {
                        K.apply(t, tt.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, k = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, j = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : q;
                return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, P = D.documentElement, A = !k(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Et, !1) : n.attachEvent && n.attachEvent("onunload", Et)), x.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = r(function(t) {
                    return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = yt.test(D.getElementsByClassName), x.getById = r(function(t) {
                    return P.appendChild(t).id = R, !D.getElementsByName || !D.getElementsByName(R).length
                }), x.getById ? (T.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && A) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, T.filter.ID = function(t) {
                    var e = t.replace(xt, Tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete T.find.ID, T.filter.ID = function(t) {
                    var e = t.replace(xt, Tt);
                    return function(t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), T.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, T.find.CLASS = x.getElementsByClassName && function(t, e) {
                        if ("undefined" != typeof e.getElementsByClassName && A) return e.getElementsByClassName(t)
                    }, O = [], M = [], (x.qsa = yt.test(D.querySelectorAll)) && (r(function(t) {
                    P.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + nt + ")"), t.querySelectorAll("[id~=" + R + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || M.push(".#.+[+~]")
                }), r(function(t) {
                    var e = D.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                })), (x.matchesSelector = yt.test(H = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(t) {
                    x.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), O.push("!=", st)
                }), M = M.length && new RegExp(M.join("|")), O = O.length && new RegExp(O.join("|")), e = yt.test(P.compareDocumentPosition), z = e || yt.test(P.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return N = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === q && z(q, t) ? -1 : e === D || e.ownerDocument === q && z(q, e) ? 1 : I ? et(I, t) - et(I, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return N = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        u = [e];
                    if (!r || !o) return t === D ? -1 : e === D ? 1 : r ? -1 : o ? 1 : I ? et(I, t) - et(I, e) : 0;
                    if (r === o) return s(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (; a[i] === u[i];) i++;
                    return i ? s(a[i], u[i]) : a[i] === q ? -1 : u[i] === q ? 1 : 0
                }, D) : D
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== D && j(t), n = n.replace(dt, "='$1']"), x.matchesSelector && A && !X[n + " "] && (!O || !O.test(n)) && (!M || !M.test(n))) try {
                    var i = H.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return e(n, D, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== D && j(t), z(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== D && j(t);
                var n = T.attrHandle[e.toLowerCase()],
                    i = n && G.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !A) : void 0;
                return void 0 !== i ? i : x.attributes || !A ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (N = !x.detectDuplicates, I = !x.sortStable && t.slice(0), t.sort(U), N) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return I = null, t
            }, E = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += E(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += E(e);
                return n
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xt, Tt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, Tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && W(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(t, n, i) {
                        return function(r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, u) {
                            var c, l, d, h, f, p, m = o !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                y = a && e.nodeName.toLowerCase(),
                                v = !u && !a,
                                b = !1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                                        p = m = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild], s && v) {
                                    for (h = g, d = h[R] || (h[R] = {}), l = d[h.uniqueID] || (d[h.uniqueID] = {}), c = l[t] || [], f = c[0] === B && c[1], b = f && c[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();)
                                        if (1 === h.nodeType && ++b && h === e) {
                                            l[t] = [B, f, b];
                                            break
                                        }
                                } else if (v && (h = e, d = h[R] || (h[R] = {}), l = d[h.uniqueID] || (d[h.uniqueID] = {}), c = l[t] || [], f = c[0] === B && c[1], b = f), b === !1)
                                    for (;
                                        (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++b || (v && (d = h[R] || (h[R] = {}), l = d[h.uniqueID] || (d[h.uniqueID] = {}), l[t] = [B, b]), h !== e)););
                                return b -= r, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var r, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[R] ? o(n) : o.length > 1 ? (r = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, r = o(t, n), s = r.length; s--;) i = et(t, r[s]), t[i] = !(e[i] = r[s])
                        }) : function(t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            r = S(t.replace(ut, "$1"));
                        return r[R] ? i(function(t, e, n, i) {
                            for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, i, o) {
                            return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(xt, Tt),
                            function(e) {
                                return (e.textContent || e.innerText || E(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, Tt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === P
                    },
                    focus: function(t) {
                        return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !T.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return mt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: c(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: c(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: c(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[w] = a(w);
            for (w in {
                submit: !0,
                reset: !0
            }) T.pseudos[w] = u(w);
            return d.prototype = T.filters = T.pseudos, T.setFilters = new d, C = e.tokenize = function(t, n) {
                var i, r, o, s, a, u, c, l = V[t + " "];
                if (l) return n ? 0 : l.slice(0);
                for (a = t, u = [], c = T.preFilter; a;) {
                    i && !(r = ct.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = lt.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(ut, " ")
                    }), a = a.slice(i.length));
                    for (s in T.filter) !(r = pt[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : V(t, u).slice(0)
            }, S = e.compile = function(t, e) {
                var n, i = [],
                    r = [],
                    o = X[t + " "];
                if (!o) {
                    for (e || (e = C(t)), n = e.length; n--;) o = v(e[n]), o[R] ? i.push(o) : r.push(o);
                    o = X(t, b(r, i)), o.selector = t
                }
                return o
            }, _ = e.select = function(t, e, n, i) {
                var r, o, s, a, u, c = "function" == typeof t && t,
                    d = !i && C(t = c.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && A && T.relative[o[1].type]) {
                        if (e = (T.find.ID(s.matches[0].replace(xt, Tt), e) || [])[0], !e) return n;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = pt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);)
                        if ((u = T.find[a]) && (i = u(s.matches[0].replace(xt, Tt), bt.test(o[0].type) && l(e.parentNode) || e))) {
                            if (o.splice(r, 1), t = i.length && h(o), !t) return Z.apply(n, i), n;
                            break
                        }
                }
                return (c || S(t, d))(i, e, !A, n, !e || bt.test(t) && l(e.parentNode) || e), n
            }, x.sortStable = R.split("").sort(U).join("") === R, x.detectDuplicates = !!N, j(), x.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(D.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(nt, function(t, e, n) {
                var i;
                if (!n) return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        pt.find = bt, pt.expr = bt.selectors, pt.expr[":"] = pt.expr.pseudos, pt.uniqueSort = pt.unique = bt.uniqueSort, pt.text = bt.getText, pt.isXMLDoc = bt.isXML, pt.contains = bt.contains;
        var wt = function(t, e, n) {
                for (var i = [], r = void 0 !== n;
                     (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && pt(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            xt = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            Tt = pt.expr.match.needsContext,
            Et = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            kt = /^.[^:#\[\.,]*$/;
        pt.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? pt.find.matchesSelector(i, t) ? [i] : [] : pt.find.matches(t, pt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, pt.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof t) return this.pushStack(pt(t).filter(function() {
                    for (e = 0; e < r; e++)
                        if (pt.contains(i[e], this)) return !0
                }));
                for (e = 0; e < r; e++) pt.find(t, i[e], n);
                return n = this.pushStack(r > 1 ? pt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && Tt.test(t) ? pt(t) : t || [], !1).length
            }
        });
        var Ct, St = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            _t = pt.fn.init = function(t, e, n) {
                var i, r;
                if (!t) return this;
                if (n = n || Ct, "string" == typeof t) {
                    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : St.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)), Et.test(i[1]) && pt.isPlainObject(e))
                            for (i in e) pt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if (r = rt.getElementById(i[2]), r && r.parentNode) {
                        if (r.id !== i[2]) return Ct.find(t);
                        this.length = 1, this[0] = r
                    }
                    return this.context = rt, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : pt.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(pt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), pt.makeArray(t, this))
            };
        _t.prototype = pt.fn, Ct = pt(rt);
        var Lt = /^(?:parents|prev(?:Until|All))/,
            It = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        pt.fn.extend({
            has: function(t) {
                var e, n = pt(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; e < i; e++)
                        if (pt.contains(this, n[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, r = this.length, o = [], s = Tt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && pt.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? pt.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), pt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return wt(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return wt(t, "parentNode", n)
            },
            next: function(t) {
                return r(t, "nextSibling")
            },
            prev: function(t) {
                return r(t, "previousSibling")
            },
            nextAll: function(t) {
                return wt(t, "nextSibling")
            },
            prevAll: function(t) {
                return wt(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return wt(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return wt(t, "previousSibling", n)
            },
            siblings: function(t) {
                return xt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return xt(t.firstChild)
            },
            contents: function(t) {
                return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : pt.merge([], t.childNodes)
            }
        }, function(t, e) {
            pt.fn[t] = function(n, i) {
                var r = pt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = pt.filter(i, r)), this.length > 1 && (It[t] || (r = pt.uniqueSort(r)), Lt.test(t) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var Nt = /\S+/g;
        pt.Callbacks = function(t) {
            t = "string" == typeof t ? o(t) : pt.extend({}, t);
            var e, n, i, r, s = [],
                a = [],
                u = -1,
                c = function() {
                    for (r = t.once, i = e = !0; a.length; u = -1)
                        for (n = a.shift(); ++u < s.length;) s[u].apply(n[0], n[1]) === !1 && t.stopOnFalse && (u = s.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                },
                l = {
                    add: function() {
                        return s && (n && !e && (u = s.length - 1, a.push(n)), function e(n) {
                            pt.each(n, function(n, i) {
                                pt.isFunction(i) ? t.unique && l.has(i) || s.push(i) : i && i.length && "string" !== pt.type(i) && e(i)
                            })
                        }(arguments), n && !e && c()), this
                    },
                    remove: function() {
                        return pt.each(arguments, function(t, e) {
                            for (var n;
                                 (n = pt.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= u && u--
                        }), this
                    },
                    has: function(t) {
                        return t ? pt.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return r = a = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return r = !0, n || l.disable(), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, n) {
                        return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return l
        }, pt.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", pt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", pt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", pt.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return pt.Deferred(function(n) {
                                pt.each(e, function(e, o) {
                                    var s = pt.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && pt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? pt.extend(t, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, pt.each(e, function(t, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e = 0,
                    n = ot.call(arguments),
                    i = n.length,
                    r = 1 !== i || t && pt.isFunction(t.promise) ? i : 0,
                    o = 1 === r ? t : pt.Deferred(),
                    s = function(t, e, n) {
                        return function(i) {
                            e[t] = this, n[t] = arguments.length > 1 ? ot.call(arguments) : i, n === a ? o.notifyWith(e, n) : --r || o.resolveWith(e, n)
                        }
                    },
                    a, u, c;
                if (i > 1)
                    for (a = new Array(i), u = new Array(i), c = new Array(i); e < i; e++) n[e] && pt.isFunction(n[e].promise) ? n[e].promise().progress(s(e, u, a)).done(s(e, c, n)).fail(o.reject) : --r;
                return r || o.resolveWith(c, n), o.promise()
            }
        });
        var jt;
        pt.fn.ready = function(t) {
            return pt.ready.promise().done(t), this
        }, pt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? pt.readyWait++ : pt.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --pt.readyWait : pt.isReady) || (pt.isReady = !0, t !== !0 && --pt.readyWait > 0 || (jt.resolveWith(rt, [pt]), pt.fn.triggerHandler && (pt(rt).triggerHandler("ready"), pt(rt).off("ready"))))
            }
        }), pt.ready.promise = function(e) {
            if (!jt)
                if (jt = pt.Deferred(), "complete" === rt.readyState) t.setTimeout(pt.ready);
                else if (rt.addEventListener) rt.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
                else {
                    rt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                    var n = !1;
                    try {
                        n = null == t.frameElement && rt.documentElement
                    } catch (t) {}
                    n && n.doScroll && ! function e() {
                        if (!pt.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (n) {
                                return t.setTimeout(e, 50)
                            }
                            s(), pt.ready()
                        }
                    }()
                }
            return jt.promise(e)
        }, pt.ready.promise();
        var Dt;
        for (Dt in pt(ht)) break;
        ht.ownFirst = "0" === Dt, ht.inlineBlockNeedsLayout = !1, pt(function() {
            var t, e, n, i;
            n = rt.getElementsByTagName("body")[0], n && n.style && (e = rt.createElement("div"), i = rt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ht.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
            function() {
                var t = rt.createElement("div");
                ht.deleteExpando = !0;
                try {
                    delete t.test
                } catch (t) {
                    ht.deleteExpando = !1
                }
                t = null
            }();
        var Pt = function(t) {
                var e = pt.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
            },
            At = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Mt = /([A-Z])/g;
        pt.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando], !!t && !c(t)
            },
            data: function(t, e, n) {
                return l(t, e, n)
            },
            removeData: function(t, e) {
                return d(t, e)
            },
            _data: function(t, e, n) {
                return l(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return d(t, e, !0)
            }
        }), pt.fn.extend({
            data: function(t, e) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = pt.data(o), 1 === o.nodeType && !pt._data(o, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = pt.camelCase(i.slice(5)), u(o, i, r[i])));
                        pt._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    pt.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    pt.data(this, t, e)
                }) : o ? u(o, t, pt.data(o, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    pt.removeData(this, t)
                })
            }
        }), pt.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = pt._data(t, e), n && (!i || pt.isArray(n) ? i = pt._data(t, e, pt.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = pt.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = pt._queueHooks(t, e),
                    s = function() {
                        pt.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return pt._data(t, n) || pt._data(t, n, {
                        empty: pt.Callbacks("once memory").add(function() {
                            pt._removeData(t, e + "queue"), pt._removeData(t, n)
                        })
                    })
            }
        }), pt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? pt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = pt.queue(this, t, e);
                    pt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && pt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    pt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    r = pt.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = pt._data(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        }),
            function() {
                var t;
                ht.shrinkWrapBlocks = function() {
                    if (null != t) return t;
                    t = !1;
                    var e, n, i;
                    return n = rt.getElementsByTagName("body")[0], n && n.style ? (e = rt.createElement("div"), i = rt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(rt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
                }
            }();
        var Ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ht = new RegExp("^(?:([+-])=|)(" + Ot + ")([a-z%]*)$", "i"),
            zt = ["Top", "Right", "Bottom", "Left"],
            Rt = function(t, e) {
                return t = e || t, "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t)
            },
            qt = function(t, e, n, i, r, o, s) {
                var a = 0,
                    u = t.length,
                    c = null == n;
                if ("object" === pt.type(n)) {
                    r = !0;
                    for (a in n) qt(t, e, a, n[a], !0, o, s)
                } else if (void 0 !== i && (r = !0, pt.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                        return c.call(pt(t), n)
                    })), e))
                    for (; a < u; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : c ? e.call(t) : u ? e(t[0], n) : o
            },
            Bt = /^(?:checkbox|radio)$/i,
            Ft = /<([\w:-]+)/,
            Wt = /^$|\/(?:java|ecma)script/i,
            $t = /^\s+/,
            Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        ! function() {
            var t = rt.createElement("div"),
                e = rt.createDocumentFragment(),
                n = rt.createElement("input");
            t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ht.leadingWhitespace = 3 === t.firstChild.nodeType, ht.tbody = !t.getElementsByTagName("tbody").length, ht.htmlSerialize = !!t.getElementsByTagName("link").length, ht.html5Clone = "<:nav></:nav>" !== rt.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), ht.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", ht.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), n = rt.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ht.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.noCloneEvent = !!t.addEventListener, t[pt.expando] = 1, ht.attributes = !t.getAttribute(pt.expando)
        }();
        var Xt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ht.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td;
        var Ut = /<|&#?\w+;/,
            Qt = /<tbody/i;
        ! function() {
            var e, n, i = rt.createElement("div");
            for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (ht[e] = n in t) || (i.setAttribute(n, "t"), ht[e] = i.attributes[n].expando === !1);
            i = null
        }();
        var Gt = /^(?:input|select|textarea)$/i,
            Yt = /^key/,
            Jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Kt = /^(?:focusinfocus|focusoutblur)$/,
            Zt = /^([^.]*)(?:\.(.+)|)/;
        pt.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var o, s, a, u, c, l, d, h, f, p, m, g = pt._data(t);
                if (g) {
                    for (n.handler && (u = n, n = u.handler, r = u.selector), n.guid || (n.guid = pt.guid++), (s = g.events) || (s = g.events = {}), (l = g.handle) || (l = g.handle = function(t) {
                        return "undefined" == typeof pt || t && pt.event.triggered === t.type ? void 0 : pt.event.dispatch.apply(l.elem, arguments)
                    }, l.elem = t), e = (e || "").match(Nt) || [""], a = e.length; a--;) o = Zt.exec(e[a]) || [], f = m = o[1], p = (o[2] || "").split(".").sort(), f && (c = pt.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, c = pt.event.special[f] || {}, d = pt.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && pt.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, u), (h = s[f]) || (h = s[f] = [], h.delegateCount = 0, c.setup && c.setup.call(t, i, p, l) !== !1 || (t.addEventListener ? t.addEventListener(f, l, !1) : t.attachEvent && t.attachEvent("on" + f, l))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), pt.event.global[f] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, r) {
                var o, s, a, u, c, l, d, h, f, p, m, g = pt.hasData(t) && pt._data(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(Nt) || [""], c = e.length; c--;)
                        if (a = Zt.exec(e[c]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                            for (d = pt.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, h = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = h.length; o--;) s = h[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(t, s));
                            u && !h.length && (d.teardown && d.teardown.call(t, p, g.handle) !== !1 || pt.removeEvent(t, f, g.handle), delete l[f])
                        } else
                            for (f in l) pt.event.remove(t, f + e[c], n, i, !0);
                    pt.isEmptyObject(l) && (delete g.handle, pt._removeData(t, "events"))
                }
            },
            trigger: function(e, n, i, r) {
                var o, s, a, u, c, l, d, h = [i || rt],
                    f = dt.call(e, "type") ? e.type : e,
                    p = dt.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = l = i = i || rt, 3 !== i.nodeType && 8 !== i.nodeType && !Kt.test(f + pt.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, e = e[pt.expando] ? e : new pt.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : pt.makeArray(n, [e]), c = pt.event.special[f] || {}, r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!r && !c.noBubble && !pt.isWindow(i)) {
                        for (u = c.delegateType || f, Kt.test(u + f) || (a = a.parentNode); a; a = a.parentNode) h.push(a), l = a;
                        l === (i.ownerDocument || rt) && h.push(l.defaultView || l.parentWindow || t)
                    }
                    for (d = 0;
                         (a = h[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? u : c.bindType || f, o = (pt._data(a, "events") || {})[e.type] && pt._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && Pt(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                    if (e.type = f, !r && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && Pt(i) && s && i[f] && !pt.isWindow(i)) {
                        l = i[s], l && (i[s] = null), pt.event.triggered = f;
                        try {
                            i[f]()
                        } catch (t) {}
                        pt.event.triggered = void 0, l && (i[s] = l)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = pt.event.fix(t);
                var e, n, i, r, o, s = [],
                    a = ot.call(arguments),
                    u = (pt._data(this, "events") || {})[t.type] || [],
                    c = pt.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (s = pt.event.handlers.call(this, t, u), e = 0;
                         (r = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, n = 0;
                             (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, i = ((pt.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, r, o, s = [],
                    a = e.delegateCount,
                    u = t.target;
                if (a && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                            for (i = [], n = 0; n < a; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? pt(r, this).index(u) > -1 : pt.find(r, this, null, [u]).length), i[r] && i.push(o);
                            i.length && s.push({
                                elem: u,
                                handlers: i
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            fix: function(t) {
                if (t[pt.expando]) return t;
                var e, n, i, r = t.type,
                    o = t,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Jt.test(r) ? this.mouseHooks : Yt.test(r) ? this.keyHooks : {}),
                         i = s.props ? this.props.concat(s.props) : this.props, t = new pt.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
                return t.target || (t.target = o.srcElement || rt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, r, o = e.button,
                        s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || rt, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== w() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === w() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (pt.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function(t) {
                        return pt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n) {
                var i = pt.extend(new pt.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                pt.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
            }
        }, pt.removeEvent = rt.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
        }, pt.Event = function(t, e) {
            return this instanceof pt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? v : b) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), void(this[pt.expando] = !0)) : new pt.Event(t, e)
        }, pt.Event.prototype = {
            constructor: pt.Event,
            isDefaultPrevented: b,
            isPropagationStopped: b,
            isImmediatePropagationStopped: b,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = v, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = v, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = v, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, pt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            pt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return r && (r === i || pt.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ht.submit || (pt.event.special.submit = {
            setup: function() {
                return !pt.nodeName(this, "form") && void pt.event.add(this, "click._submit keypress._submit", function(t) {
                        var e = t.target,
                            n = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? pt.prop(e, "form") : void 0;
                        n && !pt._data(n, "submit") && (pt.event.add(n, "submit._submit", function(t) {
                            t._submitBubble = !0
                        }), pt._data(n, "submit", !0))
                    })
            },
            postDispatch: function(t) {
                t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t))
            },
            teardown: function() {
                return !pt.nodeName(this, "form") && void pt.event.remove(this, "._submit")
            }
        }), ht.change || (pt.event.special.change = {
            setup: function() {
                return Gt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pt.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                }), pt.event.add(this, "click._change", function(t) {
                    this._justChanged && !t.isTrigger && (this._justChanged = !1), pt.event.simulate("change", this, t)
                })), !1) : void pt.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Gt.test(e.nodeName) && !pt._data(e, "change") && (pt.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t)
                    }), pt._data(e, "change", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return pt.event.remove(this, "._change"), !Gt.test(this.nodeName)
            }
        }), ht.focusin || pt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                pt.event.simulate(e, t.target, pt.event.fix(t))
            };
            pt.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = pt._data(i, e);
                    r || i.addEventListener(t, n, !0), pt._data(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = pt._data(i, e) - 1;
                    r ? pt._data(i, e, r) : (i.removeEventListener(t, n, !0), pt._removeData(i, e))
                }
            }
        }), pt.fn.extend({
            on: function(t, e, n, i) {
                return x(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return x(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, pt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = b), this.each(function() {
                    pt.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    pt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return pt.event.trigger(t, e, n, !0)
            }
        });
        var te = / jQuery\d+="(?:null|\d+)"/g,
            ee = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
            ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ie = /<script|<style|<link/i,
            re = /checked\s*(?:[^=]|=\s*.checked.)/i,
            oe = /^true\/(.*)/,
            se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ae = f(rt),
            ue = ae.appendChild(rt.createElement("div"));
        pt.extend({
            htmlPrefilter: function(t) {
                return t.replace(ne, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, r, o, s, a, u = pt.contains(t.ownerDocument, t);
                if (ht.html5Clone || pt.isXMLDoc(t) || !ee.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ue.innerHTML = t.outerHTML, ue.removeChild(o = ue.firstChild)), !(ht.noCloneEvent && ht.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t)))
                    for (i = p(o), a = p(t), s = 0; null != (r = a[s]); ++s) i[s] && S(r, i[s]);
                if (e)
                    if (n)
                        for (a = a || p(t), i = i || p(o), s = 0; null != (r = a[s]); s++) C(r, i[s]);
                    else C(t, o);
                return i = p(o, "script"), i.length > 0 && m(i, !u && p(t, "script")), i = a = r = null, o
            },
            cleanData: function(t, e) {
                for (var n, i, r, o, s = 0, a = pt.expando, u = pt.cache, c = ht.attributes, l = pt.event.special; null != (n = t[s]); s++)
                    if ((e || Pt(n)) && (r = n[a], o = r && u[r])) {
                        if (o.events)
                            for (i in o.events) l[i] ? pt.event.remove(n, i) : pt.removeEvent(n, i, o.handle);
                        u[r] && (delete u[r], c || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), it.push(r))
                    }
            }
        }), pt.fn.extend({
            domManip: _,
            detach: function(t) {
                return L(this, t, !0)
            },
            remove: function(t) {
                return L(this, t)
            },
            text: function(t) {
                return qt(this, function(t) {
                    return void 0 === t ? pt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || rt).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return _(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = T(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return _(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = T(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return _(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return _(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && pt.cleanData(p(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && pt.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return pt.clone(this, t, e)
                })
            },
            html: function(t) {
                return qt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(te, "") : void 0;
                    if ("string" == typeof t && !ie.test(t) && (ht.htmlSerialize || !ee.test(t)) && (ht.leadingWhitespace || !$t.test(t)) && !Xt[(Ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = pt.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (pt.cleanData(p(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return _(this, arguments, function(e) {
                    var n = this.parentNode;
                    pt.inArray(this, t) < 0 && (pt.cleanData(p(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), pt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            pt.fn[t] = function(t) {
                for (var n, i = 0, r = [], o = pt(t), s = o.length - 1; i <= s; i++) n = i === s ? this : this.clone(!0), pt(o[i])[e](n), at.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ce, le = {
                HTML: "block",
                BODY: "block"
            },
            de = /^margin/,
            he = new RegExp("^(" + Ot + ")(?!px)[a-z%]+$", "i"),
            fe = function(t, e, n, i) {
                var r, o, s = {};
                for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                r = n.apply(t, i || []);
                for (o in e) t.style[o] = s[o];
                return r
            },
            pe = rt.documentElement;
        ! function() {
            function e() {
                var e, l, d = rt.documentElement;
                d.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = a = !1, i = s = !0, t.getComputedStyle && (l = t.getComputedStyle(c), n = "1%" !== (l || {}).top, a = "2px" === (l || {}).marginLeft, r = "4px" === (l || {
                        width: "4px"
                    }).width, c.style.marginRight = "50%", i = "4px" === (l || {
                        marginRight: "4px"
                    }).marginRight, e = c.appendChild(rt.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", o = 0 === c.getClientRects().length, o && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), d.removeChild(u)
            }
            var n, i, r, o, s, a, u = rt.createElement("div"),
                c = rt.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5", ht.opacity = "0.5" === c.style.opacity, ht.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ht.clearCloneStyle = "content-box" === c.style.backgroundClip, u = rt.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", u.appendChild(c), ht.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, pt.extend(ht, {
                reliableHiddenOffsets: function() {
                    return null == n && e(), o
                },
                boxSizingReliable: function() {
                    return null == n && e(), r
                },
                pixelMarginRight: function() {
                    return null == n && e(), i
                },
                pixelPosition: function() {
                    return null == n && e(), n
                },
                reliableMarginRight: function() {
                    return null == n && e(), s
                },
                reliableMarginLeft: function() {
                    return null == n && e(), a
                }
            }))
        }();
        var me, ge, ye = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (me = function(e) {
            var n = e.ownerDocument.defaultView;
            return n.opener || (n = t), n.getComputedStyle(e)
        }, ge = function(t, e, n) {
            var i, r, o, s, a = t.style;
            return n = n || me(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || pt.contains(t.ownerDocument, t) || (s = pt.style(t, e)), !ht.pixelMarginRight() && he.test(s) && de.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
        }) : pe.currentStyle && (me = function(t) {
            return t.currentStyle
        }, ge = function(t, e, n) {
            var i, r, o, s, a = t.style;
            return n = n || me(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), he.test(s) && !ye.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
        });
        var ve = /alpha\([^)]*\)/i,
            be = /opacity\s*=\s*([^)]*)/i,
            we = /^(none|table(?!-c[ea]).+)/,
            xe = new RegExp("^(" + Ot + ")(.*)$", "i"),
            Te = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ee = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ke = ["Webkit", "O", "Moz", "ms"],
            Ce = rt.createElement("div").style;
        pt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = ge(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: ht.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = pt.camelCase(e),
                        u = t.style;
                    if (e = pt.cssProps[a] || (pt.cssProps[a] = D(a) || a), s = pt.cssHooks[e] || pt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e];
                    if (o = typeof n, "string" === o && (r = Ht.exec(n)) && r[1] && (n = h(t, e, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (pt.cssNumber[a] ? "" : "px")), ht.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                        u[e] = n
                    } catch (t) {}
                }
            },
            css: function(t, e, n, i) {
                var r, o, s, a = pt.camelCase(e);
                return e = pt.cssProps[a] || (pt.cssProps[a] = D(a) || a), s = pt.cssHooks[e] || pt.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = ge(t, e, i)), "normal" === o && e in Ee && (o = Ee[e]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
            }
        }), pt.each(["height", "width"], function(t, e) {
            pt.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return we.test(pt.css(t, "display")) && 0 === t.offsetWidth ? fe(t, Te, function() {
                        return O(t, e, i)
                    }) : O(t, e, i)
                },
                set: function(t, n, i) {
                    var r = i && me(t);
                    return A(t, n, i ? M(t, e, i, ht.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ht.opacity || (pt.cssHooks.opacity = {
            get: function(t, e) {
                return be.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    r = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === pt.trim(o.replace(ve, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ve.test(o) ? o.replace(ve, r) : o + " " + r)
            }
        }), pt.cssHooks.marginRight = j(ht.reliableMarginRight, function(t, e) {
            if (e) return fe(t, {
                display: "inline-block"
            }, ge, [t, "marginRight"])
        }), pt.cssHooks.marginLeft = j(ht.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(ge(t, "marginLeft")) || (pt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - fe(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                }) : 0)) + "px"
        }), pt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            pt.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + zt[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, de.test(t) || (pt.cssHooks[t + e].set = A)
        }), pt.fn.extend({
            css: function(t, e) {
                return qt(this, function(t, e, n) {
                    var i, r, o = {},
                        s = 0;
                    if (pt.isArray(e)) {
                        for (i = me(t), r = e.length; s < r; s++) o[e[s]] = pt.css(t, e[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? pt.style(t, e, n) : pt.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return P(this, !0)
            },
            hide: function() {
                return P(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Rt(this) ? pt(this).show() : pt(this).hide()
                })
            }
        }), pt.Tween = H, H.prototype = {
            constructor: H,
            init: function(t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || pt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (pt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = H.propHooks[this.prop];
                return t && t.get ? t.get(this) : H.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = H.propHooks[this.prop];
                return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
            }
        }, H.prototype.init.prototype = H.prototype, H.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, pt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, pt.fx = H.prototype.init, pt.fx.step = {};
        var Se, _e, Le = /^(?:toggle|show|hide)$/,
            Ie = /queueHooks$/;
        pt.Animation = pt.extend(W, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return h(n.elem, t, Ht.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                pt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Nt);
                for (var n, i = 0, r = t.length; i < r; i++) n = t[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(e)
            },
            prefilters: [B],
            prefilter: function(t, e) {
                e ? W.prefilters.unshift(t) : W.prefilters.push(t)
            }
        }), pt.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? pt.extend({}, t) : {
                complete: n || !n && e || pt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !pt.isFunction(e) && e
            };
            return i.duration = pt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pt.fx.speeds ? pt.fx.speeds[i.duration] : pt.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                pt.isFunction(i.old) && i.old.call(this), i.queue && pt.dequeue(this, i.queue)
            }, i
        }, pt.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Rt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = pt.isEmptyObject(t),
                    o = pt.speed(e, n, i),
                    s = function() {
                        var e = W(this, pt.extend({}, t), o);
                        (r || pt._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = pt.timers,
                        s = pt._data(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && Ie.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    !e && n || pt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = pt._data(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = pt.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, pt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), pt.each(["toggle", "show", "hide"], function(t, e) {
            var n = pt.fn[e];
            pt.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(R(e, !0), t, i, r)
            }
        }), pt.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            pt.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), pt.timers = [], pt.fx.tick = function() {
            var t, e = pt.timers,
                n = 0;
            for (Se = pt.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || pt.fx.stop(), Se = void 0
        }, pt.fx.timer = function(t) {
            pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop()
        }, pt.fx.interval = 13, pt.fx.start = function() {
            _e || (_e = t.setInterval(pt.fx.tick, pt.fx.interval))
        }, pt.fx.stop = function() {
            t.clearInterval(_e), _e = null
        }, pt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pt.fn.delay = function(e, n) {
            return e = pt.fx ? pt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function() {
                    t.clearTimeout(r)
                }
            })
        },
            function() {
                var t, e = rt.createElement("input"),
                    n = rt.createElement("div"),
                    i = rt.createElement("select"),
                    r = i.appendChild(rt.createElement("option"));
                n = rt.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), t = n.getElementsByTagName("a")[0], t.style.cssText = "top:1px", ht.getSetAttribute = "t" !== n.className, ht.style = /top/.test(t.getAttribute("style")), ht.hrefNormalized = "/a" === t.getAttribute("href"), ht.checkOn = !!e.value, ht.optSelected = r.selected, ht.enctype = !!rt.createElement("form").enctype, i.disabled = !0, ht.optDisabled = !r.disabled, e = rt.createElement("input"), e.setAttribute("value", ""), ht.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ht.radioValue = "t" === e.value
            }();
        var Ne = /\r/g;
        pt.fn.extend({
            val: function(t) {
                var e, n, i, r = this[0]; {
                    if (arguments.length) return i = pt.isFunction(t), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, pt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : pt.isArray(r) && (r = pt.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return e = pt.valHooks[r.type] || pt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ne, "") : null == n ? "" : n)
                }
            }
        }), pt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = pt.find.attr(t, "value");
                        return null != e ? e : pt.trim(pt.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, u = r < 0 ? a : o ? r : 0; u < a; u++)
                            if (n = i[u], (n.selected || u === r) && (ht.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pt.nodeName(n.parentNode, "optgroup"))) {
                                if (e = pt(n).val(), o) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, o = pt.makeArray(e), s = r.length; s--;)
                            if (i = r[s], pt.inArray(pt.valHooks.option.get(i), o) >= 0) try {
                                i.selected = n = !0
                            } catch (t) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), pt.each(["radio", "checkbox"], function() {
            pt.valHooks[this] = {
                set: function(t, e) {
                    if (pt.isArray(e)) return t.checked = pt.inArray(pt(t).val(), e) > -1
                }
            }, ht.checkOn || (pt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var je, De, Pe = pt.expr.attrHandle,
            Ae = /^(?:checked|selected)$/i,
            Me = ht.getSetAttribute,
            Oe = ht.input;
        pt.fn.extend({
            attr: function(t, e) {
                return qt(this, pt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    pt.removeAttr(this, t)
                })
            }
        }), pt.extend({
            attr: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? pt.prop(t, e, n) : (1 === o && pt.isXMLDoc(t) || (e = e.toLowerCase(), r = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? De : je)), void 0 !== n ? null === n ? void pt.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = pt.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ht.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i, r = 0,
                    o = e && e.match(Nt);
                if (o && 1 === t.nodeType)
                    for (; n = o[r++];) i = pt.propFix[n] || n, pt.expr.match.bool.test(n) ? Oe && Me || !Ae.test(n) ? t[i] = !1 : t[pt.camelCase("default-" + n)] = t[i] = !1 : pt.attr(t, n, ""), t.removeAttribute(Me ? n : i)
            }
        }), De = {
            set: function(t, e, n) {
                return e === !1 ? pt.removeAttr(t, n) : Oe && Me || !Ae.test(n) ? t.setAttribute(!Me && pt.propFix[n] || n, n) : t[pt.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, pt.each(pt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Pe[e] || pt.find.attr;
            Oe && Me || !Ae.test(e) ? Pe[e] = function(t, e, i) {
                var r, o;
                return i || (o = Pe[e], Pe[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Pe[e] = o), r
            } : Pe[e] = function(t, e, n) {
                if (!n) return t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Oe && Me || (pt.attrHooks.value = {
            set: function(t, e, n) {
                return pt.nodeName(t, "input") ? void(t.defaultValue = e) : je && je.set(t, e, n)
            }
        }), Me || (je = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
            }
        }, Pe.id = Pe.name = Pe.coords = function(t, e, n) {
            var i;
            if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, pt.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                if (n && n.specified) return n.value
            },
            set: je.set
        }, pt.attrHooks.contenteditable = {
            set: function(t, e, n) {
                je.set(t, "" !== e && e, n)
            }
        }, pt.each(["width", "height"], function(t, e) {
            pt.attrHooks[e] = {
                set: function(t, n) {
                    if ("" === n) return t.setAttribute(e, "auto"), n
                }
            }
        })), ht.style || (pt.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var He = /^(?:input|select|textarea|button|object)$/i,
            ze = /^(?:a|area)$/i;
        pt.fn.extend({
            prop: function(t, e) {
                return qt(this, pt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = pt.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (t) {}
                })
            }
        }), pt.extend({
            prop: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, r = pt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = pt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : He.test(t.nodeName) || ze.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), ht.hrefNormalized || pt.each(["href", "src"], function(t, e) {
            pt.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ht.optSelected || (pt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            pt.propFix[this.toLowerCase()] = this
        }), ht.enctype || (pt.propFix.enctype = "encoding");
        var Re = /[\t\r\n\f]/g;
        pt.fn.extend({
            addClass: function(t) {
                var e, n, i, r, o, s, a, u = 0;
                if (pt.isFunction(t)) return this.each(function(e) {
                    pt(this).addClass(t.call(this, e, V(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(Nt) || []; n = this[u++];)
                        if (r = V(n), i = 1 === n.nodeType && (" " + r + " ").replace(Re, " ")) {
                            for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            a = pt.trim(i), r !== a && pt.attr(n, "class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, o, s, a, u = 0;
                if (pt.isFunction(t)) return this.each(function(e) {
                    pt(this).removeClass(t.call(this, e, V(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Nt) || []; n = this[u++];)
                        if (r = V(n), i = 1 === n.nodeType && (" " + r + " ").replace(Re, " ")) {
                            for (s = 0; o = e[s++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            a = pt.trim(i), r !== a && pt.attr(n, "class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function(n) {
                    pt(this).toggleClass(t.call(this, n, V(this), e), e)
                }) : this.each(function() {
                    var e, i, r, o;
                    if ("string" === n)
                        for (i = 0, r = pt(this), o = t.match(Nt) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = V(this), e && pt._data(this, "__className__", e), pt.attr(this, "class", e || t === !1 ? "" : pt._data(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + V(n) + " ").replace(Re, " ").indexOf(e) > -1) return !0;
                return !1
            }
        }), pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            pt.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), pt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        });
        var qe = t.location,
            Be = pt.now(),
            Fe = /\?/,
            We = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        pt.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var n, i = null,
                r = pt.trim(e + "");
            return r && !pt.trim(r.replace(We, function(t, e, r, o) {
                return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
            })) ? Function("return " + r)() : pt.error("Invalid JSON: " + e)
        }, pt.parseXML = function(e) {
            var n, i;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (t) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e), n
        };
        var $e = /#.*$/,
            Ve = /([?&])_=[^&]*/,
            Xe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ue = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Qe = /^(?:GET|HEAD)$/,
            Ge = /^\/\//,
            Ye = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Je = {},
            Ke = {},
            Ze = "*/".concat("*"),
            tn = qe.href,
            en = Ye.exec(tn.toLowerCase()) || [];
        pt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: tn,
                type: "GET",
                isLocal: Ue.test(en[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ze,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": pt.parseJSON,
                    "text xml": pt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Q(Q(t, pt.ajaxSettings), e) : Q(pt.ajaxSettings, t)
            },
            ajaxPrefilter: X(Je),
            ajaxTransport: X(Ke),
            ajax: function(e, n) {
                function i(e, n, i, r) {
                    var o, d, v, b, x, E = n;
                    2 !== w && (w = 2, u && t.clearTimeout(u), l = void 0, a = r || "", T.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, i && (b = G(h, T, i)), b = Y(h, b, T, o), o ? (h.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (pt.lastModified[s] = x), x = T.getResponseHeader("etag"), x && (pt.etag[s] = x)), 204 === e || "HEAD" === h.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = b.state, d = b.data, v = b.error, o = !v)) : (v = E, !e && E || (E = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || E) + "", o ? m.resolveWith(f, [d, E, T]) : m.rejectWith(f, [T, E, v]), T.statusCode(y), y = void 0, c && p.trigger(o ? "ajaxSuccess" : "ajaxError", [T, h, o ? d : v]), g.fireWith(f, [T, E]), c && (p.trigger("ajaxComplete", [T, h]), --pt.active || pt.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var r, o, s, a, u, c, l, d, h = pt.ajaxSetup({}, n),
                    f = h.context || h,
                    p = h.context && (f.nodeType || f.jquery) ? pt(f) : pt.event,
                    m = pt.Deferred(),
                    g = pt.Callbacks("once memory"),
                    y = h.statusCode || {},
                    v = {},
                    b = {},
                    w = 0,
                    x = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === w) {
                                if (!d)
                                    for (d = {}; e = Xe.exec(a);) d[e[1].toLowerCase()] = e[2];
                                e = d[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return w || (t = b[n] = b[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return w || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (w < 2)
                                    for (e in t) y[e] = [y[e], t[e]];
                                else T.always(t[T.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return l && l.abort(e), i(0, e), this
                        }
                    };
                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, h.url = ((e || h.url || tn) + "").replace($e, "").replace(Ge, en[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = pt.trim(h.dataType || "*").toLowerCase().match(Nt) || [""], null == h.crossDomain && (r = Ye.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === en[1] && r[2] === en[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = pt.param(h.data, h.traditional)), U(Je, h, n, T), 2 === w) return T;
                c = pt.event && h.global, c && 0 === pt.active++ && pt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Qe.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (Fe.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Ve.test(s) ? s.replace(Ve, "$1_=" + Be++) : s + (Fe.test(s) ? "&" : "?") + "_=" + Be++)),
                h.ifModified && (pt.lastModified[s] && T.setRequestHeader("If-Modified-Since", pt.lastModified[s]), pt.etag[s] && T.setRequestHeader("If-None-Match", pt.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ze + "; q=0.01" : "") : h.accepts["*"]);
                for (o in h.headers) T.setRequestHeader(o, h.headers[o]);
                if (h.beforeSend && (h.beforeSend.call(f, T, h) === !1 || 2 === w)) return T.abort();
                x = "abort";
                for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[o](h[o]);
                if (l = U(Ke, h, n, T)) {
                    if (T.readyState = 1, c && p.trigger("ajaxSend", [T, h]), 2 === w) return T;
                    h.async && h.timeout > 0 && (u = t.setTimeout(function() {
                        T.abort("timeout")
                    }, h.timeout));
                    try {
                        w = 1, l.send(v, i)
                    } catch (t) {
                        if (!(w < 2)) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function(t, e, n) {
                return pt.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return pt.get(t, void 0, e, "script")
            }
        }), pt.each(["get", "post"], function(t, e) {
            pt[e] = function(t, n, i, r) {
                return pt.isFunction(n) && (r = r || i, i = n, n = void 0), pt.ajax(pt.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, pt.isPlainObject(t) && t))
            }
        }), pt._evalUrl = function(t) {
            return pt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, pt.fn.extend({
            wrapAll: function(t) {
                if (pt.isFunction(t)) return this.each(function(e) {
                    pt(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return pt.isFunction(t) ? this.each(function(e) {
                    pt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = pt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = pt.isFunction(t);
                return this.each(function(n) {
                    pt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), pt.expr.filters.hidden = function(t) {
            return ht.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : K(t)
        }, pt.expr.filters.visible = function(t) {
            return !pt.expr.filters.hidden(t)
        };
        var nn = /%20/g,
            rn = /\[\]$/,
            on = /\r?\n/g,
            sn = /^(?:submit|button|image|reset|file)$/i,
            an = /^(?:input|select|textarea|keygen)/i;
        pt.param = function(t, e) {
            var n, i = [],
                r = function(t, e) {
                    e = pt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || t.jquery && !pt.isPlainObject(t)) pt.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (n in t) Z(n, t[n], e, r);
            return i.join("&").replace(nn, "+")
        }, pt.fn.extend({
            serialize: function() {
                return pt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = pt.prop(this, "elements");
                    return t ? pt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !pt(this).is(":disabled") && an.test(this.nodeName) && !sn.test(t) && (this.checked || !Bt.test(t))
                }).map(function(t, e) {
                    var n = pt(this).val();
                    return null == n ? null : pt.isArray(n) ? pt.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(on, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(on, "\r\n")
                    }
                }).get()
            }
        }), pt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return this.isLocal ? et() : rt.documentMode > 8 ? tt() : /^(get|post|head|put|delete|options)$/i.test(this.type) && tt() || et()
        } : tt;
        var un = 0,
            cn = {},
            ln = pt.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in cn) cn[t](void 0, !0)
        }), ht.cors = !!ln && "withCredentials" in ln, ln = ht.ajax = !!ln, ln && pt.ajaxTransport(function(e) {
            if (!e.crossDomain || ht.cors) {
                var n;
                return {
                    send: function(i, r) {
                        var o, s = e.xhr(),
                            a = ++un;
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (o in e.xhrFields) s[o] = e.xhrFields[o];
                        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (o in i) void 0 !== i[o] && s.setRequestHeader(o, i[o] + "");
                        s.send(e.hasContent && e.data || null), n = function(t, i) {
                            var o, u, c;
                            if (n && (i || 4 === s.readyState))
                                if (delete cn[a], n = void 0, s.onreadystatechange = pt.noop, i) 4 !== s.readyState && s.abort();
                                else {
                                    c = {}, o = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                                    try {
                                        u = s.statusText
                                    } catch (t) {
                                        u = ""
                                    }
                                    o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404
                                }
                            c && r(o, u, c, s.getAllResponseHeaders())
                        }, e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = cn[a] = n : n()
                    },
                    abort: function() {
                        n && n(void 0, !0)
                    }
                }
            }
        }), pt.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), pt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return pt.globalEval(t), t
                }
            }
        }), pt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), pt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n = rt.head || pt("head")[0] || rt.documentElement;
                return {
                    send: function(i, r) {
                        e = rt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var dn = [],
            hn = /(=)\?(?=&|$)|\?\?/;
        pt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = dn.pop() || pt.expando + "_" + Be++;
                return this[t] = !0, t
            }
        }), pt.ajaxPrefilter("json jsonp", function(e, n, i) {
            var r, o, s, a = e.jsonp !== !1 && (hn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(hn, "$1" + r) : e.jsonp !== !1 && (e.url += (Fe.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || pt.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === o ? pt(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, dn.push(r)), s && pt.isFunction(o) && o(s[0]), s = o = void 0
            }), "script"
        }), ht.createHTMLDocument = function() {
            if (!rt.implementation.createHTMLDocument) return !1;
            var t = rt.implementation.createHTMLDocument("");
            return t.body.innerHTML = "<form></form><form></form>", 2 === t.body.childNodes.length
        }(), pt.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || (ht.createHTMLDocument ? rt.implementation.createHTMLDocument("") : rt);
            var i = Et.exec(t),
                r = !n && [];
            return i ? [e.createElement(i[1])] : (i = y([t], e, r), r && r.length && pt(r).remove(), pt.merge([], i.childNodes))
        };
        var fn = pt.fn.load;
        pt.fn.load = function(t, e, n) {
            if ("string" != typeof t && fn) return fn.apply(this, arguments);
            var i, r, o, s = this,
                a = t.indexOf(" ");
            return a > -1 && (i = pt.trim(t.slice(a, t.length)), t = t.slice(0, a)), pt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && pt.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(i ? pt("<div>").append(pt.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                    s.each(function() {
                        n.apply(s, o || [t.responseText, e, t])
                    })
                }), this
        }, pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            pt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), pt.expr.filters.animated = function(t) {
            return pt.grep(pt.timers, function(e) {
                return t === e.elem
            }).length
        }, pt.offset = {
            setOffset: function(t, e, n) {
                var i, r, o, s, a, u, c, l = pt.css(t, "position"),
                    d = pt(t),
                    h = {};
                "static" === l && (t.style.position = "relative"), a = d.offset(), o = pt.css(t, "top"), u = pt.css(t, "left"), c = ("absolute" === l || "fixed" === l) && pt.inArray("auto", [o, u]) > -1, c ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), pt.isFunction(e) && (e = e.call(t, n, pt.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : d.css(h)
            }
        }, pt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    pt.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    o = r && r.ownerDocument;
                if (o) return e = o.documentElement, pt.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = nt(o), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === pt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), pt.nodeName(t[0], "html") || (n = t.offset()), n.top += pt.css(t[0], "borderTopWidth", !0) - t.scrollTop(), n.left += pt.css(t[0], "borderLeftWidth", !0) - t.scrollLeft()), {
                        top: e.top - n.top - pt.css(i, "marginTop", !0),
                        left: e.left - n.left - pt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position");) t = t.offsetParent;
                    return t || pe
                })
            }
        }), pt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            pt.fn[t] = function(i) {
                return qt(this, function(t, i, r) {
                    var o = nt(t);
                    return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? pt(o).scrollLeft() : r, n ? r : pt(o).scrollTop()) : t[i] = r)
                }, t, i, arguments.length, null)
            }
        }), pt.each(["top", "left"], function(t, e) {
            pt.cssHooks[e] = j(ht.pixelPosition, function(t, n) {
                if (n) return n = ge(t, e), he.test(n) ? pt(t).position()[e] + "px" : n
            })
        }), pt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            pt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                pt.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return qt(this, function(e, n, i) {
                        var r;
                        return pt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? pt.css(e, n, s) : pt.style(e, n, i, s)
                    }, e, o ? i : void 0, o, null)
                }
            })
        }), pt.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), pt.fn.size = function() {
            return this.length
        }, pt.fn.andSelf = pt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return pt
        });
        var pn = t.jQuery,
            mn = t.$;
        return pt.noConflict = function(e) {
            return t.$ === pt && (t.$ = mn), e && t.jQuery === pt && (t.jQuery = pn), pt
        }, e || (t.jQuery = t.$ = pt), pt
    }),


    /* ----- JQuery Ends Here -----*/






    /* ----- JQuery Easing  Starts Here  https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js -----*/

    jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(t, e, n, i, r) {
        return jQuery.easing[jQuery.easing.def](t, e, n, i, r)
    },
    easeInQuad: function(t, e, n, i, r) {
        return i * (e /= r) * e + n
    },
    easeOutQuad: function(t, e, n, i, r) {
        return -i * (e /= r) * (e - 2) + n
    },
    easeInOutQuad: function(t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
    },
    easeInCubic: function(t, e, n, i, r) {
        return i * (e /= r) * e * e + n
    },
    easeOutCubic: function(t, e, n, i, r) {
        return i * ((e = e / r - 1) * e * e + 1) + n
    },
    easeInOutCubic: function(t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
    },
    easeInQuart: function(t, e, n, i, r) {
        return i * (e /= r) * e * e * e + n
    },
    easeOutQuart: function(t, e, n, i, r) {
        return -i * ((e = e / r - 1) * e * e * e - 1) + n
    },
    easeInOutQuart: function(t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
    },
    easeInQuint: function(t, e, n, i, r) {
        return i * (e /= r) * e * e * e * e + n
    },
    easeOutQuint: function(t, e, n, i, r) {
        return i * ((e = e / r - 1) * e * e * e * e + 1) + n
    },
    easeInOutQuint: function(t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
    },
    easeInSine: function(t, e, n, i, r) {
        return -i * Math.cos(e / r * (Math.PI / 2)) + i + n
    },
    easeOutSine: function(t, e, n, i, r) {
        return i * Math.sin(e / r * (Math.PI / 2)) + n
    },
    easeInOutSine: function(t, e, n, i, r) {
        return -i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
    },
    easeInExpo: function(t, e, n, i, r) {
        return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
    },
    easeOutExpo: function(t, e, n, i, r) {
        return e == r ? n + i : i * (-Math.pow(2, -10 * e / r) + 1) + n
    },
    easeInOutExpo: function(t, e, n, i, r) {
        return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
    },
    easeInCirc: function(t, e, n, i, r) {
        return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + n
    },
    easeOutCirc: function(t, e, n, i, r) {
        return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
    },
    easeInOutCirc: function(t, e, n, i, r) {
        return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
    },
    easeInElastic: function(t, e, n, i, r) {
        var o = 1.70158,
            s = 0,
            a = i;
        if (0 == e) return n;
        if (1 == (e /= r)) return n + i;
        if (s || (s = .3 * r), a < Math.abs(i)) {
            a = i;
            var o = s / 4
        } else var o = s / (2 * Math.PI) * Math.asin(i / a);
        return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / s)) + n
    },
    easeOutElastic: function(t, e, n, i, r) {
        var o = 1.70158,
            s = 0,
            a = i;
        if (0 == e) return n;
        if (1 == (e /= r)) return n + i;
        if (s || (s = .3 * r), a < Math.abs(i)) {
            a = i;
            var o = s / 4
        } else var o = s / (2 * Math.PI) * Math.asin(i / a);
        return a * Math.pow(2, -10 * e) * Math.sin((e * r - o) * (2 * Math.PI) / s) + i + n
    },
    easeInOutElastic: function(t, e, n, i, r) {
        var o = 1.70158,
            s = 0,
            a = i;
        if (0 == e) return n;
        if (2 == (e /= r / 2)) return n + i;
        if (s || (s = r * (.3 * 1.5)), a < Math.abs(i)) {
            a = i;
            var o = s / 4
        } else var o = s / (2 * Math.PI) * Math.asin(i / a);
        return e < 1 ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / s)) + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / s) * .5 + i + n
    },
    easeInBack: function(t, e, n, i, r, o) {
        return void 0 == o && (o = 1.70158), i * (e /= r) * e * ((o + 1) * e - o) + n
    },
    easeOutBack: function(t, e, n, i, r, o) {
        return void 0 == o && (o = 1.70158), i * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + n
    },
    easeInOutBack: function(t, e, n, i, r, o) {
        return void 0 == o && (o = 1.70158), (e /= r / 2) < 1 ? i / 2 * (e * e * (((o *= 1.525) + 1) * e - o)) + n : i / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + n
    },
    easeInBounce: function(t, e, n, i, r) {
        return i - jQuery.easing.easeOutBounce(t, r - e, 0, i, r) + n
    },
    easeOutBounce: function(t, e, n, i, r) {
        return (e /= r) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
    },
    easeInOutBounce: function(t, e, n, i, r) {
        return e < r / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
    }
}),

    /* ----- JQuery Easing  Ends Here -----*/


   /*  Reference code

   https://packery.metafizzy.co/extras.html
   https://unpkg.com/packery@2.1.1/dist/packery.pkgd.js
   */

    /* ----- JQuery Bridget  Starts Here  ( t- window,e-factory ,n-jQuery) -----*/

    ! function(t, e) {
    "use strict";
        /* globals define: false, module: false, require: false */
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(n) {
        e(t, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function n(n, o, a) {

        // $().plugin('methodName')
        function u(t, e, i) {
            var r, o = "$()." + n + '("' + e + '")';
            return t.each(function(t, u) {
                var c = a.data(u, n);
                if (!c) return void s(n + " not initialized. Cannot call methods, i.e. " + o);
                var l = c[e];
                if (!l || "_" == e.charAt(0)) return void s(o + " is not a valid method");
                var d = l.apply(c, i);
                r = void 0 === r ? d : r
            }), void 0 !== r ? r : t
        }
        function c(t, e) {
            t.each(function(t, i) {
                var r = a.data(i, n);
                r ? (r.option(e), r._init()) : (r = new o(i, e), a.data(i, n, r))
            })
        }

        // ----- jQueryBridget ----- //
        // add option method -> $().plugin('option', {...})
        a = a || e || t.jQuery, a && (o.prototype.option || (o.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }),
            a.fn[n] = function(t) {
            if ("string" == typeof t) {
                var e = r.call(arguments, 1);
                return u(this, t, e)
            }
            return c(this, t), this
        }, i(a))
    }

    // ----- jQueryBridget ----- //
    function i(t) {
        !t || t && t.bridget || (t.bridget = n)
    }

    // ----- utils ----- //
    var r = Array.prototype.slice,
        o = t.console,       // console
        //logError
        s = "undefined" == typeof o ? function() {} : function(t) {
            o.error(t)
        };
    return i(e || t.jQuery), n
}),

    // getSize v2.0.2 * measure size of elements
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                n = -1 == t.indexOf("%") && !isNaN(e);
            return n && e
        }

        function e() {}

        function n() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; c > e; e++) {
                var n = u[e];
                t[n] = 0
            }
            return t
        }

        function i(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function r() {
            if (!l) {
                l = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(e);
                var r = i(e);
                o.isBoxSizeOuter = s = 200 == t(r.width), n.removeChild(e)
            }
        }

        function o(e) {
            if (r(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var o = i(e);
                if ("none" == o.display) return n();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var l = a.isBorderBox = "border-box" == o.boxSizing, d = 0; c > d; d++) {
                    var h = u[d],
                        f = o[h],
                        p = parseFloat(f);
                    a[h] = isNaN(p) ? 0 : p
                }
                var m = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    y = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    b = a.borderLeftWidth + a.borderRightWidth,
                    w = a.borderTopWidth + a.borderBottomWidth,
                    x = l && s,
                    T = t(o.width);
                T !== !1 && (a.width = T + (x ? 0 : m + b));
                var E = t(o.height);
                return E !== !1 && (a.height = E + (x ? 0 : g + w)), a.innerWidth = a.width - (m + b), a.innerHeight = a.height - (g + w), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
            }
        }
        var s, a = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            },
            u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            c = u.length,
            l = !1;
        return o
    }),

    // EvEmitter v1.0.2 * EvEmitter adds publish/subscribe pattern to a browser class */
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }(this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return -1 == i.indexOf(e) && i.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {},
                    i = n[t] = n[t] || {};
                return i[e] = !0, this
            }
        }, e.off = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = 0,
                    r = n[i];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; r;) {
                    var s = o && o[r];
                    s && (this.off(t, r), delete o[r]), r.apply(this, e), i += s ? 0 : 1, r = n[i]
                }
                return this
            }
        }, t
    }),

    // matchesSelector v2.0.1 * matchesSelector( element, '.selector' )
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var i = e[n],
                    r = i + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        return function(e, n) {
            return e[t](n)
        }
    }),

    // Fizzy UI utils v2.0.1 * matchesSelector( element, '.selector' )
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(n) {
            return e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var n = {};
        n.extend = function(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }, n.modulo = function(t, e) {
            return (t % e + e) % e
        }, n.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0; n < t.length; n++) e.push(t[n]);
            else e.push(t);
            return e
        }, n.removeFrom = function(t, e) {
            var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
        }, n.getParent = function(t, n) {
            for (; t != document.body;)
                if (t = t.parentNode, e(t, n)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, i) {
            t = n.makeArray(t);
            var r = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!i) return void r.push(t);
                    e(t, i) && r.push(t);
                    for (var n = t.querySelectorAll(i), o = 0; o < n.length; o++) r.push(n[o])
                }
            }), r
        }, n.debounceMethod = function(t, e, n) {
            var i = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                t && clearTimeout(t);
                var e = arguments,
                    o = this;
                this[r] = setTimeout(function() {
                    i.apply(o, e), delete o[r]
                }, n || 100)
            }
        }, n.docReady = function(t) {
            "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        };
        var i = t.console;
        return n.htmlInit = function(e, r) {
            n.docReady(function() {
                var o = n.toDashed(r),
                    s = "data-" + o,
                    a = document.querySelectorAll("[" + s + "]"),
                    u = document.querySelectorAll(".js-" + o),
                    c = n.makeArray(a).concat(n.makeArray(u)),
                    l = s + "-options",
                    d = t.jQuery;
                c.forEach(function(t) {
                    var n, o = t.getAttribute(s) || t.getAttribute(l);
                    try {
                        n = o && JSON.parse(o)
                    } catch (e) {
                        return void(i && i.error("Error parsing " + s + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, n);
                    d && d.data(t, r, a)
                })
            })
        }, n
    }),

    // Outlayer Item
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
        "use strict";

        function n(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function i(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function r(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var o = document.documentElement.style,
            s = "string" == typeof o.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
            u = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[s],
            c = {
                transform: a,
                transition: s,
                transitionDuration: s + "Duration",
                transitionProperty: s + "Property",
                transitionDelay: s + "Delay"
            },
            l = i.prototype = Object.create(t.prototype);
        l.constructor = i, l._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, l.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.getSize = function() {
            this.size = e(this.element)
        }, l.css = function(t) {
            var e = this.element.style;
            for (var n in t) {
                var i = c[n] || n;
                e[i] = t[n]
            }
        }, l.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                i = t[e ? "left" : "right"],
                r = t[n ? "top" : "bottom"],
                o = this.layout.size,
                s = -1 != i.indexOf("%") ? parseFloat(i) / 100 * o.width : parseInt(i, 10),
                a = -1 != r.indexOf("%") ? parseFloat(r) / 100 * o.height : parseInt(r, 10);
            s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? o.paddingLeft : o.paddingRight, a -= n ? o.paddingTop : o.paddingBottom, this.position.x = s, this.position.y = a
        }, l.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                r = n ? "paddingLeft" : "paddingRight",
                o = n ? "left" : "right",
                s = n ? "right" : "left",
                a = this.position.x + t[r];
            e[o] = this.getXValue(a), e[s] = "";
            var u = i ? "paddingTop" : "paddingBottom",
                c = i ? "top" : "bottom",
                l = i ? "bottom" : "top",
                d = this.position.y + t[u];
            e[c] = this.getYValue(d), e[l] = "", this.css(e), this.emitEvent("layout", [this])
        }, l.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, l.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, l._transitionTo = function(t, e) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                r = parseInt(t, 10),
                o = parseInt(e, 10),
                s = r === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
            var a = t - n,
                u = e - i,
                c = {};
            c.transform = this.getTranslate(a, u), this.transition({
                to: c,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, l.getTranslate = function(t, e) {
            var n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop");
            return t = n ? t : -t, e = i ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, l.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, l.moveTo = l._transitionTo, l.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, l._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, l.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
            for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
            if (t.from) {
                this.css(t.from);
                var i = this.element.offsetHeight;
                i = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var d = "opacity," + r(a);
        l.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: d,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(u, this, !1)
            }
        }, l.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, l.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var h = {
            "-webkit-transform": "transform"
        };
        l.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = h[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var r = e.onEnd[i];
                    r.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, l.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
        }, l._removeStyles = function(t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var f = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return l.removeTransitionStyles = function() {
            this.css(f)
        }, l.stagger = function(t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, l.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, l.remove = function() {
            return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, l.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[n] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, l.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var n in e) return n
        }, l.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[n] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, l.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, i
    }),

    // Outlayer v2.1.0 * the brains and guts of a layout library
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(n, i, r, o) {
            return e(t, n, i, r, o)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, n, i, r) {
        "use strict";

        function o(t, e) {
            var n = i.getQueryElement(t);
            if (!n) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (n || t)));
            this.element = n, c && (this.$element = c(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(e);
            var r = ++d;
            this.element.outlayerGUID = r, h[r] = this, this._create();
            var o = this._getOption("initLayout");
            o && this.layout()
        }

        function s(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }

        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                n = e && e[1],
                i = e && e[2];
            if (!n.length) return 0;
            n = parseFloat(n);
            var r = p[i] || 1;
            return n * r
        }
        var u = t.console,
            c = t.jQuery,
            l = function() {},
            d = 0,
            h = {};
        o.namespace = "outlayer", o.Item = r, o.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var f = o.prototype;
        i.extend(f, e.prototype), f.option = function(t) {
            i.extend(this.options, t)
        }, f._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, o.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, f._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }, f.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, f._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0; r < e.length; r++) {
                var o = e[r],
                    s = new n(o, this);
                i.push(s)
            }
            return i
        }, f._filterFindItemElements = function(t) {
            return i.filterFindElements(t, this.options.itemSelector)
        }, f.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        }, f.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, f._init = f.layout, f._resetLayout = function() {
            this.getSize()
        }, f.getSize = function() {
            this.size = n(this.element)
        }, f._getMeasurement = function(t, e) {
            var i, r = this.options[t];
            r ? ("string" == typeof r ? i = this.element.querySelector(r) : r instanceof HTMLElement && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
        }, f.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, f._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        }, f._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var n = [];
                t.forEach(function(t) {
                    var i = this._getItemLayoutPosition(t);
                    i.item = t, i.isInstant = e || t.isLayoutInstant, n.push(i)
                }, this), this._processLayoutQueue(n)
            }
        }, f._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, f._processLayoutQueue = function(t) {
            this.updateStagger(), t.forEach(function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, f.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
        }, f._positionItem = function(t, e, n, i, r) {
            i ? t.goTo(e, n) : (t.stagger(r * this.stagger), t.moveTo(e, n))
        }, f._postLayout = function() {
            this.resizeContainer()
        }, f.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, f._getContainerSize = l, f._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, f._emitCompleteOnItems = function(t, e) {
            function n() {
                r.dispatchEvent(t + "Complete", null, [e])
            }

            function i() {
                s++, s == o && n()
            }
            var r = this,
                o = e.length;
            if (!e || !o) return void n();
            var s = 0;
            e.forEach(function(e) {
                e.once(t, i)
            })
        }, f.dispatchEvent = function(t, e, n) {
            var i = e ? [e].concat(n) : n;
            if (this.emitEvent(t, i), c)
                if (this.$element = this.$element || c(this.element), e) {
                    var r = c.Event(e);
                    r.type = t, this.$element.trigger(r, n)
                } else this.$element.trigger(t, n)
        }, f.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, f.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, f.stamp = function(t) {
            t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, f.unstamp = function(t) {
            t = this._find(t), t && t.forEach(function(t) {
                i.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, f._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = i.makeArray(t)) : void 0
        }, f._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(),
                this.stamps.forEach(this._manageStamp, this))
        }, f._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, f._manageStamp = l, f._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                r = n(t),
                o = {
                    left: e.left - i.left - r.marginLeft,
                    top: e.top - i.top - r.marginTop,
                    right: i.right - e.right - r.marginRight,
                    bottom: i.bottom - e.bottom - r.marginBottom
                };
            return o
        }, f.handleEvent = i.handleEvent, f.bindResize = function() {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, f.unbindResize = function() {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, f.onresize = function() {
            this.resize()
        }, i.debounceMethod(o, "onresize", 100), f.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, f.needsResizeLayout = function() {
            var t = n(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, f.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, f.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, f.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, f.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, n) {
                    t.stagger(n * e), t.reveal()
                })
            }
        }, f.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, n) {
                    t.stagger(n * e), t.hide()
                })
            }
        }, f.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, f.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, f.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var n = this.items[e];
                if (n.element == t) return n
            }
        }, f.getItems = function(t) {
            t = i.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var n = this.getItem(t);
                n && e.push(n)
            }, this), e
        }, f.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                t.remove(), i.removeFrom(this.items, t)
            }, this)
        }, f.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete h[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
        }, o.data = function(t) {
            t = i.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && h[e]
        }, o.create = function(t, e) {
            var n = s(o);
            return n.defaults = i.extend({}, o.defaults), i.extend(n.defaults, e), n.compatOptions = i.extend({}, o.compatOptions), n.namespace = t, n.data = o.data, n.Item = s(r), i.htmlInit(n, t), c && c.bridget && c.bridget(t, n), n
        };
        var p = {
            ms: 1,
            s: 1e3
        };
        return o.Item = r, o
    }),

    // Rect * low-level utility class for basic geometry
    function(t, e) {
        "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
    }(window, function() {
        "use strict";

        function t(e) {
            for (var n in t.defaults) this[n] = t.defaults[n];
            for (n in e) this[n] = e[n]
        }
        t.defaults = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        var e = t.prototype;
        return e.contains = function(t) {
            var e = t.width || 0,
                n = t.height || 0;
            return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + n
        }, e.overlaps = function(t) {
            var e = this.x + this.width,
                n = this.y + this.height,
                i = t.x + t.width,
                r = t.y + t.height;
            return this.x < i && e > t.x && this.y < r && n > t.y
        }, e.getMaximalFreeRects = function(e) {
            if (!this.overlaps(e)) return !1;
            var n, i = [],
                r = this.x + this.width,
                o = this.y + this.height,
                s = e.x + e.width,
                a = e.y + e.height;
            return this.y < e.y && (n = new t({
                x: this.x,
                y: this.y,
                width: this.width,
                height: e.y - this.y
            }), i.push(n)), r > s && (n = new t({
                x: s,
                y: this.y,
                width: r - s,
                height: this.height
            }), i.push(n)), o > a && (n = new t({
                x: this.x,
                y: a,
                width: this.width,
                height: o - a
            }), i.push(n)), this.x < e.x && (n = new t({
                x: this.x,
                y: this.y,
                width: e.x - this.x,
                height: this.height
            }), i.push(n)), i
        }, e.canFit = function(t) {
            return this.width >= t.width && this.height >= t.height
        }, t
    }),

    //  Packer * bin-packing algorithm
    function(t, e) {
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], e);
        else if ("object" == typeof module && module.exports) module.exports = e(require("./rect"));
        else {
            var n = t.Packery = t.Packery || {};
            n.Packer = e(n.Rect)
        }
    }(window, function(t) {
        "use strict";

        function e(t, e, n) {
            this.width = t || 0, this.height = e || 0, this.sortDirection = n || "downwardLeftToRight", this.reset()
        }
        var n = e.prototype;
        n.reset = function() {
            this.spaces = [];
            var e = new t({
                x: 0,
                y: 0,
                width: this.width,
                height: this.height
            });
            this.spaces.push(e), this.sorter = i[this.sortDirection] || i.downwardLeftToRight
        }, n.pack = function(t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var n = this.spaces[e];
                if (n.canFit(t)) {
                    this.placeInSpace(t, n);
                    break
                }
            }
        }, n.columnPack = function(t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var n = this.spaces[e],
                    i = n.x <= t.x && n.x + n.width >= t.x + t.width && n.height >= t.height - .01;
                if (i) {
                    t.y = n.y, this.placed(t);
                    break
                }
            }
        }, n.rowPack = function(t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var n = this.spaces[e],
                    i = n.y <= t.y && n.y + n.height >= t.y + t.height && n.width >= t.width - .01;
                if (i) {
                    t.x = n.x, this.placed(t);
                    break
                }
            }
        }, n.placeInSpace = function(t, e) {
            t.x = e.x, t.y = e.y, this.placed(t)
        }, n.placed = function(t) {
            for (var e = [], n = 0; n < this.spaces.length; n++) {
                var i = this.spaces[n],
                    r = i.getMaximalFreeRects(t);
                r ? e.push.apply(e, r) : e.push(i)
            }
            this.spaces = e, this.mergeSortSpaces()
        }, n.mergeSortSpaces = function() {
            e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
        }, n.addSpace = function(t) {
            this.spaces.push(t), this.mergeSortSpaces()
        }, e.mergeRects = function(t) {
            var e = 0,
                n = t[e];
            t: for (; n;) {
                for (var i = 0, r = t[e + i]; r;) {
                    if (r == n) i++;
                    else {
                        if (r.contains(n)) {
                            t.splice(e, 1), n = t[e];
                            continue t
                        }
                        n.contains(r) ? t.splice(e + i, 1) : i++
                    }
                    r = t[e + i]
                }
                e++, n = t[e]
            }
            return t
        };
        var i = {
            downwardLeftToRight: function(t, e) {
                return t.y - e.y || t.x - e.x
            },
            rightwardTopToBottom: function(t, e) {
                return t.x - e.x || t.y - e.y
            }
        };
        return e
    }),

    //  Packery Item Element
    function(t, e) {
        "function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("./rect")) : t.Packery.Item = e(t.Outlayer, t.Packery.Rect)
    }(window, function(t, e) {
        "use strict";
        var n = document.documentElement.style,
            i = "string" == typeof n.transform ? "transform" : "WebkitTransform",
            r = function() {
                t.Item.apply(this, arguments)
            },
            o = r.prototype = Object.create(t.Item.prototype),
            s = o._create;
        o._create = function() {
            s.call(this), this.rect = new e
        };
        var a = o.moveTo;
        return o.moveTo = function(t, e) {
            var n = Math.abs(this.position.x - t),
                i = Math.abs(this.position.y - e),
                r = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > n && 1 > i;
            return r ? void this.goTo(t, e) : void a.apply(this, arguments)
        }, o.enablePlacing = function() {
            this.removeTransitionStyles(), this.isTransitioning && i && (this.element.style[i] = "none"), this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0
        }, o.disablePlacing = function() {
            this.isPlacing = !1
        }, o.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
        }, o.showDropPlaceholder = function() {
            var t = this.dropPlaceholder;
            t || (t = this.dropPlaceholder = document.createElement("div"), t.className = "packery-drop-placeholder", t.style.position = "absolute"), t.style.width = this.size.width + "px", t.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(t)
        }, o.positionDropPlaceholder = function() {
            this.dropPlaceholder.style[i] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
        }, o.hideDropPlaceholder = function() {
            var t = this.dropPlaceholder.parentNode;
            t && t.removeChild(this.dropPlaceholder)
        }, r
    }),

    // Packery v2.1.1  Gapless, draggable grid layouts http://packery.metafizzy.co
    function(t, e) {
        "function" == typeof define && define.amd ? define(["get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
    }(window, function(t, e, n, i, r) {
        "use strict";

        function o(t, e) {
            return t.position.y - e.position.y || t.position.x - e.position.x
        }

        function s(t, e) {
            return t.position.x - e.position.x || t.position.y - e.position.y
        }

        function a(t, e) {
            var n = e.x - t.x,
                i = e.y - t.y;
            return Math.sqrt(n * n + i * i)
        }
        n.prototype.canFit = function(t) {
            return this.width >= t.width - 1 && this.height >= t.height - 1
        };
        var u = e.create("packery");
        u.Item = r;
        var c = u.prototype;
        c._create = function() {
            e.prototype._create.call(this), this.packer = new i, this.shiftPacker = new i, this.isEnabled = !0, this.dragItemCount = 0;
            var t = this;
            this.handleDraggabilly = {
                dragStart: function() {
                    t.itemDragStart(this.element)
                },
                dragMove: function() {
                    t.itemDragMove(this.element, this.position.x, this.position.y)
                },
                dragEnd: function() {
                    t.itemDragEnd(this.element)
                }
            }, this.handleUIDraggable = {
                start: function(e, n) {
                    n && t.itemDragStart(e.currentTarget)
                },
                drag: function(e, n) {
                    n && t.itemDragMove(e.currentTarget, n.position.left, n.position.top)
                },
                stop: function(e, n) {
                    n && t.itemDragEnd(e.currentTarget)
                }
            }
        }, c._resetLayout = function() {
            this.getSize(), this._getMeasurements();
            var t, e, n;
            this._getOption("horizontal") ? (t = 1 / 0, e = this.size.innerHeight + this.gutter, n = "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter, e = 1 / 0, n = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = t, this.packer.height = this.shiftPacker.height = e, this.packer.sortDirection = this.shiftPacker.sortDirection = n, this.packer.reset(), this.maxY = 0, this.maxX = 0
        }, c._getMeasurements = function() {
            this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
        }, c._getItemLayoutPosition = function(t) {
            if (this._setRectSize(t.element, t.rect), this.isShifting || this.dragItemCount > 0) {
                var e = this._getPackMethod();
                this.packer[e](t.rect)
            } else this.packer.pack(t.rect);
            return this._setMaxXY(t.rect), t.rect
        }, c.shiftLayout = function() {
            this.isShifting = !0, this.layout(), delete this.isShifting
        }, c._getPackMethod = function() {
            return this._getOption("horizontal") ? "rowPack" : "columnPack"
        }, c._setMaxXY = function(t) {
            this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
        }, c._setRectSize = function(e, n) {
            var i = t(e),
                r = i.outerWidth,
                o = i.outerHeight;
            (r || o) && (r = this._applyGridGutter(r, this.columnWidth), o = this._applyGridGutter(o, this.rowHeight)), n.width = Math.min(r, this.packer.width), n.height = Math.min(o, this.packer.height)
        }, c._applyGridGutter = function(t, e) {
            if (!e) return t + this.gutter;
            e += this.gutter;
            var n = t % e,
                i = n && 1 > n ? "round" : "ceil";
            return t = Math[i](t / e) * e
        }, c._getContainerSize = function() {
            return this._getOption("horizontal") ? {
                width: this.maxX - this.gutter
            } : {
                height: this.maxY - this.gutter
            }
        }, c._manageStamp = function(t) {
            var e, i = this.getItem(t);
            if (i && i.isPlacing) e = i.rect;
            else {
                var r = this._getElementOffset(t);
                e = new n({
                    x: this._getOption("originLeft") ? r.left : r.right,
                    y: this._getOption("originTop") ? r.top : r.bottom
                })
            }
            this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
        }, c.sortItemsByPosition = function() {
            var t = this._getOption("horizontal") ? s : o;
            this.items.sort(t)
        }, c.fit = function(t, e, n) {
            var i = this.getItem(t);
            i && (this.stamp(i.element), i.enablePlacing(), this.updateShiftTargets(i), e = void 0 === e ? i.rect.x : e, n = void 0 === n ? i.rect.y : n, this.shift(i, e, n), this._bindFitEvents(i), i.moveTo(i.rect.x, i.rect.y), this.shiftLayout(), this.unstamp(i.element), this.sortItemsByPosition(), i.disablePlacing())
        }, c._bindFitEvents = function(t) {
            function e() {
                i++, 2 == i && n.dispatchEvent("fitComplete", null, [t])
            }
            var n = this,
                i = 0;
            t.once("layout", e), this.once("layoutComplete", e)
        }, c.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
        }, c.needsResizeLayout = function() {
            var e = t(this.element),
                n = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
            return e[n] != this.size[n]
        }, c.resizeShiftPercentLayout = function() {
            var e = this._getItemsForLayout(this.items),
                n = this._getOption("horizontal"),
                i = n ? "y" : "x",
                r = n ? "height" : "width",
                o = n ? "rowHeight" : "columnWidth",
                s = n ? "innerHeight" : "innerWidth",
                a = this[o];
            if (a = a && a + this.gutter) {
                this._getMeasurements();
                var u = this[o] + this.gutter;
                e.forEach(function(t) {
                    var e = Math.round(t.rect[i] / a);
                    t.rect[i] = e * u
                })
            } else {
                var c = t(this.element)[s] + this.gutter,
                    l = this.packer[r];
                e.forEach(function(t) {
                    t.rect[i] = t.rect[i] / l * c
                })
            }
            this.shiftLayout()
        }, c.itemDragStart = function(t) {
            if (this.isEnabled) {
                this.stamp(t);
                var e = this.getItem(t);
                e && (e.enablePlacing(), e.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(e))
            }
        }, c.updateShiftTargets = function(t) {
            this.shiftPacker.reset(), this._getBoundingRect();
            var e = this._getOption("originLeft"),
                i = this._getOption("originTop");
            this.stamps.forEach(function(t) {
                var r = this.getItem(t);
                if (!r || !r.isPlacing) {
                    var o = this._getElementOffset(t),
                        s = new n({
                            x: e ? o.left : o.right,
                            y: i ? o.top : o.bottom
                        });
                    this._setRectSize(t, s), this.shiftPacker.placed(s)
                }
            }, this);
            var r = this._getOption("horizontal"),
                o = r ? "rowHeight" : "columnWidth",
                s = r ? "height" : "width";
            this.shiftTargetKeys = [], this.shiftTargets = [];
            var a, u = this[o];
            if (u = u && u + this.gutter) {
                var c = Math.ceil(t.rect[s] / u),
                    l = Math.floor((this.shiftPacker[s] + this.gutter) / u);
                a = (l - c) * u;
                for (var d = 0; l > d; d++) {
                    var h = r ? 0 : d * u,
                        f = r ? d * u : 0;
                    this._addShiftTarget(h, f, a)
                }
            } else a = this.shiftPacker[s] + this.gutter - t.rect[s], this._addShiftTarget(0, 0, a);
            var p = this._getItemsForLayout(this.items),
                m = this._getPackMethod();
            p.forEach(function(t) {
                var e = t.rect;
                this._setRectSize(t.element, e), this.shiftPacker[m](e), this._addShiftTarget(e.x, e.y, a);
                var n = r ? e.x + e.width : e.x,
                    i = r ? e.y : e.y + e.height;
                if (this._addShiftTarget(n, i, a), u)
                    for (var o = Math.round(e[s] / u), c = 1; o > c; c++) {
                        var l = r ? n : e.x + u * c,
                            d = r ? e.y + u * c : i;
                        this._addShiftTarget(l, d, a)
                    }
            }, this)
        }, c._addShiftTarget = function(t, e, n) {
            var i = this._getOption("horizontal") ? e : t;
            if (!(0 !== i && i > n)) {
                var r = t + "," + e,
                    o = -1 != this.shiftTargetKeys.indexOf(r);
                o || (this.shiftTargetKeys.push(r), this.shiftTargets.push({
                    x: t,
                    y: e
                }))
            }
        }, c.shift = function(t, e, n) {
            var i, r = 1 / 0,
                o = {
                    x: e,
                    y: n
                };
            this.shiftTargets.forEach(function(t) {
                var e = a(t, o);
                r > e && (i = t, r = e)
            }), t.rect.x = i.x, t.rect.y = i.y
        };
        var l = 120;
        c.itemDragMove = function(t, e, n) {
            function i() {
                o.shift(r, e, n), r.positionDropPlaceholder(), o.layout()
            }
            var r = this.isEnabled && this.getItem(t);
            if (r) {
                e -= this.size.paddingLeft, n -= this.size.paddingTop;
                var o = this,
                    s = new Date;
                this._itemDragTime && s - this._itemDragTime < l ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(i, l)) : (i(), this._itemDragTime = s)
            }
        }, c.itemDragEnd = function(t) {
            function e() {
                i++, 2 == i && (n.element.classList.remove("is-positioning-post-drag"), n.hideDropPlaceholder(), r.dispatchEvent("dragItemPositioned", null, [n]))
            }
            var n = this.isEnabled && this.getItem(t);
            if (n) {
                clearTimeout(this.dragTimeout), n.element.classList.add("is-positioning-post-drag");
                var i = 0,
                    r = this;
                n.once("layout", e), this.once("layoutComplete", e), n.moveTo(n.rect.x, n.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), n.disablePlacing(), this.unstamp(n.element)
            }
        }, c.bindDraggabillyEvents = function(t) {
            this._bindDraggabillyEvents(t, "on")
        }, c.unbindDraggabillyEvents = function(t) {
            this._bindDraggabillyEvents(t, "off")
        }, c._bindDraggabillyEvents = function(t, e) {
            var n = this.handleDraggabilly;
            t[e]("dragStart", n.dragStart), t[e]("dragMove", n.dragMove), t[e]("dragEnd", n.dragEnd)
        }, c.bindUIDraggableEvents = function(t) {
            this._bindUIDraggableEvents(t, "on")
        }, c.unbindUIDraggableEvents = function(t) {
            this._bindUIDraggableEvents(t, "off")
        }, c._bindUIDraggableEvents = function(t, e) {
            var n = this.handleUIDraggable;
            t[e]("dragstart", n.start)[e]("drag", n.drag)[e]("dragstop", n.stop)
        };
        var d = c.destroy;
        return c.destroy = function() {
            d.apply(this, arguments), this.isEnabled = !1
        }, u.Rect = n, u.Packer = i, u
    }),


    // EvEmitter v1.0.2 * Lil' event emitter
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }(this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return i.indexOf(e) == -1 && i.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {},
                    i = n[t] = n[t] || [];
                return i[e] = !0, this
            }
        }, e.off = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return i != -1 && n.splice(i, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = 0,
                    r = n[i];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; r;) {
                    var s = o && o[r];
                    s && (this.off(t, r), delete o[r]), r.apply(this, e), i += s ? 0 : 1, r = n[i]
                }
                return this
            }
        }, t
    }),

    // could not find /
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(n) {
            return e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }(window, function t(e, n) {
        function i(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function r(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
                for (var n = 0; n < t.length; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function o(t, e, n) {
            return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = r(t), this.options = i({}, this.options), "function" == typeof e ? n = e : i(this.options, e), n && this.on("always", n), this.getImages(), $ && (this.jqDeferred = new $.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new o(t, e, n)
        }

        function s(t) {
            this.img = t
        }

        function a(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var $ = e.jQuery,
            u = e.console;
        o.prototype = Object.create(n.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && c[e]) {
                for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
                    var r = n[i];
                    this.addImage(r)
                }
                if ("string" == typeof this.options.background) {
                    var o = t.querySelectorAll(this.options.background);
                    for (i = 0; i < o.length; i++) {
                        var s = o[i];
                        this.addElementBackgroundImages(s)
                    }
                }
            }
        };
        var c = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
                    var r = i && i[2];
                    r && this.addBackground(r, t), i = n.exec(e.backgroundImage)
                }
        }, o.prototype.addImage = function(t) {
            var e = new s(t);
            this.images.push(e)
        }, o.prototype.addBackground = function(t, e) {
            var n = new a(t, e);
            this.images.push(n)
        }, o.prototype.check = function() {
            function t(t, n, i) {
                setTimeout(function() {
                    e.progress(t, n, i)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, o.prototype.progress = function(t, e, n) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && u && u.log("progress: " + n, t, e)
        }, o.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, s.prototype = Object.create(n.prototype), s.prototype.check = function() {
            var t = this.getIsImageComplete();
            return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, s.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, s.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, s.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, s.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, a.prototype = Object.create(s.prototype), a.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var t = this.getIsImageComplete();
            t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, a.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, o.makeJQueryPlugin = function(t) {
            t = t || e.jQuery, t && ($ = t, $.fn.imagesLoaded = function(t, e) {
                var n = new o(this, t, e);
                return n.jqDeferred.promise($(this))
            })
        }, o.makeJQueryPlugin(), o
    }),

    /* ----- JQuery Bridget  Ends Here -----*/



    /* ----- JQuery Fit  Starts Here -----*/
    function($) {
        "use strict";
        $.fn.fitVids = function(t) {
            var e = {
                customSelector: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var n = document.createElement("div"),
                    i = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
                    r = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
                n.className = "fit-vids-style", n.id = "fit-vids-style", n.style.display = "none", n.innerHTML = r, i.parentNode.insertBefore(n, i)
            }
            return t && $.extend(e, t), this.each(function() {
                var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                e.customSelector && t.push(e.customSelector);
                var n = $(this).find(t.join(","));
                n = n.not("object object"), n.each(function() {
                    var t = $(this);
                    if (!("embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                        var e = "object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                            n = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10),
                            i = e / n;
                        if (!t.attr("id")) {
                            var r = "fitvid" + Math.floor(999999 * Math.random());
                            t.attr("id", r)
                        }
                        t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * i + "%"), t.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto);
    /* ----- JQuery Fit  Ends Here -----*/


    /* ----- JQuery Konami  Starts Here -----*/
    var Konami = function(t) {
    var e = {
        addEvent: function(t, e, n, i) {
            t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && (t["e" + e + n] = n, t[e + n] = function() {
                t["e" + e + n](window.event, i)
            }, t.attachEvent("on" + e, t[e + n]))
        },
        input: "",
        pattern: "38384040373937396665",
        load: function(t) {
            this.addEvent(document, "keydown", function(n, i) {
                if (i && (e = i), e.input += n ? n.keyCode : event.keyCode, e.input.length > e.pattern.length && (e.input = e.input.substr(e.input.length - e.pattern.length)), e.input == e.pattern) return e.code(t), e.input = "", n.preventDefault(), !1
            }, this), this.iphone.load(t)
        },
        code: function(t) {
            window.location = t
        },
        iphone: {
            start_x: 0,
            start_y: 0,
            stop_x: 0,
            stop_y: 0,
            tap: !1,
            capture: !1,
            orig_keys: "",
            keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
            code: function(t) {
                e.code(t)
            },
            load: function(t) {
                this.orig_keys = this.keys, e.addEvent(document, "touchmove", function(t) {
                    if (1 == t.touches.length && 1 == e.iphone.capture) {
                        var n = t.touches[0];
                        e.iphone.stop_x = n.pageX, e.iphone.stop_y = n.pageY, e.iphone.tap = !1, e.iphone.capture = !1, e.iphone.check_direction()
                    }
                }), e.addEvent(document, "touchend", function(n) {
                    1 == e.iphone.tap && e.iphone.check_direction(t)
                }, !1), e.addEvent(document, "touchstart", function(t) {
                    e.iphone.start_x = t.changedTouches[0].pageX, e.iphone.start_y = t.changedTouches[0].pageY, e.iphone.tap = !0, e.iphone.capture = !0
                })
            },
            check_direction: function(t) {
                x_magnitude = Math.abs(this.start_x - this.stop_x), y_magnitude = Math.abs(this.start_y - this.stop_y), x = this.start_x - this.stop_x < 0 ? "RIGHT" : "LEFT", y = this.start_y - this.stop_y < 0 ? "DOWN" : "UP", result = x_magnitude > y_magnitude ? x : y, result = 1 == this.tap ? "TAP" : result, result == this.keys[0] && (this.keys = this.keys.slice(1, this.keys.length)), 0 == this.keys.length && (this.keys = this.orig_keys, this.code(t))
            }
        }
    };
    return "string" == typeof t && e.load(t), "function" == typeof t && (e.code = t, e.load()), e
};
    /* ----- JQuery Konami  Ends Here -----*/




    /*------------ UNIDENTIFIED SECTION STARTS -------------*/
    ! function(t) {
        "undefined" != typeof define && define.amd ? define([], t) : "undefined" != typeof module && module.exports ? module.exports = t() : window.scrollMonitor = t()
    }(

        function() {
        function t() {
            if (c.viewportTop = u(), c.viewportBottom = c.viewportTop + c.viewportHeight, c.documentHeight = x(), c.documentHeight !== T) {
                for (k = l.length; k--;) l[k].recalculateLocation();
                T = c.documentHeight
            }
        }

        function e() {
            c.viewportHeight = w(), t(), i()
        }

        function n() {
            clearTimeout(C), C = setTimeout(e, 100)
        }

        function i() {
            for (S = l.length; S--;) l[S].update();
            for (S = l.length; S--;) l[S].triggerCallbacks()
        }

        function r(t, e) {
            function n(t) {
                if (0 !== t.length)
                    for (w = t.length; w--;) x = t[w], x.callback.call(i, E), x.isOne && t.splice(w, 1)
            }
            var i = this;
            this.watchItem = t, e ? e === +e ? this.offsets = {
                top: e,
                bottom: e
            } : this.offsets = {
                top: e.top || b.top,
                bottom: e.bottom || b.bottom
            } : this.offsets = b, this.callbacks = {};
            for (var r = 0, o = v.length; r < o; r++) i.callbacks[v[r]] = [];
            this.locked = !1;
            var s, a, u, l, w, x;
            this.triggerCallbacks = function t() {
                switch (this.isInViewport && !s && n(this.callbacks[h]), this.isFullyInViewport && !a && n(this.callbacks[f]), this.isAboveViewport !== u && this.isBelowViewport !== l && (n(this.callbacks[d]), a || this.isFullyInViewport || (n(this.callbacks[f]), n(this.callbacks[m])), s || this.isInViewport || (n(this.callbacks[h]), n(this.callbacks[p]))), !this.isFullyInViewport && a && n(this.callbacks[m]), !this.isInViewport && s && n(this.callbacks[p]), this.isInViewport !== s && n(this.callbacks[d]), !0) {
                    case s !== this.isInViewport:
                    case a !== this.isFullyInViewport:
                    case u !== this.isAboveViewport:
                    case l !== this.isBelowViewport:
                        n(this.callbacks[y])
                }
                s = this.isInViewport, a = this.isFullyInViewport, u = this.isAboveViewport, l = this.isBelowViewport
            }, this.recalculateLocation = function() {
                if (!this.locked) {
                    var t = this.top,
                        e = this.bottom;
                    if (this.watchItem.nodeName) {
                        var i = this.watchItem.style.display;
                        "none" === i && (this.watchItem.style.display = "");
                        var r = this.watchItem.getBoundingClientRect();
                        this.top = r.top + c.viewportTop, this.bottom = r.bottom + c.viewportTop, "none" === i && (this.watchItem.style.display = i)
                    } else this.watchItem === +this.watchItem ? this.watchItem > 0 ? this.top = this.bottom = this.watchItem : this.top = this.bottom = c.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);
                    this.top -= this.offsets.top, this.bottom += this.offsets.bottom, this.height = this.bottom - this.top, void 0 === t && void 0 === e || this.top === t && this.bottom === e || n(this.callbacks[g])
                }
            }, this.recalculateLocation(), this.update(), s = this.isInViewport, a = this.isFullyInViewport, u = this.isAboveViewport, l = this.isBelowViewport
        }

        function o(e) {
            E = e, t(), i()
        }

        var s = "undefined" == typeof window,
            a = !s,
            u = function() {
                return s ? 0 : window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop
            },
            c = {},
            l = [],
            d = "visibilityChange",
            h = "enterViewport",
            f = "fullyEnterViewport",
            p = "exitViewport",
            m = "partiallyExitViewport",
            g = "locationChange",
            y = "stateChange",
            v = [d, h, f, p, m, g, y],
            b = {
                top: 0,
                bottom: 0
            },
            w = function() {
                return s ? 0 : window.innerHeight || document.documentElement.clientHeight
            },
            x = function() {
                return s ? 0 : Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight)
            };
        c.viewportTop = null, c.viewportBottom = null, c.documentHeight = null, c.viewportHeight = w();
        var T, E, k, C, S;
        r.prototype = {
            on: function(t, e, n) {
                switch (!0) {
                    case t === d && !this.isInViewport && this.isAboveViewport:
                    case t === h && this.isInViewport:
                    case t === f && this.isFullyInViewport:
                    case t === p && this.isAboveViewport && !this.isInViewport:
                    case t === m && this.isAboveViewport:
                        if (e.call(this, E), n) return
                }
                if (!this.callbacks[t]) throw new Error("Tried to add a scroll monitor listener of type " + t + ". Your options are: " + v.join(", "));
                this.callbacks[t].push({
                    callback: e,
                    isOne: n || !1
                })
            },
            off: function(t, e) {
                if (!this.callbacks[t]) throw new Error("Tried to remove a scroll monitor listener of type " + t + ". Your options are: " + v.join(", "));
                for (var n = 0, i; i = this.callbacks[t][n]; n++)
                    if (i.callback === e) {
                        this.callbacks[t].splice(n, 1);
                        break
                    }
            },
            one: function(t, e) {
                this.on(t, e, !0)
            },
            recalculateSize: function() {
                this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, this.bottom = this.top + this.height
            },
            update: function() {
                this.isAboveViewport = this.top < c.viewportTop, this.isBelowViewport = this.bottom > c.viewportBottom, this.isInViewport = this.top <= c.viewportBottom && this.bottom >= c.viewportTop, this.isFullyInViewport = this.top >= c.viewportTop && this.bottom <= c.viewportBottom || this.isAboveViewport && this.isBelowViewport
            },
            destroy: function() {
                var t = l.indexOf(this),
                    e = this;
                l.splice(t, 1);
                for (var n = 0, i = v.length; n < i; n++) e.callbacks[v[n]].length = 0
            },
            lock: function() {
                this.locked = !0
            },
            unlock: function() {
                this.locked = !1
            }
        };
        for (var _ = function(t) {
            return function(e, n) {
                this.on.call(this, t, e, n)
            }
        }, L = 0, I = v.length; L < I; L++) {
            var N = v[L];
            r.prototype[N] = _(N)
        }
        if (a) try {
            t()
        } catch (e) {
            try {
                window.$(t)
            } catch (t) {
                throw new Error("If you must put scrollMonitor in the <head>, you must use jQuery.")
            }
        }
        return a && (window.addEventListener ? (window.addEventListener("scroll", o), window.addEventListener("resize", n)) : (window.attachEvent("onscroll", o), window.attachEvent("onresize", n))), c.beget = c.create = function(t, e) {
            "string" == typeof t ? t = document.querySelector(t) : t && t.length > 0 && (t = t[0]);
            var n = new r(t, e);
            return l.push(n), n.update(), n
        }, c.update = function() {
            E = null, t(), i()
        }, c.recalculateLocations = function() {
            c.documentHeight = 0, c.update()
        }, c
    }),
        function(t) {

            function e(t, e, n, i) {
                return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
            }

            function n() {
                d = null, a.last && (a.el.trigger("longTap"), a = {})
            }

            function i() {
                d && clearTimeout(d), d = null
            }

            function r() {
                u && clearTimeout(u), c && clearTimeout(c), l && clearTimeout(l), d && clearTimeout(d), u = c = l = d = null, a = {}
            }

            function o(t) {
                return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
            }

            function s(t, e) {
                return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
            }
            var a = {},
                u, c, l, d, h = 750,
                f;
            t(document).ready(function() {
                var p, m, g = 0,
                    y = 0,
                    v, b;
                "MSGesture" in window && (f = new MSGesture, f.target = document.body), t(document).bind("MSGestureEnd", function(t) {
                    var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                    e && (a.el.trigger("swipe"), a.el.trigger("swipe" + e))
                }).on("touchstart MSPointerDown pointerdown", function(e) {
                    (b = s(e, "down")) && !o(e) || (v = b ? e : e.touches[0], e.touches && 1 === e.touches.length && a.x2 && (a.x2 = void 0, a.y2 = void 0), p = Date.now(), m = p - (a.last || p), a.el = t("tagName" in v.target ? v.target : v.target.parentNode), u && clearTimeout(u), a.x1 = v.pageX, a.y1 = v.pageY, m > 0 && m <= 250 && (a.isDoubleTap = !0), a.last = p, d = setTimeout(n, h), f && b && f.addPointer(e.pointerId))
                }).on("touchmove MSPointerMove pointermove", function(t) {
                    (b = s(t, "move")) && !o(t) || (v = b ? t : t.touches[0], i(), a.x2 = v.pageX, a.y2 = v.pageY, g += Math.abs(a.x1 - a.x2), y += Math.abs(a.y1 - a.y2))
                }).on("touchend MSPointerUp pointerup", function(n) {
                    (b = s(n, "up")) && !o(n) || (i(), a.x2 && Math.abs(a.x1 - a.x2) > 30 || a.y2 && Math.abs(a.y1 - a.y2) > 30 ? l = setTimeout(function() {
                        a.el.trigger("swipe"), a.el.trigger("swipe" + e(a.x1, a.x2, a.y1, a.y2)), a = {}
                    }, 0) : "last" in a && (g < 30 && y < 30 ? c = setTimeout(function() {
                        var e = t.Event("tap");
                        e.cancelTouch = r, a.el.trigger(e), a.isDoubleTap ? (a.el && a.el.trigger("doubleTap"), a = {}) : u = setTimeout(function() {
                            u = null, a.el && a.el.trigger("singleTap"), a = {}
                        }, 250)
                    }, 0) : a = {}), g = y = 0)
                }).on("touchcancel MSPointerCancel pointercancel", r), t(window).on("scroll", r)
            }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
                t.fn[e] = function(t) {
                    return this.on(e, t)
                }
            })
        }
        (window.$);
    /*------------ UNIDENTIFIED SECTION ENDS -------------*/



/* ---------------- MAIN FUNCTIONS START  ------------------------*/

var     open_speed = 400,
        easing_style = "easeOutCirc",
        last_scroll_top = 0,
        scroll_watchers = [],
        site_url = $("body").attr("data-site-url");
        window.tablet = $("body").attr("data-tablet"),
        window.desktop = $("body").attr("data-desktop"),
        window.desktop_large = $("body").attr("data-desktop-large"),
        window.cinema = $("body").attr("data-cinema"),
        window.scrollbar = 15;

var     pause_before_preloaders_fade = 600,

        init = function() {
            externalLinksNewWindow(),
            setUpKonamiCode(),
            makeVideosResponsive(),
            doProjectPackery(),
            doPhotoPackery(),
            preloadProjectThumbnails(),
            preloadPlayThumbnails(),
            showMainAndFooter(),
            $(window).width() >= window.tablet,
            $(window).width() >= window.desktop,
            $(window).width() >= window.desktop_large,
            $(window).width() >= window.cinema
    },

    externalLinksNewWindow = function() {
        $("a").each(function() {
            this.href.indexOf(location.hostname) === -1 && $(this).attr("target", "_blank")
        })
    },

    consoleLog = function(t) {
        console.log(t)
    },

    showMainAndFooter = function() {
        $(".main").addClass("show"), $(".footer").addClass("show")
    },

    getRandomInRange = function(t, e) {
        return Math.random() * (e - t) + t
    },

    easterEgg = function() {
        $("body").scrollTop(1), $("body *").addClass("in-a-spin"), $("body *").bind("oanimationend animationend webkitAnimationEnd", function() {
            $("body *").removeClass("in-a-spin")
        })
    },

    setUpKonamiCode = function() {
        new Konami(function() {
            easterEgg()
        })
    };

    $(".nav-toggle").click(function() {
    $(".primary-nav").toggleClass("show"), consoleLog("clicked")
    });


    var makeVideosResponsive = function() {
        $(".videos .video-block").length > 0 && $(".videos .video-block").fitVids()
    },

    doProjectPackery = function() {
        0 !== $(".projects").length && $(".projects").packery({
            itemSelector: ".project-container",
            transitionDuration: "0.3s"
        })
    },

    doPhotoPackery = function() {
        0 !== $(".photos-packery-container").length && $(".photos-packery-container").imagesLoaded(function() {
            $(".photos-packery-container").packery({
                itemSelector: ".photo-container",
                transitionDuration: "0.3s"
            })
        })
    },

    preloadProjectThumbnails = function() {
        consoleLog("projectThumbnailsPreloading"), $(".projects").imagesLoaded({
            background: ".project-container .project"
        }).progress(function(t, e) {
            var n = $(e.element),
                i = n.find(".loader");
            i.delay(pause_before_preloaders_fade).queue(function() {
                var t = $(this);
                if (t.parent().attr("data-image-loaded", "true"), t.parent().attr("data-index") <= window.elements_to_show) {
                    var e = 1e3;
                    setTimeout(function() {
                        t.addClass("fade-out")
                    }, e)
                }
            })
        })
    },

    preloadPlayThumbnails = function() {
        consoleLog("playThumbnailsPreloading"), $(".play-projects").imagesLoaded({
            background: ".play-project-container .inner"
        }).progress(function(t, e) {
            var n = $(e.element);
            consoleLog(n);
            var i = n.find(".loader");
            i.delay(pause_before_preloaders_fade).queue(function() {
                var t = $(this);
                t.parent().attr("data-image-loaded", "true");
                var e = t.parent().attr("data-index"),
                    n = 400 + 160 * getRandomInRange(1, 8);
                setTimeout(function() {
                    t.addClass("fade-out")
                }, n)
            })
        })
    },

    toggleHeaderPosition = function() {
        $(window).scrollTop() > 50 && ("up" === window.scrollbar_direction && $(".header").removeClass("is-hidden"), "down" === window.scrollbar_direction && $(".header").addClass("is-hidden"))
    },

    hideLoaderIfShowing = function(t) {
        if (!t.find(".loader").hasClass("fade-out") && "true" === t.find(".project").attr("data-image-loaded")) {
            var e = 1e3;
            setTimeout(function() {
                t.find(".loader").addClass("fade-out")
            }, e)
        }
    };

    $(document).ready(function() {init()}),
    $(window).resize(function() {   window.elements_to_show = 1,
                                    $(window).width() >= window.tablet - window.scrollbar && (window.elements_to_show = 2),
                                    $(window).width() >= window.cinema - window.scrollbar && (window.elements_to_show = 2) }),
    $(window).resize(),
    $(document).on("scroll", function() { getScrollDirection(), toggleHeaderPosition() });


    var getScrollDirection = function() {
                                            var t = $(window).scrollTop();
                                            t > last_scroll_top ? window.scrollbar_direction = "down" : window.scrollbar_direction = "up",
                                            consoleLog(window.scrollbar_direction),
                                            last_scroll_top = t };

    var  createScrollWatchBehaviour = function(t, e) {

            scroll_watchers[t].enterViewport(function() {
                "up" === window.scrollbar_direction && (e.addClass("show"),
                e.removeClass("from-bottom"), hideLoaderIfShowing(e)),
                "down" === window.scrollbar_direction && (e.addClass("show"),
                hideLoaderIfShowing(e))}),

            scroll_watchers[t].exitViewport(function() {
            "up" === window.scrollbar_direction && e.removeClass("show"),
            "down" === window.scrollbar_direction && (e.removeClass("show"),
                e.addClass("from-bottom")) })
    };


    $(".scroll-container").each(function(t) {
    scroll_watchers[t] = scrollMonitor.create($(this), 0);
    var e = $(this);
    createScrollWatchBehaviour(t, e);
    var n = 1;
    $(window).width() >= window.tablet - window.scrollbar && (n = 2),
    $(window).width() >= window.cinema - window.scrollbar && (n = 2),
        consoleLog($(this).attr("data-index") + " " + window.elements_to_show),
    $(this).attr("data-index") <= n && e.addClass("show")
});

/* ---------------- MAIN FUNCTIONS END HERE ------------------------*/