(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  22016,
  (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return y;
      },
      useLinkStatus: function () {
        return v;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(90809),
      u = e.r(18050),
      a = i._(e.r(71645)),
      l = e.r(95057),
      s = e.r(8372),
      c = e.r(18581),
      f = e.r(18967),
      d = e.r(5550),
      p = e.r(88540),
      h = e.r(91949),
      m = e.r(73668),
      g = e.r(9396);
    function y(t) {
      var r;
      let n,
        o,
        i,
        [y, v] = (0, a.useOptimistic)(h.IDLE_LINK_STATUS),
        x = (0, a.useRef)(null),
        {
          href: j,
          as: P,
          children: E,
          prefetch: S = null,
          passHref: _,
          replace: O,
          shallow: C,
          scroll: N,
          onClick: T,
          onMouseEnter: w,
          onTouchStart: R,
          legacyBehavior: k = !1,
          onNavigate: L,
          transitionTypes: A,
          ref: I,
          unstable_dynamicOnHover: U,
          ...M
        } = t;
      (n = E),
        k &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, u.jsx)("a", { children: n }));
      let $ = a.default.useContext(s.AppRouterContext),
        B = !1 !== S,
        F = !1 === S ? "none" : !0 === S ? "full" : "auto",
        D =
          "none" !== F
            ? "auto" === F
              ? g.FetchStrategy.PPR
              : g.FetchStrategy.Full
            : g.FetchStrategy.PPR,
        K = "string" == typeof (r = P || j) ? r : (0, l.formatUrl)(r);
      if (k) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        o = a.default.Children.only(n);
      }
      let z = k ? o && "object" == typeof o && o.ref : I,
        q,
        Q = a.default.useCallback(
          (e) => (
            null !== $ &&
              (x.current = (0, h.mountLinkInstance)(e, K, $, D, B, v, q)),
            () => {
              x.current &&
                ((0, h.unmountLinkForCurrentNavigation)(x.current),
                (x.current = null)),
                (0, h.unmountPrefetchableInstance)(e);
            }
          ),
          [B, K, $, D, v, q]
        ),
        W = {
          ref: (0, c.useMergedRef)(Q, z),
          onClick(t) {
            k || "function" != typeof T || T(t),
              k &&
                o.props &&
                "function" == typeof o.props.onClick &&
                o.props.onClick(t),
              !$ ||
                t.defaultPrevented ||
                (function (t, r, n, o, i, u, l, s = "none") {
                  if ("u" > typeof window) {
                    let c,
                      { nodeName: f } = t.currentTarget;
                    if (
                      ("A" === f.toUpperCase() &&
                        (((c = t.currentTarget.getAttribute("target")) &&
                          "_self" !== c) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, m.isLocalURL)(r)) {
                      o && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), u)) {
                      let e = !1;
                      if (
                        (u({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: d } = e.r(99781);
                    a.default.startTransition(() => {
                      d(
                        r,
                        o ? "replace" : "push",
                        !1 === i
                          ? p.ScrollBehavior.NoScroll
                          : p.ScrollBehavior.Default,
                        n.current,
                        l,
                        s
                      );
                    });
                  }
                })(t, K, x, O, N, L, A, F);
          },
          onMouseEnter(e) {
            k || "function" != typeof w || w(e),
              k &&
                o.props &&
                "function" == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              $ && B && (0, h.onNavigationIntent)(e.currentTarget, !0 === U);
          },
          onTouchStart: function (e) {
            k || "function" != typeof R || R(e),
              k &&
                o.props &&
                "function" == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              $ && B && (0, h.onNavigationIntent)(e.currentTarget, !0 === U);
          },
        };
      return (
        (0, f.isAbsoluteUrl)(K)
          ? (W.href = K)
          : (k && !_ && ("a" !== o.type || "href" in o.props)) ||
            (W.href = (0, d.addBasePath)(K)),
        (i = k
          ? a.default.cloneElement(o, W)
          : (0, u.jsx)("a", { ...M, ...W, children: n })),
        (0, u.jsx)(b.Provider, { value: y, children: i })
      );
    }
    let b = (0, a.createContext)(h.IDLE_LINK_STATUS),
      v = () => (0, a.useContext)(b);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18581,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(71645);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else e && (r.current = i(e, n)), t && (o.current = i(t, n));
        },
        [e, t]
      );
    }
    function i(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18967,
  (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return y;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return x;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return v;
      },
      SP: function () {
        return m;
      },
      ST: function () {
        return g;
      },
      WEB_VITALS: function () {
        return i;
      },
      execOnce: function () {
        return u;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return s;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return d;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return P;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function u(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => {
        let t = e.charCodeAt(0);
        return !!((t >= 65 && t <= 90) || (t >= 97 && t <= 122)) && a.test(e);
      };
    function s() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = s();
      return e.substring(t.length);
    }
    function f(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function d(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function h(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await h(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && d(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${f(
              e
            )}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1025", enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let m = "u" > typeof performance,
      g =
        m &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class y extends Error {}
    class b extends Error {}
    class v extends Error {
      constructor(e) {
        super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`);
      }
    }
    class x extends Error {
      constructor(e, t) {
        super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`);
      }
    }
    class j extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function P(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let n = e.r(18967),
      o = e.r(52817);
    function i(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  98183,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return i;
      },
      urlQueryToSearchParams: function () {
        return a;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function i(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
          ? e.push(n)
          : (t[r] = [e, n]);
      }
      return t;
    }
    function u(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
        ? ""
        : String(e);
    }
    function a(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, u(e));
        else t.set(r, u(n));
      return t;
    }
    function l(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  95057,
  (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return a;
      },
      formatWithValidation: function () {
        return s;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(90809)._(e.r(98183)),
      u = /https?|ftp|gopher|file/;
    function a(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        o = e.pathname || "",
        a = e.hash || "",
        l = e.query || "",
        s = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (s = t + e.host)
          : r &&
            ((s = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (s += ":" + e.port)),
        l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l)));
      let c = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || u.test(n)) && !1 !== s)
          ? ((s = "//" + (s || "")), o && "/" !== o[0] && (o = "/" + o))
          : s || (s = ""),
        a && "#" !== a[0] && (a = "#" + a),
        c && "?" !== c[0] && (c = "?" + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${s}${o}${c}${a}`
      );
    }
    let l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function s(e) {
      return a(e);
    }
  },
  63491,
  (e) => {
    "use strict";
    var t = e.i(18050),
      r = e.i(84954);
    e.s([
      "default",
      0,
      function (e) {
        return (0, t.jsx)("html", {
          lang: "en",
          children: (0, t.jsxs)("body", {
            className: "min-h-dvh",
            children: [
              (0, t.jsx)("title", {
                children: "Something went wrong | Inferno",
              }),
              (0, t.jsx)(r.ErrorState, { ...e }),
            ],
          }),
        });
      },
    ]);
  },
  84954,
  (e) => {
    "use strict";
    var t = e.i(18050),
      r = e.i(22016),
      n = e.i(71645),
      o = e.i(59544);
    e.s([
      "ErrorState",
      0,
      function ({ error: e, retry: i }) {
        return (
          (0, n.useEffect)(() => {
            console.error(e);
          }, [e]),
          (0, t.jsxs)("div", {
            className:
              "mx-auto flex min-h-[60vh] max-w-2xl flex-col justify-center px-5 py-24 sm:px-8",
            children: [
              (0, t.jsx)("h1", {
                className: "text-[clamp(2.5rem,6vw,4rem)] leading-[1.02]",
                children: "Something on this page broke.",
              }),
              (0, t.jsx)("p", {
                className: "mt-5 max-w-[52ch] text-lg text-hush",
                children:
                  "Something on this page stopped working. Try it again. If it keeps happening, reload the page or go back home.",
              }),
              e.digest
                ? (0, t.jsxs)("p", {
                    className: "tnum mt-3 text-[13px] text-faint",
                    children: ["Reference ", e.digest],
                  })
                : null,
              (0, t.jsxs)("div", {
                className: "mt-10 flex flex-wrap gap-3",
                children: [
                  (0, t.jsx)("button", {
                    onClick: () => i(),
                    className: (0, o.buttonClass)({ size: "lg" }),
                    children: "Try again",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "/",
                    className: (0, o.buttonClass)({
                      size: "lg",
                      variant: "quiet",
                    }),
                    children: "Go home",
                  }),
                ],
              }),
            ],
          })
        );
      },
    ]);
  },
  59544,
  (e) => {
    "use strict";
    var t = e.i(18050),
      r = e.i(22016),
      n = e.i(45060);
    let o = {
        primary: "bg-moon text-night hover:bg-mist",
        quiet:
          "border border-line-bright text-mist hover:border-moon hover:text-moon",
        ghost: "text-hush hover:text-mist",
      },
      i = { md: "h-10 px-5 text-[15px]", lg: "h-12 px-7 text-base" };
    function u({ variant: e = "primary", size: t = "md", className: r } = {}) {
      return (0, n.cn)(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-300 ease-quiet active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        o[e],
        i[t],
        r
      );
    }
    e.s([
      "Button",
      0,
      function ({ variant: e, size: r, className: n, ...o }) {
        return (0, t.jsx)("button", {
          className: u({ variant: e, size: r, className: n }),
          ...o,
        });
      },
      "ButtonLink",
      0,
      function ({ variant: e, size: n, className: o, ...i }) {
        return (0, t.jsx)(r.default, {
          className: u({ variant: e, size: n, className: o }),
          ...i,
        });
      },
      "buttonClass",
      0,
      u,
    ]);
  },
]);
