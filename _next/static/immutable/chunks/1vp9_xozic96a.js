(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  91323,
  (e) => {
    "use strict";
    var t = e.i(56420);
    let n = {
      name: "badge-check",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
            key: "3c2336",
          },
        ],
        ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }],
      ],
      aliases: ["verified"],
    };
    n.node;
    let r = (0, t.default)(n);
    e.s(["BadgeCheck", 0, r], 91323);
  },
  56102,
  (e) => {
    "use strict";
    var t = e.i(56420);
    let n = {
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
    n.node;
    let r = (0, t.default)(n);
    e.s(["ReceiptText", 0, r], 56102);
  },
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
    function o({ value: e, className: r, ...s }) {
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
      o,
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
            (0, t.jsx)(o, {
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
      o = { md: "h-10 px-5 text-[15px]", lg: "h-12 px-7 text-base" };
    function a({ variant: e = "primary", size: t = "md", className: n } = {}) {
      return (0, r.cn)(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-300 ease-quiet active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        s[e],
        o[t],
        n
      );
    }
    e.s([
      "Button",
      0,
      function ({ variant: e, size: n, className: r, ...s }) {
        return (0, t.jsx)("button", {
          className: a({ variant: e, size: n, className: r }),
          ...s,
        });
      },
      "ButtonLink",
      0,
      function ({ variant: e, size: r, className: s, ...o }) {
        return (0, t.jsx)(n.default, {
          className: a({ variant: e, size: r, className: s }),
          ...o,
        });
      },
      "buttonClass",
      0,
      a,
    ]);
  },
  94046,
  (e) => {
    "use strict";
    let t,
      n = "https://llm.chutes.ai/v1";
    e.s([
      "BITTENSOR_MARGIN",
      0,
      0.2,
      "CHUTES",
      0,
      n,
      "MAX_TOKENS",
      0,
      1024,
      "chutesModels",
      0,
      function () {
        if (!t || Date.now() - t.at > 6e5) {
          let e = fetch(`${n}/models`).then(async (e) => {
              var t;
              let n;
              if (!e.ok)
                throw Error(`Chutes' model list answered HTTP ${e.status}`);
              return (
                (t = await e.json()),
                Array.isArray((n = t?.data))
                  ? n.flatMap((e) => {
                      let t = Number(e?.pricing?.prompt),
                        n = Number(e?.pricing?.completion),
                        r = Number(e?.context_length);
                      return e?.confidential_compute === !0 &&
                        "string" == typeof e.id &&
                        t >= 0 &&
                        n >= 0 &&
                        r > 0
                        ? [
                            {
                              id: e.id,
                              name: e.id.split("/").pop().replace(/-TEE$/, ""),
                              context: r,
                              input: t,
                              output: n,
                            },
                          ]
                        : [];
                    })
                  : []
              );
            }),
            r = { at: Date.now(), models: e };
          (t = r), e.catch(() => t === r && (t = void 0));
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
          n = (e) => ("number" == typeof e && e >= 0 ? e : NaN);
        try {
          let r = JSON.parse(e),
            s = r?.choices?.[0],
            o = s?.delta ?? {},
            a = {
              prompt_tokens: n(r?.usage?.prompt_tokens),
              completion_tokens: n(r?.usage?.completion_tokens),
            };
          return {
            text: t(o.content),
            thought: t(o.reasoning_content) || t(o.reasoning),
            finish: t(s?.finish_reason) || void 0,
            usage:
              a.prompt_tokens >= 0 && a.completion_tokens >= 0 ? a : void 0,
          };
        } catch {
          return { text: "", thought: "" };
        }
      },
      "sseReader",
      0,
      function (e) {
        let t = new TextDecoder(),
          n = "";
        return (r) => {
          let s = (n + t.decode(r, { stream: !0 })).split("\n");
          for (let t of ((n = s.pop() ?? ""), s)) {
            let n = t.startsWith("data:") ? t.slice(5).trim() : "";
            n && "[DONE]" !== n && e(n);
          }
        };
      },
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
        let { role: s, content: o } = e[t];
        if (((r += o.length), n.length > 0 && r > 8e3)) break;
        o && n.unshift({ role: s, content: o });
      }
      return [{ role: "system", content: t }, ...n];
    }
    function o(e) {
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
    let a = { amd: "AMD", nvidia: "NVIDIA" };
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
        o,
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
            [a, i] = (0, t.useState)({ state: "idle" });
          function l({ data: e }) {
            "progress" === e.type
              ? i((t) =>
                  "loading" === t.state
                    ? { ...t, text: e.text, progress: e.progress }
                    : t
                )
              : "ready" === e.type
              ? i({ state: "ready", model: e.model })
              : "delta" === e.type
              ? s.current?.onDelta(e.text, e.tps)
              : "done" === e.type
              ? s.current?.done(e)
              : s.current
              ? s.current.fail(Error(e.message))
              : i({ state: "error", message: o(e.message) });
          }
          return (
            (0, t.useEffect)(() => () => r.current?.terminate(), []),
            {
              status: a,
              load: function (t) {
                let n = r.current;
                n ||
                  (((n = e.r(65474)(Worker, { type: "module" })).onmessage = l),
                  (n.onerror = (e) => {
                    let t = e.message || "The model worker stopped.";
                    s.current?.fail(Error(t)),
                      i({ state: "error", message: o(t) }),
                      r.current?.terminate(),
                      (r.current = null);
                  }),
                  (r.current = n)),
                  i({
                    state: "loading",
                    model: t,
                    text: "Starting",
                    progress: 0,
                  }),
                  n.postMessage({ type: "load", model: t });
              },
              generate: async function e(e, t) {
                let o = r.current;
                if (!o) throw Error("Model not loaded");
                let a = (0, n.watchRequests)();
                try {
                  let n = await new Promise((n, r) => {
                    (s.current = { onDelta: t, done: n, fail: r }),
                      o.postMessage({ type: "chat", messages: e });
                  });
                  return {
                    hosts: [...new Set([...a(), ...n.hosts])],
                    stopped: n.stopped,
                    stats: n.stats,
                  };
                } catch (e) {
                  throw (a(), e);
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
                                a[e] ?? e.charAt(0).toUpperCase() + e.slice(1)
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
    var i = e.i(8178);
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
    function u(e, t, n) {
      let r,
        s,
        o = 1e3,
        a = !1,
        l = "";
      function c() {
        r?.close(),
          a || (n?.(!1), (s = setTimeout(u, o)), (o = Math.min(2 * o, 15e3)));
      }
      async function u() {
        try {
          let t = await fetch(
            `/api/relay/challenge?key=${encodeURIComponent(e.pub)}`,
            { cache: "no-store" }
          );
          if (!t.ok) throw Error(t.statusText);
          let { id: n, envelope: s } = await t.json(),
            o = (0, i.open)(s, e);
          if (a) return;
          let c = new URLSearchParams({ key: e.pub, id: n, proof: o });
          l && c.set("after", l),
            (r = new EventSource(`/api/relay/stream?${c}`));
        } catch {
          return c();
        }
        let s = (e) => (l = e.lastEventId || l);
        r.addEventListener("ready", s),
          r.addEventListener("bye", () => {
            r?.close(), u();
          }),
          (r.onmessage = (e) => {
            s(e);
            try {
              t(JSON.parse(e.data));
            } catch {}
          }),
          (r.onopen = () => {
            (o = 1e3), n?.(!0);
          }),
          (r.onerror = c);
      }
      return (
        u(),
        () => {
          (a = !0), clearTimeout(s), r?.close();
        }
      );
    }
    async function d(e) {
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
        u,
        "sendSealed",
        0,
        d,
      ],
      31852
    );
    let h = null,
      p = () =>
        (h ??= fetch("/api/credits/config", { cache: "no-store" })
          .then((e) => (e.ok ? e.json() : null))
          .then((e) => e?.enabled === !0)
          .catch(() => !1));
    async function f() {
      if (!(await p())) return !1;
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
    async function m(e, t, n) {
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
    class w extends Error {}
    let g = "That lender just went offline. Pick another.",
      y = "The relay didn't answer. Try again in a moment.";
    e.s(
      [
        "LenderGone",
        0,
        w,
        "networkPaid",
        0,
        p,
        "useRemoteModel",
        0,
        function () {
          let e = (0, t.useRef)(new Map()),
            r = (0, t.useRef)(null),
            o = (0, t.useRef)(null);
          function a(e) {
            let t,
              n = o.current;
            if (n && e.from === n.node.key) {
              try {
                t = JSON.parse((0, i.open)(e, n.me));
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
                          totalS: o,
                        } = e,
                        a = {
                          promptTokens: t,
                          answerTokens: n,
                          tps: r,
                          firstTokenS: s,
                          totalS: o,
                        };
                      return Object.values(a).every(
                        (e) => null === e || "number" == typeof e
                      )
                        ? a
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
              generate: async function t(t, l, c, h, p) {
                let k = await f(),
                  b = e.current.get(t) ?? (0, i.newIdentity)();
                e.current.set(t, b);
                let T = (function (e) {
                    if (r.current?.pub !== e.pub) {
                      r.current?.close();
                      let t = () => {},
                        n = new Promise((e) => (t = e));
                      r.current = {
                        pub: e.pub,
                        ready: n,
                        close: u(e, a, (e) => e && t()),
                      };
                    }
                    return r.current.ready;
                  })(b),
                  x = crypto.randomUUID(),
                  v = {
                    t: "infer",
                    id: x,
                    turns: s(c).filter((e) => "system" !== e.role),
                  },
                  E = (e) => new TextEncoder().encode(e).length,
                  M = E(v.turns.map((e) => e.content).join("\n")),
                  N = 0,
                  S = (e, t) => {
                    (N += E(e)), h(e, t);
                  },
                  _ = (0, i.seal)(JSON.stringify(v), b, l.key);
                if (_.ct.length > 2e5)
                  throw Error(
                    "That is too long to send to a lender. Send something shorter, or start a new chat."
                  );
                let j = (0, n.watchRequests)();
                try {
                  let e = await new Promise((e, t) => {
                      let n = setTimeout(
                          () =>
                            t(
                              new w(
                                "That lender didn't answer within 10 seconds. Pick another, or try again."
                              )
                            ),
                          1e4
                        ),
                        r = {
                          id: x,
                          me: b,
                          node: l,
                          next: 0,
                          held: new Map(),
                          onDelta: S,
                          onAhead: p,
                          done: e,
                          fail: t,
                          timer: n,
                        };
                      (o.current = r),
                        T.then(() => o.current !== r || d(_)).then(
                          (e) => e || t(new w(g)),
                          () => t(Error(y))
                        );
                    }),
                    t = j().filter((e) => e !== location.host),
                    n = e.stats,
                    r = n && {
                      ...n,
                      promptTokens: Math.min(n.promptTokens, M),
                      answerTokens: Math.min(n.answerTokens, N),
                    },
                    s = k && r ? await m(x, l.address, r) : void 0;
                  return { ...e, hosts: t, bill: s };
                } catch (e) {
                  throw (j(), e);
                } finally {
                  clearTimeout(o.current?.timer), (o.current = null);
                }
              },
              stop: function () {
                let e = o.current;
                e &&
                  (d(
                    (0, i.seal)(
                      JSON.stringify({ t: "stop", id: e.id }),
                      e.me,
                      e.node.key
                    )
                  ).then(
                    (t) => t || e.fail(new w(g)),
                    () => e.fail(Error(y))
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
            let o = "SharedWorker" === t.name,
              a = e.b,
              i = [
                r
                  .map((t) => e.h("string" == typeof t ? t : t.path, a))
                  .reverse(),
                e.X,
                a,
              ],
              l = ["NEXT_DEPLOYMENT_ID", "NEXT_CLIENT_ASSET_SUFFIX"];
            for (let e = 0; e < l.length; e++) i.push(globalThis[l[e]]);
            let c = new URL(e.h(n, a), location.origin),
              u = JSON.stringify(i);
            return (
              o
                ? c.searchParams.set("params", u)
                : (c.hash = "#params=" + encodeURIComponent(u)),
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
