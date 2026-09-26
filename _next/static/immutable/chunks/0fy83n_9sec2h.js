(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  68039,
  (e) => {
    "use strict";
    var t = e.i(18050),
      s = e.i(22016),
      a = e.i(82022),
      n = e.i(56420);
    let r = {
      name: "lock-keyhole",
      size: 24,
      node: [
        ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
        [
          "rect",
          {
            x: "3",
            y: "10",
            width: "18",
            height: "12",
            rx: "2",
            key: "6s8ecr",
          },
        ],
        ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }],
      ],
    };
    r.node;
    let i = (0, n.default)(r);
    var l = e.i(23692),
      o = e.i(89898),
      d = e.i(59544),
      c = e.i(94046),
      h = e.i(27187),
      m = e.i(45060);
    function x({ className: e }) {
      let s =
          "absolute inset-x-[25%] h-[10%] bg-line-bright [mask-image:repeating-linear-gradient(90deg,transparent_0_3.6%,black_3.6%_10.7%,transparent_10.7%_14.286%)]",
        a =
          "absolute inset-y-[25%] w-[10%] bg-line-bright [mask-image:repeating-linear-gradient(180deg,transparent_0_3.6%,black_3.6%_10.7%,transparent_10.7%_14.286%)]";
      return (0, t.jsxs)("figure", {
        className: (0, m.cn)(
          "mx-auto w-full max-w-[20rem] lg:max-w-[28rem]",
          e
        ),
        children: [
          (0, t.jsxs)("div", {
            "aria-hidden": !0,
            className: "@container relative aspect-square",
            children: [
              (0, t.jsx)("span", { className: (0, m.cn)(s, "top-0") }),
              (0, t.jsx)("span", { className: (0, m.cn)(s, "bottom-0") }),
              (0, t.jsx)("span", { className: (0, m.cn)(a, "left-0") }),
              (0, t.jsx)("span", { className: (0, m.cn)(a, "right-0") }),
              (0, t.jsxs)("div", {
                className:
                  "absolute inset-[8%] rounded-[12%] border-2 border-line-bright bg-night-2",
                children: [
                  (0, t.jsx)("span", {
                    className:
                      "absolute top-[7%] left-[7%] size-[4%] rounded-full bg-line-bright",
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "absolute inset-[15%] flex flex-col items-center justify-center overflow-hidden rounded-[10%] border-2 border-dashed border-heat-3/70 bg-night",
                    children: [
                      (0, t.jsx)("span", {
                        className:
                          "absolute inset-0 bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-heat-2)_60%,transparent),transparent_70%)] motion-safe:animate-breathe",
                      }),
                      (0, t.jsx)(l.Tau, {
                        className:
                          "relative text-heat-4 text-[length:26cqi] drop-shadow-[0_0_20px_var(--color-heat-3)] motion-safe:animate-breathe",
                      }),
                      (0, t.jsxs)("span", {
                        className:
                          "relative mt-2 flex items-center gap-1.5 text-[13px] text-hush",
                        children: [(0, t.jsx)(i, { size: 13 }), " Sealed"],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsx)("figcaption", {
            className: "mt-6 text-center text-[15px] text-hush",
            children:
              "Subnet 64 runs each model inside a sealed enclave. The miner owns the hardware but can't look in.",
          }),
        ],
      });
    }
    e.s(
      [
        "BittensorSection",
        0,
        function () {
          let { models: e, loading: n, credits: r } = (0, h.useSubnet)(),
            i = [
              {
                term: "Your own Chutes key",
                status: "Live",
                live: !0,
                detail:
                  "Paste a key from chutes.ai and answers bill your Chutes account, which takes TAO too. The key stays in your browser and goes only to Chutes.",
              },
              {
                term: "Inferno credits",
                status: r ? "Live" : "When payments are on",
                live: r,
                detail: (0, t.jsxs)(t.Fragment, {
                  children: [
                    "Send USDG from your wallet to Inferno on Robinhood Chain, or TAO once the operator switches it on. Each answer costs Chutes' price plus ",
                    Math.round(100 * c.BITTENSOR_MARGIN),
                    "%, our planned margin. The",
                    " ",
                    (0, t.jsx)(s.default, {
                      href: "/credits",
                      className:
                        "text-flame underline decoration-flame/40 underline-offset-4 hover:decoration-flame",
                      children: "credits page",
                    }),
                    " ",
                    "shows what this server takes today.",
                  ],
                }),
              },
            ];
          return (0, t.jsxs)("section", {
            id: "bittensor",
            "aria-labelledby": "bittensor-title",
            className: "mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32",
            children: [
              (0, t.jsx)(o.Title, {
                id: "bittensor-title",
                q: "What powers the answers?",
                children: "Powered by Bittensor.",
              }),
              (0, t.jsxs)("div", {
                className:
                  "mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-12 lg:items-center",
                children: [
                  (0, t.jsx)(x, { className: "lg:order-last lg:col-span-5" }),
                  (0, t.jsxs)("div", {
                    className: "lg:col-span-7",
                    children: [
                      (0, t.jsx)("p", {
                        className: "max-w-[56ch] text-lg text-hush",
                        children:
                          "Bittensor is a decentralized network where miners compete to serve AI. The network pays them in TAO, its own coin.",
                      }),
                      (0, t.jsx)("p", {
                        className: "mt-4 max-w-[56ch] text-lg text-hush",
                        children:
                          "Inferno uses subnet 64, run by Chutes. Every model it lists there runs inside confidential-compute hardware, a sealed enclave that stops the miner reading your prompts.",
                      }),
                      (0, t.jsxs)("p", {
                        className:
                          "mt-10 flex items-center gap-2.5 text-[15px] text-hush",
                        children: [
                          (0, t.jsx)("span", {
                            "aria-hidden": !0,
                            className: (0, m.cn)(
                              "h-1.5 w-1.5 shrink-0 rounded-full",
                              e?.length
                                ? "animate-breathe bg-heat-5"
                                : "bg-faint"
                            ),
                          }),
                          n
                            ? "Asking subnet 64 which models are live…"
                            : null === e
                            ? "Chutes' model list didn't load. The chat asks again when you open it."
                            : 0 === e.length
                            ? "Chutes lists no sealed models right now."
                            : (0, t.jsxs)("span", {
                                children: [
                                  (0, t.jsx)("span", {
                                    className: "tnum text-mist",
                                    children: e.length,
                                  }),
                                  " sealed models live on subnet 64 right now, listed in the strip above.",
                                ],
                              }),
                        ],
                      }),
                      (0, t.jsx)("h3", {
                        className: "mt-12 text-2xl",
                        children: "Two ways to pay",
                      }),
                      (0, t.jsx)("dl", {
                        className: "mt-4 border-b border-line",
                        children: i.map((e) =>
                          (0, t.jsxs)(
                            "div",
                            {
                              className: "border-t border-line py-5",
                              children: [
                                (0, t.jsxs)("dt", {
                                  className:
                                    "flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-xl font-bold",
                                  children: [
                                    e.term,
                                    (0, t.jsx)("span", {
                                      className: (0, m.cn)(
                                        "rounded-full border px-2.5 py-0.5 font-sans text-xs font-medium",
                                        e.live
                                          ? "border-mint/50 text-mint"
                                          : "border-line-bright text-hush"
                                      ),
                                      children: e.status,
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("dd", {
                                  className: "mt-1.5 max-w-[56ch] text-hush",
                                  children: e.detail,
                                }),
                              ],
                            },
                            e.term
                          )
                        ),
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-10 flex flex-wrap gap-3",
                        children: [
                          (0, t.jsx)(d.ButtonLink, {
                            href: "/chat?mode=bittensor",
                            size: "lg",
                            children: "Chat on Bittensor",
                          }),
                          (0, t.jsxs)("a", {
                            href: "https://chutes.ai/privacy",
                            target: "_blank",
                            rel: "noreferrer",
                            className: (0, d.buttonClass)({
                              variant: "quiet",
                              size: "lg",
                            }),
                            children: [
                              (0, t.jsx)(a.ExternalLink, {
                                "aria-hidden": !0,
                                size: 16,
                              }),
                              "Chutes' privacy policy",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
      ],
      68039
    );
  },
  75755,
  (e) => {
    "use strict";
    var t = e.i(18050),
      s = e.i(71645),
      a = e.i(90991),
      n = e.i(89898),
      r = e.i(15092),
      i = e.i(75379),
      l = e.i(45060),
      o = e.i(28976);
    function d() {
      let [e, a] = (0, s.useState)([]);
      (0, s.useEffect)(
        () => (0, o.onPulseBlock)((e) => a((t) => [...t.slice(-23), e])),
        []
      );
      let n = Math.max(1, ...e.map((e) => e.txCount));
      return (0, t.jsxs)("figure", {
        className: "mt-10",
        children: [
          (0, t.jsx)("div", {
            className: "flex h-20 items-end gap-[3px]",
            children: e.map((s, a) => {
              let o;
              return (0, t.jsx)(
                "a",
                {
                  href: (0, r.explorerBlock)(s.number),
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": `Block ${(0, i.formatInt)(s.number)}, ${
                    s.txCount
                  } transactions`,
                  title: `Block ${(0, i.formatInt)(s.number)}, ${
                    s.txCount
                  } transactions`,
                  className: "group flex h-full min-w-0 flex-1 items-end",
                  children: (0, t.jsx)("span", {
                    className: (0, l.cn)(
                      "w-full rounded-t-[2px] group-hover:bg-mist",
                      a === e.length - 1
                        ? "bg-heat-5"
                        : (o = s.txCount / n) > 0.75
                        ? "bg-heat-4"
                        : o > 0.45
                        ? "bg-heat-3"
                        : "bg-heat-2"
                    ),
                    style: { height: `${Math.max(6, (s.txCount / n) * 100)}%` },
                  }),
                },
                s.number.toString()
              );
            }),
          }),
          (0, t.jsxs)("figcaption", {
            className: "mt-3 text-[13px] text-hush",
            children: [
              "The last ",
              24,
              " blocks, newest on the right. Taller, hotter bars carried more transactions.",
            ],
          }),
        ],
      });
    }
    e.s([
      "ChainSection",
      0,
      function () {
        let {
            status: e,
            latest: s,
            recent: c,
            finalizedLagSec: h,
          } = (0, o.useChainPulse)(),
          {
            blockTimeMs: m,
            txPerSec: x,
            baseFeeGwei: u,
          } = (0, o.pulseStats)(c),
          p = "live" === e,
          g = [
            [
              "Latest block",
              s
                ? (0, t.jsx)(a.AnimatedNumber, {
                    value: Number(s.number),
                    format: i.formatInt,
                  })
                : "–",
            ],
            ["Average block time", m ? `${Math.round(m)} ms` : "–"],
            ["Transactions per second", x ? (0, i.formatInt)(x) : "–"],
            ["Base fee", u ? `${u.toPrecision(3)} gwei` : "–"],
            [
              "Ethereum-final after",
              h ? `about ${Math.round(h / 60)} min` : "–",
            ],
          ];
        return (0, t.jsxs)("section", {
          id: "chain",
          "aria-labelledby": "chain-title",
          className: "mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32",
          children: [
            (0, t.jsx)(n.Title, {
              id: "chain-title",
              q: "Is this live?",
              children:
                "Chat, mining and credits are. Sealed messages are next.",
            }),
            (0, t.jsxs)("div", {
              className: "mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-12",
              children: [
                (0, t.jsxs)("div", {
                  className: "lg:col-span-5",
                  children: [
                    (0, t.jsx)("p", {
                      className: "max-w-[46ch] text-lg text-hush",
                      children:
                        "Robinhood Chain seals a block about ten times a second and settles it to Ethereum. Every number here is read from it live.",
                    }),
                    (0, t.jsx)("p", {
                      className: "mt-4 max-w-[46ch] text-lg text-hush",
                      children:
                        "Inferno uses it for money only. You buy credits by sending USDG, and lenders are paid in USDG for the tokens their GPUs write. Your prompts and replies never go on-chain; only the payments do.",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "lg:col-span-7 lg:pt-2",
                  children: [
                    (0, t.jsxs)("p", {
                      className:
                        "flex items-center gap-2.5 text-[15px] text-hush",
                      children: [
                        (0, t.jsx)("span", {
                          "aria-hidden": !0,
                          className: (0, l.cn)(
                            "h-1.5 w-1.5 rounded-full",
                            p ? "animate-breathe bg-heat-5" : "bg-faint"
                          ),
                        }),
                        p
                          ? `Live from ${r.CHAIN.name}`
                          : "Listening for Robinhood Chain…",
                      ],
                    }),
                    (0, t.jsx)("dl", {
                      className: "mt-4 border-b border-line",
                      children: g.map(([e, s]) =>
                        (0, t.jsxs)(
                          "div",
                          {
                            className:
                              "flex items-baseline justify-between gap-6 border-t border-line py-4",
                            children: [
                              (0, t.jsx)("dt", {
                                className: "text-[15px] text-hush",
                                children: e,
                              }),
                              (0, t.jsx)("dd", {
                                className:
                                  "tnum text-right text-2xl font-semibold text-mist sm:text-[1.75rem]",
                                children: s,
                              }),
                            ],
                          },
                          e
                        )
                      ),
                    }),
                    (0, t.jsx)(d, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
  17706,
  (e) => {
    "use strict";
    var t = e.i(18050),
      s = e.i(22016),
      a = e.i(59544),
      n = e.i(90991),
      r = e.i(40312),
      i = e.i(71645),
      l = e.i(56420);
    let o = {
      name: "arrow-up",
      size: 24,
      node: [
        ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
        ["path", { d: "M12 19V5", key: "x0mq9r" }],
      ],
    };
    o.node;
    let d = (0, l.default)(o);
    var c = e.i(56102),
      h = e.i(37377),
      m = e.i(23692),
      x = e.i(45060);
    let u = [
        {
          q: "Is there a much bigger model that keeps my question private?",
          a: "Yes, on Bittensor. A miner on subnet 64 answers with a big open model like DeepSeek-V3.2, inside sealed hardware, so the miner can't read your words. Chutes' gateway passes them along in memory and doesn't keep them.",
          rate: 42,
          receipt:
            "Served on Bittensor subnet 64 (Chutes), confidential compute. DeepSeek-V3.2, 54 tokens at 42 tokens/s. $0.0001, billed to your Chutes account.",
        },
        {
          q: "What does a GPU do when I ask you something?",
          a: "It does the maths that picks each next word. A model is billions of numbers, and a GPU multiplies thousands of them at once. That's why a gaming card can write faster than you can read.",
          rate: 86,
          receipt:
            "Llama 3.1 8B on a lent RTX 4090. 212 tokens at 86 tokens/s. $0.0021, settled on Robinhood Chain.",
        },
        {
          q: "Can you answer without sending my question anywhere?",
          a: "Yes. Switch to private mode and I run on your own GPU, inside this browser tab. Your question and my answer never leave your device, and it costs nothing.",
          rate: 24,
          receipt:
            "Llama 3.2 1B on your GPU (Apple M3), in private mode. 96 tokens at 24 tokens/s. Free, and nothing left this tab.",
        },
        {
          q: "I have a gaming PC. Could it earn?",
          a: "Yes. Start mining from the Lend page and your GPU answers people on Inferno's network, right in your browser. You keep 70% of what each answer costs when people pay with credits on Robinhood Chain. That split is planned.",
          rate: 58,
          receipt:
            "Qwen2.5 7B on a lent RTX 3090. 164 tokens at 58 tokens/s. $0.0016, settled on Robinhood Chain.",
        },
      ].map((e) => ({ ...e, words: e.a.match(/\S+\s*/g) ?? [] })),
      p = u.flatMap(({ words: e, rate: t }, s) => [
        { k: s, n: 0, wait: 700 },
        ...e.map((a, n) => ({
          k: s,
          n: n + 1,
          wait: n < e.length - 1 ? 2667 / t : 1200,
        })),
        { k: s, n: e.length + 1, wait: 5e3 },
      ]),
      g = u[0].words.length + 1,
      b = "(prefers-reduced-motion: reduce)",
      f = (e) => {
        let t = matchMedia(b);
        return (
          t.addEventListener("change", e),
          () => t.removeEventListener("change", e)
        );
      },
      j = `
@keyframes heat-cool {
  from { color: var(--color-heat-5); text-shadow: 0 0 calc(var(--heat, 0.5) * 18px) var(--color-heat-4); }
  30% { color: var(--color-heat-4); }
  65% { color: var(--color-heat-3); text-shadow: 0 0 0 transparent; }
  to { color: var(--color-mist); text-shadow: 0 0 0 transparent; }
}
.heat-word { animation: heat-cool calc(1s + var(--heat, 0.5) * 0.5s) linear both; }`;
    function w({ className: e }) {
      let a = (0, i.useRef)(null),
        n = (0, i.useSyncExternalStore)(
          f,
          () => matchMedia(b).matches,
          () => !1
        ),
        [r, l] = (0, i.useState)(!1),
        [o, c] = (0, i.useState)(0);
      (0, i.useEffect)(() => {
        let e = new IntersectionObserver(([e]) => l(e.isIntersecting));
        return a.current && e.observe(a.current), () => e.disconnect();
      }, []),
        (0, i.useEffect)(() => {
          if (n || !r) return;
          let e = setTimeout(() => c((e) => (e + 1) % p.length), p[o].wait);
          return () => clearTimeout(e);
        }, [n, r, o]);
      let { k: m, n: N } = p[n ? g : o],
        v = (m + u.length - 1) % u.length;
      return (0, t.jsxs)("figure", {
        ref: a,
        "aria-label": "Demo chat",
        className: (0, x.cn)(
          "overflow-hidden rounded-3xl border border-line-bright bg-night-2 shadow-[0_40px_120px_-48px_var(--color-heat-3)]",
          e
        ),
        children: [
          (0, t.jsx)("style", {
            href: "heat-trace",
            precedence: "default",
            children: j,
          }),
          (0, t.jsxs)("div", {
            className:
              "flex items-center justify-between gap-4 border-b border-line px-5 py-3.5",
            children: [
              (0, t.jsxs)("span", {
                className: "flex items-center gap-2 text-[15px] font-medium",
                children: [
                  (0, t.jsx)(h.LogoMark, { className: "h-6 w-6" }),
                  "Inferno chat",
                ],
              }),
              (0, t.jsx)("span", {
                className:
                  "rounded-full border border-flame/60 px-2.5 py-0.5 text-[13px] font-semibold text-flame",
                children: "Demo",
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            "aria-hidden": !0,
            className:
              "flex h-[23rem] flex-col justify-end gap-8 overflow-hidden px-5 pt-5 pb-4 [mask-image:linear-gradient(to_bottom,transparent,black_4rem)] sm:h-[25rem]",
            children: [
              (0, t.jsx)(y, { ex: u[v] }, v),
              (0, t.jsx)(y, { ex: u[m], n: N }, m),
            ],
          }),
          (0, t.jsxs)(s.default, {
            href: "/chat",
            className:
              "mx-3 mb-3 flex h-12 items-center justify-between gap-3 rounded-2xl border border-line bg-night pr-1.5 pl-4 text-[15px] text-hush transition-colors hover:border-flame/60 hover:text-mist",
            children: [
              "Ask your own question",
              (0, t.jsx)("span", {
                "aria-hidden": !0,
                className:
                  "flex h-9 w-9 items-center justify-center rounded-xl bg-flame text-night",
                children: (0, t.jsx)(d, { size: 18 }),
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: "sr-only",
            children: [
              (0, t.jsx)("p", {
                children: "A scripted demo, not a live chat.",
              }),
              u.map((e) =>
                (0, t.jsxs)(
                  "p",
                  {
                    children: [
                      "Question: ",
                      e.q,
                      " Answer: ",
                      e.a,
                      " Receipt: ",
                      e.receipt,
                    ],
                  },
                  e.q
                )
              ),
            ],
          }),
        ],
      });
    }
    function y({ ex: e, n: s }) {
      return (0, t.jsxs)("div", {
        className: "animate-rise",
        children: [
          (0, t.jsx)("p", {
            className:
              "ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-night-3 px-4 py-2.5 text-[15px] leading-snug",
            children: e.q,
          }),
          (0, t.jsx)("p", {
            className: "mt-4 text-[15px] leading-relaxed",
            style: { "--heat": Math.min(1, Math.sqrt(e.rate / 80)) },
            children:
              void 0 === s
                ? e.a
                : 0 === s
                ? (0, t.jsx)("span", {
                    className:
                      "inline-block h-2 w-2 animate-breathe rounded-full bg-heat-4",
                  })
                : e.words
                    .slice(0, s)
                    .map((e, s) =>
                      (0, t.jsx)(
                        "span",
                        { className: "heat-word", children: e },
                        s
                      )
                    ),
          }),
          (void 0 === s || s > e.words.length) &&
            (0, t.jsxs)("p", {
              className:
                "mt-3 flex animate-rise gap-2 border-t border-dashed border-line-bright pt-3 text-[13px] leading-snug text-hush",
              children: [
                e.receipt.startsWith("Served on Bittensor")
                  ? (0, t.jsx)(m.Tau, {
                      className: "mt-px shrink-0 text-heat-4",
                    })
                  : (0, t.jsx)(c.ReceiptText, {
                      "aria-hidden": !0,
                      size: 15,
                      className: "mt-px shrink-0",
                    }),
                e.receipt,
              ],
            }),
        ],
      });
    }
    var N = e.i(27187),
      v = e.i(28976),
      k = e.i(75379);
    e.s(
      [
        "Hero",
        0,
        function () {
          let { status: e, latest: i } = (0, v.useChainPulse)(),
            { models: l, loading: o, credits: d } = (0, N.useSubnet)();
          return (0, t.jsxs)("section", {
            "aria-labelledby": "hero-title",
            className:
              "relative -mt-16 flex min-h-[100svh] flex-col overflow-hidden pt-16",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "mx-auto grid w-full max-w-7xl gap-x-12 gap-y-14 px-5 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-12 lg:items-center",
                children: [
                  (0, t.jsxs)("div", {
                    className: "lg:col-span-7",
                    children: [
                      (0, t.jsxs)(s.default, {
                        href: "#bittensor",
                        className:
                          "inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full border border-heat-2/50 bg-night-2/60 px-3.5 py-1.5 text-[15px] text-hush hover:text-mist",
                        children: [
                          (0, t.jsx)("span", {
                            "aria-hidden": !0,
                            className: (0, x.cn)(
                              "h-1.5 w-1.5 shrink-0 rounded-full",
                              l && l.length > 0
                                ? "animate-breathe bg-heat-5"
                                : "bg-faint"
                            ),
                          }),
                          (0, t.jsx)(m.Tau, { className: "text-heat-4" }),
                          (0, t.jsx)("span", {
                            children: o
                              ? "Powered by Bittensor"
                              : l && l.length > 0
                              ? (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    "Powered by Bittensor: ",
                                    (0, t.jsx)("span", {
                                      className: "tnum",
                                      children: l.length,
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "hidden sm:inline",
                                      children: " sealed",
                                    }),
                                    " models live",
                                    (0, t.jsx)("span", {
                                      className: "hidden sm:inline",
                                      children: " on subnet 64",
                                    }),
                                  ],
                                })
                              : "Powered by Bittensor subnet 64",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("h1", {
                        id: "hero-title",
                        className:
                          "wide mt-6 text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[0.92] font-black tracking-[-0.02em]",
                        children: [
                          "Private compute, powered by ",
                          (0, t.jsx)("span", {
                            className: "heat-text",
                            children: "Bittensor",
                          }),
                          ".",
                        ],
                      }),
                      (0, t.jsxs)("p", {
                        className:
                          "mt-8 max-w-[60ch] text-lg text-hush sm:text-xl",
                        children: [
                          "Run open models on Bittensor subnet 64, where miners work inside sealed hardware and can't read your words, or on a GPU someone lends, or on your own. Mine with your GPU, and send sealed messages between wallets.",
                          " ",
                          d
                            ? "Pay with credits on Robinhood Chain, or with your own Chutes key."
                            : "Pay with your own Chutes key, or with credits on Robinhood Chain when payments are on.",
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-10 flex flex-wrap gap-3",
                        children: [
                          (0, t.jsxs)(a.ButtonLink, {
                            href: "/chat?mode=bittensor",
                            size: "lg",
                            children: [
                              (0, t.jsx)(m.Tau, {}),
                              "Chat on Bittensor",
                            ],
                          }),
                          (0, t.jsx)(a.ButtonLink, {
                            href: "/lend",
                            size: "lg",
                            variant: "quiet",
                            children: "Mine with your GPU",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(w, { className: "lg:col-span-5" }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "relative mt-10 min-h-44 flex-1",
                children: (0, t.jsx)(r.HushCanvas, {}),
              }),
              (0, t.jsxs)("p", {
                className:
                  "mx-auto flex w-full max-w-7xl items-baseline gap-2.5 px-5 pb-10 text-[15px] text-hush sm:px-8",
                children: [
                  (0, t.jsx)("span", {
                    "aria-hidden": !0,
                    className: (0, x.cn)(
                      "h-1.5 w-1.5 shrink-0 -translate-y-0.5 rounded-full",
                      "live" === e ? "animate-breathe bg-heat-5" : "bg-faint"
                    ),
                  }),
                  (0, t.jsx)("span", {
                    children: i
                      ? (0, t.jsxs)(t.Fragment, {
                          children: [
                            "Every spike on those lines is a real Robinhood Chain block. The chain is at block",
                            " ",
                            (0, t.jsx)(n.AnimatedNumber, {
                              value: Number(i.number),
                              format: k.formatInt,
                              className: "text-mist",
                            }),
                            " right now.",
                          ],
                        })
                      : "Every spike on those lines is a real Robinhood Chain block, about ten a second.",
                  }),
                ],
              }),
            ],
          });
        },
      ],
      17706
    );
  },
  77499,
  (e) => {
    "use strict";
    var t = e.i(18050),
      s = e.i(71645),
      a = e.i(89898),
      n = e.i(75379),
      r = e.i(94046),
      i = e.i(74429);
    let l = [
      {
        name: "Bittensor model",
        detail: `Chutes' price for the model, plus ${Math.round(
          100 * r.BITTENSOR_MARGIN
        )}% when you pay with credits`,
        usdPer1k: null,
      },
      {
        name: "Private mode",
        detail: "Runs on your GPU, in your browser",
        usdPer1k: 0,
      },
      {
        name: "Network model",
        detail: `A lender's GPU, ${(0, n.formatUsd)(
          i.USD_PER_1K_TOKENS
        )} per 1,000 tokens`,
        usdPer1k: i.USD_PER_1K_TOKENS,
      },
    ];
    e.s([
      "Pricing",
      0,
      function () {
        let e,
          r,
          [o, d] = (0, s.useState)(50),
          c =
            ((e = 200 * 100 ** (o / 100)),
            (r = 10 ** Math.floor(Math.log10(e)) / 20),
            Math.round(e / r) * r),
          h = 40 * c;
        return (0, t.jsxs)("section", {
          id: "pricing",
          "aria-labelledby": "pricing-title",
          className: "mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32",
          children: [
            (0, t.jsx)(a.Title, {
              id: "pricing-title",
              q: "What does it cost?",
              children: "Pay per token. Private mode is free.",
            }),
            (0, t.jsxs)("div", {
              className:
                "mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("p", {
                      className: "max-w-[52ch] text-lg text-hush",
                      children:
                        "Network models charge for the tokens they read and write, and nothing else. No subscription, no minimum.",
                    }),
                    (0, t.jsx)("p", {
                      className: "mt-4 max-w-[52ch] text-lg text-hush",
                      children:
                        "Pay with Inferno credits: send USDG on Robinhood Chain and your balance shows up once the chain finalizes it, in about 16 minutes. It doesn't expire.",
                    }),
                    (0, t.jsxs)("p", {
                      className:
                        "mt-8 max-w-[52ch] border-l-2 border-flame pl-4 text-[15px] text-mist",
                      children: [
                        "The lender whose GPU answers gets ",
                        Math.round(100 * i.LENDER_SHARE),
                        "% of what you pay. During the beta, lender payouts go out by hand in USDG.",
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("label", {
                      htmlFor: "words-per-day",
                      className: "block text-mist",
                      children: "How much do you write with AI each day?",
                    }),
                    (0, t.jsxs)("p", {
                      className: "mt-4 font-display",
                      children: [
                        (0, t.jsx)("span", {
                          className:
                            "wide tnum text-5xl font-black sm:text-6xl",
                          children: (0, n.formatInt)(c),
                        }),
                        (0, t.jsx)("span", {
                          className: "ml-3 text-xl text-hush sm:text-2xl",
                          children: "words a day",
                        }),
                      ],
                    }),
                    (0, t.jsx)("input", {
                      id: "words-per-day",
                      type: "range",
                      min: 0,
                      max: 100,
                      value: o,
                      onChange: (e) => d(Number(e.target.value)),
                      "aria-valuetext": `${(0, n.formatInt)(c)} words a day`,
                      className: "mt-6 w-full cursor-pointer accent-flame",
                    }),
                    (0, t.jsxs)("div", {
                      "aria-hidden": !0,
                      className:
                        "tnum mt-1 flex justify-between text-sm text-hush",
                      children: [
                        (0, t.jsx)("span", { children: (0, n.formatInt)(200) }),
                        (0, t.jsx)("span", { children: (0, n.formatInt)(2e4) }),
                      ],
                    }),
                    (0, t.jsx)("dl", {
                      className: "mt-10 border-b border-line",
                      children: l.map((e) =>
                        (0, t.jsxs)(
                          "div",
                          {
                            className:
                              "flex items-baseline justify-between gap-6 border-t border-line py-4",
                            children: [
                              (0, t.jsxs)("dt", {
                                children: [
                                  e.name,
                                  (0, t.jsx)("span", {
                                    className: "block text-sm text-hush",
                                    children: e.detail,
                                  }),
                                ],
                              }),
                              (0, t.jsx)("dd", {
                                className: "tnum shrink-0 text-right",
                                children:
                                  null === e.usdPer1k
                                    ? (0, t.jsx)("span", {
                                        className: "text-hush",
                                        children: "Varies by model",
                                      })
                                    : e.usdPer1k
                                    ? (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          (0, n.formatUsd)(
                                            (h / 1e3) * e.usdPer1k
                                          ),
                                          " ",
                                          (0, t.jsx)("span", {
                                            className: "text-hush",
                                            children: "a month",
                                          }),
                                        ],
                                      })
                                    : "Free",
                              }),
                            ],
                          },
                          e.name
                        )
                      ),
                    }),
                    (0, t.jsxs)("p", {
                      className: "mt-4 text-sm text-hush",
                      children: [
                        "About ",
                        (0, n.formatInt)(h),
                        " tokens a month. Models count text in tokens, roughly 1.33 per word.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
  38207,
  (e) => {
    "use strict";
    var t = e.i(18050),
      s = e.i(71645),
      a = e.i(56420);
    let n = {
      name: "pause",
      size: 24,
      node: [
        [
          "rect",
          { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" },
        ],
        [
          "rect",
          { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" },
        ],
      ],
    };
    n.node;
    let r = (0, a.default)(n),
      i = {
        name: "play",
        size: 24,
        node: [
          [
            "path",
            {
              d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
              key: "10ikf1",
            },
          ],
        ],
      };
    i.node;
    let l = (0, a.default)(i);
    var o = e.i(23692),
      d = e.i(27187),
      c = e.i(75379);
    let h = (e) => (0, c.formatUsd)(e, e >= 0.1 ? 2 : 4);
    function m({ models: e }) {
      return (0, t.jsx)(t.Fragment, {
        children: e.map((e, a) =>
          (0, t.jsxs)(
            s.Fragment,
            {
              children: [
                (0, t.jsxs)("span", {
                  className: "whitespace-nowrap",
                  children: [
                    (0, t.jsx)("span", {
                      className: "text-mist",
                      children: e.name,
                    }),
                    " ",
                    (0, t.jsxs)("span", {
                      className: "tnum text-hush",
                      children: [h(e.input), " in, ", h(e.output), " out"],
                    }),
                  ],
                }),
                (0, t.jsx)(o.Tau, { className: "text-heat-3 shrink-0" }),
              ],
            },
            a
          )
        ),
      });
    }
    e.s(
      [
        "SubnetStrip",
        0,
        function () {
          let { models: e, loading: a } = (0, d.useSubnet)(),
            [n, i] = (0, s.useState)(!1),
            c = (0, s.useRef)(null),
            h = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(() => {
              let e = c.current,
                t = h.current;
              if (!e || !t) return;
              let s = !0,
                a = !1,
                r = () => {
                  t.dataset.paused = String(n || s || document.hidden || a);
                },
                i = new IntersectionObserver(([e]) => {
                  (s = !e.isIntersecting), r();
                });
              i.observe(e);
              let l = () => {
                  (a = !0), r();
                },
                o = () => {
                  (a = !1), r();
                };
              return (
                e.addEventListener("pointerenter", l),
                e.addEventListener("pointerleave", o),
                document.addEventListener("visibilitychange", r),
                r(),
                () => {
                  i.disconnect(),
                    e.removeEventListener("pointerenter", l),
                    e.removeEventListener("pointerleave", o),
                    document.removeEventListener("visibilitychange", r);
                }
              );
            }, [e, n]),
            (0, t.jsx)("div", {
              className: "border-y border-line bg-night-2/40",
              children: (0, t.jsxs)("div", {
                className:
                  "mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:gap-8 sm:px-8",
                children: [
                  (0, t.jsxs)("p", {
                    className:
                      "flex shrink-0 items-center gap-2 text-[15px] text-mist",
                    children: [
                      (0, t.jsx)(o.Tau, { className: "text-heat-4" }),
                      "Live on Bittensor subnet 64",
                    ],
                  }),
                  a
                    ? (0, t.jsx)("p", {
                        className: "text-[15px] text-hush",
                        children: "Asking subnet 64 which models are live…",
                      })
                    : null === e
                    ? (0, t.jsx)("p", {
                        className: "text-[15px] text-hush",
                        children:
                          "Chutes' model list didn't load. The chat asks again when you open it.",
                      })
                    : 0 === e.length
                    ? (0, t.jsx)("p", {
                        className: "text-[15px] text-hush",
                        children: "Chutes lists no sealed models right now.",
                      })
                    : (0, t.jsxs)("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex min-w-0 items-center gap-3",
                            children: [
                              (0, t.jsx)("div", {
                                ref: c,
                                className:
                                  "min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]",
                                children: (0, t.jsxs)("div", {
                                  ref: h,
                                  className:
                                    "animate-marquee flex w-max items-center gap-8 pr-8 data-[paused=true]:[animation-play-state:paused]",
                                  style: {
                                    animationDuration: `${6 * e.length}s`,
                                  },
                                  children: [
                                    (0, t.jsx)(m, { models: e }),
                                    (0, t.jsx)("div", {
                                      "aria-hidden": !0,
                                      className:
                                        "contents motion-reduce:hidden",
                                      children: (0, t.jsx)(m, { models: e }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("button", {
                                type: "button",
                                onClick: () => i((e) => !e),
                                "aria-pressed": n,
                                "aria-label": n
                                  ? "Play the model list"
                                  : "Pause the model list",
                                className:
                                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-bright text-hush transition-colors hover:text-mist motion-reduce:hidden",
                                children: n
                                  ? (0, t.jsx)(l, {
                                      "aria-hidden": !0,
                                      size: 16,
                                    })
                                  : (0, t.jsx)(r, {
                                      "aria-hidden": !0,
                                      size: 16,
                                    }),
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-2 text-[13px] text-hush",
                            children:
                              "Chutes' own prices per million tokens, read live. Only models in sealed hardware are listed.",
                          }),
                        ],
                      }),
                ],
              }),
            })
          );
        },
      ],
      38207
    );
  },
  89898,
  (e) => {
    "use strict";
    var t = e.i(18050),
      s = e.i(45060);
    e.s([
      "Title",
      0,
      function ({ id: e, q: a, className: n, children: r }) {
        return (0, t.jsxs)("h2", {
          id: e,
          className: (0, s.cn)(
            "wide max-w-[20ch] text-[clamp(2.25rem,5.2vw,4.5rem)] leading-[0.95] font-black",
            n
          ),
          children: [
            a &&
              (0, t.jsx)("span", {
                className:
                  "mb-5 block font-sans text-lg leading-snug font-medium tracking-normal text-hush sm:text-xl",
                children: a,
              }),
            r,
          ],
        });
      },
    ]);
  },
  51636,
  (e) => {
    "use strict";
    let t;
    var s = e.i(18050),
      a = e.i(71645),
      n = e.i(59544),
      r = e.i(45060),
      i = e.i(75379),
      l = e.i(8178),
      o = e.i(26929);
    let d =
      "Ada, the spare key is under the blue pot. Water the basil if you get a minute. Back on Sunday.";
    function c() {
      if (!t) {
        let e = (0, l.newIdentity)(),
          s = (0, l.newIdentity)();
        t = { you: e, ada: s, first: (0, l.seal)(d, e, s.pub) };
      }
      return t;
    }
    let h = () => () => {},
      m = (0, l.toB64u)(new Uint8Array(272)),
      x = Array(12).fill(" ".repeat(5)).join(" ");
    function u({ className: e }) {
      return (0, s.jsx)("span", {
        "aria-hidden": !0,
        className: (0, r.cn)(
          "absolute top-3 left-[calc(-1.5rem_-_5.5px)] h-2.5 w-2.5 rounded-full ring-4 ring-night transition-colors sm:left-[calc(-2.5rem_-_5.5px)]",
          e
        ),
      });
    }
    function p({ ct: e, nonce: t, flipped: n }) {
      let r = (0, a.useMemo)(() => (0, l.fromB64u)(e), [e]),
        [i, o] = (0, a.useState)(null),
        d = (0, a.useRef)(t);
      (0, a.useEffect)(() => {
        if (
          d.current === t ||
          ((d.current = t),
          matchMedia("(prefers-reduced-motion: reduce)").matches)
        )
          return;
        let s = performance.now(),
          a = 0,
          n = (t) => {
            let i = Math.min(1, (t - s) / 480),
              l = Math.floor(i * r.length),
              d = r.slice();
            for (let e = l; e < d.length; e++)
              d[e] = Math.floor(256 * Math.random());
            o(i < 1 ? { ct: e, cells: d, edge: l } : null),
              i < 1 && (a = requestAnimationFrame(n));
          };
        return (a = requestAnimationFrame(n)), () => cancelAnimationFrame(a);
      }, [t, e, r]);
      let c = i?.ct === e ? i : null;
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsxs)("p", {
            className: "sr-only",
            children: [
              "The sealed note: ",
              r.length,
              " bytes that only Ada's key can open.",
            ],
          }),
          (0, s.jsx)("div", {
            "aria-hidden": !0,
            className:
              "grid grid-cols-16 rounded-2xl border border-line bg-night-2 px-3 py-4 text-center text-[21px] leading-[1.15] select-none sm:px-5",
            children: Array.from(r, (e, t) =>
              (0, s.jsx)(
                "span",
                {
                  className:
                    c && t >= c.edge
                      ? "text-faint"
                      : t === n
                      ? "rounded-sm bg-ember/20 text-ember"
                      : "text-flame/85",
                  children: String.fromCharCode(10240 + (c ? c.cells[t] : e)),
                },
                t
              )
            ),
          }),
        ],
      });
    }
    e.s([
      "SealDemo",
      0,
      function () {
        let e = (0, a.useSyncExternalStore)(h, c, () => null),
          [t, r] = (0, a.useState)(d),
          [g, b] = (0, a.useState)(null),
          [f, j] = (0, a.useState)(null),
          [w, y] = (0, a.useState)(null),
          N = (0, a.useRef)(void 0),
          v = g ?? e?.first ?? null;
        function k(t) {
          e && (b((0, l.seal)(t, e.you, e.ada.pub)), j(null), y(null));
        }
        return (0, s.jsx)("section", {
          id: "seal",
          "aria-labelledby": "seal-title",
          className: "mx-auto max-w-7xl px-5 py-32 sm:px-8",
          children: (0, s.jsxs)("div", {
            className: "grid gap-y-16 lg:grid-cols-12 lg:gap-x-12",
            children: [
              (0, s.jsxs)("div", {
                className: "lg:sticky lg:top-28 lg:col-span-5 lg:self-start",
                children: [
                  (0, s.jsx)("h2", {
                    id: "seal-title",
                    className:
                      "wide text-[clamp(2.25rem,5.2vw,4.5rem)] leading-[0.95] font-black",
                    children: "You can message people too.",
                  }),
                  (0, s.jsx)("p", {
                    className: "mt-6 max-w-md text-lg text-hush",
                    children:
                      "Notes between wallets are sealed on your device, with your key and Ada's, before they leave your screen. The relay only ever carries the sealed box. It can see which keys are talking and when, but not a word you wrote, or even how long it was.",
                  }),
                  (0, s.jsxs)("div", {
                    className: "mt-12 max-w-md border-t border-line pt-6",
                    children: [
                      (0, s.jsx)("h3", {
                        className: "text-xl",
                        children: "Your safety number with Ada",
                      }),
                      (0, s.jsx)(o.SafetyNumber, {
                        className: "mt-4",
                        value: e
                          ? (0, l.safetyNumber)(e.you.pub, e.ada.pub)
                          : x,
                      }),
                      (0, s.jsx)("p", {
                        className: "mt-4 text-[15px] text-hush",
                        children:
                          "Ada sees the same 60 digits on her screen. Read a few groups to each other once. If they match, nobody swapped a key between you.",
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className: "mt-8 text-sm text-hush",
                    children:
                      "You and Ada are demo keys made in this tab just now. Nothing leaves your browser.",
                  }),
                ],
              }),
              (0, s.jsxs)("ol", {
                className:
                  "space-y-16 border-l border-line pl-6 sm:pl-10 lg:col-span-6 lg:col-start-7",
                children: [
                  (0, s.jsxs)("li", {
                    className: "relative",
                    children: [
                      (0, s.jsx)(u, { className: "bg-flame" }),
                      (0, s.jsx)("h3", {
                        className: "text-2xl",
                        children: (0, s.jsx)("label", {
                          htmlFor: "seal-note",
                          children: "You write",
                        }),
                      }),
                      (0, s.jsx)("p", {
                        className: "mt-1 text-[15px] text-hush",
                        children: "Sealed as you type, from your key to Ada's.",
                      }),
                      (0, s.jsx)("textarea", {
                        id: "seal-note",
                        value: t,
                        onChange: (e) => {
                          var t;
                          r((t = e.target.value)),
                            y(null),
                            clearTimeout(N.current),
                            (N.current = setTimeout(() => k(t), 250));
                        },
                        rows: 4,
                        maxLength: 400,
                        className:
                          "mt-5 block w-full resize-none rounded-2xl border border-line bg-night-2 px-5 py-4 font-display text-[1.375rem] leading-snug text-mist transition-colors hover:border-line-bright focus:border-flame/60",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("li", {
                    className: "relative",
                    children: [
                      (0, s.jsx)(u, { className: "bg-faint" }),
                      (0, s.jsx)("h3", {
                        className: "text-2xl",
                        children: "The relay sees",
                      }),
                      (0, s.jsx)("p", {
                        className: "mt-1 text-[15px] text-hush",
                        children:
                          "Two keys, a time and the sealed bytes. No names, no words.",
                      }),
                      (0, s.jsxs)("dl", {
                        className:
                          "mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-[15px]",
                        children: [
                          (0, s.jsx)("dt", {
                            className: "text-hush",
                            children: "From",
                          }),
                          (0, s.jsxs)("dd", {
                            className: "tnum text-mist",
                            children: [
                              v ? (0, i.shortAddress)(v.from) : "…",
                              " ",
                              (0, s.jsx)("span", {
                                className: "text-hush",
                                children: "your key",
                              }),
                            ],
                          }),
                          (0, s.jsx)("dt", {
                            className: "text-hush",
                            children: "To",
                          }),
                          (0, s.jsxs)("dd", {
                            className: "tnum text-mist",
                            children: [
                              v ? (0, i.shortAddress)(v.to) : "…",
                              " ",
                              (0, s.jsx)("span", {
                                className: "text-hush",
                                children: "Ada's key",
                              }),
                            ],
                          }),
                          (0, s.jsx)("dt", {
                            className: "text-hush",
                            children: "Sent",
                          }),
                          (0, s.jsx)("dd", {
                            className: "tnum text-mist",
                            children: v
                              ? new Date(v.ts).toLocaleTimeString([], {
                                  hour: "numeric",
                                  minute: "2-digit",
                                  second: "2-digit",
                                })
                              : "…",
                          }),
                          (0, s.jsx)("dt", {
                            className: "text-hush",
                            children: "Nonce",
                          }),
                          (0, s.jsxs)("dd", {
                            className: "tnum text-mist",
                            children: [
                              v ? (0, i.shortAddress)(v.nonce) : "…",
                              " ",
                              (0, s.jsx)("span", {
                                className: "text-hush",
                                children: "random, used once",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("figure", {
                        className: "mt-6",
                        children: [
                          (0, s.jsx)(
                            p,
                            {
                              ct: v?.ct ?? m,
                              nonce: v?.nonce ?? "",
                              flipped: f,
                            },
                            v ? "live" : "blank"
                          ),
                          (0, s.jsxs)("figcaption", {
                            className: "mt-4 text-sm text-hush",
                            children: [
                              null !== f &&
                                (0, s.jsxs)("span", {
                                  className: "text-ember",
                                  children: [
                                    "Byte ",
                                    f + 1,
                                    " was flipped on the way. ",
                                  ],
                                }),
                              "You wrote ",
                              (0, s.jsx)("span", {
                                className: "tnum text-mist",
                                children: new TextEncoder().encode(t).length,
                              }),
                              " bytes. Sealed, it's",
                              " ",
                              (0, s.jsx)("span", {
                                className: "tnum text-mist",
                                children: v
                                  ? (0, l.fromB64u)(v.ct).length
                                  : 272,
                              }),
                              ", one pattern per byte. Every note up to 252 bytes seals to the same 272, so the relay can't tell “ok” from a paragraph.",
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "mt-6 flex flex-wrap gap-3",
                        children: [
                          (0, s.jsx)(n.Button, {
                            onClick: function () {
                              if (v && e)
                                try {
                                  y({ ok: !0, text: (0, l.open)(v, e.ada) });
                                } catch (e) {
                                  y({
                                    ok: !1,
                                    text:
                                      e instanceof l.SealError
                                        ? e.message
                                        : "This note won't open.",
                                  });
                                }
                            },
                            disabled: !v,
                            children: "Open as Ada",
                          }),
                          (0, s.jsx)(n.Button, {
                            variant: "quiet",
                            onClick: function () {
                              if (!v) return;
                              if (null !== f) return k(t);
                              let e = (0, l.fromB64u)(v.ct),
                                s = Math.floor(Math.random() * e.length);
                              (e[s] ^= 255),
                                b({ ...v, ct: (0, l.toB64u)(e) }),
                                j(s),
                                y(null);
                            },
                            disabled: !v,
                            children:
                              null === f ? "Tamper with it" : "Seal it again",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("li", {
                    className: "relative",
                    children: [
                      (0, s.jsx)(u, {
                        className: w
                          ? w.ok
                            ? "bg-mint"
                            : "bg-ember"
                          : "bg-faint",
                      }),
                      (0, s.jsx)("h3", {
                        className: "text-2xl",
                        children: "Ada opens",
                      }),
                      (0, s.jsx)("div", {
                        "aria-live": "polite",
                        className: "mt-3",
                        children:
                          null === w
                            ? (0, s.jsx)("p", {
                                className: "text-[15px] text-hush",
                                children: "Nothing opened yet.",
                              })
                            : w.ok
                            ? (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)("blockquote", {
                                    className:
                                      "font-display text-[1.375rem] leading-snug break-words whitespace-pre-wrap text-mist italic",
                                    children: w.text || "An empty note.",
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "mt-3 text-[15px] text-mint",
                                    children:
                                      "Opened with Ada's key. The seal also proves it came from yours.",
                                  }),
                                ],
                              })
                            : (0, s.jsx)("p", {
                                className: "text-[15px] text-ember",
                                children: w.text,
                              }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      },
    ]);
  },
  27187,
  (e) => {
    "use strict";
    let t, s;
    var a = e.i(71645);
    e.s([
      "useSubnet",
      0,
      function () {
        let [e, n] = (0, a.useState)(s ?? null);
        return (
          (0, a.useEffect)(() => {
            let e = !0;
            return (
              (t ??= fetch("/api/bittensor/models")
                .then((e) =>
                  e.ok ? e.json() : Promise.reject(Error(`HTTP ${e.status}`))
                )
                .then(
                  (e) => (s = e),
                  () => ((t = void 0), { models: null, credits: !1 })
                )).then((t) => e && n(t)),
              () => {
                e = !1;
              }
            );
          }, []),
          {
            models: e?.models ?? null,
            credits: e?.credits ?? !1,
            loading: null === e,
          }
        );
      },
    ]);
  },
]);
