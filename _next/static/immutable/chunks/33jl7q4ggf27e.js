(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  63625,
  6624,
  83856,
  88750,
  89268,
  57770,
  64348,
  10959,
  56317,
  12039,
  6662,
  22192,
  40577,
  81740,
  15588,
  11047,
  94720,
  72960,
  37445,
  75948,
  18249,
  68941,
  84734,
  69121,
  53077,
  67901,
  12371,
  39080,
  12477,
  28843,
  28804,
  2676,
  63700,
  5158,
  97178,
  66416,
  9050,
  37463,
  79578,
  44993,
  74148,
  79917,
  89228,
  68307,
  4558,
  48331,
  71293,
  6145,
  8412,
  93617,
  33570,
  77528,
  9760,
  27465,
  48789,
  58167,
  38081,
  21821,
  54727,
  95024,
  11092,
  (e) => {
    "use strict";
    let t, r, n;
    e.s(["estimateGas", () => tS], 84734),
      e.s(["prepareTransactionRequest", () => tN], 68941);
    var a,
      i = e.i(89991);
    let o = 256;
    function s(e = 11) {
      if (!t || o + e > 512) {
        (t = ""), (o = 0);
        for (let e = 0; e < 256; e++)
          t += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
      }
      return t.substring(o, o++ + e);
    }
    function c(e) {
      if ("object" != typeof e || null === e) return !1;
      let t = Object.getPrototypeOf(e);
      return t === Object.prototype || null === t;
    }
    e.s(["uid", 0, s], 6624),
      e.s(
        [
          "bindActionDecorators",
          0,
          function (e, t) {
            let r = (r = {}) => t(e, r);
            for (let n of [
              "call",
              "calls",
              "callWithPeriod",
              "estimateGas",
              "prepare",
              "prepareRecipient",
              "predict",
              "simulate",
            ])
              if (Object.hasOwn(t, n)) {
                let a = t[n];
                r[n] = (t = {}) => (1 === a.length ? a(t) : a(e, t));
              }
            for (let e of ["extractEvent", "extractEvents"])
              Object.hasOwn(t, e) && (r[e] = t[e]);
            return r;
          },
          "createClient",
          0,
          function (e) {
            let {
                batch: t,
                chain: r,
                ccipRead: n,
                dataSuffix: a,
                key: o = "base",
                name: l = "Base Client",
                tokens: u,
                type: d = "base",
              } = e,
              f =
                e.experimental_blockTag ??
                ("number" == typeof r?.experimental_preconfirmationTime
                  ? "pending"
                  : void 0),
              h = Math.min(
                Math.max(Math.floor((r?.blockTime ?? 12e3) / 2), 500),
                4e3
              ),
              p = e.pollingInterval ?? h,
              b = e.cacheTime ?? p,
              m = e.account ? (0, i.parseAccount)(e.account) : void 0,
              {
                config: g,
                request: y,
                value: w,
              } = e.transport({ account: m, chain: r, pollingInterval: p }),
              v = {
                account: m,
                batch: t,
                cacheTime: b,
                ccipRead: n,
                chain: r,
                dataSuffix: a,
                key: o,
                name: l,
                pollingInterval: p,
                request: y,
                tokens: u,
                transport: { ...g, ...w },
                type: d,
                uid: s(),
                ...(f ? { experimental_blockTag: f } : {}),
              };
            return Object.assign(v, {
              extend: (function e(t) {
                return (r) => {
                  let n = r(t);
                  for (let e in v) delete n[e];
                  let a = { ...t, ...n };
                  for (let e in n) {
                    let r = t[e],
                      i = n[e];
                    c(r) && c(i) && (a[e] = { ...r, ...i });
                  }
                  return Object.assign(a, { extend: e(a) });
                };
              })(v),
            });
          },
        ],
        63625
      );
    var l = e.i(52012),
      u = e.i(547),
      d = e.i(56679),
      f = e.i(23838),
      h = e.i(4195),
      p = e.i(1319),
      b = e.i(8406),
      m = e.i(75107),
      g = e.i(69934),
      y = e.i(78023);
    function w(e) {
      if (!(e instanceof g.BaseError)) return !1;
      let t = e.walk((e) => e instanceof y.ContractFunctionRevertedError);
      return (
        t instanceof y.ContractFunctionRevertedError &&
        (t.data?.errorName === "HttpError" ||
          t.data?.errorName === "ResolverError" ||
          t.data?.errorName === "ResolverNotContract" ||
          t.data?.errorName === "ResolverNotFound" ||
          t.data?.errorName === "ReverseAddressMismatch" ||
          t.data?.errorName === "UnsupportedResolverProfile")
      );
    }
    var v = e.i(61147),
      x = e.i(47526),
      E = e.i(69936),
      B = e.i(31095),
      P = e.i(80841);
    function A(e) {
      if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
        return null;
      let t = `0x${e.slice(1, 65)}`;
      return (0, P.isHex)(t) ? t : null;
    }
    function R(e) {
      let t = new Uint8Array(32).fill(0);
      if (!e) return (0, m.bytesToHex)(t);
      let r = e.split(".");
      for (let e = r.length - 1; e >= 0; e -= 1) {
        let n = A(r[e]),
          a = n
            ? (0, E.toBytes)(n)
            : (0, B.keccak256)((0, E.stringToBytes)(r[e]), "bytes");
        t = (0, B.keccak256)((0, x.concat)([t, a]), "bytes");
      }
      return (0, m.bytesToHex)(t);
    }
    function I(e) {
      let t = e.replace(/^\.|\.$/gm, "");
      if (0 === t.length) return new Uint8Array(1);
      let r = new Uint8Array((0, E.stringToBytes)(t).byteLength + 2),
        n = 0,
        a = t.split(".");
      for (let e = 0; e < a.length; e++) {
        var i;
        let t = (0, E.stringToBytes)(a[e]);
        t.byteLength > 255 &&
          (t = (0, E.stringToBytes)(
            ((i = (function (e) {
              let t = new Uint8Array(32).fill(0);
              return e
                ? A(e) || (0, B.keccak256)((0, E.stringToBytes)(e))
                : (0, m.bytesToHex)(t);
            })(a[e])),
            `[${i.slice(2)}]`)
          )),
          (r[n] = t.length),
          r.set(t, n + 1),
          (n += t.length + 1);
      }
      return r.byteLength !== n + 1 ? r.slice(0, n + 1) : r;
    }
    function k(e, t, r) {
      let n = e[t.name];
      if ("function" == typeof n) return n;
      let a = e[r];
      return "function" == typeof a ? a : (r) => t(e, r);
    }
    var T = e.i(70204),
      N = e.i(95767),
      S = g;
    class C extends S.BaseError {
      constructor(
        e,
        { code: t, docsPath: r, metaMessages: n, name: a, shortMessage: i }
      ) {
        super(i, {
          cause: e,
          docsPath: r,
          metaMessages: n || e?.metaMessages,
          name: a || "RpcError",
        }),
          Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.name = a || e.name),
          (this.code = e instanceof N.RpcRequestError ? e.code : t ?? -1);
      }
    }
    class F extends C {
      constructor(e, t) {
        super(e, t),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = t.data);
      }
    }
    class O extends C {
      constructor(e) {
        super(e, {
          code: O.code,
          name: "ParseRpcError",
          shortMessage:
            "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
        });
      }
    }
    Object.defineProperty(O, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32700,
    });
    class U extends C {
      constructor(e) {
        super(e, {
          code: U.code,
          name: "InvalidRequestRpcError",
          shortMessage: "JSON is not a valid request object.",
        });
      }
    }
    Object.defineProperty(U, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32600,
    });
    class q extends C {
      constructor(e, { method: t } = {}) {
        super(e, {
          code: q.code,
          name: "MethodNotFoundRpcError",
          shortMessage: `The method${
            t ? ` "${t}"` : ""
          } does not exist / is not available.`,
        });
      }
    }
    Object.defineProperty(q, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32601,
    });
    class L extends C {
      constructor(e) {
        super(e, {
          code: L.code,
          name: "InvalidParamsRpcError",
          shortMessage:
            "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
        });
      }
    }
    Object.defineProperty(L, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32602,
    });
    class z extends C {
      constructor(e) {
        super(e, {
          code: z.code,
          name: "InternalRpcError",
          shortMessage: "An internal error was received.",
        });
      }
    }
    Object.defineProperty(z, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32603,
    });
    class M extends C {
      constructor(e) {
        super(e, {
          code: M.code,
          name: "InvalidInputRpcError",
          shortMessage:
            "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
        });
      }
    }
    Object.defineProperty(M, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32e3,
    });
    class H extends C {
      constructor(e) {
        super(e, {
          code: H.code,
          name: "ResourceNotFoundRpcError",
          shortMessage: "Requested resource not found.",
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceNotFoundRpcError",
          });
      }
    }
    Object.defineProperty(H, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32001,
    });
    class $ extends C {
      constructor(e) {
        super(e, {
          code: $.code,
          name: "ResourceUnavailableRpcError",
          shortMessage: "Requested resource not available.",
        });
      }
    }
    Object.defineProperty($, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32002,
    });
    class D extends C {
      constructor(e) {
        super(e, {
          code: D.code,
          name: "TransactionRejectedRpcError",
          shortMessage: "Transaction creation failed.",
        });
      }
    }
    Object.defineProperty(D, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32003,
    });
    class j extends C {
      constructor(e, { method: t } = {}) {
        super(e, {
          code: j.code,
          name: "MethodNotSupportedRpcError",
          shortMessage: `Method${t ? ` "${t}"` : ""} is not supported.`,
        });
      }
    }
    Object.defineProperty(j, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32004,
    });
    class G extends C {
      constructor(e) {
        super(e, {
          code: G.code,
          name: "LimitExceededRpcError",
          shortMessage: "Request exceeds defined limit.",
        });
      }
    }
    Object.defineProperty(G, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32005,
    });
    class _ extends C {
      constructor(e) {
        super(e, {
          code: _.code,
          name: "JsonRpcVersionUnsupportedError",
          shortMessage: "Version of JSON-RPC protocol is not supported.",
        });
      }
    }
    Object.defineProperty(_, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32006,
    });
    class V extends F {
      constructor(e) {
        super(e, {
          code: V.code,
          name: "UserRejectedRequestError",
          shortMessage: "User rejected the request.",
        });
      }
    }
    Object.defineProperty(V, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4001,
    });
    class W extends F {
      constructor(e) {
        super(e, {
          code: W.code,
          name: "UnauthorizedProviderError",
          shortMessage:
            "The requested method and/or account has not been authorized by the user.",
        });
      }
    }
    Object.defineProperty(W, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4100,
    });
    class Z extends F {
      constructor(e, { method: t } = {}) {
        super(e, {
          code: Z.code,
          name: "UnsupportedProviderMethodError",
          shortMessage: `The Provider does not support the requested method${
            t ? ` " ${t}"` : ""
          }.`,
        });
      }
    }
    Object.defineProperty(Z, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4200,
    });
    class K extends F {
      constructor(e) {
        super(e, {
          code: K.code,
          name: "ProviderDisconnectedError",
          shortMessage: "The Provider is disconnected from all chains.",
        });
      }
    }
    Object.defineProperty(K, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4900,
    });
    class Y extends F {
      constructor(e) {
        super(e, {
          code: Y.code,
          name: "ChainDisconnectedError",
          shortMessage: "The Provider is not connected to the requested chain.",
        });
      }
    }
    Object.defineProperty(Y, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4901,
    });
    class J extends F {
      constructor(e) {
        super(e, {
          code: J.code,
          name: "SwitchChainError",
          shortMessage: "An error occurred when attempting to switch chain.",
        });
      }
    }
    Object.defineProperty(J, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4902,
    });
    class X extends F {
      constructor(e) {
        super(e, {
          code: X.code,
          name: "UnsupportedNonOptionalCapabilityError",
          shortMessage:
            "This Wallet does not support a capability that was not marked as optional.",
        });
      }
    }
    Object.defineProperty(X, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5700,
    });
    class Q extends F {
      constructor(e) {
        super(e, {
          code: Q.code,
          name: "UnsupportedChainIdError",
          shortMessage: "This Wallet does not support the requested chain ID.",
        });
      }
    }
    Object.defineProperty(Q, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5710,
    });
    class ee extends F {
      constructor(e) {
        super(e, {
          code: ee.code,
          name: "DuplicateIdError",
          shortMessage: "There is already a bundle submitted with this ID.",
        });
      }
    }
    Object.defineProperty(ee, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5720,
    });
    class et extends F {
      constructor(e) {
        super(e, {
          code: et.code,
          name: "UnknownBundleIdError",
          shortMessage: "This bundle id is unknown / has not been submitted",
        });
      }
    }
    Object.defineProperty(et, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5730,
    });
    class er extends F {
      constructor(e) {
        super(e, {
          code: er.code,
          name: "BundleTooLargeError",
          shortMessage:
            "The call bundle is too large for the Wallet to process.",
        });
      }
    }
    Object.defineProperty(er, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5740,
    });
    class en extends F {
      constructor(e) {
        super(e, {
          code: en.code,
          name: "AtomicReadyWalletRejectedUpgradeError",
          shortMessage:
            "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
        });
      }
    }
    Object.defineProperty(en, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5750,
    });
    class ea extends F {
      constructor(e) {
        super(e, {
          code: ea.code,
          name: "AtomicityNotSupportedError",
          shortMessage:
            "The wallet does not support atomic execution but the request requires it.",
        });
      }
    }
    Object.defineProperty(ea, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5760,
    });
    class ei extends F {
      constructor(e) {
        super(e, {
          code: ei.code,
          name: "WalletConnectSessionSettlementError",
          shortMessage: "WalletConnect session settlement failed.",
        });
      }
    }
    function eo(
      e,
      { abi: t, address: r, args: n, docsPath: a, functionName: i, sender: o }
    ) {
      let s =
          e instanceof y.RawContractError
            ? e
            : e instanceof g.BaseError
            ? e.walk((e) => "data" in e) || e.walk()
            : {},
        { code: c, data: l, details: u, message: d, shortMessage: f } = s,
        h =
          e instanceof T.AbiDecodingZeroDataError
            ? new y.ContractFunctionZeroDataError({ functionName: i, cause: e })
            : ([3, z.code].includes(c) && (l || u || d || f)) ||
              (c === M.code && "execution reverted" === u && l)
            ? new y.ContractFunctionRevertedError({
                abi: t,
                data: "object" == typeof l ? l.data : l,
                functionName: i,
                message: s instanceof N.RpcRequestError ? u : f ?? d,
                cause: e,
              })
            : e;
      return new y.ContractFunctionExecutionError(h, {
        abi: t,
        args: n,
        contractAddress: r,
        docsPath: a,
        functionName: i,
        sender: o,
      });
    }
    Object.defineProperty(ei, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 7e3,
    }),
      e.s(
        [
          "AtomicReadyWalletRejectedUpgradeError",
          0,
          en,
          "AtomicityNotSupportedError",
          0,
          ea,
          "BundleTooLargeError",
          0,
          er,
          "ChainDisconnectedError",
          0,
          Y,
          "DuplicateIdError",
          0,
          ee,
          "InternalRpcError",
          0,
          z,
          "InvalidInputRpcError",
          0,
          M,
          "InvalidParamsRpcError",
          0,
          L,
          "InvalidRequestRpcError",
          0,
          U,
          "JsonRpcVersionUnsupportedError",
          0,
          _,
          "LimitExceededRpcError",
          0,
          G,
          "MethodNotFoundRpcError",
          0,
          q,
          "MethodNotSupportedRpcError",
          0,
          j,
          "ParseRpcError",
          0,
          O,
          "ProviderDisconnectedError",
          0,
          K,
          "ResourceNotFoundRpcError",
          0,
          H,
          "ResourceUnavailableRpcError",
          0,
          $,
          "SwitchChainError",
          0,
          J,
          "TransactionRejectedRpcError",
          0,
          D,
          "UnauthorizedProviderError",
          0,
          W,
          "UnknownBundleIdError",
          0,
          et,
          "UnknownRpcError",
          0,
          class extends C {
            constructor(e) {
              super(e, {
                name: "UnknownRpcError",
                shortMessage: "An unknown RPC error occurred.",
              });
            }
          },
          "UnsupportedChainIdError",
          0,
          Q,
          "UnsupportedNonOptionalCapabilityError",
          0,
          X,
          "UnsupportedProviderMethodError",
          0,
          Z,
          "UserRejectedRequestError",
          0,
          V,
          "WalletConnectSessionSettlementError",
          0,
          ei,
        ],
        83856
      );
    var es = e.i(89509);
    async function ec(e, t) {
      let { abi: r, address: n, args: a, functionName: i, ...o } = t,
        s = (0, d.encodeFunctionData)({ abi: r, args: a, functionName: i });
      try {
        let { data: t } = await k(e, es.call, "call")({ ...o, data: s, to: n });
        return (0, u.decodeFunctionResult)({
          abi: r,
          args: a,
          functionName: i,
          data: t || "0x",
        });
      } catch (e) {
        throw eo(e, {
          abi: r,
          address: n,
          args: a,
          docsPath: "/docs/contract/readContract",
          functionName: i,
        });
      }
    }
    async function el(e, t) {
      let {
          blockNumber: r,
          blockTag: n,
          coinType: a,
          name: i,
          gatewayUrls: o,
          strict: s,
        } = t,
        { chain: c } = e,
        g = (() => {
          if (t.universalResolverAddress) return t.universalResolverAddress;
          if (!c)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, h.getChainContractAddress)({
            blockNumber: r,
            chain: c,
            contract: "ensUniversalResolver",
          });
        })(),
        y = c?.ensTlds;
      if (y && !y.some((e) => i.endsWith(e))) return null;
      let x = null != a ? [R(i), BigInt(a)] : [R(i)];
      try {
        let t = (0, d.encodeFunctionData)({
            abi: l.addressResolverAbi,
            functionName: "addr",
            args: x,
          }),
          s = {
            address: g,
            abi: l.universalResolverResolveAbi,
            functionName: "resolveWithGateways",
            args: [(0, m.toHex)(I(i)), t, o ?? [v.localBatchGatewayUrl]],
            blockNumber: r,
            blockTag: n,
          },
          c = k(e, ec, "readContract"),
          h = await c(s);
        if ("0x" === h[0]) return null;
        let y = (function ({ coinType: e, data: t, args: r }) {
          try {
            return (0, u.decodeFunctionResult)({
              abi: l.addressResolverAbi,
              args: r,
              functionName: "addr",
              data: t,
            });
          } catch (n) {
            if (null == e) throw n;
            let r = (0, b.trim)(t);
            if (20 === (0, p.size)(r)) return (0, f.getAddress)(r);
            throw n;
          }
        })({ coinType: a, data: h[0], args: x });
        if ("0x" === y || "0x00" === (0, b.trim)(y)) return null;
        return y;
      } catch (e) {
        if (s) throw e;
        if (w(e)) return null;
        throw e;
      }
    }
    e.s(["readContract", 0, ec], 88750), e.s(["getEnsAddress", 0, el], 89268);
    var eu = g;
    class ed extends eu.BaseError {
      constructor({ data: e }) {
        super(
          "Unable to extract image from metadata. The metadata may be malformed or invalid.",
          {
            metaMessages: [
              "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
              "",
              `Provided data: ${JSON.stringify(e)}`,
            ],
            name: "EnsAvatarInvalidMetadataError",
          }
        );
      }
    }
    class ef extends eu.BaseError {
      constructor({ reason: e }) {
        super(`ENS NFT avatar URI is invalid. ${e}`, {
          name: "EnsAvatarInvalidNftUriError",
        });
      }
    }
    class eh extends eu.BaseError {
      constructor({ uri: e }) {
        super(
          `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
          { name: "EnsAvatarUriResolutionError" }
        );
      }
    }
    class ep extends eu.BaseError {
      constructor({ namespace: e }) {
        super(
          `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
          { name: "EnsAvatarUnsupportedNamespaceError" }
        );
      }
    }
    eu.BaseError;
    let eb =
        /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
      em =
        /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
      eg = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
      ey = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
    async function ew(e) {
      try {
        let t = await fetch(e, { method: "HEAD" });
        if (200 === t.status) {
          let e = t.headers.get("content-type");
          return e?.startsWith("image/");
        }
        return !1;
      } catch (t) {
        if (
          ("object" == typeof t && void 0 !== t.response) ||
          !Object.hasOwn(globalThis, "Image")
        )
          return !1;
        return new Promise((t) => {
          let r = new Image();
          (r.onload = () => {
            t(!0);
          }),
            (r.onerror = () => {
              t(!1);
            }),
            (r.src = e);
        });
      }
    }
    function ev(e, t) {
      return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
    }
    function ex({ uri: e, gatewayUrls: t }) {
      let r = eg.test(e);
      if (r) return { uri: e, isOnChain: !0, isEncoded: r };
      let n = ev(t?.ipfs, "https://ipfs.io"),
        a = ev(t?.arweave, "https://arweave.net"),
        i = e.match(eb),
        {
          protocol: o,
          subpath: s,
          target: c,
          subtarget: l = "",
        } = i?.groups || {},
        u = "ipns:/" === o || "ipns/" === s,
        d = "ipfs:/" === o || "ipfs/" === s || em.test(e);
      if (e.startsWith("http") && !u && !d) {
        let r = e;
        return (
          t?.arweave && (r = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
          { uri: r, isOnChain: !1, isEncoded: !1 }
        );
      }
      if ((u || d) && c)
        return {
          uri: `${n}/${u ? "ipns" : "ipfs"}/${c}${l}`,
          isOnChain: !1,
          isEncoded: !1,
        };
      if ("ar:/" === o && c)
        return { uri: `${a}/${c}${l || ""}`, isOnChain: !1, isEncoded: !1 };
      let f = e.replace(ey, "");
      if (
        (f.startsWith("<svg") && (f = `data:image/svg+xml;base64,${btoa(f)}`),
        f.startsWith("data:") || f.startsWith("{"))
      )
        return { uri: f, isOnChain: !0, isEncoded: !1 };
      throw new eh({ uri: e });
    }
    function eE(e) {
      if (
        "object" != typeof e ||
        (!("image" in e) && !("image_url" in e) && !("image_data" in e))
      )
        throw new ed({ data: e });
      return e.image || e.image_url || e.image_data;
    }
    async function eB({ gatewayUrls: e, uri: t }) {
      try {
        let r = await fetch(t).then((e) => e.json());
        return await eP({ gatewayUrls: e, uri: eE(r) });
      } catch {
        throw new eh({ uri: t });
      }
    }
    async function eP({ gatewayUrls: e, uri: t }) {
      let { uri: r, isOnChain: n } = ex({ uri: t, gatewayUrls: e });
      if (n || (await ew(r))) return r;
      throw new eh({ uri: t });
    }
    async function eA(e, { nft: t }) {
      if ("erc721" === t.namespace)
        return ec(e, {
          address: t.contractAddress,
          abi: [
            {
              name: "tokenURI",
              type: "function",
              stateMutability: "view",
              inputs: [{ name: "tokenId", type: "uint256" }],
              outputs: [{ name: "", type: "string" }],
            },
          ],
          functionName: "tokenURI",
          args: [BigInt(t.tokenID)],
        });
      if ("erc1155" === t.namespace)
        return ec(e, {
          address: t.contractAddress,
          abi: [
            {
              name: "uri",
              type: "function",
              stateMutability: "view",
              inputs: [{ name: "_id", type: "uint256" }],
              outputs: [{ name: "", type: "string" }],
            },
          ],
          functionName: "uri",
          args: [BigInt(t.tokenID)],
        });
      throw new ep({ namespace: t.namespace });
    }
    async function eR(e, { gatewayUrls: t, record: r }) {
      return /eip155:/i.test(r)
        ? eI(e, { gatewayUrls: t, record: r })
        : eP({ uri: r, gatewayUrls: t });
    }
    async function eI(e, { gatewayUrls: t, record: r }) {
      let n = (function (e) {
          let t = e;
          t.startsWith("did:nft:") &&
            (t = t.replace("did:nft:", "").replace(/_/g, "/"));
          let [r, n, a] = t.split("/"),
            [i, o] = r.split(":"),
            [s, c] = n.split(":");
          if (!i || "eip155" !== i.toLowerCase())
            throw new ef({ reason: "Only EIP-155 supported" });
          if (!o) throw new ef({ reason: "Chain ID not found" });
          if (!c) throw new ef({ reason: "Contract address not found" });
          if (!a) throw new ef({ reason: "Token ID not found" });
          if (!s) throw new ef({ reason: "ERC namespace not found" });
          return {
            chainID: Number.parseInt(o, 10),
            namespace: s.toLowerCase(),
            contractAddress: c,
            tokenID: a,
          };
        })(r),
        {
          uri: a,
          isOnChain: i,
          isEncoded: o,
        } = ex({ uri: await eA(e, { nft: n }), gatewayUrls: t });
      if (
        i &&
        (a.includes("data:application/json;base64,") || a.startsWith("{"))
      )
        return eP({
          uri: eE(
            JSON.parse(
              o ? atob(a.replace("data:application/json;base64,", "")) : a
            )
          ),
          gatewayUrls: t,
        });
      let s = n.tokenID;
      return (
        "erc1155" === n.namespace &&
          (s = s.replace("0x", "").padStart(64, "0")),
        eB({ gatewayUrls: t, uri: a.replace(/(?:0x)?{id}/, s) })
      );
    }
    async function ek(e, t) {
      let {
          blockNumber: r,
          blockTag: n,
          key: a,
          name: i,
          gatewayUrls: o,
          strict: s,
        } = t,
        { chain: c } = e,
        f = (() => {
          if (t.universalResolverAddress) return t.universalResolverAddress;
          if (!c)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, h.getChainContractAddress)({
            blockNumber: r,
            chain: c,
            contract: "ensUniversalResolver",
          });
        })(),
        p = c?.ensTlds;
      if (p && !p.some((e) => i.endsWith(e))) return null;
      try {
        let t = {
            address: f,
            abi: l.universalResolverResolveAbi,
            args: [
              (0, m.toHex)(I(i)),
              (0, d.encodeFunctionData)({
                abi: l.textResolverAbi,
                functionName: "text",
                args: [R(i), a],
              }),
              o ?? [v.localBatchGatewayUrl],
            ],
            functionName: "resolveWithGateways",
            blockNumber: r,
            blockTag: n,
          },
          s = k(e, ec, "readContract"),
          c = await s(t);
        if ("0x" === c[0]) return null;
        let h = (0, u.decodeFunctionResult)({
          abi: l.textResolverAbi,
          functionName: "text",
          data: c[0],
        });
        return "" === h ? null : h;
      } catch (e) {
        if (s) throw e;
        if (w(e)) return null;
        throw e;
      }
    }
    async function eT(
      e,
      {
        blockNumber: t,
        blockTag: r,
        assetGatewayUrls: n,
        name: a,
        gatewayUrls: i,
        strict: o,
        universalResolverAddress: s,
      }
    ) {
      let c = await k(
        e,
        ek,
        "getEnsText"
      )({
        blockNumber: t,
        blockTag: r,
        key: "avatar",
        name: a,
        universalResolverAddress: s,
        gatewayUrls: i,
        strict: o,
      });
      if (!c) return null;
      try {
        return await eR(e, { record: c, gatewayUrls: n });
      } catch {
        return null;
      }
    }
    async function eN(e, t) {
      let {
          address: r,
          blockNumber: n,
          blockTag: a,
          coinType: i = 60n,
          gatewayUrls: o,
          strict: s,
        } = t,
        { chain: c } = e,
        u = (() => {
          if (t.universalResolverAddress) return t.universalResolverAddress;
          if (!c)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, h.getChainContractAddress)({
            blockNumber: n,
            chain: c,
            contract: "ensUniversalResolver",
          });
        })();
      try {
        let t = {
            address: u,
            abi: l.universalResolverReverseAbi,
            args: [r, i, o ?? [v.localBatchGatewayUrl]],
            functionName: "reverseWithGateways",
            blockNumber: n,
            blockTag: a,
          },
          s = k(e, ec, "readContract"),
          [c] = await s(t);
        return c || null;
      } catch (e) {
        if (s) throw e;
        if (w(e)) return null;
        throw e;
      }
    }
    async function eS(e, t) {
      let { blockNumber: r, blockTag: n, name: a } = t,
        { chain: i } = e,
        o = (() => {
          if (t.universalResolverAddress) return t.universalResolverAddress;
          if (!i)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, h.getChainContractAddress)({
            blockNumber: r,
            chain: i,
            contract: "ensUniversalResolver",
          });
        })(),
        s = i?.ensTlds;
      if (s && !s.some((e) => a.endsWith(e)))
        throw Error(
          `${a} is not a valid ENS TLD (${s?.join(", ")}) for chain "${
            i.name
          }" (id: ${i.id}).`
        );
      let [c] = await k(
        e,
        ec,
        "readContract"
      )({
        address: o,
        abi: [
          {
            inputs: [{ type: "bytes" }],
            name: "findResolver",
            outputs: [
              { type: "address" },
              { type: "bytes32" },
              { type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        functionName: "findResolver",
        args: [(0, m.toHex)(I(a))],
        blockNumber: r,
        blockTag: n,
      });
      return c;
    }
    e.s(["getEnsText", 0, ek], 57770),
      e.s(["getEnsAvatar", 0, eT], 64348),
      e.s(["getEnsName", 0, eN], 10959),
      e.s(["getEnsResolver", 0, eS], 56317);
    var eC = e.i(79690),
      eF = e.i(64404),
      eO = e.i(90521),
      eU = e.i(53464);
    async function eq(e, t) {
      let {
          account: r = e.account,
          blockNumber: n,
          blockTag: a = "latest",
          blobs: o,
          data: s,
          gas: c,
          gasPrice: l,
          maxFeePerBlobGas: u,
          maxFeePerGas: d,
          maxPriorityFeePerGas: f,
          to: h,
          value: p,
          ...b
        } = t,
        y = r ? (0, i.parseAccount)(r) : void 0;
      try {
        (0, eU.assertRequest)(t);
        let r = "bigint" == typeof n ? (0, m.numberToHex)(n) : void 0,
          i = e.chain?.formatters?.transactionRequest?.format,
          w = (i || eO.formatTransactionRequest)(
            {
              ...(0, eF.extract)(b, { format: i }),
              account: y,
              blobs: o,
              data: s,
              gas: c,
              gasPrice: l,
              maxFeePerBlobGas: u,
              maxFeePerGas: d,
              maxPriorityFeePerGas: f,
              to: h,
              value: p,
            },
            "createAccessList"
          ),
          v = await e.request({
            method: "eth_createAccessList",
            params: [w, r || a],
          });
        if (v.error) throw new g.BaseError(v.error, { details: v.error });
        return { accessList: v.accessList, gasUsed: BigInt(v.gasUsed) };
      } catch (r) {
        throw (0, eC.getCallError)(r, { ...t, account: y, chain: e.chain });
      }
    }
    function eL(e, { method: t }) {
      let r = {};
      return (
        "fallback" === e.transport.type &&
          e.transport.onResponse?.(
            ({ method: e, response: n, status: a, transport: i }) => {
              "success" === a && t === e && (r[n] = i.request);
            }
          ),
        (t) => r[t] || e.request
      );
    }
    async function ez(e) {
      let t = eL(e, { method: "eth_newBlockFilter" }),
        r = await e.request({ method: "eth_newBlockFilter" });
      return { id: r, request: t(r), type: "block" };
    }
    e.s(["createAccessList", 0, eq], 12039),
      e.s(["createBlockFilter", 0, ez], 6662);
    var eM = g;
    class eH extends eM.BaseError {
      constructor(e) {
        super(`Filter type "${e}" is not supported.`, {
          name: "FilterTypeNotSupportedError",
        });
      }
    }
    var e$ = e.i(74620),
      eD = e.i(4434),
      ej = e.i(32881),
      eG = e.i(27173);
    let e_ = "/docs/contract/encodeEventTopics";
    function eV(e) {
      let { abi: t, eventName: r, args: n } = e,
        a = t[0];
      if (r) {
        let e = (0, eG.getAbiItem)({ abi: t, name: r });
        if (!e) throw new T.AbiEventNotFoundError(r, { docsPath: e_ });
        a = e;
      }
      if ("event" !== a.type)
        throw new T.AbiEventNotFoundError(void 0, { docsPath: e_ });
      let i = [];
      if (n && "inputs" in a) {
        let e = a.inputs?.filter((e) => "indexed" in e && e.indexed),
          t = Array.isArray(n)
            ? n
            : Object.values(n).length > 0
            ? e?.map((e) => n[e.name]) ?? []
            : [];
        t.length > 0 &&
          (i =
            e?.map((e, r) =>
              Array.isArray(t[r])
                ? t[r].map((n, a) => eW({ param: e, value: t[r][a] }))
                : void 0 !== t[r] && null !== t[r]
                ? eW({ param: e, value: t[r] })
                : null
            ) ?? []);
      }
      if (a.anonymous) return i;
      let o = (0, ej.formatAbiItem)(a);
      return [(0, e$.toEventSelector)(o), ...i];
    }
    function eW({ param: e, value: t }) {
      if ("string" === e.type || "bytes" === e.type)
        return (0, B.keccak256)((0, E.toBytes)(t));
      if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
        throw new eH(e.type);
      return (0, eD.encodeAbiParameters)([e], [t]);
    }
    async function eZ(e, t) {
      let {
          address: r,
          abi: n,
          args: a,
          eventName: i,
          fromBlock: o,
          strict: s,
          toBlock: c,
        } = t,
        l = eL(e, { method: "eth_newFilter" }),
        u = i ? eV({ abi: n, args: a, eventName: i }) : void 0,
        d = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: r,
              fromBlock: "bigint" == typeof o ? (0, m.numberToHex)(o) : o,
              toBlock: "bigint" == typeof c ? (0, m.numberToHex)(c) : c,
              topics: u,
            },
          ],
        });
      return {
        abi: n,
        args: a,
        eventName: i,
        id: d,
        request: l(d),
        strict: !!s,
        type: "event",
      };
    }
    async function eK(
      e,
      {
        address: t,
        args: r,
        event: n,
        events: a,
        fromBlock: i,
        strict: o,
        toBlock: s,
      } = {}
    ) {
      let c = a ?? (n ? [n] : void 0),
        l = eL(e, { method: "eth_newFilter" }),
        u = [];
      c &&
        ((u = [c.flatMap((e) => eV({ abi: [e], eventName: e.name, args: r }))]),
        n && (u = u[0]));
      let d = await e.request({
        method: "eth_newFilter",
        params: [
          {
            address: t,
            fromBlock: "bigint" == typeof i ? (0, m.numberToHex)(i) : i,
            toBlock: "bigint" == typeof s ? (0, m.numberToHex)(s) : s,
            ...(u.length ? { topics: u } : {}),
          },
        ],
      });
      return {
        abi: c,
        args: r,
        eventName: n ? n.name : void 0,
        fromBlock: i,
        id: d,
        request: l(d),
        strict: !!o,
        toBlock: s,
        type: "event",
      };
    }
    async function eY(e) {
      let t = eL(e, { method: "eth_newPendingTransactionFilter" }),
        r = await e.request({ method: "eth_newPendingTransactionFilter" });
      return { id: r, request: t(r), type: "transaction" };
    }
    e.s(["createContractEventFilter", 0, eZ], 22192),
      e.s(["createEventFilter", 0, eK], 40577),
      e.s(["createPendingTransactionFilter", 0, eY], 81740);
    var eJ = e.i(18217),
      eX = e.i(795);
    function eQ(e) {
      if (e < 256) return 1;
      if (e < 65536) return 2;
      if (e < 0x1000000) return 3;
      if (e < 0x100000000) return 4;
      throw new g.BaseError("Length is too large.");
    }
    async function e0(e) {
      let { authorization: t, signature: r } = e;
      return (0, eJ.recoverAddress)({
        hash: (function (e) {
          let { chainId: t, nonce: r, to: n } = e,
            a = e.contractAddress ?? e.address,
            i = (0, B.keccak256)(
              (0, x.concatHex)([
                "0x05",
                (function (e, t = "hex") {
                  let r = (function e(t) {
                      var r, n;
                      let a, i, o, s;
                      return Array.isArray(t)
                        ? ((i = eQ(
                            (a = (r = t.map((t) => e(t))).reduce(
                              (e, t) => e + t.length,
                              0
                            ))
                          )),
                          {
                            length: a <= 55 ? 1 + a : 1 + i + a,
                            encode(e) {
                              for (let { encode: t } of (a <= 55
                                ? e.pushByte(192 + a)
                                : (e.pushByte(247 + i),
                                  1 === i
                                    ? e.pushUint8(a)
                                    : 2 === i
                                    ? e.pushUint16(a)
                                    : 3 === i
                                    ? e.pushUint24(a)
                                    : e.pushUint32(a)),
                              r))
                                t(e);
                            },
                          })
                        : ((s = eQ(
                            (o =
                              "string" == typeof (n = t)
                                ? (0, E.hexToBytes)(n)
                                : n).length
                          )),
                          {
                            length:
                              1 === o.length && o[0] < 128
                                ? 1
                                : o.length <= 55
                                ? 1 + o.length
                                : 1 + s + o.length,
                            encode(e) {
                              (1 === o.length && o[0] < 128) ||
                                (o.length <= 55
                                  ? e.pushByte(128 + o.length)
                                  : (e.pushByte(183 + s),
                                    1 === s
                                      ? e.pushUint8(o.length)
                                      : 2 === s
                                      ? e.pushUint16(o.length)
                                      : 3 === s
                                      ? e.pushUint24(o.length)
                                      : e.pushUint32(o.length))),
                                e.pushBytes(o);
                            },
                          });
                    })(e),
                    n = (0, eX.createCursor)(new Uint8Array(r.length));
                  return (r.encode(n), "hex" === t)
                    ? (0, m.bytesToHex)(n.bytes)
                    : n.bytes;
                })([
                  t ? (0, m.numberToHex)(t) : "0x",
                  a,
                  r ? (0, m.numberToHex)(r) : "0x",
                ]),
              ])
            );
          return "bytes" === n ? (0, E.hexToBytes)(i) : i;
        })(t),
        signature: r ?? t,
      });
    }
    var e1 = e.i(85973),
      e6 = e.i(76486),
      e5 = g,
      e2 = e.i(93702);
    class e8 extends e5.BaseError {
      constructor(
        e,
        {
          account: t,
          docsPath: r,
          chain: n,
          data: a,
          gas: i,
          gasPrice: o,
          maxFeePerGas: s,
          maxPriorityFeePerGas: c,
          nonce: l,
          to: u,
          value: d,
        }
      ) {
        const f = (0, e2.prettyPrint)({
          from: t?.address,
          to: u,
          value:
            void 0 !== d &&
            `${(0, e1.formatEther)(d)} ${n?.nativeCurrency?.symbol || "ETH"}`,
          data: a,
          gas: i,
          gasPrice: void 0 !== o && `${(0, e6.formatGwei)(o)} gwei`,
          maxFeePerGas: void 0 !== s && `${(0, e6.formatGwei)(s)} gwei`,
          maxPriorityFeePerGas: void 0 !== c && `${(0, e6.formatGwei)(c)} gwei`,
          nonce: l,
        });
        super(e.shortMessage, {
          cause: e,
          docsPath: r,
          metaMessages: [
            ...(e.metaMessages ? [...e.metaMessages, " "] : []),
            "Estimate Gas Arguments:",
            f,
          ].filter(Boolean),
          name: "EstimateGasExecutionError",
        }),
          Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.cause = e);
      }
    }
    var e3 = e.i(53532),
      e4 = e.i(67078),
      e7 = e.i(26051),
      e9 = g;
    class te extends e9.BaseError {
      constructor() {
        super("`baseFeeMultiplier` must be greater than 1.", {
          name: "BaseFeeScalarError",
        });
      }
    }
    class tt extends e9.BaseError {
      constructor() {
        super("Chain does not support EIP-1559 fees.", {
          name: "Eip1559FeesNotSupportedError",
        });
      }
    }
    class tr extends e9.BaseError {
      constructor({ maxPriorityFeePerGas: e }) {
        super(
          `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
          e6.formatGwei)(e)} gwei).`,
          { name: "MaxFeePerGasTooLowError" }
        );
      }
    }
    var tn = e.i(50323),
      ta = g;
    class ti extends ta.BaseError {
      constructor({ blockHash: e, blockNumber: t }) {
        let r = "Block";
        e && (r = `Block at hash "${e}"`),
          t && (r = `Block at number "${t}"`),
          super(`${r} could not be found.`, { name: "BlockNotFoundError" });
      }
    }
    e.i(45024);
    let to = {
      "0x0": "legacy",
      "0x1": "eip2930",
      "0x2": "eip1559",
      "0x3": "eip4844",
      "0x4": "eip7702",
    };
    function ts(e, t) {
      let r = {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        ...(null != e.blockTimestamp && {
          blockTimestamp: BigInt(e.blockTimestamp),
        }),
        chainId: e.chainId ? (0, tn.hexToNumber)(e.chainId) : void 0,
        gas: e.gas ? BigInt(e.gas) : void 0,
        gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
        maxFeePerBlobGas: e.maxFeePerBlobGas
          ? BigInt(e.maxFeePerBlobGas)
          : void 0,
        maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas
          ? BigInt(e.maxPriorityFeePerGas)
          : void 0,
        nonce: e.nonce ? (0, tn.hexToNumber)(e.nonce) : void 0,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex
          ? Number(e.transactionIndex)
          : null,
        type: e.type ? to[e.type] : void 0,
        typeHex: e.type ? e.type : void 0,
        value: e.value ? BigInt(e.value) : void 0,
        v: e.v ? BigInt(e.v) : void 0,
      };
      return (
        e.authorizationList &&
          (r.authorizationList = e.authorizationList.map((e) => ({
            address: e.address,
            chainId: Number(e.chainId),
            nonce: Number(e.nonce),
            r: e.r,
            s: e.s,
            yParity: Number(e.yParity),
          }))),
        (r.yParity = (() => {
          if (e.yParity) return Number(e.yParity);
          if ("bigint" == typeof r.v) {
            if (0n === r.v || 27n === r.v) return 0;
            if (1n === r.v || 28n === r.v) return 1;
            if (r.v >= 35n) return +(r.v % 2n === 0n);
          }
        })()),
        "legacy" === r.type &&
          (delete r.accessList,
          delete r.maxFeePerBlobGas,
          delete r.maxFeePerGas,
          delete r.maxPriorityFeePerGas,
          delete r.yParity),
        "eip2930" === r.type &&
          (delete r.maxFeePerBlobGas,
          delete r.maxFeePerGas,
          delete r.maxPriorityFeePerGas),
        "eip1559" === r.type && delete r.maxFeePerBlobGas,
        r
      );
    }
    function tc(e, t) {
      let r = (e.transactions ?? []).map((e) =>
        "string" == typeof e ? e : ts(e)
      );
      return {
        ...e,
        baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
        blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
        difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
        excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
        gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
        hash: e.hash ? e.hash : null,
        logsBloom: e.logsBloom ? e.logsBloom : null,
        nonce: e.nonce ? e.nonce : null,
        number: e.number ? BigInt(e.number) : null,
        size: e.size ? BigInt(e.size) : void 0,
        timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
        transactions: r,
        totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
      };
    }
    async function tl(
      e,
      {
        blockHash: t,
        blockNumber: r,
        blockTag: n = e.experimental_blockTag ?? "latest",
        includeTransactions: a,
      } = {}
    ) {
      let i = a ?? !1,
        o = void 0 !== r ? (0, m.numberToHex)(r) : void 0,
        s = null;
      if (
        !(s = t
          ? await e.request(
              { method: "eth_getBlockByHash", params: [t, i] },
              { dedupe: !0 }
            )
          : await e.request(
              { method: "eth_getBlockByNumber", params: [o || n, i] },
              { dedupe: !!o }
            ))
      )
        throw new ti({ blockHash: t, blockNumber: r });
      return (e.chain?.formatters?.block?.format || tc)(s, "getBlock");
    }
    async function tu(e) {
      return BigInt(await e.request({ method: "eth_gasPrice" }));
    }
    async function td(e, t) {
      return tf(e, t);
    }
    async function tf(e, t) {
      let { block: r, chain: n = e.chain, request: a } = t || {};
      try {
        let t = n?.fees?.maxPriorityFeePerGas ?? n?.fees?.defaultPriorityFee;
        if ("function" == typeof t) {
          let n = r || (await k(e, tl, "getBlock")({})),
            i = await t({ block: n, client: e, request: a });
          if (null === i) throw Error();
          return i;
        }
        if (void 0 !== t) return t;
        let i = await e.request({ method: "eth_maxPriorityFeePerGas" });
        return (0, tn.hexToBigInt)(i);
      } catch {
        let [t, n] = await Promise.all([
          r ? Promise.resolve(r) : k(e, tl, "getBlock")({}),
          k(e, tu, "getGasPrice")({}),
        ]);
        if ("bigint" != typeof t.baseFeePerGas) throw new tt();
        let a = n - t.baseFeePerGas;
        if (a < 0n) return 0n;
        return a;
      }
    }
    async function th(e, t) {
      return tp(e, t);
    }
    async function tp(e, t) {
      let {
          block: r,
          chain: n = e.chain,
          request: a,
          type: i = "eip1559",
        } = t || {},
        o = await (async () =>
          "function" == typeof n?.fees?.baseFeeMultiplier
            ? n.fees.baseFeeMultiplier({ block: r, client: e, request: a })
            : n?.fees?.baseFeeMultiplier ?? 1.2)();
      if (o < 1) throw new te();
      let s = o.toString().split(".")[1]?.length ?? 0,
        c = 10 ** s,
        l = (e) => (e * BigInt(Math.round(o * c))) / BigInt(c),
        u = r || (await k(e, tl, "getBlock")({}));
      if ("function" == typeof n?.fees?.estimateFeesPerGas) {
        let t = await n.fees.estimateFeesPerGas({
          block: r,
          client: e,
          multiply: l,
          request: a,
          type: i,
        });
        if (null !== t) return t;
      }
      if ("eip1559" === i) {
        if ("bigint" != typeof u.baseFeePerGas) throw new tt();
        let t =
            "bigint" == typeof a?.maxPriorityFeePerGas
              ? a.maxPriorityFeePerGas
              : await tf(e, { block: u, chain: n, request: a }),
          r = l(u.baseFeePerGas);
        return {
          maxFeePerGas: a?.maxFeePerGas ?? r + t,
          maxPriorityFeePerGas: t,
        };
      }
      return { gasPrice: a?.gasPrice ?? l(await k(e, tu, "getGasPrice")({})) };
    }
    e.s(["getBlock", 0, tl], 15588),
      e.s(["getGasPrice", 0, tu], 11047),
      e.s(
        [
          "estimateMaxPriorityFeePerGas",
          0,
          td,
          "internal_estimateMaxPriorityFeePerGas",
          0,
          tf,
        ],
        94720
      ),
      e.s(
        ["estimateFeesPerGas", 0, th, "internal_estimateFeesPerGas", 0, tp],
        72960
      );
    var tb = e.i(6580);
    async function tm(
      e,
      {
        address: t,
        blockHash: r,
        blockNumber: n,
        blockTag: a = "latest",
        requireCanonical: i,
      }
    ) {
      let o = (0, tb.formatBlockParameter)({
          blockHash: r,
          blockNumber: n,
          blockTag: a,
          requireCanonical: i,
        }),
        s = await e.request(
          { method: "eth_getTransactionCount", params: [t, o] },
          { dedupe: "bigint" == typeof n || void 0 !== r }
        );
      return (0, tn.hexToNumber)(s);
    }
    function tg(e) {
      let { kzg: t } = e,
        r = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
        n =
          "string" == typeof e.blobs[0]
            ? e.blobs.map((e) => (0, E.hexToBytes)(e))
            : e.blobs,
        a = [];
      for (let e of n) a.push(Uint8Array.from(t.blobToKzgCommitment(e)));
      return "bytes" === r ? a : a.map((e) => (0, m.bytesToHex)(e));
    }
    function ty(e) {
      let { kzg: t } = e,
        r = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
        n =
          "string" == typeof e.blobs[0]
            ? e.blobs.map((e) => (0, E.hexToBytes)(e))
            : e.blobs,
        a =
          "string" == typeof e.commitments[0]
            ? e.commitments.map((e) => (0, E.hexToBytes)(e))
            : e.commitments,
        i = [];
      for (let e = 0; e < n.length; e++) {
        let r = n[e],
          o = a[e];
        i.push(Uint8Array.from(t.computeBlobKzgProof(r, o)));
      }
      return "bytes" === r ? i : i.map((e) => (0, m.bytesToHex)(e));
    }
    e.s(["getTransactionCount", 0, tm], 37445);
    var tw = e.i(81979);
    tw.SHA256;
    let tv = tw.sha256;
    tw.SHA224, tw.sha224;
    var tx = g;
    class tE extends tx.BaseError {
      constructor({ maxSize: e, size: t }) {
        super("Blob size is too large.", {
          metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
          name: "BlobSizeTooLargeError",
        });
      }
    }
    class tB extends tx.BaseError {
      constructor() {
        super("Blob data must not be empty.", { name: "EmptyBlobError" });
      }
    }
    tx.BaseError, tx.BaseError;
    var tP = e.i(76677);
    async function tA(e) {
      let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
      return (0, tn.hexToNumber)(t);
    }
    async function tR(e, t) {
      let {
          account: r = e.account,
          accessList: n,
          authorizationList: a,
          chain: o = e.chain,
          blobVersionedHashes: s,
          blobs: c,
          data: l,
          gas: u,
          gasPrice: d,
          maxFeePerBlobGas: f,
          maxFeePerGas: h,
          maxPriorityFeePerGas: p,
          nonce: b,
          nonceManager: m,
          to: g,
          type: y,
          value: w,
          ...v
        } = t,
        x = await (async () => {
          if (!r || !m || void 0 !== b) return b;
          let t = (0, i.parseAccount)(r),
            n = o ? o.id : await k(e, tA, "getChainId")({});
          return await m.consume({ address: t.address, chainId: n, client: e });
        })();
      (0, eU.assertRequest)(t);
      let E = o?.formatters?.transactionRequest?.format,
        B = (E || eO.formatTransactionRequest)(
          {
            ...(0, eF.extract)(v, { format: E }),
            account: r ? (0, i.parseAccount)(r) : void 0,
            accessList: n,
            authorizationList: a,
            blobs: c,
            blobVersionedHashes: s,
            data: l,
            gas: u,
            gasPrice: d,
            maxFeePerBlobGas: f,
            maxFeePerGas: h,
            maxPriorityFeePerGas: p,
            nonce: x,
            to: g,
            type: y,
            value: w,
          },
          "fillTransaction"
        );
      try {
        let r = await e.request({ method: "eth_fillTransaction", params: [B] }),
          n = (o?.formatters?.transaction?.format || ts)(r.tx);
        delete n.blockHash,
          delete n.blockNumber,
          delete n.r,
          delete n.s,
          delete n.transactionIndex,
          delete n.v,
          delete n.yParity,
          (n.data = n.input);
        let a = void 0 !== n.feePayerSignature && null !== n.feePayerSignature;
        if (a && void 0 !== x && n.nonce !== x)
          throw new e2.FeePayerNonceMismatchError({
            filledNonce: n.nonce,
            requestedNonce: x,
          });
        if (!a) {
          n.gas && (n.gas = t.gas ?? n.gas),
            n.gasPrice && (n.gasPrice = t.gasPrice ?? n.gasPrice),
            n.maxFeePerBlobGas &&
              (n.maxFeePerBlobGas = t.maxFeePerBlobGas ?? n.maxFeePerBlobGas),
            n.maxFeePerGas &&
              (n.maxFeePerGas = t.maxFeePerGas ?? n.maxFeePerGas),
            n.maxPriorityFeePerGas &&
              (n.maxPriorityFeePerGas =
                t.maxPriorityFeePerGas ?? n.maxPriorityFeePerGas),
            void 0 !== n.nonce && (n.nonce = t.nonce ?? n.nonce);
          let r = await (async () => {
            if ("function" == typeof o?.fees?.baseFeeMultiplier) {
              let r = await k(e, tl, "getBlock")({});
              return o.fees.baseFeeMultiplier({
                block: r,
                client: e,
                request: t,
              });
            }
            return o?.fees?.baseFeeMultiplier ?? 1.2;
          })();
          if (r < 1) throw new te();
          let a = r.toString().split(".")[1]?.length ?? 0,
            i = 10 ** a,
            s = (e) => (e * BigInt(Math.round(r * i))) / BigInt(i);
          n.maxFeePerGas &&
            !t.maxFeePerGas &&
            (n.maxFeePerGas = s(n.maxFeePerGas)),
            n.gasPrice && !t.gasPrice && (n.gasPrice = s(n.gasPrice));
        }
        return {
          raw: r.raw,
          transaction: { from: B.from, ...n },
          ...(r.capabilities ? { capabilities: r.capabilities } : {}),
        };
      } catch (r) {
        throw (function (e, { docsPath: t, ...r }) {
          let n,
            a =
              (n = (0, e4.getNodeError)(e, r)) instanceof e3.UnknownNodeError
                ? e
                : n;
          return new e2.TransactionExecutionError(a, { docsPath: t, ...r });
        })(r, { ...t, chain: e.chain });
      }
    }
    e.s(["getChainId", 0, tA], 75948), e.s(["fillTransaction", 0, tR], 18249);
    let tI = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"],
      tk = new Map(),
      tT = new tP.LruMap(128);
    async function tN(e, t) {
      let r,
        n,
        a = t;
      (a.account ??= e.account), (a.parameters ??= tI);
      let {
          account: o,
          chain: s = e.chain,
          nonceManager: c,
          parameters: l,
        } = a,
        u =
          "function" == typeof s?.prepareTransactionRequest
            ? {
                fn: s.prepareTransactionRequest,
                runAt: ["beforeFillTransaction"],
              }
            : Array.isArray(s?.prepareTransactionRequest)
            ? {
                fn: s.prepareTransactionRequest[0],
                runAt: s.prepareTransactionRequest[1].runAt,
              }
            : void 0;
      async function d() {
        return (
          r ||
          (void 0 !== a.chainId
            ? a.chainId
            : s
            ? s.id
            : (r = await k(e, tA, "getChainId")({})))
        );
      }
      let f = o ? (0, i.parseAccount)(o) : o,
        h = a.nonce;
      if (u?.fn && u.runAt?.includes("beforeFillTransaction")) {
        (a = await u.fn(
          { ...a, chain: s },
          { client: e, phase: "beforeFillTransaction" }
        )),
          (h ??= a.nonce);
        let t = a.account ?? a.from;
        f = t ? (0, i.parseAccount)(t) : void 0;
      }
      if (l.includes("nonce") && void 0 === h && f && c) {
        let t = await d();
        h = await c.consume({ address: f.address, chainId: t, client: e });
      }
      let b =
        (!(l.includes("blobVersionedHashes") || l.includes("sidecars")) ||
          !a.kzg ||
          !a.blobs) &&
        ((l.length > 0 &&
          "feePayer" in a &&
          a.feePayer &&
          (!("feePayerSignature" in a) || !a.feePayerSignature)) ||
          (!1 !== tT.get(e.uid) &&
            ["fees", "gas"].some((e) => l.includes(e)) &&
            ((l.includes("chainId") && "number" != typeof a.chainId) ||
              (l.includes("nonce") && "number" != typeof h) ||
              (l.includes("fees") &&
                "bigint" != typeof a.gasPrice &&
                ("bigint" != typeof a.maxFeePerGas ||
                  "bigint" != typeof a.maxPriorityFeePerGas)) ||
              (l.includes("gas") && "bigint" != typeof a.gas))))
          ? await k(
              e,
              tR,
              "fillTransaction"
            )({ ...a, nonce: h })
              .then((t) => {
                let {
                    chainId: r,
                    from: n,
                    gas: i,
                    gasPrice: o,
                    nonce: s,
                    maxFeePerBlobGas: c,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: u,
                    type: d,
                    ...f
                  } = t.transaction,
                  h = "feeToken" in f ? f.feeToken : void 0,
                  p =
                    "feePayerSignature" in f &&
                    null !== f.feePayerSignature &&
                    void 0 !== f.feePayerSignature,
                  b = null != h && (!("feeToken" in a) || p);
                return (
                  tT.set(e.uid, !0),
                  {
                    ...a,
                    ...(n ? { from: n } : {}),
                    ...(d && !a.type ? { type: d } : {}),
                    ...(void 0 !== r ? { chainId: r } : {}),
                    ...(void 0 !== i ? { gas: i } : {}),
                    ...(void 0 !== o ? { gasPrice: o } : {}),
                    ...(void 0 !== s ? { nonce: s } : {}),
                    ...(void 0 !== c &&
                    "legacy" !== a.type &&
                    "eip2930" !== a.type
                      ? { maxFeePerBlobGas: c }
                      : {}),
                    ...(void 0 !== l &&
                    "legacy" !== a.type &&
                    "eip2930" !== a.type
                      ? { maxFeePerGas: l }
                      : {}),
                    ...(void 0 !== u &&
                    "legacy" !== a.type &&
                    "eip2930" !== a.type
                      ? { maxPriorityFeePerGas: u }
                      : {}),
                    ...("nonceKey" in f && void 0 !== f.nonceKey
                      ? { nonceKey: f.nonceKey }
                      : {}),
                    ...("keyAuthorization" in f &&
                    void 0 !== f.keyAuthorization &&
                    null !== f.keyAuthorization &&
                    !("keyAuthorization" in a)
                      ? { keyAuthorization: f.keyAuthorization }
                      : {}),
                    ...("feePayerSignature" in f &&
                    void 0 !== f.feePayerSignature &&
                    null !== f.feePayerSignature
                      ? { feePayerSignature: f.feePayerSignature }
                      : {}),
                    ...(b ? { feeToken: h } : {}),
                    ...(t.capabilities
                      ? { _capabilities: t.capabilities }
                      : {}),
                  }
                );
              })
              .catch((t) => {
                if ("TransactionExecutionError" !== t.name) return a;
                if (
                  t.walk?.((e) => e instanceof e2.FeePayerNonceMismatchError) ||
                  t.walk?.((e) => "ExecutionRevertedError" === e.name)
                )
                  throw t;
                return (
                  t.walk?.(
                    (e) =>
                      "MethodNotFoundRpcError" === e.name ||
                      "MethodNotSupportedRpcError" === e.name ||
                      e.message?.includes(
                        "eth_fillTransaction is not available"
                      )
                  ) && tT.set(e.uid, !1),
                  a
                );
              })
          : a;
      h ??= b.nonce;
      let {
        blobs: g,
        gas: y,
        kzg: w,
        type: v,
      } = (a = {
        ...b,
        ...(f ? { from: f?.address } : {}),
        ...(void 0 !== h ? { nonce: h } : {}),
      });
      async function x() {
        return n || (n = await k(e, tl, "getBlock")({ blockTag: "latest" }));
      }
      if (
        (u?.fn &&
          u.runAt?.includes("beforeFillParameters") &&
          (a = await u.fn(
            { ...a, chain: s },
            { client: e, phase: "beforeFillParameters" }
          )),
        l.includes("nonce") &&
          void 0 === h &&
          f &&
          !c &&
          (a.nonce = await k(
            e,
            tm,
            "getTransactionCount"
          )({ address: f.address, blockTag: "pending" })),
        (l.includes("blobVersionedHashes") || l.includes("sidecars")) && g && w)
      ) {
        let e = tg({ blobs: g, kzg: w });
        if (l.includes("blobVersionedHashes")) {
          let t = (function (e) {
            let { commitments: t, version: r } = e,
              n = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
              a = [];
            for (let e of t)
              a.push(
                (function (e) {
                  let { commitment: t, version: r = 1 } = e,
                    n = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
                    a = tv(
                      (0, P.isHex)(t, { strict: !1 }) ? (0, E.toBytes)(t) : t
                    );
                  return (
                    a.set([r], 0), "bytes" === n ? a : (0, m.bytesToHex)(a)
                  );
                })({ commitment: e, to: n, version: r })
              );
            return a;
          })({ commitments: e, to: "hex" });
          a.blobVersionedHashes = t;
        }
        if (l.includes("sidecars")) {
          let t = ty({ blobs: g, commitments: e, kzg: w }),
            r = (function (e) {
              let { data: t, kzg: r, to: n } = e,
                a =
                  e.blobs ??
                  (function (e) {
                    let t =
                        e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
                      r =
                        "string" == typeof e.data
                          ? (0, E.hexToBytes)(e.data)
                          : e.data,
                      n = (0, p.size)(r);
                    if (!n) throw new tB();
                    if (n > 761855) throw new tE({ maxSize: 761855, size: n });
                    let a = [],
                      i = !0,
                      o = 0;
                    for (; i; ) {
                      let e = (0, eX.createCursor)(new Uint8Array(131072)),
                        t = 0;
                      for (; t < 4096; ) {
                        let n = r.slice(o, o + 31);
                        if ((e.pushByte(0), e.pushBytes(n), n.length < 31)) {
                          e.pushByte(128), (i = !1);
                          break;
                        }
                        t++, (o += 31);
                      }
                      a.push(e);
                    }
                    return "bytes" === t
                      ? a.map((e) => e.bytes)
                      : a.map((e) => (0, m.bytesToHex)(e.bytes));
                  })({ data: t, to: n }),
                i = e.commitments ?? tg({ blobs: a, kzg: r, to: n }),
                o = e.proofs ?? ty({ blobs: a, commitments: i, kzg: r, to: n }),
                s = [];
              for (let e = 0; e < a.length; e++)
                s.push({ blob: a[e], commitment: i[e], proof: o[e] });
              return s;
            })({ blobs: g, commitments: e, proofs: t, to: "hex" });
          a.sidecars = r;
        }
      }
      if (
        (l.includes("chainId") && (a.chainId = await d()),
        (l.includes("fees") || l.includes("type")) && void 0 === v)
      )
        try {
          a.type = (function (e) {
            if (e.type) return e.type;
            if (void 0 !== e.authorizationList) return "eip7702";
            if (
              void 0 !== e.blobs ||
              void 0 !== e.blobVersionedHashes ||
              void 0 !== e.maxFeePerBlobGas ||
              void 0 !== e.sidecars
            )
              return "eip4844";
            if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas)
              return "eip1559";
            if (void 0 !== e.gasPrice)
              return void 0 !== e.accessList ? "eip2930" : "legacy";
            throw new e2.InvalidSerializableTransactionError({
              transaction: e,
            });
          })(a);
        } catch {
          let t = tk.get(e.uid);
          if (void 0 === t) {
            let r = await x();
            (t = "bigint" == typeof r?.baseFeePerGas), tk.set(e.uid, t);
          }
          a.type = t ? "eip1559" : "legacy";
        }
      if (l.includes("fees"))
        if ("legacy" !== a.type && "eip2930" !== a.type) {
          if (void 0 === a.maxFeePerGas || void 0 === a.maxPriorityFeePerGas) {
            let t = await x(),
              { maxFeePerGas: r, maxPriorityFeePerGas: n } = await tp(e, {
                block: t,
                chain: s,
                request: a,
              });
            if (
              void 0 === a.maxPriorityFeePerGas &&
              a.maxFeePerGas &&
              a.maxFeePerGas < n
            )
              throw new tr({ maxPriorityFeePerGas: n });
            (a.maxPriorityFeePerGas = n), (a.maxFeePerGas = r);
          }
        } else {
          if (void 0 !== a.maxFeePerGas || void 0 !== a.maxPriorityFeePerGas)
            throw new tt();
          if (void 0 === a.gasPrice) {
            let t = await x(),
              { gasPrice: r } = await tp(e, {
                block: t,
                chain: s,
                request: a,
                type: "legacy",
              });
            a.gasPrice = r;
          }
        }
      return (
        l.includes("gas") &&
          void 0 === y &&
          (a.gas = await k(
            e,
            tS,
            "estimateGas"
          )({
            ...a,
            account: f,
            prepare: f?.type === "local" ? [] : ["blobVersionedHashes"],
          })),
        u?.fn &&
          u.runAt?.includes("afterFillParameters") &&
          (a = await u.fn(
            { ...a, chain: s },
            { client: e, phase: "afterFillParameters" }
          )),
        (0, eU.assertRequest)(a),
        delete a.parameters,
        a
      );
    }
    async function tS(e, t) {
      let { account: r = e.account, prepare: n = !0 } = t,
        a = r ? (0, i.parseAccount)(r) : void 0,
        o = Array.isArray(n)
          ? n
          : a?.type !== "local"
          ? ["blobVersionedHashes"]
          : void 0;
      try {
        let r = await (async () =>
            t.to
              ? t.to
              : t.authorizationList && t.authorizationList.length > 0
              ? await e0({ authorization: t.authorizationList[0] }).catch(
                  () => {
                    throw new g.BaseError(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  }
                )
              : void 0)(),
          {
            accessList: i,
            authorizationList: s,
            blobs: c,
            blobVersionedHashes: l,
            blockNumber: u,
            blockTag: d,
            data: f,
            gas: h,
            gasPrice: p,
            maxFeePerBlobGas: b,
            maxFeePerGas: y,
            maxPriorityFeePerGas: w,
            nonce: v,
            value: x,
            stateOverride: E,
            ...B
          } = n ? await tN(e, { ...t, parameters: o, to: r }) : t;
        if (h && t.gas !== h) return h;
        let P = ("bigint" == typeof u ? (0, m.numberToHex)(u) : void 0) || d,
          A = (0, e7.serializeStateOverride)(E);
        (0, eU.assertRequest)(t);
        let R = e.chain?.formatters?.transactionRequest?.format,
          I = (R || eO.formatTransactionRequest)(
            {
              ...(0, eF.extract)(B, { format: R }),
              account: a,
              accessList: i,
              authorizationList: s,
              blobs: c,
              blobVersionedHashes: l,
              data: f,
              gasPrice: p,
              maxFeePerBlobGas: b,
              maxFeePerGas: y,
              maxPriorityFeePerGas: w,
              nonce: v,
              to: r,
              value: x,
            },
            "estimateGas"
          );
        return BigInt(
          await e.request({
            method: "eth_estimateGas",
            params: A
              ? [I, P ?? e.experimental_blockTag ?? "latest", A]
              : P
              ? [I, P]
              : [I],
          })
        );
      } catch (r) {
        throw (function (e, { docsPath: t, ...r }) {
          let n;
          return new e8(
            (n = (0, e4.getNodeError)(e, r)) instanceof e3.UnknownNodeError
              ? e
              : n,
            { docsPath: t, ...r }
          );
        })(r, { ...t, account: a, chain: e.chain });
      }
    }
    async function tC(e, t) {
      let {
          abi: r,
          address: n,
          args: a,
          functionName: o,
          dataSuffix: s = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          ...c
        } = t,
        l = (0, d.encodeFunctionData)({ abi: r, args: a, functionName: o });
      try {
        return await k(
          e,
          tS,
          "estimateGas"
        )({ data: `${l}${s ? s.replace("0x", "") : ""}`, to: n, ...c });
      } catch (t) {
        let e = c.account ? (0, i.parseAccount)(c.account) : void 0;
        throw eo(t, {
          abi: r,
          address: n,
          args: a,
          docsPath: "/docs/contract/estimateContractGas",
          functionName: o,
          sender: e?.address,
        });
      }
    }
    async function tF(
      e,
      {
        address: t,
        blockHash: r,
        blockNumber: n,
        blockTag: a = e.experimental_blockTag ?? "latest",
        requireCanonical: i,
      }
    ) {
      let o = (0, tb.formatBlockParameter)({
        blockHash: r,
        blockNumber: n,
        blockTag: a,
        requireCanonical: i,
      });
      if (e.batch?.multicall && e.chain?.contracts?.multicall3) {
        let o = e.chain.contracts.multicall3.address,
          s = (0, d.encodeFunctionData)({
            abi: l.multicall3Abi,
            functionName: "getEthBalance",
            args: [t],
          }),
          { data: c } = await k(
            e,
            es.call,
            "call"
          )({
            to: o,
            data: s,
            blockHash: r,
            blockNumber: n,
            blockTag: a,
            requireCanonical: i,
          });
        return (0, u.decodeFunctionResult)({
          abi: l.multicall3Abi,
          functionName: "getEthBalance",
          args: [t],
          data: c || "0x",
        });
      }
      return BigInt(
        await e.request({ method: "eth_getBalance", params: [t, o] })
      );
    }
    async function tO(e) {
      return BigInt(await e.request({ method: "eth_blobBaseFee" }));
    }
    e.s(["estimateContractGas", 0, tC], 69121),
      e.s(["getBalance", 0, tF], 53077),
      e.s(["getBlobBaseFee", 0, tO], 67901);
    let tU = new Map(),
      tq = new Map();
    async function tL(e, { cacheKey: t, cacheTime: r = 1 / 0 }) {
      let n,
        a,
        i,
        o =
          ((a = (n = (e, t) => ({
            clear: () => t.delete(e),
            get: () => t.get(e),
            set: (r) => t.set(e, r),
          }))(t, tU)),
          {
            clear: () => {
              a.clear(), i.clear();
            },
            promise: a,
            response: (i = n(t, tq)),
          }),
        s = o.response.get();
      if (s && r > 0 && Date.now() - s.created.getTime() < r) return s.data;
      let c = o.promise.get();
      c || ((c = e()), o.promise.set(c));
      try {
        let e = await c;
        return o.response.set({ created: new Date(), data: e }), e;
      } finally {
        o.promise.clear();
      }
    }
    async function tz(e, { cacheTime: t = e.cacheTime } = {}) {
      let r;
      return BigInt(
        await tL(() => e.request({ method: "eth_blockNumber" }), {
          cacheKey: ((r = e.uid), `blockNumber.${r}`),
          cacheTime: t,
        })
      );
    }
    function tM(e, { args: t, eventName: r } = {}) {
      return {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        blockTimestamp: e.blockTimestamp
          ? BigInt(e.blockTimestamp)
          : null === e.blockTimestamp
          ? null
          : void 0,
        logIndex: e.logIndex ? Number(e.logIndex) : null,
        transactionHash: e.transactionHash ? e.transactionHash : null,
        transactionIndex: e.transactionIndex
          ? Number(e.transactionIndex)
          : null,
        ...(r ? { args: t, eventName: r } : {}),
      };
    }
    e.s(["getBlockNumber", 0, tz], 12371);
    let tH = { "0x0": "reverted", "0x1": "success" };
    function t$(e, t) {
      let r = {
        ...e,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        contractAddress: e.contractAddress ? e.contractAddress : null,
        cumulativeGasUsed: e.cumulativeGasUsed
          ? BigInt(e.cumulativeGasUsed)
          : null,
        effectiveGasPrice: e.effectiveGasPrice
          ? BigInt(e.effectiveGasPrice)
          : null,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
        logs: e.logs ? e.logs.map((e) => tM(e)) : null,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex
          ? (0, tn.hexToNumber)(e.transactionIndex)
          : null,
        status: e.status ? tH[e.status] : null,
        type: e.type ? to[e.type] || e.type : null,
      };
      return (
        e.blobGasPrice && (r.blobGasPrice = BigInt(e.blobGasPrice)),
        e.blobGasUsed && (r.blobGasUsed = BigInt(e.blobGasUsed)),
        r
      );
    }
    async function tD(
      e,
      {
        blockHash: t,
        blockNumber: r,
        blockTag: n = e.experimental_blockTag ?? "latest",
      } = {}
    ) {
      let a = void 0 !== r ? (0, m.numberToHex)(r) : void 0,
        i = await e.request(
          { method: "eth_getBlockReceipts", params: [t || a || n] },
          { dedupe: !!(t || a) }
        );
      if (!i) throw new ti({ blockHash: t, blockNumber: r });
      let o = e.chain?.formatters?.transactionReceipt?.format || t$;
      return i.map((e) => o(e, "getBlockReceipts"));
    }
    async function tj(
      e,
      { blockHash: t, blockNumber: r, blockTag: n = "latest" } = {}
    ) {
      let a,
        i = void 0 !== r ? (0, m.numberToHex)(r) : void 0;
      return (
        (a = t
          ? await e.request(
              { method: "eth_getBlockTransactionCountByHash", params: [t] },
              { dedupe: !0 }
            )
          : await e.request(
              {
                method: "eth_getBlockTransactionCountByNumber",
                params: [i || n],
              },
              { dedupe: !!i }
            )),
        (0, tn.hexToNumber)(a)
      );
    }
    async function tG(
      e,
      {
        address: t,
        blockHash: r,
        blockNumber: n,
        blockTag: a = "latest",
        requireCanonical: i,
      }
    ) {
      let o = (0, tb.formatBlockParameter)({
          blockHash: r,
          blockNumber: n,
          blockTag: a,
          requireCanonical: i,
        }),
        s = await e.request(
          { method: "eth_getCode", params: [t, o] },
          { dedupe: "bigint" == typeof n || void 0 !== r }
        );
      if ("0x" !== s) return s;
    }
    e.s(["formatTransactionReceipt", 0, t$], 39080),
      e.s(["getBlockReceipts", 0, tD], 12477),
      e.s(["getBlockTransactionCount", 0, tj], 28843),
      e.s(["getCode", 0, tG], 28804);
    var t_ = e.i(6685),
      tV = e.i(93429),
      tW = e.i(49311);
    let tZ = "/docs/contract/decodeEventLog";
    function tK(e) {
      let { abi: t, data: r, strict: n, topics: a } = e,
        i = n ?? !0,
        [o, ...s] = a;
      if (!o) throw new T.AbiEventSignatureEmptyTopicsError({ docsPath: tZ });
      let c = t.find(
        (e) =>
          "event" === e.type &&
          o === (0, e$.toEventSelector)((0, ej.formatAbiItem)(e))
      );
      if (!(c && "name" in c) || "event" !== c.type)
        throw new T.AbiEventSignatureNotFoundError(o, { docsPath: tZ });
      let { name: l, inputs: u } = c,
        d = u?.some((e) => !("name" in e && e.name)),
        f = d ? [] : {},
        h = u
          .map((e, t) => [e, t])
          .filter(([e]) => "indexed" in e && e.indexed),
        b = [];
      for (let e = 0; e < h.length; e++) {
        let [t, r] = h[e],
          n = s[e];
        if (!n) {
          if (i) throw new T.DecodeLogTopicsMismatch({ abiItem: c, param: t });
          b.push([t, r]);
          continue;
        }
        f[d ? r : t.name || r] = (function ({ param: e, value: t }) {
          return "string" === e.type ||
            "bytes" === e.type ||
            "tuple" === e.type ||
            e.type.match(/^(.*)\[(\d+)?\]$/)
            ? t
            : ((0, tW.decodeAbiParameters)([e], t) || [])[0];
        })({ param: t, value: n });
      }
      let m = u.filter((e) => !("indexed" in e && e.indexed)),
        g = i ? m : [...b.map(([e]) => e), ...m];
      if (g.length > 0) {
        if (r && "0x" !== r)
          try {
            let e = (0, tW.decodeAbiParameters)(g, r);
            if (e) {
              let t = 0;
              if (!i) for (let [r, n] of b) f[d ? n : r.name || n] = e[t++];
              if (d)
                for (let r = 0; r < u.length; r++)
                  void 0 === f[r] && t < e.length && (f[r] = e[t++]);
              else for (let r = 0; r < m.length; r++) f[m[r].name] = e[t++];
            }
          } catch (e) {
            if (i) {
              if (
                e instanceof T.AbiDecodingDataSizeTooSmallError ||
                e instanceof tV.PositionOutOfBoundsError
              )
                throw new T.DecodeLogDataMismatch({
                  abiItem: c,
                  data: r,
                  params: g,
                  size: (0, p.size)(r),
                });
              throw e;
            }
          }
        else if (i)
          throw new T.DecodeLogDataMismatch({
            abiItem: c,
            data: "0x",
            params: g,
            size: 0,
          });
      }
      return { eventName: l, args: Object.values(f).length > 0 ? f : void 0 };
    }
    function tY(e) {
      let { abi: t, args: r, logs: n, strict: a = !0 } = e,
        i = (() => {
          if (e.eventName)
            return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
        })(),
        o = t
          .filter((e) => "event" === e.type)
          .map((e) => ({ abi: e, selector: (0, e$.toEventSelector)(e) }));
      return n
        .map((e) => {
          let t,
            n,
            s = "string" == typeof e.blockNumber ? tM(e) : e,
            c = o.filter((e) => s.topics[0] === e.selector);
          if (0 === c.length) return null;
          for (let e of c)
            try {
              (t = tK({ ...s, abi: [e.abi], strict: !0 })), (n = e);
              break;
            } catch {}
          if (!t && !a) {
            n = c[0];
            try {
              t = tK({
                data: s.data,
                topics: s.topics,
                abi: [n.abi],
                strict: !1,
              });
            } catch {
              let e = n.abi.inputs?.some((e) => !("name" in e && e.name));
              return { ...s, args: e ? [] : {}, eventName: n.abi.name };
            }
          }
          return t &&
            n &&
            (!i || i.includes(t.eventName)) &&
            (function (e) {
              let { args: t, inputs: r, matchArgs: n } = e;
              if (!n) return !0;
              if (!t) return !1;
              function a(e, t, r) {
                try {
                  if ("address" === e.type) return (0, t_.isAddressEqual)(t, r);
                  if ("string" === e.type || "bytes" === e.type)
                    return (0, B.keccak256)((0, E.toBytes)(t)) === r;
                  return t === r;
                } catch {
                  return !1;
                }
              }
              return Array.isArray(t) && Array.isArray(n)
                ? n.every((e, n) => {
                    if (null == e) return !0;
                    let i = r[n];
                    return (
                      !!i &&
                      (Array.isArray(e) ? e : [e]).some((e) => a(i, e, t[n]))
                    );
                  })
                : !(
                    "object" != typeof t ||
                    Array.isArray(t) ||
                    "object" != typeof n ||
                    Array.isArray(n)
                  ) &&
                    Object.entries(n).every(([e, n]) => {
                      if (null == n) return !0;
                      let i = r.find((t) => t.name === e);
                      return (
                        !!i &&
                        (Array.isArray(n) ? n : [n]).some((r) => a(i, r, t[e]))
                      );
                    });
            })({ args: t.args, inputs: n.abi.inputs, matchArgs: r })
            ? { ...t, ...s }
            : null;
        })
        .filter(Boolean);
    }
    async function tJ(
      e,
      {
        address: t,
        blockHash: r,
        fromBlock: n,
        toBlock: a,
        event: i,
        events: o,
        args: s,
        strict: c,
      } = {}
    ) {
      let l = o ?? (i ? [i] : void 0),
        u = [];
      l &&
        ((u = [
          l.flatMap((e) =>
            eV({ abi: [e], eventName: e.name, args: o ? void 0 : s })
          ),
        ]),
        i && (u = u[0]));
      let d = (
        r
          ? await e.request({
              method: "eth_getLogs",
              params: [{ address: t, topics: u, blockHash: r }],
            })
          : await e.request({
              method: "eth_getLogs",
              params: [
                {
                  address: t,
                  topics: u,
                  fromBlock: "bigint" == typeof n ? (0, m.numberToHex)(n) : n,
                  toBlock: "bigint" == typeof a ? (0, m.numberToHex)(a) : a,
                },
              ],
            })
      ).map((e) => tM(e));
      return l ? tY({ abi: l, args: s, logs: d, strict: c ?? !1 }) : d;
    }
    async function tX(e, t) {
      let {
          abi: r,
          address: n,
          args: a,
          blockHash: i,
          eventName: o,
          fromBlock: s,
          toBlock: c,
          strict: l,
        } = t,
        u = o ? (0, eG.getAbiItem)({ abi: r, name: o }) : void 0,
        d = u ? void 0 : r.filter((e) => "event" === e.type);
      return k(
        e,
        tJ,
        "getLogs"
      )({
        address: n,
        args: a,
        blockHash: i,
        event: u,
        events: d,
        fromBlock: s,
        toBlock: c,
        strict: l,
      });
    }
    e.s(["getLogs", 0, tJ], 2676), e.s(["getContractEvents", 0, tX], 63700);
    var tQ = e.i(90063);
    async function t0(
      e,
      { address: t, blockNumber: r, blockTag: n = "latest" }
    ) {
      let a = await tG(e, {
        address: t,
        ...(void 0 !== r ? { blockNumber: r } : { blockTag: n }),
      });
      if (a && 23 === (0, p.size)(a) && a.startsWith("0xef0100"))
        return (0, f.getAddress)((0, tQ.slice)(a, 3, 23));
    }
    e.s(["getDelegation", 0, t0], 5158);
    var t1 = g;
    class t6 extends t1.BaseError {
      constructor({ address: e }) {
        super(`No EIP-712 domain found on contract "${e}".`, {
          metaMessages: [
            "Ensure that:",
            `- The contract is deployed at the address "${e}".`,
            "- `eip712Domain()` function exists on the contract.",
            "- `eip712Domain()` function matches signature to ERC-5267 specification.",
          ],
          name: "Eip712DomainNotFoundError",
        });
      }
    }
    async function t5(e, t) {
      let { address: r, factory: n, factoryData: a } = t;
      try {
        let [t, i, o, s, c, l, u] = await k(
          e,
          ec,
          "readContract"
        )({
          abi: t2,
          address: r,
          functionName: "eip712Domain",
          factory: n,
          factoryData: a,
        });
        return {
          domain: {
            name: i,
            version: o,
            chainId: Number(s),
            verifyingContract: c,
            salt: l,
          },
          extensions: u,
          fields: t,
        };
      } catch (e) {
        if (
          "ContractFunctionExecutionError" === e.name &&
          "ContractFunctionZeroDataError" === e.cause.name
        )
          throw new t6({ address: r });
        throw e;
      }
    }
    let t2 = [
      {
        inputs: [],
        name: "eip712Domain",
        outputs: [
          { name: "fields", type: "bytes1" },
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "chainId", type: "uint256" },
          { name: "verifyingContract", type: "address" },
          { name: "salt", type: "bytes32" },
          { name: "extensions", type: "uint256[]" },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];
    async function t8(
      e,
      {
        blockCount: t,
        blockNumber: r,
        blockTag: n = "latest",
        rewardPercentiles: a,
      }
    ) {
      var i;
      let o = "bigint" == typeof r ? (0, m.numberToHex)(r) : void 0;
      return {
        baseFeePerGas: (i = await e.request(
          {
            method: "eth_feeHistory",
            params: [(0, m.numberToHex)(t), o || n, a],
          },
          { dedupe: !!o }
        )).baseFeePerGas.map((e) => BigInt(e)),
        gasUsedRatio: i.gasUsedRatio,
        oldestBlock: BigInt(i.oldestBlock),
        reward: i.reward?.map((e) => e.map((e) => BigInt(e))),
      };
    }
    async function t3(e, { filter: t }) {
      let r = "strict" in t && t.strict,
        n = await t.request({ method: "eth_getFilterChanges", params: [t.id] });
      if ("string" == typeof n[0]) return n;
      let a = n.map((e) => tM(e));
      return "abi" in t && t.abi ? tY({ abi: t.abi, logs: a, strict: r }) : a;
    }
    async function t4(e, { filter: t }) {
      let r = t.strict ?? !1,
        n = (
          await t.request({ method: "eth_getFilterLogs", params: [t.id] })
        ).map((e) => tM(e));
      return t.abi ? tY({ abi: t.abi, logs: n, strict: r }) : n;
    }
    async function t7(
      e,
      {
        address: t,
        blockHash: r,
        blockNumber: n,
        blockTag: a = "latest",
        requireCanonical: i,
        storageKeys: o,
      }
    ) {
      let s = (0, tb.formatBlockParameter)({
        blockHash: r,
        blockNumber: n,
        blockTag: a,
        requireCanonical: i,
      });
      var c = await e.request({ method: "eth_getProof", params: [t, o, s] });
      return {
        ...c,
        balance: c.balance ? BigInt(c.balance) : void 0,
        nonce: c.nonce ? (0, tn.hexToNumber)(c.nonce) : void 0,
        storageProof: c.storageProof
          ? c.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
          : void 0,
      };
    }
    async function t9(e, { hash: t }) {
      let r = await e.request(
        { method: "eth_getRawTransactionByHash", params: [t] },
        { dedupe: !0 }
      );
      if (!r) throw new e2.TransactionNotFoundError({ hash: t });
      return r;
    }
    async function re(
      e,
      {
        address: t,
        blockHash: r,
        blockNumber: n,
        blockTag: a = "latest",
        requireCanonical: i,
        slot: o,
      }
    ) {
      let s = (0, tb.formatBlockParameter)({
        blockHash: r,
        blockNumber: n,
        blockTag: a,
        requireCanonical: i,
      });
      return await e.request({ method: "eth_getStorageAt", params: [t, o, s] });
    }
    async function rt(
      e,
      {
        blockHash: t,
        blockNumber: r,
        blockTag: n,
        hash: a,
        index: i,
        sender: o,
        nonce: s,
      }
    ) {
      let c = n || "latest",
        l = void 0 !== r ? (0, m.numberToHex)(r) : void 0,
        u = null;
      if (
        (a
          ? (u = await e.request(
              { method: "eth_getTransactionByHash", params: [a] },
              { dedupe: !0 }
            ))
          : t
          ? (u = await e.request(
              {
                method: "eth_getTransactionByBlockHashAndIndex",
                params: [t, (0, m.numberToHex)(i)],
              },
              { dedupe: !0 }
            ))
          : (l || c) && "number" == typeof i
          ? (u = await e.request(
              {
                method: "eth_getTransactionByBlockNumberAndIndex",
                params: [l || c, (0, m.numberToHex)(i)],
              },
              { dedupe: !!l }
            ))
          : o &&
            "number" == typeof s &&
            (u = await e.request(
              {
                method: "eth_getTransactionBySenderAndNonce",
                params: [o, (0, m.numberToHex)(s)],
              },
              { dedupe: !0 }
            )),
        !u)
      )
        throw new e2.TransactionNotFoundError({
          blockHash: t,
          blockNumber: r,
          blockTag: c,
          hash: a,
          index: i,
        });
      return (e.chain?.formatters?.transaction?.format || ts)(
        u,
        "getTransaction"
      );
    }
    async function rr(e, { hash: t, transactionReceipt: r }) {
      let [n, a] = await Promise.all([
          k(e, tz, "getBlockNumber")({}),
          t ? k(e, rt, "getTransaction")({ hash: t }) : void 0,
        ]),
        i = r?.blockNumber || a?.blockNumber;
      return i ? n - i + 1n : 0n;
    }
    async function rn(e, { hash: t }) {
      let r = await e.request(
        { method: "eth_getTransactionReceipt", params: [t] },
        { dedupe: !0 }
      );
      if (!r) throw new e2.TransactionReceiptNotFoundError({ hash: t });
      return (e.chain?.formatters?.transactionReceipt?.format || t$)(
        r,
        "getTransactionReceipt"
      );
    }
    e.s(["getEip712Domain", 0, t5], 97178),
      e.s(["getFeeHistory", 0, t8], 66416),
      e.s(["getFilterChanges", 0, t3], 9050),
      e.s(["getFilterLogs", 0, t4], 37463),
      e.s(["getProof", 0, t7], 79578),
      e.s(["getRawTransaction", 0, t9], 44993),
      e.s(["getStorageAt", 0, re], 74148),
      e.s(["getTransaction", 0, rt], 79917),
      e.s(["getTransactionConfirmations", 0, rr], 89228),
      e.s(["getTransactionReceipt", 0, rn], 68307);
    var ra = e.i(72503),
      ri = e.i(71706),
      ro = e.i(34888);
    async function rs(e, t) {
      let {
          account: r,
          authorizationList: n,
          allowFailure: a = !0,
          blockHash: i,
          blockNumber: o,
          blockOverrides: s,
          blockTag: c,
          requireCanonical: f,
          stateOverride: p,
        } = t,
        b = t.contracts,
        m = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
        w = t.batchSize ?? m.batchSize ?? 1024,
        v = t.deployless ?? m.deployless ?? !1,
        x = (() => {
          if (t.multicallAddress) return t.multicallAddress;
          if (v) return null;
          if (e.chain)
            return (0, h.getChainContractAddress)({
              blockNumber: o,
              chain: e.chain,
              contract: "multicall3",
            });
          throw Error(
            "client chain not configured. multicallAddress is required."
          );
        })(),
        E = [[]],
        B = 0,
        P = 0;
      for (let e = 0; e < b.length; e++) {
        let { abi: t, address: n, args: i, functionName: o } = b[e];
        try {
          let e = (0, d.encodeFunctionData)({
            abi: t,
            args: i,
            functionName: o,
          });
          (P += (e.length - 2) / 2),
            w > 0 &&
              P > w &&
              E[B].length > 0 &&
              (B++, (P = (e.length - 2) / 2), (E[B] = [])),
            (E[B] = [...E[B], { allowFailure: !0, callData: e, target: n }]);
        } catch (s) {
          let e = eo(s, {
            abi: t,
            address: n,
            args: i,
            docsPath: "/docs/contract/multicall",
            functionName: o,
            sender: r,
          });
          if (!a) throw e;
          E[B] = [...E[B], { allowFailure: !0, callData: "0x", target: n }];
        }
      }
      let A = !!e.batch?.multicall,
        R = A ? E.flatMap((e) => e.map((e) => [e])) : E,
        I = await Promise.allSettled(
          R.map((t) =>
            A
              ? rc(e, {
                  account: r,
                  authorizationList: n,
                  batchSize: w,
                  blockHash: i,
                  blockNumber: o,
                  blockOverrides: s,
                  blockTag: c,
                  call: t[0],
                  multicallAddress: x,
                  requireCanonical: f,
                  stateOverride: p,
                }).then((e) => [e])
              : k(
                  e,
                  ec,
                  "readContract"
                )({
                  ...(null === x
                    ? { code: ra.multicall3Bytecode }
                    : { address: x }),
                  abi: l.multicall3Abi,
                  account: r,
                  args: [t],
                  authorizationList: n,
                  blockHash: i,
                  blockNumber: o,
                  blockOverrides: s,
                  blockTag: c,
                  functionName: "aggregate3",
                  requireCanonical: f,
                  stateOverride: p,
                })
          )
        ),
        N = [];
      for (let e = 0; e < I.length; e++) {
        let t = I[e];
        if ("rejected" === t.status) {
          if (!a) throw t.reason;
          for (let r = 0; r < R[e].length; r++)
            N.push({ status: "failure", error: t.reason, result: void 0 });
          continue;
        }
        let r = t.value;
        for (let t = 0; t < r.length; t++) {
          let { returnData: n, success: i } = r[t],
            { callData: o } = R[e][t],
            { abi: s, address: c, functionName: l, args: d } = b[N.length];
          try {
            if ("0x" === o) throw new T.AbiDecodingZeroDataError();
            if (!i) throw new y.RawContractError({ data: n });
            let e = (0, u.decodeFunctionResult)({
              abi: s,
              args: d,
              data: n,
              functionName: l,
            });
            N.push(a ? { result: e, status: "success" } : e);
          } catch (t) {
            let e = eo(t, {
              abi: s,
              address: c,
              args: d,
              docsPath: "/docs/contract/multicall",
              functionName: l,
            });
            if (!a) throw e;
            N.push({ error: e, result: void 0, status: "failure" });
          }
        }
      }
      if (N.length !== b.length)
        throw new g.BaseError("multicall results mismatch");
      return N;
    }
    async function rc(e, t) {
      let { batchSize: r, call: n, multicallAddress: a, ...i } = t,
        { wait: o = 0 } =
          "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
        { schedule: s } = (0, ri.createBatchScheduler)({
          id: (0, ro.stringify)(["multicall", e.uid, r, a, i]),
          wait: o,
          shouldSplitBatch: (e) =>
            0 !== r &&
            e.reduce((e, { callData: t }) => e + (t.length - 2) / 2, 0) > r,
          fn: (t) =>
            k(
              e,
              ec,
              "readContract"
            )({
              ...(null === a
                ? { code: ra.multicall3Bytecode }
                : { address: a }),
              ...i,
              abi: l.multicall3Abi,
              args: [t],
              functionName: "aggregate3",
            }),
        }),
        [c] = await s(n);
      return c;
    }
    e.s(["multicall", 0, rs], 4558);
    var rl = e.i(44318);
    async function ru(e, t) {
      let {
        blockNumber: r,
        blockTag: n = e.experimental_blockTag ?? "latest",
        blocks: a,
        returnFullTransactions: o,
        traceTransfers: s,
        validation: c,
      } = t;
      try {
        let t = [];
        for (let e of a) {
          let r = e.blockOverrides ? rl.toRpc(e.blockOverrides) : void 0,
            n = e.calls.map((e) => {
              let t = e.account ? (0, i.parseAccount)(e.account) : void 0,
                r = e.abi ? (0, d.encodeFunctionData)(e) : e.data,
                n = {
                  ...e,
                  account: t,
                  data: e.dataSuffix
                    ? (0, x.concat)([r || "0x", e.dataSuffix])
                    : r,
                  from: e.from ?? t?.address,
                };
              return (
                (0, eU.assertRequest)(n), (0, eO.formatTransactionRequest)(n)
              );
            }),
            a = e.stateOverrides
              ? (0, e7.serializeStateOverride)(e.stateOverrides)
              : void 0;
          t.push({ blockOverrides: r, calls: n, stateOverrides: a });
        }
        let l = "bigint" == typeof r ? (0, m.numberToHex)(r) : void 0;
        return (
          await e.request({
            method: "eth_simulateV1",
            params: [
              {
                blockStateCalls: t,
                returnFullTransactions: o,
                traceTransfers: s,
                validation: c,
              },
              l || n,
            ],
          })
        ).map((e, t) => ({
          ...tc(e),
          calls: e.calls.map((e, r) => {
            let { abi: n, args: i, functionName: o, to: s } = a[t].calls[r],
              c = e.error?.data ?? e.returnData,
              l = BigInt(e.gasUsed),
              d = e.logs?.map((e) => tM(e)),
              f = "0x1" === e.status ? "success" : "failure",
              h =
                n && "success" === f && "0x" !== c
                  ? (0, u.decodeFunctionResult)({
                      abi: n,
                      data: c,
                      functionName: o,
                    })
                  : null,
              p = (() => {
                let e;
                if (
                  "success" !== f &&
                  ("0x" === c
                    ? (e = new T.AbiDecodingZeroDataError())
                    : c && (e = new y.RawContractError({ data: c })),
                  e)
                )
                  return eo(e, {
                    abi: n ?? [],
                    address: s ?? "0x",
                    args: i,
                    functionName: o ?? "<unknown>",
                  });
              })();
            return {
              data: c,
              gasUsed: l,
              logs: d,
              status: f,
              ...("success" === f ? { result: h } : { error: p }),
            };
          }),
        }));
      } catch (t) {
        let e = (0, e4.getNodeError)(t, {});
        if (e instanceof e3.UnknownNodeError) throw t;
        throw e;
      }
    }
    e.s(["simulateBlocks", 0, ru], 48331);
    var rd = e.i(66564),
      rf = e.i(15373),
      rh = e.i(61460),
      rp = e.i(2094),
      rb = e.i(88776),
      rm = e.i(2376);
    let rg = BigInt(0x100000000 - 1),
      ry = BigInt(32);
    function rw(e, t = !1) {
      let r = e.length,
        n = new Uint32Array(r),
        a = new Uint32Array(r);
      for (let i = 0; i < r; i++) {
        let { h: r, l: o } = (function (e, t = !1) {
          return t
            ? { h: Number(e & rg), l: Number((e >> ry) & rg) }
            : { h: 0 | Number((e >> ry) & rg), l: 0 | Number(e & rg) };
        })(e[i], t);
        [n[i], a[i]] = [r, o];
      }
      return [n, a];
    }
    let rv =
      "object" == typeof globalThis && "crypto" in globalThis
        ? globalThis.crypto
        : void 0;
    function rx(e) {
      if (!Number.isSafeInteger(e) || e < 0)
        throw Error("positive integer expected, got " + e);
    }
    function rE(e, ...t) {
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
    function rB(e, t = !0) {
      if (e.destroyed) throw Error("Hash instance has been destroyed");
      if (t && e.finished) throw Error("Hash#digest() has already been called");
    }
    function rP(e, t) {
      rE(e);
      let r = t.outputLen;
      if (e.length < r)
        throw Error(
          "digestInto() expects output buffer of length at least " + r
        );
    }
    function rA(...e) {
      for (let t = 0; t < e.length; t++) e[t].fill(0);
    }
    function rR(e) {
      return new DataView(e.buffer, e.byteOffset, e.byteLength);
    }
    function rI(e, t) {
      return (e << (32 - t)) | (e >>> t);
    }
    let rk =
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
    function rT(e) {
      return (
        "string" == typeof e &&
          (e = (function (e) {
            if ("string" != typeof e) throw Error("string expected");
            return new Uint8Array(new TextEncoder().encode(e));
          })(e)),
        rE(e),
        e
      );
    }
    class rN {}
    function rS(e) {
      let t = (t) => e().update(rT(t)).digest(),
        r = e();
      return (
        (t.outputLen = r.outputLen),
        (t.blockLen = r.blockLen),
        (t.create = () => e()),
        t
      );
    }
    function rC(e = 32) {
      if (rv && "function" == typeof rv.getRandomValues)
        return rv.getRandomValues(new Uint8Array(e));
      if (rv && "function" == typeof rv.randomBytes)
        return Uint8Array.from(rv.randomBytes(e));
      throw Error("crypto.getRandomValues must be defined");
    }
    let rF = BigInt(0),
      rO = BigInt(1),
      rU = BigInt(2),
      rq = BigInt(7),
      rL = BigInt(256),
      rz = BigInt(113),
      rM = [],
      rH = [],
      r$ = [];
    for (let e = 0, t = rO, r = 1, n = 0; e < 24; e++) {
      ([r, n] = [n, (2 * r + 3 * n) % 5]),
        rM.push(2 * (5 * n + r)),
        rH.push((((e + 1) * (e + 2)) / 2) % 64);
      let a = rF;
      for (let e = 0; e < 7; e++)
        (t = ((t << rO) ^ ((t >> rq) * rz)) % rL) & rU &&
          (a ^= rO << ((rO << BigInt(e)) - rO));
      r$.push(a);
    }
    let rD = rw(r$, !0),
      rj = rD[0],
      rG = rD[1],
      r_ = (e, t, r) =>
        r > 32
          ? (t << (r - 32)) | (e >>> (64 - r))
          : (e << r) | (t >>> (32 - r)),
      rV = (e, t, r) =>
        r > 32
          ? (e << (r - 32)) | (t >>> (64 - r))
          : (t << r) | (e >>> (32 - r));
    class rW extends rN {
      constructor(e, t, r, n = !1, a = 24) {
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
          (this.rounds = a),
          rx(r),
          !(0 < e && e < 200))
        )
          throw Error("only keccak-f1600 function is supported");
        (this.state = new Uint8Array(200)),
          (this.state32 = (function (e) {
            return new Uint32Array(
              e.buffer,
              e.byteOffset,
              Math.floor(e.byteLength / 4)
            );
          })(this.state));
      }
      clone() {
        return this._cloneInto();
      }
      keccak() {
        rk(this.state32),
          (function (e, t = 24) {
            let r = new Uint32Array(10);
            for (let n = 24 - t; n < 24; n++) {
              for (let t = 0; t < 10; t++)
                r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
              for (let t = 0; t < 10; t += 2) {
                let n = (t + 8) % 10,
                  a = (t + 2) % 10,
                  i = r[a],
                  o = r[a + 1],
                  s = r_(i, o, 1) ^ r[n],
                  c = rV(i, o, 1) ^ r[n + 1];
                for (let r = 0; r < 50; r += 10)
                  (e[t + r] ^= s), (e[t + r + 1] ^= c);
              }
              let t = e[2],
                a = e[3];
              for (let r = 0; r < 24; r++) {
                let n = rH[r],
                  i = r_(t, a, n),
                  o = rV(t, a, n),
                  s = rM[r];
                (t = e[s]), (a = e[s + 1]), (e[s] = i), (e[s + 1] = o);
              }
              for (let t = 0; t < 50; t += 10) {
                for (let n = 0; n < 10; n++) r[n] = e[t + n];
                for (let n = 0; n < 10; n++)
                  e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
              }
              (e[0] ^= rj[n]), (e[1] ^= rG[n]);
            }
            rA(r);
          })(this.state32, this.rounds),
          rk(this.state32),
          (this.posOut = 0),
          (this.pos = 0);
      }
      update(e) {
        rB(this), rE((e = rT(e)));
        let { blockLen: t, state: r } = this,
          n = e.length;
        for (let a = 0; a < n; ) {
          let i = Math.min(t - this.pos, n - a);
          for (let t = 0; t < i; t++) r[this.pos++] ^= e[a++];
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
        rB(this, !1), rE(e), this.finish();
        let t = this.state,
          { blockLen: r } = this;
        for (let n = 0, a = e.length; n < a; ) {
          this.posOut >= r && this.keccak();
          let i = Math.min(r - this.posOut, a - n);
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
        return rx(e), this.xofInto(new Uint8Array(e));
      }
      digestInto(e) {
        if ((rP(e, this), this.finished))
          throw Error("digest() was already called");
        return this.writeInto(e), this.destroy(), e;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        (this.destroyed = !0), rA(this.state);
      }
      _cloneInto(e) {
        let {
          blockLen: t,
          suffix: r,
          outputLen: n,
          rounds: a,
          enableXOF: i,
        } = this;
        return (
          e || (e = new rW(t, r, n, i, a)),
          e.state32.set(this.state32),
          (e.pos = this.pos),
          (e.posOut = this.posOut),
          (e.finished = this.finished),
          (e.rounds = a),
          (e.suffix = r),
          (e.outputLen = n),
          (e.enableXOF = i),
          (e.destroyed = this.destroyed),
          e
        );
      }
    }
    let rZ = rS(() => new rW(136, 1, 32));
    var rK = rm,
      rY = e.i(84251);
    function rJ(e, t) {
      if (r3(e) > t) throw new nt({ givenSize: r3(e), maxSize: t });
    }
    function rX(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function rQ(e, t = {}) {
      let { dir: r = "left" } = t,
        n = e,
        a = 0;
      for (let e = 0; e < n.length - 1; e++)
        if ("0" === n["left" === r ? e : n.length - e - 1].toString()) a++;
        else break;
      return "left" === r ? n.slice(a) : n.slice(0, n.length - a);
    }
    var r0 = e.i(92239),
      r1 = e.i(82721);
    let r6 = new TextDecoder(),
      r5 = new TextEncoder();
    function r2(e, t = {}) {
      let { size: r } = t,
        n = e;
      r && (r0.assertSize(e, r), (n = rY.padRight(e, r)));
      let a = n.slice(2);
      a.length % 2 && (a = `0${a}`);
      let i = a.length / 2,
        o = new Uint8Array(i);
      for (let e = 0, t = 0; e < i; e++) {
        let r = rX(a.charCodeAt(t++)),
          n = rX(a.charCodeAt(t++));
        if (void 0 === r || void 0 === n)
          throw new rK.BaseError(
            `Invalid byte sequence ("${a[t - 2]}${a[t - 1]}" in "${a}").`
          );
        o[e] = (r << 4) | n;
      }
      return o;
    }
    function r8(e, t = {}) {
      let { size: r } = t,
        n = r5.encode(e);
      return "number" == typeof r
        ? (rJ(n, r),
          (function (e, t = {}) {
            let { dir: r, size: n = 32 } = t;
            if (0 === n) return e;
            if (e.length > n)
              throw new nn({ size: e.length, targetSize: n, type: "Bytes" });
            let a = new Uint8Array(n);
            for (let t = 0; t < n; t++) {
              let i = "right" === r;
              a[i ? t : n - t - 1] = e[i ? t : e.length - t - 1];
            }
            return a;
          })(n, { dir: "right", size: r }))
        : n;
    }
    function r3(e) {
      return e.length;
    }
    function r4(e, t = {}) {
      let { size: r } = t;
      void 0 !== r && rJ(e, r);
      let n = rY.fromBytes(e, t);
      return rY.toNumber(n, t);
    }
    function r7(e) {
      return rQ(e, { dir: "left" });
    }
    class r9 extends rK.BaseError {
      constructor(e) {
        super(`Bytes value \`${e}\` is not a valid boolean.`, {
          metaMessages: [
            "The bytes array must contain a single byte of either a `0` or `1` value.",
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.InvalidBytesBooleanError",
          });
      }
    }
    class ne extends rK.BaseError {
      constructor(e) {
        super(
          `Value \`${
            "object" == typeof e ? r1.stringify(e) : e
          }\` of type \`${typeof e}\` is an invalid Bytes value.`,
          { metaMessages: ["Bytes values must be of type `Bytes`."] }
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.InvalidBytesTypeError",
          });
      }
    }
    class nt extends rK.BaseError {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.SizeOverflowError",
          });
      }
    }
    class nr extends rK.BaseError {
      constructor({ offset: e, position: t, size: r }) {
        super(
          `Slice ${
            "start" === t ? "starting" : "ending"
          } at offset \`${e}\` is out-of-bounds (size: \`${r}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.SliceOffsetOutOfBoundsError",
          });
      }
    }
    class nn extends rK.BaseError {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.SizeExceedsPaddingSizeError",
          });
      }
    }
    function na(e, t = {}) {
      var r;
      let { as: n = "string" == typeof e ? "Hex" : "Bytes" } = t,
        a = rZ(
          e instanceof Uint8Array
            ? e
            : "string" == typeof e
            ? r2(e)
            : (r = e) instanceof Uint8Array
            ? r
            : new Uint8Array(r)
        );
      return "Bytes" === n ? a : rY.fromBytes(a);
    }
    class ni extends Map {
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
        return (
          super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
        );
      }
      set(e, t) {
        if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
          let e = this.keys().next().value;
          e && this.delete(e);
        }
        return this;
      }
    }
    let no = { checksum: new ni(8192) }.checksum;
    var ns = rm,
      nc = rm;
    function nl(e, t = {}) {
      let { compressed: r } = t,
        { prefix: n, x: a, y: i } = e;
      if (!1 === r || ("bigint" == typeof a && "bigint" == typeof i)) {
        if (4 !== n) throw new nf({ prefix: n, cause: new np() });
        return;
      }
      if (!0 === r || ("bigint" == typeof a && void 0 === i)) {
        if (3 !== n && 2 !== n) throw new nf({ prefix: n, cause: new nh() });
        return;
      }
      throw new nd({ publicKey: e });
    }
    function nu(e) {
      if (132 !== e.length && 130 !== e.length && 68 !== e.length)
        throw new nb({ publicKey: e });
      if (130 === e.length)
        return {
          prefix: 4,
          x: BigInt(rY.slice(e, 0, 32)),
          y: BigInt(rY.slice(e, 32, 64)),
        };
      if (132 === e.length) {
        let t = Number(rY.slice(e, 0, 1));
        return {
          prefix: t,
          x: BigInt(rY.slice(e, 1, 33)),
          y: BigInt(rY.slice(e, 33, 65)),
        };
      }
      return {
        prefix: Number(rY.slice(e, 0, 1)),
        x: BigInt(rY.slice(e, 1, 33)),
      };
    }
    class nd extends nc.BaseError {
      constructor({ publicKey: e }) {
        super(`Value \`${r1.stringify(e)}\` is not a valid public key.`, {
          metaMessages: [
            "Public key must contain:",
            "- an `x` and `prefix` value (compressed)",
            "- an `x`, `y`, and `prefix` value (uncompressed)",
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidError",
          });
      }
    }
    class nf extends nc.BaseError {
      constructor({ prefix: e, cause: t }) {
        super(`Prefix "${e}" is invalid.`, { cause: t }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidPrefixError",
          });
      }
    }
    class nh extends nc.BaseError {
      constructor() {
        super("Prefix must be 2 or 3 for compressed public keys."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidCompressedPrefixError",
          });
      }
    }
    class np extends nc.BaseError {
      constructor() {
        super("Prefix must be 4 for uncompressed public keys."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidUncompressedPrefixError",
          });
      }
    }
    class nb extends nc.BaseError {
      constructor({ publicKey: e }) {
        super(`Value \`${e}\` is an invalid public key size.`, {
          metaMessages: [
            "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
            `Received ${rY.size(rY.from(e))} bytes.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidSerializedSizeError",
          });
      }
    }
    let nm = /^0x[a-fA-F0-9]{40}$/;
    function ng(e, t = {}) {
      let { strict: r = !0 } = t;
      if (!nm.test(e)) throw new nv({ address: e, cause: new nx() });
      if (r) {
        if (e.toLowerCase() === e) return;
        if (ny(e) !== e) throw new nv({ address: e, cause: new nE() });
      }
    }
    function ny(e) {
      if (no.has(e)) return no.get(e);
      ng(e, { strict: !1 });
      let t = e.substring(2).toLowerCase(),
        r = na(r8(t), { as: "Bytes" }),
        n = t.split("");
      for (let e = 0; e < 40; e += 2)
        r[e >> 1] >> 4 >= 8 && n[e] && (n[e] = n[e].toUpperCase()),
          (15 & r[e >> 1]) >= 8 &&
            n[e + 1] &&
            (n[e + 1] = n[e + 1].toUpperCase());
      let a = `0x${n.join("")}`;
      return no.set(e, a), a;
    }
    function nw(e, t = {}) {
      let { strict: r = !0 } = t ?? {};
      try {
        return ng(e, { strict: r }), !0;
      } catch {
        return !1;
      }
    }
    class nv extends ns.BaseError {
      constructor({ address: e, cause: t }) {
        super(`Address "${e}" is invalid.`, { cause: t }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidAddressError",
          });
      }
    }
    class nx extends ns.BaseError {
      constructor() {
        super("Address is not a 20 byte (40 hexadecimal character) value."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidInputError",
          });
      }
    }
    class nE extends ns.BaseError {
      constructor() {
        super("Address does not match its checksum counterpart."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidChecksumError",
          });
      }
    }
    function nB(e) {
      let t = !0,
        r = "",
        n = 0,
        a = "",
        i = !1;
      for (let o = 0; o < e.length; o++) {
        let s = e[o];
        if (
          (["(", ")", ","].includes(s) && (t = !0),
          "(" === s && n++,
          ")" === s && n--,
          t)
        ) {
          if (0 === n) {
            if (" " === s && ["event", "function", "error", ""].includes(a))
              a = "";
            else if (((a += s), ")" === s)) {
              i = !0;
              break;
            }
            continue;
          }
          if (" " === s) {
            "," !== e[o - 1] && "," !== r && ",(" !== r && ((r = ""), (t = !1));
            continue;
          }
          (a += s), (r += s);
        }
      }
      if (!i) throw new rm.BaseError("Unable to normalize signature.");
      return a;
    }
    function nP(e, t = {}) {
      let { prepare: r = !0 } = t,
        n =
          Array.isArray(e) || "string" == typeof e
            ? (function (e) {
                let t;
                if ("string" == typeof e) t = (0, rb.parseSignature)(e);
                else {
                  let r = (0, rp.parseStructs)(e),
                    n = e.length;
                  for (let a = 0; a < n; a++) {
                    let n = e[a];
                    if (!(0, rh.isStructSignature)(n)) {
                      t = (0, rb.parseSignature)(n, r);
                      break;
                    }
                  }
                }
                if (!t) throw new rf.InvalidAbiItemError({ signature: e });
                return t;
              })(e)
            : e;
      return { ...n, ...(r ? { hash: nI(n) } : {}) };
    }
    function nA(e, t, r) {
      let n,
        { args: a = [], prepare: i = !0 } = r ?? {},
        o = rY.validate(t, { strict: !1 }),
        s = e.filter((e) =>
          o
            ? "function" === e.type || "error" === e.type
              ? nR(e) === rY.slice(t, 0, 4)
              : "event" === e.type && nI(e) === t
            : "name" in e && e.name === t
        );
      if (0 === s.length) throw new nT({ name: t });
      if (1 === s.length) return { ...s[0], ...(i ? { hash: nI(s[0]) } : {}) };
      for (let e of s) {
        if ("inputs" in e) {
          if (!a || 0 === a.length) {
            if (!e.inputs || 0 === e.inputs.length)
              return { ...e, ...(i ? { hash: nI(e) } : {}) };
            continue;
          }
          if (
            e.inputs &&
            0 !== e.inputs.length &&
            e.inputs.length === a.length &&
            a.every((t, r) => {
              let n = "inputs" in e && e.inputs[r];
              return (
                !!n &&
                (function e(t, r) {
                  let n = typeof t,
                    a = r.type;
                  switch (a) {
                    case "address":
                      return nw(t, { strict: !1 });
                    case "bool":
                      return "boolean" === n;
                    case "function":
                    case "string":
                      return "string" === n;
                    default:
                      if ("tuple" === a && "components" in r)
                        return Object.values(r.components).every((r, n) =>
                          e(Object.values(t)[n], r)
                        );
                      if (
                        /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                          a
                        )
                      )
                        return "number" === n || "bigint" === n;
                      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(a))
                        return "string" === n || t instanceof Uint8Array;
                      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(a))
                        return (
                          Array.isArray(t) &&
                          t.every((t) =>
                            e(t, {
                              ...r,
                              type: a.replace(/(\[[0-9]{0,}\])$/, ""),
                            })
                          )
                        );
                      return !1;
                  }
                })(t, n)
              );
            })
          ) {
            if (n && "inputs" in n && n.inputs) {
              let t = (function e(t, r, n) {
                for (let a in t) {
                  let i = t[a],
                    o = r[a];
                  if (
                    "tuple" === i.type &&
                    "tuple" === o.type &&
                    "components" in i &&
                    "components" in o
                  )
                    return e(i.components, o.components, n[a]);
                  let s = [i.type, o.type];
                  if (
                    (s.includes("address") && s.includes("bytes20")) ||
                    (((s.includes("address") && s.includes("string")) ||
                      (s.includes("address") && s.includes("bytes"))) &&
                      nw(n[a], { strict: !1 }))
                  )
                    return s;
                }
              })(e.inputs, n.inputs, a);
              if (t)
                throw new nk(
                  { abiItem: e, type: t[0] },
                  { abiItem: n, type: t[1] }
                );
            }
            n = e;
          }
        }
      }
      let c = (() => {
        if (n) return n;
        let [e, ...t] = s;
        return { ...e, overloads: t };
      })();
      if (!c) throw new nT({ name: t });
      return { ...c, ...(i ? { hash: nI(c) } : {}) };
    }
    function nR(...e) {
      let t = (() => {
        if (Array.isArray(e[0])) {
          let [t, r] = e;
          return nA(t, r);
        }
        return e[0];
      })();
      return rY.slice(nI(t), 0, 4);
    }
    function nI(...e) {
      let t = (() => {
        if (Array.isArray(e[0])) {
          let [t, r] = e;
          return nA(t, r);
        }
        return e[0];
      })();
      return "string" != typeof t && "hash" in t && t.hash
        ? t.hash
        : na(
            rY.fromString(
              (function (...e) {
                let t = (() => {
                  if (Array.isArray(e[0])) {
                    let [t, r] = e;
                    return nA(t, r);
                  }
                  return e[0];
                })();
                return nB("string" == typeof t ? t : rd.formatAbiItem(t));
              })(t)
            )
          );
    }
    class nk extends rm.BaseError {
      constructor(e, t) {
        super("Found ambiguous types in overloaded ABI Items.", {
          metaMessages: [
            `\`${e.type}\` in \`${nB(rd.formatAbiItem(e.abiItem))}\`, and`,
            `\`${t.type}\` in \`${nB(rd.formatAbiItem(t.abiItem))}\``,
            "",
            "These types encode differently and cannot be distinguished at runtime.",
            "Remove one of the ambiguous items in the ABI.",
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.AmbiguityError",
          });
      }
    }
    class nT extends rm.BaseError {
      constructor({ name: e, data: t, type: r = "item" }) {
        const n = e ? ` with name "${e}"` : t ? ` with data "${t}"` : "";
        super(`ABI ${r}${n} not found.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.NotFoundError",
          });
      }
    }
    rm.BaseError;
    var nN = e.i(25908),
      nS = e.i(89513),
      nC = rm;
    let nF = /^(.*)\[([0-9]*)\]$/,
      nO = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
      nU =
        /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
      nq = 2n ** 256n - 1n;
    function nL(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let { dynamic: n, encoded: a } = e[r];
        n ? (t += 32) : (t += rY.size(a));
      }
      let r = [],
        n = [],
        a = 0;
      for (let i = 0; i < e.length; i++) {
        let { dynamic: o, encoded: s } = e[i];
        o
          ? (r.push(rY.fromNumber(t + a, { size: 32 })),
            n.push(s),
            (a += rY.size(s)))
          : r.push(s);
      }
      return rY.concat(...r, ...n);
    }
    function nz(e) {
      let t = e.match(/^(.*)\[(\d+)?\]$/);
      return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
    }
    function nM(e) {
      let { type: t } = e;
      if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
      if ("tuple" === t) return e.components?.some(nM);
      let r = nz(e.type);
      return !!(r && nM({ ...e, type: r[1] }));
    }
    var nH = rm;
    let n$ = {
      bytes: new Uint8Array(),
      dataView: new DataView(new ArrayBuffer(0)),
      position: 0,
      positionReadCount: new Map(),
      recursiveReadCount: 0,
      recursiveReadLimit: 1 / 0,
      assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
          throw new n_({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit,
          });
      },
      assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1)
          throw new nG({ length: this.bytes.length, position: e });
      },
      decrementPosition(e) {
        if (e < 0) throw new nj({ offset: e });
        let t = this.position - e;
        this.assertPosition(t), (this.position = t);
      },
      getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0;
      },
      incrementPosition(e) {
        if (e < 0) throw new nj({ offset: e });
        let t = this.position + e;
        this.assertPosition(t), (this.position = t);
      },
      inspectByte(e) {
        let t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t];
      },
      inspectBytes(e, t) {
        let r = t ?? this.position;
        return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
      },
      inspectUint8(e) {
        let t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t];
      },
      inspectUint16(e) {
        let t = e ?? this.position;
        return this.assertPosition(t + 1), this.dataView.getUint16(t);
      },
      inspectUint24(e) {
        let t = e ?? this.position;
        return (
          this.assertPosition(t + 2),
          (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
        );
      },
      inspectUint32(e) {
        let t = e ?? this.position;
        return this.assertPosition(t + 3), this.dataView.getUint32(t);
      },
      pushByte(e) {
        this.assertPosition(this.position),
          (this.bytes[this.position] = e),
          this.position++;
      },
      pushBytes(e) {
        this.assertPosition(this.position + e.length - 1),
          this.bytes.set(e, this.position),
          (this.position += e.length);
      },
      pushUint8(e) {
        this.assertPosition(this.position),
          (this.bytes[this.position] = e),
          this.position++;
      },
      pushUint16(e) {
        this.assertPosition(this.position + 1),
          this.dataView.setUint16(this.position, e),
          (this.position += 2);
      },
      pushUint24(e) {
        this.assertPosition(this.position + 2),
          this.dataView.setUint16(this.position, e >> 8),
          this.dataView.setUint8(this.position + 2, 255 & e),
          (this.position += 3);
      },
      pushUint32(e) {
        this.assertPosition(this.position + 3),
          this.dataView.setUint32(this.position, e),
          (this.position += 4);
      },
      readByte() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectByte();
        return this.position++, e;
      },
      readBytes(e, t) {
        this.assertReadLimit(), this._touch();
        let r = this.inspectBytes(e);
        return (this.position += t ?? e), r;
      },
      readUint8() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint8();
        return (this.position += 1), e;
      },
      readUint16() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint16();
        return (this.position += 2), e;
      },
      readUint24() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint24();
        return (this.position += 3), e;
      },
      readUint32() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint32();
        return (this.position += 4), e;
      },
      get remaining() {
        return this.bytes.length - this.position;
      },
      setPosition(e) {
        let t = this.position;
        return (
          this.assertPosition(e), (this.position = e), () => (this.position = t)
        );
      },
      _touch() {
        if (this.recursiveReadLimit === 1 / 0) return;
        let e = this.getReadCount();
        this.positionReadCount.set(this.position, e + 1),
          e > 0 && this.recursiveReadCount++;
      },
    };
    function nD(e, { recursiveReadLimit: t = 8192 } = {}) {
      let r = Object.create(n$);
      return (
        (r.bytes = e),
        (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (r.positionReadCount = new Map()),
        (r.recursiveReadLimit = t),
        r
      );
    }
    class nj extends nH.BaseError {
      constructor({ offset: e }) {
        super(`Offset \`${e}\` cannot be negative.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.NegativeOffsetError",
          });
      }
    }
    class nG extends nH.BaseError {
      constructor({ length: e, position: t }) {
        super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.PositionOutOfBoundsError",
          });
      }
    }
    class n_ extends nH.BaseError {
      constructor({ count: e, limit: t }) {
        super(
          `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.RecursiveReadLimitExceededError",
          });
      }
    }
    function nV(e, t, r = {}) {
      let { as: n = "Array", checksumAddress: a = !1 } = r,
        i = "string" == typeof t ? r2(t) : t,
        o = nD(i);
      if (0 === r3(i) && e.length > 0) throw new nJ();
      if (r3(i) && 32 > r3(i))
        throw new nY({
          data: "string" == typeof t ? t : rY.fromBytes(t),
          parameters: e,
          size: r3(i),
        });
      let s = 0,
        c = "Array" === n ? [] : {};
      for (let t = 0; t < e.length; ++t) {
        let r = e[t];
        s < i.length && o.setPosition(s);
        let [l, u] = (function e(t, r, n) {
          let { checksumAddress: a, staticPosition: i } = n,
            o = nz(r.type);
          if (o) {
            let [n, s] = o;
            return (function (t, r, n) {
              let { checksumAddress: a, length: i, staticPosition: o } = n;
              if (null === i) {
                let n = o + r4(t.readBytes(32)),
                  i = n + 32;
                t.setPosition(n);
                let s = r4(t.readBytes(32)),
                  c = nM(r),
                  l = 0,
                  u = [];
                for (let n = 0; n < s; ++n) {
                  t.setPosition(i + (c ? 32 * n : l));
                  let [o, s] = e(t, r, {
                    checksumAddress: a,
                    staticPosition: i,
                  });
                  (l += s),
                    u.push(o),
                    0 === s && (t.assertReadLimit(), t._touch());
                }
                return t.setPosition(o + 32), [u, 32];
              }
              if (nM(r)) {
                let n = o + r4(t.readBytes(32)),
                  s = [];
                for (let o = 0; o < i; ++o) {
                  t.setPosition(n + 32 * o);
                  let [i] = e(t, r, { checksumAddress: a, staticPosition: n });
                  s.push(i);
                }
                return t.setPosition(o + 32), [s, 32];
              }
              let s = 0,
                c = [];
              for (let n = 0; n < i; ++n) {
                let [n, i] = e(t, r, {
                  checksumAddress: a,
                  staticPosition: o + s,
                });
                (s += i),
                  c.push(n),
                  0 === i && (t.assertReadLimit(), t._touch());
              }
              return [c, s];
            })(
              t,
              { ...r, type: s },
              { checksumAddress: a, length: n, staticPosition: i }
            );
          }
          if ("tuple" === r.type)
            return (function (t, r, n) {
              let { checksumAddress: a, staticPosition: i } = n,
                o =
                  0 === r.components.length ||
                  r.components.some(({ name: e }) => !e),
                s = o ? [] : {},
                c = 0;
              if (nM(r)) {
                let n = i + r4(t.readBytes(32));
                for (let i = 0; i < r.components.length; ++i) {
                  let l = r.components[i];
                  t.setPosition(n + c);
                  let [u, d] = e(t, l, {
                    checksumAddress: a,
                    staticPosition: n,
                  });
                  (c += d), (s[o ? i : l?.name] = u);
                }
                return t.setPosition(i + 32), [s, 32];
              }
              for (let n = 0; n < r.components.length; ++n) {
                let l = r.components[n],
                  [u, d] = e(t, l, { checksumAddress: a, staticPosition: i });
                (s[o ? n : l?.name] = u), (c += d);
              }
              return [s, c];
            })(t, r, { checksumAddress: a, staticPosition: i });
          if ("address" === r.type)
            return (function (e, t = {}) {
              let r,
                { checksum: n = !1 } = t,
                a = e.readBytes(32);
              return [
                ((r = rY.fromBytes(
                  (function (e, t = {}) {
                    let { strict: r } = t;
                    !1;
                    let n = e.slice(-20, void 0);
                    return (
                      r &&
                        (function (e, t) {
                          if ("number" == typeof t && r3(e) !== t - -20)
                            throw new nr({
                              offset: t,
                              position: "end",
                              size: r3(e),
                            });
                        })(n, void 0),
                      n
                    );
                  })(a)
                )),
                n ? ny(r) : r),
                32,
              ];
            })(t, { checksum: a });
          if ("bool" === r.type)
            return [
              (function (e, t = {}) {
                let { size: r } = t,
                  n = e;
                if (
                  (void 0 !== r && (rJ(n, r), (n = r7(n))),
                  n.length > 1 || n[0] > 1)
                )
                  throw new r9(n);
                return !!n[0];
              })(t.readBytes(32), { size: 32 }),
              32,
            ];
          if (r.type.startsWith("bytes"))
            return (function (e, t, { staticPosition: r }) {
              let [n, a] = t.type.split("bytes");
              if (!a) {
                let t = r4(e.readBytes(32));
                e.setPosition(r + t);
                let n = r4(e.readBytes(32));
                if (0 === n) return e.setPosition(r + 32), ["0x", 32];
                let a = e.readBytes(n);
                return e.setPosition(r + 32), [rY.fromBytes(a), 32];
              }
              return [
                rY.fromBytes(e.readBytes(Number.parseInt(a, 10), 32)),
                32,
              ];
            })(t, r, { staticPosition: i });
          if (r.type.startsWith("uint") || r.type.startsWith("int")) {
            var s, c;
            let e, n, a;
            return (
              (s = t),
              (e = (c = r).type.startsWith("int")),
              (n = Number.parseInt(c.type.split("int")[1] || "256", 10)),
              (a = s.readBytes(32)),
              [
                n > 48
                  ? (function (e, t = {}) {
                      let { size: r } = t;
                      void 0 !== r && rJ(e, r);
                      let n = rY.fromBytes(e, t);
                      return rY.toBigInt(n, t);
                    })(a, { signed: e })
                  : r4(a, { signed: e }),
                32,
              ]
            );
          }
          if ("string" === r.type)
            return (function (e, { staticPosition: t }) {
              let r = r4(e.readBytes(32));
              e.setPosition(t + r);
              let n = r4(e.readBytes(32));
              if (0 === n) return e.setPosition(t + 32), ["", 32];
              let a = (function (e, t = {}) {
                let { size: r } = t,
                  n = e;
                return (
                  void 0 !== r && (rJ(n, r), (n = rQ(n, { dir: "right" }))),
                  r6.decode(n)
                );
              })(r7(e.readBytes(n, 32)));
              return e.setPosition(t + 32), [a, 32];
            })(t, { staticPosition: i });
          throw new n6(r.type);
        })(o, r, { checksumAddress: a, staticPosition: 0 });
        (s += u), "Array" === n ? c.push(l) : (c[r.name ?? t] = l);
      }
      return c;
    }
    function nW(e, t, r) {
      let { checksumAddress: n = !1 } = r ?? {};
      if (e.length !== t.length)
        throw new n0({ expectedLength: e.length, givenLength: t.length });
      let a = nL(
        (function ({ checksumAddress: e, parameters: t, values: r }) {
          let n = [];
          for (let a = 0; a < t.length; a++)
            n.push(
              (function e({ checksumAddress: t = !1, parameter: r, value: n }) {
                let a = nz(r.type);
                if (a) {
                  let [i, o] = a;
                  return (function (t, r) {
                    let { checksumAddress: n, length: a, parameter: i } = r,
                      o = null === a;
                    if (!Array.isArray(t)) throw new n1(t);
                    if (!o && t.length !== a)
                      throw new nX({
                        expectedLength: a,
                        givenLength: t.length,
                        type: `${i.type}[${a}]`,
                      });
                    let s = 0 === t.length && nM(i),
                      c = [];
                    for (let r = 0; r < t.length; r++) {
                      let a = e({
                        checksumAddress: n,
                        parameter: i,
                        value: t[r],
                      });
                      a.dynamic && (s = !0), c.push(a);
                    }
                    if (o || s) {
                      let e = nL(c);
                      if (o) {
                        let t = rY.fromNumber(c.length, { size: 32 });
                        return {
                          dynamic: !0,
                          encoded: c.length > 0 ? rY.concat(t, e) : t,
                        };
                      }
                      if (s) return { dynamic: !0, encoded: e };
                    }
                    return {
                      dynamic: !1,
                      encoded: rY.concat(...c.map(({ encoded: e }) => e)),
                    };
                  })(n, {
                    checksumAddress: t,
                    length: i,
                    parameter: { ...r, type: o },
                  });
                }
                if ("tuple" === r.type)
                  return (function (t, r) {
                    let { checksumAddress: n, parameter: a } = r,
                      i = !1,
                      o = [];
                    for (let r = 0; r < a.components.length; r++) {
                      let s = a.components[r],
                        c = Array.isArray(t) ? r : s.name,
                        l = e({
                          checksumAddress: n,
                          parameter: s,
                          value: t[c],
                        });
                      o.push(l), l.dynamic && (i = !0);
                    }
                    return {
                      dynamic: i,
                      encoded: i
                        ? nL(o)
                        : rY.concat(...o.map(({ encoded: e }) => e)),
                    };
                  })(n, { checksumAddress: t, parameter: r });
                if ("address" === r.type)
                  return (function (e, t) {
                    let { checksum: r = !1 } = t;
                    return (
                      ng(e, { strict: r }),
                      { dynamic: !1, encoded: rY.padLeft(e.toLowerCase()) }
                    );
                  })(n, { checksum: t });
                if ("bool" === r.type) {
                  var i = n;
                  if ("boolean" != typeof i)
                    throw new rm.BaseError(
                      `Invalid boolean value: "${i}" (type: ${typeof i}). Expected: \`true\` or \`false\`.`
                    );
                  return {
                    dynamic: !1,
                    encoded: rY.padLeft(rY.fromBoolean(i)),
                  };
                }
                if (r.type.startsWith("uint") || r.type.startsWith("int")) {
                  let e = r.type.startsWith("int"),
                    [, , t = "256"] = nU.exec(r.type) ?? [];
                  return (function (e, { signed: t, size: r }) {
                    if ("number" == typeof r) {
                      let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                        a = t ? -n - 1n : 0n;
                      if (e > n || e < a)
                        throw new rY.IntegerOutOfRangeError({
                          max: n.toString(),
                          min: a.toString(),
                          signed: t,
                          size: r / 8,
                          value: e.toString(),
                        });
                    }
                    return {
                      dynamic: !1,
                      encoded: rY.fromNumber(e, { size: 32, signed: t }),
                    };
                  })(n, { signed: e, size: Number(t) });
                }
                if (r.type.startsWith("bytes"))
                  return (function (e, { type: t }) {
                    let [, r] = t.split("bytes"),
                      n = rY.size(e);
                    if (!r) {
                      let t = e;
                      return (
                        n % 32 != 0 &&
                          (t = rY.padRight(
                            t,
                            32 * Math.ceil((e.length - 2) / 2 / 32)
                          )),
                        {
                          dynamic: !0,
                          encoded: rY.concat(
                            rY.padLeft(rY.fromNumber(n, { size: 32 })),
                            t
                          ),
                        }
                      );
                    }
                    if (n !== Number.parseInt(r, 10))
                      throw new nQ({
                        expectedSize: Number.parseInt(r, 10),
                        value: e,
                      });
                    return { dynamic: !1, encoded: rY.padRight(e) };
                  })(n, { type: r.type });
                if ("string" === r.type) {
                  var o = n;
                  let e = rY.fromString(o),
                    t = Math.ceil(rY.size(e) / 32),
                    r = [];
                  for (let n = 0; n < t; n++)
                    r.push(rY.padRight(rY.slice(e, 32 * n, (n + 1) * 32)));
                  return {
                    dynamic: !0,
                    encoded: rY.concat(
                      rY.padRight(rY.fromNumber(rY.size(e), { size: 32 })),
                      ...r
                    ),
                  };
                }
                throw new n6(r.type);
              })({ checksumAddress: e, parameter: t[a], value: r[a] })
            );
          return n;
        })({ checksumAddress: n, parameters: e, values: t })
      );
      return 0 === a.length ? "0x" : a;
    }
    function nZ(e, t) {
      if (e.length !== t.length)
        throw new n0({ expectedLength: e.length, givenLength: t.length });
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let a = e[n],
          i = t[n];
        r.push(nZ.encode(a, i));
      }
      return rY.concat(...r);
    }
    function nK(e) {
      return (Array.isArray(e) && "string" == typeof e[0]) ||
        "string" == typeof e
        ? (function (e) {
            let t = [];
            if ("string" == typeof e) {
              let r = (0, rb.splitParameters)(e),
                n = r.length;
              for (let e = 0; e < n; e++)
                t.push(
                  (0, rb.parseAbiParameter)(r[e], { modifiers: rh.modifiers })
                );
            } else {
              let r = (0, rp.parseStructs)(e),
                n = e.length;
              for (let a = 0; a < n; a++) {
                let n = e[a];
                if ((0, rh.isStructSignature)(n)) continue;
                let i = (0, rb.splitParameters)(n),
                  o = i.length;
                for (let e = 0; e < o; e++)
                  t.push(
                    (0, rb.parseAbiParameter)(i[e], {
                      modifiers: rh.modifiers,
                      structs: r,
                    })
                  );
              }
            }
            if (0 === t.length)
              throw new nS.InvalidAbiParametersError({ params: e });
            return t;
          })(e)
        : e;
    }
    (nZ || (nZ = {})).encode = function e(t, r, n = !1) {
      if ("address" === t) return ng(r), rY.padLeft(r.toLowerCase(), 32 * !!n);
      if ("string" === t) return rY.fromString(r);
      if ("bytes" === t) return r;
      if ("bool" === t) return rY.padLeft(rY.fromBoolean(r), n ? 32 : 1);
      let a = t.match(nU);
      if (a) {
        let [e, t, i = "256"] = a,
          o = Number.parseInt(i, 10) / 8;
        return rY.fromNumber(r, { size: n ? 32 : o, signed: "int" === t });
      }
      let i = t.match(nO);
      if (i) {
        let [e, t] = i;
        if (Number.parseInt(t, 10) !== (r.length - 2) / 2)
          throw new nQ({ expectedSize: Number.parseInt(t, 10), value: r });
        return rY.padRight(r, 32 * !!n);
      }
      let o = t.match(nF);
      if (o && Array.isArray(r)) {
        let [t, n] = o,
          a = [];
        for (let t = 0; t < r.length; t++) a.push(e(n, r[t], !0));
        return 0 === a.length ? "0x" : rY.concat(...a);
      }
      throw new n6(t);
    };
    class nY extends nC.BaseError {
      constructor({ data: e, parameters: t, size: r }) {
        super(`Data size of ${r} bytes is too small for given parameters.`, {
          metaMessages: [
            `Params: (${nN.formatAbiParameters(t)})`,
            `Data:   ${e} (${r} bytes)`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.DataSizeTooSmallError",
          });
      }
    }
    class nJ extends nC.BaseError {
      constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.'),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.ZeroDataError",
          });
      }
    }
    class nX extends nC.BaseError {
      constructor({ expectedLength: e, givenLength: t, type: r }) {
        super(
          `Array length mismatch for type \`${r}\`. Expected: \`${e}\`. Given: \`${t}\`.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.ArrayLengthMismatchError",
          });
      }
    }
    class nQ extends nC.BaseError {
      constructor({ expectedSize: e, value: t }) {
        super(
          `Size of bytes "${t}" (bytes${rY.size(
            t
          )}) does not match expected size (bytes${e}).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.BytesSizeMismatchError",
          });
      }
    }
    class n0 extends nC.BaseError {
      constructor({ expectedLength: e, givenLength: t }) {
        super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.LengthMismatchError",
          });
      }
    }
    class n1 extends nC.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is not a valid array.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.InvalidArrayError",
          });
      }
    }
    class n6 extends nC.BaseError {
      constructor(e) {
        super(`Type \`${e}\` is not a valid ABI Type.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.InvalidTypeError",
          });
      }
    }
    e.i(18697);
    function n5(...e) {
      let [t, r = []] = (() => {
          if (Array.isArray(e[0])) {
            let [t, r, n] = e;
            return [n8(t, r, { args: n }), n];
          }
          let [t, r] = e;
          return [t, r];
        })(),
        { overloads: n } = t,
        a = n ? n8([t, ...n], t.name, { args: r }) : t,
        i = nR(a),
        o = r.length > 0 ? nW(a.inputs, r) : void 0;
      return o ? rY.concat(i, o) : i;
    }
    function n2(e, t = {}) {
      return nP(e, t);
    }
    function n8(e, t, r) {
      let n = nA(e, t, r);
      if ("function" !== n.type) throw new nT({ name: t, type: "function" });
      return n;
    }
    rm.BaseError,
      rm.BaseError,
      rm.BaseError,
      rm.BaseError,
      rm.BaseError,
      rm.BaseError;
    let n3 = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      n4 = "0x0000000000000000000000000000000000000000";
    var n7 = e.i(22411);
    let n9 =
        "0x608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063fd00430c1461002d575b5f5ffd5b6100476004803603810190610042919061012b565b610049565b005b80825f375f5f825f865afa610060573d5f5f3e3d5ffd5b3d5f5f3e3d5ff35b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61009982610070565b9050919050565b6100a98161008f565b81146100b3575f5ffd5b50565b5f813590506100c4816100a0565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126100eb576100ea6100ca565b5b8235905067ffffffffffffffff811115610108576101076100ce565b5b602083019150836001820283011115610124576101236100d2565b5b9250929050565b5f5f5f6040848603121561014257610141610068565b5b5f61014f868287016100b6565b935050602084013567ffffffffffffffff8111156101705761016f61006c565b5b61017c868287016100d6565b9250925050925092509256fea2646970667358221220635ed99185cacf3f2acba6921f23687c969cec2bbaf5f9ad599f507e6e105e6964736f6c63430008230033",
      ae = nI(
        (function (e, t = {}) {
          return nP(e, t);
        })(
          "event Transfer(address indexed from, address indexed to, uint256 value)"
        )
      ),
      at = n2("function balanceOf(address) returns (uint256)"),
      ar = n2("function decimals() returns (uint256)"),
      an = n2("function tokenURI(uint256) returns (string)"),
      aa = n2("function symbol() returns (string)"),
      ai = n2("function query(address target, bytes data)");
    async function ao(e, t) {
      var r, n;
      let a,
        {
          blockNumber: o,
          blockTag: s,
          calls: c,
          stateOverrides: l,
          traceAssetChanges: u,
          traceTransfers: d,
          validation: f,
        } = t,
        h = t.account ? (0, i.parseAccount)(t.account) : void 0;
      if (u && !h)
        throw new g.BaseError(
          "`account` is required when `traceAssetChanges` is true"
        );
      let p = h
          ? (function (...e) {
              let [t, r] = (() => {
                  if (Array.isArray(e[0])) {
                    let [t, r] = e;
                    return [
                      (function (e) {
                        let t = e.find((e) => "constructor" === e.type);
                        if (!t) throw new nT({ name: "constructor" });
                        return t;
                      })(t),
                      r,
                    ];
                  }
                  return e;
                })(),
                { bytecode: n, args: a } = r;
              return rY.concat(
                n,
                t.inputs?.length && a?.length ? nW(t.inputs, a) : "0x"
              );
            })(nP("constructor(bytes, bytes)"), {
              bytecode: ra.deploylessCallViaBytecodeBytecode,
              args: [
                "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                n5(n2("function getBalance(address)"), [h.address]),
              ],
            })
          : void 0,
        b = s ?? e.experimental_blockTag ?? "latest",
        m = o;
      if (u && "bigint" != typeof m && "earliest" !== b && "pending" !== b)
        if ("latest" === b) m = await tz(e, { cacheTime: 0 });
        else {
          let t = await tl(e, { blockTag: b });
          if ("bigint" != typeof t.number)
            throw new g.BaseError(
              `Block tag \`${b}\` did not resolve to a number.`
            );
          m = t.number;
        }
      let y = "bigint" == typeof m ? { blockNumber: m } : { blockTag: b },
        w = u
          ? await ru(e, {
              ...y,
              blocks: [
                {
                  calls: c.map((e) => ({ ...e, from: h.address })),
                  stateOverrides: l,
                },
              ],
              traceTransfers: d,
              validation: f,
            })
          : void 0,
        v = w
          ? [
              ...new Set([
                ...((r = w[0].calls.flatMap((e) => e.logs ?? [])),
                (n = h.address),
                (a = (0, n7.pad)(n.toLowerCase(), { size: 32 })),
                r
                  .filter(
                    (e) =>
                      e.topics[0]?.toLowerCase() === ae &&
                      e.address.toLowerCase() !== n3 &&
                      (e.topics[1]?.toLowerCase() === a ||
                        e.topics[2]?.toLowerCase() === a)
                  )
                  .map((e) => e.address.toLowerCase())),
                ...t.calls.map((e) => e.to?.toLowerCase()),
              ]),
            ].filter((e) => !!e && e !== n3 && e !== n4)
          : [],
        x = (function (e) {
          let t = new Set(e.map((e) => e.toLowerCase())),
            r = 3735928559n;
          for (; t.has(`0x${r.toString(16).padStart(40, "0")}`); ) r++;
          return `0x${r.toString(16).padStart(40, "0")}`;
        })([
          ...(h ? [h.address] : []),
          ...v,
          ...(l?.map(({ address: e }) => e) ?? []),
        ]),
        E = [{ address: x, code: n9 }],
        [B, P] = await Promise.all([
          u
            ? Promise.all([
                au(e, { account: h.address, ...y, data: p, stateOverride: l }),
                ...v.map((t) =>
                  au(e, {
                    account: h.address,
                    address: t,
                    ...y,
                    data: n5(at, [h.address]),
                    staticCallAddress: x,
                    stateOverride: l,
                  })
                ),
              ])
            : [],
          ru(e, {
            ...y,
            blocks: [
              {
                calls: [...c, { to: n4 }].map((e) => ({
                  ...e,
                  from: h?.address,
                })),
                stateOverrides: l,
              },
              ...(u
                ? [
                    { calls: [{ data: p }] },
                    {
                      calls: v.map((e) => ({
                        to: x,
                        gas: 1000000n,
                        data: as(e, n5(at, [h.address])),
                      })),
                      stateOverrides: E,
                    },
                    {
                      calls: v.map((e) => ({
                        to: x,
                        gas: 1000000n,
                        data: as(e, n5(ar)),
                      })),
                      stateOverrides: E,
                    },
                    {
                      calls: v.map((e) => ({
                        to: x,
                        gas: 1000000n,
                        data: as(e, n5(an, [0n])),
                      })),
                      stateOverrides: E,
                    },
                    {
                      calls: v.map((e) => ({
                        to: x,
                        gas: 1000000n,
                        data: as(e, n5(aa)),
                      })),
                      stateOverrides: E,
                    },
                  ]
                : []),
            ],
            traceTransfers: d,
            validation: f,
          }),
        ]),
        A = P[0],
        [R, I, k, T, N] = u ? P.slice(1) : [],
        { calls: S, ...C } = A,
        F = S.slice(0, -1),
        O = B.map((e) => (ac(e) ? (0, tn.hexToBigInt)(e.data) : null)),
        U = [...(R?.calls ?? []), ...(I?.calls ?? [])].map((e) =>
          ac(e) ? (0, tn.hexToBigInt)(e.data) : null
        ),
        q = (k?.calls ?? []).map((e) => al(e, ar)),
        L = (N?.calls ?? []).map((e) => al(e, aa)),
        z = (T?.calls ?? []).map((e) => al(e, an)),
        M = [];
      for (let [e, t] of U.entries()) {
        let r = O[e],
          n = B[e],
          a =
            "bigint" == typeof r
              ? r
              : e > 0 && n?.status === "success" && "0x" === n.data
              ? 0n
              : null;
        if ("bigint" != typeof t || "bigint" != typeof a) continue;
        let i = q[e - 1],
          o = L[e - 1],
          s = z[e - 1],
          c =
            0 === e
              ? { address: n3, decimals: 18, symbol: "ETH" }
              : {
                  address: v[e - 1],
                  decimals: s || i ? Number(i ?? 1) : void 0,
                  symbol: o ?? void 0,
                };
        M.push({ token: c, value: { pre: a, post: t, diff: t - a } });
      }
      return { assetChanges: M, block: C, results: F };
    }
    function as(e, t) {
      return n5(ai, [e, t]);
    }
    function ac(e) {
      return "success" === e.status && /^0x[\da-f]{64}$/i.test(e.data);
    }
    function al(e, t) {
      if ("failure" === e.status || "0x" === e.data) return null;
      try {
        return (function (...e) {
          let [t, r, n = {}] = (() => {
              if (Array.isArray(e[0])) {
                let [t, r, n, a] = e;
                return [n8(t, r), n, a];
              }
              return e;
            })(),
            a = nV(t.outputs, r, n);
          if (!a || 0 !== Object.keys(a).length)
            return a && 1 === Object.keys(a).length
              ? Array.isArray(a)
                ? a[0]
                : Object.values(a)[0]
              : a;
        })(t, e.data);
      } catch {
        return null;
      }
    }
    async function au(e, t) {
      let {
        account: r,
        address: n,
        blockNumber: a,
        blockTag: i,
        data: o,
        staticCallAddress: s,
        stateOverride: c,
      } = t;
      try {
        return {
          data:
            (
              await (0, es.call)(
                { ...e, ccipRead: !1 },
                {
                  account: n ? n4 : r,
                  data: n ? as(n, o) : o,
                  stateOverride:
                    n && s ? [...(c ?? []), { address: s, code: n9 }] : c,
                  ...(n ? { gas: 1000000n, to: s } : {}),
                  ...("bigint" == typeof a
                    ? { blockNumber: a }
                    : { blockTag: i }),
                }
              )
            ).data ?? "0x",
          status: "success",
        };
      } catch (e) {
        if (
          !(e instanceof y.CallExecutionError) ||
          !(e.cause instanceof e3.ExecutionRevertedError)
        )
          throw e;
        return { data: "0x", status: "failure" };
      }
    }
    async function ad(e, t) {
      let {
          abi: r,
          address: n,
          args: a,
          functionName: o,
          dataSuffix: s = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          ...c
        } = t,
        l = c.account ? (0, i.parseAccount)(c.account) : e.account,
        f = (0, d.encodeFunctionData)({ abi: r, args: a, functionName: o });
      try {
        let { data: i } = await k(
            e,
            es.call,
            "call"
          )({
            batch: !1,
            data: `${f}${s ? s.replace("0x", "") : ""}`,
            to: n,
            ...c,
            account: l,
          }),
          d = (0, u.decodeFunctionResult)({
            abi: r,
            args: a,
            functionName: o,
            data: i || "0x",
          }),
          h = r.filter((e) => "name" in e && e.name === t.functionName);
        return {
          result: d,
          request: {
            abi: h,
            address: n,
            args: a,
            dataSuffix: s,
            functionName: o,
            ...c,
            account: l,
          },
        };
      } catch (e) {
        throw eo(e, {
          abi: r,
          address: n,
          args: a,
          docsPath: "/docs/contract/simulateContract",
          functionName: o,
          sender: l?.address,
        });
      }
    }
    async function af(e, { filter: t }) {
      return t.request({ method: "eth_uninstallFilter", params: [t.id] });
    }
    e.s(["simulateCalls", 0, ao], 71293),
      e.s(["simulateContract", 0, ad], 6145),
      e.s(["uninstallFilter", 0, af], 8412);
    var ah = rm;
    let ap =
      "0x6492649264926492649264926492649264926492649264926492649264926492";
    function ab(e) {
      if (rY.slice(e, -32) !== ap) throw new ag(e);
    }
    function am(e) {
      ab(e);
      let [t, r, n] = nV(nK("address, bytes, bytes"), e);
      return { data: r, signature: n, to: t };
    }
    class ag extends ah.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureErc6492.InvalidWrappedSignatureError",
          });
      }
    }
    e.s(
      [
        "InvalidWrappedSignatureError",
        0,
        ag,
        "assert",
        0,
        ab,
        "from",
        0,
        function (e) {
          return "string" == typeof e ? am(e) : e;
        },
        "magicBytes",
        0,
        ap,
        "universalSignatureValidatorAbi",
        0,
        [
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "isValidSig",
          },
        ],
        "universalSignatureValidatorBytecode",
        0,
        "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
        "unwrap",
        0,
        am,
        "validate",
        0,
        function (e) {
          try {
            return ab(e), !0;
          } catch {
            return !1;
          }
        },
        "wrap",
        0,
        function (e) {
          let { data: t, signature: r, to: n } = e;
          return rY.concat(nW(nK("address, bytes, bytes"), [n, t, r]), ap);
        },
      ],
      40258
    );
    var ay = e.i(40258),
      ay = ay;
    function aw(e) {
      if (e <= 255) return 1;
      if (e <= 65535) return 2;
      if (e <= 0xffffff) return 3;
      if (e <= 0xffffffff) return 4;
      throw new rm.BaseError("Length is too large.");
    }
    var av = rm;
    function ax(e, t = {}) {
      let { recovered: r } = t;
      if (void 0 === e.r || void 0 === e.s || (r && void 0 === e.yParity))
        throw new aI({ signature: e });
      if (e.r < 0n || e.r > nq) throw new ak({ value: e.r });
      if (e.s < 0n || e.s > nq) throw new aT({ value: e.s });
      if ("number" == typeof e.yParity && 0 !== e.yParity && 1 !== e.yParity)
        throw new aN({ value: e.yParity });
    }
    function aE(e) {
      if (130 !== e.length && 132 !== e.length) throw new aR({ signature: e });
      let t = BigInt(rY.slice(e, 0, 32)),
        r = BigInt(rY.slice(e, 32, 64)),
        n = (() => {
          let t = Number(`0x${e.slice(130)}`);
          if (!Number.isNaN(t))
            try {
              return aA(t);
            } catch {
              throw new aN({ value: t });
            }
        })();
      return void 0 === n ? { r: t, s: r } : { r: t, s: r, yParity: n };
    }
    function aB(e) {
      if (void 0 !== e.r && void 0 !== e.s) return aP(e);
    }
    function aP(e) {
      let t = (() => {
        var t, r;
        let n;
        if ("string" == typeof e) return aE(e);
        if (e instanceof Uint8Array) return aE(rY.fromBytes(e));
        return "string" == typeof e.r
          ? ((t = e),
            (n = (() => {
              let e = t.v ? Number(t.v) : void 0,
                r = t.yParity ? Number(t.yParity) : void 0;
              if (
                ("number" == typeof e && "number" != typeof r && (r = aA(e)),
                "number" != typeof r)
              )
                throw new aN({ value: t.yParity });
              return r;
            })()),
            { r: BigInt(t.r), s: BigInt(t.s), yParity: n })
          : e.v
          ? { r: (r = e).r, s: r.s, yParity: aA(r.v) }
          : {
              r: e.r,
              s: e.s,
              ...(void 0 !== e.yParity ? { yParity: e.yParity } : {}),
            };
      })();
      return ax(t), t;
    }
    function aA(e) {
      if (0 === e || 27 === e) return 0;
      if (1 === e || 28 === e) return 1;
      if (e >= 35) return +(e % 2 == 0);
      throw new aS({ value: e });
    }
    class aR extends av.BaseError {
      constructor({ signature: e }) {
        super(`Value \`${e}\` is an invalid signature size.`, {
          metaMessages: [
            "Expected: 64 bytes or 65 bytes.",
            `Received ${rY.size(rY.from(e))} bytes.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidSerializedSizeError",
          });
      }
    }
    class aI extends av.BaseError {
      constructor({ signature: e }) {
        super(
          `Signature \`${r1.stringify(
            e
          )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.MissingPropertiesError",
          });
      }
    }
    class ak extends av.BaseError {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidRError",
          });
      }
    }
    class aT extends av.BaseError {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidSError",
          });
      }
    }
    class aN extends av.BaseError {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidYParityError",
          });
      }
    }
    class aS extends av.BaseError {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidVError",
          });
      }
    }
    var aC = rm;
    class aF extends rN {
      constructor(e, t, r, n) {
        super(),
          (this.finished = !1),
          (this.length = 0),
          (this.pos = 0),
          (this.destroyed = !1),
          (this.blockLen = e),
          (this.outputLen = t),
          (this.padOffset = r),
          (this.isLE = n),
          (this.buffer = new Uint8Array(e)),
          (this.view = rR(this.buffer));
      }
      update(e) {
        rB(this), rE((e = rT(e)));
        let { view: t, buffer: r, blockLen: n } = this,
          a = e.length;
        for (let i = 0; i < a; ) {
          let o = Math.min(n - this.pos, a - i);
          if (o === n) {
            let t = rR(e);
            for (; n <= a - i; i += n) this.process(t, i);
            continue;
          }
          r.set(e.subarray(i, i + o), this.pos),
            (this.pos += o),
            (i += o),
            this.pos === n && (this.process(t, 0), (this.pos = 0));
        }
        return (this.length += e.length), this.roundClean(), this;
      }
      digestInto(e) {
        rB(this), rP(e, this), (this.finished = !0);
        let { buffer: t, view: r, blockLen: n, isLE: a } = this,
          { pos: i } = this;
        (t[i++] = 128),
          rA(this.buffer.subarray(i)),
          this.padOffset > n - i && (this.process(r, 0), (i = 0));
        for (let e = i; e < n; e++) t[e] = 0;
        !(function (e, t, r, n) {
          if ("function" == typeof e.setBigUint64)
            return e.setBigUint64(t, r, n);
          let a = BigInt(32),
            i = BigInt(0xffffffff),
            o = Number((r >> a) & i),
            s = Number(r & i),
            c = 4 * !!n,
            l = 4 * !n;
          e.setUint32(t + c, o, n), e.setUint32(t + l, s, n);
        })(r, n - 8, BigInt(8 * this.length), a),
          this.process(r, 0);
        let o = rR(e),
          s = this.outputLen;
        if (s % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
        let c = s / 4,
          l = this.get();
        if (c > l.length) throw Error("_sha2: outputLen bigger than state");
        for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], a);
      }
      digest() {
        let { buffer: e, outputLen: t } = this;
        this.digestInto(e);
        let r = e.slice(0, t);
        return this.destroy(), r;
      }
      _cloneInto(e) {
        e || (e = new this.constructor()), e.set(...this.get());
        let {
          blockLen: t,
          buffer: r,
          length: n,
          finished: a,
          destroyed: i,
          pos: o,
        } = this;
        return (
          (e.destroyed = i),
          (e.finished = a),
          (e.length = n),
          (e.pos = o),
          n % t && e.buffer.set(r),
          e
        );
      }
      clone() {
        return this._cloneInto();
      }
    }
    let aO = Uint32Array.from([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c,
        0x1f83d9ab, 0x5be0cd19,
      ]),
      aU = Uint32Array.from([
        0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511,
        0x64f98fa7, 0xbefa4fa4,
      ]),
      aq = Uint32Array.from([
        0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17,
        0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511,
        0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4,
      ]),
      aL = Uint32Array.from([
        0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b,
        0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f,
        0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179,
      ]),
      az = Uint32Array.from([
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
      aM = new Uint32Array(64);
    class aH extends aF {
      constructor(e = 32) {
        super(64, e, 8, !1),
          (this.A = 0 | aO[0]),
          (this.B = 0 | aO[1]),
          (this.C = 0 | aO[2]),
          (this.D = 0 | aO[3]),
          (this.E = 0 | aO[4]),
          (this.F = 0 | aO[5]),
          (this.G = 0 | aO[6]),
          (this.H = 0 | aO[7]);
      }
      get() {
        let { A: e, B: t, C: r, D: n, E: a, F: i, G: o, H: s } = this;
        return [e, t, r, n, a, i, o, s];
      }
      set(e, t, r, n, a, i, o, s) {
        (this.A = 0 | e),
          (this.B = 0 | t),
          (this.C = 0 | r),
          (this.D = 0 | n),
          (this.E = 0 | a),
          (this.F = 0 | i),
          (this.G = 0 | o),
          (this.H = 0 | s);
      }
      process(e, t) {
        for (let r = 0; r < 16; r++, t += 4) aM[r] = e.getUint32(t, !1);
        for (let e = 16; e < 64; e++) {
          let t = aM[e - 15],
            r = aM[e - 2],
            n = rI(t, 7) ^ rI(t, 18) ^ (t >>> 3),
            a = rI(r, 17) ^ rI(r, 19) ^ (r >>> 10);
          aM[e] = (a + aM[e - 7] + n + aM[e - 16]) | 0;
        }
        let { A: r, B: n, C: a, D: i, E: o, F: s, G: c, H: l } = this;
        for (let e = 0; e < 64; e++) {
          var u, d, f, h;
          let t =
              (l +
                (rI(o, 6) ^ rI(o, 11) ^ rI(o, 25)) +
                (((u = o) & s) ^ (~u & c)) +
                az[e] +
                aM[e]) |
              0,
            p =
              ((rI(r, 2) ^ rI(r, 13) ^ rI(r, 22)) +
                (((d = r) & (f = n)) ^ (d & (h = a)) ^ (f & h))) |
              0;
          (l = c),
            (c = s),
            (s = o),
            (o = (i + t) | 0),
            (i = a),
            (a = n),
            (n = r),
            (r = (t + p) | 0);
        }
        (r = (r + this.A) | 0),
          (n = (n + this.B) | 0),
          (a = (a + this.C) | 0),
          (i = (i + this.D) | 0),
          (o = (o + this.E) | 0),
          (s = (s + this.F) | 0),
          (c = (c + this.G) | 0),
          (l = (l + this.H) | 0),
          this.set(r, n, a, i, o, s, c, l);
      }
      roundClean() {
        rA(aM);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), rA(this.buffer);
      }
    }
    let a$ = rw(
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
        ].map((e) => BigInt(e))
      ),
      aD = a$[0],
      aj = a$[1],
      aG = new Uint32Array(80),
      a_ = new Uint32Array(80),
      aV = rS(() => new aH());
    class aW extends rN {
      constructor(e, t) {
        super(),
          (this.finished = !1),
          (this.destroyed = !1),
          (function (e) {
            if ("function" != typeof e || "function" != typeof e.create)
              throw Error("Hash should be wrapped by utils.createHasher");
            rx(e.outputLen), rx(e.blockLen);
          })(e);
        const r = rT(t);
        if (((this.iHash = e.create()), "function" != typeof this.iHash.update))
          throw Error("Expected instance of class which extends utils.Hash");
        (this.blockLen = this.iHash.blockLen),
          (this.outputLen = this.iHash.outputLen);
        const n = this.blockLen,
          a = new Uint8Array(n);
        a.set(r.length > n ? e.create().update(r).digest() : r);
        for (let e = 0; e < a.length; e++) a[e] ^= 54;
        this.iHash.update(a), (this.oHash = e.create());
        for (let e = 0; e < a.length; e++) a[e] ^= 106;
        this.oHash.update(a), rA(a);
      }
      update(e) {
        return rB(this), this.iHash.update(e), this;
      }
      digestInto(e) {
        rB(this),
          rE(e, this.outputLen),
          (this.finished = !0),
          this.iHash.digestInto(e),
          this.oHash.update(e),
          this.oHash.digestInto(e),
          this.destroy();
      }
      digest() {
        let e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e), e;
      }
      _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        let {
          oHash: t,
          iHash: r,
          finished: n,
          destroyed: a,
          blockLen: i,
          outputLen: o,
        } = this;
        return (
          (e.finished = n),
          (e.destroyed = a),
          (e.blockLen = i),
          (e.outputLen = o),
          (e.oHash = t._cloneInto(e.oHash)),
          (e.iHash = r._cloneInto(e.iHash)),
          e
        );
      }
      clone() {
        return this._cloneInto();
      }
      destroy() {
        (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
      }
    }
    let aZ = (e, t, r) => new aW(e, t).update(r).digest();
    aZ.create = (e, t) => new aW(e, t);
    let aK = BigInt(0),
      aY = BigInt(1);
    function aJ(e) {
      return (
        e instanceof Uint8Array ||
        (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
      );
    }
    function aX(e) {
      if (!aJ(e)) throw Error("Uint8Array expected");
    }
    function aQ(e, t) {
      if ("boolean" != typeof t) throw Error(e + " boolean expected, got " + t);
    }
    function a0(e) {
      let t = e.toString(16);
      return 1 & t.length ? "0" + t : t;
    }
    function a1(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      return "" === e ? aK : BigInt("0x" + e);
    }
    let a6 =
        "function" == typeof Uint8Array.from([]).toHex &&
        "function" == typeof Uint8Array.fromHex,
      a5 = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function a2(e) {
      if ((aX(e), a6)) return e.toHex();
      let t = "";
      for (let r = 0; r < e.length; r++) t += a5[e[r]];
      return t;
    }
    function a8(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function a3(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      if (a6) return Uint8Array.fromHex(e);
      let t = e.length,
        r = t / 2;
      if (t % 2)
        throw Error("hex string expected, got unpadded hex of length " + t);
      let n = new Uint8Array(r);
      for (let t = 0, a = 0; t < r; t++, a += 2) {
        let r = a8(e.charCodeAt(a)),
          i = a8(e.charCodeAt(a + 1));
        if (void 0 === r || void 0 === i)
          throw Error(
            'hex string expected, got non-hex character "' +
              (e[a] + e[a + 1]) +
              '" at index ' +
              a
          );
        n[t] = 16 * r + i;
      }
      return n;
    }
    function a4(e) {
      return a1(a2(e));
    }
    function a7(e) {
      return aX(e), a1(a2(Uint8Array.from(e).reverse()));
    }
    function a9(e, t) {
      return a3(e.toString(16).padStart(2 * t, "0"));
    }
    function ie(e, t) {
      return a9(e, t).reverse();
    }
    function it(e, t, r) {
      let n;
      if ("string" == typeof t)
        try {
          n = a3(t);
        } catch (t) {
          throw Error(e + " must be hex string or Uint8Array, cause: " + t);
        }
      else if (aJ(t)) n = Uint8Array.from(t);
      else throw Error(e + " must be hex string or Uint8Array");
      let a = n.length;
      if ("number" == typeof r && a !== r)
        throw Error(e + " of length " + r + " expected, got " + a);
      return n;
    }
    function ir(...e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let n = e[r];
        aX(n), (t += n.length);
      }
      let r = new Uint8Array(t);
      for (let t = 0, n = 0; t < e.length; t++) {
        let a = e[t];
        r.set(a, n), (n += a.length);
      }
      return r;
    }
    let ia = (e) => "bigint" == typeof e && aK <= e;
    function ii(e, t, r) {
      return ia(e) && ia(t) && ia(r) && t <= e && e < r;
    }
    function io(e, t, r, n) {
      if (!ii(t, r, n))
        throw Error(
          "expected valid " + e + ": " + r + " <= n < " + n + ", got " + t
        );
    }
    let is = (e) => (aY << BigInt(e)) - aY,
      ic = (e) => new Uint8Array(e),
      il = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) => "string" == typeof e || aJ(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
    function iu(e, t, r = {}) {
      let n = (t, r, n) => {
        let a = il[r];
        if ("function" != typeof a) throw Error("invalid validator function");
        let i = e[t];
        if ((!n || void 0 !== i) && !a(i, e))
          throw Error(
            "param " + String(t) + " is invalid. Expected " + r + ", got " + i
          );
      };
      for (let [e, r] of Object.entries(t)) n(e, r, !1);
      for (let [e, t] of Object.entries(r)) n(e, t, !0);
      return e;
    }
    function id(e) {
      let t = new WeakMap();
      return (r, ...n) => {
        let a = t.get(r);
        if (void 0 !== a) return a;
        let i = e(r, ...n);
        return t.set(r, i), i;
      };
    }
    let ih = BigInt(0),
      ip = BigInt(1),
      ib = BigInt(2),
      im = BigInt(3),
      ig = BigInt(4),
      iy = BigInt(5),
      iw = BigInt(8);
    function iv(e, t) {
      let r = e % t;
      return r >= ih ? r : t + r;
    }
    function ix(e, t, r) {
      let n = e;
      for (; t-- > ih; ) (n *= n), (n %= r);
      return n;
    }
    function iE(e, t) {
      if (e === ih) throw Error("invert: expected non-zero number");
      if (t <= ih) throw Error("invert: expected positive modulus, got " + t);
      let r = iv(e, t),
        n = t,
        a = ih,
        i = ip,
        o = ip,
        s = ih;
      for (; r !== ih; ) {
        let e = n / r,
          t = n % r,
          c = a - o * e,
          l = i - s * e;
        (n = r), (r = t), (a = o), (i = s), (o = c), (s = l);
      }
      if (n !== ip) throw Error("invert: does not exist");
      return iv(a, t);
    }
    function iB(e, t) {
      let r = (e.ORDER + ip) / ig,
        n = e.pow(t, r);
      if (!e.eql(e.sqr(n), t)) throw Error("Cannot find square root");
      return n;
    }
    function iP(e, t) {
      let r = (e.ORDER - iy) / iw,
        n = e.mul(t, ib),
        a = e.pow(n, r),
        i = e.mul(t, a),
        o = e.mul(e.mul(i, ib), a),
        s = e.mul(i, e.sub(o, e.ONE));
      if (!e.eql(e.sqr(s), t)) throw Error("Cannot find square root");
      return s;
    }
    let iA = [
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
    function iR(e) {
      return iu(
        e,
        iA.reduce((e, t) => ((e[t] = "function"), e), {
          ORDER: "bigint",
          MASK: "bigint",
          BYTES: "isSafeInteger",
          BITS: "isSafeInteger",
        })
      );
    }
    function iI(e, t, r = !1) {
      let n = Array(t.length).fill(r ? e.ZERO : void 0),
        a = t.reduce(
          (t, r, a) => (e.is0(r) ? t : ((n[a] = t), e.mul(t, r))),
          e.ONE
        ),
        i = e.inv(a);
      return (
        t.reduceRight(
          (t, r, a) => (e.is0(r) ? t : ((n[a] = e.mul(t, n[a])), e.mul(t, r))),
          i
        ),
        n
      );
    }
    function ik(e, t) {
      let r = (e.ORDER - ip) / ib,
        n = e.pow(t, r),
        a = e.eql(n, e.ONE),
        i = e.eql(n, e.ZERO),
        o = e.eql(n, e.neg(e.ONE));
      if (!a && !i && !o) throw Error("invalid Legendre symbol result");
      return a ? 1 : i ? 0 : -1;
    }
    function iT(e, t) {
      void 0 !== t && rx(t);
      let r = void 0 !== t ? t : e.toString(2).length,
        n = Math.ceil(r / 8);
      return { nBitLength: r, nByteLength: n };
    }
    function iN(e, t, r = !1, n = {}) {
      let a;
      if (e <= ih) throw Error("invalid field: expected ORDER > 0, got " + e);
      let { nBitLength: i, nByteLength: o } = iT(e, t);
      if (o > 2048)
        throw Error("invalid field: expected ORDER of <= 2048 bytes");
      let s = Object.freeze({
        ORDER: e,
        isLE: r,
        BITS: i,
        BYTES: o,
        MASK: is(i),
        ZERO: ih,
        ONE: ip,
        create: (t) => iv(t, e),
        isValid: (t) => {
          if ("bigint" != typeof t)
            throw Error(
              "invalid field element: expected bigint, got " + typeof t
            );
          return ih <= t && t < e;
        },
        is0: (e) => e === ih,
        isOdd: (e) => (e & ip) === ip,
        neg: (t) => iv(-t, e),
        eql: (e, t) => e === t,
        sqr: (t) => iv(t * t, e),
        add: (t, r) => iv(t + r, e),
        sub: (t, r) => iv(t - r, e),
        mul: (t, r) => iv(t * r, e),
        pow: (e, t) =>
          (function (e, t, r) {
            if (r < ih) throw Error("invalid exponent, negatives unsupported");
            if (r === ih) return e.ONE;
            if (r === ip) return t;
            let n = e.ONE,
              a = t;
            for (; r > ih; )
              r & ip && (n = e.mul(n, a)), (a = e.sqr(a)), (r >>= ip);
            return n;
          })(s, e, t),
        div: (t, r) => iv(t * iE(r, e), e),
        sqrN: (e) => e * e,
        addN: (e, t) => e + t,
        subN: (e, t) => e - t,
        mulN: (e, t) => e * t,
        inv: (t) => iE(t, e),
        sqrt:
          n.sqrt ||
          ((t) => (
            a ||
              (a =
                e % ig === im
                  ? iB
                  : e % iw === iy
                  ? iP
                  : (function (e) {
                      if (e < BigInt(3))
                        throw Error("sqrt is not defined for small field");
                      let t = e - ip,
                        r = 0;
                      for (; t % ib === ih; ) (t /= ib), r++;
                      let n = ib,
                        a = iN(e);
                      for (; 1 === ik(a, n); )
                        if (n++ > 1e3)
                          throw Error(
                            "Cannot find square root: probably non-prime P"
                          );
                      if (1 === r) return iB;
                      let i = a.pow(n, t),
                        o = (t + ip) / ib;
                      return function (e, n) {
                        if (e.is0(n)) return n;
                        if (1 !== ik(e, n))
                          throw Error("Cannot find square root");
                        let a = r,
                          s = e.mul(e.ONE, i),
                          c = e.pow(n, t),
                          l = e.pow(n, o);
                        for (; !e.eql(c, e.ONE); ) {
                          if (e.is0(c)) return e.ZERO;
                          let t = 1,
                            r = e.sqr(c);
                          for (; !e.eql(r, e.ONE); )
                            if ((t++, (r = e.sqr(r)), t === a))
                              throw Error("Cannot find square root");
                          let n = ip << BigInt(a - t - 1),
                            i = e.pow(s, n);
                          (a = t),
                            (s = e.sqr(i)),
                            (c = e.mul(c, s)),
                            (l = e.mul(l, i));
                        }
                        return l;
                      };
                    })(e)),
            a(s, t)
          )),
        toBytes: (e) => (r ? ie(e, o) : a9(e, o)),
        fromBytes: (e) => {
          if (e.length !== o)
            throw Error(
              "Field.fromBytes: expected " + o + " bytes, got " + e.length
            );
          return r ? a7(e) : a4(e);
        },
        invertBatch: (e) => iI(s, e),
        cmov: (e, t, r) => (r ? t : e),
      });
      return Object.freeze(s);
    }
    function iS(e) {
      if ("bigint" != typeof e) throw Error("field order must be bigint");
      return Math.ceil(e.toString(2).length / 8);
    }
    function iC(e) {
      let t = iS(e);
      return t + Math.ceil(t / 2);
    }
    let iF = BigInt(0),
      iO = BigInt(1);
    function iU(e, t) {
      let r = t.negate();
      return e ? r : t;
    }
    function iq(e, t) {
      if (!Number.isSafeInteger(e) || e <= 0 || e > t)
        throw Error("invalid window size, expected [1.." + t + "], got W=" + e);
    }
    function iL(e, t) {
      iq(e, t);
      let r = Math.ceil(t / e) + 1,
        n = 2 ** (e - 1),
        a = 2 ** e;
      return {
        windows: r,
        windowSize: n,
        mask: is(e),
        maxNumber: a,
        shiftBy: BigInt(e),
      };
    }
    function iz(e, t, r) {
      let { windowSize: n, mask: a, maxNumber: i, shiftBy: o } = r,
        s = Number(e & a),
        c = e >> o;
      s > n && ((s -= i), (c += iO));
      let l = t * n,
        u = l + Math.abs(s) - 1,
        d = 0 === s;
      return {
        nextN: c,
        offset: u,
        isZero: d,
        isNeg: s < 0,
        isNegF: t % 2 != 0,
        offsetF: l,
      };
    }
    let iM = new WeakMap(),
      iH = new WeakMap();
    function i$(e) {
      return iH.get(e) || 1;
    }
    function iD(e) {
      return (
        iR(e.Fp),
        iu(
          e,
          { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
          { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
        ),
        Object.freeze({ ...iT(e.n, e.nBitLength), ...e, ...{ p: e.Fp.ORDER } })
      );
    }
    function ij(e) {
      void 0 !== e.lowS && aQ("lowS", e.lowS),
        void 0 !== e.prehash && aQ("prehash", e.prehash);
    }
    let iG = {
        Err: class extends Error {
          constructor(e = "") {
            super(e);
          }
        },
        _tlv: {
          encode: (e, t) => {
            let { Err: r } = iG;
            if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
            if (1 & t.length) throw new r("tlv.encode: unpadded data");
            let n = t.length / 2,
              a = a0(n);
            if ((a.length / 2) & 128)
              throw new r("tlv.encode: long form length too big");
            let i = n > 127 ? a0((a.length / 2) | 128) : "";
            return a0(e) + i + a + t;
          },
          decode(e, t) {
            let { Err: r } = iG,
              n = 0;
            if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
            if (t.length < 2 || t[n++] !== e)
              throw new r("tlv.decode: wrong tlv");
            let a = t[n++],
              i = 0;
            if (128 & a) {
              let e = 127 & a;
              if (!e)
                throw new r(
                  "tlv.decode(long): indefinite length not supported"
                );
              if (e > 4)
                throw new r("tlv.decode(long): byte length is too big");
              let o = t.subarray(n, n + e);
              if (o.length !== e)
                throw new r("tlv.decode: length bytes not complete");
              if (0 === o[0])
                throw new r("tlv.decode(long): zero leftmost byte");
              for (let e of o) i = (i << 8) | e;
              if (((n += e), i < 128))
                throw new r("tlv.decode(long): not minimal encoding");
            } else i = a;
            let o = t.subarray(n, n + i);
            if (o.length !== i) throw new r("tlv.decode: wrong value length");
            return { v: o, l: t.subarray(n + i) };
          },
        },
        _int: {
          encode(e) {
            let { Err: t } = iG;
            if (e < i_)
              throw new t("integer: negative integers are not allowed");
            let r = a0(e);
            if ((8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length))
              throw new t("unexpected DER parsing assertion: unpadded hex");
            return r;
          },
          decode(e) {
            let { Err: t } = iG;
            if (128 & e[0]) throw new t("invalid signature integer: negative");
            if (0 === e[0] && !(128 & e[1]))
              throw new t(
                "invalid signature integer: unnecessary leading zero"
              );
            return a4(e);
          },
        },
        toSig(e) {
          let { Err: t, _int: r, _tlv: n } = iG,
            a = it("signature", e),
            { v: i, l: o } = n.decode(48, a);
          if (o.length)
            throw new t("invalid signature: left bytes after parsing");
          let { v: s, l: c } = n.decode(2, i),
            { v: l, l: u } = n.decode(2, c);
          if (u.length)
            throw new t("invalid signature: left bytes after parsing");
          return { r: r.decode(s), s: r.decode(l) };
        },
        hexFromSig(e) {
          let { _tlv: t, _int: r } = iG,
            n = t.encode(2, r.encode(e.r)),
            a = t.encode(2, r.encode(e.s));
          return t.encode(48, n + a);
        },
      },
      i_ = BigInt(0),
      iV = BigInt(1),
      iW = BigInt(2),
      iZ = BigInt(3),
      iK = BigInt(4),
      iY = BigInt(
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
      ),
      iJ = BigInt(
        "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
      ),
      iX = BigInt(0),
      iQ = BigInt(1),
      i0 = BigInt(2),
      i1 = (e, t) => (e + t / i0) / t,
      i6 = iN(iY, void 0, void 0, {
        sqrt: function (e) {
          let t = BigInt(3),
            r = BigInt(6),
            n = BigInt(11),
            a = BigInt(22),
            i = BigInt(23),
            o = BigInt(44),
            s = BigInt(88),
            c = (e * e * e) % iY,
            l = (c * c * e) % iY,
            u = (ix(l, t, iY) * l) % iY,
            d = (ix(u, t, iY) * l) % iY,
            f = (ix(d, i0, iY) * c) % iY,
            h = (ix(f, n, iY) * f) % iY,
            p = (ix(h, a, iY) * h) % iY,
            b = (ix(p, o, iY) * p) % iY,
            m = (ix(b, s, iY) * b) % iY,
            g = (ix(m, o, iY) * p) % iY,
            y = (ix(g, t, iY) * l) % iY,
            w = (ix(y, i, iY) * h) % iY,
            v = (ix(w, r, iY) * c) % iY,
            x = ix(v, i0, iY);
          if (!i6.eql(i6.sqr(x), e)) throw Error("Cannot find square root");
          return x;
        },
      }),
      i5 =
        ((a = {
          a: iX,
          b: BigInt(7),
          Fp: i6,
          n: iJ,
          Gx: BigInt(
            "55066263022277343669578718895168534326250603453777594175500187360389116729240"
          ),
          Gy: BigInt(
            "32670510020758816978083085130507043184471273380659243275938904335757337482424"
          ),
          h: BigInt(1),
          lowS: !0,
          endo: {
            beta: BigInt(
              "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
            ),
            splitScalar: (e) => {
              let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                r = -iQ * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                a = BigInt("0x100000000000000000000000000000000"),
                i = i1(t * e, iJ),
                o = i1(-r * e, iJ),
                s = iv(e - i * t - o * n, iJ),
                c = iv(-i * r - o * t, iJ),
                l = s > a,
                u = c > a;
              if ((l && (s = iJ - s), u && (c = iJ - c), s > a || c > a))
                throw Error("splitScalar: Endomorphism failed, k=" + e);
              return { k1neg: l, k1: s, k2neg: u, k2: c };
            },
          },
        }),
        {
          ...(r = (e) =>
            (function (e) {
              let t,
                r =
                  (iu(
                    (t = iD(e)),
                    { hash: "hash", hmac: "function", randomBytes: "function" },
                    {
                      bits2int: "function",
                      bits2int_modN: "function",
                      lowS: "boolean",
                    }
                  ),
                  Object.freeze({ lowS: !0, ...t })),
                { Fp: n, n: a, nByteLength: i, nBitLength: o } = r,
                s = n.BYTES + 1,
                c = 2 * n.BYTES + 1;
              function l(e) {
                return iv(e, a);
              }
              let {
                  ProjectivePoint: u,
                  normPrivateKeyToScalar: d,
                  weierstrassEquation: f,
                  isWithinCurveOrder: h,
                } = (function (e) {
                  var t;
                  let r = (function (e) {
                      let t = iD(e);
                      iu(
                        t,
                        { a: "field", b: "field" },
                        {
                          allowInfinityPoint: "boolean",
                          allowedPrivateKeyLengths: "array",
                          clearCofactor: "function",
                          fromBytes: "function",
                          isTorsionFree: "function",
                          toBytes: "function",
                          wrapPrivateKey: "boolean",
                        }
                      );
                      let { endo: r, Fp: n, a } = t;
                      if (r) {
                        if (!n.eql(a, n.ZERO))
                          throw Error("invalid endo: CURVE.a must be 0");
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            'invalid endo: expected "beta": bigint and "splitScalar": function'
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: n } = r,
                    a = iN(r.n, r.nBitLength),
                    i =
                      r.toBytes ||
                      ((e, t, r) => {
                        let a = t.toAffine();
                        return ir(
                          Uint8Array.from([4]),
                          n.toBytes(a.x),
                          n.toBytes(a.y)
                        );
                      }),
                    o =
                      r.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: n.fromBytes(t.subarray(0, n.BYTES)),
                          y: n.fromBytes(t.subarray(n.BYTES, 2 * n.BYTES)),
                        };
                      });
                  function s(e) {
                    let { a: t, b: a } = r,
                      i = n.sqr(e),
                      o = n.mul(i, e);
                    return n.add(n.add(o, n.mul(e, t)), a);
                  }
                  function c(e, t) {
                    let r = n.sqr(t),
                      a = s(e);
                    return n.eql(r, a);
                  }
                  if (!c(r.Gx, r.Gy))
                    throw Error("bad curve params: generator point");
                  let l = n.mul(n.pow(r.a, iZ), iK),
                    u = n.mul(n.sqr(r.b), BigInt(27));
                  if (n.is0(n.add(l, u)))
                    throw Error("bad curve params: a or b");
                  function d(e) {
                    let t,
                      {
                        allowedPrivateKeyLengths: n,
                        nByteLength: a,
                        wrapPrivateKey: i,
                        n: o,
                      } = r;
                    if (n && "bigint" != typeof e) {
                      if (
                        (aJ(e) && (e = a2(e)),
                        "string" != typeof e || !n.includes(e.length))
                      )
                        throw Error("invalid private key");
                      e = e.padStart(2 * a, "0");
                    }
                    try {
                      t =
                        "bigint" == typeof e ? e : a4(it("private key", e, a));
                    } catch (t) {
                      throw Error(
                        "invalid private key, expected hex or " +
                          a +
                          " bytes, got " +
                          typeof e
                      );
                    }
                    return i && (t = iv(t, o)), io("private key", t, iV, o), t;
                  }
                  function f(e) {
                    if (!(e instanceof b))
                      throw Error("ProjectivePoint expected");
                  }
                  let h = id((e, t) => {
                      let { px: r, py: a, pz: i } = e;
                      if (n.eql(i, n.ONE)) return { x: r, y: a };
                      let o = e.is0();
                      null == t && (t = o ? n.ONE : n.inv(i));
                      let s = n.mul(r, t),
                        c = n.mul(a, t),
                        l = n.mul(i, t);
                      if (o) return { x: n.ZERO, y: n.ZERO };
                      if (!n.eql(l, n.ONE)) throw Error("invZ was invalid");
                      return { x: s, y: c };
                    }),
                    p = id((e) => {
                      if (e.is0()) {
                        if (r.allowInfinityPoint && !n.is0(e.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: a } = e.toAffine();
                      if (!n.isValid(t) || !n.isValid(a))
                        throw Error("bad point: x or y not FE");
                      if (!c(t, a))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class b {
                    constructor(e, t, r) {
                      if (null == e || !n.isValid(e)) throw Error("x required");
                      if (null == t || !n.isValid(t) || n.is0(t))
                        throw Error("y required");
                      if (null == r || !n.isValid(r)) throw Error("z required");
                      (this.px = e),
                        (this.py = t),
                        (this.pz = r),
                        Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: r } = e || {};
                      if (!e || !n.isValid(t) || !n.isValid(r))
                        throw Error("invalid affine point");
                      if (e instanceof b)
                        throw Error("projective point not allowed");
                      let a = (e) => n.eql(e, n.ZERO);
                      return a(t) && a(r) ? b.ZERO : new b(t, r, n.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = iI(
                        n,
                        e.map((e) => e.pz)
                      );
                      return e
                        .map((e, r) => e.toAffine(t[r]))
                        .map(b.fromAffine);
                    }
                    static fromHex(e) {
                      let t = b.fromAffine(o(it("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return b.BASE.multiply(d(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, r, n) {
                        if (!Array.isArray(r)) throw Error("array expected");
                        r.forEach((t, r) => {
                          if (!(t instanceof e))
                            throw Error("invalid point at index " + r);
                        });
                        if (!Array.isArray(n))
                          throw Error("array of scalars expected");
                        n.forEach((e, r) => {
                          if (!t.isValid(e))
                            throw Error("invalid scalar at index " + r);
                        });
                        let a = r.length,
                          i = n.length;
                        if (a !== i)
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let o = e.ZERO,
                          s = (function (e) {
                            let t;
                            for (t = 0; e > aK; e >>= aY, t += 1);
                            return t;
                          })(BigInt(a)),
                          c = 1;
                        s > 12
                          ? (c = s - 3)
                          : s > 4
                          ? (c = s - 2)
                          : s > 0 && (c = 2);
                        let l = is(c),
                          u = Array(Number(l) + 1).fill(o),
                          d = Math.floor((t.BITS - 1) / c) * c,
                          f = o;
                        for (let e = d; e >= 0; e -= c) {
                          u.fill(o);
                          for (let t = 0; t < i; t++) {
                            let a = Number((n[t] >> BigInt(e)) & l);
                            u[a] = u[a].add(r[t]);
                          }
                          let t = o;
                          for (let e = u.length - 1, r = o; e > 0; e--)
                            (r = r.add(u[e])), (t = t.add(r));
                          if (((f = f.add(t)), 0 !== e))
                            for (let e = 0; e < c; e++) f = f.double();
                        }
                        return f;
                      })(b, a, e, t);
                    }
                    _setWindowSize(e) {
                      y.setWindowSize(this, e);
                    }
                    assertValidity() {
                      p(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (n.isOdd) return !n.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      f(e);
                      let { px: t, py: r, pz: a } = this,
                        { px: i, py: o, pz: s } = e,
                        c = n.eql(n.mul(t, s), n.mul(i, a)),
                        l = n.eql(n.mul(r, s), n.mul(o, a));
                      return c && l;
                    }
                    negate() {
                      return new b(this.px, n.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = r,
                        a = n.mul(t, iZ),
                        { px: i, py: o, pz: s } = this,
                        c = n.ZERO,
                        l = n.ZERO,
                        u = n.ZERO,
                        d = n.mul(i, i),
                        f = n.mul(o, o),
                        h = n.mul(s, s),
                        p = n.mul(i, o);
                      return (
                        (p = n.add(p, p)),
                        (u = n.mul(i, s)),
                        (u = n.add(u, u)),
                        (c = n.mul(e, u)),
                        (l = n.mul(a, h)),
                        (l = n.add(c, l)),
                        (c = n.sub(f, l)),
                        (l = n.add(f, l)),
                        (l = n.mul(c, l)),
                        (c = n.mul(p, c)),
                        (u = n.mul(a, u)),
                        (h = n.mul(e, h)),
                        (p = n.sub(d, h)),
                        (p = n.mul(e, p)),
                        (p = n.add(p, u)),
                        (u = n.add(d, d)),
                        (d = n.add(u, d)),
                        (d = n.add(d, h)),
                        (d = n.mul(d, p)),
                        (l = n.add(l, d)),
                        (h = n.mul(o, s)),
                        (h = n.add(h, h)),
                        (d = n.mul(h, p)),
                        (c = n.sub(c, d)),
                        (u = n.mul(h, f)),
                        (u = n.add(u, u)),
                        new b(c, l, (u = n.add(u, u)))
                      );
                    }
                    add(e) {
                      f(e);
                      let { px: t, py: a, pz: i } = this,
                        { px: o, py: s, pz: c } = e,
                        l = n.ZERO,
                        u = n.ZERO,
                        d = n.ZERO,
                        h = r.a,
                        p = n.mul(r.b, iZ),
                        m = n.mul(t, o),
                        g = n.mul(a, s),
                        y = n.mul(i, c),
                        w = n.add(t, a),
                        v = n.add(o, s);
                      (w = n.mul(w, v)),
                        (v = n.add(m, g)),
                        (w = n.sub(w, v)),
                        (v = n.add(t, i));
                      let x = n.add(o, c);
                      return (
                        (v = n.mul(v, x)),
                        (x = n.add(m, y)),
                        (v = n.sub(v, x)),
                        (x = n.add(a, i)),
                        (l = n.add(s, c)),
                        (x = n.mul(x, l)),
                        (l = n.add(g, y)),
                        (x = n.sub(x, l)),
                        (d = n.mul(h, v)),
                        (l = n.mul(p, y)),
                        (d = n.add(l, d)),
                        (l = n.sub(g, d)),
                        (d = n.add(g, d)),
                        (u = n.mul(l, d)),
                        (g = n.add(m, m)),
                        (g = n.add(g, m)),
                        (y = n.mul(h, y)),
                        (v = n.mul(p, v)),
                        (g = n.add(g, y)),
                        (y = n.sub(m, y)),
                        (y = n.mul(h, y)),
                        (v = n.add(v, y)),
                        (m = n.mul(g, v)),
                        (u = n.add(u, m)),
                        (m = n.mul(x, v)),
                        (l = n.mul(w, l)),
                        (l = n.sub(l, m)),
                        (m = n.mul(w, g)),
                        (d = n.mul(x, d)),
                        new b(l, u, (d = n.add(d, m)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(b.ZERO);
                    }
                    wNAF(e) {
                      return y.wNAFCached(this, e, b.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: a } = r;
                      io("scalar", e, i_, a);
                      let i = b.ZERO;
                      if (e === i_) return i;
                      if (this.is0() || e === iV) return this;
                      if (!t || y.hasPrecomputes(this))
                        return y.wNAFCachedUnsafe(this, e, b.normalizeZ);
                      let {
                          k1neg: o,
                          k1: s,
                          k2neg: c,
                          k2: l,
                        } = t.splitScalar(e),
                        u = i,
                        d = i,
                        f = this;
                      for (; s > i_ || l > i_; )
                        s & iV && (u = u.add(f)),
                          l & iV && (d = d.add(f)),
                          (f = f.double()),
                          (s >>= iV),
                          (l >>= iV);
                      return (
                        o && (u = u.negate()),
                        c && (d = d.negate()),
                        (d = new b(n.mul(d.px, t.beta), d.py, d.pz)),
                        u.add(d)
                      );
                    }
                    multiply(e) {
                      let t,
                        a,
                        { endo: i, n: o } = r;
                      if ((io("scalar", e, iV, o), i)) {
                        let {
                            k1neg: r,
                            k1: o,
                            k2neg: s,
                            k2: c,
                          } = i.splitScalar(e),
                          { p: l, f: u } = this.wNAF(o),
                          { p: d, f: f } = this.wNAF(c);
                        (l = y.constTimeNegate(r, l)),
                          (d = y.constTimeNegate(s, d)),
                          (d = new b(n.mul(d.px, i.beta), d.py, d.pz)),
                          (t = l.add(d)),
                          (a = u.add(f));
                      } else {
                        let { p: r, f: n } = this.wNAF(e);
                        (t = r), (a = n);
                      }
                      return b.normalizeZ([t, a])[0];
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                      let n = b.BASE,
                        a = (e, t) =>
                          t !== i_ && t !== iV && e.equals(n)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        i = a(this, t).add(a(e, r));
                      return i.is0() ? void 0 : i;
                    }
                    toAffine(e) {
                      return h(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = r;
                      if (e === iV) return !0;
                      if (t) return t(b, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = r;
                      return e === iV
                        ? this
                        : t
                        ? t(b, this)
                        : this.multiplyUnsafe(r.h);
                    }
                    toRawBytes(e = !0) {
                      return (
                        aQ("isCompressed", e),
                        this.assertValidity(),
                        i(b, this, e)
                      );
                    }
                    toHex(e = !0) {
                      return aQ("isCompressed", e), a2(this.toRawBytes(e));
                    }
                  }
                  (b.BASE = new b(r.Gx, r.Gy, n.ONE)),
                    (b.ZERO = new b(n.ZERO, n.ONE, n.ZERO));
                  let { endo: m, nBitLength: g } = r,
                    y =
                      ((t = m ? Math.ceil(g / 2) : g),
                      {
                        constTimeNegate: iU,
                        hasPrecomputes: (e) => 1 !== i$(e),
                        unsafeLadder(e, t, r = b.ZERO) {
                          let n = e;
                          for (; t > iF; )
                            t & iO && (r = r.add(n)),
                              (n = n.double()),
                              (t >>= iO);
                          return r;
                        },
                        precomputeWindow(e, r) {
                          let { windows: n, windowSize: a } = iL(r, t),
                            i = [],
                            o = e,
                            s = o;
                          for (let e = 0; e < n; e++) {
                            (s = o), i.push(s);
                            for (let e = 1; e < a; e++)
                              (s = s.add(o)), i.push(s);
                            o = s.double();
                          }
                          return i;
                        },
                        wNAF(e, r, n) {
                          let a = b.ZERO,
                            i = b.BASE,
                            o = iL(e, t);
                          for (let e = 0; e < o.windows; e++) {
                            let {
                              nextN: t,
                              offset: s,
                              isZero: c,
                              isNeg: l,
                              isNegF: u,
                              offsetF: d,
                            } = iz(n, e, o);
                            (n = t),
                              c
                                ? (i = i.add(iU(u, r[d])))
                                : (a = a.add(iU(l, r[s])));
                          }
                          return { p: a, f: i };
                        },
                        wNAFUnsafe(e, r, n, a = b.ZERO) {
                          let i = iL(e, t);
                          for (let e = 0; e < i.windows && n !== iF; e++) {
                            let {
                              nextN: t,
                              offset: o,
                              isZero: s,
                              isNeg: c,
                            } = iz(n, e, i);
                            if (((n = t), !s)) {
                              let e = r[o];
                              a = a.add(c ? e.negate() : e);
                            }
                          }
                          return a;
                        },
                        getPrecomputes(e, t, r) {
                          let n = iM.get(t);
                          return (
                            n ||
                              ((n = this.precomputeWindow(t, e)),
                              1 !== e && iM.set(t, r(n))),
                            n
                          );
                        },
                        wNAFCached(e, t, r) {
                          let n = i$(e);
                          return this.wNAF(n, this.getPrecomputes(n, e, r), t);
                        },
                        wNAFCachedUnsafe(e, t, r, n) {
                          let a = i$(e);
                          return 1 === a
                            ? this.unsafeLadder(e, t, n)
                            : this.wNAFUnsafe(
                                a,
                                this.getPrecomputes(a, e, r),
                                t,
                                n
                              );
                        },
                        setWindowSize(e, r) {
                          iq(r, t), iH.set(e, r), iM.delete(e);
                        },
                      });
                  return {
                    CURVE: r,
                    ProjectivePoint: b,
                    normPrivateKeyToScalar: d,
                    weierstrassEquation: s,
                    isWithinCurveOrder: function (e) {
                      return ii(e, iV, r.n);
                    },
                  };
                })({
                  ...r,
                  toBytes(e, t, r) {
                    let a = t.toAffine(),
                      i = n.toBytes(a.x);
                    return (aQ("isCompressed", r), r)
                      ? ir(Uint8Array.from([t.hasEvenY() ? 2 : 3]), i)
                      : ir(Uint8Array.from([4]), i, n.toBytes(a.y));
                  },
                  fromBytes(e) {
                    let t = e.length,
                      r = e[0],
                      a = e.subarray(1);
                    if (t === s && (2 === r || 3 === r)) {
                      let e,
                        t = a4(a);
                      if (!ii(t, iV, n.ORDER))
                        throw Error("Point is not on curve");
                      let i = f(t);
                      try {
                        e = n.sqrt(i);
                      } catch (e) {
                        throw Error(
                          "Point is not on curve" +
                            (e instanceof Error ? ": " + e.message : "")
                        );
                      }
                      return (
                        ((1 & r) == 1) != ((e & iV) === iV) && (e = n.neg(e)),
                        { x: t, y: e }
                      );
                    }
                    if (t === c && 4 === r)
                      return {
                        x: n.fromBytes(a.subarray(0, n.BYTES)),
                        y: n.fromBytes(a.subarray(n.BYTES, 2 * n.BYTES)),
                      };
                    throw Error(
                      "invalid Point, expected length of " +
                        s +
                        ", or uncompressed " +
                        c +
                        ", got " +
                        t
                    );
                  },
                }),
                p = (e, t, r) => a4(e.slice(t, r));
              class b {
                constructor(e, t, r) {
                  io("r", e, iV, a),
                    io("s", t, iV, a),
                    (this.r = e),
                    (this.s = t),
                    null != r && (this.recovery = r),
                    Object.freeze(this);
                }
                static fromCompact(e) {
                  return new b(
                    p((e = it("compactSignature", e, 2 * i)), 0, i),
                    p(e, i, 2 * i)
                  );
                }
                static fromDER(e) {
                  let { r: t, s: r } = iG.toSig(it("DER", e));
                  return new b(t, r);
                }
                assertValidity() {}
                addRecoveryBit(e) {
                  return new b(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: t, s: i, recovery: o } = this,
                    s = y(it("msgHash", e));
                  if (null == o || ![0, 1, 2, 3].includes(o))
                    throw Error("recovery id invalid");
                  let c = 2 === o || 3 === o ? t + r.n : t;
                  if (c >= n.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let d = (1 & o) == 0 ? "02" : "03",
                    f = u.fromHex(d + a2(a9(c, n.BYTES))),
                    h = iE(c, a),
                    p = l(-s * h),
                    b = l(i * h),
                    m = u.BASE.multiplyAndAddUnsafe(f, p, b);
                  if (!m) throw Error("point at infinify");
                  return m.assertValidity(), m;
                }
                hasHighS() {
                  return this.s > a >> iV;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new b(this.r, l(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return a3(this.toDERHex());
                }
                toDERHex() {
                  return iG.hexFromSig(this);
                }
                toCompactRawBytes() {
                  return a3(this.toCompactHex());
                }
                toCompactHex() {
                  return a2(a9(this.r, i)) + a2(a9(this.s, i));
                }
              }
              function m(e) {
                if ("bigint" == typeof e) return !1;
                if (e instanceof u) return !0;
                let t = it("key", e).length,
                  a = n.BYTES,
                  o = a + 1;
                if (!r.allowedPrivateKeyLengths && i !== o)
                  return t === o || t === 2 * a + 1;
              }
              let g =
                  r.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let t = a4(e),
                      r = 8 * e.length - o;
                    return r > 0 ? t >> BigInt(r) : t;
                  },
                y =
                  r.bits2int_modN ||
                  function (e) {
                    return l(g(e));
                  },
                w = is(o);
              function v(e) {
                return io("num < 2^" + o, e, i_, w), a9(e, i);
              }
              let x = { lowS: r.lowS, prehash: !1 },
                E = { lowS: r.lowS, prehash: !1 };
              return (
                u.BASE._setWindowSize(8),
                {
                  CURVE: r,
                  getPublicKey: function (e, t = !0) {
                    return u.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, r = !0) {
                    if (!0 === m(e))
                      throw Error("first arg must be private key");
                    if (!1 === m(t))
                      throw Error("second arg must be public key");
                    return u.fromHex(t).multiply(d(e)).toRawBytes(r);
                  },
                  sign: function (e, t, i = x) {
                    let { seed: o, k2sig: s } = (function (e, t, i = x) {
                      if (["recovered", "canonical"].some((e) => e in i))
                        throw Error("sign() legacy options not supported");
                      let { hash: o, randomBytes: s } = r,
                        { lowS: c, prehash: f, extraEntropy: p } = i;
                      null == c && (c = !0),
                        (e = it("msgHash", e)),
                        ij(i),
                        f && (e = it("prehashed msgHash", o(e)));
                      let m = y(e),
                        w = d(t),
                        E = [v(w), v(m)];
                      if (null != p && !1 !== p) {
                        let e = !0 === p ? s(n.BYTES) : p;
                        E.push(it("extraEntropy", e));
                      }
                      return {
                        seed: ir(...E),
                        k2sig: function (e) {
                          var t;
                          let r = g(e);
                          if (!h(r)) return;
                          let n = iE(r, a),
                            i = u.BASE.multiply(r).toAffine(),
                            o = l(i.x);
                          if (o === i_) return;
                          let s = l(n * l(m + o * w));
                          if (s === i_) return;
                          let d = (2 * (i.x !== o)) | Number(i.y & iV),
                            f = s;
                          return (
                            c &&
                              s > a >> iV &&
                              ((f = (t = s) > a >> iV ? l(-t) : t), (d ^= 1)),
                            new b(o, f, d)
                          );
                        },
                      };
                    })(e, t, i);
                    return (function (e, t, r) {
                      if ("number" != typeof e || e < 2)
                        throw Error("hashLen must be a number");
                      if ("number" != typeof t || t < 2)
                        throw Error("qByteLen must be a number");
                      if ("function" != typeof r)
                        throw Error("hmacFn must be a function");
                      let n = ic(e),
                        a = ic(e),
                        i = 0,
                        o = () => {
                          n.fill(1), a.fill(0), (i = 0);
                        },
                        s = (...e) => r(a, n, ...e),
                        c = (e = ic(0)) => {
                          let t;
                          if (
                            ((a = s(((t = [0]), Uint8Array.from(t)), e)),
                            (n = s()),
                            0 !== e.length)
                          ) {
                            let t;
                            (a = s(((t = [1]), Uint8Array.from(t)), e)),
                              (n = s());
                          }
                        },
                        l = () => {
                          if (i++ >= 1e3)
                            throw Error("drbg: tried 1000 values");
                          let e = 0,
                            r = [];
                          for (; e < t; ) {
                            let t = (n = s()).slice();
                            r.push(t), (e += n.length);
                          }
                          return ir(...r);
                        };
                      return (e, t) => {
                        let r;
                        for (o(), c(e); !(r = t(l())); ) c();
                        return o(), r;
                      };
                    })(
                      r.hash.outputLen,
                      r.nByteLength,
                      r.hmac
                    )(o, s);
                  },
                  verify: function (e, t, n, i = E) {
                    let o, s;
                    (t = it("msgHash", t)), (n = it("publicKey", n));
                    let { lowS: c, prehash: d, format: f } = i;
                    if ((ij(i), "strict" in i))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== f && "compact" !== f && "der" !== f)
                      throw Error("format must be compact or der");
                    let h = "string" == typeof e || aJ(e),
                      p =
                        !h &&
                        !f &&
                        "object" == typeof e &&
                        null !== e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s;
                    if (!h && !p)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((p && (s = new b(e.r, e.s)), h)) {
                        try {
                          "compact" !== f && (s = b.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof iG.Err)) throw e;
                        }
                        s || "der" === f || (s = b.fromCompact(e));
                      }
                      o = u.fromHex(n);
                    } catch (e) {
                      return !1;
                    }
                    if (!s || (c && s.hasHighS())) return !1;
                    d && (t = r.hash(t));
                    let { r: m, s: g } = s,
                      w = y(t),
                      v = iE(g, a),
                      x = l(w * v),
                      B = l(m * v),
                      P = u.BASE.multiplyAndAddUnsafe(o, x, B)?.toAffine();
                    return !!P && l(P.x) === m;
                  },
                  ProjectivePoint: u,
                  Signature: b,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return d(e), !0;
                      } catch (e) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: d,
                    randomPrivateKey: () => {
                      let e = iC(r.n);
                      return (function (e, t, r = !1) {
                        let n = e.length,
                          a = iS(t),
                          i = iC(t);
                        if (n < 16 || n < i || n > 1024)
                          throw Error(
                            "expected " + i + "-1024 bytes of input, got " + n
                          );
                        let o = iv(r ? a7(e) : a4(e), t - ip) + ip;
                        return r ? ie(o, a) : a9(o, a);
                      })(r.randomBytes(e), r.n);
                    },
                    precompute: (e = 8, t = u.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...a,
              hash: e,
              hmac: (t, ...r) =>
                aZ(
                  e,
                  t,
                  (function (...e) {
                    let t = 0;
                    for (let r = 0; r < e.length; r++) {
                      let n = e[r];
                      rE(n), (t += n.length);
                    }
                    let r = new Uint8Array(t);
                    for (let t = 0, n = 0; t < e.length; t++) {
                      let a = e[t];
                      r.set(a, n), (n += a.length);
                    }
                    return r;
                  })(...r)
                ),
              randomBytes: rC,
            }))(aV),
          create: r,
        });
    i5.ProjectivePoint;
    let i2 =
        ((n = [
          [
            "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
            "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
            "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
            "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c",
          ],
          [
            "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
            "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
            "0x0000000000000000000000000000000000000000000000000000000000000001",
          ],
          [
            "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
            "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
            "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
            "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84",
          ],
          [
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
            "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
            "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
            "0x0000000000000000000000000000000000000000000000000000000000000001",
          ],
        ]
          .map((e) => e.map((e) => BigInt(e)))
          .map((e) => Array.from(e).reverse())),
        (e, t) => {
          let [r, a, i, o] = n.map((t) =>
              t.reduce((t, r) => i6.add(i6.mul(t, e), r))
            ),
            [s, c] = iI(i6, [a, o], !0);
          return (
            (e = i6.mul(r, s)), (t = i6.mul(t, i6.mul(i, c))), { x: e, y: t }
          );
        }),
      i8 = (function (e, t) {
        if ((iR(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z)))
          throw Error("mapToCurveSimpleSWU: invalid opts");
        let r = (function (e, t) {
          let r = e.ORDER,
            n = i_;
          for (let e = r - iV; e % iW === i_; e /= iW) n += iV;
          let a = n,
            i = iW << (a - iV - iV),
            o = i * iW,
            s = (r - iV) / o,
            c = (s - iV) / iW,
            l = o - iV,
            u = e.pow(t, s),
            d = e.pow(t, (s + iV) / iW),
            f = (t, r) => {
              let n = u,
                o = e.pow(r, l),
                s = e.sqr(o);
              s = e.mul(s, r);
              let f = e.mul(t, s);
              (f = e.pow(f, c)),
                (f = e.mul(f, o)),
                (o = e.mul(f, r)),
                (s = e.mul(f, t));
              let h = e.mul(s, o);
              f = e.pow(h, i);
              let p = e.eql(f, e.ONE);
              (o = e.mul(s, d)),
                (f = e.mul(h, n)),
                (s = e.cmov(o, s, p)),
                (h = e.cmov(f, h, p));
              for (let t = a; t > iV; t--) {
                let r = t - iW;
                r = iW << (r - iV);
                let a = e.pow(h, r),
                  i = e.eql(a, e.ONE);
                (o = e.mul(s, n)),
                  (n = e.mul(n, n)),
                  (a = e.mul(h, n)),
                  (s = e.cmov(o, s, i)),
                  (h = e.cmov(a, h, i));
              }
              return { isValid: p, value: s };
            };
          if (e.ORDER % iK === iZ) {
            let r = (e.ORDER - iZ) / iK,
              n = e.sqrt(e.neg(t));
            f = (t, a) => {
              let i = e.sqr(a),
                o = e.mul(t, a);
              i = e.mul(i, o);
              let s = e.pow(i, r);
              s = e.mul(s, o);
              let c = e.mul(s, n),
                l = e.mul(e.sqr(s), a),
                u = e.eql(l, t),
                d = e.cmov(c, s, u);
              return { isValid: u, value: d };
            };
          }
          return f;
        })(e, t.Z);
        if (!e.isOdd) throw Error("Fp.isOdd is not implemented!");
        return (n) => {
          let a, i, o, s, c, l, u, d;
          (a = e.sqr(n)),
            (a = e.mul(a, t.Z)),
            (i = e.sqr(a)),
            (i = e.add(i, a)),
            (o = e.add(i, e.ONE)),
            (o = e.mul(o, t.B)),
            (s = e.cmov(t.Z, e.neg(i), !e.eql(i, e.ZERO))),
            (s = e.mul(s, t.A)),
            (i = e.sqr(o)),
            (l = e.sqr(s)),
            (c = e.mul(l, t.A)),
            (i = e.add(i, c)),
            (i = e.mul(i, o)),
            (l = e.mul(l, s)),
            (c = e.mul(l, t.B)),
            (i = e.add(i, c)),
            (u = e.mul(a, o));
          let { isValid: f, value: h } = r(i, l);
          (d = e.mul(a, n)),
            (d = e.mul(d, h)),
            (u = e.cmov(u, o, f)),
            (d = e.cmov(d, h, f));
          let p = e.isOdd(n) === e.isOdd(d);
          d = e.cmov(e.neg(d), d, p);
          let b = iI(e, [s], !0)[0];
          return { x: (u = e.mul(u, b)), y: d };
        };
      })(i6, {
        A: BigInt(
          "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"
        ),
        B: BigInt("1771"),
        Z: i6.create(BigInt("-11")),
      });
    !(function (e, t, r) {
      if ("function" != typeof t) throw Error("mapToCurve() must be defined");
    })(
      i5.ProjectivePoint,
      (e) => {
        let { x: t, y: r } = i8(i6.create(e[0]));
        return i2(t, r);
      },
      i6.ORDER
    );
    rm.BaseError, r8("ox.secp256k1.fromSeed.v1");
    let i3 =
        "0x8010801080108010801080108010801080108010801080108010801080108010",
      i4 = nK(
        "(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data"
      );
    function i7(e) {
      if ("string" == typeof e) {
        if (rY.slice(e, -32) !== i3) throw new oe(e);
      } else ax(e.authorization);
    }
    function i9(e) {
      i7(e);
      let t = rY.toNumber(rY.slice(e, -64, -32)),
        r = rY.slice(e, -t - 64, -64),
        n = rY.slice(e, 0, -t - 64),
        [a, i, o] = nV(i4, r);
      return {
        authorization: (function (e, t = {}) {
          return "string" == typeof e.chainId
            ? (function (e) {
                let { address: t, chainId: r, nonce: n } = e,
                  a = aB(e);
                return {
                  address: t,
                  chainId: Number(r),
                  nonce: BigInt(n),
                  ...a,
                };
              })(e)
            : { ...e, ...t.signature };
        })({
          address: a.delegation,
          chainId: Number(a.chainId),
          nonce: a.nonce,
          yParity: a.yParity,
          r: a.r,
          s: a.s,
        }),
        signature: n,
        ...(o && "0x" !== o ? { data: o, to: i } : {}),
      };
    }
    class oe extends aC.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureErc8010.InvalidWrappedSignatureError",
          });
      }
    }
    e.s(
      [
        "InvalidWrappedSignatureError",
        0,
        oe,
        "assert",
        0,
        i7,
        "from",
        0,
        function (e) {
          return "string" == typeof e ? i9(e) : e;
        },
        "magicBytes",
        0,
        i3,
        "suffixParameters",
        0,
        i4,
        "unwrap",
        0,
        i9,
        "validate",
        0,
        function (e) {
          try {
            return i7(e), !0;
          } catch {
            return !1;
          }
        },
        "wrap",
        0,
        function (e) {
          let { data: t, signature: r } = e;
          i7(e);
          let n = (function (e, t = {}) {
              let r = na(
                `0x${(function (e, t = {}) {
                  nl(e);
                  let { prefix: r, x: n, y: a } = e,
                    { includePrefix: i = !0 } = t;
                  return rY.concat(
                    i ? rY.fromNumber(r, { size: 1 }) : "0x",
                    rY.fromNumber(n, { size: 32 }),
                    "bigint" == typeof a ? rY.fromNumber(a, { size: 32 }) : "0x"
                  );
                })(e).slice(4)}`
              ).substring(26);
              return (function (e, t = {}) {
                let { checksum: r = !1 } = t;
                return (ng(e), r) ? ny(e) : e;
              })(`0x${r}`, t);
            })(
              (function (e) {
                var t;
                let r,
                  { payload: n, signature: a } = e,
                  { r: i, s: o, yParity: s } = a;
                return (
                  (t = new i5.Signature(BigInt(i), BigInt(o))
                    .addRecoveryBit(s)
                    .recoverPublicKey(rY.from(n).substring(2))),
                  nl(
                    (r = (() => {
                      if (rY.validate(t)) return nu(t);
                      if (
                        (function (e) {
                          try {
                            if (
                              !(e instanceof Uint8Array) &&
                              (!e ||
                                "object" != typeof e ||
                                !("BYTES_PER_ELEMENT" in e) ||
                                1 !== e.BYTES_PER_ELEMENT ||
                                "Uint8Array" !== e.constructor.name)
                            )
                              throw new ne(e);
                            return !0;
                          } catch {
                            return !1;
                          }
                        })(t)
                      ) {
                        var e;
                        return (e = t), nu(rY.fromBytes(e));
                      }
                      let { prefix: r, x: n, y: a } = t;
                      return "bigint" == typeof n && "bigint" == typeof a
                        ? { prefix: r ?? 4, x: n, y: a }
                        : { prefix: r, x: n };
                    })())
                  ),
                  r
                );
              })({
                payload: (function (e, t = {}) {
                  let { presign: r } = t;
                  return na(
                    rY.concat(
                      "0x05",
                      (function (e, t = {}) {
                        let { as: r = "Hex" } = t;
                        return (function (e, t) {
                          let { as: r } = t,
                            n = (function e(t) {
                              var r, n;
                              let a, i, o, s;
                              return Array.isArray(t)
                                ? ((i = aw(
                                    (a = (r = t.map((t) => e(t))).reduce(
                                      (e, t) => e + t.length,
                                      0
                                    ))
                                  )),
                                  {
                                    length: a <= 55 ? 1 + a : 1 + i + a,
                                    encode(e) {
                                      for (let { encode: t } of (a <= 55
                                        ? e.pushByte(192 + a)
                                        : (e.pushByte(247 + i),
                                          1 === i
                                            ? e.pushUint8(a)
                                            : 2 === i
                                            ? e.pushUint16(a)
                                            : 3 === i
                                            ? e.pushUint24(a)
                                            : e.pushUint32(a)),
                                      r))
                                        t(e);
                                    },
                                  })
                                : ((s = aw(
                                    (o = "string" == typeof (n = t) ? r2(n) : n)
                                      .length
                                  )),
                                  {
                                    length:
                                      1 === o.length && o[0] < 128
                                        ? 1
                                        : o.length <= 55
                                        ? 1 + o.length
                                        : 1 + s + o.length,
                                    encode(e) {
                                      (1 === o.length && o[0] < 128) ||
                                        (o.length <= 55
                                          ? e.pushByte(128 + o.length)
                                          : (e.pushByte(183 + s),
                                            1 === s
                                              ? e.pushUint8(o.length)
                                              : 2 === s
                                              ? e.pushUint16(o.length)
                                              : 3 === s
                                              ? e.pushUint24(o.length)
                                              : e.pushUint32(o.length))),
                                        e.pushBytes(o);
                                    },
                                  });
                            })(e),
                            a = nD(new Uint8Array(n.length));
                          return (n.encode(a), "Hex" === r)
                            ? rY.fromBytes(a.bytes)
                            : a.bytes;
                        })(e, { as: r });
                      })(
                        (function (e) {
                          let { address: t, chainId: r, nonce: n } = e,
                            a = aB(e);
                          return [
                            r ? rY.fromNumber(r) : "0x",
                            t,
                            n ? rY.fromNumber(n) : "0x",
                            ...(a
                              ? (function (e) {
                                  let { r: t, s: r, yParity: n } = e;
                                  return [
                                    n ? "0x01" : "0x",
                                    0n === t
                                      ? "0x"
                                      : rY.trimLeft(rY.fromNumber(t)),
                                    0n === r
                                      ? "0x"
                                      : rY.trimLeft(rY.fromNumber(r)),
                                  ];
                                })(a)
                              : []),
                          ];
                        })(
                          r
                            ? {
                                address: e.address,
                                chainId: e.chainId,
                                nonce: e.nonce,
                              }
                            : e
                        )
                      )
                    )
                  );
                })(e.authorization, { presign: !0 }),
                signature: aP(e.authorization),
              })
            ),
            a = nW(i4, [
              {
                ...e.authorization,
                delegation: e.authorization.address,
                chainId: BigInt(e.authorization.chainId),
              },
              e.to ?? n,
              t ?? "0x",
            ]),
            i = rY.fromNumber(rY.size(a), { size: 32 });
          return rY.concat(r, a, i, i3);
        },
      ],
      2278
    );
    var ot = e.i(2278),
      ot = ot,
      or = e.i(89169);
    async function on({ address: e, authorization: t, signature: r }) {
      return (0, t_.isAddressEqual)(
        (0, f.getAddress)(e),
        await e0({ authorization: t, signature: r })
      );
    }
    var oa = e.i(37575);
    async function oi(e, t) {
      let r,
        {
          address: n,
          chain: a = e.chain,
          hash: i,
          erc6492VerifierAddress: o = t.universalSignatureVerifierAddress ??
            a?.contracts?.erc6492Verifier?.address,
          multicallAddress: s = t.multicallAddress ??
            a?.contracts?.multicall3?.address,
          mode: c = "auto",
        } = t;
      if (a?.verifyHash) return await a.verifyHash(e, t);
      let l =
        ((r = t.signature),
        (0, P.isHex)(r)
          ? r
          : "object" == typeof r && "r" in r && "s" in r
          ? (function ({ r: e, s: t, to: r = "hex", v: n, yParity: a }) {
              let i = (() => {
                  if (0 === a || 1 === a) return a;
                  if (n && (27n === n || 28n === n || n >= 35n))
                    return +(n % 2n === 0n);
                  throw Error("Invalid `v` or `yParity` value");
                })(),
                o = `0x${new oa.secp256k1.Signature(
                  (0, tn.hexToBigInt)(e),
                  (0, tn.hexToBigInt)(t)
                ).toCompactHex()}${0 === i ? "1b" : "1c"}`;
              return "hex" === r ? o : (0, E.hexToBytes)(o);
            })(r)
          : (0, m.bytesToHex)(r));
      try {
        if ("eoa" === c)
          try {
            if (
              (0, t_.isAddressEqual)(
                (0, f.getAddress)(n),
                await (0, eJ.recoverAddress)({ hash: i, signature: l })
              )
            )
              return !0;
          } catch {}
        if (ot.validate(l))
          return await oo(e, { ...t, multicallAddress: s, signature: l });
        return await os(e, { ...t, verifierAddress: o, signature: l });
      } catch (e) {
        if ("eoa" !== c)
          try {
            if (
              (0, t_.isAddressEqual)(
                (0, f.getAddress)(n),
                await (0, eJ.recoverAddress)({ hash: i, signature: l })
              )
            )
              return !0;
          } catch {}
        if (e instanceof ol) return !1;
        throw e;
      }
    }
    async function oo(e, t) {
      let {
          address: r,
          blockHash: n,
          blockNumber: a,
          blockTag: i,
          hash: o,
          multicallAddress: s,
          requireCanonical: c,
        } = t,
        {
          authorization: u,
          data: f,
          signature: h,
          to: p,
        } = ot.unwrap(t.signature);
      if (
        (await tG(e, {
          address: r,
          blockHash: n,
          blockNumber: a,
          blockTag: i,
          requireCanonical: c,
        })) === (0, x.concatHex)(["0xef0100", u.address])
      )
        return await oc(e, { ...t, signature: h });
      let b = {
        address: u.address,
        chainId: Number(u.chainId),
        nonce: Number(u.nonce),
        r: (0, m.numberToHex)(u.r, { size: 32 }),
        s: (0, m.numberToHex)(u.s, { size: 32 }),
        yParity: u.yParity,
      };
      if (!(await on({ address: r, authorization: b }))) throw new ol();
      let g = await k(
          e,
          ec,
          "readContract"
        )({
          ...(s ? { address: s } : { code: ra.multicall3Bytecode }),
          authorizationList: [b],
          abi: l.multicall3Abi,
          blockHash: n,
          blockNumber: a,
          blockTag: "pending",
          functionName: "aggregate3",
          requireCanonical: c,
          args: [
            [
              ...(f ? [{ allowFailure: !0, target: p ?? r, callData: f }] : []),
              {
                allowFailure: !0,
                target: r,
                callData: (0, d.encodeFunctionData)({
                  abi: l.erc1271Abi,
                  functionName: "isValidSignature",
                  args: [o, h],
                }),
              },
            ],
          ],
        }),
        y = g[g.length - 1]?.returnData;
      if (y?.startsWith("0x1626ba7e")) return !0;
      throw new ol();
    }
    async function os(e, t) {
      let {
          address: r,
          factory: n,
          factoryData: a,
          hash: i,
          signature: o,
          verifierAddress: s,
          ...c
        } = t,
        u = await (async () =>
          (!n && !a) || ay.validate(o)
            ? o
            : ay.wrap({ data: a, signature: o, to: n }))(),
        f = s
          ? {
              to: s,
              data: (0, d.encodeFunctionData)({
                abi: l.erc6492SignatureValidatorAbi,
                functionName: "isValidSig",
                args: [r, i, u],
              }),
              ...c,
            }
          : {
              data: (0, or.encodeDeployData)({
                abi: l.erc6492SignatureValidatorAbi,
                args: [r, i, u],
                bytecode: ra.erc6492SignatureValidatorByteCode,
              }),
              ...c,
            },
        { data: h } = await k(
          e,
          es.call,
          "call"
        )(f).catch((e) => {
          if (e instanceof y.CallExecutionError) throw new ol();
          throw e;
        });
      if ((0, tn.hexToBool)(h ?? "0x0")) return !0;
      throw new ol();
    }
    async function oc(e, t) {
      let {
        address: r,
        blockHash: n,
        blockNumber: a,
        blockTag: i,
        hash: o,
        requireCanonical: s,
        signature: c,
      } = t;
      if (
        (
          await k(
            e,
            ec,
            "readContract"
          )({
            address: r,
            abi: l.erc1271Abi,
            args: [o, c],
            blockHash: n,
            blockNumber: a,
            blockTag: i,
            functionName: "isValidSignature",
            requireCanonical: s,
          }).catch((e) => {
            if (e instanceof y.ContractFunctionExecutionError) throw new ol();
            throw e;
          })
        ).startsWith("0x1626ba7e")
      )
        return !0;
      throw new ol();
    }
    class ol extends Error {}
    e.s(["verifyHash", 0, oi], 93617);
    var ou = e.i(58765);
    async function od(
      e,
      { address: t, message: r, factory: n, factoryData: a, signature: i, ...o }
    ) {
      let s = (0, ou.hashMessage)(r);
      return k(
        e,
        oi,
        "verifyHash"
      )({
        address: t,
        factory: n,
        factoryData: a,
        hash: s,
        signature: i,
        ...o,
      });
    }
    e.s(["verifyMessage", 0, od], 33570);
    var of = e.i(8861),
      oh = g;
    class op extends oh.BaseError {
      constructor({ domain: e }) {
        super(`Invalid domain "${(0, ro.stringify)(e)}".`, {
          metaMessages: ["Must be a valid EIP-712 domain."],
        });
      }
    }
    class ob extends oh.BaseError {
      constructor({ primaryType: e, types: t }) {
        super(
          `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
            Object.keys(t)
          )}\`.`,
          {
            docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
            metaMessages: ["Check that the primary type is a key in `types`."],
          }
        );
      }
    }
    class om extends oh.BaseError {
      constructor({ type: e }) {
        super(`Struct type "${e}" is invalid.`, {
          metaMessages: ["Struct type must not be a Solidity type."],
          name: "InvalidStructTypeError",
        });
      }
    }
    class og extends oh.BaseError {
      constructor({ type: e }) {
        const t = e.replace(/^(u?int)/, "$&256");
        super(`Type "${e}" is not a valid EIP-712 type.`, {
          metaMessages: [`Use "${t}" instead.`],
          name: "InvalidTypedDataTypeError",
        });
      }
    }
    var oy = e.i(96516),
      ow = e.i(42692);
    function ov({ data: e, primaryType: t, types: r }) {
      let n = (function e({ data: t, primaryType: r, types: n }) {
        let a = [{ type: "bytes32" }],
          i = [
            (function ({ primaryType: e, types: t }) {
              let r = (0, m.toHex)(
                (function ({ primaryType: e, types: t }) {
                  let r = "",
                    n = (function e(
                      { primaryType: t, types: r },
                      n = new Set()
                    ) {
                      let a = t.match(/^\w*/u),
                        i = a?.[0];
                      if (n.has(i) || void 0 === r[i]) return n;
                      for (let t of (n.add(i), r[i]))
                        e({ primaryType: t.type, types: r }, n);
                      return n;
                    })({ primaryType: e, types: t });
                  for (let a of (n.delete(e), [e, ...Array.from(n).sort()]))
                    r += `${a}(${t[a]
                      .map(({ name: e, type: t }) => `${t} ${e}`)
                      .join(",")})`;
                  return r;
                })({ primaryType: e, types: t })
              );
              return (0, B.keccak256)(r);
            })({ primaryType: r, types: n }),
          ];
        for (let o of n[r]) {
          let [r, s] = (function t({ types: r, name: n, type: a, value: i }) {
            if (void 0 !== r[a])
              return [
                { type: "bytes32" },
                (0, B.keccak256)(e({ data: i, primaryType: a, types: r })),
              ];
            if ("bytes" === a)
              return [{ type: "bytes32" }, (0, B.keccak256)(i)];
            if ("string" === a)
              return [{ type: "bytes32" }, (0, B.keccak256)((0, m.toHex)(i))];
            if (a.lastIndexOf("]") === a.length - 1) {
              let e = a.slice(0, a.lastIndexOf("[")),
                o = i.map((a) => t({ name: n, type: e, types: r, value: a }));
              return [
                { type: "bytes32" },
                (0, B.keccak256)(
                  (0, eD.encodeAbiParameters)(
                    o.map(([e]) => e),
                    o.map(([, e]) => e)
                  )
                ),
              ];
            }
            return [{ type: a }, i];
          })({ types: n, name: o.name, type: o.type, value: t[o.name] });
          a.push(r), i.push(s);
        }
        return (0, eD.encodeAbiParameters)(a, i);
      })({ data: e, primaryType: t, types: r });
      return (0, B.keccak256)(n);
    }
    async function ox(e, t) {
      let {
          address: r,
          factory: n,
          factoryData: a,
          signature: i,
          message: o,
          primaryType: s,
          types: c,
          domain: l,
          ...u
        } = t,
        d = (function (e) {
          let { domain: t = {}, message: r, primaryType: n } = e,
            a = {
              EIP712Domain: (function ({ domain: e }) {
                return [
                  "string" == typeof e?.name && {
                    name: "name",
                    type: "string",
                  },
                  e?.version && { name: "version", type: "string" },
                  ("number" == typeof e?.chainId ||
                    "bigint" == typeof e?.chainId) && {
                    name: "chainId",
                    type: "uint256",
                  },
                  e?.verifyingContract && {
                    name: "verifyingContract",
                    type: "address",
                  },
                  e?.salt && { name: "salt", type: "bytes32" },
                ].filter(Boolean);
              })({ domain: t }),
              ...e.types,
            };
          !(function (e) {
            let { domain: t, message: r, primaryType: n, types: a } = e,
              i = (e, t) => {
                for (let r of e) {
                  let { name: e, type: n } = r,
                    o = t[e],
                    s = n.replace(/(\[[0-9]*\])+$/, "");
                  if ("int" === s || "uint" === s) throw new og({ type: n });
                  let c = n.match(ow.integerRegex);
                  if (c && ("number" == typeof o || "bigint" == typeof o)) {
                    let [e, t, r] = c;
                    (0, m.numberToHex)(o, {
                      signed: "int" === t,
                      size: Number.parseInt(r, 10) / 8,
                    });
                  }
                  if (
                    "address" === n &&
                    "string" == typeof o &&
                    !(0, oy.isAddress)(o)
                  )
                    throw new of.InvalidAddressError({ address: o });
                  let l = n.match(ow.bytesRegex);
                  if (l) {
                    let [e, t] = l;
                    if (t && (0, p.size)(o) !== Number.parseInt(t, 10))
                      throw new T.BytesSizeMismatchError({
                        expectedSize: Number.parseInt(t, 10),
                        givenSize: (0, p.size)(o),
                      });
                  }
                  let u = a[n];
                  u &&
                    ((function (e) {
                      if (
                        "address" === e ||
                        "bool" === e ||
                        "string" === e ||
                        e.startsWith("bytes") ||
                        e.startsWith("uint") ||
                        e.startsWith("int")
                      )
                        throw new om({ type: e });
                    })(n),
                    i(u, o));
                }
              };
            if (a.EIP712Domain && t) {
              if ("object" != typeof t) throw new op({ domain: t });
              i(a.EIP712Domain, t);
            }
            if ("EIP712Domain" !== n)
              if (a[n]) i(a[n], r);
              else throw new ob({ primaryType: n, types: a });
          })({ domain: t, message: r, primaryType: n, types: a });
          let i = ["0x1901"];
          return (
            t &&
              i.push(
                (function ({ domain: e, types: t }) {
                  return ov({ data: e, primaryType: "EIP712Domain", types: t });
                })({ domain: t, types: a })
              ),
            "EIP712Domain" !== n &&
              i.push(ov({ data: r, primaryType: n, types: a })),
            (0, B.keccak256)((0, x.concat)(i))
          );
        })({ message: o, primaryType: s, types: c, domain: l });
      return k(
        e,
        oi,
        "verifyHash"
      )({
        address: r,
        factory: n,
        factoryData: a,
        hash: d,
        signature: i,
        ...u,
      });
    }
    e.s(["verifyTypedData", 0, ox], 77528);
    let oE = new Map(),
      oB = new Map(),
      oP = 0;
    function oA(e, t, r) {
      let n = ++oP,
        a = () => oE.get(e) || [],
        i = () => {
          let t = a();
          if (!t.some((e) => e.id === n)) return;
          let r = oB.get(e);
          if (1 === t.length && r) {
            let e = r();
            e instanceof Promise && e.catch(() => {});
          }
          (() => {
            let t = a().filter((e) => e.id !== n);
            if (0 === t.length) {
              oE.delete(e), oB.delete(e);
              return;
            }
            oE.set(e, t);
          })();
        },
        o = a();
      if ((oE.set(e, [...o, { id: n, fns: t }]), o && o.length > 0)) return i;
      let s = {};
      for (let e in t)
        s[e] = (...t) => {
          let r = a();
          if (0 !== r.length) for (let n of r) n.fns[e]?.(...t);
        };
      let c = r(s);
      return "function" == typeof c && oB.set(e, c), i;
    }
    var oR = e.i(9486),
      oI = e.i(63710);
    async function ok(e, { signal: t } = {}) {
      return new Promise((r, n) => {
        if (t?.aborted) return void n((0, oI.getAbortError)(t));
        let a = () => t?.removeEventListener("abort", o),
          i = setTimeout(() => {
            a(), r();
          }, e),
          o = () => {
            clearTimeout(i), a(), n((0, oI.getAbortError)(t));
          };
        t?.addEventListener("abort", o, { once: !0 });
      });
    }
    function oT(
      e,
      {
        delay: t = 100,
        retryCount: r = 2,
        shouldRetry: n = () => !0,
        signal: a,
      } = {}
    ) {
      return new Promise((i, o) => {
        let s = async ({ count: c = 0 } = {}) => {
          if (a?.aborted) return void o((0, oI.getAbortError)(a));
          let l = async ({ error: e }) => {
            let r = "function" == typeof t ? t({ count: c, error: e }) : t;
            if (r)
              try {
                await ok(r, { signal: a });
              } catch (e) {
                o(e);
                return;
              }
            return s({ count: c + 1 });
          };
          try {
            let t = await e();
            i(t);
          } catch (e) {
            if (a?.aborted) return void o((0, oI.getAbortError)(a));
            if ((0, oI.isAbortError)(e)) return void o(e);
            if (c < r && (await n({ count: c, error: e })))
              return l({ error: e });
            o(e);
          }
        };
        s().catch(o);
      });
    }
    function oN(e, { emitOnBegin: t, initialWaitTime: r, interval: n }) {
      let a = !0,
        i = () => (a = !1);
      return (
        (async () => {
          let o;
          t && (o = await e({ unpoll: i }));
          let s = (await r?.(o)) ?? n;
          await ok(s);
          let c = async () => {
            a && (await e({ unpoll: i }), await ok(n), c());
          };
          c();
        })(),
        i
      );
    }
    function oS(
      e,
      {
        emitOnBegin: t = !1,
        emitMissed: r = !1,
        onBlockNumber: n,
        onError: a,
        poll: i,
        pollingInterval: o = e.pollingInterval,
      }
    ) {
      let s;
      return (
        void 0 !== i
          ? i
          : "webSocket" !== e.transport.type &&
            "ipc" !== e.transport.type &&
            ("fallback" !== e.transport.type ||
              ("webSocket" !== e.transport.transports[0].config.type &&
                "ipc" !== e.transport.transports[0].config.type))
      )
        ? oA(
            (0, ro.stringify)(["watchBlockNumber", e.uid, t, r, o]),
            { onBlockNumber: n, onError: a },
            (n) =>
              oN(
                async () => {
                  try {
                    let t = await k(e, tz, "getBlockNumber")({ cacheTime: 0 });
                    if (void 0 !== s) {
                      if (t === s) return;
                      if (t - s > 1 && r)
                        for (let e = s + 1n; e < t; e++)
                          n.onBlockNumber(e, s), (s = e);
                    }
                    (void 0 === s || t > s) && (n.onBlockNumber(t, s), (s = t));
                  } catch (e) {
                    n.onError?.(e);
                  }
                },
                { emitOnBegin: t, interval: o }
              )
          )
        : oA(
            (0, ro.stringify)(["watchBlockNumber", e.uid, t, r]),
            { onBlockNumber: n, onError: a },
            (t) => {
              let r = !0,
                n = () => (r = !1);
              return (
                (async () => {
                  try {
                    let a = (() => {
                        if ("fallback" === e.transport.type) {
                          let t = e.transport.transports.find(
                            (e) =>
                              "webSocket" === e.config.type ||
                              "ipc" === e.config.type
                          );
                          return t ? t.value : e.transport;
                        }
                        return e.transport;
                      })(),
                      { unsubscribe: i } = await a.subscribe({
                        params: ["newHeads"],
                        onData(e) {
                          if (!r) return;
                          let n = (0, tn.hexToBigInt)(e.result?.number);
                          t.onBlockNumber(n, s), (s = n);
                        },
                        onError(e) {
                          t.onError?.(e);
                        },
                      });
                    (n = i), r || n();
                  } catch (e) {
                    a?.(e);
                  }
                })(),
                () => n()
              );
            }
          );
    }
    async function oC(e, t) {
      let r,
        n,
        a,
        i,
        o,
        {
          checkReplacement: s = e.chain
            ?.supportsTransactionReplacementDetection ?? !0,
          confirmations: c = 1,
          hash: l,
          onReplaced: u,
          retryCount: d = 6,
          retryDelay: f = ({ count: e }) => 200 * ~~(1 << e),
          timeout: h = 18e4,
        } = t,
        p = (0, ro.stringify)(["waitForTransactionReceipt", e.uid, l]),
        b = t.pollingInterval
          ? t.pollingInterval
          : e.chain?.experimental_preconfirmationTime
          ? e.chain.experimental_preconfirmationTime
          : e.pollingInterval,
        m = !1,
        { promise: g, resolve: y, reject: w } = (0, oR.withResolvers)(),
        v = h
          ? setTimeout(() => {
              o?.(),
                i?.(),
                w(new e2.WaitForTransactionReceiptTimeoutError({ hash: l }));
            }, h)
          : void 0;
      return (
        (i = oA(p, { onReplaced: u, resolve: y, reject: w }, async (t) => {
          if (
            (a = await k(
              e,
              rn,
              "getTransactionReceipt"
            )({ hash: l }).catch(() => void 0)) &&
            c <= 1
          ) {
            clearTimeout(v), t.resolve(a), i?.();
            return;
          }
          o = k(
            e,
            oS,
            "watchBlockNumber"
          )({
            emitMissed: !0,
            emitOnBegin: !0,
            poll: !0,
            pollingInterval: b,
            async onBlockNumber(u) {
              let h = (e) => {
                  clearTimeout(v), o?.(), e(), i?.();
                },
                p = u;
              if (!m)
                try {
                  if (a) {
                    if (c > 1 && (!a.blockNumber || p - a.blockNumber + 1n < c))
                      return;
                    h(() => t.resolve(a));
                    return;
                  }
                  if (
                    (s &&
                      !r &&
                      ((m = !0),
                      await oT(
                        async () => {
                          (r = await k(e, rt, "getTransaction")({ hash: l }))
                            .blockNumber && (p = r.blockNumber);
                        },
                        { delay: f, retryCount: d }
                      ),
                      (m = !1)),
                    (a = await k(e, rn, "getTransactionReceipt")({ hash: l })),
                    c > 1 && (!a.blockNumber || p - a.blockNumber + 1n < c))
                  )
                    return;
                  h(() => t.resolve(a));
                } catch (i) {
                  if (
                    i instanceof e2.TransactionNotFoundError ||
                    i instanceof e2.TransactionReceiptNotFoundError
                  ) {
                    if (!r) {
                      m = !1;
                      return;
                    }
                    try {
                      (n = r), (m = !0);
                      let i = await oT(
                        () =>
                          k(
                            e,
                            tl,
                            "getBlock"
                          )({ blockNumber: p, includeTransactions: !0 }),
                        {
                          delay: f,
                          retryCount: d,
                          shouldRetry: ({ error: e }) => e instanceof ti,
                        }
                      );
                      m = !1;
                      let o = i.transactions.find(
                        ({ from: e, nonce: t }) => e === n.from && t === n.nonce
                      );
                      if (
                        !o ||
                        ((a = await k(
                          e,
                          rn,
                          "getTransactionReceipt"
                        )({ hash: o.hash })),
                        c > 1 && (!a.blockNumber || p - a.blockNumber + 1n < c))
                      )
                        return;
                      let s = "replaced";
                      o.to === n.to &&
                      o.value === n.value &&
                      o.input === n.input
                        ? (s = "repriced")
                        : o.from === o.to &&
                          0n === o.value &&
                          (s = "cancelled"),
                        h(() => {
                          t.onReplaced?.({
                            reason: s,
                            replacedTransaction: n,
                            transaction: o,
                            transactionReceipt: a,
                          }),
                            t.resolve(a);
                        });
                    } catch (e) {
                      h(() => t.reject(e));
                    }
                  } else h(() => t.reject(i));
                }
            },
          });
        })),
        g
      );
    }
    e.s(["withRetry", 0, oT], 9760),
      e.s(["watchBlockNumber", 0, oS], 27465),
      e.s(["waitForTransactionReceipt", 0, oC], 48789);
    let oF = [
      "size",
      "totalDifficulty",
      "transactions",
      "uncles",
      "withdrawals",
    ];
    e.s(
      [
        "watchBlockHeaders",
        0,
        function (e, { onBlockHeader: t, onError: r }) {
          let n;
          return oA(
            (0, ro.stringify)(["watchBlockHeaders", e.uid]),
            { onBlockHeader: t, onError: r },
            (t) => {
              let r = !0,
                a = !1,
                i = () => (r = !1);
              return (
                (async () => {
                  try {
                    let o = (() => {
                        if ("fallback" === e.transport.type) {
                          let t = e.transport.transports.find(
                            (e) =>
                              "webSocket" === e.config.type ||
                              "ipc" === e.config.type
                          );
                          return t ? t.value : e.transport;
                        }
                        return e.transport;
                      })(),
                      { unsubscribe: s } = await o.subscribe({
                        params: ["newHeads"],
                        onData(a) {
                          if (!r) return;
                          let i = (e.chain?.formatters?.block?.format || tc)(
                            a.result,
                            "watchBlockHeaders"
                          );
                          for (let e of oF) delete i[e];
                          t.onBlockHeader(i, n), (n = i);
                        },
                        onError(e) {
                          a && t.onError?.(e);
                        },
                      });
                    (a = !0), (i = s), r || i();
                  } catch (e) {
                    t.onError?.(e);
                  }
                })(),
                () => i()
              );
            }
          );
        },
      ],
      58167
    ),
      e.s(
        [
          "watchBlocks",
          0,
          function (
            e,
            {
              blockTag: t = e.experimental_blockTag ?? "latest",
              emitMissed: r = !1,
              emitOnBegin: n = !1,
              onBlock: a,
              onError: i,
              includeTransactions: o,
              poll: s,
              pollingInterval: c = e.pollingInterval,
            }
          ) {
            let l,
              u,
              d,
              f,
              h =
                void 0 !== s
                  ? s
                  : "webSocket" !== e.transport.type &&
                    "ipc" !== e.transport.type &&
                    ("fallback" !== e.transport.type ||
                      ("webSocket" !== e.transport.transports[0].config.type &&
                        "ipc" !== e.transport.transports[0].config.type)),
              p = o ?? !1;
            return h
              ? oA(
                  (0, ro.stringify)(["watchBlocks", e.uid, t, r, n, p, c]),
                  { onBlock: a, onError: i },
                  (a) =>
                    oN(
                      async () => {
                        try {
                          let n = await k(
                            e,
                            tl,
                            "getBlock"
                          )({ blockTag: t, includeTransactions: p });
                          if (null !== n.number && l?.number != null) {
                            if (n.number === l.number) return;
                            if (n.number - l.number > 1 && r)
                              for (let t = l?.number + 1n; t < n.number; t++) {
                                let r = await k(
                                  e,
                                  tl,
                                  "getBlock"
                                )({ blockNumber: t, includeTransactions: p });
                                a.onBlock(r, l), (l = r);
                              }
                          }
                          (l?.number == null ||
                            ("pending" === t && n?.number == null) ||
                            (null !== n.number && n.number > l.number)) &&
                            (a.onBlock(n, l), (l = n));
                        } catch (e) {
                          a.onError?.(e);
                        }
                      },
                      { emitOnBegin: n, interval: c }
                    )
                )
              : ((u = !0),
                (d = !0),
                (f = () => (u = !1)),
                (async () => {
                  try {
                    n &&
                      k(
                        e,
                        tl,
                        "getBlock"
                      )({ blockTag: t, includeTransactions: p })
                        .then((e) => {
                          !u || (d && (a(e, void 0), (d = !1)));
                        })
                        .catch(i);
                    let r = (() => {
                        if ("fallback" === e.transport.type) {
                          let t = e.transport.transports.find(
                            (e) =>
                              "webSocket" === e.config.type ||
                              "ipc" === e.config.type
                          );
                          return t ? t.value : e.transport;
                        }
                        return e.transport;
                      })(),
                      { unsubscribe: o } = await r.subscribe({
                        params: ["newHeads"],
                        async onData(t) {
                          if (!u) return;
                          let r = await k(
                            e,
                            tl,
                            "getBlock"
                          )({
                            blockNumber: t.result?.number,
                            includeTransactions: p,
                          }).catch(() => {});
                          u && (a(r, l), (d = !1), (l = r));
                        },
                        onError(e) {
                          i?.(e);
                        },
                      });
                    (f = o), u || f();
                  } catch (e) {
                    i?.(e);
                  }
                })(),
                () => f());
          },
        ],
        38081
      ),
      e.s(
        [
          "watchContractEvent",
          0,
          function (e, t) {
            let r,
              n,
              a,
              i,
              {
                abi: o,
                address: s,
                args: c,
                batch: l = !0,
                eventName: u,
                fromBlock: d,
                onError: f,
                onLogs: h,
                poll: p,
                pollingInterval: b = e.pollingInterval,
                strict: m,
              } = t;
            return (
              void 0 !== p
                ? p
                : "bigint" == typeof d ||
                  ("webSocket" !== e.transport.type &&
                    "ipc" !== e.transport.type &&
                    ("fallback" !== e.transport.type ||
                      ("webSocket" !== e.transport.transports[0].config.type &&
                        "ipc" !== e.transport.transports[0].config.type)))
            )
              ? ((r = m ?? !1),
                oA(
                  (0, ro.stringify)([
                    "watchContractEvent",
                    s,
                    c,
                    l,
                    e.uid,
                    u,
                    b,
                    r,
                    d,
                  ]),
                  { onLogs: h, onError: f },
                  (t) => {
                    let n, a;
                    void 0 !== d && (n = d - 1n);
                    let i = !1,
                      f = oN(
                        async () => {
                          if (!i) {
                            try {
                              a = await k(
                                e,
                                eZ,
                                "createContractEventFilter"
                              )({
                                abi: o,
                                address: s,
                                args: c,
                                eventName: u,
                                strict: r,
                                fromBlock: d,
                              });
                            } catch {}
                            i = !0;
                            return;
                          }
                          try {
                            let i;
                            if (a)
                              i = await k(
                                e,
                                t3,
                                "getFilterChanges"
                              )({ filter: a });
                            else {
                              let t = await k(e, tz, "getBlockNumber")({});
                              (i =
                                n && n < t
                                  ? await k(
                                      e,
                                      tX,
                                      "getContractEvents"
                                    )({
                                      abi: o,
                                      address: s,
                                      args: c,
                                      eventName: u,
                                      fromBlock: n + 1n,
                                      toBlock: t,
                                      strict: r,
                                    })
                                  : []),
                                (n = t);
                            }
                            if (0 === i.length) return;
                            if (l) t.onLogs(i);
                            else for (let e of i) t.onLogs([e]);
                          } catch (e) {
                            a && e instanceof M && (i = !1), t.onError?.(e);
                          }
                        },
                        { emitOnBegin: !0, interval: b }
                      );
                    return async () => {
                      a && (await k(e, af, "uninstallFilter")({ filter: a })),
                        f();
                    };
                  }
                ))
              : ((n = (0, ro.stringify)([
                  "watchContractEvent",
                  s,
                  c,
                  l,
                  e.uid,
                  u,
                  b,
                  m ?? !1,
                ])),
                (a = !0),
                (i = () => (a = !1)),
                oA(
                  n,
                  { onLogs: h, onError: f },
                  (t) => (
                    (async () => {
                      try {
                        let r = (() => {
                            if ("fallback" === e.transport.type) {
                              let t = e.transport.transports.find(
                                (e) =>
                                  "webSocket" === e.config.type ||
                                  "ipc" === e.config.type
                              );
                              return t ? t.value : e.transport;
                            }
                            return e.transport;
                          })(),
                          n = u ? eV({ abi: o, eventName: u, args: c }) : [],
                          { unsubscribe: l } = await r.subscribe({
                            params: ["logs", { address: s, topics: n }],
                            onData(e) {
                              if (!a) return;
                              let r = e.result;
                              try {
                                let { eventName: e, args: n } = tK({
                                    abi: o,
                                    data: r.data,
                                    topics: r.topics,
                                    strict: m,
                                  }),
                                  a = tM(r, { args: n, eventName: e });
                                t.onLogs([a]);
                              } catch (i) {
                                let e, n;
                                if (
                                  i instanceof T.DecodeLogDataMismatch ||
                                  i instanceof T.DecodeLogTopicsMismatch
                                ) {
                                  if (m) return;
                                  (e = i.abiItem.name),
                                    (n = i.abiItem.inputs?.some(
                                      (e) => !("name" in e && e.name)
                                    ));
                                }
                                let a = tM(r, {
                                  args: n ? [] : {},
                                  eventName: e,
                                });
                                t.onLogs([a]);
                              }
                            },
                            onError(e) {
                              t.onError?.(e);
                            },
                          });
                        (i = l), a || i();
                      } catch (e) {
                        f?.(e);
                      }
                    })(),
                    () => i()
                  )
                ));
          },
        ],
        21821
      ),
      e.s(
        [
          "watchEvent",
          0,
          function (
            e,
            {
              address: t,
              args: r,
              batch: n = !0,
              event: a,
              events: i,
              fromBlock: o,
              onError: s,
              onLogs: c,
              poll: l,
              pollingInterval: u = e.pollingInterval,
              strict: d,
            }
          ) {
            let f,
              h,
              p =
                void 0 !== l
                  ? l
                  : "bigint" == typeof o ||
                    ("webSocket" !== e.transport.type &&
                      "ipc" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        ("webSocket" !==
                          e.transport.transports[0].config.type &&
                          "ipc" !== e.transport.transports[0].config.type))),
              b = d ?? !1;
            return p
              ? oA(
                  (0, ro.stringify)(["watchEvent", t, r, n, e.uid, a, u, o]),
                  { onLogs: c, onError: s },
                  (s) => {
                    let c, l;
                    void 0 !== o && (c = o - 1n);
                    let d = !1,
                      f = oN(
                        async () => {
                          if (!d) {
                            try {
                              l = await k(
                                e,
                                eK,
                                "createEventFilter"
                              )({
                                address: t,
                                args: r,
                                event: a,
                                events: i,
                                strict: b,
                                fromBlock: o,
                              });
                            } catch {}
                            d = !0;
                            return;
                          }
                          try {
                            let o;
                            if (l)
                              o = await k(
                                e,
                                t3,
                                "getFilterChanges"
                              )({ filter: l });
                            else {
                              let n = await k(e, tz, "getBlockNumber")({});
                              (o =
                                c && c !== n
                                  ? await k(
                                      e,
                                      tJ,
                                      "getLogs"
                                    )({
                                      address: t,
                                      args: r,
                                      event: a,
                                      events: i,
                                      fromBlock: c + 1n,
                                      toBlock: n,
                                    })
                                  : []),
                                (c = n);
                            }
                            if (0 === o.length) return;
                            if (n) s.onLogs(o);
                            else for (let e of o) s.onLogs([e]);
                          } catch (e) {
                            l && e instanceof M && (d = !1), s.onError?.(e);
                          }
                        },
                        { emitOnBegin: !0, interval: u }
                      );
                    return async () => {
                      l && (await k(e, af, "uninstallFilter")({ filter: l })),
                        f();
                    };
                  }
                )
              : ((f = !0),
                (h = () => (f = !1)),
                (async () => {
                  try {
                    let n = (() => {
                        if ("fallback" === e.transport.type) {
                          let t = e.transport.transports.find(
                            (e) =>
                              "webSocket" === e.config.type ||
                              "ipc" === e.config.type
                          );
                          return t ? t.value : e.transport;
                        }
                        return e.transport;
                      })(),
                      o = i ?? (a ? [a] : void 0),
                      l = [];
                    o &&
                      ((l = [
                        o.flatMap((e) =>
                          eV({ abi: [e], eventName: e.name, args: r })
                        ),
                      ]),
                      a && (l = l[0]));
                    let { unsubscribe: u } = await n.subscribe({
                      params: ["logs", { address: t, topics: l }],
                      onData(e) {
                        if (!f) return;
                        let t = e.result;
                        try {
                          let { eventName: e, args: r } = tK({
                              abi: o ?? [],
                              data: t.data,
                              topics: t.topics,
                              strict: b,
                            }),
                            n = tM(t, { args: r, eventName: e });
                          c([n]);
                        } catch (a) {
                          let e, r;
                          if (
                            a instanceof T.DecodeLogDataMismatch ||
                            a instanceof T.DecodeLogTopicsMismatch
                          ) {
                            if (d) return;
                            (e = a.abiItem.name),
                              (r = a.abiItem.inputs?.some(
                                (e) => !("name" in e && e.name)
                              ));
                          }
                          let n = tM(t, { args: r ? [] : {}, eventName: e });
                          c([n]);
                        }
                      },
                      onError(e) {
                        s?.(e);
                      },
                    });
                    (h = u), f || h();
                  } catch (e) {
                    s?.(e);
                  }
                })(),
                () => h());
          },
        ],
        54727
      ),
      e.s(
        [
          "watchPendingTransactions",
          0,
          function (
            e,
            {
              batch: t = !0,
              onError: r,
              onTransactions: n,
              poll: a,
              pollingInterval: i = e.pollingInterval,
            }
          ) {
            let o, s;
            return (
              void 0 !== a
                ? a
                : "webSocket" !== e.transport.type && "ipc" !== e.transport.type
            )
              ? oA(
                  (0, ro.stringify)(["watchPendingTransactions", e.uid, t, i]),
                  { onTransactions: n, onError: r },
                  (r) => {
                    let n,
                      a = oN(
                        async () => {
                          try {
                            if (!n)
                              try {
                                n = await k(
                                  e,
                                  eY,
                                  "createPendingTransactionFilter"
                                )({});
                                return;
                              } catch (e) {
                                throw (a(), e);
                              }
                            let i = await k(
                              e,
                              t3,
                              "getFilterChanges"
                            )({ filter: n });
                            if (0 === i.length) return;
                            if (t) r.onTransactions(i);
                            else for (let e of i) r.onTransactions([e]);
                          } catch (e) {
                            r.onError?.(e);
                          }
                        },
                        { emitOnBegin: !0, interval: i }
                      );
                    return async () => {
                      n && (await k(e, af, "uninstallFilter")({ filter: n })),
                        a();
                    };
                  }
                )
              : ((o = !0),
                (s = () => (o = !1)),
                (async () => {
                  try {
                    let { unsubscribe: t } = await e.transport.subscribe({
                      params: ["newPendingTransactions"],
                      onData(e) {
                        if (!o) return;
                        let t = e.result;
                        n([t]);
                      },
                      onError(e) {
                        r?.(e);
                      },
                    });
                    (s = t), o || s();
                  } catch (e) {
                    r?.(e);
                  }
                })(),
                () => s());
          },
        ],
        95024
      );
    let oO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
    function oU(e) {
      return new Date(
        !oO.test(e) || Number.isNaN(new Date(e).getTime()) ? NaN : e
      );
    }
    let oq =
        /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+\-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
      oL =
        /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
    async function oz(e, t) {
      let {
          address: r,
          domain: n,
          message: a,
          nonce: i,
          scheme: o,
          signature: s,
          time: c = new Date(),
          ...l
        } = t,
        u = (function (e) {
          let { scheme: t, statement: r, ...n } = e.match(oq)?.groups ?? {},
            {
              chainId: a,
              expirationTime: i,
              issuedAt: o,
              notBefore: s,
              requestId: c,
              ...l
            } = e.match(oL)?.groups ?? {},
            u = e.split("Resources:")[1]?.split("\n- ").slice(1);
          return {
            ...n,
            ...l,
            ...(a ? { chainId: Number(a) } : {}),
            ...(i ? { expirationTime: oU(i) } : {}),
            ...(o ? { issuedAt: oU(o) } : {}),
            ...(s ? { notBefore: oU(s) } : {}),
            ...(c ? { requestId: c } : {}),
            ...(u ? { resources: u } : {}),
            ...(t ? { scheme: t } : {}),
            ...(r ? { statement: r } : {}),
          };
        })(a);
      if (
        !u.address ||
        !(function (e) {
          let {
            address: t,
            domain: r,
            message: n,
            nonce: a,
            scheme: i,
            time: o = new Date(),
          } = e;
          if (
            (r && n.domain !== r) ||
            (a && n.nonce !== a) ||
            (i && n.scheme !== i) ||
            Number.isNaN(o.getTime()) ||
            (n.expirationTime &&
              (Number.isNaN(n.expirationTime.getTime()) ||
                o >= n.expirationTime)) ||
            (n.notBefore &&
              (Number.isNaN(n.notBefore.getTime()) || o < n.notBefore))
          )
            return !1;
          try {
            if (
              !n.address ||
              !(0, oy.isAddress)(n.address, { strict: !1 }) ||
              (t && !(0, t_.isAddressEqual)(n.address, t))
            )
              return !1;
          } catch {
            return !1;
          }
          return !0;
        })({ address: r, domain: n, message: u, nonce: i, scheme: o, time: c })
      )
        return !1;
      let d = (0, ou.hashMessage)(a);
      return oi(e, { address: u.address, hash: d, signature: s, ...l });
    }
    e.s(["verifySiweMessage", 0, oz], 11092);
  },
  44616,
  (e) => {
    "use strict";
    var t = e.i(57256);
    e.s([
      "formatUnits",
      0,
      function (e, r) {
        return t.format(e, r);
      },
    ]);
  },
  15092,
  (e) => {
    "use strict";
    var t = e.i(47167),
      r = e.i(63625),
      n = e.i(89268),
      a = e.i(64348),
      i = e.i(10959),
      o = e.i(56317),
      s = e.i(57770),
      c = e.i(89509),
      l = e.i(12039),
      u = e.i(6662),
      d = e.i(22192),
      f = e.i(40577),
      h = e.i(81740),
      p = e.i(69121),
      b = e.i(72960),
      m = e.i(84734),
      g = e.i(94720),
      y = e.i(18249),
      w = e.i(53077),
      v = e.i(67901),
      x = e.i(15588),
      E = e.i(12371),
      B = e.i(12477),
      P = e.i(28843),
      A = e.i(75948),
      R = e.i(28804),
      I = e.i(63700),
      k = e.i(5158),
      T = e.i(97178),
      N = e.i(66416),
      S = e.i(9050),
      C = e.i(37463),
      F = e.i(11047),
      O = e.i(2676),
      U = e.i(79578),
      q = e.i(44993),
      L = e.i(74148),
      z = e.i(79917),
      M = e.i(89228),
      H = e.i(37445),
      $ = e.i(68307),
      D = e.i(4558),
      j = e.i(88750),
      G = e.i(48331),
      _ = e.i(71293),
      V = e.i(6145),
      W = e.i(8412),
      Z = e.i(93617),
      K = e.i(33570),
      Y = e.i(77528),
      J = e.i(48789),
      X = e.i(58167),
      Q = e.i(27465),
      ee = e.i(38081),
      et = e.i(21821),
      er = e.i(54727),
      en = e.i(95024),
      ea = e.i(11092),
      ei = e.i(52012),
      eo = e.i(96516),
      es = e.i(6685),
      ec = e.i(56679),
      el = e.i(44616);
    function eu(e, t) {
      return { amount: e, decimals: t, formatted: (0, el.formatUnits)(e, t) };
    }
    function ed(e, t) {
      let { decimals: r, token: n } = t,
        a = ef(e, n);
      if (a) return { address: a.address, decimals: r ?? a.decimals };
      if ((0, eo.isAddress)(n, { strict: !1 }))
        return {
          address: n,
          decimals:
            r ??
            (function (e, t) {
              let r = e.tokens,
                n = e.chain?.id;
              if (r && void 0 !== n)
                for (let e of r) {
                  let r = eh(e, n);
                  if (r && (0, es.isAddressEqual)(r.address, t))
                    return r.decimals;
                }
            })(e, n),
        };
      throw Error(
        `Token "${n}" is not a declared ERC-20 token on the client's \`tokens\` array (with an address for the client's chain), and is not a valid address.`
      );
    }
    function ef(e, t) {
      let r = e.tokens,
        n = e.chain?.id;
      if (!r || void 0 === n) return;
      let a = (function (e, t) {
        let r = t.toLowerCase();
        for (let t of e) if (t.symbol?.toLowerCase() === r) return t;
      })(r, t);
      if (a) return eh(a, n);
      if ((0, eo.isAddress)(t, { strict: !1 }))
        for (let e of r) {
          let r = eh(e, n);
          if (r && (0, es.isAddressEqual)(r.address, t)) return r;
        }
    }
    function eh(e, t) {
      let r = e.addresses[t];
      if (r)
        return {
          address: r,
          currency: e.currency,
          decimals: e.decimals,
          name: e.name,
          popular: e.popular,
          symbol: e.symbol,
        };
    }
    async function ep(e, t) {
      let { address: r, decimals: n } = ed(e, t);
      return void 0 !== n
        ? { address: r, decimals: n }
        : {
            address: r,
            decimals: await (0, j.readContract)(e, {
              abi: ei.erc20Abi,
              address: r,
              functionName: "decimals",
            }),
          };
    }
    function eb(e) {
      return { ...e, data: (0, ec.encodeFunctionData)(e), to: e.address };
    }
    async function em(e, t) {
      let { account: r, decimals: n, spender: a, token: i, ...o } = t,
        [s, { decimals: c }] = await Promise.all([
          (0, j.readContract)(e, {
            ...o,
            ...em.call(e, { account: r, spender: a, token: i }),
          }),
          ep(e, { decimals: n, token: i }),
        ]);
      return eu(s, c);
    }
    async function eg(e, t) {
      let { token: r, ...n } = t,
        { address: a } = ed(e, { token: r }),
        i = ef(e, r),
        [o, s, c] = await Promise.all([
          i?.decimals ??
            (0, j.readContract)(e, {
              ...n,
              abi: ei.erc20Abi,
              address: a,
              functionName: "decimals",
            }),
          i?.name ??
            (0, j.readContract)(e, {
              ...n,
              abi: ei.erc20Abi,
              address: a,
              functionName: "name",
            }),
          i?.symbol ??
            (0, j.readContract)(e, {
              ...n,
              abi: ei.erc20Abi,
              address: a,
              functionName: "symbol",
            }),
        ]);
      return { decimals: o, name: s, symbol: c };
    }
    (em || (em = {})).call = function (e, t) {
      return eb({
        address: ed(e, t).address,
        abi: ei.erc20Abi,
        functionName: "allowance",
        args: [t.account, t.spender],
      });
    };
    var ey = e.i(89991),
      ew = e.i(69934);
    class ev extends ew.BaseError {
      constructor({ docsPath: e } = {}) {
        super(
          "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
          { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
        );
      }
    }
    async function ex(e, t) {
      let { account: r = e.account, decimals: n, token: a, ...i } = t;
      if (!r) throw new ev();
      let o = (0, ey.parseAccount)(r).address,
        [s, { decimals: c }] = await Promise.all([
          (0, j.readContract)(e, {
            ...i,
            ...ex.call(e, { account: o, token: a }),
          }),
          ep(e, { decimals: n, token: a }),
        ]);
      return eu(s, c);
    }
    async function eE(e, t) {
      let { decimals: r, token: n, ...a } = t,
        [i, { decimals: o }] = await Promise.all([
          (0, j.readContract)(e, { ...a, ...eE.call(e, { token: n }) }),
          ep(e, { decimals: r, token: n }),
        ]);
      return eu(i, o);
    }
    ew.BaseError,
      ((ex || (ex = {})).call = function (e, t) {
        let r = t.account ?? e.account;
        if (!r) throw new ev();
        let n = (0, ey.parseAccount)(r).address;
        return eb({
          address: ed(e, t).address,
          abi: ei.erc20Abi,
          functionName: "balanceOf",
          args: [n],
        });
      }),
      ((eE || (eE = {})).call = function (e, t) {
        return eb({
          address: ed(e, t).address,
          abi: ei.erc20Abi,
          args: [],
          functionName: "totalSupply",
        });
      });
    var eB = e.i(68941);
    async function eP(e, { serializedTransaction: t }) {
      return e.request(
        { method: "eth_sendRawTransaction", params: [t] },
        { retryCount: 0 }
      );
    }
    var eA = e.i(93702),
      eR = e.i(39080);
    async function eI(
      e,
      { serializedTransaction: t, throwOnReceiptRevert: r, timeout: n }
    ) {
      let a = await e.request(
          { method: "eth_sendRawTransactionSync", params: n ? [t, n] : [t] },
          { retryCount: 0 }
        ),
        i = (
          e.chain?.formatters?.transactionReceipt?.format ||
          eR.formatTransactionReceipt
        )(a);
      if ("reverted" === i.status && r)
        throw new eA.TransactionReceiptRevertedError({ receipt: i });
      return i;
    }
    function ek(e) {
      var t;
      return {
        call: (t) => (0, c.call)(e, t),
        createAccessList: (t) => (0, l.createAccessList)(e, t),
        createBlockFilter: () => (0, u.createBlockFilter)(e),
        createContractEventFilter: (t) =>
          (0, d.createContractEventFilter)(e, t),
        createEventFilter: (t) => (0, f.createEventFilter)(e, t),
        createPendingTransactionFilter: () =>
          (0, h.createPendingTransactionFilter)(e),
        estimateContractGas: (t) => (0, p.estimateContractGas)(e, t),
        estimateGas: (t) => (0, m.estimateGas)(e, t),
        getBalance: (t) => (0, w.getBalance)(e, t),
        getBlobBaseFee: () => (0, v.getBlobBaseFee)(e),
        getBlock: (t) => (0, x.getBlock)(e, t),
        getBlockNumber: (t) => (0, E.getBlockNumber)(e, t),
        getBlockReceipts: (t) => (0, B.getBlockReceipts)(e, t),
        getBlockTransactionCount: (t) => (0, P.getBlockTransactionCount)(e, t),
        getBytecode: (t) => (0, R.getCode)(e, t),
        getChainId: () => (0, A.getChainId)(e),
        getCode: (t) => (0, R.getCode)(e, t),
        getContractEvents: (t) => (0, I.getContractEvents)(e, t),
        getDelegation: (t) => (0, k.getDelegation)(e, t),
        getEip712Domain: (t) => (0, T.getEip712Domain)(e, t),
        getEnsAddress: (t) => (0, n.getEnsAddress)(e, t),
        getEnsAvatar: (t) => (0, a.getEnsAvatar)(e, t),
        getEnsName: (t) => (0, i.getEnsName)(e, t),
        getEnsResolver: (t) => (0, o.getEnsResolver)(e, t),
        getEnsText: (t) => (0, s.getEnsText)(e, t),
        getFeeHistory: (t) => (0, N.getFeeHistory)(e, t),
        estimateFeesPerGas: (t) => (0, b.estimateFeesPerGas)(e, t),
        getFilterChanges: (t) => (0, S.getFilterChanges)(e, t),
        getFilterLogs: (t) => (0, C.getFilterLogs)(e, t),
        getGasPrice: () => (0, F.getGasPrice)(e),
        getLogs: (t) => (0, O.getLogs)(e, t),
        getProof: (t) => (0, U.getProof)(e, t),
        estimateMaxPriorityFeePerGas: (t) =>
          (0, g.estimateMaxPriorityFeePerGas)(e, t),
        fillTransaction: (t) => (0, y.fillTransaction)(e, t),
        getRawTransaction: (t) => (0, q.getRawTransaction)(e, t),
        getStorageAt: (t) => (0, L.getStorageAt)(e, t),
        getTransaction: (t) => (0, z.getTransaction)(e, t),
        getTransactionConfirmations: (t) =>
          (0, M.getTransactionConfirmations)(e, t),
        getTransactionCount: (t) => (0, H.getTransactionCount)(e, t),
        getTransactionReceipt: (t) => (0, $.getTransactionReceipt)(e, t),
        multicall: (t) => (0, D.multicall)(e, t),
        prepareTransactionRequest: (t) =>
          (0, eB.prepareTransactionRequest)(e, t),
        readContract: (t) => (0, j.readContract)(e, t),
        sendRawTransaction: (t) => eP(e, t),
        sendRawTransactionSync: (t) => eI(e, t),
        simulate: (t) => (0, G.simulateBlocks)(e, t),
        simulateBlocks: (t) => (0, G.simulateBlocks)(e, t),
        simulateCalls: (t) => (0, _.simulateCalls)(e, t),
        simulateContract: (t) => (0, V.simulateContract)(e, t),
        verifyHash: (t) => (0, Z.verifyHash)(e, t),
        verifyMessage: (t) => (0, K.verifyMessage)(e, t),
        verifySiweMessage: (t) => (0, ea.verifySiweMessage)(e, t),
        verifyTypedData: (t) => (0, Y.verifyTypedData)(e, t),
        uninstallFilter: (t) => (0, W.uninstallFilter)(e, t),
        waitForTransactionReceipt: (t) =>
          (0, J.waitForTransactionReceipt)(e, t),
        watchBlockHeaders: (t) => (0, X.watchBlockHeaders)(e, t),
        watchBlocks: (t) => (0, ee.watchBlocks)(e, t),
        watchBlockNumber: (t) => (0, Q.watchBlockNumber)(e, t),
        watchContractEvent: (t) => (0, et.watchContractEvent)(e, t),
        watchEvent: (t) => (0, er.watchEvent)(e, t),
        watchPendingTransactions: (t) => (0, en.watchPendingTransactions)(e, t),
        token:
          ((t = e),
          {
            getAllowance: (0, r.bindActionDecorators)(t, em),
            getBalance: (0, r.bindActionDecorators)(t, ex),
            getMetadata: (0, r.bindActionDecorators)(t, eg),
            getTotalSupply: (0, r.bindActionDecorators)(t, eE),
          }),
      };
    }
    var eT = e.i(95767),
      eN = ew;
    class eS extends eN.BaseError {
      constructor() {
        super(
          "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
          { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
        );
      }
    }
    var eC = e.i(71706),
      eF = e.i(63710),
      eO = e.i(34888);
    let eU = {
      current: 0,
      take() {
        return this.current++;
      },
      reset() {
        this.current = 0;
      },
    };
    async function eq(e, { maxResponseBodySize: t }) {
      if (!1 === t) return e.text();
      let r = e.headers.get("Content-Length");
      if (r) {
        let e = Number(r);
        if (e > t)
          throw new eT.ResponseBodyTooLargeError({ maxSize: t, size: e });
      }
      if (!e.body) {
        let r = await e.text(),
          n = new TextEncoder().encode(r).length;
        if (n > t)
          throw new eT.ResponseBodyTooLargeError({ maxSize: t, size: n });
        return r;
      }
      let n = e.body.getReader(),
        a = new TextDecoder(),
        i = "",
        o = 0;
      try {
        for (;;) {
          let { done: e, value: r } = await n.read();
          if (e) break;
          if ((o += r.byteLength) > t)
            throw (
              (await n.cancel(),
              new eT.ResponseBodyTooLargeError({ maxSize: t, size: o }))
            );
          i += a.decode(r, { stream: !0 });
        }
        return (i += a.decode());
      } finally {
        n.releaseLock();
      }
    }
    var eL = e.i(83856);
    let ez = new (e.i(76677).LruMap)(8192);
    var eM = e.i(9760),
      eH = e.i(6624);
    let e$ = 0,
      eD = new WeakMap();
    function ej(e) {
      let t = { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      return Object.assign(t, {
        extend: (function e(t) {
          return (r) => {
            let n = "function" == typeof r ? r(t) : r,
              a = { ...t, ...n };
            return Object.assign(a, { extend: e(a) });
          };
        })(t),
      });
    }
    let eG = ej({
        id: 4663,
        name: "Robinhood Chain",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        blockTime: 100,
        rpcUrls: {
          default: {
            http: [
              "https://rpc.mainnet.chain.robinhood.com",
              "https://rpc.ordofi.network",
            ],
            webSocket: ["wss://rpc.ordofi.network"],
          },
        },
        blockExplorers: {
          default: {
            name: "Blockscout",
            url: "https://robinhoodchain.blockscout.com",
            apiUrl: "https://robinhoodchain.blockscout.com/api",
          },
        },
        contracts: {
          multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11" },
        },
      }),
      e_ = ej({
        id: 46630,
        name: "Robinhood Chain Testnet",
        nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: {
          default: { http: ["https://rpc.testnet.chain.robinhood.com"] },
        },
        blockExplorers: {
          default: {
            name: "Blockscout",
            url: "https://explorer.testnet.chain.robinhood.com",
            apiUrl: "https://explorer.testnet.chain.robinhood.com/api",
          },
        },
        contracts: {
          multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11" },
        },
        testnet: !0,
      }),
      eV = "testnet" === t.default.env.NEXT_PUBLIC_CHAIN ? e_ : eG,
      eW = eV.id === eG.id,
      eZ = `0x${eV.id.toString(16)}`,
      eK = t.default.env.NEXT_PUBLIC_RPC_URL ?? eV.rpcUrls.default.http[0],
      eY = (function (e) {
        let { key: t = "public", name: n = "Public Client" } = e;
        return (0, r.createClient)({
          ...e,
          key: t,
          name: n,
          type: "publicClient",
        }).extend(ek);
      })({
        chain: eV,
        transport: (function (e, t = {}) {
          let {
            batch: r,
            fetchFn: n,
            fetchOptions: a,
            key: i = "http",
            maxResponseBodySize: o,
            methods: s,
            name: c = "HTTP JSON-RPC",
            onFetchRequest: l,
            onFetchResponse: u,
            retryDelay: d,
            raw: f,
          } = t;
          return ({ chain: h, retryCount: p, timeout: b }) => {
            let { batchSize: m = 1e3, wait: g = 0 } =
                "object" == typeof r ? r : {},
              y = t.retryCount ?? p,
              w = b ?? t.timeout ?? 1e4,
              v = e || h?.rpcUrls.default.http[0];
            if (!v) throw new eS();
            let x = (function (e, t = {}) {
              let { url: r, headers: n } = (function (e) {
                try {
                  let t = new URL(e),
                    r = (() => {
                      if (t.username) {
                        let e = `${decodeURIComponent(
                          t.username
                        )}:${decodeURIComponent(t.password)}`;
                        return (
                          (t.username = ""),
                          (t.password = ""),
                          {
                            url: t.toString(),
                            headers: { Authorization: `Basic ${btoa(e)}` },
                          }
                        );
                      }
                    })();
                  return { url: t.toString(), ...r };
                } catch {
                  return { url: e };
                }
              })(e);
              return {
                async request(e) {
                  let {
                      body: a,
                      fetchFn: i = t.fetchFn ?? fetch,
                      maxResponseBodySize: o = t.maxResponseBodySize ??
                        0xa00000,
                      onRequest: s = t.onRequest,
                      onResponse: c = t.onResponse,
                      timeout: l = t.timeout ?? 1e4,
                    } = e,
                    u = {
                      ...(t.fetchOptions ?? {}),
                      ...(e.fetchOptions ?? {}),
                    },
                    { headers: d, method: f, signal: h } = u;
                  try {
                    let e,
                      t = await (function (
                        e,
                        {
                          errorInstance: t = Error("timed out"),
                          timeout: r,
                          signal: n,
                        }
                      ) {
                        return new Promise((a, i) => {
                          (async () => {
                            let o,
                              s = new AbortController();
                            try {
                              r > 0 &&
                                (o = setTimeout(() => {
                                  n ? s.abort() : i(t);
                                }, r)),
                                a(await e({ signal: s?.signal || null }));
                            } catch (e) {
                              if (s?.signal.aborted && (0, eF.isAbortError)(e))
                                return void i(t);
                              i(e);
                            } finally {
                              clearTimeout(o);
                            }
                          })();
                        });
                      })(
                        async ({ signal: e }) => {
                          let t = {
                              ...u,
                              body: Array.isArray(a)
                                ? (0, eO.stringify)(
                                    a.map((e) => ({
                                      jsonrpc: "2.0",
                                      id: e.id ?? eU.take(),
                                      ...e,
                                    }))
                                  )
                                : (0, eO.stringify)({
                                    jsonrpc: "2.0",
                                    id: a.id ?? eU.take(),
                                    ...a,
                                  }),
                              headers: {
                                ...n,
                                "Content-Type": "application/json",
                                ...d,
                              },
                              method: f || "POST",
                              signal: h || (l > 0 ? e : null),
                            },
                            o = new Request(r, t),
                            c = (await s?.(o, t)) ?? { ...t, url: r };
                          return await i(c.url ?? r, c);
                        },
                        {
                          errorInstance: new eT.TimeoutError({
                            body: a,
                            url: r,
                          }),
                          timeout: l,
                          signal: !0,
                        }
                      );
                    c && (await c(t));
                    let p = await eq(t, { maxResponseBodySize: o });
                    if (
                      t.headers
                        .get("Content-Type")
                        ?.startsWith("application/json")
                    )
                      e = JSON.parse(p);
                    else {
                      e = p;
                      try {
                        e = JSON.parse(e || "{}");
                      } catch (r) {
                        if (t.ok) throw r;
                        e = { error: e };
                      }
                    }
                    if (!t.ok) {
                      if (
                        "number" == typeof e.error?.code &&
                        "string" == typeof e.error?.message
                      )
                        return e;
                      throw new eT.HttpRequestError({
                        body: a,
                        details: (0, eO.stringify)(e.error) || t.statusText,
                        headers: t.headers,
                        status: t.status,
                        url: r,
                      });
                    }
                    return e;
                  } catch (e) {
                    if (h?.aborted) throw (0, eF.getAbortError)(h);
                    if (
                      (0, eF.isAbortError)(e) ||
                      e instanceof eT.HttpRequestError ||
                      e instanceof eT.ResponseBodyTooLargeError ||
                      e instanceof eT.TimeoutError
                    )
                      throw e;
                    throw new eT.HttpRequestError({
                      body: a,
                      cause: e,
                      url: r,
                    });
                  }
                },
              };
            })(v, {
              fetchFn: n,
              fetchOptions: a,
              maxResponseBodySize: o,
              onRequest: l,
              onResponse: u,
              timeout: w,
            });
            return (function (
              {
                key: e,
                methods: t,
                name: r,
                request: n,
                retryCount: a = 3,
                retryDelay: i = 150,
                timeout: o,
                type: s,
              },
              c
            ) {
              return {
                config: {
                  key: e,
                  methods: t,
                  name: r,
                  request: n,
                  retryCount: a,
                  retryDelay: i,
                  timeout: o,
                  type: s,
                },
                request: (function (e, t = {}) {
                  return async (r, n = {}) => {
                    let {
                        dedupe: a = !1,
                        methods: i,
                        retryDelay: o = 150,
                        retryCount: s = 3,
                        signal: c,
                        uid: l,
                      } = { ...t, ...n },
                      { method: u } = r;
                    if (
                      i?.exclude?.includes(u) ||
                      (i?.include && !i.include.includes(u))
                    )
                      throw new eL.MethodNotSupportedRpcError(
                        Error("method not supported"),
                        { method: u }
                      );
                    if (c?.aborted) throw (0, eF.getAbortError)(c);
                    let d = a
                      ? (function (e, t = 0) {
                          let r = 0xdeadbeef ^ t,
                            n = 0x41c6ce57 ^ t;
                          for (let t = 0; t < e.length; t++) {
                            let a = e.charCodeAt(t);
                            (r = Math.imul(r ^ a, 0x9e3779b1)),
                              (n = Math.imul(n ^ a, 0x5f356495));
                          }
                          return (
                            (r =
                              Math.imul(r ^ (r >>> 16), 0x85ebca6b) ^
                              Math.imul(n ^ (n >>> 16), 0xc2b2ae35)),
                            (
                              0x100000000 *
                                (2097151 &
                                  (n =
                                    Math.imul(n ^ (n >>> 16), 0x85ebca6b) ^
                                    Math.imul(r ^ (r >>> 16), 0xc2b2ae35))) +
                              (r >>> 0)
                            ).toString(36)
                          );
                        })(`${l}.${(0, eO.stringify)(r)}`)
                      : void 0;
                    return (function (e, { enabled: t = !0, id: r }) {
                      if (!t || !r) return e();
                      if (ez.get(r)) return ez.get(r);
                      let n = e().finally(() => ez.delete(r));
                      return ez.set(r, n), n;
                    })(
                      () =>
                        (0, eM.withRetry)(
                          async () => {
                            try {
                              return await e(r, c ? { signal: c } : void 0);
                            } catch (e) {
                              if (c?.aborted) throw (0, eF.getAbortError)(c);
                              if ((0, eF.isAbortError)(e)) throw e;
                              switch (e.code) {
                                case eL.ParseRpcError.code:
                                  throw new eL.ParseRpcError(e);
                                case eL.InvalidRequestRpcError.code:
                                  throw new eL.InvalidRequestRpcError(e);
                                case eL.MethodNotFoundRpcError.code:
                                  throw new eL.MethodNotFoundRpcError(e, {
                                    method: r.method,
                                  });
                                case eL.InvalidParamsRpcError.code:
                                  throw new eL.InvalidParamsRpcError(e);
                                case eL.InternalRpcError.code:
                                  throw new eL.InternalRpcError(e);
                                case eL.InvalidInputRpcError.code:
                                  throw new eL.InvalidInputRpcError(e);
                                case eL.ResourceNotFoundRpcError.code:
                                  throw new eL.ResourceNotFoundRpcError(e);
                                case eL.ResourceUnavailableRpcError.code:
                                  throw new eL.ResourceUnavailableRpcError(e);
                                case eL.TransactionRejectedRpcError.code:
                                  throw new eL.TransactionRejectedRpcError(e);
                                case eL.MethodNotSupportedRpcError.code:
                                  throw new eL.MethodNotSupportedRpcError(e, {
                                    method: r.method,
                                  });
                                case eL.LimitExceededRpcError.code:
                                  throw new eL.LimitExceededRpcError(e);
                                case eL.JsonRpcVersionUnsupportedError.code:
                                  throw new eL.JsonRpcVersionUnsupportedError(
                                    e
                                  );
                                case eL.UserRejectedRequestError.code:
                                  throw new eL.UserRejectedRequestError(e);
                                case eL.UnauthorizedProviderError.code:
                                  throw new eL.UnauthorizedProviderError(e);
                                case eL.UnsupportedProviderMethodError.code:
                                  throw new eL.UnsupportedProviderMethodError(
                                    e
                                  );
                                case eL.ProviderDisconnectedError.code:
                                  throw new eL.ProviderDisconnectedError(e);
                                case eL.ChainDisconnectedError.code:
                                  throw new eL.ChainDisconnectedError(e);
                                case eL.SwitchChainError.code:
                                  throw new eL.SwitchChainError(e);
                                case eL.UnsupportedNonOptionalCapabilityError
                                  .code:
                                  throw new eL.UnsupportedNonOptionalCapabilityError(
                                    e
                                  );
                                case eL.UnsupportedChainIdError.code:
                                  throw new eL.UnsupportedChainIdError(e);
                                case eL.DuplicateIdError.code:
                                  throw new eL.DuplicateIdError(e);
                                case eL.UnknownBundleIdError.code:
                                  throw new eL.UnknownBundleIdError(e);
                                case eL.BundleTooLargeError.code:
                                  throw new eL.BundleTooLargeError(e);
                                case eL.AtomicReadyWalletRejectedUpgradeError
                                  .code:
                                  throw new eL.AtomicReadyWalletRejectedUpgradeError(
                                    e
                                  );
                                case eL.AtomicityNotSupportedError.code:
                                  throw new eL.AtomicityNotSupportedError(e);
                                case 5e3:
                                  throw new eL.UserRejectedRequestError(e);
                                case eL.WalletConnectSessionSettlementError
                                  .code:
                                  throw new eL.WalletConnectSessionSettlementError(
                                    e
                                  );
                                default:
                                  if (e instanceof ew.BaseError) throw e;
                                  throw new eL.UnknownRpcError(e);
                              }
                            }
                          },
                          {
                            delay: ({ count: e, error: t }) => {
                              if (t && t instanceof eT.HttpRequestError) {
                                let e = t?.headers?.get("Retry-After");
                                if (e?.match(/\d/))
                                  return 1e3 * Number.parseInt(e, 10);
                              }
                              return ~~(1 << e) * o;
                            },
                            retryCount: s,
                            signal: c,
                            shouldRetry: ({ error: e }) => {
                              var t;
                              return (
                                (t = e),
                                !(0, eF.isAbortError)(t) &&
                                  ("code" in t && "number" == typeof t.code
                                    ? -1 === t.code ||
                                      t.code ===
                                        eL.LimitExceededRpcError.code ||
                                      t.code === eL.InternalRpcError.code ||
                                      429 === t.code ||
                                      -32007 === t.code
                                    : !(t instanceof eT.HttpRequestError) ||
                                      !t.status ||
                                      403 === t.status ||
                                      408 === t.status ||
                                      413 === t.status ||
                                      429 === t.status ||
                                      500 === t.status ||
                                      502 === t.status ||
                                      503 === t.status ||
                                      504 === t.status ||
                                      !1)
                              );
                            },
                          }
                        ),
                      { enabled: a, id: d }
                    );
                  };
                })(n, {
                  methods: t,
                  retryCount: a,
                  retryDelay: i,
                  uid: (0, eH.uid)(),
                }),
                value: c,
              };
            })(
              {
                key: i,
                methods: s,
                name: c,
                async request({ method: e, params: t }, n) {
                  let a = { method: e, params: t },
                    i = n?.signal ? { signal: n.signal } : void 0,
                    { schedule: o } = (0, eC.createBatchScheduler)({
                      id: `${v}.${(function (e) {
                        if (!e) return "default";
                        let t = eD.get(e);
                        if (void 0 !== t) return t;
                        let r = e$++;
                        return eD.set(e, r), r;
                      })(n?.signal)}`,
                      wait: g,
                      shouldSplitBatch: (e) => e.length > m,
                      fn: (e) => x.request({ body: e, fetchOptions: i }),
                      sort: (e, t) => e.id - t.id,
                    }),
                    s = async (e) =>
                      r
                        ? o(e)
                        : [await x.request({ body: e, fetchOptions: i })],
                    [{ error: c, result: l }] = await s(a);
                  if (f) return { error: c, result: l };
                  if (c)
                    throw new eT.RpcRequestError({ body: a, error: c, url: v });
                  return l;
                },
                retryCount: y,
                retryDelay: d,
                timeout: w,
                type: "http",
              },
              { fetchOptions: a, url: v }
            );
          };
        })(eK, { batch: { wait: 16 } }),
      }),
      eJ =
        eV.blockExplorers?.default.url ??
        "https://robinhoodchain.blockscout.com";
    e.s(
      [
        "CHAIN",
        0,
        eV,
        "CHAINLINK_ETH_USD",
        0,
        eW ? "0x78F3556b67E17Df817D51Ef5a990cDaF09E8d3A9" : null,
        "CHAIN_HEX",
        0,
        eZ,
        "EXPLORER_URL",
        0,
        eJ,
        "USDG",
        0,
        eW
          ? {
              address: "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168",
              decimals: 6,
              symbol: "USDG",
            }
          : null,
        "explorerAddress",
        0,
        (e) => `${eJ}/address/${e}`,
        "explorerBlock",
        0,
        (e) => `${eJ}/block/${e.toString()}`,
        "explorerTx",
        0,
        (e) => `${eJ}/tx/${e}`,
        "publicClient",
        0,
        eY,
      ],
      15092
    );
  },
]);
