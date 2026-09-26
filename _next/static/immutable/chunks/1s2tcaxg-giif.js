(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  11493,
  (t) => {
    "use strict";
    var e = t.i(23838),
      r = t.i(6685),
      n = t.i(58765),
      i = t.i(18217);
    async function o({ message: t, signature: e }) {
      return (0, i.recoverAddress)({
        hash: (0, n.hashMessage)(t),
        signature: e,
      });
    }
    async function s({ address: t, message: n, signature: i }) {
      return (0, r.isAddressEqual)(
        (0, e.getAddress)(t),
        await o({ message: n, signature: i })
      );
    }
    t.s(["verifyMessage", 0, s], 11493);
  },
  8178,
  (t) => {
    "use strict";
    let e, r, n, i, o;
    function s(t) {
      return (
        t instanceof Uint8Array ||
        (ArrayBuffer.isView(t) &&
          "Uint8Array" === t.constructor.name &&
          "BYTES_PER_ELEMENT" in t &&
          1 === t.BYTES_PER_ELEMENT)
      );
    }
    let f = (t) => (t ? `"${t}" ` : "");
    function l(t, e = "") {
      if ("boolean" != typeof t)
        throw TypeError(f(e) + "expected boolean, got type=" + typeof t);
      return t;
    }
    function a(t, e = "") {
      if ("number" != typeof t)
        throw TypeError(f(e) + "expected number, got " + typeof t);
      if (!Number.isSafeInteger(t) || t < 0)
        throw RangeError(f(e) + "expected integer >= 0, got " + t);
      return t;
    }
    function u(t, e, r = "") {
      if (s(t) && (void 0 === e || t.length === e)) return t;
      void 0 !== e && a(e, "length");
      let n = s(t),
        i = void 0 !== e ? ` of length ${e}` : "",
        o = n ? `length=${t.length}` : `type=${typeof t}`,
        l = f(r) + "expected Uint8Array" + i + ", got " + o;
      if (!n) throw TypeError(l);
      throw RangeError(l);
    }
    let h = (t, e) => {
      if (null === t || "object" != typeof t || Array.isArray(t))
        throw TypeError(
          "object" === e
            ? "expected valid options object"
            : `"${e}" expected object, got type=${typeof t}`
        );
    };
    function d(t, e = !0) {
      if (t.destroyed) throw Error("hash was destroyed");
      if (e && t.finished) throw Error("digest() was already called");
    }
    function c(t) {
      return new Uint32Array(
        t.buffer,
        t.byteOffset,
        Math.floor(t.byteLength / 4)
      );
    }
    function p(...t) {
      for (let e = 0; e < t.length; e++) t[e].fill(0);
    }
    let g = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
      b = g
        ? (t) => t
        : function (t) {
            for (let r = 0; r < t.length; r++) {
              var e;
              t[r] =
                (((e = t[r]) << 24) & 0xff000000) |
                ((e << 8) & 0xff0000) |
                ((e >>> 8) & 65280) |
                ((e >>> 24) & 255);
            }
            return t;
          };
    function y(t, e, r = !0) {
      if (void 0 === e) return new Uint8Array(t);
      if ((u(e, t, "output"), r && !x(e)))
        throw Error("invalid output, must be aligned");
      return e;
    }
    function x(t) {
      return t.byteOffset % 4 == 0;
    }
    function w(t) {
      return Uint8Array.from(u(t));
    }
    let E = (t) => Uint8Array.from(t.split(""), (t) => t.charCodeAt(0)),
      m = b(c(E("expand 16-byte k"))),
      v = b(c(E("expand 32-byte k")));
    function B(t, e) {
      return (t << e) | (t >>> (32 - e));
    }
    let O = 0x100000000 - 1,
      A = Uint32Array.of();
    function R(t, e) {
      return (255 & t[e++]) | ((255 & t[e++]) << 8);
    }
    class I {
      blockLen = 16;
      outputLen = 16;
      buffer = new Uint8Array(16);
      r = new Uint16Array(10);
      h = new Uint16Array(10);
      pad = new Uint16Array(8);
      pos = 0;
      finished = !1;
      destroyed = !1;
      constructor(t) {
        const e = R((t = w(u(t, 32, "key"))), 0),
          r = R(t, 2),
          n = R(t, 4),
          i = R(t, 6),
          o = R(t, 8),
          s = R(t, 10),
          f = R(t, 12),
          l = R(t, 14);
        (this.r[0] = 8191 & e),
          (this.r[1] = ((e >>> 13) | (r << 3)) & 8191),
          (this.r[2] = ((r >>> 10) | (n << 6)) & 7939),
          (this.r[3] = ((n >>> 7) | (i << 9)) & 8191),
          (this.r[4] = ((i >>> 4) | (o << 12)) & 255),
          (this.r[5] = (o >>> 1) & 8190),
          (this.r[6] = ((o >>> 14) | (s << 2)) & 8191),
          (this.r[7] = ((s >>> 11) | (f << 5)) & 8065),
          (this.r[8] = ((f >>> 8) | (l << 8)) & 8191),
          (this.r[9] = (l >>> 5) & 127);
        for (let e = 0; e < 8; e++) this.pad[e] = R(t, 16 + 2 * e);
      }
      process(t, e, r = !1) {
        let { h: n, r: i } = this,
          o = i[0],
          s = i[1],
          f = i[2],
          l = i[3],
          a = i[4],
          u = i[5],
          h = i[6],
          d = i[7],
          c = i[8],
          p = i[9],
          g = R(t, e + 0),
          b = R(t, e + 2),
          y = R(t, e + 4),
          x = R(t, e + 6),
          w = R(t, e + 8),
          E = R(t, e + 10),
          m = R(t, e + 12),
          v = R(t, e + 14),
          B = n[0] + (8191 & g),
          O = n[1] + (((g >>> 13) | (b << 3)) & 8191),
          A = n[2] + (((b >>> 10) | (y << 6)) & 8191),
          I = n[3] + (((y >>> 7) | (x << 9)) & 8191),
          T = n[4] + (((x >>> 4) | (w << 12)) & 8191),
          S = n[5] + ((w >>> 1) & 8191),
          U = n[6] + (((w >>> 14) | (E << 2)) & 8191),
          L = n[7] + (((E >>> 11) | (m << 5)) & 8191),
          N = n[8] + (((m >>> 8) | (v << 8)) & 8191),
          q = n[9] + ((v >>> 5) | (2048 * !r)),
          C = 0,
          D = 0 + B * o + 5 * p * O + 5 * c * A + 5 * d * I + 5 * h * T;
        (C = D >>> 13),
          (D &= 8191),
          (D += 5 * u * S + 5 * a * U + 5 * l * L + 5 * f * N + 5 * s * q),
          (C += D >>> 13),
          (D &= 8191);
        let F = C + B * s + O * o + 5 * p * A + 5 * c * I + 5 * d * T;
        (C = F >>> 13),
          (F &= 8191),
          (F += 5 * h * S + 5 * u * U + 5 * a * L + 5 * l * N + 5 * f * q),
          (C += F >>> 13),
          (F &= 8191);
        let _ = C + B * f + O * s + A * o + 5 * p * I + 5 * c * T;
        (C = _ >>> 13),
          (_ &= 8191),
          (_ += 5 * d * S + 5 * h * U + 5 * u * L + 5 * a * N + 5 * l * q),
          (C += _ >>> 13),
          (_ &= 8191);
        let H = C + B * l + O * f + A * s + I * o + 5 * p * T;
        (C = H >>> 13),
          (H &= 8191),
          (H += 5 * c * S + 5 * d * U + 5 * h * L + 5 * u * N + 5 * a * q),
          (C += H >>> 13),
          (H &= 8191);
        let P = C + B * a + O * l + A * f + I * s + T * o;
        (C = P >>> 13),
          (P &= 8191),
          (P += 5 * p * S + 5 * c * U + 5 * d * L + 5 * h * N + 5 * u * q),
          (C += P >>> 13),
          (P &= 8191);
        let $ = C + B * u + O * a + A * l + I * f + T * s;
        (C = $ >>> 13),
          ($ &= 8191),
          ($ += S * o + 5 * p * U + 5 * c * L + 5 * d * N + 5 * h * q),
          (C += $ >>> 13),
          ($ &= 8191);
        let j = C + B * h + O * u + A * a + I * l + T * f;
        (C = j >>> 13),
          (j &= 8191),
          (j += S * s + U * o + 5 * p * L + 5 * c * N + 5 * d * q),
          (C += j >>> 13),
          (j &= 8191);
        let k = C + B * d + O * h + A * u + I * a + T * l;
        (C = k >>> 13),
          (k &= 8191),
          (k += S * f + U * s + L * o + 5 * p * N + 5 * c * q),
          (C += k >>> 13),
          (k &= 8191);
        let M = C + B * c + O * d + A * h + I * u + T * a;
        (C = M >>> 13),
          (M &= 8191),
          (M += S * l + U * f + L * s + N * o + 5 * p * q),
          (C += M >>> 13),
          (M &= 8191);
        let Z = C + B * p + O * c + A * d + I * h + T * u;
        (C = Z >>> 13),
          (Z &= 8191),
          (Z += S * a + U * l + L * f + N * s + q * o),
          (C += Z >>> 13),
          (Z &= 8191),
          (D = 8191 & (C = ((C = ((C << 2) + C) | 0) + D) | 0)),
          (C >>>= 13),
          (F += C),
          (n[0] = D),
          (n[1] = F),
          (n[2] = _),
          (n[3] = H),
          (n[4] = P),
          (n[5] = $),
          (n[6] = j),
          (n[7] = k),
          (n[8] = M),
          (n[9] = Z);
      }
      finalize() {
        let { h: t, pad: e } = this,
          r = new Uint16Array(10),
          n = t[1] >>> 13;
        t[1] &= 8191;
        for (let e = 2; e < 10; e++)
          (t[e] += n), (n = t[e] >>> 13), (t[e] &= 8191);
        (t[0] += 5 * n),
          (n = t[0] >>> 13),
          (t[0] &= 8191),
          (t[1] += n),
          (n = t[1] >>> 13),
          (t[1] &= 8191),
          (t[2] += n),
          (r[0] = t[0] + 5),
          (n = r[0] >>> 13),
          (r[0] &= 8191);
        for (let e = 1; e < 10; e++)
          (r[e] = t[e] + n), (n = r[e] >>> 13), (r[e] &= 8191);
        r[9] -= 8192;
        let i = (1 ^ n) - 1;
        for (let t = 0; t < 10; t++) r[t] &= i;
        i = ~i;
        for (let e = 0; e < 10; e++) t[e] = (t[e] & i) | r[e];
        (t[0] = (t[0] | (t[1] << 13)) & 65535),
          (t[1] = ((t[1] >>> 3) | (t[2] << 10)) & 65535),
          (t[2] = ((t[2] >>> 6) | (t[3] << 7)) & 65535),
          (t[3] = ((t[3] >>> 9) | (t[4] << 4)) & 65535),
          (t[4] = ((t[4] >>> 12) | (t[5] << 1) | (t[6] << 14)) & 65535),
          (t[5] = ((t[6] >>> 2) | (t[7] << 11)) & 65535),
          (t[6] = ((t[7] >>> 5) | (t[8] << 8)) & 65535),
          (t[7] = ((t[8] >>> 8) | (t[9] << 5)) & 65535);
        let o = t[0] + e[0];
        t[0] = 65535 & o;
        for (let r = 1; r < 8; r++)
          (o = (((t[r] + e[r]) | 0) + (o >>> 16)) | 0), (t[r] = 65535 & o);
        p(r);
      }
      update(t) {
        d(this), u(t);
        let { buffer: e, blockLen: r } = this,
          n = (t = w(t)).length;
        for (let i = 0; i < n; ) {
          let o = Math.min(r - this.pos, n - i);
          if (o === r) {
            for (; r <= n - i; i += r) this.process(t, i);
            continue;
          }
          e.set(t.subarray(i, i + o), this.pos),
            (this.pos += o),
            (i += o),
            this.pos === r && (this.process(e, 0, !1), (this.pos = 0));
        }
        return this;
      }
      destroy() {
        (this.destroyed = !0), p(this.h, this.r, this.buffer, this.pad);
      }
      digestInto(t) {
        d(this);
        u(t, void 0, "output");
        let e = this.outputLen;
        if (!(t.length >= e))
          throw RangeError('"output" expected length >= ' + e);
        this.finished = !0;
        let { buffer: r, h: n } = this,
          { pos: i } = this;
        if (i) {
          for (r[i++] = 1; i < 16; i++) r[i] = 0;
          this.process(r, 0, !0);
        }
        this.finalize();
        let o = 0;
        for (let e = 0; e < 8; e++)
          (t[o++] = n[e] >>> 0), (t[o++] = n[e] >>> 8);
      }
      digest() {
        let { buffer: t, outputLen: e } = this;
        this.digestInto(t);
        let r = t.slice(0, e);
        return this.destroy(), r;
      }
    }
    let T =
      ((rl = (t) => new I(t)),
      (e = () => []),
      ((r = (t, r) =>
        rl(r, ...e())
          .update(t)
          .digest()).outputLen = (n = rl(
        new Uint8Array(32),
        ...e(new Uint8Array(0))
      )).outputLen),
      (r.blockLen = n.blockLen),
      (r.create = (t, ...e) => rl(t, ...e)),
      r);
    function S(t, e, r, n, i, o = 20) {
      let s = t[0],
        f = t[1],
        l = t[2],
        a = t[3],
        u = e[0],
        h = e[1],
        d = e[2],
        c = e[3],
        p = e[4],
        g = e[5],
        b = e[6],
        y = e[7],
        x = r[0],
        w = r[1],
        E = r[2],
        m = s,
        v = f,
        O = l,
        A = a,
        R = u,
        I = h,
        T = d,
        U = c,
        L = p,
        N = g,
        q = b,
        C = y,
        D = i,
        F = x,
        _ = w,
        H = E;
      for (let t = 0; t < o; t += 2)
        (L = (L + (D = B(D ^ (m = (m + R) | 0), 16))) | 0),
          (m = (m + (R = B(R ^ L, 12))) | 0),
          (L = (L + (D = B(D ^ m, 8))) | 0),
          (R = B(R ^ L, 7)),
          (N = (N + (F = B(F ^ (v = (v + I) | 0), 16))) | 0),
          (v = (v + (I = B(I ^ N, 12))) | 0),
          (N = (N + (F = B(F ^ v, 8))) | 0),
          (I = B(I ^ N, 7)),
          (q = (q + (_ = B(_ ^ (O = (O + T) | 0), 16))) | 0),
          (O = (O + (T = B(T ^ q, 12))) | 0),
          (q = (q + (_ = B(_ ^ O, 8))) | 0),
          (T = B(T ^ q, 7)),
          (C = (C + (H = B(H ^ (A = (A + U) | 0), 16))) | 0),
          (A = (A + (U = B(U ^ C, 12))) | 0),
          (C = (C + (H = B(H ^ A, 8))) | 0),
          (U = B(U ^ C, 7)),
          (q = (q + (H = B(H ^ (m = (m + I) | 0), 16))) | 0),
          (m = (m + (I = B(I ^ q, 12))) | 0),
          (q = (q + (H = B(H ^ m, 8))) | 0),
          (I = B(I ^ q, 7)),
          (C = (C + (D = B(D ^ (v = (v + T) | 0), 16))) | 0),
          (v = (v + (T = B(T ^ C, 12))) | 0),
          (C = (C + (D = B(D ^ v, 8))) | 0),
          (T = B(T ^ C, 7)),
          (L = (L + (F = B(F ^ (O = (O + U) | 0), 16))) | 0),
          (O = (O + (U = B(U ^ L, 12))) | 0),
          (L = (L + (F = B(F ^ O, 8))) | 0),
          (U = B(U ^ L, 7)),
          (N = (N + (_ = B(_ ^ (A = (A + R) | 0), 16))) | 0),
          (A = (A + (R = B(R ^ N, 12))) | 0),
          (N = (N + (_ = B(_ ^ A, 8))) | 0),
          (R = B(R ^ N, 7));
      let P = 0;
      (n[P++] = (s + m) | 0),
        (n[P++] = (f + v) | 0),
        (n[P++] = (l + O) | 0),
        (n[P++] = (a + A) | 0),
        (n[P++] = (u + R) | 0),
        (n[P++] = (h + I) | 0),
        (n[P++] = (d + T) | 0),
        (n[P++] = (c + U) | 0),
        (n[P++] = (p + L) | 0),
        (n[P++] = (g + N) | 0),
        (n[P++] = (b + q) | 0),
        (n[P++] = (y + C) | 0),
        (n[P++] = (i + D) | 0),
        (n[P++] = (x + F) | 0),
        (n[P++] = (w + _) | 0),
        (n[P++] = (E + H) | 0);
    }
    let U = (function (t, e) {
        var r;
        let {
          allowShortKeys: n,
          extendNonceFn: i,
          counterLength: o,
          counterRight: s,
          rounds: f,
        } = (h(
          (r = {
            allowShortKeys: !1,
            counterLength: 8,
            counterRight: !1,
            rounds: 20,
          }),
          "defaults"
        ),
        h(e, "opts"),
        Object.assign(r, e));
        if ("function" != typeof t) throw Error("core must be a function");
        return (
          a(o),
          a(f),
          l(s),
          l(n),
          (e, r, l, h, d = 0) => {
            let E, B;
            u(e, void 0, "key"), u(r, void 0, "nonce"), u(l, void 0, "data");
            let R = l.length,
              I = void 0 !== h;
            if (
              ((h = y(R, h, !1)),
              I &&
                (function (t, e) {
                  if (
                    t.byteLength &&
                    e.byteLength &&
                    t.buffer === e.buffer &&
                    t.byteOffset < e.byteOffset + e.byteLength &&
                    e.byteOffset < t.byteOffset + t.byteLength &&
                    t.byteOffset < e.byteOffset
                  )
                    throw Error(
                      "complex overlap of input and output is not supported"
                    );
                })(l, h),
              a(d),
              d < 0 || d >= O)
            )
              throw Error("arx: counter overflow");
            let T = [],
              S = e.length;
            if (32 === S) T.push((E = w(e))), (B = v);
            else if (16 === S && n)
              (E = new Uint8Array(32)).set(e), E.set(e, 16), (B = m), T.push(E);
            else throw (u(e, 32, "arx key"), Error("invalid key size"));
            (g && x(r)) || T.push((r = w(r)));
            let U = c(E);
            if (i) {
              if (24 !== r.length)
                throw Error("arx: extended nonce must be 24 bytes");
              let t = r.subarray(0, 16);
              if (g) i(B, U, c(t), U);
              else {
                let e = b(Uint32Array.from(B));
                i(e, U, c(t), U), p(e), b(U);
              }
              r = r.subarray(16);
            } else g || b(U);
            let L = 16 - o;
            if (L !== r.length)
              throw Error(`arx: nonce must be ${L} or 16 bytes`);
            if (12 !== L) {
              let t = new Uint8Array(12);
              t.set(r, s ? 0 : 12 - r.length), (r = t), T.push(r);
            }
            let N = b(c(r));
            try {
              return (
                !(function (t, e, r, n, i, o, s, f) {
                  let l = i.length,
                    a = new Uint8Array(64),
                    u = c(a),
                    h = g && x(i) && x(o),
                    d = h ? c(i) : A,
                    p = h ? c(o) : A;
                  if (!g) {
                    for (let h = 0; h < l; s++) {
                      if ((t(e, r, n, u, s, f), b(u), s >= O))
                        throw Error("arx: counter overflow");
                      let d = Math.min(64, l - h);
                      for (let t = 0, e; t < d; t++)
                        o[(e = h + t)] = i[e] ^ a[t];
                      h += d;
                    }
                    return;
                  }
                  for (let c = 0; c < l; s++) {
                    if ((t(e, r, n, u, s, f), s >= O))
                      throw Error("arx: counter overflow");
                    let g = Math.min(64, l - c);
                    if (h && 64 === g) {
                      let t = c / 4;
                      if (c % 4 != 0)
                        throw Error("arx: invalid block position");
                      for (let e = 0, r; e < 16; e++)
                        p[(r = t + e)] = d[r] ^ u[e];
                      c += 64;
                      continue;
                    }
                    for (let t = 0, e; t < g; t++) o[(e = c + t)] = i[e] ^ a[t];
                    c += g;
                  }
                })(t, B, U, N, l, h, d, f),
                h
              );
            } finally {
              p(...T);
            }
          }
        );
      })(S, {
        counterRight: !1,
        counterLength: 8,
        extendNonceFn: function (t, e, r, n) {
          let i = g ? t : b(t.slice(0, 4)),
            o = g ? e : b(e.slice(0, 8)),
            s = g ? r : b(r.slice(0, 4)),
            f = new Uint32Array(16);
          S(i, o, s.subarray(1), f, s[0]);
          let l = 0;
          (n[l++] = (f[0] - i[0]) | 0),
            (n[l++] = (f[1] - i[1]) | 0),
            (n[l++] = (f[2] - i[2]) | 0),
            (n[l++] = (f[3] - i[3]) | 0),
            (n[l++] = (f[12] - s[0]) | 0),
            (n[l++] = (f[13] - s[1]) | 0),
            (n[l++] = (f[14] - s[2]) | 0),
            (n[l++] = (f[15] - s[3]) | 0),
            b(n),
            g || p(i, o, s),
            p(f);
        },
        allowShortKeys: !1,
      }),
      L = new Uint8Array(16),
      N = (t, e) => {
        t.update(e);
        let r = e.length % 16;
        r && t.update(L.subarray(r));
      },
      q = new Uint8Array(32);
    function C(t, e, r, n, i) {
      var o, s;
      let f, h;
      void 0 !== i && u(i, void 0, "AAD");
      let d = t(e, r, q),
        c =
          ((o = n.length),
          (s = i ? i.length : 0),
          a(o),
          a(s),
          l(!0),
          (h = new DataView(
            (f = new Uint8Array(16)).buffer,
            f.byteOffset,
            f.byteLength
          )).setBigUint64(0, BigInt(s), !0),
          h.setBigUint64(8, BigInt(o), !0),
          f),
        g = T.create(d);
      i && N(g, i), N(g, n), g.update(c);
      let b = g.digest();
      return p(d, c), b;
    }
    let D = ((t, e) => {
        function r(n, ...i) {
          u(n, void 0, "key"),
            void 0 !== t.nonceLength &&
              u(i[0], t.varSizeNonce ? void 0 : t.nonceLength, "nonce");
          let o = t.tagLength,
            f = +(void 0 !== t.nonceLength);
          if (!t.withAAD) {
            for (let t = f; t < i.length; t++)
              if (s(i[t])) throw Error("AAD not supported");
          }
          t.withAAD && void 0 !== i[f] && u(i[f], void 0, "AAD");
          let l = e(n, ...i),
            a = (t, e) => {
              if (void 0 !== e) {
                if (2 !== t) throw Error("cipher output not supported");
                u(e, void 0, "output");
              }
            },
            h = !1;
          return {
            encrypt(t, e) {
              if (h)
                throw Error("cannot encrypt() twice with same key + nonce");
              return (
                (h = !0),
                u(t, void 0, "data"),
                a(l.encrypt.length, e),
                l.encrypt(t, e)
              );
            },
            decrypt(t, e) {
              if ((u(t, void 0, "data"), o && t.length < o))
                throw Error('"ciphertext" expected length >= tagLength=' + o);
              return a(l.decrypt.length, e), l.decrypt(t, e);
            },
          };
        }
        return Object.assign(r, t), r;
      })(
        { blockSize: 64, nonceLength: 24, tagLength: 16, withAAD: !0 },
        (t, e, r) => ({
          encrypt(n, i) {
            let o = n.length;
            (i = y(o + 16, i, !1)).set(n);
            let s = i.subarray(0, -16);
            U(t, e, s, s, 1);
            let f = C(U, t, e, s, r);
            return i.set(f, o), p(f), i;
          },
          decrypt(n, i) {
            i = y(n.length - 16, i, !1);
            let o = n.subarray(0, -16),
              s = n.subarray(-16),
              f = C(U, t, e, o, r);
            if (
              !(function (t, e) {
                if (((t = u(t)), (e = u(e)), t.length !== e.length)) return !1;
                let r = 0;
                for (let n = 0; n < t.length; n++) r |= t[n] ^ e[n];
                return 0 === r;
              })(s, f)
            )
              throw (p(f), Error("invalid tag"));
            return i.set(n.subarray(0, -16)), U(t, e, i, i, 1), p(f), i;
          },
        })
      ),
      F = BigInt(0x100000000 - 1),
      _ = BigInt(32),
      H = (t, e, r) => t >>> r,
      P = (t, e, r) => (t << (32 - r)) | (e >>> r),
      $ = (t, e, r) => (t >>> r) | (e << (32 - r)),
      j = (t, e, r) => (t << (32 - r)) | (e >>> r),
      k = (t, e, r) => (t << (64 - r)) | (e >>> (r - 32)),
      M = (t, e, r) => (t >>> (r - 32)) | (e << (64 - r));
    function Z(t, e, r, n) {
      let i = (e >>> 0) + (n >>> 0);
      return { h: (t + r + ((i / 0x100000000) | 0)) | 0, l: 0 | i };
    }
    let V = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
      z = (t, e, r, n) => (e + r + n + ((t / 0x100000000) | 0)) | 0,
      Y = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
      G = (t, e, r, n, i) => (e + r + n + i + ((t / 0x100000000) | 0)) | 0,
      X = (t, e, r, n, i) =>
        (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
      W = (t, e, r, n, i, o) =>
        (e + r + n + i + o + ((t / 0x100000000) | 0)) | 0;
    function K(t) {
      return (
        t instanceof Uint8Array ||
        (ArrayBuffer.isView(t) &&
          "Uint8Array" === t.constructor.name &&
          "BYTES_PER_ELEMENT" in t &&
          1 === t.BYTES_PER_ELEMENT)
      );
    }
    let J = (t) => (t ? `"${t}" ` : "");
    function Q(t, e = "") {
      if ("number" != typeof t)
        throw TypeError(J(e) + "expected number, got " + typeof t);
      if (!Number.isSafeInteger(t) || t < 0)
        throw RangeError(J(e) + "expected integer >= 0, got " + t);
      return t;
    }
    function tt(t, e, r = "") {
      if (K(t) && (void 0 === e || t.length === e)) return t;
      void 0 !== e && Q(e, "length");
      let n = K(t),
        i = void 0 !== e ? ` of length ${e}` : "",
        o = n ? `length=${t.length}` : `type=${typeof t}`,
        s = J(r) + "expected Uint8Array" + i + ", got " + o;
      if (!n) throw TypeError(s);
      throw RangeError(s);
    }
    function te(t) {
      if ("function" != typeof t || "function" != typeof t.create)
        throw TypeError("expected hash wrapped by utils.createHasher");
      if ((Q(t.outputLen), Q(t.blockLen), t.outputLen < 1 || t.blockLen < 1))
        throw Error("hash blockLen / outputLen must be >= 1");
    }
    let tr = (t, e) => {
      if (null === t || "object" != typeof t || Array.isArray(t))
        throw TypeError(
          ("object" === e ? "" : `"${e}" `) +
            "expected object, got type=" +
            typeof t
        );
      let r = Object.getPrototypeOf(t);
      if (r !== Object.prototype && null !== r)
        throw TypeError(`"${e}" expected plain object`);
      if (Object.hasOwn(t, "__proto__"))
        throw TypeError(`"${e}.__proto__" is not allowed`);
    };
    function tn(t, e = !0) {
      if (t.destroyed) throw Error("hash was destroyed");
      if (e && t.finished) throw Error("digest() was already called");
    }
    function ti(t, e) {
      tt(t, void 0, "output");
      let r = e.outputLen;
      if (!(t.length >= r))
        throw RangeError('"output" expected length >= ' + r);
    }
    function to(...t) {
      for (let e = 0; e < t.length; e++) t[e].fill(0);
    }
    function ts(t) {
      return new DataView(t.buffer, t.byteOffset, t.byteLength);
    }
    function tf(t, e) {
      return (t << (32 - e)) | (t >>> e);
    }
    let tl =
        "function" == typeof Uint8Array.from([]).toHex &&
        "function" == typeof Uint8Array.fromHex,
      ta = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0")
      );
    function tu(t) {
      if ((tt(t), tl)) return t.toHex();
      let e = "";
      for (let r = 0; r < t.length; r++) e += ta[t[r]];
      return e;
    }
    function th(t) {
      return t >= 48 && t <= 57
        ? t - 48
        : t >= 65 && t <= 70
        ? t - 55
        : t >= 97 && t <= 102
        ? t - 87
        : void 0;
    }
    function td(t) {
      if ("string" != typeof t)
        throw TypeError("hex string expected, got " + typeof t);
      if (tl)
        try {
          return Uint8Array.fromHex(t);
        } catch (t) {
          if (t instanceof SyntaxError) throw RangeError(t.message);
          throw t;
        }
      let e = t.length,
        r = e / 2;
      if (e % 2)
        throw RangeError(
          "hex string expected, got unpadded hex of length " + e
        );
      let n = new Uint8Array(r);
      for (let e = 0, i = 0; e < r; e++, i += 2) {
        let r = th(t.charCodeAt(i)),
          o = th(t.charCodeAt(i + 1));
        if (void 0 === r || void 0 === o)
          throw RangeError(
            'hex string expected, got non-hex character "' +
              (t[i] + t[i + 1]) +
              '" at index ' +
              i
          );
        n[e] = 16 * r + o;
      }
      return n;
    }
    function tc(t) {
      if ("string" != typeof t) throw TypeError("string expected");
      let e = new TextEncoder().encode(t);
      try {
        return new Uint8Array(e);
      } finally {
        to(e);
      }
    }
    function tp(...t) {
      let e = 0;
      for (let r = 0; r < t.length; r++) {
        let n = t[r];
        tt(n), (e += n.length);
      }
      let r = new Uint8Array(e);
      for (let e = 0, n = 0; e < t.length; e++) {
        let i = t[e];
        r.set(i, n), (n += i.length);
      }
      return r;
    }
    function tg(t, e = {}) {
      if ("function" != typeof t)
        throw TypeError('"hashCons" expected function, got type=' + typeof t);
      e = (function (t, e, r = "opts") {
        return (
          tr(t, "defaults"),
          void 0 !== e && tr(e, r),
          Object.assign(Object.create(null), t, e)
        );
      })({}, e, "info");
      let r = (e, r) => t(r).update(e).digest(),
        n = t(void 0);
      return (
        (r.outputLen = n.outputLen),
        (r.blockLen = n.blockLen),
        (r.canXOF = n.canXOF),
        (r.create = (e) => t(e)),
        Object.assign(r, e),
        Object.freeze(r)
      );
    }
    function tb(t = 32) {
      Q(t, "bytesLength");
      let e = "object" == typeof globalThis ? globalThis.crypto : null;
      if ("function" != typeof e?.getRandomValues)
        throw Error("crypto.getRandomValues must be defined");
      if (t > 65536)
        throw RangeError(`"bytesLength" expected <= 65536, got ${t}`);
      return e.getRandomValues(new Uint8Array(t));
    }
    let ty = (t) => ({
      oid: Uint8Array.from([6, 9, 96, 134, 72, 1, 101, 3, 4, 2, t]),
    });
    class tx {
      blockLen;
      outputLen;
      canXOF = !1;
      padOffset;
      isLE;
      buffer;
      view;
      finished = !1;
      length = 0;
      pos = 0;
      destroyed = !1;
      constructor(t, e, r, n) {
        (this.blockLen = t),
          (this.outputLen = e),
          (this.padOffset = r),
          (this.isLE = n),
          (this.buffer = new Uint8Array(t)),
          (this.view = ts(this.buffer));
      }
      update(t) {
        tn(this), tt(t);
        let { view: e, buffer: r, blockLen: n } = this,
          i = t.length,
          o = !1;
        for (let s = 0; s < i; ) {
          let f = Math.min(n - this.pos, i - s);
          if (f === n) {
            let e = ts(t);
            for (; n <= i - s; s += n) this.process(e, s);
            o = !0;
            continue;
          }
          r.set(0 === s && f === i ? t : t.subarray(s, s + f), this.pos),
            (this.pos += f),
            (s += f),
            this.pos === n && (this.process(e, 0), (this.pos = 0), (o = !0));
        }
        return (this.length += t.length), o && this.roundClean(), this;
      }
      digestInto(t) {
        var e, r, n, i;
        let o, s;
        tn(this), ti(t, this), (this.finished = !0);
        let { buffer: f, view: l, blockLen: a, isLE: u } = this,
          { pos: h } = this;
        (f[h++] = 128),
          f.fill(0, h),
          this.padOffset > a - h && (this.process(l, 0), f.fill(0)),
          (e = l),
          (r = a - 8),
          (n = 8 * this.length),
          (i = u),
          (o = (n / 0x100000000) | 0),
          (s = n >>> 0),
          e.setUint32(r, i ? s : o, i),
          e.setUint32(r + 4, i ? o : s, i),
          this.process(l, 0),
          this.roundClean();
        let d = t === f ? l : ts(t),
          c = this.outputLen,
          p = c / 4,
          g = this.get();
        if (c % 4 || p > g.length) throw Error("invalid outputLen");
        for (let t = 0; t < p; t++) d.setUint32(4 * t, g[t], u);
      }
      digest() {
        let { buffer: t, outputLen: e } = this;
        this.digestInto(t);
        let r = t.slice(0, e);
        return this.destroy(), r;
      }
      _cloneIntoMeta(t) {
        let { buffer: e, length: r, finished: n, destroyed: i, pos: o } = this;
        return (
          (t.destroyed = i),
          (t.finished = n),
          (t.length = r),
          (t.pos = o),
          o && t.buffer.set(e),
          t
        );
      }
      clone() {
        return this._cloneInto();
      }
    }
    let tw = Uint32Array.from([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c,
        0x1f83d9ab, 0x5be0cd19,
      ]),
      tE = Uint32Array.from([
        0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511,
        0x64f98fa7, 0xbefa4fa4,
      ]),
      tm = Uint32Array.from([
        0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17,
        0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511,
        0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4,
      ]),
      tv = Uint32Array.from([
        0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b,
        0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f,
        0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179,
      ]),
      tB = Uint32Array.from([
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1,
        0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
        0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
        0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
        0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
        0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
        0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
        0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
      ]),
      tO = new Uint32Array(64);
    class tA extends tx {
      A = 0;
      B = 0;
      C = 0;
      D = 0;
      E = 0;
      F = 0;
      G = 0;
      H = 0;
      constructor(t, e) {
        super(64, t, 8, !1),
          (this.A = 0 | e[0]),
          (this.B = 0 | e[1]),
          (this.C = 0 | e[2]),
          (this.D = 0 | e[3]),
          (this.E = 0 | e[4]),
          (this.F = 0 | e[5]),
          (this.G = 0 | e[6]),
          (this.H = 0 | e[7]);
      }
      get() {
        let { A: t, B: e, C: r, D: n, E: i, F: o, G: s, H: f } = this;
        return [t, e, r, n, i, o, s, f];
      }
      set(t, e, r, n, i, o, s, f) {
        (this.A = 0 | t),
          (this.B = 0 | e),
          (this.C = 0 | r),
          (this.D = 0 | n),
          (this.E = 0 | i),
          (this.F = 0 | o),
          (this.G = 0 | s),
          (this.H = 0 | f);
      }
      _cloneInto(t) {
        return (
          (t ||= new this.constructor()).set(...this.get()),
          this._cloneIntoMeta(t)
        );
      }
      process(t, e) {
        for (let r = 0; r < 16; r++, e += 4) tO[r] = t.getUint32(e, !1);
        for (let t = 16; t < 64; t++) {
          let e = tO[t - 15],
            r = tO[t - 2],
            n = tf(e, 7) ^ tf(e, 18) ^ (e >>> 3),
            i = tf(r, 17) ^ tf(r, 19) ^ (r >>> 10);
          tO[t] = (i + tO[t - 7] + n + tO[t - 16]) | 0;
        }
        let { A: r, B: n, C: i, D: o, E: s, F: f, G: l, H: a } = this;
        for (let t = 0; t < 64; t++) {
          var u, h, d, c;
          let e =
              (a +
                (tf(s, 6) ^ tf(s, 11) ^ tf(s, 25)) +
                (((u = s) & f) ^ (~u & l)) +
                tB[t] +
                tO[t]) |
              0,
            p =
              ((tf(r, 2) ^ tf(r, 13) ^ tf(r, 22)) +
                (((h = r) & (d = n)) ^ (h & (c = i)) ^ (d & c))) |
              0;
          (a = l),
            (l = f),
            (f = s),
            (s = (o + e) | 0),
            (o = i),
            (i = n),
            (n = r),
            (r = (e + p) | 0);
        }
        (r = (r + this.A) | 0),
          (n = (n + this.B) | 0),
          (i = (i + this.C) | 0),
          (o = (o + this.D) | 0),
          (s = (s + this.E) | 0),
          (f = (f + this.F) | 0),
          (l = (l + this.G) | 0),
          (a = (a + this.H) | 0),
          this.set(r, n, i, o, s, f, l, a);
      }
      roundClean() {
        to(tO);
      }
      destroy() {
        (this.destroyed = !0),
          this.set(0, 0, 0, 0, 0, 0, 0, 0),
          to(this.buffer);
      }
    }
    class tR extends tA {
      constructor() {
        super(32, tw);
      }
    }
    let tI = (function (t, e = !1) {
        let r = t.length,
          n = new Uint32Array(r),
          i = new Uint32Array(r);
        for (let o = 0; o < r; o++) {
          let { h: r, l: s } = (function (t, e = !1) {
            return e
              ? { h: Number(t & F), l: Number((t >> _) & F) }
              : { h: 0 | Number((t >> _) & F), l: 0 | Number(t & F) };
          })(t[o], e);
          [n[o], i[o]] = [r, s];
        }
        return [n, i];
      })(
        [
          "0x428a2f98d728ae22",
          "0x7137449123ef65cd",
          "0xb5c0fbcfec4d3b2f",
          "0xe9b5dba58189dbbc",
          "0x3956c25bf348b538",
          "0x59f111f1b605d019",
          "0x923f82a4af194f9b",
          "0xab1c5ed5da6d8118",
          "0xd807aa98a3030242",
          "0x12835b0145706fbe",
          "0x243185be4ee4b28c",
          "0x550c7dc3d5ffb4e2",
          "0x72be5d74f27b896f",
          "0x80deb1fe3b1696b1",
          "0x9bdc06a725c71235",
          "0xc19bf174cf692694",
          "0xe49b69c19ef14ad2",
          "0xefbe4786384f25e3",
          "0x0fc19dc68b8cd5b5",
          "0x240ca1cc77ac9c65",
          "0x2de92c6f592b0275",
          "0x4a7484aa6ea6e483",
          "0x5cb0a9dcbd41fbd4",
          "0x76f988da831153b5",
          "0x983e5152ee66dfab",
          "0xa831c66d2db43210",
          "0xb00327c898fb213f",
          "0xbf597fc7beef0ee4",
          "0xc6e00bf33da88fc2",
          "0xd5a79147930aa725",
          "0x06ca6351e003826f",
          "0x142929670a0e6e70",
          "0x27b70a8546d22ffc",
          "0x2e1b21385c26c926",
          "0x4d2c6dfc5ac42aed",
          "0x53380d139d95b3df",
          "0x650a73548baf63de",
          "0x766a0abb3c77b2a8",
          "0x81c2c92e47edaee6",
          "0x92722c851482353b",
          "0xa2bfe8a14cf10364",
          "0xa81a664bbc423001",
          "0xc24b8b70d0f89791",
          "0xc76c51a30654be30",
          "0xd192e819d6ef5218",
          "0xd69906245565a910",
          "0xf40e35855771202a",
          "0x106aa07032bbd1b8",
          "0x19a4c116b8d2d0c8",
          "0x1e376c085141ab53",
          "0x2748774cdf8eeb99",
          "0x34b0bcb5e19b48a8",
          "0x391c0cb3c5c95a63",
          "0x4ed8aa4ae3418acb",
          "0x5b9cca4f7763e373",
          "0x682e6ff3d6b2b8a3",
          "0x748f82ee5defb2fc",
          "0x78a5636f43172f60",
          "0x84c87814a1f0ab72",
          "0x8cc702081a6439ec",
          "0x90befffa23631e28",
          "0xa4506cebde82bde9",
          "0xbef9a3f7b2c67915",
          "0xc67178f2e372532b",
          "0xca273eceea26619c",
          "0xd186b8c721c0c207",
          "0xeada7dd6cde0eb1e",
          "0xf57d4f7fee6ed178",
          "0x06f067aa72176fba",
          "0x0a637dc5a2c898a6",
          "0x113f9804bef90dae",
          "0x1b710b35131c471b",
          "0x28db77f523047d84",
          "0x32caab7b40c72493",
          "0x3c9ebe0a15c9bebc",
          "0x431d67c49c100d4c",
          "0x4cc5d4becb3e42b6",
          "0x597f299cfc657e2a",
          "0x5fcb6fab3ad6faec",
          "0x6c44198c4a475817",
        ].map((t) => BigInt(t))
      ),
      tT = tI[0],
      tS = tI[1],
      tU = new Uint32Array(80),
      tL = new Uint32Array(80);
    class tN extends tx {
      Ah = 0;
      Al = 0;
      Bh = 0;
      Bl = 0;
      Ch = 0;
      Cl = 0;
      Dh = 0;
      Dl = 0;
      Eh = 0;
      El = 0;
      Fh = 0;
      Fl = 0;
      Gh = 0;
      Gl = 0;
      Hh = 0;
      Hl = 0;
      constructor(t, e) {
        super(128, t, 16, !1),
          (this.Ah = 0 | e[0]),
          (this.Al = 0 | e[1]),
          (this.Bh = 0 | e[2]),
          (this.Bl = 0 | e[3]),
          (this.Ch = 0 | e[4]),
          (this.Cl = 0 | e[5]),
          (this.Dh = 0 | e[6]),
          (this.Dl = 0 | e[7]),
          (this.Eh = 0 | e[8]),
          (this.El = 0 | e[9]),
          (this.Fh = 0 | e[10]),
          (this.Fl = 0 | e[11]),
          (this.Gh = 0 | e[12]),
          (this.Gl = 0 | e[13]),
          (this.Hh = 0 | e[14]),
          (this.Hl = 0 | e[15]);
      }
      get() {
        let {
          Ah: t,
          Al: e,
          Bh: r,
          Bl: n,
          Ch: i,
          Cl: o,
          Dh: s,
          Dl: f,
          Eh: l,
          El: a,
          Fh: u,
          Fl: h,
          Gh: d,
          Gl: c,
          Hh: p,
          Hl: g,
        } = this;
        return [t, e, r, n, i, o, s, f, l, a, u, h, d, c, p, g];
      }
      set(t, e, r, n, i, o, s, f, l, a, u, h, d, c, p, g) {
        (this.Ah = 0 | t),
          (this.Al = 0 | e),
          (this.Bh = 0 | r),
          (this.Bl = 0 | n),
          (this.Ch = 0 | i),
          (this.Cl = 0 | o),
          (this.Dh = 0 | s),
          (this.Dl = 0 | f),
          (this.Eh = 0 | l),
          (this.El = 0 | a),
          (this.Fh = 0 | u),
          (this.Fl = 0 | h),
          (this.Gh = 0 | d),
          (this.Gl = 0 | c),
          (this.Hh = 0 | p),
          (this.Hl = 0 | g);
      }
      _cloneInto(t) {
        return (
          (t ||= new this.constructor()).set(...this.get()),
          this._cloneIntoMeta(t)
        );
      }
      process(t, e) {
        for (let r = 0; r < 16; r++, e += 4)
          (tU[r] = t.getUint32(e)), (tL[r] = t.getUint32((e += 4)));
        for (let t = 16; t < 80; t++) {
          let e = 0 | tU[t - 15],
            r = 0 | tL[t - 15],
            n = $(e, r, 1) ^ $(e, r, 8) ^ H(e, r, 7),
            i = j(e, r, 1) ^ j(e, r, 8) ^ P(e, r, 7),
            o = 0 | tU[t - 2],
            s = 0 | tL[t - 2],
            f = $(o, s, 19) ^ k(o, s, 61) ^ H(o, s, 6),
            l = Y(
              i,
              j(o, s, 19) ^ M(o, s, 61) ^ P(o, s, 6),
              tL[t - 7],
              tL[t - 16]
            ),
            a = G(l, n, f, tU[t - 7], tU[t - 16]);
          (tU[t] = 0 | a), (tL[t] = 0 | l);
        }
        let {
          Ah: r,
          Al: n,
          Bh: i,
          Bl: o,
          Ch: s,
          Cl: f,
          Dh: l,
          Dl: a,
          Eh: u,
          El: h,
          Fh: d,
          Fl: c,
          Gh: p,
          Gl: g,
          Hh: b,
          Hl: y,
        } = this;
        for (let t = 0; t < 80; t++) {
          let e = $(u, h, 14) ^ $(u, h, 18) ^ k(u, h, 41),
            x = j(u, h, 14) ^ j(u, h, 18) ^ M(u, h, 41),
            w = (u & d) ^ (~u & p),
            E = X(y, x, (h & c) ^ (~h & g), tS[t], tL[t]),
            m = W(E, b, e, w, tT[t], tU[t]),
            v = 0 | E,
            B = $(r, n, 28) ^ k(r, n, 34) ^ k(r, n, 39),
            O = j(r, n, 28) ^ M(r, n, 34) ^ M(r, n, 39),
            A = (r & i) ^ (r & s) ^ (i & s),
            R = (n & o) ^ (n & f) ^ (o & f);
          (b = 0 | p),
            (y = 0 | g),
            (p = 0 | d),
            (g = 0 | c),
            (d = 0 | u),
            (c = 0 | h),
            ({ h: u, l: h } = Z(0 | l, 0 | a, 0 | m, 0 | v)),
            (l = 0 | s),
            (a = 0 | f),
            (s = 0 | i),
            (f = 0 | o),
            (i = 0 | r),
            (o = 0 | n);
          let I = V(v, O, R);
          (r = z(I, m, B, A)), (n = 0 | I);
        }
        ({ h: r, l: n } = Z(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
          ({ h: i, l: o } = Z(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | o)),
          ({ h: s, l: f } = Z(0 | this.Ch, 0 | this.Cl, 0 | s, 0 | f)),
          ({ h: l, l: a } = Z(0 | this.Dh, 0 | this.Dl, 0 | l, 0 | a)),
          ({ h: u, l: h } = Z(0 | this.Eh, 0 | this.El, 0 | u, 0 | h)),
          ({ h: d, l: c } = Z(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | c)),
          ({ h: p, l: g } = Z(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | g)),
          ({ h: b, l: y } = Z(0 | this.Hh, 0 | this.Hl, 0 | b, 0 | y)),
          this.set(r, n, i, o, s, f, l, a, u, h, d, c, p, g, b, y);
      }
      roundClean() {
        to(tU, tL);
      }
      destroy() {
        (this.destroyed = !0),
          to(this.buffer),
          this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }
    class tq extends tN {
      constructor() {
        super(64, tv);
      }
    }
    let tC = tg(() => new tR(), ty(1)),
      tD = tg(() => new tq(), ty(3));
    function tF(t, e, r = () => {}) {
      if (!Array.isArray(t))
        throw TypeError(`"${e}" expected array, got type=${typeof t}`);
      for (let n = 0; n < t.length; n++) r(t[n], `${e}[${n}]`);
      return t;
    }
    function t_(t, e = "object") {
      if (null === t || "object" != typeof t || Array.isArray(t))
        throw TypeError(
          "object" === e
            ? "expected valid options object"
            : `"${e}" expected object, got type=${typeof t}`
        );
      return t;
    }
    function tH(t, e) {
      if ("function" != typeof t)
        throw TypeError(
          `"${e}" is invalid: expected function, got ${typeof t}`
        );
      return t;
    }
    let tP = (...t) => tp(...t),
      t$ = (t) => tb(t),
      tj = BigInt(0),
      tk = BigInt(1);
    function tM(t, e = "") {
      if ("boolean" != typeof t)
        throw TypeError(
          (e ? `"${e}" ` : "") + "expected boolean, got type=" + typeof t
        );
      return t;
    }
    function tZ(t, e = "") {
      if ("number" != typeof t)
        throw TypeError(
          (e && `"${e}" `) + "expected number, got type=" + typeof t
        );
      if (!Number.isSafeInteger(t))
        throw RangeError((e && `"${e}" `) + "expected safe integer, got " + t);
    }
    function tV(t) {
      if ("string" != typeof t)
        throw TypeError("hex string expected, got " + typeof t);
      return "" === t ? tj : BigInt("0x" + t);
    }
    function tz(t) {
      return tV(tu(tX(tt(t)).reverse()));
    }
    function tY(t, e) {
      if ((Q(e), 0 === e)) throw Error("zero output length is invalid");
      t = (function (t) {
        if ("bigint" == typeof t) {
          if (!tK(t)) throw RangeError("positive bigint expected, got " + t);
        } else Q(t);
        return t;
      })(t);
      let r = 2 * e,
        n = t.toString(16);
      if (n.length > r) throw RangeError("number is too large");
      return td(n.padStart(r, "0"));
    }
    function tG(t, e) {
      return tY(t, e).reverse();
    }
    function tX(t) {
      return Uint8Array.from(tt(t, void 0, void 0));
    }
    function tW(t) {
      if ("string" != typeof t)
        throw TypeError("ascii string expected, got " + typeof t);
      return Uint8Array.from(t, (e, r) => {
        let n = e.charCodeAt(0);
        if (1 !== e.length || n > 127)
          throw RangeError(
            `string contains non-ASCII character "${t[r]}" with code ${n} at position ${r}`
          );
        return n;
      });
    }
    function tK(t) {
      return "bigint" == typeof t && tj <= t;
    }
    function tJ(t, e, r) {
      return tK(t) && tK(e) && tK(r) && e <= t && t < r;
    }
    function tQ(t, e, r, n) {
      if (!tJ(e, r, n))
        throw RangeError(
          "expected valid " + t + ": " + r + " <= n < " + n + ", got " + e
        );
    }
    function t0(t) {
      if (t < tj) throw Error("expected non-negative bigint, got " + t);
      return t === tj ? 0 : t.toString(2).length;
    }
    function t1(t, e = {}, r = {}, n = "object") {
      t_(t, n), t_(e, "fields"), t_(r, "optFields");
      let i = (e, r) =>
        Object.entries(e).forEach(([e, i]) =>
          (function (e, r, i) {
            let o =
                "object" === n ? `param "${String(e)}"` : `"${n}.${String(e)}"`,
              s = t[e];
            if (!Object.hasOwn(t, e) && (i ? void 0 !== s : "function" !== r))
              throw TypeError(`${o} is invalid: expected own property`);
            if (i && void 0 === s) return;
            let f = typeof s;
            if (f !== r || null === s)
              throw TypeError(`${o} is invalid: expected ${r}, got ${f}`);
          })(e, i, r)
        );
      i(e, !1), i(r, !0);
    }
    let t2 = () => {
        throw Error("not implemented");
      },
      t6 = BigInt(0),
      t8 = BigInt(1),
      t5 = BigInt(2),
      t3 = BigInt(3),
      t4 = BigInt(4),
      t7 = BigInt(5),
      t9 = BigInt(7),
      et = BigInt(8),
      ee = BigInt(9),
      er = BigInt(15),
      en = BigInt(16),
      ei = BigInt("0x10000000000000000");
    function eo(t, e) {
      if (e <= t6) throw Error("mod: expected positive modulus, got " + e);
      let r = t % e;
      return r >= t6 ? r : e + r;
    }
    function es(t, e, r) {
      if (r <= t8) throw Error("pow2: expected modulus > 1, got " + r);
      if (e < t6) throw Error("pow2: expected non-negative exponent, got " + e);
      let n = t;
      for (; e-- > t6; ) (n *= n), (n %= r);
      return n;
    }
    function ef(t, e) {
      if (t === t6) throw Error("invert: expected non-zero number");
      if (e <= t8) throw Error("invert: expected modulus > 1, got " + e);
      let r = eo(t, e),
        n = e,
        i = t6,
        o = t8;
      for (; r !== t6; ) {
        let t = n / r,
          e = n - r * t,
          s = i - o * t;
        (n = r), (r = e), (i = o), (o = s);
      }
      if (n !== t8) throw Error("invert: does not exist");
      return eo(i, e);
    }
    function el(t, e, r) {
      if (!t.eql(t.sqr(e), r)) throw Error("Cannot find square root");
    }
    function ea(t, e) {
      if ((t & t8) === t6) throw Error(e + ": expected odd modulus, got " + t);
    }
    function eu(t, e) {
      let r = (t.ORDER + t8) / t4,
        n = t.pow(e, r);
      return el(t, n, e), n;
    }
    function eh(t, e) {
      let r = (t.ORDER - t7) / et,
        n = t.mul(e, t5),
        i = t.pow(n, r),
        o = t.mul(e, i),
        s = t.mul(t.mul(o, t5), i),
        f = t.mul(o, t.sub(s, t.ONE));
      return el(t, f, e), f;
    }
    function ed(t) {
      if (t < t3) throw Error("sqrt is not defined for small field");
      ea(t, "tonelliShanks");
      let e = t - t8,
        r = 0;
      for (; e % t5 === t6; ) (e /= t5), r++;
      let n = t5,
        i = ew(t);
      for (; 1 === eb(i, n); )
        if (n++ > 1e3)
          throw Error("Cannot find square root: probably non-prime P");
      if (1 === r) return eu;
      let o = i.pow(n, e),
        s = (e + t8) / t5;
      return function (t, n) {
        if (t.is0(n)) return n;
        if (1 !== eb(t, n)) throw Error("Cannot find square root");
        let i = r,
          f = t.mul(t.ONE, o),
          l = t.pow(n, e),
          a = t.pow(n, s);
        for (; !t.eql(l, t.ONE); ) {
          if (t.is0(l))
            throw Error("Cannot find square root: probably non-prime P");
          let e = 1,
            r = t.sqr(l);
          for (; !t.eql(r, t.ONE); )
            if ((e++, (r = t.sqr(r)), e === i))
              throw Error("Cannot find square root");
          let n = t8 << BigInt(i - e - 1),
            o = t.pow(f, n);
          (i = e), (f = t.sqr(o)), (l = t.mul(l, f)), (a = t.mul(a, o));
        }
        return a;
      };
    }
    let ec = [
      "create",
      "isValid",
      "is0",
      "neg",
      "inv",
      "sqrt",
      "sqr",
      "eql",
      "add",
      "sub",
      "mul",
      "pow",
      "div",
      "addN",
      "subN",
      "mulN",
      "sqrN",
    ];
    function ep(t) {
      if ((t_(t, "field"), "bigint" != typeof t.ORDER))
        throw TypeError(
          'param "ORDER" is invalid: expected bigint, got ' + typeof t.ORDER
        );
      for (let e of (tZ(t.BYTES, "BYTES"), tZ(t.BITS, "BITS"), ec))
        tH(t[e], "field." + e);
      if (t.BYTES < 1 || t.BITS < 1)
        throw Error("invalid field: expected BYTES/BITS > 0");
      if (t.ORDER <= t8)
        throw Error("invalid field: expected ORDER > 1, got " + t.ORDER);
      return t;
    }
    function eg(t, e, r = !1) {
      ep(t), tF(e, "nums"), tM(r, "passZero");
      let n = Array(e.length).fill(r ? t.ZERO : void 0),
        i = e.reduce(
          (e, r, i) => (t.is0(r) ? e : ((n[i] = e), t.mul(e, r))),
          t.ONE
        ),
        o = t.inv(i);
      return (
        e.reduceRight(
          (e, r, i) => (t.is0(r) ? e : ((n[i] = t.mul(e, n[i])), t.mul(e, r))),
          o
        ),
        n
      );
    }
    function eb(t, e) {
      ep(t), ea(t.ORDER, "FpLegendre");
      let r = (t.ORDER - t8) / t5,
        n = t.pow(e, r),
        i = t.eql(n, t.ONE),
        o = t.eql(n, t.ZERO),
        s = t.eql(n, t.neg(t.ONE));
      if (!i && !o && !s) throw Error("invalid Legendre symbol result");
      return i ? 1 : o ? 0 : -1;
    }
    let ey = new WeakMap();
    class ex {
      ORDER;
      BITS;
      BYTES;
      isLE;
      ZERO = t6;
      ONE = t8;
      _lengths;
      _mod;
      constructor(t, e = {}) {
        let r;
        if (t <= t8) throw Error("invalid field: expected ORDER > 1, got " + t);
        (this.isLE = !1),
          null != e &&
            "object" == typeof e &&
            ("number" == typeof e.BITS && (r = e.BITS),
            "function" == typeof e.sqrt &&
              Object.defineProperty(this, "sqrt", {
                value: e.sqrt,
                enumerable: !0,
              }),
            "boolean" == typeof e.isLE && (this.isLE = e.isLE),
            e.allowedLengths &&
              (this._lengths = Object.freeze(e.allowedLengths.slice())),
            "boolean" == typeof e.modFromBytes && (this._mod = e.modFromBytes));
        const { nBitLength: n, nByteLength: i } = (function (t, e) {
          if ((void 0 !== e && Q(e), t <= t6))
            throw Error("invalid n length: expected positive n, got " + t);
          if (void 0 !== e && e < 1)
            throw Error(
              "invalid n length: expected positive bit length, got " + e
            );
          let r = t0(t);
          if (void 0 !== e && e < r)
            throw Error(
              `invalid n length: expected nBitLength (${e}) >= bitLen(n) (${r})`
            );
          let n = void 0 !== e ? e : r,
            i = Math.ceil(n / 8);
          return { nBitLength: n, nByteLength: i };
        })(t, r);
        if (i > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        (this.ORDER = t),
          (this.BITS = n),
          (this.BYTES = i),
          Object.freeze(this);
      }
      create(t) {
        return eo(t, this.ORDER);
      }
      isValid(t) {
        if ("bigint" != typeof t)
          throw TypeError(
            "invalid field element: expected bigint, got " + typeof t
          );
        return t6 <= t && t < this.ORDER;
      }
      is0(t) {
        return t === t6;
      }
      isValidNot0(t) {
        return !this.is0(t) && this.isValid(t);
      }
      isOdd(t) {
        return (t & t8) === t8;
      }
      neg(t) {
        return eo(-t, this.ORDER);
      }
      eql(t, e) {
        return t === e;
      }
      sqr(t) {
        return eo(t * t, this.ORDER);
      }
      add(t, e) {
        return eo(t + e, this.ORDER);
      }
      sub(t, e) {
        return eo(t - e, this.ORDER);
      }
      mul(t, e) {
        return eo(t * e, this.ORDER);
      }
      pow(t, e) {
        return (function (t, e, r) {
          if (r <= t8) throw Error("pow: expected modulus > 1, got " + r);
          if ("bigint" != typeof e)
            throw TypeError(
              "invalid exponent: expected bigint, got " + typeof e
            );
          if (e < t6) throw Error("invalid exponent, negatives unsupported");
          if (e === t6) return t8;
          if (e === t8) return t;
          let n = t % r;
          if ((n < t6 && (n += r), e < ei)) {
            let t = t8;
            for (; e > t6; )
              e & t8 && (t = (t * n) % r), (n = (n * n) % r), (e >>= t8);
            return t;
          }
          let i = [];
          for (; e > t6; ) i.push(Number(e & er)), (e >>= t4);
          let o = Array(16);
          (o[0] = t8), (o[1] = n);
          for (let t = 2; t < 16; t++) o[t] = (o[t - 1] * n) % r;
          let s = o[i[i.length - 1]];
          for (let t = i.length - 2; t >= 0; t--) {
            s = ((s = ((s = ((s = (s * s) % r) * s) % r) * s) % r) * s) % r;
            let e = i[t];
            0 !== e && (s = (s * o[e]) % r);
          }
          return s;
        })(t, e, this.ORDER);
      }
      div(t, e) {
        return eo(t * ef(e, this.ORDER), this.ORDER);
      }
      sqrN(t) {
        return t * t;
      }
      addN(t, e) {
        return t + e;
      }
      subN(t, e) {
        return t - e;
      }
      mulN(t, e) {
        return t * e;
      }
      inv(t) {
        return ef(t, this.ORDER);
      }
      sqrt(t) {
        let e = ey.get(this);
        return (
          e ||
            ey.set(
              this,
              (e = (function (t) {
                if ((ea(t, "Fp.sqrt"), t % t4 === t3)) return eu;
                if (t % et === t7) return eh;
                if (t % en === ee) {
                  let e, r, n, i, o, s;
                  return (
                    (e = ew(t)),
                    (n = (r = ed(t))(e, e.neg(e.ONE))),
                    (i = r(e, n)),
                    (o = r(e, e.neg(n))),
                    (s = (t + t9) / en),
                    (t, e) => {
                      let r = t.pow(e, s),
                        f = t.mul(r, n),
                        l = t.mul(r, i),
                        a = t.mul(r, o),
                        u = t.eql(t.sqr(f), e),
                        h = t.eql(t.sqr(l), e);
                      (r = t.cmov(r, f, u)), (f = t.cmov(a, l, h));
                      let d = t.eql(t.sqr(f), e),
                        c = t.cmov(r, f, d);
                      return el(t, c, e), c;
                    }
                  );
                }
                return ed(t);
              })(this.ORDER))
            ),
          e(this, t)
        );
      }
      toBytes(t) {
        return this.isLE ? tG(t, this.BYTES) : tY(t, this.BYTES);
      }
      fromBytes(t, e = !1) {
        tt(t, void 0, void 0);
        let { _lengths: r, BYTES: n, isLE: i, ORDER: o, _mod: s } = this;
        if (r) {
          if (t.length < 1 || !r.includes(t.length) || t.length > n)
            throw Error(
              "Field.fromBytes: expected " + r + " bytes, got " + t.length
            );
          let e = new Uint8Array(n);
          e.set(t, i ? 0 : e.length - t.length), (t = e);
        }
        if (t.length !== n)
          throw Error(
            "Field.fromBytes: expected " + n + " bytes, got " + t.length
          );
        let f = i ? tz(t) : tV(tu(t));
        if ((s && (f = eo(f, o)), !e && !this.isValid(f)))
          throw Error("invalid field element: outside of range 0..ORDER");
        return f;
      }
      invertBatch(t) {
        return eg(this, t, !0);
      }
      cmov(t, e, r) {
        return tM(r, "condition"), r ? e : t;
      }
    }
    function ew(t, e = {}) {
      return Object.freeze(ex.prototype), new ex(t, e);
    }
    let eE = BigInt(0),
      em = BigInt(1),
      ev = BigInt(4);
    function eB(t) {
      if ("function" != typeof t)
        throw TypeError('"Point" expected constructor, got type=' + typeof t);
      tH(t.fromAffine, "Point.fromAffine"),
        tH(t.fromBytes, "Point.fromBytes"),
        tH(t.fromHex, "Point.fromHex"),
        t_(t.BASE, "Point.BASE"),
        t_(t.ZERO, "Point.ZERO"),
        ep(t.Fp),
        ep(t.Fn);
    }
    function eO(t, e) {
      tF(t, "points"),
        t.forEach((t, r) => {
          if (!(t instanceof e)) throw Error("invalid point at index " + r);
        });
    }
    let eA = new WeakMap();
    function eR(t) {
      return eA.get(t) || 1;
    }
    class eI {
      Point;
      BASE;
      ZERO;
      randomBytes;
      wnafPrecomputes = new WeakMap();
      baseCanBeBlinded;
      bits;
      constructor(t, e) {
        eB(t),
          (this.randomBytes = (function (t) {
            if (void 0 !== t) {
              tH(t, "randomBytes");
              try {
                let e = t(16);
                if (!K(e) || 16 !== e.length) return;
              } catch {
                return;
              }
              return t;
            }
          })(e)),
          (this.Point = t),
          (this.BASE = t.BASE),
          (this.ZERO = t.ZERO),
          (this.bits = t.Fn.BITS);
      }
      buildWnafTable(t, e, r) {
        let n = Math.ceil(r / e) + 1,
          i = 2 ** (e - 1),
          o = [],
          s = t;
        for (let t = 0; t < n; t++) {
          let t = s;
          for (let e = 0; e < i; e++) o.push(t), (t = t.add(s));
          s = o[o.length - 1].double();
        }
        return { W: e, bits: r, windows: n, comp: o };
      }
      wnafCachedCT(t, e) {
        let { W: r, windows: n, comp: i } = t,
          o = 2 ** (r - 1),
          s = (function (t, e, r) {
            let n = 2 ** e,
              i = n / 2,
              o = BigInt(n - 1),
              s = BigInt(e),
              f = [];
            for (let e = 0; e < r; e++) {
              let e = Number(t & o);
              (t >>= s), e > i && ((e -= n), (t += em)), f.push(e);
            }
            if (t !== eE) throw Error("invalid wnaf");
            return f;
          })(e, r, n),
          f = this.ZERO,
          l = this.BASE;
        for (let t = 0; t < n; t++) {
          let e = s[t],
            r = t * o,
            n = Math.abs(e) - 1,
            a = i[r];
          for (let t = 1; t < o; t++) a = t === n ? i[r + t] : a;
          let u = a.negate();
          0 === e ? (l = l.add(i[r])) : (f = f.add(e < 0 ? u : a));
        }
        return { p: f, f: l };
      }
      getWnafPrecomputes(t, e, r, n) {
        let i = this.wnafPrecomputes.get(e),
          o = i?.find((e) => e.W === t && e.bits === r);
        return (
          o ||
            ((o = this.buildWnafTable(e, t, r)),
            "function" == typeof n && (o = { ...o, comp: n(o.comp) }),
            i || ((i = []), this.wnafPrecomputes.set(e, i)),
            i.push(o)),
          o
        );
      }
      assertPoint(t) {
        if (!(t instanceof this.Point))
          throw TypeError(
            '"point" expected Point instance, got type=' + typeof t
          );
      }
      validateMulInput(t, e) {
        if ((this.assertPoint(t), !tJ(e, em, this.Point.Fn.ORDER)))
          throw Error("invalid scalar");
      }
      runCT(t, e, r, n) {
        let i = eR(t);
        return 1 === i
          ? this.fixedWindowCT(t, e, r)
          : this.wnafCachedCT(this.getWnafPrecomputes(i, t, r, n), e);
      }
      mulCT(t, e, r) {
        return this.validateMulInput(t, e), this.runCT(t, e, this.bits, r);
      }
      mulCTBlinded(t, e, r) {
        if ((this.validateMulInput(t, e), void 0 === this.randomBytes))
          throw Error("randomBytes is required for scalar blinding");
        let n = this.Point.Fn.BITS + 128,
          i = this.randomBytes(16);
        if (!K(i) || 16 !== i.length)
          throw Error("randomBytes returned invalid byte array");
        i[0] = (63 & i[0]) | 128;
        let o = e + tV(tu(i)) * this.Point.Fn.ORDER;
        return this.runCT(t, o, n, r);
      }
      fixedWindowCT(t, e, r) {
        let n = (tZ(5, "n"), (tk << BigInt(5)) - tk),
          i = Array(32);
        i[0] = this.ZERO;
        for (let e = 1; e < 32; e++) i[e] = i[e - 1].add(t);
        let o = Math.ceil(r / 5),
          s = this.ZERO;
        for (let t = o - 1; t >= 0; t--) {
          if (t !== o - 1) for (let t = 0; t < 5; t++) s = s.double();
          let r = Number((e >> BigInt(5 * t)) & n),
            f = i[0];
          for (let t = 1; t < 32; t++) f = t === r ? i[t] : f;
          s = s.add(f);
        }
        return { p: s, f: s };
      }
      shouldBlind(t, e) {
        return (
          void 0 !== this.randomBytes &&
          (e === em ||
            (t === this.BASE &&
              (void 0 === this.baseCanBeBlinded &&
                (this.baseCanBeBlinded = this.mulUnsafe(
                  this.BASE,
                  this.Point.Fn.ORDER
                ).is0()),
              this.baseCanBeBlinded)))
        );
      }
      mulSecret(t, e, r, n) {
        return this.shouldBlind(t, r)
          ? this.mulCTBlinded(t, e, n)
          : this.mulCT(t, e, n);
      }
      mulUnsafe(t, e, r) {
        if ((this.assertPoint(t), !tK(e))) throw Error("invalid scalar");
        let n = eR(t);
        if (1 === n || e >= this.Point.Fn.ORDER)
          return (function (t, e, r, n = !1) {
            eB(t), eO(e, t), tM(n, "allowOversized");
            var i = t.Fn,
              o = n ? t.Fn.ORDER ** ev : void 0;
            if (!Array.isArray(r)) throw Error("array of scalars expected");
            if (
              (r.forEach((t, e) => {
                if (!(void 0 === o ? i.isValid(t) : tK(t) && t < o))
                  throw Error("invalid scalar at index " + e);
              }),
              e.length !== r.length)
            )
              throw Error(
                "arrays of points and scalars must have equal length"
              );
            let s = e.map((t) =>
                (function (t) {
                  let e = t.double(),
                    r = [t];
                  for (let t = 1; t < 4; t++) r.push(r[t - 1].add(e));
                  return r;
                })(t)
              ),
              f = r.map((t) =>
                (function (t) {
                  let e = 8,
                    r = BigInt(15),
                    n = [];
                  for (; t > eE; ) {
                    let i = 0;
                    t & em &&
                      ((i = Number(t & r)) >= e && (i -= 16), (t -= BigInt(i))),
                      n.push(i),
                      (t >>= em);
                  }
                  return n;
                })(t)
              );
            return (function (t, e, r) {
              let n = 0;
              for (let t of r) n = Math.max(n, t.length);
              let i = t;
              for (let t = n - 1; t >= 0; t--) {
                t !== n - 1 && (i = i.double());
                for (let n = 0; n < r.length; n++) {
                  let o = r[n][t];
                  if (o) {
                    let t = e[n][(Math.abs(o) - 1) >> 1];
                    i = i.add(o < 0 ? t.negate() : t);
                  }
                }
              }
              return i;
            })(t.ZERO, s, f);
          })(this.Point, [t], [e], !0);
        let i = this.getWnafPrecomputes(n, t, this.bits, r);
        return this.wnafCachedCT(i, e).p;
      }
      setWindowSize(t, e) {
        this.assertPoint(t),
          (function (t, e, r = 1) {
            if (!Number.isSafeInteger(t) || t < r || t > e)
              throw Error(
                "invalid window size, expected [" +
                  r +
                  ".." +
                  e +
                  "], got W=" +
                  t
              );
          })(e, this.bits),
          (function (t, e) {
            let r = t * (4 * e + 128);
            if (r > 0x80000000)
              throw Error(
                "invalid window size: table would need ~" +
                  Math.ceil(r / 1048576) +
                  " MiB, max " +
                  2048 +
                  " MiB"
              );
          })(
            (Math.ceil((this.bits + 128) / e) + 1) * 2 ** (e - 1),
            this.Point.Fp.BYTES
          ),
          eA.set(t, e),
          this.wnafPrecomputes.delete(t);
      }
      hasWindowSize(t) {
        return 1 !== eR(t);
      }
    }
    function eT(t, e, r) {
      if (!e) return ew(t, { isLE: r });
      if (e.ORDER !== t)
        throw Error("Field.ORDER must match order: Fp == p, Fn == n");
      return ep(e), e;
    }
    let eS = BigInt(0),
      eU = BigInt(1),
      eL = BigInt(2),
      eN = BigInt(4),
      eq = BigInt(8);
    class eC {
      static BASE;
      static ZERO;
      static Fp;
      static Fn;
      ep;
      constructor(t) {
        this.ep = t;
      }
      static fromBytes(t) {
        t2();
      }
      static fromHex(t) {
        t2();
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      clearCofactor() {
        return this;
      }
      assertValidity() {
        this.ep.assertValidity();
      }
      toAffine(t) {
        return this.ep.toAffine(t);
      }
      toHex() {
        return tu(this.toBytes());
      }
      toString() {
        return this.toHex();
      }
      isTorsionFree() {
        return !0;
      }
      isSmallOrder() {
        return !1;
      }
      add(t) {
        return this.assertSame(t), this.init(this.ep.add(t.ep));
      }
      subtract(t) {
        return this.assertSame(t), this.init(this.ep.subtract(t.ep));
      }
      multiply(t) {
        return this.init(this.ep.multiply(t));
      }
      multiplyUnsafe(t) {
        return this.init(this.ep.multiplyUnsafe(t));
      }
      double() {
        return this.init(this.ep.double());
      }
      negate() {
        return this.init(this.ep.negate());
      }
      precompute(t, e) {
        return this.ep.precompute(t, e), this;
      }
    }
    function eD(t, e) {
      if ((tZ(t), tZ(e), e < 0 || e > 4))
        throw Error("invalid I2OSP length: " + e);
      if (t < 0 || t > 2 ** (8 * e) - 1)
        throw Error("invalid I2OSP input: " + t);
      let r = Array.from({ length: e }).fill(0);
      for (let n = e - 1; n >= 0; n--) (r[n] = 255 & t), (t >>>= 8);
      return new Uint8Array(r);
    }
    function eF(t) {
      if (!K(t) && "string" != typeof t)
        throw Error("DST must be Uint8Array or ascii string");
      let e = "string" == typeof t ? tW(t) : t;
      if (0 === e.length) throw Error("DST must be non-empty");
      return e;
    }
    function e_(t, e, r, n) {
      if ((tt(t, void 0, void 0), tZ(r), "function" != typeof n))
        throw Error("expand_message_xmd: expected hash function");
      tZ(n.outputLen, "hash.outputLen"),
        tZ(n.blockLen, "hash.blockLen"),
        (e = eF(e)).length > 255 && (e = n(tP(tW("H2C-OVERSIZE-DST-"), e)));
      let { outputLen: i, blockLen: o } = n,
        s = Math.ceil(r / i);
      if (r > 65535 || s > 255)
        throw Error("expand_message_xmd: invalid lenInBytes");
      let f = tP(e, eD(e.length, 1)),
        l = new Uint8Array(o),
        a = eD(r, 2),
        u = Array(s),
        h = n(tP(l, t, a, eD(0, 1), f));
      u[0] = n(tP(h, eD(1, 1), f));
      for (let t = 1; t < s; t++) {
        let e = [
          (function (t, e) {
            let r = new Uint8Array(t.length);
            for (let n = 0; n < t.length; n++) r[n] = t[n] ^ e[n];
            return r;
          })(h, u[t - 1]),
          eD(t + 1, 1),
          f,
        ];
        u[t] = n(tP(...e));
      }
      return tP(...u).slice(0, r);
    }
    let eH = "HashToScalar-",
      eP = BigInt(0),
      e$ = BigInt(1),
      ej = BigInt(2),
      ek = BigInt(0),
      eM = BigInt(1),
      eZ = BigInt(2),
      eV = BigInt(3),
      ez = BigInt(5),
      eY = BigInt(8),
      eG = BigInt(
        "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
      ),
      eX = {
        p: eG,
        n: BigInt(
          "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
        ),
        h: eY,
        a: BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
        ),
        d: BigInt(
          "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
        ),
        Gx: BigInt(
          "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
        ),
        Gy: BigInt(
          "0x6666666666666666666666666666666666666666666666666666666666666658"
        ),
      };
    function eW(t) {
      let e = BigInt(10),
        r = BigInt(20),
        n = BigInt(40),
        i = BigInt(80),
        o = (((t * t) % eG) * t) % eG,
        s = (es(o, eZ, eG) * o) % eG,
        f = (es(s, eM, eG) * t) % eG,
        l = (es(f, ez, eG) * f) % eG,
        a = (es(l, e, eG) * l) % eG,
        u = (es(a, r, eG) * a) % eG,
        h = (es(u, n, eG) * u) % eG,
        d = (es(h, i, eG) * h) % eG,
        c = (es(d, i, eG) * h) % eG,
        p = (es(c, e, eG) * l) % eG;
      return { pow_p_5_8: (es(p, eZ, eG) * t) % eG, b2: o };
    }
    function eK(t) {
      return (t[0] &= 248), (t[31] &= 127), (t[31] |= 64), t;
    }
    let eJ = BigInt(
      "19681161376707505956807079304988542015446066515923890162744021073123829784752"
    );
    function eQ(t, e) {
      let r = eo(e * e * e, eG),
        n = eW(t * eo(r * r * e, eG)).pow_p_5_8,
        i = eo(t * r * n, eG),
        o = eo(e * i * i, eG),
        s = i,
        f = eo(i * eJ, eG),
        l = o === t,
        a = o === eo(-t, eG),
        u = o === eo(-t * eJ, eG);
      return (
        l && (i = s),
        (a || u) && (i = f),
        (eo(i, eG) & t8) === t8 && (i = eo(-i, eG)),
        { isValid: l || a, value: i }
      );
    }
    let e0 = (function (t, e = {}) {
        var r, n;
        let i, o, s, f;
        t1(e, {}, {}, "extraOpts");
        let l = (function (t, e, r = {}, n) {
            if ("weierstrass" !== t && "edwards" !== t)
              throw Error('expected curve type "weierstrass" or "edwards"');
            if (
              (void 0 === n && (n = "edwards" === t),
              !e || "object" != typeof e)
            )
              throw Error(`expected valid ${t} CURVE object`);
            for (let t of (t1(r), ["p", "n", "h"])) {
              let r = e[t];
              if (!(tK(r) && r !== eE))
                throw Error(`CURVE.${t} must be positive bigint`);
            }
            let i = eT(e.p, r.Fp, n),
              o = eT(e.n, r.Fn, n);
            for (let r of ["Gx", "Gy", "a", "weierstrass" === t ? "b" : "d"])
              if (!i.isValid(e[r]))
                throw Error(
                  `CURVE.${r} must be valid field element of CURVE.Fp`
                );
            return {
              CURVE: (e = Object.freeze(Object.assign({}, e))),
              Fp: i,
              Fn: o,
            };
          })("edwards", t, e, e.FpFnLE),
          { Fp: a, Fn: u } = l,
          h = l.CURVE,
          { h: d } = h;
        if (1 !== eb(a, h.a))
          throw Error(
            "edwards: CURVE.a must be a square in Fp for complete addition formulas"
          );
        if (-1 !== eb(a, h.d))
          throw Error(
            "edwards: CURVE.d must be a non-square in Fp for complete addition formulas"
          );
        t1(e, {}, { uvRatio: "function", randomBytes: "function" });
        let c = void 0 === e.randomBytes ? t$ : e.randomBytes,
          p = eL << (BigInt(8 * a.BYTES) - eU);
        function g(t) {
          if (!a.isOdd) throw Error("Field does not have .isOdd()");
          return a.isOdd(t);
        }
        let b =
          void 0 === e.uvRatio
            ? (t, e) => {
                try {
                  return { isValid: !0, value: a.sqrt(a.div(t, e)) };
                } catch (t) {
                  return { isValid: !1, value: eS };
                }
              }
            : e.uvRatio;
        if (
          ((r = h.Gx),
          (n = h.Gy),
          (i = a.sqr(r)),
          (o = a.sqr(n)),
          (s = a.add(a.mul(h.a, i), o)),
          (f = a.add(a.ONE, a.mul(h.d, a.mul(i, o)))),
          !a.eql(s, f))
        )
          throw Error("bad curve params: generator point");
        let y = a.eql(h.a, a.neg(a.ONE))
          ? (t) => a.neg(t)
          : a.eql(h.a, a.ONE)
          ? (t) => t
          : (t) => a.mul(h.a, t);
        function x(t, e, r = !1) {
          return tQ("coordinate " + t, e, r ? eU : eS, p), e;
        }
        function w(t) {
          if (!(t instanceof E)) throw Error("EdwardsPoint expected");
        }
        class E {
          static BASE = new E(h.Gx, h.Gy, a.ONE, a.mul(h.Gx, h.Gy));
          static ZERO = new E(a.ZERO, a.ONE, a.ONE, a.ZERO);
          static Fp = a;
          static Fn = u;
          X;
          Y;
          Z;
          T;
          constructor(t, e, r, n) {
            (this.X = x("x", t)),
              (this.Y = x("y", e)),
              (this.Z = x("z", r, !0)),
              (this.T = x("t", n)),
              Object.freeze(this);
          }
          static CURVE() {
            return h;
          }
          static fromAffine(t) {
            if (t instanceof E) throw Error("extended point not allowed");
            let { x: e, y: r } = t || {};
            return x("x", e), x("y", r), new E(e, r, a.ONE, a.mul(e, r));
          }
          static fromBytes(t, e = !1) {
            let r = a.BYTES,
              { a: n, d: i } = h;
            (t = tX(tt(t, r, "point"))), tM(e, "zip215");
            let o = tX(t),
              s = t[r - 1];
            o[r - 1] = -129 & s;
            let f = tz(o);
            tQ("point.y", f, eS, e ? p : a.ORDER);
            let l = a.sqr(f),
              { isValid: u, value: d } = b(
                a.sub(l, a.ONE),
                a.sub(a.mulN(i, l), n)
              );
            if (!u) throw Error("bad point: invalid y coordinate");
            let c = g(d),
              y = (128 & s) != 0;
            if (!e && a.is0(d) && y) throw Error("bad point: x=0 and x_0=1");
            return y !== c && (d = a.neg(d)), E.fromAffine({ x: d, y: f });
          }
          static fromHex(t, e = !1) {
            return E.fromBytes(td(t), e);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          precompute(t = 6, e = !0) {
            return v.setWindowSize(this, t), e || this.multiply(eL), this;
          }
          assertValidity() {
            let { a: t, d: e } = h;
            if (this.is0()) throw Error("bad point: ZERO");
            let { X: r, Y: n, Z: i, T: o } = this,
              s = a.sqr(r),
              f = a.sqr(n),
              l = a.sqr(i),
              u = a.sqr(l),
              d = a.mul(s, t),
              c = a.mul(a.add(d, f), l),
              p = a.add(u, a.mul(e, a.mul(s, f)));
            if (!a.eql(c, p))
              throw Error("bad point: equation left != right (1)");
            let g = a.mul(r, n),
              b = a.mul(i, o);
            if (!a.eql(g, b))
              throw Error("bad point: equation left != right (2)");
          }
          equals(t) {
            w(t);
            let { X: e, Y: r, Z: n } = this,
              { X: i, Y: o, Z: s } = t,
              f = a.mul(e, s),
              l = a.mul(i, n),
              u = a.mul(r, s),
              h = a.mul(o, n);
            return a.eql(f, l) && a.eql(u, h);
          }
          is0() {
            return this.equals(E.ZERO);
          }
          negate() {
            return new E(a.neg(this.X), this.Y, this.Z, a.neg(this.T));
          }
          double() {
            let { X: t, Y: e, Z: r } = this,
              n = a.sqr(t),
              i = a.sqr(e),
              o = a.mul(a.sqr(r), eL),
              s = y(n),
              f = a.addN(t, e),
              l = a.sub(a.subN(a.sqr(f), n), i),
              u = a.addN(s, i),
              h = a.subN(u, o),
              d = a.subN(s, i),
              c = a.mul(l, h),
              p = a.mul(u, d),
              g = a.mul(l, d);
            return new E(c, p, a.mul(h, u), g);
          }
          add(t) {
            w(t);
            let { d: e } = h,
              { X: r, Y: n, Z: i, T: o } = this,
              { X: s, Y: f, Z: l, T: u } = t,
              d = a.mul(r, s),
              c = a.mul(n, f),
              p = a.mul(a.mulN(o, e), u),
              g = a.mul(i, l),
              b = a.sub(a.subN(a.mulN(a.addN(r, n), a.addN(s, f)), d), c),
              x = a.subN(g, p),
              m = a.addN(g, p),
              v = a.sub(c, y(d)),
              B = a.mul(b, x),
              O = a.mul(m, v),
              A = a.mul(b, v);
            return new E(B, O, a.mul(x, m), A);
          }
          subtract(t) {
            return w(t), this.add(t.negate());
          }
          multiply(t) {
            if (!u.isValidNot0(t))
              throw RangeError("invalid scalar: expected 1 <= sc < curve.n");
            let { p: e, f: r } = v.mulSecret(this, t, d, m);
            return m([e, r])[0];
          }
          multiplyUnsafe(t) {
            if (!u.isValid(t))
              throw RangeError("invalid scalar: expected 0 <= sc < curve.n");
            return t === eS
              ? E.ZERO
              : this.is0() || t === eU
              ? this
              : v.mulUnsafe(this, t, m);
          }
          isSmallOrder() {
            return this.clearCofactor().is0();
          }
          isTorsionFree() {
            return v.mulUnsafe(this, h.n).is0();
          }
          toAffine(t) {
            let e = t;
            if (null != e && "bigint" != typeof e)
              throw TypeError(
                '"invertedZ" expected bigint, got type=' + typeof e
              );
            let { X: r, Y: n, Z: i } = this,
              o = this.is0();
            null == e && (e = o ? a.create(eq) : a.inv(i));
            let s = a.mul(r, e),
              f = a.mul(n, e),
              l = a.mul(i, e);
            if (o) return { x: a.ZERO, y: a.ONE };
            if (!a.eql(l, a.ONE)) throw Error("invZ was invalid");
            return { x: s, y: f };
          }
          clearCofactor() {
            return d === eU
              ? this
              : d === eL
              ? this.double()
              : d === eN
              ? this.double().double()
              : d === eq
              ? this.double().double().double()
              : this.multiplyUnsafe(d);
          }
          toBytes() {
            let { x: t, y: e } = this.toAffine(),
              r = a.toBytes(e);
            return (r[r.length - 1] |= 128 * !!g(t)), r;
          }
          toHex() {
            return tu(this.toBytes());
          }
          toString() {
            return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
          }
        }
        let m = (t) => {
            let e;
            return (
              eB(E),
              eO(t, E),
              (e = eg(
                E.Fp,
                t.map((t) => t.Z)
              )),
              t.map((t, r) => E.fromAffine(t.toAffine(e[r])))
            );
          },
          v = new eI(E, c);
        return (
          v.bits >= 6 && E.BASE.precompute(6),
          Object.freeze(E.prototype),
          Object.freeze(E),
          E
        );
      })(eX, { uvRatio: eQ }),
      e1 = e0.Fp,
      e2 = e0.Fn,
      e6 =
        ((i = (t) => {
          let { pow_p_5_8: e, b2: r } = eW(t);
          return eo(es(e, eV, eG) * r, eG);
        }),
        (function (t) {
          var e, r;
          let n,
            i =
              (t1(
                t,
                {
                  P: "bigint",
                  type: "string",
                  adjustScalarBytes: "function",
                  powPminus2: "function",
                },
                { randomBytes: "function", scalarMultBase: "function" }
              ),
              Object.freeze({ ...t })),
            {
              P: o,
              type: s,
              adjustScalarBytes: f,
              powPminus2: l,
              randomBytes: a,
            } = i,
            u = i.scalarMultBase,
            h = "x25519" === s;
          if (!h && "x448" !== s) throw Error("invalid type");
          let d = void 0 === a ? t$ : a,
            c = h ? 255 : 448,
            p =
              ((n = BigInt(6) * o),
              (t, e, r) => {
                let i = ((n + r - e) * t + e) % o;
                return { x_2: i, x_3: e + r - i };
              }),
            g = h ? 32 : 56,
            b = h ? BigInt(9) : BigInt(5),
            y = h ? BigInt(121665) : BigInt(39081),
            x = h ? ej ** BigInt(254) : ej ** BigInt(447),
            w =
              x +
              (h
                ? BigInt(8) * (ej ** BigInt(251) - e$)
                : BigInt(4) * (ej ** BigInt(445) - e$)) +
              e$,
            E = (t) => eo(t, o),
            m = v(b);
          function v(t) {
            return tG(E(t), g);
          }
          function B(t) {
            return tz(f(tX(tt(t, g, "scalar"))));
          }
          let O = new Set(
            h
              ? [
                  eP,
                  e$,
                  o - e$,
                  BigInt(
                    "325606250916557431795983626356110631294008115727848805560023387167927233504"
                  ),
                  BigInt(
                    "39382357235489614581723060781553021112529911719440698176882885853963445705823"
                  ),
                ]
              : [eP, e$, o - e$]
          );
          function A(t, e) {
            let r,
              n =
                ((r = tX(tt(e, g, "uCoordinate"))),
                h && (r[31] &= 127),
                E(tz(r)));
            if (O.has(n)) throw Error("invalid private or public key received");
            let i = (function (t, e) {
              var r;
              tQ("u", t, eP, o), tQ("scalar", e, x, w);
              let n = e$,
                i = eP,
                s = t,
                f = e$,
                a = e ^ (e >> e$);
              for (let e = BigInt(c - 1); e >= eP; e--) {
                let l = o + (r = a >> e) - ((r >> e$) << e$);
                ({ x_2: n, x_3: s } = p(l, n, s)),
                  ({ x_2: i, x_3: f } = p(l, i, f));
                let u = n + i,
                  h = E(u * u),
                  d = n - i,
                  c = E(d * d),
                  g = h - c,
                  b = s + f,
                  x = E((s - f) * u),
                  w = E(b * d),
                  m = x + w,
                  v = x - w;
                (s = E(m * m)),
                  (f = E(t * E(v * v))),
                  (n = E(h * c)),
                  (i = E(g * (h + E(y * g))));
              }
              let u = o + e - ((e >> e$) << e$);
              return (
                ({ x_2: n, x_3: s } = p(u, n, s)),
                ({ x_2: i, x_3: f } = p(u, i, f)),
                E(n * l(i))
              );
            })(n, B(t));
            if (i === eP) throw Error("invalid private or public key received");
            return v(i);
          }
          function R(t) {
            if (void 0 === u) return A(t, m);
            let e = B(t);
            tQ("scalar", e, x, w);
            let r = E(u(e));
            if (r === eP) throw Error("invalid private or public key received");
            return v(r);
          }
          let I = { secretKey: g, publicKey: g, seed: g },
            T = (t) => {
              let e;
              return (
                (e = t = void 0 === t ? d(g) : t), tt(e, I.seed, "seed"), t
              );
            },
            S = { randomSecretKey: T };
          return (
            Object.freeze(I),
            Object.freeze(S),
            Object.freeze({
              keygen:
                ((e = T),
                (r = R),
                function (t) {
                  let n = e(t);
                  return { secretKey: n, publicKey: r(n) };
                }),
              getSharedSecret: A,
              getPublicKey: R,
              scalarMult: A,
              scalarMultBase: R,
              utils: S,
              GuBytes: m.slice(),
              lengths: I,
            })
          );
        })({
          P: eG,
          type: "x25519",
          powPminus2: i,
          adjustScalarBytes: eK,
          scalarMultBase: (t) => {
            let e = eo(t, e0.Fn.ORDER);
            if (e === ek) return ek;
            let r = e0.BASE.multiply(e);
            return eo((r.Z + r.Y) * i(eo(r.Z - r.Y, eG)), eG);
          },
        })),
      e8 = (eG + eV) / eY,
      e5 =
        (e1.pow(eZ, e8),
        e1.sqrt(e1.neg(e1.ONE)),
        (function (t, e) {
          if ((ep(t), !t.isOdd)) throw Error("Field doesn't have isOdd");
          let r = t.sqrt(e);
          t.isOdd(r) && t.neg(r);
        })(e1, e1.neg(BigInt(486664))),
        BigInt(
          "25063068953384623474111414158702152701244531502492656460079210482610430750235"
        )),
      e3 = BigInt(
        "54469307008909316920995813868745141605393597292927456921205312896311721017578"
      ),
      e4 = BigInt(
        "1159843021668779879193775521855586647937357759715417654439879720876111806838"
      ),
      e7 = BigInt(
        "40440834346308536858101042469323190826248399146238708352240133220865137265952"
      ),
      e9 = BigInt(
        "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      ),
      rt = (t) => e1.create(tz(t) & e9);
    function re(t) {
      let { d: e } = eX,
        r = e1.mul(e1.mulN(eJ, t), t),
        n = e1.mul(e1.addN(r, eM), e4),
        i = BigInt(-1),
        o = e1.mul(e1.subN(i, e1.mulN(e, r)), e1.add(r, e)),
        { isValid: s, value: f } = eQ(n, o),
        l = e1.mul(f, t);
      e1.isOdd(l) || (l = e1.neg(l)), s || (f = l), s || (i = r);
      let a = e1.sub(e1.mulN(e1.mulN(i, e1.subN(r, eM)), e7), o),
        u = e1.sqrN(f),
        h = e1.mul(e1.addN(f, f), o),
        d = e1.mul(a, e5),
        c = e1.sub(eM, u),
        p = e1.add(eM, u);
      return new e0(e1.mul(h, p), e1.mul(c, d), e1.mul(d, p), e1.mul(h, c));
    }
    class rr extends eC {
      static BASE = new rr(e0.BASE);
      static ZERO = new rr(e0.ZERO);
      static Fp = e1;
      static Fn = e2;
      constructor(t) {
        super(t);
      }
      static fromAffine(t) {
        return new rr(e0.fromAffine(t));
      }
      assertSame(t) {
        if (!(t instanceof rr)) throw Error("RistrettoPoint expected");
      }
      init(t) {
        return new rr(t);
      }
      static fromBytes(t) {
        tt(t, 32);
        let { a: e, d: r } = eX,
          n = rt(t);
        if (
          !(function (t, e) {
            if (
              ((t = tt(t, void 0, void 0)),
              (e = tt(e, void 0, void 0)),
              t.length !== e.length)
            )
              return !1;
            let r = 0;
            for (let n = 0; n < t.length; n++) r |= t[n] ^ e[n];
            return 0 === r;
          })(e1.toBytes(n), t) ||
          e1.isOdd(n)
        )
          throw Error("invalid ristretto255 encoding 1");
        let i = e1.sqr(n),
          o = e1.add(eM, e1.mulN(e, i)),
          s = e1.sub(eM, e1.mulN(e, i)),
          f = e1.sqr(o),
          l = e1.sqr(s),
          a = e1.sub(e1.mulN(e1.mulN(e, r), f), l),
          { isValid: u, value: h } = eQ(eM, e1.mul(a, l)),
          d = e1.mul(h, s),
          c = e1.mul(e1.mulN(h, d), a),
          p = e1.mul(e1.addN(n, n), d);
        e1.isOdd(p) && (p = e1.neg(p));
        let g = e1.mul(o, c),
          b = e1.mul(p, g);
        if (!u || e1.isOdd(b) || e1.is0(g))
          throw Error("invalid ristretto255 encoding 2");
        return new rr(new e0(p, g, e1.ONE, b));
      }
      static fromHex(t) {
        return rr.fromBytes(td(t));
      }
      toBytes() {
        let t,
          { X: e, Y: r, Z: n, T: i } = this.ep,
          o = e1.mul(e1.add(n, r), e1.sub(n, r)),
          s = e1.mul(e, r),
          f = e1.sqr(s),
          { value: l } = eQ(eM, e1.mul(o, f)),
          a = e1.mul(l, o),
          u = e1.mul(l, s),
          h = e1.mul(e1.mulN(a, u), i);
        if (e1.isOdd(e1.mul(i, h))) {
          let n = e1.mul(r, eJ),
            i = e1.mul(e, eJ);
          (e = n), (r = i), (t = e1.mul(a, e3));
        } else t = u;
        e1.isOdd(e1.mul(e, h)) && (r = e1.neg(r));
        let d = e1.mul(e1.subN(n, r), t);
        return e1.isOdd(d) && (d = e1.neg(d)), e1.toBytes(d);
      }
      equals(t) {
        this.assertSame(t);
        let { X: e, Y: r } = this.ep,
          { X: n, Y: i } = t.ep,
          o = e1.eql(e1.mul(e, i), e1.mul(r, n)),
          s = e1.eql(e1.mul(r, i), e1.mul(e, n));
        return o || s;
      }
      is0() {
        return this.equals(rr.ZERO);
      }
    }
    let rn = Object.freeze({
      Point: rr,
      hashToCurve(t, e) {
        let r = e_(
          t,
          e?.DST === void 0 ? "ristretto255_XMD:SHA-512_R255MAP_RO_" : e.DST,
          64,
          tD
        );
        return rn.deriveToCurve(r);
      },
      hashToScalar(t, e) {
        let r = e_(t, e?.DST === void 0 ? eH : e.DST, 64, tD);
        return e2.create(tz(r));
      },
      deriveToCurve(t) {
        tt(t, 64);
        let e = re(rt(t.subarray(0, 32))),
          r = re(rt(t.subarray(32, 64)));
        return new rr(e.add(r));
      },
    });
    class ri {
      oHash;
      iHash;
      blockLen;
      outputLen;
      canXOF = !1;
      finished = !1;
      destroyed = !1;
      constructor(t, e) {
        if (
          (te(t),
          tt(e, void 0, "key"),
          (this.iHash = t.create()),
          "function" != typeof this.iHash.update)
        )
          throw Error("expected Hash instance");
        (this.blockLen = this.iHash.blockLen),
          (this.outputLen = this.iHash.outputLen);
        const r = this.blockLen,
          n = new Uint8Array(r);
        n.set(e.length > r ? t.create().update(e).digest() : e);
        for (let t = 0; t < n.length; t++) n[t] ^= 54;
        this.iHash.update(n), (this.oHash = t.create());
        for (let t = 0; t < n.length; t++) n[t] ^= 106;
        this.oHash.update(n), to(n);
      }
      update(t) {
        return tn(this), this.iHash.update(t), this;
      }
      digestInto(t) {
        tn(this), ti(t, this), (this.finished = !0);
        let e = t.subarray(0, this.outputLen);
        this.iHash.digestInto(e),
          this.oHash.update(e),
          this.oHash.digestInto(e),
          this.destroy();
      }
      digest() {
        let t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t;
      }
      _cloneInto(t) {
        t ||= Object.create(Object.getPrototypeOf(this), {});
        let {
          oHash: e,
          iHash: r,
          finished: n,
          destroyed: i,
          blockLen: o,
          outputLen: s,
          canXOF: f,
        } = this;
        return (
          (t.finished = n),
          (t.destroyed = i),
          (t.blockLen = o),
          (t.outputLen = s),
          (t.canXOF = f),
          (t.oHash = e._cloneInto(t.oHash)),
          (t.iHash = r._cloneInto(t.iHash)),
          t
        );
      }
      clone() {
        return this._cloneInto();
      }
      destroy() {
        (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
      }
    }
    let ro =
        (((o = (t, e, r) => new ri(t, e).update(r).digest()).create = (t, e) =>
          new ri(t, e)),
        o),
      rs = Uint8Array.of(0),
      rf = Uint8Array.of();
    var rl,
      ra = t.i(23838),
      ru = t.i(75107),
      rh = t.i(11493);
    class rd extends Error {
      reason;
      constructor(t, e) {
        super(e), (this.name = "SealError"), (this.reason = t);
      }
    }
    let rc = () => new rd("malformed", "This isn't an Inferno envelope.");
    function rp(t) {
      let e = "";
      for (let r of t) e += String.fromCharCode(r);
      return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
    function rg(t) {
      return Uint8Array.from(
        atob(t.replace(/-/g, "+").replace(/_/g, "/")),
        (t) => t.charCodeAt(0)
      );
    }
    function rb(t, e, r, n) {
      var i, o, s;
      let f;
      return (
        (i = e6.getSharedSecret(t, e)),
        (o = tp(r, n)),
        (s = tc("inferno/seal/v1")),
        te(tC),
        void 0 === o && (o = new Uint8Array(tC.outputLen)),
        (f = ro.create(tC, o).update(i)),
        (function (t, e, r, n = 32, i) {
          te(t), Q(n, "length"), tt(e, void 0, "prk");
          let o = t.outputLen;
          if (e.length < o)
            throw Error('"prk" must be at least HashLen octets');
          if (n > 255 * o) throw Error("Length must be <= 255*HashLen");
          let s = Math.ceil(n / o);
          if ((void 0 === r ? (r = rf) : tt(r, void 0, "info"), !s))
            return i && to(e), new Uint8Array();
          let f = i && 1 === s ? e : new Uint8Array(s * o),
            { iHash: l, oHash: a } = ro.create(t, e),
            u = i ? e : new Uint8Array(o),
            h = s > 1 ? i?.iHash || t.create() : void 0;
          for (let t = 0; t < s - 1; t++) {
            rs[0] = t + 1;
            let e = l._cloneInto(h);
            t && e.update(u),
              e.update(r).update(rs).digestInto(u),
              a._cloneInto(h).update(u).digestInto(u),
              f.set(u, o * t);
          }
          if (
            ((rs[0] = s),
            s > 1 && l.update(u),
            l.update(r).update(rs).digestInto(u),
            a.update(u).digestInto(u),
            f.set(u, o * (s - 1)),
            l.destroy(),
            a.destroy(),
            h?.destroy(),
            u !== f && to(u),
            to(rs),
            n === f.length)
          )
            return f;
          let d = f.slice(0, n);
          return to(f), d;
        })(tC, f.digest(), s, 32, f)
      );
    }
    function ry(t, e, r) {
      let n = new Uint8Array(8);
      return (
        new DataView(n.buffer).setBigUint64(0, BigInt(r)),
        tp(tc("inferno/v1"), t, e, n)
      );
    }
    function rx(t, e, r) {
      return `Inferno messaging key v1
Signing links this messaging key to your wallet. It costs nothing and can't move funds.
Address: ${(0, ra.getAddress)(t)}
Key: ${e}
Chain: ${r}`;
    }
    async function rw(t) {
      try {
        return await (0, rh.verifyMessage)({
          address: t.address,
          message: rx(t.address, t.key, t.chainId),
          signature: t.signature,
        });
      } catch {
        return !1;
      }
    }
    async function rE(t, e, r, n) {
      let i = rx(e, r, n),
        o = await t.request({
          method: "personal_sign",
          params: [(0, ru.toHex)(i), e],
        }),
        s = { address: e, key: r, chainId: n, signature: o };
      return (await rw(s)) ? s : null;
    }
    t.s(
      [
        "SealError",
        0,
        rd,
        "fromB64u",
        0,
        rg,
        "newIdentity",
        0,
        function () {
          let { secretKey: t, publicKey: e } = e6.keygen();
          return { pub: rp(e), secret: t };
        },
        "open",
        0,
        function (t, e) {
          let r, n;
          if (e.pub !== t.to && e.pub !== t.from)
            throw new rd(
              "not-for-you",
              "This note was sealed for someone else."
            );
          try {
            r = [t.from, t.to, t.nonce, t.ct].map(rg);
          } catch {
            throw rc();
          }
          let [i, o, s, f] = r;
          if (
            !(
              1 === t.v &&
              Number.isSafeInteger(t.ts) &&
              t.ts >= 0 &&
              32 === i.length &&
              32 === o.length &&
              24 === s.length &&
              f.length >= 272 &&
              (f.length - 16) % 256 == 0
            )
          )
            throw rc();
          try {
            n = D(
              rb(e.secret, e.pub === t.from ? o : i, i, o),
              s,
              ry(i, o, t.ts)
            ).decrypt(f);
          } catch {
            throw new rd(
              "tampered",
              "This note was changed after it was sealed, so it won't open."
            );
          }
          let l = new DataView(n.buffer, n.byteOffset).getUint32(0);
          if (l > n.length - 4) throw rc();
          return new TextDecoder().decode(n.subarray(4, 4 + l));
        },
        "safetyNumber",
        0,
        function (t, e) {
          let [r, n] = [rg(t), rg(e)],
            [i, o] = tu(r) < tu(n) ? [r, n] : [n, r],
            s = tC(tp(tc("inferno/safety/v1"), i, o));
          return (BigInt(`0x${tu(s)}`) % 10n ** 60n)
            .toString()
            .padStart(60, "0")
            .replace(/(\d{5})(?!$)/g, "$1 ");
        },
        "seal",
        0,
        function (t, e, r, n = Date.now()) {
          let i = rg(e.pub),
            o = rg(r),
            s = tc(t),
            f = new Uint8Array(256 * Math.ceil((4 + s.length) / 256));
          new DataView(f.buffer).setUint32(0, s.length), f.set(s, 4);
          let l = tb(24),
            a = D(rb(e.secret, o, i, o), l, ry(i, o, n)).encrypt(f);
          return { v: 1, from: e.pub, to: r, ts: n, nonce: rp(l), ct: rp(a) };
        },
        "signBinding",
        0,
        rE,
        "toB64u",
        0,
        rp,
      ],
      8178
    );
  },
]);
