(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  56102,
  (e) => {
    "use strict";
    var t = e.i(56420);
    let r = {
      name: "receipt-text",
      size: 24,
      node: [
        ["path", { d: "M13 16H8", key: "wsln4y" }],
        ["path", { d: "M14 8H8", key: "1l3xfs" }],
        ["path", { d: "M16 12H8", key: "1fr5h0" }],
        [
          "path",
          {
            d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
            key: "ycz6yz",
          },
        ],
      ],
    };
    r.node;
    let n = (0, t.default)(r);
    e.s(["ReceiptText", 0, n], 56102);
  },
  40312,
  (e) => {
    "use strict";
    var t = e.i(18050),
      r = e.i(71645),
      n = e.i(45060),
      o = e.i(28976);
    let a = [0.7, 0.9, 1, 0.9, 0.7],
      i = 2 * Math.PI * 1.6,
      s = (e) => {
        let t = 43758.5453 * Math.sin(12.9898 * e);
        return t - Math.floor(t);
      };
    e.s([
      "HushCanvas",
      0,
      function ({ className: e, variant: l = "hero" }) {
        let d = (0, r.useRef)(null),
          u = (0, r.useRef)(null),
          c = "live" === (0, o.useChainPulse)().status,
          h = (0, r.useRef)(c),
          p = (0, r.useRef)(() => {});
        return (
          (0, r.useEffect)(() => {
            (h.current = c), p.current();
          }, [c]),
          (0, r.useEffect)(() => {
            let e = d.current,
              t = u.current,
              r = t?.getContext("2d");
            if (!e || !t || !r) return;
            let n = matchMedia("(prefers-reduced-motion: reduce)").matches,
              c = getComputedStyle(document.documentElement),
              [m, f, v, g, w] = [
                "--color-heat-2",
                "--color-heat-3",
                "--color-heat-4",
                "--color-heat-5",
                "--color-mist",
              ].map((e) => c.getPropertyValue(e).trim()),
              M = new Float64Array(512),
              x = new Float32Array(2560),
              y = 0,
              b = 0,
              A = 8,
              C = new Float32Array(5),
              S = new Float32Array(5),
              k = 0,
              E = 0,
              T = 0,
              N = 0,
              _ = 0,
              R = 0,
              L = 0,
              P = 0,
              F = new Float32Array(0),
              O = null,
              j = null,
              B = 0,
              $ = 0,
              H = 0,
              I = 0,
              q = 0,
              D = 0,
              K = !0,
              U = (e) => {
                if (!k || !O || !j) return;
                let t = q ? Math.min(0.1, (e - q) / 1e3) : 0;
                (q = e), (I += (H - I) * (n ? 1 : 1 - Math.exp(-t / 0.18)));
                let o = h.current;
                for (; b; ) {
                  let t = (e - M[(y - b) % 512]) / 1e3;
                  if (R - 80 * t + 3 * (4 + 1.1 * t) > 0) break;
                  b--;
                }
                F.fill(0);
                for (let t = b; t > 0; t--) {
                  let r = (y - t) % 512,
                    o = Math.max(0, (e - M[r]) / 1e3),
                    a = R - 80 * o,
                    s = 4 + 1.1 * o,
                    l = Math.sqrt(4 / s),
                    d = n ? 0 : 0.5 * Math.exp(-o / 0.8);
                  for (let e = 0; e < 5; e++) {
                    let t =
                      d > 0.01 ? 0.5 + d * Math.cos(i * o + 0.35 * e) : 0.5;
                    C[e] = x[5 * r + e] * l * t;
                  }
                  let u = Math.max(0, Math.ceil((a - 3 * s) / 2)),
                    c = Math.min(T - 1, Math.floor((a + 3 * s) / 2));
                  for (let e = u; e <= c; e++) {
                    let t = (2 * e - a) / s,
                      r = Math.exp(-0.5 * t * t);
                    for (let t = 0; t < 5; t++) F[t * T + e] += C[t] * r;
                  }
                }
                r.clearRect(0, 0, k, E);
                let a = R / 2;
                (r.globalAlpha = 0.9),
                  (r.lineWidth = "hero" === l ? 1.8 : 1.4),
                  (r.lineJoin = "round"),
                  (r.strokeStyle = O);
                for (let t = 0; t < 5; t++) {
                  let n = _ + t * N,
                    i = n - $,
                    s = I * Math.exp(-(i * i) / 16200);
                  r.beginPath();
                  for (let i = 0; i < T; i++) {
                    let l = 2 * i,
                      d = F[t * T + i] * L;
                    if (
                      (o ||
                        (d += 1.2 * Math.sin(0.012 * l + 7e-4 * e + 0.9 * t)),
                      (d = P * Math.tanh(d / P)),
                      s > 0.003)
                    ) {
                      let e = l - B;
                      e * e < 72900 &&
                        (d *= 1 - s * Math.exp(-(e * e) / 16200));
                    }
                    i === a && (S[t] = n + d),
                      i ? r.lineTo(l, n + d) : r.moveTo(l, n + d);
                  }
                  r.stroke();
                }
                (r.globalAlpha = 1),
                  (r.globalCompositeOperation = "destination-out"),
                  (r.fillStyle = j),
                  r.fillRect(0, _ - P - 4, k, 4 * N + 2 * P + 8),
                  (r.globalCompositeOperation = "source-over");
                let s = (y - 1) % 512,
                  d =
                    b && o
                      ? Math.abs(x[5 * s + 2]) * Math.exp(-(e - M[s]) / 300)
                      : 0,
                  u = R - B,
                  c = _ + 2 * N - $,
                  p = 1 - I * Math.exp(-(u * u + c * c) / 16200);
                if (
                  ((r.strokeStyle = g),
                  (r.fillStyle = g),
                  (r.shadowColor = v),
                  (r.shadowBlur = (8 + 22 * d) * p),
                  (r.globalAlpha = o ? 0.6 : 0.25),
                  (r.lineWidth = 1),
                  r.beginPath(),
                  r.moveTo(R + 0.5, _ - N),
                  r.lineTo(R + 0.5, _ + 5 * N),
                  r.stroke(),
                  o)
                ) {
                  (r.globalAlpha = 0.95), r.beginPath();
                  for (let e = 0; e < 5; e++)
                    r.moveTo(R + 2.5, S[e]),
                      r.arc(R, S[e], 2.5, 0, 2 * Math.PI);
                  r.fill();
                }
                r.shadowBlur = 0;
              },
              z = (e) => {
                U(e), (D = requestAnimationFrame(z));
              },
              W = () => {
                D ||
                  (D = requestAnimationFrame((e) => {
                    (D = 0), U(e);
                  }));
              },
              G = () => {
                cancelAnimationFrame(D), (D = 0);
              };
            p.current = () => n && W();
            let J = (e) => {
                if (!K) return;
                let r = t.getBoundingClientRect();
                (B = e.clientX - r.left),
                  ($ = e.clientY - r.top),
                  (H = 1),
                  n && W();
              },
              X = () => {
                (H = 0), n && W();
              },
              V = (e) => "mouse" !== e.pointerType && X(),
              Y = (e) => !e.relatedTarget && X(),
              Q = new ResizeObserver(() => {
                let o = Math.min(2, window.devicePixelRatio || 1);
                (k = e.clientWidth),
                  (E = e.clientHeight),
                  k &&
                    E &&
                    ((t.width = Math.round(k * o)),
                    (t.height = Math.round(E * o)),
                    r.setTransform(o, 0, 0, o, 0, 0),
                    (F = new Float32Array(5 * (T = Math.ceil(k / 2) + 1))),
                    (N = Math.max(12, Math.min(22, Math.round(0.085 * E)))),
                    (_ = Math.round(E / 2) - 2 * N),
                    (L = 2 * N),
                    (P = 2.4 * N),
                    (R =
                      2 *
                      Math.round(
                        (k - Math.max(28, Math.min(120, 0.07 * k))) / 2
                      )),
                    (O = r.createLinearGradient(0, 0, k, 0)).addColorStop(0, m),
                    O.addColorStop((R - Math.min(460, 0.6 * R)) / k, m),
                    O.addColorStop((R - Math.min(220, 0.32 * R)) / k, f),
                    O.addColorStop((R - Math.min(80, 0.12 * R)) / k, v),
                    O.addColorStop(R / k, g),
                    O.addColorStop((R + 2) / k, w),
                    O.addColorStop(1, w),
                    (j = r.createLinearGradient(0, 0, k, 0)).addColorStop(
                      0,
                      "black"
                    ),
                    j.addColorStop((0.28 * R) / k, "transparent"),
                    j.addColorStop((R + 2) / k, "transparent"),
                    j.addColorStop((R + 24) / k, "rgb(0 0 0 / 0.6)"),
                    j.addColorStop(1, "rgb(0 0 0 / 0.7)"),
                    e.style.setProperty("--staff-top", `${_}px`),
                    e.style.setProperty("--staff-right", `${k - R}px`),
                    n && W());
              });
            Q.observe(e);
            let Z = new IntersectionObserver(([e]) => {
              (K = e.isIntersecting)
                ? D || n || !K || (D = requestAnimationFrame(z))
                : G();
            });
            Z.observe(e);
            let ee = (0, o.onPulseBlock)((e) => {
              let t = y++ % 512;
              (b = Math.min(b + 1, 512)),
                (M[t] = performance.now()),
                (A = Math.max(8, e.txCount, 0.98 * A));
              let r = Number(e.number % 65521n),
                o = (e.txCount / A) * (0.5 > s(r) ? -1 : 1);
              for (let e = 0; e < 5; e++)
                x[5 * t + e] = o * a[e] * (0.75 + 0.25 * s(r + 7.7 * e));
              n && performance.now() - q >= 1e3 && W();
            });
            return (
              window.addEventListener("pointermove", J, { passive: !0 }),
              window.addEventListener("pointerdown", J, { passive: !0 }),
              window.addEventListener("pointerup", V),
              window.addEventListener("pointercancel", V),
              window.addEventListener("pointerout", Y),
              () => {
                ee(),
                  Q.disconnect(),
                  Z.disconnect(),
                  G(),
                  (p.current = () => {}),
                  window.removeEventListener("pointermove", J),
                  window.removeEventListener("pointerdown", J),
                  window.removeEventListener("pointerup", V),
                  window.removeEventListener("pointercancel", V),
                  window.removeEventListener("pointerout", Y);
              }
            );
          }, [l]),
          (0, t.jsxs)("div", {
            ref: d,
            className: (0, n.cn)(
              "hero" === l ? "absolute inset-0" : "relative h-44 sm:h-56",
              "pointer-events-none",
              e
            ),
            children: [
              (0, t.jsx)("canvas", {
                ref: u,
                "aria-hidden": !0,
                className: "absolute inset-0 h-full w-full",
              }),
              !c &&
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
  26929,
  (e) => {
    "use strict";
    var t = e.i(18050),
      r = e.i(45060);
    e.s([
      "SafetyNumber",
      0,
      function ({ value: e, className: n }) {
        return (0, t.jsx)("p", {
          className: (0, r.cn)(
            "sharp grid max-w-xs grid-cols-4 gap-x-4 gap-y-1 font-display text-sm tnum sm:text-xl",
            n
          ),
          children: e
            .split(" ")
            .map((e, r) => (0, t.jsx)("span", { children: e }, r)),
        });
      },
    ]);
  },
  90991,
  (e) => {
    "use strict";
    var t = e.i(18050),
      r = e.i(71645);
    e.s([
      "AnimatedNumber",
      0,
      function ({
        value: e,
        format: n,
        className: o = "",
        durationMs: a = 550,
        flash: i = !1,
      }) {
        let [s, l] = (0, r.useState)(e),
          [d, u] = (0, r.useState)(""),
          c = (0, r.useRef)(e),
          h = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let t,
              r = c.current;
            c.current = e;
            let n = window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches;
            if (void 0 === e || void 0 === r || r === e || n) return void l(e);
            i &&
              (u(e > r ? "flash-up" : "flash-down"),
              (t = setTimeout(() => u(""), 720)));
            let o = performance.now(),
              s = (t) => {
                let n = Math.min(1, (t - o) / a);
                l(r + (e - r) * (1 === n ? 1 : 1 - Math.pow(2, -10 * n))),
                  n < 1 && (h.current = requestAnimationFrame(s));
              };
            return (
              (h.current = requestAnimationFrame(s)),
              () => {
                t && clearTimeout(t),
                  h.current && cancelAnimationFrame(h.current);
              }
            );
          }, [e, a, i]),
          (0, t.jsx)("span", { className: `tnum ${d} ${o}`, children: n(s) })
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
      a = { md: "h-10 px-5 text-[15px]", lg: "h-12 px-7 text-base" };
    function i({ variant: e = "primary", size: t = "md", className: r } = {}) {
      return (0, n.cn)(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-300 ease-quiet active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        o[e],
        a[t],
        r
      );
    }
    e.s([
      "Button",
      0,
      function ({ variant: e, size: r, className: n, ...o }) {
        return (0, t.jsx)("button", {
          className: i({ variant: e, size: r, className: n }),
          ...o,
        });
      },
      "ButtonLink",
      0,
      function ({ variant: e, size: n, className: o, ...a }) {
        return (0, t.jsx)(r.default, {
          className: i({ variant: e, size: n, className: o }),
          ...a,
        });
      },
      "buttonClass",
      0,
      i,
    ]);
  },
  94046,
  (e) => {
    "use strict";
    let t,
      r = "https://llm.chutes.ai/v1";
    e.s([
      "BITTENSOR_MARGIN",
      0,
      0.2,
      "CHUTES",
      0,
      r,
      "MAX_TOKENS",
      0,
      1024,
      "chutesModels",
      0,
      function () {
        if (!t || Date.now() - t.at > 6e5) {
          let e = fetch(`${r}/models`).then(async (e) => {
              var t;
              let r;
              if (!e.ok)
                throw Error(`Chutes' model list answered HTTP ${e.status}`);
              return (
                (t = await e.json()),
                Array.isArray((r = t?.data))
                  ? r.flatMap((e) => {
                      let t = Number(e?.pricing?.prompt),
                        r = Number(e?.pricing?.completion),
                        n = Number(e?.context_length);
                      return e?.confidential_compute === !0 &&
                        "string" == typeof e.id &&
                        t >= 0 &&
                        r >= 0 &&
                        n > 0
                        ? [
                            {
                              id: e.id,
                              name: e.id.split("/").pop().replace(/-TEE$/, ""),
                              context: n,
                              input: t,
                              output: r,
                            },
                          ]
                        : [];
                    })
                  : []
              );
            }),
            n = { at: Date.now(), models: e };
          (t = n), e.catch(() => t === n && (t = void 0));
        }
        return t.models;
      },
      "costUsd",
      0,
      (e, t) =>
        (t.prompt_tokens * e.input + t.completion_tokens * e.output) / 1e6,
      "creditsMicroUsd",
      0,
      (e, t) =>
        Math.ceil(
          (t.prompt_tokens * e.input + t.completion_tokens * e.output) * 1.2
        ),
      "estimateTokens",
      0,
      (e) => Math.ceil(new TextEncoder().encode(e).length / 3),
      "parseChunk",
      0,
      function (e) {
        let t = (e) => ("string" == typeof e ? e : ""),
          r = (e) => ("number" == typeof e && e >= 0 ? e : NaN);
        try {
          let n = JSON.parse(e),
            o = n?.choices?.[0],
            a = o?.delta ?? {},
            i = {
              prompt_tokens: r(n?.usage?.prompt_tokens),
              completion_tokens: r(n?.usage?.completion_tokens),
            };
          return {
            text: t(a.content),
            thought: t(a.reasoning_content) || t(a.reasoning),
            finish: t(o?.finish_reason) || void 0,
            usage:
              i.prompt_tokens >= 0 && i.completion_tokens >= 0 ? i : void 0,
          };
        } catch {
          return { text: "", thought: "" };
        }
      },
      "sseReader",
      0,
      function (e) {
        let t = new TextDecoder(),
          r = "";
        return (n) => {
          let o = (r + t.decode(n, { stream: !0 })).split("\n");
          for (let t of ((r = o.pop() ?? ""), o)) {
            let r = t.startsWith("data:") ? t.slice(5).trim() : "";
            r && "[DONE]" !== r && e(r);
          }
        };
      },
    ]);
  },
  74429,
  (e) => {
    "use strict";
    var t = e.i(23838),
      r = e.i(11493);
    function n(e, r, n) {
      return `Inferno node key v1
Address: ${(0, t.getAddress)(e)}
Key: ${r}
Chain: ${n}
This key serves AI answers for this wallet. Signing is free and moves no funds.`;
    }
    async function o(e) {
      try {
        return await (0, r.verifyMessage)({
          address: e.address,
          message: n(e.address, e.key, e.chainId),
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
      n,
      "verifyNodeOffer",
      0,
      o,
    ]);
  },
]);
