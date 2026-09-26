(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  98988,
  (e) => {
    e.v({
      chunk: "Heat-module__UuEXwq__chunk",
      cool: "Heat-module__UuEXwq__cool",
    });
  },
  11071,
  (e) => {
    "use strict";
    var t = e.i(18050),
      n = e.i(45060),
      r = e.i(98988);
    let s = (e) => Math.min(1, Math.sqrt(Math.max(0, e) / 80));
    function a({ value: e, className: r, ...s }) {
      return (0, t.jsx)("div", {
        className: (0, n.cn)(
          "h-1.5 overflow-hidden rounded-full bg-night-3",
          r
        ),
        ...s,
        children: (0, t.jsx)("div", {
          className:
            "heat-fill h-full transition-[clip-path] duration-500 ease-quiet",
          style: { clipPath: `inset(0 ${(1 - e) * 100}% 0 0 round 9999px)` },
        }),
      });
    }
    e.s([
      "HeatBar",
      0,
      a,
      "HeatMeter",
      0,
      function ({ tps: e, ahead: n = 0 }) {
        return (0, t.jsxs)("div", {
          className: "flex w-full min-w-0 items-center gap-3",
          children: [
            (0, t.jsx)("span", {
              className: "shrink-0 text-faint",
              children: "Speed",
            }),
            (0, t.jsx)(a, {
              value: s(e),
              "aria-hidden": !0,
              className: "min-w-0 flex-1",
            }),
            (0, t.jsx)("span", {
              className: "tnum shrink-0 text-hush",
              children:
                e > 0
                  ? `${e.toFixed(1)} tokens/s`
                  : n > 0
                  ? `Waiting behind ${n} ${1 === n ? "other" : "others"}`
                  : "Reading your message",
            }),
          ],
        });
      },
      "Trace",
      0,
      function ({ chunks: e }) {
        return (0, t.jsx)("p", {
          className:
            "text-[16.5px] leading-[1.75] break-words whitespace-pre-wrap text-mist/90",
          children: e.map((e, n) =>
            (0, t.jsx)(
              "span",
              {
                className: r.default.chunk,
                style: { "--heat": s(e.tps) },
                children: e.text,
              },
              n
            )
          ),
        });
      },
    ]);
  },
  46366,
  (e) => {
    "use strict";
    var t = e.i(18050),
      n = e.i(71645),
      r = e.i(89664),
      s = e.i(8734),
      a = e.i(82022),
      i = e.i(56420);
    let o = {
      name: "refresh-cw",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc",
          },
        ],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
        [
          "path",
          {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3",
          },
        ],
        ["path", { d: "M8 16H3v5", key: "1cv678" }],
      ],
    };
    o.node;
    let l = (0, i.default)(o);
    var c = e.i(44616),
      d = e.i(59544),
      u = e.i(99),
      h = e.i(62528),
      m = e.i(15092),
      f = e.i(75379),
      p = e.i(87287),
      x = e.i(59177);
    let w = { bittensor: "Bittensor answer", network: "Network answer" },
      g = (e) =>
        new Date(e).toLocaleString(void 0, {
          dateStyle: "medium",
          timeStyle: "short",
        });
    function y({ title: e, empty: n, children: r }) {
      return (0, t.jsxs)("div", {
        children: [
          (0, t.jsx)("h3", { className: "text-2xl", children: e }),
          r.length
            ? (0, t.jsx)("ul", {
                className: "mt-4 border-b border-line",
                children: r,
              })
            : (0, t.jsx)("p", {
                className: "mt-4 border-t border-line pt-4 text-hush",
                children: n,
              }),
        ],
      });
    }
    let b =
      "flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line py-4";
    e.s(
      [
        "CopyButton",
        0,
        function ({ text: e, label: a }) {
          let [i, o] = (0, n.useState)(!1);
          return (0, t.jsxs)("button", {
            type: "button",
            className: (0, d.buttonClass)({ variant: "quiet" }),
            onClick: () => {
              navigator.clipboard
                ?.writeText(e)
                .then(() => {
                  o(!0), setTimeout(() => o(!1), 1400);
                })
                .catch(() => {});
            },
            children: [
              i
                ? (0, t.jsx)(r.Check, {
                    size: 16,
                    className: "text-mint",
                    "aria-hidden": !0,
                  })
                : (0, t.jsx)(s.Copy, { size: 16, "aria-hidden": !0 }),
              i ? "Copied" : a,
            ],
          });
        },
        "CreditsAccount",
        0,
        function () {
          let { address: e } = (0, h.useWallet)(),
            n = (0, p.useMounted)(),
            {
              credits: r,
              busy: s,
              error: i,
              signIn: o,
              signOut: k,
              refresh: v,
            } = (0, x.useCredits)();
          if (!n)
            return (0, t.jsx)("div", {
              className: "h-40 animate-pulse rounded-3xl bg-night-2",
              "aria-hidden": !0,
            });
          if (!e)
            return (0, t.jsxs)("div", {
              className: "flex flex-col items-start gap-5",
              children: [
                (0, t.jsx)("p", {
                  className: "max-w-[56ch] text-lg text-hush",
                  children:
                    "Connect the wallet you pay from to see your balance and spend your credits.",
                }),
                (0, t.jsx)(u.ConnectCta, {
                  label: "Connect a wallet",
                  className: (0, d.buttonClass)({ size: "lg" }),
                }),
              ],
            });
          if (!r)
            return (0, t.jsx)("p", {
              className: "text-hush",
              children: "Loading your credits…",
            });
          if ("off" === r.state)
            return (0, t.jsx)("p", {
              className: "text-lg text-hush",
              children: "Payments aren't switched on for this server yet.",
            });
          if ("error" === r.state)
            return (0, t.jsxs)("div", {
              className: "flex flex-col items-start gap-4",
              children: [
                (0, t.jsx)("p", {
                  className: "text-ember",
                  role: "alert",
                  children: "Couldn't load your credits.",
                }),
                (0, t.jsx)(d.Button, {
                  variant: "quiet",
                  onClick: v,
                  children: "Try again",
                }),
              ],
            });
          if ("out" === r.state)
            return (0, t.jsxs)("div", {
              className: "flex flex-col items-start gap-5",
              children: [
                (0, t.jsxs)("p", {
                  className: "max-w-[56ch] text-lg text-hush",
                  children: [
                    "Sign in with ",
                    (0, t.jsx)("span", {
                      className: "tnum text-mist",
                      children: (0, f.shortAddress)(e),
                    }),
                    " to see your balance and spend your credits. Signing in is free and moves no funds.",
                  ],
                }),
                (0, t.jsx)(d.Button, {
                  size: "lg",
                  disabled: s,
                  onClick: () => void o(),
                  children: s
                    ? "Check your wallet…"
                    : "Sign in with your wallet",
                }),
                i
                  ? (0, t.jsx)("p", {
                      className: "text-sm text-ember",
                      role: "alert",
                      children: (0, u.walletError)(i),
                    })
                  : null,
              ],
            });
          let j = r.me;
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsxs)("p", {
                className: "text-hush",
                children: [
                  "Balance for ",
                  (0, t.jsx)("span", {
                    className: "tnum text-mist",
                    children: (0, f.shortAddress)(j.address),
                  }),
                ],
              }),
              (0, t.jsx)("p", {
                className:
                  "xwide tnum mt-2 font-display text-[clamp(3rem,10vw,6rem)] leading-none font-extrabold",
                children: (0, x.usd)(j.balanceMicroUsd),
              }),
              (0, t.jsxs)("div", {
                className: "mt-6 flex flex-wrap gap-3",
                children: [
                  (0, t.jsxs)(d.Button, {
                    variant: "quiet",
                    onClick: v,
                    children: [
                      (0, t.jsx)(l, { size: 16, "aria-hidden": !0 }),
                      "Refresh",
                    ],
                  }),
                  (0, t.jsx)(d.Button, {
                    variant: "ghost",
                    onClick: () => void k(),
                    children: "Sign out",
                  }),
                ],
              }),
              j.earnedMicroUsd > 0
                ? (0, t.jsxs)("p", {
                    className: "mt-6 max-w-[60ch] text-hush",
                    children: [
                      "Lending your GPU has earned you ",
                      (0, t.jsx)("span", {
                        className: "tnum text-mist",
                        children: (0, x.usd)(j.earnedMicroUsd),
                      }),
                      ", and",
                      " ",
                      (0, t.jsx)("span", {
                        className: "tnum text-mist",
                        children: (0, x.usd)(j.paidMicroUsd),
                      }),
                      " of it has been paid out in USDG so far.",
                    ],
                  })
                : null,
              (0, t.jsxs)("div", {
                className: "mt-14 grid gap-12 lg:grid-cols-2",
                children: [
                  (0, t.jsx)(y, {
                    title: "Recent deposits",
                    empty:
                      "No deposits yet. A transfer shows up here once it's final, about 15 to 20 minutes after you send it.",
                    children: j.deposits.map((e) =>
                      (0, t.jsxs)(
                        "li",
                        {
                          className: b,
                          children: [
                            (0, t.jsxs)("span", {
                              className: "tnum text-mist",
                              children: [
                                ((e, t) => {
                                  let [n, r = ""] = (0, c.formatUnits)(
                                      BigInt(e),
                                      t
                                    ).split("."),
                                    s = r.slice(0, 6).replace(/0+$/, "");
                                  return `${Number(n).toLocaleString("en-US")}${
                                    s ? `.${s}` : ""
                                  }`;
                                })(e.amount, e.decimals),
                                " ",
                                e.symbol,
                              ],
                            }),
                            (0, t.jsx)("span", {
                              className: "tnum text-hush",
                              children: e.funding
                                ? "Treasury funding from an admin wallet, not credited."
                                : `${(0, x.usd)(e.credited)} credited${
                                    e.review
                                      ? ". The rest is over the per-transfer or daily cap and waits for a manual review."
                                      : ""
                                  }`,
                            }),
                            (0, t.jsxs)("a", {
                              className:
                                "inline-flex items-center gap-1.5 text-[13px] text-faint hover:text-mist",
                              href: (0, m.explorerTx)(e.txHash),
                              target: "_blank",
                              rel: "noreferrer",
                              children: [
                                g(e.at),
                                (0, t.jsx)(a.ExternalLink, {
                                  size: 13,
                                  "aria-hidden": !0,
                                }),
                                (0, t.jsx)("span", {
                                  className: "sr-only",
                                  children:
                                    "View the transaction on the explorer",
                                }),
                              ],
                            }),
                          ],
                        },
                        `${e.txHash}-${e.logIndex}`
                      )
                    ),
                  }),
                  (0, t.jsx)(y, {
                    title: "Recent charges",
                    empty: "Nothing spent yet.",
                    children: j.charges.map((e, n) =>
                      (0, t.jsxs)(
                        "li",
                        {
                          className: b,
                          children: [
                            (0, t.jsx)("span", {
                              className: "text-mist",
                              children: w[e.kind] ?? e.kind,
                            }),
                            (0, t.jsx)("span", {
                              className: "tnum text-hush",
                              children: (0, x.usd)(e.microUsd),
                            }),
                            (0, t.jsx)("span", {
                              className: "text-[13px] text-faint",
                              children: g(e.at),
                            }),
                          ],
                        },
                        `${e.at}-${n}`
                      )
                    ),
                  }),
                ],
              }),
            ],
          });
        },
      ],
      46366
    );
  },
  90991,
  (e) => {
    "use strict";
    var t = e.i(18050),
      n = e.i(71645);
    e.s([
      "AnimatedNumber",
      0,
      function ({
        value: e,
        format: r,
        className: s = "",
        durationMs: a = 550,
        flash: i = !1,
      }) {
        let [o, l] = (0, n.useState)(e),
          [c, d] = (0, n.useState)(""),
          u = (0, n.useRef)(e),
          h = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let t,
              n = u.current;
            u.current = e;
            let r = window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches;
            if (void 0 === e || void 0 === n || n === e || r) return void l(e);
            i &&
              (d(e > n ? "flash-up" : "flash-down"),
              (t = setTimeout(() => d(""), 720)));
            let s = performance.now(),
              o = (t) => {
                let r = Math.min(1, (t - s) / a);
                l(n + (e - n) * (1 === r ? 1 : 1 - Math.pow(2, -10 * r))),
                  r < 1 && (h.current = requestAnimationFrame(o));
              };
            return (
              (h.current = requestAnimationFrame(o)),
              () => {
                t && clearTimeout(t),
                  h.current && cancelAnimationFrame(h.current);
              }
            );
          }, [e, a, i]),
          (0, t.jsx)("span", { className: `tnum ${c} ${s}`, children: r(o) })
        );
      },
    ]);
  },
  59544,
  (e) => {
    "use strict";
    var t = e.i(18050),
      n = e.i(22016),
      r = e.i(45060);
    let s = {
        primary: "bg-moon text-night hover:bg-mist",
        quiet:
          "border border-line-bright text-mist hover:border-moon hover:text-moon",
        ghost: "text-hush hover:text-mist",
      },
      a = { md: "h-10 px-5 text-[15px]", lg: "h-12 px-7 text-base" };
    function i({ variant: e = "primary", size: t = "md", className: n } = {}) {
      return (0, r.cn)(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-300 ease-quiet active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        s[e],
        a[t],
        n
      );
    }
    e.s([
      "Button",
      0,
      function ({ variant: e, size: n, className: r, ...s }) {
        return (0, t.jsx)("button", {
          className: i({ variant: e, size: n, className: r }),
          ...s,
        });
      },
      "ButtonLink",
      0,
      function ({ variant: e, size: r, className: s, ...a }) {
        return (0, t.jsx)(n.default, {
          className: i({ variant: e, size: r, className: s }),
          ...a,
        });
      },
      "buttonClass",
      0,
      i,
    ]);
  },
  2279,
  31852,
  75739,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(49965);
    let r = [
      {
        name: "SmolLM2 360M",
        note: "Tiny and quick. Good for short questions and rewording.",
        f16: { id: "SmolLM2-360M-Instruct-q4f16_1-MLC", mb: 376.06 },
        f32: { id: "SmolLM2-360M-Instruct-q4f32_1-MLC", mb: 579.61 },
      },
      {
        name: "Llama 3.2 1B",
        note: "Balanced. A steady writer for everyday questions.",
        f16: { id: "Llama-3.2-1B-Instruct-q4f16_1-MLC", mb: 879.04 },
        f32: { id: "Llama-3.2-1B-Instruct-q4f32_1-MLC", mb: 1128.82 },
      },
      {
        name: "Qwen2.5 1.5B",
        note: "The strongest here. Slower to load, better with reasoning and code.",
        f16: { id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC", mb: 1629.75 },
        f32: { id: "Qwen2.5-1.5B-Instruct-q4f32_1-MLC", mb: 1888.97 },
      },
    ];
    function s(
      e,
      t = "You are a helpful assistant running privately inside the user's own web browser. Answer plainly and kindly. Keep answers short unless asked for more, and use Markdown when it helps."
    ) {
      let n = [],
        r = 0;
      for (let t = e.length - 1; t >= 0; t--) {
        let { role: s, content: a } = e[t];
        if (((r += a.length), n.length > 0 && r > 8e3)) break;
        a && n.unshift({ role: s, content: a });
      }
      return [{ role: "system", content: t }, ...n];
    }
    function a(e) {
      return /device was lost|out of memory|\bOOM\b/i.test(e)
        ? "The graphics card ran out of memory. Try a smaller model, or close other heavy tabs."
        : /model not loaded/i.test(e)
        ? "The model is no longer loaded, often after the graphics card ran low on memory. Load it again."
        : /quota/i.test(e)
        ? "This browser has no room left to store the model. Free some space or pick a smaller model."
        : /fetch|network/i.test(e)
        ? "The download stopped. Check your connection and try again. Finished parts stay cached."
        : /context window/i.test(e)
        ? "That is longer than the model can hold at once. Send something shorter, or start a new chat."
        : `The model hit an error: ${e.slice(0, 200)}`;
    }
    let i = { amd: "AMD", nvidia: "NVIDIA" };
    e.s(
      [
        "MODELS",
        0,
        r,
        "NETWORK_SYSTEM",
        0,
        "You are a helpful assistant answering through the Inferno network. Answer plainly and kindly. Keep answers short unless asked for more, and use Markdown when it helps.",
        "friendlyError",
        0,
        a,
        "modelName",
        0,
        (e) => r.find((t) => t.f16.id === e || t.f32.id === e)?.name ?? e,
        "toPrompt",
        0,
        s,
        "useLocalModel",
        0,
        function () {
          let r = (0, t.useRef)(null),
            s = (0, t.useRef)(null),
            [i, o] = (0, t.useState)({ state: "idle" });
          function l({ data: e }) {
            "progress" === e.type
              ? o((t) =>
                  "loading" === t.state
                    ? { ...t, text: e.text, progress: e.progress }
                    : t
                )
              : "ready" === e.type
              ? o({ state: "ready", model: e.model })
              : "delta" === e.type
              ? s.current?.onDelta(e.text, e.tps)
              : "done" === e.type
              ? s.current?.done(e)
              : s.current
              ? s.current.fail(Error(e.message))
              : o({ state: "error", message: a(e.message) });
          }
          return (
            (0, t.useEffect)(() => () => r.current?.terminate(), []),
            {
              status: i,
              load: function (t) {
                let n = r.current;
                n ||
                  (((n = e.r(65474)(Worker, { type: "module" })).onmessage = l),
                  (n.onerror = (e) => {
                    let t = e.message || "The model worker stopped.";
                    s.current?.fail(Error(t)),
                      o({ state: "error", message: a(t) }),
                      r.current?.terminate(),
                      (r.current = null);
                  }),
                  (r.current = n)),
                  o({
                    state: "loading",
                    model: t,
                    text: "Starting",
                    progress: 0,
                  }),
                  n.postMessage({ type: "load", model: t });
              },
              generate: async function e(e, t) {
                let a = r.current;
                if (!a) throw Error("Model not loaded");
                let i = (0, n.watchRequests)();
                try {
                  let n = await new Promise((n, r) => {
                    (s.current = { onDelta: t, done: n, fail: r }),
                      a.postMessage({ type: "chat", messages: e });
                  });
                  return {
                    hosts: [...new Set([...i(), ...n.hosts])],
                    stopped: n.stopped,
                    stats: n.stats,
                  };
                } catch (e) {
                  throw (i(), e);
                } finally {
                  s.current = null;
                }
              },
              stop: function () {
                r.current?.postMessage({ type: "stop" });
              },
            }
          );
        },
        "useWebGPU",
        0,
        function () {
          let [e, n] = (0, t.useState)({ state: "checking" });
          return (
            (0, t.useEffect)(() => {
              let e = !0;
              return (
                Promise.resolve(
                  navigator.gpu?.requestAdapter({
                    powerPreference: "high-performance",
                  })
                )
                  .then((e) =>
                    e
                      ? {
                          state: "ok",
                          f16: e.features.has("shader-f16"),
                          name: (function ({
                            vendor: e = "",
                            architecture: t = "",
                            description: n = "",
                          } = {}) {
                            return (
                              n ||
                              `${
                                i[e] ?? e.charAt(0).toUpperCase() + e.slice(1)
                              } ${t}`.trim()
                            );
                          })(e.info),
                        }
                      : { state: "missing" }
                  )
                  .catch(() => ({ state: "missing" }))
                  .then((t) => e && n(t)),
                () => {
                  e = !1;
                }
              );
            }, []),
            e
          );
        },
      ],
      2279
    );
    var o = e.i(8178);
    async function l() {
      let e = await fetch("/api/relay/nodes", { cache: "no-store" });
      if (!e.ok) throw Error("The relay didn't answer. Try again in a moment.");
      return (await e.json()).nodes;
    }
    async function c(e) {
      let t = await fetch("/api/relay/nodes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(e),
      });
      if (!t.ok)
        throw Error(
          (await t.json().catch(() => ({}))).error ??
            "The relay refused this node."
        );
    }
    function d(e, t, n) {
      let r,
        s,
        a = 1e3,
        i = !1,
        l = "";
      function c() {
        r?.close(),
          i || (n?.(!1), (s = setTimeout(d, a)), (a = Math.min(2 * a, 15e3)));
      }
      async function d() {
        try {
          let t = await fetch(
            `/api/relay/challenge?key=${encodeURIComponent(e.pub)}`,
            { cache: "no-store" }
          );
          if (!t.ok) throw Error(t.statusText);
          let { id: n, envelope: s } = await t.json(),
            a = (0, o.open)(s, e);
          if (i) return;
          let c = new URLSearchParams({ key: e.pub, id: n, proof: a });
          l && c.set("after", l),
            (r = new EventSource(`/api/relay/stream?${c}`));
        } catch {
          return c();
        }
        let s = (e) => (l = e.lastEventId || l);
        r.addEventListener("ready", s),
          r.addEventListener("bye", () => {
            r?.close(), d();
          }),
          (r.onmessage = (e) => {
            s(e);
            try {
              t(JSON.parse(e.data));
            } catch {}
          }),
          (r.onopen = () => {
            (a = 1e3), n?.(!0);
          }),
          (r.onerror = c);
      }
      return (
        d(),
        () => {
          (i = !0), clearTimeout(s), r?.close();
        }
      );
    }
    async function u(e) {
      let t = () =>
          fetch("/api/relay/send", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(e),
          }),
        n = await t();
      return (
        429 === n.status &&
          (await new Promise((e) =>
            setTimeout(e, 1e3 * (Number(n.headers.get("retry-after")) || 1))
          ),
          (n = await t())),
        202 === n.status
      );
    }
    e.s(
      [
        "announceNode",
        0,
        c,
        "fetchNodes",
        0,
        l,
        "listen",
        0,
        d,
        "sendSealed",
        0,
        u,
      ],
      31852
    );
    let h = null,
      m = () =>
        (h ??= fetch("/api/credits/config", { cache: "no-store" })
          .then((e) => (e.ok ? e.json() : null))
          .then((e) => e?.enabled === !0)
          .catch(() => !1));
    async function f() {
      if (!(await m())) return !1;
      let e = await fetch("/api/credits/me", { cache: "no-store" });
      if (401 === e.status)
        throw Error(
          "Network answers are paid with Inferno credits. Sign in from the wallet menu, then ask again."
        );
      let t = e.ok ? await e.json() : null;
      if (!t || (t.balanceMicroUsd ?? 0) < 2e4)
        throw Error(
          "You're out of credits for network answers. Top up on the Credits page, or use private mode."
        );
      return !0;
    }
    async function p(e, t, n) {
      let r = await fetch("/api/credits/usage", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ref: e,
          lender: t,
          promptTokens: n.promptTokens,
          answerTokens: n.answerTokens,
        }),
      }).catch(() => null);
      if ((window.dispatchEvent(new Event("inferno:credits")), !r?.ok)) return;
      let s = await r.json().catch(() => null);
      return "number" == typeof s?.costMicroUsd
        ? { usd: s.costMicroUsd / 1e6 }
        : void 0;
    }
    class x extends Error {}
    let w = "That lender just went offline. Pick another.",
      g = "The relay didn't answer. Try again in a moment.";
    e.s(
      [
        "LenderGone",
        0,
        x,
        "networkPaid",
        0,
        m,
        "useRemoteModel",
        0,
        function () {
          let e = (0, t.useRef)(new Map()),
            r = (0, t.useRef)(null),
            a = (0, t.useRef)(null);
          function i(e) {
            let t,
              n = a.current;
            if (n && e.from === n.node.key) {
              try {
                t = JSON.parse((0, o.open)(e, n.me));
              } catch {
                return;
              }
              if (t?.id === n.id)
                if ((clearTimeout(n.timer), "accepted" === t.t))
                  n.onAhead(
                    Number.isInteger(t.ahead) && t.ahead > 0 ? t.ahead : 0
                  );
                else if ("chunk" === t.t) {
                  if (
                    "string" != typeof t.text ||
                    !Number.isInteger(t.seq) ||
                    t.seq < n.next
                  )
                    return;
                  n.held.set(t.seq, { text: t.text, tps: Number(t.tps) || 0 });
                  for (let e = n.held.get(n.next); e; e = n.held.get(n.next))
                    n.held.delete(n.next++), n.onDelta(e.text, e.tps);
                } else if ("done" === t.t) {
                  [...n.held]
                    .sort(([e], [t]) => e - t)
                    .forEach(([, e]) => n.onDelta(e.text, e.tps));
                  let e =
                    "string" == typeof t.gpu
                      ? t.gpu.slice(0, 80)
                      : n.node.gpu ?? "";
                  n.done({
                    stopped: !0 === t.stopped,
                    stats: (function (e) {
                      if (!e) return;
                      let {
                          promptTokens: t,
                          answerTokens: n,
                          tps: r,
                          firstTokenS: s,
                          totalS: a,
                        } = e,
                        i = {
                          promptTokens: t,
                          answerTokens: n,
                          tps: r,
                          firstTokenS: s,
                          totalS: a,
                        };
                      return Object.values(i).every(
                        (e) => null === e || "number" == typeof e
                      )
                        ? i
                        : void 0;
                    })(t.stats),
                    gpu: e,
                  });
                } else
                  "error" === t.t &&
                    n.fail(Error(String(t.message).slice(0, 300)));
            }
          }
          return (
            (0, t.useEffect)(
              () => () => {
                r.current?.close(), (r.current = null);
              },
              []
            ),
            {
              generate: async function t(t, l, c, h, m) {
                let y = await f(),
                  b = e.current.get(t) ?? (0, o.newIdentity)();
                e.current.set(t, b);
                let k = (function (e) {
                    if (r.current?.pub !== e.pub) {
                      r.current?.close();
                      let t = () => {},
                        n = new Promise((e) => (t = e));
                      r.current = {
                        pub: e.pub,
                        ready: n,
                        close: d(e, i, (e) => e && t()),
                      };
                    }
                    return r.current.ready;
                  })(b),
                  v = crypto.randomUUID(),
                  j = {
                    t: "infer",
                    id: v,
                    turns: s(c).filter((e) => "system" !== e.role),
                  },
                  N = (e) => new TextEncoder().encode(e).length,
                  T = N(j.turns.map((e) => e.content).join("\n")),
                  S = 0,
                  M = (e, t) => {
                    (S += N(e)), h(e, t);
                  },
                  E = (0, o.seal)(JSON.stringify(j), b, l.key);
                if (E.ct.length > 2e5)
                  throw Error(
                    "That is too long to send to a lender. Send something shorter, or start a new chat."
                  );
                let C = (0, n.watchRequests)();
                try {
                  let e = await new Promise((e, t) => {
                      let n = setTimeout(
                          () =>
                            t(
                              new x(
                                "That lender didn't answer within 10 seconds. Pick another, or try again."
                              )
                            ),
                          1e4
                        ),
                        r = {
                          id: v,
                          me: b,
                          node: l,
                          next: 0,
                          held: new Map(),
                          onDelta: M,
                          onAhead: m,
                          done: e,
                          fail: t,
                          timer: n,
                        };
                      (a.current = r),
                        k
                          .then(() => a.current !== r || u(E))
                          .then(
                            (e) => e || t(new x(w)),
                            () => t(Error(g))
                          );
                    }),
                    t = C().filter((e) => e !== location.host),
                    n = e.stats,
                    r = n && {
                      ...n,
                      promptTokens: Math.min(n.promptTokens, T),
                      answerTokens: Math.min(n.answerTokens, S),
                    },
                    s = y && r ? await p(v, l.address, r) : void 0;
                  return { ...e, hosts: t, bill: s };
                } catch (e) {
                  throw (C(), e);
                } finally {
                  clearTimeout(a.current?.timer), (a.current = null);
                }
              },
              stop: function () {
                let e = a.current;
                e &&
                  (u(
                    (0, o.seal)(
                      JSON.stringify({ t: "stop", id: e.id }),
                      e.me,
                      e.node.key
                    )
                  ).then(
                    (t) => t || e.fail(new x(w)),
                    () => e.fail(Error(g))
                  ),
                  setTimeout(
                    () => e.done({ stopped: !0, gpu: e.node.gpu ?? "" }),
                    3e3
                  ));
              },
            }
          );
        },
      ],
      75739
    );
  },
  49965,
  (e) => {
    "use strict";
    e.s([
      "watchRequests",
      0,
      function () {
        let e = performance.now(),
          t = new Set(),
          n = (n) => {
            for (let r of n) r.startTime >= e && t.add(new URL(r.name).host);
          },
          r = new PerformanceObserver((e) => n(e.getEntries()));
        return (
          r.observe({ type: "resource" }),
          () => (n(r.takeRecords()), r.disconnect(), [...t])
        );
      },
    ]);
  },
  99332,
  (e) => {
    e.q("/_next/static/immutable/media/worker.05kc2pmq72weu.ts");
  },
  74429,
  (e) => {
    "use strict";
    var t = e.i(23838),
      n = e.i(11493);
    function r(e, n, r) {
      return `Inferno node key v1
Address: ${(0, t.getAddress)(e)}
Key: ${n}
Chain: ${r}
This key serves AI answers for this wallet. Signing is free and moves no funds.`;
    }
    async function s(e) {
      try {
        return await (0, n.verifyMessage)({
          address: e.address,
          message: r(e.address, e.key, e.chainId),
          signature: e.signature,
        });
      } catch {
        return !1;
      }
    }
    e.s([
      "HEARTBEAT_MS",
      0,
      1e4,
      "LENDER_SHARE",
      0,
      0.7,
      "USD_PER_1K_TOKENS",
      0,
      0.01,
      "nodeBindingMessage",
      0,
      r,
      "verifyNodeOffer",
      0,
      s,
    ]);
  },
  10914,
  (e) => {
    "use strict";
    e.s([
      "default",
      0,
      function (t, n) {
        return (r, s) =>
          (function (t, n, r, s) {
            let a = "SharedWorker" === t.name,
              i = e.b,
              o = [
                r
                  .map((t) => e.h("string" == typeof t ? t : t.path, i))
                  .reverse(),
                e.X,
                i,
              ],
              l = ["NEXT_DEPLOYMENT_ID", "NEXT_CLIENT_ASSET_SUFFIX"];
            for (let e = 0; e < l.length; e++) o.push(globalThis[l[e]]);
            let c = new URL(e.h(n, i), location.origin),
              d = JSON.stringify(o);
            return (
              a
                ? c.searchParams.set("params", d)
                : (c.hash = "#params=" + encodeURIComponent(d)),
              new t(c, s ? { ...s, type: void 0 } : void 0)
            );
          })(r, t, n, s);
      },
    ]);
  },
  65474,
  (e) => {
    e.v(
      e
        .r(10914)
        .default("static/immutable/chunks/turbopack-worker-2g80pj3ycf14_.js", [
          "static/immutable/chunks/3-kfp983hl4hp.js",
          "static/immutable/chunks/35gegnwf9xbe9.js",
          "static/immutable/chunks/turbopack-247-vtpcj4no5.js",
        ])
    );
  },
]);
