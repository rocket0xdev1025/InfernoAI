(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  57936,
  (e) => {
    "use strict";
    var t = e.i(18050),
      s = e.i(71645),
      a = e.i(90991),
      r = e.i(59544);
    let n = [
        { id: "1b", name: "1B class", gb: 0.9 },
        { id: "8b", name: "8B class", gb: 4.7 },
        { id: "70b", name: "70B class", gb: 40 },
      ],
      i = [
        { id: "rtx-4090", name: "RTX 4090", gbps: 1008, memGB: 24 },
        { id: "rx-7900-xtx", name: "Radeon RX 7900 XTX", gbps: 960, memGB: 24 },
        { id: "rtx-3090", name: "RTX 3090", gbps: 936, memGB: 24 },
        { id: "rtx-4080", name: "RTX 4080", gbps: 717, memGB: 16 },
        { id: "m3-max", name: "Apple M3 Max", gbps: 400, memGB: 128, upTo: !0 },
        { id: "rtx-3060", name: "RTX 3060 12GB", gbps: 360, memGB: 12 },
        { id: "m2", name: "Apple M2", gbps: 100, memGB: 24, upTo: !0 },
      ],
      l = {
        small: { label: "Small", model: n[1], credits: 1 },
        large: { label: "Large", model: n[2], credits: 6 },
      },
      o = (e, t, s = !1) => (e * (s ? 0.65 : 0.55)) / t,
      d = (e, t) => e / t / 1e6;
    function m(e) {
      let t = [...e].sort((e, t) => e - t),
        s = t.length >> 1;
      return t.length % 2 ? t[s] : (t[s - 1] + t[s]) / 2;
    }
    class c extends Error {}
    let h = () => "gpu" in navigator,
      x = `
@group(0) @binding(0) var<storage, read_write> data: array<vec4<f32>>;

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) id: vec3<u32>, @builtin(num_workgroups) groups: vec3<u32>) {
  let stride = groups.x * 256u;
  for (var i = id.x; i < arrayLength(&data); i += stride) {
    data[i] = data[i] + vec4<f32>(1.0);
  }
}`;
    async function u(e) {
      let t = await navigator.gpu?.requestAdapter({
        powerPreference: "high-performance",
      });
      if (!t)
        throw new c(
          "Your browser has WebGPU but didn't hand this page a graphics card. Hardware acceleration may be off in its settings."
        );
      let s = Math.min(0x10000000, t.limits.maxStorageBufferBindingSize),
        a = await t.requestDevice({
          requiredLimits: { maxStorageBufferBindingSize: s },
        }),
        r = !1;
      a.lost.then(() => (r = !0));
      try {
        a.pushErrorScope("out-of-memory"), a.pushErrorScope("validation");
        let n = a.createBuffer({ size: s, usage: 128 }),
          i = a.createShaderModule({ code: x }),
          l = a.createComputePipeline({
            layout: "auto",
            compute: { module: i, entryPoint: "main" },
          }),
          o = a.createBindGroup({
            layout: l.getBindGroupLayout(0),
            entries: [{ binding: 0, resource: { buffer: n } }],
          }),
          h = await a.popErrorScope();
        if (await a.popErrorScope())
          throw new c(
            `Your GPU couldn't set aside ${
              s / 1048576
            } MB for the test. Close other apps that use it and try again.`
          );
        if (h) throw Error(h.message);
        let u = async (e) => {
          let t = a.createCommandEncoder(),
            s = t.beginComputePass();
          s.setPipeline(l), s.setBindGroup(0, o);
          for (let t = 0; t < e; t++) s.dispatchWorkgroups(4096);
          s.end();
          let n = performance.now();
          if (
            (a.queue.submit([t.finish()]),
            await a.queue.onSubmittedWorkDone(),
            r)
          )
            throw new c(
              "The GPU was reset during the test. Close other apps that use it and try again."
            );
          return performance.now() - n;
        };
        e(0, 9), await u(1);
        let p = Math.min(
            400,
            Math.max(1, Math.round(300 / Math.max(0.05, (await u(2)) / 2)))
          ),
          g = [];
        for (let t = 1; t <= 9; t++)
          g.push(d(2 * s * p, await u(p))), e(t, 9, m(g));
        let f = t.info ?? {},
          b =
            f.description ||
            [f.vendor, f.architecture].filter(Boolean).join(" ");
        return {
          gbps: m(g),
          name: b.charAt(0).toUpperCase() + b.slice(1),
          maxBufferSize: t.limits.maxBufferSize,
          testBytes: s,
        };
      } finally {
        a.destroy();
      }
    }
    var p = e.i(75379),
      g = e.i(45060);
    let f = "mx-auto max-w-7xl px-5 sm:px-8",
      b = () => () => {},
      y = (e) => Math.min(1, Math.max(0, Math.log(e / 10) / Math.log(200))),
      j = [
        ["Apple M2", 100],
        ["RTX 3060", 360],
        ["RTX 4090", 1008],
      ],
      w =
        "repeating-linear-gradient(90deg, var(--color-night) 0 10px, transparent 10px 14px)",
      N = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }),
      v = new Intl.NumberFormat("en-US", {
        notation: "compact",
        compactDisplay: "long",
        maximumFractionDigits: 1,
      }),
      k = (e) => (e < 10 ? N.format(e) : (0, p.formatInt)(e)),
      S = (e) => {
        if (void 0 === e) return "–";
        let t = 2 * (e < 1e3);
        return e.toLocaleString("en-US", {
          minimumFractionDigits: t,
          maximumFractionDigits: t,
        });
      },
      G = (e) =>
        e >= 0x40000000
          ? `${N.format(e / 0x40000000)} GB`
          : `${(0, p.formatInt)(e / 1048576)} MB`,
      B = (e, t) => `${e} ${t}${1 === e ? "" : "s"}`;
    function T({ value: e, running: s }) {
      let a = e > 0 ? y(e) : 0,
        r = {
          width: `${100 * a}%`,
          backgroundSize: `${100 / Math.max(a, 0.01)}% 100%`,
        };
      return (0, t.jsxs)("div", {
        className: "mt-8",
        children: [
          (0, t.jsxs)("div", {
            role: "meter",
            "aria-label": "Memory bandwidth",
            "aria-valuemin": 0,
            "aria-valuemax": 2e3,
            "aria-valuenow": Math.round(e),
            "aria-valuetext": `${(0, p.formatInt)(e)} GB/s`,
            className: "relative h-14 sm:h-16",
            children: [
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                className: (0, g.cn)(
                  "heat-fill absolute inset-y-0 left-0 blur-xl transition-all duration-700 ease-quiet",
                  s ? "opacity-70 motion-safe:animate-pulse" : "opacity-35"
                ),
                style: r,
              }),
              (0, t.jsx)("div", {
                "aria-hidden": !0,
                className: "absolute inset-0 bg-night-3",
                style: { maskImage: w, WebkitMaskImage: w },
                children: (0, t.jsx)("div", {
                  className:
                    "heat-fill h-full transition-all duration-700 ease-quiet",
                  style: r,
                }),
              }),
            ],
          }),
          (0, t.jsx)("div", {
            "aria-hidden": !0,
            className: "relative mt-2 h-9 text-[13px] text-hush",
            children: j.map(([e, s]) =>
              (0, t.jsxs)(
                "span",
                {
                  className:
                    "absolute top-0 flex -translate-x-1/2 flex-col items-center",
                  style: { left: `${100 * y(s)}%` },
                  children: [
                    (0, t.jsx)("span", {
                      className: "h-2 w-px bg-line-bright",
                    }),
                    (0, t.jsx)("span", {
                      className: "mt-1 whitespace-nowrap",
                      children: e,
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
    e.s(
      [
        "GpuEstimator",
        0,
        function () {
          var e, d;
          let m,
            x,
            y,
            j = (0, s.useSyncExternalStore)(b, h, () => !0),
            [w, N] = (0, s.useState)({ state: "idle" }),
            [U, P] = (0, s.useState)(null),
            [E, C] = (0, s.useState)("rtx-3060"),
            [$, M] = (0, s.useState)(8),
            [A, D] = (0, s.useState)(30),
            [_, I] = (0, s.useState)("small"),
            q = U
              ? [
                  { id: "mine", name: "Your GPU, tested here", gbps: U.gbps },
                  ...i,
                ]
              : i,
            L = q.find((e) => e.id === E) ?? q[0],
            R = "mine" === L.id,
            W = R ? "your GPU" : `the ${L.name}`,
            F = (e) => void 0 !== L.memGB && e > L.memGB,
            z = F(l.large.model.gb) ? l.small : l[_],
            O = o(L.gbps, z.model.gb, R),
            H =
              ((e = A / 100),
              (d = z.credits),
              (y = 0.7 * (x = ((m = 3600 * O * $ * 30 * e) / 1e3) * d * 0.01)),
              { tokens: m, gross: x, month: y, year: 12 * y }),
            Y = "running" === w.state,
            X = (Y ? w.gbps : U?.gbps) ?? 0,
            K = Y
              ? 0 === w.done
                ? "Warming up your GPU…"
                : `Pass ${w.done} of ${w.total}`
              : "failed" === w.state
              ? w.message
              : U
              ? `Done. Your GPU moved about ${(0, p.formatInt)(
                  U.gbps
                )} GB of memory a second.`
              : j
              ? "It takes a few seconds. Nothing downloads, and nothing leaves this page."
              : "This browser doesn't have WebGPU, so it can't test your GPU from here. Try a recent Chrome, Edge or Safari on a computer, or pick your card from the list below.";
          async function J() {
            N({ state: "running", done: 0, total: 1 });
            try {
              let e = await u((e, t, s) =>
                N({ state: "running", done: e, total: t, gbps: s })
              );
              P(e), C("mine"), N({ state: "idle" });
            } catch (e) {
              N({
                state: "failed",
                message:
                  e instanceof c
                    ? e.message
                    : "The test stopped before it finished. Try again, or pick your card from the list below.",
              });
            }
          }
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("section", {
                id: "test",
                "aria-labelledby": "test-title",
                className: "border-t border-line",
                children: [
                  (0, t.jsxs)("div", {
                    className: (0, g.cn)(
                      f,
                      "grid gap-x-16 gap-y-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
                    ),
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("h2", {
                            id: "test-title",
                            className: "wide text-4xl sm:text-6xl",
                            children: "Test my GPU",
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-5 max-w-[52ch] text-hush",
                            children:
                              "To write each token, about three quarters of a word, a model reads all of its weights from GPU memory. So how fast your card moves memory sets how fast it can answer. This test measures that with WebGPU, right in this tab.",
                          }),
                          (0, t.jsx)(r.Button, {
                            size: "lg",
                            className: "mt-8",
                            onClick: () => void J(),
                            disabled: !j || Y,
                            children: Y
                              ? "Testing…"
                              : U
                              ? "Test again"
                              : "Test my GPU",
                          }),
                          (0, t.jsx)("p", {
                            "aria-live": "polite",
                            className: (0, g.cn)(
                              "mt-4 max-w-[52ch] text-[15px]",
                              "failed" === w.state ? "text-ember" : "text-hush"
                            ),
                            children: K,
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsxs)("p", {
                            className: "flex flex-wrap items-baseline gap-x-4",
                            children: [
                              (0, t.jsx)(a.AnimatedNumber, {
                                value: X,
                                format: (e) => (0, p.formatInt)(e ?? 0),
                                className:
                                  "wide font-display text-[clamp(3.5rem,15vw,9rem)] leading-none font-extrabold",
                              }),
                              (0, t.jsx)("span", {
                                className: "text-xl text-hush sm:text-2xl",
                                children: "GB/s",
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-3 text-hush",
                            children:
                              "Memory bandwidth, estimated in this browser",
                          }),
                          (0, t.jsx)(T, { value: X, running: Y }),
                          U &&
                            (0, t.jsxs)("dl", {
                              className:
                                "mt-6 grid gap-x-8 gap-y-4 border-t border-line pt-5 text-[15px] sm:grid-cols-3",
                              children: [
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("dt", {
                                      className: "text-hush",
                                      children: "GPU",
                                    }),
                                    (0, t.jsx)("dd", {
                                      className: "mt-1",
                                      children:
                                        U.name ||
                                        "Not reported by your browser",
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("dt", {
                                      className: "text-hush",
                                      children:
                                        "Largest block the browser allows",
                                    }),
                                    (0, t.jsx)("dd", {
                                      className: "tnum mt-1",
                                      children: G(U.maxBufferSize),
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("dt", {
                                      className: "text-hush",
                                      children: "Test data",
                                    }),
                                    (0, t.jsx)("dd", {
                                      className: "tnum mt-1",
                                      children: G(U.testBytes),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: (0, g.cn)(
                      f,
                      "grid gap-x-16 gap-y-14 pb-20 sm:pb-28 lg:grid-cols-2"
                    ),
                    children: [
                      (0, t.jsxs)("fieldset", {
                        children: [
                          (0, t.jsx)("legend", {
                            className: "font-display text-2xl font-extrabold",
                            children: "Which GPU?",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "mt-2 max-w-[52ch] text-[15px] text-hush",
                            children:
                              "Not on the computer with the GPU? Pick its card instead. Card figures are approximate, from spec sheets.",
                          }),
                          (0, t.jsx)("div", {
                            className: "mt-5 border-b border-line",
                            children: q.map((e) =>
                              (0, t.jsxs)(
                                "label",
                                {
                                  className:
                                    "grid cursor-pointer grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-4 border-t border-line px-2 py-3 transition-colors hover:bg-night-2 has-checked:bg-night-2",
                                  children: [
                                    (0, t.jsx)("input", {
                                      type: "radio",
                                      name: "gpu",
                                      checked: e.id === L.id,
                                      onChange: () => C(e.id),
                                      className: "accent-flame",
                                    }),
                                    (0, t.jsx)("span", { children: e.name }),
                                    (0, t.jsxs)("span", {
                                      className: "tnum text-right text-[15px]",
                                      children: [
                                        (0, p.formatInt)(e.gbps),
                                        " GB/s",
                                        (0, t.jsx)("span", {
                                          className:
                                            "block text-hush sm:ml-4 sm:inline",
                                          children:
                                            void 0 === e.memGB
                                              ? "Memory not reported"
                                              : `${e.upTo ? "Up to " : ""}${
                                                  e.memGB
                                                } GB`,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.id
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("h3", {
                            className: "text-2xl",
                            children: "Estimated speed",
                          }),
                          (0, t.jsxs)("p", {
                            className: "mt-2 text-[15px] text-hush",
                            children: [
                              "For ",
                              W,
                              ", with 4-bit models, one conversation at a time.",
                            ],
                          }),
                          (0, t.jsxs)("table", {
                            className:
                              "mt-5 w-full border-b border-line text-left",
                            children: [
                              (0, t.jsx)("thead", {
                                children: (0, t.jsxs)("tr", {
                                  className: "text-[15px] text-hush",
                                  children: [
                                    (0, t.jsx)("th", {
                                      scope: "col",
                                      className: "pb-2 font-normal",
                                      children: "Model",
                                    }),
                                    (0, t.jsx)("th", {
                                      scope: "col",
                                      className: "pb-2 font-normal",
                                      children: "Size",
                                    }),
                                    (0, t.jsx)("th", {
                                      scope: "col",
                                      className: "pb-2 text-right font-normal",
                                      children: "Tokens a second",
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("tbody", {
                                children: n.map((e) =>
                                  (0, t.jsxs)(
                                    "tr",
                                    {
                                      className: "border-t border-line",
                                      children: [
                                        (0, t.jsx)("th", {
                                          scope: "row",
                                          className: "py-3 font-normal",
                                          children: e.name,
                                        }),
                                        (0, t.jsxs)("td", {
                                          className: "tnum text-hush",
                                          children: [e.gb, " GB"],
                                        }),
                                        (0, t.jsx)("td", {
                                          className: "tnum text-right",
                                          children: F(e.gb)
                                            ? (0, t.jsxs)("span", {
                                                className: "text-hush",
                                                children: [
                                                  "Won't fit in ",
                                                  L.memGB,
                                                  " GB",
                                                ],
                                              })
                                            : `About ${k(o(L.gbps, e.gb, R))}`,
                                        }),
                                      ],
                                    },
                                    e.id
                                  )
                                ),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("p", {
                            className: "mt-4 text-[15px] text-hush",
                            children: [
                              R
                                ? "Speed is your tested bandwidth × 0.65 ÷ model size. Answering never reaches a card's spec bandwidth, and a tested figure is already below spec, so it takes off less than the 0.55 used for cards from the list."
                                : "Speed is bandwidth × 0.55 ÷ model size, because answering never quite reaches a card's spec bandwidth.",
                              void 0 === L.memGB &&
                                " Browsers don't report GPU memory, so check your card has room for the model.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("section", {
                id: "earn",
                "aria-labelledby": "earn-title",
                className: "border-t border-line",
                children: (0, t.jsxs)("div", {
                  className: (0, g.cn)(
                    f,
                    "grid gap-x-16 gap-y-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
                  ),
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("h2", {
                          id: "earn-title",
                          className: "wide text-4xl sm:text-6xl",
                          children: "What it could earn",
                        }),
                        (0, t.jsxs)("p", {
                          className: "mt-5 text-hush",
                          children: [
                            "For ",
                            W,
                            ". ",
                            "mine" === L.id
                              ? "The figures come from your test."
                              : "Test your GPU or pick another card to change it.",
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "mt-10 space-y-9",
                          children: [
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex items-baseline justify-between gap-4",
                                  children: [
                                    (0, t.jsx)("label", {
                                      htmlFor: "lend-hours",
                                      children: "Hours a day you lend",
                                    }),
                                    (0, t.jsx)("output", {
                                      htmlFor: "lend-hours",
                                      className:
                                        "tnum font-display text-2xl font-extrabold",
                                      children: $,
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("input", {
                                  id: "lend-hours",
                                  type: "range",
                                  min: 1,
                                  max: 24,
                                  value: $,
                                  onChange: (e) => M(Number(e.target.value)),
                                  "aria-valuetext": `${B($, "hour")} a day`,
                                  className:
                                    "mt-3 w-full cursor-pointer accent-flame",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "flex items-baseline justify-between gap-4",
                                  children: [
                                    (0, t.jsx)("label", {
                                      htmlFor: "lend-busy",
                                      children: "How busy it stays",
                                    }),
                                    (0, t.jsxs)("output", {
                                      htmlFor: "lend-busy",
                                      className:
                                        "tnum font-display text-2xl font-extrabold",
                                      children: [A, "%"],
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("input", {
                                  id: "lend-busy",
                                  type: "range",
                                  min: 5,
                                  max: 100,
                                  step: 5,
                                  value: A,
                                  onChange: (e) => D(Number(e.target.value)),
                                  "aria-valuetext": `${A}% of those hours`,
                                  "aria-describedby": "lend-busy-note",
                                  className:
                                    "mt-3 w-full cursor-pointer accent-flame",
                                }),
                                (0, t.jsx)("p", {
                                  id: "lend-busy-note",
                                  className: "mt-2 text-[15px] text-hush",
                                  children:
                                    "The share of those hours your GPU spends answering requests.",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("fieldset", {
                              children: [
                                (0, t.jsx)("legend", {
                                  children: "Model you serve",
                                }),
                                (0, t.jsx)("div", {
                                  className: "mt-3 border-b border-line",
                                  children: ["small", "large"].map((e) => {
                                    let s = l[e],
                                      a = F(s.model.gb);
                                    return (0, t.jsxs)(
                                      "label",
                                      {
                                        className: (0, g.cn)(
                                          "flex gap-3 border-t border-line px-2 py-3",
                                          a
                                            ? "cursor-not-allowed"
                                            : "cursor-pointer transition-colors hover:bg-night-2 has-checked:bg-night-2"
                                        ),
                                        children: [
                                          (0, t.jsx)("input", {
                                            type: "radio",
                                            name: "served",
                                            checked: z === s,
                                            disabled: a,
                                            onChange: () => I(e),
                                            className: "mt-1.5 accent-flame",
                                          }),
                                          (0, t.jsxs)("span", {
                                            children: [
                                              s.label,
                                              ", ",
                                              s.model.name,
                                              (0, t.jsx)("span", {
                                                className:
                                                  "block text-[15px] text-hush",
                                                children: a
                                                  ? `Needs about ${s.model.gb} GB, and ${W} has ${L.memGB} GB.`
                                                  : `${B(
                                                      s.credits,
                                                      "credit"
                                                    )} per 1,000 tokens${
                                                      "large" === e
                                                        ? ", planned"
                                                        : ""
                                                    }`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "lg:pt-28",
                      children: [
                        (0, t.jsxs)("p", {
                          className: "flex flex-wrap items-baseline gap-x-4",
                          children: [
                            (0, t.jsx)(a.AnimatedNumber, {
                              value: H.month,
                              format: S,
                              className:
                                "heat-text wide font-display text-[clamp(3rem,11vw,7.5rem)] leading-none font-extrabold",
                            }),
                            (0, t.jsx)("span", {
                              className: "text-xl text-hush",
                              children: "USDG a month",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          className:
                            "mt-6 flex flex-wrap items-baseline gap-x-4",
                          children: [
                            (0, t.jsx)(a.AnimatedNumber, {
                              value: H.year,
                              format: S,
                              className:
                                "wide font-display text-[clamp(2.25rem,7vw,4.5rem)] leading-none font-extrabold",
                            }),
                            (0, t.jsx)("span", {
                              className: "text-lg text-hush",
                              children: "USDG a year",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          className:
                            "mt-10 max-w-[60ch] border-t border-line pt-5 text-hush",
                          children: [
                            k(O),
                            " tokens a second, ",
                            A,
                            "% of the time, for ",
                            B($, "hour"),
                            " a day over 30 days comes to",
                            " ",
                            v.format(H.tokens),
                            " tokens a month. At ",
                            B(z.credits, "credit"),
                            " per 1,000 tokens, and $0.01 a credit, people would pay ",
                            (0, p.formatUsd)(H.gross),
                            " for them. You keep 70%, which is ",
                            S(H.month),
                            " USDG.",
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          className:
                            "mt-5 max-w-[60ch] border-l border-line-bright pl-4 text-[15px] text-mist",
                          children: [
                            "Estimate from ",
                            "mine" === L.id
                              ? "your benchmark"
                              : "the card you picked",
                            ". The small price is what the network charges today; the large price is planned. Real earnings depend on demand.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
      ],
      57936
    );
  },
  16645,
  (e) => {
    "use strict";
    var t = e.i(18050),
      s = e.i(71645),
      a = e.i(11071),
      r = e.i(59544),
      n = e.i(99),
      i = e.i(62528),
      l = e.i(15092),
      o = e.i(45060),
      d = e.i(75379),
      m = e.i(2279),
      c = e.i(75739),
      h = e.i(23838),
      x = e.i(75107),
      u = e.i(8178),
      p = e.i(31852),
      g = e.i(74429);
    let f = "This lender went offline. Try another.",
      b = {
        requests: 0,
        tokens: 0,
        waiting: 0,
        working: !1,
        lastAt: 0,
        failed: null,
      },
      y = (e) =>
        !!e &&
        ("user" === e.role || "assistant" === e.role) &&
        "string" == typeof e.content,
      j = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
      w = `${(0, d.formatUsd)(g.USD_PER_1K_TOKENS)} per 1,000 tokens`,
      N = `${Math.round(100 * g.LENDER_SHARE)}%`;
    function v({ n: e, title: s, children: a }) {
      return (0, t.jsxs)("li", {
        className:
          "grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 border-t border-line py-6 sm:grid-cols-[3rem_minmax(0,1fr)]",
        children: [
          (0, t.jsx)("span", {
            "aria-hidden": !0,
            className: "tnum font-display text-2xl font-extrabold text-faint",
            children: e,
          }),
          (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h3", { className: "text-2xl", children: s }),
              (0, t.jsx)("div", { className: "mt-4", children: a }),
            ],
          }),
        ],
      });
    }
    function k({ text: e, value: s }) {
      let r = Math.round(100 * s);
      return (0, t.jsxs)("div", {
        children: [
          (0, t.jsxs)("div", {
            className: "flex items-baseline justify-between gap-4 text-sm",
            children: [
              (0, t.jsx)("span", {
                className: "min-w-0 text-heat-4",
                children: e.split(". ")[0],
              }),
              (0, t.jsxs)("span", {
                className: "tnum shrink-0 text-hush",
                children: [r, "%"],
              }),
            ],
          }),
          (0, t.jsx)(a.HeatBar, {
            value: s,
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
    function S({ offer: e, tally: s, linked: a, paid: n, onStop: i }) {
      let l = (s.tokens / 1e3) * g.USD_PER_1K_TOKENS * g.LENDER_SHARE,
        m = [
          ["Requests served", (0, d.formatInt)(s.requests)],
          ["Tokens written", (0, d.formatInt)(s.tokens)],
          ["Waiting in line", (0, d.formatInt)(s.waiting)],
          ["Last request", s.lastAt ? j.format(s.lastAt) : "None yet"],
        ];
      return (0, t.jsxs)("div", {
        className:
          "relative self-start overflow-hidden rounded-3xl border border-line bg-night-2 p-5 sm:p-8",
        children: [
          (0, t.jsx)("div", {
            "aria-hidden": !0,
            className: (0, o.cn)(
              "heat-fill pointer-events-none absolute inset-x-0 -top-12 h-24 blur-3xl transition-opacity duration-700 ease-quiet",
              a
                ? s.working
                  ? "opacity-90 motion-safe:animate-pulse"
                  : "opacity-30"
                : "opacity-0"
            ),
          }),
          (0, t.jsxs)("div", {
            className: "relative",
            children: [
              (0, t.jsxs)("p", {
                "aria-live": "polite",
                className: "flex items-center gap-4",
                children: [
                  (0, t.jsx)("span", {
                    "aria-hidden": !0,
                    className: (0, o.cn)(
                      "h-3.5 w-3.5 shrink-0 rounded-full",
                      a
                        ? "bg-heat-4 shadow-[0_0_18px_var(--color-heat-4)] motion-safe:animate-breathe"
                        : "bg-faint"
                    ),
                  }),
                  (0, t.jsx)("span", {
                    className: (0, o.cn)(
                      "wide font-display text-[clamp(1.5rem,7.5vw,3.75rem)] leading-none font-extrabold",
                      a ? "heat-text" : "text-hush"
                    ),
                    children: a ? "Online" : "Connecting",
                  }),
                ],
              }),
              (0, t.jsxs)("p", {
                className: "mt-4 text-hush",
                children: [
                  "Serving ",
                  e.modelName,
                  " as ",
                  (0, t.jsx)("span", {
                    className: "tnum text-mist",
                    children: (0, d.shortAddress)(e.address),
                  }),
                  e.gpu && ` on ${e.gpu}`,
                  ". ",
                  s.working
                    ? "Writing an answer now."
                    : "Waiting for the next request.",
                ],
              }),
              (0, t.jsxs)("dl", {
                className:
                  "mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line",
                children: [
                  m.map(([e, s]) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className: "bg-night px-3 py-3 sm:px-4",
                        children: [
                          (0, t.jsx)("dt", {
                            className: "text-[13px] text-hush",
                            children: e,
                          }),
                          (0, t.jsx)("dd", {
                            className:
                              "tnum mt-1 font-display text-xl font-extrabold break-words sm:text-2xl",
                            children: s,
                          }),
                        ],
                      },
                      e
                    )
                  ),
                  (0, t.jsxs)("div", {
                    className: "col-span-2 bg-night px-3 py-4 sm:px-4",
                    children: [
                      (0, t.jsx)("dt", {
                        className: "text-[13px] text-hush",
                        children: n
                          ? "Earned this session"
                          : "Would have earned with payments on",
                      }),
                      (0, t.jsxs)("dd", {
                        className: "mt-1 flex flex-wrap items-baseline gap-x-2",
                        children: [
                          (0, t.jsx)("span", {
                            className:
                              "tnum font-display text-4xl font-extrabold",
                            children: l.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 4,
                            }),
                          }),
                          (0, t.jsx)("span", {
                            className: "text-hush",
                            children: "USDG",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("p", {
                className: "mt-3 text-[15px] text-faint",
                children: n
                  ? `Estimated from the tokens this tab wrote, at ${w}, of which you keep ${N}. The ledger records the exact amount, and during the beta it's paid out by hand in USDG.`
                  : `At ${w}, of which lenders keep ${N}. Payments are off on this site, so none of it is paid.`,
              }),
              s.failed &&
                (0, t.jsxs)("p", {
                  role: "alert",
                  className: "mt-5 text-[15px] text-ember",
                  children: ["The last request failed. ", s.failed],
                }),
              (0, t.jsx)("p", {
                className:
                  "mt-6 border-l border-line-bright pl-4 text-[15px] text-mist",
                children:
                  "Keep this page open while you serve, ideally in its own window. Leaving it, or letting the computer sleep, takes you offline.",
              }),
              (0, t.jsx)(r.Button, {
                variant: "quiet",
                className: "mt-8",
                onClick: i,
                children: "Go offline",
              }),
            ],
          }),
        ],
      });
    }
    e.s(
      [
        "ServeNode",
        0,
        function () {
          let {
              address: e,
              provider: a,
              onRobinhoodChain: j,
              switchToRobinhood: G,
            } = (0, i.useWallet)(),
            {
              gpu: B,
              status: T,
              load: U,
              online: P,
              tally: E,
              linked: C,
              signing: $,
              error: M,
              goOnline: A,
              goOffline: D,
            } = (function () {
              let e = (0, m.useWebGPU)(),
                {
                  status: t,
                  load: a,
                  generate: r,
                  stop: n,
                } = (0, m.useLocalModel)(),
                [i, o] = (0, s.useState)(null),
                [d, c] = (0, s.useState)(b),
                [j, w] = (0, s.useState)(!1),
                [N, v] = (0, s.useState)(!1),
                [k, S] = (0, s.useState)(null),
                G = (0, s.useEffectEvent)(r),
                B = (0, s.useEffectEvent)(n);
              async function T(s, a) {
                if ("ready" !== t.state || i || N) return;
                let r = t.model;
                S(null), v(!0);
                try {
                  let t = (0, u.newIdentity)(),
                    n = (0, g.nodeBindingMessage)(s, t.pub, l.CHAIN.id),
                    i = await a.request({
                      method: "personal_sign",
                      params: [(0, x.toHex)(n), s],
                    }),
                    d = {
                      address: (0, h.getAddress)(s),
                      key: t.pub,
                      model: r,
                      modelName: (0, m.modelName)(r),
                      gpu: ("ok" === e.state && e.name) || void 0,
                      chainId: l.CHAIN.id,
                      signature: i,
                    };
                  await (0, p.announceNode)(d),
                    c(b),
                    w(!1),
                    o({ node: t, offer: d });
                } catch (e) {
                  S(
                    e?.code === 4001
                      ? "You declined the signature, so this tab stays offline."
                      : e?.message || "Going online didn't work. Try again."
                  );
                } finally {
                  v(!1);
                }
              }
              return (
                (0, s.useEffect)(() => {
                  if (i)
                    return (function ({ node: e, offer: t }, s, a, r) {
                      let n = [],
                        i = null,
                        l = !1,
                        o = t.tps,
                        d = 0,
                        c = 0,
                        h = 0,
                        x = null,
                        b = () => {
                          l ||
                            a({
                              requests: d,
                              tokens: c,
                              waiting: n.length,
                              working: null !== i,
                              lastAt: h,
                              failed: x,
                            });
                        };
                      function j(e) {
                        if (e === i) return s.stop();
                        let t = n.indexOf(e);
                        t < 0 || (n.splice(t, 1), b());
                      }
                      function w(t, s) {
                        t.tail = t.tail.then(async () => {
                          let a = t.gone ? null : s();
                          !a ||
                            (await (0, p.sendSealed)(
                              (0, u.seal)(JSON.stringify(a), e, t.from)
                            ).catch(() => !1)) ||
                            ((t.gone = !0), j(t));
                        });
                      }
                      async function N(e) {
                        let a,
                          r,
                          n = "",
                          i = 0,
                          h = 0,
                          u = () => {
                            clearTimeout(a),
                              (a = void 0),
                              w(e, () => {
                                if (!n) return null;
                                let t = {
                                  t: "chunk",
                                  id: e.id,
                                  seq: h++,
                                  text: n,
                                  tps: i,
                                };
                                return (n = ""), t;
                              });
                          };
                        try {
                          let h = await s.generate(
                            (0, m.toPrompt)(e.turns, m.NETWORK_SYSTEM),
                            (e, t) => {
                              (n += e), (i = t), (a ??= setTimeout(u, 250));
                            }
                          );
                          (o = h.stats?.tps ?? o),
                            (r = l
                              ? { t: "error", id: e.id, message: f }
                              : {
                                  t: "done",
                                  id: e.id,
                                  stopped: h.stopped,
                                  stats: h.stats,
                                  gpu: t.gpu,
                                }),
                            e.gone ||
                              (d++,
                              (c += h.stats?.answerTokens ?? 0),
                              (x = null));
                        } catch (t) {
                          (x = (0, m.friendlyError)(
                            t instanceof Error ? t.message : String(t)
                          )),
                            (r = { t: "error", id: e.id, message: x });
                        }
                        u(), w(e, () => r), await e.tail;
                      }
                      async function v() {
                        if (!i) {
                          for (let e = n.shift(); e; e = n.shift())
                            (i = e), b(), await N(e);
                          (i = null), b();
                        }
                      }
                      let k = (0, p.listen)(
                          e,
                          function (s) {
                            let a = null;
                            try {
                              var r;
                              let t;
                              (r = (0, u.open)(s, e)),
                                (a =
                                  (t = JSON.parse(r)) &&
                                  "string" == typeof t.id &&
                                  !(t.id.length > 100)
                                    ? "stop" === t.t
                                      ? { t: "stop", id: t.id }
                                      : "infer" === t.t &&
                                        Array.isArray(t.turns) &&
                                        t.turns.every(y)
                                      ? { t: "infer", id: t.id, turns: t.turns }
                                      : null
                                    : null);
                            } catch {}
                            if (!a) return;
                            let { id: l } = a;
                            if ("stop" === a.t) {
                              let e = [i, ...n].find(
                                (e) => e?.id === l && e.from === s.from
                              );
                              if (!e) return;
                              j(e),
                                e !== i &&
                                  w(e, () => ({
                                    t: "done",
                                    id: l,
                                    stopped: !0,
                                  }));
                              return;
                            }
                            let o = {
                              id: l,
                              from: s.from,
                              turns: a.turns,
                              gone: !1,
                              tail: Promise.resolve(),
                            };
                            if (n.length >= 5)
                              return w(o, () => ({
                                t: "error",
                                id: l,
                                message: "This lender is busy. Try another.",
                              }));
                            let d = n.length + +!!i;
                            w(o, () => ({
                              t: "accepted",
                              id: l,
                              model: t.model,
                              ahead: d,
                            })),
                              n.push(o),
                              (h = Date.now()),
                              b(),
                              v();
                          },
                          r
                        ),
                        S = setInterval(
                          () =>
                            void (0, p.announceNode)({ ...t, tps: o }).catch(
                              () => {}
                            ),
                          g.HEARTBEAT_MS
                        );
                      return () => {
                        for (let e of ((l = !0),
                        clearInterval(S),
                        k(),
                        n.splice(0)))
                          w(e, () => ({ t: "error", id: e.id, message: f }));
                        i && s.stop();
                      };
                    })(
                      i,
                      { generate: (e, t) => G(e, t), stop: () => B() },
                      c,
                      w
                    );
                }, [i]),
                {
                  gpu: e,
                  status: t,
                  load: a,
                  online: i?.offer ?? null,
                  tally: d,
                  linked: j,
                  signing: N,
                  error: k,
                  goOnline: T,
                  goOffline: () => o(null),
                }
              );
            })(),
            [_, I] = (0, s.useState)(0),
            [q, L] = (0, s.useState)(null);
          (0, s.useEffect)(() => {
            let e = !0;
            return (
              (0, c.networkPaid)().then((t) => e && L(t)),
              () => {
                e = !1;
              }
            );
          }, []);
          let R = "ok" === B.state,
            W = (e) => (R && B.f16 ? m.MODELS[e].f16 : m.MODELS[e].f32),
            F = W(_),
            z = "ready" === T.state;
          return (0, t.jsx)("section", {
            id: "serve",
            "aria-labelledby": "serve-title",
            className: "border-t border-line",
            children: (0, t.jsxs)("div", {
              className: (0, o.cn)(
                "mx-auto max-w-7xl px-5 sm:px-8",
                "grid gap-x-16 gap-y-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
              ),
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("h2", {
                      id: "serve-title",
                      className:
                        "xwide text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]",
                      children: "Serve from this browser",
                    }),
                    (0, t.jsx)("p", {
                      className: "mt-6 max-w-[52ch] text-lg text-hush",
                      children:
                        "Load a model on your GPU and go online. This tab then answers chats for people on the network, who pick a lender by wallet address.",
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "mt-6 max-w-[52ch] border-l border-line-bright pl-4 text-mist",
                      children:
                        "People's words pass through this tab's memory to your GPU and are never shown or saved here. You never see who is asking.",
                    }),
                    (0, t.jsxs)("p", {
                      className: "mt-6 max-w-[52ch] text-[15px] text-hush",
                      children: [
                        "This runs on the beta relay.",
                        !0 === q &&
                          ` People pay for answers with Inferno credits, at ${w}, and you earn ${N} of each one your GPU serves. During the beta, payouts go out by hand, in USDG, to your wallet.`,
                        !1 === q &&
                          " Payments are off on this site, so network chat is free and serving earns nothing.",
                      ],
                    }),
                  ],
                }),
                P
                  ? (0, t.jsx)(S, {
                      offer: P,
                      tally: E,
                      linked: C,
                      paid: !0 === q,
                      onStop: D,
                    })
                  : (0, t.jsxs)("ol", {
                      className: "border-b border-line",
                      children: [
                        (0, t.jsxs)(v, {
                          n: 1,
                          title: "Connect your wallet",
                          children: [
                            e
                              ? j
                                ? (0, t.jsxs)("p", {
                                    children: [
                                      "Connected as ",
                                      (0, t.jsx)("span", {
                                        className: "tnum",
                                        children: (0, d.shortAddress)(e),
                                      }),
                                    ],
                                  })
                                : (0, t.jsxs)(r.Button, {
                                    onClick: () => void G().catch(() => {}),
                                    children: ["Switch to ", l.CHAIN.name],
                                  })
                              : (0, t.jsx)(n.ConnectCta, {
                                  className: (0, r.buttonClass)(),
                                }),
                            (0, t.jsx)("p", {
                              className: "mt-3 text-[15px] text-hush",
                              children:
                                "Your address is how people pick you, and where payouts go.",
                            }),
                          ],
                        }),
                        (0, t.jsx)(v, {
                          n: 2,
                          title: "Load a model",
                          children:
                            "missing" === B.state
                              ? (0, t.jsx)("p", {
                                  className: "text-hush",
                                  children:
                                    "This browser can't run a model. Serving needs WebGPU, in a recent Chrome or Edge on a computer.",
                                })
                              : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsxs)("fieldset", {
                                      disabled: "loading" === T.state || $,
                                      className: "border-b border-line",
                                      children: [
                                        (0, t.jsx)("legend", {
                                          className: "sr-only",
                                          children: "Model to serve",
                                        }),
                                        m.MODELS.map((e, s) => {
                                          let a;
                                          return (0, t.jsxs)(
                                            "label",
                                            {
                                              className:
                                                "flex cursor-pointer gap-3 border-t border-line px-2 py-3 transition-colors hover:bg-night-2 has-checked:bg-night-2 has-disabled:cursor-default",
                                              children: [
                                                (0, t.jsx)("input", {
                                                  type: "radio",
                                                  name: "serve-model",
                                                  checked: _ === s,
                                                  onChange: () => I(s),
                                                  className:
                                                    "mt-1.5 shrink-0 accent-flame",
                                                }),
                                                (0, t.jsxs)("span", {
                                                  className: "min-w-0 flex-1",
                                                  children: [
                                                    e.name,
                                                    (0, t.jsx)("span", {
                                                      className:
                                                        "block text-[15px] text-hush",
                                                      children: e.note,
                                                    }),
                                                  ],
                                                }),
                                                R &&
                                                  (0, t.jsx)("span", {
                                                    className:
                                                      "tnum shrink-0 pt-0.5 text-[15px] text-hush",
                                                    children:
                                                      (a = W(s).mb) >= 1024
                                                        ? `${(a / 1024).toFixed(
                                                            1
                                                          )} GB`
                                                        : `${Math.round(a)} MB`,
                                                  }),
                                              ],
                                            },
                                            e.name
                                          );
                                        }),
                                      ],
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "mt-4",
                                      children:
                                        "loading" === T.state
                                          ? (0, t.jsx)(k, {
                                              text: T.text,
                                              value: T.progress,
                                            })
                                          : (0, t.jsx)(r.Button, {
                                              onClick: () => U(F.id),
                                              disabled:
                                                !R ||
                                                $ ||
                                                (z && T.model === F.id),
                                              children:
                                                z && T.model === F.id
                                                  ? "Loaded"
                                                  : "Load model",
                                            }),
                                    }),
                                    "error" === T.state &&
                                      (0, t.jsx)("p", {
                                        role: "alert",
                                        className:
                                          "mt-3 text-[15px] text-ember",
                                        children: T.message,
                                      }),
                                    (0, t.jsx)("p", {
                                      className: "mt-3 text-[15px] text-hush",
                                      children:
                                        "Sizes are the graphics memory each model needs. The first load downloads it from Hugging Face; after that it's cached in this browser.",
                                    }),
                                  ],
                                }),
                        }),
                        (0, t.jsxs)(v, {
                          n: 3,
                          title: "Go online",
                          children: [
                            (0, t.jsx)(r.Button, {
                              size: "lg",
                              onClick: () => {
                                e && a && A(e, a);
                              },
                              disabled: !e || !j || !z || $,
                              children: $ ? "Check your wallet…" : "Go online",
                            }),
                            (0, t.jsxs)("p", {
                              className: "mt-3 text-[15px] text-hush",
                              children: [
                                z &&
                                  `You'll serve ${(0, m.modelName)(T.model)}. `,
                                "Your wallet signs a note that links this tab's key to your address. Signing is free and moves no funds.",
                              ],
                            }),
                            M &&
                              (0, t.jsx)("p", {
                                role: "alert",
                                className: "mt-3 text-[15px] text-ember",
                                children: M,
                              }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          });
        },
      ],
      16645
    );
  },
  11412,
  (e) => {
    "use strict";
    var t = e.i(18050),
      s = e.i(59544),
      a = e.i(99),
      r = e.i(62528),
      n = e.i(75379);
    e.s([
      "WalletCta",
      0,
      function () {
        let { address: e } = (0, r.useWallet)();
        return e
          ? (0, t.jsxs)("p", {
              className:
                "inline-flex h-12 items-center gap-1.5 rounded-full border border-line-bright px-6 text-mist",
              children: [
                "Connected as ",
                (0, t.jsx)("span", {
                  className: "tnum",
                  children: (0, n.shortAddress)(e),
                }),
              ],
            })
          : (0, t.jsx)(a.ConnectCta, {
              label: "Connect a wallet",
              className: (0, s.buttonClass)({ size: "lg" }),
            });
      },
    ]);
  },
]);
