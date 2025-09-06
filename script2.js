/*!
 * Build Date :: Fri, 27 Jun 2025 12:31:35 GMT
 * Version :: v1.3.15
 */
!(function (e, t) {
  if ('object' == typeof exports && 'object' == typeof module) module.exports = t();
  else if ('function' == typeof define && define.amd) define([], t);
  else {
    var r = t();
    for (var n in r) ('object' == typeof exports ? exports : e)[n] = r[n];
  }
})(self, function () {
  return (function () {
    var e = {
        31: function (e, t, r) {
          var n;
          !(function (e, s) {
            function i(e) {
              var t = this,
                r = '';
              (t.next = function () {
                var e = t.x ^ (t.x >>> 2);
                return (
                  (t.x = t.y),
                  (t.y = t.z),
                  (t.z = t.w),
                  (t.w = t.v),
                  ((t.d = (t.d + 362437) | 0) + (t.v = t.v ^ (t.v << 4) ^ e ^ (e << 1))) | 0
                );
              }),
                (t.x = 0),
                (t.y = 0),
                (t.z = 0),
                (t.w = 0),
                (t.v = 0),
                e === (0 | e) ? (t.x = e) : (r += e);
              for (var n = 0; n < r.length + 64; n++)
                (t.x ^= 0 | r.charCodeAt(n)), n == r.length && (t.d = (t.x << 10) ^ (t.x >>> 4)), t.next();
            }
            function a(e, t) {
              return (t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), (t.v = e.v), (t.d = e.d), t;
            }
            function o(e, t) {
              var r = new i(e),
                n = t && t.state,
                s = function () {
                  return (r.next() >>> 0) / 4294967296;
                };
              return (
                (s.double = function () {
                  do {
                    var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21);
                  } while (0 === e);
                  return e;
                }),
                (s.int32 = r.next),
                (s.quick = s),
                n &&
                  ('object' == typeof n && a(n, r),
                  (s.state = function () {
                    return a(r, {});
                  })),
                s
              );
            }
            s && s.exports
              ? (s.exports = o)
              : r.amdD && r.amdO
              ? void 0 ===
                  (n = function () {
                    return o;
                  }.call(t, r, t, s)) || (s.exports = n)
              : (this.xorwow = o);
          })(0, (e = r.nmd(e)), r.amdD);
        },
        63: function (e) {
          'use strict';
          e.exports = function (e, t) {
            if (((t = t.split(':')[0]), !(e = +e))) return !1;
            switch (t) {
              case 'http':
              case 'ws':
                return 80 !== e;
              case 'https':
              case 'wss':
                return 443 !== e;
              case 'ftp':
                return 21 !== e;
              case 'gopher':
                return 70 !== e;
              case 'file':
                return !1;
            }
            return 0 !== e;
          };
        },
        67: function (e, t, r) {
          var n;
          !(function (e, s) {
            function i(e) {
              var t = this;
              (t.next = function () {
                var e,
                  r,
                  n = t.x,
                  s = t.i;
                return (
                  (e = n[s]),
                  (r = (e ^= e >>> 7) ^ (e << 24)),
                  (r ^= (e = n[(s + 1) & 7]) ^ (e >>> 10)),
                  (r ^= (e = n[(s + 3) & 7]) ^ (e >>> 3)),
                  (r ^= (e = n[(s + 4) & 7]) ^ (e << 7)),
                  (e = n[(s + 7) & 7]),
                  (r ^= (e ^= e << 13) ^ (e << 9)),
                  (n[s] = r),
                  (t.i = (s + 1) & 7),
                  r
                );
              }),
                (function (e, t) {
                  var r,
                    n = [];
                  if (t === (0 | t)) n[0] = t;
                  else
                    for (t = '' + t, r = 0; r < t.length; ++r)
                      n[7 & r] = (n[7 & r] << 15) ^ ((t.charCodeAt(r) + n[(r + 1) & 7]) << 13);
                  for (; n.length < 8; ) n.push(0);
                  for (r = 0; r < 8 && 0 === n[r]; ++r);
                  for (8 == r ? (n[7] = -1) : n[r], e.x = n, e.i = 0, r = 256; r > 0; --r) e.next();
                })(t, e);
            }
            function a(e, t) {
              return (t.x = e.x.slice()), (t.i = e.i), t;
            }
            function o(e, t) {
              null == e && (e = +new Date());
              var r = new i(e),
                n = t && t.state,
                s = function () {
                  return (r.next() >>> 0) / 4294967296;
                };
              return (
                (s.double = function () {
                  do {
                    var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21);
                  } while (0 === e);
                  return e;
                }),
                (s.int32 = r.next),
                (s.quick = s),
                n &&
                  (n.x && a(n, r),
                  (s.state = function () {
                    return a(r, {});
                  })),
                s
              );
            }
            s && s.exports
              ? (s.exports = o)
              : r.amdD && r.amdO
              ? void 0 ===
                  (n = function () {
                    return o;
                  }.call(t, r, t, s)) || (s.exports = n)
              : (this.xorshift7 = o);
          })(0, (e = r.nmd(e)), r.amdD);
        },
        160: function (e, t, r) {
          'use strict';
          var n = r(63),
            s = r(992),
            i = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
            a = /[\n\r\t]/g,
            o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            c = /:\d+$/,
            l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            u = /^[a-zA-Z]:/;
          function d(e) {
            return (e || '').toString().replace(i, '');
          }
          var h = [
              ['#', 'hash'],
              ['?', 'query'],
              function (e, t) {
                return f(t.protocol) ? e.replace(/\\/g, '/') : e;
              },
              ['/', 'pathname'],
              ['@', 'auth', 1],
              [NaN, 'host', void 0, 1, 1],
              [/:(\d*)$/, 'port', void 0, 1],
              [NaN, 'hostname', void 0, 1, 1],
            ],
            p = { hash: 1, query: 1 };
          function m(e) {
            var t,
              n =
                ('undefined' != typeof window ? window : void 0 !== r.g ? r.g : 'undefined' != typeof self ? self : {})
                  .location || {},
              s = {},
              i = typeof (e = e || n);
            if ('blob:' === e.protocol) s = new b(unescape(e.pathname), {});
            else if ('string' === i) for (t in ((s = new b(e, {})), p)) delete s[t];
            else if ('object' === i) {
              for (t in e) t in p || (s[t] = e[t]);
              void 0 === s.slashes && (s.slashes = o.test(e.href));
            }
            return s;
          }
          function f(e) {
            return 'file:' === e || 'ftp:' === e || 'http:' === e || 'https:' === e || 'ws:' === e || 'wss:' === e;
          }
          function g(e, t) {
            (e = (e = d(e)).replace(a, '')), (t = t || {});
            var r,
              n = l.exec(e),
              s = n[1] ? n[1].toLowerCase() : '',
              i = !!n[2],
              o = !!n[3],
              c = 0;
            return (
              i
                ? o
                  ? ((r = n[2] + n[3] + n[4]), (c = n[2].length + n[3].length))
                  : ((r = n[2] + n[4]), (c = n[2].length))
                : o
                ? ((r = n[3] + n[4]), (c = n[3].length))
                : (r = n[4]),
              'file:' === s
                ? c >= 2 && (r = r.slice(2))
                : f(s)
                ? (r = n[4])
                : s
                ? i && (r = r.slice(2))
                : c >= 2 && f(t.protocol) && (r = n[4]),
              { protocol: s, slashes: i || f(s), slashesCount: c, rest: r }
            );
          }
          function b(e, t, r) {
            if (((e = (e = d(e)).replace(a, '')), !(this instanceof b))) return new b(e, t, r);
            var i,
              o,
              c,
              l,
              p,
              y,
              v = h.slice(),
              S = typeof t,
              w = this,
              I = 0;
            for (
              'object' !== S && 'string' !== S && ((r = t), (t = null)),
                r && 'function' != typeof r && (r = s.parse),
                i = !(o = g(e || '', (t = m(t)))).protocol && !o.slashes,
                w.slashes = o.slashes || (i && t.slashes),
                w.protocol = o.protocol || t.protocol || '',
                e = o.rest,
                (('file:' === o.protocol && (2 !== o.slashesCount || u.test(e))) ||
                  (!o.slashes && (o.protocol || o.slashesCount < 2 || !f(w.protocol)))) &&
                  (v[3] = [/(.*)/, 'pathname']);
              I < v.length;
              I++
            )
              'function' != typeof (l = v[I])
                ? ((c = l[0]),
                  (y = l[1]),
                  c != c
                    ? (w[y] = e)
                    : 'string' == typeof c
                    ? ~(p = '@' === c ? e.lastIndexOf(c) : e.indexOf(c)) &&
                      ('number' == typeof l[2]
                        ? ((w[y] = e.slice(0, p)), (e = e.slice(p + l[2])))
                        : ((w[y] = e.slice(p)), (e = e.slice(0, p))))
                    : (p = c.exec(e)) && ((w[y] = p[1]), (e = e.slice(0, p.index))),
                  (w[y] = w[y] || (i && l[3] && t[y]) || ''),
                  l[4] && (w[y] = w[y].toLowerCase()))
                : (e = l(e, w));
            r && (w.query = r(w.query)),
              i &&
                t.slashes &&
                '/' !== w.pathname.charAt(0) &&
                ('' !== w.pathname || '' !== t.pathname) &&
                (w.pathname = (function (e, t) {
                  if ('' === e) return t;
                  for (
                    var r = (t || '/').split('/').slice(0, -1).concat(e.split('/')),
                      n = r.length,
                      s = r[n - 1],
                      i = !1,
                      a = 0;
                    n--;

                  )
                    '.' === r[n]
                      ? r.splice(n, 1)
                      : '..' === r[n]
                      ? (r.splice(n, 1), a++)
                      : a && (0 === n && (i = !0), r.splice(n, 1), a--);
                  return i && r.unshift(''), ('.' !== s && '..' !== s) || r.push(''), r.join('/');
                })(w.pathname, t.pathname)),
              '/' !== w.pathname.charAt(0) && f(w.protocol) && (w.pathname = '/' + w.pathname),
              n(w.port, w.protocol) || ((w.host = w.hostname), (w.port = '')),
              (w.username = w.password = ''),
              w.auth &&
                (~(p = w.auth.indexOf(':'))
                  ? ((w.username = w.auth.slice(0, p)),
                    (w.username = encodeURIComponent(decodeURIComponent(w.username))),
                    (w.password = w.auth.slice(p + 1)),
                    (w.password = encodeURIComponent(decodeURIComponent(w.password))))
                  : (w.username = encodeURIComponent(decodeURIComponent(w.auth))),
                (w.auth = w.password ? w.username + ':' + w.password : w.username)),
              (w.origin = 'file:' !== w.protocol && f(w.protocol) && w.host ? w.protocol + '//' + w.host : 'null'),
              (w.href = w.toString());
          }
          (b.prototype = {
            set: function (e, t, r) {
              var i = this;
              switch (e) {
                case 'query':
                  'string' == typeof t && t.length && (t = (r || s.parse)(t)), (i[e] = t);
                  break;
                case 'port':
                  (i[e] = t),
                    n(t, i.protocol) ? t && (i.host = i.hostname + ':' + t) : ((i.host = i.hostname), (i[e] = ''));
                  break;
                case 'hostname':
                  (i[e] = t), i.port && (t += ':' + i.port), (i.host = t);
                  break;
                case 'host':
                  (i[e] = t),
                    c.test(t)
                      ? ((t = t.split(':')), (i.port = t.pop()), (i.hostname = t.join(':')))
                      : ((i.hostname = t), (i.port = ''));
                  break;
                case 'protocol':
                  (i.protocol = t.toLowerCase()), (i.slashes = !r);
                  break;
                case 'pathname':
                case 'hash':
                  if (t) {
                    var a = 'pathname' === e ? '/' : '#';
                    i[e] = t.charAt(0) !== a ? a + t : t;
                  } else i[e] = t;
                  break;
                case 'username':
                case 'password':
                  i[e] = encodeURIComponent(t);
                  break;
                case 'auth':
                  var o = t.indexOf(':');
                  ~o
                    ? ((i.username = t.slice(0, o)),
                      (i.username = encodeURIComponent(decodeURIComponent(i.username))),
                      (i.password = t.slice(o + 1)),
                      (i.password = encodeURIComponent(decodeURIComponent(i.password))))
                    : (i.username = encodeURIComponent(decodeURIComponent(t)));
              }
              for (var l = 0; l < h.length; l++) {
                var u = h[l];
                u[4] && (i[u[1]] = i[u[1]].toLowerCase());
              }
              return (
                (i.auth = i.password ? i.username + ':' + i.password : i.username),
                (i.origin = 'file:' !== i.protocol && f(i.protocol) && i.host ? i.protocol + '//' + i.host : 'null'),
                (i.href = i.toString()),
                i
              );
            },
            toString: function (e) {
              (e && 'function' == typeof e) || (e = s.stringify);
              var t,
                r = this,
                n = r.host,
                i = r.protocol;
              i && ':' !== i.charAt(i.length - 1) && (i += ':');
              var a = i + ((r.protocol && r.slashes) || f(r.protocol) ? '//' : '');
              return (
                r.username
                  ? ((a += r.username), r.password && (a += ':' + r.password), (a += '@'))
                  : r.password
                  ? ((a += ':' + r.password), (a += '@'))
                  : 'file:' !== r.protocol && f(r.protocol) && !n && '/' !== r.pathname && (a += '@'),
                (':' === n[n.length - 1] || (c.test(r.hostname) && !r.port)) && (n += ':'),
                (a += n + r.pathname),
                (t = 'object' == typeof r.query ? e(r.query) : r.query) && (a += '?' !== t.charAt(0) ? '?' + t : t),
                r.hash && (a += r.hash),
                a
              );
            },
          }),
            (b.extractProtocol = g),
            (b.location = m),
            (b.trimLeft = d),
            (b.qs = s),
            (e.exports = b);
        },
        180: function (e, t, r) {
          var n;
          !(function (e, s) {
            function i(e) {
              var t = this,
                r = (function () {
                  var e = 4022871197,
                    t = function (t) {
                      t = String(t);
                      for (var r = 0; r < t.length; r++) {
                        var n = 0.02519603282416938 * (e += t.charCodeAt(r));
                        (n -= e = n >>> 0), (e = (n *= e) >>> 0), (e += 4294967296 * (n -= e));
                      }
                      return 2.3283064365386963e-10 * (e >>> 0);
                    };
                  return t;
                })();
              (t.next = function () {
                var e = 2091639 * t.s0 + 2.3283064365386963e-10 * t.c;
                return (t.s0 = t.s1), (t.s1 = t.s2), (t.s2 = e - (t.c = 0 | e));
              }),
                (t.c = 1),
                (t.s0 = r(' ')),
                (t.s1 = r(' ')),
                (t.s2 = r(' ')),
                (t.s0 -= r(e)),
                t.s0 < 0 && (t.s0 += 1),
                (t.s1 -= r(e)),
                t.s1 < 0 && (t.s1 += 1),
                (t.s2 -= r(e)),
                t.s2 < 0 && (t.s2 += 1),
                (r = null);
            }
            function a(e, t) {
              return (t.c = e.c), (t.s0 = e.s0), (t.s1 = e.s1), (t.s2 = e.s2), t;
            }
            function o(e, t) {
              var r = new i(e),
                n = t && t.state,
                s = r.next;
              return (
                (s.int32 = function () {
                  return (4294967296 * r.next()) | 0;
                }),
                (s.double = function () {
                  return s() + 11102230246251565e-32 * ((2097152 * s()) | 0);
                }),
                (s.quick = s),
                n &&
                  ('object' == typeof n && a(n, r),
                  (s.state = function () {
                    return a(r, {});
                  })),
                s
              );
            }
            s && s.exports
              ? (s.exports = o)
              : r.amdD && r.amdO
              ? void 0 ===
                  (n = function () {
                    return o;
                  }.call(t, r, t, s)) || (s.exports = n)
              : (this.alea = o);
          })(0, (e = r.nmd(e)), r.amdD);
        },
        181: function (e, t, r) {
          var n;
          !(function (e, s) {
            function i(e) {
              var t = this,
                r = '';
              (t.x = 0),
                (t.y = 0),
                (t.z = 0),
                (t.w = 0),
                (t.next = function () {
                  var e = t.x ^ (t.x << 11);
                  return (t.x = t.y), (t.y = t.z), (t.z = t.w), (t.w ^= (t.w >>> 19) ^ e ^ (e >>> 8));
                }),
                e === (0 | e) ? (t.x = e) : (r += e);
              for (var n = 0; n < r.length + 64; n++) (t.x ^= 0 | r.charCodeAt(n)), t.next();
            }
            function a(e, t) {
              return (t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t;
            }
            function o(e, t) {
              var r = new i(e),
                n = t && t.state,
                s = function () {
                  return (r.next() >>> 0) / 4294967296;
                };
              return (
                (s.double = function () {
                  do {
                    var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21);
                  } while (0 === e);
                  return e;
                }),
                (s.int32 = r.next),
                (s.quick = s),
                n &&
                  ('object' == typeof n && a(n, r),
                  (s.state = function () {
                    return a(r, {});
                  })),
                s
              );
            }
            s && s.exports
              ? (s.exports = o)
              : r.amdD && r.amdO
              ? void 0 ===
                  (n = function () {
                    return o;
                  }.call(t, r, t, s)) || (s.exports = n)
              : (this.xor128 = o);
          })(0, (e = r.nmd(e)), r.amdD);
        },
        234: function () {},
        391: function (e, t, r) {
          var n = r(180),
            s = r(181),
            i = r(31),
            a = r(67),
            o = r(833),
            c = r(717),
            l = r(801);
          (l.alea = n),
            (l.xor128 = s),
            (l.xorwow = i),
            (l.xorshift7 = a),
            (l.xor4096 = o),
            (l.tychei = c),
            (e.exports = l);
        },
        589: function (e) {
          /*!
           * Build Date :: Tue, 16 Apr 2024 07:25:33 GMT
           * Version :: v1.0.0
           */
          self,
            (e.exports = (function () {
              'use strict';
              var e = {
                  d: function (t, r) {
                    for (var n in r)
                      e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
                  },
                  o: function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                  },
                  r: function (e) {
                    'undefined' != typeof Symbol &&
                      Symbol.toStringTag &&
                      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                      Object.defineProperty(e, '__esModule', { value: !0 });
                  },
                },
                t = {};
              e.r(t),
                e.d(t, {
                  deflateRunCode: function () {
                    return r;
                  },
                });
              var r = function (e) {
                var t = (function (e) {
                  var t = JSON.stringify(e.data),
                    r = (function () {
                      var e = 4,
                        t = 0,
                        r = 1,
                        n = 2;
                      function s(e) {
                        for (var t = e.length; --t >= 0; ) e[t] = 0;
                      }
                      var i = 0,
                        a = 1,
                        o = 2,
                        c = 3,
                        l = 258,
                        u = 29,
                        d = 256,
                        h = d + 1 + u,
                        p = 30,
                        m = 19,
                        f = 2 * h + 1,
                        g = 15,
                        b = 16,
                        y = 7,
                        v = 256,
                        S = 16,
                        w = 17,
                        I = 18,
                        _ = new Uint8Array([
                          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0,
                        ]),
                        C = new Uint8Array([
                          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
                          13,
                        ]),
                        E = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
                        T = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                        x = 512,
                        A = new Array(2 * (h + 2));
                      s(A);
                      var k = new Array(2 * p);
                      s(k);
                      var R = new Array(x);
                      s(R);
                      var D = new Array(l - c + 1);
                      s(D);
                      var O = new Array(u);
                      s(O);
                      var M,
                        L,
                        N,
                        P = new Array(p);
                      function U(e, t, r, n, s) {
                        (this.static_tree = e),
                          (this.extra_bits = t),
                          (this.extra_base = r),
                          (this.elems = n),
                          (this.max_length = s),
                          (this.has_stree = e && e.length);
                      }
                      function F(e, t) {
                        (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
                      }
                      s(P);
                      var z = function (e) {
                          return e < 256 ? R[e] : R[256 + (e >>> 7)];
                        },
                        B = function (e, t) {
                          (e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255);
                        },
                        H = function (e, t, r) {
                          e.bi_valid > b - r
                            ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
                              B(e, e.bi_buf),
                              (e.bi_buf = t >> (b - e.bi_valid)),
                              (e.bi_valid += r - b))
                            : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += r));
                        },
                        j = function (e, t, r) {
                          H(e, r[2 * t], r[2 * t + 1]);
                        },
                        W = function (e, t) {
                          var r = 0;
                          do {
                            (r |= 1 & e), (e >>>= 1), (r <<= 1);
                          } while (--t > 0);
                          return r >>> 1;
                        },
                        Z = function (e) {
                          16 === e.bi_valid
                            ? (B(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                            : e.bi_valid >= 8 &&
                              ((e.pending_buf[e.pending++] = 255 & e.bi_buf), (e.bi_buf >>= 8), (e.bi_valid -= 8));
                        },
                        G = function (e, t) {
                          var r,
                            n,
                            s,
                            i,
                            a,
                            o,
                            c = t.dyn_tree,
                            l = t.max_code,
                            u = t.stat_desc.static_tree,
                            d = t.stat_desc.has_stree,
                            h = t.stat_desc.extra_bits,
                            p = t.stat_desc.extra_base,
                            m = t.stat_desc.max_length,
                            b = 0;
                          for (i = 0; i <= g; i++) e.bl_count[i] = 0;
                          for (c[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < f; r++)
                            (i = c[2 * c[2 * (n = e.heap[r]) + 1] + 1] + 1) > m && ((i = m), b++),
                              (c[2 * n + 1] = i),
                              n > l ||
                                (e.bl_count[i]++,
                                (a = 0),
                                n >= p && (a = h[n - p]),
                                (o = c[2 * n]),
                                (e.opt_len += o * (i + a)),
                                d && (e.static_len += o * (u[2 * n + 1] + a)));
                          if (0 !== b) {
                            do {
                              for (i = m - 1; 0 === e.bl_count[i]; ) i--;
                              e.bl_count[i]--, (e.bl_count[i + 1] += 2), e.bl_count[m]--, (b -= 2);
                            } while (b > 0);
                            for (i = m; 0 !== i; i--)
                              for (n = e.bl_count[i]; 0 !== n; )
                                (s = e.heap[--r]) > l ||
                                  (c[2 * s + 1] !== i &&
                                    ((e.opt_len += (i - c[2 * s + 1]) * c[2 * s]), (c[2 * s + 1] = i)),
                                  n--);
                          }
                        },
                        X = function (e, t, r) {
                          var n,
                            s,
                            i = new Array(g + 1),
                            a = 0;
                          for (n = 1; n <= g; n++) (a = (a + r[n - 1]) << 1), (i[n] = a);
                          for (s = 0; s <= t; s++) {
                            var o = e[2 * s + 1];
                            0 !== o && (e[2 * s] = W(i[o]++, o));
                          }
                        },
                        V = function () {
                          var e,
                            t,
                            r,
                            n,
                            s,
                            i = new Array(g + 1);
                          for (r = 0, n = 0; n < u - 1; n++) for (O[n] = r, e = 0; e < 1 << _[n]; e++) D[r++] = n;
                          for (D[r - 1] = n, s = 0, n = 0; n < 16; n++)
                            for (P[n] = s, e = 0; e < 1 << C[n]; e++) R[s++] = n;
                          for (s >>= 7; n < p; n++)
                            for (P[n] = s << 7, e = 0; e < 1 << (C[n] - 7); e++) R[256 + s++] = n;
                          for (t = 0; t <= g; t++) i[t] = 0;
                          for (e = 0; e <= 143; ) (A[2 * e + 1] = 8), e++, i[8]++;
                          for (; e <= 255; ) (A[2 * e + 1] = 9), e++, i[9]++;
                          for (; e <= 279; ) (A[2 * e + 1] = 7), e++, i[7]++;
                          for (; e <= 287; ) (A[2 * e + 1] = 8), e++, i[8]++;
                          for (X(A, h + 1, i), e = 0; e < p; e++) (k[2 * e + 1] = 5), (k[2 * e] = W(e, 5));
                          (M = new U(A, _, d + 1, h, g)),
                            (L = new U(k, C, 0, p, g)),
                            (N = new U(new Array(0), E, 0, m, y));
                        },
                        q = function (e) {
                          var t;
                          for (t = 0; t < h; t++) e.dyn_ltree[2 * t] = 0;
                          for (t = 0; t < p; t++) e.dyn_dtree[2 * t] = 0;
                          for (t = 0; t < m; t++) e.bl_tree[2 * t] = 0;
                          (e.dyn_ltree[2 * v] = 1), (e.opt_len = e.static_len = 0), (e.sym_next = e.matches = 0);
                        },
                        K = function (e) {
                          e.bi_valid > 8 ? B(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
                            (e.bi_buf = 0),
                            (e.bi_valid = 0);
                        },
                        Y = function (e, t, r, n) {
                          var s = 2 * t,
                            i = 2 * r;
                          return e[s] < e[i] || (e[s] === e[i] && n[t] <= n[r]);
                        },
                        J = function (e, t, r) {
                          for (
                            var n = e.heap[r], s = r << 1;
                            s <= e.heap_len &&
                            (s < e.heap_len && Y(t, e.heap[s + 1], e.heap[s], e.depth) && s++,
                            !Y(t, n, e.heap[s], e.depth));

                          )
                            (e.heap[r] = e.heap[s]), (r = s), (s <<= 1);
                          e.heap[r] = n;
                        },
                        $ = function (e, t, r) {
                          var n,
                            s,
                            i,
                            a,
                            o = 0;
                          if (0 !== e.sym_next)
                            do {
                              (n = 255 & e.pending_buf[e.sym_buf + o++]),
                                (n += (255 & e.pending_buf[e.sym_buf + o++]) << 8),
                                (s = e.pending_buf[e.sym_buf + o++]),
                                0 === n
                                  ? j(e, s, t)
                                  : ((i = D[s]),
                                    j(e, i + d + 1, t),
                                    0 !== (a = _[i]) && ((s -= O[i]), H(e, s, a)),
                                    n--,
                                    (i = z(n)),
                                    j(e, i, r),
                                    0 !== (a = C[i]) && ((n -= P[i]), H(e, n, a)));
                            } while (o < e.sym_next);
                          j(e, v, t);
                        },
                        Q = function (e, t) {
                          var r,
                            n,
                            s,
                            i = t.dyn_tree,
                            a = t.stat_desc.static_tree,
                            o = t.stat_desc.has_stree,
                            c = t.stat_desc.elems,
                            l = -1;
                          for (e.heap_len = 0, e.heap_max = f, r = 0; r < c; r++)
                            0 !== i[2 * r] ? ((e.heap[++e.heap_len] = l = r), (e.depth[r] = 0)) : (i[2 * r + 1] = 0);
                          for (; e.heap_len < 2; )
                            (i[2 * (s = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1),
                              (e.depth[s] = 0),
                              e.opt_len--,
                              o && (e.static_len -= a[2 * s + 1]);
                          for (t.max_code = l, r = e.heap_len >> 1; r >= 1; r--) J(e, i, r);
                          s = c;
                          do {
                            (r = e.heap[1]),
                              (e.heap[1] = e.heap[e.heap_len--]),
                              J(e, i, 1),
                              (n = e.heap[1]),
                              (e.heap[--e.heap_max] = r),
                              (e.heap[--e.heap_max] = n),
                              (i[2 * s] = i[2 * r] + i[2 * n]),
                              (e.depth[s] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1),
                              (i[2 * r + 1] = i[2 * n + 1] = s),
                              (e.heap[1] = s++),
                              J(e, i, 1);
                          } while (e.heap_len >= 2);
                          (e.heap[--e.heap_max] = e.heap[1]), G(e, t), X(i, l, e.bl_count);
                        },
                        ee = function (e, t, r) {
                          var n,
                            s,
                            i = -1,
                            a = t[1],
                            o = 0,
                            c = 7,
                            l = 4;
                          for (0 === a && ((c = 138), (l = 3)), t[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++)
                            (s = a),
                              (a = t[2 * (n + 1) + 1]),
                              (++o < c && s === a) ||
                                (o < l
                                  ? (e.bl_tree[2 * s] += o)
                                  : 0 !== s
                                  ? (s !== i && e.bl_tree[2 * s]++, e.bl_tree[2 * S]++)
                                  : o <= 10
                                  ? e.bl_tree[2 * w]++
                                  : e.bl_tree[2 * I]++,
                                (o = 0),
                                (i = s),
                                0 === a ? ((c = 138), (l = 3)) : s === a ? ((c = 6), (l = 3)) : ((c = 7), (l = 4)));
                        },
                        te = function (e, t, r) {
                          var n,
                            s,
                            i = -1,
                            a = t[1],
                            o = 0,
                            c = 7,
                            l = 4;
                          for (0 === a && ((c = 138), (l = 3)), n = 0; n <= r; n++)
                            if (((s = a), (a = t[2 * (n + 1) + 1]), !(++o < c && s === a))) {
                              if (o < l)
                                do {
                                  j(e, s, e.bl_tree);
                                } while (0 != --o);
                              else
                                0 !== s
                                  ? (s !== i && (j(e, s, e.bl_tree), o--), j(e, S, e.bl_tree), H(e, o - 3, 2))
                                  : o <= 10
                                  ? (j(e, w, e.bl_tree), H(e, o - 3, 3))
                                  : (j(e, I, e.bl_tree), H(e, o - 11, 7));
                              (o = 0),
                                (i = s),
                                0 === a ? ((c = 138), (l = 3)) : s === a ? ((c = 6), (l = 3)) : ((c = 7), (l = 4));
                            }
                        },
                        re = function (e) {
                          var t;
                          for (
                            ee(e, e.dyn_ltree, e.l_desc.max_code),
                              ee(e, e.dyn_dtree, e.d_desc.max_code),
                              Q(e, e.bl_desc),
                              t = m - 1;
                            t >= 3 && 0 === e.bl_tree[2 * T[t] + 1];
                            t--
                          );
                          return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
                        },
                        ne = function (e, t, r, n) {
                          var s;
                          for (H(e, t - 257, 5), H(e, r - 1, 5), H(e, n - 4, 4), s = 0; s < n; s++)
                            H(e, e.bl_tree[2 * T[s] + 1], 3);
                          te(e, e.dyn_ltree, t - 1), te(e, e.dyn_dtree, r - 1);
                        },
                        se = function (e) {
                          var n,
                            s = 4093624447;
                          for (n = 0; n <= 31; n++, s >>>= 1) if (1 & s && 0 !== e.dyn_ltree[2 * n]) return t;
                          if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return r;
                          for (n = 32; n < d; n++) if (0 !== e.dyn_ltree[2 * n]) return r;
                          return t;
                        },
                        ie = !1,
                        ae = function (e, t, r, n) {
                          H(e, (i << 1) + (n ? 1 : 0), 3),
                            K(e),
                            B(e, r),
                            B(e, ~r),
                            r && e.pending_buf.set(e.window.subarray(t, t + r), e.pending),
                            (e.pending += r);
                        },
                        oe = function (t, r, s, i) {
                          var c,
                            l,
                            u = 0;
                          t.level > 0
                            ? (t.strm.data_type === n && (t.strm.data_type = se(t)),
                              Q(t, t.l_desc),
                              Q(t, t.d_desc),
                              (u = re(t)),
                              (c = (t.opt_len + 3 + 7) >>> 3),
                              (l = (t.static_len + 3 + 7) >>> 3) <= c && (c = l))
                            : (c = l = s + 5),
                            s + 4 <= c && -1 !== r
                              ? ae(t, r, s, i)
                              : t.strategy === e || l === c
                              ? (H(t, (a << 1) + (i ? 1 : 0), 3), $(t, A, k))
                              : (H(t, (o << 1) + (i ? 1 : 0), 3),
                                ne(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, u + 1),
                                $(t, t.dyn_ltree, t.dyn_dtree)),
                            q(t),
                            i && K(t);
                        },
                        ce = {
                          _tr_init: function (e) {
                            ie || (V(), (ie = !0)),
                              (e.l_desc = new F(e.dyn_ltree, M)),
                              (e.d_desc = new F(e.dyn_dtree, L)),
                              (e.bl_desc = new F(e.bl_tree, N)),
                              (e.bi_buf = 0),
                              (e.bi_valid = 0),
                              q(e);
                          },
                          _tr_stored_block: ae,
                          _tr_flush_block: oe,
                          _tr_tally: function (e, t, r) {
                            return (
                              (e.pending_buf[e.sym_buf + e.sym_next++] = t),
                              (e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8),
                              (e.pending_buf[e.sym_buf + e.sym_next++] = r),
                              0 === t
                                ? e.dyn_ltree[2 * r]++
                                : (e.matches++, t--, e.dyn_ltree[2 * (D[r] + d + 1)]++, e.dyn_dtree[2 * z(t)]++),
                              e.sym_next === e.sym_end
                            );
                          },
                          _tr_align: function (e) {
                            H(e, a << 1, 3), j(e, v, A), Z(e);
                          },
                        },
                        le = function (e, t, r, n) {
                          for (var s = 65535 & e, i = (e >>> 16) & 65535, a = 0; 0 !== r; ) {
                            r -= a = r > 2e3 ? 2e3 : r;
                            do {
                              i = (i + (s = (s + t[n++]) | 0)) | 0;
                            } while (--a);
                            (s %= 65521), (i %= 65521);
                          }
                          return s | (i << 16);
                        },
                        ue = new Uint32Array(
                          (function () {
                            for (var e, t = [], r = 0; r < 256; r++) {
                              e = r;
                              for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                              t[r] = e;
                            }
                            return t;
                          })()
                        ),
                        de = function (e, t, r, n) {
                          var s = ue,
                            i = n + r;
                          e ^= -1;
                          for (var a = n; a < i; a++) e = (e >>> 8) ^ s[255 & (e ^ t[a])];
                          return ~e;
                        },
                        he = {
                          2: 'need dictionary',
                          1: 'stream end',
                          0: '',
                          '-1': 'file error',
                          '-2': 'stream error',
                          '-3': 'data error',
                          '-4': 'insufficient memory',
                          '-5': 'buffer error',
                          '-6': 'incompatible version',
                        },
                        pe = {
                          Z_NO_FLUSH: 0,
                          Z_PARTIAL_FLUSH: 1,
                          Z_SYNC_FLUSH: 2,
                          Z_FULL_FLUSH: 3,
                          Z_FINISH: 4,
                          Z_BLOCK: 5,
                          Z_TREES: 6,
                          Z_OK: 0,
                          Z_STREAM_END: 1,
                          Z_NEED_DICT: 2,
                          Z_ERRNO: -1,
                          Z_STREAM_ERROR: -2,
                          Z_DATA_ERROR: -3,
                          Z_MEM_ERROR: -4,
                          Z_BUF_ERROR: -5,
                          Z_NO_COMPRESSION: 0,
                          Z_BEST_SPEED: 1,
                          Z_BEST_COMPRESSION: 9,
                          Z_DEFAULT_COMPRESSION: -1,
                          Z_FILTERED: 1,
                          Z_HUFFMAN_ONLY: 2,
                          Z_RLE: 3,
                          Z_FIXED: 4,
                          Z_DEFAULT_STRATEGY: 0,
                          Z_BINARY: 0,
                          Z_TEXT: 1,
                          Z_UNKNOWN: 2,
                          Z_DEFLATED: 8,
                        },
                        me = ce._tr_init,
                        fe = ce._tr_stored_block,
                        ge = ce._tr_flush_block,
                        be = ce._tr_tally,
                        ye = ce._tr_align,
                        ve = pe.Z_NO_FLUSH,
                        Se = pe.Z_PARTIAL_FLUSH,
                        we = pe.Z_FULL_FLUSH,
                        Ie = pe.Z_FINISH,
                        _e = pe.Z_BLOCK,
                        Ce = pe.Z_OK,
                        Ee = pe.Z_STREAM_END,
                        Te = pe.Z_STREAM_ERROR,
                        xe = pe.Z_DATA_ERROR,
                        Ae = pe.Z_BUF_ERROR,
                        ke = pe.Z_DEFAULT_COMPRESSION,
                        Re = pe.Z_FILTERED,
                        De = pe.Z_HUFFMAN_ONLY,
                        Oe = pe.Z_RLE,
                        Me = pe.Z_FIXED,
                        Le = pe.Z_DEFAULT_STRATEGY,
                        Ne = pe.Z_UNKNOWN,
                        Pe = pe.Z_DEFLATED,
                        Ue = 9,
                        Fe = 15,
                        ze = 8,
                        Be = 286,
                        He = 30,
                        je = 19,
                        We = 2 * Be + 1,
                        Ze = 15,
                        Ge = 3,
                        Xe = 258,
                        Ve = Xe + Ge + 1,
                        qe = 32,
                        Ke = 42,
                        Ye = 57,
                        Je = 69,
                        $e = 73,
                        Qe = 91,
                        et = 103,
                        tt = 113,
                        rt = 666,
                        nt = 1,
                        st = 2,
                        it = 3,
                        at = 4,
                        ot = 3,
                        ct = function (e, t) {
                          return (e.msg = he[t]), t;
                        },
                        lt = function (e) {
                          return 2 * e - (e > 4 ? 9 : 0);
                        },
                        ut = function (e) {
                          for (var t = e.length; --t >= 0; ) e[t] = 0;
                        },
                        dt = function (e) {
                          var t,
                            r,
                            n,
                            s = e.w_size;
                          n = t = e.hash_size;
                          do {
                            (r = e.head[--n]), (e.head[n] = r >= s ? r - s : 0);
                          } while (--t);
                          n = t = s;
                          do {
                            (r = e.prev[--n]), (e.prev[n] = r >= s ? r - s : 0);
                          } while (--t);
                        },
                        ht = function (e, t, r) {
                          return ((t << e.hash_shift) ^ r) & e.hash_mask;
                        },
                        pt = function (e) {
                          var t = e.state,
                            r = t.pending;
                          r > e.avail_out && (r = e.avail_out),
                            0 !== r &&
                              (e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + r), e.next_out),
                              (e.next_out += r),
                              (t.pending_out += r),
                              (e.total_out += r),
                              (e.avail_out -= r),
                              (t.pending -= r),
                              0 === t.pending && (t.pending_out = 0));
                        },
                        mt = function (e, t) {
                          ge(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
                            (e.block_start = e.strstart),
                            pt(e.strm);
                        },
                        ft = function (e, t) {
                          e.pending_buf[e.pending++] = t;
                        },
                        gt = function (e, t) {
                          (e.pending_buf[e.pending++] = (t >>> 8) & 255), (e.pending_buf[e.pending++] = 255 & t);
                        },
                        bt = function (e, t, r, n) {
                          var s = e.avail_in;
                          return (
                            s > n && (s = n),
                            0 === s
                              ? 0
                              : ((e.avail_in -= s),
                                t.set(e.input.subarray(e.next_in, e.next_in + s), r),
                                1 === e.state.wrap
                                  ? (e.adler = le(e.adler, t, s, r))
                                  : 2 === e.state.wrap && (e.adler = de(e.adler, t, s, r)),
                                (e.next_in += s),
                                (e.total_in += s),
                                s)
                          );
                        },
                        yt = function (e, t) {
                          var r,
                            n,
                            s = e.max_chain_length,
                            i = e.strstart,
                            a = e.prev_length,
                            o = e.nice_match,
                            c = e.strstart > e.w_size - Ve ? e.strstart - (e.w_size - Ve) : 0,
                            l = e.window,
                            u = e.w_mask,
                            d = e.prev,
                            h = e.strstart + Xe,
                            p = l[i + a - 1],
                            m = l[i + a];
                          e.prev_length >= e.good_match && (s >>= 2), o > e.lookahead && (o = e.lookahead);
                          do {
                            if (l[(r = t) + a] === m && l[r + a - 1] === p && l[r] === l[i] && l[++r] === l[i + 1]) {
                              (i += 2), r++;
                              do {} while (
                                l[++i] === l[++r] &&
                                l[++i] === l[++r] &&
                                l[++i] === l[++r] &&
                                l[++i] === l[++r] &&
                                l[++i] === l[++r] &&
                                l[++i] === l[++r] &&
                                l[++i] === l[++r] &&
                                l[++i] === l[++r] &&
                                i < h
                              );
                              if (((n = Xe - (h - i)), (i = h - Xe), n > a)) {
                                if (((e.match_start = t), (a = n), n >= o)) break;
                                (p = l[i + a - 1]), (m = l[i + a]);
                              }
                            }
                          } while ((t = d[t & u]) > c && 0 != --s);
                          return a <= e.lookahead ? a : e.lookahead;
                        },
                        vt = function (e) {
                          var t,
                            r,
                            n,
                            s = e.w_size;
                          do {
                            if (
                              ((r = e.window_size - e.lookahead - e.strstart),
                              e.strstart >= s + (s - Ve) &&
                                (e.window.set(e.window.subarray(s, s + s - r), 0),
                                (e.match_start -= s),
                                (e.strstart -= s),
                                (e.block_start -= s),
                                e.insert > e.strstart && (e.insert = e.strstart),
                                dt(e),
                                (r += s)),
                              0 === e.strm.avail_in)
                            )
                              break;
                            if (
                              ((t = bt(e.strm, e.window, e.strstart + e.lookahead, r)),
                              (e.lookahead += t),
                              e.lookahead + e.insert >= Ge)
                            )
                              for (
                                n = e.strstart - e.insert,
                                  e.ins_h = e.window[n],
                                  e.ins_h = ht(e, e.ins_h, e.window[n + 1]);
                                e.insert &&
                                ((e.ins_h = ht(e, e.ins_h, e.window[n + Ge - 1])),
                                (e.prev[n & e.w_mask] = e.head[e.ins_h]),
                                (e.head[e.ins_h] = n),
                                n++,
                                e.insert--,
                                !(e.lookahead + e.insert < Ge));

                              );
                          } while (e.lookahead < Ve && 0 !== e.strm.avail_in);
                        },
                        St = function (e, t) {
                          var r,
                            n,
                            s,
                            i = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5,
                            a = 0,
                            o = e.strm.avail_in;
                          do {
                            if (((r = 65535), (s = (e.bi_valid + 42) >> 3), e.strm.avail_out < s)) break;
                            if (
                              ((s = e.strm.avail_out - s),
                              r > (n = e.strstart - e.block_start) + e.strm.avail_in && (r = n + e.strm.avail_in),
                              r > s && (r = s),
                              r < i && ((0 === r && t !== Ie) || t === ve || r !== n + e.strm.avail_in))
                            )
                              break;
                            (a = t === Ie && r === n + e.strm.avail_in ? 1 : 0),
                              fe(e, 0, 0, a),
                              (e.pending_buf[e.pending - 4] = r),
                              (e.pending_buf[e.pending - 3] = r >> 8),
                              (e.pending_buf[e.pending - 2] = ~r),
                              (e.pending_buf[e.pending - 1] = ~r >> 8),
                              pt(e.strm),
                              n &&
                                (n > r && (n = r),
                                e.strm.output.set(e.window.subarray(e.block_start, e.block_start + n), e.strm.next_out),
                                (e.strm.next_out += n),
                                (e.strm.avail_out -= n),
                                (e.strm.total_out += n),
                                (e.block_start += n),
                                (r -= n)),
                              r &&
                                (bt(e.strm, e.strm.output, e.strm.next_out, r),
                                (e.strm.next_out += r),
                                (e.strm.avail_out -= r),
                                (e.strm.total_out += r));
                          } while (0 === a);
                          return (
                            (o -= e.strm.avail_in) &&
                              (o >= e.w_size
                                ? ((e.matches = 2),
                                  e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0),
                                  (e.strstart = e.w_size),
                                  (e.insert = e.strstart))
                                : (e.window_size - e.strstart <= o &&
                                    ((e.strstart -= e.w_size),
                                    e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0),
                                    e.matches < 2 && e.matches++,
                                    e.insert > e.strstart && (e.insert = e.strstart)),
                                  e.window.set(e.strm.input.subarray(e.strm.next_in - o, e.strm.next_in), e.strstart),
                                  (e.strstart += o),
                                  (e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o)),
                              (e.block_start = e.strstart)),
                            e.high_water < e.strstart && (e.high_water = e.strstart),
                            a
                              ? at
                              : t !== ve && t !== Ie && 0 === e.strm.avail_in && e.strstart === e.block_start
                              ? st
                              : ((s = e.window_size - e.strstart),
                                e.strm.avail_in > s &&
                                  e.block_start >= e.w_size &&
                                  ((e.block_start -= e.w_size),
                                  (e.strstart -= e.w_size),
                                  e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0),
                                  e.matches < 2 && e.matches++,
                                  (s += e.w_size),
                                  e.insert > e.strstart && (e.insert = e.strstart)),
                                s > e.strm.avail_in && (s = e.strm.avail_in),
                                s &&
                                  (bt(e.strm, e.window, e.strstart, s),
                                  (e.strstart += s),
                                  (e.insert += s > e.w_size - e.insert ? e.w_size - e.insert : s)),
                                e.high_water < e.strstart && (e.high_water = e.strstart),
                                (s = (e.bi_valid + 42) >> 3),
                                (i =
                                  (s = e.pending_buf_size - s > 65535 ? 65535 : e.pending_buf_size - s) > e.w_size
                                    ? e.w_size
                                    : s),
                                ((n = e.strstart - e.block_start) >= i ||
                                  ((n || t === Ie) && t !== ve && 0 === e.strm.avail_in && n <= s)) &&
                                  ((r = n > s ? s : n),
                                  (a = t === Ie && 0 === e.strm.avail_in && r === n ? 1 : 0),
                                  fe(e, e.block_start, r, a),
                                  (e.block_start += r),
                                  pt(e.strm)),
                                a ? it : nt)
                          );
                        },
                        wt = function (e, t) {
                          for (var r, n; ; ) {
                            if (e.lookahead < Ve) {
                              if ((vt(e), e.lookahead < Ve && t === ve)) return nt;
                              if (0 === e.lookahead) break;
                            }
                            if (
                              ((r = 0),
                              e.lookahead >= Ge &&
                                ((e.ins_h = ht(e, e.ins_h, e.window[e.strstart + Ge - 1])),
                                (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                                (e.head[e.ins_h] = e.strstart)),
                              0 !== r && e.strstart - r <= e.w_size - Ve && (e.match_length = yt(e, r)),
                              e.match_length >= Ge)
                            )
                              if (
                                ((n = be(e, e.strstart - e.match_start, e.match_length - Ge)),
                                (e.lookahead -= e.match_length),
                                e.match_length <= e.max_lazy_match && e.lookahead >= Ge)
                              ) {
                                e.match_length--;
                                do {
                                  e.strstart++,
                                    (e.ins_h = ht(e, e.ins_h, e.window[e.strstart + Ge - 1])),
                                    (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                                    (e.head[e.ins_h] = e.strstart);
                                } while (0 != --e.match_length);
                                e.strstart++;
                              } else
                                (e.strstart += e.match_length),
                                  (e.match_length = 0),
                                  (e.ins_h = e.window[e.strstart]),
                                  (e.ins_h = ht(e, e.ins_h, e.window[e.strstart + 1]));
                            else (n = be(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++;
                            if (n && (mt(e, !1), 0 === e.strm.avail_out)) return nt;
                          }
                          return (
                            (e.insert = e.strstart < Ge - 1 ? e.strstart : Ge - 1),
                            t === Ie
                              ? (mt(e, !0), 0 === e.strm.avail_out ? it : at)
                              : e.sym_next && (mt(e, !1), 0 === e.strm.avail_out)
                              ? nt
                              : st
                          );
                        },
                        It = function (e, t) {
                          for (var r, n, s; ; ) {
                            if (e.lookahead < Ve) {
                              if ((vt(e), e.lookahead < Ve && t === ve)) return nt;
                              if (0 === e.lookahead) break;
                            }
                            if (
                              ((r = 0),
                              e.lookahead >= Ge &&
                                ((e.ins_h = ht(e, e.ins_h, e.window[e.strstart + Ge - 1])),
                                (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                                (e.head[e.ins_h] = e.strstart)),
                              (e.prev_length = e.match_length),
                              (e.prev_match = e.match_start),
                              (e.match_length = Ge - 1),
                              0 !== r &&
                                e.prev_length < e.max_lazy_match &&
                                e.strstart - r <= e.w_size - Ve &&
                                ((e.match_length = yt(e, r)),
                                e.match_length <= 5 &&
                                  (e.strategy === Re || (e.match_length === Ge && e.strstart - e.match_start > 4096)) &&
                                  (e.match_length = Ge - 1)),
                              e.prev_length >= Ge && e.match_length <= e.prev_length)
                            ) {
                              (s = e.strstart + e.lookahead - Ge),
                                (n = be(e, e.strstart - 1 - e.prev_match, e.prev_length - Ge)),
                                (e.lookahead -= e.prev_length - 1),
                                (e.prev_length -= 2);
                              do {
                                ++e.strstart <= s &&
                                  ((e.ins_h = ht(e, e.ins_h, e.window[e.strstart + Ge - 1])),
                                  (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                                  (e.head[e.ins_h] = e.strstart));
                              } while (0 != --e.prev_length);
                              if (
                                ((e.match_available = 0),
                                (e.match_length = Ge - 1),
                                e.strstart++,
                                n && (mt(e, !1), 0 === e.strm.avail_out))
                              )
                                return nt;
                            } else if (e.match_available) {
                              if (
                                ((n = be(e, 0, e.window[e.strstart - 1])) && mt(e, !1),
                                e.strstart++,
                                e.lookahead--,
                                0 === e.strm.avail_out)
                              )
                                return nt;
                            } else (e.match_available = 1), e.strstart++, e.lookahead--;
                          }
                          return (
                            e.match_available && ((n = be(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)),
                            (e.insert = e.strstart < Ge - 1 ? e.strstart : Ge - 1),
                            t === Ie
                              ? (mt(e, !0), 0 === e.strm.avail_out ? it : at)
                              : e.sym_next && (mt(e, !1), 0 === e.strm.avail_out)
                              ? nt
                              : st
                          );
                        },
                        _t = function (e, t) {
                          for (var r, n, s, i, a = e.window; ; ) {
                            if (e.lookahead <= Xe) {
                              if ((vt(e), e.lookahead <= Xe && t === ve)) return nt;
                              if (0 === e.lookahead) break;
                            }
                            if (
                              ((e.match_length = 0),
                              e.lookahead >= Ge &&
                                e.strstart > 0 &&
                                (n = a[(s = e.strstart - 1)]) === a[++s] &&
                                n === a[++s] &&
                                n === a[++s])
                            ) {
                              i = e.strstart + Xe;
                              do {} while (
                                n === a[++s] &&
                                n === a[++s] &&
                                n === a[++s] &&
                                n === a[++s] &&
                                n === a[++s] &&
                                n === a[++s] &&
                                n === a[++s] &&
                                n === a[++s] &&
                                s < i
                              );
                              (e.match_length = Xe - (i - s)),
                                e.match_length > e.lookahead && (e.match_length = e.lookahead);
                            }
                            if (
                              (e.match_length >= Ge
                                ? ((r = be(e, 1, e.match_length - Ge)),
                                  (e.lookahead -= e.match_length),
                                  (e.strstart += e.match_length),
                                  (e.match_length = 0))
                                : ((r = be(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++),
                              r && (mt(e, !1), 0 === e.strm.avail_out))
                            )
                              return nt;
                          }
                          return (
                            (e.insert = 0),
                            t === Ie
                              ? (mt(e, !0), 0 === e.strm.avail_out ? it : at)
                              : e.sym_next && (mt(e, !1), 0 === e.strm.avail_out)
                              ? nt
                              : st
                          );
                        },
                        Ct = function (e, t) {
                          for (var r; ; ) {
                            if (0 === e.lookahead && (vt(e), 0 === e.lookahead)) {
                              if (t === ve) return nt;
                              break;
                            }
                            if (
                              ((e.match_length = 0),
                              (r = be(e, 0, e.window[e.strstart])),
                              e.lookahead--,
                              e.strstart++,
                              r && (mt(e, !1), 0 === e.strm.avail_out))
                            )
                              return nt;
                          }
                          return (
                            (e.insert = 0),
                            t === Ie
                              ? (mt(e, !0), 0 === e.strm.avail_out ? it : at)
                              : e.sym_next && (mt(e, !1), 0 === e.strm.avail_out)
                              ? nt
                              : st
                          );
                        };
                      function Et(e, t, r, n, s) {
                        (this.good_length = e),
                          (this.max_lazy = t),
                          (this.nice_length = r),
                          (this.max_chain = n),
                          (this.func = s);
                      }
                      var Tt = [
                          new Et(0, 0, 0, 0, St),
                          new Et(4, 4, 8, 4, wt),
                          new Et(4, 5, 16, 8, wt),
                          new Et(4, 6, 32, 32, wt),
                          new Et(4, 4, 16, 16, It),
                          new Et(8, 16, 32, 32, It),
                          new Et(8, 16, 128, 128, It),
                          new Et(8, 32, 128, 256, It),
                          new Et(32, 128, 258, 1024, It),
                          new Et(32, 258, 258, 4096, It),
                        ],
                        xt = function (e) {
                          (e.window_size = 2 * e.w_size),
                            ut(e.head),
                            (e.max_lazy_match = Tt[e.level].max_lazy),
                            (e.good_match = Tt[e.level].good_length),
                            (e.nice_match = Tt[e.level].nice_length),
                            (e.max_chain_length = Tt[e.level].max_chain),
                            (e.strstart = 0),
                            (e.block_start = 0),
                            (e.lookahead = 0),
                            (e.insert = 0),
                            (e.match_length = e.prev_length = Ge - 1),
                            (e.match_available = 0),
                            (e.ins_h = 0);
                        };
                      function At() {
                        (this.strm = null),
                          (this.status = 0),
                          (this.pending_buf = null),
                          (this.pending_buf_size = 0),
                          (this.pending_out = 0),
                          (this.pending = 0),
                          (this.wrap = 0),
                          (this.gzhead = null),
                          (this.gzindex = 0),
                          (this.method = Pe),
                          (this.last_flush = -1),
                          (this.w_size = 0),
                          (this.w_bits = 0),
                          (this.w_mask = 0),
                          (this.window = null),
                          (this.window_size = 0),
                          (this.prev = null),
                          (this.head = null),
                          (this.ins_h = 0),
                          (this.hash_size = 0),
                          (this.hash_bits = 0),
                          (this.hash_mask = 0),
                          (this.hash_shift = 0),
                          (this.block_start = 0),
                          (this.match_length = 0),
                          (this.prev_match = 0),
                          (this.match_available = 0),
                          (this.strstart = 0),
                          (this.match_start = 0),
                          (this.lookahead = 0),
                          (this.prev_length = 0),
                          (this.max_chain_length = 0),
                          (this.max_lazy_match = 0),
                          (this.level = 0),
                          (this.strategy = 0),
                          (this.good_match = 0),
                          (this.nice_match = 0),
                          (this.dyn_ltree = new Uint16Array(2 * We)),
                          (this.dyn_dtree = new Uint16Array(2 * (2 * He + 1))),
                          (this.bl_tree = new Uint16Array(2 * (2 * je + 1))),
                          ut(this.dyn_ltree),
                          ut(this.dyn_dtree),
                          ut(this.bl_tree),
                          (this.l_desc = null),
                          (this.d_desc = null),
                          (this.bl_desc = null),
                          (this.bl_count = new Uint16Array(Ze + 1)),
                          (this.heap = new Uint16Array(2 * Be + 1)),
                          ut(this.heap),
                          (this.heap_len = 0),
                          (this.heap_max = 0),
                          (this.depth = new Uint16Array(2 * Be + 1)),
                          ut(this.depth),
                          (this.sym_buf = 0),
                          (this.lit_bufsize = 0),
                          (this.sym_next = 0),
                          (this.sym_end = 0),
                          (this.opt_len = 0),
                          (this.static_len = 0),
                          (this.matches = 0),
                          (this.insert = 0),
                          (this.bi_buf = 0),
                          (this.bi_valid = 0);
                      }
                      var kt = function (e) {
                          if (!e) return 1;
                          var t = e.state;
                          return !t ||
                            t.strm !== e ||
                            (t.status !== Ke &&
                              t.status !== Ye &&
                              t.status !== Je &&
                              t.status !== $e &&
                              t.status !== Qe &&
                              t.status !== et &&
                              t.status !== tt &&
                              t.status !== rt)
                            ? 1
                            : 0;
                        },
                        Rt = function (e) {
                          if (kt(e)) return ct(e, Te);
                          (e.total_in = e.total_out = 0), (e.data_type = Ne);
                          var t = e.state;
                          return (
                            (t.pending = 0),
                            (t.pending_out = 0),
                            t.wrap < 0 && (t.wrap = -t.wrap),
                            (t.status = 2 === t.wrap ? Ye : t.wrap ? Ke : tt),
                            (e.adler = 2 === t.wrap ? 0 : 1),
                            (t.last_flush = -2),
                            me(t),
                            Ce
                          );
                        },
                        Dt = function (e) {
                          var t = Rt(e);
                          return t === Ce && xt(e.state), t;
                        },
                        Ot = function (e, t, r, n, s, i) {
                          if (!e) return Te;
                          var a = 1;
                          if (
                            (t === ke && (t = 6),
                            n < 0 ? ((a = 0), (n = -n)) : n > 15 && ((a = 2), (n -= 16)),
                            s < 1 ||
                              s > Ue ||
                              r !== Pe ||
                              n < 8 ||
                              n > 15 ||
                              t < 0 ||
                              t > 9 ||
                              i < 0 ||
                              i > Me ||
                              (8 === n && 1 !== a))
                          )
                            return ct(e, Te);
                          8 === n && (n = 9);
                          var o = new At();
                          return (
                            (e.state = o),
                            (o.strm = e),
                            (o.status = Ke),
                            (o.wrap = a),
                            (o.gzhead = null),
                            (o.w_bits = n),
                            (o.w_size = 1 << o.w_bits),
                            (o.w_mask = o.w_size - 1),
                            (o.hash_bits = s + 7),
                            (o.hash_size = 1 << o.hash_bits),
                            (o.hash_mask = o.hash_size - 1),
                            (o.hash_shift = ~~((o.hash_bits + Ge - 1) / Ge)),
                            (o.window = new Uint8Array(2 * o.w_size)),
                            (o.head = new Uint16Array(o.hash_size)),
                            (o.prev = new Uint16Array(o.w_size)),
                            (o.lit_bufsize = 1 << (s + 6)),
                            (o.pending_buf_size = 4 * o.lit_bufsize),
                            (o.pending_buf = new Uint8Array(o.pending_buf_size)),
                            (o.sym_buf = o.lit_bufsize),
                            (o.sym_end = 3 * (o.lit_bufsize - 1)),
                            (o.level = t),
                            (o.strategy = i),
                            (o.method = r),
                            Dt(e)
                          );
                        },
                        Mt = {
                          deflateInit: function (e, t) {
                            return Ot(e, t, Pe, Fe, ze, Le);
                          },
                          deflateInit2: Ot,
                          deflateReset: Dt,
                          deflateResetKeep: Rt,
                          deflateSetHeader: function (e, t) {
                            return kt(e) || 2 !== e.state.wrap ? Te : ((e.state.gzhead = t), Ce);
                          },
                          deflate: function (e, t) {
                            if (kt(e) || t > _e || t < 0) return e ? ct(e, Te) : Te;
                            var r = e.state;
                            if (!e.output || (0 !== e.avail_in && !e.input) || (r.status === rt && t !== Ie))
                              return ct(e, 0 === e.avail_out ? Ae : Te);
                            var n = r.last_flush;
                            if (((r.last_flush = t), 0 !== r.pending)) {
                              if ((pt(e), 0 === e.avail_out)) return (r.last_flush = -1), Ce;
                            } else if (0 === e.avail_in && lt(t) <= lt(n) && t !== Ie) return ct(e, Ae);
                            if (r.status === rt && 0 !== e.avail_in) return ct(e, Ae);
                            if ((r.status === Ke && 0 === r.wrap && (r.status = tt), r.status === Ke)) {
                              var s = (Pe + ((r.w_bits - 8) << 4)) << 8;
                              if (
                                ((s |=
                                  (r.strategy >= De || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3) << 6),
                                0 !== r.strstart && (s |= qe),
                                gt(r, (s += 31 - (s % 31))),
                                0 !== r.strstart && (gt(r, e.adler >>> 16), gt(r, 65535 & e.adler)),
                                (e.adler = 1),
                                (r.status = tt),
                                pt(e),
                                0 !== r.pending)
                              )
                                return (r.last_flush = -1), Ce;
                            }
                            if (r.status === Ye)
                              if (((e.adler = 0), ft(r, 31), ft(r, 139), ft(r, 8), r.gzhead))
                                ft(
                                  r,
                                  (r.gzhead.text ? 1 : 0) +
                                    (r.gzhead.hcrc ? 2 : 0) +
                                    (r.gzhead.extra ? 4 : 0) +
                                    (r.gzhead.name ? 8 : 0) +
                                    (r.gzhead.comment ? 16 : 0)
                                ),
                                  ft(r, 255 & r.gzhead.time),
                                  ft(r, (r.gzhead.time >> 8) & 255),
                                  ft(r, (r.gzhead.time >> 16) & 255),
                                  ft(r, (r.gzhead.time >> 24) & 255),
                                  ft(r, 9 === r.level ? 2 : r.strategy >= De || r.level < 2 ? 4 : 0),
                                  ft(r, 255 & r.gzhead.os),
                                  r.gzhead.extra &&
                                    r.gzhead.extra.length &&
                                    (ft(r, 255 & r.gzhead.extra.length), ft(r, (r.gzhead.extra.length >> 8) & 255)),
                                  r.gzhead.hcrc && (e.adler = de(e.adler, r.pending_buf, r.pending, 0)),
                                  (r.gzindex = 0),
                                  (r.status = Je);
                              else if (
                                (ft(r, 0),
                                ft(r, 0),
                                ft(r, 0),
                                ft(r, 0),
                                ft(r, 0),
                                ft(r, 9 === r.level ? 2 : r.strategy >= De || r.level < 2 ? 4 : 0),
                                ft(r, ot),
                                (r.status = tt),
                                pt(e),
                                0 !== r.pending)
                              )
                                return (r.last_flush = -1), Ce;
                            if (r.status === Je) {
                              if (r.gzhead.extra) {
                                for (
                                  var i = r.pending, a = (65535 & r.gzhead.extra.length) - r.gzindex;
                                  r.pending + a > r.pending_buf_size;

                                ) {
                                  var o = r.pending_buf_size - r.pending;
                                  if (
                                    (r.pending_buf.set(r.gzhead.extra.subarray(r.gzindex, r.gzindex + o), r.pending),
                                    (r.pending = r.pending_buf_size),
                                    r.gzhead.hcrc &&
                                      r.pending > i &&
                                      (e.adler = de(e.adler, r.pending_buf, r.pending - i, i)),
                                    (r.gzindex += o),
                                    pt(e),
                                    0 !== r.pending)
                                  )
                                    return (r.last_flush = -1), Ce;
                                  (i = 0), (a -= o);
                                }
                                var c = new Uint8Array(r.gzhead.extra);
                                r.pending_buf.set(c.subarray(r.gzindex, r.gzindex + a), r.pending),
                                  (r.pending += a),
                                  r.gzhead.hcrc &&
                                    r.pending > i &&
                                    (e.adler = de(e.adler, r.pending_buf, r.pending - i, i)),
                                  (r.gzindex = 0);
                              }
                              r.status = $e;
                            }
                            if (r.status === $e) {
                              if (r.gzhead.name) {
                                var l,
                                  u = r.pending;
                                do {
                                  if (r.pending === r.pending_buf_size) {
                                    if (
                                      (r.gzhead.hcrc &&
                                        r.pending > u &&
                                        (e.adler = de(e.adler, r.pending_buf, r.pending - u, u)),
                                      pt(e),
                                      0 !== r.pending)
                                    )
                                      return (r.last_flush = -1), Ce;
                                    u = 0;
                                  }
                                  (l =
                                    r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++) : 0),
                                    ft(r, l);
                                } while (0 !== l);
                                r.gzhead.hcrc &&
                                  r.pending > u &&
                                  (e.adler = de(e.adler, r.pending_buf, r.pending - u, u)),
                                  (r.gzindex = 0);
                              }
                              r.status = Qe;
                            }
                            if (r.status === Qe) {
                              if (r.gzhead.comment) {
                                var d,
                                  h = r.pending;
                                do {
                                  if (r.pending === r.pending_buf_size) {
                                    if (
                                      (r.gzhead.hcrc &&
                                        r.pending > h &&
                                        (e.adler = de(e.adler, r.pending_buf, r.pending - h, h)),
                                      pt(e),
                                      0 !== r.pending)
                                    )
                                      return (r.last_flush = -1), Ce;
                                    h = 0;
                                  }
                                  (d =
                                    r.gzindex < r.gzhead.comment.length
                                      ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++)
                                      : 0),
                                    ft(r, d);
                                } while (0 !== d);
                                r.gzhead.hcrc &&
                                  r.pending > h &&
                                  (e.adler = de(e.adler, r.pending_buf, r.pending - h, h));
                              }
                              r.status = et;
                            }
                            if (r.status === et) {
                              if (r.gzhead.hcrc) {
                                if (r.pending + 2 > r.pending_buf_size && (pt(e), 0 !== r.pending))
                                  return (r.last_flush = -1), Ce;
                                ft(r, 255 & e.adler), ft(r, (e.adler >> 8) & 255), (e.adler = 0);
                              }
                              if (((r.status = tt), pt(e), 0 !== r.pending)) return (r.last_flush = -1), Ce;
                            }
                            if (0 !== e.avail_in || 0 !== r.lookahead || (t !== ve && r.status !== rt)) {
                              var p =
                                0 === r.level
                                  ? St(r, t)
                                  : r.strategy === De
                                  ? Ct(r, t)
                                  : r.strategy === Oe
                                  ? _t(r, t)
                                  : Tt[r.level].func(r, t);
                              if (((p !== it && p !== at) || (r.status = rt), p === nt || p === it))
                                return 0 === e.avail_out && (r.last_flush = -1), Ce;
                              if (
                                p === st &&
                                (t === Se
                                  ? ye(r)
                                  : t !== _e &&
                                    (fe(r, 0, 0, !1),
                                    t === we &&
                                      (ut(r.head),
                                      0 === r.lookahead && ((r.strstart = 0), (r.block_start = 0), (r.insert = 0)))),
                                pt(e),
                                0 === e.avail_out)
                              )
                                return (r.last_flush = -1), Ce;
                            }
                            return t !== Ie
                              ? Ce
                              : r.wrap <= 0
                              ? Ee
                              : (2 === r.wrap
                                  ? (ft(r, 255 & e.adler),
                                    ft(r, (e.adler >> 8) & 255),
                                    ft(r, (e.adler >> 16) & 255),
                                    ft(r, (e.adler >> 24) & 255),
                                    ft(r, 255 & e.total_in),
                                    ft(r, (e.total_in >> 8) & 255),
                                    ft(r, (e.total_in >> 16) & 255),
                                    ft(r, (e.total_in >> 24) & 255))
                                  : (gt(r, e.adler >>> 16), gt(r, 65535 & e.adler)),
                                pt(e),
                                r.wrap > 0 && (r.wrap = -r.wrap),
                                0 !== r.pending ? Ce : Ee);
                          },
                          deflateEnd: function (e) {
                            if (kt(e)) return Te;
                            var t = e.state.status;
                            return (e.state = null), t === tt ? ct(e, xe) : Ce;
                          },
                          deflateSetDictionary: function (e, t) {
                            var r = t.length;
                            if (kt(e)) return Te;
                            var n = e.state,
                              s = n.wrap;
                            if (2 === s || (1 === s && n.status !== Ke) || n.lookahead) return Te;
                            if ((1 === s && (e.adler = le(e.adler, t, r, 0)), (n.wrap = 0), r >= n.w_size)) {
                              0 === s && (ut(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0));
                              var i = new Uint8Array(n.w_size);
                              i.set(t.subarray(r - n.w_size, r), 0), (t = i), (r = n.w_size);
                            }
                            var a = e.avail_in,
                              o = e.next_in,
                              c = e.input;
                            for (e.avail_in = r, e.next_in = 0, e.input = t, vt(n); n.lookahead >= Ge; ) {
                              var l = n.strstart,
                                u = n.lookahead - (Ge - 1);
                              do {
                                (n.ins_h = ht(n, n.ins_h, n.window[l + Ge - 1])),
                                  (n.prev[l & n.w_mask] = n.head[n.ins_h]),
                                  (n.head[n.ins_h] = l),
                                  l++;
                              } while (--u);
                              (n.strstart = l), (n.lookahead = Ge - 1), vt(n);
                            }
                            return (
                              (n.strstart += n.lookahead),
                              (n.block_start = n.strstart),
                              (n.insert = n.lookahead),
                              (n.lookahead = 0),
                              (n.match_length = n.prev_length = Ge - 1),
                              (n.match_available = 0),
                              (e.next_in = o),
                              (e.input = c),
                              (e.avail_in = a),
                              (n.wrap = s),
                              Ce
                            );
                          },
                          deflateInfo: 'pako deflate (from Nodeca project)',
                        };
                      function Lt(e) {
                        return (
                          (Lt =
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
                                }),
                          Lt(e)
                        );
                      }
                      var Nt = function (e, t) {
                          return Object.prototype.hasOwnProperty.call(e, t);
                        },
                        Pt = function (e) {
                          for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
                            var r = t.shift();
                            if (r) {
                              if ('object' !== Lt(r)) throw new TypeError(r + 'must be non-object');
                              for (var n in r) Nt(r, n) && (e[n] = r[n]);
                            }
                          }
                          return e;
                        },
                        Ut = {
                          assign: Pt,
                          flattenChunks: function (e) {
                            for (var t = 0, r = 0, n = e.length; r < n; r++) t += e[r].length;
                            for (var s = new Uint8Array(t), i = 0, a = 0, o = e.length; i < o; i++) {
                              var c = e[i];
                              s.set(c, a), (a += c.length);
                            }
                            return s;
                          },
                        },
                        Ft = !0;
                      try {
                        String.fromCharCode.apply(null, new Uint8Array(1));
                      } catch (e) {
                        Ft = !1;
                      }
                      for (var zt = new Uint8Array(256), Bt = 0; Bt < 256; Bt++)
                        zt[Bt] = Bt >= 252 ? 6 : Bt >= 248 ? 5 : Bt >= 240 ? 4 : Bt >= 224 ? 3 : Bt >= 192 ? 2 : 1;
                      zt[254] = zt[254] = 1;
                      var Ht = function (e, t) {
                          if (t < 65534 && e.subarray && Ft)
                            return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
                          for (var r = '', n = 0; n < t; n++) r += String.fromCharCode(e[n]);
                          return r;
                        },
                        jt = {
                          string2buf: function (e) {
                            if ('function' == typeof TextEncoder && TextEncoder.prototype.encode)
                              return new TextEncoder().encode(e);
                            var t,
                              r,
                              n,
                              s,
                              i,
                              a = e.length,
                              o = 0;
                            for (s = 0; s < a; s++)
                              55296 == (64512 & (r = e.charCodeAt(s))) &&
                                s + 1 < a &&
                                56320 == (64512 & (n = e.charCodeAt(s + 1))) &&
                                ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), s++),
                                (o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
                            for (t = new Uint8Array(o), i = 0, s = 0; i < o; s++)
                              55296 == (64512 & (r = e.charCodeAt(s))) &&
                                s + 1 < a &&
                                56320 == (64512 & (n = e.charCodeAt(s + 1))) &&
                                ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), s++),
                                r < 128
                                  ? (t[i++] = r)
                                  : r < 2048
                                  ? ((t[i++] = 192 | (r >>> 6)), (t[i++] = 128 | (63 & r)))
                                  : r < 65536
                                  ? ((t[i++] = 224 | (r >>> 12)),
                                    (t[i++] = 128 | ((r >>> 6) & 63)),
                                    (t[i++] = 128 | (63 & r)))
                                  : ((t[i++] = 240 | (r >>> 18)),
                                    (t[i++] = 128 | ((r >>> 12) & 63)),
                                    (t[i++] = 128 | ((r >>> 6) & 63)),
                                    (t[i++] = 128 | (63 & r)));
                            return t;
                          },
                          buf2string: function (e, t) {
                            var r,
                              n,
                              s = t || e.length;
                            if ('function' == typeof TextDecoder && TextDecoder.prototype.decode)
                              return new TextDecoder().decode(e.subarray(0, t));
                            var i = new Array(2 * s);
                            for (n = 0, r = 0; r < s; ) {
                              var a = e[r++];
                              if (a < 128) i[n++] = a;
                              else {
                                var o = zt[a];
                                if (o > 4) (i[n++] = 65533), (r += o - 1);
                                else {
                                  for (a &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && r < s; )
                                    (a = (a << 6) | (63 & e[r++])), o--;
                                  o > 1
                                    ? (i[n++] = 65533)
                                    : a < 65536
                                    ? (i[n++] = a)
                                    : ((a -= 65536),
                                      (i[n++] = 55296 | ((a >> 10) & 1023)),
                                      (i[n++] = 56320 | (1023 & a)));
                                }
                              }
                            }
                            return Ht(i, n);
                          },
                          utf8border: function (e, t) {
                            (t = t || e.length) > e.length && (t = e.length);
                            for (var r = t - 1; r >= 0 && 128 == (192 & e[r]); ) r--;
                            return r < 0 || 0 === r ? t : r + zt[e[r]] > t ? r : t;
                          },
                        };
                      function Wt() {
                        (this.input = null),
                          (this.next_in = 0),
                          (this.avail_in = 0),
                          (this.total_in = 0),
                          (this.output = null),
                          (this.next_out = 0),
                          (this.avail_out = 0),
                          (this.total_out = 0),
                          (this.msg = ''),
                          (this.state = null),
                          (this.data_type = 2),
                          (this.adler = 0);
                      }
                      var Zt = Wt,
                        Gt = Object.prototype.toString,
                        Xt = pe.Z_NO_FLUSH,
                        Vt = pe.Z_SYNC_FLUSH,
                        qt = pe.Z_FULL_FLUSH,
                        Kt = pe.Z_FINISH,
                        Yt = pe.Z_OK,
                        Jt = pe.Z_STREAM_END,
                        $t = pe.Z_DEFAULT_COMPRESSION,
                        Qt = pe.Z_DEFAULT_STRATEGY,
                        er = pe.Z_DEFLATED;
                      function tr(e) {
                        this.options = Ut.assign(
                          { level: $t, method: er, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: Qt },
                          e || {}
                        );
                        var t = this.options;
                        t.raw && t.windowBits > 0
                          ? (t.windowBits = -t.windowBits)
                          : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
                          (this.err = 0),
                          (this.msg = ''),
                          (this.ended = !1),
                          (this.chunks = []),
                          (this.strm = new Zt()),
                          (this.strm.avail_out = 0);
                        var r = Mt.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
                        if (r !== Yt) throw new Error(he[r]);
                        if ((t.header && Mt.deflateSetHeader(this.strm, t.header), t.dictionary)) {
                          var n;
                          if (
                            ((n =
                              'string' == typeof t.dictionary
                                ? jt.string2buf(t.dictionary)
                                : '[object ArrayBuffer]' === Gt.call(t.dictionary)
                                ? new Uint8Array(t.dictionary)
                                : t.dictionary),
                            (r = Mt.deflateSetDictionary(this.strm, n)) !== Yt)
                          )
                            throw new Error(he[r]);
                          this._dict_set = !0;
                        }
                      }
                      function rr(e, t) {
                        var r = new tr(t);
                        if ((r.push(e, !0), r.err)) throw r.msg || he[r.err];
                        return r.result;
                      }
                      return (
                        (tr.prototype.push = function (e, t) {
                          var r,
                            n,
                            s = this.strm,
                            i = this.options.chunkSize;
                          if (this.ended) return !1;
                          for (
                            n = t === ~~t ? t : !0 === t ? Kt : Xt,
                              'string' == typeof e
                                ? (s.input = jt.string2buf(e))
                                : '[object ArrayBuffer]' === Gt.call(e)
                                ? (s.input = new Uint8Array(e))
                                : (s.input = e),
                              s.next_in = 0,
                              s.avail_in = s.input.length;
                            ;

                          )
                            if (
                              (0 === s.avail_out &&
                                ((s.output = new Uint8Array(i)), (s.next_out = 0), (s.avail_out = i)),
                              (n === Vt || n === qt) && s.avail_out <= 6)
                            )
                              this.onData(s.output.subarray(0, s.next_out)), (s.avail_out = 0);
                            else {
                              if ((r = Mt.deflate(s, n)) === Jt)
                                return (
                                  s.next_out > 0 && this.onData(s.output.subarray(0, s.next_out)),
                                  (r = Mt.deflateEnd(this.strm)),
                                  this.onEnd(r),
                                  (this.ended = !0),
                                  r === Yt
                                );
                              if (0 !== s.avail_out) {
                                if (n > 0 && s.next_out > 0)
                                  this.onData(s.output.subarray(0, s.next_out)), (s.avail_out = 0);
                                else if (0 === s.avail_in) break;
                              } else this.onData(s.output);
                            }
                          return !0;
                        }),
                        (tr.prototype.onData = function (e) {
                          this.chunks.push(e);
                        }),
                        (tr.prototype.onEnd = function (e) {
                          e === Yt && (this.result = Ut.flattenChunks(this.chunks)),
                            (this.chunks = []),
                            (this.err = e),
                            (this.msg = this.strm.msg);
                        }),
                        rr
                      );
                    })();
                  try {
                    return (function (e) {
                      for (var t = '', r = e.byteLength, n = 0; n < r; n++) t += String.fromCharCode(e[n]);
                      return btoa(t);
                    })(r(t));
                  } catch (e) {
                    console.log(e);
                  }
                })(e);
                return { deflateData: t, type: e.type, slot: e.slot };
              };
              return t;
            })());
        },
        717: function (e, t, r) {
          var n;
          !(function (e, s) {
            function i(e) {
              var t = this,
                r = '';
              (t.next = function () {
                var e = t.b,
                  r = t.c,
                  n = t.d,
                  s = t.a;
                return (
                  (e = (e << 25) ^ (e >>> 7) ^ r),
                  (r = (r - n) | 0),
                  (n = (n << 24) ^ (n >>> 8) ^ s),
                  (s = (s - e) | 0),
                  (t.b = e = (e << 20) ^ (e >>> 12) ^ r),
                  (t.c = r = (r - n) | 0),
                  (t.d = (n << 16) ^ (r >>> 16) ^ s),
                  (t.a = (s - e) | 0)
                );
              }),
                (t.a = 0),
                (t.b = 0),
                (t.c = -1640531527),
                (t.d = 1367130551),
                e === Math.floor(e) ? ((t.a = (e / 4294967296) | 0), (t.b = 0 | e)) : (r += e);
              for (var n = 0; n < r.length + 20; n++) (t.b ^= 0 | r.charCodeAt(n)), t.next();
            }
            function a(e, t) {
              return (t.a = e.a), (t.b = e.b), (t.c = e.c), (t.d = e.d), t;
            }
            function o(e, t) {
              var r = new i(e),
                n = t && t.state,
                s = function () {
                  return (r.next() >>> 0) / 4294967296;
                };
              return (
                (s.double = function () {
                  do {
                    var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21);
                  } while (0 === e);
                  return e;
                }),
                (s.int32 = r.next),
                (s.quick = s),
                n &&
                  ('object' == typeof n && a(n, r),
                  (s.state = function () {
                    return a(r, {});
                  })),
                s
              );
            }
            s && s.exports
              ? (s.exports = o)
              : r.amdD && r.amdO
              ? void 0 ===
                  (n = function () {
                    return o;
                  }.call(t, r, t, s)) || (s.exports = n)
              : (this.tychei = o);
          })(0, (e = r.nmd(e)), r.amdD);
        },
        801: function (e, t, r) {
          var n;
          !(function (s, i, a) {
            var o,
              c = 256,
              l = a.pow(c, 6),
              u = a.pow(2, 52),
              d = 2 * u,
              h = 255;
            function p(e, t, r) {
              var n = [],
                h = b(
                  g(
                    (t = 1 == t ? { entropy: !0 } : t || {}).entropy
                      ? [e, y(i)]
                      : null == e
                      ? (function () {
                          try {
                            var e;
                            return (
                              o && (e = o.randomBytes)
                                ? (e = e(c))
                                : ((e = new Uint8Array(c)), (s.crypto || s.msCrypto).getRandomValues(e)),
                              y(e)
                            );
                          } catch (e) {
                            var t = s.navigator,
                              r = t && t.plugins;
                            return [+new Date(), s, r, s.screen, y(i)];
                          }
                        })()
                      : e,
                    3
                  ),
                  n
                ),
                p = new m(n),
                v = function () {
                  for (var e = p.g(6), t = l, r = 0; e < u; ) (e = (e + r) * c), (t *= c), (r = p.g(1));
                  for (; e >= d; ) (e /= 2), (t /= 2), (r >>>= 1);
                  return (e + r) / t;
                };
              return (
                (v.int32 = function () {
                  return 0 | p.g(4);
                }),
                (v.quick = function () {
                  return p.g(4) / 4294967296;
                }),
                (v.double = v),
                b(y(p.S), i),
                (
                  t.pass ||
                  r ||
                  function (e, t, r, n) {
                    return (
                      n &&
                        (n.S && f(n, p),
                        (e.state = function () {
                          return f(p, {});
                        })),
                      r ? ((a.random = e), t) : e
                    );
                  }
                )(v, h, 'global' in t ? t.global : this == a, t.state)
              );
            }
            function m(e) {
              var t,
                r = e.length,
                n = this,
                s = 0,
                i = (n.i = n.j = 0),
                a = (n.S = []);
              for (r || (e = [r++]); s < c; ) a[s] = s++;
              for (s = 0; s < c; s++) (a[s] = a[(i = h & (i + e[s % r] + (t = a[s])))]), (a[i] = t);
              (n.g = function (e) {
                for (var t, r = 0, s = n.i, i = n.j, a = n.S; e--; )
                  (t = a[(s = h & (s + 1))]), (r = r * c + a[h & ((a[s] = a[(i = h & (i + t))]) + (a[i] = t))]);
                return (n.i = s), (n.j = i), r;
              })(c);
            }
            function f(e, t) {
              return (t.i = e.i), (t.j = e.j), (t.S = e.S.slice()), t;
            }
            function g(e, t) {
              var r,
                n = [],
                s = typeof e;
              if (t && 'object' == s)
                for (r in e)
                  try {
                    n.push(g(e[r], t - 1));
                  } catch (e) {}
              return n.length ? n : 'string' == s ? e : e + '\0';
            }
            function b(e, t) {
              for (var r, n = e + '', s = 0; s < n.length; ) t[h & s] = h & ((r ^= 19 * t[h & s]) + n.charCodeAt(s++));
              return y(t);
            }
            function y(e) {
              return String.fromCharCode.apply(0, e);
            }
            if ((b(a.random(), i), e.exports)) {
              e.exports = p;
              try {
                o = r(234);
              } catch (e) {}
            } else
              void 0 ===
                (n = function () {
                  return p;
                }.call(t, r, t, e)) || (e.exports = n);
          })('undefined' != typeof self ? self : this, [], Math);
        },
        833: function (e, t, r) {
          var n;
          !(function (e, s) {
            function i(e) {
              var t = this;
              (t.next = function () {
                var e,
                  r,
                  n = t.w,
                  s = t.X,
                  i = t.i;
                return (
                  (t.w = n = (n + 1640531527) | 0),
                  (r = s[(i + 34) & 127]),
                  (e = s[(i = (i + 1) & 127)]),
                  (r ^= r << 13),
                  (e ^= e << 17),
                  (r ^= r >>> 15),
                  (e ^= e >>> 12),
                  (r = s[i] = r ^ e),
                  (t.i = i),
                  (r + (n ^ (n >>> 16))) | 0
                );
              }),
                (function (e, t) {
                  var r,
                    n,
                    s,
                    i,
                    a,
                    o = [],
                    c = 128;
                  for (
                    t === (0 | t) ? ((n = t), (t = null)) : ((t += '\0'), (n = 0), (c = Math.max(c, t.length))),
                      s = 0,
                      i = -32;
                    i < c;
                    ++i
                  )
                    t && (n ^= t.charCodeAt((i + 32) % t.length)),
                      0 === i && (a = n),
                      (n ^= n << 10),
                      (n ^= n >>> 15),
                      (n ^= n << 4),
                      (n ^= n >>> 13),
                      i >= 0 && ((a = (a + 1640531527) | 0), (s = 0 == (r = o[127 & i] ^= n + a) ? s + 1 : 0));
                  for (s >= 128 && (o[127 & ((t && t.length) || 0)] = -1), s = 127, i = 512; i > 0; --i)
                    (n = o[(s + 34) & 127]),
                      (r = o[(s = (s + 1) & 127)]),
                      (n ^= n << 13),
                      (r ^= r << 17),
                      (n ^= n >>> 15),
                      (r ^= r >>> 12),
                      (o[s] = n ^ r);
                  (e.w = a), (e.X = o), (e.i = s);
                })(t, e);
            }
            function a(e, t) {
              return (t.i = e.i), (t.w = e.w), (t.X = e.X.slice()), t;
            }
            function o(e, t) {
              null == e && (e = +new Date());
              var r = new i(e),
                n = t && t.state,
                s = function () {
                  return (r.next() >>> 0) / 4294967296;
                };
              return (
                (s.double = function () {
                  do {
                    var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21);
                  } while (0 === e);
                  return e;
                }),
                (s.int32 = r.next),
                (s.quick = s),
                n &&
                  (n.X && a(n, r),
                  (s.state = function () {
                    return a(r, {});
                  })),
                s
              );
            }
            s && s.exports
              ? (s.exports = o)
              : r.amdD && r.amdO
              ? void 0 ===
                  (n = function () {
                    return o;
                  }.call(t, r, t, s)) || (s.exports = n)
              : (this.xor4096 = o);
          })(0, (e = r.nmd(e)), r.amdD);
        },
        992: function (e, t) {
          'use strict';
          var r = Object.prototype.hasOwnProperty;
          function n(e) {
            try {
              return decodeURIComponent(e.replace(/\+/g, ' '));
            } catch (e) {
              return null;
            }
          }
          function s(e) {
            try {
              return encodeURIComponent(e);
            } catch (e) {
              return null;
            }
          }
          (t.stringify = function (e, t) {
            t = t || '';
            var n,
              i,
              a = [];
            for (i in ('string' != typeof t && (t = '?'), e))
              if (r.call(e, i)) {
                if (
                  ((n = e[i]) || (null != n && !isNaN(n)) || (n = ''), (i = s(i)), (n = s(n)), null === i || null === n)
                )
                  continue;
                a.push(i + '=' + n);
              }
            return a.length ? t + a.join('&') : '';
          }),
            (t.parse = function (e) {
              for (var t, r = /([^=?#&]+)=?([^&]*)/g, s = {}; (t = r.exec(e)); ) {
                var i = n(t[1]),
                  a = n(t[2]);
                null === i || null === a || i in s || (s[i] = a);
              }
              return s;
            });
        },
      },
      t = {};
    function r(n) {
      var s = t[n];
      if (void 0 !== s) return s.exports;
      var i = (t[n] = { id: n, loaded: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.loaded = !0), i.exports;
    }
    (r.amdD = function () {
      throw new Error('define cannot be used indirect');
    }),
      (r.amdO = {}),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, { a: t }), t;
      }),
      (r.d = function (e, t) {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (r.g = (function () {
        if ('object' == typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (e) {
          if ('object' == typeof window) return window;
        }
      })()),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.nmd = function (e) {
        return (e.paths = []), e.children || (e.children = []), e;
      });
    return (
      (function () {
        'use strict';
        const e = () => window.requestIdleCallback && window.cancelIdleCallback;
        let t = (function (e) {
          return (e.LOCAL = 'local'), (e.DEV = 'dev'), (e.CANARY = 'canary'), (e.PRODUCTION = 'production'), e;
        })({});
        const n = 'x-wtap-po',
          s = 'x-wtap-mst',
          i = 'x-wtap-sp1';
        var a = r(391),
          o = r.n(a);
        const c = 'whatap_debug_mode',
          l = function () {
            window.location.hash.indexOf(c) > -1 && console.log(...arguments);
          },
          u = function () {
            window.location.hash.indexOf(c) > -1 && console.error(...arguments);
          };
        class d {
          constructor(e, t) {
            (this.low = 0 | e), (this.high = 0 | t);
          }
          toString(e) {
            void 0 === e && (e = 10);
            const t = BigInt(this.low >>> 0);
            let r = (BigInt(this.high) << BigInt(32)) + t;
            return (r = (r << BigInt(0)) >> BigInt(0)), r.toString(e);
          }
          multiply(e) {
            const t = BigInt(e),
              r = BigInt(this.low >>> 0);
            let n = (BigInt(this.high) << BigInt(32)) + r;
            n *= t;
            const s = Number(n >> BigInt(32)),
              i = Number(n & BigInt(4294967295));
            return new d(i, s);
          }
        }
        const h = new d(0, -2147483648),
          p = new d(0, 0),
          m = (e) => {
            if (null == e) return '0';
            return e < 0
              ? e === h
                ? 'z8000000000000'
                : 'z' + (e = 'number' == typeof e ? -e : e.multiply(-1)).toString(32)
              : e < 10
              ? e + ''
              : 'x' + e.toString(32);
          },
          f = o()(Date.now() + '', { entropy: !0 }),
          g = {
            next: function () {
              try {
                return new d(f.int32(), f.int32());
              } catch (e) {
                return u('whatap-browser-agent-error: KeyGen.next', e), h;
              }
            },
          },
          b = () => {
            try {
              return m(g.next());
            } catch (e) {
              return u('whatap-browser-agent-error: getLongID', e), 'FailedCreateLongID';
            }
          };
        var y = g;
        const v = new Date(2147483647e3).toUTCString(),
          S = function (e, t, r, n) {
            try {
              document.cookie = e
                ? t + '=' + r + ';expires=' + n + ';path=/;samesite=strict;secure;'
                : t + '=' + r + ';expires=' + n + ';path=/;samesite=strict;';
            } catch (e) {
              u('setCookie() error', e);
            }
          },
          w = function (e) {
            const t = document.cookie.match('(^|;) ?' + e + '=([^;]*)(;|$)');
            return t && 'undefined' !== t[2] && 'null' !== t[2] ? t[2] : null;
          },
          I = function (e, t, r) {
            try {
              document.cookie = e + '=' + t + ';expires=' + r + ';path=/;samesite=strict;';
            } catch (e) {
              u('setCookie() error', e);
            }
          },
          _ = (e) => {
            try {
              const t = e?.WhatapBrowserAgent?.config?.pcode,
                r = 'whatap-browser-agent-test' + t,
                n = 'whatap-test-cookie' + t,
                s = new Date();
              s.setMinutes(s.getMinutes() + 1), I(r, n, s.toUTCString());
              const i = w(r) === n;
              return (
                (function (e) {
                  try {
                    I(e, '', 'Thu, 01 Jan 1970 00:00:01 GMT');
                  } catch (e) {
                    u('deleteCookie() error', e);
                  }
                })(r),
                null != e?.document?.cookie && !1 !== i
              );
            } catch (e) {
              return u('whatap-browser-agent-error: isAbailableCookie', e), !1;
            }
          };
        const C =
            'object' == typeof window &&
            ((e) => {
              try {
                return !(!e || e.location != location);
              } catch (e) {
                return u('whatap-browser-agent-error: isWindowGlobal', e), !1;
              }
            })(window) &&
            _(window)
              ? window
              : void u('whatap-browser-agent-error: getWinodwGlobalContext', 'window global context is not found'),
          E = (e, t) => {
            const r = C;
            let n;
            return (
              r && r.Zone && 'function' == typeof r.Zone.__symbol__ && (n = e[r.Zone.__symbol__(t)]), n || (n = e[t]), n
            );
          },
          T = (e) => 'number' == typeof e,
          x = () =>
            'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
              const t = (16 * Math.random()) | 0;
              return ('x' == e ? t : (3 & t) | 8).toString(16);
            }),
          A = (e) => {
            for (let t = 1; t < e.length; t += 1) {
              const r = e[t];
              if (e[t - 1] > r) return !1;
            }
            return !0;
          };
        function k(e, t, r, n) {
          let s = r;
          const i = E(e, 'addEventListener'),
            a = E(e, 'removeEventListener');
          if (n && n.once) {
            const i = (i) => {
              r(i), a.call(e, t, s, n);
            };
            s = i;
          }
          return (
            i.call(e, t, s, n),
            {
              stop: () => {
                a.call(e, t, s, n);
              },
            }
          );
        }
        const R = (e) => 0 !== e && 100 * Math.random() <= e,
          D = (e) => (T(e) && e ? (e < 1 ? 1 : Math.round(e)) : 0);
        class O {
          constructor() {
            this.encode = this.encode.bind(this);
          }
          encode(e) {
            const t = [];
            for (let r = 0; r < e.length; r++) {
              let n = e.charCodeAt(r);
              n < 128
                ? t.push(n)
                : n < 2048
                ? t.push(192 | (n >> 6), 128 | (63 & n))
                : n < 55296 || n >= 57344
                ? t.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n))
                : (r++,
                  (n = 65536 + (((1023 & n) << 10) | (1023 & e.charCodeAt(r)))),
                  t.push(240 | (n >> 18), 128 | ((n >> 12) & 63), 128 | ((n >> 6) & 63), 128 | (63 & n)));
            }
            return new Uint8Array(t);
          }
        }
        function M(e, t, r) {
          void 0 === r && (r = '[...]');
          try {
            return e.length <= t ? e : e.slice(0, t) + r;
          } catch (t) {
            return u('whatap-browser-agent-error: truncate', t), e;
          }
        }
        function L(e) {
          if ('undefined' == typeof TextEncoder) {
            return new O().encode(e).length;
          }
          return new TextEncoder().encode(e).length;
        }
        const N = [
          0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324,
          3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648,
          2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636,
          335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145,
          1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101,
          3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705,
          3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565,
          1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290,
          251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866,
          2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202,
          4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538,
          1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467,
          855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635,
          3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443,
          3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523,
          3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580,
          2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920,
          282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732,
          1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512,
          3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109,
          3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625,
          752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877,
          83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881,
          2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934,
          4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406,
          1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270,
          936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150,
          3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471,
          3272380065, 1510334235, 755167117,
        ];
        function P(e) {
          e.length % 2 != 0 && (e = '0' + e);
          let t = parseInt(e, 16);
          const r = Math.pow(2, (e.length / 2) * 8);
          return t > r / 2 - 1 && (t -= r), t;
        }
        for (let e = 0; e < N.length; e++) N[e] = P(N[e].toString(16));
        const U = (e) => {
            if ('undefined' == typeof TextEncoder) {
              return new O().encode(e);
            }
            return new TextEncoder().encode(e);
          },
          F = (e) => {
            let t = -1;
            const r = e,
              n = e.length;
            for (let e = 0; e < n; ++e) {
              const n = r[e];
              t = (t >>> 8) ^ N[255 & (t ^ n)];
            }
            return (t ^= 4294967295), t;
          },
          z = () => {
            const e = window.navigator;
            return {
              downlink: void 0 !== e.connection?.downlink ? e.connection?.downlink : -1,
              effectiveType: e.connection?.effectiveType || 'none',
              rtt: void 0 !== e.connection?.rtt ? e.connection?.rtt : -1,
            };
          },
          B = (e) => (T(e) ? (e < 1 ? Math.ceil(e) : Math.round(e)) : e),
          H = (e, t) => {
            const r = t - e;
            return r < 0 ? -999 : r;
          };
        let j = 0;
        const W = () => (0 === j && (j = performance.timing.navigationStart), j),
          Z = (e) => {
            const t = e - W();
            return t < 0 ? 0 : t;
          },
          G = () => Math.round(W() + performance.now()),
          X = () => performance.now(),
          V = () => ({ highResolutionTime: X(), timeStamp: G() }),
          q = (e) => {
            return { highResolutionTime: e, timeStamp: ((t = e), Math.round(W() + t)) };
            var t;
          };
        var K = r(160),
          Y = r.n(K),
          J = JSON.parse(
            '{"Y4":{"api_url":"https://rum-ap-northeast-2.whatap-browser-agent.io/"},"Jo":{"api_url":"https://rum-ap-northeast-2.whatap-browser-agent.io/"},"ug":{"api_url":"https://rumote.whatap-browser-agent.io/"},"G6":{"api_url":"https://rumote.whatap-browser-agent.io/"}}'
          );
        let $;
        const Q = () => {
            if (void 0 !== $) return $;
            try {
              const e = new URL('http://whataphost/whatappath');
              return ($ = 'http://whataphost/whatappath' === e.href), $;
            } catch (e) {
              return u(e, '브라우저에서 지원하지 않는 URL 포맷'), ($ = !1);
            }
          },
          ee = (e) => {
            if (Q())
              try {
                const t = Y()(e, !1),
                  r = t.query.length > 0 ? t.query : 'none',
                  n = 'none';
                return { ...t, search: r, automated_pathname: n };
              } catch (t) {
                return void u('지원하지 않는 URL 포맷', e);
              }
            else u('지원하지 않는 URL 포맷');
          };
        function te(e, t) {
          return e.test(t);
        }
        function re(e, t) {
          const r = ee(e)?.host,
            n = ee(t)?.host;
          return r === n || e === n;
        }
        function ne(e, t) {
          const r = ee(e)?.pathname,
            n = ee(t)?.pathname;
          return r === n || e === n;
        }
        const se = (e) =>
            ((e, t) => {
              if (Q()) return void 0 !== t ? new URL(e, t) : new URL(e);
              if (void 0 === t && !/:/.test(e)) return void u('지원하지 않는 URL 포맷');
              let r = document;
              const n = r.createElement('a');
              if (void 0 !== t) {
                r = document.implementation.createHTMLDocument('');
                const e = r.createElement('base');
                (e.href = t), r.head.appendChild(e), r.body.appendChild(n);
              }
              return (n.href = e), n;
            })(
              e,
              (function (e) {
                if ((void 0 === e && (e = window.location), e.origin)) return e.origin;
                const t = e.host.replace(/(:80|:443)$/, '');
                return `${e.protocol}//${t}`;
              })(window.location)
            ),
          ie = (e, t) => {
            const r = ee(e)?.host,
              n = ee(t)?.host;
            return !(!r || !n) && ae(r) !== ae(n);
          },
          ae = (e) => {
            const t = e.split('.'),
              r = t.length;
            return (
              r > 2 &&
                ((e = t[r - 2] + '.' + t[r - 1]),
                2 == t[r - 2].length && 2 == t[r - 1].length && (e = t[r - 3] + '.' + e)),
              e
            );
          },
          oe = (e) => {
            const t = typeof e;
            return null != e && ('object' === t || 'function' === t);
          },
          ce = (e) => {
            try {
              return !0 === e || !1 === e;
            } catch (e) {
              return u('whatap-browser-agent-error: isBoolean', e), !1;
            }
          },
          le = (e) => {
            try {
              return 'string' == typeof e;
            } catch (e) {
              return u('whatap-browser-agent-error: isString', e), !1;
            }
          },
          ue = (e) => {
            try {
              return 'number' == typeof e && e >= 0 && e <= 100;
            } catch (e) {
              return u('whatap-browser-agent-error: isPercentage', e), !1;
            }
          },
          de = (e) => {
            try {
              return null != e;
            } catch (e) {
              return u('whatap-browser-agent-error: isExist', e), !1;
            }
          },
          he = (e) => {
            try {
              if (!e) throw new Error('whatap-browser-agent: config is required');
              if (!e.projectAccessKey) throw new Error('whatap-browser-agent: projectAccessKey is required');
              if (!le(e.projectAccessKey)) throw new Error('whatap-browser-agent: projectAccessKey must be a string');
              if (!de(e.pcode)) throw new Error('whatap-browser-agent: pcode is required');
              if (
                !((e) => {
                  try {
                    return 'number' == typeof e;
                  } catch (e) {
                    return u('whatap-browser-agent-error: isNumber', e), !1;
                  }
                })(e.pcode)
              )
                throw new Error('whatap-browser-agent: pcode must be a number');
              if (!de(e.sampleRate)) throw new Error('whatap-browser-agent: sampleRate is required');
              if (!ue(e.sampleRate)) throw new Error('whatap-browser-agent: sampleRate must be between 0 and 100');
              if (e.proxyBaseUrl && !le(e.proxyBaseUrl))
                throw new Error('whatap-browser-agent: proxyBaseUrl must be a string');
              if (e.cookieSecure && !ce(e.cookieSecure))
                throw new Error('whatap-browser-agent: cookieSecure must be a boolean');
              if (e.isDebugMode && !ce(e.isDebugMode))
                throw new Error('whatap-browser-agent: isDebugMode must be a boolean');
              if (e.ignoreErrors && !Array.isArray(e.ignoreErrors))
                throw new Error('whatap-browser-agent: ignoreErrors must be an array');
              if (e.ignorePageUrls && !Array.isArray(e.ignorePageUrls))
                throw new Error('whatap-browser-agent: ignorePageUrls must be an array');
              if (e.ignoreResources && !Array.isArray(e.ignoreResources))
                throw new Error('whatap-browser-agent: ignoreResources must be an array');
              if (e.ignoreOrigins && !Array.isArray(e.ignoreOrigins))
                throw new Error('whatap-browser-agent: ignoreOrigins must be an array');
              if (e.ignoreLocalhost && !ce(e.ignoreLocalhost))
                throw new Error('whatap-browser-agent: ignoreLocalhost must be a boolean');
              if (e.collectUserClick && !ce(e.collectUserClick))
                throw new Error('whatap-browser-agent: collectUserClick must be a boolean');
              if (e.tracingAjaxUrls && !Array.isArray(e.tracingAjaxUrls))
                throw new Error('whatap-browser-agent: tracingAjaxUrls must be an array');
              if (de(e.traceSampleRate) && !ue(e.traceSampleRate))
                throw new Error('whatap-browser-agent: traceSampleRate must be between 0 and 100');
              if (e.traceUserID && !ce(e.traceUserID))
                throw new Error('whatap-browser-agent: traceUserID must be a boolean');
              if (de(e.traceUserIdHeaderKeyName) && !le(e.traceUserIdHeaderKeyName))
                throw new Error('whatap-browser-agent: traceUserIdHeaderKeyName must be a string');
              if (de(e.sessionReplaySampleRate) && !ue(e.sessionReplaySampleRate))
                throw new Error('whatap-browser-agent: sessionReplaySampleRate must be between 0 and 100');
              if (e.sessionReplayMaskAllTexts && !ce(e.sessionReplayMaskAllTexts))
                throw new Error('whatap-browser-agent: sessionReplayMaskAllTexts must be a boolean');
              if (e.sessionReplayMaskAllInputs && !ce(e.sessionReplayMaskAllInputs))
                throw new Error('whatap-browser-agent: sessionReplayMaskAllInputs must be a boolean');
              if (e.sessionReplayCollectAllBrowser && !ce(e.sessionReplayCollectAllBrowser))
                throw new Error('whatap-browser-agent: sessionReplayCollectAllBrowser must be a boolean');
              if (e.collectCspError && !ce(e.collectCspError))
                throw new Error('whatap-browser-agent: collectCspError must be a boolean');
              if (e.sessionReplayAllowPages && !Array.isArray(e.sessionReplayAllowPages))
                throw new Error('whatap-browser-agent: sessionReplayAllowPages must be an array');
              if (de(e.sessionReplayRemoveType3) && !ce(e.sessionReplayRemoveType3))
                throw new Error('whatap-browser-agent: sessionReplayAllowPages must be an array');
              if (e.env && !le(e.env)) throw new Error('whatap-browser-agent: env must be a string');
              if (e.version && !le(e.version)) throw new Error('whatap-browser-agent: version must be a string');
              if (de(e.ignoreStatusZero) && !ce(e.ignoreStatusZero))
                throw new Error('whatap-browser-agent: ignoreStatusZero must be a boolean');
              return !0;
            } catch (e) {
              return u('whatap-browser-agent-error: validateConfig', e), !1;
            }
          },
          pe = 'whatap_session_id',
          me = 0,
          fe = 1,
          ge = 2,
          be = (e) => ({
            sessionIdKey: pe + '_' + e,
            sessionMaxExpiredKey: 'whatap_session_max_expired_' + e,
            sessionCollectTypeKey: 'whatap_session_collect_type_' + e,
          });
        var ye = class {
          constructor(e, t, r, n) {
            (this.pcode = e),
              (this.sample_rate = t),
              (this.session_replay_sample_rate = r),
              (this.cookie_secure = n),
              this.initSetSession();
          }
          initSetSession = () => {
            const e = (() => {
                const e = new Date();
                return e.setMinutes(e.getMinutes() + 15), e;
              })(),
              { sessionIdKey: t, sessionMaxExpiredKey: r, sessionCollectTypeKey: n } = be(this.pcode),
              {
                sessionId: s,
                sessionMaxExpiredUTCString: i,
                sessionCollectTypeString: a,
              } = {
                sessionId: w((o = { sessionIdKey: t, sessionMaxExpiredKey: r, sessionCollectTypeKey: n }).sessionIdKey),
                sessionMaxExpiredUTCString: w(o.sessionMaxExpiredKey),
                sessionCollectTypeString: w(o.sessionCollectTypeKey),
              };
            var o, c, l, u;
            if (
              ((e, t, r) => {
                return !!(e && t && r) && (0 === (n = Number(r)) || 1 === n || 2 === n);
                var n;
              })(s, i, a)
            ) {
              this.max_expired_time = new Date(i);
              let t = a;
              '2' === a && 0 === this.session_replay_sample_rate && (t = '1'),
                (u = this.max_expired_time),
                e > u
                  ? this.setSessionInCookie(
                      { sessionId: s, sessionMaxExpiredUTCString: i, sessionCollectTypeString: t },
                      i,
                      this.pcode
                    )
                  : this.setSessionInCookie(
                      { sessionId: s, sessionMaxExpiredUTCString: i, sessionCollectTypeString: t },
                      e.toUTCString(),
                      this.pcode
                    );
            } else {
              const t = new Date();
              t.setMinutes(t.getMinutes() + 240);
              const r = ((c = this.sample_rate), (l = this.session_replay_sample_rate), R(c) ? (R(l) ? ge : fe) : me);
              let n = '';
              (n = s || b()),
                this.setSessionInCookie(
                  { sessionId: n, sessionMaxExpiredUTCString: t.toUTCString(), sessionCollectTypeString: r + '' },
                  e.toUTCString(),
                  this.pcode
                );
            }
          };
          setSessionInCookie = (e, t, r) => {
            const { sessionIdKey: n, sessionMaxExpiredKey: s, sessionCollectTypeKey: i } = be(r);
            S(this.cookie_secure, n, e.sessionId, t),
              S(this.cookie_secure, s, e.sessionMaxExpiredUTCString, e.sessionMaxExpiredUTCString),
              S(this.cookie_secure, i, e.sessionCollectTypeString, t),
              (this.session_id = e.sessionId),
              (this.max_expired_time = new Date(e.sessionMaxExpiredUTCString)),
              (this.expired_time = new Date(t)),
              (this.session_collect_type = Number(e.sessionCollectTypeString));
          };
          getSessionInfo = () => ({
            session_id: this.session_id,
            max_expired_time: this.max_expired_time,
            expired_time: this.expired_time,
            session_collect_type: this.session_collect_type,
          });
          refreshSession = () => {
            this.initSetSession();
          };
        };
        class ve {
          constructor() {
            if (ve._instance) return ve._instance;
            (this.baseURL = { api_url: '' }),
              (this.agentDataKeySet = {
                userID: void 0,
                sessionID: void 0,
                sendEventID: void 0,
                pageloadID: void 0,
                isCollectSession: !1,
                isCollectSessionReplay: !1,
                collectRequiredUserIdSet: void 0,
              }),
              (this.pageInfo = {
                pageLocation: void 0,
                host: void 0,
                path: void 0,
                automatedPath: void 0,
                query: void 0,
                protocol: void 0,
                userAgent: void 0,
                pageTitle: void 0,
                pageHash: void 0,
              }),
              (this.pageActivityStartTime = W()),
              (ve._instance = this);
          }
          init(e) {
            this.setAPI(e.proxyBaseUrl),
              this.setAgentConfig(e),
              this.setUserID(),
              this.setPageInfo(),
              this.setScreenSize();
          }
          setPageActivityStartTime = (e) => {
            this.pageActivityStartTime = e;
          };
          getPageActivityStartTime = () => this.pageActivityStartTime;
          setScreenSize() {
            (this.screen = { width: 0, height: 0 }),
              (this.screen.width = window.innerWidth || document.body.clientWidth),
              (this.screen.height = window.innerHeight || document.body.clientHeight);
          }
          getScreenSize() {
            return this.screen;
          }
          setPageInfo = () => {
            this.setPageloadID();
            const e = ee(window.location.href);
            e &&
              (this.pageInfo = {
                pageLocation: window.location.href,
                pageHash: F(U(window.location.href)),
                host: e.host,
                path: e.pathname,
                automatedPath: e.automated_pathname,
                query: e.search,
                protocol: e.protocol,
                userAgent: window.navigator.userAgent,
                pageTitle: document.title,
              });
          };
          getPageInfo = () => this.pageInfo;
          setAPI(e) {
            this.baseURL = { api_url: '' };
            switch ('production') {
              case t.PRODUCTION:
                this.baseURL = J.Y4;
                break;
              case t.CANARY:
                this.baseURL = J.Jo;
                break;
              case t.DEV:
                this.baseURL = J.ug;
                break;
              case t.LOCAL:
              default:
                this.baseURL = J.G6;
            }
            e && (this.baseURL.api_url = e);
          }
          getAPI() {
            return this.baseURL.api_url;
          }
          setAgentConfig = (e) => {
            const t = e.projectAccessKey;
            if (he(e)) {
              this.agentConfig = {
                whatapEnv: 'production',
                projectAccessKey: t,
                pcode: e.pcode,
                sampleRate: e.sampleRate || 0,
                tracingAjaxUrls: e?.tracingAjaxUrls && Array.isArray(e?.tracingAjaxUrls) ? e?.tracingAjaxUrls : [],
                traceSampleRate: ue(e?.traceSampleRate) ? e.traceSampleRate : 100,
                traceUserID: !!e?.traceUserID,
                traceUserIdHeaderKeyName: e?.traceUserIdHeaderKeyName || 'userID',
                ignoreOrigins: e?.ignoreOrigins || [],
                ignoreLocalhost: !!e?.ignoreLocalhost,
                ignorePageUrl: {
                  ignorePageUrlHost: e?.ignorePageUrl?.ignorePageUrlHost || [],
                  ignorePageUrlPath: e?.ignorePageUrl?.ignorePageUrlPath || [],
                  ignorePageUrlRegExp: e?.ignorePageUrl?.ignorePageUrlRegExp || [],
                },
                ignoreResource: {
                  ignoreResourceHost: e?.ignoreResource?.ignoreResourceHost || [],
                  ignoreResourcePath: e?.ignoreResource?.ignoreResourcePath || [],
                  ignoreResourceRegExp: e?.ignoreResource?.ignoreResourceRegExp || [],
                },
                collectAjaxRequestHeader: {
                  collectAjaxRequestHeaderHost: e?.collectAjaxRequestHeader?.collectAjaxRequestHeaderHost || [],
                  collectAjaxRequestHeaderPath: e?.collectAjaxRequestHeader?.collectAjaxRequestHeaderPath || [],
                  collectAjaxRequestHeaderRegExp: e?.collectAjaxRequestHeader?.collectAjaxRequestHeaderRegExp || [],
                },
                isDebugMode: !!(e?.isDebugMode || window.location.hash.indexOf(c) > -1),
                cookieSecure: !!e?.cookieSecure,
                proxyBaseUrl: e?.proxyBaseUrl || '',
                ignorePageUrls: e?.ignorePageUrls || [],
                ignoreResources: e?.ignoreResources || [],
                ignoreErrors: e?.ignoreErrors || [],
                collectUserClick: !!e?.collectUserClick,
                sessionReplaySampleRate: e.sessionReplaySampleRate || 0,
                sessionReplayMaskAllInputs: !ce(e.sessionReplayMaskAllInputs) || e.sessionReplayMaskAllInputs,
                sessionReplayMaskAllTexts: !ce(e.sessionReplayMaskAllTexts) || e.sessionReplayMaskAllTexts,
                sessionReplayCollectAllBrowser:
                  !!ce(e.sessionReplayCollectAllBrowser) && e.sessionReplayCollectAllBrowser,
                sessionReplayAllowPages: e.sessionReplayAllowPages || [],
                sessionReplayRemoveType3: !!ce(e.sessionReplayRemoveType3) && e.sessionReplayRemoveType3,
                collectCspError: !!e.collectCspError,
                env: e.env || 'default_env',
                version: e.version || 'default_version',
                ignoreStatusZero: !!ce(e.ignoreStatusZero) && e.ignoreStatusZero,
              };
              const r = this.getAPI();
              r && this.agentConfig?.ignoreResources && this.agentConfig?.ignoreResources.push(r),
                (this.session_manager = new ye(
                  this.agentConfig.pcode,
                  this.agentConfig.sampleRate,
                  this.agentConfig.sessionReplaySampleRate,
                  this.agentConfig.cookieSecure
                ));
            } else u('whatap-browser-agent-error: project not set');
          };
          getAgentConfig = () => this.agentConfig;
          setUserID = (e) => {
            let t = '';
            const r = this.agentConfig?.pcode,
              n = 'whatap_user_id_' + r;
            e
              ? ((t = e), localStorage?.setItem(n, t))
              : localStorage?.getItem(n)
              ? (t = localStorage?.getItem(n))
              : ((t = w(n)) || (t = b()), S(this.agentConfig.cookieSecure, n, t, v)),
              (this.agentDataKeySet = { ...this.agentDataKeySet, userID: t });
          };
          setCollectRequiredUserIdSet = (e) => {
            this.agentDataKeySet = { ...this.agentDataKeySet, collectRequiredUserIdSet: e };
          };
          getUserID = () => this.agentDataKeySet.userID;
          setSessionID = () => {
            this.session_manager && this.session_manager.refreshSession();
          };
          getSessionInfo = () => {
            if (this.session_manager) return this.session_manager.getSessionInfo();
          };
          getIsCollectSession = () => {
            if (
              this.agentDataKeySet.collectRequiredUserIdSet &&
              this.agentDataKeySet.collectRequiredUserIdSet.length > 0
            ) {
              const e = this.agentDataKeySet.userID;
              if (-1 !== this.agentDataKeySet.collectRequiredUserIdSet.findIndex((t) => t === e)) return !0;
            }
            return !!this.session_manager && this.session_manager.getSessionInfo().session_collect_type > 0;
          };
          setSendEventID() {
            this.agentDataKeySet = { ...this.agentDataKeySet, sendEventID: b() };
          }
          setPageloadID() {
            this.agentDataKeySet = { ...this.agentDataKeySet, pageloadID: b() };
          }
          isAllowTraceUrl = (e) => {
            const t = this.agentConfig?.tracingAjaxUrls?.find((t) => {
              try {
                return t instanceof RegExp ? te(t, e) : 'string' == typeof t && e.startsWith(t);
              } catch (e) {
                return u('whatap-browser-agent-error: isAllowTraceOrigins', e), !1;
              }
            });
            return !!t;
          };
          isIgnorePage = (e) => {
            const t = this.agentConfig?.ignorePageUrl?.ignorePageUrlHost,
              r = t ? t.findIndex((t) => re(t, e)) : -1,
              n = this.agentConfig?.ignorePageUrl?.ignorePageUrlPath,
              s = n ? n.findIndex((t) => ne(t, e)) : -1,
              i = this.agentConfig.ignorePageUrl?.ignorePageUrlRegExp,
              a = i
                ? i.findIndex((t) => {
                    if (t instanceof RegExp) return te(t, e);
                  })
                : -1;
            return -1 !== r || -1 !== s || -1 !== a;
          };
          isCollectAjaxRequestHeader = (e) => {
            const t = this.agentConfig?.collectAjaxRequestHeader?.collectAjaxRequestHeaderHost,
              r = t ? t.findIndex((t) => re(t, e)) : -1,
              n = this.agentConfig?.collectAjaxRequestHeader?.collectAjaxRequestHeaderPath,
              s = n ? n.findIndex((t) => ne(t, e)) : -1,
              i = this.agentConfig?.collectAjaxRequestHeader?.collectAjaxRequestHeaderRegExp,
              a = i
                ? i.findIndex((t) => {
                    if (t instanceof RegExp) return te(t, e);
                  })
                : -1;
            return -1 !== r || -1 !== s || -1 !== a;
          };
          isIgnorePageUrls = (e) => {
            const t = this.agentConfig.ignorePageUrls;
            return -1 !== (t ? t.findIndex((t) => (t instanceof RegExp ? te(t, e) : e.startsWith(t))) : -1);
          };
          isIgnoreResources = (e) => {
            if (this.isIgnoreAjaxOrigins(e)) return !0;
            const t = this.agentConfig.ignoreResources;
            return -1 !== (t ? t.findIndex((t) => (t instanceof RegExp ? te(t, e) : e.startsWith(t))) : -1);
          };
          isIgnoreResource = (e) => {
            if (this.isIgnoreAjaxOrigins(e)) return !0;
            const t = this.agentConfig.ignoreResource?.ignoreResourceHost,
              r = t ? t.findIndex((t) => re(t, e)) : -1,
              n = this.agentConfig.ignoreResource?.ignoreResourcePath,
              s = n ? n.findIndex((t) => ne(t, e)) : -1,
              i = this.agentConfig.ignoreResource?.ignoreResourceRegExp,
              a = i
                ? i.findIndex((t) => {
                    if (t instanceof RegExp) return te(t, e);
                  })
                : -1;
            return -1 !== r || -1 !== s || -1 !== a;
          };
          isIgnoreAjaxOrigins = (e) => {
            const t = this.agentConfig?.ignoreOrigins;
            return -1 !== (t ? t.findIndex((t) => (t instanceof RegExp ? te(t, e) : re(t, e))) : -1);
          };
          getAgentMetaData = () => ({
            sendEventID: this.agentDataKeySet.sendEventID,
            pageLocation: this.pageInfo.pageLocation,
            host: this.pageInfo.host,
            path: this.pageInfo.path,
            automatedPath: this.pageInfo.automatedPath,
            query: this.pageInfo.query,
            protocol: this.pageInfo.protocol,
            pageTitle: this.pageInfo.pageTitle,
            pCode: this.agentConfig.pcode,
            projectAccessKey: this.agentConfig.projectAccessKey,
            screen: this.screen,
            sessionID: this.session_manager?.getSessionInfo().session_id,
            userAgent: this.pageInfo.userAgent,
            userID: this.agentDataKeySet.userID,
            pageloadID: this.agentDataKeySet.pageloadID,
            networkInformation: z(),
            env: this.agentConfig.env,
            version: this.agentConfig.version,
          });
        }
        var Se = new ve();
        const we = () => Se.getAgentConfig().traceUserID,
          Ie = (e) => {
            const t = Se.getAgentConfig().tracingAjaxUrls.find((t) => {
              try {
                return t instanceof RegExp ? t.test(e) : 'string' == typeof t && e.startsWith(t);
              } catch (e) {
                return u('whatap-browser-agent-error: isAllowTraceOrigins', e), !1;
              }
            });
            return !!t && !!R(Se.getAgentConfig().traceSampleRate);
          };
        function _e(e) {
          return 'v1,' + e.getPageInfo().pageHash;
        }
        function Ce(e) {
          return m(e.getAgentConfig().pcode) + ',' + m(p) + ',' + m(p);
        }
        function Ee(e, t) {
          return e + ',1,' + t;
        }
        const Te = (e, t, r) => ({ [n]: Ce(e), [s]: Ee(t, r), [i]: _e(e) }),
          xe = (e, t, r) => ({
            [n]: Ce(e),
            [s]: Ee(t, r),
            [i]: _e(e),
            [e.getAgentConfig().traceUserIdHeaderKeyName]: e.getUserID() || 'none',
          }),
          Ae = () => b(),
          ke = () => b(),
          Re = (e, t) => (0 === e && 'opaque' === t ? 10 : e),
          De = 'console',
          Oe = 'onError',
          Me = 'fetchError',
          Le = 'xhrError',
          Ne = '?',
          Pe = (e, t) => {
            if ('object' != typeof e || !e || !(t in e)) return;
            const r = e[t];
            return 'string' == typeof r ? r : void 0;
          },
          Ue = (e, t) => {
            const r = -1 !== e.indexOf('safari-extension'),
              n = -1 !== e.indexOf('safari-web-extension');
            return r || n
              ? [
                  -1 !== e.indexOf('@') ? e.split('@')[0] : Ne,
                  r ? `safari-extension:${t}` : `safari-web-extension:${t}`,
                ]
              : [e, t];
          },
          Fe = (e, t, r, n) => {
            const s = { url: e, func: t };
            return void 0 !== r && (s.line = r), void 0 !== n && (s.column = n), s;
          },
          ze =
            /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
          Be = /\((\S*)(?::(\d+))(?::(\d+))\)/,
          He = (e) => {
            const t = ze.exec(e);
            if (t) {
              if (t[2] && t[2].indexOf('eval') > -1) {
                const e = Be.exec(t[2]);
                e && ((t[2] = e[1]), (t[3] = e[2]), (t[4] = e[3]));
              }
              const [e, r] = Ue(t[1] || Ne, t[2]);
              return Fe(r, e, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
            }
          },
          je =
            /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
          We = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
          Ze = (e) => {
            const t = je.exec(e);
            if (t) {
              if (t[3] && t[3].indexOf(' > eval') > -1) {
                const e = We.exec(t[3]);
                e && ((t[1] = t[1] || 'eval'), (t[3] = e[1]), (t[4] = e[2]), (t[5] = ''));
              }
              let e = t[3],
                r = t[1] || Ne;
              return ([r, e] = Ue(r, e)), Fe(e, r, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
            }
          },
          Ge =
            /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
          Xe = (e) => {
            const t = Ge.exec(e);
            if (t) return Fe(t[2], t[1] || Ne, +t[3], t[4] ? +t[4] : void 0);
          },
          Ve = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
          qe = (e) => {
            const t = Ve.exec(e);
            if (t) return Fe(t[2], t[3] || Ne, +t[1]);
          },
          Ke = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,
          Ye = (e) => {
            const t = Ke.exec(e);
            if (t) return Fe(t[6], t[4] || t[3] || Ne, +t[1], +t[2]);
          },
          Je = (e) => {
            const t = [qe, Ye, He, Xe, Ze];
            for (let r = 0; r < t.length; r += 1) {
              const n = (0, t[r])(e);
              if (n) return n;
            }
          },
          $e = (e, t) => {
            const r = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
              n = [],
              s = {};
            let i,
              a,
              o = !1;
            for (let e = $e.caller; e && !o; e = e.caller)
              e !== Qe &&
                ((a = { column: void 0, func: Ne, line: void 0, url: void 0 }),
                (i = r.exec(e.toString())),
                e.name ? (a.func = e.name) : i && (a.func = i[1]),
                void 0 === a.func && (a.func = i ? i.input.substring(0, i.input.indexOf('{')) : void 0),
                s[e.toString()] ? (o = !0) : (s[e.toString()] = !0),
                n.push(a));
            t && n.splice(0, t);
            const c = { stack: n, message: Pe(e, 'message'), name: Pe(e, 'name') };
            return (
              ((e, t, r) => {
                const n = { url: t, line: r ? +r : void 0 };
                if (n.url && n.line) {
                  e.incomplete = !1;
                  const t = e.stack;
                  if (t.length > 0 && t[0].url === n.url) {
                    if (t[0].line === n.line) return !1;
                    if (!t[0].line && t[0].func === n.func) return (t[0].line = n.line), !1;
                  }
                  return t.unshift(n), (e.partial = !0), !0;
                }
                e.incomplete = !0;
              })(c, Pe(e, 'sourceURL') || Pe(e, 'fileName'), Pe(e, 'line') || Pe(e, 'lineNumber')),
              c
            );
          },
          Qe = (e, t) => {
            let r;
            const n = t ? Number(t) : 0;
            try {
              if (
                ((r = ((e) => {
                  const t = Pe(e, 'stack') || Pe(e, 'stacktrace');
                  if (!t) return;
                  const r = t.split('\n'),
                    n = [];
                  for (let e = 0, t = r.length; e < t; e += 1) {
                    const t = r[e],
                      s = Je(t);
                    s && n.push(s);
                  }
                  return n.length ? { stack: n, message: Pe(e, 'message'), name: Pe(e, 'name') } : void 0;
                })(e)),
                r)
              )
                return r;
            } catch (e) {}
            try {
              if (
                ((r = ((e) => {
                  const t = Pe(e, 'message');
                  if (!t) return;
                  const r = t.split('\n');
                  if (r.length < 4) return;
                  const n = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                    s =
                      /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                    i = /^\s*Line (\d+) of function script\s*$/i,
                    a = [],
                    o = window && window.document && window.document.getElementsByTagName('script'),
                    c = [];
                  let l;
                  for (const e in o) Pe(o, e) && !o[e].src && c.push(o[e]);
                  for (let e = 2; e < r.length; e += 2) {
                    let t;
                    n.exec(r[e])
                      ? ((l = n.exec(r[e])), (t = { column: void 0, func: l[3], line: +l[1], url: l[2] }))
                      : s.exec(r[e])
                      ? ((l = s.exec(r[e])), (t = { column: void 0, func: l[4], line: +l[1], url: l[3] }))
                      : i.exec(r[e]) &&
                        ((l = i.exec(r[e])),
                        (t = { url: window.location.href.replace(/#.*$/, ''), column: void 0, func: '', line: +l[1] })),
                      t && (t.func || (t.func = Ne), a.push(t));
                  }
                  return a.length ? { stack: a, message: r[0], name: Pe(e, 'name') } : void 0;
                })(e)),
                r)
              )
                return r;
            } catch (e) {}
            try {
              if (((r = $e(e, n + 1)), r)) return r;
            } catch (e) {}
            return { message: Pe(e, 'message'), name: Pe(e, 'name'), stack: [] };
          },
          et = (e, t, r) => {
            let n = '';
            try {
              n = JSON.stringify(e, t, r);
            } catch {
              n = '<error: unable to serialize object>';
            }
            return n;
          };
        function tt() {}
        const rt =
          /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
        function nt(e) {
          return `${e.name || 'Error'}: ${e.message}`;
        }
        function st(e) {
          let t = nt(e);
          return (
            e.stack.forEach((e) => {
              const r = '?' === e.func ? '<anonymous>' : e.func,
                n = e.line ? `:${e.line}` : '',
                s = e.line && e.column ? `:${e.column}` : '';
              t += `\n  at ${r} (${e.url}${n}${s})`;
            }),
            t
          );
        }
        const it = () => {
          const e = new Error();
          if (!e.stack)
            try {
              throw e;
            } catch (e) {}
          const t = Qe(e);
          t.stack = t.stack.slice(2);
          return st(t);
        };
        function at(e, t, r) {
          const n = e[t];
          let s = r(n);
          const i = function () {
            try {
              return s.apply(this, arguments);
            } catch (e) {
              return u('overrideMethod() error', e), n.apply(this, arguments);
            }
          };
          return (
            (e[t] = i),
            {
              stop: () => {
                e[t] === i ? (e[t] = n) : (l('overrideMethod.stop() called more than once'), (s = n));
              },
            }
          );
        }
        function ot(e, t, r) {
          let { before: n, after: s } = r;
          return at(
            e,
            t,
            (e) =>
              function () {
                let t;
                if (n)
                  try {
                    n.apply(this, arguments);
                  } catch (e) {
                    u('callOverrideMethod.before() error', e);
                  }
                if (('function' == typeof e && (t = e.apply(this, arguments)), s))
                  try {
                    s.apply(this, arguments);
                  } catch (e) {
                    u('callOverrideMethod.after() error', e);
                  }
                return t;
              }
          );
        }
        function ct(e) {
          return function () {
            try {
              return e.apply(this, arguments);
            } catch (e) {
              u(e);
            }
          };
        }
        let lt = (function (e) {
          return (
            (e.DOCUMENT = 'document'),
            (e.XHR = 'xhr'),
            (e.BEACON = 'beacon'),
            (e.FETCH = 'fetch'),
            (e.CSS = 'css'),
            (e.JS = 'script'),
            (e.IMAGE = 'image'),
            (e.FONT = 'font'),
            (e.MEDIA = 'media'),
            (e.OTHER = 'other'),
            e
          );
        })({});
        const ut = 'initial_document',
          dt = [
            [lt.DOCUMENT, (e) => 'initial_document' === e],
            [lt.XHR, (e) => 'xmlhttprequest' === e],
            [lt.FETCH, (e) => 'fetch' === e],
            [lt.BEACON, (e) => 'beacon' === e],
            [lt.CSS, (e, t) => /\.css$/i.test(t)],
            [lt.JS, (e, t) => /\.js$/i.test(t)],
            [
              lt.IMAGE,
              (e, t) =>
                -1 !== ['image', 'img', 'icon'].indexOf(e) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(t),
            ],
            [lt.FONT, (e, t) => null !== /\.(woff|eot|woff2|ttf)$/i.exec(t)],
            [lt.MEDIA, (e, t) => -1 !== ['audio', 'video'].indexOf(e) || null !== /\.(mp3|mp4)$/i.exec(t)],
          ];
        class ht {
          observers = [];
          constructor() {}
          add(e) {
            this.observers.push(e);
          }
          remove(e) {
            this.observers = this.observers.filter((t) => t !== e);
          }
          notify(e) {
            this.observers.forEach((t) => t.notify(e));
          }
          isCheckObserver() {
            return this.observers.length > 0;
          }
        }
        class pt {
          constructor(e) {
            e && (this._subscribeFn = e), this._subscribeFn && (this.subscriber = new ht());
          }
          subscribe(e) {
            return (
              this._subscribeFn &&
                this.subscriber &&
                !this.subscriber.isCheckObserver() &&
                (this.stopSubscribe = this._subscribeFn(this.subscriber)),
              this.subscriber?.add(e),
              {
                unsubscribe: () => {
                  this.subscriber?.remove(e),
                    !this.subscriber?.isCheckObserver() && this.stopSubscribe && this.stopSubscribe();
                },
              }
            );
          }
          unsubscribe(e) {
            this.subscriber?.remove(e),
              !this.subscriber?.isCheckObserver() && this.stopSubscribe && this.stopSubscribe();
          }
        }
        const mt = C;
        function ft(e, t) {
          if (mt) return E(mt, 'setTimeout')(e, t);
        }
        function gt(e) {
          if (mt) return E(mt, 'clearTimeout')(e);
        }
        function bt(e) {
          if (mt) return E(mt, 'clearInterval')(e);
        }
        function yt(e, t, r) {
          let n,
            s,
            i,
            a,
            o,
            c,
            l = 0,
            u = !1,
            d = !1,
            h = !0;
          if ('function' != typeof e) throw new TypeError('Expected a function');
          function p(t) {
            const r = i,
              n = s;
            return (i = s = void 0), (l = t), (a = e.apply(n, r)), a;
          }
          function m(e) {
            const r = e - o;
            return void 0 === o || r >= t || r < 0 || (d && e - l >= n);
          }
          function f() {
            const e = Date.now();
            if (m(e)) return g(e);
            c = ft(
              f,
              (function (e) {
                const r = e - l,
                  s = t - (e - o);
                return d ? Math.min(s, n - r) : s;
              })(e)
            );
          }
          function g(e) {
            return (c = void 0), h && i ? p(e) : ((i = s = void 0), a);
          }
          function b() {
            const e = Date.now(),
              r = m(e);
            if (((i = arguments), (s = this), (o = e), r)) {
              if (void 0 === c)
                return (function (e) {
                  return (l = e), (c = ft(f, t)), u ? p(e) : a;
                })(o);
              if (d) return gt(c), (c = ft(f, t)), p(o);
            }
            return void 0 === c && (c = ft(f, t)), a;
          }
          return (
            (t = t || 0),
            oe(r) &&
              ((u = !!r.leading),
              (d = 'maxWait' in r),
              (n = d ? Math.max(r.maxWait || 0, t) : n),
              (h = 'trailing' in r ? !!r.trailing : h)),
            (b.cancel = function () {
              void 0 !== c && gt(c), (l = 0), (i = o = s = c = void 0);
            }),
            (b.flush = function () {
              return void 0 === c ? a : g(Date.now());
            }),
            b
          );
        }
        function vt(e, t, r) {
          let n = !0,
            s = !0;
          if ('function' != typeof e) throw new TypeError('Expected a function');
          return (
            r && oe(r) && ((n = 'leading' in r ? !!r.leading : n), (s = 'trailing' in r ? !!r.trailing : s)),
            yt(e, t, { leading: n, maxWait: t, trailing: s })
          );
        }
        const St = (e, t) => (0 === e && 'opaque' !== t) || (e >= 400 && e < 600);
        let wt;
        function It() {
          const e = new pt((e) => {
            const { stop: t } = at(
              window,
              'fetch',
              (t) =>
                function (r, n) {
                  let s;
                  const i = ((e, t, r) => {
                    const n = (r && r.method) || ('object' == typeof t && t.method) || 'GET',
                      s = se(('object' == typeof t && t.url) || t)?.href || ('object' == typeof t && t.url) || t,
                      i = ee(s)?.href || ('object' == typeof t && t.url) || t,
                      a = V(),
                      o = ke();
                    let c = '';
                    if ((Se.isCollectAjaxRequestHeader(i) && (c = JSON.stringify(r || '')), Se.isIgnoreResources(i)))
                      return;
                    const l = {
                      state: 'start',
                      method: n,
                      url: i,
                      startTimeSet: a,
                      mtID: 'none',
                      txID: o,
                      stringInit: c,
                      input: t,
                      init: r,
                    };
                    return e.notify(l), l;
                  })(e, r, n);
                  return (
                    i
                      ? ((s = t.call(this, i.input, i.init)),
                        ((e, t, r) => {
                          const n = async (t) => {
                            const n = V();
                            if ('stack' in t || t instanceof Error) {
                              const s = Qe(t),
                                i = st(s),
                                a = {
                                  state: 'error',
                                  startTimeSet: r.startTimeSet,
                                  endTimeSet: n,
                                  method: r.method,
                                  data: {
                                    ajaxStatus: 0,
                                    ajaxUrl: r.url,
                                    message: s.message,
                                    messageSummary: s.message,
                                  },
                                  stack: i,
                                  timestamp: n.timeStamp,
                                  type: Me,
                                },
                                o = {
                                  state: 'end',
                                  startTimeSet: r.startTimeSet,
                                  endTimeSet: n,
                                  url: r.url,
                                  status: 0,
                                  message: s.message || '',
                                  method: r.method,
                                  type: lt.FETCH,
                                  mtID: r.mtID,
                                  txID: r.txID,
                                  isAborted:
                                    t instanceof DOMException &&
                                    (t.code === DOMException.ABORT_ERR || 'AbortError' === t.name),
                                  stringInit: r.stringInit,
                                  input: r.input,
                                  init: r.init,
                                };
                              e.notify(a), e.notify(o);
                            } else if ('status' in t) {
                              const s = t.statusText || t.type;
                              if (St(t.status, s)) {
                                const i = it(),
                                  a = {
                                    state: 'error',
                                    startTimeSet: r.startTimeSet,
                                    endTimeSet: n,
                                    method: r.method,
                                    data: { ajaxStatus: t.status, ajaxUrl: r.url, message: s, messageSummary: s },
                                    stack: i,
                                    timestamp: n.timeStamp,
                                    type: Me,
                                  };
                                e.notify(a);
                              }
                              const i = {
                                state: 'end',
                                startTimeSet: r.startTimeSet,
                                endTimeSet: n,
                                url: r.url,
                                status: Re(t.status, s),
                                message: s,
                                method: r.method,
                                type: lt.FETCH,
                                mtID: r.mtID,
                                txID: r.txID,
                                response: t,
                                isAborted: !1,
                                stringInit: r.stringInit,
                                input: r.input,
                                init: r.init,
                              };
                              e.notify(i);
                            }
                          };
                          t.then(ct(n), ct(n));
                        })(e, s, i))
                      : (s = t.call(this, r, n)),
                    s
                  );
                }
            );
            return t;
          });
          return e;
        }
        function _t() {
          return wt || (wt = It()), wt;
        }
        let Ct;
        const Et = new WeakMap();
        function Tt(e, t) {
          const r = t.toString(),
            n = se(r)?.href || r,
            s = ee(n)?.href || r,
            i = ke(),
            a = { state: 'open', startTimeSet: V(), method: e, url: s, mtID: 'none', txID: i, isAborted: !1 };
          Se.isIgnoreResources(s) || Et.set(this, a);
        }
        function xt(e) {
          const t = Et.get(this);
          if (!t) return;
          const r = it(),
            n = V();
          t.startTimeSet = n;
          const s = {
            state: 'start',
            startTimeSet: n,
            method: t.method,
            url: t.url,
            mtID: t.mtID,
            txID: t.txID,
            stringInit: '',
            xhr: this,
            avaliableEvent: t,
          };
          e.notify(s);
          const { stop: i } = ot(this, 'onreadystatechange', {
              before: function () {
                this.readyState === XMLHttpRequest.DONE && o();
              },
            }),
            a = () => {
              const n = V(),
                s = {
                  state: 'error',
                  startTimeSet: t.startTimeSet,
                  endTimeSet: n,
                  method: t.method,
                  data: {
                    ajaxStatus: this.status,
                    ajaxUrl: t.url,
                    message: this.statusText,
                    messageSummary: this.statusText,
                  },
                  stack: r,
                  timestamp: n.timeStamp,
                  type: Le,
                };
              e.notify(s);
            },
            o = () => {
              c && c(), i(), St(this.status, this.statusText) && a();
              const r = {
                state: 'end',
                startTimeSet: t.startTimeSet,
                endTimeSet: V(),
                method: t.method,
                url: t.url,
                mtID: t.mtID,
                txID: t.txID,
                stringInit: s.stringInit,
                status: this.status,
                message: this.statusText,
                type: lt.XHR,
                isAborted: t.isAborted,
              };
              e.notify(Object.assign({}, r));
            },
            { stop: c } = k(this, 'loadend', o);
        }
        function At() {
          const e = Et.get(this);
          e && (e.isAborted = !0);
        }
        const kt = () =>
          new pt((e) => {
            const { stop: t } = ot(XMLHttpRequest.prototype, 'open', { before: Tt }),
              { stop: r } = ot(XMLHttpRequest.prototype, 'send', {
                before: function () {
                  xt.call(this, e);
                },
              }),
              { stop: n } = ot(XMLHttpRequest.prototype, 'abort', {
                before: function () {
                  At.call(this);
                },
              });
            return () => {
              t(), r(), n();
            };
          });
        function Rt() {
          return Ct || (Ct = kt()), Ct;
        }
        let Dt = (function (e) {
          return (
            (e.PAGE_LOAD_DISPATCHER = 'pageLoad'),
            (e.ROUTE_CHANGE_DISPATCHER = 'routeChange'),
            (e.RESOURCE_DISPATCHER = 'resource'),
            (e.ERROR_DISPATCHER = 'onError'),
            (e.WEB_VITALS_DISPATCHER = 'v2/webVitals'),
            (e.EVENT_DISPATCHER = 'event'),
            (e.SESSION_REPLAY_DISPATCHER = 'sessionreplay'),
            e
          );
        })({});
        const Ot = (e, t) =>
          e.some((e) => {
            try {
              if (e instanceof RegExp) return e.test(t);
              if ('string' == typeof e) return t.includes(e);
            } catch (e) {
              return u('whatap-browser-agent-error: isMatchOption', e), !1;
            }
            return !1;
          });
        let Mt;
        const Lt = () =>
          new pt((e) => {
            const { stop: t } = ot(document, 'onvisibilitychange', {
              before: function () {
                ((e) => {
                  const t = { visibilityState: document.visibilityState, timestamp: G() };
                  e.notify(t);
                })(e);
              },
            });
            return t;
          });
        function Nt() {
          return Mt || (Mt = Lt()), Mt;
        }
        Dt.PAGE_LOAD_DISPATCHER,
          Dt.ERROR_DISPATCHER,
          Dt.RESOURCE_DISPATCHER,
          Dt.ROUTE_CHANGE_DISPATCHER,
          Dt.WEB_VITALS_DISPATCHER,
          Dt.PAGE_LOAD_DISPATCHER,
          Dt.ERROR_DISPATCHER,
          Dt.RESOURCE_DISPATCHER,
          Dt.ROUTE_CHANGE_DISPATCHER,
          Dt.WEB_VITALS_DISPATCHER;
        var Pt = class {
          constructor() {
            this.map = new Map();
          }
          setData(e) {
            const t = x();
            this.map.set(t, { ...e });
          }
          getData() {
            return this.map;
          }
          deleteData(e) {
            this.map.delete(e);
          }
        };
        var Ut = class {
          constructor() {
            (this.map_table = {}),
              Object.values(Dt).forEach((e) => {
                this.map_table[e] = {};
              });
          }
          getDataSize(e, t) {
            const r = this.map_table[e];
            if (r) {
              const e = r[t];
              return e ? e.map.size : 0;
            }
            return 0;
          }
          addDataMap(e, t, r) {
            return new Promise((n) => {
              const s = this.map_table[t];
              if (s) {
                const t = s[r];
                t ? n(t.setData(e)) : ((s[r] = new Pt()), n(s[r]?.setData(e)));
              }
            });
          }
          getDataMap(e, t) {
            const r = this.map_table[e];
            if (r) {
              const e = r[t];
              if (e) return e.getData();
            }
          }
          deleteDataMap(e, t) {
            const r = this.map_table[e];
            if (r)
              try {
                r[t]?.map.clear(), (r[t] = null);
              } catch (e) {
                u(e);
              }
          }
        };
        const Ft = Blob && URL && URL.createObjectURL && Worker;
        let zt = null,
          Bt = !0;
        const Ht = () => {
          (zt = null), (Bt = !1);
        };
        const jt = r(589).deflateRunCode,
          Wt = ((e) => {
            if (!Ft || !Bt) return (t) => Promise.resolve(e(t));
            {
              const t = new Blob([`self.onmessage=function(e){return self.postMessage((${e})(e.data));}`], {
                  type: 'text/javascript',
                }),
                r = URL.createObjectURL(t);
              if (!zt)
                try {
                  (zt = new Worker(r)),
                    (Bt = !0),
                    (zt.onerror = (e) => {
                      Ht();
                    });
                } catch (t) {
                  return (Bt = !1), (t) => Promise.resolve(e(t));
                }
            }
          })(jt);
        var Zt = class {
          constructor() {}
          requestAPI = (e, t) => {
            const r = Se.getAPI() + t;
            navigator.sendBeacon && e && navigator.sendBeacon(r, e);
          };
          deflateData = (e, t, r) => jt({ data: e, type: t, slot: r }).deflateData;
          sendData = (() => {
            var e = this;
            return function (t, r, n) {
              void 0 === n && (n = 0);
              const s = e.deflateData(t, r, n);
              s && e.requestAPI(s, r);
            };
          })();
        };
        const Gt = {
            [Dt.PAGE_LOAD_DISPATCHER]: 0,
            [Dt.ROUTE_CHANGE_DISPATCHER]: 0,
            [Dt.RESOURCE_DISPATCHER]: 5e3,
            [Dt.ERROR_DISPATCHER]: 5e3,
            [Dt.WEB_VITALS_DISPATCHER]: 5e3,
            [Dt.EVENT_DISPATCHER]: 5e3,
            [Dt.SESSION_REPLAY_DISPATCHER]: 5e3,
          },
          Xt = (e, t) => {
            const r = new XMLHttpRequest();
            r.open('POST', t, !0), r.setRequestHeader('Content-Type', 'text/plain'), r.send(e);
          };
        var Vt = class {
          constructor() {
            (this.deflateWorker = zt),
              (this.unloadSender = new Zt()),
              (this.sendBuffer = {}),
              (this.usingSlot = {}),
              (this.currentBufferSize = {}),
              (this.dataTable = new Ut()),
              this.initSendBuffer(),
              this.deflateWorkerCallback();
          }
          visibilitychangeObserver = {
            notify: (e) => {
              'hidden' === e.visibilityState &&
                Object.values(Dt).forEach((e) => {
                  const t = this.sendBuffer[e],
                    r = this.usingSlot[e];
                  if (t && r) for (let r = 0; r < 5; r += 1) t[r].cancel(), this.sendUnloadQueueData(e, r);
                });
            },
          };
          requestAPI = (e, t) => {
            try {
              const r = Se.getAPI() + t;
              if (navigator.sendBeacon && e && e.length < 6e4) {
                navigator.sendBeacon(r, e) || Xt(e, r);
              } else Xt(e, r);
            } catch (e) {
              u('Network request failed', e);
            }
          };
          getBufferState(e, t) {
            const r = this.usingSlot[e];
            if (r) return r[t];
          }
          lockBuffer(e, t) {
            const r = this.usingSlot[e];
            r && (r[t] = !0);
          }
          unlockBuffer(e, t) {
            const r = this.usingSlot[e];
            r && (r[t] = !1);
          }
          findUseableQueue = (e) => {
            let t = -1;
            for (let r = 0; r < 5; r += 1) {
              const n = this.usingSlot[e];
              if (n && !1 === n[r]) {
                t = r;
                break;
              }
            }
            return t;
          };
          deflateWorkerCallback = () => {
            this.deflateWorker &&
              ((this.deflateWorker.onerror = () => {
                u('Deflate worker error'), (this.deflateWorker = null);
              }),
              (this.deflateWorker.onmessage = (e) => {
                let { data: t } = e;
                try {
                  'session_replay_data' !== t.type &&
                    (this.requestAPI(t.deflateData, t.type), this.removeDataMap(t.type, t.slot));
                } catch (e) {
                  u('Error processing deflate worker message', e);
                }
              }));
          };
          resetSendTimeout(e, t, r) {
            return new Promise((n) => {
              if (void 0 !== this.sendBuffer[e]?.[t])
                return r || this.dataTable.getDataSize(e, t) > 50
                  ? (this.sendBuffer[e]?.[t].cancel(),
                    this.sendQueueData(e, t).catch((e) => {
                      u(e);
                    }),
                    n(!0))
                  : n(this.sendBuffer[e]?.[t](e, t));
              n(!0);
            });
          }
          setQueueData = async (e, t) => {
            try {
              const r = this.findUseableQueue(t);
              if (-1 === r) return;
              const n = L(JSON.stringify(e));
              if (void 0 !== this.currentBufferSize[t]?.[r]) {
                if (this.currentBufferSize[t][r] + n > 6e4) {
                  await this.resetSendTimeout(t, r, !0).catch((e) => {
                    u(e);
                  });
                  const s = this.findUseableQueue(t);
                  if (-1 === s) return;
                  return (
                    void 0 !== this.currentBufferSize[t]?.[s] && (this.currentBufferSize[t][s] += n),
                    void (await Promise.all([
                      this.dataTable.addDataMap(e, t, s),
                      this.resetSendTimeout(t, s, !1),
                    ]).catch((e) => {
                      u(e);
                    }))
                  );
                }
                this.currentBufferSize[t][r] += n;
              }
              await Promise.all([this.dataTable.addDataMap(e, t, r), this.resetSendTimeout(t, r, !1)]).catch((e) => {
                u(e);
              });
            } catch (e) {
              u('Error setting queue data', e);
            }
          };
          sendUnloadQueueData = (e, t) => {
            this.lockBuffer(e, t);
            const r = this.dataTable.getDataMap(e, t);
            if (r) {
              const n = this.rebuildDataMap({ [e]: r }, e);
              this.unloadSender.sendData(n, e, t);
            }
            this.removeDataMap(e, t);
          };
          sendQueueData = async (e, t) => {
            try {
              this.lockBuffer(e, t);
              const r = this.dataTable.getDataMap(e, t);
              if (r) {
                const n = this.rebuildDataMap({ [e]: r }, e);
                if (null === n) this.removeDataMap(e, t);
                else if (this.deflateWorker)
                  l('deflateWorker is defined', n), this.deflateWorker.postMessage({ data: n, type: e, slot: t });
                else {
                  l('deflateWorker is not defined', n);
                  const { deflateData: r } = await (async (e, t, r) =>
                    Wt
                      ? (l('DeflateWorkerPromise', 'rebuildData is defined', { data: e, type: t, slot: r }),
                        await Wt({ data: e, type: t, slot: r }))
                      : (l('DeflateWorkerPromise', 'rebuildData is not defined', { data: e, type: t, slot: r }),
                        await Promise.resolve(jt({ data: e, type: t, slot: r }))))(n, e, t);
                  this.requestAPI(r, e), this.removeDataMap(e, t);
                }
              }
            } catch (e) {
              u('Error sending queue data', e);
            }
          };
          removeDataMap = (e, t) => (
            void 0 !== this.currentBufferSize[e]?.[t] && (this.currentBufferSize[e][t] = 0),
            this.dataTable.deleteDataMap(e, t),
            this.unlockBuffer(e, t),
            !0
          );
          rebuildDataMap(e, t) {
            Se.setSendEventID();
            const r = Se.getAgentMetaData();
            if (!r.pageLocation) return null;
            const n = Object.assign({ meta: r });
            switch (t) {
              case Dt.PAGE_LOAD_DISPATCHER:
                e[t] && (n[Dt.PAGE_LOAD_DISPATCHER] = Array.from(e[t].values())[0]);
                break;
              case Dt.ROUTE_CHANGE_DISPATCHER:
                e[t] && (n[Dt.ROUTE_CHANGE_DISPATCHER] = Array.from(e[t].values()));
                break;
              case Dt.RESOURCE_DISPATCHER:
                e[t] &&
                  (n[Dt.RESOURCE_DISPATCHER] = Array.from(e[t].values()).sort(
                    (e, t) => (e.startTimeStamp || 0) - (t.startTimeStamp || 0)
                  ));
                break;
              case Dt.ERROR_DISPATCHER:
                e[t] && (n[Dt.ERROR_DISPATCHER] = Array.from(e[t].values()));
                break;
              case Dt.EVENT_DISPATCHER:
                e[t] && (n[Dt.EVENT_DISPATCHER] = Array.from(e[t].values()));
                break;
              case Dt.SESSION_REPLAY_DISPATCHER:
                e[t] && (n[Dt.SESSION_REPLAY_DISPATCHER] = Array.from(e[t].values()));
                break;
              case Dt.WEB_VITALS_DISPATCHER:
                if (e[t]) {
                  const r = { metric_delta: -1, metric_id: '', metric_value: -1, value: -1, debug_target: '' };
                  (n[Dt.WEB_VITALS_DISPATCHER] = { CLS: r, FID: r, LCP: r, INP: r }),
                    e[t].forEach((e) => {
                      Object.entries(e).forEach((e) => {
                        let [t, r] = e;
                        n[Dt.WEB_VITALS_DISPATCHER] &&
                          null !== n[Dt.WEB_VITALS_DISPATCHER][t] &&
                          (n[Dt.WEB_VITALS_DISPATCHER][t] = r);
                      });
                    });
                }
                break;
              default:
                u('whatap-browser-agent-error: rebuildDataMap error', t);
            }
            return n;
          }
          initSendBuffer = async () => {
            (this.visibilitychangeObservable = Nt()),
              this.visibilitychangeObservable.subscribe(this.visibilitychangeObserver),
              Object.values(Dt).forEach((e) => {
                (this.sendBuffer[e] = {}), (this.usingSlot[e] = {}), (this.currentBufferSize[e] = {});
                const t = this.sendBuffer[e],
                  r = this.usingSlot[e],
                  n = this.currentBufferSize[e];
                if (t && r)
                  for (let s = 0; s < 5; s += 1)
                    (t[s] = vt(this.sendQueueData, Gt[e], { leading: !1, trailing: !0 })), (r[s] = !1), (n[s] = 0);
              });
          };
        };
        class qt {
          constructor() {
            if (qt._instance) return qt._instance;
            (qt._instance = this),
              (this.sender = new Vt()),
              (this.bufferCapacity = 0),
              (this.isLoadComplete = !1),
              (this.pageLoadresourcesIterator = 0);
          }
          setIsLoadComplete(e) {
            this.isLoadComplete = e;
          }
          setPageLoadresourcesIterator(e) {
            this.pageLoadresourcesIterator = e;
          }
          getPageLoadresourcesIterator() {
            return this.pageLoadresourcesIterator;
          }
          async startDataSend(e, t) {
            Se.setSessionID();
            const r = Se.getPageInfo().pageLocation;
            r && !Se.isIgnorePageUrls(r) && this.sender.setQueueData(e, t);
          }
        }
        var Kt = qt;
        class Yt {
          constructor() {
            (this.dispatcherID = x()), (this.eventStartTimeStamp = 0), (this.eventEndTimeStamp = 0);
          }
          pauseDispatcher() {}
          startDispatcher() {}
        }
        var Jt = class extends Yt {
          constructor(e, t) {
            super(), (this.resourceData = e), (this.errorData = t);
          }
          fetchObserver = {
            notify: (e) => {
              if ('start' === e.state && Ie(e.url)) {
                e.mtID = Ae();
                const t = we() ? xe(Se, e.mtID, e.txID) : Te(Se, e.mtID, e.txID);
                ((e, t) => {
                  if (e.input instanceof Request && !e.init?.headers)
                    (e.input = new Request(e.input)),
                      Object.keys(t).forEach((r) => {
                        e.input.headers.append(r, t[r]);
                      });
                  else {
                    e.init = Object.assign({}, e.init);
                    const r = [];
                    e.init.headers instanceof Headers
                      ? e.init.headers.forEach((e, t) => {
                          r.push([t, e]);
                        })
                      : Array.isArray(e.init.headers)
                      ? e.init.headers.forEach((e) => {
                          r.push(e);
                        })
                      : e.init.headers &&
                        Object.keys(e.init.headers).forEach((t) => {
                          r.push([t, e.init.headers[t]]);
                        });
                    const n = Object.entries(t);
                    e.init.headers = r.concat(n);
                  }
                })(e, t);
              }
              if ('end' === e.state)
                if (e.type === lt.FETCH && e.response) {
                  const t = (function (e) {
                    try {
                      return e.clone();
                    } catch {
                      return;
                    }
                  })(e.response);
                  t && t.body
                    ? (function (e, t) {
                        const r = e.getReader();
                        let n = 0;
                        function s() {
                          r.cancel().catch(tt), t(void 0);
                        }
                        !(function e() {
                          r.read().then(
                            (t) => {
                              t.done ? s() : ((n += t.value.length), n > Number.POSITIVE_INFINITY ? s() : e());
                            },
                            (e) => {
                              t(e);
                            }
                          );
                        })();
                      })(t.body, () => {
                        (e.endTimeSet = V()), this.storeData(e);
                      })
                    : this.storeData(e);
                } else e && this.storeData(e);
              'error' === e.state && this.errorStoreData(e);
            },
          };
          xhrObserver = {
            notify: (e) => {
              if ('start' === e.state && Ie(e.url)) {
                e.avaliableEvent.mtID = Ae();
                const t = { agentMeta: Se, mtID: e.avaliableEvent.mtID, txID: e.avaliableEvent.txID },
                  r = we() ? xe(t.agentMeta, t.mtID, t.txID) : Te(t.agentMeta, t.mtID, t.txID);
                ((e, t) => {
                  Object.keys(t).forEach((r) => {
                    e.setRequestHeader(r, t[r]);
                  });
                })(e.xhr, r);
              }
              'end' === e.state && this.storeData(e), 'error' === e.state && this.errorStoreData(e);
            },
          };
          errorStoreData = (e) => {
            if (((t = Se.getAgentConfig().ignoreErrors), (r = e.data.messageSummary + ''), !Ot(t, r))) {
              const t = this.errorData.getErrorData(e);
              t && new Kt().startDataSend(t, Dt.ERROR_DISPATCHER);
            }
            var t, r;
          };
          storeData = (e) => {
            const t = this.resourceData.getSingleAjaxData(e);
            t && new Kt().startDataSend(t, Dt.RESOURCE_DISPATCHER);
          };
          startDispatcher = () => {
            (this.fetchObservable = _t()),
              this.fetchObservable.subscribe(this.fetchObserver),
              (this.xhrObservable = Rt()),
              this.xhrObservable.subscribe(this.xhrObserver);
          };
          pauseDispatcher = () => {
            this.fetchObservable?.unsubscribe(this.fetchObserver), this.xhrObservable?.unsubscribe(this.xhrObserver);
          };
        };
        const $t = (e) => {
            const t = e.split('\n');
            let r = !1;
            return (
              t.forEach((e) => {
                r = !!Je(e) || r;
              }),
              r
            );
          },
          Qt = (e) =>
            e
              .map((e) => {
                if ('string' == typeof e) return $t(e) ? void 0 : e;
                if (e instanceof Error) return nt(Qe(e));
                if (e instanceof Object) {
                  const t = Object.values(e).toString();
                  return $t(t) ? void 0 : et(e, void 0, 2);
                }
                if (e instanceof Array) {
                  const t = e.toString();
                  return $t(t) ? void 0 : et(e, void 0, 2);
                }
                return et(e, void 0, 2);
              })
              .join(' '),
          er = (e, t) => {
            const r = ((e, t) => {
              for (let r = 0; r < e.length; r++) {
                const n = e[r];
                if (t(n, r, e)) return n;
              }
            })(e, (e) => e instanceof Error);
            return {
              message: ['console error:', ...e]
                .map((e) => {
                  return 'string' == typeof (t = e) ? t : t instanceof Error ? nt(Qe(t)) : et(t, void 0, 2);
                  var t;
                })
                .join(' '),
              messageSummary: Qt(e),
              stack: r ? st(Qe(r)) : void 0,
              handlingStack: t,
            };
          },
          tr = (e) => {
            const { stop: t } = ((e) =>
                ot(window, 'onerror', {
                  before: function (t, r, n, s, i) {
                    let a;
                    if (i) (a = Qe(i)), e(a, i);
                    else {
                      const i = { url: r, line: n, column: s };
                      let o,
                        c = t;
                      if ('[object String]' === {}.toString.call(t)) {
                        const e = rt.exec(c);
                        e && ((o = e[1]), (c = e[2]));
                      }
                      (a = { name: o, message: 'string' == typeof c ? c : void 0, stack: [i] }), e(a, t);
                    }
                  },
                }))(e),
              { stop: r } = ((e) =>
                ot(window, 'onunhandledrejection', {
                  before: function (t) {
                    const r = t.reason,
                      n = Qe(r);
                    e(n, r);
                  },
                }))(e);
            return {
              stop: () => {
                t(), r();
              },
            };
          },
          rr = {};
        let nr;
        function sr() {
          return (
            nr ||
              (nr = (() => {
                const e = new pt((e) => {
                  const { stop: t } = tr((t) => {
                      const r = st(t),
                        n = {
                          data: { message: t.message, messageSummary: t.message, name: t.name },
                          stack: r,
                          timestamp: G(),
                          type: Oe,
                        },
                        s = t.message || 'none';
                      rr[s] || (rr[s] = new ir(e)), rr[s]?.throttleEndError(n), rr[s]?.debounceEndError(s);
                    }),
                    r = console.error;
                  return (
                    (console.error = function () {
                      for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s];
                      r.apply(console, n);
                      const i = it(),
                        a = er(n, i),
                        o = {
                          data: { message: a.message, messageSummary: a.messageSummary },
                          stack: a.stack || a.handlingStack,
                          timestamp: G(),
                          type: De,
                        };
                      e.notify(o);
                    }),
                    () => {
                      t(), (console.error = r);
                    }
                  );
                });
                return e;
              })()),
            nr
          );
        }
        class ir {
          constructor(e) {
            this.subscriber = e;
          }
          throttleEndError = (() => vt(this.endError, 5e3))();
          debounceEndError = (() => yt(this.initErrorThrottle, 5100))();
          initErrorThrottle(e) {
            rr[e] = void 0;
          }
          endError(e) {
            this.subscriber?.notify(e);
          }
        }
        let ar, or;
        const cr = (e) => {
            const { body: t } = e;
            if (!e.body.sourceFile) return '';
            return st({
              name: t.id,
              message: t.message,
              stack: [{ column: t.columnNumber ?? void 0, func: '?', line: t.lineNumber ?? void 0, url: t.sourceFile }],
            });
          },
          lr = () =>
            new pt((e) => {
              if (!window.ReportingObserver) return () => {};
              const t = new window.ReportingObserver(
                (t) => {
                  t.forEach((t) => {
                    const r = ((e) => {
                      const { type: t, body: r } = e,
                        n = `Intervention detected: ${t}. ${r.message}`;
                      return { data: { message: n, messageSummary: n }, stack: cr(e), timestamp: G(), type: Oe };
                    })(t);
                    e.notify(r);
                  });
                },
                { types: ['intervention'], buffered: !0 }
              );
              return (
                t.observe(),
                () => {
                  t.disconnect();
                }
              );
            }),
          ur = (e, t) => {
            if (!e.sourceFile) return '';
            return st({
              name: e.effectiveDirective,
              message: t,
              stack: [{ column: e.columnNumber ?? void 0, func: '?', line: e.lineNumber ?? void 0, url: e.sourceFile }],
            });
          },
          dr = () =>
            new pt((e) => {
              const { stop: t } = k(document, 'securitypolicyviolation', (t) => {
                const r = ((e) => {
                  const t = `Security Policy Violation Detected: Directive '${e.violatedDirective}' was violated at ${e.blockedURI}.`,
                    r = `The original policy was "${M(
                      e.originalPolicy,
                      100
                    )}", indicating the expected set of directives.`;
                  return { data: { message: r, messageSummary: t }, stack: ur(e, r), timestamp: G(), type: Oe };
                })(t);
                e.notify(r);
              });
              return () => {
                t();
              };
            });
        function hr() {
          return ar || (ar = lr()), ar;
        }
        function pr() {
          return or || (or = dr()), or;
        }
        var mr = class extends Yt {
          constructor(e) {
            super(), (this.ErrorData = e);
          }
          storeData = (e) => {
            if (((t = Se.getAgentConfig().ignoreErrors), (r = e.data.messageSummary + ''), !Ot(t, r))) {
              const t = this.ErrorData.getErrorData(e);
              t && new Kt().startDataSend(t, Dt.ERROR_DISPATCHER);
            }
            var t, r;
          };
          errorObserver = {
            notify: (e) => {
              this.storeData(e);
            },
          };
          startDispatcher = () => {
            (this.errorObservable = sr()),
              this.errorObservable.subscribe(this.errorObserver),
              (this.reportObservable = hr()),
              this.reportObservable.subscribe(this.errorObserver),
              Se.getAgentConfig().collectCspError &&
                ((this.cspReportObservable = pr()), this.cspReportObservable.subscribe(this.errorObserver));
          };
          pauseDispatcher = () => {
            this.errorObservable?.unsubscribe(this.errorObserver),
              this.reportObservable?.unsubscribe(this.errorObserver),
              Se.getAgentConfig().collectCspError && this.cspReportObservable?.unsubscribe(this.errorObserver);
          };
        };
        let fr, gr;
        function br() {
          return (
            fr ||
              (fr = new pt(
                (e) => (
                  (gr = e),
                  () => {
                    gr = void 0;
                  }
                )
              )),
            fr
          );
        }
        var yr = class extends Yt {
          constructor(e) {
            super(), (this.eventScrapper = e);
          }
          customEventObserver = {
            notify: (e) => {
              this.storeData(e);
            },
          };
          storeData = (e) => {
            const t = this.eventScrapper.getCustomEventData(e);
            t && new Kt().startDataSend(t, Dt.EVENT_DISPATCHER);
          };
          startDispatcher = () => {
            (this.customEventObservable = br()), this.customEventObservable.subscribe(this.customEventObserver);
          };
          pauseDispatcher = () => {
            this.customEventObservable?.unsubscribe(this.customEventObserver);
          };
        };
        var vr = class extends Yt {
          constructor(e) {
            super(), (this.dispatcherArr = e);
          }
          startDispatcher = () => {
            this.dispatcherArr.forEach((e) => {
              e.startDispatcher();
            });
          };
          pauseDispatcher = () => {
            this.dispatcherArr.forEach((e) => {
              e.pauseDispatcher();
            });
          };
        };
        function Sr(e) {
          return 'xmlhttprequest' === e.initiatorType || 'fetch' === e.initiatorType;
        }
        const wr = () => window.performance && 'getEntriesByType' in performance,
          Ir = (e) => {
            const t = {};
            for (const r in e) {
              const n = e[r];
              if (T(n)) {
                t[r] = 0 === n ? 0 : Z(n);
              }
            }
            return (
              (t.duration = e.loadEventEnd - e.navigationStart),
              (t.name = window.location.href),
              (t.decodedBodySize = 0),
              (t.startTime = 0),
              t
            );
          },
          _r = () => {
            const e = performance.getEntriesByType('navigation');
            if (wr() && e.length > 0 && 'toJSON' in e[0]) return e[0].toJSON();
            {
              const e = performance.timing;
              return Ir(e);
            }
          },
          Cr = () => {
            const e = performance.getEntriesByType('navigation');
            if (wr() && e.length > 0 && 'toJSON' in e[0])
              return { ...e[0].toJSON(), entryType: 'resource', initiatorType: ut };
            {
              const e = performance.timing;
              return { ...Ir(e), entryType: 'resource', initiatorType: ut };
            }
          };
        let Er;
        function Tr() {
          return (
            Er ||
              (Er = new pt(
                (e) => (
                  'complete' === document.readyState
                    ? e.notify(_r())
                    : k(
                        window,
                        'load',
                        () => {
                          e.notify(_r());
                        },
                        { once: !0 }
                      ),
                  () => {}
                )
              )),
            Er
          );
        }
        let xr;
        function Ar() {
          return (
            xr ||
              (xr = new pt((e) => {
                if (window.PerformanceObserver) {
                  const t = () => {
                      performance.clearResourceTimings();
                    },
                    { stop: r } = k(performance, 'resourcetimingbufferfull', t),
                    n = new PerformanceObserver((t) => {
                      t.getEntries().forEach((t) => {
                        'resource' === t.entryType && (Sr(t) || Se.isIgnoreResources(t.name) || e.notify(t));
                      });
                    });
                  return (
                    n.observe({ entryTypes: ['resource'] }),
                    () => {
                      n.disconnect(), r();
                    }
                  );
                }
                return () => {};
              })),
            xr
          );
        }
        let kr;
        const Rr = () => {
          const e = new pt((e) => {
            const t = (() => {
              const e = C;
              if (e?.Zone) {
                const t = E(e, 'MutationObserver');
                if (e.MutationObserver && t === e.MutationObserver) {
                  const t = new e.MutationObserver(() => {}),
                    r = E(t, 'originalInstance');
                  if (r && r.constructor) return r.constructor;
                }
                if (t) return t;
              }
              return e?.MutationObserver;
            })();
            if (t) {
              const r = new t(() => {
                e.notify();
              });
              return (
                r.observe(document, { characterData: !0, childList: !0, subtree: !0 }),
                () => {
                  r.disconnect();
                }
              );
            }
            return e.notify(), () => {};
          });
          return e;
        };
        function Dr() {
          return kr || (kr = Rr()), kr;
        }
        let Or;
        function Mr() {
          return (
            Or ||
              (Or = (() => {
                const e = new pt((e) => {
                  let t = 0;
                  const r = {},
                    n = () => {
                      e.notify({ isAjaxPending: t > 0 });
                    },
                    s = (e) => {
                      switch (e.state) {
                        case 'start':
                          (t += 1), (r[e.txID] = !0), n();
                          break;
                        case 'end':
                          r[e.txID] && ((t -= 1), n(), delete r[e.txID]);
                      }
                    },
                    i = {
                      notify: () => {
                        n();
                      },
                    },
                    a = { notify: s },
                    o = { notify: s },
                    c = {
                      notify: () => {
                        n();
                      },
                    },
                    l = Rt();
                  l.subscribe(o);
                  const u = _t();
                  u.subscribe(a);
                  const d = Ar();
                  d.subscribe(c);
                  const h = Dr();
                  return (
                    h.subscribe(i),
                    () => {
                      l.unsubscribe(o), u.unsubscribe(a), d.unsubscribe(c), h.unsubscribe(i);
                    }
                  );
                });
                return e;
              })()),
            Or
          );
        }
        var Lr = class extends Yt {
          constructor(e, t, r) {
            super(),
              (this.isPageLoadCompleteCookieKey = 'whatap_is_page_load_complete_' + Se.getAgentConfig().pcode),
              S(Se.getAgentConfig().cookieSecure, this.isPageLoadCompleteCookieKey, !1, v),
              (this.ajaxDataList = []),
              (this.errorDataList = []),
              (this.isUnloadComplete = !1),
              (this.navigationData = e),
              (this.resourceData = t),
              (this.errorData = r),
              (this.unloadSender = new Zt());
          }
          onUnloadHardNavigation = () => {
            S(Se.getAgentConfig().cookieSecure, this.isPageLoadCompleteCookieKey, !0, v),
              this.removeObserver(),
              (this.isUnloadComplete = !0);
            let e = [];
            try {
              e = performance.getEntriesByType('resource');
            } catch (e) {
              u('not defined resource');
            }
            const t = this.navigationData.getNavigationDataNoWait(),
              r = B(X()) || 0,
              n = this.resourceData.getMultiResourceData(e, this.ajaxDataList);
            Se.setSendEventID();
            const s = {
              meta: Se.getAgentMetaData(),
              pageLoad: {
                navigationTiming: { ...t, data: { ...t.data, loadTime: r } },
                resource: n,
                onError: this.errorDataList,
                totalDuration: r,
                isBounce: !0,
              },
            };
            l('onUnloadHardNavigation', { result: s }),
              this.unloadSender.sendData(s, Dt.PAGE_LOAD_DISPATCHER),
              (this.ajaxDataList = []);
          };
          onLoadHardNavigation = () => {
            S(Se.getAgentConfig().cookieSecure, this.isPageLoadCompleteCookieKey, !0, v);
            let e = [];
            try {
              e = performance.getEntriesByType('resource');
            } catch (e) {
              u('not defined resource');
            }
            this.navigationData.getNavigationData().then((t) => {
              const r = t.data.loadTime + t.startTimeStamp;
              e = e.filter((e) => e.responseEnd + t.startTimeStamp < r);
              const n = Cr();
              e.unshift(n);
              const s = this.resourceData.getMultiResourceData(e, []),
                i = t.data.loadTime;
              l('onLoadHardNavigation', {
                navigationTiming: t,
                resource: s,
                onError: this.errorDataList,
                totalDuration: i,
              }),
                new Kt().startDataSend(
                  { navigationTiming: t, resource: s, onError: this.errorDataList, totalDuration: i, isBounce: !1 },
                  Dt.PAGE_LOAD_DISPATCHER
                );
            });
          };
          onLoadSoftNavigation = (e) => {
            S(Se.getAgentConfig().cookieSecure, this.isPageLoadCompleteCookieKey, !0, v);
            const t = Cr();
            e.unshift(t);
            const r = this.resourceData.getMultiResourceData(e, this.ajaxDataList),
              n = r[r.length - 1];
            let s = 0;
            n && (s = n.startTimeStamp + n.timing.duration),
              this.eventEndTimeStamp < s && (this.eventEndTimeStamp = s),
              this.navigationData.getNavigationData().then((e) => {
                let t = B(H(this.eventStartTimeStamp, this.eventEndTimeStamp)) || 0;
                t < e.data.loadTime && (t = e.data.loadTime),
                  l('onLoadSoftNavigation', { navigationTiming: e, resource: r, totalDuration: t }),
                  new Kt().startDataSend(
                    { navigationTiming: e, resource: r, onError: this.errorDataList, totalDuration: t, isBounce: !1 },
                    Dt.PAGE_LOAD_DISPATCHER
                  ),
                  (this.ajaxDataList = []);
              });
          };
          waitInteraction(e) {
            let t,
              r,
              n = !1;
            const s = () => {
                (n = !0), gt(t), gt(r), this.pageActivityObservable?.unsubscribe(a);
              },
              i = (t) => {
                let { isActivityNone: r, end: i } = t;
                n || (s(), e({ isActivityNone: r, end: i }));
              };
            r = ft(() => {
              i({ isActivityNone: !0 });
            }, 100);
            const a = {
              notify(e) {
                gt(r), gt(t);
                const n = V();
                e.isAjaxPending ||
                  (t = ft(() => {
                    i({ isActivityNone: !1, end: n });
                  }, 100));
              },
            };
            return (this.pageActivityObservable = Mr()), this.pageActivityObservable.subscribe(a), { stop: s };
          }
          navigationObserver = {
            notify: () => {
              this.navigationObservable?.unsubscribe(this.navigationObserver),
                this.visibilitychangeObservable?.unsubscribe(this.visibilitychangeObserver);
              const { stop: e } = this.waitInteraction((e) => {
                (this.eventStartTimeStamp = W()),
                  !e.isActivityNone && e.end && (this.eventEndTimeStamp = e.end.timeStamp);
                let t = [];
                try {
                  t = performance.getEntriesByType('resource');
                } catch (e) {
                  u(e);
                }
                this.fetchObservable?.unsubscribe(this.fetchObserver),
                  this.xhrObservable?.unsubscribe(this.xhrObserver),
                  this.errorObservable?.unsubscribe(this.errorObserver),
                  this.reportObservable?.unsubscribe(this.errorObserver),
                  Se.getAgentConfig().collectCspError && this.cspReportObservable?.unsubscribe(this.errorObserver),
                  (t = t.filter((e) => !Sr(e))),
                  this.isUnloadComplete || this.onLoadSoftNavigation(t);
              });
              this.stopInteraction = e;
            },
          };
          ajaxNotify = (e) => {
            switch (e.state) {
              case 'start':
              case 'error':
              default:
                break;
              case 'end':
                this.ajaxDataList.push(e);
            }
          };
          fetchObserver = { notify: this.ajaxNotify };
          xhrObserver = { notify: this.ajaxNotify };
          visibilitychangeObserver = {
            notify: (e) => {
              'hidden' === e.visibilityState && this.onUnloadHardNavigation();
            },
          };
          errorObserver = {
            notify: (e) => {
              const t = this.errorData.getErrorData(e);
              t && this.errorDataList.push(t);
            },
          };
          removeObserver = () => {
            this.navigationObservable?.unsubscribe(this.navigationObserver),
              this.fetchObservable?.unsubscribe(this.fetchObserver),
              this.xhrObservable?.unsubscribe(this.xhrObserver),
              this.visibilitychangeObservable?.unsubscribe(this.visibilitychangeObserver),
              this.errorObservable?.unsubscribe(this.errorObserver),
              this.reportObservable?.unsubscribe(this.errorObserver),
              Se.getAgentConfig().collectCspError && this.cspReportObservable?.unsubscribe(this.errorObserver),
              this.stopInteraction?.();
          };
          isCompleteLoad = () => {
            if ('timing' in window.performance) {
              if (window.performance.timing.loadEventEnd) return !0;
            } else if (
              performance.getEntriesByType('navigation').length > 0 &&
              performance.getEntriesByType('navigation')[0].loadEventEnd
            )
              return !0;
            return !1;
          };
          startDispatcher() {
            'false' === w(this.isPageLoadCompleteCookieKey) &&
              (this.isCompleteLoad()
                ? this.isUnloadComplete || this.onLoadHardNavigation()
                : ((this.errorObservable = sr()),
                  this.errorObservable.subscribe(this.errorObserver),
                  (this.reportObservable = hr()),
                  this.reportObservable.subscribe(this.errorObserver),
                  Se.getAgentConfig().collectCspError &&
                    ((this.cspReportObservable = pr()), this.cspReportObservable.subscribe(this.errorObserver)),
                  (this.fetchObservable = _t()),
                  this.fetchObservable.subscribe(this.fetchObserver),
                  (this.xhrObservable = Rt()),
                  this.xhrObservable.subscribe(this.xhrObserver),
                  (this.visibilitychangeObservable = Nt()),
                  this.visibilitychangeObservable.subscribe(this.visibilitychangeObserver),
                  (this.navigationObservable = Tr()),
                  this.navigationObservable.subscribe(this.navigationObserver)));
          }
          pauseDispatcher() {}
        };
        var Nr = class extends Yt {
          constructor(e) {
            super(), (this.resourceData = e);
          }
          resourceObserver = {
            notify: (e) => {
              this.storeData(e);
            },
          };
          storeData = (e) => {
            const t = this.resourceData.getSingleResourceData(e);
            t && new Kt().startDataSend(t, Dt.RESOURCE_DISPATCHER);
          };
          startDispatcher() {
            (this.resourceObservable = Ar()), this.resourceObservable.subscribe(this.resourceObserver);
          }
          pauseDispatcher() {
            this.resourceObservable?.unsubscribe(this.resourceObserver);
          }
        };
        let Pr;
        function Ur() {
          return (
            Pr ||
              (Pr = new pt((e) => {
                const t = () => {
                    const t = Se.getPageInfo().pageLocation;
                    Se.setPageInfo(),
                      t !== Se.getPageInfo().pageLocation &&
                        (performance.clearResourceTimings(), e.notify({ state: 'start' }));
                  },
                  { stop: r } = ot(history, 'pushState', { after: t }),
                  { stop: n } = ot(history, 'replaceState', { after: t }),
                  { stop: s } = k(window, 'popstate', t);
                return () => {
                  r(), n(), s();
                };
              })),
            Pr
          );
        }
        var Fr = class extends Yt {
          constructor(e, t) {
            super(),
              (this.isRouterChangeComplete = !1),
              (this.isRouterChangeProgress = !1),
              (this.ajaxDataList = []),
              (this.errorDataList = []),
              (this.resourceData = e),
              (this.errorData = t);
          }
          resetRouterChange = () => {
            (this.dispatcherID = x()),
              (this.isRouterChangeComplete = !1),
              (this.isRouterChangeProgress = !0),
              (this.eventStartTimeStamp = G()),
              Se.setPageActivityStartTime(this.eventStartTimeStamp),
              (this.eventEndTimeStamp = 0),
              (this.ajaxDataList = []),
              (this.resourceEntryArr = []),
              (this.errorDataList = []),
              (this.url = Se.getPageInfo().pageLocation);
          };
          ajaxNotify = (e) => {
            switch (e.state) {
              case 'start':
              case 'error':
              default:
                break;
              case 'end':
                this.ajaxDataList.push(e);
            }
          };
          fetchObserver = { notify: this.ajaxNotify };
          xhrObserver = { notify: this.ajaxNotify };
          removeListenerAll() {
            this.errorObservable?.unsubscribe(this.errorObserver),
              this.fetchObservable?.unsubscribe(this.fetchObserver),
              this.xhrObservable?.unsubscribe(this.xhrObserver),
              this.stopInteraction?.();
          }
          isRouterChangeEnd = () => !this.isRouterChangeComplete;
          onLoadComplete = (e) => {
            if (this.isRouterChangeEnd()) {
              this.eventEndTimeStamp < e && (this.eventEndTimeStamp = e),
                (this.isRouterChangeComplete = !0),
                (this.isRouterChangeProgress = !1),
                this.removeListenerAll();
              const t = this.eventStartTimeStamp;
              0 === this.eventEndTimeStamp && (this.eventEndTimeStamp = G()),
                this.onRouterChangeStoreData(t, this.eventEndTimeStamp, this.url);
            }
          };
          onRouterChangeStoreData = (e, t, r) => {
            const n = this.resourceData.getMultiResourceData(this.resourceEntryArr, this.ajaxDataList);
            this.resourceEntryArr = [];
            const s = ee(r);
            if (s) {
              const i = {
                routerChangeTiming: {
                  isComplete: !this.isRouterChangeProgress,
                  startTimeStamp: e,
                  endTimeStamp: t,
                  loadTime: t - e,
                  pageLocation: r,
                  host: s.host,
                  path: s.pathname,
                  automatedPath: s.automated_pathname,
                  query: s.search,
                  protocol: s.protocol,
                },
                resource: n,
                onError: this.errorDataList,
              };
              new Kt().startDataSend(i, Dt.ROUTE_CHANGE_DISPATCHER);
            }
          };
          waitInteraction(e) {
            let t,
              r,
              n = !1;
            const s = () => {
                (n = !0), gt(t), gt(r), this.pageActivityObservable?.unsubscribe(a);
              },
              i = (t) => {
                let { isActivityNone: r, end: i } = t;
                n || (s(), e({ isActivityNone: r, end: i }));
              };
            r = ft(() => {
              i({ isActivityNone: !0 });
            }, 100);
            const a = {
              notify(e) {
                gt(r), gt(t);
                const n = V();
                e.isAjaxPending ||
                  (t = ft(() => {
                    i({ isActivityNone: !1, end: n });
                  }, 100));
              },
            };
            return (this.pageActivityObservable = Mr()), this.pageActivityObservable.subscribe(a), { stop: s };
          }
          errorObserver = {
            notify: (e) => {
              const t = this.errorData.getErrorData(e);
              t && this.errorDataList.push(t);
            },
          };
          routerChangeObserver = {
            notify: () => {
              if (this.isRouterChangeProgress) {
                this.removeListenerAll();
                const e = this.eventStartTimeStamp;
                0 === this.eventEndTimeStamp && (this.eventEndTimeStamp = G()),
                  this.onRouterChangeStoreData(e, this.eventEndTimeStamp, this.url);
              }
              this.resetRouterChange(),
                (this.errorObservable = sr()),
                this.errorObservable.subscribe(this.errorObserver),
                (this.fetchObservable = _t()),
                this.fetchObservable.subscribe(this.fetchObserver),
                (this.xhrObservable = Rt()),
                this.xhrObservable.subscribe(this.xhrObserver);
              const { stop: e } = this.waitInteraction((e) => {
                !e.isActivityNone && e.end ? this.onLoadComplete(e.end.timeStamp) : this.onLoadComplete(0);
              });
              this.stopInteraction = e;
            },
          };
          startDispatcher() {
            (this.routerChangeObservable = Ur()), this.routerChangeObservable.subscribe(this.routerChangeObserver);
          }
          pauseDispatcher = () => {
            this.removeListenerAll(), this.routerChangeObservable?.unsubscribe(this.routerChangeObserver);
          };
        };
        function zr() {}
        const Br = (t) => {
          let r = zr,
            n = [];
          function s() {
            r(), t(n), (n = []);
          }
          return {
            addMutaions: (t) => {
              0 === n.length &&
                (r = ((t, r) => {
                  if (e()) {
                    const e = window.requestIdleCallback(t, r);
                    return () => window.cancelIdleCallback(e);
                  }
                  const n = requestAnimationFrame(t);
                  return () => cancelAnimationFrame(n);
                })(s, { timeout: 100 })),
                n.push(...t);
            },
            flush: s,
            stop: () => {
              r();
            },
          };
        };
        var Hr,
          jr = Object.defineProperty,
          Wr = (e, t, r) => (
            ((e, t, r) => {
              t in e ? jr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
            })(e, 'symbol' != typeof t ? t + '' : t, r),
            r
          ),
          Zr = Object.defineProperty,
          Gr = (e, t, r) => (
            ((e, t, r) => {
              t in e ? Zr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
            })(e, 'symbol' != typeof t ? t + '' : t, r),
            r
          ),
          Xr = ((e) => (
            (e[(e.Document = 0)] = 'Document'),
            (e[(e.DocumentType = 1)] = 'DocumentType'),
            (e[(e.Element = 2)] = 'Element'),
            (e[(e.Text = 3)] = 'Text'),
            (e[(e.CDATA = 4)] = 'CDATA'),
            (e[(e.Comment = 5)] = 'Comment'),
            e
          ))(Xr || {});
        function Vr(e) {
          const t = null == e ? void 0 : e.host;
          return Boolean((null == t ? void 0 : t.shadowRoot) === e);
        }
        function qr(e) {
          return '[object ShadowRoot]' === Object.prototype.toString.call(e);
        }
        function Kr(e) {
          try {
            const r = e.rules || e.cssRules;
            return r
              ? ((t = Array.from(r, Yr).join('')).includes(' background-clip: text;') &&
                  !t.includes(' -webkit-background-clip: text;') &&
                  (t = t.replace(
                    /\sbackground-clip:\s*text;/g,
                    ' -webkit-background-clip: text; background-clip: text;'
                  )),
                t)
              : null;
          } catch (e) {
            return null;
          }
          var t;
        }
        function Yr(e) {
          let t;
          if (
            (function (e) {
              return 'styleSheet' in e;
            })(e)
          )
            try {
              t =
                Kr(e.styleSheet) ||
                (function (e) {
                  const { cssText: t } = e;
                  if (t.split('"').length < 3) return t;
                  const r = ['@import', `url(${JSON.stringify(e.href)})`];
                  return (
                    '' === e.layerName ? r.push('layer') : e.layerName && r.push(`layer(${e.layerName})`),
                    e.supportsText && r.push(`supports(${e.supportsText})`),
                    e.media.length && r.push(e.media.mediaText),
                    r.join(' ') + ';'
                  );
                })(e);
            } catch (e) {}
          else if (
            (function (e) {
              return 'selectorText' in e;
            })(e) &&
            e.selectorText.includes(':')
          )
            return (function (e) {
              const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
              return e.replace(t, '$1\\$2');
            })(e.cssText);
          return t || e.cssText;
        }
        class Jr {
          constructor() {
            Gr(this, 'idNodeMap', new Map()), Gr(this, 'nodeMetaMap', new WeakMap());
          }
          getId(e) {
            var t;
            if (!e) return -1;
            return (null == (t = this.getMeta(e)) ? void 0 : t.id) ?? -1;
          }
          getNode(e) {
            return this.idNodeMap.get(e) || null;
          }
          getIds() {
            return Array.from(this.idNodeMap.keys());
          }
          getMeta(e) {
            return this.nodeMetaMap.get(e) || null;
          }
          removeNodeFromMap(e) {
            const t = this.getId(e);
            this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach((e) => this.removeNodeFromMap(e));
          }
          has(e) {
            return this.idNodeMap.has(e);
          }
          hasNode(e) {
            return this.nodeMetaMap.has(e);
          }
          add(e, t) {
            const r = t.id;
            this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, t);
          }
          replace(e, t) {
            const r = this.getNode(e);
            if (r) {
              const e = this.nodeMetaMap.get(r);
              e && this.nodeMetaMap.set(t, e);
            }
            this.idNodeMap.set(e, t);
          }
          reset() {
            (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
          }
        }
        function $r(e) {
          let { element: t, maskInputOptions: r, tagName: n, type: s, value: i, maskInputFn: a } = e,
            o = i || '';
          const c = s && Qr(s);
          return (r[n.toLowerCase()] || (c && r[c])) && (o = a ? a(o, t) : '*'.repeat(o.length)), o;
        }
        function Qr(e) {
          return e.toLowerCase();
        }
        const en = '__rrweb_original__';
        function tn(e) {
          const t = e.type;
          return e.hasAttribute('data-rr-is-password') ? 'password' : t ? Qr(t) : null;
        }
        function rn(e, t) {
          let r;
          try {
            r = new URL(e, t ?? window.location.href);
          } catch (e) {
            return null;
          }
          const n = r.pathname.match(/\.([0-9a-z]+)(?:$)/i);
          return (null == n ? void 0 : n[1]) ?? null;
        }
        let nn = 1;
        const sn = new RegExp('[^a-z0-9-_:]');
        function an() {
          return nn++;
        }
        let on, cn;
        const ln = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
          un = /^(?:[a-z+]+:)?\/\//i,
          dn = /^www\..*/i,
          hn = /^(data:)([^,]*),(.*)/i;
        function pn(e, t) {
          return (e || '').replace(ln, (e, r, n, s, i, a) => {
            const o = n || i || a,
              c = r || s || '';
            if (!o) return e;
            if (un.test(o) || dn.test(o)) return `url(${c}${o}${c})`;
            if (hn.test(o)) return `url(${c}${o}${c})`;
            if ('/' === o[0])
              return `url(${c}${
                (function (e) {
                  let t = '';
                  return (
                    (t = e.indexOf('//') > -1 ? e.split('/').slice(0, 3).join('/') : e.split('/')[0]),
                    (t = t.split('?')[0]),
                    t
                  );
                })(t) + o
              }${c})`;
            const l = t.split('/'),
              u = o.split('/');
            l.pop();
            for (const e of u) '.' !== e && ('..' === e ? l.pop() : l.push(e));
            return `url(${c}${l.join('/')}${c})`;
          });
        }
        const mn = /^[^ \t\n\r\u000c]+/,
          fn = /^[, \t\n\r\u000c]+/;
        const gn = new WeakMap();
        function bn(e, t) {
          return t && '' !== t.trim() ? vn(e, t) : t;
        }
        function yn(e) {
          return Boolean('svg' === e.tagName || e.ownerSVGElement);
        }
        function vn(e, t) {
          let r = gn.get(e);
          if ((r || ((r = e.createElement('a')), gn.set(e, r)), t)) {
            if (t.startsWith('blob:') || t.startsWith('data:')) return t;
          } else t = '';
          return r.setAttribute('href', t), r.href;
        }
        function Sn(e, t, r, n) {
          return n
            ? 'src' === r || ('href' === r && ('use' !== t || '#' !== n[0])) || ('xlink:href' === r && '#' !== n[0])
              ? bn(e, n)
              : 'background' !== r || ('table' !== t && 'td' !== t && 'th' !== t)
              ? 'srcset' === r
                ? (function (e, t) {
                    if ('' === t.trim()) return t;
                    let r = 0;
                    function n(e) {
                      let n;
                      const s = e.exec(t.substring(r));
                      return s ? ((n = s[0]), (r += n.length), n) : '';
                    }
                    const s = [];
                    for (; n(fn), !(r >= t.length); ) {
                      let i = n(mn);
                      if (',' === i.slice(-1)) (i = bn(e, i.substring(0, i.length - 1))), s.push(i);
                      else {
                        let n = '';
                        i = bn(e, i);
                        let a = !1;
                        for (;;) {
                          const e = t.charAt(r);
                          if ('' === e) {
                            s.push((i + n).trim());
                            break;
                          }
                          if (a) ')' === e && (a = !1);
                          else {
                            if (',' === e) {
                              (r += 1), s.push((i + n).trim());
                              break;
                            }
                            '(' === e && (a = !0);
                          }
                          (n += e), (r += 1);
                        }
                      }
                    }
                    return s.join(', ');
                  })(e, n)
                : 'style' === r
                ? pn(n, vn(e))
                : 'object' === t && 'data' === r
                ? bn(e, n)
                : n
              : bn(e, n)
            : n;
        }
        function wn(e, t, r) {
          return ('video' === e || 'audio' === e) && 'autoplay' === t;
        }
        function In(e, t, r) {
          if (!e) return !1;
          if (e.nodeType !== e.ELEMENT_NODE) return !!r && In(e.parentNode, t, r);
          for (let r = e.classList.length; r--; ) {
            const n = e.classList[r];
            if (t.test(n)) return !0;
          }
          return !!r && In(e.parentNode, t, r);
        }
        function _n(e, t, r, n) {
          try {
            const s = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
            if (null === s) return !1;
            if ('string' == typeof t) {
              if (n) {
                if (s.closest(`.${t}`)) return !0;
              } else if (s.classList.contains(t)) return !0;
            } else if (In(s, t, n)) return !0;
            if (r)
              if (n) {
                if (s.closest(r)) return !0;
              } else if (s.matches(r)) return !0;
          } catch (e) {}
          return !1;
        }
        function Cn(e, t) {
          const {
              doc: r,
              mirror: n,
              blockClass: s,
              blockSelector: i,
              needsMask: a,
              inlineStylesheet: o,
              maskInputOptions: c = {},
              maskTextFn: l,
              maskInputFn: u,
              dataURLOptions: d = {},
              inlineImages: h,
              recordCanvas: p,
              keepIframeSrcFn: m,
              newlyAddedElement: f = !1,
            } = t,
            g = (function (e, t) {
              if (!t.hasNode(e)) return;
              const r = t.getId(e);
              return 1 === r ? void 0 : r;
            })(r, n);
          switch (e.nodeType) {
            case e.DOCUMENT_NODE:
              return 'CSS1Compat' !== e.compatMode
                ? { type: Xr.Document, childNodes: [], compatMode: e.compatMode }
                : { type: Xr.Document, childNodes: [] };
            case e.DOCUMENT_TYPE_NODE:
              return { type: Xr.DocumentType, name: e.name, publicId: e.publicId, systemId: e.systemId, rootId: g };
            case e.ELEMENT_NODE:
              return (function (e, t) {
                const {
                    doc: r,
                    blockClass: n,
                    blockSelector: s,
                    inlineStylesheet: i,
                    maskInputOptions: a = {},
                    maskInputFn: o,
                    dataURLOptions: c = {},
                    inlineImages: l,
                    recordCanvas: u,
                    keepIframeSrcFn: d,
                    newlyAddedElement: h = !1,
                    rootId: p,
                  } = t,
                  m = (function (e, t, r) {
                    try {
                      if ('string' == typeof t) {
                        if (e.classList.contains(t)) return !0;
                      } else
                        for (let r = e.classList.length; r--; ) {
                          const n = e.classList[r];
                          if (t.test(n)) return !0;
                        }
                      if (r) return e.matches(r);
                    } catch (e) {}
                    return !1;
                  })(e, n, s),
                  f = (function (e) {
                    if (e instanceof HTMLFormElement) return 'form';
                    const t = Qr(e.tagName);
                    return sn.test(t) ? 'div' : t;
                  })(e);
                let g = {};
                const b = e.attributes.length;
                for (let t = 0; t < b; t++) {
                  const n = e.attributes[t];
                  wn(f, n.name, n.value) || (g[n.name] = Sn(r, f, Qr(n.name), n.value));
                }
                if ('link' === f && i) {
                  const t = Array.from(r.styleSheets).find((t) => t.href === e.href);
                  let n = null;
                  t && (n = Kr(t)), n && (delete g.rel, delete g.href, (g._cssText = pn(n, t.href)));
                }
                if ('style' === f && e.sheet && !(e.innerText || e.textContent || '').trim().length) {
                  const t = Kr(e.sheet);
                  t && (g._cssText = pn(t, vn(r)));
                }
                if ('input' === f || 'textarea' === f || 'select' === f) {
                  const t = e.value,
                    r = e.checked;
                  'radio' !== g.type && 'checkbox' !== g.type && 'submit' !== g.type && 'button' !== g.type && t
                    ? (g.value = $r({
                        element: e,
                        type: tn(e),
                        tagName: f,
                        value: t,
                        maskInputOptions: a,
                        maskInputFn: o,
                      }))
                    : r && (g.checked = r);
                }
                'option' === f && (e.selected && !a.select ? (g.selected = !0) : delete g.selected);
                if ('canvas' === f && u)
                  if ('2d' === e.__context)
                    (function (e) {
                      const t = e.getContext('2d');
                      if (!t) return !0;
                      for (let r = 0; r < e.width; r += 50)
                        for (let n = 0; n < e.height; n += 50) {
                          const s = t.getImageData,
                            i = en in s ? s[en] : s;
                          if (
                            new Uint32Array(
                              i.call(t, r, n, Math.min(50, e.width - r), Math.min(50, e.height - n)).data.buffer
                            ).some((e) => 0 !== e)
                          )
                            return !1;
                        }
                      return !0;
                    })(e) || (g.rr_dataURL = e.toDataURL(c.type, c.quality));
                  else if (!('__context' in e)) {
                    const t = e.toDataURL(c.type, c.quality),
                      n = r.createElement('canvas');
                    (n.width = e.width), (n.height = e.height);
                    t !== n.toDataURL(c.type, c.quality) && (g.rr_dataURL = t);
                  }
                if ('img' === f && l) {
                  on || ((on = r.createElement('canvas')), (cn = on.getContext('2d')));
                  const t = e,
                    n = t.currentSrc || t.getAttribute('src') || '<unknown-src>',
                    s = t.crossOrigin,
                    i = () => {
                      t.removeEventListener('load', i);
                      try {
                        (on.width = t.naturalWidth),
                          (on.height = t.naturalHeight),
                          cn.drawImage(t, 0, 0),
                          (g.rr_dataURL = on.toDataURL(c.type, c.quality));
                      } catch (e) {
                        if ('anonymous' !== t.crossOrigin)
                          return (
                            (t.crossOrigin = 'anonymous'),
                            void (t.complete && 0 !== t.naturalWidth ? i() : t.addEventListener('load', i))
                          );
                        console.warn(`Cannot inline img src=${n}! Error: ${e}`);
                      }
                      'anonymous' === t.crossOrigin && (s ? (g.crossOrigin = s) : t.removeAttribute('crossorigin'));
                    };
                  t.complete && 0 !== t.naturalWidth ? i() : t.addEventListener('load', i);
                }
                if ('audio' === f || 'video' === f) {
                  const t = g;
                  (t.rr_mediaState = e.paused ? 'paused' : 'played'),
                    (t.rr_mediaCurrentTime = e.currentTime),
                    (t.rr_mediaPlaybackRate = e.playbackRate),
                    (t.rr_mediaMuted = e.muted),
                    (t.rr_mediaLoop = e.loop),
                    (t.rr_mediaVolume = e.volume);
                }
                h || (e.scrollLeft && (g.rr_scrollLeft = e.scrollLeft), e.scrollTop && (g.rr_scrollTop = e.scrollTop));
                if (m) {
                  const { width: t, height: r } = e.getBoundingClientRect();
                  g = { class: g.class, rr_width: `${t}px`, rr_height: `${r}px` };
                }
                'iframe' !== f || d(g.src) || (e.contentDocument || (g.rr_src = g.src), delete g.src);
                let y;
                try {
                  customElements.get(f) && (y = !0);
                } catch (e) {}
                return {
                  type: Xr.Element,
                  tagName: f,
                  attributes: g,
                  childNodes: [],
                  isSVG: yn(e) || void 0,
                  needBlock: m,
                  rootId: p,
                  isCustom: y,
                };
              })(e, {
                doc: r,
                blockClass: s,
                blockSelector: i,
                inlineStylesheet: o,
                maskInputOptions: c,
                maskInputFn: u,
                dataURLOptions: d,
                inlineImages: h,
                recordCanvas: p,
                keepIframeSrcFn: m,
                newlyAddedElement: f,
                rootId: g,
              });
            case e.TEXT_NODE:
              return (function (e, t) {
                var r;
                const { needsMask: n, maskTextFn: s, rootId: i } = t,
                  a = e.parentNode && e.parentNode.tagName;
                let o = e.textContent;
                const c = 'STYLE' === a || void 0,
                  l = 'SCRIPT' === a || void 0;
                if (c && o) {
                  try {
                    e.nextSibling ||
                      e.previousSibling ||
                      ((null == (r = e.parentNode.sheet) ? void 0 : r.cssRules) && (o = Kr(e.parentNode.sheet)));
                  } catch (t) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e);
                  }
                  o = pn(o, vn(t.doc));
                }
                l && (o = 'SCRIPT_PLACEHOLDER');
                !c && !l && o && n && (o = s ? s(o, e.parentElement) : o.replace(/[\S]/g, '*'));
                return { type: Xr.Text, textContent: o || '', isStyle: c, rootId: i };
              })(e, { doc: r, needsMask: a, maskTextFn: l, rootId: g });
            case e.CDATA_SECTION_NODE:
              return { type: Xr.CDATA, textContent: '', rootId: g };
            case e.COMMENT_NODE:
              return { type: Xr.Comment, textContent: e.textContent || '', rootId: g };
            default:
              return !1;
          }
        }
        function En(e) {
          return null == e ? '' : e.toLowerCase();
        }
        function Tn(e, t) {
          const {
            doc: r,
            mirror: n,
            blockClass: s,
            blockSelector: i,
            maskTextClass: a,
            maskTextSelector: o,
            skipChild: c = !1,
            inlineStylesheet: l = !0,
            maskInputOptions: u = {},
            maskTextFn: d,
            maskInputFn: h,
            slimDOMOptions: p,
            dataURLOptions: m = {},
            inlineImages: f = !1,
            recordCanvas: g = !1,
            onSerialize: b,
            onIframeLoad: y,
            iframeLoadTimeout: v = 5e3,
            onStylesheetLoad: S,
            stylesheetLoadTimeout: w = 5e3,
            keepIframeSrcFn: I = () => !1,
            newlyAddedElement: _ = !1,
          } = t;
          let { needsMask: C } = t,
            { preserveWhiteSpace: E = !0 } = t;
          if (!C && e.childNodes) {
            C = _n(e, a, o, void 0 === C);
          }
          const T = Cn(e, {
            doc: r,
            mirror: n,
            blockClass: s,
            blockSelector: i,
            needsMask: C,
            inlineStylesheet: l,
            maskInputOptions: u,
            maskTextFn: d,
            maskInputFn: h,
            dataURLOptions: m,
            inlineImages: f,
            recordCanvas: g,
            keepIframeSrcFn: I,
            newlyAddedElement: _,
          });
          if (!T) return console.warn(e, 'not serialized'), null;
          let x;
          x = n.hasNode(e)
            ? n.getId(e)
            : !(function (e, t) {
                if (t.comment && e.type === Xr.Comment) return !0;
                if (e.type === Xr.Element) {
                  if (
                    t.script &&
                    ('script' === e.tagName ||
                      ('link' === e.tagName &&
                        ('preload' === e.attributes.rel || 'modulepreload' === e.attributes.rel) &&
                        'script' === e.attributes.as) ||
                      ('link' === e.tagName &&
                        'prefetch' === e.attributes.rel &&
                        'string' == typeof e.attributes.href &&
                        'js' === rn(e.attributes.href)))
                  )
                    return !0;
                  if (
                    t.headFavicon &&
                    (('link' === e.tagName && 'shortcut icon' === e.attributes.rel) ||
                      ('meta' === e.tagName &&
                        (En(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                          'application-name' === En(e.attributes.name) ||
                          'icon' === En(e.attributes.rel) ||
                          'apple-touch-icon' === En(e.attributes.rel) ||
                          'shortcut icon' === En(e.attributes.rel))))
                  )
                    return !0;
                  if ('meta' === e.tagName) {
                    if (t.headMetaDescKeywords && En(e.attributes.name).match(/^description|keywords$/)) return !0;
                    if (
                      t.headMetaSocial &&
                      (En(e.attributes.property).match(/^(og|twitter|fb):/) ||
                        En(e.attributes.name).match(/^(og|twitter):/) ||
                        'pinterest' === En(e.attributes.name))
                    )
                      return !0;
                    if (
                      t.headMetaRobots &&
                      ('robots' === En(e.attributes.name) ||
                        'googlebot' === En(e.attributes.name) ||
                        'bingbot' === En(e.attributes.name))
                    )
                      return !0;
                    if (t.headMetaHttpEquiv && void 0 !== e.attributes['http-equiv']) return !0;
                    if (
                      t.headMetaAuthorship &&
                      ('author' === En(e.attributes.name) ||
                        'generator' === En(e.attributes.name) ||
                        'framework' === En(e.attributes.name) ||
                        'publisher' === En(e.attributes.name) ||
                        'progid' === En(e.attributes.name) ||
                        En(e.attributes.property).match(/^article:/) ||
                        En(e.attributes.property).match(/^product:/))
                    )
                      return !0;
                    if (
                      t.headMetaVerification &&
                      ('google-site-verification' === En(e.attributes.name) ||
                        'yandex-verification' === En(e.attributes.name) ||
                        'csrf-token' === En(e.attributes.name) ||
                        'p:domain_verify' === En(e.attributes.name) ||
                        'verify-v1' === En(e.attributes.name) ||
                        'verification' === En(e.attributes.name) ||
                        'shopify-checkout-api-token' === En(e.attributes.name))
                    )
                      return !0;
                  }
                }
                return !1;
              })(T, p) &&
              (E || T.type !== Xr.Text || T.isStyle || T.textContent.replace(/^\s+|\s+$/gm, '').length)
            ? an()
            : -2;
          const A = Object.assign(T, { id: x });
          if ((n.add(e, A), -2 === x)) return null;
          b && b(e);
          let k = !c;
          if (A.type === Xr.Element) {
            (k = k && !A.needBlock), delete A.needBlock;
            const t = e.shadowRoot;
            t && qr(t) && (A.isShadowHost = !0);
          }
          if ((A.type === Xr.Document || A.type === Xr.Element) && k) {
            p.headWhitespace && A.type === Xr.Element && 'head' === A.tagName && (E = !1);
            const t = {
              doc: r,
              mirror: n,
              blockClass: s,
              blockSelector: i,
              needsMask: C,
              maskTextClass: a,
              maskTextSelector: o,
              skipChild: c,
              inlineStylesheet: l,
              maskInputOptions: u,
              maskTextFn: d,
              maskInputFn: h,
              slimDOMOptions: p,
              dataURLOptions: m,
              inlineImages: f,
              recordCanvas: g,
              preserveWhiteSpace: E,
              onSerialize: b,
              onIframeLoad: y,
              iframeLoadTimeout: v,
              onStylesheetLoad: S,
              stylesheetLoadTimeout: w,
              keepIframeSrcFn: I,
            };
            if (A.type === Xr.Element && 'textarea' === A.tagName && void 0 !== A.attributes.value);
            else
              for (const r of Array.from(e.childNodes)) {
                const e = Tn(r, t);
                e && A.childNodes.push(e);
              }
            if (
              (function (e) {
                return e.nodeType === e.ELEMENT_NODE;
              })(e) &&
              e.shadowRoot
            )
              for (const r of Array.from(e.shadowRoot.childNodes)) {
                const n = Tn(r, t);
                n && (qr(e.shadowRoot) && (n.isShadow = !0), A.childNodes.push(n));
              }
          }
          return (
            e.parentNode && Vr(e.parentNode) && qr(e.parentNode) && (A.isShadow = !0),
            A.type === Xr.Element &&
              'iframe' === A.tagName &&
              (function (e, t, r) {
                const n = e.contentWindow;
                if (!n) return;
                let s,
                  i = !1;
                try {
                  s = n.document.readyState;
                } catch (e) {
                  return;
                }
                if ('complete' !== s) {
                  const n = ft(() => {
                    i || (t(), (i = !0));
                  }, r);
                  return void e.addEventListener('load', () => {
                    gt(n), (i = !0), t();
                  });
                }
                const a = 'about:blank';
                if (n.location.href !== a || e.src === a || '' === e.src)
                  return ft(t, 0), e.addEventListener('load', t);
                e.addEventListener('load', t);
              })(
                e,
                () => {
                  const t = e.contentDocument;
                  if (t && y) {
                    const r = Tn(t, {
                      doc: t,
                      mirror: n,
                      blockClass: s,
                      blockSelector: i,
                      needsMask: C,
                      maskTextClass: a,
                      maskTextSelector: o,
                      skipChild: !1,
                      inlineStylesheet: l,
                      maskInputOptions: u,
                      maskTextFn: d,
                      maskInputFn: h,
                      slimDOMOptions: p,
                      dataURLOptions: m,
                      inlineImages: f,
                      recordCanvas: g,
                      preserveWhiteSpace: E,
                      onSerialize: b,
                      onIframeLoad: y,
                      iframeLoadTimeout: v,
                      onStylesheetLoad: S,
                      stylesheetLoadTimeout: w,
                      keepIframeSrcFn: I,
                    });
                    r && y(e, r);
                  }
                },
                v
              ),
            A.type === Xr.Element &&
              'link' === A.tagName &&
              'string' == typeof A.attributes.rel &&
              ('stylesheet' === A.attributes.rel ||
                ('preload' === A.attributes.rel &&
                  'string' == typeof A.attributes.href &&
                  'css' === rn(A.attributes.href))) &&
              (function (e, t, r) {
                let n,
                  s = !1;
                try {
                  n = e.sheet;
                } catch (e) {
                  return;
                }
                if (n) return;
                const i = ft(() => {
                  s || (t(), (s = !0));
                }, r);
                e.addEventListener('load', () => {
                  gt(i), (s = !0), t();
                });
              })(
                e,
                () => {
                  if (S) {
                    const t = Tn(e, {
                      doc: r,
                      mirror: n,
                      blockClass: s,
                      blockSelector: i,
                      needsMask: C,
                      maskTextClass: a,
                      maskTextSelector: o,
                      skipChild: !1,
                      inlineStylesheet: l,
                      maskInputOptions: u,
                      maskTextFn: d,
                      maskInputFn: h,
                      slimDOMOptions: p,
                      dataURLOptions: m,
                      inlineImages: f,
                      recordCanvas: g,
                      preserveWhiteSpace: E,
                      onSerialize: b,
                      onIframeLoad: y,
                      iframeLoadTimeout: v,
                      onStylesheetLoad: S,
                      stylesheetLoadTimeout: w,
                      keepIframeSrcFn: I,
                    });
                    t && S(e, t);
                  }
                },
                w
              ),
            A
          );
        }
        function xn(e, t, r) {
          void 0 === r && (r = document);
          const n = { capture: !0, passive: !0 };
          return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n);
        }
        const An =
          'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.';
        let kn = {
          map: {},
          getId() {
            return console.error(An), -1;
          },
          getNode() {
            return console.error(An), null;
          },
          removeNodeFromMap() {
            console.error(An);
          },
          has() {
            return console.error(An), !1;
          },
          reset() {
            console.error(An);
          },
        };
        function Rn(e, t, r) {
          void 0 === r && (r = {});
          let n = null,
            s = 0;
          return function () {
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
            const c = Date.now();
            s || !1 !== r.leading || (s = c);
            const l = t - (c - s),
              u = this;
            l <= 0 || l > t
              ? (n && (gt(n), (n = null)), (s = c), e.apply(u, a))
              : n ||
                !1 === r.trailing ||
                (n = ft(() => {
                  (s = !1 === r.leading ? 0 : Date.now()), (n = null), e.apply(u, a);
                }, l));
          };
        }
        function Dn(e, t, r, n, s) {
          void 0 === s && (s = window);
          const i = s.Object.getOwnPropertyDescriptor(e, t);
          return (
            s.Object.defineProperty(
              e,
              t,
              n
                ? r
                : {
                    set(e) {
                      ft(() => {
                        r.set.call(this, e);
                      }, 0),
                        i && i.set && i.set.call(this, e);
                    },
                  }
            ),
            () => Dn(e, t, i || {}, !0)
          );
        }
        function On(e, t, r) {
          try {
            if (!(t in e)) return () => {};
            const n = e[t],
              s = r(n);
            return (
              'function' == typeof s &&
                ((s.prototype = s.prototype || {}),
                Object.defineProperties(s, { __rrweb_original__: { enumerable: !1, value: n } })),
              (e[t] = s),
              () => {
                e[t] = n;
              }
            );
          } catch {
            return () => {};
          }
        }
        'undefined' != typeof window &&
          window.Proxy &&
          window.Reflect &&
          (kn = new Proxy(kn, {
            get(e, t, r) {
              return 'map' === t && console.error(An), Reflect.get(e, t, r);
            },
          }));
        let Mn = Date.now;
        function Ln(e) {
          var t, r, n, s, i, a;
          const o = e.document;
          return {
            left: o.scrollingElement
              ? o.scrollingElement.scrollLeft
              : void 0 !== e.pageXOffset
              ? e.pageXOffset
              : (null == o ? void 0 : o.documentElement.scrollLeft) ||
                (null == (r = null == (t = null == o ? void 0 : o.body) ? void 0 : t.parentElement)
                  ? void 0
                  : r.scrollLeft) ||
                (null == (n = null == o ? void 0 : o.body) ? void 0 : n.scrollLeft) ||
                0,
            top: o.scrollingElement
              ? o.scrollingElement.scrollTop
              : void 0 !== e.pageYOffset
              ? e.pageYOffset
              : (null == o ? void 0 : o.documentElement.scrollTop) ||
                (null == (i = null == (s = null == o ? void 0 : o.body) ? void 0 : s.parentElement)
                  ? void 0
                  : i.scrollTop) ||
                (null == (a = null == o ? void 0 : o.body) ? void 0 : a.scrollTop) ||
                0,
          };
        }
        function Nn() {
          return (
            window.innerHeight ||
            (document.documentElement && document.documentElement.clientHeight) ||
            (document.body && document.body.clientHeight)
          );
        }
        function Pn() {
          return (
            window.innerWidth ||
            (document.documentElement && document.documentElement.clientWidth) ||
            (document.body && document.body.clientWidth)
          );
        }
        function Un(e) {
          if (!e) return null;
          return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        }
        function Fn(e, t, r, n) {
          if (!e) return !1;
          const s = Un(e);
          if (!s) return !1;
          try {
            if ('string' == typeof t) {
              if (s.classList.contains(t)) return !0;
              if (n && null !== s.closest('.' + t)) return !0;
            } else if (In(s, t, n)) return !0;
          } catch (e) {}
          if (r) {
            if (s.matches(r)) return !0;
            if (n && null !== s.closest(r)) return !0;
          }
          return !1;
        }
        function zn(e, t, r) {
          return !('TITLE' !== e.tagName || !r.headTitleMutations) || -2 === t.getId(e);
        }
        function Bn(e, t) {
          if (Vr(e)) return !1;
          const r = t.getId(e);
          return (
            !t.has(r) ||
            ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || Bn(e.parentNode, t)))
          );
        }
        function Hn(e) {
          return Boolean(e.changedTouches);
        }
        function jn(e, t) {
          return Boolean('IFRAME' === e.nodeName && t.getMeta(e));
        }
        function Wn(e, t) {
          return Boolean(
            'LINK' === e.nodeName &&
              e.nodeType === e.ELEMENT_NODE &&
              e.getAttribute &&
              'stylesheet' === e.getAttribute('rel') &&
              t.getMeta(e)
          );
        }
        function Zn(e) {
          return Boolean(null == e ? void 0 : e.shadowRoot);
        }
        /[1-9][0-9]{12}/.test(Date.now().toString()) || (Mn = () => new Date().getTime());
        class Gn {
          constructor() {
            Wr(this, 'id', 1), Wr(this, 'styleIDMap', new WeakMap()), Wr(this, 'idStyleMap', new Map());
          }
          getId(e) {
            return this.styleIDMap.get(e) ?? -1;
          }
          has(e) {
            return this.styleIDMap.has(e);
          }
          add(e, t) {
            if (this.has(e)) return this.getId(e);
            let r;
            return (r = void 0 === t ? this.id++ : t), this.styleIDMap.set(e, r), this.idStyleMap.set(r, e), r;
          }
          getStyle(e) {
            return this.idStyleMap.get(e) || null;
          }
          reset() {
            (this.styleIDMap = new WeakMap()), (this.idStyleMap = new Map()), (this.id = 1);
          }
          generateId() {
            return this.id++;
          }
        }
        function Xn(e) {
          var t, r;
          let n = null;
          return (
            (null == (r = null == (t = e.getRootNode) ? void 0 : t.call(e)) ? void 0 : r.nodeType) ===
              Node.DOCUMENT_FRAGMENT_NODE &&
              e.getRootNode().host &&
              (n = e.getRootNode().host),
            n
          );
        }
        function Vn(e) {
          const t = e.ownerDocument;
          if (!t) return !1;
          const r = (function (e) {
            let t,
              r = e;
            for (; (t = Xn(r)); ) r = t;
            return r;
          })(e);
          return t.contains(r);
        }
        function qn(e) {
          const t = e.ownerDocument;
          return !!t && (t.contains(e) || Vn(e));
        }
        var Kn = ((e) => (
            (e[(e.DomContentLoaded = 0)] = 'DomContentLoaded'),
            (e[(e.Load = 1)] = 'Load'),
            (e[(e.FullSnapshot = 2)] = 'FullSnapshot'),
            (e[(e.IncrementalSnapshot = 3)] = 'IncrementalSnapshot'),
            (e[(e.Meta = 4)] = 'Meta'),
            (e[(e.Custom = 5)] = 'Custom'),
            (e[(e.Plugin = 6)] = 'Plugin'),
            e
          ))(Kn || {}),
          Yn = ((e) => (
            (e[(e.Mutation = 0)] = 'Mutation'),
            (e[(e.MouseMove = 1)] = 'MouseMove'),
            (e[(e.MouseInteraction = 2)] = 'MouseInteraction'),
            (e[(e.Scroll = 3)] = 'Scroll'),
            (e[(e.ViewportResize = 4)] = 'ViewportResize'),
            (e[(e.Input = 5)] = 'Input'),
            (e[(e.TouchMove = 6)] = 'TouchMove'),
            (e[(e.MediaInteraction = 7)] = 'MediaInteraction'),
            (e[(e.StyleSheetRule = 8)] = 'StyleSheetRule'),
            (e[(e.CanvasMutation = 9)] = 'CanvasMutation'),
            (e[(e.Font = 10)] = 'Font'),
            (e[(e.Log = 11)] = 'Log'),
            (e[(e.Drag = 12)] = 'Drag'),
            (e[(e.StyleDeclaration = 13)] = 'StyleDeclaration'),
            (e[(e.Selection = 14)] = 'Selection'),
            (e[(e.AdoptedStyleSheet = 15)] = 'AdoptedStyleSheet'),
            (e[(e.CustomElement = 16)] = 'CustomElement'),
            e
          ))(Yn || {}),
          Jn = ((e) => (
            (e[(e.MouseUp = 0)] = 'MouseUp'),
            (e[(e.MouseDown = 1)] = 'MouseDown'),
            (e[(e.Click = 2)] = 'Click'),
            (e[(e.ContextMenu = 3)] = 'ContextMenu'),
            (e[(e.DblClick = 4)] = 'DblClick'),
            (e[(e.Focus = 5)] = 'Focus'),
            (e[(e.Blur = 6)] = 'Blur'),
            (e[(e.TouchStart = 7)] = 'TouchStart'),
            (e[(e.TouchMove_Departed = 8)] = 'TouchMove_Departed'),
            (e[(e.TouchEnd = 9)] = 'TouchEnd'),
            (e[(e.TouchCancel = 10)] = 'TouchCancel'),
            e
          ))(Jn || {}),
          $n = ((e) => ((e[(e.Mouse = 0)] = 'Mouse'), (e[(e.Pen = 1)] = 'Pen'), (e[(e.Touch = 2)] = 'Touch'), e))(
            $n || {}
          ),
          Qn = ((e) => ((e[(e['2D'] = 0)] = '2D'), (e[(e.WebGL = 1)] = 'WebGL'), (e[(e.WebGL2 = 2)] = 'WebGL2'), e))(
            Qn || {}
          ),
          es = ((e) => (
            (e[(e.Play = 0)] = 'Play'),
            (e[(e.Pause = 1)] = 'Pause'),
            (e[(e.Seeked = 2)] = 'Seeked'),
            (e[(e.VolumeChange = 3)] = 'VolumeChange'),
            (e[(e.RateChange = 4)] = 'RateChange'),
            e
          ))(es || {});
        function ts(e) {
          return '__ln' in e;
        }
        class rs {
          constructor() {
            Wr(this, 'length', 0), Wr(this, 'head', null), Wr(this, 'tail', null);
          }
          get(e) {
            if (e >= this.length) throw new Error('Position outside of list range');
            let t = this.head;
            for (let r = 0; r < e; r++) t = (null == t ? void 0 : t.next) || null;
            return t;
          }
          addNode(e) {
            const t = { value: e, previous: null, next: null };
            if (((e.__ln = t), e.previousSibling && ts(e.previousSibling))) {
              const r = e.previousSibling.__ln.next;
              (t.next = r),
                (t.previous = e.previousSibling.__ln),
                (e.previousSibling.__ln.next = t),
                r && (r.previous = t);
            } else if (e.nextSibling && ts(e.nextSibling) && e.nextSibling.__ln.previous) {
              const r = e.nextSibling.__ln.previous;
              (t.previous = r), (t.next = e.nextSibling.__ln), (e.nextSibling.__ln.previous = t), r && (r.next = t);
            } else this.head && (this.head.previous = t), (t.next = this.head), (this.head = t);
            null === t.next && (this.tail = t), this.length++;
          }
          removeNode(e) {
            const t = e.__ln;
            this.head &&
              (t.previous
                ? ((t.previous.next = t.next), t.next ? (t.next.previous = t.previous) : (this.tail = t.previous))
                : ((this.head = t.next), this.head ? (this.head.previous = null) : (this.tail = null)),
              e.__ln && delete e.__ln,
              this.length--);
          }
        }
        const ns = (e, t) => `${e}@${t}`;
        class ss {
          constructor() {
            Wr(this, 'frozen', !1),
              Wr(this, 'locked', !1),
              Wr(this, 'texts', []),
              Wr(this, 'attributes', []),
              Wr(this, 'attributeMap', new WeakMap()),
              Wr(this, 'removes', []),
              Wr(this, 'mapRemoves', []),
              Wr(this, 'movedMap', {}),
              Wr(this, 'addedSet', new Set()),
              Wr(this, 'movedSet', new Set()),
              Wr(this, 'droppedSet', new Set()),
              Wr(this, 'mutationCb'),
              Wr(this, 'blockClass'),
              Wr(this, 'blockSelector'),
              Wr(this, 'maskTextClass'),
              Wr(this, 'maskTextSelector'),
              Wr(this, 'inlineStylesheet'),
              Wr(this, 'maskInputOptions'),
              Wr(this, 'maskTextFn'),
              Wr(this, 'maskInputFn'),
              Wr(this, 'keepIframeSrcFn'),
              Wr(this, 'recordCanvas'),
              Wr(this, 'inlineImages'),
              Wr(this, 'slimDOMOptions'),
              Wr(this, 'dataURLOptions'),
              Wr(this, 'doc'),
              Wr(this, 'mirror'),
              Wr(this, 'iframeManager'),
              Wr(this, 'stylesheetManager'),
              Wr(this, 'shadowDomManager'),
              Wr(this, 'canvasManager'),
              Wr(this, 'processedNodeManager'),
              Wr(this, 'unattachedDoc'),
              Wr(this, 'processMutations', (e) => {
                e.forEach(this.processMutation), this.emit();
              }),
              Wr(this, 'emit', () => {
                if (this.frozen || this.locked) return;
                const e = [],
                  t = new Set(),
                  r = new rs(),
                  n = (e) => {
                    let t = e,
                      r = -2;
                    for (; -2 === r; ) (t = t && t.nextSibling), (r = t && this.mirror.getId(t));
                    return r;
                  },
                  s = (s) => {
                    if (!s.parentNode || !qn(s) || 'TEXTAREA' === s.parentNode.tagName) return;
                    const i = Vr(s.parentNode) ? this.mirror.getId(Xn(s)) : this.mirror.getId(s.parentNode),
                      a = n(s);
                    if (-1 === i || -1 === a) return r.addNode(s);
                    const o = Tn(s, {
                      doc: this.doc,
                      mirror: this.mirror,
                      blockClass: this.blockClass,
                      blockSelector: this.blockSelector,
                      maskTextClass: this.maskTextClass,
                      maskTextSelector: this.maskTextSelector,
                      skipChild: !0,
                      newlyAddedElement: !0,
                      inlineStylesheet: this.inlineStylesheet,
                      maskInputOptions: this.maskInputOptions,
                      maskTextFn: this.maskTextFn,
                      maskInputFn: this.maskInputFn,
                      slimDOMOptions: this.slimDOMOptions,
                      dataURLOptions: this.dataURLOptions,
                      recordCanvas: this.recordCanvas,
                      inlineImages: this.inlineImages,
                      onSerialize: (e) => {
                        jn(e, this.mirror) && this.iframeManager.addIframe(e),
                          Wn(e, this.mirror) && this.stylesheetManager.trackLinkElement(e),
                          Zn(s) && this.shadowDomManager.addShadowRoot(s.shadowRoot, this.doc);
                      },
                      onIframeLoad: (e, t) => {
                        this.iframeManager.attachIframe(e, t), this.shadowDomManager.observeAttachShadow(e);
                      },
                      onStylesheetLoad: (e, t) => {
                        this.stylesheetManager.attachLinkElement(e, t);
                      },
                    });
                    o && (e.push({ parentId: i, nextId: a, node: o }), t.add(o.id));
                  };
                for (; this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (const e of this.movedSet)
                  (as(this.removes, e, this.mirror) && !this.movedSet.has(e.parentNode)) || s(e);
                for (const e of this.addedSet)
                  os(this.droppedSet, e) || as(this.removes, e, this.mirror)
                    ? os(this.movedSet, e)
                      ? s(e)
                      : this.droppedSet.add(e)
                    : s(e);
                let i = null;
                for (; r.length; ) {
                  let e = null;
                  if (i) {
                    const t = this.mirror.getId(i.value.parentNode),
                      r = n(i.value);
                    -1 !== t && -1 !== r && (e = i);
                  }
                  if (!e) {
                    let t = r.tail;
                    for (; t; ) {
                      const r = t;
                      if (((t = t.previous), r)) {
                        const t = this.mirror.getId(r.value.parentNode);
                        if (-1 === n(r.value)) continue;
                        if (-1 !== t) {
                          e = r;
                          break;
                        }
                        {
                          const t = r.value;
                          if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                            const n = t.parentNode.host;
                            if (-1 !== this.mirror.getId(n)) {
                              e = r;
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                  if (!e) {
                    for (; r.head; ) r.removeNode(r.head.value);
                    break;
                  }
                  (i = e.previous), r.removeNode(e.value), s(e.value);
                }
                const a = {
                  texts: this.texts
                    .map((e) => {
                      const t = e.node;
                      return (
                        t.parentNode &&
                          'TEXTAREA' === t.parentNode.tagName &&
                          this.genTextAreaValueMutation(t.parentNode),
                        { id: this.mirror.getId(t), value: e.value }
                      );
                    })
                    .filter((e) => !t.has(e.id))
                    .filter((e) => this.mirror.has(e.id)),
                  attributes: this.attributes
                    .map((e) => {
                      const { attributes: t } = e;
                      if ('string' == typeof t.style) {
                        const r = JSON.stringify(e.styleDiff),
                          n = JSON.stringify(e._unchangedStyles);
                        r.length < t.style.length &&
                          (r + n).split('var(').length === t.style.split('var(').length &&
                          (t.style = e.styleDiff);
                      }
                      return { id: this.mirror.getId(e.node), attributes: t };
                    })
                    .filter((e) => !t.has(e.id))
                    .filter((e) => this.mirror.has(e.id)),
                  removes: this.removes,
                  adds: e,
                };
                (a.texts.length || a.attributes.length || a.removes.length || a.adds.length) &&
                  ((this.texts = []),
                  (this.attributes = []),
                  (this.attributeMap = new WeakMap()),
                  (this.removes = []),
                  (this.addedSet = new Set()),
                  (this.movedSet = new Set()),
                  (this.droppedSet = new Set()),
                  (this.movedMap = {}),
                  this.mutationCb(a));
              }),
              Wr(this, 'genTextAreaValueMutation', (e) => {
                let t = this.attributeMap.get(e);
                t ||
                  ((t = { node: e, attributes: {}, styleDiff: {}, _unchangedStyles: {} }),
                  this.attributes.push(t),
                  this.attributeMap.set(e, t)),
                  (t.attributes.value = Array.from(e.childNodes, (e) => e.textContent || '').join(''));
              }),
              Wr(this, 'processMutation', (e) => {
                if (!zn(e.target, this.mirror, this.slimDOMOptions))
                  switch (e.type) {
                    case 'characterData': {
                      const t = e.target.textContent;
                      Fn(e.target, this.blockClass, this.blockSelector, !1) ||
                        t === e.oldValue ||
                        this.texts.push({
                          value:
                            _n(e.target, this.maskTextClass, this.maskTextSelector, !0) && t
                              ? this.maskTextFn
                                ? this.maskTextFn(t, Un(e.target))
                                : t.replace(/[\S]/g, '*')
                              : t,
                          node: e.target,
                        });
                      break;
                    }
                    case 'attributes': {
                      const t = e.target;
                      let r = e.attributeName,
                        n = e.target.getAttribute(r);
                      if ('value' === r) {
                        const e = tn(t);
                        n = $r({
                          element: t,
                          maskInputOptions: this.maskInputOptions,
                          tagName: t.tagName,
                          type: e,
                          value: n,
                          maskInputFn: this.maskInputFn,
                        });
                      }
                      if (Fn(e.target, this.blockClass, this.blockSelector, !1) || n === e.oldValue) return;
                      let s = this.attributeMap.get(e.target);
                      if ('IFRAME' === t.tagName && 'src' === r && !this.keepIframeSrcFn(n)) {
                        if (t.contentDocument) return;
                        r = 'rr_src';
                      }
                      if (
                        (s ||
                          ((s = { node: e.target, attributes: {}, styleDiff: {}, _unchangedStyles: {} }),
                          this.attributes.push(s),
                          this.attributeMap.set(e.target, s)),
                        'type' === r &&
                          'INPUT' === t.tagName &&
                          'password' === (e.oldValue || '').toLowerCase() &&
                          t.setAttribute('data-rr-is-password', 'true'),
                        !wn(t.tagName, r) && ((s.attributes[r] = Sn(this.doc, Qr(t.tagName), Qr(r), n)), 'style' === r))
                      ) {
                        if (!this.unattachedDoc)
                          try {
                            this.unattachedDoc = document.implementation.createHTMLDocument();
                          } catch (e) {
                            this.unattachedDoc = this.doc;
                          }
                        const r = this.unattachedDoc.createElement('span');
                        e.oldValue && r.setAttribute('style', e.oldValue);
                        try {
                          const e = Date.now();
                          if (e - (t._lastStyleCheck || 0) < 150) return;
                          if (((t._lastStyleCheck = e), t.style.cssText === r.style.cssText)) return;
                        } catch (e) {
                          return;
                        }
                        for (const e of Array.from(t.style)) {
                          const n = t.style.getPropertyValue(e),
                            i = t.style.getPropertyPriority(e);
                          n !== r.style.getPropertyValue(e) || i !== r.style.getPropertyPriority(e)
                            ? (s.styleDiff[e] = '' === i ? n : [n, i])
                            : (s._unchangedStyles[e] = [n, i]);
                        }
                        for (const e of Array.from(r.style))
                          '' === t.style.getPropertyValue(e) && (s.styleDiff[e] = !1);
                      }
                      break;
                    }
                    case 'childList':
                      if (Fn(e.target, this.blockClass, this.blockSelector, !0)) return;
                      if ('TEXTAREA' === e.target.tagName) return void this.genTextAreaValueMutation(e.target);
                      e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                        e.removedNodes.forEach((t) => {
                          const r = this.mirror.getId(t),
                            n = Vr(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                          Fn(e.target, this.blockClass, this.blockSelector, !1) ||
                            zn(t, this.mirror, this.slimDOMOptions) ||
                            !(function (e, t) {
                              return -1 !== t.getId(e);
                            })(t, this.mirror) ||
                            (this.addedSet.has(t)
                              ? (is(this.addedSet, t), this.droppedSet.add(t))
                              : (this.addedSet.has(e.target) && -1 === r) ||
                                Bn(e.target, this.mirror) ||
                                (this.movedSet.has(t) && this.movedMap[ns(r, n)]
                                  ? is(this.movedSet, t)
                                  : this.removes.push({
                                      parentId: n,
                                      id: r,
                                      isShadow: !(!Vr(e.target) || !qr(e.target)) || void 0,
                                    })),
                            this.mapRemoves.push(t));
                        });
                  }
              }),
              Wr(this, 'genAdds', (e, t) => {
                if (
                  !this.processedNodeManager.inOtherBuffer(e, this) &&
                  !this.addedSet.has(e) &&
                  !this.movedSet.has(e)
                ) {
                  if (this.mirror.hasNode(e)) {
                    if (zn(e, this.mirror, this.slimDOMOptions)) return;
                    this.movedSet.add(e);
                    let r = null;
                    t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)),
                      r && -1 !== r && (this.movedMap[ns(this.mirror.getId(e), r)] = !0);
                  } else this.addedSet.add(e), this.droppedSet.delete(e);
                  Fn(e, this.blockClass, this.blockSelector, !1) ||
                    (e.childNodes.forEach((e) => this.genAdds(e)),
                    Zn(e) &&
                      e.shadowRoot.childNodes.forEach((t) => {
                        this.processedNodeManager.add(t, this), this.genAdds(t, e);
                      }));
                }
              });
          }
          init(e) {
            [
              'mutationCb',
              'blockClass',
              'blockSelector',
              'maskTextClass',
              'maskTextSelector',
              'inlineStylesheet',
              'maskInputOptions',
              'maskTextFn',
              'maskInputFn',
              'keepIframeSrcFn',
              'recordCanvas',
              'inlineImages',
              'slimDOMOptions',
              'dataURLOptions',
              'doc',
              'mirror',
              'iframeManager',
              'stylesheetManager',
              'shadowDomManager',
              'canvasManager',
              'processedNodeManager',
            ].forEach((t) => {
              this[t] = e[t];
            });
          }
          freeze() {
            (this.frozen = !0), this.canvasManager.freeze();
          }
          unfreeze() {
            (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
          }
          isFrozen() {
            return this.frozen;
          }
          lock() {
            (this.locked = !0), this.canvasManager.lock();
          }
          unlock() {
            (this.locked = !1), this.canvasManager.unlock(), this.emit();
          }
          reset() {
            this.shadowDomManager.reset(), this.canvasManager.reset();
          }
        }
        function is(e, t) {
          e.delete(t), t.childNodes.forEach((t) => is(e, t));
        }
        function as(e, t, r) {
          return (
            0 !== e.length &&
            (function (e, t, r) {
              let n = t.parentNode;
              for (; n; ) {
                const t = r.getId(n);
                if (e.some((e) => e.id === t)) return !0;
                n = n.parentNode;
              }
              return !1;
            })(e, t, r)
          );
        }
        function os(e, t) {
          return 0 !== e.size && cs(e, t);
        }
        function cs(e, t) {
          const { parentNode: r } = t;
          return !!r && (!!e.has(r) || cs(e, r));
        }
        let ls;
        const us = (e) => {
            if (!ls) return e;
            return function () {
              try {
                return e(...arguments);
              } catch (e) {
                if (ls && !0 === ls(e)) return;
                throw e;
              }
            };
          },
          ds = [];
        function hs(e) {
          try {
            if ('composedPath' in e) {
              const t = e.composedPath();
              if (t.length) return t[0];
            } else if ('path' in e && e.path.length) return e.path[0];
          } catch {}
          return e && e.target;
        }
        function ps(e, t) {
          var r, n;
          const s = new ss();
          ds.push(s), s.init(e);
          let i = window.MutationObserver || window.__rrMutationObserver;
          const a =
            null == (n = null == (r = null == window ? void 0 : window.Zone) ? void 0 : r.__symbol__)
              ? void 0
              : n.call(r, 'MutationObserver');
          a && window[a] && (i = window[a]);
          const o = Br(us(s.processMutations.bind(s))),
            c = new i(o.addMutaions);
          return (
            c.observe(t, {
              attributes: !0,
              attributeOldValue: !0,
              characterData: !0,
              characterDataOldValue: !0,
              childList: !0,
              subtree: !0,
            }),
            { observer: c, mutaionBatch: o }
          );
        }
        function ms(e) {
          let { mouseInteractionCb: t, doc: r, mirror: n, blockClass: s, blockSelector: i, sampling: a } = e;
          if (!1 === a.mouseInteraction) return () => {};
          const o = !0 === a.mouseInteraction || void 0 === a.mouseInteraction ? {} : a.mouseInteraction,
            c = [];
          let l = null;
          return (
            Object.keys(Jn)
              .filter((e) => Number.isNaN(Number(e)) && !e.endsWith('_Departed') && !1 !== o[e])
              .forEach((e) => {
                let a = Qr(e);
                const o = ((e) => (r) => {
                  const a = hs(r);
                  if (Fn(a, s, i, !0)) return;
                  let o = null,
                    c = e;
                  if ('pointerType' in r) {
                    switch (r.pointerType) {
                      case 'mouse':
                        o = $n.Mouse;
                        break;
                      case 'touch':
                        o = $n.Touch;
                        break;
                      case 'pen':
                        o = $n.Pen;
                    }
                    o === $n.Touch
                      ? Jn[e] === Jn.MouseDown
                        ? (c = 'TouchStart')
                        : Jn[e] === Jn.MouseUp && (c = 'TouchEnd')
                      : $n.Pen;
                  } else Hn(r) && (o = $n.Touch);
                  null !== o
                    ? ((l = o),
                      ((c.startsWith('Touch') && o === $n.Touch) || (c.startsWith('Mouse') && o === $n.Mouse)) &&
                        (o = null))
                    : Jn[e] === Jn.Click && ((o = l), (l = null));
                  const u = Hn(r) ? r.changedTouches[0] : r;
                  if (!u) return;
                  const d = n.getId(a),
                    { clientX: h, clientY: p } = u;
                  us(t)({ type: Jn[c], id: d, x: h, y: p, ...(null !== o && { pointerType: o }) });
                })(e);
                if (window.PointerEvent)
                  switch (Jn[e]) {
                    case Jn.MouseDown:
                    case Jn.MouseUp:
                      a = a.replace('mouse', 'pointer');
                      break;
                    case Jn.TouchStart:
                    case Jn.TouchEnd:
                      return;
                  }
                c.push(xn(a, o, r));
              }),
            us(() => {
              c.forEach((e) => e());
            })
          );
        }
        function fs(e) {
          let { scrollCb: t, doc: r, mirror: n, blockClass: s, blockSelector: i, sampling: a } = e;
          return xn(
            'scroll',
            us(
              Rn(
                us((e) => {
                  const a = hs(e);
                  if (!a || Fn(a, s, i, !0)) return;
                  const o = n.getId(a);
                  if (a === r && r.defaultView) {
                    const e = Ln(r.defaultView);
                    t({ id: o, x: e.left, y: e.top });
                  } else t({ id: o, x: a.scrollLeft, y: a.scrollTop });
                }),
                a.scroll || 100
              )
            ),
            r
          );
        }
        const gs = ['INPUT', 'TEXTAREA', 'SELECT'],
          bs = new WeakMap();
        function ys(e) {
          return (function (e, t) {
            if (
              (Is('CSSGroupingRule') && e.parentRule instanceof CSSGroupingRule) ||
              (Is('CSSMediaRule') && e.parentRule instanceof CSSMediaRule) ||
              (Is('CSSSupportsRule') && e.parentRule instanceof CSSSupportsRule) ||
              (Is('CSSConditionRule') && e.parentRule instanceof CSSConditionRule)
            ) {
              const r = Array.from(e.parentRule.cssRules).indexOf(e);
              t.unshift(r);
            } else if (e.parentStyleSheet) {
              const r = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
              t.unshift(r);
            }
            return t;
          })(e, []);
        }
        function vs(e, t, r) {
          let n, s;
          return e ? (e.ownerNode ? (n = t.getId(e.ownerNode)) : (s = r.getId(e)), { styleId: s, id: n }) : {};
        }
        function Ss(e, t) {
          let { mirror: r, stylesheetManager: n } = e;
          var s, i, a;
          let o = null;
          o = '#document' === t.nodeName ? r.getId(t) : r.getId(t.host);
          const c =
              '#document' === t.nodeName
                ? null == (s = t.defaultView)
                  ? void 0
                  : s.Document
                : null == (a = null == (i = t.ownerDocument) ? void 0 : i.defaultView)
                ? void 0
                : a.ShadowRoot,
            l = (null == c ? void 0 : c.prototype)
              ? Object.getOwnPropertyDescriptor(null == c ? void 0 : c.prototype, 'adoptedStyleSheets')
              : void 0;
          return null !== o && -1 !== o && c && l
            ? (Object.defineProperty(t, 'adoptedStyleSheets', {
                configurable: l.configurable,
                enumerable: l.enumerable,
                get() {
                  var e;
                  return null == (e = l.get) ? void 0 : e.call(this);
                },
                set(e) {
                  var t;
                  const r = null == (t = l.set) ? void 0 : t.call(this, e);
                  if (null !== o && -1 !== o)
                    try {
                      n.adoptStyleSheets(e, o);
                    } catch (e) {}
                  return r;
                },
              }),
              us(() => {
                Object.defineProperty(t, 'adoptedStyleSheets', {
                  configurable: l.configurable,
                  enumerable: l.enumerable,
                  get: l.get,
                  set: l.set,
                });
              }))
            : () => {};
        }
        function ws(e, t) {
          void 0 === t && (t = {});
          const r = e.doc.defaultView;
          if (!r) return () => {};
          let n;
          !(function (e, t) {
            const {
              mutationCb: r,
              mousemoveCb: n,
              mouseInteractionCb: s,
              scrollCb: i,
              viewportResizeCb: a,
              inputCb: o,
              mediaInteractionCb: c,
              styleSheetRuleCb: l,
              styleDeclarationCb: u,
              canvasMutationCb: d,
              fontCb: h,
              selectionCb: p,
              customElementCb: m,
            } = e;
            (e.mutationCb = function () {
              t.mutation && t.mutation(...arguments), r(...arguments);
            }),
              (e.mousemoveCb = function () {
                t.mousemove && t.mousemove(...arguments), n(...arguments);
              }),
              (e.mouseInteractionCb = function () {
                t.mouseInteraction && t.mouseInteraction(...arguments), s(...arguments);
              }),
              (e.scrollCb = function () {
                t.scroll && t.scroll(...arguments), i(...arguments);
              }),
              (e.viewportResizeCb = function () {
                t.viewportResize && t.viewportResize(...arguments), a(...arguments);
              }),
              (e.inputCb = function () {
                t.input && t.input(...arguments), o(...arguments);
              }),
              (e.mediaInteractionCb = function () {
                t.mediaInteaction && t.mediaInteaction(...arguments), c(...arguments);
              }),
              (e.styleSheetRuleCb = function () {
                t.styleSheetRule && t.styleSheetRule(...arguments), l(...arguments);
              }),
              (e.styleDeclarationCb = function () {
                t.styleDeclaration && t.styleDeclaration(...arguments), u(...arguments);
              }),
              (e.canvasMutationCb = function () {
                t.canvasMutation && t.canvasMutation(...arguments), d(...arguments);
              }),
              (e.fontCb = function () {
                t.font && t.font(...arguments), h(...arguments);
              }),
              (e.selectionCb = function () {
                t.selection && t.selection(...arguments), p(...arguments);
              }),
              (e.customElementCb = function () {
                t.customElement && t.customElement(...arguments), m(...arguments);
              });
          })(e, t),
            e.recordDOM && (n = ps(e, e.doc));
          const s = (function (e) {
              let { mousemoveCb: t, sampling: r, doc: n, mirror: s } = e;
              if (!1 === r.mousemove) return () => {};
              const i = 'number' == typeof r.mousemove ? r.mousemove : 50,
                a = 'number' == typeof r.mousemoveCallback ? r.mousemoveCallback : 500;
              let o,
                c = [];
              const l = Rn(
                  us((e) => {
                    const r = Date.now() - o;
                    t(
                      c.map((e) => ((e.timeOffset -= r), e)),
                      e
                    ),
                      (c = []),
                      (o = null);
                  }),
                  a
                ),
                u = us(
                  Rn(
                    us((e) => {
                      const t = hs(e),
                        { clientX: r, clientY: n } = Hn(e) ? e.changedTouches[0] : e;
                      o || (o = Mn()),
                        c.push({ x: r, y: n, id: s.getId(t), timeOffset: Mn() - o }),
                        l(
                          'undefined' != typeof DragEvent && e instanceof DragEvent
                            ? Yn.Drag
                            : e instanceof MouseEvent
                            ? Yn.MouseMove
                            : Yn.TouchMove
                        );
                    }),
                    i,
                    { trailing: !1 }
                  )
                ),
                d = [xn('mousemove', u, n), xn('touchmove', u, n), xn('drag', u, n)];
              return us(() => {
                d.forEach((e) => e());
              });
            })(e),
            i = ms(e),
            a = fs(e),
            o = (function (e, t) {
              let { viewportResizeCb: r } = e,
                { win: n } = t,
                s = -1,
                i = -1;
              return xn(
                'resize',
                us(
                  Rn(
                    us(() => {
                      const e = Nn(),
                        t = Pn();
                      (s === e && i === t) || (r({ width: Number(t), height: Number(e) }), (s = e), (i = t));
                    }),
                    200
                  )
                ),
                n
              );
            })(e, { win: r }),
            c = (function (e) {
              let {
                inputCb: t,
                doc: r,
                mirror: n,
                blockClass: s,
                blockSelector: i,
                ignoreClass: a,
                ignoreSelector: o,
                maskInputOptions: c,
                maskInputFn: l,
                sampling: u,
                userTriggeredOnInput: d,
              } = e;
              function h(e) {
                let t = hs(e);
                const n = e.isTrusted,
                  u = t && t.tagName;
                if ((t && 'OPTION' === u && (t = t.parentElement), !t || !u || gs.indexOf(u) < 0 || Fn(t, s, i, !0)))
                  return;
                if (t.classList.contains(a) || (o && t.matches(o))) return;
                let h = t.value,
                  m = !1;
                const f = tn(t) || '';
                'radio' === f || 'checkbox' === f
                  ? (m = t.checked)
                  : (c[u.toLowerCase()] || c[f]) &&
                    (h = $r({ element: t, maskInputOptions: c, tagName: u, type: f, value: h, maskInputFn: l })),
                  p(t, d ? { text: h, isChecked: m, userTriggered: n } : { text: h, isChecked: m });
                const g = t.name;
                'radio' === f &&
                  g &&
                  m &&
                  r.querySelectorAll(`input[type="radio"][name="${g}"]`).forEach((e) => {
                    if (e !== t) {
                      const t = e.value;
                      p(e, d ? { text: t, isChecked: !m, userTriggered: !1 } : { text: t, isChecked: !m });
                    }
                  });
              }
              function p(e, r) {
                const s = bs.get(e);
                if (!s || s.text !== r.text || s.isChecked !== r.isChecked) {
                  bs.set(e, r);
                  const s = n.getId(e);
                  us(t)({ ...r, id: s });
                }
              }
              const m = ('last' === u.input ? ['change'] : ['input', 'change']).map((e) => xn(e, us(h), r)),
                f = r.defaultView;
              if (!f)
                return () => {
                  m.forEach((e) => e());
                };
              const g = f.Object.getOwnPropertyDescriptor(f.HTMLInputElement.prototype, 'value'),
                b = [
                  [f.HTMLInputElement.prototype, 'value'],
                  [f.HTMLInputElement.prototype, 'checked'],
                  [f.HTMLSelectElement.prototype, 'value'],
                  [f.HTMLTextAreaElement.prototype, 'value'],
                  [f.HTMLSelectElement.prototype, 'selectedIndex'],
                  [f.HTMLOptionElement.prototype, 'selected'],
                ];
              return (
                g &&
                  g.set &&
                  m.push(
                    ...b.map((e) =>
                      Dn(
                        e[0],
                        e[1],
                        {
                          set() {
                            us(h)({ target: this, isTrusted: !1 });
                          },
                        },
                        !1,
                        f
                      )
                    )
                  ),
                us(() => {
                  m.forEach((e) => e());
                })
              );
            })(e),
            l = (function (e) {
              let { mediaInteractionCb: t, blockClass: r, blockSelector: n, mirror: s, sampling: i, doc: a } = e;
              const o = us((e) =>
                  Rn(
                    us((i) => {
                      const a = hs(i);
                      if (!a || Fn(a, r, n, !0)) return;
                      const { currentTime: o, volume: c, muted: l, playbackRate: u, loop: d } = a;
                      t({ type: e, id: s.getId(a), currentTime: o, volume: c, muted: l, playbackRate: u, loop: d });
                    }),
                    i.media || 500
                  )
                ),
                c = [
                  xn('play', o(es.Play), a),
                  xn('pause', o(es.Pause), a),
                  xn('seeked', o(es.Seeked), a),
                  xn('volumechange', o(es.VolumeChange), a),
                  xn('ratechange', o(es.RateChange), a),
                ];
              return us(() => {
                c.forEach((e) => e());
              });
            })(e);
          let u = () => {},
            d = () => {},
            h = () => {},
            p = () => {};
          e.recordDOM &&
            ((u = (function (e, t) {
              let { styleSheetRuleCb: r, mirror: n, stylesheetManager: s } = e,
                { win: i } = t;
              if (!i.CSSStyleSheet || !i.CSSStyleSheet.prototype) return () => {};
              const a = i.CSSStyleSheet.prototype.insertRule;
              i.CSSStyleSheet.prototype.insertRule = new Proxy(a, {
                apply: us((e, t, i) => {
                  const [a, o] = i,
                    { id: c, styleId: l } = vs(t, n, s.styleMirror);
                  return (
                    ((c && -1 !== c) || (l && -1 !== l)) && r({ id: c, styleId: l, adds: [{ rule: a, index: o }] }),
                    e.apply(t, i)
                  );
                }),
              });
              const o = i.CSSStyleSheet.prototype.deleteRule;
              let c, l;
              (i.CSSStyleSheet.prototype.deleteRule = new Proxy(o, {
                apply: us((e, t, i) => {
                  const [a] = i,
                    { id: o, styleId: c } = vs(t, n, s.styleMirror);
                  return (
                    ((o && -1 !== o) || (c && -1 !== c)) && r({ id: o, styleId: c, removes: [{ index: a }] }),
                    e.apply(t, i)
                  );
                }),
              })),
                i.CSSStyleSheet.prototype.replace &&
                  ((c = i.CSSStyleSheet.prototype.replace),
                  (i.CSSStyleSheet.prototype.replace = new Proxy(c, {
                    apply: us((e, t, i) => {
                      const [a] = i,
                        { id: o, styleId: c } = vs(t, n, s.styleMirror);
                      return (
                        ((o && -1 !== o) || (c && -1 !== c)) && r({ id: o, styleId: c, replace: a }), e.apply(t, i)
                      );
                    }),
                  }))),
                i.CSSStyleSheet.prototype.replaceSync &&
                  ((l = i.CSSStyleSheet.prototype.replaceSync),
                  (i.CSSStyleSheet.prototype.replaceSync = new Proxy(l, {
                    apply: us((e, t, i) => {
                      const [a] = i,
                        { id: o, styleId: c } = vs(t, n, s.styleMirror);
                      return (
                        ((o && -1 !== o) || (c && -1 !== c)) && r({ id: o, styleId: c, replaceSync: a }), e.apply(t, i)
                      );
                    }),
                  })));
              const u = {};
              _s('CSSGroupingRule')
                ? (u.CSSGroupingRule = i.CSSGroupingRule)
                : (_s('CSSMediaRule') && (u.CSSMediaRule = i.CSSMediaRule),
                  _s('CSSConditionRule') && (u.CSSConditionRule = i.CSSConditionRule),
                  _s('CSSSupportsRule') && (u.CSSSupportsRule = i.CSSSupportsRule));
              const d = {};
              return (
                Object.entries(u).forEach((e) => {
                  let [t, i] = e;
                  (d[t] = { insertRule: i.prototype.insertRule, deleteRule: i.prototype.deleteRule }),
                    (i.prototype.insertRule = new Proxy(d[t].insertRule, {
                      apply: us((e, t, i) => {
                        const [a, o] = i,
                          { id: c, styleId: l } = vs(t.parentStyleSheet, n, s.styleMirror);
                        return (
                          ((c && -1 !== c) || (l && -1 !== l)) &&
                            r({ id: c, styleId: l, adds: [{ rule: a, index: [...ys(t), o || 0] }] }),
                          e.apply(t, i)
                        );
                      }),
                    })),
                    (i.prototype.deleteRule = new Proxy(d[t].deleteRule, {
                      apply: us((e, t, i) => {
                        const [a] = i,
                          { id: o, styleId: c } = vs(t.parentStyleSheet, n, s.styleMirror);
                        return (
                          ((o && -1 !== o) || (c && -1 !== c)) &&
                            r({ id: o, styleId: c, removes: [{ index: [...ys(t), a] }] }),
                          e.apply(t, i)
                        );
                      }),
                    }));
                }),
                us(() => {
                  (i.CSSStyleSheet.prototype.insertRule = a),
                    (i.CSSStyleSheet.prototype.deleteRule = o),
                    c && (i.CSSStyleSheet.prototype.replace = c),
                    l && (i.CSSStyleSheet.prototype.replaceSync = l),
                    Object.entries(u).forEach((e) => {
                      let [t, r] = e;
                      (r.prototype.insertRule = d[t].insertRule), (r.prototype.deleteRule = d[t].deleteRule);
                    });
                })
              );
            })(e, { win: r })),
            (d = Ss(e, e.doc)),
            (h = (function (e, t) {
              let { styleDeclarationCb: r, mirror: n, ignoreCSSAttributes: s, stylesheetManager: i } = e,
                { win: a } = t;
              const o = a.CSSStyleDeclaration.prototype.setProperty;
              a.CSSStyleDeclaration.prototype.setProperty = new Proxy(o, {
                apply: us((e, t, a) => {
                  var c;
                  const [l, u, d] = a;
                  if (s.has(l)) return o.apply(t, [l, u, d]);
                  const { id: h, styleId: p } = vs(
                    null == (c = t.parentRule) ? void 0 : c.parentStyleSheet,
                    n,
                    i.styleMirror
                  );
                  return (
                    ((h && -1 !== h) || (p && -1 !== p)) &&
                      r({ id: h, styleId: p, set: { property: l, value: u, priority: d }, index: ys(t.parentRule) }),
                    e.apply(t, a)
                  );
                }),
              });
              const c = a.CSSStyleDeclaration.prototype.removeProperty;
              return (
                (a.CSSStyleDeclaration.prototype.removeProperty = new Proxy(c, {
                  apply: us((e, t, a) => {
                    var o;
                    const [l] = a;
                    if (s.has(l)) return c.apply(t, [l]);
                    const { id: u, styleId: d } = vs(
                      null == (o = t.parentRule) ? void 0 : o.parentStyleSheet,
                      n,
                      i.styleMirror
                    );
                    return (
                      ((u && -1 !== u) || (d && -1 !== d)) &&
                        r({ id: u, styleId: d, remove: { property: l }, index: ys(t.parentRule) }),
                      e.apply(t, a)
                    );
                  }),
                })),
                us(() => {
                  (a.CSSStyleDeclaration.prototype.setProperty = o),
                    (a.CSSStyleDeclaration.prototype.removeProperty = c);
                })
              );
            })(e, { win: r })),
            e.collectFonts &&
              (p = (function (e) {
                let { fontCb: t, doc: r } = e;
                const n = r.defaultView;
                if (!n) return () => {};
                const s = [],
                  i = new WeakMap(),
                  a = n.FontFace;
                n.FontFace = function (e, t, r) {
                  const n = new a(e, t, r);
                  return (
                    i.set(n, {
                      family: e,
                      buffer: 'string' != typeof t,
                      descriptors: r,
                      fontSource: 'string' == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t))),
                    }),
                    n
                  );
                };
                const o = On(r.fonts, 'add', function (e) {
                  return function (r) {
                    return (
                      ft(
                        us(() => {
                          const e = i.get(r);
                          e && (t(e), i.delete(r));
                        }),
                        0
                      ),
                      e.apply(this, [r])
                    );
                  };
                });
                return (
                  s.push(() => {
                    n.FontFace = a;
                  }),
                  s.push(o),
                  us(() => {
                    s.forEach((e) => e());
                  })
                );
              })(e)));
          const m = (function (e) {
              const { doc: t, mirror: r, blockClass: n, blockSelector: s, selectionCb: i } = e;
              let a = !0;
              const o = us(() => {
                const e = t.getSelection();
                if (!e || (a && (null == e ? void 0 : e.isCollapsed))) return;
                a = e.isCollapsed || !1;
                const o = [],
                  c = e.rangeCount || 0;
                for (let t = 0; t < c; t++) {
                  const i = e.getRangeAt(t),
                    { startContainer: a, startOffset: c, endContainer: l, endOffset: u } = i;
                  Fn(a, n, s, !0) ||
                    Fn(l, n, s, !0) ||
                    o.push({ start: r.getId(a), startOffset: c, end: r.getId(l), endOffset: u });
                }
                i({ ranges: o });
              });
              return o(), xn('selectionchange', o);
            })(e),
            f = (function (e) {
              let { doc: t, customElementCb: r } = e;
              const n = t.defaultView;
              return n && n.customElements
                ? On(n.customElements, 'define', function (e) {
                    return function (t, n, s) {
                      try {
                        r({ define: { name: t } });
                      } catch (e) {
                        console.warn(`Custom element callback failed for ${t}`);
                      }
                      return e.apply(this, [t, n, s]);
                    };
                  })
                : () => {};
            })(e),
            g = [];
          for (const t of e.plugins) g.push(t.observer(t.callback, r, t.options));
          return us(() => {
            ds.forEach((e) => e.reset()),
              null == n || null == n?.observer || n.observer.disconnect(),
              null == n || null == n?.mutaionBatch || n.mutaionBatch.stop(),
              s(),
              i(),
              a(),
              o(),
              c(),
              l(),
              u(),
              d(),
              h(),
              p(),
              m(),
              f(),
              g.forEach((e) => e());
          });
        }
        function Is(e) {
          return void 0 !== window[e];
        }
        function _s(e) {
          return Boolean(
            void 0 !== window[e] &&
              window[e].prototype &&
              'insertRule' in window[e].prototype &&
              'deleteRule' in window[e].prototype
          );
        }
        class Cs {
          constructor(e) {
            Wr(this, 'iframeIdToRemoteIdMap', new WeakMap()),
              Wr(this, 'iframeRemoteIdToIdMap', new WeakMap()),
              (this.generateIdFn = e);
          }
          getId(e, t, r, n) {
            const s = r || this.getIdToRemoteIdMap(e),
              i = n || this.getRemoteIdToIdMap(e);
            let a = s.get(t);
            return a || ((a = this.generateIdFn()), s.set(t, a), i.set(a, t)), a;
          }
          getIds(e, t) {
            const r = this.getIdToRemoteIdMap(e),
              n = this.getRemoteIdToIdMap(e);
            return t.map((t) => this.getId(e, t, r, n));
          }
          getRemoteId(e, t, r) {
            const n = r || this.getRemoteIdToIdMap(e);
            if ('number' != typeof t) return t;
            const s = n.get(t);
            return s || -1;
          }
          getRemoteIds(e, t) {
            const r = this.getRemoteIdToIdMap(e);
            return t.map((t) => this.getRemoteId(e, t, r));
          }
          reset(e) {
            if (!e)
              return (this.iframeIdToRemoteIdMap = new WeakMap()), void (this.iframeRemoteIdToIdMap = new WeakMap());
            this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e);
          }
          getIdToRemoteIdMap(e) {
            let t = this.iframeIdToRemoteIdMap.get(e);
            return t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t;
          }
          getRemoteIdToIdMap(e) {
            let t = this.iframeRemoteIdToIdMap.get(e);
            return t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t;
          }
        }
        class Es {
          constructor(e) {
            Wr(this, 'iframes', new WeakMap()),
              Wr(this, 'crossOriginIframeMap', new WeakMap()),
              Wr(this, 'crossOriginIframeMirror', new Cs(an)),
              Wr(this, 'crossOriginIframeStyleMirror'),
              Wr(this, 'crossOriginIframeRootIdMap', new WeakMap()),
              Wr(this, 'mirror'),
              Wr(this, 'mutationCb'),
              Wr(this, 'wrappedEmit'),
              Wr(this, 'loadListener'),
              Wr(this, 'stylesheetManager'),
              Wr(this, 'recordCrossOriginIframes'),
              (this.mutationCb = e.mutationCb),
              (this.wrappedEmit = e.wrappedEmit),
              (this.stylesheetManager = e.stylesheetManager),
              (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
              (this.crossOriginIframeStyleMirror = new Cs(
                this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)
              )),
              (this.mirror = e.mirror),
              this.recordCrossOriginIframes && window.addEventListener('message', this.handleMessage.bind(this));
          }
          addIframe(e) {
            this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e);
          }
          addLoadListener(e) {
            this.loadListener = e;
          }
          attachIframe(e, t) {
            var r, n;
            this.mutationCb({
              adds: [{ parentId: this.mirror.getId(e), nextId: null, node: t }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0,
            }),
              this.recordCrossOriginIframes &&
                (null == (r = e.contentWindow) || r.addEventListener('message', this.handleMessage.bind(this))),
              null == (n = this.loadListener) || n.call(this, e),
              e.contentDocument &&
                e.contentDocument.adoptedStyleSheets &&
                e.contentDocument.adoptedStyleSheets.length > 0 &&
                this.stylesheetManager.adoptStyleSheets(
                  e.contentDocument.adoptedStyleSheets,
                  this.mirror.getId(e.contentDocument)
                );
          }
          handleMessage(e) {
            const t = e;
            if ('rrweb' !== t.data.type || t.origin !== t.data.origin) return;
            if (!e.source) return;
            const r = this.crossOriginIframeMap.get(e.source);
            if (!r) return;
            const n = this.transformCrossOriginEvent(r, t.data.event);
            n && this.wrappedEmit(n, t.data.isCheckout);
          }
          transformCrossOriginEvent(e, t) {
            var r;
            switch (t.type) {
              case Kn.FullSnapshot: {
                this.crossOriginIframeMirror.reset(e),
                  this.crossOriginIframeStyleMirror.reset(e),
                  this.replaceIdOnNode(t.data.node, e);
                const r = t.data.node.id;
                return (
                  this.crossOriginIframeRootIdMap.set(e, r),
                  this.patchRootIdOnNode(t.data.node, r),
                  {
                    timestamp: t.timestamp,
                    type: Kn.IncrementalSnapshot,
                    data: {
                      source: Yn.Mutation,
                      adds: [{ parentId: this.mirror.getId(e), nextId: null, node: t.data.node }],
                      removes: [],
                      texts: [],
                      attributes: [],
                      isAttachIframe: !0,
                    },
                  }
                );
              }
              case Kn.Meta:
              case Kn.Load:
              case Kn.DomContentLoaded:
                return !1;
              case Kn.Plugin:
                return t;
              case Kn.Custom:
                return this.replaceIds(t.data.payload, e, ['id', 'parentId', 'previousId', 'nextId']), t;
              case Kn.IncrementalSnapshot:
                switch (t.data.source) {
                  case Yn.Mutation:
                    return (
                      t.data.adds.forEach((t) => {
                        this.replaceIds(t, e, ['parentId', 'nextId', 'previousId']), this.replaceIdOnNode(t.node, e);
                        const r = this.crossOriginIframeRootIdMap.get(e);
                        r && this.patchRootIdOnNode(t.node, r);
                      }),
                      t.data.removes.forEach((t) => {
                        this.replaceIds(t, e, ['parentId', 'id']);
                      }),
                      t.data.attributes.forEach((t) => {
                        this.replaceIds(t, e, ['id']);
                      }),
                      t.data.texts.forEach((t) => {
                        this.replaceIds(t, e, ['id']);
                      }),
                      t
                    );
                  case Yn.Drag:
                  case Yn.TouchMove:
                  case Yn.MouseMove:
                    return (
                      t.data.positions.forEach((t) => {
                        this.replaceIds(t, e, ['id']);
                      }),
                      t
                    );
                  case Yn.ViewportResize:
                    return !1;
                  case Yn.MediaInteraction:
                  case Yn.MouseInteraction:
                  case Yn.Scroll:
                  case Yn.CanvasMutation:
                  case Yn.Input:
                    return this.replaceIds(t.data, e, ['id']), t;
                  case Yn.StyleSheetRule:
                  case Yn.StyleDeclaration:
                    return this.replaceIds(t.data, e, ['id']), this.replaceStyleIds(t.data, e, ['styleId']), t;
                  case Yn.Font:
                    return t;
                  case Yn.Selection:
                    return (
                      t.data.ranges.forEach((t) => {
                        this.replaceIds(t, e, ['start', 'end']);
                      }),
                      t
                    );
                  case Yn.AdoptedStyleSheet:
                    return (
                      this.replaceIds(t.data, e, ['id']),
                      this.replaceStyleIds(t.data, e, ['styleIds']),
                      null == (r = t.data.styles) ||
                        r.forEach((t) => {
                          this.replaceStyleIds(t, e, ['styleId']);
                        }),
                      t
                    );
                }
            }
            return !1;
          }
          replace(e, t, r, n) {
            for (const s of n)
              (Array.isArray(t[s]) || 'number' == typeof t[s]) &&
                (Array.isArray(t[s]) ? (t[s] = e.getIds(r, t[s])) : (t[s] = e.getId(r, t[s])));
            return t;
          }
          replaceIds(e, t, r) {
            return this.replace(this.crossOriginIframeMirror, e, t, r);
          }
          replaceStyleIds(e, t, r) {
            return this.replace(this.crossOriginIframeStyleMirror, e, t, r);
          }
          replaceIdOnNode(e, t) {
            this.replaceIds(e, t, ['id', 'rootId']),
              'childNodes' in e &&
                e.childNodes.forEach((e) => {
                  this.replaceIdOnNode(e, t);
                });
          }
          patchRootIdOnNode(e, t) {
            e.type === Xr.Document || e.rootId || (e.rootId = t),
              'childNodes' in e &&
                e.childNodes.forEach((e) => {
                  this.patchRootIdOnNode(e, t);
                });
          }
        }
        class Ts {
          constructor(e) {
            Wr(this, 'shadowDoms', new WeakSet()),
              Wr(this, 'mutationCb'),
              Wr(this, 'scrollCb'),
              Wr(this, 'bypassOptions'),
              Wr(this, 'mirror'),
              Wr(this, 'restoreHandlers', []),
              (this.mutationCb = e.mutationCb),
              (this.scrollCb = e.scrollCb),
              (this.bypassOptions = e.bypassOptions),
              (this.mirror = e.mirror),
              this.init();
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document);
          }
          addShadowRoot(e, t) {
            if (!qr(e)) return;
            if (this.shadowDoms.has(e)) return;
            this.shadowDoms.add(e);
            const r = ps(
              {
                ...this.bypassOptions,
                doc: t,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this,
              },
              e
            );
            this.restoreHandlers.push(() => r.observer.disconnect()),
              this.restoreHandlers.push(
                fs({ ...this.bypassOptions, scrollCb: this.scrollCb, doc: e, mirror: this.mirror })
              ),
              ft(() => {
                e.adoptedStyleSheets &&
                  e.adoptedStyleSheets.length > 0 &&
                  this.bypassOptions.stylesheetManager.adoptStyleSheets(
                    e.adoptedStyleSheets,
                    this.mirror.getId(e.host)
                  ),
                  this.restoreHandlers.push(
                    Ss({ mirror: this.mirror, stylesheetManager: this.bypassOptions.stylesheetManager }, e)
                  );
              }, 0);
          }
          observeAttachShadow(e) {
            e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument);
          }
          patchAttachShadow(e, t) {
            const r = this;
            this.restoreHandlers.push(
              On(e.prototype, 'attachShadow', function (e) {
                return function (n) {
                  const s = e.call(this, n);
                  return this.shadowRoot && qn(this) && r.addShadowRoot(this.shadowRoot, t), s;
                };
              })
            );
          }
          reset() {
            this.restoreHandlers.forEach((e) => {
              try {
                e();
              } catch (e) {}
            }),
              (this.restoreHandlers = []),
              (this.shadowDoms = new WeakSet());
          }
        }
        for (
          var xs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            As = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
            ks = 0;
          ks < 64;
          ks++
        )
          As[xs.charCodeAt(ks)] = ks;
        const Rs = new Map();
        const Ds = (e, t, r) => {
          if (!e || (!Ls(e, t) && 'object' != typeof e)) return;
          const n = (function (e, t) {
            let r = Rs.get(e);
            return r || ((r = new Map()), Rs.set(e, r)), r.has(t) || r.set(t, []), r.get(t);
          })(r, e.constructor.name);
          let s = n.indexOf(e);
          return -1 === s && ((s = n.length), n.push(e)), s;
        };
        function Os(e, t, r) {
          if (e instanceof Array) return e.map((e) => Os(e, t, r));
          if (null === e) return e;
          if (
            e instanceof Float32Array ||
            e instanceof Float64Array ||
            e instanceof Int32Array ||
            e instanceof Uint32Array ||
            e instanceof Uint8Array ||
            e instanceof Uint16Array ||
            e instanceof Int16Array ||
            e instanceof Int8Array ||
            e instanceof Uint8ClampedArray
          ) {
            return { rr_type: e.constructor.name, args: [Object.values(e)] };
          }
          if (e instanceof ArrayBuffer) {
            return {
              rr_type: e.constructor.name,
              base64: (function (e) {
                var t,
                  r = new Uint8Array(e),
                  n = r.length,
                  s = '';
                for (t = 0; t < n; t += 3)
                  (s += xs[r[t] >> 2]),
                    (s += xs[((3 & r[t]) << 4) | (r[t + 1] >> 4)]),
                    (s += xs[((15 & r[t + 1]) << 2) | (r[t + 2] >> 6)]),
                    (s += xs[63 & r[t + 2]]);
                return (
                  n % 3 == 2
                    ? (s = s.substring(0, s.length - 1) + '=')
                    : n % 3 == 1 && (s = s.substring(0, s.length - 2) + '=='),
                  s
                );
              })(e),
            };
          }
          if (e instanceof DataView) {
            return { rr_type: e.constructor.name, args: [Os(e.buffer, t, r), e.byteOffset, e.byteLength] };
          }
          if (e instanceof HTMLImageElement) {
            const t = e.constructor.name,
              { src: r } = e;
            return { rr_type: t, src: r };
          }
          if (e instanceof HTMLCanvasElement) {
            return { rr_type: 'HTMLImageElement', src: e.toDataURL() };
          }
          if (e instanceof ImageData) {
            return { rr_type: e.constructor.name, args: [Os(e.data, t, r), e.width, e.height] };
          }
          if (Ls(e, t) || 'object' == typeof e) {
            return { rr_type: e.constructor.name, index: Ds(e, t, r) };
          }
          return e;
        }
        const Ms = (e, t, r) => e.map((e) => Os(e, t, r)),
          Ls = (e, t) => {
            const r = [
              'WebGLActiveInfo',
              'WebGLBuffer',
              'WebGLFramebuffer',
              'WebGLProgram',
              'WebGLRenderbuffer',
              'WebGLShader',
              'WebGLShaderPrecisionFormat',
              'WebGLTexture',
              'WebGLUniformLocation',
              'WebGLVertexArrayObject',
              'WebGLVertexArrayObjectOES',
            ].filter((e) => 'function' == typeof t[e]);
            return Boolean(r.find((r) => e instanceof t[r]));
          };
        function Ns(e, t, r, n) {
          const s = [];
          try {
            const i = On(e.HTMLCanvasElement.prototype, 'getContext', function (e) {
              return function (s) {
                for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                  a[o - 1] = arguments[o];
                if (!Fn(this, t, r, !0)) {
                  const e = (function (e) {
                    return 'experimental-webgl' === e ? 'webgl' : e;
                  })(s);
                  if (('__context' in this || (this.__context = e), n && ['webgl', 'webgl2'].includes(e)))
                    if (a[0] && 'object' == typeof a[0]) {
                      const e = a[0];
                      e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0);
                    } else a.splice(0, 1, { preserveDrawingBuffer: !0 });
                }
                return e.apply(this, [s, ...a]);
              };
            });
            s.push(i);
          } catch {
            console.error('failed to patch HTMLCanvasElement.prototype.getContext');
          }
          return () => {
            s.forEach((e) => e());
          };
        }
        function Ps(e, t, r, n, s, i, a) {
          const o = [],
            c = Object.getOwnPropertyNames(e);
          for (const i of c)
            if (!['isContextLost', 'canvas', 'drawingBufferWidth', 'drawingBufferHeight'].includes(i))
              try {
                if ('function' != typeof e[i]) continue;
                const c = On(e, i, function (e) {
                  return function () {
                    for (var o = arguments.length, c = new Array(o), l = 0; l < o; l++) c[l] = arguments[l];
                    const u = e.apply(this, c);
                    if ((Ds(u, a, this), 'tagName' in this.canvas && !Fn(this.canvas, n, s, !0))) {
                      const e = Ms(c, a, this),
                        n = { type: t, property: i, args: e };
                      r(this.canvas, n);
                    }
                    return u;
                  };
                });
                o.push(c);
              } catch {
                const n = Dn(e, i, {
                  set(e) {
                    r(this.canvas, { type: t, property: i, args: [e], setter: !0 });
                  },
                });
                o.push(n);
              }
          return o;
        }
        const Us =
            'KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpCiAgICAgICAgcmV0dXJuIHRyYW5zcGFyZW50QmxvYk1hcC5nZXQoaWQpOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIHRyYW5zcGFyZW50QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICAgIHJldHVybiBiYXNlNjQ7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gIiI7CiAgICB9CiAgfQogIGNvbnN0IHdvcmtlciA9IHNlbGY7CiAgd29ya2VyLm9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uKGUpIHsKICAgIGlmICgiT2Zmc2NyZWVuQ2FudmFzIiBpbiBnbG9iYWxUaGlzKSB7CiAgICAgIGNvbnN0IHsgaWQsIGJpdG1hcCwgd2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMgfSA9IGUuZGF0YTsKICAgICAgY29uc3QgdHJhbnNwYXJlbnRCYXNlNjQgPSBnZXRUcmFuc3BhcmVudEJsb2JGb3IoCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0LAogICAgICAgIGRhdGFVUkxPcHRpb25zCiAgICAgICk7CiAgICAgIGNvbnN0IG9mZnNjcmVlbiA9IG5ldyBPZmZzY3JlZW5DYW52YXMod2lkdGgsIGhlaWdodCk7CiAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCIyZCIpOwogICAgICBjdHguZHJhd0ltYWdlKGJpdG1hcCwgMCwgMCk7CiAgICAgIGJpdG1hcC5jbG9zZSgpOwogICAgICBjb25zdCBibG9iID0gYXdhaXQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOwogICAgICBjb25zdCB0eXBlID0gYmxvYi50eXBlOwogICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IGJsb2IuYXJyYXlCdWZmZXIoKTsKICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsKICAgICAgaWYgKCFsYXN0QmxvYk1hcC5oYXMoaWQpICYmIGF3YWl0IHRyYW5zcGFyZW50QmFzZTY0ID09PSBiYXNlNjQpIHsKICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOwogICAgICB9CiAgICAgIGlmIChsYXN0QmxvYk1hcC5nZXQoaWQpID09PSBiYXNlNjQpCiAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOwogICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoewogICAgICAgIGlkLAogICAgICAgIHR5cGUsCiAgICAgICAgYmFzZTY0LAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodAogICAgICB9KTsKICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBlLmRhdGEuaWQgfSk7CiAgICB9CiAgfTsKfSkoKTsKLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UtYml0bWFwLWRhdGEtdXJsLXdvcmtlci1CWjFyN1JKRC5qcy5tYXAK',
          Fs =
            'undefined' != typeof window &&
            window.Blob &&
            new Blob([((zs = Us), Uint8Array.from(atob(zs), (e) => e.charCodeAt(0)))], {
              type: 'text/javascript;charset=utf-8',
            });
        var zs;
        function Bs(e) {
          let t;
          try {
            if (((t = Fs && (window.URL || window.webkitURL).createObjectURL(Fs)), !t)) throw '';
            const r = new Worker(t, { name: null == e ? void 0 : e.name });
            return (
              r.addEventListener('error', () => {
                (window.URL || window.webkitURL).revokeObjectURL(t);
              }),
              r
            );
          } catch (t) {
            return new Worker('data:text/javascript;base64,' + Us, { name: null == e ? void 0 : e.name });
          } finally {
            t && (window.URL || window.webkitURL).revokeObjectURL(t);
          }
        }
        class Hs {
          constructor(e) {
            Wr(this, 'pendingCanvasMutations', new Map()),
              Wr(this, 'rafStamps', { latestId: 0, invokeId: null }),
              Wr(this, 'mirror'),
              Wr(this, 'mutationCb'),
              Wr(this, 'resetObservers'),
              Wr(this, 'frozen', !1),
              Wr(this, 'locked', !1),
              Wr(this, 'processMutation', (e, t) => {
                (!(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) &&
                  this.rafStamps.invokeId) ||
                  (this.rafStamps.invokeId = this.rafStamps.latestId),
                  this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []),
                  this.pendingCanvasMutations.get(e).push(t);
              });
            const {
              sampling: t = 'all',
              win: r,
              blockClass: n,
              blockSelector: s,
              recordCanvas: i,
              dataURLOptions: a,
            } = e;
            (this.mutationCb = e.mutationCb),
              (this.mirror = e.mirror),
              i && 'all' === t && this.initCanvasMutationObserver(r, n, s),
              i && 'number' == typeof t && this.initCanvasFPSObserver(t, r, n, s, { dataURLOptions: a });
          }
          reset() {
            this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
          }
          freeze() {
            this.frozen = !0;
          }
          unfreeze() {
            this.frozen = !1;
          }
          lock() {
            this.locked = !0;
          }
          unlock() {
            this.locked = !1;
          }
          initCanvasFPSObserver(e, t, r, n, s) {
            const i = Ns(t, r, n, !0),
              a = new Map(),
              o = new Bs();
            o.onmessage = (e) => {
              const { id: t } = e.data;
              if ((a.set(t, !1), !('base64' in e.data))) return;
              const { base64: r, type: n, width: s, height: i } = e.data;
              this.mutationCb({
                id: t,
                type: Qn['2D'],
                commands: [
                  { property: 'clearRect', args: [0, 0, s, i] },
                  {
                    property: 'drawImage',
                    args: [
                      {
                        rr_type: 'ImageBitmap',
                        args: [{ rr_type: 'Blob', data: [{ rr_type: 'ArrayBuffer', base64: r }], type: n }],
                      },
                      0,
                      0,
                    ],
                  },
                ],
              });
            };
            const c = 1e3 / e;
            let l,
              u = 0;
            const d = (e) => {
              (u && e - u < c) ||
                ((u = e),
                (() => {
                  const e = [];
                  return (
                    t.document.querySelectorAll('canvas').forEach((t) => {
                      Fn(t, r, n, !0) || e.push(t);
                    }),
                    e
                  );
                })().forEach(async (e) => {
                  var t;
                  const r = this.mirror.getId(e);
                  if (a.get(r)) return;
                  if (0 === e.width || 0 === e.height) return;
                  if ((a.set(r, !0), ['webgl', 'webgl2'].includes(e.__context))) {
                    const r = e.getContext(e.__context);
                    !1 ===
                      (null == (t = null == r ? void 0 : r.getContextAttributes())
                        ? void 0
                        : t.preserveDrawingBuffer) && r.clear(r.COLOR_BUFFER_BIT);
                  }
                  const n = await createImageBitmap(e);
                  o.postMessage(
                    { id: r, bitmap: n, width: e.width, height: e.height, dataURLOptions: s.dataURLOptions },
                    [n]
                  );
                })),
                (l = requestAnimationFrame(d));
            };
            (l = requestAnimationFrame(d)),
              (this.resetObservers = () => {
                i(), cancelAnimationFrame(l);
              });
          }
          initCanvasMutationObserver(e, t, r) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const n = Ns(e, t, r, !1),
              s = (function (e, t, r, n) {
                const s = [],
                  i = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
                for (const a of i)
                  try {
                    if ('function' != typeof t.CanvasRenderingContext2D.prototype[a]) continue;
                    const i = On(t.CanvasRenderingContext2D.prototype, a, function (s) {
                      return function () {
                        for (var i = arguments.length, o = new Array(i), c = 0; c < i; c++) o[c] = arguments[c];
                        return (
                          Fn(this.canvas, r, n, !0) ||
                            ft(() => {
                              const r = Ms(o, t, this);
                              e(this.canvas, { type: Qn['2D'], property: a, args: r });
                            }, 0),
                          s.apply(this, o)
                        );
                      };
                    });
                    s.push(i);
                  } catch {
                    const r = Dn(t.CanvasRenderingContext2D.prototype, a, {
                      set(t) {
                        e(this.canvas, { type: Qn['2D'], property: a, args: [t], setter: !0 });
                      },
                    });
                    s.push(r);
                  }
                return () => {
                  s.forEach((e) => e());
                };
              })(this.processMutation.bind(this), e, t, r),
              i = (function (e, t, r, n) {
                const s = [];
                return (
                  s.push(...Ps(t.WebGLRenderingContext.prototype, Qn.WebGL, e, r, n, 0, t)),
                  void 0 !== t.WebGL2RenderingContext &&
                    s.push(...Ps(t.WebGL2RenderingContext.prototype, Qn.WebGL2, e, r, n, 0, t)),
                  () => {
                    s.forEach((e) => e());
                  }
                );
              })(this.processMutation.bind(this), e, t, r, this.mirror);
            this.resetObservers = () => {
              n(), s(), i();
            };
          }
          startPendingCanvasMutationFlusher() {
            requestAnimationFrame(() => this.flushPendingCanvasMutations());
          }
          startRAFTimestamping() {
            const e = (t) => {
              (this.rafStamps.latestId = t), requestAnimationFrame(e);
            };
            requestAnimationFrame(e);
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach((e, t) => {
              const r = this.mirror.getId(t);
              this.flushPendingCanvasMutationFor(t, r);
            }),
              requestAnimationFrame(() => this.flushPendingCanvasMutations());
          }
          flushPendingCanvasMutationFor(e, t) {
            if (this.frozen || this.locked) return;
            const r = this.pendingCanvasMutations.get(e);
            if (!r || -1 === t) return;
            const n = r.map((e) => {
                const { type: t, ...r } = e;
                return r;
              }),
              { type: s } = r[0];
            this.mutationCb({ id: t, type: s, commands: n }), this.pendingCanvasMutations.delete(e);
          }
        }
        class js {
          constructor(e) {
            Wr(this, 'trackedLinkElements', new WeakSet()),
              Wr(this, 'mutationCb'),
              Wr(this, 'adoptedStyleSheetCb'),
              Wr(this, 'styleMirror', new Gn()),
              (this.mutationCb = e.mutationCb),
              (this.adoptedStyleSheetCb = e.adoptedStyleSheetCb);
          }
          attachLinkElement(e, t) {
            '_cssText' in t.attributes &&
              this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [{ id: t.id, attributes: t.attributes }],
              }),
              this.trackLinkElement(e);
          }
          trackLinkElement(e) {
            this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e));
          }
          adoptStyleSheets(e, t) {
            if (0 === e.length) return;
            const r = { id: t, styleIds: [] },
              n = [];
            for (const t of e) {
              let e;
              this.styleMirror.has(t)
                ? (e = this.styleMirror.getId(t))
                : ((e = this.styleMirror.add(t)),
                  n.push({ styleId: e, rules: Array.from(t.rules || CSSRule, (e, t) => ({ rule: Yr(e), index: t })) })),
                r.styleIds.push(e);
            }
            n.length > 0 && (r.styles = n), this.adoptedStyleSheetCb(r);
          }
          reset() {
            this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
          }
          trackStylesheetInLinkElement(e) {}
        }
        class Ws {
          constructor() {
            Wr(this, 'nodeMap', new WeakMap()), Wr(this, 'active', !1);
          }
          inOtherBuffer(e, t) {
            const r = this.nodeMap.get(e);
            return r && Array.from(r).some((e) => e !== t);
          }
          add(e, t) {
            this.active ||
              ((this.active = !0),
              requestAnimationFrame(() => {
                (this.nodeMap = new WeakMap()), (this.active = !1);
              })),
              this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
          }
          destroy() {}
        }
        let Zs,
          Gs,
          Xs,
          Vs = !1;
        try {
          if (2 !== Array.from([1], (e) => 2 * e)[0]) {
            const e = document.createElement('iframe');
            document.body.appendChild(e),
              (Array.from = (null == (Hr = e.contentWindow) ? void 0 : Hr.Array.from) || Array.from),
              document.body.removeChild(e);
          }
        } catch (e) {
          console.debug('Unable to override Array.from', e);
        }
        const qs = new Jr();
        function Ks(e) {
          void 0 === e && (e = {});
          const {
            emit: t,
            checkoutEveryNms: r,
            checkoutEveryNth: n,
            blockClass: s = 'rr-block',
            blockSelector: i = null,
            ignoreClass: a = 'rr-ignore',
            ignoreSelector: o = null,
            maskTextClass: c = 'rr-mask',
            maskTextSelector: l = null,
            inlineStylesheet: u = !0,
            maskAllInputs: d,
            maskInputOptions: h,
            slimDOMOptions: p,
            maskInputFn: m,
            maskTextFn: f,
            hooks: g,
            packFn: b,
            sampling: y = {},
            dataURLOptions: v = {},
            mousemoveWait: S,
            recordDOM: w = !0,
            recordCanvas: I = !1,
            recordCrossOriginIframes: _ = !1,
            recordAfter: C = 'DOMContentLoaded' === e.recordAfter ? e.recordAfter : 'load',
            userTriggeredOnInput: E = !1,
            collectFonts: T = !1,
            inlineImages: x = !1,
            plugins: A,
            keepIframeSrcFn: k = () => !1,
            ignoreCSSAttributes: R = new Set([]),
            errorHandler: D,
          } = e;
          ls = D;
          const O = !_ || window.parent === window;
          let M = !1;
          if (!O)
            try {
              window.parent.document && (M = !1);
            } catch (e) {
              M = !0;
            }
          if (O && !t) throw new Error('emit function is required');
          if (!O && !M) return () => {};
          void 0 !== S && void 0 === y.mousemove && (y.mousemove = S), qs.reset();
          const L =
              !0 === d
                ? {
                    color: !0,
                    date: !0,
                    'datetime-local': !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0,
                    textarea: !0,
                    select: !0,
                    password: !0,
                  }
                : void 0 !== h
                ? h
                : { password: !0 },
            N =
              !0 === p || 'all' === p
                ? {
                    script: !0,
                    comment: !0,
                    headFavicon: !0,
                    headWhitespace: !0,
                    headMetaSocial: !0,
                    headMetaRobots: !0,
                    headMetaHttpEquiv: !0,
                    headMetaVerification: !0,
                    headMetaAuthorship: 'all' === p,
                    headMetaDescKeywords: 'all' === p,
                    headTitleMutations: 'all' === p,
                  }
                : p || {};
          let P;
          !(function (e) {
            var t = this;
            void 0 === e && (e = window),
              'NodeList' in e &&
                !e.NodeList.prototype.forEach &&
                (e.NodeList.prototype.forEach = Array.prototype.forEach),
              'DOMTokenList' in e &&
                !e.DOMTokenList.prototype.forEach &&
                (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
              Node.prototype.contains ||
                (Node.prototype.contains = function () {
                  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                  let s = r[0];
                  if (!(0 in r)) throw new TypeError('1 argument is required');
                  do {
                    if (t === s) return !0;
                  } while ((s = s && s.parentNode));
                  return !1;
                });
          })();
          let U = 0;
          const F = (e) => {
            for (const t of A || []) t.eventProcessor && (e = t.eventProcessor(e));
            return b && !M && (e = b(e)), e;
          };
          Zs = (e, s) => {
            var i;
            const a = e;
            if (
              ((a.timestamp = Mn()),
              !(null == (i = ds[0]) ? void 0 : i.isFrozen()) ||
                a.type === Kn.FullSnapshot ||
                (a.type === Kn.IncrementalSnapshot && a.data.source === Yn.Mutation) ||
                ds.forEach((e) => e.unfreeze()),
              O)
            )
              null == t || t(F(a), s);
            else if (M) {
              const e = { type: 'rrweb', event: F(a), origin: window.location.origin, isCheckout: s };
              window.parent.postMessage(e, '*');
            }
            if (a.type === Kn.FullSnapshot) (P = a), (U = 0);
            else if (a.type === Kn.IncrementalSnapshot) {
              if (a.data.source === Yn.Mutation && a.data.isAttachIframe) return;
              U++;
              const e = n && U >= n,
                t = r && a.timestamp - P.timestamp > r;
              (e || t) && Gs(!0);
            }
          };
          const z = (e) => {
              Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.Mutation, ...e } });
            },
            B = (e) => Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.Scroll, ...e } }),
            H = (e) => Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.CanvasMutation, ...e } }),
            j = new js({
              mutationCb: z,
              adoptedStyleSheetCb: (e) =>
                Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.AdoptedStyleSheet, ...e } }),
            }),
            W = new Es({
              mirror: qs,
              mutationCb: z,
              stylesheetManager: j,
              recordCrossOriginIframes: _,
              wrappedEmit: Zs,
            });
          for (const e of A || [])
            e.getMirror &&
              e.getMirror({
                nodeMirror: qs,
                crossOriginIframeMirror: W.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: W.crossOriginIframeStyleMirror,
              });
          const Z = new Ws();
          Xs = new Hs({
            recordCanvas: I,
            mutationCb: H,
            win: window,
            blockClass: s,
            blockSelector: i,
            mirror: qs,
            sampling: y.canvas,
            dataURLOptions: v,
          });
          const G = new Ts({
            mutationCb: z,
            scrollCb: B,
            bypassOptions: {
              blockClass: s,
              blockSelector: i,
              maskTextClass: c,
              maskTextSelector: l,
              inlineStylesheet: u,
              maskInputOptions: L,
              dataURLOptions: v,
              maskTextFn: f,
              maskInputFn: m,
              recordCanvas: I,
              inlineImages: x,
              sampling: y,
              slimDOMOptions: N,
              iframeManager: W,
              stylesheetManager: j,
              canvasManager: Xs,
              keepIframeSrcFn: k,
              processedNodeManager: Z,
            },
            mirror: qs,
          });
          Gs = function (e) {
            if ((void 0 === e && (e = !1), !w)) return;
            Zs({ type: Kn.Meta, data: { href: window.location.href, width: Pn(), height: Nn() } }, e),
              j.reset(),
              G.init(),
              ds.forEach((e) => e.lock());
            const t = (function (e, t) {
              const {
                mirror: r = new Jr(),
                blockClass: n = 'rr-block',
                blockSelector: s = null,
                maskTextClass: i = 'rr-mask',
                maskTextSelector: a = null,
                inlineStylesheet: o = !0,
                inlineImages: c = !1,
                recordCanvas: l = !1,
                maskAllInputs: u = !1,
                maskTextFn: d,
                maskInputFn: h,
                slimDOM: p = !1,
                dataURLOptions: m,
                preserveWhiteSpace: f,
                onSerialize: g,
                onIframeLoad: b,
                iframeLoadTimeout: y,
                onStylesheetLoad: v,
                stylesheetLoadTimeout: S,
                keepIframeSrcFn: w = () => !1,
              } = t || {};
              return Tn(e, {
                doc: e,
                mirror: r,
                blockClass: n,
                blockSelector: s,
                maskTextClass: i,
                maskTextSelector: a,
                skipChild: !1,
                inlineStylesheet: o,
                maskInputOptions:
                  !0 === u
                    ? {
                        color: !0,
                        date: !0,
                        'datetime-local': !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        password: !0,
                      }
                    : !1 === u
                    ? { password: !0 }
                    : u,
                maskTextFn: d,
                maskInputFn: h,
                slimDOMOptions:
                  !0 === p || 'all' === p
                    ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaDescKeywords: 'all' === p,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaAuthorship: !0,
                        headMetaVerification: !0,
                      }
                    : !1 === p
                    ? {}
                    : p,
                dataURLOptions: m,
                inlineImages: c,
                recordCanvas: l,
                preserveWhiteSpace: f,
                onSerialize: g,
                onIframeLoad: b,
                iframeLoadTimeout: y,
                onStylesheetLoad: v,
                stylesheetLoadTimeout: S,
                keepIframeSrcFn: w,
                newlyAddedElement: !1,
              });
            })(document, {
              mirror: qs,
              blockClass: s,
              blockSelector: i,
              maskTextClass: c,
              maskTextSelector: l,
              inlineStylesheet: u,
              maskAllInputs: L,
              maskTextFn: f,
              slimDOM: N,
              dataURLOptions: v,
              recordCanvas: I,
              inlineImages: x,
              onSerialize: (e) => {
                jn(e, qs) && W.addIframe(e),
                  Wn(e, qs) && j.trackLinkElement(e),
                  Zn(e) && G.addShadowRoot(e.shadowRoot, document);
              },
              onIframeLoad: (e, t) => {
                W.attachIframe(e, t), G.observeAttachShadow(e);
              },
              onStylesheetLoad: (e, t) => {
                j.attachLinkElement(e, t);
              },
              keepIframeSrcFn: k,
            });
            if (!t) return console.warn('Failed to snapshot the document');
            Zs({ type: Kn.FullSnapshot, data: { node: t, initialOffset: Ln(window) } }, e),
              ds.forEach((e) => e.unlock()),
              document.adoptedStyleSheets &&
                document.adoptedStyleSheets.length > 0 &&
                j.adoptStyleSheets(document.adoptedStyleSheets, qs.getId(document));
          };
          try {
            const e = [],
              t = (e) => {
                var t;
                return us(ws)(
                  {
                    mutationCb: z,
                    mousemoveCb: (e, t) => Zs({ type: Kn.IncrementalSnapshot, data: { source: t, positions: e } }),
                    mouseInteractionCb: (e) =>
                      Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.MouseInteraction, ...e } }),
                    scrollCb: B,
                    viewportResizeCb: (e) =>
                      Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.ViewportResize, ...e } }),
                    inputCb: (e) => Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.Input, ...e } }),
                    mediaInteractionCb: (e) =>
                      Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.MediaInteraction, ...e } }),
                    styleSheetRuleCb: (e) =>
                      Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.StyleSheetRule, ...e } }),
                    styleDeclarationCb: (e) =>
                      Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.StyleDeclaration, ...e } }),
                    canvasMutationCb: H,
                    fontCb: (e) => Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.Font, ...e } }),
                    selectionCb: (e) => {
                      Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.Selection, ...e } });
                    },
                    customElementCb: (e) => {
                      Zs({ type: Kn.IncrementalSnapshot, data: { source: Yn.CustomElement, ...e } });
                    },
                    blockClass: s,
                    ignoreClass: a,
                    ignoreSelector: o,
                    maskTextClass: c,
                    maskTextSelector: l,
                    maskInputOptions: L,
                    inlineStylesheet: u,
                    sampling: y,
                    recordDOM: w,
                    recordCanvas: I,
                    inlineImages: x,
                    userTriggeredOnInput: E,
                    collectFonts: T,
                    doc: e,
                    maskInputFn: m,
                    maskTextFn: f,
                    keepIframeSrcFn: k,
                    blockSelector: i,
                    slimDOMOptions: N,
                    dataURLOptions: v,
                    mirror: qs,
                    iframeManager: W,
                    stylesheetManager: j,
                    shadowDomManager: G,
                    processedNodeManager: Z,
                    canvasManager: Xs,
                    ignoreCSSAttributes: R,
                    plugins:
                      (null == (t = null == A ? void 0 : A.filter((e) => e.observer))
                        ? void 0
                        : t.map((e) => ({
                            observer: e.observer,
                            options: e.options,
                            callback: (t) => Zs({ type: Kn.Plugin, data: { plugin: e.name, payload: t } }),
                          }))) || [],
                  },
                  g
                );
              };
            W.addLoadListener((r) => {
              try {
                e.push(t(r.contentDocument));
              } catch (e) {
                console.warn(e);
              }
            });
            const r = () => {
              Gs(), e.push(t(document)), (Vs = !0);
            };
            return (
              'interactive' === document.readyState || 'complete' === document.readyState
                ? r()
                : (e.push(
                    xn('DOMContentLoaded', () => {
                      Zs({ type: Kn.DomContentLoaded, data: {} }), 'DOMContentLoaded' === C && r();
                    })
                  ),
                  e.push(
                    xn(
                      'load',
                      () => {
                        Zs({ type: Kn.Load, data: {} }), 'load' === C && r();
                      },
                      window
                    )
                  )),
              () => {
                e.forEach((e) => e()), Z.destroy(), (Vs = !1), (ls = void 0);
              }
            );
          } catch (e) {
            console.warn(e);
          }
        }
        var Ys, Js;
        (Ks.addCustomEvent = (e, t) => {
          if (!Vs) throw new Error('please add custom event after start recording');
          Zs({ type: Kn.Custom, data: { tag: e, payload: t } });
        }),
          (Ks.freezePage = () => {
            ds.forEach((e) => e.freeze());
          }),
          (Ks.takeFullSnapshot = (e) => {
            if (!Vs) throw new Error('please take full snapshot after start recording');
            Gs(e);
          }),
          (Ks.mirror = qs),
          ((Js = Ys || (Ys = {}))[(Js.NotStarted = 0)] = 'NotStarted'),
          (Js[(Js.Running = 1)] = 'Running'),
          (Js[(Js.Stopped = 2)] = 'Stopped');
        const $s = {
          ignoreClass: 'session-replay-ignore-class',
          blockClass: 'session-replay-block-class',
          maskTextClass: 'session-replay-mask-text-class',
          recordCanvas: !1,
          inlineStylesheet: !0,
          inlineImages: !1,
          collectFonts: !1,
          slimDOMOptions: 'all',
          sampling: { scroll: 150, mousemove: 100, media: 800, input: 'last' },
          maskTextSelector: '*',
          maskInputOptions: {
            color: !1,
            date: !1,
            'datetime-local': !1,
            email: !1,
            month: !1,
            number: !1,
            range: !1,
            search: !1,
            tel: !1,
            text: !1,
            time: !1,
            url: !1,
            week: !1,
            textarea: !1,
            select: !1,
            password: !0,
          },
        };
        let Qs;
        const ei = (e) => {
            try {
              if (2 === e.type && 'head' === e.tagName) return e;
              if ((2 === e.type || 0 === e.type) && e.childNodes)
                for (const t of e.childNodes) {
                  const e = ei(t);
                  if (e) return e;
                }
            } catch (e) {
              return u('whatap-browser-agent-error: findHeadNode', e), null;
            }
            return null;
          },
          ti = (e) => {
            try {
              return e.filter(
                (e) => 3 !== e.type && (2 === e.type && e.childNodes && (e.childNodes = ti(e.childNodes)), !0)
              );
            } catch (t) {
              return u('whatap-browser-agent-error: removeType3', t), e;
            }
          },
          ri = () =>
            new pt((e) => {
              let t = null;
              const r = Ks,
                n = () => {
                  return r({
                    emit: (t) => {
                      if (Se.getAgentConfig().sessionReplayRemoveType3 && 2 === t.type) {
                        const e = ei(t.data.node);
                        e && (e.childNodes = ti(e.childNodes));
                      }
                      const r = Se.getPageInfo().pageLocation || window.location.href;
                      e.isCheckObserver() &&
                        ((e) => {
                          const t = Se.getAgentConfig().sessionReplayAllowPages;
                          return (
                            0 === t.length ||
                            t.some((t) => {
                              try {
                                return t instanceof RegExp ? t.test(e) : 'string' == typeof t && e.startsWith(t);
                              } catch (e) {
                                return !1;
                              }
                            })
                          );
                        })(r) &&
                        e.notify(t);
                    },
                    ...((t = Se.getAgentConfig().sessionReplayMaskAllTexts),
                    (n = Se.getAgentConfig().sessionReplayMaskAllInputs),
                    {
                      slimDOMOptions: $s.slimDOMOptions,
                      sampling: $s.sampling,
                      ignoreClass: $s.ignoreClass,
                      blockClass: $s.blockClass,
                      maskTextClass: $s.maskTextClass,
                      recordCanvas: $s.recordCanvas,
                      inlineStylesheet: $s.inlineStylesheet,
                      inlineImages: $s.inlineImages,
                      collectFonts: $s.collectFonts,
                      maskTextSelector: t ? $s.maskTextSelector : void 0,
                      maskAllInputs: n,
                      maskInputOptions: n ? void 0 : $s.maskInputOptions,
                    }),
                    recordAfter: 'DOMContentLoaded',
                  });
                  var t, n;
                };
              return (
                setTimeout(() => {
                  t = n();
                }, 250),
                () => {
                  t && t(), (t = null);
                }
              );
            });
        const ni = 'session_replay_data';
        var si = class extends Yt {
          constructor(e) {
            super(),
              (this.deflateWorker = zt),
              (this.sessionReplayScrapper = e),
              this.sessionReplayScrapper.setEventListCallback(this.sendData),
              this.deflateWorkerCallback();
          }
          sessionReplayObserver = {
            notify: (e) => {
              this.sessionReplayScrapper.addEvent(e);
            },
          };
          base64ToArrayBuffer(e) {
            const t = atob(e),
              r = t.length,
              n = new Uint8Array(r);
            for (let e = 0; e < r; e++) n[e] = t.charCodeAt(e);
            return n;
          }
          deflateWorkerCallback = () => {
            this.deflateWorker &&
              k(this.deflateWorker, 'message', (e) => {
                if (e.data.type === ni) {
                  const t = this.sessionReplayScrapper.getSessionReplayData({
                    contents: e.data.deflateData,
                    startTimeStamp: G(),
                  });
                  t && new Kt().startDataSend(t, Dt.SESSION_REPLAY_DISPATCHER);
                }
              });
          };
          sendData = (e) => {
            this.deflateWorker && e.length > 0 && this.deflateWorker.postMessage({ data: e, type: ni, slot: 0 });
          };
          startDispatcher() {
            (this.sessionReplayEventObserver = (Qs || (Qs = ri()), Qs)),
              this.sessionReplayEventObserver.subscribe(this.sessionReplayObserver);
          }
          pauseDispatcher() {
            this.sessionReplayEventObserver?.unsubscribe(this.sessionReplayObserver);
          }
        };
        function ii(e) {
          return e.replace(/\s+/g, ' ');
        }
        function ai(e, t) {
          let r = e,
            n = 0;
          for (; n <= 10 && r && 'BODY' !== r.nodeName && 'HTML' !== r.nodeName && 'HEAD' !== r.nodeName; ) {
            for (const e of t) {
              const t = e(r);
              if ('string' == typeof t) {
                const e = t.trim();
                if (e) return M(ii(e), 100);
              }
            }
            if ('FORM' === r.nodeName) break;
            (r = r.parentElement), (n += 1);
          }
        }
        let oi;
        function ci(e) {
          if (!e.isContentEditable) {
            if ('innerText' in e) {
              let t = e.innerText;
              const r = (r) => {
                const n = e.querySelectorAll(r);
                for (let e = 0; e < n.length; e += 1) {
                  const r = n[e];
                  if ('innerText' in r) {
                    const e = r.innerText;
                    e && e.trim().length > 0 && (t = t.replace(e, ''));
                  }
                }
              };
              return window.document?.documentMode && r('script, style'), t;
            }
            return e.textContent;
          }
        }
        const li = [
            (e) => {
              if ((void 0 === oi && (oi = 'labels' in HTMLInputElement.prototype), oi)) {
                if ('labels' in e && e.labels && e.labels.length > 0) return ci(e.labels[0]);
              } else if (e.id) {
                const t =
                  e.ownerDocument &&
                  (function (e, t) {
                    for (let r = 0; r < e.length; r += 1) {
                      const n = e[r];
                      if (t(n, r, e)) return n;
                    }
                  })(e.ownerDocument.querySelectorAll('label'), (t) => t.htmlFor === e.id);
                return t && ci(t);
              }
            },
            (e) => {
              if ('INPUT' === e.nodeName) {
                const t = e,
                  r = t.getAttribute('type');
                if ('button' === r || 'submit' === r || 'reset' === r) return t.value;
              }
            },
            (e) => {
              if ('BUTTON' === e.nodeName || 'LABEL' === e.nodeName || 'button' === e.getAttribute('role'))
                return ci(e);
            },
            (e) => e.getAttribute('aria-label'),
            (e) => {
              const t = e.getAttribute('aria-labelledby');
              if (t)
                return t
                  .split(/\s+/)
                  .map((t) =>
                    (function (e, t) {
                      return e.ownerDocument ? e.ownerDocument.getElementById(t) : null;
                    })(e, t)
                  )
                  .filter((e) => Boolean(e))
                  .map((e) => ci(e))
                  .join(' ');
            },
            (e) => e.getAttribute('alt'),
            (e) => e.getAttribute('name'),
            (e) => e.getAttribute('title'),
            (e) => e.getAttribute('placeholder'),
            (e) => {
              if ('options' in e && e.options.length > 0) return ci(e.options[0]);
            },
          ],
          ui = [(e) => ci(e)];
        const di = [
          'data-testid',
          'data-test',
          'data-qa',
          'data-cy',
          'data-test-id',
          'data-qa-id',
          'data-testing',
          'data-component',
          'data-element',
          'data-source-file',
        ];
        function hi(e) {
          return window.CSS && window.CSS.escape
            ? window.CSS.escape(e)
            : e.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (e, t) {
                return t
                  ? '\0' === e
                    ? '�'
                    : `${e.slice(0, -1)}\\${e.charCodeAt(e.length - 1).toString(16)} `
                  : `\\${e}`;
              });
        }
        function pi(e) {
          return /[0-9]/.test(e);
        }
        function mi(e) {
          function t(t) {
            if (e.hasAttribute(t)) return `${hi(e.tagName)}[${t}="${hi(e.getAttribute(t))}"]`;
          }
          for (const e of di) {
            const r = t(e);
            if (r) return r;
          }
        }
        const fi = [
            mi,
            function (e) {
              if (e.id && !pi(e.id)) return `#${hi(e.id)}`;
            },
          ],
          gi = [
            mi,
            function (e) {
              if ('BODY' !== e.tagName && e.classList.length > 0)
                for (let t = 0; t < e.classList.length; t += 1) {
                  const r = e.classList[t];
                  if (!pi(r)) return `${hi(e.tagName)}.${hi(r)}`;
                }
            },
            function (e) {
              return hi(e.tagName);
            },
          ];
        function bi(e, t) {
          return t ? `${e}>${t}` : e;
        }
        function yi(e, t, r, n) {
          for (const s of t) {
            const t = s(e);
            if (!t) continue;
            const i = bi(t, n);
            if (r(e, i)) return i;
          }
        }
        function vi(e) {
          let t = e.parentElement.firstElementChild,
            r = 1;
          for (; t && t !== e; ) t.tagName === e.tagName && (r += 1), (t = t.nextElementSibling);
          return `${hi(e.tagName)}:nth-of-type(${r})`;
        }
        function Si(e, t) {
          return 1 === e.ownerDocument.querySelectorAll(t).length;
        }
        let wi;
        function Ii(e, t) {
          return (
            1 ===
            e.parentElement.querySelectorAll(
              (function () {
                if (void 0 === wi)
                  try {
                    document.querySelector(':scope'), (wi = !0);
                  } catch {
                    wi = !1;
                  }
                return wi;
              })()
                ? bi(':scope', t)
                : t
            ).length
          );
        }
        function _i(e) {
          let t = '',
            r = e;
          for (; r && 'HTML' !== r.nodeName; ) {
            const e = yi(r, fi, Si, t);
            if (e) return e;
            (t = yi(r, gi, Ii, t) || bi(vi(r), t)), (r = r.parentElement);
          }
          return t;
        }
        const Ci = 1e3;
        let Ei = (function (e) {
          return (e.RAPID_CLICK = 'rapid_click'), e;
        })({});
        function Ti(e, t) {
          const { isRapid: r } = (function (e, t) {
            return (function (e) {
              for (let t = 0; t < e.length - 2; t += 1)
                if (e[t + 3 - 1].event.timeStamp - e[t].event.timeStamp <= 1e3) return !0;
              return !1;
            })(e)
              ? (t.addAnormalClick(Ei.RAPID_CLICK), { isRapid: !0 })
              : { isRapid: !1 };
          })(e, t);
          r ? t.actionComplete(e.map((e) => e.event)) : e.forEach((e) => e.actionComplete());
        }
        const xi = (e) => {
            const t = e.target.getBoundingClientRect(),
              r = ai((n = e.target), li) || ai(n, ui) || '';
            var n;
            return {
              type: 'click',
              target: { width: Math.round(t.width), height: Math.round(t.height), selector: _i(e.target) },
              position: { x: Math.round(e.clientX - t.left), y: Math.round(e.clientY - t.top) },
              name: r,
            };
          },
          Ai = (e, t) => {
            const r = V(),
              n = [],
              s = xi(e);
            return {
              startTimeSet: r,
              event: e,
              addAnormalClick: (e) => {
                n.push(e);
              },
              clone: () => Ai(e, t),
              actionComplete: (i) => {
                const a = { ...s, startTimeSet: r, anormalClickTypes: n, events: i ?? [e], event: e };
                t.notify(a);
              },
            };
          },
          ki = 0,
          Ri = 1,
          Di = 2;
        function Oi(e, t) {
          const r = [];
          let n,
            s = ki;
          function i(e) {
            r.push(e), gt(n), (n = ft(a, 1e3));
          }
          function a() {
            gt(n), s === ki && ((s = Ri), s === Ri && ((s = Di), t(r)));
          }
          return (
            i(e),
            {
              addClick: (e) => {
                return (
                  s === ki &&
                  (r.length > 0 &&
                  ((t = r[r.length - 1].event),
                  (n = e.event),
                  !(
                    t.target === n.target &&
                    ((o = t),
                    (c = n),
                    Math.sqrt(Math.pow(o.clientX - c.clientX, 2) + Math.pow(o.clientY - c.clientY, 2)) <= 100) &&
                    t.timeStamp - n.timeStamp <= Ci
                  ))
                    ? (a(), !1)
                    : (i(e), !0))
                );
                var t, n, o, c;
              },
              stop: () => {
                a();
              },
            }
          );
        }
        let Mi;
        const Li = () =>
          new pt((e) => {
            let t;
            const { stop: r } = k(
              document,
              'pointerup',
              (r) => {
                if (((e) => e.target instanceof Element && !1 !== e.isPrimary)(r)) {
                  !(function (e) {
                    if (!t || !t.addClick(e)) {
                      const r = e.clone();
                      t = Oi(e, (e) => {
                        Ti(e, r);
                      });
                    }
                  })(Ai(r, e));
                }
              },
              { capture: !0 }
            );
            return () => {
              r();
            };
          });
        var Ni,
          Pi,
          Ui = class extends Yt {
            constructor(e) {
              super(), (this.eventScrapper = e);
            }
            clickActionObserver = {
              notify: (e) => {
                this.storeData(e);
              },
            };
            storeData = (e) => {
              const t = this.eventScrapper.getClickEventData(e);
              t && new Kt().startDataSend(t, Dt.EVENT_DISPATCHER);
            };
            startDispatcher = () => {
              Se.getAgentConfig().collectUserClick &&
                ((this.clickActionObservable = (Mi || (Mi = Li()), Mi)),
                this.clickActionObservable.subscribe(this.clickActionObserver));
            };
            pauseDispatcher = () => {
              Se.getAgentConfig().collectUserClick && this.clickActionObservable?.unsubscribe(this.clickActionObserver);
            };
          },
          Fi = function () {
            var e = self.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
            if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e;
          },
          zi = function (e) {
            if ('loading' === document.readyState) return 'loading';
            var t = Fi();
            if (t) {
              if (e < t.domInteractive) return 'loading';
              if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return 'dom-interactive';
              if (0 === t.domComplete || e < t.domComplete) return 'dom-content-loaded';
            }
            return 'complete';
          },
          Bi = function (e) {
            var t = e.nodeName;
            return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, '');
          },
          Hi = function (e, t) {
            var r = '';
            try {
              for (; e && 9 !== e.nodeType; ) {
                var n = e,
                  s = n.id
                    ? '#' + n.id
                    : Bi(n) +
                      (n.classList && n.classList.value && n.classList.value.trim() && n.classList.value.trim().length
                        ? '.' + n.classList.value.trim().replace(/\s+/g, '.')
                        : '');
                if (r.length + s.length > (t || 100) - 1) return r || s;
                if (((r = r ? s + '>' + r : s), n.id)) break;
                e = n.parentNode;
              }
            } catch (e) {}
            return r;
          },
          ji = -1,
          Wi = function () {
            return ji;
          },
          Zi = function (e) {
            addEventListener(
              'pageshow',
              function (t) {
                t.persisted && ((ji = t.timeStamp), e(t));
              },
              !0
            );
          },
          Gi = function () {
            var e = Fi();
            return (e && e.activationStart) || 0;
          },
          Xi = function (e, t) {
            var r = Fi(),
              n = 'navigate';
            return (
              Wi() >= 0
                ? (n = 'back-forward-cache')
                : r &&
                  (document.prerendering || Gi() > 0
                    ? (n = 'prerender')
                    : document.wasDiscarded
                    ? (n = 'restore')
                    : r.type && (n = r.type.replace(/_/g, '-'))),
              {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: 'good',
                delta: 0,
                entries: [],
                id: 'v4-'.concat(Date.now(), '-').concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: n,
              }
            );
          },
          Vi = function (e, t, r) {
            try {
              if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                var n = new PerformanceObserver(function (e) {
                  Promise.resolve().then(function () {
                    t(e.getEntries());
                  });
                });
                return n.observe(Object.assign({ type: e, buffered: !0 }, r || {})), n;
              }
            } catch (e) {}
          },
          qi = function (e, t, r, n) {
            var s, i;
            return function (a) {
              t.value >= 0 &&
                (a || n) &&
                ((i = t.value - (s || 0)) || void 0 === s) &&
                ((s = t.value),
                (t.delta = i),
                (t.rating = (function (e, t) {
                  return e > t[1] ? 'poor' : e > t[0] ? 'needs-improvement' : 'good';
                })(t.value, r)),
                e(t));
            };
          },
          Ki = function (e) {
            requestAnimationFrame(function () {
              return requestAnimationFrame(function () {
                return e();
              });
            });
          },
          Yi = function (e) {
            document.addEventListener('visibilitychange', function () {
              'hidden' === document.visibilityState && e();
            });
          },
          Ji = function (e) {
            var t = !1;
            return function () {
              t || (e(), (t = !0));
            };
          },
          $i = -1,
          Qi = function () {
            return 'hidden' !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
          },
          ea = function (e) {
            'hidden' === document.visibilityState &&
              $i > -1 &&
              (($i = 'visibilitychange' === e.type ? e.timeStamp : 0), ra());
          },
          ta = function () {
            addEventListener('visibilitychange', ea, !0), addEventListener('prerenderingchange', ea, !0);
          },
          ra = function () {
            removeEventListener('visibilitychange', ea, !0), removeEventListener('prerenderingchange', ea, !0);
          },
          na = function () {
            return (
              $i < 0 &&
                (($i = Qi()),
                ta(),
                Zi(function () {
                  setTimeout(function () {
                    ($i = Qi()), ta();
                  }, 0);
                })),
              {
                get firstHiddenTime() {
                  return $i;
                },
              }
            );
          },
          sa = function (e) {
            document.prerendering
              ? addEventListener(
                  'prerenderingchange',
                  function () {
                    return e();
                  },
                  !0
                )
              : e();
          },
          ia = [1800, 3e3],
          aa = function (e, t) {
            (t = t || {}),
              sa(function () {
                var r,
                  n = na(),
                  s = Xi('FCP'),
                  i = Vi('paint', function (e) {
                    e.forEach(function (e) {
                      'first-contentful-paint' === e.name &&
                        (i.disconnect(),
                        e.startTime < n.firstHiddenTime &&
                          ((s.value = Math.max(e.startTime - Gi(), 0)), s.entries.push(e), r(!0)));
                    });
                  });
                i &&
                  ((r = qi(e, s, ia, t.reportAllChanges)),
                  Zi(function (n) {
                    (s = Xi('FCP')),
                      (r = qi(e, s, ia, t.reportAllChanges)),
                      Ki(function () {
                        (s.value = performance.now() - n.timeStamp), r(!0);
                      });
                  }));
              });
          },
          oa = [0.1, 0.25],
          ca = 0,
          la = 1 / 0,
          ua = 0,
          da = function (e) {
            e.forEach(function (e) {
              e.interactionId &&
                ((la = Math.min(la, e.interactionId)),
                (ua = Math.max(ua, e.interactionId)),
                (ca = ua ? (ua - la) / 7 + 1 : 0));
            });
          },
          ha = function () {
            return Ni ? ca : performance.interactionCount || 0;
          },
          pa = function () {
            'interactionCount' in performance ||
              Ni ||
              (Ni = Vi('event', da, { type: 'event', buffered: !0, durationThreshold: 0 }));
          },
          ma = [],
          fa = new Map(),
          ga = 0,
          ba = [],
          ya = function (e) {
            if (
              (ba.forEach(function (t) {
                return t(e);
              }),
              e.interactionId || 'first-input' === e.entryType)
            ) {
              var t = ma[ma.length - 1],
                r = fa.get(e.interactionId);
              if (r || ma.length < 10 || e.duration > t.latency) {
                if (r)
                  e.duration > r.latency
                    ? ((r.entries = [e]), (r.latency = e.duration))
                    : e.duration === r.latency && e.startTime === r.entries[0].startTime && r.entries.push(e);
                else {
                  var n = { id: e.interactionId, latency: e.duration, entries: [e] };
                  fa.set(n.id, n), ma.push(n);
                }
                ma.sort(function (e, t) {
                  return t.latency - e.latency;
                }),
                  ma.length > 10 &&
                    ma.splice(10).forEach(function (e) {
                      return fa.delete(e.id);
                    });
              }
            }
          },
          va = function (e) {
            var t = self.requestIdleCallback || self.setTimeout,
              r = -1;
            return (e = Ji(e)), 'hidden' === document.visibilityState ? e() : ((r = t(e)), Yi(e)), r;
          },
          Sa = [200, 500],
          wa = function (e, t) {
            'PerformanceEventTiming' in self &&
              'interactionId' in PerformanceEventTiming.prototype &&
              ((t = t || {}),
              sa(function () {
                var r;
                pa();
                var n,
                  s = Xi('INP'),
                  i = function (e) {
                    va(function () {
                      e.forEach(ya);
                      var t = (function () {
                        var e = Math.min(ma.length - 1, Math.floor((ha() - ga) / 50));
                        return ma[e];
                      })();
                      t && t.latency !== s.value && ((s.value = t.latency), (s.entries = t.entries), n());
                    });
                  },
                  a = Vi('event', i, {
                    durationThreshold: null !== (r = t.durationThreshold) && void 0 !== r ? r : 40,
                  });
                (n = qi(e, s, Sa, t.reportAllChanges)),
                  a &&
                    (a.observe({ type: 'first-input', buffered: !0 }),
                    Yi(function () {
                      i(a.takeRecords()), n(!0);
                    }),
                    Zi(function () {
                      (ga = ha()), (ma.length = 0), fa.clear(), (s = Xi('INP')), (n = qi(e, s, Sa, t.reportAllChanges));
                    }));
              }));
          },
          Ia = [],
          _a = [],
          Ca = 0,
          Ea = new WeakMap(),
          Ta = new Map(),
          xa = -1,
          Aa = function (e) {
            (Ia = Ia.concat(e)), ka();
          },
          ka = function () {
            xa < 0 && (xa = va(Ra));
          },
          Ra = function () {
            Ta.size > 10 &&
              Ta.forEach(function (e, t) {
                fa.has(t) || Ta.delete(t);
              });
            var e = ma.map(function (e) {
                return Ea.get(e.entries[0]);
              }),
              t = _a.length - 50;
            _a = _a.filter(function (r, n) {
              return n >= t || e.includes(r);
            });
            for (var r = new Set(), n = 0; n < _a.length; n++) {
              var s = _a[n];
              Na(s.startTime, s.processingEnd).forEach(function (e) {
                r.add(e);
              });
            }
            var i = Ia.length - 1 - 50;
            (Ia = Ia.filter(function (e, t) {
              return (e.startTime > Ca && t > i) || r.has(e);
            })),
              (xa = -1);
          };
        ba.push(
          function (e) {
            e.interactionId && e.target && !Ta.has(e.interactionId) && Ta.set(e.interactionId, e.target);
          },
          function (e) {
            var t,
              r = e.startTime + e.duration;
            Ca = Math.max(Ca, e.processingEnd);
            for (var n = _a.length - 1; n >= 0; n--) {
              var s = _a[n];
              if (Math.abs(r - s.renderTime) <= 8) {
                ((t = s).startTime = Math.min(e.startTime, t.startTime)),
                  (t.processingStart = Math.min(e.processingStart, t.processingStart)),
                  (t.processingEnd = Math.max(e.processingEnd, t.processingEnd)),
                  t.entries.push(e);
                break;
              }
            }
            t ||
              ((t = {
                startTime: e.startTime,
                processingStart: e.processingStart,
                processingEnd: e.processingEnd,
                renderTime: r,
                entries: [e],
              }),
              _a.push(t)),
              (e.interactionId || 'first-input' === e.entryType) && Ea.set(e, t),
              ka();
          }
        );
        var Da,
          Oa,
          Ma,
          La,
          Na = function (e, t) {
            for (var r, n = [], s = 0; (r = Ia[s]); s++)
              if (!(r.startTime + r.duration < e)) {
                if (r.startTime > t) break;
                n.push(r);
              }
            return n;
          },
          Pa = [2500, 4e3],
          Ua = {},
          Fa = { passive: !0, capture: !0 },
          za = new Date(),
          Ba = function (e, t) {
            Da || ((Da = t), (Oa = e), (Ma = new Date()), Wa(removeEventListener), Ha());
          },
          Ha = function () {
            if (Oa >= 0 && Oa < Ma - za) {
              var e = {
                entryType: 'first-input',
                name: Da.type,
                target: Da.target,
                cancelable: Da.cancelable,
                startTime: Da.timeStamp,
                processingStart: Da.timeStamp + Oa,
              };
              La.forEach(function (t) {
                t(e);
              }),
                (La = []);
            }
          },
          ja = function (e) {
            if (e.cancelable) {
              var t = (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
              'pointerdown' == e.type
                ? (function (e, t) {
                    var r = function () {
                        Ba(e, t), s();
                      },
                      n = function () {
                        s();
                      },
                      s = function () {
                        removeEventListener('pointerup', r, Fa), removeEventListener('pointercancel', n, Fa);
                      };
                    addEventListener('pointerup', r, Fa), addEventListener('pointercancel', n, Fa);
                  })(t, e)
                : Ba(t, e);
            }
          },
          Wa = function (e) {
            ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(function (t) {
              return e(t, ja, Fa);
            });
          },
          Za = [100, 300],
          Ga = function (e, t) {
            !(function (e, t) {
              (t = t || {}),
                sa(function () {
                  var r,
                    n = na(),
                    s = Xi('FID'),
                    i = function (e) {
                      e.startTime < n.firstHiddenTime &&
                        ((s.value = e.processingStart - e.startTime), s.entries.push(e), r(!0));
                    },
                    a = function (e) {
                      e.forEach(i);
                    },
                    o = Vi('first-input', a);
                  (r = qi(e, s, Za, t.reportAllChanges)),
                    o &&
                      (Yi(
                        Ji(function () {
                          a(o.takeRecords()), o.disconnect();
                        })
                      ),
                      Zi(function () {
                        var n;
                        (s = Xi('FID')),
                          (r = qi(e, s, Za, t.reportAllChanges)),
                          (La = []),
                          (Oa = -1),
                          (Da = null),
                          Wa(addEventListener),
                          (n = i),
                          La.push(n),
                          Ha();
                      }));
                });
            })(function (t) {
              var r = (function (e) {
                var t = e.entries[0],
                  r = {
                    eventTarget: Hi(t.target),
                    eventType: t.name,
                    eventTime: t.startTime,
                    eventEntry: t,
                    loadState: zi(t.startTime),
                  };
                return Object.assign(e, { attribution: r });
              })(t);
              e(r);
            }, t);
          };
        let Xa;
        const Va = () => {
          const e = new pt(
            (e) => (
              (function (e, t) {
                !(function (e, t) {
                  (t = t || {}),
                    aa(
                      Ji(function () {
                        var r,
                          n = Xi('CLS', 0),
                          s = 0,
                          i = [],
                          a = function (e) {
                            e.forEach(function (e) {
                              if (!e.hadRecentInput) {
                                var t = i[0],
                                  r = i[i.length - 1];
                                s && e.startTime - r.startTime < 1e3 && e.startTime - t.startTime < 5e3
                                  ? ((s += e.value), i.push(e))
                                  : ((s = e.value), (i = [e]));
                              }
                            }),
                              s > n.value && ((n.value = s), (n.entries = i), r());
                          },
                          o = Vi('layout-shift', a);
                        o &&
                          ((r = qi(e, n, oa, t.reportAllChanges)),
                          Yi(function () {
                            a(o.takeRecords()), r(!0);
                          }),
                          Zi(function () {
                            (s = 0),
                              (n = Xi('CLS', 0)),
                              (r = qi(e, n, oa, t.reportAllChanges)),
                              Ki(function () {
                                return r();
                              });
                          }),
                          setTimeout(r, 0));
                      })
                    );
                })(function (t) {
                  var r = (function (e) {
                    var t,
                      r = {};
                    if (e.entries.length) {
                      var n = e.entries.reduce(function (e, t) {
                        return e && e.value > t.value ? e : t;
                      });
                      if (n && n.sources && n.sources.length) {
                        var s =
                          (t = n.sources).find(function (e) {
                            return e.node && 1 === e.node.nodeType;
                          }) || t[0];
                        s &&
                          (r = {
                            largestShiftTarget: Hi(s.node),
                            largestShiftTime: n.startTime,
                            largestShiftValue: n.value,
                            largestShiftSource: s,
                            largestShiftEntry: n,
                            loadState: zi(n.startTime),
                          });
                      }
                    }
                    return Object.assign(e, { attribution: r });
                  })(t);
                  e(r);
                }, t);
              })((t) => {
                e.notify(t);
              }),
              (function (e, t) {
                !(function (e, t) {
                  (t = t || {}),
                    sa(function () {
                      var r,
                        n = na(),
                        s = Xi('LCP'),
                        i = function (e) {
                          t.reportAllChanges || (e = e.slice(-1)),
                            e.forEach(function (e) {
                              e.startTime < n.firstHiddenTime &&
                                ((s.value = Math.max(e.startTime - Gi(), 0)), (s.entries = [e]), r());
                            });
                        },
                        a = Vi('largest-contentful-paint', i);
                      if (a) {
                        r = qi(e, s, Pa, t.reportAllChanges);
                        var o = Ji(function () {
                          Ua[s.id] || (i(a.takeRecords()), a.disconnect(), (Ua[s.id] = !0), r(!0));
                        });
                        ['keydown', 'click'].forEach(function (e) {
                          addEventListener(
                            e,
                            function () {
                              return va(o);
                            },
                            { once: !0, capture: !0 }
                          );
                        }),
                          Yi(o),
                          Zi(function (n) {
                            (s = Xi('LCP')),
                              (r = qi(e, s, Pa, t.reportAllChanges)),
                              Ki(function () {
                                (s.value = performance.now() - n.timeStamp), (Ua[s.id] = !0), r(!0);
                              });
                          });
                      }
                    });
                })(function (t) {
                  var r = (function (e) {
                    var t = {
                      timeToFirstByte: 0,
                      resourceLoadDelay: 0,
                      resourceLoadDuration: 0,
                      elementRenderDelay: e.value,
                    };
                    if (e.entries.length) {
                      var r = Fi();
                      if (r) {
                        var n = r.activationStart || 0,
                          s = e.entries[e.entries.length - 1],
                          i =
                            s.url &&
                            performance.getEntriesByType('resource').filter(function (e) {
                              return e.name === s.url;
                            })[0],
                          a = Math.max(0, r.responseStart - n),
                          o = Math.max(a, i ? (i.requestStart || i.startTime) - n : 0),
                          c = Math.max(o, i ? i.responseEnd - n : 0),
                          l = Math.max(c, s.startTime - n);
                        (t = {
                          element: Hi(s.element),
                          timeToFirstByte: a,
                          resourceLoadDelay: o - a,
                          resourceLoadDuration: c - o,
                          elementRenderDelay: l - c,
                          navigationEntry: r,
                          lcpEntry: s,
                        }),
                          s.url && (t.url = s.url),
                          i && (t.lcpResourceEntry = i);
                      }
                    }
                    return Object.assign(e, { attribution: t });
                  })(t);
                  e(r);
                }, t);
              })((t) => {
                e.notify(t);
              }),
              Ga((t) => {
                e.notify(t);
              }),
              (function (e, t) {
                Pi || (Pi = Vi('long-animation-frame', Aa)),
                  wa(function (t) {
                    var r = (function (e) {
                      var t = e.entries[0],
                        r = Ea.get(t),
                        n = t.processingStart,
                        s = r.processingEnd,
                        i = r.entries.sort(function (e, t) {
                          return e.processingStart - t.processingStart;
                        }),
                        a = Na(t.startTime, s),
                        o = e.entries.find(function (e) {
                          return e.target;
                        }),
                        c = (o && o.target) || Ta.get(t.interactionId),
                        l = [t.startTime + t.duration, s].concat(
                          a.map(function (e) {
                            return e.startTime + e.duration;
                          })
                        ),
                        u = Math.max.apply(Math, l),
                        d = {
                          interactionTarget: Hi(c),
                          interactionTargetElement: c,
                          interactionType: t.name.startsWith('key') ? 'keyboard' : 'pointer',
                          interactionTime: t.startTime,
                          nextPaintTime: u,
                          processedEventEntries: i,
                          longAnimationFrameEntries: a,
                          inputDelay: n - t.startTime,
                          processingDuration: s - n,
                          presentationDelay: Math.max(u - s, 0),
                          loadState: zi(t.startTime),
                        };
                      return Object.assign(e, { attribution: d });
                    })(t);
                    e(r);
                  }, t);
              })((t) => {
                e.notify(t);
              }),
              () => {}
            )
          );
          return e;
        };
        var qa = class extends Yt {
          constructor(e) {
            super(), (this.webVitalsScrapper = e);
          }
          storeData = (e) => {
            const t = this.webVitalsScrapper.getWebVitalsData(e);
            t && new Kt().startDataSend(t, Dt.WEB_VITALS_DISPATCHER);
          };
          webVitalsObserver = {
            notify: (e) => {
              this.storeData(e);
            },
          };
          startDispatcher = () => {
            (this.webVitalsObservable = (Xa || (Xa = Va()), Xa)),
              this.webVitalsObservable.subscribe(this.webVitalsObserver);
          };
          pauseDispatcher = () => {
            this.webVitalsObservable?.unsubscribe(this.webVitalsObserver);
          };
        };
        const Ka = 0,
          Ya = 10,
          Ja = 100,
          $a = 101,
          Qa = 102,
          eo = 103,
          to = 200,
          ro = 201,
          no = 202,
          so = 203,
          io = 204,
          ao = 205,
          oo = 206,
          co = 207,
          lo = 208,
          uo = 226,
          ho = 300,
          po = 301,
          mo = 302,
          fo = 303,
          go = 304,
          bo = 305,
          yo = 306,
          vo = 307,
          So = 308,
          wo = 400,
          Io = 401,
          _o = 402,
          Co = 403,
          Eo = 404,
          To = 405,
          xo = 406,
          Ao = 407,
          ko = 408,
          Ro = 409,
          Do = 410,
          Oo = 411,
          Mo = 412,
          Lo = 413,
          No = 414,
          Po = 415,
          Uo = 416,
          Fo = 417,
          zo = 418,
          Bo = 421,
          Ho = 422,
          jo = 423,
          Wo = 424,
          Zo = 425,
          Go = 426,
          Xo = 428,
          Vo = 429,
          qo = 431,
          Ko = 451,
          Yo = 500,
          Jo = 501,
          $o = 502,
          Qo = 503,
          ec = 504,
          tc = 505,
          rc = 506,
          nc = 507,
          sc = 508,
          ic = 510,
          ac = 511,
          oc = 599,
          cc = {
            [Ka]: 'Request Failed',
            [Ya]: 'Opaque',
            [Ja]: 'Continue',
            [$a]: 'Switching Protocols',
            [Qa]: 'Processing',
            [eo]: 'Early Hints',
            [to]: 'OK',
            [ro]: 'Created',
            [no]: 'Accepted',
            [so]: 'Non-Authoritative Information',
            [io]: 'No Content',
            [ao]: 'Reset Content',
            [oo]: 'Partial Content',
            [co]: 'Multi-Status',
            [lo]: 'Already Reported',
            [uo]: 'IM Used',
            [ho]: 'Multiple Choices',
            [po]: 'Moved Permanently',
            [mo]: 'Found',
            [fo]: 'See Other',
            [go]: 'Not Modified',
            [bo]: 'Use Proxy',
            [yo]: 'Switch Proxy',
            [vo]: 'Temporary Redirect',
            [So]: 'Permanent Redirect',
            [wo]: 'Bad Request',
            [Io]: 'Unauthorized',
            [_o]: 'Payment Required',
            [Co]: 'Forbidden',
            [Eo]: 'Not Found',
            [To]: 'Method Not Allowed',
            [xo]: 'Not Acceptable',
            [Ao]: 'Proxy Authentication Required',
            [ko]: 'Request Timeout',
            [Ro]: 'Conflict',
            [Do]: 'Gone',
            [Oo]: 'Length Required',
            [Mo]: 'Precondition Failed',
            [Lo]: 'Request Entity Too Large',
            [No]: 'Request URI Too Long',
            [Po]: 'Unsupported Media Type',
            [Uo]: 'Requested Range Not Satisfiable',
            [Fo]: 'Expectation Failed',
            [zo]: "I'm a teapot",
            [Bo]: 'Misdirected Request',
            [Ho]: 'Unprocessable Entity',
            [jo]: 'Locked',
            [Wo]: 'Failed Dependency',
            [Zo]: 'Too Early',
            [Go]: 'Upgrade Required',
            [Xo]: 'Precondition Required',
            [Vo]: 'Too Many Requests',
            [qo]: 'Request Header Fields Too Large',
            [Ko]: 'Unavailable For Legal Reasons',
            [Yo]: 'Internal Server Error',
            [Jo]: 'Not Implemented',
            [$o]: 'Bad Gateway',
            [Qo]: 'Service Unavailable',
            [ec]: 'Gateway Timeout',
            [tc]: 'HTTP Version Not Supported',
            [rc]: 'Variant Also Negotiates',
            [nc]: 'Insufficient Storage',
            [sc]: 'Loop Detected',
            [ic]: 'Not Extended',
            [ac]: 'Network Authentication Required',
            [oc]: 'Network Connect Timeout Error',
          },
          lc = (e) => cc[e] || '';
        class uc {
          convertTime(e, t, r) {
            return { duration: B(H(t, r)) || -999, start: B(H(e, t)) || -999 };
          }
          isRedirection = (e) => e.fetchStart !== e.startTime;
          isCollectableEntry = (e) => {
            if (
              !A([
                e.startTime,
                e.fetchStart,
                e.domainLookupStart,
                e.domainLookupEnd,
                e.connectStart,
                e.connectEnd,
                e.requestStart,
                e.responseStart,
                e.responseEnd,
              ])
            )
              return;
            if (!this.isRedirection(e)) return e;
            const { startTime: t, fetchStart: r } = e;
            let { redirectStart: n, redirectEnd: s } = e;
            return (
              n < t && (n = t), s < t && (s = r), A([t, n, s, r]) ? { ...e, redirectEnd: s, redirectStart: n } : void 0
            );
          };
        }
        const dc = 'none',
          hc = -999;
        var pc = class extends uc {
          constructor() {
            super();
          }
          parseStack = function (e) {
            return void 0 === e && (e = ''), e.split('\n ');
          };
          removeLineFeed = (e) => e.replace(/(\r\n|\n|\r|\\n)/gm, '');
          rebuildErrorData = (e) => {
            if (Se.getAgentConfig().ignoreStatusZero && 0 === e.data?.ajaxStatus) return null;
            const t = e.data?.messageSummary || dc;
            let r = this.removeLineFeed(t);
            const n = this.parseStack(e.stack),
              s = void 0 !== e.data?.ajaxStatus ? e.data?.ajaxStatus : hc,
              i = e.data?.ajaxUrl || dc;
            s !== hc && t === dc && (r = lc(s));
            const a = e.timestamp,
              o = e.type;
            return {
              message: 'console' === o ? 'console error' : r,
              summaryMessage: r,
              stack: n,
              status: s,
              url: i,
              timestamp: a,
              type: o,
            };
          };
          getErrorData = (e) => this.rebuildErrorData(e);
        };
        var mc = class extends uc {
          constructor() {
            super();
          }
          getClickEventData = (e) => {
            const t = b(),
              r = B(e.startTimeSet.highResolutionTime),
              n = B(H(Se.getPageActivityStartTime(), e.startTimeSet.timeStamp)) || 0;
            let s = !1;
            return (
              e.anormalClickTypes.forEach((e) => {
                e === Ei.RAPID_CLICK && (s = !0);
              }),
              {
                startTime: r,
                startTimeStamp: e.startTimeSet.timeStamp,
                eventID: t,
                type: s ? 'rapid_click' : 'click',
                eventInfo: {
                  name: e.name,
                  duration: n,
                  customDuration: -1,
                  elementId: e.target.selector,
                  contents: JSON.stringify(e.target),
                },
              }
            );
          };
          getCustomEventData = (e) => {
            const t = b(),
              r = e.startTimeStamp - W(),
              n = B(H(Se.getPageActivityStartTime(), e.startTimeStamp)) || 0;
            return {
              startTime: r,
              startTimeStamp: e.startTimeStamp,
              eventID: t,
              type: 'custom',
              eventInfo: {
                name: e.eventName,
                duration: n,
                customDuration: e.customDuration,
                elementId: '',
                contents: e.contents,
              },
            };
          };
        };
        var fc = class extends uc {
          constructor() {
            super();
          }
          changeFormat = (e) => ({
            startTime: e.startTime,
            redirectStart: e.redirectStart,
            redirectEnd: e.redirectEnd,
            fetchStart: e.fetchStart,
            domainLookupStart: e.domainLookupStart,
            domainLookupEnd: e.domainLookupEnd,
            connectStart: e.connectStart,
            secureConnectionStart: e.secureConnectionStart,
            connectEnd: e.connectEnd,
            requestStart: e.requestStart,
            responseStart: e.responseStart,
            responseEnd: e.responseEnd,
            domInteractive: e.domInteractive,
            domContentLoadedEventStart: e.domContentLoadedEventStart,
            domContentLoadedEventEnd: e.domContentLoadedEventEnd,
            domComplete: e.domComplete,
            loadEventStart: e.loadEventStart,
            loadEventEnd: e.loadEventEnd,
            duration: e.duration,
          });
          changeTimingFormat = (e) => ({
            startTime: Z(e.navigationStart),
            redirectStart: Z(e.redirectStart),
            redirectEnd: Z(e.responseEnd),
            fetchStart: Z(e.fetchStart),
            domainLookupStart: Z(e.domainLookupStart),
            domainLookupEnd: Z(e.domainLookupEnd),
            connectStart: Z(e.connectStart),
            secureConnectionStart: Z(e.secureConnectionStart),
            connectEnd: Z(e.connectEnd),
            requestStart: Z(e.requestStart),
            responseStart: Z(e.responseStart),
            responseEnd: Z(e.responseEnd),
            domInteractive: Z(e.domInteractive),
            domContentLoadedEventStart: Z(e.domContentLoadedEventStart),
            domContentLoadedEventEnd: Z(e.domContentLoadedEventEnd),
            domComplete: Z(e.domComplete),
            loadEventStart: Z(e.loadEventStart),
            loadEventEnd: Z(e.loadEventEnd),
            duration: e.loadEventEnd - e.navigationStart,
          });
          rebuildData = () => {
            const e = _r(),
              t = this.changeFormat(e),
              r = { duration: -999, start: -999 },
              {
                connectEnd: n,
                connectStart: s,
                domComplete: i,
                domContentLoadedEventEnd: a,
                domContentLoadedEventStart: o,
                domInteractive: c,
                domainLookupEnd: l,
                domainLookupStart: u,
                duration: d,
                fetchStart: h,
                loadEventStart: p,
                redirectEnd: m,
                redirectStart: f,
                requestStart: g,
                responseEnd: b,
                responseStart: y,
                secureConnectionStart: v,
              } = t;
            let { loadEventEnd: S } = t;
            0 === S && (S = X());
            const w = {
              redirect: r,
              cache: r,
              connect: r,
              dns: r,
              ssl: r,
              download: this.convertTime(0, y, b),
              firstByte: this.convertTime(0, g, y),
              domInteractive: B(c) || 0,
              domContentLoaded: this.convertTime(0, o, a),
              domComplete: B(i) || 0,
              domLoad: this.convertTime(0, p, S),
              loadTime: B(d) || 0,
              backendTime: B(b) || 0,
              frontendTime: this.convertTime(0, c, S),
              renderTime: this.convertTime(0, c, i),
            };
            return (
              n !== h && ((w.connect = this.convertTime(0, s, n)), A([s, v, n]) && (w.ssl = this.convertTime(0, v, n))),
              l !== h && (w.dns = this.convertTime(0, u, l)),
              h !== u && A([h, u]) && (w.cache = this.convertTime(0, h, u)),
              this.isRedirection(t) && (w.redirect = this.convertTime(0, f, m)),
              w
            );
          };
          checkLoadEventEnd = () =>
            new Promise((e) => {
              let t = null;
              (t = (function (e, t) {
                if (mt) return E(mt, 'setInterval')(e, t);
              })(() => {
                'timing' in window.performance
                  ? window.performance.timing.loadEventEnd && (t && bt(t), (t = null), e('loadend'))
                  : performance.getEntriesByType('navigation').length > 0 &&
                    performance.getEntriesByType('navigation')[0].loadEventEnd &&
                    (t && bt(t), (t = null), e('loadend'));
              }, 100)),
                ft(() => {
                  t && (bt(t), (t = null), e('loadend_timeout'));
                }, 5e3);
            });
          getNavigationData = async () => {
            await this.checkLoadEventEnd();
            const e = this.rebuildData();
            return { startTimeStamp: W(), data: e, eventID: m(y.next()) };
          };
          getNavigationDataNoWait = () => {
            const e = this.rebuildData();
            return { startTimeStamp: W(), data: e, eventID: m(y.next()) };
          };
        };
        var gc = class extends uc {
          constructor(e) {
            super(), (this.isInitialLoad = e), (this.resourceList = []);
          }
          getAjaxResourceTiming = (e) => {
            if (!performance || !('getEntriesByName' in performance)) return;
            if (!e?.url) return;
            const t = performance.getEntriesByName(e.url, 'resource');
            if (!t.length) return;
            const r = H(e.startTimeSet.highResolutionTime, e.endTimeSet.highResolutionTime),
              n = t
                .map((e) => {
                  if (!('toJSON' in e)) {
                    return ((e) => {
                      const t = {};
                      for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                      return t;
                    })(e);
                  }
                  return e.toJSON();
                })
                .filter(this.toValidEntry)
                .filter((t) =>
                  this.isBetween(
                    t,
                    e.startTimeSet.highResolutionTime,
                    this.endTime({ startTime: e.startTimeSet.highResolutionTime, duration: r })
                  )
                );
            return 1 === n.length
              ? n[0]
              : n.length > 1
              ? this.getMinimumDifferenceResource(n, e.endTimeSet.highResolutionTime)
              : void 0;
          };
          firstCanBeOptionRequest = (e) => this.endTime(e[0]) <= e[1].startTime;
          endTime = (e) => e.startTime + e.duration;
          getMinimumDifferenceResource = (e, t) => {
            let r,
              n = 0;
            return (
              e.forEach((e, s) => {
                const i = Math.abs(this.endTime(e) - t);
                void 0 === r ? (r = i) : ((r = Math.min(r, i)), r === i && (n = s));
              }),
              e[n]
            );
          };
          isBetween = (e, t, r) => {
            const n = t - 1,
              s = r + 1;
            return e.startTime >= n && this.endTime(e) <= s;
          };
          toValidEntry = (e) => {
            if (
              !(
                'startTime' in e &&
                'redirectStart' in e &&
                'redirectEnd' in e &&
                'fetchStart' in e &&
                'domainLookupStart' in e &&
                'domainLookupEnd' in e &&
                'connectStart' in e &&
                'connectEnd' in e &&
                'requestStart' in e &&
                'responseStart' in e &&
                'responseEnd' in e
              )
            )
              return;
            if (
              !A([
                e.startTime,
                e.fetchStart,
                e.domainLookupStart,
                e.domainLookupEnd,
                e.connectStart,
                e.connectEnd,
                e.requestStart,
                e.responseStart,
                e.responseEnd,
              ])
            )
              return;
            if (!this.isRedirection(e)) return e;
            let { redirectStart: t, redirectEnd: r } = e;
            return (
              t < e.startTime && (t = e.startTime),
              r < e.startTime && (r = e.fetchStart),
              A([e.startTime, t, r, e.fetchStart]) ? { ...e, redirectEnd: r, redirectStart: t } : void 0
            );
          };
          changeFormat = (e) => ({
            name: e.name,
            startTime: e.startTime,
            duration: e.duration,
            fetchStart: e.fetchStart,
            domainLookupStart: e.domainLookupStart,
            domainLookupEnd: e.domainLookupEnd,
            connectStart: e.connectStart,
            secureConnectionStart: e.secureConnectionStart,
            connectEnd: e.connectEnd,
            requestStart: e.requestStart,
            responseStart: e.responseStart,
            responseEnd: e.responseEnd,
            redirectStart: e.redirectStart,
            redirectEnd: e.redirectEnd,
            decodedBodySize: e.decodedBodySize,
          });
          computePerformanceResourceDuration = (e) => {
            const { duration: t, startTime: r, responseEnd: n } = e;
            return 0 === t && r < n ? B(H(r, n)) || 0 : B(t) || 0;
          };
          computeSize = (e) => (e.startTime < e.responseStart ? e.decodedBodySize : 0);
          computeEntryTracingInfo(e) {
            return e.traceId ? e.traceId : 'none';
          }
          rebuildData = (e) => {
            const t = { duration: -999, start: -999 },
              r = { redirect: t, cache: t, connect: t, dns: t, ssl: t, download: t, firstByte: t };
            if (!e) return { ...r, duration: 0, size: 0 };
            const n = this.computePerformanceResourceDuration(e),
              s = this.computeSize(e),
              i = this.toValidEntry(e);
            if (!i) return { ...r, duration: n, size: s };
            const {
              startTime: a,
              fetchStart: o,
              redirectStart: c,
              redirectEnd: l,
              domainLookupStart: u,
              domainLookupEnd: d,
              connectStart: h,
              secureConnectionStart: p,
              connectEnd: m,
              requestStart: f,
              responseStart: g,
              responseEnd: b,
            } = i;
            return (
              (r.download = this.convertTime(a, g, b)),
              (r.firstByte = this.convertTime(a, f, g)),
              m !== o && ((r.connect = this.convertTime(a, h, m)), A([h, p, m]) && (r.ssl = this.convertTime(a, p, m))),
              d !== o && (r.dns = this.convertTime(a, u, d)),
              o !== u && A([o, u]) && (r.cache = this.convertTime(a, o, u)),
              this.isRedirection(e) && (r.redirect = this.convertTime(a, c, l)),
              { ...r, duration: n, size: s }
            );
          };
          getType = (e, t) => {
            const r = ee(t);
            if (!t) return lt.OTHER;
            if (r) {
              const t = r.pathname;
              for (const [r, n] of dt) if (n(e, t)) return r;
            }
            return lt.OTHER;
          };
          getSingleAjaxData = (e) => {
            if (Se.getAgentConfig().ignoreStatusZero && 0 === e.status) return null;
            if (Se.isIgnoreResources(e.url)) return null;
            const t = this.getAjaxResourceTiming(e),
              r = t ? q(t.startTime) : e.startTimeSet,
              n = this.rebuildData(t);
            0 === n.duration &&
              (n.duration = B(H(e.startTimeSet.highResolutionTime, e.endTimeSet.highResolutionTime)) || 0);
            const s = ee(e.url),
              i = Se.getPageInfo().pageLocation,
              a = null != t?.deliveryType ? t?.deliveryType : 'none';
            return s && i
              ? {
                  startTime: B(r.highResolutionTime) || 0,
                  startTimeStamp: r.timeStamp,
                  eventID: b(),
                  type: e.type,
                  is3rdParty: ie(e.url, i),
                  url: e.url.substring(0, 150),
                  urlHost: s.host.substring(0, 150),
                  urlPath: s.pathname.substring(0, 150),
                  urlQuery: s.search.substring(0, 150),
                  urlProtocol: s.protocol,
                  timing: n,
                  resourceInfo: {
                    method: e.method,
                    status: e.status,
                    message: e.message || lc(Number(e.status)),
                    isAborted: e.isAborted,
                    init: e.stringInit,
                    deliveryType: a,
                  },
                  traceInfo: { mtID: e.mtID, txID: e.txID },
                }
              : null;
          };
          getSingleResourceData = (e) => {
            if (Se.isIgnoreResources(e.name)) return null;
            const t = this.changeFormat(e),
              r = this.getType(e.initiatorType, e.name),
              n = this.rebuildData(t),
              s = q(t.startTime),
              i = ee(e.name),
              a = B(s.highResolutionTime) || 0,
              o = Se.getPageInfo().pageLocation,
              c = null != e?.responseStatus ? e?.responseStatus : -1,
              l = null != e?.deliveryType ? e?.deliveryType : 'none';
            return i && o
              ? {
                  startTime: a,
                  startTimeStamp: s.timeStamp,
                  eventID: b(),
                  type: r,
                  is3rdParty: ie(e.name, o),
                  url: e.name.substring(0, 150),
                  urlHost: i.host.substring(0, 150),
                  urlPath: i.pathname.substring(0, 150),
                  urlQuery: i.search.substring(0, 150),
                  urlProtocol: i.protocol,
                  timing: n,
                  resourceInfo: {
                    method: 'none',
                    status: c,
                    message: 'none',
                    isAborted: !1,
                    init: 'none',
                    deliveryType: l,
                  },
                  traceInfo: { mtID: 'none', txID: 'none' },
                }
              : null;
          };
          getMultiResourceData = (e, t) => (
            (this.resourceList = []),
            t.forEach((e) => {
              const t = this.getSingleAjaxData(e);
              t && this.resourceList.push(t);
            }),
            e.forEach((e) => {
              const t = this.getSingleResourceData(e);
              t && this.resourceList.push(t);
            }),
            this.resourceList.sort((e, t) => e.startTimeStamp - t.startTimeStamp),
            this.resourceList
          );
        };
        var bc = class extends uc {
          eventList = [];
          isTimerMode = !0;
          eventBytes = 0;
          constructor(e) {
            void 0 === e && (e = !0),
              super(),
              (this.isTimerMode = e),
              this.initEventList(),
              (this.debounceResetEventList = vt(this.resetEventList, 5e3));
          }
          initEventList() {
            (this.eventList = []), (this.eventBytes = 0);
          }
          addEvent = (e) => {
            const t = L(JSON.stringify(e));
            if (t > 1e4) return this.resetEventList(), this.eventList.push(e), void this.resetEventList();
            this.eventBytes + t > 1e4 && this.resetEventList(),
              this.eventList.push(e),
              (this.eventBytes += t),
              this.isTimerMode && this.debounceResetEventList && this.debounceResetEventList();
          };
          resetEventList() {
            this.cb && (this.cb(this.eventList), this.initEventList());
          }
          setEventListCallback(e) {
            this.cb = e;
          }
          getEventList = () => this.eventList;
          getSessionReplayData = (e) => {
            const t = b(),
              r = e.startTimeStamp - W(),
              n = B(H(Se.getPageActivityStartTime(), e.startTimeStamp)) || 0;
            return {
              startTime: r,
              startTimeStamp: e.startTimeStamp,
              eventID: t,
              type: 'session_replay',
              eventInfo: {
                name: 'SessionReplayDeflate',
                duration: n,
                customDuration: -1,
                elementId: '',
                contents: e.contents,
              },
            };
          };
        };
        var yc = class extends uc {
          constructor() {
            super();
          }
          getLCPMetric = (e) => {
            if ('LCP' === e.name)
              return {
                LCP: {
                  value: B(e.value),
                  metric_value: e.value,
                  metric_id: e.id,
                  metric_delta: e.delta,
                  debug_target: e.attribution.element,
                },
              };
          };
          getFIDMetric = (e) => {
            if ('FID' === e.name)
              return {
                FID: {
                  value: B(e.value),
                  metric_value: e.value,
                  metric_id: e.id,
                  metric_delta: e.delta,
                  debug_target: e.attribution.eventTarget,
                },
              };
          };
          getCLS = (e) => {
            if ('CLS' === e.name)
              return {
                CLS: {
                  value: D(e.value),
                  metric_value: e.value,
                  metric_id: e.id,
                  metric_delta: e.delta,
                  debug_target: e.attribution.largestShiftTarget,
                },
              };
          };
          getINP = (e) => {
            if ('INP' === e.name)
              return {
                INP: {
                  value: D(e.value),
                  metric_value: e.value,
                  metric_id: e.id,
                  metric_delta: e.delta,
                  debug_target: e.attribution.interactionTarget,
                },
              };
          };
          getWebVitalsData = (e) => {
            switch (e.name) {
              case 'LCP':
                return this.getLCPMetric(e);
              case 'FID':
                return this.getFIDMetric(e);
              case 'CLS':
                return this.getCLS(e);
              case 'INP':
                return this.getINP(e);
            }
          };
        };
        var vc = class {
          constructor() {
            (this.dispatcherArr = []), (this.isDispatcherStart = !1), this.attachVisibilitychangeListener();
          }
          attachVisibilitychangeListener = () => {
            k(document, 'visibilitychange', this.handleVisibilityChange, !1);
          };
          isVisible() {
            return !this.isDispatcherStart || 'visible' === document.visibilityState;
          }
          addDispatcher(e, t) {
            this.dispatcherArr[e] = t;
          }
          startListening() {
            this.isDispatcherStart = !0;
          }
          pause(e) {
            e && e < 2
              ? this.dispatcherArr[e].startDispatcher()
              : this.dispatcherArr.forEach((e) => {
                  e.pauseDispatcher();
                });
          }
          start(e) {
            e && e < 2
              ? this.dispatcherArr[e].startDispatcher()
              : this.dispatcherArr.forEach((e) => {
                  e.startDispatcher();
                });
          }
          handleVisibilityChange = () => {
            this.isDispatcherStart && (this.isVisible() ? this.start() : this.pause());
          };
        };
        class Sc {
          constructor(e, t) {
            if (Sc._instance) return Sc._instance;
            (Sc._instance = this), (this.globalContext = e), (this.agentConfigOption = t);
          }
          setUserID = (e) => {
            try {
              Se.setUserID(e);
            } catch (e) {
              u('whatap-browser-agent-error: setUserID', e);
            }
          };
          setCollectRequiredUserIdSet = (e) => {
            try {
              Se.setCollectRequiredUserIdSet(e);
            } catch (e) {
              u('whatap-browser-agent-error: setCollectRequiredUserIdSet', e);
            }
          };
          addCustomEvent = (e, t) => {
            try {
              if ('string' != typeof e) throw new Error('eventName is not string');
              if (t && 'object' != typeof t) throw new Error('option is not object');
              if (t && t.contents && 'string' != typeof t.contents) throw new Error('option.contents is not string');
              if (t && t.customDuration && 'number' != typeof t.customDuration)
                throw new Error('option.customDuration is not number');
              ((e, t) => {
                gr &&
                  gr.notify({
                    contents: t?.contents || '',
                    customDuration: t?.customDuration || -1,
                    startTimeStamp: G(),
                    eventName: e,
                  });
              })(e, t);
            } catch (e) {
              u('whatap-browser-agent-error: addCustomEvent', e);
            }
          };
        }
        var wc = Sc;
        class Ic {
          constructor(e) {
            if (Ic._instance) return Ic._instance;
            (Ic._instance = this),
              Se.init(e),
              (this.agentExternalMethod = new wc(window, e)),
              this.generateExternalMethod(),
              (this.dispatcherObserver = new vc());
          }
          generateExternalMethod() {
            this.agentExternalMethod &&
              Object.assign(window.WhatapBrowserAgent, {
                setUserID: this.agentExternalMethod.setUserID,
                setCollectRequiredUserIdSet: this.agentExternalMethod.setCollectRequiredUserIdSet,
                addCustomEvent: this.agentExternalMethod.addCustomEvent,
              });
          }
          scrapStart() {
            const t = [];
            if (1 === Se.getSessionInfo()?.session_collect_type || 2 === Se.getSessionInfo()?.session_collect_type) {
              const r = new gc(!1),
                n = new gc(!1),
                s = new gc(!1),
                i = new gc(!0),
                a = new pc(),
                o = new yc(),
                c = new fc(),
                l = new mc(),
                u = new Jt(r, a),
                d = new Nr(n),
                h = new mr(a),
                p = new qa(o),
                m = new Lr(c, i, a),
                f = new Fr(s, a),
                g = new yr(l),
                b = new Ui(l);
              if (
                (t.push(h, u, d, f, g, b),
                2 === Se.getSessionInfo()?.session_collect_type &&
                  (Se.getAgentConfig().sessionReplayCollectAllBrowser || e()))
              ) {
                const e = new bc(!0),
                  r = new si(e);
                t.push(r);
              }
              const y = new vr(t);
              this.dispatcherObserver.addDispatcher(0, y),
                this.dispatcherObserver.start(0),
                this.dispatcherObserver.startListening(),
                m.startDispatcher(),
                p.startDispatcher();
            }
          }
          scrapEnd() {
            this.dispatcherObserver.pause();
          }
        }
        var _c = Ic,
          Cc = JSON.parse('{"9999999":{"isAllDataIgnore":true,"sampleRate":50}}'),
          Ec = JSON.parse('{"99":{"sessionReplaySampleRate":100}}'),
          Tc = '1.3.15';
        const xc = (e) => {
          let { ...t } = e;
          const r = new _c(t);
          (async (e) => {
            const t = pe + '_' + e;
            return new Promise((e) => {
              if (w(t)) e(!0);
              else {
                const r = setInterval(() => {
                  w(t) && (clearInterval(r), e(!0));
                }, 100);
              }
            });
          })(t.pcode).then((e) => {
            e && r.scrapStart();
          });
        };
        (() => {
          if (!C) return void u('whatap-browser-agent-error: AgentStart', 'window global context is not found');
          const e = window.WhatapBrowserAgent?.config;
          if (
            e &&
            e.projectAccessKey &&
            'XXXXXXXXXXXXXX-XXXXXXXXXXXXXX-XXXXXXXXXXXXXX' !== e.projectAccessKey &&
            e.pcode
          ) {
            const t = e.pcode + '',
              r = Cc,
              n = Ec;
            if (t in r && r[t].isAllDataIgnore) return;
            if (t in r) {
              const n = r[t]?.sampleRate;
              e.sampleRate = n || e.sampleRate;
            }
            try {
              if (t in n) {
                const r = n[t];
                Object.assign(e, r), console.log('test config is applied', e);
              }
            } catch (e) {
              u('whatap-browser-agent-error: AgentStart', 'test config error');
            }
            console.log(`Whatap Browser Agent: v${Tc}`), xc(e);
          }
        })();
      })(),
      {}
    );
  })();
});
