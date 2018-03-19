/*! Image Map Resizer (imageMapResizer.min.js ) - v1.0.3 - 2016-06-16
 *  Desc: Resize HTML imageMap to scaled image.
 *  Copyright: (c) 2016 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

$(document).ready(() => {
    ! function() {
        "use strict";

        function a() {
            let h = this;
            let i;
            let j;
            let k;
            let l;

            function a() {
                let b = {
                    width: k.width / k.naturalWidth,
                    height: k.height / k.naturalHeight
                };

                function a(a, c) {
                    let e;

                    function d(a) {
                        let c = 1 === (e = 1 - e) ? "width" : "height";
                        return Math.floor(Number(a) * b[c])
                    }

                    e = 0;
                    i[c].coords = a.split(",").map(d).join(",")
                }

                j.forEach(a)
            }

            function b(a) {
                return a.coords.replace(/ *, */g, ",").replace(/ +/g, ",")
            }

            function c() {
                clearTimeout(l), l = setTimeout(a, 250)
            }

            function d() {
                (k.width !== k.naturalWidth || k.height !== k.naturalHeight) && a()
            }

            function e() {
                k.addEventListener("load", a, !1), window.addEventListener("focus", a, !1), window.addEventListener("resize", c, !1), window.addEventListener("readystatechange", a, !1), document.addEventListener("fullscreenchange", a, !1)
            }

            function f() {
                return "function" === typeof h._resize
            }

            function g() {
                i = h.getElementsByTagName("area"), j = Array.prototype.map.call(i, b), k = document.querySelector('img[usemap="#' + h.name + '"]'), h._resize = a
            }

            i = null;
            j = null;
            k = null;
            l = null;
            f() ? h._resize() : (g(), e(), d())
        }

        function b() {
            let d;

            function b(a) {
                if (!a.tagName) throw new TypeError("Object is not a valid DOM element");
                if ("MAP" !== a.tagName.toUpperCase()) throw new TypeError(`Expected <MAP> tag, found <${a.tagName}>.`)
            }

            function c(c) {
                c && (b(c), a.call(c), d.push(c))
            }

            return function(a) {
                switch (d = [], typeof a) {
                    case "undefined":
                    case "string":
                        Array.prototype.forEach.call(document.querySelectorAll(a || "map"), c);
                        break;
                    case "object":
                        c(a);
                        break;
                    default:
                        throw new TypeError("Unexpected data type (" + typeof a + ").")
                }
                return d
            }
        }
        "function" === typeof define && define.amd ? define([], b) : "object" === typeof module && "object" === typeof module.exports ? module.exports = b() : window.imageMapResize = b(), "jQuery" in window && (jQuery.fn.imageMapResize = function() {
            return this.filter("map").each(a).end()
        })
    }();

    imageMapResize();

});

