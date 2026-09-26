(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  91323,
  (e) => {
    "use strict";
    var t = e.i(56420);
    let s = {
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
    s.node;
    let a = (0, t.default)(s);
    e.s(["BadgeCheck", 0, a], 91323);
  },
  4077,
  (e) => {
    "use strict";
    var t = e.i(18050),
      s = e.i(71645),
      a = e.i(91323),
      n = e.i(56420);
    let i = {
      name: "chevron-left",
      size: 24,
      node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
    };
    i.node;
    let r = (0, n.default)(i),
      l = {
        name: "lock",
        size: 24,
        node: [
          [
            "rect",
            {
              width: "18",
              height: "11",
              x: "3",
              y: "11",
              rx: "2",
              ry: "2",
              key: "1w4ew1",
            },
          ],
          ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
        ],
      };
    l.node;
    let o = (0, n.default)(l),
      d = {
        name: "shield-check",
        size: 24,
        node: [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
        ],
      };
    d.node;
    let c = (0, n.default)(d);
    var m = e.i(66787),
      h = e.i(59544),
      x = e.i(99),
      u = e.i(62528),
      p = e.i(15092),
      b = e.i(45060),
      f = e.i(75379),
      g = e.i(87287),
      y = e.i(8178),
      v = e.i(26929);
    let j = ["ada", "ravi"],
      N = {
        ada: [
          "Lovely. See you Thursday.",
          "Noted. I'll bring the programme.",
          "Ha, fair enough.",
        ],
        ravi: [
          "Thanks, that helps.",
          "Got it. I'll fold that in tonight.",
          "Perfect. Next draft by Friday.",
        ],
      },
      w = {
        verified: { label: "Verified", tone: "text-mint", Icon: c },
        sealed: { label: "Sealed", tone: "text-hush", Icon: o },
        changed: {
          label: "New key, not verified",
          tone: "text-ember",
          Icon: m.TriangleAlert,
        },
      },
      k = {
        verified: "Verified",
        sealed: "Not verified yet",
        changed: "Key changed",
      },
      C = (e, t) =>
        e.verified.includes(t)
          ? "verified"
          : e.trusted.includes(t)
          ? "sealed"
          : "changed",
      S = (e) =>
        (0, b.cn)(
          "h-9 rounded-full border px-3.5 text-sm transition-colors",
          e
            ? "border-moon/60 bg-moon/10 text-moon"
            : "border-line text-hush hover:border-line-bright hover:text-mist"
        );
    function T() {
      let e = (0, y.newIdentity)(),
        t = (0, y.newIdentity)(),
        s = (0, y.newIdentity)(),
        a = (e) => Date.now() - 6e4 * e;
      return {
        me: e,
        contacts: {
          ada: { name: "Ada", device: t, trusted: [t.pub], verified: [t.pub] },
          ravi: { name: "Ravi", device: s, trusted: [s.pub], verified: [] },
        },
        threads: {
          ada: [
            (0, y.seal)(
              "Are we still on for the recital on Thursday?",
              t,
              e.pub,
              a(52)
            ),
            (0, y.seal)("Yes. Seven, by the side door.", e, t.pub, a(49)),
            (0, y.seal)("I'll save you a seat near the back.", t, e.pub, a(47)),
          ],
          ravi: [
            (0, y.seal)(
              "Sent you the draft. Page three needs your eyes.",
              s,
              e.pub,
              a(180)
            ),
            (0, y.seal)("Reading it tonight.", e, s.pub, a(172)),
          ],
        },
      };
    }
    function I() {
      let [e, a] = (0, s.useState)(T),
        [n, i] = (0, s.useState)("ada"),
        [l, o] = (0, s.useState)(!1),
        [d, c] = (0, s.useState)(!1),
        [x, u] = (0, s.useState)(!1),
        p = (0, s.useRef)(null),
        { me: f, contacts: g, threads: I } = e,
        D = g[n],
        M = I[n],
        Y = C(D, D.device.pub),
        K = (0, s.useMemo)(
          () =>
            M.map((e) => {
              try {
                return (0, y.open)(e, f);
              } catch {
                return null;
              }
            }),
          [M, f]
        );
      (0, s.useEffect)(() => {
        let e = p.current;
        e && (e.scrollTop = e.scrollHeight);
      }, [M.length, n, d]);
      let q = (e, t) =>
          a((s) => ({
            ...s,
            threads: { ...s.threads, [e]: [...s.threads[e], t] },
          })),
        L = (e) =>
          a((t) => ({
            ...t,
            contacts: { ...t.contacts, [n]: e(t.contacts[n]) },
          }));
      return (0, t.jsxs)("div", {
        className: "flex h-full flex-col",
        children: [
          (0, t.jsxs)("div", {
            className:
              "flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line bg-night-2 px-5 py-2.5 text-sm text-hush sm:px-8",
            children: [
              (0, t.jsx)("p", {
                className: "min-w-0 flex-1 basis-64",
                children: "Demo relay: nothing leaves this browser yet.",
              }),
              (0, t.jsx)("button", {
                type: "button",
                onClick: function () {
                  let e = (0, y.newIdentity)(),
                    t = (0, y.seal)(
                      "New phone, same Ada. Can you resend the notes from Sunday?",
                      e,
                      f.pub
                    );
                  a((s) => ({
                    ...s,
                    contacts: {
                      ...s.contacts,
                      ada: { ...s.contacts.ada, device: e },
                    },
                    threads: { ...s.threads, ada: [...s.threads.ada, t] },
                  })),
                    i("ada"),
                    o(!1),
                    c(!1);
                },
                className: S(!1),
                children: "Simulate a key change",
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: "flex min-h-0 flex-1",
            children: [
              (0, t.jsxs)("nav", {
                "aria-label": "Conversations",
                className: (0, b.cn)(
                  "w-full flex-col overflow-y-auto lg:flex lg:w-80 lg:shrink-0 lg:border-r lg:border-line",
                  l ? "flex" : "hidden"
                ),
                children: [
                  (0, t.jsx)(B, { me: f }),
                  (0, t.jsx)("ul", {
                    className: "py-2",
                    children: j.map((e) => {
                      let s = g[e],
                        a = C(s, s.device.pub),
                        { Icon: r, tone: l } = w[a];
                      return (0, t.jsx)(
                        "li",
                        {
                          children: (0, t.jsxs)("button", {
                            type: "button",
                            "aria-current": e === n ? "true" : void 0,
                            onClick: () => {
                              i(e), o(!1), u(!1);
                            },
                            className: (0, b.cn)(
                              "flex w-full items-center gap-3 px-5 py-3 text-left transition-colors hover:bg-night-2",
                              e === n && "bg-night-2"
                            ),
                            children: [
                              (0, t.jsx)(z, { name: s.name }),
                              (0, t.jsxs)("span", {
                                className: "min-w-0 flex-1",
                                children: [
                                  (0, t.jsx)("span", {
                                    className: "block font-medium",
                                    children: s.name,
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: (0, b.cn)(
                                      "flex items-center gap-1.5 text-sm",
                                      l
                                    ),
                                    children: [
                                      (0, t.jsx)(r, {
                                        size: 14,
                                        "aria-hidden": !0,
                                      }),
                                      k[a],
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        e
                      );
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("section", {
                "aria-labelledby": "thread-title",
                className: (0, b.cn)(
                  "min-w-0 flex-1 flex-col lg:flex",
                  l ? "hidden" : "flex"
                ),
                children: [
                  (0, t.jsxs)("header", {
                    className:
                      "flex flex-wrap items-center gap-3 border-b border-line px-4 py-3 sm:px-6",
                    children: [
                      (0, t.jsx)("button", {
                        type: "button",
                        onClick: () => o(!0),
                        "aria-label": "All conversations",
                        className:
                          "-ml-2 flex h-10 w-10 items-center justify-center rounded-full text-hush transition-colors hover:text-mist lg:hidden",
                        children: (0, t.jsx)(r, { size: 20 }),
                      }),
                      (0, t.jsx)(z, { name: D.name }),
                      (0, t.jsxs)("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          (0, t.jsx)("h2", {
                            id: "thread-title",
                            className: "text-xl leading-tight",
                            children: D.name,
                          }),
                          (0, t.jsx)("p", {
                            className: (0, b.cn)("text-sm", w[Y].tone),
                            children: k[Y],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex w-full flex-wrap gap-2 sm:w-auto",
                        children: [
                          (0, t.jsx)("button", {
                            type: "button",
                            "aria-expanded": x,
                            "aria-controls": "safety-panel",
                            onClick: () => u((e) => !e),
                            className: S(x),
                            children: "Safety number",
                          }),
                          (0, t.jsx)("button", {
                            type: "button",
                            "aria-pressed": d,
                            onClick: () => c((e) => !e),
                            className: S(d),
                            children: "What the relay sees",
                          }),
                        ],
                      }),
                    ],
                  }),
                  "changed" === Y &&
                    (0, t.jsxs)("div", {
                      role: "alert",
                      className:
                        "flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-ember/30 bg-ember/10 px-4 py-3 sm:px-6",
                      children: [
                        (0, t.jsx)(m.TriangleAlert, {
                          size: 18,
                          className: "shrink-0 text-ember",
                          "aria-hidden": !0,
                        }),
                        (0, t.jsxs)("p", {
                          className:
                            "min-w-0 flex-1 basis-56 text-[15px] font-medium text-ember",
                          children: [
                            D.name,
                            "'s key changed. Compare safety numbers before trusting new messages.",
                          ],
                        }),
                        !x &&
                          (0, t.jsx)("button", {
                            type: "button",
                            onClick: function () {
                              u(!0), p.current?.scrollTo({ top: 0 });
                            },
                            className:
                              "h-9 rounded-full border border-ember/50 px-3.5 text-sm text-ember transition-colors hover:bg-ember/10",
                            children: "Compare safety numbers",
                          }),
                      ],
                    }),
                  (0, t.jsxs)("div", {
                    ref: p,
                    tabIndex: 0,
                    role: "region",
                    "aria-label": `Conversation with ${D.name}`,
                    className: "relative min-h-0 flex-1 overflow-y-auto",
                    children: [
                      x &&
                        (0, t.jsxs)("section", {
                          id: "safety-panel",
                          "aria-labelledby": "safety-title",
                          className:
                            "border-b border-line bg-night-2/60 px-4 py-6 sm:px-6",
                          children: [
                            (0, t.jsxs)("h3", {
                              id: "safety-title",
                              className: "text-lg",
                              children: ["Your safety number with ", D.name],
                            }),
                            (0, t.jsx)(v.SafetyNumber, {
                              className: "mt-4",
                              value: (0, y.safetyNumber)(f.pub, D.device.pub),
                            }),
                            (0, t.jsxs)("p", {
                              className:
                                "mt-4 max-w-prose text-[15px] text-hush",
                              children: [
                                "changed" === Y &&
                                  `This number changed with ${D.name}'s new key. `,
                                D.name,
                                " sees the same 60 digits. Compare them in person or on a call you trust. If they match, no one swapped a key between you.",
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "mt-4 flex flex-wrap gap-2",
                              children: [
                                "verified" === Y
                                  ? (0, t.jsx)(h.Button, {
                                      variant: "quiet",
                                      onClick: () =>
                                        L((e) => ({
                                          ...e,
                                          verified: e.verified.filter(
                                            (t) => t !== e.device.pub
                                          ),
                                        })),
                                      children: "Clear verification",
                                    })
                                  : (0, t.jsx)(h.Button, {
                                      onClick: () =>
                                        L((e) => ({
                                          ...e,
                                          trusted: [...e.trusted, e.device.pub],
                                          verified: [
                                            ...e.verified,
                                            e.device.pub,
                                          ],
                                        })),
                                      children:
                                        "changed" === Y
                                          ? "They match, trust the new key"
                                          : "Mark as verified",
                                    }),
                                (0, t.jsx)(h.Button, {
                                  variant: "ghost",
                                  onClick: () => u(!1),
                                  children: "Close",
                                }),
                              ],
                            }),
                          ],
                        }),
                      d
                        ? (0, t.jsxs)("div", {
                            className: "px-4 py-6 sm:px-6",
                            children: [
                              (0, t.jsx)("p", {
                                className: "max-w-prose text-[15px] text-hush",
                                children:
                                  "Everything the relay holds for this conversation: keys, times and sealed bytes padded to 256-byte steps. No names, no words.",
                              }),
                              (0, t.jsx)("ol", {
                                className: "mt-4 flex flex-col gap-3",
                                children: M.map((e) =>
                                  (0, t.jsx)(
                                    "li",
                                    {
                                      children: (0, t.jsx)("pre", {
                                        className:
                                          "rounded-2xl border border-line bg-night-2 p-4 font-mono text-xs leading-relaxed break-all whitespace-pre-wrap text-hush",
                                        children: JSON.stringify(e, null, 2),
                                      }),
                                    },
                                    e.nonce
                                  )
                                ),
                              }),
                            ],
                          })
                        : (0, t.jsx)("ol", {
                            "aria-live": "polite",
                            className: "flex flex-col gap-4 px-4 py-6 sm:px-6",
                            children: M.map((e, s) => {
                              let a = e.from === f.pub,
                                n = C(D, a ? e.to : e.from),
                                { Icon: i, label: r, tone: l } = w[n];
                              return (0, t.jsxs)(
                                "li",
                                {
                                  className: (0, b.cn)(
                                    "flex max-w-[85%] flex-col gap-1 sm:max-w-[70%]",
                                    a
                                      ? "items-end self-end"
                                      : "items-start self-start"
                                  ),
                                  children: [
                                    (0, t.jsxs)("p", {
                                      className: (0, b.cn)(
                                        "rounded-3xl px-4 py-2.5 text-[15px] break-words whitespace-pre-wrap",
                                        a
                                          ? "rounded-br-lg bg-moon/15"
                                          : "rounded-bl-lg bg-night-3",
                                        "changed" === n &&
                                          "ring-1 ring-ember/60"
                                      ),
                                      children: [
                                        (0, t.jsxs)("span", {
                                          className: "sr-only",
                                          children: [a ? "You" : D.name, ": "],
                                        }),
                                        K[s] ??
                                          (0, t.jsx)("span", {
                                            className: "text-ember",
                                            children:
                                              "This note was changed after it was sealed, so it won't open.",
                                          }),
                                      ],
                                    }),
                                    (0, t.jsxs)("p", {
                                      className: (0, b.cn)(
                                        "flex items-center gap-1.5 text-xs",
                                        l
                                      ),
                                      children: [
                                        (0, t.jsx)(i, {
                                          size: 12,
                                          "aria-hidden": !0,
                                        }),
                                        r,
                                        (0, t.jsx)("time", {
                                          className: "tnum text-faint",
                                          dateTime: new Date(
                                            e.ts
                                          ).toISOString(),
                                          children: new Date(
                                            e.ts
                                          ).toLocaleTimeString([], {
                                            hour: "numeric",
                                            minute: "2-digit",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.nonce
                              );
                            }),
                          }),
                    ],
                  }),
                  "changed" === Y
                    ? (0, t.jsxs)("p", {
                        className:
                          "border-t border-line px-4 py-4 text-sm text-hush sm:px-6",
                        children: [
                          "Sending to ",
                          D.name,
                          " is paused until you compare safety numbers.",
                        ],
                      })
                    : (0, t.jsx)(
                        A,
                        {
                          name: D.name,
                          onSend: function (e) {
                            q(n, (0, y.seal)(e, f, D.device.pub));
                            let t = N[n],
                              s = (0, y.seal)(
                                t[M.length % t.length],
                                D.device,
                                f.pub,
                                Date.now() + 1200
                              );
                            setTimeout(() => q(n, s), 1200);
                          },
                        },
                        n
                      ),
                ],
              }),
            ],
          }),
        ],
      });
    }
    function z({ name: e }) {
      return (0, t.jsx)("span", {
        "aria-hidden": !0,
        className:
          "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-night-3 font-display text-lg text-moon",
        children: e[0],
      });
    }
    function B({ me: e }) {
      let { address: n, provider: i, connected: r } = (0, u.useWallet)(),
        [l, o] = (0, s.useState)(null),
        [d, c] = (0, s.useState)(!1),
        [m, b] = (0, s.useState)(null);
      async function g() {
        if (i && n) {
          c(!0), b(null);
          try {
            let t = await (0, y.signBinding)(i, n, e.pub, p.CHAIN.id);
            t
              ? o(t)
              : b(
                  "That signature doesn't match your address, so the key wasn't bound."
                );
          } catch (e) {
            b(
              4001 === e.code
                ? "You declined in your wallet, so nothing was bound."
                : "Your wallet didn't sign the key. Try again."
            );
          } finally {
            c(!1);
          }
        }
      }
      return (0, t.jsxs)("section", {
        "aria-labelledby": "you-title",
        className: "border-b border-line p-5",
        children: [
          (0, t.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [
              (0, t.jsx)(z, { name: "You" }),
              (0, t.jsxs)("div", {
                className: "min-w-0",
                children: [
                  (0, t.jsx)("h2", {
                    id: "you-title",
                    className: "text-lg leading-tight",
                    children: "You",
                  }),
                  (0, t.jsxs)("p", {
                    className: "text-sm text-faint",
                    children: [
                      "Key ",
                      (0, f.shortAddress)(e.pub),
                      ", made in this tab",
                    ],
                  }),
                ],
              }),
            ],
          }),
          l
            ? (0, t.jsxs)("p", {
                className:
                  "mt-4 inline-flex items-center gap-1.5 rounded-full border border-mint/40 bg-mint/10 px-3 py-1 text-sm text-mint",
                title: l.address,
                children: [
                  (0, t.jsx)(a.BadgeCheck, { size: 15, "aria-hidden": !0 }),
                  "Bound to ",
                  (0, f.shortAddress)(l.address),
                ],
              })
            : r
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("p", {
                    className: "mt-4 text-sm text-hush",
                    children:
                      "Sign once so people can tell this key is yours. No gas, and nothing moves.",
                  }),
                  (0, t.jsx)(h.Button, {
                    variant: "quiet",
                    className: "mt-3",
                    onClick: () => void g(),
                    disabled: d,
                    children: d
                      ? "Waiting for your wallet…"
                      : "Sign my messaging key",
                  }),
                ],
              })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("p", {
                    className: "mt-4 text-sm text-hush",
                    children: "Connect a wallet to vouch for this key.",
                  }),
                  (0, t.jsx)(x.ConnectCta, {
                    className: (0, h.buttonClass)({
                      variant: "quiet",
                      className: "mt-3",
                    }),
                  }),
                ],
              }),
          m &&
            (0, t.jsx)("p", {
              role: "alert",
              className: "mt-3 text-sm text-ember",
              children: m,
            }),
        ],
      });
    }
    function A({ name: e, onSend: a }) {
      let [n, i] = (0, s.useState)("");
      function r(e) {
        e?.preventDefault();
        let t = n.trim();
        t && (a(t), i(""));
      }
      return (0, t.jsxs)("form", {
        onSubmit: r,
        className:
          "flex items-end gap-2 border-t border-line px-4 py-3 sm:px-6",
        children: [
          (0, t.jsxs)("label", {
            htmlFor: "composer",
            className: "sr-only",
            children: ["Message to ", e],
          }),
          (0, t.jsx)("textarea", {
            id: "composer",
            rows: 1,
            value: n,
            maxLength: 2e3,
            placeholder: `Write to ${e}`,
            onChange: (e) => i(e.target.value),
            onKeyDown: (e) => {
              "Enter" !== e.key ||
                e.shiftKey ||
                e.nativeEvent.isComposing ||
                (e.preventDefault(), r());
            },
            className:
              "field-sizing-content max-h-40 min-h-11 min-w-0 flex-1 resize-none rounded-3xl border border-line bg-night-2 px-4 py-2.5 text-base transition-colors placeholder:text-faint hover:border-line-bright focus:border-moon/60 sm:text-[15px]",
          }),
          (0, t.jsx)(h.Button, {
            type: "submit",
            disabled: !n.trim(),
            className: "h-11",
            children: "Seal and send",
          }),
        ],
      });
    }
    e.s(
      [
        "Inbox",
        0,
        function () {
          return (0, g.useMounted)()
            ? (0, t.jsx)(I, {})
            : (0, t.jsx)("div", { className: "h-full", "aria-busy": "true" });
        },
      ],
      4077
    );
  },
  26929,
  (e) => {
    "use strict";
    var t = e.i(18050),
      s = e.i(45060);
    e.s([
      "SafetyNumber",
      0,
      function ({ value: e, className: a }) {
        return (0, t.jsx)("p", {
          className: (0, s.cn)(
            "sharp grid max-w-xs grid-cols-4 gap-x-4 gap-y-1 font-display text-sm tnum sm:text-xl",
            a
          ),
          children: e
            .split(" ")
            .map((e, s) => (0, t.jsx)("span", { children: e }, s)),
        });
      },
    ]);
  },
  59544,
  (e) => {
    "use strict";
    var t = e.i(18050),
      s = e.i(22016),
      a = e.i(45060);
    let n = {
        primary: "bg-moon text-night hover:bg-mist",
        quiet:
          "border border-line-bright text-mist hover:border-moon hover:text-moon",
        ghost: "text-hush hover:text-mist",
      },
      i = { md: "h-10 px-5 text-[15px]", lg: "h-12 px-7 text-base" };
    function r({ variant: e = "primary", size: t = "md", className: s } = {}) {
      return (0, a.cn)(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-300 ease-quiet active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        n[e],
        i[t],
        s
      );
    }
    e.s([
      "Button",
      0,
      function ({ variant: e, size: s, className: a, ...n }) {
        return (0, t.jsx)("button", {
          className: r({ variant: e, size: s, className: a }),
          ...n,
        });
      },
      "ButtonLink",
      0,
      function ({ variant: e, size: a, className: n, ...i }) {
        return (0, t.jsx)(s.default, {
          className: r({ variant: e, size: a, className: n }),
          ...i,
        });
      },
      "buttonClass",
      0,
      r,
    ]);
  },
]);
