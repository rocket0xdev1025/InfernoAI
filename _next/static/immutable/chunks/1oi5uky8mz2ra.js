(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  98247,
  (e) => {
    "use strict";
    var t = e.i(18050),
      r = e.i(84954);
    e.s([
      "default",
      0,
      function (e) {
        return (0, t.jsx)(r.ErrorState, { ...e });
      },
    ]);
  },
  84954,
  (e) => {
    "use strict";
    var t = e.i(18050),
      r = e.i(22016),
      s = e.i(71645),
      i = e.i(59544);
    e.s([
      "ErrorState",
      0,
      function ({ error: e, retry: n }) {
        return (
          (0, s.useEffect)(() => {
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
                    onClick: () => n(),
                    className: (0, i.buttonClass)({ size: "lg" }),
                    children: "Try again",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "/",
                    className: (0, i.buttonClass)({
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
      s = e.i(45060);
    let i = {
        primary: "bg-moon text-night hover:bg-mist",
        quiet:
          "border border-line-bright text-mist hover:border-moon hover:text-moon",
        ghost: "text-hush hover:text-mist",
      },
      n = { md: "h-10 px-5 text-[15px]", lg: "h-12 px-7 text-base" };
    function o({ variant: e = "primary", size: t = "md", className: r } = {}) {
      return (0, s.cn)(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-300 ease-quiet active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        i[e],
        n[t],
        r
      );
    }
    e.s([
      "Button",
      0,
      function ({ variant: e, size: r, className: s, ...i }) {
        return (0, t.jsx)("button", {
          className: o({ variant: e, size: r, className: s }),
          ...i,
        });
      },
      "ButtonLink",
      0,
      function ({ variant: e, size: s, className: i, ...n }) {
        return (0, t.jsx)(r.default, {
          className: o({ variant: e, size: s, className: i }),
          ...n,
        });
      },
      "buttonClass",
      0,
      o,
    ]);
  },
]);
