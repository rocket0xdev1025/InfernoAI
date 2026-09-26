(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  26568,
  (e, t, n) => {
    "use strict";
    var r = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
      i = /\n/g,
      l = /^\s*/,
      o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
      a = /^:\s*/,
      s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
      u = /^[;\s]*/,
      c = /^\s+|\s+$/g;
    function d(e) {
      return e ? e.replace(c, "") : "";
    }
    t.exports = function (e, t) {
      if ("string" != typeof e)
        throw TypeError("First argument must be a string");
      if (!e) return [];
      t = t || {};
      var n = 1,
        c = 1;
      function h(e) {
        var t = e.match(i);
        t && (n += t.length);
        var r = e.lastIndexOf("\n");
        c = ~r ? e.length - r : c + e.length;
      }
      function f() {
        var e = { line: n, column: c };
        return function (t) {
          return (t.position = new p(e)), g(l), t;
        };
      }
      function p(e) {
        (this.start = e),
          (this.end = { line: n, column: c }),
          (this.source = t.source);
      }
      function m(r) {
        var i = Error(t.source + ":" + n + ":" + c + ": " + r);
        if (
          ((i.reason = r),
          (i.filename = t.source),
          (i.line = n),
          (i.column = c),
          (i.source = e),
          t.silent)
        );
        else throw i;
      }
      function g(t) {
        var n = t.exec(e);
        if (n) {
          var r = n[0];
          return h(r), (e = e.slice(r.length)), n;
        }
      }
      function x(e) {
        var t;
        for (e = e || []; (t = y()); ) !1 !== t && e.push(t);
        return e;
      }
      function y() {
        var t = f();
        if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
          for (
            var n = 2;
            "" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

          )
            ++n;
          if (((n += 2), "" === e.charAt(n - 1)))
            return m("End of comment missing");
          var r = e.slice(2, n - 2);
          return (
            (c += 2),
            h(r),
            (e = e.slice(n)),
            (c += 2),
            t({ type: "comment", comment: r })
          );
        }
      }
      (p.prototype.content = e), g(l);
      var k,
        b = [];
      for (
        x(b);
        (k = (function () {
          var e = f(),
            t = g(o);
          if (t) {
            if ((y(), !g(a))) return m("property missing ':'");
            var n = g(s),
              i = e({
                type: "declaration",
                property: d(t[0].replace(r, "")),
                value: n ? d(n[0].replace(r, "")) : "",
              });
            return g(u), i;
          }
        })());

      )
        !1 !== k && (b.push(k), x(b));
      return b;
    };
  },
  70454,
  (e, t, n) => {
    "use strict";
    var r =
      (e.e && e.e.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.default = function (e, t) {
        let n = null;
        if (!e || "string" != typeof e) return n;
        let r = (0, i.default)(e),
          l = "function" == typeof t;
        return (
          r.forEach((e) => {
            if ("declaration" !== e.type) return;
            let { property: r, value: i } = e;
            l ? t(r, i, e) : i && ((n = n || {})[r] = i);
          }),
          n
        );
      });
    let i = r(e.r(26568));
  },
  65185,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.camelCase = void 0);
    var r = /^--[a-zA-Z0-9_-]+$/,
      i = /-([a-z])/g,
      l = /^[^-]+$/,
      o = /^-(webkit|moz|ms|o|khtml)-/,
      a = /^-(ms)-/,
      s = function (e, t) {
        return t.toUpperCase();
      },
      u = function (e, t) {
        return "".concat(t, "-");
      };
    n.camelCase = function (e, t) {
      var n;
      return (void 0 === t && (t = {}), !(n = e) || l.test(n) || r.test(n))
        ? e
        : ((e = e.toLowerCase()),
          (e = t.reactCompat ? e.replace(a, u) : e.replace(o, u)).replace(
            i,
            s
          ));
    };
  },
  15511,
  (e, t, n) => {
    "use strict";
    var r = (
        (e.e && e.e.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        }
      )(e.r(70454)),
      i = e.r(65185);
    function l(e, t) {
      var n = {};
      return (
        e &&
          "string" == typeof e &&
          (0, r.default)(e, function (e, r) {
            e && r && (n[(0, i.camelCase)(e, t)] = r);
          }),
        n
      );
    }
    (l.default = l), (t.exports = l);
  },
  4100,
  (e, t, n) => {
    "use strict";
    var r = Object.prototype.hasOwnProperty,
      i = Object.prototype.toString,
      l = Object.defineProperty,
      o = Object.getOwnPropertyDescriptor,
      a = function (e) {
        return "function" == typeof Array.isArray
          ? Array.isArray(e)
          : "[object Array]" === i.call(e);
      },
      s = function (e) {
        if (!e || "[object Object]" !== i.call(e)) return !1;
        var t,
          n = r.call(e, "constructor"),
          l =
            e.constructor &&
            e.constructor.prototype &&
            r.call(e.constructor.prototype, "isPrototypeOf");
        if (e.constructor && !n && !l) return !1;
        for (t in e);
        return void 0 === t || r.call(e, t);
      },
      u = function (e, t) {
        l && "__proto__" === t.name
          ? l(e, t.name, {
              enumerable: !0,
              configurable: !0,
              value: t.newValue,
              writable: !0,
            })
          : (e[t.name] = t.newValue);
      },
      c = function (e, t) {
        if ("__proto__" === t) {
          if (!r.call(e, t)) return;
          else if (o) return o(e, t).value;
        }
        return e[t];
      };
    t.exports = function e() {
      var t,
        n,
        r,
        i,
        l,
        o,
        d = arguments[0],
        h = 1,
        f = arguments.length,
        p = !1;
      for (
        "boolean" == typeof d && ((p = d), (d = arguments[1] || {}), (h = 2)),
          (null == d || ("object" != typeof d && "function" != typeof d)) &&
            (d = {});
        h < f;
        ++h
      )
        if (((t = arguments[h]), null != t))
          for (n in t)
            (r = c(d, n)),
              d !== (i = c(t, n)) &&
                (p && i && (s(i) || (l = a(i)))
                  ? (l
                      ? ((l = !1), (o = r && a(r) ? r : []))
                      : (o = r && s(r) ? r : {}),
                    u(d, { name: n, newValue: e(p, o, i) }))
                  : void 0 !== i && u(d, { name: n, newValue: i }));
      return d;
    };
  },
  20256,
  (e) => {
    "use strict";
    let t;
    var n = e.i(18050),
      r = e.i(71645),
      i = e.i(74080),
      l = e.i(18566),
      o = e.i(56420);
    let a = {
      name: "cpu",
      size: 24,
      node: [
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M17 20v2", key: "1rnc9c" }],
        ["path", { d: "M17 2v2", key: "11trls" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M2 17h2", key: "7oei6x" }],
        ["path", { d: "M2 7h2", key: "asdhe0" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "M20 17h2", key: "1fpfkl" }],
        ["path", { d: "M20 7h2", key: "1o8tra" }],
        ["path", { d: "M7 20v2", key: "4gnj0m" }],
        ["path", { d: "M7 2v2", key: "1i4yhu" }],
        [
          "rect",
          { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
        ],
        [
          "rect",
          { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" },
        ],
      ],
    };
    a.node;
    let s = (0, o.default)(a),
      u = {
        name: "network",
        size: 24,
        node: [
          [
            "rect",
            {
              x: "16",
              y: "16",
              width: "6",
              height: "6",
              rx: "1",
              key: "4q2zg0",
            },
          ],
          [
            "rect",
            {
              x: "2",
              y: "16",
              width: "6",
              height: "6",
              rx: "1",
              key: "8cvhb9",
            },
          ],
          [
            "rect",
            { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" },
          ],
          [
            "path",
            { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" },
          ],
          ["path", { d: "M12 12V8", key: "2874zd" }],
        ],
      };
    u.node;
    let c = (0, o.default)(u),
      d = {
        name: "panel-left",
        size: 24,
        node: [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M9 3v18", key: "fh3hqa" }],
        ],
        aliases: ["sidebar"],
      };
    d.node;
    let h = (0, o.default)(d);
    var f = e.i(23692),
      p = e.i(2279),
      m = e.i(49965),
      g = e.i(94046);
    let x = "inferno.chutesKey",
      y = new Set();
    function k() {
      try {
        return localStorage.getItem(x) ?? "";
      } catch {
        return "";
      }
    }
    function b(e) {
      let t = !0;
      try {
        e ? localStorage.setItem(x, e) : localStorage.removeItem(x);
      } catch {
        t = !1;
      }
      return y.forEach((e) => e()), t;
    }
    function v(e) {
      y.add(e);
      let t = (t) => (t.key === x || null === t.key) && e();
      return (
        window.addEventListener("storage", t),
        () => {
          y.delete(e), window.removeEventListener("storage", t);
        }
      );
    }
    let w = () => (0, r.useSyncExternalStore)(v, k, () => "");
    async function S(e, t) {
      if ("key" === t && 401 === e.status)
        return "Chutes didn't accept your key. Check it at chutes.ai, or paste it again.";
      if ("key" === t && 402 === e.status)
        return "Your Chutes account is out of balance. Top it up at chutes.ai.";
      if ("key" === t && 429 === e.status)
        return "Chutes is limiting requests from your key right now. Wait a moment and try again.";
      let n = await e.json().catch(() => null),
        r =
          "string" == typeof n?.error
            ? n.error
            : n?.error?.message ?? n?.detail;
      return "string" == typeof r && r
        ? r.slice(0, 300)
        : `Chutes answered with an error (HTTP ${e.status}).`;
    }
    var C = e.i(45060),
      j = e.i(75379),
      N = e.i(75739),
      E = e.i(63676),
      T = e.i(59544),
      P = e.i(11071);
    let A = "rounded-3xl border border-line bg-night-2 p-5 sm:p-7",
      I = (e) => e?.scrollIntoView({ block: "nearest" });
    function D({ gpu: e, status: t, onLoad: i, onClose: l }) {
      let [o, a] = (0, r.useState)(0);
      if ("missing" === e.state)
        return (0, n.jsxs)("section", {
          ref: l ? I : void 0,
          "aria-labelledby": "model-title",
          className: A,
          children: [
            (0, n.jsx)("h2", {
              id: "model-title",
              className: "text-2xl",
              children: "This browser can't run the model",
            }),
            (0, n.jsx)("p", {
              className: "mt-2 text-hush",
              children:
                "Private mode needs a browser with WebGPU, such as a recent Chrome or Edge on desktop. Your saved chats are still here to read.",
            }),
          ],
        });
      let s = "ok" === e.state,
        u = (t) => (s && e.f16 ? p.MODELS[t].f16 : p.MODELS[t].f32),
        c = u(o),
        d = "loading" === t.state,
        h = "ready" === t.state && t.model === c.id;
      return (0, n.jsxs)("section", {
        ref: l ? I : void 0,
        "aria-labelledby": "model-title",
        className: A,
        children: [
          (0, n.jsxs)("div", {
            className: "flex items-start justify-between gap-4",
            children: [
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("h2", {
                    id: "model-title",
                    className: "text-2xl",
                    children: "Choose a model for this device",
                  }),
                  (0, n.jsx)("p", {
                    className: "mt-1.5 text-[15px] text-hush",
                    children:
                      "It runs on your graphics card. Sizes are the graphics memory each one needs. Nothing downloads until you press Load model.",
                  }),
                ],
              }),
              l &&
                (0, n.jsx)("button", {
                  type: "button",
                  onClick: l,
                  "aria-label": "Close the model list",
                  className:
                    "-mt-2 -mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-hush hover:text-mist",
                  children: (0, n.jsx)(E.X, { size: 18 }),
                }),
            ],
          }),
          (0, n.jsxs)("fieldset", {
            disabled: d,
            className: "mt-5 grid gap-2",
            children: [
              (0, n.jsx)("legend", { className: "sr-only", children: "Model" }),
              p.MODELS.map((e, t) => {
                let r;
                return (0, n.jsxs)(
                  "label",
                  {
                    className:
                      "flex cursor-pointer items-start gap-3 rounded-2xl border border-line bg-night p-4 transition-colors hover:border-line-bright has-checked:border-flame/70 has-checked:bg-night-3/50 has-disabled:cursor-default",
                    children: [
                      (0, n.jsx)("input", {
                        type: "radio",
                        name: "model",
                        checked: o === t,
                        onChange: () => a(t),
                        className: "mt-1.5 shrink-0 accent-flame",
                      }),
                      (0, n.jsxs)("span", {
                        className: "min-w-0 flex-1",
                        children: [
                          (0, n.jsx)("span", {
                            className: "block font-medium text-mist",
                            children: e.name,
                          }),
                          (0, n.jsx)("span", {
                            className: "block text-[15px] text-hush",
                            children: e.note,
                          }),
                        ],
                      }),
                      s &&
                        (0, n.jsxs)("span", {
                          className: "tnum shrink-0 pt-0.5 text-sm text-faint",
                          children: [
                            "about ",
                            (r = u(t).mb) >= 1024
                              ? `${(r / 1024).toFixed(1)} GB`
                              : `${Math.round(r)} MB`,
                          ],
                        }),
                    ],
                  },
                  e.name
                );
              }),
            ],
          }),
          (0, n.jsx)("div", {
            className: "mt-5",
            children:
              "loading" === t.state
                ? (0, n.jsx)(M, { text: t.text, value: t.progress })
                : (0, n.jsx)(T.Button, {
                    onClick: () => i(c.id),
                    disabled: !s || h,
                    children: h ? "Loaded" : "Load model",
                  }),
          }),
          "error" === t.state &&
            (0, n.jsx)("p", {
              role: "alert",
              className: "mt-3 text-[15px] text-ember",
              children: t.message,
            }),
          (0, n.jsx)("p", {
            className: "mt-5 text-sm text-faint",
            children:
              "The first load downloads the model from Hugging Face. After that it is cached in this browser and loads without downloading again. Only the model comes over the network; your messages never do.",
          }),
        ],
      });
    }
    function M({ text: e, value: t }) {
      let r = Math.round(100 * t);
      return (0, n.jsxs)("div", {
        children: [
          (0, n.jsxs)("div", {
            className: "flex items-baseline justify-between gap-4 text-sm",
            children: [
              (0, n.jsx)("span", {
                className: "min-w-0 text-heat-4",
                children: e.split(". ")[0],
              }),
              (0, n.jsxs)("span", {
                className: "tnum shrink-0 text-hush",
                children: [r, "%"],
              }),
            ],
          }),
          (0, n.jsx)(P.HeatBar, {
            value: t,
            role: "progressbar",
            "aria-label": "Loading the model",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": r,
            className: "mt-2",
          }),
        ],
      });
    }
    let L = "Miners run inside sealed hardware, so they can't read your words.",
      z = (e) => (0, j.formatUsd)(e, e >= 0.1 ? 2 : e >= 0.001 ? 4 : 6),
      _ =
        "text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame",
      O = /^cpk_[\x21-\x7e]{8,300}$/;
    function F({
      picked: e,
      onPick: t,
      pay: i,
      onPay: l,
      credits: o,
      onClose: a,
    }) {
      let [s, u] = (0, r.useState)(null),
        [c, d] = (0, r.useState)(!1),
        [h, p] = (0, r.useState)(0),
        m = w(),
        [x, y] = (0, r.useState)(""),
        [k, v] = (0, r.useState)(null);
      return (
        (0, r.useEffect)(() => {
          let e = !0;
          return (
            (0, g.chutesModels)().then(
              (t) => e && u(t),
              () => e && d(!0)
            ),
            () => {
              e = !1;
            }
          );
        }, [h]),
        (0, n.jsxs)("section", {
          ref: a ? I : void 0,
          "aria-labelledby": "bittensor-title",
          className: A,
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-start justify-between gap-4",
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsxs)("p", {
                      className: "flex items-center gap-1.5 text-sm text-hush",
                      children: [
                        (0, n.jsx)(f.Tau, { className: "text-heat-4" }),
                        "Powered by Bittensor subnet 64, through Chutes. ",
                        L,
                      ],
                    }),
                    (0, n.jsx)("h2", {
                      id: "bittensor-title",
                      className: "mt-1.5 text-2xl",
                      children: "Ask Bittensor subnet 64",
                    }),
                  ],
                }),
                a &&
                  (0, n.jsx)("button", {
                    type: "button",
                    onClick: a,
                    "aria-label": "Close the Bittensor settings",
                    className:
                      "-mt-2 -mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-hush hover:text-mist",
                    children: (0, n.jsx)(E.X, { size: 18 }),
                  }),
              ],
            }),
            o &&
              (0, n.jsx)("div", {
                role: "group",
                "aria-label": "How you pay",
                className:
                  "mt-5 inline-flex rounded-full border border-line p-1 text-sm",
                children: ["key", "credits"].map((e) =>
                  (0, n.jsx)(
                    "button",
                    {
                      type: "button",
                      "aria-pressed": i === e,
                      onClick: () => l(e),
                      className: (0, C.cn)(
                        "rounded-full px-3 py-1.5 transition-colors",
                        i === e
                          ? "bg-night-3 text-mist"
                          : "text-hush hover:text-mist"
                      ),
                      children:
                        "key" === e ? "Your Chutes key" : "Inferno credits",
                    },
                    e
                  )
                ),
              }),
            "key" === i
              ? (0, n.jsxs)("div", {
                  className: "mt-5",
                  children: [
                    (0, n.jsx)("h3", {
                      className: "text-lg",
                      children: "Your Chutes key",
                    }),
                    m
                      ? (0, n.jsxs)("div", {
                          className:
                            "mt-2 flex flex-wrap items-center gap-x-4 gap-y-2",
                          children: [
                            (0, n.jsxs)("p", {
                              className: "tnum text-[15px] text-mist",
                              children: [
                                "Saved in this browser: ",
                                m.slice(0, 4),
                                "…",
                                m.slice(-4),
                              ],
                            }),
                            (0, n.jsx)(T.Button, {
                              variant: "quiet",
                              onClick: () => b(""),
                              children: "Forget key",
                            }),
                          ],
                        })
                      : (0, n.jsxs)("form", {
                          onSubmit: function (e) {
                            e.preventDefault();
                            let t = x.trim();
                            return O.test(t)
                              ? b(t)
                                ? void (y(""), v(null))
                                : v(
                                    "This browser won't store the key, so it can't be used here."
                                  )
                              : v(
                                  "That isn't a Chutes key. Keys start with cpk_."
                                );
                          },
                          className: "mt-2",
                          children: [
                            (0, n.jsxs)("label", {
                              htmlFor: "chutes-key",
                              className: "block text-[15px] text-hush",
                              children: [
                                "Paste your key. It starts with cpk_. No key yet? Get one at",
                                " ",
                                (0, n.jsx)("a", {
                                  href: "https://chutes.ai",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  className: _,
                                  children: "chutes.ai",
                                }),
                                ".",
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "mt-2 flex gap-2",
                              children: [
                                (0, n.jsx)("input", {
                                  id: "chutes-key",
                                  type: "password",
                                  value: x,
                                  onChange: (e) => {
                                    y(e.target.value), v(null);
                                  },
                                  placeholder: "cpk_…",
                                  autoComplete: "off",
                                  autoCapitalize: "off",
                                  spellCheck: !1,
                                  className:
                                    "h-10 min-w-0 flex-1 rounded-full border border-line bg-night px-4 text-base text-mist placeholder:text-faint focus:border-flame/70 focus:ring-2 focus:ring-flame/20 focus:outline-none sm:text-[15px]",
                                }),
                                (0, n.jsx)(T.Button, {
                                  type: "submit",
                                  variant: "quiet",
                                  disabled: !x.trim(),
                                  children: "Save",
                                }),
                              ],
                            }),
                            k &&
                              (0, n.jsx)("p", {
                                role: "alert",
                                className: "mt-2 text-[15px] text-ember",
                                children: k,
                              }),
                          ],
                        }),
                    (0, n.jsx)("p", {
                      className: "mt-3 text-sm text-faint",
                      children:
                        "Answers are billed to your Chutes account. The key is kept only in this browser's storage and sent only to llm.chutes.ai, never to Inferno. Anything that can run code on this page, like a rogue browser extension, could read it and spend your Chutes balance, so forget it on shared computers. If it ever leaks, delete it in your Chutes account.",
                    }),
                  ],
                })
              : (0, n.jsxs)("p", {
                  className: "mt-5 text-[15px] text-hush",
                  children: [
                    "Answers are paid from your Inferno credits at Chutes' price plus ",
                    Math.round(100 * g.BITTENSOR_MARGIN),
                    "%, our planned margin. Sign in with your wallet first. Each answer's receipt shows what it cost.",
                  ],
                }),
            (0, n.jsx)("h3", {
              className: "mt-6 text-lg",
              children: "Pick a model",
            }),
            c
              ? (0, n.jsxs)("p", {
                  className: "mt-2 text-[15px] text-ember",
                  children: [
                    "Chutes didn't send its model list.",
                    " ",
                    (0, n.jsx)("button", {
                      type: "button",
                      onClick: () => {
                        d(!1), p((e) => e + 1);
                      },
                      className: _,
                      children: "Try again",
                    }),
                  ],
                })
              : null === s
              ? (0, n.jsx)("p", {
                  className: "mt-2 text-[15px] text-hush",
                  children: "Asking Chutes which models are running.",
                })
              : 0 === s.length
              ? (0, n.jsx)("p", {
                  className: "mt-2 text-[15px] text-hush",
                  children:
                    "Chutes lists no confidential-compute models right now.",
                })
              : (0, n.jsx)("ul", {
                  className: "mt-3 grid gap-2",
                  children: s.map((r) =>
                    (0, n.jsx)(
                      "li",
                      {
                        children: (0, n.jsxs)("button", {
                          type: "button",
                          onClick: () => t(r),
                          "aria-pressed": r.id === e,
                          className:
                            "w-full rounded-2xl border border-line bg-night p-4 text-left transition-colors hover:border-line-bright aria-pressed:border-flame/70 aria-pressed:bg-night-3/50",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "block font-medium break-words text-mist",
                              children: r.name,
                            }),
                            (0, n.jsxs)("span", {
                              className: "tnum block text-[15px] text-hush",
                              children: [
                                z(r.input),
                                " per million tokens in, ",
                                z(r.output),
                                " out",
                              ],
                            }),
                            (0, n.jsxs)("span", {
                              className: "tnum block text-sm text-faint",
                              children: [
                                "Reads up to ",
                                (0, j.formatInt)(r.context),
                                " tokens at a time",
                              ],
                            }),
                          ],
                        }),
                      },
                      r.id
                    )
                  ),
                }),
            (0, n.jsxs)("div", {
              className: "mt-6 border-t border-line pt-5",
              children: [
                (0, n.jsx)("h3", {
                  className: "text-lg",
                  children: "Who can read what you type",
                }),
                (0, n.jsxs)("dl", {
                  className: "mt-3 grid gap-3 text-[15px]",
                  children: [
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("dt", {
                          className: "font-medium text-mist",
                          children: "Chutes' gateway, llm.chutes.ai",
                        }),
                        (0, n.jsxs)("dd", {
                          className: "text-hush",
                          children: [
                            "Your words go here first. It handles them in memory to pass them to a miner and, by its",
                            " ",
                            (0, n.jsx)("a", {
                              href: "https://chutes.ai/privacy",
                              target: "_blank",
                              rel: "noreferrer",
                              className: _,
                              children: "privacy policy",
                            }),
                            ", doesn't store prompts or answers.",
                            "key" === i &&
                              " Like any website, it also sees your IP address.",
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("dt", {
                          className: "font-medium text-mist",
                          children: "The miner's GPU",
                        }),
                        (0, n.jsx)("dd", {
                          className: "text-hush",
                          children:
                            "Runs the model inside confidential-compute hardware (Intel TDX with NVIDIA confidential computing), so the miner can't read your words.",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("dt", {
                          className: "font-medium text-mist",
                          children: "Inferno's server",
                        }),
                        (0, n.jsx)("dd", {
                          className: "text-hush",
                          children:
                            "credits" === i
                              ? "Passes your words through to Chutes without storing them. It keeps only the charge: your wallet, the amount and Chutes' request id."
                              : "Not involved. With your own key, this tab talks to Chutes directly.",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("dt", {
                          className: "font-medium text-mist",
                          children: "End-to-end encryption",
                        }),
                        (0, n.jsxs)("dd", {
                          className: "text-hush",
                          children: [
                            "Planned. Chutes offers optional",
                            " ",
                            (0, n.jsx)("a", {
                              href: "https://github.com/chutesai/e2ee-test",
                              target: "_blank",
                              rel: "noreferrer",
                              className: _,
                              children: "end-to-end encryption",
                            }),
                            " ",
                            "that hides your words from its gateway too; Inferno doesn't use it yet.",
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("dt", {
                          className: "font-medium text-mist",
                          children: "Zero exposure",
                        }),
                        (0, n.jsx)("dd", {
                          className: "text-hush",
                          children:
                            "Use private mode: the model runs on your own GPU and nothing you type leaves this tab.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("p", {
              className: "mt-5 text-sm text-faint",
              children: [
                "Prices are Chutes' own, read live from llm.chutes.ai. Each answer stops at ",
                (0, j.formatInt)(g.MAX_TOKENS),
                " tokens.",
              ],
            }),
          ],
        })
      );
    }
    let R = {
      name: "square",
      size: 24,
      node: [
        [
          "rect",
          { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
        ],
      ],
    };
    R.node;
    let B = (0, o.default)(R);
    function U({
      value: e,
      onChange: t,
      onSend: r,
      onStop: i,
      busy: l,
      disabled: o,
      placeholder: a,
    }) {
      return (0, n.jsxs)("form", {
        onSubmit: (e) => {
          e.preventDefault(), r();
        },
        className:
          "flex items-end gap-2 rounded-3xl border border-line bg-night-2 p-1.5 transition-colors focus-within:border-flame/70 focus-within:ring-2 focus-within:ring-flame/20",
        children: [
          (0, n.jsx)("label", {
            htmlFor: "composer",
            className: "sr-only",
            children: "Message",
          }),
          (0, n.jsx)("textarea", {
            id: "composer",
            rows: 1,
            value: e,
            onChange: (e) => t(e.target.value),
            onKeyDown: (e) => {
              "Enter" !== e.key ||
                e.shiftKey ||
                e.nativeEvent.isComposing ||
                (e.preventDefault(), r());
            },
            enterKeyHint: "send",
            placeholder: a,
            className:
              "field-sizing-content max-h-48 min-h-10 min-w-0 flex-1 resize-none bg-transparent px-3 py-2 text-mist placeholder:text-faint focus:outline-none",
          }),
          l
            ? (0, n.jsxs)(T.Button, {
                type: "button",
                variant: "quiet",
                onClick: i,
                children: [
                  (0, n.jsx)(B, {
                    size: 13,
                    "aria-hidden": !0,
                    className: "fill-current",
                  }),
                  "Stop",
                ],
              })
            : (0, n.jsx)(T.Button, {
                type: "submit",
                disabled: o || !e.trim(),
                children: "Send",
              }),
        ],
      });
    }
    var H = e.i(22016),
      q = e.i(96516),
      $ = e.i(91323),
      V = e.i(31852),
      W = e.i(74429);
    let K = [
      [
        "The Inferno relay",
        "Sees only sealed envelopes: when they travel, roughly how big they are and, like any website, your IP address. Never the words inside.",
      ],
      [
        "The lender's GPU",
        "Reads your words in memory to write the answer. The lender's node page never shows them, but a lender running modified software could.",
      ],
      [
        "Your wallet",
        "The lender never learns it. Each chat uses a fresh key made in this tab, and asking needs no wallet during the beta.",
      ],
      [
        "Zero exposure",
        "Use private mode: the model runs on your own GPU and nothing you type leaves this tab.",
      ],
    ];
    function G({ picked: e, onPick: t, onClose: i }) {
      let [l, o] = (0, r.useState)(null),
        [a, s] = (0, r.useState)(!1),
        [u, c] = (0, r.useState)(""),
        [d, h] = (0, r.useState)(null),
        [f, p] = (0, r.useState)(!1);
      return (
        (0, r.useEffect)(() => {
          let e = !0;
          return (
            (0, N.networkPaid)().then((t) => e && p(t)),
            () => {
              e = !1;
            }
          );
        }, []),
        (0, r.useEffect)(() => {
          let e = !0,
            t = () =>
              (0, V.fetchNodes)()
                .then(async (t) => {
                  let n = await Promise.all(t.map(W.verifyNodeOffer));
                  e &&
                    (o(
                      t
                        .filter((e, t) => n[t])
                        .sort((e, t) => e.address.localeCompare(t.address))
                    ),
                    s(!1));
                })
                .catch(() => e && s(!0));
          t();
          let n = setInterval(t, W.HEARTBEAT_MS);
          return () => {
            (e = !1), clearInterval(n);
          };
        }, []),
        (0, n.jsxs)("section", {
          ref: i ? I : void 0,
          "aria-labelledby": "lender-title",
          className: A,
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-start justify-between gap-4",
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("h2", {
                      id: "lender-title",
                      className: "text-2xl",
                      children: "Pick a lender",
                    }),
                    (0, n.jsx)("p", {
                      className: "mt-1.5 text-[15px] text-hush",
                      children:
                        "People serving a model from their browser. Each one's wallet signed the key their node uses, and this tab checked that signature before listing them.",
                    }),
                  ],
                }),
                i &&
                  (0, n.jsx)("button", {
                    type: "button",
                    onClick: i,
                    "aria-label": "Close the lender list",
                    className:
                      "-mt-2 -mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-hush hover:text-mist",
                    children: (0, n.jsx)(E.X, { size: 18 }),
                  }),
              ],
            }),
            a &&
              (0, n.jsx)("p", {
                className: "mt-5 text-[15px] text-ember",
                children:
                  "The relay didn't answer. Trying again every 10 seconds.",
              }),
            null === l
              ? !a &&
                (0, n.jsx)("p", {
                  className: "mt-5 text-[15px] text-hush",
                  children: "Looking for lenders online.",
                })
              : 0 === l.length
              ? (0, n.jsxs)("p", {
                  className: "mt-5 text-[15px] text-hush",
                  children: [
                    "No lenders online right now. Serve your own GPU from",
                    " ",
                    (0, n.jsx)(H.default, {
                      href: "/lend",
                      className:
                        "text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame",
                      children: "Lend a GPU",
                    }),
                    ", or use private mode.",
                  ],
                })
              : (0, n.jsx)("ul", {
                  className: "mt-5 grid gap-2",
                  children: l.map((r) =>
                    (0, n.jsx)(
                      "li",
                      {
                        children: (0, n.jsxs)("button", {
                          type: "button",
                          onClick: () => t(r),
                          "aria-pressed": r.key === e,
                          className:
                            "flex w-full items-start gap-3 rounded-2xl border border-line bg-night p-4 text-left transition-colors hover:border-line-bright aria-pressed:border-flame/70 aria-pressed:bg-night-3/50",
                          children: [
                            (0, n.jsx)(Y, { address: r.address }),
                            (0, n.jsxs)("span", {
                              className: "min-w-0 flex-1",
                              children: [
                                (0, n.jsxs)("span", {
                                  className:
                                    "flex flex-wrap items-center gap-x-3 gap-y-1",
                                  children: [
                                    (0, n.jsx)("span", {
                                      title: r.address,
                                      className: "tnum font-medium text-mist",
                                      children: (0, j.shortAddress)(r.address),
                                    }),
                                    (0, n.jsxs)("span", {
                                      className:
                                        "flex items-center gap-1 text-sm text-mint",
                                      children: [
                                        (0, n.jsx)($.BadgeCheck, {
                                          size: 14,
                                          "aria-hidden": !0,
                                          className: "shrink-0",
                                        }),
                                        "Key verified",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("span", {
                                  className: "block text-[15px] text-hush",
                                  children: [
                                    r.modelName,
                                    " on ",
                                    r.gpu || "a GPU its browser doesn't name",
                                  ],
                                }),
                                !!r.tps &&
                                  (0, n.jsxs)("span", {
                                    className: "tnum block text-sm text-faint",
                                    children: [
                                      "Recent speed: ",
                                      (0, j.formatInt)(r.tps),
                                      " tokens/s",
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      },
                      r.key
                    )
                  ),
                }),
            (0, n.jsxs)("form", {
              onSubmit: function (e) {
                e.preventDefault();
                let n = u.trim(),
                  r = l?.find(
                    (e) => e.address.toLowerCase() === n.toLowerCase()
                  );
                r
                  ? (c(""), h(null), t(r))
                  : h(
                      (0, q.isAddress)(n, { strict: !1 })
                        ? "That address isn't serving right now."
                        : "That isn't a wallet address. It starts with 0x."
                    );
              },
              className: "mt-6",
              children: [
                (0, n.jsx)("label", {
                  htmlFor: "lender-address",
                  className: "block text-[15px] text-mist",
                  children: "Use a lender's address",
                }),
                (0, n.jsxs)("div", {
                  className: "mt-2 flex gap-2",
                  children: [
                    (0, n.jsx)("input", {
                      id: "lender-address",
                      value: u,
                      onChange: (e) => {
                        c(e.target.value), h(null);
                      },
                      placeholder: "0x…",
                      autoComplete: "off",
                      autoCapitalize: "off",
                      spellCheck: !1,
                      className:
                        "tnum h-10 min-w-0 flex-1 rounded-full border border-line bg-night px-4 text-base text-mist placeholder:text-faint focus:border-flame/70 focus:ring-2 focus:ring-flame/20 focus:outline-none sm:text-[15px]",
                    }),
                    (0, n.jsx)(T.Button, {
                      type: "submit",
                      variant: "quiet",
                      disabled: !u.trim(),
                      children: "Use",
                    }),
                  ],
                }),
                d &&
                  (0, n.jsx)("p", {
                    role: "alert",
                    className: "mt-2 text-[15px] text-ember",
                    children: d,
                  }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "mt-6 border-t border-line pt-5",
              children: [
                (0, n.jsx)("h3", {
                  className: "text-lg",
                  children: "Who can read what you type",
                }),
                (0, n.jsx)("dl", {
                  className: "mt-3 grid gap-3 text-[15px]",
                  children: K.map(([e, t]) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        children: [
                          (0, n.jsx)("dt", {
                            className: "font-medium text-mist",
                            children: e,
                          }),
                          (0, n.jsx)("dd", {
                            className: "text-hush",
                            children: t,
                          }),
                        ],
                      },
                      e
                    )
                  ),
                }),
              ],
            }),
            (0, n.jsx)("p", {
              className: "mt-5 text-sm text-faint",
              children: f
                ? `Paid with Inferno credits: ${(0, j.formatUsd)(
                    W.USD_PER_1K_TOKENS
                  )} per 1,000 tokens, and lenders keep ${Math.round(
                    100 * W.LENDER_SHARE
                  )}%. Sign in from the wallet menu to ask.`
                : `Free during the beta. At launch, answers are planned at ${(0,
                  j.formatUsd)(
                    W.USD_PER_1K_TOKENS
                  )} per 1,000 tokens, and lenders keep ${Math.round(
                    100 * W.LENDER_SHARE
                  )}%.`,
            }),
          ],
        })
      );
    }
    function Y({ address: e }) {
      let t = parseInt(e.slice(2, 8), 16),
        r = (t % 5) + 1;
      return (0, n.jsx)("span", {
        "aria-hidden": !0,
        className: "mt-0.5 block size-9 shrink-0 rounded-full",
        style: {
          background: `conic-gradient(from ${
            t % 360
          }deg, var(--color-heat-${r}), var(--color-heat-${
            ((r + ((t >> 3) % 4)) % 5) + 1
          }), var(--color-heat-${r}))`,
        },
      });
    }
    var X = e.i(16327),
      Q = e.i(56102);
    function J() {}
    function Z() {}
    let ee = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
      et = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
      en = {};
    function er(e, t) {
      return ((t || en).jsx ? et : ee).test(e);
    }
    let ei = /[ \t\n\f\r]/g;
    function el(e) {
      return "" === e.replace(ei, "");
    }
    class eo {
      constructor(e, t) {
        (this.attribute = t), (this.property = e);
      }
    }
    (eo.prototype.attribute = ""),
      (eo.prototype.booleanish = !1),
      (eo.prototype.boolean = !1),
      (eo.prototype.commaOrSpaceSeparated = !1),
      (eo.prototype.commaSeparated = !1),
      (eo.prototype.defined = !1),
      (eo.prototype.mustUseProperty = !1),
      (eo.prototype.number = !1),
      (eo.prototype.overloadedBoolean = !1),
      (eo.prototype.property = ""),
      (eo.prototype.spaceSeparated = !1),
      (eo.prototype.space = void 0);
    let ea = 0,
      es = em(),
      eu = em(),
      ec = em(),
      ed = em(),
      eh = em(),
      ef = em(),
      ep = em();
    function em() {
      return 2 ** ++ea;
    }
    e.s(
      [
        "boolean",
        0,
        es,
        "booleanish",
        0,
        eu,
        "commaOrSpaceSeparated",
        0,
        ep,
        "commaSeparated",
        0,
        ef,
        "number",
        0,
        ed,
        "overloadedBoolean",
        0,
        ec,
        "spaceSeparated",
        0,
        eh,
      ],
      744
    );
    var eg = e.i(744);
    let ex = Object.keys(eg);
    class ey extends eo {
      constructor(e, t, n, r) {
        let i = -1;
        if (
          (super(e, t),
          (function (e, t, n) {
            n && (e[t] = n);
          })(this, "space", r),
          "number" == typeof n)
        )
          for (; ++i < ex.length; ) {
            const e = ex[i];
            !(function (e, t, n) {
              n && (e[t] = n);
            })(this, ex[i], (n & eg[e]) === eg[e]);
          }
      }
    }
    function ek(e) {
      return e.toLowerCase();
    }
    ey.prototype.defined = !0;
    let eb = /[A-Z]/g,
      ev = /-[a-z]/g,
      ew = /^data[-\w.:]+$/i;
    function eS(e) {
      return "-" + e.toLowerCase();
    }
    function eC(e) {
      return e.charAt(1).toUpperCase();
    }
    let ej = {
      classId: "classID",
      dataType: "datatype",
      itemId: "itemID",
      strokeDashArray: "strokeDasharray",
      strokeDashOffset: "strokeDashoffset",
      strokeLineCap: "strokeLinecap",
      strokeLineJoin: "strokeLinejoin",
      strokeMiterLimit: "strokeMiterlimit",
      typeOf: "typeof",
      xLinkActuate: "xlinkActuate",
      xLinkArcRole: "xlinkArcrole",
      xLinkHref: "xlinkHref",
      xLinkRole: "xlinkRole",
      xLinkShow: "xlinkShow",
      xLinkTitle: "xlinkTitle",
      xLinkType: "xlinkType",
      xmlnsXLink: "xmlnsXlink",
    };
    class eN {
      constructor(e, t, n) {
        (this.normal = t), (this.property = e), n && (this.space = n);
      }
    }
    function eE(e, t) {
      let n = {},
        r = {};
      for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
      return new eN(n, r, t);
    }
    function eT(e) {
      let t = {},
        n = {};
      for (let [r, i] of Object.entries(e.properties)) {
        let l = new ey(r, e.transform(e.attributes || {}, r), i, e.space);
        e.mustUseProperty &&
          e.mustUseProperty.includes(r) &&
          (l.mustUseProperty = !0),
          (t[r] = l),
          (n[ek(r)] = r),
          (n[ek(l.attribute)] = r);
      }
      return new eN(t, n, e.space);
    }
    (eN.prototype.normal = {}),
      (eN.prototype.property = {}),
      (eN.prototype.space = void 0);
    let eP = eT({
      properties: {
        ariaActiveDescendant: null,
        ariaAtomic: eu,
        ariaAutoComplete: null,
        ariaBusy: eu,
        ariaChecked: eu,
        ariaColCount: ed,
        ariaColIndex: ed,
        ariaColSpan: ed,
        ariaControls: eh,
        ariaCurrent: null,
        ariaDescribedBy: eh,
        ariaDetails: null,
        ariaDisabled: eu,
        ariaDropEffect: eh,
        ariaErrorMessage: null,
        ariaExpanded: eu,
        ariaFlowTo: eh,
        ariaGrabbed: eu,
        ariaHasPopup: null,
        ariaHidden: eu,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: eh,
        ariaLevel: ed,
        ariaLive: null,
        ariaModal: eu,
        ariaMultiLine: eu,
        ariaMultiSelectable: eu,
        ariaOrientation: null,
        ariaOwns: eh,
        ariaPlaceholder: null,
        ariaPosInSet: ed,
        ariaPressed: eu,
        ariaReadOnly: eu,
        ariaRelevant: null,
        ariaRequired: eu,
        ariaRoleDescription: eh,
        ariaRowCount: ed,
        ariaRowIndex: ed,
        ariaRowSpan: ed,
        ariaSelected: eu,
        ariaSetSize: ed,
        ariaSort: null,
        ariaValueMax: ed,
        ariaValueMin: ed,
        ariaValueNow: ed,
        ariaValueText: null,
        role: null,
      },
      transform: (e, t) =>
        "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
    });
    function eA(e, t) {
      return t in e ? e[t] : t;
    }
    function eI(e, t) {
      return eA(e, t.toLowerCase());
    }
    let eD = eT({
        attributes: {
          acceptcharset: "accept-charset",
          classname: "class",
          htmlfor: "for",
          httpequiv: "http-equiv",
        },
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          abbr: null,
          accept: ef,
          acceptCharset: eh,
          accessKey: eh,
          action: null,
          allow: null,
          allowFullScreen: es,
          allowPaymentRequest: es,
          allowUserMedia: es,
          alpha: es,
          alt: null,
          as: null,
          async: es,
          autoCapitalize: null,
          autoComplete: eh,
          autoFocus: es,
          autoPlay: es,
          blocking: eh,
          capture: null,
          charSet: null,
          checked: es,
          cite: null,
          className: eh,
          closedBy: null,
          colorSpace: null,
          cols: ed,
          colSpan: ed,
          command: null,
          commandFor: null,
          content: null,
          contentEditable: eu,
          controls: es,
          controlsList: eh,
          coords: ed | ef,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: es,
          defer: es,
          dir: null,
          dirName: null,
          disabled: es,
          download: ec,
          draggable: eu,
          encType: null,
          enterKeyHint: null,
          fetchPriority: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: es,
          formTarget: null,
          headers: eh,
          height: ed,
          hidden: ec,
          high: ed,
          href: null,
          hrefLang: null,
          htmlFor: eh,
          httpEquiv: eh,
          id: null,
          imageSizes: null,
          imageSrcSet: null,
          inert: es,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: es,
          itemId: null,
          itemProp: eh,
          itemRef: eh,
          itemScope: es,
          itemType: eh,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: es,
          low: ed,
          manifest: null,
          max: null,
          maxLength: ed,
          media: null,
          method: null,
          min: null,
          minLength: ed,
          multiple: es,
          muted: es,
          name: null,
          nonce: null,
          noModule: es,
          noValidate: es,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforeMatch: null,
          onBeforePrint: null,
          onBeforeToggle: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextLost: null,
          onContextMenu: null,
          onContextRestored: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onScrollEnd: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: es,
          optimum: ed,
          pattern: null,
          ping: eh,
          placeholder: null,
          playsInline: es,
          popover: null,
          popoverTarget: null,
          popoverTargetAction: null,
          poster: null,
          preload: null,
          readOnly: es,
          referrerPolicy: null,
          rel: eh,
          required: es,
          reversed: es,
          rows: ed,
          rowSpan: ed,
          sandbox: eh,
          scope: null,
          scoped: es,
          seamless: es,
          selected: es,
          shadowRootClonable: es,
          shadowRootCustomElementRegistry: es,
          shadowRootDelegatesFocus: es,
          shadowRootMode: null,
          shadowRootSerializable: es,
          shape: null,
          size: ed,
          sizes: null,
          slot: null,
          span: ed,
          spellCheck: eu,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: null,
          start: ed,
          step: null,
          style: null,
          tabIndex: ed,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: es,
          useMap: null,
          value: eu,
          width: ed,
          wrap: null,
          writingSuggestions: null,
          align: null,
          aLink: null,
          archive: eh,
          axis: null,
          background: null,
          bgColor: null,
          border: ed,
          borderColor: null,
          bottomMargin: ed,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: es,
          declare: es,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: ed,
          leftMargin: ed,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: ed,
          marginWidth: ed,
          noResize: es,
          noHref: es,
          noShade: es,
          noWrap: es,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: ed,
          rules: null,
          scheme: null,
          scrolling: eu,
          standby: null,
          summary: null,
          text: null,
          topMargin: ed,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: ed,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          credentialless: es,
          disablePictureInPicture: es,
          disableRemotePlayback: es,
          exportParts: ef,
          part: eh,
          prefix: null,
          property: null,
          results: ed,
          security: null,
          unselectable: null,
        },
        space: "html",
        transform: eI,
      }),
      eM = eT({
        attributes: {
          accentHeight: "accent-height",
          alignmentBaseline: "alignment-baseline",
          arabicForm: "arabic-form",
          baselineShift: "baseline-shift",
          capHeight: "cap-height",
          className: "class",
          clipPath: "clip-path",
          clipRule: "clip-rule",
          colorInterpolation: "color-interpolation",
          colorInterpolationFilters: "color-interpolation-filters",
          colorProfile: "color-profile",
          colorRendering: "color-rendering",
          crossOrigin: "crossorigin",
          dataType: "datatype",
          dominantBaseline: "dominant-baseline",
          enableBackground: "enable-background",
          fillOpacity: "fill-opacity",
          fillRule: "fill-rule",
          floodColor: "flood-color",
          floodOpacity: "flood-opacity",
          fontFamily: "font-family",
          fontSize: "font-size",
          fontSizeAdjust: "font-size-adjust",
          fontStretch: "font-stretch",
          fontStyle: "font-style",
          fontVariant: "font-variant",
          fontWeight: "font-weight",
          glyphName: "glyph-name",
          glyphOrientationHorizontal: "glyph-orientation-horizontal",
          glyphOrientationVertical: "glyph-orientation-vertical",
          hrefLang: "hreflang",
          horizAdvX: "horiz-adv-x",
          horizOriginX: "horiz-origin-x",
          horizOriginY: "horiz-origin-y",
          imageRendering: "image-rendering",
          letterSpacing: "letter-spacing",
          lightingColor: "lighting-color",
          markerEnd: "marker-end",
          markerMid: "marker-mid",
          markerStart: "marker-start",
          maskType: "mask-type",
          navDown: "nav-down",
          navDownLeft: "nav-down-left",
          navDownRight: "nav-down-right",
          navLeft: "nav-left",
          navNext: "nav-next",
          navPrev: "nav-prev",
          navRight: "nav-right",
          navUp: "nav-up",
          navUpLeft: "nav-up-left",
          navUpRight: "nav-up-right",
          onAbort: "onabort",
          onActivate: "onactivate",
          onAfterPrint: "onafterprint",
          onBeforePrint: "onbeforeprint",
          onBegin: "onbegin",
          onCancel: "oncancel",
          onCanPlay: "oncanplay",
          onCanPlayThrough: "oncanplaythrough",
          onChange: "onchange",
          onClick: "onclick",
          onClose: "onclose",
          onCopy: "oncopy",
          onCueChange: "oncuechange",
          onCut: "oncut",
          onDblClick: "ondblclick",
          onDrag: "ondrag",
          onDragEnd: "ondragend",
          onDragEnter: "ondragenter",
          onDragExit: "ondragexit",
          onDragLeave: "ondragleave",
          onDragOver: "ondragover",
          onDragStart: "ondragstart",
          onDrop: "ondrop",
          onDurationChange: "ondurationchange",
          onEmptied: "onemptied",
          onEnd: "onend",
          onEnded: "onended",
          onError: "onerror",
          onFocus: "onfocus",
          onFocusIn: "onfocusin",
          onFocusOut: "onfocusout",
          onHashChange: "onhashchange",
          onInput: "oninput",
          onInvalid: "oninvalid",
          onKeyDown: "onkeydown",
          onKeyPress: "onkeypress",
          onKeyUp: "onkeyup",
          onLoad: "onload",
          onLoadedData: "onloadeddata",
          onLoadedMetadata: "onloadedmetadata",
          onLoadStart: "onloadstart",
          onMessage: "onmessage",
          onMouseDown: "onmousedown",
          onMouseEnter: "onmouseenter",
          onMouseLeave: "onmouseleave",
          onMouseMove: "onmousemove",
          onMouseOut: "onmouseout",
          onMouseOver: "onmouseover",
          onMouseUp: "onmouseup",
          onMouseWheel: "onmousewheel",
          onOffline: "onoffline",
          onOnline: "ononline",
          onPageHide: "onpagehide",
          onPageShow: "onpageshow",
          onPaste: "onpaste",
          onPause: "onpause",
          onPlay: "onplay",
          onPlaying: "onplaying",
          onPopState: "onpopstate",
          onProgress: "onprogress",
          onRateChange: "onratechange",
          onRepeat: "onrepeat",
          onReset: "onreset",
          onResize: "onresize",
          onScroll: "onscroll",
          onSeeked: "onseeked",
          onSeeking: "onseeking",
          onSelect: "onselect",
          onShow: "onshow",
          onStalled: "onstalled",
          onStorage: "onstorage",
          onSubmit: "onsubmit",
          onSuspend: "onsuspend",
          onTimeUpdate: "ontimeupdate",
          onToggle: "ontoggle",
          onUnload: "onunload",
          onVolumeChange: "onvolumechange",
          onWaiting: "onwaiting",
          onZoom: "onzoom",
          overlinePosition: "overline-position",
          overlineThickness: "overline-thickness",
          paintOrder: "paint-order",
          panose1: "panose-1",
          pointerEvents: "pointer-events",
          referrerPolicy: "referrerpolicy",
          renderingIntent: "rendering-intent",
          shapeRendering: "shape-rendering",
          stopColor: "stop-color",
          stopOpacity: "stop-opacity",
          strikethroughPosition: "strikethrough-position",
          strikethroughThickness: "strikethrough-thickness",
          strokeDashArray: "stroke-dasharray",
          strokeDashOffset: "stroke-dashoffset",
          strokeLineCap: "stroke-linecap",
          strokeLineJoin: "stroke-linejoin",
          strokeMiterLimit: "stroke-miterlimit",
          strokeOpacity: "stroke-opacity",
          strokeWidth: "stroke-width",
          tabIndex: "tabindex",
          textAnchor: "text-anchor",
          textDecoration: "text-decoration",
          textRendering: "text-rendering",
          transformOrigin: "transform-origin",
          typeOf: "typeof",
          underlinePosition: "underline-position",
          underlineThickness: "underline-thickness",
          unicodeBidi: "unicode-bidi",
          unicodeRange: "unicode-range",
          unitsPerEm: "units-per-em",
          vAlphabetic: "v-alphabetic",
          vHanging: "v-hanging",
          vIdeographic: "v-ideographic",
          vMathematical: "v-mathematical",
          vectorEffect: "vector-effect",
          vertAdvY: "vert-adv-y",
          vertOriginX: "vert-origin-x",
          vertOriginY: "vert-origin-y",
          wordSpacing: "word-spacing",
          writingMode: "writing-mode",
          xHeight: "x-height",
          playbackOrder: "playbackorder",
          timelineBegin: "timelinebegin",
        },
        properties: {
          about: ep,
          accentHeight: ed,
          accumulate: null,
          additive: null,
          alignmentBaseline: null,
          alphabetic: ed,
          amplitude: ed,
          arabicForm: null,
          ascent: ed,
          attributeName: null,
          attributeType: null,
          azimuth: ed,
          bandwidth: null,
          baselineShift: null,
          baseFrequency: null,
          baseProfile: null,
          bbox: null,
          begin: null,
          bias: ed,
          by: null,
          calcMode: null,
          capHeight: ed,
          className: eh,
          clip: null,
          clipPath: null,
          clipPathUnits: null,
          clipRule: null,
          color: null,
          colorInterpolation: null,
          colorInterpolationFilters: null,
          colorProfile: null,
          colorRendering: null,
          content: null,
          contentScriptType: null,
          contentStyleType: null,
          crossOrigin: null,
          cursor: null,
          cx: null,
          cy: null,
          d: null,
          dataType: null,
          defaultAction: null,
          descent: ed,
          diffuseConstant: ed,
          direction: null,
          display: null,
          dur: null,
          divisor: ed,
          dominantBaseline: null,
          download: es,
          dx: null,
          dy: null,
          edgeMode: null,
          editable: null,
          elevation: ed,
          enableBackground: null,
          end: null,
          event: null,
          exponent: ed,
          externalResourcesRequired: null,
          fill: null,
          fillOpacity: ed,
          fillRule: null,
          filter: null,
          filterRes: null,
          filterUnits: null,
          floodColor: null,
          floodOpacity: null,
          focusable: null,
          focusHighlight: null,
          fontFamily: null,
          fontSize: null,
          fontSizeAdjust: null,
          fontStretch: null,
          fontStyle: null,
          fontVariant: null,
          fontWeight: null,
          format: null,
          fr: null,
          from: null,
          fx: null,
          fy: null,
          g1: ef,
          g2: ef,
          glyphName: ef,
          glyphOrientationHorizontal: null,
          glyphOrientationVertical: null,
          glyphRef: null,
          gradientTransform: null,
          gradientUnits: null,
          handler: null,
          hanging: ed,
          hatchContentUnits: null,
          hatchUnits: null,
          height: null,
          href: null,
          hrefLang: null,
          horizAdvX: ed,
          horizOriginX: ed,
          horizOriginY: ed,
          id: null,
          ideographic: ed,
          imageRendering: null,
          initialVisibility: null,
          in: null,
          in2: null,
          intercept: ed,
          k: ed,
          k1: ed,
          k2: ed,
          k3: ed,
          k4: ed,
          kernelMatrix: ep,
          kernelUnitLength: null,
          keyPoints: null,
          keySplines: null,
          keyTimes: null,
          kerning: null,
          lang: null,
          lengthAdjust: null,
          letterSpacing: null,
          lightingColor: null,
          limitingConeAngle: ed,
          local: null,
          markerEnd: null,
          markerMid: null,
          markerStart: null,
          markerHeight: null,
          markerUnits: null,
          markerWidth: null,
          mask: null,
          maskContentUnits: null,
          maskType: null,
          maskUnits: null,
          mathematical: null,
          max: null,
          media: null,
          mediaCharacterEncoding: null,
          mediaContentEncodings: null,
          mediaSize: ed,
          mediaTime: null,
          method: null,
          min: null,
          mode: null,
          name: null,
          navDown: null,
          navDownLeft: null,
          navDownRight: null,
          navLeft: null,
          navNext: null,
          navPrev: null,
          navRight: null,
          navUp: null,
          navUpLeft: null,
          navUpRight: null,
          numOctaves: null,
          observer: null,
          offset: null,
          onAbort: null,
          onActivate: null,
          onAfterPrint: null,
          onBeforePrint: null,
          onBegin: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnd: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFocusIn: null,
          onFocusOut: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadStart: null,
          onMessage: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onMouseWheel: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRepeat: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onShow: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onZoom: null,
          opacity: null,
          operator: null,
          order: null,
          orient: null,
          orientation: null,
          origin: null,
          overflow: null,
          overlay: null,
          overlinePosition: ed,
          overlineThickness: ed,
          paintOrder: null,
          panose1: null,
          path: null,
          pathLength: ed,
          patternContentUnits: null,
          patternTransform: null,
          patternUnits: null,
          phase: null,
          ping: eh,
          pitch: null,
          playbackOrder: null,
          pointerEvents: null,
          points: null,
          pointsAtX: ed,
          pointsAtY: ed,
          pointsAtZ: ed,
          preserveAlpha: null,
          preserveAspectRatio: null,
          primitiveUnits: null,
          propagate: null,
          property: ep,
          r: null,
          radius: null,
          referrerPolicy: null,
          refX: null,
          refY: null,
          rel: ep,
          rev: ep,
          renderingIntent: null,
          repeatCount: null,
          repeatDur: null,
          requiredExtensions: ep,
          requiredFeatures: ep,
          requiredFonts: ep,
          requiredFormats: ep,
          resource: null,
          restart: null,
          result: null,
          rotate: null,
          rx: null,
          ry: null,
          scale: null,
          seed: null,
          shapeRendering: null,
          side: null,
          slope: null,
          snapshotTime: null,
          specularConstant: ed,
          specularExponent: ed,
          spreadMethod: null,
          spacing: null,
          startOffset: null,
          stdDeviation: null,
          stemh: null,
          stemv: null,
          stitchTiles: null,
          stopColor: null,
          stopOpacity: null,
          strikethroughPosition: ed,
          strikethroughThickness: ed,
          string: null,
          stroke: null,
          strokeDashArray: ep,
          strokeDashOffset: null,
          strokeLineCap: null,
          strokeLineJoin: null,
          strokeMiterLimit: ed,
          strokeOpacity: ed,
          strokeWidth: null,
          style: null,
          surfaceScale: ed,
          syncBehavior: null,
          syncBehaviorDefault: null,
          syncMaster: null,
          syncTolerance: null,
          syncToleranceDefault: null,
          systemLanguage: ep,
          tabIndex: ed,
          tableValues: null,
          target: null,
          targetX: ed,
          targetY: ed,
          textAnchor: null,
          textDecoration: null,
          textRendering: null,
          textLength: null,
          timelineBegin: null,
          title: null,
          transformBehavior: null,
          type: null,
          typeOf: ep,
          to: null,
          transform: null,
          transformOrigin: null,
          u1: null,
          u2: null,
          underlinePosition: ed,
          underlineThickness: ed,
          unicode: null,
          unicodeBidi: null,
          unicodeRange: null,
          unitsPerEm: ed,
          values: null,
          vAlphabetic: ed,
          vMathematical: ed,
          vectorEffect: null,
          vHanging: ed,
          vIdeographic: ed,
          version: null,
          vertAdvY: ed,
          vertOriginX: ed,
          vertOriginY: ed,
          viewBox: null,
          viewTarget: null,
          visibility: null,
          width: null,
          widths: null,
          wordSpacing: null,
          writingMode: null,
          x: null,
          x1: null,
          x2: null,
          xChannelSelector: null,
          xHeight: ed,
          y: null,
          y1: null,
          y2: null,
          yChannelSelector: null,
          z: null,
          zoomAndPan: null,
        },
        space: "svg",
        transform: eA,
      }),
      eL = eT({
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
        space: "xlink",
        transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
      }),
      ez = eT({
        attributes: { xmlnsxlink: "xmlns:xlink" },
        properties: { xmlnsXLink: null, xmlns: null },
        space: "xmlns",
        transform: eI,
      }),
      e_ = eT({
        properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
        space: "xml",
        transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
      }),
      eO = eE([eP, eD, eL, ez, e_], "html"),
      eF = eE([eP, eM, eL, ez, e_], "svg");
    var eR = e.i(15511);
    let eB = eH("end"),
      eU = eH("start");
    function eH(e) {
      return function (t) {
        let n = (t && t.position && t.position[e]) || {};
        if (
          "number" == typeof n.line &&
          n.line > 0 &&
          "number" == typeof n.column &&
          n.column > 0
        )
          return {
            line: n.line,
            column: n.column,
            offset:
              "number" == typeof n.offset && n.offset > -1 ? n.offset : void 0,
          };
      };
    }
    function eq(e) {
      return e && "object" == typeof e
        ? "position" in e || "type" in e
          ? eV(e.position)
          : "start" in e || "end" in e
          ? eV(e)
          : "line" in e || "column" in e
          ? e$(e)
          : ""
        : "";
    }
    function e$(e) {
      return eW(e && e.line) + ":" + eW(e && e.column);
    }
    function eV(e) {
      return e$(e && e.start) + "-" + e$(e && e.end);
    }
    function eW(e) {
      return e && "number" == typeof e ? e : 1;
    }
    class eK extends Error {
      constructor(e, t, n) {
        super(), "string" == typeof t && ((n = t), (t = void 0));
        let r = "",
          i = {},
          l = !1;
        if (
          (t &&
            (i =
              ("line" in t && "column" in t) || ("start" in t && "end" in t)
                ? { place: t }
                : "type" in t
                ? { ancestors: [t], place: t.position }
                : { ...t }),
          "string" == typeof e
            ? (r = e)
            : !i.cause && e && ((l = !0), (r = e.message), (i.cause = e)),
          !i.ruleId && !i.source && "string" == typeof n)
        ) {
          const e = n.indexOf(":");
          -1 === e
            ? (i.ruleId = n)
            : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
        }
        if (!i.place && i.ancestors && i.ancestors) {
          const e = i.ancestors[i.ancestors.length - 1];
          e && (i.place = e.position);
        }
        const o = i.place && "start" in i.place ? i.place.start : i.place;
        (this.ancestors = i.ancestors || void 0),
          (this.cause = i.cause || void 0),
          (this.column = o ? o.column : void 0),
          (this.fatal = void 0),
          (this.file = ""),
          (this.message = r),
          (this.line = o ? o.line : void 0),
          (this.name = eq(i.place) || "1:1"),
          (this.place = i.place || void 0),
          (this.reason = this.message),
          (this.ruleId = i.ruleId || void 0),
          (this.source = i.source || void 0),
          (this.stack =
            l && i.cause && "string" == typeof i.cause.stack
              ? i.cause.stack
              : ""),
          (this.actual = void 0),
          (this.expected = void 0),
          (this.note = void 0),
          (this.url = void 0);
      }
    }
    (eK.prototype.file = ""),
      (eK.prototype.name = ""),
      (eK.prototype.reason = ""),
      (eK.prototype.message = ""),
      (eK.prototype.stack = ""),
      (eK.prototype.column = void 0),
      (eK.prototype.line = void 0),
      (eK.prototype.ancestors = void 0),
      (eK.prototype.cause = void 0),
      (eK.prototype.fatal = void 0),
      (eK.prototype.place = void 0),
      (eK.prototype.ruleId = void 0),
      (eK.prototype.source = void 0);
    let eG = {}.hasOwnProperty,
      eY = new Map(),
      eX = /[A-Z]/g,
      eQ = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
      eJ = new Set(["td", "th"]),
      eZ = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
    function e0(e, t, n) {
      var r, i, l, o, a, s, u, c, d;
      let h, f, p, m, g, x, y, k, b, v, w;
      return "element" === t.type
        ? ((r = e),
          (i = t),
          (l = n),
          (f = h = r.schema),
          "svg" === i.tagName.toLowerCase() &&
            "html" === h.space &&
            (r.schema = eF),
          r.ancestors.push(i),
          (p = e5(r, i.tagName, !1)),
          (m = (function (e, t) {
            let n,
              r,
              i = {};
            for (r in t.properties)
              if ("children" !== r && eG.call(t.properties, r)) {
                let l = (function (e, t, n) {
                  let r = (function (e, t) {
                    let n = ek(t),
                      r = t,
                      i = eo;
                    if (n in e.normal) return e.property[e.normal[n]];
                    if (
                      n.length > 4 &&
                      "data" === n.slice(0, 4) &&
                      ew.test(t)
                    ) {
                      if ("-" === t.charAt(4)) {
                        let e = t.slice(5).replace(ev, eC);
                        r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
                      } else {
                        let e = t.slice(4);
                        if (!ev.test(e)) {
                          let n = e.replace(eb, eS);
                          "-" !== n.charAt(0) && (n = "-" + n),
                            (t = "data" + n);
                        }
                      }
                      i = ey;
                    }
                    return new i(r, t);
                  })(e.schema, t);
                  if (
                    !(null == n || ("number" == typeof n && Number.isNaN(n)))
                  ) {
                    var i;
                    let t;
                    if (
                      (Array.isArray(n) &&
                        (n = r.commaSeparated
                          ? ((t = {}),
                            ("" === (i = n)[i.length - 1] ? [...i, ""] : i)
                              .join(
                                (t.padRight ? " " : "") +
                                  "," +
                                  (!1 === t.padLeft ? "" : " ")
                              )
                              .trim())
                          : n.join(" ").trim()),
                      "style" === r.property)
                    ) {
                      let t =
                        "object" == typeof n
                          ? n
                          : (function (e, t) {
                              try {
                                return (0, eR.default)(t, { reactCompat: !0 });
                              } catch (n) {
                                if (e.ignoreInvalidStyle) return {};
                                let t = new eK(
                                  "Cannot parse `style` attribute",
                                  {
                                    ancestors: e.ancestors,
                                    cause: n,
                                    ruleId: "style",
                                    source: "hast-util-to-jsx-runtime",
                                  }
                                );
                                throw (
                                  ((t.file = e.filePath || void 0),
                                  (t.url =
                                    eZ + "#cannot-parse-style-attribute"),
                                  t)
                                );
                              }
                            })(e, String(n));
                      return (
                        "css" === e.stylePropertyNameCase &&
                          (t = (function (e) {
                            let t,
                              n = {};
                            for (t in e)
                              eG.call(e, t) &&
                                (n[
                                  (function (e) {
                                    let t = e.replace(eX, e6);
                                    return (
                                      "ms-" === t.slice(0, 3) && (t = "-" + t),
                                      t
                                    );
                                  })(t)
                                ] = e[t]);
                            return n;
                          })(t)),
                        ["style", t]
                      );
                    }
                    return [
                      "react" === e.elementAttributeNameCase && r.space
                        ? ej[r.property] || r.property
                        : r.attribute,
                      n,
                    ];
                  }
                })(e, r, t.properties[r]);
                if (l) {
                  let [r, o] = l;
                  e.tableCellAlignToStyle &&
                  "align" === r &&
                  "string" == typeof o &&
                  eJ.has(t.tagName)
                    ? (n = o)
                    : (i[r] = o);
                }
              }
            return (
              n &&
                ((i.style || (i.style = {}))[
                  "css" === e.stylePropertyNameCase ? "text-align" : "textAlign"
                ] = n),
              i
            );
          })(r, i)),
          (g = e4(r, i)),
          eQ.has(i.tagName) &&
            (g = g.filter(function (e) {
              return (
                "string" != typeof e ||
                !("object" == typeof e
                  ? "text" === e.type && el(e.value)
                  : el(e))
              );
            })),
          e1(r, m, p, i),
          e2(m, g),
          r.ancestors.pop(),
          (r.schema = h),
          r.create(i, p, m, l))
        : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type
        ? (function (e, t) {
            if (t.data && t.data.estree && e.evaluater) {
              let n = t.data.estree.body[0];
              return J(n.type), e.evaluater.evaluateExpression(n.expression);
            }
            e3(e, t.position);
          })(e, t)
        : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type
        ? ((o = e),
          (a = t),
          (s = n),
          (y = x = o.schema),
          "svg" === a.name && "html" === x.space && (o.schema = eF),
          o.ancestors.push(a),
          (k = null === a.name ? o.Fragment : e5(o, a.name, !0)),
          (b = (function (e, t) {
            let n = {};
            for (let r of t.attributes)
              if ("mdxJsxExpressionAttribute" === r.type)
                if (r.data && r.data.estree && e.evaluater) {
                  let t = r.data.estree.body[0];
                  J(t.type);
                  let i = t.expression;
                  J(i.type);
                  let l = i.properties[0];
                  J(l.type),
                    Object.assign(
                      n,
                      e.evaluater.evaluateExpression(l.argument)
                    );
                } else e3(e, t.position);
              else {
                let i,
                  l = r.name;
                if (r.value && "object" == typeof r.value)
                  if (r.value.data && r.value.data.estree && e.evaluater) {
                    let t = r.value.data.estree.body[0];
                    J(t.type),
                      (i = e.evaluater.evaluateExpression(t.expression));
                  } else e3(e, t.position);
                else i = null === r.value || r.value;
                n[l] = i;
              }
            return n;
          })(o, a)),
          (v = e4(o, a)),
          e1(o, b, k, a),
          e2(b, v),
          o.ancestors.pop(),
          (o.schema = x),
          o.create(a, k, b, s))
        : "mdxjsEsm" === t.type
        ? (function (e, t) {
            if (t.data && t.data.estree && e.evaluater)
              return e.evaluater.evaluateProgram(t.data.estree);
            e3(e, t.position);
          })(e, t)
        : "root" === t.type
        ? ((u = e),
          (c = t),
          (d = n),
          e2((w = {}), e4(u, c)),
          u.create(c, u.Fragment, w, d))
        : "text" === t.type
        ? t.value
        : void 0;
    }
    function e1(e, t, n, r) {
      "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
    }
    function e2(e, t) {
      if (t.length > 0) {
        let n = t.length > 1 ? t : t[0];
        n && (e.children = n);
      }
    }
    function e4(e, t) {
      let n = [],
        r = -1,
        i = e.passKeys ? new Map() : eY;
      for (; ++r < t.children.length; ) {
        let l,
          o = t.children[r];
        if (e.passKeys) {
          let e =
            "element" === o.type
              ? o.tagName
              : "mdxJsxFlowElement" === o.type || "mdxJsxTextElement" === o.type
              ? o.name
              : void 0;
          if (e) {
            let t = i.get(e) || 0;
            (l = e + "-" + t), i.set(e, t + 1);
          }
        }
        let a = e0(e, o, l);
        void 0 !== a && n.push(a);
      }
      return n;
    }
    function e5(e, t, n) {
      let r;
      if (n)
        if (t.includes(".")) {
          let e,
            n = t.split("."),
            i = -1;
          for (; ++i < n.length; ) {
            let t = er(n[i])
              ? { type: "Identifier", name: n[i] }
              : { type: "Literal", value: n[i] };
            e = e
              ? {
                  type: "MemberExpression",
                  object: e,
                  property: t,
                  computed: !!(i && "Literal" === t.type),
                  optional: !1,
                }
              : t;
          }
          J(), (r = e);
        } else
          r =
            er(t) && !/^[a-z]/.test(t)
              ? { type: "Identifier", name: t }
              : { type: "Literal", value: t };
      else r = { type: "Literal", value: t };
      if ("Literal" === r.type) {
        let t = r.value;
        return eG.call(e.components, t) ? e.components[t] : t;
      }
      if (e.evaluater) return e.evaluater.evaluateExpression(r);
      e3(e);
    }
    function e3(e, t) {
      let n = new eK("Cannot handle MDX estrees without `createEvaluater`", {
        ancestors: e.ancestors,
        place: t,
        ruleId: "mdx-estree",
        source: "hast-util-to-jsx-runtime",
      });
      throw (
        ((n.file = e.filePath || void 0),
        (n.url = eZ + "#cannot-handle-mdx-estrees-without-createevaluater"),
        n)
      );
    }
    function e6(e) {
      return "-" + e.toLowerCase();
    }
    let e9 = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: [
          "audio",
          "embed",
          "iframe",
          "img",
          "input",
          "script",
          "source",
          "track",
          "video",
        ],
      },
      e7 = {};
    function e8(e, t) {
      let n = t || e7;
      return te(
        e,
        "boolean" != typeof n.includeImageAlt || n.includeImageAlt,
        "boolean" != typeof n.includeHtml || n.includeHtml
      );
    }
    function te(e, t, n) {
      var r;
      if ((r = e) && "object" == typeof r) {
        if ("value" in e) return "html" !== e.type || n ? e.value : "";
        if (t && "alt" in e && e.alt) return e.alt;
        if ("children" in e) return tt(e.children, t, n);
      }
      return Array.isArray(e) ? tt(e, t, n) : "";
    }
    function tt(e, t, n) {
      let r = [],
        i = -1;
      for (; ++i < e.length; ) r[i] = te(e[i], t, n);
      return r.join("");
    }
    function tn(e, t, n, r) {
      let i,
        l = e.length,
        o = 0;
      if (
        ((t = t < 0 ? (-t > l ? 0 : l + t) : t > l ? l : t),
        (n = n > 0 ? n : 0),
        r.length < 1e4)
      )
        (i = Array.from(r)).unshift(t, n), e.splice(...i);
      else
        for (n && e.splice(t, n); o < r.length; )
          (i = r.slice(o, o + 1e4)).unshift(t, 0),
            e.splice(...i),
            (o += 1e4),
            (t += 1e4);
    }
    function tr(e, t) {
      return e.length > 0 ? (tn(e, e.length, 0, t), e) : t;
    }
    let ti = {}.hasOwnProperty;
    function tl(e) {
      let t = {},
        n = -1;
      for (; ++n < e.length; )
        !(function (e, t) {
          let n;
          for (n in t) {
            let r,
              i = (ti.call(e, n) ? e[n] : void 0) || (e[n] = {}),
              l = t[n];
            if (l)
              for (r in l) {
                ti.call(i, r) || (i[r] = []);
                let e = l[r];
                !(function (e, t) {
                  let n = -1,
                    r = [];
                  for (; ++n < t.length; )
                    ("after" === t[n].add ? e : r).push(t[n]);
                  tn(e, 0, 0, r);
                })(i[r], Array.isArray(e) ? e : e ? [e] : []);
              }
          }
        })(t, e[n]);
      return t;
    }
    let to = ty(/[A-Za-z]/),
      ta = ty(/[\dA-Za-z]/),
      ts = ty(/[#-'*+\--9=?A-Z^-~]/);
    function tu(e) {
      return null !== e && (e < 32 || 127 === e);
    }
    let tc = ty(/\d/),
      td = ty(/[\dA-Fa-f]/),
      th = ty(/[!-/:-@[-`{-~]/);
    function tf(e) {
      return null !== e && e < -2;
    }
    function tp(e) {
      return null !== e && (e < 0 || 32 === e);
    }
    function tm(e) {
      return -2 === e || -1 === e || 32 === e;
    }
    let tg = ty(/\p{P}|\p{S}/u),
      tx = ty(/\s/);
    function ty(e) {
      return function (t) {
        return null !== t && t > -1 && e.test(String.fromCharCode(t));
      };
    }
    function tk(e, t, n, r) {
      let i = r ? r - 1 : 1 / 0,
        l = 0;
      return function (r) {
        return tm(r)
          ? (e.enter(n),
            (function r(o) {
              return tm(o) && l++ < i ? (e.consume(o), r) : (e.exit(n), t(o));
            })(r))
          : t(r);
      };
    }
    let tb = {
        tokenize: function (e) {
          let t,
            n = e.attempt(
              this.parser.constructs.contentInitial,
              function (t) {
                return null === t
                  ? void e.consume(t)
                  : (e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    tk(e, n, "linePrefix"));
              },
              function (n) {
                return (
                  e.enter("paragraph"),
                  (function n(r) {
                    let i = e.enter("chunkText", {
                      contentType: "text",
                      previous: t,
                    });
                    return (
                      t && (t.next = i),
                      (t = i),
                      (function t(r) {
                        if (null === r) {
                          e.exit("chunkText"),
                            e.exit("paragraph"),
                            e.consume(r);
                          return;
                        }
                        return tf(r)
                          ? (e.consume(r), e.exit("chunkText"), n)
                          : (e.consume(r), t);
                      })(r)
                    );
                  })(n)
                );
              }
            );
          return n;
        },
      },
      tv = {
        tokenize: function (e) {
          let t,
            n,
            r,
            i = this,
            l = [],
            o = 0;
          return a;
          function a(t) {
            if (o < l.length) {
              let n = l[o];
              return (
                (i.containerState = n[1]), e.attempt(n[0].continuation, s, u)(t)
              );
            }
            return u(t);
          }
          function s(e) {
            if ((o++, i.containerState._closeFlow)) {
              let n;
              (i.containerState._closeFlow = void 0), t && x();
              let r = i.events.length,
                l = r;
              for (; l--; )
                if (
                  "exit" === i.events[l][0] &&
                  "chunkFlow" === i.events[l][1].type
                ) {
                  n = i.events[l][1].end;
                  break;
                }
              g(o);
              let a = r;
              for (; a < i.events.length; )
                (i.events[a][1].end = { ...n }), a++;
              return (
                tn(i.events, l + 1, 0, i.events.slice(r)),
                (i.events.length = a),
                u(e)
              );
            }
            return a(e);
          }
          function u(n) {
            if (o === l.length) {
              if (!t) return h(n);
              if (t.currentConstruct && t.currentConstruct.concrete)
                return p(n);
              i.interrupt = !!(
                t.currentConstruct && !t._gfmTableDynamicInterruptHack
              );
            }
            return (i.containerState = {}), e.check(tw, c, d)(n);
          }
          function c(e) {
            return t && x(), g(o), h(e);
          }
          function d(e) {
            return (
              (i.parser.lazy[i.now().line] = o !== l.length),
              (r = i.now().offset),
              p(e)
            );
          }
          function h(t) {
            return (i.containerState = {}), e.attempt(tw, f, p)(t);
          }
          function f(e) {
            return o++, l.push([i.currentConstruct, i.containerState]), h(e);
          }
          function p(r) {
            if (null === r) {
              t && x(), g(0), e.consume(r);
              return;
            }
            return (
              (t = t || i.parser.flow(i.now())),
              e.enter("chunkFlow", {
                _tokenizer: t,
                contentType: "flow",
                previous: n,
              }),
              (function t(n) {
                if (null === n) {
                  m(e.exit("chunkFlow"), !0), g(0), e.consume(n);
                  return;
                }
                return tf(n)
                  ? (e.consume(n),
                    m(e.exit("chunkFlow")),
                    (o = 0),
                    (i.interrupt = void 0),
                    a)
                  : (e.consume(n), t);
              })(r)
            );
          }
          function m(e, l) {
            let a = i.sliceStream(e);
            if (
              (l && a.push(null),
              (e.previous = n),
              n && (n.next = e),
              (n = e),
              t.defineSkip(e.start),
              t.write(a),
              i.parser.lazy[e.start.line])
            ) {
              let e,
                n,
                l = t.events.length;
              for (; l--; )
                if (
                  t.events[l][1].start.offset < r &&
                  (!t.events[l][1].end || t.events[l][1].end.offset > r)
                )
                  return;
              let a = i.events.length,
                s = a;
              for (; s--; )
                if (
                  "exit" === i.events[s][0] &&
                  "chunkFlow" === i.events[s][1].type
                ) {
                  if (e) {
                    n = i.events[s][1].end;
                    break;
                  }
                  e = !0;
                }
              for (g(o), l = a; l < i.events.length; )
                (i.events[l][1].end = { ...n }), l++;
              tn(i.events, s + 1, 0, i.events.slice(a)), (i.events.length = l);
            }
          }
          function g(t) {
            let n = l.length;
            for (; n-- > t; ) {
              let t = l[n];
              (i.containerState = t[1]), t[0].exit.call(i, e);
            }
            l.length = t;
          }
          function x() {
            t.write([null]),
              (n = void 0),
              (t = void 0),
              (i.containerState._closeFlow = void 0);
          }
        },
      },
      tw = {
        tokenize: function (e, t, n) {
          return tk(
            e,
            e.attempt(this.parser.constructs.document, t, n),
            "linePrefix",
            this.parser.constructs.disable.null.includes("codeIndented")
              ? void 0
              : 4
          );
        },
      },
      tS = {
        partial: !0,
        tokenize: function (e, t, n) {
          return function (t) {
            return tm(t) ? tk(e, r, "linePrefix")(t) : r(t);
          };
          function r(e) {
            return null === e || tf(e) ? t(e) : n(e);
          }
        },
      };
    class tC {
      constructor(e) {
        (this.left = e ? [...e] : []), (this.right = []);
      }
      get(e) {
        if (e < 0 || e >= this.left.length + this.right.length)
          throw RangeError(
            "Cannot access index `" +
              e +
              "` in a splice buffer of size `" +
              (this.left.length + this.right.length) +
              "`"
          );
        return e < this.left.length
          ? this.left[e]
          : this.right[this.right.length - e + this.left.length - 1];
      }
      get length() {
        return this.left.length + this.right.length;
      }
      shift() {
        return this.setCursor(0), this.right.pop();
      }
      slice(e, t) {
        let n = null == t ? 1 / 0 : t;
        return n < this.left.length
          ? this.left.slice(e, n)
          : e > this.left.length
          ? this.right
              .slice(
                this.right.length - n + this.left.length,
                this.right.length - e + this.left.length
              )
              .reverse()
          : this.left
              .slice(e)
              .concat(
                this.right
                  .slice(this.right.length - n + this.left.length)
                  .reverse()
              );
      }
      splice(e, t, n) {
        this.setCursor(Math.trunc(e));
        let r = this.right.splice(this.right.length - (t || 0), 1 / 0);
        return n && tj(this.left, n), r.reverse();
      }
      pop() {
        return this.setCursor(1 / 0), this.left.pop();
      }
      push(e) {
        this.setCursor(1 / 0), this.left.push(e);
      }
      pushMany(e) {
        this.setCursor(1 / 0), tj(this.left, e);
      }
      unshift(e) {
        this.setCursor(0), this.right.push(e);
      }
      unshiftMany(e) {
        this.setCursor(0), tj(this.right, e.reverse());
      }
      setCursor(e) {
        if (
          e !== this.left.length &&
          (!(e > this.left.length) || 0 !== this.right.length) &&
          (!(e < 0) || 0 !== this.left.length)
        )
          if (e < this.left.length) {
            let t = this.left.splice(e, 1 / 0);
            tj(this.right, t.reverse());
          } else {
            let t = this.right.splice(
              this.left.length + this.right.length - e,
              1 / 0
            );
            tj(this.left, t.reverse());
          }
      }
    }
    function tj(e, t) {
      let n = 0;
      if (t.length < 1e4) e.push(...t);
      else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
    }
    function tN(e) {
      let t,
        n,
        r,
        i,
        l,
        o,
        a,
        s = {},
        u = -1,
        c = new tC(e);
      for (; ++u < c.length; ) {
        for (; u in s; ) u = s[u];
        if (
          ((t = c.get(u)),
          u &&
            "chunkFlow" === t[1].type &&
            "listItemPrefix" === c.get(u - 1)[1].type &&
            ((r = 0) < (o = t[1]._tokenizer.events).length &&
              "lineEndingBlank" === o[r][1].type &&
              (r += 2),
            r < o.length && "content" === o[r][1].type))
        )
          for (; ++r < o.length && "content" !== o[r][1].type; )
            "chunkText" === o[r][1].type &&
              ((o[r][1]._isInFirstContentOfListItem = !0), r++);
        if ("enter" === t[0])
          t[1].contentType &&
            (Object.assign(
              s,
              (function (e, t) {
                let n,
                  r,
                  i = e.get(t)[1],
                  l = e.get(t)[2],
                  o = t - 1,
                  a = [],
                  s = i._tokenizer;
                !s &&
                  ((s = l.parser[i.contentType](i.start)),
                  i._contentTypeTextTrailing &&
                    (s._contentTypeTextTrailing = !0));
                let u = s.events,
                  c = [],
                  d = {},
                  h = -1,
                  f = i,
                  p = 0,
                  m = 0,
                  g = [0];
                for (; f; ) {
                  for (; e.get(++o)[1] !== f; );
                  a.push(o),
                    !f._tokenizer &&
                      ((n = l.sliceStream(f)),
                      f.next || n.push(null),
                      r && s.defineSkip(f.start),
                      f._isInFirstContentOfListItem &&
                        (s._gfmTasklistFirstContentOfListItem = !0),
                      s.write(n),
                      f._isInFirstContentOfListItem &&
                        (s._gfmTasklistFirstContentOfListItem = void 0)),
                    (r = f),
                    (f = f.next);
                }
                for (f = i; ++h < u.length; )
                  "exit" === u[h][0] &&
                    "enter" === u[h - 1][0] &&
                    u[h][1].type === u[h - 1][1].type &&
                    u[h][1].start.line !== u[h][1].end.line &&
                    ((m = h + 1),
                    g.push(m),
                    (f._tokenizer = void 0),
                    (f.previous = void 0),
                    (f = f.next));
                for (
                  s.events = [],
                    f
                      ? ((f._tokenizer = void 0), (f.previous = void 0))
                      : g.pop(),
                    h = g.length;
                  h--;

                ) {
                  let t = u.slice(g[h], g[h + 1]),
                    n = a.pop();
                  c.push([n, n + t.length - 1]), e.splice(n, 2, t);
                }
                for (c.reverse(), h = -1; ++h < c.length; )
                  (d[p + c[h][0]] = p + c[h][1]), (p += c[h][1] - c[h][0] - 1);
                return d;
              })(c, u)
            ),
            (u = s[u]),
            (a = !0));
        else if (t[1]._container) {
          for (r = u, n = void 0; r--; )
            if (
              "lineEnding" === (i = c.get(r))[1].type ||
              "lineEndingBlank" === i[1].type
            )
              "enter" === i[0] &&
                (n && (c.get(n)[1].type = "lineEndingBlank"),
                (i[1].type = "lineEnding"),
                (n = r));
            else if (
              "linePrefix" === i[1].type ||
              "listItemIndent" === i[1].type
            );
            else break;
          n &&
            ((t[1].end = { ...c.get(n)[1].start }),
            (l = c.slice(n, u)).unshift(t),
            c.splice(n, u - n + 1, l));
        }
      }
      return tn(e, 0, 1 / 0, c.slice(0)), !a;
    }
    let tE = {
        resolve: function (e) {
          return tN(e), e;
        },
        tokenize: function (e, t) {
          let n;
          return function (t) {
            return (
              e.enter("content"),
              (n = e.enter("chunkContent", { contentType: "content" })),
              r(t)
            );
          };
          function r(t) {
            return null === t
              ? i(t)
              : tf(t)
              ? e.check(tT, l, i)(t)
              : (e.consume(t), r);
          }
          function i(n) {
            return e.exit("chunkContent"), e.exit("content"), t(n);
          }
          function l(t) {
            return (
              e.consume(t),
              e.exit("chunkContent"),
              (n.next = e.enter("chunkContent", {
                contentType: "content",
                previous: n,
              })),
              (n = n.next),
              r
            );
          }
        },
      },
      tT = {
        partial: !0,
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            return (
              e.exit("chunkContent"),
              e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              tk(e, i, "linePrefix")
            );
          };
          function i(i) {
            if (null === i || tf(i)) return n(i);
            let l = r.events[r.events.length - 1];
            return !r.parser.constructs.disable.null.includes("codeIndented") &&
              l &&
              "linePrefix" === l[1].type &&
              l[2].sliceSerialize(l[1], !0).length >= 4
              ? t(i)
              : e.interrupt(r.parser.constructs.flow, n, t)(i);
          }
        },
      },
      tP = {
        tokenize: function (e) {
          let t = this,
            n = e.attempt(
              tS,
              function (r) {
                return null === r
                  ? void e.consume(r)
                  : (e.enter("lineEndingBlank"),
                    e.consume(r),
                    e.exit("lineEndingBlank"),
                    (t.currentConstruct = void 0),
                    n);
              },
              e.attempt(
                this.parser.constructs.flowInitial,
                r,
                tk(
                  e,
                  e.attempt(this.parser.constructs.flow, r, e.attempt(tE, r)),
                  "linePrefix"
                )
              )
            );
          return n;
          function r(r) {
            return null === r
              ? void e.consume(r)
              : (e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                (t.currentConstruct = void 0),
                n);
          }
        },
      },
      tA = { resolveAll: tL() },
      tI = tM("string"),
      tD = tM("text");
    function tM(e) {
      return {
        resolveAll: tL("text" === e ? tz : void 0),
        tokenize: function (t) {
          let n = this,
            r = this.parser.constructs[e],
            i = t.attempt(r, l, o);
          return l;
          function l(e) {
            return s(e) ? i(e) : o(e);
          }
          function o(e) {
            return null === e
              ? void t.consume(e)
              : (t.enter("data"), t.consume(e), a);
          }
          function a(e) {
            return s(e) ? (t.exit("data"), i(e)) : (t.consume(e), a);
          }
          function s(e) {
            if (null === e) return !0;
            let t = r[e],
              i = -1;
            if (t)
              for (; ++i < t.length; ) {
                let e = t[i];
                if (!e.previous || e.previous.call(n, n.previous)) return !0;
              }
            return !1;
          }
        },
      };
    }
    function tL(e) {
      return function (t, n) {
        let r,
          i = -1;
        for (; ++i <= t.length; )
          void 0 === r
            ? t[i] && "data" === t[i][1].type && ((r = i), i++)
            : (t[i] && "data" === t[i][1].type) ||
              (i !== r + 2 &&
                ((t[r][1].end = t[i - 1][1].end),
                t.splice(r + 2, i - r - 2),
                (i = r + 2)),
              (r = void 0));
        return e ? e(t, n) : t;
      };
    }
    function tz(e, t) {
      let n = 0;
      for (; ++n <= e.length; )
        if (
          (n === e.length || "lineEnding" === e[n][1].type) &&
          "data" === e[n - 1][1].type
        ) {
          let r,
            i = e[n - 1][1],
            l = t.sliceStream(i),
            o = l.length,
            a = -1,
            s = 0;
          for (; o--; ) {
            let e = l[o];
            if ("string" == typeof e) {
              for (a = e.length; 32 === e.charCodeAt(a - 1); ) s++, a--;
              if (a) break;
              a = -1;
            } else if (-2 === e) (r = !0), s++;
            else if (-1 === e);
            else {
              o++;
              break;
            }
          }
          if ((t._contentTypeTextTrailing && n === e.length && (s = 0), s)) {
            let l = {
              type:
                n === e.length || r || s < 2
                  ? "lineSuffix"
                  : "hardBreakTrailing",
              start: {
                _bufferIndex: o ? a : i.start._bufferIndex + a,
                _index: i.start._index + o,
                line: i.end.line,
                column: i.end.column - s,
                offset: i.end.offset - s,
              },
              end: { ...i.end },
            };
            (i.end = { ...l.start }),
              i.start.offset === i.end.offset
                ? Object.assign(i, l)
                : (e.splice(n, 0, ["enter", l, t], ["exit", l, t]), (n += 2));
          }
          n++;
        }
      return e;
    }
    function t_(e) {
      return null === e || tp(e) || tx(e) ? 1 : tg(e) ? 2 : void 0;
    }
    function tO(e, t, n) {
      let r = [],
        i = -1;
      for (; ++i < e.length; ) {
        let l = e[i].resolveAll;
        l && !r.includes(l) && ((t = l(t, n)), r.push(l));
      }
      return t;
    }
    let tF = {
      name: "attention",
      resolveAll: function (e, t) {
        let n,
          r,
          i,
          l,
          o,
          a,
          s,
          u,
          c = -1;
        for (; ++c < e.length; )
          if (
            "enter" === e[c][0] &&
            "attentionSequence" === e[c][1].type &&
            e[c][1]._close
          ) {
            for (n = c; n--; )
              if (
                "exit" === e[n][0] &&
                "attentionSequence" === e[n][1].type &&
                e[n][1]._open &&
                t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                  t.sliceSerialize(e[c][1]).charCodeAt(0)
              ) {
                if (
                  (e[n][1]._close || e[c][1]._open) &&
                  (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                  !(
                    (e[n][1].end.offset -
                      e[n][1].start.offset +
                      e[c][1].end.offset -
                      e[c][1].start.offset) %
                    3
                  )
                )
                  continue;
                a =
                  e[n][1].end.offset - e[n][1].start.offset > 1 &&
                  e[c][1].end.offset - e[c][1].start.offset > 1
                    ? 2
                    : 1;
                let d = { ...e[n][1].end },
                  h = { ...e[c][1].start };
                tR(d, -a),
                  tR(h, a),
                  (l = {
                    type: a > 1 ? "strongSequence" : "emphasisSequence",
                    start: d,
                    end: { ...e[n][1].end },
                  }),
                  (o = {
                    type: a > 1 ? "strongSequence" : "emphasisSequence",
                    start: { ...e[c][1].start },
                    end: h,
                  }),
                  (i = {
                    type: a > 1 ? "strongText" : "emphasisText",
                    start: { ...e[n][1].end },
                    end: { ...e[c][1].start },
                  }),
                  (r = {
                    type: a > 1 ? "strong" : "emphasis",
                    start: { ...l.start },
                    end: { ...o.end },
                  }),
                  (e[n][1].end = { ...l.start }),
                  (e[c][1].start = { ...o.end }),
                  (s = []),
                  e[n][1].end.offset - e[n][1].start.offset &&
                    (s = tr(s, [
                      ["enter", e[n][1], t],
                      ["exit", e[n][1], t],
                    ])),
                  (s = tr(s, [
                    ["enter", r, t],
                    ["enter", l, t],
                    ["exit", l, t],
                    ["enter", i, t],
                  ])),
                  (s = tr(
                    s,
                    tO(
                      t.parser.constructs.insideSpan.null,
                      e.slice(n + 1, c),
                      t
                    )
                  )),
                  (s = tr(s, [
                    ["exit", i, t],
                    ["enter", o, t],
                    ["exit", o, t],
                    ["exit", r, t],
                  ])),
                  e[c][1].end.offset - e[c][1].start.offset
                    ? ((u = 2),
                      (s = tr(s, [
                        ["enter", e[c][1], t],
                        ["exit", e[c][1], t],
                      ])))
                    : (u = 0),
                  tn(e, n - 1, c - n + 3, s),
                  (c = n + s.length - u - 2);
                break;
              }
          }
        for (c = -1; ++c < e.length; )
          "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
        return e;
      },
      tokenize: function (e, t) {
        let n,
          r = this.parser.constructs.attentionMarkers.null,
          i = this.previous,
          l = t_(i);
        return function (o) {
          return (
            (n = o),
            e.enter("attentionSequence"),
            (function o(a) {
              if (a === n) return e.consume(a), o;
              let s = e.exit("attentionSequence"),
                u = t_(a),
                c = !u || (2 === u && l) || r.includes(a),
                d = !l || (2 === l && u) || r.includes(i);
              return (
                (s._open = !!(42 === n ? c : c && (l || !d))),
                (s._close = !!(42 === n ? d : d && (u || !c))),
                t(a)
              );
            })(o)
          );
        };
      },
    };
    function tR(e, t) {
      (e.column += t), (e.offset += t), (e._bufferIndex += t);
    }
    let tB = {
        continuation: {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return tm(t)
                ? tk(
                    e,
                    i,
                    "linePrefix",
                    r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(t)
                : i(t);
            };
            function i(r) {
              return e.attempt(tB, t, n)(r);
            }
          },
        },
        exit: function (e) {
          e.exit("blockQuote");
        },
        name: "blockQuote",
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            if (62 === t) {
              let n = r.containerState;
              return (
                n.open ||
                  (e.enter("blockQuote", { _container: !0 }), (n.open = !0)),
                e.enter("blockQuotePrefix"),
                e.enter("blockQuoteMarker"),
                e.consume(t),
                e.exit("blockQuoteMarker"),
                i
              );
            }
            return n(t);
          };
          function i(n) {
            return tm(n)
              ? (e.enter("blockQuotePrefixWhitespace"),
                e.consume(n),
                e.exit("blockQuotePrefixWhitespace"),
                e.exit("blockQuotePrefix"),
                t)
              : (e.exit("blockQuotePrefix"), t(n));
          }
        },
      },
      tU = {
        name: "characterEscape",
        tokenize: function (e, t, n) {
          return function (t) {
            return (
              e.enter("characterEscape"),
              e.enter("escapeMarker"),
              e.consume(t),
              e.exit("escapeMarker"),
              r
            );
          };
          function r(r) {
            return th(r)
              ? (e.enter("characterEscapeValue"),
                e.consume(r),
                e.exit("characterEscapeValue"),
                e.exit("characterEscape"),
                t)
              : n(r);
          }
        },
      },
      tH = document.createElement("i");
    function tq(e) {
      let t = "&" + e + ";";
      tH.innerHTML = t;
      let n = tH.textContent;
      return (
        (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
      );
    }
    let t$ = {
        name: "characterReference",
        tokenize: function (e, t, n) {
          let r,
            i,
            l = this,
            o = 0;
          return function (t) {
            return (
              e.enter("characterReference"),
              e.enter("characterReferenceMarker"),
              e.consume(t),
              e.exit("characterReferenceMarker"),
              a
            );
          };
          function a(t) {
            return 35 === t
              ? (e.enter("characterReferenceMarkerNumeric"),
                e.consume(t),
                e.exit("characterReferenceMarkerNumeric"),
                s)
              : (e.enter("characterReferenceValue"), (r = 31), (i = ta), u(t));
          }
          function s(t) {
            return 88 === t || 120 === t
              ? (e.enter("characterReferenceMarkerHexadecimal"),
                e.consume(t),
                e.exit("characterReferenceMarkerHexadecimal"),
                e.enter("characterReferenceValue"),
                (r = 6),
                (i = td),
                u)
              : (e.enter("characterReferenceValue"), (r = 7), (i = tc), u(t));
          }
          function u(a) {
            if (59 === a && o) {
              let r = e.exit("characterReferenceValue");
              return i !== ta || tq(l.sliceSerialize(r))
                ? (e.enter("characterReferenceMarker"),
                  e.consume(a),
                  e.exit("characterReferenceMarker"),
                  e.exit("characterReference"),
                  t)
                : n(a);
            }
            return i(a) && o++ < r ? (e.consume(a), u) : n(a);
          }
        },
      },
      tV = {
        partial: !0,
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            return null === t
              ? n(t)
              : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i);
          };
          function i(e) {
            return r.parser.lazy[r.now().line] ? n(e) : t(e);
          }
        },
      },
      tW = {
        concrete: !0,
        name: "codeFenced",
        tokenize: function (e, t, n) {
          let r,
            i = this,
            l = {
              partial: !0,
              tokenize: function (e, t, n) {
                let l = 0;
                return function (t) {
                  return (
                    e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o
                  );
                };
                function o(t) {
                  return (
                    e.enter("codeFencedFence"),
                    tm(t)
                      ? tk(
                          e,
                          s,
                          "linePrefix",
                          i.parser.constructs.disable.null.includes(
                            "codeIndented"
                          )
                            ? void 0
                            : 4
                        )(t)
                      : s(t)
                  );
                }
                function s(t) {
                  return t === r
                    ? (e.enter("codeFencedFenceSequence"),
                      (function t(i) {
                        return i === r
                          ? (l++, e.consume(i), t)
                          : l >= a
                          ? (e.exit("codeFencedFenceSequence"),
                            tm(i) ? tk(e, u, "whitespace")(i) : u(i))
                          : n(i);
                      })(t))
                    : n(t);
                }
                function u(r) {
                  return null === r || tf(r)
                    ? (e.exit("codeFencedFence"), t(r))
                    : n(r);
                }
              },
            },
            o = 0,
            a = 0;
          return function (t) {
            var l;
            let u;
            return (
              (l = t),
              (o =
                (u = i.events[i.events.length - 1]) &&
                "linePrefix" === u[1].type
                  ? u[2].sliceSerialize(u[1], !0).length
                  : 0),
              (r = l),
              e.enter("codeFenced"),
              e.enter("codeFencedFence"),
              e.enter("codeFencedFenceSequence"),
              (function t(i) {
                return i === r
                  ? (a++, e.consume(i), t)
                  : a < 3
                  ? n(i)
                  : (e.exit("codeFencedFenceSequence"),
                    tm(i) ? tk(e, s, "whitespace")(i) : s(i));
              })(l)
            );
          };
          function s(l) {
            return null === l || tf(l)
              ? (e.exit("codeFencedFence"),
                i.interrupt ? t(l) : e.check(tV, c, p)(l))
              : (e.enter("codeFencedFenceInfo"),
                e.enter("chunkString", { contentType: "string" }),
                (function t(i) {
                  return null === i || tf(i)
                    ? (e.exit("chunkString"),
                      e.exit("codeFencedFenceInfo"),
                      s(i))
                    : tm(i)
                    ? (e.exit("chunkString"),
                      e.exit("codeFencedFenceInfo"),
                      tk(e, u, "whitespace")(i))
                    : 96 === i && i === r
                    ? n(i)
                    : (e.consume(i), t);
                })(l));
          }
          function u(t) {
            return null === t || tf(t)
              ? s(t)
              : (e.enter("codeFencedFenceMeta"),
                e.enter("chunkString", { contentType: "string" }),
                (function t(i) {
                  return null === i || tf(i)
                    ? (e.exit("chunkString"),
                      e.exit("codeFencedFenceMeta"),
                      s(i))
                    : 96 === i && i === r
                    ? n(i)
                    : (e.consume(i), t);
                })(t));
          }
          function c(t) {
            return e.attempt(l, p, d)(t);
          }
          function d(t) {
            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), h;
          }
          function h(t) {
            return o > 0 && tm(t) ? tk(e, f, "linePrefix", o + 1)(t) : f(t);
          }
          function f(t) {
            return null === t || tf(t)
              ? e.check(tV, c, p)(t)
              : (e.enter("codeFlowValue"),
                (function t(n) {
                  return null === n || tf(n)
                    ? (e.exit("codeFlowValue"), f(n))
                    : (e.consume(n), t);
                })(t));
          }
          function p(n) {
            return e.exit("codeFenced"), t(n);
          }
        },
      },
      tK = {
        name: "codeIndented",
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            return e.enter("codeIndented"), tk(e, i, "linePrefix", 5)(t);
          };
          function i(t) {
            let i = r.events[r.events.length - 1];
            return i &&
              "linePrefix" === i[1].type &&
              i[2].sliceSerialize(i[1], !0).length >= 4
              ? (function t(n) {
                  return null === n
                    ? l(n)
                    : tf(n)
                    ? e.attempt(tG, t, l)(n)
                    : (e.enter("codeFlowValue"),
                      (function n(r) {
                        return null === r || tf(r)
                          ? (e.exit("codeFlowValue"), t(r))
                          : (e.consume(r), n);
                      })(n));
                })(t)
              : n(t);
          }
          function l(n) {
            return e.exit("codeIndented"), t(n);
          }
        },
      },
      tG = {
        partial: !0,
        tokenize: function (e, t, n) {
          let r = this;
          return i;
          function i(t) {
            return r.parser.lazy[r.now().line]
              ? n(t)
              : tf(t)
              ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
              : tk(e, l, "linePrefix", 5)(t);
          }
          function l(e) {
            let l = r.events[r.events.length - 1];
            return l &&
              "linePrefix" === l[1].type &&
              l[2].sliceSerialize(l[1], !0).length >= 4
              ? t(e)
              : tf(e)
              ? i(e)
              : n(e);
          }
        },
      };
    function tY(e, t, n, r, i, l, o, a, s) {
      let u = s || 1 / 0,
        c = 0;
      return function (t) {
        return 60 === t
          ? (e.enter(r), e.enter(i), e.enter(l), e.consume(t), e.exit(l), d)
          : null === t || 32 === t || 41 === t || tu(t)
          ? n(t)
          : (e.enter(r),
            e.enter(o),
            e.enter(a),
            e.enter("chunkString", { contentType: "string" }),
            p(t));
      };
      function d(n) {
        return 62 === n
          ? (e.enter(l), e.consume(n), e.exit(l), e.exit(i), e.exit(r), t)
          : (e.enter(a),
            e.enter("chunkString", { contentType: "string" }),
            h(n));
      }
      function h(t) {
        return 62 === t
          ? (e.exit("chunkString"), e.exit(a), d(t))
          : null === t || 60 === t || tf(t)
          ? n(t)
          : (e.consume(t), 92 === t ? f : h);
      }
      function f(t) {
        return 60 === t || 62 === t || 92 === t ? (e.consume(t), h) : h(t);
      }
      function p(i) {
        return !c && (null === i || 41 === i || tp(i))
          ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(i))
          : c < u && 40 === i
          ? (e.consume(i), c++, p)
          : 41 === i
          ? (e.consume(i), c--, p)
          : null === i || 32 === i || 40 === i || tu(i)
          ? n(i)
          : (e.consume(i), 92 === i ? m : p);
      }
      function m(t) {
        return 40 === t || 41 === t || 92 === t ? (e.consume(t), p) : p(t);
      }
    }
    function tX(e, t, n, r, i, l) {
      let o,
        a = this,
        s = 0;
      return function (t) {
        return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(l), u;
      };
      function u(d) {
        return s > 999 ||
          null === d ||
          91 === d ||
          (93 === d && !o) ||
          (94 === d && !s && "_hiddenFootnoteSupport" in a.parser.constructs)
          ? n(d)
          : 93 === d
          ? (e.exit(l), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t)
          : tf(d)
          ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), u)
          : (e.enter("chunkString", { contentType: "string" }), c(d));
      }
      function c(t) {
        return null === t || 91 === t || 93 === t || tf(t) || s++ > 999
          ? (e.exit("chunkString"), u(t))
          : (e.consume(t), o || (o = !tm(t)), 92 === t ? d : c);
      }
      function d(t) {
        return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, c) : c(t);
      }
    }
    function tQ(e, t, n, r, i, l) {
      let o;
      return function (t) {
        return 34 === t || 39 === t || 40 === t
          ? (e.enter(r),
            e.enter(i),
            e.consume(t),
            e.exit(i),
            (o = 40 === t ? 41 : t),
            a)
          : n(t);
      };
      function a(n) {
        return n === o
          ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
          : (e.enter(l), s(n));
      }
      function s(t) {
        return t === o
          ? (e.exit(l), a(o))
          : null === t
          ? n(t)
          : tf(t)
          ? (e.enter("lineEnding"),
            e.consume(t),
            e.exit("lineEnding"),
            tk(e, s, "linePrefix"))
          : (e.enter("chunkString", { contentType: "string" }), u(t));
      }
      function u(t) {
        return t === o || null === t || tf(t)
          ? (e.exit("chunkString"), s(t))
          : (e.consume(t), 92 === t ? c : u);
      }
      function c(t) {
        return t === o || 92 === t ? (e.consume(t), u) : u(t);
      }
    }
    function tJ(e, t) {
      let n;
      return function r(i) {
        return tf(i)
          ? (e.enter("lineEnding"),
            e.consume(i),
            e.exit("lineEnding"),
            (n = !0),
            r)
          : tm(i)
          ? tk(e, r, n ? "linePrefix" : "lineSuffix")(i)
          : t(i);
      };
    }
    function tZ(e) {
      return e
        .replace(/[\t\n\r ]+/g, " ")
        .replace(/^ | $/g, "")
        .toLowerCase()
        .toUpperCase();
    }
    let t0 = {
        partial: !0,
        tokenize: function (e, t, n) {
          return function (t) {
            return tp(t) ? tJ(e, r)(t) : n(t);
          };
          function r(t) {
            return tQ(
              e,
              i,
              n,
              "definitionTitle",
              "definitionTitleMarker",
              "definitionTitleString"
            )(t);
          }
          function i(t) {
            return tm(t) ? tk(e, l, "whitespace")(t) : l(t);
          }
          function l(e) {
            return null === e || tf(e) ? t(e) : n(e);
          }
        },
      },
      t1 = [
        "address",
        "article",
        "aside",
        "base",
        "basefont",
        "blockquote",
        "body",
        "caption",
        "center",
        "col",
        "colgroup",
        "dd",
        "details",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hr",
        "html",
        "iframe",
        "legend",
        "li",
        "link",
        "main",
        "menu",
        "menuitem",
        "nav",
        "noframes",
        "ol",
        "optgroup",
        "option",
        "p",
        "param",
        "search",
        "section",
        "summary",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "track",
        "ul",
      ],
      t2 = ["pre", "script", "style", "textarea"],
      t4 = {
        partial: !0,
        tokenize: function (e, t, n) {
          return function (r) {
            return (
              e.enter("lineEnding"),
              e.consume(r),
              e.exit("lineEnding"),
              e.attempt(tS, t, n)
            );
          };
        },
      },
      t5 = {
        partial: !0,
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            return tf(t)
              ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
              : n(t);
          };
          function i(e) {
            return r.parser.lazy[r.now().line] ? n(e) : t(e);
          }
        },
      },
      t3 = {
        name: "labelEnd",
        resolveAll: function (e) {
          let t = -1,
            n = [];
          for (; ++t < e.length; ) {
            let r = e[t][1];
            if (
              (n.push(e[t]),
              "labelImage" === r.type ||
                "labelLink" === r.type ||
                "labelEnd" === r.type)
            ) {
              let e = "labelImage" === r.type ? 4 : 2;
              (r.type = "data"), (t += e);
            }
          }
          return e.length !== n.length && tn(e, 0, e.length, n), e;
        },
        resolveTo: function (e, t) {
          let n,
            r,
            i,
            l,
            o = e.length,
            a = 0;
          for (; o--; )
            if (((n = e[o][1]), r)) {
              if ("link" === n.type || ("labelLink" === n.type && n._inactive))
                break;
              "enter" === e[o][0] &&
                "labelLink" === n.type &&
                (n._inactive = !0);
            } else if (i) {
              if (
                "enter" === e[o][0] &&
                ("labelImage" === n.type || "labelLink" === n.type) &&
                !n._balanced &&
                ((r = o), "labelLink" !== n.type)
              ) {
                a = 2;
                break;
              }
            } else "labelEnd" === n.type && (i = o);
          let s = {
              type: "labelLink" === e[r][1].type ? "link" : "image",
              start: { ...e[r][1].start },
              end: { ...e[e.length - 1][1].end },
            },
            u = {
              type: "label",
              start: { ...e[r][1].start },
              end: { ...e[i][1].end },
            },
            c = {
              type: "labelText",
              start: { ...e[r + a + 2][1].end },
              end: { ...e[i - 2][1].start },
            };
          return (
            (l = tr(
              (l = [
                ["enter", s, t],
                ["enter", u, t],
              ]),
              e.slice(r + 1, r + a + 3)
            )),
            (l = tr(l, [["enter", c, t]])),
            (l = tr(
              l,
              tO(
                t.parser.constructs.insideSpan.null,
                e.slice(r + a + 4, i - 3),
                t
              )
            )),
            (l = tr(l, [["exit", c, t], e[i - 2], e[i - 1], ["exit", u, t]])),
            (l = tr(l, e.slice(i + 1))),
            (l = tr(l, [["exit", s, t]])),
            tn(e, r, e.length, l),
            e
          );
        },
        tokenize: function (e, t, n) {
          let r,
            i,
            l = this,
            o = l.events.length;
          for (; o--; )
            if (
              ("labelImage" === l.events[o][1].type ||
                "labelLink" === l.events[o][1].type) &&
              !l.events[o][1]._balanced
            ) {
              r = l.events[o][1];
              break;
            }
          return function (t) {
            return r
              ? r._inactive
                ? c(t)
                : ((i = l.parser.defined.includes(
                    tZ(l.sliceSerialize({ start: r.end, end: l.now() }))
                  )),
                  e.enter("labelEnd"),
                  e.enter("labelMarker"),
                  e.consume(t),
                  e.exit("labelMarker"),
                  e.exit("labelEnd"),
                  a)
              : n(t);
          };
          function a(t) {
            return 40 === t
              ? e.attempt(t6, u, i ? u : c)(t)
              : 91 === t
              ? e.attempt(t9, u, i ? s : c)(t)
              : i
              ? u(t)
              : c(t);
          }
          function s(t) {
            return e.attempt(t7, u, c)(t);
          }
          function u(e) {
            return t(e);
          }
          function c(e) {
            return (r._balanced = !0), n(e);
          }
        },
      },
      t6 = {
        tokenize: function (e, t, n) {
          return function (t) {
            return (
              e.enter("resource"),
              e.enter("resourceMarker"),
              e.consume(t),
              e.exit("resourceMarker"),
              r
            );
          };
          function r(t) {
            return tp(t) ? tJ(e, i)(t) : i(t);
          }
          function i(t) {
            return 41 === t
              ? u(t)
              : tY(
                  e,
                  l,
                  o,
                  "resourceDestination",
                  "resourceDestinationLiteral",
                  "resourceDestinationLiteralMarker",
                  "resourceDestinationRaw",
                  "resourceDestinationString",
                  32
                )(t);
          }
          function l(t) {
            return tp(t) ? tJ(e, a)(t) : u(t);
          }
          function o(e) {
            return n(e);
          }
          function a(t) {
            return 34 === t || 39 === t || 40 === t
              ? tQ(
                  e,
                  s,
                  n,
                  "resourceTitle",
                  "resourceTitleMarker",
                  "resourceTitleString"
                )(t)
              : u(t);
          }
          function s(t) {
            return tp(t) ? tJ(e, u)(t) : u(t);
          }
          function u(r) {
            return 41 === r
              ? (e.enter("resourceMarker"),
                e.consume(r),
                e.exit("resourceMarker"),
                e.exit("resource"),
                t)
              : n(r);
          }
        },
      },
      t9 = {
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            return tX.call(
              r,
              e,
              i,
              l,
              "reference",
              "referenceMarker",
              "referenceString"
            )(t);
          };
          function i(e) {
            return r.parser.defined.includes(
              tZ(
                r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
              )
            )
              ? t(e)
              : n(e);
          }
          function l(e) {
            return n(e);
          }
        },
      },
      t7 = {
        tokenize: function (e, t, n) {
          return function (t) {
            return (
              e.enter("reference"),
              e.enter("referenceMarker"),
              e.consume(t),
              e.exit("referenceMarker"),
              r
            );
          };
          function r(r) {
            return 93 === r
              ? (e.enter("referenceMarker"),
                e.consume(r),
                e.exit("referenceMarker"),
                e.exit("reference"),
                t)
              : n(r);
          }
        },
      },
      t8 = {
        name: "labelStartImage",
        resolveAll: t3.resolveAll,
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            return (
              e.enter("labelImage"),
              e.enter("labelImageMarker"),
              e.consume(t),
              e.exit("labelImageMarker"),
              i
            );
          };
          function i(t) {
            return 91 === t
              ? (e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelImage"),
                l)
              : n(t);
          }
          function l(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
              ? n(e)
              : t(e);
          }
        },
      },
      ne = {
        name: "labelStartLink",
        resolveAll: t3.resolveAll,
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            return (
              e.enter("labelLink"),
              e.enter("labelMarker"),
              e.consume(t),
              e.exit("labelMarker"),
              e.exit("labelLink"),
              i
            );
          };
          function i(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
              ? n(e)
              : t(e);
          }
        },
      },
      nt = {
        name: "lineEnding",
        tokenize: function (e, t) {
          return function (n) {
            return (
              e.enter("lineEnding"),
              e.consume(n),
              e.exit("lineEnding"),
              tk(e, t, "linePrefix")
            );
          };
        },
      },
      nn = {
        name: "thematicBreak",
        tokenize: function (e, t, n) {
          let r,
            i = 0;
          return function (l) {
            var o;
            return (
              e.enter("thematicBreak"),
              (r = o = l),
              (function l(o) {
                return o === r
                  ? (e.enter("thematicBreakSequence"),
                    (function t(n) {
                      return n === r
                        ? (e.consume(n), i++, t)
                        : (e.exit("thematicBreakSequence"),
                          tm(n) ? tk(e, l, "whitespace")(n) : l(n));
                    })(o))
                  : i >= 3 && (null === o || tf(o))
                  ? (e.exit("thematicBreak"), t(o))
                  : n(o);
              })(o)
            );
          };
        },
      },
      nr = {
        continuation: {
          tokenize: function (e, t, n) {
            let r = this;
            return (
              (r.containerState._closeFlow = void 0),
              e.check(
                tS,
                function (n) {
                  return (
                    (r.containerState.furtherBlankLines =
                      r.containerState.furtherBlankLines ||
                      r.containerState.initialBlankLine),
                    tk(e, t, "listItemIndent", r.containerState.size + 1)(n)
                  );
                },
                function (n) {
                  return r.containerState.furtherBlankLines || !tm(n)
                    ? ((r.containerState.furtherBlankLines = void 0),
                      (r.containerState.initialBlankLine = void 0),
                      i(n))
                    : ((r.containerState.furtherBlankLines = void 0),
                      (r.containerState.initialBlankLine = void 0),
                      e.attempt(nl, t, i)(n));
                }
              )
            );
            function i(i) {
              return (
                (r.containerState._closeFlow = !0),
                (r.interrupt = void 0),
                tk(
                  e,
                  e.attempt(nr, t, n),
                  "linePrefix",
                  r.parser.constructs.disable.null.includes("codeIndented")
                    ? void 0
                    : 4
                )(i)
              );
            }
          },
        },
        exit: function (e) {
          e.exit(this.containerState.type);
        },
        name: "list",
        tokenize: function (e, t, n) {
          let r = this,
            i = r.events[r.events.length - 1],
            l =
              i && "linePrefix" === i[1].type
                ? i[2].sliceSerialize(i[1], !0).length
                : 0,
            o = 0;
          return function (t) {
            let i =
              r.containerState.type ||
              (42 === t || 43 === t || 45 === t
                ? "listUnordered"
                : "listOrdered");
            if (
              "listUnordered" === i
                ? !r.containerState.marker || t === r.containerState.marker
                : tc(t)
            ) {
              if (
                (r.containerState.type ||
                  ((r.containerState.type = i), e.enter(i, { _container: !0 })),
                "listUnordered" === i)
              )
                return (
                  e.enter("listItemPrefix"),
                  42 === t || 45 === t ? e.check(nn, n, a)(t) : a(t)
                );
              if (!r.interrupt || 49 === t)
                return (
                  e.enter("listItemPrefix"),
                  e.enter("listItemValue"),
                  (function t(i) {
                    return tc(i) && ++o < 10
                      ? (e.consume(i), t)
                      : (!r.interrupt || o < 2) &&
                        (r.containerState.marker
                          ? i === r.containerState.marker
                          : 41 === i || 46 === i)
                      ? (e.exit("listItemValue"), a(i))
                      : n(i);
                  })(t)
                );
            }
            return n(t);
          };
          function a(t) {
            return (
              e.enter("listItemMarker"),
              e.consume(t),
              e.exit("listItemMarker"),
              (r.containerState.marker = r.containerState.marker || t),
              e.check(tS, r.interrupt ? n : s, e.attempt(ni, c, u))
            );
          }
          function s(e) {
            return (r.containerState.initialBlankLine = !0), l++, c(e);
          }
          function u(t) {
            return tm(t)
              ? (e.enter("listItemPrefixWhitespace"),
                e.consume(t),
                e.exit("listItemPrefixWhitespace"),
                c)
              : n(t);
          }
          function c(n) {
            return (
              (r.containerState.size =
                l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
              t(n)
            );
          }
        },
      },
      ni = {
        partial: !0,
        tokenize: function (e, t, n) {
          let r = this;
          return tk(
            e,
            function (e) {
              let i = r.events[r.events.length - 1];
              return !tm(e) && i && "listItemPrefixWhitespace" === i[1].type
                ? t(e)
                : n(e);
            },
            "listItemPrefixWhitespace",
            r.parser.constructs.disable.null.includes("codeIndented")
              ? void 0
              : 5
          );
        },
      },
      nl = {
        partial: !0,
        tokenize: function (e, t, n) {
          let r = this;
          return tk(
            e,
            function (e) {
              let i = r.events[r.events.length - 1];
              return i &&
                "listItemIndent" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length === r.containerState.size
                ? t(e)
                : n(e);
            },
            "listItemIndent",
            r.containerState.size + 1
          );
        },
      },
      no = {
        name: "setextUnderline",
        resolveTo: function (e, t) {
          let n,
            r,
            i,
            l = e.length;
          for (; l--; )
            if ("enter" === e[l][0]) {
              if ("content" === e[l][1].type) {
                n = l;
                break;
              }
              "paragraph" === e[l][1].type && (r = l);
            } else
              "content" === e[l][1].type && e.splice(l, 1),
                i || "definition" !== e[l][1].type || (i = l);
          let o = {
            type: "setextHeading",
            start: { ...e[n][1].start },
            end: { ...e[e.length - 1][1].end },
          };
          return (
            (e[r][1].type = "setextHeadingText"),
            i
              ? (e.splice(r, 0, ["enter", o, t]),
                e.splice(i + 1, 0, ["exit", e[n][1], t]),
                (e[n][1].end = { ...e[i][1].end }))
              : (e[n][1] = o),
            e.push(["exit", o, t]),
            e
          );
        },
        tokenize: function (e, t, n) {
          let r,
            i = this;
          return function (t) {
            var o;
            let a,
              s = i.events.length;
            for (; s--; )
              if (
                "lineEnding" !== i.events[s][1].type &&
                "linePrefix" !== i.events[s][1].type &&
                "content" !== i.events[s][1].type
              ) {
                a = "paragraph" === i.events[s][1].type;
                break;
              }
            return !i.parser.lazy[i.now().line] && (i.interrupt || a)
              ? (e.enter("setextHeadingLine"),
                (r = t),
                (o = t),
                e.enter("setextHeadingLineSequence"),
                (function t(n) {
                  return n === r
                    ? (e.consume(n), t)
                    : (e.exit("setextHeadingLineSequence"),
                      tm(n) ? tk(e, l, "lineSuffix")(n) : l(n));
                })(o))
              : n(t);
          };
          function l(r) {
            return null === r || tf(r)
              ? (e.exit("setextHeadingLine"), t(r))
              : n(r);
          }
        },
      };
    e.s(
      [
        "attentionMarkers",
        0,
        { null: [42, 95] },
        "contentInitial",
        0,
        {
          91: {
            name: "definition",
            tokenize: function (e, t, n) {
              let r,
                i = this;
              return function (t) {
                var r;
                return (
                  e.enter("definition"),
                  (r = t),
                  tX.call(
                    i,
                    e,
                    l,
                    n,
                    "definitionLabel",
                    "definitionLabelMarker",
                    "definitionLabelString"
                  )(r)
                );
              };
              function l(t) {
                return ((r = tZ(
                  i
                    .sliceSerialize(i.events[i.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === t)
                  ? (e.enter("definitionMarker"),
                    e.consume(t),
                    e.exit("definitionMarker"),
                    o)
                  : n(t);
              }
              function o(t) {
                return tp(t) ? tJ(e, a)(t) : a(t);
              }
              function a(t) {
                return tY(
                  e,
                  s,
                  n,
                  "definitionDestination",
                  "definitionDestinationLiteral",
                  "definitionDestinationLiteralMarker",
                  "definitionDestinationRaw",
                  "definitionDestinationString"
                )(t);
              }
              function s(t) {
                return e.attempt(t0, u, u)(t);
              }
              function u(t) {
                return tm(t) ? tk(e, c, "whitespace")(t) : c(t);
              }
              function c(l) {
                return null === l || tf(l)
                  ? (e.exit("definition"), i.parser.defined.push(r), t(l))
                  : n(l);
              }
            },
          },
        },
        "disable",
        0,
        { null: [] },
        "document",
        0,
        {
          42: nr,
          43: nr,
          45: nr,
          48: nr,
          49: nr,
          50: nr,
          51: nr,
          52: nr,
          53: nr,
          54: nr,
          55: nr,
          56: nr,
          57: nr,
          62: tB,
        },
        "flow",
        0,
        {
          35: {
            name: "headingAtx",
            resolve: function (e, t) {
              let n,
                r,
                i = e.length - 2,
                l = 3;
              return (
                "whitespace" === e[3][1].type && (l += 2),
                i - 2 > l && "whitespace" === e[i][1].type && (i -= 2),
                "atxHeadingSequence" === e[i][1].type &&
                  (l === i - 1 ||
                    (i - 4 > l && "whitespace" === e[i - 2][1].type)) &&
                  (i -= l + 1 === i ? 2 : 4),
                i > l &&
                  ((n = {
                    type: "atxHeadingText",
                    start: e[l][1].start,
                    end: e[i][1].end,
                  }),
                  (r = {
                    type: "chunkText",
                    start: e[l][1].start,
                    end: e[i][1].end,
                    contentType: "text",
                  }),
                  tn(e, l, i - l + 1, [
                    ["enter", n, t],
                    ["enter", r, t],
                    ["exit", r, t],
                    ["exit", n, t],
                  ])),
                e
              );
            },
            tokenize: function (e, t, n) {
              let r = 0;
              return function (i) {
                var l;
                return (
                  e.enter("atxHeading"),
                  (l = i),
                  e.enter("atxHeadingSequence"),
                  (function i(l) {
                    return 35 === l && r++ < 6
                      ? (e.consume(l), i)
                      : null === l || tp(l)
                      ? (e.exit("atxHeadingSequence"),
                        (function n(r) {
                          return 35 === r
                            ? (e.enter("atxHeadingSequence"),
                              (function t(r) {
                                return 35 === r
                                  ? (e.consume(r), t)
                                  : (e.exit("atxHeadingSequence"), n(r));
                              })(r))
                            : null === r || tf(r)
                            ? (e.exit("atxHeading"), t(r))
                            : tm(r)
                            ? tk(e, n, "whitespace")(r)
                            : (e.enter("atxHeadingText"),
                              (function t(r) {
                                return null === r || 35 === r || tp(r)
                                  ? (e.exit("atxHeadingText"), n(r))
                                  : (e.consume(r), t);
                              })(r));
                        })(l))
                      : n(l);
                  })(l)
                );
              };
            },
          },
          42: nn,
          45: [no, nn],
          60: {
            concrete: !0,
            name: "htmlFlow",
            resolveTo: function (e) {
              let t = e.length;
              for (
                ;
                t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);

              );
              return (
                t > 1 &&
                  "linePrefix" === e[t - 2][1].type &&
                  ((e[t][1].start = e[t - 2][1].start),
                  (e[t + 1][1].start = e[t - 2][1].start),
                  e.splice(t - 2, 2)),
                e
              );
            },
            tokenize: function (e, t, n) {
              let r,
                i,
                l,
                o,
                a,
                s = this;
              return function (t) {
                var n;
                return (
                  (n = t),
                  e.enter("htmlFlow"),
                  e.enter("htmlFlowData"),
                  e.consume(n),
                  u
                );
              };
              function u(o) {
                return 33 === o
                  ? (e.consume(o), c)
                  : 47 === o
                  ? (e.consume(o), (i = !0), f)
                  : 63 === o
                  ? (e.consume(o), (r = 3), s.interrupt ? t : D)
                  : to(o)
                  ? (e.consume(o), (l = String.fromCharCode(o)), p)
                  : n(o);
              }
              function c(i) {
                return 45 === i
                  ? (e.consume(i), (r = 2), d)
                  : 91 === i
                  ? (e.consume(i), (r = 5), (o = 0), h)
                  : to(i)
                  ? (e.consume(i), (r = 4), s.interrupt ? t : D)
                  : n(i);
              }
              function d(r) {
                return 45 === r ? (e.consume(r), s.interrupt ? t : D) : n(r);
              }
              function h(r) {
                let i = "CDATA[";
                return r === i.charCodeAt(o++)
                  ? (e.consume(r), o === i.length)
                    ? s.interrupt
                      ? t
                      : C
                    : h
                  : n(r);
              }
              function f(t) {
                return to(t)
                  ? (e.consume(t), (l = String.fromCharCode(t)), p)
                  : n(t);
              }
              function p(o) {
                if (null === o || 47 === o || 62 === o || tp(o)) {
                  let a = 47 === o,
                    u = l.toLowerCase();
                  return !a && !i && t2.includes(u)
                    ? ((r = 1), s.interrupt ? t(o) : C(o))
                    : t1.includes(l.toLowerCase())
                    ? ((r = 6), a)
                      ? (e.consume(o), m)
                      : s.interrupt
                      ? t(o)
                      : C(o)
                    : ((r = 7),
                      s.interrupt && !s.parser.lazy[s.now().line]
                        ? n(o)
                        : i
                        ? (function t(n) {
                            return tm(n) ? (e.consume(n), t) : w(n);
                          })(o)
                        : g(o));
                }
                return 45 === o || ta(o)
                  ? (e.consume(o), (l += String.fromCharCode(o)), p)
                  : n(o);
              }
              function m(r) {
                return 62 === r ? (e.consume(r), s.interrupt ? t : C) : n(r);
              }
              function g(t) {
                return 47 === t
                  ? (e.consume(t), w)
                  : 58 === t || 95 === t || to(t)
                  ? (e.consume(t), x)
                  : tm(t)
                  ? (e.consume(t), g)
                  : w(t);
              }
              function x(t) {
                return 45 === t || 46 === t || 58 === t || 95 === t || ta(t)
                  ? (e.consume(t), x)
                  : y(t);
              }
              function y(t) {
                return 61 === t
                  ? (e.consume(t), k)
                  : tm(t)
                  ? (e.consume(t), y)
                  : g(t);
              }
              function k(t) {
                return null === t ||
                  60 === t ||
                  61 === t ||
                  62 === t ||
                  96 === t
                  ? n(t)
                  : 34 === t || 39 === t
                  ? (e.consume(t), (a = t), b)
                  : tm(t)
                  ? (e.consume(t), k)
                  : (function t(n) {
                      return null === n ||
                        34 === n ||
                        39 === n ||
                        47 === n ||
                        60 === n ||
                        61 === n ||
                        62 === n ||
                        96 === n ||
                        tp(n)
                        ? y(n)
                        : (e.consume(n), t);
                    })(t);
              }
              function b(t) {
                return t === a
                  ? (e.consume(t), (a = null), v)
                  : null === t || tf(t)
                  ? n(t)
                  : (e.consume(t), b);
              }
              function v(e) {
                return 47 === e || 62 === e || tm(e) ? g(e) : n(e);
              }
              function w(t) {
                return 62 === t ? (e.consume(t), S) : n(t);
              }
              function S(t) {
                return null === t || tf(t)
                  ? C(t)
                  : tm(t)
                  ? (e.consume(t), S)
                  : n(t);
              }
              function C(t) {
                return 45 === t && 2 === r
                  ? (e.consume(t), T)
                  : 60 === t && 1 === r
                  ? (e.consume(t), P)
                  : 62 === t && 4 === r
                  ? (e.consume(t), M)
                  : 63 === t && 3 === r
                  ? (e.consume(t), D)
                  : 93 === t && 5 === r
                  ? (e.consume(t), I)
                  : tf(t) && (6 === r || 7 === r)
                  ? (e.exit("htmlFlowData"), e.check(t4, L, j)(t))
                  : null === t || tf(t)
                  ? (e.exit("htmlFlowData"), j(t))
                  : (e.consume(t), C);
              }
              function j(t) {
                return e.check(t5, N, L)(t);
              }
              function N(t) {
                return (
                  e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), E
                );
              }
              function E(t) {
                return null === t || tf(t)
                  ? j(t)
                  : (e.enter("htmlFlowData"), C(t));
              }
              function T(t) {
                return 45 === t ? (e.consume(t), D) : C(t);
              }
              function P(t) {
                return 47 === t ? (e.consume(t), (l = ""), A) : C(t);
              }
              function A(t) {
                if (62 === t) {
                  let n = l.toLowerCase();
                  return t2.includes(n) ? (e.consume(t), M) : C(t);
                }
                return to(t) && l.length < 8
                  ? (e.consume(t), (l += String.fromCharCode(t)), A)
                  : C(t);
              }
              function I(t) {
                return 93 === t ? (e.consume(t), D) : C(t);
              }
              function D(t) {
                return 62 === t
                  ? (e.consume(t), M)
                  : 45 === t && 2 === r
                  ? (e.consume(t), D)
                  : C(t);
              }
              function M(t) {
                return null === t || tf(t)
                  ? (e.exit("htmlFlowData"), L(t))
                  : (e.consume(t), M);
              }
              function L(n) {
                return e.exit("htmlFlow"), t(n);
              }
            },
          },
          61: no,
          95: nn,
          96: tW,
          126: tW,
        },
        "flowInitial",
        0,
        { [-2]: tK, [-1]: tK, 32: tK },
        "insideSpan",
        0,
        { null: [tF, tA] },
        "string",
        0,
        { 38: t$, 92: tU },
        "text",
        0,
        {
          [-5]: nt,
          [-4]: nt,
          [-3]: nt,
          33: t8,
          38: t$,
          42: tF,
          60: [
            {
              name: "autolink",
              tokenize: function (e, t, n) {
                let r = 0;
                return function (t) {
                  return (
                    e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    i
                  );
                };
                function i(t) {
                  return to(t) ? (e.consume(t), l) : 64 === t ? n(t) : a(t);
                }
                function l(t) {
                  return 43 === t || 45 === t || 46 === t || ta(t)
                    ? ((r = 1),
                      (function t(n) {
                        return 58 === n
                          ? (e.consume(n), (r = 0), o)
                          : (43 === n || 45 === n || 46 === n || ta(n)) &&
                            r++ < 32
                          ? (e.consume(n), t)
                          : ((r = 0), a(n));
                      })(t))
                    : a(t);
                }
                function o(r) {
                  return 62 === r
                    ? (e.exit("autolinkProtocol"),
                      e.enter("autolinkMarker"),
                      e.consume(r),
                      e.exit("autolinkMarker"),
                      e.exit("autolink"),
                      t)
                    : null === r || 32 === r || 60 === r || tu(r)
                    ? n(r)
                    : (e.consume(r), o);
                }
                function a(t) {
                  return 64 === t
                    ? (e.consume(t), s)
                    : ts(t)
                    ? (e.consume(t), a)
                    : n(t);
                }
                function s(i) {
                  return ta(i)
                    ? (function i(l) {
                        return 46 === l
                          ? (e.consume(l), (r = 0), s)
                          : 62 === l
                          ? ((e.exit("autolinkProtocol").type =
                              "autolinkEmail"),
                            e.enter("autolinkMarker"),
                            e.consume(l),
                            e.exit("autolinkMarker"),
                            e.exit("autolink"),
                            t)
                          : (function t(l) {
                              if ((45 === l || ta(l)) && r++ < 63) {
                                let n = 45 === l ? t : i;
                                return e.consume(l), n;
                              }
                              return n(l);
                            })(l);
                      })(i)
                    : n(i);
                }
              },
            },
            {
              name: "htmlText",
              tokenize: function (e, t, n) {
                let r,
                  i,
                  l,
                  o = this;
                return function (t) {
                  return (
                    e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(t),
                    a
                  );
                };
                function a(t) {
                  return 33 === t
                    ? (e.consume(t), s)
                    : 47 === t
                    ? (e.consume(t), b)
                    : 63 === t
                    ? (e.consume(t), y)
                    : to(t)
                    ? (e.consume(t), w)
                    : n(t);
                }
                function s(t) {
                  return 45 === t
                    ? (e.consume(t), u)
                    : 91 === t
                    ? (e.consume(t), (i = 0), f)
                    : to(t)
                    ? (e.consume(t), x)
                    : n(t);
                }
                function u(t) {
                  return 45 === t ? (e.consume(t), h) : n(t);
                }
                function c(t) {
                  return null === t
                    ? n(t)
                    : 45 === t
                    ? (e.consume(t), d)
                    : tf(t)
                    ? ((l = c), A(t))
                    : (e.consume(t), c);
                }
                function d(t) {
                  return 45 === t ? (e.consume(t), h) : c(t);
                }
                function h(e) {
                  return 62 === e ? P(e) : 45 === e ? d(e) : c(e);
                }
                function f(t) {
                  let r = "CDATA[";
                  return t === r.charCodeAt(i++)
                    ? (e.consume(t), i === r.length ? p : f)
                    : n(t);
                }
                function p(t) {
                  return null === t
                    ? n(t)
                    : 93 === t
                    ? (e.consume(t), m)
                    : tf(t)
                    ? ((l = p), A(t))
                    : (e.consume(t), p);
                }
                function m(t) {
                  return 93 === t ? (e.consume(t), g) : p(t);
                }
                function g(t) {
                  return 62 === t ? P(t) : 93 === t ? (e.consume(t), g) : p(t);
                }
                function x(t) {
                  return null === t || 62 === t
                    ? P(t)
                    : tf(t)
                    ? ((l = x), A(t))
                    : (e.consume(t), x);
                }
                function y(t) {
                  return null === t
                    ? n(t)
                    : 63 === t
                    ? (e.consume(t), k)
                    : tf(t)
                    ? ((l = y), A(t))
                    : (e.consume(t), y);
                }
                function k(e) {
                  return 62 === e ? P(e) : y(e);
                }
                function b(t) {
                  return to(t) ? (e.consume(t), v) : n(t);
                }
                function v(t) {
                  return 45 === t || ta(t)
                    ? (e.consume(t), v)
                    : (function t(n) {
                        return tf(n)
                          ? ((l = t), A(n))
                          : tm(n)
                          ? (e.consume(n), t)
                          : P(n);
                      })(t);
                }
                function w(t) {
                  return 45 === t || ta(t)
                    ? (e.consume(t), w)
                    : 47 === t || 62 === t || tp(t)
                    ? S(t)
                    : n(t);
                }
                function S(t) {
                  return 47 === t
                    ? (e.consume(t), P)
                    : 58 === t || 95 === t || to(t)
                    ? (e.consume(t), C)
                    : tf(t)
                    ? ((l = S), A(t))
                    : tm(t)
                    ? (e.consume(t), S)
                    : P(t);
                }
                function C(t) {
                  return 45 === t || 46 === t || 58 === t || 95 === t || ta(t)
                    ? (e.consume(t), C)
                    : (function t(n) {
                        return 61 === n
                          ? (e.consume(n), j)
                          : tf(n)
                          ? ((l = t), A(n))
                          : tm(n)
                          ? (e.consume(n), t)
                          : S(n);
                      })(t);
                }
                function j(t) {
                  return null === t ||
                    60 === t ||
                    61 === t ||
                    62 === t ||
                    96 === t
                    ? n(t)
                    : 34 === t || 39 === t
                    ? (e.consume(t), (r = t), N)
                    : tf(t)
                    ? ((l = j), A(t))
                    : tm(t)
                    ? (e.consume(t), j)
                    : (e.consume(t), E);
                }
                function N(t) {
                  return t === r
                    ? (e.consume(t), (r = void 0), T)
                    : null === t
                    ? n(t)
                    : tf(t)
                    ? ((l = N), A(t))
                    : (e.consume(t), N);
                }
                function E(t) {
                  return null === t ||
                    34 === t ||
                    39 === t ||
                    60 === t ||
                    61 === t ||
                    96 === t
                    ? n(t)
                    : 47 === t || 62 === t || tp(t)
                    ? S(t)
                    : (e.consume(t), E);
                }
                function T(e) {
                  return 47 === e || 62 === e || tp(e) ? S(e) : n(e);
                }
                function P(r) {
                  return 62 === r
                    ? (e.consume(r),
                      e.exit("htmlTextData"),
                      e.exit("htmlText"),
                      t)
                    : n(r);
                }
                function A(t) {
                  return (
                    e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    I
                  );
                }
                function I(t) {
                  return tm(t)
                    ? tk(
                        e,
                        D,
                        "linePrefix",
                        o.parser.constructs.disable.null.includes(
                          "codeIndented"
                        )
                          ? void 0
                          : 4
                      )(t)
                    : D(t);
                }
                function D(t) {
                  return e.enter("htmlTextData"), l(t);
                }
              },
            },
          ],
          91: ne,
          92: [
            {
              name: "hardBreakEscape",
              tokenize: function (e, t, n) {
                return function (t) {
                  return e.enter("hardBreakEscape"), e.consume(t), r;
                };
                function r(r) {
                  return tf(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
                }
              },
            },
            tU,
          ],
          93: t3,
          95: tF,
          96: {
            name: "codeText",
            previous: function (e) {
              return (
                96 !== e ||
                "characterEscape" ===
                  this.events[this.events.length - 1][1].type
              );
            },
            resolve: function (e) {
              let t,
                n,
                r = e.length - 4,
                i = 3;
              if (
                ("lineEnding" === e[3][1].type || "space" === e[i][1].type) &&
                ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
              ) {
                for (t = i; ++t < r; )
                  if ("codeTextData" === e[t][1].type) {
                    (e[i][1].type = "codeTextPadding"),
                      (e[r][1].type = "codeTextPadding"),
                      (i += 2),
                      (r -= 2);
                    break;
                  }
              }
              for (t = i - 1, r++; ++t <= r; )
                void 0 === n
                  ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
                  : (t === r || "lineEnding" === e[t][1].type) &&
                    ((e[n][1].type = "codeTextData"),
                    t !== n + 2 &&
                      ((e[n][1].end = e[t - 1][1].end),
                      e.splice(n + 2, t - n - 2),
                      (r -= t - n - 2),
                      (t = n + 2)),
                    (n = void 0));
              return e;
            },
            tokenize: function (e, t, n) {
              let r,
                i,
                l = 0;
              return function (t) {
                return (
                  e.enter("codeText"),
                  e.enter("codeTextSequence"),
                  (function t(n) {
                    return 96 === n
                      ? (e.consume(n), l++, t)
                      : (e.exit("codeTextSequence"), o(n));
                  })(t)
                );
              };
              function o(s) {
                return null === s
                  ? n(s)
                  : 32 === s
                  ? (e.enter("space"), e.consume(s), e.exit("space"), o)
                  : 96 === s
                  ? ((i = e.enter("codeTextSequence")),
                    (r = 0),
                    (function n(o) {
                      return 96 === o
                        ? (e.consume(o), r++, n)
                        : r === l
                        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(o))
                        : ((i.type = "codeTextData"), a(o));
                    })(s))
                  : tf(s)
                  ? (e.enter("lineEnding"),
                    e.consume(s),
                    e.exit("lineEnding"),
                    o)
                  : (e.enter("codeTextData"), a(s));
              }
              function a(t) {
                return null === t || 32 === t || 96 === t || tf(t)
                  ? (e.exit("codeTextData"), o(t))
                  : (e.consume(t), a);
              }
            },
          },
        },
      ],
      4127
    );
    var na = e.i(4127);
    let ns = /[\0\t\n\r]/g;
    function nu(e, t) {
      let n = Number.parseInt(e, t);
      return n < 9 ||
        11 === n ||
        (n > 13 && n < 32) ||
        (n > 126 && n < 160) ||
        (n > 55295 && n < 57344) ||
        (n > 64975 && n < 65008) ||
        (65535 & n) == 65535 ||
        (65535 & n) == 65534 ||
        n > 1114111
        ? "�"
        : String.fromCodePoint(n);
    }
    let nc =
      /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
    function nd(e, t, n) {
      if (t) return t;
      if (35 === n.charCodeAt(0)) {
        let e = n.charCodeAt(1),
          t = 120 === e || 88 === e;
        return nu(n.slice(t ? 2 : 1), t ? 16 : 10);
      }
      return tq(n) || e;
    }
    let nh = {}.hasOwnProperty;
    function nf(e) {
      return { line: e.line, column: e.column, offset: e.offset };
    }
    function np(e, t) {
      if (e)
        throw Error(
          "Cannot close `" +
            e.type +
            "` (" +
            eq({ start: e.start, end: e.end }) +
            "): a different token (`" +
            t.type +
            "`, " +
            eq({ start: t.start, end: t.end }) +
            ") is open"
        );
      throw Error(
        "Cannot close document, a token (`" +
          t.type +
          "`, " +
          eq({ start: t.start, end: t.end }) +
          ") is still open"
      );
    }
    function nm(e) {
      let t = this;
      t.parser = function (n) {
        var r, i;
        let l, o, a, s;
        return (
          "object" ==
            typeof (r = {
              ...t.data("settings"),
              ...e,
              extensions: t.data("micromarkExtensions") || [],
              mdastExtensions: t.data("fromMarkdownExtensions") || [],
            }) && ((i = r), (r = void 0)),
          (function (e) {
            let t = {
              transforms: [],
              canContainEols: [
                "emphasis",
                "fragment",
                "heading",
                "paragraph",
                "strong",
              ],
              enter: {
                autolink: r(x),
                autolinkProtocol: u,
                autolinkEmail: u,
                atxHeading: r(p),
                blockQuote: r(function () {
                  return { type: "blockquote", children: [] };
                }),
                characterEscape: u,
                characterReference: u,
                codeFenced: r(f),
                codeFencedFenceInfo: i,
                codeFencedFenceMeta: i,
                codeIndented: r(f, i),
                codeText: r(function () {
                  return { type: "inlineCode", value: "" };
                }, i),
                codeTextData: u,
                data: u,
                codeFlowValue: u,
                definition: r(function () {
                  return {
                    type: "definition",
                    identifier: "",
                    label: null,
                    title: null,
                    url: "",
                  };
                }),
                definitionDestinationString: i,
                definitionLabelString: i,
                definitionTitleString: i,
                emphasis: r(function () {
                  return { type: "emphasis", children: [] };
                }),
                hardBreakEscape: r(m),
                hardBreakTrailing: r(m),
                htmlFlow: r(g, i),
                htmlFlowData: u,
                htmlText: r(g, i),
                htmlTextData: u,
                image: r(function () {
                  return { type: "image", title: null, url: "", alt: null };
                }),
                label: i,
                link: r(x),
                listItem: r(function (e) {
                  return {
                    type: "listItem",
                    spread: e._spread,
                    checked: null,
                    children: [],
                  };
                }),
                listItemValue: function (e) {
                  this.data.expectingFirstListItemValue &&
                    ((this.stack[this.stack.length - 2].start = Number.parseInt(
                      this.sliceSerialize(e),
                      10
                    )),
                    (this.data.expectingFirstListItemValue = void 0));
                },
                listOrdered: r(y, function () {
                  this.data.expectingFirstListItemValue = !0;
                }),
                listUnordered: r(y),
                paragraph: r(function () {
                  return { type: "paragraph", children: [] };
                }),
                reference: function () {
                  this.data.referenceType = "collapsed";
                },
                referenceString: i,
                resourceDestinationString: i,
                resourceTitleString: i,
                setextHeading: r(p),
                strong: r(function () {
                  return { type: "strong", children: [] };
                }),
                thematicBreak: r(function () {
                  return { type: "thematicBreak" };
                }),
              },
              exit: {
                atxHeading: o(),
                atxHeadingSequence: function (e) {
                  let t = this.stack[this.stack.length - 1];
                  t.depth || (t.depth = this.sliceSerialize(e).length);
                },
                autolink: o(),
                autolinkEmail: function (e) {
                  c.call(this, e),
                    (this.stack[this.stack.length - 1].url =
                      "mailto:" + this.sliceSerialize(e));
                },
                autolinkProtocol: function (e) {
                  c.call(this, e),
                    (this.stack[this.stack.length - 1].url =
                      this.sliceSerialize(e));
                },
                blockQuote: o(),
                characterEscapeValue: c,
                characterReferenceMarkerHexadecimal: h,
                characterReferenceMarkerNumeric: h,
                characterReferenceValue: function (e) {
                  let t,
                    n = this.sliceSerialize(e),
                    r = this.data.characterReferenceType;
                  r
                    ? ((t = nu(
                        n,
                        "characterReferenceMarkerNumeric" === r ? 10 : 16
                      )),
                      (this.data.characterReferenceType = void 0))
                    : (t = tq(n));
                  let i = this.stack[this.stack.length - 1];
                  i.value += t;
                },
                characterReference: function (e) {
                  this.stack.pop().position.end = nf(e.end);
                },
                codeFenced: o(function () {
                  let e = this.resume();
                  (this.stack[this.stack.length - 1].value = e.replace(
                    /^(\r?\n|\r)|(\r?\n|\r)$/g,
                    ""
                  )),
                    (this.data.flowCodeInside = void 0);
                }),
                codeFencedFence: function () {
                  this.data.flowCodeInside ||
                    (this.buffer(), (this.data.flowCodeInside = !0));
                },
                codeFencedFenceInfo: function () {
                  let e = this.resume();
                  this.stack[this.stack.length - 1].lang = e;
                },
                codeFencedFenceMeta: function () {
                  let e = this.resume();
                  this.stack[this.stack.length - 1].meta = e;
                },
                codeFlowValue: c,
                codeIndented: o(function () {
                  let e = this.resume();
                  this.stack[this.stack.length - 1].value = e.replace(
                    /(\r?\n|\r)$/g,
                    ""
                  );
                }),
                codeText: o(function () {
                  let e = this.resume();
                  this.stack[this.stack.length - 1].value = e;
                }),
                codeTextData: c,
                data: c,
                definition: o(),
                definitionDestinationString: function () {
                  let e = this.resume();
                  this.stack[this.stack.length - 1].url = e;
                },
                definitionLabelString: function (e) {
                  let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                  (n.label = t),
                    (n.identifier = tZ(this.sliceSerialize(e)).toLowerCase());
                },
                definitionTitleString: function () {
                  let e = this.resume();
                  this.stack[this.stack.length - 1].title = e;
                },
                emphasis: o(),
                hardBreakEscape: o(d),
                hardBreakTrailing: o(d),
                htmlFlow: o(function () {
                  let e = this.resume();
                  this.stack[this.stack.length - 1].value = e;
                }),
                htmlFlowData: c,
                htmlText: o(function () {
                  let e = this.resume();
                  this.stack[this.stack.length - 1].value = e;
                }),
                htmlTextData: c,
                image: o(function () {
                  let e = this.stack[this.stack.length - 1];
                  if (this.data.inReference) {
                    let t = this.data.referenceType || "shortcut";
                    (e.type += "Reference"),
                      (e.referenceType = t),
                      delete e.url,
                      delete e.title;
                  } else delete e.identifier, delete e.label;
                  this.data.referenceType = void 0;
                }),
                label: function () {
                  let e = this.stack[this.stack.length - 1],
                    t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                  (this.data.inReference = !0),
                    "link" === n.type ? (n.children = e.children) : (n.alt = t);
                },
                labelText: function (e) {
                  let t = this.sliceSerialize(e),
                    n = this.stack[this.stack.length - 2];
                  (n.label = t.replace(nc, nd)),
                    (n.identifier = tZ(t).toLowerCase());
                },
                lineEnding: function (e) {
                  let n = this.stack[this.stack.length - 1];
                  if (this.data.atHardBreak) {
                    (n.children[n.children.length - 1].position.end = nf(
                      e.end
                    )),
                      (this.data.atHardBreak = void 0);
                    return;
                  }
                  !this.data.setextHeadingSlurpLineEnding &&
                    t.canContainEols.includes(n.type) &&
                    (u.call(this, e), c.call(this, e));
                },
                link: o(function () {
                  let e = this.stack[this.stack.length - 1];
                  if (this.data.inReference) {
                    let t = this.data.referenceType || "shortcut";
                    (e.type += "Reference"),
                      (e.referenceType = t),
                      delete e.url,
                      delete e.title;
                  } else delete e.identifier, delete e.label;
                  this.data.referenceType = void 0;
                }),
                listItem: o(),
                listOrdered: o(),
                listUnordered: o(),
                paragraph: o(),
                referenceString: function (e) {
                  let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                  (n.label = t),
                    (n.identifier = tZ(this.sliceSerialize(e)).toLowerCase()),
                    (this.data.referenceType = "full");
                },
                resourceDestinationString: function () {
                  let e = this.resume();
                  this.stack[this.stack.length - 1].url = e;
                },
                resourceTitleString: function () {
                  let e = this.resume();
                  this.stack[this.stack.length - 1].title = e;
                },
                resource: function () {
                  this.data.inReference = void 0;
                },
                setextHeading: o(function () {
                  this.data.setextHeadingSlurpLineEnding = void 0;
                }),
                setextHeadingLineSequence: function (e) {
                  this.stack[this.stack.length - 1].depth =
                    61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
                },
                setextHeadingText: function () {
                  this.data.setextHeadingSlurpLineEnding = !0;
                },
                strong: o(),
                thematicBreak: o(),
              },
            };
            !(function e(t, n) {
              let r = -1;
              for (; ++r < n.length; ) {
                let i = n[r];
                Array.isArray(i)
                  ? e(t, i)
                  : (function (e, t) {
                      let n;
                      for (n in t)
                        if (nh.call(t, n))
                          switch (n) {
                            case "canContainEols": {
                              let r = t[n];
                              r && e[n].push(...r);
                              break;
                            }
                            case "transforms": {
                              let r = t[n];
                              r && e[n].push(...r);
                              break;
                            }
                            case "enter":
                            case "exit": {
                              let r = t[n];
                              r && Object.assign(e[n], r);
                            }
                          }
                    })(t, i);
              }
            })(t, (e || {}).mdastExtensions || []);
            let n = {};
            return function (e) {
              let r = { type: "root", children: [] },
                o = {
                  stack: [r],
                  tokenStack: [],
                  config: t,
                  enter: l,
                  exit: a,
                  buffer: i,
                  resume: s,
                  data: n,
                },
                u = [],
                c = -1;
              for (; ++c < e.length; )
                ("listOrdered" === e[c][1].type ||
                  "listUnordered" === e[c][1].type) &&
                  ("enter" === e[c][0]
                    ? u.push(c)
                    : (c = (function (e, t, n) {
                        let r,
                          i,
                          l,
                          o,
                          a = t - 1,
                          s = -1,
                          u = !1;
                        for (; ++a <= n; ) {
                          let t = e[a];
                          switch (t[1].type) {
                            case "listUnordered":
                            case "listOrdered":
                            case "blockQuote":
                              "enter" === t[0] ? s++ : s--, (o = void 0);
                              break;
                            case "lineEndingBlank":
                              "enter" === t[0] &&
                                (!r || o || s || l || (l = a), (o = void 0));
                              break;
                            case "linePrefix":
                            case "listItemValue":
                            case "listItemMarker":
                            case "listItemPrefix":
                            case "listItemPrefixWhitespace":
                              break;
                            default:
                              o = void 0;
                          }
                          if (
                            (!s &&
                              "enter" === t[0] &&
                              "listItemPrefix" === t[1].type) ||
                            (-1 === s &&
                              "exit" === t[0] &&
                              ("listUnordered" === t[1].type ||
                                "listOrdered" === t[1].type))
                          ) {
                            if (r) {
                              let o = a;
                              for (i = void 0; o--; ) {
                                let t = e[o];
                                if (
                                  "lineEnding" === t[1].type ||
                                  "lineEndingBlank" === t[1].type
                                ) {
                                  if ("exit" === t[0]) continue;
                                  i &&
                                    ((e[i][1].type = "lineEndingBlank"),
                                    (u = !0)),
                                    (t[1].type = "lineEnding"),
                                    (i = o);
                                } else if (
                                  "linePrefix" === t[1].type ||
                                  "blockQuotePrefix" === t[1].type ||
                                  "blockQuotePrefixWhitespace" === t[1].type ||
                                  "blockQuoteMarker" === t[1].type ||
                                  "listItemIndent" === t[1].type
                                );
                                else break;
                              }
                              l && (!i || l < i) && (r._spread = !0),
                                (r.end = Object.assign(
                                  {},
                                  i ? e[i][1].start : t[1].end
                                )),
                                e.splice(i || a, 0, ["exit", r, t[2]]),
                                a++,
                                n++;
                            }
                            if ("listItemPrefix" === t[1].type) {
                              let i = {
                                type: "listItem",
                                _spread: !1,
                                start: Object.assign({}, t[1].start),
                                end: void 0,
                              };
                              (r = i),
                                e.splice(a, 0, ["enter", i, t[2]]),
                                a++,
                                n++,
                                (l = void 0),
                                (o = !0);
                            }
                          }
                        }
                        return (e[t][1]._spread = u), n;
                      })(e, u.pop(), c)));
              for (c = -1; ++c < e.length; ) {
                let n = t[e[c][0]];
                nh.call(n, e[c][1].type) &&
                  n[e[c][1].type].call(
                    Object.assign(
                      { sliceSerialize: e[c][2].sliceSerialize },
                      o
                    ),
                    e[c][1]
                  );
              }
              if (o.tokenStack.length > 0) {
                let e = o.tokenStack[o.tokenStack.length - 1];
                (e[1] || np).call(o, void 0, e[0]);
              }
              for (
                r.position = {
                  start: nf(
                    e.length > 0
                      ? e[0][1].start
                      : { line: 1, column: 1, offset: 0 }
                  ),
                  end: nf(
                    e.length > 0
                      ? e[e.length - 2][1].end
                      : { line: 1, column: 1, offset: 0 }
                  ),
                },
                  c = -1;
                ++c < t.transforms.length;

              )
                r = t.transforms[c](r) || r;
              return r;
            };
            function r(e, t) {
              return function (n) {
                l.call(this, e(n), n), t && t.call(this, n);
              };
            }
            function i() {
              this.stack.push({ type: "fragment", children: [] });
            }
            function l(e, t, n) {
              this.stack[this.stack.length - 1].children.push(e),
                this.stack.push(e),
                this.tokenStack.push([t, n || void 0]),
                (e.position = { start: nf(t.start), end: void 0 });
            }
            function o(e) {
              return function (t) {
                e && e.call(this, t), a.call(this, t);
              };
            }
            function a(e, t) {
              let n = this.stack.pop(),
                r = this.tokenStack.pop();
              if (r)
                r[0].type !== e.type &&
                  (t
                    ? t.call(this, e, r[0])
                    : (r[1] || np).call(this, e, r[0]));
              else
                throw Error(
                  "Cannot close `" +
                    e.type +
                    "` (" +
                    eq({ start: e.start, end: e.end }) +
                    "): it’s not open"
                );
              n.position.end = nf(e.end);
            }
            function s() {
              return e8(this.stack.pop());
            }
            function u(e) {
              let t = this.stack[this.stack.length - 1].children,
                n = t[t.length - 1];
              (n && "text" === n.type) ||
                (((n = { type: "text", value: "" }).position = {
                  start: nf(e.start),
                  end: void 0,
                }),
                t.push(n)),
                this.stack.push(n);
            }
            function c(e) {
              let t = this.stack.pop();
              (t.value += this.sliceSerialize(e)), (t.position.end = nf(e.end));
            }
            function d() {
              this.data.atHardBreak = !0;
            }
            function h(e) {
              this.data.characterReferenceType = e.type;
            }
            function f() {
              return { type: "code", lang: null, meta: null, value: "" };
            }
            function p() {
              return { type: "heading", depth: 0, children: [] };
            }
            function m() {
              return { type: "break" };
            }
            function g() {
              return { type: "html", value: "" };
            }
            function x() {
              return { type: "link", title: null, url: "", children: [] };
            }
            function y(e) {
              return {
                type: "list",
                ordered: "listOrdered" === e.type,
                start: null,
                spread: e._spread,
                children: [],
              };
            }
          })(i)(
            (function (e) {
              for (; !tN(e); );
              return e;
            })(
              (function (e) {
                let t = {
                  constructs: tl([na, ...((e || {}).extensions || [])]),
                  content: n(tb),
                  defined: [],
                  document: n(tv),
                  flow: n(tP),
                  lazy: {},
                  string: n(tI),
                  text: n(tD),
                };
                return t;
                function n(e) {
                  return function (n) {
                    return (function (e, t, n) {
                      let r = {
                          _bufferIndex: -1,
                          _index: 0,
                          line: (n && n.line) || 1,
                          column: (n && n.column) || 1,
                          offset: (n && n.offset) || 0,
                        },
                        i = {},
                        l = [],
                        o = [],
                        a = [],
                        s = {
                          attempt: p(function (e, t) {
                            m(e, t.from);
                          }),
                          check: p(f),
                          consume: function (e) {
                            tf(e)
                              ? (r.line++,
                                (r.column = 1),
                                (r.offset += -3 === e ? 2 : 1),
                                g())
                              : -1 !== e && (r.column++, r.offset++),
                              r._bufferIndex < 0
                                ? r._index++
                                : (r._bufferIndex++,
                                  r._bufferIndex === o[r._index].length &&
                                    ((r._bufferIndex = -1), r._index++)),
                              (u.previous = e);
                          },
                          enter: function (e, t) {
                            let n = t || {};
                            return (
                              (n.type = e),
                              (n.start = h()),
                              u.events.push(["enter", n, u]),
                              a.push(n),
                              n
                            );
                          },
                          exit: function (e) {
                            let t = a.pop();
                            return (
                              (t.end = h()), u.events.push(["exit", t, u]), t
                            );
                          },
                          interrupt: p(f, { interrupt: !0 }),
                        },
                        u = {
                          code: null,
                          containerState: {},
                          defineSkip: function (e) {
                            (i[e.line] = e.column), g();
                          },
                          events: [],
                          now: h,
                          parser: e,
                          previous: null,
                          sliceSerialize: function (e, t) {
                            return (function (e, t) {
                              let n,
                                r = -1,
                                i = [];
                              for (; ++r < e.length; ) {
                                let l,
                                  o = e[r];
                                if ("string" == typeof o) l = o;
                                else
                                  switch (o) {
                                    case -5:
                                      l = "\r";
                                      break;
                                    case -4:
                                      l = "\n";
                                      break;
                                    case -3:
                                      l = "\r\n";
                                      break;
                                    case -2:
                                      l = t ? " " : "	";
                                      break;
                                    case -1:
                                      if (!t && n) continue;
                                      l = " ";
                                      break;
                                    default:
                                      l = String.fromCharCode(o);
                                  }
                                (n = -2 === o), i.push(l);
                              }
                              return i.join("");
                            })(d(e), t);
                          },
                          sliceStream: d,
                          write: function (e) {
                            return ((o = tr(o, e)),
                            (function () {
                              let e;
                              for (; r._index < o.length; ) {
                                let n = o[r._index];
                                if ("string" == typeof n)
                                  for (
                                    e = r._index,
                                      r._bufferIndex < 0 &&
                                        (r._bufferIndex = 0);
                                    r._index === e && r._bufferIndex < n.length;

                                  ) {
                                    var t;
                                    (t = n.charCodeAt(r._bufferIndex)),
                                      (c = c(t));
                                  }
                                else c = c(n);
                              }
                            })(),
                            null !== o[o.length - 1])
                              ? []
                              : (m(t, 0),
                                (u.events = tO(l, u.events, u)),
                                u.events);
                          },
                        },
                        c = t.tokenize.call(u, s);
                      return t.resolveAll && l.push(t), u;
                      function d(e) {
                        return (function (e, t) {
                          let n,
                            r = t.start._index,
                            i = t.start._bufferIndex,
                            l = t.end._index,
                            o = t.end._bufferIndex;
                          if (r === l) n = [e[r].slice(i, o)];
                          else {
                            if (((n = e.slice(r, l)), i > -1)) {
                              let e = n[0];
                              "string" == typeof e
                                ? (n[0] = e.slice(i))
                                : n.shift();
                            }
                            o > 0 && n.push(e[l].slice(0, o));
                          }
                          return n;
                        })(o, e);
                      }
                      function h() {
                        let {
                          _bufferIndex: e,
                          _index: t,
                          line: n,
                          column: i,
                          offset: l,
                        } = r;
                        return {
                          _bufferIndex: e,
                          _index: t,
                          line: n,
                          column: i,
                          offset: l,
                        };
                      }
                      function f(e, t) {
                        t.restore();
                      }
                      function p(e, t) {
                        return function (n, i, l) {
                          var o;
                          let c, d, f, p;
                          return Array.isArray(n)
                            ? m(n)
                            : "tokenize" in n
                            ? m([n])
                            : ((o = n),
                              function (e) {
                                let t = null !== e && o[e],
                                  n = null !== e && o.null;
                                return m([
                                  ...(Array.isArray(t) ? t : t ? [t] : []),
                                  ...(Array.isArray(n) ? n : n ? [n] : []),
                                ])(e);
                              });
                          function m(e) {
                            return ((c = e), (d = 0), 0 === e.length)
                              ? l
                              : x(e[d]);
                          }
                          function x(e) {
                            return function (n) {
                              let i, l, o, c, d;
                              return ((i = h()),
                              (l = u.previous),
                              (o = u.currentConstruct),
                              (c = u.events.length),
                              (d = Array.from(a)),
                              (p = {
                                from: c,
                                restore: function () {
                                  (r = i),
                                    (u.previous = l),
                                    (u.currentConstruct = o),
                                    (u.events.length = c),
                                    (a = d),
                                    g();
                                },
                              }),
                              (f = e),
                              e.partial || (u.currentConstruct = e),
                              e.name &&
                                u.parser.constructs.disable.null.includes(
                                  e.name
                                ))
                                ? k(n)
                                : e.tokenize.call(
                                    t ? Object.assign(Object.create(u), t) : u,
                                    s,
                                    y,
                                    k
                                  )(n);
                            };
                          }
                          function y(t) {
                            return e(f, p), i;
                          }
                          function k(e) {
                            return (p.restore(), ++d < c.length) ? x(c[d]) : l;
                          }
                        };
                      }
                      function m(e, t) {
                        e.resolveAll && !l.includes(e) && l.push(e),
                          e.resolve &&
                            tn(
                              u.events,
                              t,
                              u.events.length - t,
                              e.resolve(u.events.slice(t), u)
                            ),
                          e.resolveTo && (u.events = e.resolveTo(u.events, u));
                      }
                      function g() {
                        r.line in i &&
                          r.column < 2 &&
                          ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
                      }
                    })(t, e, n);
                  };
                }
              })(i)
                .document()
                .write(
                  ((o = 1),
                  (a = ""),
                  (s = !0),
                  function (e, t, n) {
                    let r,
                      i,
                      u,
                      c,
                      d,
                      h = [];
                    for (
                      e =
                        a +
                        ("string" == typeof e
                          ? e.toString()
                          : new TextDecoder(t || void 0).decode(e)),
                        u = 0,
                        a = "",
                        s && (65279 === e.charCodeAt(0) && u++, (s = void 0));
                      u < e.length;

                    ) {
                      if (
                        ((ns.lastIndex = u),
                        (c =
                          (r = ns.exec(e)) && void 0 !== r.index
                            ? r.index
                            : e.length),
                        (d = e.charCodeAt(c)),
                        !r)
                      ) {
                        a = e.slice(u);
                        break;
                      }
                      if (10 === d && u === c && l) h.push(-3), (l = void 0);
                      else
                        switch (
                          (l && (h.push(-5), (l = void 0)),
                          u < c && (h.push(e.slice(u, c)), (o += c - u)),
                          d)
                        ) {
                          case 0:
                            h.push(65533), o++;
                            break;
                          case 9:
                            for (
                              i = 4 * Math.ceil(o / 4), h.push(-2);
                              o++ < i;

                            )
                              h.push(-1);
                            break;
                          case 10:
                            h.push(-4), (o = 1);
                            break;
                          default:
                            (l = !0), (o = 1);
                        }
                      u = c + 1;
                    }
                    return (
                      n && (l && h.push(-5), a && h.push(a), h.push(null)), h
                    );
                  })(n, r, !0)
                )
            )
          )
        );
      };
    }
    let { defineProperty: ng } = Object,
      nx = "object" == typeof self ? self : globalThis,
      ny = (e, t) => {
        switch (e) {
          case "Function":
          case "SharedWorker":
          case "Worker":
          case "eval":
          case "setInterval":
          case "setTimeout":
            throw TypeError("unable to deserialize " + e);
        }
        return new nx[e](t);
      },
      nk = (e) => {
        var t;
        let n, r;
        return ((t = new Map()),
        (n = (e, n) => (t.set(n, e), e)),
        (r = (i) => {
          if (t.has(i)) return t.get(i);
          let [l, o] = e[i];
          switch (l) {
            case 0:
            case -1:
              return n(o, i);
            case 1: {
              let e = n([], i);
              for (let t of o) e.push(r(t));
              return e;
            }
            case 2: {
              let e = n({}, i);
              for (let [t, n] of o) {
                let i = r(t),
                  l = r(n);
                "__proto__" === i
                  ? ng(e, i, {
                      value: l,
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                    })
                  : (e[i] = l);
              }
              return e;
            }
            case 3:
              return n(new Date(o), i);
            case 4: {
              let { source: e, flags: t } = o;
              return n(new RegExp(e, t), i);
            }
            case 5: {
              let e = n(new Map(), i);
              for (let [t, n] of o) e.set(r(t), r(n));
              return e;
            }
            case 6: {
              let e = n(new Set(), i);
              for (let t of o) e.add(r(t));
              return e;
            }
            case 7: {
              let { name: e, message: t } = o;
              return n("function" == typeof nx[e] ? ny(e, t) : Error(t), i);
            }
            case 8:
              return n(BigInt(o), i);
            case "BigInt":
              return n(Object(BigInt(o)), i);
            case "ArrayBuffer":
              return n(new Uint8Array(o).buffer, o);
            case "DataView": {
              let { buffer: e } = new Uint8Array(o);
              return n(new DataView(e), o);
            }
            case "-0":
              return -0;
          }
          return n(ny(l, o), i);
        }))(0);
      },
      { toString: nb } = {},
      { keys: nv, is: nw } = Object,
      nS = (e) => {
        let t = typeof e;
        if ("object" !== t || !e) return [0, t];
        let n = nb.call(e).slice(8, -1);
        switch (n) {
          case "Array":
            return [1, ""];
          case "Object":
            return [2, ""];
          case "Date":
            return [3, ""];
          case "RegExp":
            return [4, ""];
          case "Map":
            return [5, ""];
          case "Set":
            return [6, ""];
          case "DataView":
            return [1, n];
        }
        return n.includes("Array")
          ? [1, n]
          : e instanceof Error
          ? [7, e.name || "Error"]
          : [2, n];
      },
      nC = ([e, t]) => 0 === e && ("function" === t || "symbol" === t),
      nj = (e, { json: t, lossy: n } = {}) => {
        var r, i, l;
        let o,
          a,
          s = [];
        return (
          ((r = !(t || n)),
          (i = !!t),
          (l = new Map()),
          (o = (e, t) => {
            let n = s.push(e) - 1;
            return l.set(t, n), n;
          }),
          (a = (e) => {
            if (l.has(e)) return l.get(e);
            let [t, n] = nS(e);
            switch (t) {
              case 0: {
                let i = e;
                switch (n) {
                  case "bigint":
                    (t = 8), (i = e.toString());
                    break;
                  case "number":
                    if (!e && nw(e, -0)) return s.push(["-0"]) - 1;
                    break;
                  case "function":
                  case "symbol":
                    if (r) throw TypeError("unable to serialize " + n);
                    i = null;
                    break;
                  case "undefined":
                    return o([-1], e);
                }
                return o([t, i], e);
              }
              case 1: {
                if (n) {
                  let t = e;
                  return (
                    "DataView" === n
                      ? (t = new Uint8Array(e.buffer))
                      : "ArrayBuffer" === n && (t = new Uint8Array(e)),
                    o([n, [...t]], e)
                  );
                }
                let r = [],
                  i = o([t, r], e);
                for (let t of e) r.push(a(t));
                return i;
              }
              case 2: {
                if (n)
                  switch (n) {
                    case "BigInt":
                      return o([n, e.toString()], e);
                    case "Boolean":
                    case "Number":
                    case "String":
                      return o([n, e.valueOf()], e);
                  }
                if (i && "toJSON" in e) return a(e.toJSON());
                let l = [],
                  s = o([t, l], e);
                for (let t of nv(e))
                  (r || !nC(nS(e[t]))) && l.push([a(t), a(e[t])]);
                return s;
              }
              case 3:
                return o([t, isNaN(e.getTime()) ? "" : e.toISOString()], e);
              case 4: {
                let { source: n, flags: r } = e;
                return o([t, { source: n, flags: r }], e);
              }
              case 5: {
                let n = [],
                  i = o([t, n], e);
                for (let [t, i] of e)
                  (r || !(nC(nS(t)) || nC(nS(i)))) && n.push([a(t), a(i)]);
                return i;
              }
              case 6: {
                let n = [],
                  i = o([t, n], e);
                for (let t of e) (r || !nC(nS(t))) && n.push(a(t));
                return i;
              }
            }
            let { message: u } = e;
            return o([t, { name: n, message: u }], e);
          }))(e),
          s
        );
      },
      nN =
        "function" == typeof structuredClone
          ? (e, t) =>
              t && ("json" in t || "lossy" in t)
                ? nk(nj(e, t))
                : structuredClone(e)
          : (e, t) => nk(nj(e, t));
    function nE(e) {
      let t = [],
        n = -1,
        r = 0,
        i = 0;
      for (; ++n < e.length; ) {
        let l = e.charCodeAt(n),
          o = "";
        if (37 === l && ta(e.charCodeAt(n + 1)) && ta(e.charCodeAt(n + 2)))
          i = 2;
        else if (l < 128)
          /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) ||
            (o = String.fromCharCode(l));
        else if (l > 55295 && l < 57344) {
          let t = e.charCodeAt(n + 1);
          l < 56320 && t > 56319 && t < 57344
            ? ((o = String.fromCharCode(l, t)), (i = 1))
            : (o = "�");
        } else o = String.fromCharCode(l);
        o &&
          (t.push(e.slice(r, n), encodeURIComponent(o)),
          (r = n + i + 1),
          (o = "")),
          i && ((n += i), (i = 0));
      }
      return t.join("") + e.slice(r);
    }
    function nT(e, t) {
      let n = [{ type: "text", value: "↩" }];
      return (
        t > 1 &&
          n.push({
            type: "element",
            tagName: "sup",
            properties: {},
            children: [{ type: "text", value: String(t) }],
          }),
        n
      );
    }
    function nP(e, t) {
      return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
    }
    let nA = function (e) {
      var t, n;
      if (null == e) return nD;
      if ("function" == typeof e) return nI(e);
      if ("object" == typeof e) {
        return Array.isArray(e)
          ? (function (e) {
              let t = [],
                n = -1;
              for (; ++n < e.length; ) t[n] = nA(e[n]);
              return nI(function (...e) {
                let n = -1;
                for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                return !1;
              });
            })(e)
          : ((t = e),
            nI(function (e) {
              let n;
              for (n in t) if (e[n] !== t[n]) return !1;
              return !0;
            }));
      }
      if ("string" == typeof e) {
        return (
          (n = e),
          nI(function (e) {
            return e && e.type === n;
          })
        );
      }
      throw Error("Expected function, string, or object as test");
    };
    function nI(e) {
      return function (t, n, r) {
        return !!(
          (function (e) {
            return null !== e && "object" == typeof e && "type" in e;
          })(t) &&
          e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
        );
      };
    }
    function nD() {
      return !0;
    }
    let nM = [];
    function nL(e, t, n, r) {
      let i;
      "function" == typeof t && "function" != typeof n
        ? ((r = n), (n = t))
        : (i = t);
      let l = nA(i),
        o = r ? -1 : 1;
      (function e(i, a, s) {
        let u = i && "object" == typeof i ? i : {};
        if ("string" == typeof u.type) {
          let e =
            "string" == typeof u.tagName
              ? u.tagName
              : "string" == typeof u.name
              ? u.name
              : void 0;
          Object.defineProperty(c, "name", {
            value: "node (" + i.type + (e ? "<" + e + ">" : "") + ")",
          });
        }
        return c;
        function c() {
          var u;
          let c,
            d,
            h,
            f = nM;
          if (
            (!t || l(i, a, s[s.length - 1] || void 0)) &&
            !1 ===
              (f = Array.isArray((u = n(i, s)))
                ? u
                : "number" == typeof u
                ? [!0, u]
                : null == u
                ? nM
                : [u])[0]
          )
            return f;
          if ("children" in i && i.children && i.children && "skip" !== f[0])
            for (
              d = (r ? i.children.length : -1) + o, h = s.concat(i);
              d > -1 && d < i.children.length;

            ) {
              if (!1 === (c = e(i.children[d], d, h)())[0]) return c;
              d = "number" == typeof c[1] ? c[1] : d + o;
            }
          return f;
        }
      })(e, void 0, [])();
    }
    function nz(e, t, n, r) {
      let i, l, o;
      "function" == typeof t && "function" != typeof n
        ? ((l = void 0), (o = t), (i = n))
        : ((l = t), (o = n), (i = r)),
        nL(
          e,
          l,
          function (e, t) {
            let n = t[t.length - 1],
              r = n ? n.children.indexOf(e) : void 0;
            return o(e, r, n);
          },
          i
        );
    }
    function n_(e, t) {
      let n = t.referenceType,
        r = "]";
      if (
        ("collapsed" === n
          ? (r += "[]")
          : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
        "imageReference" === t.type)
      )
        return [{ type: "text", value: "![" + t.alt + r }];
      let i = e.all(t),
        l = i[0];
      l && "text" === l.type
        ? (l.value = "[" + l.value)
        : i.unshift({ type: "text", value: "[" });
      let o = i[i.length - 1];
      return (
        o && "text" === o.type
          ? (o.value += r)
          : i.push({ type: "text", value: r }),
        i
      );
    }
    function nO(e) {
      let t = e.spread;
      return null == t ? e.children.length > 1 : t;
    }
    function nF(e, t, n) {
      let r = 0,
        i = e.length;
      if (t) {
        let t = e.codePointAt(r);
        for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r));
      }
      if (n) {
        let t = e.codePointAt(i - 1);
        for (; 9 === t || 32 === t; ) i--, (t = e.codePointAt(i - 1));
      }
      return i > r ? e.slice(r, i) : "";
    }
    let nR = {
      blockquote: function (e, t) {
        let n = {
          type: "element",
          tagName: "blockquote",
          properties: {},
          children: e.wrap(e.all(t), !0),
        };
        return e.patch(t, n), e.applyData(t, n);
      },
      break: function (e, t) {
        let n = {
          type: "element",
          tagName: "br",
          properties: {},
          children: [],
        };
        return (
          e.patch(t, n), [e.applyData(t, n), { type: "text", value: "\n" }]
        );
      },
      code: function (e, t) {
        let n = t.value ? t.value + "\n" : "",
          r = {},
          i = t.lang ? t.lang.split(/\s+/) : [];
        i.length > 0 && (r.className = ["language-" + i[0]]);
        let l = {
          type: "element",
          tagName: "code",
          properties: r,
          children: [{ type: "text", value: n }],
        };
        return (
          t.meta && (l.data = { meta: t.meta }),
          e.patch(t, l),
          (l = {
            type: "element",
            tagName: "pre",
            properties: {},
            children: [(l = e.applyData(t, l))],
          }),
          e.patch(t, l),
          l
        );
      },
      delete: function (e, t) {
        let n = {
          type: "element",
          tagName: "del",
          properties: {},
          children: e.all(t),
        };
        return e.patch(t, n), e.applyData(t, n);
      },
      emphasis: function (e, t) {
        let n = {
          type: "element",
          tagName: "em",
          properties: {},
          children: e.all(t),
        };
        return e.patch(t, n), e.applyData(t, n);
      },
      footnoteReference: function (e, t) {
        let n,
          r =
            "string" == typeof e.options.clobberPrefix
              ? e.options.clobberPrefix
              : "user-content-",
          i = String(t.identifier).toUpperCase(),
          l = nE(i.toLowerCase()),
          o = e.footnoteOrder.indexOf(i),
          a = e.footnoteCounts.get(i);
        void 0 === a
          ? ((a = 0), e.footnoteOrder.push(i), (n = e.footnoteOrder.length))
          : (n = o + 1),
          (a += 1),
          e.footnoteCounts.set(i, a);
        let s = {
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + r + "fn-" + l,
            id: r + "fnref-" + l + (a > 1 ? "-" + a : ""),
            dataFootnoteRef: !0,
            ariaDescribedBy: ["footnote-label"],
          },
          children: [{ type: "text", value: String(n) }],
        };
        e.patch(t, s);
        let u = {
          type: "element",
          tagName: "sup",
          properties: {},
          children: [s],
        };
        return e.patch(t, u), e.applyData(t, u);
      },
      heading: function (e, t) {
        let n = {
          type: "element",
          tagName: "h" + t.depth,
          properties: {},
          children: e.all(t),
        };
        return e.patch(t, n), e.applyData(t, n);
      },
      html: function (e, t) {
        if (e.options.allowDangerousHtml) {
          let n = { type: "raw", value: t.value };
          return e.patch(t, n), e.applyData(t, n);
        }
      },
      imageReference: function (e, t) {
        let n = String(t.identifier).toUpperCase(),
          r = e.definitionById.get(n);
        if (!r) return n_(e, t);
        let i = { src: nE(r.url || ""), alt: t.alt };
        null !== r.title && void 0 !== r.title && (i.title = r.title);
        let l = {
          type: "element",
          tagName: "img",
          properties: i,
          children: [],
        };
        return e.patch(t, l), e.applyData(t, l);
      },
      image: function (e, t) {
        let n = { src: nE(t.url) };
        null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
          null !== t.title && void 0 !== t.title && (n.title = t.title);
        let r = {
          type: "element",
          tagName: "img",
          properties: n,
          children: [],
        };
        return e.patch(t, r), e.applyData(t, r);
      },
      inlineCode: function (e, t) {
        let n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
        e.patch(t, n);
        let r = {
          type: "element",
          tagName: "code",
          properties: {},
          children: [n],
        };
        return e.patch(t, r), e.applyData(t, r);
      },
      linkReference: function (e, t) {
        let n = String(t.identifier).toUpperCase(),
          r = e.definitionById.get(n);
        if (!r) return n_(e, t);
        let i = { href: nE(r.url || "") };
        null !== r.title && void 0 !== r.title && (i.title = r.title);
        let l = {
          type: "element",
          tagName: "a",
          properties: i,
          children: e.all(t),
        };
        return e.patch(t, l), e.applyData(t, l);
      },
      link: function (e, t) {
        let n = { href: nE(t.url) };
        null !== t.title && void 0 !== t.title && (n.title = t.title);
        let r = {
          type: "element",
          tagName: "a",
          properties: n,
          children: e.all(t),
        };
        return e.patch(t, r), e.applyData(t, r);
      },
      listItem: function (e, t, n) {
        let r = e.all(t),
          i = n
            ? (function (e) {
                let t = !1;
                if ("list" === e.type) {
                  t = e.spread || !1;
                  let n = e.children,
                    r = -1;
                  for (; !t && ++r < n.length; ) t = nO(n[r]);
                }
                return t;
              })(n)
            : nO(t),
          l = {},
          o = [];
        if ("boolean" == typeof t.checked) {
          let e,
            n = r[0];
          n && "element" === n.type && "p" === n.tagName
            ? (e = n)
            : ((e = {
                type: "element",
                tagName: "p",
                properties: {},
                children: [],
              }),
              r.unshift(e)),
            e.children.length > 0 &&
              e.children.unshift({ type: "text", value: " " }),
            e.children.unshift({
              type: "element",
              tagName: "input",
              properties: {
                type: "checkbox",
                checked: t.checked,
                disabled: !0,
              },
              children: [],
            }),
            (l.className = ["task-list-item"]);
        }
        let a = -1;
        for (; ++a < r.length; ) {
          let e = r[a];
          (i || 0 !== a || "element" !== e.type || "p" !== e.tagName) &&
            o.push({ type: "text", value: "\n" }),
            "element" !== e.type || "p" !== e.tagName || i
              ? o.push(e)
              : o.push(...e.children);
        }
        let s = r[r.length - 1];
        s &&
          (i || "element" !== s.type || "p" !== s.tagName) &&
          o.push({ type: "text", value: "\n" });
        let u = { type: "element", tagName: "li", properties: l, children: o };
        return e.patch(t, u), e.applyData(t, u);
      },
      list: function (e, t) {
        let n = {},
          r = e.all(t),
          i = -1;
        for (
          "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
          ++i < r.length;

        ) {
          let e = r[i];
          if (
            "element" === e.type &&
            "li" === e.tagName &&
            e.properties &&
            Array.isArray(e.properties.className) &&
            e.properties.className.includes("task-list-item")
          ) {
            n.className = ["contains-task-list"];
            break;
          }
        }
        let l = {
          type: "element",
          tagName: t.ordered ? "ol" : "ul",
          properties: n,
          children: e.wrap(r, !0),
        };
        return e.patch(t, l), e.applyData(t, l);
      },
      paragraph: function (e, t) {
        let n = {
          type: "element",
          tagName: "p",
          properties: {},
          children: e.all(t),
        };
        return e.patch(t, n), e.applyData(t, n);
      },
      root: function (e, t) {
        let n = { type: "root", children: e.wrap(e.all(t)) };
        return e.patch(t, n), e.applyData(t, n);
      },
      strong: function (e, t) {
        let n = {
          type: "element",
          tagName: "strong",
          properties: {},
          children: e.all(t),
        };
        return e.patch(t, n), e.applyData(t, n);
      },
      table: function (e, t) {
        let n = e.all(t),
          r = n.shift(),
          i = [];
        if (r) {
          let n = {
            type: "element",
            tagName: "thead",
            properties: {},
            children: e.wrap([r], !0),
          };
          e.patch(t.children[0], n), i.push(n);
        }
        if (n.length > 0) {
          let r = {
              type: "element",
              tagName: "tbody",
              properties: {},
              children: e.wrap(n, !0),
            },
            l = eU(t.children[1]),
            o = eB(t.children[t.children.length - 1]);
          l && o && (r.position = { start: l, end: o }), i.push(r);
        }
        let l = {
          type: "element",
          tagName: "table",
          properties: {},
          children: e.wrap(i, !0),
        };
        return e.patch(t, l), e.applyData(t, l);
      },
      tableCell: function (e, t) {
        let n = {
          type: "element",
          tagName: "td",
          properties: {},
          children: e.all(t),
        };
        return e.patch(t, n), e.applyData(t, n);
      },
      tableRow: function (e, t, n) {
        let r = n ? n.children : void 0,
          i = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td",
          l = n && "table" === n.type ? n.align : void 0,
          o = l ? l.length : t.children.length,
          a = -1,
          s = [];
        for (; ++a < o; ) {
          let n = t.children[a],
            r = {},
            o = l ? l[a] : void 0;
          o && (r.align = o);
          let u = { type: "element", tagName: i, properties: r, children: [] };
          n &&
            ((u.children = e.all(n)), e.patch(n, u), (u = e.applyData(n, u))),
            s.push(u);
        }
        let u = {
          type: "element",
          tagName: "tr",
          properties: {},
          children: e.wrap(s, !0),
        };
        return e.patch(t, u), e.applyData(t, u);
      },
      text: function (e, t) {
        let n = {
          type: "text",
          value: (function (e) {
            let t = String(e),
              n = /\r?\n|\r/g,
              r = n.exec(t),
              i = 0,
              l = [];
            for (; r; )
              l.push(nF(t.slice(i, r.index), i > 0, !0), r[0]),
                (i = r.index + r[0].length),
                (r = n.exec(t));
            return l.push(nF(t.slice(i), i > 0, !1)), l.join("");
          })(String(t.value)),
        };
        return e.patch(t, n), e.applyData(t, n);
      },
      thematicBreak: function (e, t) {
        let n = {
          type: "element",
          tagName: "hr",
          properties: {},
          children: [],
        };
        return e.patch(t, n), e.applyData(t, n);
      },
      toml: nB,
      yaml: nB,
      definition: nB,
      footnoteDefinition: nB,
    };
    function nB() {}
    let nU = {}.hasOwnProperty,
      nH = {};
    function nq(e, t) {
      e.position &&
        (t.position = (function (e) {
          let t = eU(e),
            n = eB(e);
          if (t && n) return { start: t, end: n };
        })(e));
    }
    function n$(e, t) {
      let n = t;
      if (e && e.data) {
        let t = e.data.hName,
          r = e.data.hChildren,
          i = e.data.hProperties;
        "string" == typeof t &&
          ("element" === n.type
            ? (n.tagName = t)
            : (n = {
                type: "element",
                tagName: t,
                properties: {},
                children: "children" in n ? n.children : [n],
              })),
          "element" === n.type && i && Object.assign(n.properties, nN(i)),
          "children" in n && n.children && null != r && (n.children = r);
      }
      return n;
    }
    function nV(e, t) {
      let n = [],
        r = -1;
      for (t && n.push({ type: "text", value: "\n" }); ++r < e.length; )
        r && n.push({ type: "text", value: "\n" }), n.push(e[r]);
      return t && e.length > 0 && n.push({ type: "text", value: "\n" }), n;
    }
    function nW(e) {
      let t = 0,
        n = e.charCodeAt(t);
      for (; 9 === n || 32 === n; ) t++, (n = e.charCodeAt(t));
      return e.slice(t);
    }
    function nK(e, t) {
      let n,
        r,
        i,
        l,
        o =
          ((n = t || nH),
          (r = new Map()),
          (i = new Map()),
          (l = {
            all: function (e) {
              let t = [];
              if ("children" in e) {
                let n = e.children,
                  r = -1;
                for (; ++r < n.length; ) {
                  let i = l.one(n[r], e);
                  if (i) {
                    if (
                      r &&
                      "break" === n[r - 1].type &&
                      (Array.isArray(i) ||
                        "text" !== i.type ||
                        (i.value = nW(i.value)),
                      !Array.isArray(i) && "element" === i.type)
                    ) {
                      let e = i.children[0];
                      e && "text" === e.type && (e.value = nW(e.value));
                    }
                    Array.isArray(i) ? t.push(...i) : t.push(i);
                  }
                }
              }
              return t;
            },
            applyData: n$,
            definitionById: r,
            footnoteById: i,
            footnoteCounts: new Map(),
            footnoteOrder: [],
            handlers: { ...nR, ...n.handlers },
            one: function (e, t) {
              let n = e.type,
                r = l.handlers[n];
              if (nU.call(l.handlers, n) && r) return r(l, e, t);
              if (l.options.passThrough && l.options.passThrough.includes(n)) {
                if ("children" in e) {
                  let { children: t, ...n } = e,
                    r = nN(n);
                  return (r.children = l.all(e)), r;
                }
                return nN(e);
              }
              return (
                l.options.unknownHandler ||
                function (e, t) {
                  let n = t.data || {},
                    r =
                      "value" in t &&
                      !(nU.call(n, "hProperties") || nU.call(n, "hChildren"))
                        ? { type: "text", value: t.value }
                        : {
                            type: "element",
                            tagName: "div",
                            properties: {},
                            children: e.all(t),
                          };
                  return e.patch(t, r), e.applyData(t, r);
                }
              )(l, e, t);
            },
            options: n,
            patch: nq,
            wrap: nV,
          }),
          nz(e, function (e) {
            if ("definition" === e.type || "footnoteDefinition" === e.type) {
              let t = "definition" === e.type ? r : i,
                n = String(e.identifier).toUpperCase();
              t.has(n) || t.set(n, e);
            }
          }),
          l),
        a = o.one(e, void 0),
        s = (function (e) {
          let t =
              "string" == typeof e.options.clobberPrefix
                ? e.options.clobberPrefix
                : "user-content-",
            n = e.options.footnoteBackContent || nT,
            r = e.options.footnoteBackLabel || nP,
            i = e.options.footnoteLabel || "Footnotes",
            l = e.options.footnoteLabelTagName || "h2",
            o = e.options.footnoteLabelProperties || { className: ["sr-only"] },
            a = [],
            s = -1;
          for (; ++s < e.footnoteOrder.length; ) {
            let i = e.footnoteById.get(e.footnoteOrder[s]);
            if (!i) continue;
            let l = e.all(i),
              o = String(i.identifier).toUpperCase(),
              u = nE(o.toLowerCase()),
              c = 0,
              d = [],
              h = e.footnoteCounts.get(o);
            for (; void 0 !== h && ++c <= h; ) {
              d.length > 0 && d.push({ type: "text", value: " " });
              let e = "string" == typeof n ? n : n(s, c);
              "string" == typeof e && (e = { type: "text", value: e }),
                d.push({
                  type: "element",
                  tagName: "a",
                  properties: {
                    href: "#" + t + "fnref-" + u + (c > 1 ? "-" + c : ""),
                    dataFootnoteBackref: "",
                    ariaLabel: "string" == typeof r ? r : r(s, c),
                    className: ["data-footnote-backref"],
                  },
                  children: Array.isArray(e) ? e : [e],
                });
            }
            let f = l[l.length - 1];
            if (f && "element" === f.type && "p" === f.tagName) {
              let e = f.children[f.children.length - 1];
              e && "text" === e.type
                ? (e.value += " ")
                : f.children.push({ type: "text", value: " " }),
                f.children.push(...d);
            } else l.push(...d);
            let p = {
              type: "element",
              tagName: "li",
              properties: { id: t + "fn-" + u },
              children: e.wrap(l, !0),
            };
            e.patch(i, p), a.push(p);
          }
          if (0 !== a.length)
            return {
              type: "element",
              tagName: "section",
              properties: { dataFootnotes: !0, className: ["footnotes"] },
              children: [
                {
                  type: "element",
                  tagName: l,
                  properties: { ...nN(o), id: "footnote-label" },
                  children: [{ type: "text", value: i }],
                },
                { type: "text", value: "\n" },
                {
                  type: "element",
                  tagName: "ol",
                  properties: {},
                  children: e.wrap(a, !0),
                },
                { type: "text", value: "\n" },
              ],
            };
        })(o),
        u = Array.isArray(a)
          ? { type: "root", children: a }
          : a || { type: "root", children: [] };
      return s && (J(), u.children.push({ type: "text", value: "\n" }, s)), u;
    }
    function nG(e, t) {
      return e && "run" in e
        ? async function (n, r) {
            let i = nK(n, { file: r, ...t });
            await e.run(i, r);
          }
        : function (n, r) {
            return nK(n, { file: r, ...(e || t) });
          };
    }
    function nY(e) {
      if (e) throw e;
    }
    var nX = e.i(4100);
    function nQ(e) {
      if ("object" != typeof e || null === e) return !1;
      let t = Object.getPrototypeOf(e);
      return (
        (null === t ||
          t === Object.prototype ||
          null === Object.getPrototypeOf(t)) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    }
    let nJ = function (e, t) {
        let n;
        if (void 0 !== t && "string" != typeof t)
          throw TypeError('"ext" argument must be a string');
        n2(e);
        let r = 0,
          i = -1,
          l = e.length;
        if (void 0 === t || 0 === t.length || t.length > e.length) {
          for (; l--; )
            if (47 === e.codePointAt(l)) {
              if (n) {
                r = l + 1;
                break;
              }
            } else i < 0 && ((n = !0), (i = l + 1));
          return i < 0 ? "" : e.slice(r, i);
        }
        if (t === e) return "";
        let o = -1,
          a = t.length - 1;
        for (; l--; )
          if (47 === e.codePointAt(l)) {
            if (n) {
              r = l + 1;
              break;
            }
          } else
            o < 0 && ((n = !0), (o = l + 1)),
              a > -1 &&
                (e.codePointAt(l) === t.codePointAt(a--)
                  ? a < 0 && (i = l)
                  : ((a = -1), (i = o)));
        return r === i ? (i = o) : i < 0 && (i = e.length), e.slice(r, i);
      },
      nZ = function (e) {
        let t;
        if ((n2(e), 0 === e.length)) return ".";
        let n = -1,
          r = e.length;
        for (; --r; )
          if (47 === e.codePointAt(r)) {
            if (t) {
              n = r;
              break;
            }
          } else t || (t = !0);
        return n < 0
          ? 47 === e.codePointAt(0)
            ? "/"
            : "."
          : 1 === n && 47 === e.codePointAt(0)
          ? "//"
          : e.slice(0, n);
      },
      n0 = function (e) {
        let t;
        n2(e);
        let n = e.length,
          r = -1,
          i = 0,
          l = -1,
          o = 0;
        for (; n--; ) {
          let a = e.codePointAt(n);
          if (47 === a) {
            if (t) {
              i = n + 1;
              break;
            }
            continue;
          }
          r < 0 && ((t = !0), (r = n + 1)),
            46 === a
              ? l < 0
                ? (l = n)
                : 1 !== o && (o = 1)
              : l > -1 && (o = -1);
        }
        return l < 0 ||
          r < 0 ||
          0 === o ||
          (1 === o && l === r - 1 && l === i + 1)
          ? ""
          : e.slice(l, r);
      },
      n1 = function (...e) {
        var t;
        let n,
          r,
          i,
          l = -1;
        for (; ++l < e.length; )
          n2(e[l]), e[l] && (i = void 0 === i ? e[l] : i + "/" + e[l]);
        return void 0 === i
          ? "."
          : (n2((t = i)),
            (n = 47 === t.codePointAt(0)),
            0 !==
              (r = (function (e, t) {
                let n,
                  r,
                  i = "",
                  l = 0,
                  o = -1,
                  a = 0,
                  s = -1;
                for (; ++s <= e.length; ) {
                  if (s < e.length) n = e.codePointAt(s);
                  else if (47 === n) break;
                  else n = 47;
                  if (47 === n) {
                    if (o === s - 1 || 1 === a);
                    else if (o !== s - 1 && 2 === a) {
                      if (
                        i.length < 2 ||
                        2 !== l ||
                        46 !== i.codePointAt(i.length - 1) ||
                        46 !== i.codePointAt(i.length - 2)
                      ) {
                        if (i.length > 2) {
                          if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                            r < 0
                              ? ((i = ""), (l = 0))
                              : (l =
                                  (i = i.slice(0, r)).length -
                                  1 -
                                  i.lastIndexOf("/")),
                              (o = s),
                              (a = 0);
                            continue;
                          }
                        } else if (i.length > 0) {
                          (i = ""), (l = 0), (o = s), (a = 0);
                          continue;
                        }
                      }
                      t && ((i = i.length > 0 ? i + "/.." : ".."), (l = 2));
                    } else
                      i.length > 0
                        ? (i += "/" + e.slice(o + 1, s))
                        : (i = e.slice(o + 1, s)),
                        (l = s - o - 1);
                    (o = s), (a = 0);
                  } else 46 === n && a > -1 ? a++ : (a = -1);
                }
                return i;
              })(t, !n)).length ||
              n ||
              (r = "."),
            r.length > 0 && 47 === t.codePointAt(t.length - 1) && (r += "/"),
            n ? "/" + r : r);
      };
    function n2(e) {
      if ("string" != typeof e)
        throw TypeError("Path must be a string. Received " + JSON.stringify(e));
    }
    function n4(e) {
      return !!(
        null !== e &&
        "object" == typeof e &&
        "href" in e &&
        e.href &&
        "protocol" in e &&
        e.protocol &&
        void 0 === e.auth
      );
    }
    let n5 = ["history", "path", "basename", "stem", "extname", "dirname"];
    class n3 {
      constructor(e) {
        let t, n;
        (t = e
          ? n4(e)
            ? { path: e }
            : "string" == typeof e ||
              (function (e) {
                return !!(
                  e &&
                  "object" == typeof e &&
                  "byteLength" in e &&
                  "byteOffset" in e
                );
              })(e)
            ? { value: e }
            : e
          : {}),
          (this.cwd = "cwd" in t ? "" : "/"),
          (this.data = {}),
          (this.history = []),
          (this.messages = []),
          this.value,
          this.map,
          this.result,
          this.stored;
        let r = -1;
        for (; ++r < n5.length; ) {
          const e = n5[r];
          e in t &&
            void 0 !== t[e] &&
            null !== t[e] &&
            (this[e] = "history" === e ? [...t[e]] : t[e]);
        }
        for (n in t) n5.includes(n) || (this[n] = t[n]);
      }
      get basename() {
        return "string" == typeof this.path ? nJ(this.path) : void 0;
      }
      set basename(e) {
        n9(e, "basename"),
          n6(e, "basename"),
          (this.path = n1(this.dirname || "", e));
      }
      get dirname() {
        return "string" == typeof this.path ? nZ(this.path) : void 0;
      }
      set dirname(e) {
        n7(this.basename, "dirname"), (this.path = n1(e || "", this.basename));
      }
      get extname() {
        return "string" == typeof this.path ? n0(this.path) : void 0;
      }
      set extname(e) {
        if ((n6(e, "extname"), n7(this.dirname, "extname"), e)) {
          if (46 !== e.codePointAt(0))
            throw Error("`extname` must start with `.`");
          if (e.includes(".", 1))
            throw Error("`extname` cannot contain multiple dots");
        }
        this.path = n1(this.dirname, this.stem + (e || ""));
      }
      get path() {
        return this.history[this.history.length - 1];
      }
      set path(e) {
        n4(e) &&
          (e = (function (e) {
            if ("string" == typeof e) e = new URL(e);
            else if (!n4(e)) {
              let t = TypeError(
                'The "path" argument must be of type string or an instance of URL. Received `' +
                  e +
                  "`"
              );
              throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
            }
            if ("file:" !== e.protocol) {
              let e = TypeError("The URL must be of scheme file");
              throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
            }
            return (function (e) {
              if ("" !== e.hostname) {
                let e = TypeError(
                  'File URL host must be "localhost" or empty on darwin'
                );
                throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
              }
              let t = e.pathname,
                n = -1;
              for (; ++n < t.length; )
                if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                  let e = t.codePointAt(n + 2);
                  if (70 === e || 102 === e) {
                    let e = TypeError(
                      "File URL path must not include encoded / characters"
                    );
                    throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
                  }
                }
              return decodeURIComponent(t);
            })(e);
          })(e)),
          n9(e, "path"),
          this.path !== e && this.history.push(e);
      }
      get stem() {
        return "string" == typeof this.path
          ? nJ(this.path, this.extname)
          : void 0;
      }
      set stem(e) {
        n9(e, "stem"),
          n6(e, "stem"),
          (this.path = n1(this.dirname || "", e + (this.extname || "")));
      }
      fail(e, t, n) {
        let r = this.message(e, t, n);
        throw ((r.fatal = !0), r);
      }
      info(e, t, n) {
        let r = this.message(e, t, n);
        return (r.fatal = void 0), r;
      }
      message(e, t, n) {
        let r = new eK(e, t, n);
        return (
          this.path &&
            ((r.name = this.path + ":" + r.name), (r.file = this.path)),
          (r.fatal = !1),
          this.messages.push(r),
          r
        );
      }
      toString(e) {
        return void 0 === this.value
          ? ""
          : "string" == typeof this.value
          ? this.value
          : new TextDecoder(e || void 0).decode(this.value);
      }
    }
    function n6(e, t) {
      if (e && e.includes("/"))
        throw Error("`" + t + "` cannot be a path: did not expect `/`");
    }
    function n9(e, t) {
      if (!e) throw Error("`" + t + "` cannot be empty");
    }
    function n7(e, t) {
      if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
    }
    let n8 = function (e) {
        let t = this.constructor.prototype,
          n = t[e],
          r = function () {
            return n.apply(r, arguments);
          };
        return Object.setPrototypeOf(r, t), r;
      },
      re = {}.hasOwnProperty,
      rt = new (class e extends n8 {
        constructor() {
          super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = (function () {
              let e = [],
                t = {
                  run: function (...t) {
                    let n = -1,
                      r = t.pop();
                    if ("function" != typeof r)
                      throw TypeError(
                        "Expected function as last argument, not " + r
                      );
                    !(function i(l, ...o) {
                      let a = e[++n],
                        s = -1;
                      if (l) return void r(l);
                      for (; ++s < t.length; )
                        (null === o[s] || void 0 === o[s]) && (o[s] = t[s]);
                      (t = o),
                        a
                          ? (function (e, t) {
                              let n;
                              return function (...t) {
                                let l,
                                  o = e.length > t.length;
                                o && t.push(r);
                                try {
                                  l = e.apply(this, t);
                                } catch (e) {
                                  if (o && n) throw e;
                                  return r(e);
                                }
                                o ||
                                  (l && l.then && "function" == typeof l.then
                                    ? l.then(i, r)
                                    : l instanceof Error
                                    ? r(l)
                                    : i(l));
                              };
                              function r(e, ...i) {
                                n || ((n = !0), t(e, ...i));
                              }
                              function i(e) {
                                r(null, e);
                              }
                            })(
                              a,
                              i
                            )(...o)
                          : r(null, ...o);
                    })(null, ...t);
                  },
                  use: function (n) {
                    if ("function" != typeof n)
                      throw TypeError(
                        "Expected `middelware` to be a function, not " + n
                      );
                    return e.push(n), t;
                  },
                };
              return t;
            })());
        }
        copy() {
          let t = new e(),
            n = -1;
          for (; ++n < this.attachers.length; ) {
            let e = this.attachers[n];
            t.use(...e);
          }
          return t.data((0, nX.default)(!0, {}, this.namespace)), t;
        }
        data(e, t) {
          return "string" == typeof e
            ? 2 == arguments.length
              ? (ri("data", this.frozen), (this.namespace[e] = t), this)
              : (re.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
            ? (ri("data", this.frozen), (this.namespace = e), this)
            : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            let [e, ...t] = this.attachers[this.freezeIndex];
            if (!1 === t[0]) continue;
            !0 === t[0] && (t[0] = void 0);
            let n = e.call(this, ...t);
            "function" == typeof n && this.transformers.use(n);
          }
          return (this.frozen = !0), (this.freezeIndex = 1 / 0), this;
        }
        parse(e) {
          this.freeze();
          let t = ra(e),
            n = this.parser || this.Parser;
          return rn("parse", n), n(String(t), t);
        }
        process(e, t) {
          let n = this;
          return (
            this.freeze(),
            rn("process", this.parser || this.Parser),
            rr("process", this.compiler || this.Compiler),
            t ? r(void 0, t) : new Promise(r)
          );
          function r(r, i) {
            let l = ra(e),
              o = n.parse(l);
            function a(e, n) {
              e || !n ? i(e) : r ? r(n) : (J(), t(void 0, n));
            }
            n.run(o, l, function (e, t, r) {
              var i, l;
              if (e || !t || !r) return a(e);
              let o = n.stringify(t, r);
              "string" == typeof (i = o) ||
              ((l = i) &&
                "object" == typeof l &&
                "byteLength" in l &&
                "byteOffset" in l)
                ? (r.value = o)
                : (r.result = o),
                a(e, r);
            });
          }
        }
        processSync(e) {
          let t,
            n = !1;
          return (
            this.freeze(),
            rn("processSync", this.parser || this.Parser),
            rr("processSync", this.compiler || this.Compiler),
            this.process(e, function (e, r) {
              (n = !0), nY(e), (t = r);
            }),
            ro("processSync", "process", n),
            J(),
            t
          );
        }
        run(e, t, n) {
          rl(e), this.freeze();
          let r = this.transformers;
          return (
            n || "function" != typeof t || ((n = t), (t = void 0)),
            n ? i(void 0, n) : new Promise(i)
          );
          function i(i, l) {
            J();
            let o = ra(t);
            r.run(e, o, function (t, r, o) {
              let a = r || e;
              t ? l(t) : i ? i(a) : (J(), n(void 0, a, o));
            });
          }
        }
        runSync(e, t) {
          let n,
            r = !1;
          return (
            this.run(e, t, function (e, t) {
              nY(e), (n = t), (r = !0);
            }),
            ro("runSync", "run", r),
            J(),
            n
          );
        }
        stringify(e, t) {
          this.freeze();
          let n = ra(t),
            r = this.compiler || this.Compiler;
          return rr("stringify", r), rl(e), r(e, n);
        }
        use(e, ...t) {
          let n = this.attachers,
            r = this.namespace;
          if ((ri("use", this.frozen), null == e));
          else if ("function" == typeof e) o(e, t);
          else if ("object" == typeof e) Array.isArray(e) ? l(e) : i(e);
          else throw TypeError("Expected usable value, not `" + e + "`");
          return this;
          function i(e) {
            if (!("plugins" in e) && !("settings" in e))
              throw Error(
                "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
              );
            l(e.plugins),
              e.settings &&
                (r.settings = (0, nX.default)(!0, r.settings, e.settings));
          }
          function l(e) {
            let t = -1;
            if (null == e);
            else if (Array.isArray(e))
              for (; ++t < e.length; )
                !(function (e) {
                  if ("function" == typeof e) o(e, []);
                  else if ("object" == typeof e)
                    if (Array.isArray(e)) {
                      let [t, ...n] = e;
                      o(t, n);
                    } else i(e);
                  else
                    throw TypeError("Expected usable value, not `" + e + "`");
                })(e[t]);
            else throw TypeError("Expected a list of plugins, not `" + e + "`");
          }
          function o(e, t) {
            let r = -1,
              i = -1;
            for (; ++r < n.length; )
              if (n[r][0] === e) {
                i = r;
                break;
              }
            if (-1 === i) n.push([e, ...t]);
            else if (t.length > 0) {
              let [r, ...l] = t,
                o = n[i][1];
              nQ(o) && nQ(r) && (r = (0, nX.default)(!0, o, r)),
                (n[i] = [e, r, ...l]);
            }
          }
        }
      })().freeze();
    function rn(e, t) {
      if ("function" != typeof t)
        throw TypeError("Cannot `" + e + "` without `parser`");
    }
    function rr(e, t) {
      if ("function" != typeof t)
        throw TypeError("Cannot `" + e + "` without `compiler`");
    }
    function ri(e, t) {
      if (t)
        throw Error(
          "Cannot call `" +
            e +
            "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
        );
    }
    function rl(e) {
      if (!nQ(e) || "string" != typeof e.type)
        throw TypeError("Expected node, got `" + e + "`");
    }
    function ro(e, t, n) {
      if (!n)
        throw Error("`" + e + "` finished async. Use `" + t + "` instead");
    }
    function ra(e) {
      var t;
      return (t = e) &&
        "object" == typeof t &&
        "message" in t &&
        "messages" in t
        ? e
        : new n3(e);
    }
    let rs = [],
      ru = { allowDangerousHtml: !0 },
      rc = /^(https?|ircs?|mailto|xmpp)$/i,
      rd = [
        { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
        {
          from: "allowDangerousHtml",
          id: "remove-buggy-html-in-markdown-parser",
        },
        {
          from: "allowNode",
          id: "replace-allownode-allowedtypes-and-disallowedtypes",
          to: "allowElement",
        },
        {
          from: "allowedTypes",
          id: "replace-allownode-allowedtypes-and-disallowedtypes",
          to: "allowedElements",
        },
        { from: "className", id: "remove-classname" },
        {
          from: "disallowedTypes",
          id: "replace-allownode-allowedtypes-and-disallowedtypes",
          to: "disallowedElements",
        },
        { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
        { from: "includeElementIndex", id: "#remove-includeelementindex" },
        {
          from: "includeNodeIndex",
          id: "change-includenodeindex-to-includeelementindex",
        },
        { from: "linkTarget", id: "remove-linktarget" },
        {
          from: "plugins",
          id: "change-plugins-to-remarkplugins",
          to: "remarkPlugins",
        },
        { from: "rawSourcePos", id: "#remove-rawsourcepos" },
        {
          from: "renderers",
          id: "change-renderers-to-components",
          to: "components",
        },
        { from: "source", id: "change-source-to-children", to: "children" },
        { from: "sourcePos", id: "#remove-sourcepos" },
        {
          from: "transformImageUri",
          id: "#add-urltransform",
          to: "urlTransform",
        },
        {
          from: "transformLinkUri",
          id: "#add-urltransform",
          to: "urlTransform",
        },
      ];
    function rh(e) {
      var t;
      let r,
        i,
        l,
        o,
        a,
        s =
          ((r = (t = e).rehypePlugins || rs),
          (i = t.remarkPlugins || rs),
          (l = t.remarkRehypeOptions
            ? { ...t.remarkRehypeOptions, ...ru }
            : ru),
          rt().use(nm).use(i).use(nG, l).use(r)),
        u =
          ((o = e.children || ""),
          (a = new n3()),
          "string" == typeof o ? (a.value = o) : Z(),
          a);
      return (function (e, t) {
        let r = t.allowedElements,
          i = t.allowElement,
          l = t.components,
          o = t.disallowedElements,
          a = t.skipHtml,
          s = t.unwrapDisallowed,
          u = t.urlTransform || rf;
        for (let e of rd)
          Object.hasOwn(t, e.from) && Z((e.from, e.to && e.to, e.id));
        return (
          r && o && Z(),
          nz(e, function (e, t, n) {
            if ("raw" === e.type && n && "number" == typeof t)
              return (
                a
                  ? n.children.splice(t, 1)
                  : (n.children[t] = { type: "text", value: e.value }),
                t
              );
            if ("element" === e.type) {
              let t;
              for (t in e9)
                if (Object.hasOwn(e9, t) && Object.hasOwn(e.properties, t)) {
                  let n = e.properties[t],
                    r = e9[t];
                  (null === r || r.includes(e.tagName)) &&
                    (e.properties[t] = u(String(n || ""), t, e));
                }
            }
            if ("element" === e.type) {
              let l = r ? !r.includes(e.tagName) : !!o && o.includes(e.tagName);
              if (
                (!l && i && "number" == typeof t && (l = !i(e, t, n)),
                l && n && "number" == typeof t)
              )
                return (
                  s && e.children
                    ? n.children.splice(t, 1, ...e.children)
                    : n.children.splice(t, 1),
                  t
                );
            }
          }),
          (function (e, t) {
            var n, r, i, l;
            let o;
            if (!t || void 0 === t.Fragment)
              throw TypeError("Expected `Fragment` in options");
            let a = t.filePath || void 0;
            if (t.development) {
              if ("function" != typeof t.jsxDEV)
                throw TypeError(
                  "Expected `jsxDEV` in options when `development: true`"
                );
              (n = a),
                (r = t.jsxDEV),
                (o = function (e, t, i, l) {
                  let o = Array.isArray(i.children),
                    a = eU(e);
                  return r(
                    t,
                    i,
                    l,
                    o,
                    {
                      columnNumber: a ? a.column - 1 : void 0,
                      fileName: n,
                      lineNumber: a ? a.line : void 0,
                    },
                    void 0
                  );
                });
            } else {
              if ("function" != typeof t.jsx)
                throw TypeError("Expected `jsx` in production options");
              if ("function" != typeof t.jsxs)
                throw TypeError("Expected `jsxs` in production options");
              (i = t.jsx),
                (l = t.jsxs),
                (o = function (e, t, n, r) {
                  let o = Array.isArray(n.children) ? l : i;
                  return r ? o(t, n, r) : o(t, n);
                });
            }
            let s = {
                Fragment: t.Fragment,
                ancestors: [],
                components: t.components || {},
                create: o,
                elementAttributeNameCase: t.elementAttributeNameCase || "react",
                evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
                filePath: a,
                ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
                passKeys: !1 !== t.passKeys,
                passNode: t.passNode || !1,
                schema: "svg" === t.space ? eF : eO,
                stylePropertyNameCase: t.stylePropertyNameCase || "dom",
                tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
              },
              u = e0(s, e, void 0);
            return u && "string" != typeof u
              ? u
              : s.create(e, s.Fragment, { children: u || void 0 }, void 0);
          })(e, {
            Fragment: n.Fragment,
            components: l,
            ignoreInvalidStyle: !0,
            jsx: n.jsx,
            jsxs: n.jsxs,
            passKeys: !0,
            passNode: !0,
          })
        );
      })(s.runSync(s.parse(u), u), e);
    }
    function rf(e) {
      let t = e.indexOf(":"),
        n = e.indexOf("?"),
        r = e.indexOf("#"),
        i = e.indexOf("/");
      return -1 === t ||
        (-1 !== i && t > i) ||
        (-1 !== n && t > n) ||
        (-1 !== r && t > r) ||
        rc.test(e.slice(0, t))
        ? e
        : "";
    }
    function rp(e, t) {
      let n = String(e);
      if ("string" != typeof t) throw TypeError("Expected character");
      let r = 0,
        i = n.indexOf(t);
      for (; -1 !== i; ) r++, (i = n.indexOf(t, i + t.length));
      return r;
    }
    let rm = "phrasing",
      rg = ["autolink", "link", "image", "label"];
    function rx(e) {
      this.enter({ type: "link", title: null, url: "", children: [] }, e);
    }
    function ry(e) {
      this.config.enter.autolinkProtocol.call(this, e);
    }
    function rk(e) {
      this.config.exit.autolinkProtocol.call(this, e);
    }
    function rb(e) {
      this.config.exit.data.call(this, e);
      let t = this.stack[this.stack.length - 1];
      J(t.type), (t.url = "http://" + this.sliceSerialize(e));
    }
    function rv(e) {
      this.config.exit.autolinkEmail.call(this, e);
    }
    function rw(e) {
      this.exit(e);
    }
    function rS(e) {
      !(function (e, t, n) {
        let r = nA((n || {}).ignore || []),
          i = (function (e) {
            let t = [];
            if (!Array.isArray(e))
              throw TypeError(
                "Expected find and replace tuple or list of tuples"
              );
            let n = !e[0] || Array.isArray(e[0]) ? e : [e],
              r = -1;
            for (; ++r < n.length; ) {
              var i;
              let e = n[r];
              t.push([
                "string" == typeof (i = e[0])
                  ? RegExp(
                      (function (e) {
                        if ("string" != typeof e)
                          throw TypeError("Expected a string");
                        return e
                          .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                          .replace(/-/g, "\\x2d");
                      })(i),
                      "g"
                    )
                  : i,
                (function (e) {
                  return "function" == typeof e
                    ? e
                    : function () {
                        return e;
                      };
                })(e[1]),
              ]);
            }
            return t;
          })(t),
          l = -1;
        for (; ++l < i.length; ) nL(e, "text", o);
        function o(e, t) {
          let n,
            o = -1;
          for (; ++o < t.length; ) {
            let e = t[o],
              i = n ? n.children : void 0;
            if (r(e, i ? i.indexOf(e) : void 0, n)) return;
            n = e;
          }
          if (n)
            return (function (e, t) {
              let n = t[t.length - 1],
                r = i[l][0],
                o = i[l][1],
                a = 0,
                s = n.children.indexOf(e),
                u = !1,
                c = [];
              r.lastIndex = 0;
              let d = r.exec(e.value);
              for (; d; ) {
                let n = d.index,
                  i = { index: d.index, input: d.input, stack: [...t, e] },
                  l = o(...d, i);
                if (
                  ("string" == typeof l &&
                    (l = l.length > 0 ? { type: "text", value: l } : void 0),
                  !1 === l
                    ? (r.lastIndex = n + 1)
                    : (a !== n &&
                        c.push({ type: "text", value: e.value.slice(a, n) }),
                      Array.isArray(l) ? c.push(...l) : l && c.push(l),
                      (a = n + d[0].length),
                      (u = !0)),
                  !r.global)
                )
                  break;
                d = r.exec(e.value);
              }
              return (
                u
                  ? (a < e.value.length &&
                      c.push({ type: "text", value: e.value.slice(a) }),
                    n.children.splice(s, 1, ...c))
                  : (c = [e]),
                s + c.length
              );
            })(e, t);
        }
      })(
        e,
        [
          [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, rC],
          [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, rj],
        ],
        { ignore: ["link", "linkReference"] }
      );
    }
    function rC(e, t, n, r, i) {
      let l,
        o = "";
      if (!rN(i)) return !1;
      if (
        (/^w/i.test(t) && ((n = t + n), (t = ""), (o = "http://")),
        (l = n.split(".")).length < 2 ||
          (l[l.length - 1] &&
            (/_/.test(l[l.length - 1]) ||
              !/[a-zA-Z\d]/.test(l[l.length - 1]))) ||
          (l[l.length - 2] &&
            (/_/.test(l[l.length - 2]) || !/[a-zA-Z\d]/.test(l[l.length - 2]))))
      )
        return !1;
      let a = (function (e) {
        let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
        if (!t) return [e, void 0];
        e = e.slice(0, t.index);
        let n = t[0],
          r = n.indexOf(")"),
          i = rp(e, "("),
          l = rp(e, ")");
        for (; -1 !== r && i > l; )
          (e += n.slice(0, r + 1)),
            (r = (n = n.slice(r + 1)).indexOf(")")),
            l++;
        return [e, n];
      })(n + r);
      if (!a[0]) return !1;
      let s = {
        type: "link",
        title: null,
        url: o + t + a[0],
        children: [{ type: "text", value: t + a[0] }],
      };
      return a[1] ? [s, { type: "text", value: a[1] }] : s;
    }
    function rj(e, t, n, r) {
      return (
        !(!rN(r, !0) || /[-\d_]$/.test(n)) && {
          type: "link",
          title: null,
          url: "mailto:" + t + "@" + n,
          children: [{ type: "text", value: t + "@" + n }],
        }
      );
    }
    function rN(e, t) {
      let n = e.input.charCodeAt(e.index - 1);
      return (0 === e.index || tx(n) || tg(n)) && (!t || 47 !== n);
    }
    function rE() {
      this.buffer();
    }
    function rT(e) {
      this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
    }
    function rP() {
      this.buffer();
    }
    function rA(e) {
      this.enter(
        { type: "footnoteDefinition", identifier: "", label: "", children: [] },
        e
      );
    }
    function rI(e) {
      let t = this.resume(),
        n = this.stack[this.stack.length - 1];
      J(n.type),
        (n.identifier = tZ(this.sliceSerialize(e)).toLowerCase()),
        (n.label = t);
    }
    function rD(e) {
      this.exit(e);
    }
    function rM(e) {
      let t = this.resume(),
        n = this.stack[this.stack.length - 1];
      J(n.type),
        (n.identifier = tZ(this.sliceSerialize(e)).toLowerCase()),
        (n.label = t);
    }
    function rL(e) {
      this.exit(e);
    }
    function rz(e, t, n, r) {
      let i = n.createTracker(r),
        l = i.move("[^"),
        o = n.enter("footnoteReference"),
        a = n.enter("reference");
      return (
        (l += i.move(n.safe(n.associationId(e), { after: "]", before: l }))),
        a(),
        o(),
        (l += i.move("]"))
      );
    }
    function r_(e, t, n) {
      return 0 === t ? e : rO(e, t, n);
    }
    function rO(e, t, n) {
      return (n ? "" : "    ") + e;
    }
    rz.peek = function () {
      return "[";
    };
    let rF = [
      "autolink",
      "destinationLiteral",
      "destinationRaw",
      "reference",
      "titleQuote",
      "titleApostrophe",
    ];
    function rR(e) {
      this.enter({ type: "delete", children: [] }, e);
    }
    function rB(e) {
      this.exit(e);
    }
    function rU(e, t, n, r) {
      let i = n.createTracker(r),
        l = n.enter("strikethrough"),
        o = i.move("~~");
      return (
        (o += n.containerPhrasing(e, {
          ...i.current(),
          before: o,
          after: "~",
        })),
        (o += i.move("~~")),
        l(),
        o
      );
    }
    function rH(e) {
      return e.length;
    }
    function rq(e) {
      let t = "string" == typeof e ? e.codePointAt(0) : 0;
      return 67 === t || 99 === t
        ? 99
        : 76 === t || 108 === t
        ? 108
        : 114 * (82 === t || 114 === t);
    }
    rU.peek = function () {
      return "~";
    };
    function r$(e, t, n) {
      let r = e.value || "",
        i = "`",
        l = -1;
      for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
      for (
        /[^ \r\n]/.test(r) &&
        ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
        (r = " " + r + " ");
        ++l < n.unsafe.length;

      ) {
        let e,
          t = n.unsafe[l],
          i = n.compilePattern(t);
        if (t.atBreak)
          for (; (e = i.exec(r)); ) {
            let t = e.index;
            10 === r.charCodeAt(t) && 13 === r.charCodeAt(t - 1) && t--,
              (r = r.slice(0, t) + " " + r.slice(e.index + 1));
          }
      }
      return i + r + i;
    }
    r$.peek = function () {
      return "`";
    };
    nA([
      "break",
      "delete",
      "emphasis",
      "footnote",
      "footnoteReference",
      "image",
      "imageReference",
      "inlineCode",
      "inlineMath",
      "link",
      "linkReference",
      "mdxJsxTextElement",
      "mdxTextExpression",
      "strong",
      "text",
      "textDirective",
    ]);
    let rV = function (e, t, n, r) {
      let i = (function (e) {
          let t = e.options.listItemIndent || "one";
          if ("tab" !== t && "one" !== t && "mixed" !== t)
            throw Error(
              "Cannot serialize items with `" +
                t +
                "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
            );
          return t;
        })(n),
        l =
          n.bulletCurrent ||
          (function (e) {
            let t = e.options.bullet || "*";
            if ("*" !== t && "+" !== t && "-" !== t)
              throw Error(
                "Cannot serialize items with `" +
                  t +
                  "` for `options.bullet`, expected `*`, `+`, or `-`"
              );
            return t;
          })(n);
      t &&
        "list" === t.type &&
        t.ordered &&
        (l =
          ("number" == typeof t.start && t.start > -1 ? t.start : 1) +
          (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) +
          l);
      let o = l.length + 1;
      ("tab" === i ||
        ("mixed" === i &&
          ((t && "list" === t.type && t.spread) || e.spread))) &&
        (o = 4 * Math.ceil(o / 4));
      let a = n.createTracker(r);
      a.move(l + " ".repeat(o - l.length)), a.shift(o);
      let s = n.enter("listItem"),
        u = n.indentLines(n.containerFlow(e, a.current()), function (e, t, n) {
          return t
            ? (n ? "" : " ".repeat(o)) + e
            : (n ? l : l + " ".repeat(o - l.length)) + e;
        });
      return s(), u;
    };
    function rW(e) {
      let t = e._align;
      J(),
        this.enter(
          {
            type: "table",
            align: t.map(function (e) {
              return "none" === e ? null : e;
            }),
            children: [],
          },
          e
        ),
        (this.data.inTable = !0);
    }
    function rK(e) {
      this.exit(e), (this.data.inTable = void 0);
    }
    function rG(e) {
      this.enter({ type: "tableRow", children: [] }, e);
    }
    function rY(e) {
      this.exit(e);
    }
    function rX(e) {
      this.enter({ type: "tableCell", children: [] }, e);
    }
    function rQ(e) {
      let t = this.resume();
      this.data.inTable && (t = t.replace(/\\([\\|])/g, rJ));
      let n = this.stack[this.stack.length - 1];
      J(n.type), (n.value = t), this.exit(e);
    }
    function rJ(e, t) {
      return "|" === t ? t : e;
    }
    function rZ(e) {
      let t = this.stack[this.stack.length - 2];
      J(t.type), (t.checked = "taskListCheckValueChecked" === e.type);
    }
    function r0(e) {
      let t = this.stack[this.stack.length - 2];
      if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
        let e = this.stack[this.stack.length - 1];
        J(e.type);
        let n = e.children[0];
        if (n && "text" === n.type) {
          let r,
            i = t.children,
            l = -1;
          for (; ++l < i.length; ) {
            let e = i[l];
            if ("paragraph" === e.type) {
              r = e;
              break;
            }
          }
          r === e &&
            ((n.value = n.value.slice(1)),
            0 === n.value.length
              ? e.children.shift()
              : e.position &&
                n.position &&
                "number" == typeof n.position.start.offset &&
                (n.position.start.column++,
                n.position.start.offset++,
                (e.position.start = Object.assign({}, n.position.start))));
        }
      }
      this.exit(e);
    }
    function r1(e, t, n, r) {
      let i = e.children[0],
        l = "boolean" == typeof e.checked && i && "paragraph" === i.type,
        o = "[" + (e.checked ? "x" : " ") + "] ",
        a = n.createTracker(r);
      l && a.move(o);
      let s = rV(e, t, n, { ...r, ...a.current() });
      return (
        l &&
          (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
            return e + o;
          })),
        s
      );
    }
    let r2 = {
        tokenize: function (e, t, n) {
          let r = 0;
          return function t(l) {
            return (87 === l || 119 === l) && r < 3
              ? (r++, e.consume(l), t)
              : 46 === l && 3 === r
              ? (e.consume(l), i)
              : n(l);
          };
          function i(e) {
            return null === e ? n(e) : t(e);
          }
        },
        partial: !0,
      },
      r4 = {
        tokenize: function (e, t, n) {
          let r, i, l;
          return o;
          function o(t) {
            return 46 === t || 95 === t
              ? e.check(r3, s, a)(t)
              : null === t || tp(t) || tx(t) || (45 !== t && tg(t))
              ? s(t)
              : ((l = !0), e.consume(t), o);
          }
          function a(t) {
            return (
              95 === t ? (r = !0) : ((i = r), (r = void 0)), e.consume(t), o
            );
          }
          function s(e) {
            return i || r || !l ? n(e) : t(e);
          }
        },
        partial: !0,
      },
      r5 = {
        tokenize: function (e, t) {
          let n = 0,
            r = 0;
          return i;
          function i(o) {
            return 40 === o
              ? (n++, e.consume(o), i)
              : 41 === o && r < n
              ? l(o)
              : 33 === o ||
                34 === o ||
                38 === o ||
                39 === o ||
                41 === o ||
                42 === o ||
                44 === o ||
                46 === o ||
                58 === o ||
                59 === o ||
                60 === o ||
                63 === o ||
                93 === o ||
                95 === o ||
                126 === o
              ? e.check(r3, t, l)(o)
              : null === o || tp(o) || tx(o)
              ? t(o)
              : (e.consume(o), i);
          }
          function l(t) {
            return 41 === t && r++, e.consume(t), i;
          }
        },
        partial: !0,
      },
      r3 = {
        tokenize: function (e, t, n) {
          return r;
          function r(o) {
            return 33 === o ||
              34 === o ||
              39 === o ||
              41 === o ||
              42 === o ||
              44 === o ||
              46 === o ||
              58 === o ||
              59 === o ||
              63 === o ||
              95 === o ||
              126 === o
              ? (e.consume(o), r)
              : 38 === o
              ? (e.consume(o), l)
              : 93 === o
              ? (e.consume(o), i)
              : 60 === o || null === o || tp(o) || tx(o)
              ? t(o)
              : n(o);
          }
          function i(e) {
            return null === e || 40 === e || 91 === e || tp(e) || tx(e)
              ? t(e)
              : r(e);
          }
          function l(t) {
            return to(t)
              ? (function t(i) {
                  return 59 === i
                    ? (e.consume(i), r)
                    : to(i)
                    ? (e.consume(i), t)
                    : n(i);
                })(t)
              : n(t);
          }
        },
        partial: !0,
      },
      r6 = {
        tokenize: function (e, t, n) {
          return function (t) {
            return e.consume(t), r;
          };
          function r(e) {
            return ta(e) ? n(e) : t(e);
          }
        },
        partial: !0,
      },
      r9 = {
        name: "wwwAutolink",
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            return (87 !== t && 119 !== t) ||
              !ir.call(r, r.previous) ||
              ia(r.events)
              ? n(t)
              : (e.enter("literalAutolink"),
                e.enter("literalAutolinkWww"),
                e.check(r2, e.attempt(r4, e.attempt(r5, i), n), n)(t));
          };
          function i(n) {
            return (
              e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
            );
          }
        },
        previous: ir,
      },
      r7 = {
        name: "protocolAutolink",
        tokenize: function (e, t, n) {
          let r = this,
            i = "",
            l = !1;
          return function (t) {
            return (72 === t || 104 === t) &&
              ii.call(r, r.previous) &&
              !ia(r.events)
              ? (e.enter("literalAutolink"),
                e.enter("literalAutolinkHttp"),
                (i += String.fromCodePoint(t)),
                e.consume(t),
                o)
              : n(t);
          };
          function o(t) {
            if (to(t) && i.length < 5)
              return (i += String.fromCodePoint(t)), e.consume(t), o;
            if (58 === t) {
              let n = i.toLowerCase();
              if ("http" === n || "https" === n) return e.consume(t), a;
            }
            return n(t);
          }
          function a(t) {
            return 47 === t ? ((e.consume(t), l) ? s : ((l = !0), a)) : n(t);
          }
          function s(t) {
            return null === t || tu(t) || tp(t) || tx(t) || tg(t)
              ? n(t)
              : e.attempt(r4, e.attempt(r5, u), n)(t);
          }
          function u(n) {
            return (
              e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
            );
          }
        },
        previous: ii,
      },
      r8 = {
        name: "emailAutolink",
        tokenize: function (e, t, n) {
          let r,
            i,
            l = this;
          return function (t) {
            return !io(t) || !il.call(l, l.previous) || ia(l.events)
              ? n(t)
              : (e.enter("literalAutolink"),
                e.enter("literalAutolinkEmail"),
                (function t(r) {
                  return io(r)
                    ? (e.consume(r), t)
                    : 64 === r
                    ? (e.consume(r), o)
                    : n(r);
                })(t));
          };
          function o(t) {
            return 46 === t
              ? e.check(r6, s, a)(t)
              : 45 === t || 95 === t || ta(t)
              ? ((i = !0), e.consume(t), o)
              : s(t);
          }
          function a(t) {
            return e.consume(t), (r = !0), o;
          }
          function s(o) {
            return i && r && to(l.previous)
              ? (e.exit("literalAutolinkEmail"),
                e.exit("literalAutolink"),
                t(o))
              : n(o);
          }
        },
        previous: il,
      },
      ie = {},
      it = 48;
    for (; it < 123; )
      (ie[it] = r8), 58 == ++it ? (it = 65) : 91 === it && (it = 97);
    function ir(e) {
      return (
        null === e ||
        40 === e ||
        42 === e ||
        95 === e ||
        91 === e ||
        93 === e ||
        126 === e ||
        tp(e)
      );
    }
    function ii(e) {
      return !to(e);
    }
    function il(e) {
      return !(47 === e || io(e));
    }
    function io(e) {
      return 43 === e || 45 === e || 46 === e || 95 === e || ta(e);
    }
    function ia(e) {
      let t = e.length,
        n = !1;
      for (; t--; ) {
        let r = e[t][1];
        if (
          ("labelLink" === r.type || "labelImage" === r.type) &&
          !r._balanced
        ) {
          n = !0;
          break;
        }
        if (r._gfmAutolinkLiteralWalkedInto) {
          n = !1;
          break;
        }
      }
      return (
        e.length > 0 &&
          !n &&
          (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
        n
      );
    }
    (ie[43] = r8),
      (ie[45] = r8),
      (ie[46] = r8),
      (ie[95] = r8),
      (ie[72] = [r8, r7]),
      (ie[104] = [r8, r7]),
      (ie[87] = [r8, r9]),
      (ie[119] = [r8, r9]);
    let is = {
      tokenize: function (e, t, n) {
        let r = this;
        return tk(
          e,
          function (e) {
            let i = r.events[r.events.length - 1];
            return i &&
              "gfmFootnoteDefinitionIndent" === i[1].type &&
              4 === i[2].sliceSerialize(i[1], !0).length
              ? t(e)
              : n(e);
          },
          "gfmFootnoteDefinitionIndent",
          5
        );
      },
      partial: !0,
    };
    function iu(e, t, n) {
      let r,
        i = this,
        l = i.events.length,
        o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
      for (; l--; ) {
        let e = i.events[l][1];
        if ("labelImage" === e.type) {
          r = e;
          break;
        }
        if (
          "gfmFootnoteCall" === e.type ||
          "labelLink" === e.type ||
          "label" === e.type ||
          "image" === e.type ||
          "link" === e.type
        )
          break;
      }
      return function (l) {
        if (!r || !r._balanced) return n(l);
        let a = tZ(i.sliceSerialize({ start: r.end, end: i.now() }));
        return 94 === a.codePointAt(0) && o.includes(a.slice(1))
          ? (e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(l),
            e.exit("gfmFootnoteCallLabelMarker"),
            t(l))
          : n(l);
      };
    }
    function ic(e, t) {
      let n = e.length;
      for (; n--; )
        if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
          e[n][1];
          break;
        }
      (e[n + 1][1].type = "data"),
        (e[n + 3][1].type = "gfmFootnoteCallLabelMarker");
      let r = {
          type: "gfmFootnoteCall",
          start: Object.assign({}, e[n + 3][1].start),
          end: Object.assign({}, e[e.length - 1][1].end),
        },
        i = {
          type: "gfmFootnoteCallMarker",
          start: Object.assign({}, e[n + 3][1].end),
          end: Object.assign({}, e[n + 3][1].end),
        };
      i.end.column++, i.end.offset++, i.end._bufferIndex++;
      let l = {
          type: "gfmFootnoteCallString",
          start: Object.assign({}, i.end),
          end: Object.assign({}, e[e.length - 1][1].start),
        },
        o = {
          type: "chunkString",
          contentType: "string",
          start: Object.assign({}, l.start),
          end: Object.assign({}, l.end),
        },
        a = [
          e[n + 1],
          e[n + 2],
          ["enter", r, t],
          e[n + 3],
          e[n + 4],
          ["enter", i, t],
          ["exit", i, t],
          ["enter", l, t],
          ["enter", o, t],
          ["exit", o, t],
          ["exit", l, t],
          e[e.length - 2],
          e[e.length - 1],
          ["exit", r, t],
        ];
      return e.splice(n, e.length - n + 1, ...a), e;
    }
    function id(e, t, n) {
      let r,
        i = this,
        l = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []),
        o = 0;
      return function (t) {
        return (
          e.enter("gfmFootnoteCall"),
          e.enter("gfmFootnoteCallLabelMarker"),
          e.consume(t),
          e.exit("gfmFootnoteCallLabelMarker"),
          a
        );
      };
      function a(t) {
        return 94 !== t
          ? n(t)
          : (e.enter("gfmFootnoteCallMarker"),
            e.consume(t),
            e.exit("gfmFootnoteCallMarker"),
            e.enter("gfmFootnoteCallString"),
            (e.enter("chunkString").contentType = "string"),
            s);
      }
      function s(a) {
        if (o > 999 || (93 === a && !r) || null === a || 91 === a || tp(a))
          return n(a);
        if (93 === a) {
          e.exit("chunkString");
          let r = e.exit("gfmFootnoteCallString");
          return l.includes(tZ(i.sliceSerialize(r)))
            ? (e.enter("gfmFootnoteCallLabelMarker"),
              e.consume(a),
              e.exit("gfmFootnoteCallLabelMarker"),
              e.exit("gfmFootnoteCall"),
              t)
            : n(a);
        }
        return tp(a) || (r = !0), o++, e.consume(a), 92 === a ? u : s;
      }
      function u(t) {
        return 91 === t || 92 === t || 93 === t ? (e.consume(t), o++, s) : s(t);
      }
    }
    function ih(e, t, n) {
      let r,
        i,
        l = this,
        o = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []),
        a = 0;
      return function (t) {
        return (
          (e.enter("gfmFootnoteDefinition")._container = !0),
          e.enter("gfmFootnoteDefinitionLabel"),
          e.enter("gfmFootnoteDefinitionLabelMarker"),
          e.consume(t),
          e.exit("gfmFootnoteDefinitionLabelMarker"),
          s
        );
      };
      function s(t) {
        return 94 === t
          ? (e.enter("gfmFootnoteDefinitionMarker"),
            e.consume(t),
            e.exit("gfmFootnoteDefinitionMarker"),
            e.enter("gfmFootnoteDefinitionLabelString"),
            (e.enter("chunkString").contentType = "string"),
            u)
          : n(t);
      }
      function u(t) {
        if (a > 999 || (93 === t && !i) || null === t || 91 === t || tp(t))
          return n(t);
        if (93 === t) {
          e.exit("chunkString");
          let n = e.exit("gfmFootnoteDefinitionLabelString");
          return (
            (r = tZ(l.sliceSerialize(n))),
            e.enter("gfmFootnoteDefinitionLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteDefinitionLabelMarker"),
            e.exit("gfmFootnoteDefinitionLabel"),
            d
          );
        }
        return tp(t) || (i = !0), a++, e.consume(t), 92 === t ? c : u;
      }
      function c(t) {
        return 91 === t || 92 === t || 93 === t ? (e.consume(t), a++, u) : u(t);
      }
      function d(t) {
        return 58 === t
          ? (e.enter("definitionMarker"),
            e.consume(t),
            e.exit("definitionMarker"),
            o.includes(r) || o.push(r),
            tk(e, h, "gfmFootnoteDefinitionWhitespace"))
          : n(t);
      }
      function h(e) {
        return t(e);
      }
    }
    function ip(e, t, n) {
      return e.check(tS, t, e.attempt(is, t, n));
    }
    function im(e) {
      e.exit("gfmFootnoteDefinition");
    }
    class ig {
      constructor() {
        (this.map = []), (this.index = new Map());
      }
      add(e, t, n) {
        !(function (e, t, n, r) {
          if (0 === n && 0 === r.length) return;
          let i = e.index.get(t);
          if (i) {
            (i[1] += n), i[2].push(...r);
            return;
          }
          let l = [t, n, r];
          e.map.push(l), e.index.set(t, l);
        })(this, e, t, n);
      }
      consume(e) {
        if (
          (this.map.sort(function (e, t) {
            return e[0] - t[0];
          }),
          0 === this.map.length)
        )
          return;
        let t = this.map.length,
          n = [];
        for (; t > 0; )
          (t -= 1),
            n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
            (e.length = this.map[t][0]);
        n.push(e.slice()), (e.length = 0);
        let r = n.pop();
        for (; r; ) {
          for (let t of r) e.push(t);
          r = n.pop();
        }
        (this.map.length = 0), this.index.clear();
      }
    }
    function ix(e, t, n) {
      let r,
        i = this,
        l = 0,
        o = 0;
      return function (e) {
        let t = i.events.length - 1;
        for (; t > -1; ) {
          let { type: e } = i.events[t][1];
          if ("lineEnding" === e || "linePrefix" === e) t--;
          else break;
        }
        let r = t > -1 ? i.events[t][1].type : null,
          l = "tableHead" === r || "tableRow" === r ? y : a;
        return l === y && i.parser.lazy[i.now().line] ? n(e) : l(e);
      };
      function a(t) {
        var n;
        return (
          e.enter("tableHead"),
          e.enter("tableRow"),
          124 === (n = t) || ((r = !0), (o += 1)),
          s(n)
        );
      }
      function s(t) {
        return null === t
          ? n(t)
          : tf(t)
          ? o > 1
            ? ((o = 0),
              (i.interrupt = !0),
              e.exit("tableRow"),
              e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              d)
            : n(t)
          : tm(t)
          ? tk(e, s, "whitespace")(t)
          : ((o += 1), r && ((r = !1), (l += 1)), 124 === t)
          ? (e.enter("tableCellDivider"),
            e.consume(t),
            e.exit("tableCellDivider"),
            (r = !0),
            s)
          : (e.enter("data"), u(t));
      }
      function u(t) {
        return null === t || 124 === t || tp(t)
          ? (e.exit("data"), s(t))
          : (e.consume(t), 92 === t ? c : u);
      }
      function c(t) {
        return 92 === t || 124 === t ? (e.consume(t), u) : u(t);
      }
      function d(t) {
        return ((i.interrupt = !1), i.parser.lazy[i.now().line])
          ? n(t)
          : (e.enter("tableDelimiterRow"), (r = !1), tm(t))
          ? tk(
              e,
              h,
              "linePrefix",
              i.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            )(t)
          : h(t);
      }
      function h(t) {
        return 45 === t || 58 === t
          ? p(t)
          : 124 === t
          ? ((r = !0),
            e.enter("tableCellDivider"),
            e.consume(t),
            e.exit("tableCellDivider"),
            f)
          : n(t);
      }
      function f(t) {
        return tm(t) ? tk(e, p, "whitespace")(t) : p(t);
      }
      function p(t) {
        return 58 === t
          ? ((o += 1),
            (r = !0),
            e.enter("tableDelimiterMarker"),
            e.consume(t),
            e.exit("tableDelimiterMarker"),
            m)
          : 45 === t
          ? ((o += 1), m(t))
          : null === t || tf(t)
          ? x(t)
          : n(t);
      }
      function m(t) {
        return 45 === t
          ? (e.enter("tableDelimiterFiller"),
            (function t(n) {
              return 45 === n
                ? (e.consume(n), t)
                : 58 === n
                ? ((r = !0),
                  e.exit("tableDelimiterFiller"),
                  e.enter("tableDelimiterMarker"),
                  e.consume(n),
                  e.exit("tableDelimiterMarker"),
                  g)
                : (e.exit("tableDelimiterFiller"), g(n));
            })(t))
          : n(t);
      }
      function g(t) {
        return tm(t) ? tk(e, x, "whitespace")(t) : x(t);
      }
      function x(i) {
        if (124 === i) return h(i);
        if (null === i || tf(i))
          return r && l === o
            ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(i))
            : n(i);
        return n(i);
      }
      function y(t) {
        return e.enter("tableRow"), k(t);
      }
      function k(n) {
        return 124 === n
          ? (e.enter("tableCellDivider"),
            e.consume(n),
            e.exit("tableCellDivider"),
            k)
          : null === n || tf(n)
          ? (e.exit("tableRow"), t(n))
          : tm(n)
          ? tk(e, k, "whitespace")(n)
          : (e.enter("data"), b(n));
      }
      function b(t) {
        return null === t || 124 === t || tp(t)
          ? (e.exit("data"), k(t))
          : (e.consume(t), 92 === t ? v : b);
      }
      function v(t) {
        return 92 === t || 124 === t ? (e.consume(t), b) : b(t);
      }
    }
    function iy(e, t) {
      let n,
        r,
        i,
        l = -1,
        o = !0,
        a = 0,
        s = [0, 0, 0, 0],
        u = [0, 0, 0, 0],
        c = !1,
        d = 0,
        h = new ig();
      for (; ++l < e.length; ) {
        let f = e[l],
          p = f[1];
        "enter" === f[0]
          ? "tableHead" === p.type
            ? ((c = !1),
              0 !== d && (ib(h, t, d, n, r), (r = void 0), (d = 0)),
              (n = {
                type: "table",
                start: Object.assign({}, p.start),
                end: Object.assign({}, p.end),
              }),
              h.add(l, 0, [["enter", n, t]]))
            : "tableRow" === p.type || "tableDelimiterRow" === p.type
            ? ((o = !0),
              (i = void 0),
              (s = [0, 0, 0, 0]),
              (u = [0, l + 1, 0, 0]),
              c &&
                ((c = !1),
                (r = {
                  type: "tableBody",
                  start: Object.assign({}, p.start),
                  end: Object.assign({}, p.end),
                }),
                h.add(l, 0, [["enter", r, t]])),
              (a = "tableDelimiterRow" === p.type ? 2 : r ? 3 : 1))
            : a &&
              ("data" === p.type ||
                "tableDelimiterMarker" === p.type ||
                "tableDelimiterFiller" === p.type)
            ? ((o = !1),
              0 === u[2] &&
                (0 !== s[1] &&
                  ((u[0] = u[1]),
                  (i = ik(h, t, s, a, void 0, i)),
                  (s = [0, 0, 0, 0])),
                (u[2] = l)))
            : "tableCellDivider" === p.type &&
              (o
                ? (o = !1)
                : (0 !== s[1] &&
                    ((u[0] = u[1]), (i = ik(h, t, s, a, void 0, i))),
                  (u = [(s = u)[1], l, 0, 0])))
          : "tableHead" === p.type
          ? ((c = !0), (d = l))
          : "tableRow" === p.type || "tableDelimiterRow" === p.type
          ? ((d = l),
            0 !== s[1]
              ? ((u[0] = u[1]), (i = ik(h, t, s, a, l, i)))
              : 0 !== u[1] && (i = ik(h, t, u, a, l, i)),
            (a = 0))
          : a &&
            ("data" === p.type ||
              "tableDelimiterMarker" === p.type ||
              "tableDelimiterFiller" === p.type) &&
            (u[3] = l);
      }
      for (
        0 !== d && ib(h, t, d, n, r), h.consume(t.events), l = -1;
        ++l < t.events.length;

      ) {
        let e = t.events[l];
        "enter" === e[0] &&
          "table" === e[1].type &&
          (e[1]._align = (function (e, t) {
            let n = !1,
              r = [];
            for (; t < e.length; ) {
              let i = e[t];
              if (n) {
                if ("enter" === i[0])
                  "tableContent" === i[1].type &&
                    r.push(
                      "tableDelimiterMarker" === e[t + 1][1].type
                        ? "left"
                        : "none"
                    );
                else if ("tableContent" === i[1].type) {
                  if ("tableDelimiterMarker" === e[t - 1][1].type) {
                    let e = r.length - 1;
                    r[e] = "left" === r[e] ? "center" : "right";
                  }
                } else if ("tableDelimiterRow" === i[1].type) break;
              } else
                "enter" === i[0] &&
                  "tableDelimiterRow" === i[1].type &&
                  (n = !0);
              t += 1;
            }
            return r;
          })(t.events, l));
      }
      return e;
    }
    function ik(e, t, n, r, i, l) {
      0 !== n[0] &&
        ((l.end = Object.assign({}, iv(t.events, n[0]))),
        e.add(n[0], 0, [["exit", l, t]]));
      let o = iv(t.events, n[1]);
      if (
        ((l = {
          type:
            1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData",
          start: Object.assign({}, o),
          end: Object.assign({}, o),
        }),
        e.add(n[1], 0, [["enter", l, t]]),
        0 !== n[2])
      ) {
        let i = iv(t.events, n[2]),
          l = iv(t.events, n[3]),
          o = {
            type: "tableContent",
            start: Object.assign({}, i),
            end: Object.assign({}, l),
          };
        if ((e.add(n[2], 0, [["enter", o, t]]), 2 !== r)) {
          let r = t.events[n[2]],
            i = t.events[n[3]];
          if (
            ((r[1].end = Object.assign({}, i[1].end)),
            (r[1].type = "chunkText"),
            (r[1].contentType = "text"),
            n[3] > n[2] + 1)
          ) {
            let t = n[2] + 1,
              r = n[3] - n[2] - 1;
            e.add(t, r, []);
          }
        }
        e.add(n[3] + 1, 0, [["exit", o, t]]);
      }
      return (
        void 0 !== i &&
          ((l.end = Object.assign({}, iv(t.events, i))),
          e.add(i, 0, [["exit", l, t]]),
          (l = void 0)),
        l
      );
    }
    function ib(e, t, n, r, i) {
      let l = [],
        o = iv(t.events, n);
      i && ((i.end = Object.assign({}, o)), l.push(["exit", i, t])),
        (r.end = Object.assign({}, o)),
        l.push(["exit", r, t]),
        e.add(n + 1, 0, l);
    }
    function iv(e, t) {
      let n = e[t],
        r = "enter" === n[0] ? "start" : "end";
      return n[1][r];
    }
    let iw = {
      name: "tasklistCheck",
      tokenize: function (e, t, n) {
        let r = this;
        return function (t) {
          return null === r.previous && r._gfmTasklistFirstContentOfListItem
            ? (e.enter("taskListCheck"),
              e.enter("taskListCheckMarker"),
              e.consume(t),
              e.exit("taskListCheckMarker"),
              i)
            : n(t);
        };
        function i(t) {
          return tp(t)
            ? (e.enter("taskListCheckValueUnchecked"),
              e.consume(t),
              e.exit("taskListCheckValueUnchecked"),
              l)
            : 88 === t || 120 === t
            ? (e.enter("taskListCheckValueChecked"),
              e.consume(t),
              e.exit("taskListCheckValueChecked"),
              l)
            : n(t);
        }
        function l(t) {
          return 93 === t
            ? (e.enter("taskListCheckMarker"),
              e.consume(t),
              e.exit("taskListCheckMarker"),
              e.exit("taskListCheck"),
              o)
            : n(t);
        }
        function o(r) {
          return tf(r)
            ? t(r)
            : tm(r)
            ? e.check({ tokenize: iS }, t, n)(r)
            : n(r);
        }
      },
    };
    function iS(e, t, n) {
      return tk(
        e,
        function (e) {
          return null === e ? n(e) : t(e);
        },
        "whitespace"
      );
    }
    let iC = {};
    var ij = e.i(89664),
      iN = e.i(8734);
    let iE = [
        function (e) {
          let t,
            n,
            r,
            i = e || iC,
            l = this.data(),
            o = l.micromarkExtensions || (l.micromarkExtensions = []),
            a = l.fromMarkdownExtensions || (l.fromMarkdownExtensions = []),
            s = l.toMarkdownExtensions || (l.toMarkdownExtensions = []);
          o.push(
            tl([
              { text: ie },
              {
                document: {
                  91: {
                    name: "gfmFootnoteDefinition",
                    tokenize: ih,
                    continuation: { tokenize: ip },
                    exit: im,
                  },
                },
                text: {
                  91: { name: "gfmFootnoteCall", tokenize: id },
                  93: {
                    name: "gfmPotentialFootnoteCall",
                    add: "after",
                    tokenize: iu,
                    resolveTo: ic,
                  },
                },
              },
              ((t = (i || {}).singleTilde),
              (n = {
                name: "strikethrough",
                tokenize: function (e, n, r) {
                  let i = this.previous,
                    l = this.events,
                    o = 0;
                  return function (a) {
                    return 126 === i &&
                      "characterEscape" !== l[l.length - 1][1].type
                      ? r(a)
                      : (e.enter("strikethroughSequenceTemporary"),
                        (function l(a) {
                          let s = t_(i);
                          if (126 === a)
                            return o > 1 ? r(a) : (e.consume(a), o++, l);
                          if (o < 2 && !t) return r(a);
                          let u = e.exit("strikethroughSequenceTemporary"),
                            c = t_(a);
                          return (
                            (u._open = !c || (2 === c && !!s)),
                            (u._close = !s || (2 === s && !!c)),
                            n(a)
                          );
                        })(a));
                  };
                },
                resolveAll: function (e, t) {
                  let n = -1;
                  for (; ++n < e.length; )
                    if (
                      "enter" === e[n][0] &&
                      "strikethroughSequenceTemporary" === e[n][1].type &&
                      e[n][1]._close
                    ) {
                      let r = n;
                      for (; r--; )
                        if (
                          "exit" === e[r][0] &&
                          "strikethroughSequenceTemporary" === e[r][1].type &&
                          e[r][1]._open &&
                          e[n][1].end.offset - e[n][1].start.offset ==
                            e[r][1].end.offset - e[r][1].start.offset
                        ) {
                          (e[n][1].type = "strikethroughSequence"),
                            (e[r][1].type = "strikethroughSequence");
                          let i = {
                              type: "strikethrough",
                              start: Object.assign({}, e[r][1].start),
                              end: Object.assign({}, e[n][1].end),
                            },
                            l = {
                              type: "strikethroughText",
                              start: Object.assign({}, e[r][1].end),
                              end: Object.assign({}, e[n][1].start),
                            },
                            o = [
                              ["enter", i, t],
                              ["enter", e[r][1], t],
                              ["exit", e[r][1], t],
                              ["enter", l, t],
                            ],
                            a = t.parser.constructs.insideSpan.null;
                          a && tn(o, o.length, 0, tO(a, e.slice(r + 1, n), t)),
                            tn(o, o.length, 0, [
                              ["exit", l, t],
                              ["enter", e[n][1], t],
                              ["exit", e[n][1], t],
                              ["exit", i, t],
                            ]),
                            tn(e, r - 1, n - r + 3, o),
                            (n = r + o.length - 2);
                          break;
                        }
                    }
                  for (n = -1; ++n < e.length; )
                    "strikethroughSequenceTemporary" === e[n][1].type &&
                      (e[n][1].type = "data");
                  return e;
                },
              }),
              null == t && (t = !0),
              {
                text: { 126: n },
                insideSpan: { null: [n] },
                attentionMarkers: { null: [126] },
              }),
              {
                flow: { null: { name: "table", tokenize: ix, resolveAll: iy } },
              },
              { text: { 91: iw } },
            ])
          ),
            a.push([
              {
                transforms: [rS],
                enter: {
                  literalAutolink: rx,
                  literalAutolinkEmail: ry,
                  literalAutolinkHttp: ry,
                  literalAutolinkWww: ry,
                },
                exit: {
                  literalAutolink: rw,
                  literalAutolinkEmail: rv,
                  literalAutolinkHttp: rk,
                  literalAutolinkWww: rb,
                },
              },
              {
                enter: {
                  gfmFootnoteCallString: rE,
                  gfmFootnoteCall: rT,
                  gfmFootnoteDefinitionLabelString: rP,
                  gfmFootnoteDefinition: rA,
                },
                exit: {
                  gfmFootnoteCallString: rI,
                  gfmFootnoteCall: rD,
                  gfmFootnoteDefinitionLabelString: rM,
                  gfmFootnoteDefinition: rL,
                },
              },
              {
                canContainEols: ["delete"],
                enter: { strikethrough: rR },
                exit: { strikethrough: rB },
              },
              {
                enter: {
                  table: rW,
                  tableData: rX,
                  tableHeader: rX,
                  tableRow: rG,
                },
                exit: {
                  codeText: rQ,
                  table: rK,
                  tableData: rY,
                  tableHeader: rY,
                  tableRow: rY,
                },
              },
              {
                exit: {
                  taskListCheckValueChecked: rZ,
                  taskListCheckValueUnchecked: rZ,
                  paragraph: r0,
                },
              },
            ]),
            s.push({
              extensions: [
                {
                  unsafe: [
                    {
                      character: "@",
                      before: "[+\\-.\\w]",
                      after: "[\\-.\\w]",
                      inConstruct: rm,
                      notInConstruct: rg,
                    },
                    {
                      character: ".",
                      before: "[Ww]",
                      after: "[\\-.\\w]",
                      inConstruct: rm,
                      notInConstruct: rg,
                    },
                    {
                      character: ":",
                      before: "[ps]",
                      after: "\\/",
                      inConstruct: rm,
                      notInConstruct: rg,
                    },
                  ],
                },
                ((r = !1),
                i && i.firstLineBlank && (r = !0),
                {
                  handlers: {
                    footnoteDefinition: function (e, t, n, i) {
                      let l = n.createTracker(i),
                        o = l.move("[^"),
                        a = n.enter("footnoteDefinition"),
                        s = n.enter("label");
                      return (
                        (o += l.move(
                          n.safe(n.associationId(e), { before: o, after: "]" })
                        )),
                        s(),
                        (o += l.move("]:")),
                        e.children &&
                          e.children.length > 0 &&
                          (l.shift(4),
                          (o += l.move(
                            (r ? "\n" : " ") +
                              n.indentLines(
                                n.containerFlow(e, l.current()),
                                r ? rO : r_
                              )
                          ))),
                        a(),
                        o
                      );
                    },
                    footnoteReference: rz,
                  },
                  unsafe: [
                    {
                      character: "[",
                      inConstruct: ["label", "phrasing", "reference"],
                    },
                  ],
                }),
                {
                  unsafe: [
                    {
                      character: "~",
                      inConstruct: "phrasing",
                      notInConstruct: rF,
                    },
                  ],
                  handlers: { delete: rU },
                },
                (function (e) {
                  let t = e || {},
                    n = t.tableCellPadding,
                    r = t.tablePipeAlign,
                    i = t.stringLength,
                    l = n ? " " : "|";
                  return {
                    unsafe: [
                      { character: "\r", inConstruct: "tableCell" },
                      { character: "\n", inConstruct: "tableCell" },
                      { atBreak: !0, character: "|", after: "[	 :-]" },
                      { character: "|", inConstruct: "tableCell" },
                      { atBreak: !0, character: ":", after: "-" },
                      { atBreak: !0, character: "-", after: "[:|-]" },
                    ],
                    handlers: {
                      inlineCode: function (e, t, n) {
                        let r = r$(e, t, n);
                        return (
                          n.stack.includes("tableCell") &&
                            (r = r.replace(/\|/g, "\\$&")),
                          r
                        );
                      },
                      table: function (e, t, n, r) {
                        return a(
                          (function (e, t, n) {
                            let r = e.children,
                              i = -1,
                              l = [],
                              o = t.enter("table");
                            for (; ++i < r.length; ) l[i] = s(r[i], t, n);
                            return o(), l;
                          })(e, n, r),
                          e.align
                        );
                      },
                      tableCell: o,
                      tableRow: function (e, t, n, r) {
                        let i = a([s(e, n, r)]);
                        return i.slice(0, i.indexOf("\n"));
                      },
                    },
                  };
                  function o(e, t, n, r) {
                    let i = n.enter("tableCell"),
                      o = n.enter("phrasing"),
                      a = n.containerPhrasing(e, { ...r, before: l, after: l });
                    return o(), i(), a;
                  }
                  function a(e, t) {
                    return (function (e, t) {
                      let n = t || {},
                        r = (n.align || []).concat(),
                        i = n.stringLength || rH,
                        l = [],
                        o = [],
                        a = [],
                        s = [],
                        u = 0,
                        c = -1;
                      for (; ++c < e.length; ) {
                        let t = [],
                          r = [],
                          l = -1;
                        for (
                          e[c].length > u && (u = e[c].length);
                          ++l < e[c].length;

                        ) {
                          var d;
                          let o = null == (d = e[c][l]) ? "" : String(d);
                          if (!1 !== n.alignDelimiters) {
                            let e = i(o);
                            (r[l] = e),
                              (void 0 === s[l] || e > s[l]) && (s[l] = e);
                          }
                          t.push(o);
                        }
                        (o[c] = t), (a[c] = r);
                      }
                      let h = -1;
                      if ("object" == typeof r && "length" in r)
                        for (; ++h < u; ) l[h] = rq(r[h]);
                      else {
                        let e = rq(r);
                        for (; ++h < u; ) l[h] = e;
                      }
                      h = -1;
                      let f = [],
                        p = [];
                      for (; ++h < u; ) {
                        let e = l[h],
                          t = "",
                          r = "";
                        99 === e
                          ? ((t = ":"), (r = ":"))
                          : 108 === e
                          ? (t = ":")
                          : 114 === e && (r = ":");
                        let i =
                            !1 === n.alignDelimiters
                              ? 1
                              : Math.max(1, s[h] - t.length - r.length),
                          o = t + "-".repeat(i) + r;
                        !1 !== n.alignDelimiters &&
                          ((i = t.length + i + r.length) > s[h] && (s[h] = i),
                          (p[h] = i)),
                          (f[h] = o);
                      }
                      o.splice(1, 0, f), a.splice(1, 0, p), (c = -1);
                      let m = [];
                      for (; ++c < o.length; ) {
                        let e = o[c],
                          t = a[c];
                        h = -1;
                        let r = [];
                        for (; ++h < u; ) {
                          let i = e[h] || "",
                            o = "",
                            a = "";
                          if (!1 !== n.alignDelimiters) {
                            let e = s[h] - (t[h] || 0),
                              n = l[h];
                            114 === n
                              ? (o = " ".repeat(e))
                              : 99 === n
                              ? e % 2
                                ? ((o = " ".repeat(e / 2 + 0.5)),
                                  (a = " ".repeat(e / 2 - 0.5)))
                                : (a = o = " ".repeat(e / 2))
                              : (a = " ".repeat(e));
                          }
                          !1 === n.delimiterStart || h || r.push("|"),
                            !1 !== n.padding &&
                              (!1 !== n.alignDelimiters || "" !== i) &&
                              (!1 !== n.delimiterStart || h) &&
                              r.push(" "),
                            !1 !== n.alignDelimiters && r.push(o),
                            r.push(i),
                            !1 !== n.alignDelimiters && r.push(a),
                            !1 !== n.padding && r.push(" "),
                            (!1 !== n.delimiterEnd || h !== u - 1) &&
                              r.push("|");
                        }
                        m.push(
                          !1 === n.delimiterEnd
                            ? r.join("").replace(/ +$/, "")
                            : r.join("")
                        );
                      }
                      return m.join("\n");
                    })(e, {
                      align: t,
                      alignDelimiters: r,
                      padding: n,
                      stringLength: i,
                    });
                  }
                  function s(e, t, n) {
                    let r = e.children,
                      i = -1,
                      l = [],
                      a = t.enter("tableRow");
                    for (; ++i < r.length; ) l[i] = o(r[i], e, t, n);
                    return a(), l;
                  }
                })(i),
                {
                  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
                  handlers: { listItem: r1 },
                },
              ],
            });
        },
      ],
      iT = {
        a: ({ href: e, children: t }) =>
          e && /^https?:\/\//i.test(e)
            ? (0, n.jsx)("a", {
                href: e,
                target: "_blank",
                rel: "noreferrer",
                className:
                  "text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame",
                children: t,
              })
            : (0, n.jsx)("span", { children: t }),
        img: ({ alt: e }) =>
          (0, n.jsxs)("span", {
            className: "text-faint",
            children: ["[", e || "image", "]"],
          }),
        pre: function ({ children: e }) {
          let t = (0, r.useRef)(null),
            [i, l] = (0, r.useState)(!1);
          return (0, n.jsxs)("div", {
            className: "relative my-4",
            children: [
              (0, n.jsx)("pre", {
                ref: t,
                className:
                  "overflow-x-auto rounded-2xl border border-line bg-night-2 px-4 pt-11 pb-4 font-mono text-[13.5px] leading-relaxed text-mist sm:pt-4 sm:pr-24",
                children: e,
              }),
              (0, n.jsxs)("button", {
                type: "button",
                onClick: function () {
                  navigator.clipboard
                    ?.writeText(t.current?.textContent ?? "")
                    .then(
                      () => {
                        l(!0), setTimeout(() => l(!1), 1600);
                      },
                      () => {}
                    );
                },
                className:
                  "absolute top-2 right-2 flex items-center gap-1.5 rounded-full border border-line bg-night px-2.5 py-1 text-xs text-hush transition-colors hover:border-line-bright hover:text-mist",
                children: [
                  i
                    ? (0, n.jsx)(ij.Check, { size: 13, "aria-hidden": !0 })
                    : (0, n.jsx)(iN.Copy, { size: 13, "aria-hidden": !0 }),
                  i ? "Copied" : "Copy",
                ],
              }),
            ],
          });
        },
        table: ({ children: e }) =>
          (0, n.jsx)("div", {
            className: "my-4 overflow-x-auto",
            children: (0, n.jsx)("table", { children: e }),
          }),
      },
      iP = (0, r.memo)(function ({ text: e }) {
        return (0,
        n.jsx)("div", { className: "text-[16.5px] leading-[1.75] text-mist/90 break-words [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1 [&_li]:pl-1 [&_li::marker]:text-faint [&_h1]:mt-7 [&_h1]:mb-3 [&_h1]:text-2xl [&_h2]:mt-7 [&_h2]:mb-3 [&_h2]:text-xl [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h4]:mt-5 [&_h4]:mb-2 [&_strong]:font-semibold [&_strong]:text-mist [&_blockquote]:my-4 [&_blockquote]:border-l-2 [&_blockquote]:border-line-bright [&_blockquote]:pl-4 [&_blockquote]:text-hush [&_hr]:my-8 [&_hr]:border-line [&_:not(pre)>code]:rounded-md [&_:not(pre)>code]:bg-night-3 [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:text-[0.88em] [&_table]:w-full [&_table]:text-[15px] [&_th]:border-b [&_th]:border-line-bright [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-medium [&_td]:border-b [&_td]:border-line [&_td]:px-3 [&_td]:py-2", children: (0, n.jsx)(rh, { remarkPlugins: iE, components: iT, children: e }) });
      }),
      iA = [
        "Explain what a GPU does, in two sentences.",
        "Write a four-line poem about a graphics card running hot.",
        "Give me three quick dinner ideas with eggs and rice.",
      ];
    function iI({ messages: e, draft: t, children: i }) {
      let l = (0, r.useRef)(null),
        o = (0, r.useRef)(!0),
        a = (0, r.useRef)(0);
      return (
        (0, r.useEffect)(() => {
          let n = l.current;
          n &&
            (e.length > a.current &&
              e.at(-1)?.role === "user" &&
              (o.current = !0),
            (a.current = e.length),
            o.current && (e.length > 0 || t) && (n.scrollTop = n.scrollHeight));
        }, [e, t]),
        (0, n.jsx)("div", {
          ref: l,
          onScroll: (e) => {
            let t = e.currentTarget;
            o.current = t.scrollHeight - t.scrollTop - t.clientHeight < 48;
          },
          className:
            "relative min-h-0 flex-1 overflow-y-auto overscroll-contain",
          children: (0, n.jsxs)("div", {
            className:
              "mx-auto flex max-w-3xl flex-col gap-9 px-4 py-6 sm:px-6 sm:py-10",
            children: [
              e.map((e, t) => (0, n.jsx)(iD, { m: e }, t)),
              t && (0, n.jsx)(iM, { m: t, chunks: t.chunks }),
              i,
            ],
          }),
        })
      );
    }
    let iD = (0, r.memo)(function ({ m: e }) {
      return "assistant" === e.role
        ? (0, n.jsx)(iM, { m: e })
        : (0, n.jsxs)("div", {
            className:
              "max-w-[85%] self-end rounded-3xl bg-night-3 px-4 py-2.5 whitespace-pre-wrap break-words text-mist sm:max-w-[75%]",
            children: [
              (0, n.jsx)("span", {
                className: "sr-only",
                children: "You wrote: ",
              }),
              e.content,
            ],
          });
    });
    function iM({ m: e, chunks: t }) {
      return (0, n.jsxs)("div", {
        children: [
          (0, n.jsx)("p", {
            className: "mb-2 text-sm text-faint",
            children: e.model,
          }),
          t
            ? t.length
              ? (0, n.jsx)(P.Trace, { chunks: t })
              : (0, n.jsx)("span", {
                  "aria-hidden": !0,
                  className:
                    "block h-4 w-2 animate-breathe rounded-sm bg-heat-5",
                })
            : e.content && (0, n.jsx)(iP, { text: e.content }),
          e.stopped &&
            (0, n.jsx)("p", {
              className: "mt-3 text-sm text-faint",
              children: "Stopped before the end.",
            }),
          e.error &&
            (0, n.jsx)("p", {
              className: "mt-3 text-sm text-ember",
              children: e.error,
            }),
          (0, n.jsx)(iL, {
            hosts: e.hosts,
            live: !!t,
            mode: e.mode,
            pay: e.pay,
          }),
          e.receipt &&
            (0, n.jsx)(iO, {
              model: e.model,
              r: e.receipt,
              node: e.node,
              pay: e.pay,
            }),
        ],
      });
    }
    function iL({ hosts: e, live: t, mode: r, pay: i }) {
      let l = "bg-heat-4 animate-breathe",
        o = "Watching for network requests while the model answers.";
      if (!t) {
        if (!e) return null;
        (l = e.length ? "bg-ember" : "bg-mint"),
          (o = e.length
            ? `Requests left this tab while the model answered: ${e.join(
                ", "
              )}.`
            : "bittensor" === r
            ? `Your prompt went only ${
                "credits" === i ? "through Inferno's server " : ""
              }to llm.chutes.ai (Bittensor subnet 64).`
            : "network" === r
            ? "Only sealed envelopes left this tab, to the Inferno relay."
            : "Nothing left this tab while the model answered.");
      }
      return (0, n.jsxs)("p", {
        className: (0, C.cn)(
          "mt-4 flex items-baseline gap-2 text-sm",
          t ? "text-heat-4" : "text-hush"
        ),
        children: [
          (0, n.jsx)("span", {
            "aria-hidden": !0,
            className: (0, C.cn)(
              "size-1.5 shrink-0 -translate-y-px rounded-full",
              l
            ),
          }),
          o,
        ],
      });
    }
    let iz = (e) => `${(0, j.formatInt)(e)} ${1 === e ? "token" : "tokens"}`,
      i_ = (e) => (e < 1 ? `${Math.round(1e3 * e)} ms` : `${e.toFixed(1)} s`);
    function iO({ model: e, r: t, node: r, pay: i }) {
      let l = Number.isFinite(t.tps) ? `${t.tps.toFixed(1)} tokens/s` : null,
        o = r && `${(0, j.shortAddress)(r)}'s GPU`,
        a = ((t.promptTokens + t.answerTokens) / 1e3) * W.USD_PER_1K_TOKENS,
        s = t.estimated ? "about " : "",
        u =
          "credits" === i
            ? `Charged ${s}${z(t.usd ?? 0)} in Inferno credits`
            : `Billed to your Chutes account: ~${z(t.usd ?? 0)}`,
        c = i
          ? [
              [
                "Served on",
                "Bittensor subnet 64 (Chutes), confidential compute",
              ],
              ["Model", e],
              ...(t.requestId ? [["Request id", t.requestId]] : []),
              ["Prompt", `${s}${iz(t.promptTokens)}`],
              ["Answer", `${s}${iz(t.answerTokens)}`],
              ["Speed", l ?? "Too short to measure"],
              ["Time to first token", i_(t.firstTokenS)],
              ["Total time", i_(t.totalS)],
              [
                "Cost",
                "credits" === i
                  ? `${u}: Chutes' price plus our planned margin.`
                  : `${u}, at Chutes' listed price. A Chutes plan may cover it.`,
              ],
            ]
          : [
              ["Model", e],
              ...(o
                ? [
                    ["Served by", `${o} (key verified)`],
                    ["GPU", t.gpu || "Not named by the lender's browser"],
                  ]
                : [
                    ["Where it ran", t.gpu ? `Your GPU: ${t.gpu}` : "Your GPU"],
                  ]),
              ["Prompt", `${(0, j.formatInt)(t.promptTokens)} new tokens`],
              ["Answer", iz(t.answerTokens)],
              ["Speed", l ?? "Too short to measure"],
              ["Time to first token", i_(t.firstTokenS)],
              ["Total time", i_(t.totalS)],
              ...(o
                ? [
                    [
                      "Cost",
                      void 0 !== t.usd
                        ? `Charged ${z(
                            t.usd
                          )} in Inferno credits. The lender earns 70% of it.`
                        : `Would cost ${(0, j.formatUsd)(
                            a,
                            a < 0.01 ? 4 : 2
                          )} at launch pricing. Free during the beta.`,
                    ],
                    [
                      "Privacy",
                      "Sealed end to end: the relay only saw ciphertext.",
                    ],
                  ]
                : [["Cost", "Free. It ran on your device."]]),
            ];
      return (0, n.jsxs)("details", {
        className:
          "group mt-3 rounded-2xl border border-dashed border-line-bright text-sm",
        children: [
          (0, n.jsxs)("summary", {
            className:
              "flex cursor-pointer list-none items-center gap-2.5 rounded-2xl px-4 py-2.5 text-hush transition-colors hover:text-mist [&::-webkit-details-marker]:hidden",
            children: [
              (0, n.jsx)(Q.ReceiptText, {
                size: 15,
                "aria-hidden": !0,
                className: "shrink-0 text-faint",
              }),
              (0, n.jsxs)("span", {
                className: "tnum min-w-0 flex-1",
                children: [
                  i
                    ? "Served on Bittensor subnet 64 (Chutes), confidential compute: "
                    : o
                    ? `Served by ${o} (key verified): `
                    : "Your GPU wrote ",
                  s,
                  iz(t.answerTokens),
                  " in ",
                  i_(t.totalS),
                  l && ` at ${l}`,
                  ". ",
                  i
                    ? `${u}.`
                    : o
                    ? void 0 !== t.usd
                      ? `Charged ${z(t.usd)} in credits.`
                      : "Free during the beta."
                    : "Free.",
                ],
              }),
              (0, n.jsx)(X.ChevronDown, {
                size: 15,
                "aria-hidden": !0,
                className:
                  "shrink-0 transition-transform duration-300 group-open:rotate-180",
              }),
            ],
          }),
          (0, n.jsx)("dl", {
            className:
              "tnum grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-1.5 border-t border-dashed border-line-bright px-4 py-3",
            children: c.map(([e, t]) =>
              (0, n.jsxs)(
                "div",
                {
                  className: "contents",
                  children: [
                    (0, n.jsx)("dt", { className: "text-faint", children: e }),
                    (0, n.jsx)("dd", {
                      className: "break-words text-mist",
                      children: t,
                    }),
                  ],
                },
                e
              )
            ),
          }),
        ],
      });
    }
    function iF({ mode: e, ready: t, onPick: r }) {
      let i = "network" === e;
      return (0, n.jsxs)("div", {
        className: "animate-rise",
        children: [
          (0, n.jsxs)("h2", {
            className: "wide text-4xl font-black sm:text-5xl",
            children: [
              "Ask anything.",
              " ",
              (0, n.jsx)("span", {
                className: "block",
                children: i
                  ? "It runs on a lender's GPU."
                  : "bittensor" === e
                  ? "It runs on Bittensor."
                  : "It runs on your GPU.",
              }),
            ],
          }),
          "bittensor" === e
            ? (0, n.jsxs)("p", {
                className: "mt-5 max-w-xl text-hush",
                children: [
                  "Open models answer from Bittensor subnet 64, run by Chutes. ",
                  L,
                  " Pay with your own Chutes key, or with Inferno credits where this server takes them. Chats are saved only in this browser.",
                  !t && " Pick a model and a way to pay below to start.",
                ],
              })
            : i
            ? (0, n.jsxs)("p", {
                className: "mt-5 max-w-xl text-hush",
                children: [
                  "Pick someone lending a GPU, from the list or by their wallet address. Each message is sealed in this tab so only their node can open it, and the answer comes back sealed to you. You don't need a wallet to ask during the beta, and chats are saved only in this browser.",
                  !t && " Pick a lender below to start.",
                ],
              })
            : (0, n.jsxs)("p", {
                className: "mt-5 max-w-xl text-hush",
                children: [
                  "Your browser downloads an open model once, then your graphics card writes every answer inside this tab. What you type isn't sent anywhere, and chats are saved only in this browser.",
                  !t && " Pick a model below to start.",
                ],
              }),
          (0, n.jsx)("ul", {
            className: "mt-8 grid gap-2 sm:grid-cols-3",
            children: iA.map((e) =>
              (0, n.jsx)(
                "li",
                {
                  children: (0, n.jsx)("button", {
                    type: "button",
                    onClick: () => r(e),
                    className:
                      "h-full w-full rounded-2xl border border-line bg-night-2/60 px-4 py-3 text-left text-[15px] text-hush transition-colors hover:border-flame/60 hover:text-mist",
                    children: e,
                  }),
                },
                e
              )
            ),
          }),
          (0, n.jsx)("p", {
            className: "mt-6 max-w-xl text-sm text-faint",
            children:
              "bittensor" === e
                ? "Every answer comes with a receipt: the subnet and model that wrote it, Chutes' request id, how fast it was, and what it cost."
                : i
                ? "Every answer comes with a receipt: whose GPU wrote it, how fast, and what it cost."
                : "Every answer comes with a receipt: where it ran, how fast, and whether this tab made any network request while the model wrote. That check reads the browser's resource timing for this page and the model's worker, so it shows that nothing went out, not what a request would have carried.",
          }),
        ],
      });
    }
    let iR = {
      name: "hard-drive",
      size: 24,
      node: [
        ["path", { d: "M10 16h.01", key: "1bzywj" }],
        [
          "path",
          {
            d: "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "18tbho",
          },
        ],
        ["path", { d: "M21.946 12.013H2.054", key: "zqlbp7" }],
        ["path", { d: "M6 16h.01", key: "1pmjb7" }],
      ],
    };
    iR.node;
    let iB = (0, o.default)(iR),
      iU = {
        name: "plus",
        size: 24,
        node: [
          ["path", { d: "M5 12h14", key: "1ays0h" }],
          ["path", { d: "M12 5v14", key: "s699le" }],
        ],
      };
    iU.node;
    let iH = (0, o.default)(iU),
      iq = {
        name: "trash",
        size: 24,
        node: [
          ["path", { d: "M10 11v6", key: "nco0om" }],
          ["path", { d: "M14 11v6", key: "outv1u" }],
          [
            "path",
            { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" },
          ],
          ["path", { d: "M3 6h18", key: "d0wm0j" }],
          [
            "path",
            { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" },
          ],
        ],
        aliases: ["trash-2"],
      };
    iq.node;
    let i$ = (0, o.default)(iq);
    function iV({
      chats: e,
      activeId: t,
      storageFull: r,
      onSelect: i,
      onNew: l,
      onDelete: o,
      onClose: a,
    }) {
      return (0, n.jsxs)("div", {
        className: "flex min-h-0 flex-1 flex-col p-3",
        children: [
          (0, n.jsxs)("div", {
            className: "flex items-center justify-between gap-2 px-2 pt-1 pb-3",
            children: [
              (0, n.jsx)("h2", { className: "text-lg", children: "Chats" }),
              a &&
                (0, n.jsx)("button", {
                  type: "button",
                  onClick: a,
                  "aria-label": "Close saved chats",
                  className:
                    "flex h-10 w-10 items-center justify-center rounded-full text-hush hover:text-mist",
                  children: (0, n.jsx)(E.X, { size: 18 }),
                }),
            ],
          }),
          (0, n.jsxs)(T.Button, {
            variant: "quiet",
            onClick: l,
            className: "w-full",
            children: [
              (0, n.jsx)(iH, { size: 16, "aria-hidden": !0 }),
              "New chat",
            ],
          }),
          (0, n.jsx)("nav", {
            "aria-label": "Saved chats",
            className: "-mx-1 mt-3 min-h-0 flex-1 overflow-y-auto px-1",
            children:
              0 === e.length
                ? (0, n.jsx)("p", {
                    className: "px-2 py-3 text-sm text-faint",
                    children: "No saved chats yet.",
                  })
                : (0, n.jsx)("ul", {
                    className: "flex flex-col gap-0.5",
                    children: e.map((e) =>
                      (0, n.jsxs)(
                        "li",
                        {
                          className: "flex items-center gap-1",
                          children: [
                            (0, n.jsx)("button", {
                              type: "button",
                              onClick: () => i(e.id),
                              "aria-current": e.id === t ? "true" : void 0,
                              className: (0, C.cn)(
                                "min-w-0 flex-1 truncate rounded-xl px-3 py-2 text-left text-[15px] transition-colors",
                                e.id === t
                                  ? "bg-night-3 text-mist"
                                  : "text-hush hover:bg-night-3/50 hover:text-mist"
                              ),
                              children: e.title,
                            }),
                            (0, n.jsx)("button", {
                              type: "button",
                              onClick: () => o(e.id),
                              "aria-label": `Delete chat: ${e.title}`,
                              className:
                                "shrink-0 rounded-full p-2 text-faint transition-colors hover:text-ember",
                              children: (0, n.jsx)(i$, { size: 15 }),
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
          }),
          (0, n.jsxs)("div", {
            className: "mt-3 border-t border-line px-2 pt-3 text-sm",
            children: [
              (0, n.jsxs)("p", {
                className: "flex items-center gap-2 text-hush",
                children: [
                  (0, n.jsx)(iB, {
                    size: 15,
                    "aria-hidden": !0,
                    className: "shrink-0",
                  }),
                  "Saved in this browser only",
                ],
              }),
              (0, n.jsx)("p", {
                className: (0, C.cn)("mt-1", r ? "text-ember" : "text-faint"),
                children: r
                  ? "This browser's storage is full, so new messages aren't being saved. Delete old chats to make room."
                  : "Clearing this site's data erases them.",
              }),
            ],
          }),
        ],
      });
    }
    let iW = "inferno.chats",
      iK = [],
      iG = new Set();
    function iY() {
      if (!t)
        try {
          let e = JSON.parse(localStorage.getItem(iW) ?? "[]");
          t = Array.isArray(e)
            ? e.filter(
                (e) => "string" == typeof e?.id && Array.isArray(e.messages)
              )
            : [];
        } catch {
          t = [];
        }
      return t;
    }
    function iX(e) {
      (t = e), iG.forEach((e) => e());
      try {
        return localStorage.setItem(iW, JSON.stringify(e)), !0;
      } catch {
        return !1;
      }
    }
    function iQ(e) {
      iG.add(e);
      let n = (n) => {
        (n.key === iW || null === n.key) && ((t = void 0), e());
      };
      return (
        window.addEventListener("storage", n),
        () => {
          iG.delete(e), window.removeEventListener("storage", n);
        }
      );
    }
    let iJ = [],
      iZ = (e) => (e === location.host ? `${e} (this site)` : e),
      i0 = () => document.getElementById("composer")?.focus();
    function i1() {
      let e = (0, l.useSearchParams)().get("mode");
      return (0, n.jsx)(i2, {
        linked: "network" === e || "bittensor" === e ? e : "private",
      });
    }
    function i2({ linked: e }) {
      var t, l, o, a, s, u, c, d, f;
      let x,
        y,
        b,
        v = (0, r.useSyncExternalStore)(iQ, iY, () => iK),
        C = (0, p.useWebGPU)(),
        E = (0, p.useLocalModel)(),
        T = (0, N.useRemoteModel)(),
        A = (function () {
          let e = (0, r.useRef)(null);
          async function t(t, n, r, i) {
            let l,
              o,
              a = (0, p.toPrompt)(
                n,
                "You are a helpful assistant answering through Inferno on Bittensor subnet 64. Answer plainly and kindly. Keep answers short unless asked for more, and use Markdown when it helps."
              ),
              s = new AbortController();
            e.current = s;
            let u = (0, m.watchRequests)(),
              c = () =>
                u().filter(
                  (e) => e !== new URL(g.CHUTES).host && e !== location.host
                ),
              d = performance.now(),
              h = 0,
              f = 0,
              x = "",
              y = "";
            try {
              let e = await fetch(
                "key" === r
                  ? `${g.CHUTES}/chat/completions`
                  : "/api/bittensor/chat",
                {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                    ...("key" === r && { authorization: `Bearer ${k()}` }),
                  },
                  body: JSON.stringify(
                    "key" === r
                      ? {
                          model: t.id,
                          messages: a,
                          stream: !0,
                          stream_options: { include_usage: !0 },
                          max_tokens: g.MAX_TOKENS,
                        }
                      : { model: t.id, messages: a }
                  ),
                  signal: s.signal,
                }
              ).catch((e) => {
                if (s.signal.aborted) return null;
                throw Error(
                  "key" === r
                    ? "Couldn't reach Chutes (llm.chutes.ai). Check your connection and try again."
                    : "Couldn't reach Inferno's server. Check your connection and try again.",
                  { cause: e }
                );
              });
              if (!e) return { hosts: c(), stopped: !0, gpu: "" };
              if (!e.ok) throw Error(await S(e, r));
              let n = (0, g.sseReader)((e) => {
                  let t = (0, g.parseChunk)(e);
                  if (
                    ((o = t.usage ?? o),
                    (l = t.finish ?? l),
                    !t.text && !t.thought)
                  )
                    return;
                  let n = performance.now();
                  (h ||= n),
                    f++,
                    (x += t.text),
                    (y += t.text + t.thought),
                    t.text && i(t.text, f > 1 ? (f - 1) / ((n - h) / 1e3) : 0);
                }),
                u = e.body?.getReader(),
                p = !1;
              try {
                for (let e = await u?.read(); e && !e.done; e = await u?.read())
                  n(e.value);
              } catch {
                p = !s.signal.aborted;
              }
              let m = performance.now(),
                b = o ?? {
                  prompt_tokens: (0, g.estimateTokens)(JSON.stringify(a)),
                  completion_tokens: (0, g.estimateTokens)(y),
                },
                v = {
                  promptTokens: b.prompt_tokens,
                  answerTokens: b.completion_tokens,
                  tps: f > 1 ? b.completion_tokens / ((m - h) / 1e3) : NaN,
                  firstTokenS: ((h || m) - d) / 1e3,
                  totalS: (m - d) / 1e3,
                };
              return {
                hosts: c(),
                stopped: s.signal.aborted || p || "length" === l,
                gpu: "",
                stats: v,
                bill: {
                  usd:
                    "credits" === r
                      ? (0, g.creditsMicroUsd)(t, b) / 1e6
                      : (0, g.costUsd)(t, b),
                  estimated: !o || void 0,
                  requestId: e.headers.get("x-chutes-invocationid") || void 0,
                },
                error: p
                  ? "The answer broke off: the connection dropped. Try again."
                  : x || s.signal.aborted
                  ? void 0
                  : "No answer came back. Thinking models can spend the whole 1,024-token budget before they write, so try again or pick another model.",
              };
            } catch (e) {
              throw (u(), e);
            } finally {
              e.current = null;
            }
          }
          return (
            (0, r.useEffect)(() => () => e.current?.abort(), []),
            { generate: t, stop: () => e.current?.abort() }
          );
        })(),
        [I, M] = (0, r.useState)(e),
        [z, _] = (0, r.useState)(null),
        [O, R] = (0, r.useState)(null),
        [B, H] = (0, r.useState)("key"),
        q = w(),
        $ = (function (e) {
          let [t, n] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              if (!e) return;
              let t = !0;
              return (
                fetch("/api/credits/config")
                  .then((e) => (e.ok ? e.json() : null))
                  .then((e) => t && n(e?.enabled === !0))
                  .catch(() => t && n(!1)),
                () => {
                  t = !1;
                }
              );
            }, [e]),
            t
          );
        })("bittensor" === I),
        [V, W] = (0, r.useState)(null),
        [K, Y] = (0, r.useState)(null),
        [X, Q] = (0, r.useState)(""),
        [J, Z] = (0, r.useState)(!1),
        [ee, et] = (0, r.useState)(!1),
        en = (0, r.useRef)(null),
        { status: er } = E,
        ei = v.find((e) => e.id === V) ?? null,
        el = ei?.messages ?? iJ,
        eo = null !== K,
        ea = $ ? B : "key",
        es =
          "network" === I
            ? null !== z
            : "bittensor" === I
            ? null !== O && ("credits" === ea || "" !== q)
            : "ready" === er.state,
        eu =
          "ready" === er.state || "loading" === er.state
            ? (0, p.modelName)(er.model)
            : "",
        ec = !es || J,
        ed = "network" === I ? T.stop : "bittensor" === I ? A.stop : E.stop,
        eh = (e) => et(!iX([e, ...iY().filter((t) => t.id !== e.id)]));
      async function ef() {
        let e,
          t = X.trim(),
          n = "network" === I ? z : null,
          r = "bittensor" === I && es ? O : null,
          l =
            "private" === I && "ready" === er.state
              ? (0, p.modelName)(er.model)
              : null,
          o = r?.id ?? n?.modelName ?? l;
        if (!t || eo || null === o) return;
        let a = ei?.id ?? crypto.randomUUID(),
          s = ei?.title ?? t.replace(/\s+/g, " ").slice(0, 60),
          u = [...el, { role: "user", content: t }];
        eh({ id: a, title: s, messages: u }), W(a), Q(""), Z(!1), i0();
        let c = r ? ea : void 0,
          d = { chatId: a, role: "assistant", model: o, mode: I, pay: c };
        Y({ ...d, content: "", chunks: [] });
        let h = "",
          f = [],
          m = (e, t) => {
            (h += e),
              f.push({ text: e, tps: t }),
              Y({ ...d, content: h, chunks: [...f] });
          };
        try {
          let t = r
            ? await A.generate(r, u, ea, m)
            : n
            ? await T.generate(a, n, u, m, (e) =>
                Y((t) => t && { ...t, ahead: e })
              )
            : await E.generate((0, p.toPrompt)(u), m);
          e = {
            role: "assistant",
            content: h,
            model: o,
            mode: I,
            pay: c,
            node: n?.address,
            hosts: t.hosts.map(iZ),
            stopped: t.stopped || void 0,
            error: t.error,
            receipt: t.stats && {
              ...t.stats,
              gpu: t.gpu ?? ("ok" === C.state ? C.name : ""),
              ...t.bill,
            },
          };
        } catch (r) {
          let t = r instanceof Error ? r.message : String(r);
          r instanceof N.LenderGone && _(null),
            (e = {
              role: "assistant",
              content: h,
              model: o,
              mode: I,
              pay: c,
              node: n?.address,
              error: "private" === I ? (0, p.friendlyError)(t) : t,
            });
        }
        (0, i.flushSync)(() => {
          Y(null),
            iY().some((e) => e.id === a) &&
              eh({ id: a, title: s, messages: [...u, e] });
        });
      }
      let ep = {
        chats: v,
        activeId: V,
        storageFull: ee,
        onSelect: (e) => {
          W(e), en.current?.close();
        },
        onNew: () => {
          W(null), en.current?.close(), i0();
        },
        onDelete: function (e) {
          window.confirm(
            "Delete this chat? It is saved only in this browser, so it can't be brought back."
          ) &&
            (K?.chatId === e && ed(),
            et(!iX(iY().filter((t) => t.id !== e))),
            V === e && W(null));
        },
      };
      return (0, n.jsxs)("div", {
        className: "flex h-full",
        children: [
          (0, n.jsx)("aside", {
            className:
              "hidden w-64 shrink-0 flex-col border-r border-line bg-night-2/40 md:flex",
            children: (0, n.jsx)(iV, { ...ep }),
          }),
          (0, n.jsx)("dialog", {
            ref: en,
            onClick: (e) =>
              e.target === e.currentTarget && e.currentTarget.close(),
            className:
              "m-0 h-dvh max-h-none w-80 max-w-[85vw] border-r border-line bg-night-2 p-0 text-mist backdrop:bg-night/70",
            children: (0, n.jsx)("div", {
              className: "flex h-full flex-col",
              children: (0, n.jsx)(iV, {
                ...ep,
                onClose: () => en.current?.close(),
              }),
            }),
          }),
          (0, n.jsxs)("div", {
            className: "flex min-w-0 flex-1 flex-col",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "flex flex-wrap items-center gap-2 border-b border-line px-3 py-2.5 sm:px-5",
                children: [
                  (0, n.jsx)("button", {
                    type: "button",
                    onClick: () => en.current?.showModal(),
                    "aria-label": "Show saved chats",
                    className:
                      "flex h-10 w-10 items-center justify-center rounded-full text-hush hover:text-mist md:hidden",
                    children: (0, n.jsx)(h, { size: 18 }),
                  }),
                  (0, n.jsx)(i5, {
                    mode: I,
                    disabled: eo,
                    onChange: (e) => {
                      M(e), Z(!1);
                    },
                    className: "order-last w-full sm:order-none sm:w-auto",
                  }),
                  (0, n.jsx)(i3, {
                    ...("network" === I
                      ? ((t = z),
                        (l = eo),
                        (x = t
                          ? `${t.modelName} on ${(0, j.shortAddress)(
                              t.address
                            )}`
                          : "No lender picked"),
                        {
                          label: t && l ? `${x} is writing` : x,
                          dot: l ? i6 : t ? "bg-mint" : "bg-faint",
                          ready: null !== t,
                          change: "Change lender",
                        })
                      : "bittensor" === I
                      ? ((o = O),
                        (a = es),
                        (s = eo),
                        (y = o ? `${o.name} on Bittensor` : "No model picked"),
                        {
                          label: s ? `${y} is writing` : y,
                          dot: s ? i6 : a ? "bg-mint" : "bg-faint",
                          ready: a,
                          change: "Change model or payment",
                        })
                      : ((u = C),
                        (c = er),
                        (d = eu),
                        (f = eo),
                        (b = "ready" === c.state),
                        {
                          label:
                            "missing" === u.state
                              ? "WebGPU unavailable"
                              : "loading" === c.state
                              ? `Loading ${d}`
                              : b
                              ? f
                                ? `${d} is writing`
                                : d
                              : "error" === c.state
                              ? "The model didn't load"
                              : "No model loaded",
                          dot:
                            "loading" === c.state || f
                              ? i6
                              : b
                              ? "bg-mint"
                              : "error" === c.state || "missing" === u.state
                              ? "bg-ember"
                              : "bg-faint",
                          ready: b,
                          change: "Change model",
                        })),
                    busy: eo,
                    open: ec,
                    onToggle: () => Z((e) => !e),
                  }),
                  "bittensor" === I &&
                    (0, n.jsx)("p", {
                      className:
                        "order-last w-full px-1 text-xs leading-snug text-hush sm:text-sm sm:leading-normal",
                      children: L,
                    }),
                ],
              }),
              (0, n.jsxs)(
                iI,
                {
                  messages: el,
                  draft: K?.chatId === V ? K : null,
                  children: [
                    0 === el.length &&
                      (0, n.jsx)(iF, {
                        mode: I,
                        ready: es,
                        onPick: (e) => {
                          Q(e), i0();
                        },
                      }),
                    ec &&
                      ("network" === I
                        ? (0, n.jsx)(G, {
                            picked: z?.key,
                            onPick: (e) => {
                              _(e), Z(!1), i0();
                            },
                            onClose: es ? () => Z(!1) : void 0,
                          })
                        : "bittensor" === I
                        ? (0, n.jsx)(F, {
                            picked: O?.id,
                            onPick: (e) => {
                              R(e), Z(!1), ("credits" === ea || q) && i0();
                            },
                            pay: ea,
                            onPay: H,
                            credits: $,
                            onClose: es ? () => Z(!1) : void 0,
                          })
                        : (0, n.jsx)(D, {
                            gpu: C,
                            status: er,
                            onLoad: function (e) {
                              Z(!1), E.load(e);
                            },
                            onClose: es ? () => Z(!1) : void 0,
                          })),
                  ],
                },
                V ?? "new"
              ),
              (0, n.jsx)("div", {
                className:
                  "shrink-0 border-t border-line px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6",
                children: (0, n.jsxs)("div", {
                  className: "mx-auto max-w-3xl",
                  children: [
                    (0, n.jsx)(U, {
                      value: X,
                      onChange: Q,
                      onSend: ef,
                      onStop: ed,
                      busy: eo,
                      disabled: !es,
                      placeholder: es
                        ? "Ask anything"
                        : "network" === I
                        ? "Pick a lender to start"
                        : "bittensor" === I
                        ? O
                          ? "Add your Chutes key to start"
                          : "Pick a model to start"
                        : "missing" === C.state
                        ? "Private mode needs WebGPU in this browser"
                        : "Load a model to start",
                    }),
                    (0, n.jsx)("div", {
                      className: "mt-2 flex h-5 items-center px-3 text-xs",
                      children: K
                        ? (0, n.jsx)(P.HeatMeter, {
                            tps: K.chunks.at(-1)?.tps ?? 0,
                            ahead: K.ahead,
                          })
                        : (0, n.jsx)("p", {
                            className: "text-faint",
                            children:
                              "Enter sends. Shift and Enter adds a line.",
                          }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
    }
    let i4 = [
      {
        mode: "bittensor",
        Icon: function ({ size: e, className: t }) {
          return (0, n.jsx)("span", {
            style: { fontSize: e },
            className: t,
            children: (0, n.jsx)(f.Tau, {}),
          });
        },
        name: "Bittensor",
        more: "sealed miners",
        tag: "SN64",
      },
      { mode: "private", Icon: s, name: "Private", more: "on this device" },
      {
        mode: "network",
        Icon: c,
        name: "Network",
        more: "GPUs people lend",
        tag: "Beta",
      },
    ];
    function i5({ mode: e, disabled: t, onChange: r, className: i }) {
      return (0, n.jsx)("div", {
        role: "group",
        "aria-label": "Where answers run",
        className: (0, C.cn)(
          "flex rounded-full border border-line p-1 text-sm",
          i
        ),
        children: i4.map((i) =>
          (0, n.jsxs)(
            "button",
            {
              type: "button",
              "aria-pressed": i.mode === e,
              disabled: t,
              onClick: () => r(i.mode),
              title: "bittensor" === i.mode ? L : void 0,
              className: (0, C.cn)(
                "flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 transition-colors sm:flex-none sm:gap-2 sm:px-3",
                i.mode === e
                  ? "bg-night-3 text-mist"
                  : "text-hush enabled:hover:text-mist disabled:text-faint"
              ),
              children: [
                (0, n.jsx)(i.Icon, {
                  size: 15,
                  "aria-hidden": !0,
                  className: (0, C.cn)(
                    "hidden shrink-0 sm:block",
                    i.mode === e && "text-flame"
                  ),
                }),
                (0, n.jsxs)("span", {
                  children: [
                    i.name,
                    (0, n.jsxs)("span", {
                      className: "sr-only xl:not-sr-only",
                      children: [": ", i.more],
                    }),
                  ],
                }),
                "tag" in i &&
                  (0, n.jsx)("span", {
                    className:
                      "rounded-full border border-line px-1.5 py-0.5 text-xs sm:px-2",
                    children: i.tag,
                  }),
              ],
            },
            i.mode
          )
        ),
      });
    }
    function i3({
      label: e,
      dot: t,
      ready: r,
      change: i,
      busy: l,
      open: o,
      onToggle: a,
    }) {
      return (0, n.jsxs)("button", {
        type: "button",
        onClick: a,
        disabled: !r || l,
        "aria-expanded": r ? o : void 0,
        "aria-label": r && !l ? `${e}. ${i}` : void 0,
        className:
          "ml-auto flex min-h-10 min-w-0 items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm text-hush transition-colors enabled:hover:border-line-bright enabled:hover:text-mist",
        children: [
          (0, n.jsx)("span", {
            "aria-hidden": !0,
            className: (0, C.cn)("size-2 shrink-0 rounded-full", t),
          }),
          (0, n.jsx)("span", { className: "truncate", children: e }),
        ],
      });
    }
    let i6 = "bg-heat-4 animate-breathe";
    e.s(
      [
        "ChatApp",
        0,
        function () {
          return (0, n.jsx)(r.Suspense, {
            fallback: (0, n.jsx)(i2, { linked: "private" }),
            children: (0, n.jsx)(i1, {}),
          });
        },
      ],
      20256
    );
  },
]);
