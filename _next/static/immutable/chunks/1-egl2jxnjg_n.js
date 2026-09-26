(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  5014,
  (e) => {
    "use strict";
    var t = e.i(71645);
    let r = (...e) =>
        e
          .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
          .join(" ")
          .trim(),
      n = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      },
      s = (0, t.createContext)({}),
      i = (0, t.forwardRef)(
        (
          {
            color: e,
            size: i,
            width: o,
            height: a,
            strokeWidth: l,
            absoluteStrokeWidth: u,
            nonScalingStroke: c,
            className: d = "",
            children: h,
            iconNode: f = [],
            icon: p = { node: f, aliases: [], size: 24 },
            ...g
          },
          m
        ) => {
          let {
              size: b = 24,
              strokeWidth: w = 2,
              absoluteStrokeWidth: y = !1,
              nonScalingStroke: x = !1,
              color: v = "currentColor",
              className: E = "",
            } = (0, t.useContext)(s) ?? {},
            k =
              !!h ||
              ((e) => {
                for (let t in e)
                  if (t.startsWith("aria-") || "role" === t || "title" === t)
                    return !0;
                return !1;
              })(g),
            [$, I, B = []] = (function (e, t = {}) {
              return (function (e, t = {}) {
                let s = t.attributeNames ?? {},
                  i = (e) => s[e] ?? e,
                  o = e.size ?? e.width ?? n.width,
                  a = e.size ?? e.height ?? n.height,
                  l =
                    e.aliases
                      ?.filter((e) => "string" == typeof e && "" !== e.trim())
                      .map((e) => `lucide-${e}`) ?? [],
                  u = [...(e.name ? [`lucide-${e.name}`] : []), ...l],
                  c = t.className?.split(" ").filter(Boolean) ?? [],
                  d =
                    !1 === t.includeDefaultClasses
                      ? r(...c)
                      : r("lucide", ...u, ...c),
                  h = t.absoluteStrokeWidth
                    ? (Number(t.strokeWidth ?? n["stroke-width"]) *
                        Number(e.size ?? e.width ?? n.width)) /
                      Number(t.size ?? t.width ?? n.width)
                    : t.strokeWidth ?? n["stroke-width"];
                return [
                  "svg",
                  {
                    ...Object.entries(n).reduce(
                      (e, [t, r]) => ((e[i(t)] = r), e),
                      {}
                    ),
                    ...("color" in t && t.color && { [i("stroke")]: t.color }),
                    ...("size" in t &&
                      null != t.size && {
                        [i("width")]: t.size,
                        [i("height")]: t.size,
                      }),
                    ...("width" in t &&
                      null != t.width && { [i("width")]: t.width }),
                    ...("height" in t &&
                      null != t.height && { [i("height")]: t.height }),
                    [i("stroke-width")]: h,
                    ...(d && { [i("class")]: d }),
                    [i("viewBox")]: `0 0 ${o} ${a}`,
                    ...(!1 === t.hasA11yProp
                      ? { [i("aria-hidden")]: "true" }
                      : {}),
                    ...("attributes" in t && t.attributes),
                  },
                  e.node.map((e) => {
                    let [r, n, s] = e,
                      o = t.nonScalingStroke
                        ? { [i("vector-effect")]: "non-scaling-stroke", ...n }
                        : n;
                    return s ? [r, o, s] : [r, o];
                  }),
                ];
              })(e, {
                ...t,
                attributeNames: {
                  ...t.attributeNames,
                  class: "className",
                  "stroke-width": "strokeWidth",
                  "stroke-linecap": "strokeLinecap",
                  "stroke-linejoin": "strokeLinejoin",
                  "vector-effect": "vectorEffect",
                },
              });
            })(p, {
              color: e ?? v,
              width: o ?? i ?? b,
              height: a ?? i ?? b,
              strokeWidth: l ?? w,
              absoluteStrokeWidth: u ?? y,
              nonScalingStroke: c ?? x,
              className: r(E, d),
              hasA11yProp: k,
              attributes: g,
            });
          return (0, t.createElement)($, { ref: m, ...I }, [
            ...B.map(([e, r]) => (0, t.createElement)(e, r)),
            ...(Array.isArray(h) ? h : [h]),
          ]);
        }
      );
    e.s(["default", 0, i], 5014);
  },
  56420,
  (e) => {
    "use strict";
    var t = e.i(71645),
      r = e.i(5014);
    e.s(
      [
        "default",
        0,
        function (e, n = [], s = []) {
          let i,
            o =
              "string" == typeof e
                ? (function (e, t, r = []) {
                    if (null == t)
                      throw Error(
                        "[lucide]: iconNode is required when icon name is used"
                      );
                    return {
                      name: e
                        ?.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                        .toLowerCase(),
                      size: 24,
                      node: t,
                      ...(r.length > 0 ? { aliases: r } : {}),
                    };
                  })(e, n, s)
                : e,
            a = (0, t.forwardRef)(({ className: e, ...n }, s) =>
              (0, t.createElement)(r.default, {
                ref: s,
                icon: o,
                className: e,
                ...n,
              })
            );
          return (
            o.name &&
              (a.displayName =
                (i = ((e) => {
                  let t = "",
                    r = !1;
                  for (let n of e) {
                    if ("-" === n || "_" === n || n <= " ") {
                      r = t.length > 0;
                      continue;
                    }
                    0 === t.length
                      ? (t += n.toLowerCase())
                      : (t += r ? n.toUpperCase() : n),
                      (r = !1);
                  }
                  return t;
                })(o.name))
                  .charAt(0)
                  .toUpperCase() + i.slice(1)),
            a
          );
        },
      ],
      56420
    );
  },
  18566,
  (e, t, r) => {
    t.exports = e.r(76562);
  },
  8861,
  (e) => {
    "use strict";
    var t = e.i(69934);
    class r extends t.BaseError {
      constructor({ address: e }) {
        super(`Address "${e}" is invalid.`, {
          metaMessages: [
            "- Address must be a hex value of 20 bytes (40 hex characters).",
            "- Address must match its checksum counterpart.",
          ],
          name: "InvalidAddressError",
        });
      }
    }
    e.s(["InvalidAddressError", 0, r]);
  },
  69934,
  (e) => {
    "use strict";
    let t = "2.56.8",
      r = {
        getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: r }) =>
          t ? `${e ?? "https://viem.sh"}${t}${r ? `#${r}` : ""}` : void 0,
        version: `viem@${t}`,
      };
    e.s(
      [
        "BaseError",
        0,
        class e extends Error {
          constructor(n, s = {}) {
            const i =
                s.cause instanceof e
                  ? s.cause.details
                  : s.cause?.message
                  ? s.cause.message
                  : s.details,
              o = (s.cause instanceof e && s.cause.docsPath) || s.docsPath,
              a = r.getDocsUrl?.({ ...s, docsPath: o });
            super(
              [
                n || "An error occurred.",
                "",
                ...(s.metaMessages ? [...s.metaMessages, ""] : []),
                ...(a ? [`Docs: ${a}`] : []),
                ...(i ? [`Details: ${i}`] : []),
                ...(r.version ? [`Version: ${r.version}`] : []),
              ].join("\n"),
              s.cause ? { cause: s.cause } : void 0
            ),
              Object.defineProperty(this, "details", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "docsPath", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "metaMessages", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shortMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "version", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "BaseError",
              }),
              (this.details = i),
              (this.docsPath = o),
              (this.metaMessages = s.metaMessages),
              (this.name = s.name ?? this.name),
              (this.shortMessage = n),
              (this.version = t);
          }
          walk(e) {
            return (function e(t, r) {
              return r?.(t)
                ? t
                : t &&
                  "object" == typeof t &&
                  "cause" in t &&
                  void 0 !== t.cause
                ? e(t.cause, r)
                : r
                ? null
                : t;
            })(this, e);
          }
        },
      ],
      69934
    );
  },
  23838,
  76677,
  96516,
  (e) => {
    "use strict";
    e.s(["checksumAddress", () => u, "getAddress", () => c], 23838),
      e.s(["isAddress", () => a], 96516);
    var t = e.i(8861),
      r = e.i(69936),
      n = e.i(31095);
    class s extends Map {
      constructor(e) {
        super(),
          Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.maxSize = e);
      }
      get(e) {
        let t = super.get(e);
        return super.has(e) && (super.delete(e), super.set(e, t)), t;
      }
      set(e, t) {
        if (
          (super.has(e) && super.delete(e),
          super.set(e, t),
          this.maxSize && this.size > this.maxSize)
        ) {
          let e = super.keys().next().value;
          void 0 !== e && super.delete(e);
        }
        return this;
      }
    }
    e.s(["LruMap", 0, s], 76677);
    let i = /^0x[a-fA-F0-9]{40}$/,
      o = new s(8192);
    function a(e, t) {
      let { strict: r = !0 } = t ?? {},
        n = `${e}.${r}`;
      if (o.has(n)) return o.get(n);
      let s = !!i.test(e) && (e.toLowerCase() === e || !r || u(e) === e);
      return o.set(n, s), s;
    }
    let l = new s(8192);
    function u(e, t) {
      if (l.has(`${e}.${t}`)) return l.get(`${e}.${t}`);
      let s = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
        i = (0, n.keccak256)((0, r.stringToBytes)(s), "bytes"),
        o = (t ? s.substring(`${t}0x`.length) : s).split("");
      for (let e = 0; e < 40; e += 2)
        i[e >> 1] >> 4 >= 8 && o[e] && (o[e] = o[e].toUpperCase()),
          (15 & i[e >> 1]) >= 8 &&
            o[e + 1] &&
            (o[e + 1] = o[e + 1].toUpperCase());
      let a = `0x${o.join("")}`;
      return l.set(`${e}.${t}`, a), a;
    }
    function c(e, r) {
      if (!a(e, { strict: !1 }))
        throw new t.InvalidAddressError({ address: e });
      return u(e, r);
    }
  },
  6685,
  (e) => {
    "use strict";
    var t = e.i(8861),
      r = e.i(96516);
    e.s([
      "isAddressEqual",
      0,
      function (e, n) {
        if (!(0, r.isAddress)(e, { strict: !1 }))
          throw new t.InvalidAddressError({ address: e });
        if (!(0, r.isAddress)(n, { strict: !1 }))
          throw new t.InvalidAddressError({ address: n });
        return e.toLowerCase() === n.toLowerCase();
      },
    ]);
  },
  47526,
  (e) => {
    "use strict";
    function t(e) {
      return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
    }
    e.s([
      "concat",
      0,
      function (e) {
        return "string" == typeof e[0]
          ? t(e)
          : (function (e) {
              let t = 0;
              for (let r of e) t += r.length;
              let r = new Uint8Array(t),
                n = 0;
              for (let t of e) r.set(t, n), (n += t.length);
              return r;
            })(e);
      },
      "concatHex",
      0,
      t,
    ]);
  },
  80841,
  (e) => {
    "use strict";
    e.s([
      "isHex",
      0,
      function (e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      },
    ]);
  },
  22411,
  87286,
  564,
  (e) => {
    "use strict";
    var t = e.i(69934);
    class r extends t.BaseError {
      constructor({ offset: e, position: t, size: r }) {
        super(
          `Slice ${
            "start" === t ? "starting" : "ending"
          } at offset "${e}" is out-of-bounds (size: ${r}).`,
          { name: "SliceOffsetOutOfBoundsError" }
        );
      }
    }
    class n extends t.BaseError {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
          { name: "SizeExceedsPaddingSizeError" }
        );
      }
    }
    class s extends t.BaseError {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`,
          { name: "InvalidBytesLengthError" }
        );
      }
    }
    function i(e, { dir: t, size: r = 32 } = {}) {
      if (null === r) return e;
      let s = e.replace("0x", "");
      if (s.length > 2 * r)
        throw new n({
          size: Math.ceil(s.length / 2),
          targetSize: r,
          type: "hex",
        });
      return `0x${s["right" === t ? "padEnd" : "padStart"](2 * r, "0")}`;
    }
    e.s(
      [
        "InvalidBytesLengthError",
        0,
        s,
        "SizeExceedsPaddingSizeError",
        0,
        n,
        "SliceOffsetOutOfBoundsError",
        0,
        r,
      ],
      87286
    ),
      e.s(
        [
          "pad",
          0,
          function (e, { dir: t, size: r = 32 } = {}) {
            return "string" == typeof e
              ? i(e, { dir: t, size: r })
              : (function (e, { dir: t, size: r = 32 } = {}) {
                  if (null === r) return e;
                  if (e.length > r)
                    throw new n({
                      size: e.length,
                      targetSize: r,
                      type: "bytes",
                    });
                  let s = new Uint8Array(r);
                  for (let n = 0; n < r; n++) {
                    let i = "right" === t;
                    s[i ? n : r - n - 1] = e[i ? n : e.length - n - 1];
                  }
                  return s;
                })(e, { dir: t, size: r });
          },
          "padHex",
          0,
          i,
        ],
        22411
      );
    var o = t;
    class a extends o.BaseError {
      constructor({ max: e, min: t, signed: r, size: n, value: s }) {
        super(
          `Number "${s}" is not in safe ${
            n ? `${8 * n}-bit ${r ? "signed" : "unsigned"} ` : ""
          }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
          { name: "IntegerOutOfRangeError" }
        );
      }
    }
    class l extends o.BaseError {
      constructor(e) {
        super(
          `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
          { name: "InvalidBytesBooleanError" }
        );
      }
    }
    class u extends o.BaseError {
      constructor(e) {
        super(
          `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
          { name: "InvalidHexBooleanError" }
        );
      }
    }
    o.BaseError, o.BaseError, o.BaseError, o.BaseError;
    class c extends o.BaseError {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
          name: "SizeOverflowError",
        });
      }
    }
    e.s(
      [
        "IntegerOutOfRangeError",
        0,
        a,
        "InvalidBytesBooleanError",
        0,
        l,
        "InvalidHexBooleanError",
        0,
        u,
        "SizeOverflowError",
        0,
        c,
      ],
      564
    );
  },
  1319,
  (e) => {
    "use strict";
    var t = e.i(80841);
    e.s([
      "size",
      0,
      function (e) {
        return (0, t.isHex)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      },
    ]);
  },
  69936,
  8406,
  50323,
  75107,
  31095,
  (e) => {
    "use strict";
    var t = e.i(69934),
      r = e.i(80841),
      n = e.i(22411),
      s = e.i(564),
      i = e.i(1319);
    function o(e, { dir: t = "left" } = {}) {
      let r = "string" == typeof e ? e.replace("0x", "") : e,
        n = 0;
      for (let e = 0; e < r.length - 1; e++)
        if ("0" === r["left" === t ? e : r.length - e - 1].toString()) n++;
        else break;
      return ((r = "left" === t ? r.slice(n) : r.slice(0, r.length - n)),
      "string" == typeof e)
        ? (1 === r.length && "right" === t && (r = `${r}0`),
          `0x${r.length % 2 == 1 ? `0${r}` : r}`)
        : r;
    }
    function a(e, { size: t }) {
      if ((0, i.size)(e) > t)
        throw new s.SizeOverflowError({
          givenSize: (0, i.size)(e),
          maxSize: t,
        });
    }
    function l(e, t = {}) {
      let { signed: r } = t;
      t.size && a(e, { size: t.size });
      let n = BigInt(e);
      if (!r) return n;
      let s = Math.ceil((e.length - 2) / 2);
      return n <= (1n << (8n * BigInt(s) - 1n)) - 1n
        ? n
        : n - BigInt(`0x${"f".padStart(2 * s, "f")}`) - 1n;
    }
    e.s(["trim", 0, o], 8406),
      e.s(
        [
          "assertSize",
          0,
          a,
          "hexToBigInt",
          0,
          l,
          "hexToBool",
          0,
          function (e, t = {}) {
            let r = e;
            if (
              (t.size && (a(r, { size: t.size }), (r = o(r))), "0x00" === o(r))
            )
              return !1;
            if ("0x01" === o(r)) return !0;
            throw new s.InvalidHexBooleanError(r);
          },
          "hexToNumber",
          0,
          function (e, t = {}) {
            let r = l(e, t),
              n = Number(r);
            if (!Number.isSafeInteger(n))
              throw new s.IntegerOutOfRangeError({
                max: `${Number.MAX_SAFE_INTEGER}`,
                min: `${Number.MIN_SAFE_INTEGER}`,
                signed: t.signed,
                size: t.size,
                value: `${r}n`,
              });
            return n;
          },
        ],
        50323
      );
    let u = Array.from({ length: 256 }, (e, t) =>
      t.toString(16).padStart(2, "0")
    );
    function c(e, t = {}) {
      return "number" == typeof e || "bigint" == typeof e
        ? f(e, t)
        : "string" == typeof e
        ? g(e, t)
        : "boolean" == typeof e
        ? d(e, t)
        : h(e, t);
    }
    function d(e, t = {}) {
      let r = `0x${Number(e)}`;
      return "number" == typeof t.size
        ? (a(r, { size: t.size }), (0, n.pad)(r, { size: t.size }))
        : r;
    }
    function h(e, t = {}) {
      let r = "";
      for (let t = 0; t < e.length; t++) r += u[e[t]];
      let s = `0x${r}`;
      return "number" == typeof t.size
        ? (a(s, { size: t.size }),
          (0, n.pad)(s, { dir: "right", size: t.size }))
        : s;
    }
    function f(e, t = {}) {
      let r,
        { signed: i, size: o } = t,
        a = BigInt(e);
      o
        ? (r = i
            ? (1n << (8n * BigInt(o) - 1n)) - 1n
            : 2n ** (8n * BigInt(o)) - 1n)
        : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
      let l = "bigint" == typeof r && i ? -r - 1n : 0;
      if ((r && a > r) || a < l) {
        let t = "bigint" == typeof e ? "n" : "";
        throw new s.IntegerOutOfRangeError({
          max: r ? `${r}${t}` : void 0,
          min: `${l}${t}`,
          signed: i,
          size: o,
          value: `${e}${t}`,
        });
      }
      let u = `0x${(i && a < 0
        ? (1n << BigInt(8 * o)) + BigInt(a)
        : a
      ).toString(16)}`;
      return o ? (0, n.pad)(u, { size: o }) : u;
    }
    let p = new TextEncoder();
    function g(e, t = {}) {
      return h(p.encode(e), t);
    }
    e.s(
      [
        "boolToHex",
        0,
        d,
        "bytesToHex",
        0,
        h,
        "numberToHex",
        0,
        f,
        "stringToHex",
        0,
        g,
        "toHex",
        0,
        c,
      ],
      75107
    );
    let m = new TextEncoder();
    function b(e, t = {}) {
      return "number" == typeof e || "bigint" == typeof e
        ? y(f(e, t))
        : "boolean" == typeof e
        ? (function (e, t = {}) {
            let r = new Uint8Array(1);
            return ((r[0] = Number(e)), "number" == typeof t.size)
              ? (a(r, { size: t.size }), (0, n.pad)(r, { size: t.size }))
              : r;
          })(e, t)
        : (0, r.isHex)(e)
        ? y(e, t)
        : x(e, t);
    }
    function w(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function y(e, r = {}) {
      let s = e;
      r.size &&
        (a(s, { size: r.size }),
        (s = (0, n.pad)(s, { dir: "right", size: r.size })));
      let i = s.slice(2);
      i.length % 2 && (i = `0${i}`);
      let o = i.length / 2,
        l = new Uint8Array(o);
      for (let e = 0, r = 0; e < o; e++) {
        let n = w(i.charCodeAt(r++)),
          s = w(i.charCodeAt(r++));
        if (void 0 === n || void 0 === s)
          throw new t.BaseError(
            `Invalid byte sequence ("${i[r - 2]}${i[r - 1]}" in "${i}").`
          );
        l[e] = 16 * n + s;
      }
      return l;
    }
    function x(e, t = {}) {
      let r = m.encode(e);
      return "number" == typeof t.size
        ? (a(r, { size: t.size }),
          (0, n.pad)(r, { dir: "right", size: t.size }))
        : r;
    }
    e.s(["hexToBytes", 0, y, "stringToBytes", 0, x, "toBytes", 0, b], 69936);
    var v = e.i(26101),
      E = e.i(89518);
    let k = BigInt(0),
      $ = BigInt(1),
      I = BigInt(2),
      B = BigInt(7),
      A = BigInt(256),
      z = BigInt(113),
      C = [],
      S = [],
      L = [];
    for (let e = 0, t = $, r = 1, n = 0; e < 24; e++) {
      ([r, n] = [n, (2 * r + 3 * n) % 5]),
        C.push(2 * (5 * n + r)),
        S.push((((e + 1) * (e + 2)) / 2) % 64);
      let s = k;
      for (let e = 0; e < 7; e++)
        (t = ((t << $) ^ ((t >> B) * z)) % A) & I &&
          (s ^= $ << (($ << BigInt(e)) - $));
      L.push(s);
    }
    let N = (0, v.split)(L, !0),
      H = N[0],
      U = N[1],
      O = (e, t, r) =>
        r > 32 ? (0, v.rotlBH)(e, t, r) : (0, v.rotlSH)(e, t, r),
      T = (e, t, r) =>
        r > 32 ? (0, v.rotlBL)(e, t, r) : (0, v.rotlSL)(e, t, r);
    class M extends E.Hash {
      constructor(e, t, r, n = !1, s = 24) {
        if (
          (super(),
          (this.pos = 0),
          (this.posOut = 0),
          (this.finished = !1),
          (this.destroyed = !1),
          (this.enableXOF = !1),
          (this.blockLen = e),
          (this.suffix = t),
          (this.outputLen = r),
          (this.enableXOF = n),
          (this.rounds = s),
          (0, E.anumber)(r),
          !(0 < e && e < 200))
        )
          throw Error("only keccak-f1600 function is supported");
        (this.state = new Uint8Array(200)),
          (this.state32 = (0, E.u32)(this.state));
      }
      clone() {
        return this._cloneInto();
      }
      keccak() {
        (0, E.swap32IfBE)(this.state32),
          (function (e, t = 24) {
            let r = new Uint32Array(10);
            for (let n = 24 - t; n < 24; n++) {
              for (let t = 0; t < 10; t++)
                r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
              for (let t = 0; t < 10; t += 2) {
                let n = (t + 8) % 10,
                  s = (t + 2) % 10,
                  i = r[s],
                  o = r[s + 1],
                  a = O(i, o, 1) ^ r[n],
                  l = T(i, o, 1) ^ r[n + 1];
                for (let r = 0; r < 50; r += 10)
                  (e[t + r] ^= a), (e[t + r + 1] ^= l);
              }
              let t = e[2],
                s = e[3];
              for (let r = 0; r < 24; r++) {
                let n = S[r],
                  i = O(t, s, n),
                  o = T(t, s, n),
                  a = C[r];
                (t = e[a]), (s = e[a + 1]), (e[a] = i), (e[a + 1] = o);
              }
              for (let t = 0; t < 50; t += 10) {
                for (let n = 0; n < 10; n++) r[n] = e[t + n];
                for (let n = 0; n < 10; n++)
                  e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
              }
              (e[0] ^= H[n]), (e[1] ^= U[n]);
            }
            (0, E.clean)(r);
          })(this.state32, this.rounds),
          (0, E.swap32IfBE)(this.state32),
          (this.posOut = 0),
          (this.pos = 0);
      }
      update(e) {
        (0, E.aexists)(this), (e = (0, E.toBytes)(e)), (0, E.abytes)(e);
        let { blockLen: t, state: r } = this,
          n = e.length;
        for (let s = 0; s < n; ) {
          let i = Math.min(t - this.pos, n - s);
          for (let t = 0; t < i; t++) r[this.pos++] ^= e[s++];
          this.pos === t && this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished) return;
        this.finished = !0;
        let { state: e, suffix: t, pos: r, blockLen: n } = this;
        (e[r] ^= t),
          (128 & t) != 0 && r === n - 1 && this.keccak(),
          (e[n - 1] ^= 128),
          this.keccak();
      }
      writeInto(e) {
        (0, E.aexists)(this, !1), (0, E.abytes)(e), this.finish();
        let t = this.state,
          { blockLen: r } = this;
        for (let n = 0, s = e.length; n < s; ) {
          this.posOut >= r && this.keccak();
          let i = Math.min(r - this.posOut, s - n);
          e.set(t.subarray(this.posOut, this.posOut + i), n),
            (this.posOut += i),
            (n += i);
        }
        return e;
      }
      xofInto(e) {
        if (!this.enableXOF)
          throw Error("XOF is not possible for this instance");
        return this.writeInto(e);
      }
      xof(e) {
        return (0, E.anumber)(e), this.xofInto(new Uint8Array(e));
      }
      digestInto(e) {
        if (((0, E.aoutput)(e, this), this.finished))
          throw Error("digest() was already called");
        return this.writeInto(e), this.destroy(), e;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        (this.destroyed = !0), (0, E.clean)(this.state);
      }
      _cloneInto(e) {
        let {
          blockLen: t,
          suffix: r,
          outputLen: n,
          rounds: s,
          enableXOF: i,
        } = this;
        return (
          e || (e = new M(t, r, n, i, s)),
          e.state32.set(this.state32),
          (e.pos = this.pos),
          (e.posOut = this.posOut),
          (e.finished = this.finished),
          (e.rounds = s),
          (e.suffix = r),
          (e.outputLen = n),
          (e.enableXOF = i),
          (e.destroyed = this.destroyed),
          e
        );
      }
    }
    let R = (0, E.createHasher)(() => new M(136, 1, 32));
    e.s(
      [
        "keccak256",
        0,
        function (e, t) {
          let n = R((0, r.isHex)(e, { strict: !1 }) ? b(e) : e);
          return "bytes" === (t || "hex") ? n : c(n);
        },
      ],
      31095
    );
  },
  58765,
  (e) => {
    "use strict";
    var t = e.i(31095),
      r = e.i(47526),
      n = e.i(1319),
      s = e.i(75107);
    e.s(
      [
        "hashMessage",
        0,
        function (e, i) {
          let o, a;
          return (0, t.keccak256)(
            ((o =
              "string" == typeof e
                ? (0, s.stringToHex)(e)
                : "string" == typeof e.raw
                ? e.raw
                : (0, s.bytesToHex)(e.raw)),
            (a = (0, s.stringToHex)(`\x19Ethereum Signed Message:
${(0, n.size)(o)}`)),
            (0, r.concat)([a, o])),
            i
          );
        },
      ],
      58765
    );
  },
  18217,
  (e) => {
    "use strict";
    var t = e.i(23838),
      r = e.i(31095),
      n = e.i(80841),
      s = e.i(1319),
      i = e.i(50323),
      o = e.i(75107);
    async function a({ hash: t, signature: r }) {
      let u = (0, n.isHex)(t) ? t : (0, o.toHex)(t),
        { secp256k1: c } = await e.A(89892),
        d = (() => {
          if ("object" == typeof r && "r" in r && "s" in r) {
            let { r: e, s: t, v: n, yParity: s } = r,
              o = l(Number(s ?? n));
            return new c.Signature(
              (0, i.hexToBigInt)(e),
              (0, i.hexToBigInt)(t)
            ).addRecoveryBit(o);
          }
          let e = (0, n.isHex)(r) ? r : (0, o.toHex)(r);
          if (65 !== (0, s.size)(e)) throw Error("invalid signature length");
          let t = l((0, i.hexToNumber)(`0x${e.slice(130)}`));
          return c.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(t);
        })()
          .recoverPublicKey(u.substring(2))
          .toHex(!1);
      return `0x${d}`;
    }
    function l(e) {
      if (0 === e || 1 === e) return e;
      if (27 === e) return 0;
      if (28 === e) return 1;
      throw Error("Invalid yParityOrV value");
    }
    async function u({ hash: e, signature: n }) {
      var s;
      let i;
      return (
        (s = await a({ hash: e, signature: n })),
        (i = (0, r.keccak256)(`0x${s.substring(4)}`).substring(26)),
        (0, t.checksumAddress)(`0x${i}`)
      );
    }
    e.s(["recoverAddress", 0, u], 18217);
  },
  26101,
  (e) => {
    "use strict";
    let t = BigInt(0x100000000 - 1),
      r = BigInt(32);
    e.s([
      "add",
      0,
      function (e, t, r, n) {
        let s = (t >>> 0) + (n >>> 0);
        return { h: (e + r + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
      },
      "add3H",
      0,
      (e, t, r, n) => (t + r + n + ((e / 0x100000000) | 0)) | 0,
      "add3L",
      0,
      (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
      "add4H",
      0,
      (e, t, r, n, s) => (t + r + n + s + ((e / 0x100000000) | 0)) | 0,
      "add4L",
      0,
      (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
      "add5H",
      0,
      (e, t, r, n, s, i) => (t + r + n + s + i + ((e / 0x100000000) | 0)) | 0,
      "add5L",
      0,
      (e, t, r, n, s) =>
        (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0),
      "rotlBH",
      0,
      (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
      "rotlBL",
      0,
      (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
      "rotlSH",
      0,
      (e, t, r) => (e << r) | (t >>> (32 - r)),
      "rotlSL",
      0,
      (e, t, r) => (t << r) | (e >>> (32 - r)),
      "rotrBH",
      0,
      (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
      "rotrBL",
      0,
      (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
      "rotrSH",
      0,
      (e, t, r) => (e >>> r) | (t << (32 - r)),
      "rotrSL",
      0,
      (e, t, r) => (e << (32 - r)) | (t >>> r),
      "shrSH",
      0,
      (e, t, r) => e >>> r,
      "shrSL",
      0,
      (e, t, r) => (e << (32 - r)) | (t >>> r),
      "split",
      0,
      function (e, n = !1) {
        let s = e.length,
          i = new Uint32Array(s),
          o = new Uint32Array(s);
        for (let a = 0; a < s; a++) {
          let { h: s, l } = (function (e, n = !1) {
            return n
              ? { h: Number(e & t), l: Number((e >> r) & t) }
              : { h: 0 | Number((e >> r) & t), l: 0 | Number(e & t) };
          })(e[a], n);
          [i[a], o[a]] = [s, l];
        }
        return [i, o];
      },
    ]);
  },
  89518,
  (e) => {
    "use strict";
    let t =
      "object" == typeof globalThis && "crypto" in globalThis
        ? globalThis.crypto
        : void 0;
    function r(e) {
      if (!Number.isSafeInteger(e) || e < 0)
        throw Error("positive integer expected, got " + e);
    }
    function n(e, ...t) {
      if (
        !(
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        )
      )
        throw Error("Uint8Array expected");
      if (t.length > 0 && !t.includes(e.length))
        throw Error(
          "Uint8Array expected of length " + t + ", got length=" + e.length
        );
    }
    let s =
      68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]
        ? (e) => e
        : function (e) {
            for (let r = 0; r < e.length; r++) {
              var t;
              e[r] =
                (((t = e[r]) << 24) & 0xff000000) |
                ((t << 8) & 0xff0000) |
                ((t >>> 8) & 65280) |
                ((t >>> 24) & 255);
            }
            return e;
          };
    function i(e) {
      return (
        "string" == typeof e &&
          (e = (function (e) {
            if ("string" != typeof e) throw Error("string expected");
            return new Uint8Array(new TextEncoder().encode(e));
          })(e)),
        n(e),
        e
      );
    }
    e.s(
      [
        "Hash",
        0,
        class {},
        "abytes",
        0,
        n,
        "aexists",
        0,
        function (e, t = !0) {
          if (e.destroyed) throw Error("Hash instance has been destroyed");
          if (t && e.finished)
            throw Error("Hash#digest() has already been called");
        },
        "ahash",
        0,
        function (e) {
          if ("function" != typeof e || "function" != typeof e.create)
            throw Error("Hash should be wrapped by utils.createHasher");
          r(e.outputLen), r(e.blockLen);
        },
        "anumber",
        0,
        r,
        "aoutput",
        0,
        function (e, t) {
          n(e);
          let r = t.outputLen;
          if (e.length < r)
            throw Error(
              "digestInto() expects output buffer of length at least " + r
            );
        },
        "clean",
        0,
        function (...e) {
          for (let t = 0; t < e.length; t++) e[t].fill(0);
        },
        "concatBytes",
        0,
        function (...e) {
          let t = 0;
          for (let r = 0; r < e.length; r++) {
            let s = e[r];
            n(s), (t += s.length);
          }
          let r = new Uint8Array(t);
          for (let t = 0, n = 0; t < e.length; t++) {
            let s = e[t];
            r.set(s, n), (n += s.length);
          }
          return r;
        },
        "createHasher",
        0,
        function (e) {
          let t = (t) => e().update(i(t)).digest(),
            r = e();
          return (
            (t.outputLen = r.outputLen),
            (t.blockLen = r.blockLen),
            (t.create = () => e()),
            t
          );
        },
        "createView",
        0,
        function (e) {
          return new DataView(e.buffer, e.byteOffset, e.byteLength);
        },
        "createXOFer",
        0,
        function (e) {
          let t = (t, r) => e(r).update(i(t)).digest(),
            r = e({});
          return (
            (t.outputLen = r.outputLen),
            (t.blockLen = r.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        },
        "randomBytes",
        0,
        function (e = 32) {
          if (t && "function" == typeof t.getRandomValues)
            return t.getRandomValues(new Uint8Array(e));
          if (t && "function" == typeof t.randomBytes)
            return Uint8Array.from(t.randomBytes(e));
          throw Error("crypto.getRandomValues must be defined");
        },
        "rotr",
        0,
        function (e, t) {
          return (e << (32 - t)) | (e >>> t);
        },
        "swap32IfBE",
        0,
        s,
        "toBytes",
        0,
        i,
        "u32",
        0,
        function (e) {
          return new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          );
        },
      ],
      89518
    );
  },
  44379,
  (e) => {
    "use strict";
    var t = e.i(18050),
      r = e.i(71645),
      n = e.i(18566),
      s = e.i(56420);
    let i = {
      name: "search",
      size: 24,
      node: [
        ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ],
    };
    i.node;
    let o = (0, s.default)(i);
    var a = e.i(15092),
      l = e.i(31338),
      u = e.i(75379),
      c = e.i(45060);
    let d = [
        { label: "Chat on Bittensor", href: "/chat?mode=bittensor" },
        {
          label: `Copy the $${l.site.token.symbol} contract address`,
          copy: l.site.token.address,
        },
        { label: "Mine on Bittensor", href: "/lend#mine-bittensor" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Who hears what", href: "/#who-hears-what" },
        { label: "Questions", href: "/#faq" },
        ...(a.USDG
          ? [{ label: "Copy USDG contract address", copy: a.USDG.address }]
          : []),
      ],
      h = "inferno:palette";
    e.s(
      [
        "CommandPalette",
        0,
        function () {
          let e = (0, n.useRouter)(),
            s = (0, r.useRef)(null),
            i = (0, r.useId)(),
            [a, l] = (0, r.useState)(""),
            [f, p] = (0, r.useState)(0),
            [g, m] = (0, r.useState)("");
          (0, r.useEffect)(() => {
            let e = () => {
                let e = s.current;
                if (e) {
                  if (e.open) return void e.close();
                  l(""), p(0), m(""), e.showModal();
                }
              },
              t = (t) => {
                (t.metaKey || t.ctrlKey) &&
                  ("k" === t.key || "K" === t.key) &&
                  (t.preventDefault(), e());
              };
            return (
              window.addEventListener("keydown", t),
              window.addEventListener(h, e),
              () => {
                window.removeEventListener("keydown", t),
                  window.removeEventListener(h, e);
              }
            );
          }, []);
          let b = a.trim().toLowerCase(),
            w = d.filter((e) => e.label.toLowerCase().includes(b)),
            y = (t) => {
              "copy" in t
                ? navigator.clipboard.writeText(t.copy).then(
                    () => m("Copied"),
                    () => m("Couldn't copy")
                  )
                : (s.current?.close(), e.push(t.href));
            };
          return (0, t.jsxs)("dialog", {
            ref: s,
            "aria-label": "Command palette",
            onClick: (e) =>
              e.target === e.currentTarget && e.currentTarget.close(),
            className:
              "mx-auto mt-[14vh] w-[min(32rem,calc(100%-2rem))] overflow-hidden rounded-3xl border border-line-bright bg-night-2 text-mist shadow-2xl shadow-moon-deep/20 backdrop:bg-night/70 backdrop:backdrop-blur-sm",
            children: [
              (0, t.jsxs)("div", {
                className: "flex items-center gap-3 border-b border-line px-5",
                children: [
                  (0, t.jsx)(o, {
                    "aria-hidden": !0,
                    size: 18,
                    className: "shrink-0 text-faint",
                  }),
                  (0, t.jsx)("input", {
                    role: "combobox",
                    "aria-expanded": !0,
                    "aria-controls": `${i}-list`,
                    "aria-activedescendant": w[f] ? `${i}-${f}` : void 0,
                    "aria-autocomplete": "list",
                    "aria-label": "Search pages and actions",
                    value: a,
                    onChange: (e) => {
                      l(e.target.value), p(0);
                    },
                    onKeyDown: (e) => {
                      let t = w.length;
                      "ArrowDown" === e.key && t
                        ? (e.preventDefault(), p((e) => (e + 1) % t))
                        : "ArrowUp" === e.key && t
                        ? (e.preventDefault(), p((e) => (e - 1 + t) % t))
                        : "Enter" === e.key && w[f]
                        ? (e.preventDefault(), y(w[f]))
                        : "Tab" === e.key && e.preventDefault();
                    },
                    placeholder: "Jump to…",
                    autoComplete: "off",
                    spellCheck: !1,
                    className:
                      "h-14 w-full bg-transparent text-base outline-none placeholder:text-faint",
                  }),
                ],
              }),
              (0, t.jsx)("ul", {
                id: `${i}-list`,
                role: "listbox",
                "aria-label": "Results",
                className: "max-h-80 overflow-y-auto p-2 empty:hidden",
                children: w.map((e, r) =>
                  (0, t.jsxs)(
                    "li",
                    {
                      id: `${i}-${r}`,
                      role: "option",
                      "aria-selected": r === f,
                      onClick: () => y(e),
                      onMouseMove: () => p(r),
                      className: (0, c.cn)(
                        "flex cursor-pointer items-center justify-between gap-4 rounded-2xl px-4 py-2.5 text-[15px]",
                        r === f ? "bg-night-3 text-mist" : "text-hush"
                      ),
                      children: [
                        e.label,
                        "copy" in e &&
                          (0, t.jsx)("span", {
                            className: "tnum text-sm text-faint",
                            children: g || (0, u.shortAddress)(e.copy),
                          }),
                      ],
                    },
                    e.label
                  )
                ),
              }),
              0 === w.length &&
                (0, t.jsx)("p", {
                  className: "px-5 py-6 text-[15px] text-faint",
                  children: "Nothing matches.",
                }),
              (0, t.jsx)("p", {
                role: "status",
                className: "sr-only",
                children: g && `${g}: USDG contract address`,
              }),
            ],
          });
        },
        "togglePalette",
        0,
        () => window.dispatchEvent(new Event(h)),
      ],
      44379
    );
  },
  62528,
  (e) => {
    "use strict";
    var t = e.i(18050),
      r = e.i(71645),
      n = e.i(15092);
    let s = (0, r.createContext)(null),
      i = "inferno.wallet.rdns";
    async function o(e) {
      let t = await e.request({ method: "eth_chainId" });
      if (t?.toLowerCase() !== n.CHAIN_HEX)
        try {
          await e.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: n.CHAIN_HEX }],
          });
        } catch (t) {
          if (
            !(
              4902 === t.code ||
              /unknown chain|unrecognized chain|not been added/i.test(
                t.message ?? ""
              )
            )
          )
            throw t;
          await e.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: n.CHAIN_HEX,
                chainName: n.CHAIN.name,
                nativeCurrency: n.CHAIN.nativeCurrency,
                rpcUrls: [n.CHAIN.rpcUrls.default.http[0]],
                blockExplorerUrls: [n.EXPLORER_URL],
              },
            ],
          });
        }
    }
    e.s([
      "WalletProvider",
      0,
      function ({ children: e }) {
        let [a, l] = (0, r.useState)([]),
          [u, c] = (0, r.useState)(null),
          [d, h] = (0, r.useState)(null),
          [f, p] = (0, r.useState)(!1),
          [g, m] = (0, r.useState)(null),
          [b, w] = (0, r.useState)(null),
          y = (0, r.useRef)(null),
          x = (0, r.useRef)(!1);
        (0, r.useEffect)(() => {
          let e = new Map(),
            t = (t) => {
              let r = t.detail;
              !r?.info?.rdns ||
                e.has(r.info.rdns) ||
                (e.set(r.info.rdns, {
                  id: r.info.rdns,
                  name: r.info.name,
                  icon: r.info.icon,
                  provider: r.provider,
                }),
                l(Array.from(e.values())));
            };
          window.addEventListener("eip6963:announceProvider", t),
            window.dispatchEvent(new Event("eip6963:requestProvider"));
          let r = setTimeout(() => {
            let t = window.ethereum;
            if (t)
              for (let r of t.providers?.length ? t.providers : [t]) {
                if (Array.from(e.values()).some((e) => e.provider === r))
                  continue;
                let t = r.isRabby
                    ? "Rabby"
                    : r.isCoinbaseWallet
                    ? "Coinbase Wallet"
                    : r.isBraveWallet
                    ? "Brave Wallet"
                    : r.isMetaMask
                    ? "MetaMask"
                    : "Browser wallet",
                  n = `legacy:${t.toLowerCase().replace(/\s+/g, "-")}`;
                e.has(n) ||
                  (e.set(n, { id: n, name: t, provider: r }),
                  l(Array.from(e.values())));
              }
          }, 400);
          return () => {
            window.removeEventListener("eip6963:announceProvider", t),
              clearTimeout(r);
          };
        }, []);
        let v = (0, r.useCallback)(async (e, t) => {
          let r = e.provider,
            n = await r.request({
              method: t ? "eth_accounts" : "eth_requestAccounts",
            });
          if (!n?.length) {
            if (t) return;
            throw Error(
              "The wallet didn't share an account. Unlock it and try again."
            );
          }
          t || (await o(r));
          let s = await r.request({ method: "eth_chainId" });
          (y.current = r),
            w(r),
            c(n[0]),
            h(s?.toLowerCase() ?? null),
            m(e.name);
          try {
            localStorage.setItem(i, e.id);
          } catch {}
          r.on?.("accountsChanged", (e) => {
            e?.length
              ? c(e[0])
              : ((y.current = null), w(null), c(null), m(null));
          }),
            r.on?.("chainChanged", (e) => h(e?.toLowerCase() ?? null));
        }, []);
        (0, r.useEffect)(() => {
          if (x.current || 0 === a.length) return;
          let e = null;
          try {
            e = localStorage.getItem(i);
          } catch {
            return;
          }
          let t = e ? a.find((t) => t.id === e) : void 0;
          t && ((x.current = !0), v(t, !0).catch(() => {}));
        }, [a, v]);
        let E = (0, r.useCallback)(
            async (e) => {
              let t = a.find((t) => t.id === e);
              if (!t)
                throw Error(
                  "That wallet is no longer available. Reload and try again."
                );
              p(!0);
              try {
                await v(t, !1);
              } finally {
                p(!1);
              }
            },
            [a, v]
          ),
          k = (0, r.useCallback)(() => {
            (y.current = null), w(null), c(null), h(null), m(null);
            try {
              localStorage.removeItem(i);
            } catch {}
          }, []),
          $ = (0, r.useCallback)(async () => {
            if (!y.current) return;
            await o(y.current);
            let e = await y.current.request({ method: "eth_chainId" });
            h(e?.toLowerCase() ?? null);
          }, []),
          I = (0, r.useMemo)(
            () => ({
              address: u,
              chainHex: d,
              connected: null !== u,
              connecting: f,
              onRobinhoodChain: d === n.CHAIN_HEX,
              providerName: g,
              wallets: a,
              connect: E,
              disconnect: k,
              switchToRobinhood: $,
              provider: b,
            }),
            [u, d, f, g, a, E, k, $, b]
          );
        return (0, t.jsx)(s.Provider, { value: I, children: e });
      },
      "ensureRobinhoodChain",
      0,
      o,
      "useWallet",
      0,
      function () {
        let e = (0, r.useContext)(s);
        if (!e) throw Error("useWallet must be used inside WalletProvider");
        return e;
      },
    ]);
  },
  75379,
  (e) => {
    "use strict";
    let t = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
    e.s([
      "formatCompact",
      0,
      function (e) {
        return new Intl.NumberFormat("en-US", {
          notation: "compact",
          maximumFractionDigits: 1,
        }).format(e);
      },
      "formatInt",
      0,
      (e) => (void 0 === e ? "–" : t.format(e)),
      "formatUsd",
      0,
      function (e, t = 2) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: t,
          maximumFractionDigits: t,
        }).format(e);
      },
      "shortAddress",
      0,
      function (e) {
        return e.length > 10 ? `${e.slice(0, 6)}…${e.slice(-4)}` : e;
      },
    ]);
  },
  31338,
  (e) => {
    "use strict";
    let t = {
      name: "Inferno",
      wordmark: "inferno",
      x: "https://x.com/infernoairh",
      xHandle: "@infernoairh",
      token: {
        symbol: "INFERNOAI",
        address: "TBA",
      },
      tagline: "Private compute, powered by Bittensor.",
      description:
        "Inferno is a private compute network powered by Bittensor. Run open models in sealed hardware on Bittensor subnet 64, on GPUs people lend or on your own, mine with your GPU, and send sealed messages between wallets. Lenders get paid in USDG on Robinhood Chain.",
      url:
        e.i(47167).default.env.NEXT_PUBLIC_SITE_URL ??
        "https://www.infernoai.live",
      disclaimer:
        "Inferno is an independent project built on Robinhood Chain. It is not affiliated with, endorsed by, or sponsored by Robinhood Markets, Inc.",
      nav: [],
    };
    e.s(["site", 0, t]);
  },
]);
