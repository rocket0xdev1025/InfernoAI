(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  40312,
  (e) => {
    "use strict";
    var t = e.i(18050),
      a = e.i(71645),
      n = e.i(45060),
      r = e.i(28976);
    let l = [0.7, 0.9, 1, 0.9, 0.7],
      o = 2 * Math.PI * 1.6,
      s = (e) => {
        let t = 43758.5453 * Math.sin(12.9898 * e);
        return t - Math.floor(t);
      };
    e.s([
      "HushCanvas",
      0,
      function ({ className: e, variant: i = "hero" }) {
        let c = (0, a.useRef)(null),
          d = (0, a.useRef)(null),
          h = "live" === (0, r.useChainPulse)().status,
          m = (0, a.useRef)(h),
          u = (0, a.useRef)(() => {});
        return (
          (0, a.useEffect)(() => {
            (m.current = h), u.current();
          }, [h]),
          (0, a.useEffect)(() => {
            let e = c.current,
              t = d.current,
              a = t?.getContext("2d");
            if (!e || !t || !a) return;
            let n = matchMedia("(prefers-reduced-motion: reduce)").matches,
              h = getComputedStyle(document.documentElement),
              [p, x, f, b, w] = [
                "--color-heat-2",
                "--color-heat-3",
                "--color-heat-4",
                "--color-heat-5",
                "--color-mist",
              ].map((e) => h.getPropertyValue(e).trim()),
              v = new Float64Array(512),
              g = new Float32Array(2560),
              N = 0,
              C = 0,
              M = 8,
              S = new Float32Array(5),
              j = new Float32Array(5),
              y = 0,
              A = 0,
              L = 0,
              k = 0,
              E = 0,
              I = 0,
              T = 0,
              P = 0,
              R = new Float32Array(0),
              U = null,
              D = null,
              _ = 0,
              H = 0,
              G = 0,
              B = 0,
              F = 0,
              K = 0,
              $ = !0,
              O = (e) => {
                if (!y || !U || !D) return;
                let t = F ? Math.min(0.1, (e - F) / 1e3) : 0;
                (F = e), (B += (G - B) * (n ? 1 : 1 - Math.exp(-t / 0.18)));
                let r = m.current;
                for (; C; ) {
                  let t = (e - v[(N - C) % 512]) / 1e3;
                  if (I - 80 * t + 3 * (4 + 1.1 * t) > 0) break;
                  C--;
                }
                R.fill(0);
                for (let t = C; t > 0; t--) {
                  let a = (N - t) % 512,
                    r = Math.max(0, (e - v[a]) / 1e3),
                    l = I - 80 * r,
                    s = 4 + 1.1 * r,
                    i = Math.sqrt(4 / s),
                    c = n ? 0 : 0.5 * Math.exp(-r / 0.8);
                  for (let e = 0; e < 5; e++) {
                    let t =
                      c > 0.01 ? 0.5 + c * Math.cos(o * r + 0.35 * e) : 0.5;
                    S[e] = g[5 * a + e] * i * t;
                  }
                  let d = Math.max(0, Math.ceil((l - 3 * s) / 2)),
                    h = Math.min(L - 1, Math.floor((l + 3 * s) / 2));
                  for (let e = d; e <= h; e++) {
                    let t = (2 * e - l) / s,
                      a = Math.exp(-0.5 * t * t);
                    for (let t = 0; t < 5; t++) R[t * L + e] += S[t] * a;
                  }
                }
                a.clearRect(0, 0, y, A);
                let l = I / 2;
                (a.globalAlpha = 0.9),
                  (a.lineWidth = "hero" === i ? 1.8 : 1.4),
                  (a.lineJoin = "round"),
                  (a.strokeStyle = U);
                for (let t = 0; t < 5; t++) {
                  let n = E + t * k,
                    o = n - H,
                    s = B * Math.exp(-(o * o) / 16200);
                  a.beginPath();
                  for (let o = 0; o < L; o++) {
                    let i = 2 * o,
                      c = R[t * L + o] * T;
                    if (
                      (r ||
                        (c += 1.2 * Math.sin(0.012 * i + 7e-4 * e + 0.9 * t)),
                      (c = P * Math.tanh(c / P)),
                      s > 0.003)
                    ) {
                      let e = i - _;
                      e * e < 72900 &&
                        (c *= 1 - s * Math.exp(-(e * e) / 16200));
                    }
                    o === l && (j[t] = n + c),
                      o ? a.lineTo(i, n + c) : a.moveTo(i, n + c);
                  }
                  a.stroke();
                }
                (a.globalAlpha = 1),
                  (a.globalCompositeOperation = "destination-out"),
                  (a.fillStyle = D),
                  a.fillRect(0, E - P - 4, y, 4 * k + 2 * P + 8),
                  (a.globalCompositeOperation = "source-over");
                let s = (N - 1) % 512,
                  c =
                    C && r
                      ? Math.abs(g[5 * s + 2]) * Math.exp(-(e - v[s]) / 300)
                      : 0,
                  d = I - _,
                  h = E + 2 * k - H,
                  u = 1 - B * Math.exp(-(d * d + h * h) / 16200);
                if (
                  ((a.strokeStyle = b),
                  (a.fillStyle = b),
                  (a.shadowColor = f),
                  (a.shadowBlur = (8 + 22 * c) * u),
                  (a.globalAlpha = r ? 0.6 : 0.25),
                  (a.lineWidth = 1),
                  a.beginPath(),
                  a.moveTo(I + 0.5, E - k),
                  a.lineTo(I + 0.5, E + 5 * k),
                  a.stroke(),
                  r)
                ) {
                  (a.globalAlpha = 0.95), a.beginPath();
                  for (let e = 0; e < 5; e++)
                    a.moveTo(I + 2.5, j[e]),
                      a.arc(I, j[e], 2.5, 0, 2 * Math.PI);
                  a.fill();
                }
                a.shadowBlur = 0;
              },
              q = (e) => {
                O(e), (K = requestAnimationFrame(q));
              },
              W = () => {
                K ||
                  (K = requestAnimationFrame((e) => {
                    (K = 0), O(e);
                  }));
              },
              z = () => {
                cancelAnimationFrame(K), (K = 0);
              };
            u.current = () => n && W();
            let J = (e) => {
                if (!$) return;
                let a = t.getBoundingClientRect();
                (_ = e.clientX - a.left),
                  (H = e.clientY - a.top),
                  (G = 1),
                  n && W();
              },
              V = () => {
                (G = 0), n && W();
              },
              X = (e) => "mouse" !== e.pointerType && V(),
              Y = (e) => !e.relatedTarget && V(),
              Q = new ResizeObserver(() => {
                let r = Math.min(2, window.devicePixelRatio || 1);
                (y = e.clientWidth),
                  (A = e.clientHeight),
                  y &&
                    A &&
                    ((t.width = Math.round(y * r)),
                    (t.height = Math.round(A * r)),
                    a.setTransform(r, 0, 0, r, 0, 0),
                    (R = new Float32Array(5 * (L = Math.ceil(y / 2) + 1))),
                    (k = Math.max(12, Math.min(22, Math.round(0.085 * A)))),
                    (E = Math.round(A / 2) - 2 * k),
                    (T = 2 * k),
                    (P = 2.4 * k),
                    (I =
                      2 *
                      Math.round(
                        (y - Math.max(28, Math.min(120, 0.07 * y))) / 2
                      )),
                    (U = a.createLinearGradient(0, 0, y, 0)).addColorStop(0, p),
                    U.addColorStop((I - Math.min(460, 0.6 * I)) / y, p),
                    U.addColorStop((I - Math.min(220, 0.32 * I)) / y, x),
                    U.addColorStop((I - Math.min(80, 0.12 * I)) / y, f),
                    U.addColorStop(I / y, b),
                    U.addColorStop((I + 2) / y, w),
                    U.addColorStop(1, w),
                    (D = a.createLinearGradient(0, 0, y, 0)).addColorStop(
                      0,
                      "black"
                    ),
                    D.addColorStop((0.28 * I) / y, "transparent"),
                    D.addColorStop((I + 2) / y, "transparent"),
                    D.addColorStop((I + 24) / y, "rgb(0 0 0 / 0.6)"),
                    D.addColorStop(1, "rgb(0 0 0 / 0.7)"),
                    e.style.setProperty("--staff-top", `${E}px`),
                    e.style.setProperty("--staff-right", `${y - I}px`),
                    n && W());
              });
            Q.observe(e);
            let Z = new IntersectionObserver(([e]) => {
              ($ = e.isIntersecting)
                ? K || n || !$ || (K = requestAnimationFrame(q))
                : z();
            });
            Z.observe(e);
            let ee = (0, r.onPulseBlock)((e) => {
              let t = N++ % 512;
              (C = Math.min(C + 1, 512)),
                (v[t] = performance.now()),
                (M = Math.max(8, e.txCount, 0.98 * M));
              let a = Number(e.number % 65521n),
                r = (e.txCount / M) * (0.5 > s(a) ? -1 : 1);
              for (let e = 0; e < 5; e++)
                g[5 * t + e] = r * l[e] * (0.75 + 0.25 * s(a + 7.7 * e));
              n && performance.now() - F >= 1e3 && W();
            });
            return (
              window.addEventListener("pointermove", J, { passive: !0 }),
              window.addEventListener("pointerdown", J, { passive: !0 }),
              window.addEventListener("pointerup", X),
              window.addEventListener("pointercancel", X),
              window.addEventListener("pointerout", Y),
              () => {
                ee(),
                  Q.disconnect(),
                  Z.disconnect(),
                  z(),
                  (u.current = () => {}),
                  window.removeEventListener("pointermove", J),
                  window.removeEventListener("pointerdown", J),
                  window.removeEventListener("pointerup", X),
                  window.removeEventListener("pointercancel", X),
                  window.removeEventListener("pointerout", Y);
              }
            );
          }, [i]),
          (0, t.jsxs)("div", {
            ref: c,
            className: (0, n.cn)(
              "hero" === i ? "absolute inset-0" : "relative h-44 sm:h-56",
              "pointer-events-none",
              e
            ),
            children: [
              (0, t.jsx)("canvas", {
                ref: d,
                "aria-hidden": !0,
                className: "absolute inset-0 h-full w-full",
              }),
              !h &&
                (0, t.jsx)("p", {
                  className:
                    "absolute top-[calc(var(--staff-top,40%)_-_2.75rem)] right-[var(--staff-right,2rem)] font-display text-[15px] text-hush italic",
                  children: "Listening for Robinhood Chain…",
                }),
            ],
          })
        );
      },
    ]);
  },
  10759,
  (e) => {
    "use strict";
    var t = e.i(18050),
      a = e.i(71645),
      n = e.i(52012),
      r = e.i(44616),
      l = e.i(37195),
      o = e.i(15092),
      s = e.i(75379),
      i = e.i(45060),
      c = e.i(28976);
    let d = (0, l.parseAbi)([
      "function latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)",
      "function decimals() view returns (uint8)",
    ]);
    e.s([
      "ConnectionStatus",
      0,
      function ({ className: e }) {
        let { status: a } = (0, c.useChainPulse)();
        return (0, t.jsxs)("p", {
          className: (0, i.cn)("flex items-center gap-2.5 text-hush", e),
          children: [
            (0, t.jsx)("span", {
              "aria-hidden": !0,
              className: (0, i.cn)(
                "h-2 w-2 rounded-full",
                "live" === a ? "animate-breathe bg-brass" : "bg-faint"
              ),
            }),
            "live" === a
              ? "Live. Reading new blocks about once a second."
              : "connecting" === a
              ? "Connecting to Robinhood Chain…"
              : "Lost the connection. Retrying…",
          ],
        });
      },
      "NetworkStats",
      0,
      function () {
        let {
            latest: e,
            recent: l,
            finalizedLagSec: i,
          } = (0, c.useChainPulse)(),
          {
            blockTimeMs: h,
            txPerSec: m,
            baseFeeGwei: u,
          } = (0, c.pulseStats)(l.slice(-60)),
          {
            ethUsd: p,
            ethAt: x,
            ethStale: f,
            usdg: b,
          } = (function () {
            let [e, t] = (0, a.useState)({});
            return (
              (0, a.useEffect)(() => {
                if (!o.CHAINLINK_ETH_USD && !o.USDG) return;
                let e = !0,
                  a = async () => {
                    try {
                      let [a, l, s] = await Promise.all([
                        o.CHAINLINK_ETH_USD &&
                          o.publicClient.readContract({
                            address: o.CHAINLINK_ETH_USD,
                            abi: d,
                            functionName: "latestRoundData",
                          }),
                        o.CHAINLINK_ETH_USD &&
                          o.publicClient.readContract({
                            address: o.CHAINLINK_ETH_USD,
                            abi: d,
                            functionName: "decimals",
                          }),
                        o.USDG &&
                          o.publicClient.readContract({
                            address: o.USDG.address,
                            abi: n.erc20Abi,
                            functionName: "totalSupply",
                          }),
                      ]);
                      if (!e) return;
                      let i = a ? Number(a[3]) : void 0;
                      t({
                        ethUsd:
                          a && null != l
                            ? Number((0, r.formatUnits)(a[1], l))
                            : void 0,
                        ethAt: i,
                        ethStale: null != i && Date.now() / 1e3 - i > 93600,
                        usdg:
                          null != s && o.USDG
                            ? Number((0, r.formatUnits)(s, o.USDG.decimals))
                            : void 0,
                      });
                    } catch {}
                  };
                a();
                let l = setInterval(a, 3e4);
                return () => {
                  (e = !1), clearInterval(l);
                };
              }, []),
              e
            );
          })(),
          w = x
            ? new Date(1e3 * x).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : null,
          v = [
            {
              label: "Latest block",
              value: e
                ? (0, t.jsx)("a", {
                    href: (0, o.explorerBlock)(e.number),
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hover:text-moon",
                    children: (0, s.formatInt)(e.number),
                  })
                : "–",
            },
            {
              label: "Average block time",
              note: "Last 60 blocks",
              value: h ? `${Math.round(h)} ms` : "–",
            },
            {
              label: "Transactions per second",
              value: m ? (0, s.formatInt)(m) : "–",
            },
            { label: "Base fee", value: u ? `${u.toPrecision(3)} gwei` : "–" },
            {
              label: "Ethereum-final after",
              note: "From a new block to its Ethereum finality",
              value: i ? `about ${Math.round(i / 60)} min` : "–",
            },
            ...(o.CHAINLINK_ETH_USD
              ? [
                  {
                    label: "ETH price",
                    note: w
                      ? `Chainlink, as of ${w}${f ? ", over a day old" : ""}`
                      : "Chainlink",
                    value: p ? (0, s.formatUsd)(p) : "–",
                  },
                ]
              : []),
            ...(o.USDG
              ? [
                  {
                    label: "USDG supply",
                    note: "Paxos Global Dollar",
                    value: b ? (0, s.formatCompact)(b) : "–",
                  },
                ]
              : []),
          ];
        return (0, t.jsx)("dl", {
          className: "border-b border-line",
          children: v.map((e) =>
            (0, t.jsxs)(
              "div",
              {
                className:
                  "flex items-baseline justify-between gap-6 border-t border-line py-4",
                children: [
                  (0, t.jsxs)("dt", {
                    children: [
                      (0, t.jsx)("span", {
                        className: "text-[15px] text-mist",
                        children: e.label,
                      }),
                      e.note &&
                        (0, t.jsx)("span", {
                          className: "mt-0.5 block text-[13px] text-hush",
                          children: e.note,
                        }),
                    ],
                  }),
                  (0, t.jsx)("dd", {
                    className:
                      "tnum text-right text-xl font-light text-mist sm:text-2xl",
                    children: e.value,
                  }),
                ],
              },
              e.label
            )
          ),
        });
      },
      "RecentBlocks",
      0,
      function () {
        let { latest: e, recent: a } = (0, c.useChainPulse)(),
          n = a.slice(-20).reverse();
        return e
          ? (0, t.jsx)("div", {
              className: "overflow-x-auto",
              children: (0, t.jsxs)("table", {
                className: "w-full text-[15px]",
                children: [
                  (0, t.jsx)("caption", {
                    className: "sr-only",
                    children: "The 20 most recent blocks, newest first",
                  }),
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      className: "text-hush",
                      children: [
                        (0, t.jsx)("th", {
                          scope: "col",
                          className:
                            "py-2 pr-2 text-left font-normal sm:pr-4 whitespace-nowrap",
                          children: "Block",
                        }),
                        (0, t.jsx)("th", {
                          scope: "col",
                          className:
                            "px-2 py-2 text-right font-normal whitespace-nowrap sm:px-4",
                          children: "Age",
                        }),
                        (0, t.jsx)("th", {
                          scope: "col",
                          className:
                            "px-2 py-2 text-right font-normal whitespace-nowrap sm:px-4",
                          children: "Txs",
                        }),
                        (0, t.jsxs)("th", {
                          scope: "col",
                          className:
                            "px-2 py-2 text-right font-normal whitespace-nowrap sm:px-4",
                          children: [
                            (0, t.jsx)("span", {
                              className: "sm:hidden",
                              children: "Gas",
                            }),
                            (0, t.jsx)("span", {
                              className: "hidden sm:inline",
                              children: "Gas used",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("th", {
                          scope: "col",
                          className:
                            "py-2 pl-2 text-right font-normal whitespace-nowrap sm:pl-4",
                          children: [
                            (0, t.jsx)("span", {
                              className: "sm:hidden",
                              children: "Gwei",
                            }),
                            (0, t.jsx)("span", {
                              className: "hidden sm:inline",
                              children: "Base fee (gwei)",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    className: "tnum",
                    children: n.map((a) => {
                      let n;
                      return (0, t.jsxs)(
                        "tr",
                        {
                          className: "border-t border-line",
                          children: [
                            (0, t.jsx)("td", {
                              className: "py-2.5 pr-2 sm:pr-4",
                              children: (0, t.jsx)("a", {
                                href: (0, o.explorerBlock)(a.number),
                                target: "_blank",
                                rel: "noreferrer",
                                className: "text-mist hover:text-moon",
                                children: (0, s.formatInt)(a.number),
                              }),
                            }),
                            (0, t.jsxs)("td", {
                              className: "px-2 text-right sm:px-4 text-hush",
                              children: [e.timestamp - a.timestamp, " s"],
                            }),
                            (0, t.jsx)("td", {
                              className: "px-2 text-right sm:px-4 text-mist",
                              children: a.txCount,
                            }),
                            (0, t.jsx)("td", {
                              className: "px-2 text-right sm:px-4 text-hush",
                              children: (0, s.formatCompact)(Number(a.gasUsed)),
                            }),
                            (0, t.jsx)("td", {
                              className: "pl-2 text-right sm:pl-4 text-hush",
                              children:
                                null == (n = a.baseFeePerGas)
                                  ? "–"
                                  : (Number(n) / 1e9).toPrecision(3),
                            }),
                          ],
                        },
                        a.number.toString()
                      );
                    }),
                  }),
                ],
              }),
            })
          : (0, t.jsx)("p", {
              className: "border-t border-line py-4 text-hush",
              children: "Listening for Robinhood Chain…",
            });
      },
    ]);
  },
]);
