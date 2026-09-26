(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  14944,
  (t) => {
    "use strict";
    var e = t.i(18050),
      i = t.i(71645),
      s = t.i(89664),
      n = t.i(8734),
      o = t.i(31338),
      r = t.i(75379),
      a = t.i(45060);
    t.s([
      "CopyCA",
      0,
      function ({ className: t }) {
        let [l, c] = (0, i.useState)(!1),
          { symbol: d, address: h } = o.site.token;
        return (0, e.jsxs)("button", {
          type: "button",
          onClick: () =>
            navigator.clipboard.writeText(h).then(
              () => {
                c(!0), setTimeout(() => c(!1), 1600);
              },
              () => {}
            ),
          title: h,
          "aria-label": `Copy the ${d} contract address, ${h}`,
          className: (0, a.cn)(
            "inline-flex min-h-10 items-center gap-1.5 rounded-full border border-line-bright px-3 text-hush transition-colors hover:text-mist sm:min-h-8",
            t
          ),
          children: [
            "CA ",
            (0, e.jsx)("span", {
              className: "tnum font-mono text-mist",
              children: (0, r.shortAddress)(h),
            }),
            l
              ? (0, e.jsx)(s.Check, { size: 13, className: "text-mint" })
              : (0, e.jsx)(n.Copy, { size: 13 }),
            (0, e.jsx)("span", {
              "aria-live": "polite",
              className: "sr-only",
              children: l ? "Copied" : "",
            }),
          ],
        });
      },
    ]);
  },
]);
