var ms = Object.defineProperty;
var gs = (i, e, t) =>
  e in i
    ? ms(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (i[e] = t);
var Q = (i, e, t) => (gs(i, typeof e != "symbol" ? e + "" : e, t), t);
import {
  d as ae,
  u as ht,
  r as L,
  a as G,
  o as ke,
  b as P,
  c as I,
  e as m,
  f as N,
  w as q,
  g as v,
  n as $e,
  T as et,
  h as ce,
  t as Y,
  v as he,
  F as de,
  i as Ee,
  _ as Ce,
  p as Ue,
  j as Ge,
  k as we,
  l as Tt,
  m as Re,
  q as X,
  s as te,
  x as le,
  y as ys,
  z as Cs,
  A as Te,
  B as an,
  C as ln,
  D as bs,
  E as Le,
  G as _s,
  H as ws,
  I as Es,
  J as Bt,
  K as li,
  L as un,
  M as Fi,
  N as xs,
  O as Fs,
  P as Mt,
  Q as ti,
  R as cn,
  S as dn,
  U as ui,
  V as Ss,
  W as Ts,
  X as rt,
  Y as Bs,
  Z as ks,
  $ as Ds,
  a0 as As,
  a1 as Ms,
} from "./index.78484553.js";
const Ps = "" + new URL("https://pic2.zhimg.com/v2-cd34ac07ffc6f4b5b358885b9b601123_r.jpg", import.meta.url).href,
  Os = "" + new URL("https://pic2.zhimg.com/v2-d2682134d7460d34579d35b7ed1e3fc5_r.jpg", import.meta.url).href,
  Ls = "" + new URL("https://picx.zhimg.com/v2-5e26928fc9c18ec7764d44aac17c7c37_r.jpg", import.meta.url).href,
  zs = "" + new URL("https://pic1.zhimg.com/v2-0bd75187fb07ea758017ab2ce29b4d7a_r.jpg", import.meta.url).href,
  Is = "" + new URL("https://pica.zhimg.com/v2-164f0c352e3898a34f68dac4c11c9304_r.jpg", import.meta.url).href,
  Rs = "" + new URL("https://www.gfwiki.org/images/thumb/9/94/CG.5.png/900px-CG.5.png?20200427102453", import.meta.url).href,
  $s = "" + new URL("https://www.gfwiki.org/images/0/0a/CG.5-6.png", import.meta.url).href,
  Ns = "" + new URL("https://www.gfwiki.org/images/thumb/5/55/6CG-AR15b.png/900px-6CG-AR15b.png?20200427102708", import.meta.url).href,
  Hs = "" + new URL("https://www.gfwiki.org/images/thumb/a/ac/CG-Cannon.png/900px-CG-Cannon.png?20200427025826", import.meta.url).href,
  Vs = "" + new URL("https://www.gfwiki.org/images/thumb/c/c0/2018Winter9-1.png/900px-2018Winter9-1.png?20180316030720", import.meta.url).href,
  js = "" + new URL("https://pic2.zhimg.com/v2-d2682134d7460d34579d35b7ed1e3fc5_r.jpg", import.meta.url).href,
  qs = "" + new URL("https://pic1.zhimg.com/v2-0bd75187fb07ea758017ab2ce29b4d7a_r.jpg", import.meta.url).href,
  Us = "" + new URL("https://pica.zhimg.com/v2-164f0c352e3898a34f68dac4c11c9304_r.jpg", import.meta.url).href,
  Gs = "" + new URL("https://www.gfwiki.org/images/thumb/b/bd/2019summer_4_1.png/900px-2019summer_4_1.png?20220916222805", import.meta.url).href,
  Ws = "" + new URL("https://www.gfwiki.org/images/thumb/7/73/2020summer94%26K.png/900px-2020summer94%26K.png?20220916222810", import.meta.url).href,
  Xs = "" + new URL("https://www.gfwiki.org/images/thumb/a/ad/2021summer_MRL1.png/900px-2021summer_MRL1.png?20210828041427", import.meta.url).href,
  Ys = "" + new URL("https://www.gfwiki.org/images/thumb/a/ad/2021summer_Research.png/900px-2021summer_Research.png?20210828041530", import.meta.url).href,
  Zs = "" + new URL("https://www.gfwiki.org/images/thumb/5/51/2021summer_SecurityBureau.png/900px-2021summer_SecurityBureau.png?20210828041745", import.meta.url).href;
const Ks = { class: "media-current" },
  Js = { class: "media-main-pic" },
  Qs = { class: "media-current-info" },
  eo = { class: "media-info-wrapper" },
  to = { class: "media-info-detail", ref: "MediaInfoDetail", key: "3" },
  io = { class: "media-detail-desc" },
  no = { class: "media-nav-wrapper" },
  so = ["data-index", "onClick", "active"],
  oo = { class: "media-list-wrapper", id: "media-list" },
  ro = ["data-index", "onClick"],
  ao = ["data-title"],
  lo = ae({
    __name: "Section5_swiper",
    setup(i, { expose: e }) {
      ht((S) => ({ "499c4690": v(E), "4db7efee": v(w), "4db7efef": v(F) }));
      let t = L([]),
        n = (S) => {
          t.value.push(S);
        },
        s = L(),
        o = L(),
        r = G([
          {
            serial: "01",
            title: "开端",
            desc: "#DEC#",
            active: !0,
          },
          {
            serial: "02",
            title: "LF.",
            desc: "#DEC#",
            active: !1,
          },
          {
            serial: "03",
            title: "DEVp2p.",
            desc: "#DEVp2p#",
            active: !1,
          },
          {
            serial: "04",
            title: "GZHU.",
            desc: "#RAC#",
            active: !1,
          },/*
          {
            serial: "05",
            title: "REV",
            desc: "#戌晋#",
            active: !1,
          },
          {
            serial: "06",
            title: "ERA",
            desc: "#BOL-P#",
            active: !1,
          },
          {
            serial: "07",
            title: "武装",
            desc: "#BM-23#",
            active: !1,
          },
          {
            serial: "08",
            title: "\u542F\u822A",
            desc: "#\u4EFB\u52A1\u5916\u51FA#",
            active: !1,
          },
          {
            serial: "09",
            title: "SITE-CN-02",
            desc: "#监控室#",
            active: !1,
          },
          {
            serial: "10",
            title: "\u542F\u793A",
            desc: "#\u5927\u5385#",
            active: !1,
          },
          {
            serial: "11",
            title: "U-M-P",
            desc: "#4045#",
            active: !1,
          },
          {
            serial: "12",
            title: "TRD",
            desc: "#\u77F3\u68FA\u4E4B\u95F4#",
            active: !1,
          },
          {
            serial: "13",
            title: "第聂伯",
            desc: "#RVC-D#",
            active: !1,
          },
          {
            serial: "14",
            title: "SDC",
            desc: "#SDEPC.#",
            active: !1,
          },
          {
            serial: "15",
            title: "15",
            desc: "#\u5580\u5170\#",
            active: !1,
          },
          {
            serial: "16",
            title: "石菖蒲",
            desc: "#\u884C\u52A8\u9884\u5907\u7EC4A4#",
            active: !1,
          },
          {
            serial: "17",
            title: "SF.",
            desc: "#\u5370\u8C61\u56FE#",
            active: !1,
          },
          {
            serial: "18",
            title: "GRU-P",
            desc: "#莫斯科#",
            active: !1,
          },
          */
        ]),
        a = G({
          backgroundImage: [],
          transform: [],
          opacity: [],
          PointerEvent: [],
        });
      for (let S = 0; S < r.length; S++) {
        let A = new URL(
          Object.assign({
            "../../assets/img/Five/carousel_1.png": Ps,
            "../../assets/img/Five/carousel_10.png": Os,
            "../../assets/img/Five/carousel_11.png": Ls,
            "../../assets/img/Five/carousel_12.png": zs,
            "../../assets/img/Five/carousel_13.png": Is,
            "../../assets/img/Five/carousel_14.png": Rs,
            "../../assets/img/Five/carousel_15.png": $s,
            "../../assets/img/Five/carousel_16.png": Ns,
            "../../assets/img/Five/carousel_17.png": Hs,
            "../../assets/img/Five/carousel_18.png": Vs,
            "../../assets/img/Five/carousel_2.png": js,
            "../../assets/img/Five/carousel_3.png": qs,
            "../../assets/img/Five/carousel_4.png": Us,
            "../../assets/img/Five/carousel_5.png": Gs,
            "../../assets/img/Five/carousel_6.png": Ws,
            "../../assets/img/Five/carousel_7.png": Xs,
            "../../assets/img/Five/carousel_8.png": Ys,
            "../../assets/img/Five/carousel_9.png": Zs,
          })[`../../assets/img/Five/carousel_${S + 1}.png`],
          self.location
        ).href;
        a.backgroundImage[S] = `url(${A})`;
      }
      function l() {
        (s.value.style.backgroundImage = a.backgroundImage[0]), u();
      }
      ke(() => {
        var S;
        l(), (S = T.value) == null || S.addEventListener("mousemove", U);
      });
      function u() {
        const S = t.value[0];
        let A = Math.floor(
          Number(getComputedStyle(S).width.replace("px", "")) +
            Number(getComputedStyle(S).paddingRight.replace("px", "")) * 2
        );
        for (let M = 0; M < r.length; M++)
          (a.transform[M] = `translateX(${A * M}px)`),
            (a.opacity[M] = 1),
            (a.PointerEvent[M] = "auto"),
            M > 3 &&
              ((a.transform[M] = `translateX(${A * 3}px)`),
              (a.opacity[M] = 0),
              (a.PointerEvent[M] = "none"));
      }
      let c = L(!0),
        d = L(0);
      const f = (S, A, M) => {
          M.forEach((O) => {
            O.active = !1;
          }),
            (A.active = !0),
            S > d.value && c.value
              ? ((c.value = !1), g(S, "left"))
              : S < d.value && c.value && ((c.value = !1), g(S, "right")),
            (d.value = S);
        },
        p = () => {
          c.value &&
            ((c.value = !1),
            d.value > 0 ? d.value-- : (d.value = r.length - 1),
            g(d.value, "left"),
            r.forEach((S) => {
              S.active = !1;
            }),
            (r[d.value].active = !0));
        },
        h = () => {
          c.value &&
            ((c.value = !1),
            d.value < r.length - 1 ? d.value++ : (d.value = 0),
            g(d.value, "right"),
            r.forEach((S) => {
              S.active = !1;
            }),
            (r[d.value].active = !0));
        },
        g = (S, A) => {
          k(0.45, A, S), b(A, 0.2, 0.45, S), x(S);
        };
      function y(S) {
        return new Promise((A) => setTimeout(A, S));
      }
      const x = async (S) => {
        const A = t.value[0];
        let M = Math.floor(
          Number(getComputedStyle(A).width.replace("px", "")) +
            Number(getComputedStyle(A).paddingRight.replace("px", "")) * 2
        );
        for (let O = 0; O < r.length; O++) {
          let W = M * O - M * (S - 1);
          W <= -M
            ? ((a.transform[O] = `translateX(${-M}px)`),
              (a.opacity[O] = 0),
              (a.PointerEvent[O] = "none"))
            : W >= M * 4
            ? ((a.transform[O] = `translateX(${M * 4}px)`),
              (a.opacity[O] = 0),
              (a.PointerEvent[O] = "none"))
            : ((a.transform[O] = `translateX(${M * O - M * (S - 1)}px)`),
              (a.opacity[O] = 1),
              (a.PointerEvent[O] = "auto"));
        }
        if (S === 0)
          for (let O = 1; O < 2; O++)
            (a.transform[r.length - O] = `translateX(${M * (O - 1)}px)`),
              (a.opacity[r.length - O] = 1),
              (a.PointerEvent[r.length - O] = "auto");
        if (S === r.length - 3)
          for (let O = 0; O < 2; O++)
            (a.transform[O] = `translateX(${M * 4}px)`),
              (a.opacity[O] = 0),
              (a.PointerEvent[O] = "none");
        if (S >= r.length - 2) {
          let O = S % 3;
          for (let W = 0; W < 2; W++)
            (a.transform[W] = `translateX(${M * (4 - O + W)}px)`),
              (a.opacity[W] = 0),
              S === r.length - 2 &&
                ((a.opacity[0] = 1), (a.PointerEvent[0] = "auto")),
              S === r.length - 1 &&
                ((a.opacity[W] = 1), (a.PointerEvent[W] = "auto"));
        }
      };
      let C = G({ TextAnimate: [!0, !0, !0], TextNum: 0, TextDire: !0 });
      const b = async (S, A, M, O) => {
        S == "left" ? (C.TextDire = !0) : S == "right" && (C.TextDire = !1),
          (C.TextAnimate[0] = !C.TextAnimate[0]),
          await y(A * 100),
          (C.TextAnimate[1] = !C.TextAnimate[1]),
          await y(A * 300),
          (C.TextAnimate[2] = !C.TextAnimate[2]),
          await y(M * 1500),
          (C.TextNum = O),
          await y(A * 100),
          (C.TextAnimate[0] = !C.TextAnimate[0]),
          await y(A * 300),
          (C.TextAnimate[1] = !C.TextAnimate[1]),
          await y(A * 500),
          (C.TextAnimate[2] = !C.TextAnimate[2]);
      };
      let _ = G({ MediaImgStyle: {}, imgAnimate: !0 }),
        E = L(""),
        w = L(""),
        F = L("");
      const k = async (S, A, M) => {
          (_.imgAnimate = !_.imgAnimate),
            A == "left"
              ? ((w.value = "left top"), (F.value = "right bottom"))
              : A == "right" &&
                ((w.value = "right bottom"), (F.value = "left top")),
            (_.MediaImgStyle = { backgroundImage: a.backgroundImage[M] }),
            (E.value = S + "s"),
            await y(S * 1e3),
            (c.value = !0);
        },
        T = L(),
        B = L(),
        D = L(),
        z = G({ x: 0, y: 0 }),
        V = G({ x: 0, y: 0 }),
        U = (S) => {
          (z.x = S.clientX), (z.y = S.clientY);
        };
      return (
        requestAnimationFrame(function S() {
          (V.x += (z.x - V.x) / 10), (V.y += (z.y - V.y) / 10);
          const O = (V.x / window.innerWidth) * 20 - 20 / 2,
            W = (V.y / window.innerHeight) * 20 - 20 / 2;
          (B.value.style.transform = `translate3d(${O}px,${W}px, 0) rotateX(${-W}deg) rotateY(${-O}deg)`),
            (D.value.style.transform = `translate3d(${O * 7.7}px,${
              W * 3
            }px,50px) rotateX(${-W}deg) rotateY(${-O}deg)`),
            requestAnimationFrame(S);
        }),
        e({ arrowBtnPrev: p, arrowBtnNext: h }),
        (S, A) => (
          P(),
          I(
            "div",
            {
              class: "media-container-box",
              style: { perspective: "5000px" },
              ref_key: "wapper",
              ref: T,
            },
            [
              m(
                "div",
                {
                  class: "media-main-view",
                  id: "media-layer-view",
                  ref_key: "mediaLayerView",
                  ref: B,
                },
                [
                  m("div", Ks, [
                    m("div", Js, [
                      N(
                        et,
                        { name: "imgAnimate" },
                        {
                          default: q(() => [
                            v(_).imgAnimate
                              ? (P(),
                                I(
                                  "div",
                                  {
                                    class: "media-img1",
                                    ref_key: "MediaImg1",
                                    ref: s,
                                    key: "1",
                                    style: $e(v(_).MediaImgStyle),
                                  },
                                  null,
                                  4
                                ))
                              : (P(),
                                I(
                                  "div",
                                  {
                                    class: "media-img2",
                                    ref_key: "MediaImg2",
                                    ref: o,
                                    key: "2",
                                    style: $e(v(_).MediaImgStyle),
                                  },
                                  null,
                                  4
                                )),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    m(
                      "div",
                      {
                        class: "media-user-interactive",
                        id: "media-layer-front",
                        ref_key: "mediaLayerFront",
                        ref: D,
                      },
                      [
                        m("div", Qs, [
                          m("div", eo, [
                            N(
                              et,
                              {
                                name: "animate__animated animate__bounc animate__fast",
                                "enter-active-class": v(C).TextDire
                                  ? "animate__fadeInRight"
                                  : "animate__fadeInLeft",
                                "leave-active-class": v(C).TextDire
                                  ? "animate__fadeOutLeft"
                                  : "animate__fadeOutRight",
                              },
                              {
                                default: q(() => [
                                  ce(
                                    m(
                                      "div",
                                      {
                                        class: "media-info-serial",
                                        ref: "MediaInfoSerial",
                                        key: "1",
                                      },
                                      Y(v(r)[v(C).TextNum].serial),
                                      513
                                    ),
                                    [[he, v(C).TextAnimate[0]]]
                                  ),
                                  ce(
                                    m(
                                      "div",
                                      {
                                        class: "media-info-title",
                                        ref: "MediaInfoTitle",
                                        key: "2",
                                      },
                                      Y(v(r)[v(C).TextNum].title),
                                      513
                                    ),
                                    [[he, v(C).TextAnimate[1]]]
                                  ),
                                  ce(
                                    m(
                                      "div",
                                      to,
                                      [
                                        m(
                                          "div",
                                          io,
                                          Y(v(r)[v(C).TextNum].desc),
                                          1
                                        ),
                                      ],
                                      512
                                    ),
                                    [[he, v(C).TextAnimate[2]]]
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["enter-active-class", "leave-active-class"]
                            ),
                          ]),
                          m("div", no, [
                            (P(!0),
                            I(
                              de,
                              null,
                              Ee(
                                v(r),
                                (M, O) => (
                                  P(),
                                  I(
                                    "div",
                                    {
                                      class: "media-nav-item",
                                      "data-index": O,
                                      onClick: (W) => f(O, M, v(r)),
                                      active: M.active,
                                      "data-cursor": "pointer",
                                    },
                                    null,
                                    8,
                                    so
                                  )
                                )
                              ),
                              256
                            )),
                          ]),
                        ]),
                      ],
                      512
                    ),
                  ]),
                  m("div", oo, [
                    (P(!0),
                    I(
                      de,
                      null,
                      Ee(
                        v(r),
                        (M, O) => (
                          P(),
                          I(
                            "div",
                            {
                              class: "media-list-item",
                              "data-index": O,
                              ref_for: !0,
                              ref: v(n),
                              style: $e({
                                transform: v(a).transform[O],
                                opacity: v(a).opacity[O],
                                pointerEvents: v(a).PointerEvent[O],
                              }),
                              onClick: (W) => f(O, M, v(r)),
                            },
                            [
                              m(
                                "div",
                                {
                                  class: "media-list-item-img",
                                  style: $e({
                                    backgroundImage: v(a).backgroundImage[O],
                                  }),
                                  "data-title": M.title,
                                  "data-cursor": "pointer",
                                },
                                null,
                                12,
                                ao
                              ),
                            ],
                            12,
                            ro
                          )
                        )
                      ),
                      256
                    )),
                  ]),
                ],
                512
              ),
            ],
            512
          )
        )
      );
    },
  });
const uo = Ce(lo, [["__scopeId", "data-v-d5bbf8f8"]]),
  co = (i) => (Ue("data-v-1a707a3b"), (i = i()), Ge(), i),
  fo = co(() =>
    m(
      "svg",
      {
        viewBox: "0 0 103 103",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "data-cursor": "pointer",
      },
      [
        m("circle", {
          cx: "36",
          cy: "51.5",
          r: "4.5",
          class: "dot",
          "transform-origin": "34.5% 50%",
          transform: "scale(0)",
          "data-cursor": "pointer",
        }),
        m("g", { transform: "translate(35,15)" }, [
          m(
            "use",
            {
              class: "top",
              "xlink:href": "#arrow-btn-tr",
              "transform-origin": "16.1% 15.9%",
            },
            [
              m("path", {
                id: "arrow-btn-tr",
                "transform-origin": "16.1% 15.9%",
                d: "M31.274,7.155 L7.392,31.037 C5.870,32.559 3.402,32.559 1.880,31.037 C0.358,29.515 0.358,27.048 1.880,25.526 L25.762,1.644 C27.284,0.122 29.752,0.122 31.274,1.644 C32.795,3.166 32.795,5.633 31.274,7.155 Z",
              }),
            ]
          ),
          m(
            "use",
            {
              class: "bot",
              "xlink:href": "#arrow-btn-br",
              "transform-origin": "16.1% 55%",
            },
            [
              m("path", {
                id: "arrow-btn-br",
                "transform-origin": "16.1% 55%",
                d: "M1.880,41.954 C3.402,40.432 5.870,40.432 7.392,41.954 L31.274,65.836 C32.795,67.358 32.795,69.825 31.274,71.347 C29.752,72.869 27.284,72.869 25.762,71.347 L1.880,47.465 C0.358,45.943 0.358,43.476 1.880,41.954 Z",
              }),
            ]
          ),
        ]),
      ],
      -1
    )
  ),
  ho = [fo],
  po = ae({
    __name: "LeftArrow",
    props: { btnprev: null },
    setup(i) {
      const e = i,
        t = () => {
          e.btnprev();
        };
      return (n, s) => (
        P(),
        I(
          "div",
          { class: "arrowBtn", "data-cursor": "pointer", onClick: t },
          ho
        )
      );
    },
  });
const fn = Ce(po, [["__scopeId", "data-v-1a707a3b"]]),
  vo = (i) => (Ue("data-v-9c3b3a5b"), (i = i()), Ge(), i),
  mo = vo(() =>
    m(
      "svg",
      {
        viewBox: "0 0 103 103",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "data-cursor": "pointer",
      },
      [
        m("circle", {
          cx: "67",
          cy: "51.5",
          r: "4.5",
          class: "dot",
          "transform-origin": "66% 50%",
          transform: "scale(0)",
        }),
        m("g", { transform: "translate(35,15)" }, [
          m(
            "use",
            {
              class: "top",
              "xlink:href": "#arrow-btn-tl",
              "transform-origin": "16.1% 15.9%",
            },
            [
              m("path", {
                id: "arrow-btn-tl",
                "transform-origin": "16.1% 15.9%",
                d: "M30.833,30.926 C29.311,32.448 26.844,32.448 25.322,30.926 L1.440,7.044 C-0.082,5.523 -0.082,3.055 1.440,1.533 C2.962,0.011 5.429,0.011 6.951,1.533 L30.833,25.415 C32.355,26.937 32.355,29.405 30.833,30.926 Z",
              }),
            ]
          ),
          m(
            "use",
            {
              class: "bot",
              "xlink:href": "#arrow-btn-bl",
              "transform-origin": "16.1% 55%",
            },
            [
              m("path", {
                id: "arrow-btn-bl",
                "transform-origin": "16.1% 55%",
                d: "M1.440,65.725 L25.322,41.843 C26.844,40.321 29.311,40.321 30.833,41.843 C32.355,43.365 32.355,45.832 30.833,47.354 L6.951,71.236 C5.429,72.758 2.962,72.758 1.440,71.236 C-0.082,69.714 -0.082,67.247 1.440,65.725 Z",
              }),
            ]
          ),
        ]),
      ],
      -1
    )
  ),
  go = [mo],
  yo = ae({
    __name: "RightArrow",
    props: { btnnext: null },
    setup(i) {
      const e = i,
        t = () => {
          e.btnnext();
        };
      return (n, s) => (
        P(),
        I(
          "div",
          { class: "arrowBtn", "data-cursor": "pointer", onClick: t },
          go
        )
      );
    },
  });
const hn = Ce(yo, [["__scopeId", "data-v-9c3b3a5b"]]),
  Co = { id: "section-media" },
  bo = ae({
    __name: "Section5_Fifth",
    setup(i) {
      const e = L(),
        t = () => {
          e.value.arrowBtnPrev();
        },
        n = () => {
          e.value.arrowBtnNext();
        };
      return (s, o) => {
        const r = fn,
          a = uo;
        return (
          P(),
          I("section", Co, [
            N(r, { id: "arrow-btn-prev", btnprev: t }),
            N(a, { ref_key: "Swiper", ref: e }, null, 512),
            N(hn, { id: "arrow-btn-next", btnnext: n }),
          ])
        );
      };
    },
  });
const _o = Ce(bo, [["__scopeId", "data-v-66581bc2"]]),
  wo = { class: "canvas-container" },
  Eo = ["width", "height"],
  xo = ae({
    __name: "Lizi",
    props: {
      canvasRect: null,
      logos: null,
      ParticlesBoolean: { type: Boolean },
    },
    setup(i, { expose: e }) {
      const t = i,
        n = L(0);
      let s = t.logos;
      const o = G([]);
      let r = L();
      const a = L(null);
      let l = L(null),
        u = L();
      const c = t.canvasRect.width,
        d = t.canvasRect.height,
        f = 30,
        p = 1 / f,
        h = 40,
        g = 0.95;
      class y {
        constructor(T, B, D, z) {
          Q(this, "x");
          Q(this, "y");
          Q(this, "totalX");
          Q(this, "totalY");
          Q(this, "mx");
          Q(this, "my");
          Q(this, "vx");
          Q(this, "vy");
          Q(this, "time");
          Q(this, "r");
          Q(this, "color");
          Q(this, "opacity");
          (this.x = (Math.random() * c) >> 0),
            (this.y = (Math.random() * d) >> 0),
            (this.totalX = T),
            (this.totalY = B),
            (this.time = D),
            (this.r = 1.2),
            (this.color = [...z]),
            (this.opacity = 0);
        }
        draw() {
          (l.value.fillStyle = `rgba(${this.color.toString()})`),
            l.value.fillRect(this.x, this.y, this.r * 2, this.r * 2),
            l.value.fill();
        }
        update(T, B) {
          if (
            ((this.mx = this.totalX - this.x),
            (this.my = this.totalY - this.y),
            (this.vx = this.mx / this.time),
            (this.vy = this.my / this.time),
            T && B)
          ) {
            let D = T - this.x,
              z = B - this.y,
              V = Math.sqrt(D ** 2 + z ** 2),
              U = h / V;
            U = U > 7 ? 7 : U;
            let S = Math.atan2(z, D),
              A = Math.cos(S),
              M = Math.sin(S),
              O = A * U * -g,
              W = M * U * -g;
            (this.vx += O), (this.vy += W);
          }
          (this.x += this.vx),
            (this.y += this.vy),
            this.opacity < 1 && (this.opacity += p);
        }
        change(T, B, D) {
          (this.totalX = T), (this.totalY = B), (this.color = [...D]);
        }
      }
      class x {
        constructor(T, B) {
          Q(this, "src");
          Q(this, "name");
          Q(this, "particleData");
          (this.src = T), (this.name = B), (this.particleData = []);
          let D = new Image();
          (D.crossOrigin = ""),
            (D.src = T),
            (D.onload = () => {
              const z = document.createElement("canvas"),
                V = z.getContext("2d"),
                U = c,
                S = ~~(c * (D.height / D.width));
              (z.width = U),
                (z.height = S),
                V == null || V.drawImage(D, 0, 0, U, S);
              const A = V == null ? void 0 : V.getImageData(0, 0, U, S).data;
              V == null || V.clearRect(0, 0, c, d);
              for (let M = 0; M < S; M += 5)
                for (let O = 0; O < U; O += 5) {
                  const W = (O + M * U) * 4,
                    Me = A[W],
                    We = A[W + 1],
                    Pe = A[W + 2],
                    ot = A[W + 3];
                  if (Me + We + Pe + ot >= 100) {
                    const At = new y(O, M, f, [Me, We, Pe, ot]);
                    this.particleData.push(At);
                  }
                }
              B === "rhodes" && E(u.value, this);
            });
        }
      }
      class C {
        constructor(T) {
          Q(this, "canvasEle");
          Q(this, "ctx");
          Q(this, "width");
          Q(this, "height");
          Q(this, "ParticleArr");
          Q(this, "mouseX");
          Q(this, "mouseY");
          (this.canvasEle = T),
            (this.ctx = T.getContext("2d")),
            (this.width = T.width),
            (this.height = T.height),
            (this.ParticleArr = []),
            this.canvasEle.addEventListener("mousemove", (B) => {
              const { left: D, top: z } =
                  this.canvasEle.getBoundingClientRect(),
                { clientX: V, clientY: U } = B;
              (this.mouseX = V - D), (this.mouseY = U - z);
            }),
            (this.canvasEle.onmouseleave = () => {
              (this.mouseX = 0), (this.mouseY = 0);
            });
        }
        changeImg(T) {
          if (this.ParticleArr.length) {
            if (!T) return !1;
            let B = T.particleData,
              D = B.length,
              z = this.ParticleArr,
              V = z.length;
            for (let S = 0; S < D; S++) {
              const { totalX: A, totalY: M, color: O } = B[S];
              z[S] ? z[S].change(A, M, O) : (z[S] = new y(A, M, f, O));
            }
            D < V && (this.ParticleArr = z.splice(0, D)),
              (z = this.ParticleArr);
            let U = z.length;
            for (; U; ) {
              let S = ~~(Math.random() * U--),
                A = z[S],
                { totalX: M, totalY: O, color: W } = A;
              (A.totalX = z[U].totalX),
                (A.totalY = z[U].totalY),
                (A.color = z[U].color),
                (z[U].totalX = M),
                (z[U].totalY = O),
                (z[U].color = W);
            }
          } else
            this.ParticleArr = T.particleData.map(
              (B) => new y(B.totalX, B.totalY, f, B.color)
            );
        }
        drawCanvas() {
          this.ctx.clearRect(0, 0, this.width, this.height),
            this.ParticleArr.forEach((T) => {
              T.update(this.mouseX, this.mouseY), T.draw();
            }),
            window.requestAnimationFrame(() => this.drawCanvas());
        }
      }
      let b = L(),
        _ = L();
      function E(k, T) {
        k.changeImg(T),
          (_.value = k),
          t.ParticlesBoolean
            ? (clearInterval(b.value),
              (b.value = setInterval(() => {
                n.value++,
                  k.changeImg(o[n.value]),
                  n.value >= 3 && (n.value = -1);
              }, 5e3)))
            : k.changeImg(o[n.value]),
          (r.value = T);
      }
      for (let k of s) o.push(new x(k.url, k.label));
      const w = (k) => {
          _.value.changeImg(o[k]);
        },
        F = () => {
          (_.value.ParticleArr = []),
            t.ParticlesBoolean && clearInterval(b.value);
        };
      return (
        ke(async () => {
          a.value &&
            ((l.value = a.value.getContext("2d")),
            (u.value = new C(a.value)),
            u.value.drawCanvas());
        }),
        we(
          () => t.logos,
          (k, T) => {
            for (let B of k) o.push(new x(B.url, B.label));
          },
          { deep: !0 }
        ),
        Tt(() => {
          clearInterval(b.value);
        }),
        e({ ChoiceImg: w, clearCanvas: F }),
        (k, T) => (
          P(),
          I("div", wo, [
            m(
              "canvas",
              { ref_key: "canvas", ref: a, width: v(c), height: v(d) },
              null,
              8,
              Eo
            ),
          ])
        )
      );
    },
  });
const ci = Ce(xo, [["__scopeId", "data-v-2fac201b"]]),
  di = (i) => (Ue("data-v-9cfbcc6d"), (i = i()), Ge(), i),
  Fo = { class: "storyDetailView" },
  So = di(() =>
    m(
      "svg",
      {
        class: "svgDefs",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 70 70",
      },
      [
        m("defs", null, [
          m("path", {
            id: "close-br",
            d: "M62.324,70.228 L38.768,46.653 L38.768,39.894 L45.522,39.894 L69.077,63.469 L69.077,70.228 L62.324,70.228 Z",
          }),
          m("path", {
            id: "close-tr",
            d: "M38.768,31.269 L38.768,24.509 L62.324,0.935 L69.077,0.935 L69.077,7.694 L45.522,31.269 L38.768,31.269 Z",
          }),
          m("path", {
            id: "close-bl",
            d: "M0.604,70.228 L0.604,63.469 L24.159,39.894 L30.913,39.894 L30.913,46.653 L7.357,70.228 L0.604,70.228 Z",
          }),
          m("path", {
            id: "close-tl",
            d: "M0.604,7.694 L0.604,0.935 L7.357,0.935 L30.913,24.509 L30.913,31.269 L24.159,31.269 L0.604,7.694 Z",
          }),
        ]),
      ],
      -1
    )
  ),
  To = { class: "storyDetailWapper" },
  Bo = { class: "storyClose" },
  ko = di(() => m("div", { class: "vertical" }, null, -1)),
  Do = di(() => m("div", { class: "horizontal" }, null, -1)),
  Ao = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "-10 -10 90 90",
    "data-cursor": "pointer",
  },
  Mo = { class: "storyInfo" },
  Po = { key: 0, class: "storyInfoNameWapper" },
  Oo = { key: 0, class: "storyInfoName" },
  Lo = { class: "TextContent" },
  zo = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 534 70",
  },
  Io = { class: "storyDetailInfoNameText", x: "0", y: "60", "font-size": "68" },
  Ro = { key: 0, class: "storyInfoNameEN" },
  $o = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 495 30",
  },
  No = { x: "0", y: "27", "font-size": "30", class: "storyEnText" },
  Ho = { class: "storyInfoDesc" },
  Vo = { key: 0, class: "wrapperDown" },
  jo = { key: 0, class: "storyDetaInfoDesc" },
  qo = ae({
    __name: "Section4_View",
    props: {
      ListAppear: { type: Boolean },
      ImgMove: null,
      Top: null,
      Rights: null,
      LiziChild: null,
    },
    emits: ["update:ListAppear", "update:ImgMove"],
    setup(i, { emit: e }) {
      const t = i;
      ht((T) => ({
        "0be118da": v(g),
        "79701f5b": v(y),
        "6b337d81": v(h),
        "45d98ab9": v(C),
      }));
      function n(T) {
        return new Promise((B) => setTimeout(B, T));
      }
      const s = G([
          {
            id: 0,
            name: "GZHU-SITE-193",
            en: "RASIA.",
            desc: "广州大学193号站点，成立于2024-11-08，目前急缺人手加入我们的项目",
          },
          {
            id: 1,
            name: "ABOUT.",
            en: "Outpost 193.",
            desc: "是的，每一个项目都要有一个自己的站点，于是便有了SITE-193. 我们需要一个站点宣传我们的成果，来扩展我们的规模，来展示我们的能力，来承载我们的宏图。",
          },
          {
            id: 2,
            name: "站点组织",
            en: "RHODES ISLAND",
            desc: "目前没人，要当管理什么的点击即送",
          },
          {
            id: 3,
            name: "项目方向.",
            en: "PROJECT.",
            desc: " 当下的方向是什么？我们可以做一个广州大学的blogroll，可以写一个站点用来提供AIGC服务的API聚合站，可以做一个校园墙和校园论坛，可以做一键式部署博客服务，用高度个性化的自定义功能来打败传统SNS平台，但是任何设想离不开实际的支持：我们正在进行技术可行性验证。",
          },
          {
            id: 4,
            name: "站长",
            en: "ERAOC.",
            desc: "南漂中，广州大学大二就读数科专业，被各种事情坑死后选择大战全栈，本网页页面主要贡献者。",
          },
          {
            id: 5,
            name: "加入项目！",
            en: "NOMADIC CITY",
            desc: "站点成立之初急需各位的支持！联系站长QQ 2760913192和加入我们的GitHub组织：https://github.com/Guangzhou-University-SITE-193",
          },
        ]),
        o = G([!0, !0]),
        r = L();
      let a = +localStorage.getItem("ParticleId"),
        l = L(!0);
      const u = async () => {
          l.value &&
            ((l.value = !1),
            (r.value = "StaffRight"),
            (o[0] = !1),
            await n(100),
            (o[1] = !1),
            a == 0 ? (a = s.length - 1) : a--,
            t.LiziChild.ChoiceImg(a),
            await n(1e3),
            (o[0] = !0),
            await n(100),
            (o[1] = !0),
            (l.value = !0));
        },
        c = async () => {
          l.value &&
            ((l.value = !1),
            (r.value = "StaffBottom"),
            (o[0] = !1),
            await n(100),
            (o[1] = !1),
            a == s.length - 1 ? (a = 0) : a++,
            t.LiziChild.ChoiceImg(a),
            await n(1e3),
            (o[0] = !0),
            await n(100),
            (o[1] = !0),
            (l.value = !0));
        };
      let d = G([!1, !1, !1, !1]);
      const f = async () => {
          (d[3] = !0),
            await n(100),
            (d[2] = !0),
            await n(100),
            (d[1] = !0),
            await n(100),
            (d[0] = !0);
        },
        p = async () => {
          (d[3] = !1),
            await n(100),
            (d[2] = !1),
            await n(100),
            (d[1] = !1),
            await n(100),
            (d[0] = !1);
        };
      let h = L("KF_horizotal_show"),
        g = L("KF_vertical_show_2"),
        y = L("0.6s"),
        x = L(!1),
        C = L("storyInfoDis"),
        b = L(!1),
        _ = L(!1),
        E = L(!1),
        w = L(!1),
        F = L(!1);
      const k = async () => {
        localStorage.setItem("ListAppear", "true"),
          F.value &&
            ((x.value = !1),
            (b.value = !1),
            (_.value = !1),
            (E.value = !1),
            (h.value = "KF_horizotal_hide"),
            (g.value = "KF_vertical_hide"),
            (y.value = "0s"),
            await n(500),
            (C.value = "storyInfoHide"),
            (w.value = !1),
            await n(500),
            e("update:ListAppear", !0),
            await n(100),
            t.Top(),
            t.LiziChild.ChoiceImg(0));
      };
      return (
        ke(async () => {
          e("update:ImgMove", "60%"),
            (h.value = "KF_horizotal_show"),
            (g.value = "KF_vertical_show_2"),
            await n(800),
            (x.value = !0),
            (y.value = "0.6s"),
            (C.value = "storyInfoDis"),
            (w.value = !0),
            await n(100),
            (b.value = !0),
            (_.value = !0),
            await n(400),
            (E.value = !0),
            await n(500),
            (F.value = !0);
        }),
        (T, B) => {
          const D = fn,
            z = hn;
          return (
            P(),
            I("div", Fo, [
              So,
              N(
                te,
                { name: "Arrow" },
                {
                  default: q(() => [
                    v(w)
                      ? (P(), Re(D, { key: 0, class: "leftBtn", btnprev: u }))
                      : X("", !0),
                  ]),
                  _: 1,
                }
              ),
              m("div", To, [
                m("div", Bo, [
                  ko,
                  Do,
                  N(
                    te,
                    { name: "CloseBtn" },
                    {
                      default: q(() => [
                        v(x)
                          ? (P(),
                            I(
                              "div",
                              {
                                key: 0,
                                class: "storyCloseBtn",
                                onMousemove: f,
                                onMouseleave: p,
                                onClick: k,
                              },
                              [
                                (P(),
                                I("svg", Ao, [
                                  m(
                                    "use",
                                    {
                                      class: le(v(d)[0] ? "usehover" : ""),
                                      "xlink:href": "#close-br",
                                      "data-cursor": "pointer",
                                    },
                                    null,
                                    2
                                  ),
                                  m(
                                    "use",
                                    {
                                      class: le(v(d)[1] ? "usehover" : ""),
                                      "xlink:href": "#close-tr",
                                      "data-cursor": "pointer",
                                    },
                                    null,
                                    2
                                  ),
                                  m(
                                    "use",
                                    {
                                      class: le(v(d)[2] ? "usehover" : ""),
                                      "xlink:href": "#close-bl",
                                      "data-cursor": "pointer",
                                    },
                                    null,
                                    2
                                  ),
                                  m(
                                    "use",
                                    {
                                      class: le(v(d)[3] ? "usehover" : ""),
                                      "xlink:href": "#close-tl",
                                      "data-cursor": "pointer",
                                    },
                                    null,
                                    2
                                  ),
                                ])),
                              ],
                              32
                            ))
                          : X("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                N(
                  te,
                  { name: v(C) },
                  {
                    default: q(() => [
                      m("div", Mo, [
                        N(
                          te,
                          { name: v(r) },
                          {
                            default: q(() => [
                              v(o)[0]
                                ? (P(),
                                  I("div", Po, [
                                    N(
                                      te,
                                      { name: "InfoName" },
                                      {
                                        default: q(() => [
                                          v(b)
                                            ? (P(),
                                              I("div", Oo, [
                                                m("div", Lo, [
                                                  (P(),
                                                  I("svg", zo, [
                                                    m(
                                                      "text",
                                                      Io,
                                                      Y(v(s)[v(a)].name),
                                                      1
                                                    ),
                                                  ])),
                                                ]),
                                              ]))
                                            : X("", !0),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    N(
                                      te,
                                      { name: "InfoNameEN" },
                                      {
                                        default: q(() => [
                                          v(_)
                                            ? (P(),
                                              I("div", Ro, [
                                                (P(),
                                                I("svg", $o, [
                                                  m(
                                                    "text",
                                                    No,
                                                    Y(v(s)[0].en),
                                                    1
                                                  ),
                                                ])),
                                              ]))
                                            : X("", !0),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]))
                                : X("", !0),
                            ]),
                            _: 1,
                          },
                          8,
                          ["name"]
                        ),
                        m("div", Ho, [
                          N(
                            te,
                            { name: v(r) },
                            {
                              default: q(() => [
                                v(o)[1]
                                  ? (P(),
                                    I("div", Vo, [
                                      N(
                                        te,
                                        { name: "DescHide" },
                                        {
                                          default: q(() => [
                                            v(E)
                                              ? (P(),
                                                I(
                                                  "div",
                                                  jo,
                                                  Y(v(s)[v(a)].desc),
                                                  1
                                                ))
                                              : X("", !0),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]))
                                  : X("", !0),
                              ]),
                              _: 1,
                            },
                            8,
                            ["name"]
                          ),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["name"]
                ),
              ]),
              N(
                te,
                { name: "Arrow" },
                {
                  default: q(() => [
                    v(w)
                      ? (P(), Re(z, { key: 0, class: "rightBtn", btnnext: c }))
                      : X("", !0),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
      );
    },
  });
const Uo = Ce(qo, [["__scopeId", "data-v-9cfbcc6d"]]),
  Go = "" + new URL("https://pic3.zhimg.com/80/v2-4947430e910af6440d6edbdd19874752_720w.webp", import.meta.url).href,
  Wo = "" + new URL("https://pic1.zhimg.com/80/v2-1b953078f2e7ca3994328fb7a4fd9670_720w.webp", import.meta.url).href,
  Xo = "" + new URL("https://pic3.zhimg.com/v2-ed844c59edf65184004363ea6766c7de_r.jpg", import.meta.url).href,
  Yo = "" + new URL("https://free-img.400040.xyz/4/2024/08/07/66b370a7dd23a.png", import.meta.url).href,
  Zo = "" + new URL("https://free-img.400040.xyz/4/2024/08/07/66b370b2d1a39.png", import.meta.url).href,
  Ko = "" + new URL("https://pic3.zhimg.com/v2-ed844c59edf65184004363ea6766c7de_r.jpg", import.meta.url).href,
  Jo = "" + new URL("https://pic4.zhimg.com/80/v2-d9884f32711e19e80979eac58e943897_720w.webp", import.meta.url).href,
  Qo = "" + new URL("https://pic3.zhimg.com/80/v2-d25c4f0b472b19779783fcb6312b6ebe_720w.webp", import.meta.url).href,
  er = "" + new URL("https://pic4.zhimg.com/80/v2-18a40e601d3ebb1e852e812ed663bf6f_720w.webp", import.meta.url).href,
  tr = "" + new URL("https://pic2.zhimg.com/80/v2-ebd7145b6cfd3291169b1c834e6f89cd_720w.webp", import.meta.url).href,
  tt = (i, e, t) => (
    (e.length = 0),
    t
      ? []
      : (i.forEach((n) => {
          let s = new URL(
            Object.assign({
              "../assets/img/Two/lizi/logo_rhine.png": Jo,
              "../assets/img/Two/lizi/logo_rhodes.png": Qo,
              "../assets/img/Two/lizi/logo_yan.png": er,
            })[`../assets/img/Two/lizi/logo_${n.label}.png`],
            self.location
          ).href;
          n.label == "penguin"
            ? (n.url = new URL(
                Object.assign({
                  "../assets/img/Two/lizi/logo_penguin.webp": tr,
                })[`../assets/img/Two/lizi/logo_${n.label}.webp`],
                self.location
              ).href)
            : (n.url = s);
        }),
        i)
  ),
  kt = ys("Off", {
    state: () => ({
      TwoParticlesLogo: !0,
      ThreeParticlesLogo: !0,
      FourParticlesLogo: !0,
      ParticlesOff: 0,
    }),
    getters: {},
    actions: {},
  }),
  ir = { key: 0, class: "storyListWapper" },
  nr = { class: "storyList" },
  sr = ["onMousemove", "onClick"],
  or = { class: "storyItemName" },
  rr = { class: "storyItemEn" },
  ar = {
    class: "storyItemNameBack",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 800 125",
    "data-cursor": "pointer",
  },
  lr = { x: "800", y: "95", "text-anchor": "end", "data-cursor": "pointer" },
  ur = ["src"],
  cr = { class: "particle" },
  dr = ae({
    __name: "Section4_Four",
    setup(i) {
      ht((C) => ({ "7fe18b17": v(o) }));
      const e = kt(),
        t = G({ width: 500, height: 500 });
      let n = G([
          { label: "rhodes", url: "" },
          { label: "rhine", url: "" },
          { label: "yan", url: "" },
          { label: "penguin", url: "" },
          { label: "rhine", url: "" },
          { label: "yan", url: "" },
        ]),
        s = G([]);
      s.push(...tt(n, s, e.FourParticlesLogo)),
        we(
          () => e.FourParticlesLogo,
          (C, b) => {
            s.push(...tt(n, s, C)),
              e.FourParticlesLogo && r.value.clearCanvas();
          }
        );
      const o = L("10%"),
        r = L(),
        a = G([
          {
            id: 0,
            name: "广州大学-193号站点",
            en: "SITE-0193.",
            imgURL: "",
            hover: !1,
          },
          {
            id: 1,
            name: "关于本站",
            en: "ABOUT.",
            imgURL: "",
            hover: !1,
          },
          {
            id: 2,
            name: "站点组织",
            en: "SDA.",
            imgURL: "",
            hover: !1,
          },
          {
            id: 3,
            name: "项目计划",
            en: "Echo-193.",
            imgURL: "",
            hover: !1,
          },
          {
            id: 4,
            name: "关于站长",
            en: "RESA.",
            imgURL: "",
            hover: !1,
          },
          {
            id: 5,
            name: "加入我们",
            en: "JOIN.",
            imgURL: "",
            hover: !1,
          },
        ]);
      for (let C = 0; C < a.length; C++) {
        let b = new URL(
          Object.assign({
            "../../assets/img/Four/list_1.png": Go,
            "../../assets/img/Four/list_2.png": Wo,
            "../../assets/img/Four/list_3.png": Xo,
            "../../assets/img/Four/list_4.png": Yo,
            "../../assets/img/Four/list_5.png": Zo,
            "../../assets/img/Four/list_6.png": Ko,
          })[`../../assets/img/Four/list_${C + 1}.png`],
          self.location
        ).href;
        a[C].imgURL = b;
      }
      const l = L([]);
      let u = 50;
      const c = (C, b, _) => {
          _.forEach((F) => {
            F.hover = !1;
          }),
            (_[b].hover = !0);
          let E = C.clientX,
            w = C.clientY;
          switch (b) {
            case 0:
              u = 50;
              break;
            case 1:
              u = 61;
              break;
            case 2:
              u = 72;
              break;
            case 3:
              u = 83;
              break;
            case 4:
              u = 94;
              break;
            case 5:
              u = 105;
              break;
          }
          window.requestAnimationFrame(() => {
            (l.value[b].style.left = E + "px"),
              (l.value[b].style.top = w + "px"),
              (l.value[b].style.transform = `translate(-50%,-${u}%)`);
          });
        },
        d = (C) => {
          C.forEach((b) => {
            b.hover = !1;
          });
        },
        f = G({
          ListAppear: !0,
          ListHide: [!1, !1, !1, !1, !1, !1],
          num: 0,
          throttle: !0,
          Rights: 0,
        }),
        p = async (C) => {
          f.throttle &&
            (y(!1),
            localStorage.setItem("ListAppear", "false"),
            localStorage.setItem("ParticleId", C.toString())),
            r.value.ChoiceImg(C);
        },
        h = L([]),
        g = () => {
          let C = L(0);
          h.value.forEach((b) => {
            (b.style.top = C.value + "rem"), (C.value += 7.7857);
          }),
            y(!0),
            (o.value = "10%");
        },
        y = (C) => {
          let b = setInterval(() => {
            (f.ListHide[f.num] = C),
              f.num++,
              f.num > a.length - 1 &&
                (clearInterval(b),
                (f.num = 0),
                setTimeout(() => {
                  (f.ListAppear = C), (f.throttle = !0);
                }, 500));
          }, 100);
        },
        x = () => {
          localStorage.getItem("ListAppear") == null &&
            localStorage.setItem("ListAppear", "true"),
            (f.ListAppear = localStorage.getItem("ListAppear") == "true"),
            f.ListAppear && g();
        };
      return (
        ke(() => {
          x();
        }),
        (C, b) => {
          const _ = Uo,
            E = ci;
          return (
            P(),
            I(
              de,
              null,
              [
                v(f).ListAppear
                  ? (P(),
                    I("div", ir, [
                      m("ol", nr, [
                        N(
                          et,
                          { name: "storyitem", appear: "" },
                          {
                            default: q(() => [
                              (P(!0),
                              I(
                                de,
                                null,
                                Ee(v(a), (w) =>
                                  ce(
                                    (P(),
                                    I(
                                      "li",
                                      {
                                        key: w.id,
                                        class: "storyItem",
                                        ref_for: !0,
                                        ref_key: "StoryLi",
                                        ref: h,
                                        onMousemove: (F) => c(F, w.id, v(a)),
                                        onMouseout:
                                          b[0] || (b[0] = (F) => d(v(a))),
                                        onClick: (F) => p(w.id),
                                      },
                                      [
                                        m("span", or, Y(w.name), 1),
                                        m("span", rr, Y(w.en), 1),
                                        (P(),
                                        I("svg", ar, [
                                          m("text", lr, Y(w.en), 1),
                                        ])),
                                        m(
                                          "div",
                                          {
                                            ref_for: !0,
                                            ref_key: "ImgDiv",
                                            ref: l,
                                            class: "imgdiv",
                                          },
                                          [
                                            w.hover
                                              ? (P(),
                                                I(
                                                  "img",
                                                  { key: 0, src: w.imgURL },
                                                  null,
                                                  8,
                                                  ur
                                                ))
                                              : X("", !0),
                                          ],
                                          512
                                        ),
                                      ],
                                      40,
                                      sr
                                    )),
                                    [[he, v(f).ListHide[w.id]]]
                                  )
                                ),
                                128
                              )),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]))
                  : (P(),
                    Re(
                      _,
                      {
                        key: 1,
                        ListAppear: v(f).ListAppear,
                        "onUpdate:ListAppear":
                          b[1] || (b[1] = (w) => (v(f).ListAppear = w)),
                        ImgMove: v(o),
                        "onUpdate:ImgMove":
                          b[2] ||
                          (b[2] = (w) => (Cs(o) ? (o.value = w) : null)),
                        Top: g,
                        Rights: v(f).Rights,
                        LiziChild: v(r),
                      },
                      null,
                      8,
                      ["ListAppear", "ImgMove", "Rights", "LiziChild"]
                    )),
                m("div", cr, [
                  N(
                    E,
                    {
                      canvasRect: v(t),
                      logos: v(s),
                      ref_key: "LiziChild",
                      ref: r,
                    },
                    null,
                    8,
                    ["canvasRect", "logos"]
                  ),
                ]),
              ],
              64
            )
          );
        }
      );
    },
  });
const fr = Ce(dr, [["__scopeId", "data-v-4df7816c"]]),
  hr = "" + new URL("https://pic3.zhimg.com/80/v2-4ce2714c21f1e8974c07e0eb5c98b88a_720w.webp", import.meta.url).href,
  pr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: hr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vr = "" + new URL("https://pic3.zhimg.com/80/v2-0517c3306fa3e634a1a4e3df1dbd2972_720w.webp", import.meta.url).href,
  mr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  gr = "" + new URL("https://pic4.zhimg.com/80/v2-f52bc0d9931b0680e0bd0f76570b032b_720w.webp", import.meta.url).href,
  yr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: gr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Cr = "" + new URL("https://pic2.zhimg.com/80/v2-32d9982c71765eb61a696d7c0c8bef55_720w.webp", import.meta.url).href,
  br = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Cr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _r = "" + new URL("https://pic2.zhimg.com/80/v2-c5f7f03b9a3ee839639923383ebd5a59_720w.webp", import.meta.url).href,
  wr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _r },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Er = "" + new URL("https://pic4.zhimg.com/80/v2-e568f8e45850a81a73955ae5c8b7d9e3_720w.webp", import.meta.url).href,
  xr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Er },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Fr = "" + new URL("https://pic2.zhimg.com/80/v2-29776cb05e3de56622fbb48529abc2a1_720w.webp", import.meta.url).href,
  Sr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Fr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Tr = "" + new URL("https://pic2.zhimg.com/80/v2-e1840e58c4dc017f27948e72d64d10dd_720w.webp", import.meta.url).href,
  Br = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Tr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  kr = "" + new URL("https://pic2.zhimg.com/80/v2-8394d938cb8961f950241117bcca470d_720w.webp", import.meta.url).href,
  Dr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: kr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ar = "" + new URL("https://pic4.zhimg.com/80/v2-ab0faf345980f569604c17ec68b68f47_720w.webp", import.meta.url).href,
  Mr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ar },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pr = "" + new URL("https://pic1.zhimg.com/80/v2-19657ca9d0d9c48a56b1a7b89ef1802c_720w.webp", import.meta.url).href,
  Or = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Pr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Lr = "" + new URL("https://pic3.zhimg.com/80/v2-0517c3306fa3e634a1a4e3df1dbd2972_720w.webp", import.meta.url).href,
  zr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Lr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ir = "" + new URL("https://pic3.zhimg.com/80/v2-0517c3306fa3e634a1a4e3df1dbd2972_720w.webp", import.meta.url).href,
  Rr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ir },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ge = (i) => new Promise((e) => setTimeout(e, i));
function Si(i) {
  return (
    i !== null &&
    typeof i == "object" &&
    "constructor" in i &&
    i.constructor === Object
  );
}
function fi(i = {}, e = {}) {
  Object.keys(e).forEach((t) => {
    typeof i[t] > "u"
      ? (i[t] = e[t])
      : Si(e[t]) && Si(i[t]) && Object.keys(e[t]).length > 0 && fi(i[t], e[t]);
  });
}
const pn = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function be() {
  const i = typeof document < "u" ? document : {};
  return fi(i, pn), i;
}
const $r = {
  document: pn,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(i) {
    return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0);
  },
  cancelAnimationFrame(i) {
    typeof setTimeout > "u" || clearTimeout(i);
  },
};
function re() {
  const i = typeof window < "u" ? window : {};
  return fi(i, $r), i;
}
function Nr(i) {
  const e = i.__proto__;
  Object.defineProperty(i, "__proto__", {
    get() {
      return e;
    },
    set(t) {
      e.__proto__ = t;
    },
  });
}
class Ve extends Array {
  constructor(e) {
    typeof e == "number" ? super(e) : (super(...(e || [])), Nr(this));
  }
}
function pt(i = []) {
  const e = [];
  return (
    i.forEach((t) => {
      Array.isArray(t) ? e.push(...pt(t)) : e.push(t);
    }),
    e
  );
}
function vn(i, e) {
  return Array.prototype.filter.call(i, e);
}
function Hr(i) {
  const e = [];
  for (let t = 0; t < i.length; t += 1) e.indexOf(i[t]) === -1 && e.push(i[t]);
  return e;
}
function Vr(i, e) {
  if (typeof i != "string") return [i];
  const t = [],
    n = e.querySelectorAll(i);
  for (let s = 0; s < n.length; s += 1) t.push(n[s]);
  return t;
}
function $(i, e) {
  const t = re(),
    n = be();
  let s = [];
  if (!e && i instanceof Ve) return i;
  if (!i) return new Ve(s);
  if (typeof i == "string") {
    const o = i.trim();
    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
      let r = "div";
      o.indexOf("<li") === 0 && (r = "ul"),
        o.indexOf("<tr") === 0 && (r = "tbody"),
        (o.indexOf("<td") === 0 || o.indexOf("<th") === 0) && (r = "tr"),
        o.indexOf("<tbody") === 0 && (r = "table"),
        o.indexOf("<option") === 0 && (r = "select");
      const a = n.createElement(r);
      a.innerHTML = o;
      for (let l = 0; l < a.childNodes.length; l += 1) s.push(a.childNodes[l]);
    } else s = Vr(i.trim(), e || n);
  } else if (i.nodeType || i === t || i === n) s.push(i);
  else if (Array.isArray(i)) {
    if (i instanceof Ve) return i;
    s = i;
  }
  return new Ve(Hr(s));
}
$.fn = Ve.prototype;
function jr(...i) {
  const e = pt(i.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.add(...e);
    }),
    this
  );
}
function qr(...i) {
  const e = pt(i.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.remove(...e);
    }),
    this
  );
}
function Ur(...i) {
  const e = pt(i.map((t) => t.split(" ")));
  this.forEach((t) => {
    e.forEach((n) => {
      t.classList.toggle(n);
    });
  });
}
function Gr(...i) {
  const e = pt(i.map((t) => t.split(" ")));
  return (
    vn(this, (t) => e.filter((n) => t.classList.contains(n)).length > 0)
      .length > 0
  );
}
function Wr(i, e) {
  if (arguments.length === 1 && typeof i == "string")
    return this[0] ? this[0].getAttribute(i) : void 0;
  for (let t = 0; t < this.length; t += 1)
    if (arguments.length === 2) this[t].setAttribute(i, e);
    else for (const n in i) (this[t][n] = i[n]), this[t].setAttribute(n, i[n]);
  return this;
}
function Xr(i) {
  for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(i);
  return this;
}
function Yr(i) {
  for (let e = 0; e < this.length; e += 1) this[e].style.transform = i;
  return this;
}
function Zr(i) {
  for (let e = 0; e < this.length; e += 1)
    this[e].style.transitionDuration = typeof i != "string" ? `${i}ms` : i;
  return this;
}
function Kr(...i) {
  let [e, t, n, s] = i;
  typeof i[1] == "function" && (([e, n, s] = i), (t = void 0)), s || (s = !1);
  function o(u) {
    const c = u.target;
    if (!c) return;
    const d = u.target.dom7EventData || [];
    if ((d.indexOf(u) < 0 && d.unshift(u), $(c).is(t))) n.apply(c, d);
    else {
      const f = $(c).parents();
      for (let p = 0; p < f.length; p += 1) $(f[p]).is(t) && n.apply(f[p], d);
    }
  }
  function r(u) {
    const c = u && u.target ? u.target.dom7EventData || [] : [];
    c.indexOf(u) < 0 && c.unshift(u), n.apply(this, c);
  }
  const a = e.split(" ");
  let l;
  for (let u = 0; u < this.length; u += 1) {
    const c = this[u];
    if (t)
      for (l = 0; l < a.length; l += 1) {
        const d = a[l];
        c.dom7LiveListeners || (c.dom7LiveListeners = {}),
          c.dom7LiveListeners[d] || (c.dom7LiveListeners[d] = []),
          c.dom7LiveListeners[d].push({ listener: n, proxyListener: o }),
          c.addEventListener(d, o, s);
      }
    else
      for (l = 0; l < a.length; l += 1) {
        const d = a[l];
        c.dom7Listeners || (c.dom7Listeners = {}),
          c.dom7Listeners[d] || (c.dom7Listeners[d] = []),
          c.dom7Listeners[d].push({ listener: n, proxyListener: r }),
          c.addEventListener(d, r, s);
      }
  }
  return this;
}
function Jr(...i) {
  let [e, t, n, s] = i;
  typeof i[1] == "function" && (([e, n, s] = i), (t = void 0)), s || (s = !1);
  const o = e.split(" ");
  for (let r = 0; r < o.length; r += 1) {
    const a = o[r];
    for (let l = 0; l < this.length; l += 1) {
      const u = this[l];
      let c;
      if (
        (!t && u.dom7Listeners
          ? (c = u.dom7Listeners[a])
          : t && u.dom7LiveListeners && (c = u.dom7LiveListeners[a]),
        c && c.length)
      )
        for (let d = c.length - 1; d >= 0; d -= 1) {
          const f = c[d];
          (n && f.listener === n) ||
          (n &&
            f.listener &&
            f.listener.dom7proxy &&
            f.listener.dom7proxy === n)
            ? (u.removeEventListener(a, f.proxyListener, s), c.splice(d, 1))
            : n ||
              (u.removeEventListener(a, f.proxyListener, s), c.splice(d, 1));
        }
    }
  }
  return this;
}
function Qr(...i) {
  const e = re(),
    t = i[0].split(" "),
    n = i[1];
  for (let s = 0; s < t.length; s += 1) {
    const o = t[s];
    for (let r = 0; r < this.length; r += 1) {
      const a = this[r];
      if (e.CustomEvent) {
        const l = new e.CustomEvent(o, {
          detail: n,
          bubbles: !0,
          cancelable: !0,
        });
        (a.dom7EventData = i.filter((u, c) => c > 0)),
          a.dispatchEvent(l),
          (a.dom7EventData = []),
          delete a.dom7EventData;
      }
    }
  }
  return this;
}
function ea(i) {
  const e = this;
  function t(n) {
    n.target === this && (i.call(this, n), e.off("transitionend", t));
  }
  return i && e.on("transitionend", t), this;
}
function ta(i) {
  if (this.length > 0) {
    if (i) {
      const e = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(e.getPropertyValue("margin-right")) +
        parseFloat(e.getPropertyValue("margin-left"))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function ia(i) {
  if (this.length > 0) {
    if (i) {
      const e = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(e.getPropertyValue("margin-top")) +
        parseFloat(e.getPropertyValue("margin-bottom"))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function na() {
  if (this.length > 0) {
    const i = re(),
      e = be(),
      t = this[0],
      n = t.getBoundingClientRect(),
      s = e.body,
      o = t.clientTop || s.clientTop || 0,
      r = t.clientLeft || s.clientLeft || 0,
      a = t === i ? i.scrollY : t.scrollTop,
      l = t === i ? i.scrollX : t.scrollLeft;
    return { top: n.top + a - o, left: n.left + l - r };
  }
  return null;
}
function sa() {
  const i = re();
  return this[0] ? i.getComputedStyle(this[0], null) : {};
}
function oa(i, e) {
  const t = re();
  let n;
  if (arguments.length === 1)
    if (typeof i == "string") {
      if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(i);
    } else {
      for (n = 0; n < this.length; n += 1)
        for (const s in i) this[n].style[s] = i[s];
      return this;
    }
  if (arguments.length === 2 && typeof i == "string") {
    for (n = 0; n < this.length; n += 1) this[n].style[i] = e;
    return this;
  }
  return this;
}
function ra(i) {
  return i
    ? (this.forEach((e, t) => {
        i.apply(e, [e, t]);
      }),
      this)
    : this;
}
function aa(i) {
  const e = vn(this, i);
  return $(e);
}
function la(i) {
  if (typeof i > "u") return this[0] ? this[0].innerHTML : null;
  for (let e = 0; e < this.length; e += 1) this[e].innerHTML = i;
  return this;
}
function ua(i) {
  if (typeof i > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let e = 0; e < this.length; e += 1) this[e].textContent = i;
  return this;
}
function ca(i) {
  const e = re(),
    t = be(),
    n = this[0];
  let s, o;
  if (!n || typeof i > "u") return !1;
  if (typeof i == "string") {
    if (n.matches) return n.matches(i);
    if (n.webkitMatchesSelector) return n.webkitMatchesSelector(i);
    if (n.msMatchesSelector) return n.msMatchesSelector(i);
    for (s = $(i), o = 0; o < s.length; o += 1) if (s[o] === n) return !0;
    return !1;
  }
  if (i === t) return n === t;
  if (i === e) return n === e;
  if (i.nodeType || i instanceof Ve) {
    for (s = i.nodeType ? [i] : i, o = 0; o < s.length; o += 1)
      if (s[o] === n) return !0;
    return !1;
  }
  return !1;
}
function da() {
  let i = this[0],
    e;
  if (i) {
    for (e = 0; (i = i.previousSibling) !== null; )
      i.nodeType === 1 && (e += 1);
    return e;
  }
}
function fa(i) {
  if (typeof i > "u") return this;
  const e = this.length;
  if (i > e - 1) return $([]);
  if (i < 0) {
    const t = e + i;
    return t < 0 ? $([]) : $([this[t]]);
  }
  return $([this[i]]);
}
function ha(...i) {
  let e;
  const t = be();
  for (let n = 0; n < i.length; n += 1) {
    e = i[n];
    for (let s = 0; s < this.length; s += 1)
      if (typeof e == "string") {
        const o = t.createElement("div");
        for (o.innerHTML = e; o.firstChild; ) this[s].appendChild(o.firstChild);
      } else if (e instanceof Ve)
        for (let o = 0; o < e.length; o += 1) this[s].appendChild(e[o]);
      else this[s].appendChild(e);
  }
  return this;
}
function pa(i) {
  const e = be();
  let t, n;
  for (t = 0; t < this.length; t += 1)
    if (typeof i == "string") {
      const s = e.createElement("div");
      for (s.innerHTML = i, n = s.childNodes.length - 1; n >= 0; n -= 1)
        this[t].insertBefore(s.childNodes[n], this[t].childNodes[0]);
    } else if (i instanceof Ve)
      for (n = 0; n < i.length; n += 1)
        this[t].insertBefore(i[n], this[t].childNodes[0]);
    else this[t].insertBefore(i, this[t].childNodes[0]);
  return this;
}
function va(i) {
  return this.length > 0
    ? i
      ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(i)
        ? $([this[0].nextElementSibling])
        : $([])
      : this[0].nextElementSibling
      ? $([this[0].nextElementSibling])
      : $([])
    : $([]);
}
function ma(i) {
  const e = [];
  let t = this[0];
  if (!t) return $([]);
  for (; t.nextElementSibling; ) {
    const n = t.nextElementSibling;
    i ? $(n).is(i) && e.push(n) : e.push(n), (t = n);
  }
  return $(e);
}
function ga(i) {
  if (this.length > 0) {
    const e = this[0];
    return i
      ? e.previousElementSibling && $(e.previousElementSibling).is(i)
        ? $([e.previousElementSibling])
        : $([])
      : e.previousElementSibling
      ? $([e.previousElementSibling])
      : $([]);
  }
  return $([]);
}
function ya(i) {
  const e = [];
  let t = this[0];
  if (!t) return $([]);
  for (; t.previousElementSibling; ) {
    const n = t.previousElementSibling;
    i ? $(n).is(i) && e.push(n) : e.push(n), (t = n);
  }
  return $(e);
}
function Ca(i) {
  const e = [];
  for (let t = 0; t < this.length; t += 1)
    this[t].parentNode !== null &&
      (i
        ? $(this[t].parentNode).is(i) && e.push(this[t].parentNode)
        : e.push(this[t].parentNode));
  return $(e);
}
function ba(i) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    let n = this[t].parentNode;
    for (; n; ) i ? $(n).is(i) && e.push(n) : e.push(n), (n = n.parentNode);
  }
  return $(e);
}
function _a(i) {
  let e = this;
  return typeof i > "u" ? $([]) : (e.is(i) || (e = e.parents(i).eq(0)), e);
}
function wa(i) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const n = this[t].querySelectorAll(i);
    for (let s = 0; s < n.length; s += 1) e.push(n[s]);
  }
  return $(e);
}
function Ea(i) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const n = this[t].children;
    for (let s = 0; s < n.length; s += 1) (!i || $(n[s]).is(i)) && e.push(n[s]);
  }
  return $(e);
}
function xa() {
  for (let i = 0; i < this.length; i += 1)
    this[i].parentNode && this[i].parentNode.removeChild(this[i]);
  return this;
}
const Ti = {
  addClass: jr,
  removeClass: qr,
  hasClass: Gr,
  toggleClass: Ur,
  attr: Wr,
  removeAttr: Xr,
  transform: Yr,
  transition: Zr,
  on: Kr,
  off: Jr,
  trigger: Qr,
  transitionEnd: ea,
  outerWidth: ta,
  outerHeight: ia,
  styles: sa,
  offset: na,
  css: oa,
  each: ra,
  html: la,
  text: ua,
  is: ca,
  index: da,
  eq: fa,
  append: ha,
  prepend: pa,
  next: va,
  nextAll: ma,
  prev: ga,
  prevAll: ya,
  parent: Ca,
  parents: ba,
  closest: _a,
  find: wa,
  children: Ea,
  filter: aa,
  remove: xa,
};
Object.keys(Ti).forEach((i) => {
  Object.defineProperty($.fn, i, { value: Ti[i], writable: !0 });
});
function Fa(i) {
  const e = i;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {}
    try {
      delete e[t];
    } catch {}
  });
}
function dt(i, e = 0) {
  return setTimeout(i, e);
}
function Oe() {
  return Date.now();
}
function Sa(i) {
  const e = re();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(i, null)),
    !t && i.currentStyle && (t = i.currentStyle),
    t || (t = i.style),
    t
  );
}
function Ta(i, e = "x") {
  const t = re();
  let n, s, o;
  const r = Sa(i);
  return (
    t.WebKitCSSMatrix
      ? ((s = r.transform || r.webkitTransform),
        s.split(",").length > 6 &&
          (s = s
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (o = new t.WebKitCSSMatrix(s === "none" ? "" : s)))
      : ((o =
          r.MozTransform ||
          r.OTransform ||
          r.MsTransform ||
          r.msTransform ||
          r.transform ||
          r
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (n = o.toString().split(","))),
    e === "x" &&
      (t.WebKitCSSMatrix
        ? (s = o.m41)
        : n.length === 16
        ? (s = parseFloat(n[12]))
        : (s = parseFloat(n[4]))),
    e === "y" &&
      (t.WebKitCSSMatrix
        ? (s = o.m42)
        : n.length === 16
        ? (s = parseFloat(n[13]))
        : (s = parseFloat(n[5]))),
    s || 0
  );
}
function yt(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    i.constructor &&
    Object.prototype.toString.call(i).slice(8, -1) === "Object"
  );
}
function Ba(i) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? i instanceof HTMLElement
    : i && (i.nodeType === 1 || i.nodeType === 11);
}
function ye(...i) {
  const e = Object(i[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < i.length; n += 1) {
    const s = i[n];
    if (s != null && !Ba(s)) {
      const o = Object.keys(Object(s)).filter((r) => t.indexOf(r) < 0);
      for (let r = 0, a = o.length; r < a; r += 1) {
        const l = o[r],
          u = Object.getOwnPropertyDescriptor(s, l);
        u !== void 0 &&
          u.enumerable &&
          (yt(e[l]) && yt(s[l])
            ? s[l].__swiper__
              ? (e[l] = s[l])
              : ye(e[l], s[l])
            : !yt(e[l]) && yt(s[l])
            ? ((e[l] = {}), s[l].__swiper__ ? (e[l] = s[l]) : ye(e[l], s[l]))
            : (e[l] = s[l]));
      }
    }
  }
  return e;
}
function Ct(i, e, t) {
  i.style.setProperty(e, t);
}
function mn({ swiper: i, targetPosition: e, side: t }) {
  const n = re(),
    s = -i.translate;
  let o = null,
    r;
  const a = i.params.speed;
  (i.wrapperEl.style.scrollSnapType = "none"),
    n.cancelAnimationFrame(i.cssModeFrameID);
  const l = e > s ? "next" : "prev",
    u = (d, f) => (l === "next" && d >= f) || (l === "prev" && d <= f),
    c = () => {
      (r = new Date().getTime()), o === null && (o = r);
      const d = Math.max(Math.min((r - o) / a, 1), 0),
        f = 0.5 - Math.cos(d * Math.PI) / 2;
      let p = s + f * (e - s);
      if ((u(p, e) && (p = e), i.wrapperEl.scrollTo({ [t]: p }), u(p, e))) {
        (i.wrapperEl.style.overflow = "hidden"),
          (i.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (i.wrapperEl.style.overflow = ""), i.wrapperEl.scrollTo({ [t]: p });
          }),
          n.cancelAnimationFrame(i.cssModeFrameID);
        return;
      }
      i.cssModeFrameID = n.requestAnimationFrame(c);
    };
  c();
}
let Pt;
function ka() {
  const i = re(),
    e = be();
  return {
    smoothScroll:
      e.documentElement && "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in i ||
      (i.DocumentTouch && e instanceof i.DocumentTouch)
    ),
    passiveListener: (function () {
      let n = !1;
      try {
        const s = Object.defineProperty({}, "passive", {
          get() {
            n = !0;
          },
        });
        i.addEventListener("testPassiveListener", null, s);
      } catch {}
      return n;
    })(),
    gestures: (function () {
      return "ongesturestart" in i;
    })(),
  };
}
function gn() {
  return Pt || (Pt = ka()), Pt;
}
let Ot;
function Da({ userAgent: i } = {}) {
  const e = gn(),
    t = re(),
    n = t.navigator.platform,
    s = i || t.navigator.userAgent,
    o = { ios: !1, android: !1 },
    r = t.screen.width,
    a = t.screen.height,
    l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = s.match(/(iPad).*OS\s([\d_]+)/);
  const c = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = n === "Win32";
  let p = n === "MacIntel";
  const h = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !u &&
      p &&
      e.touch &&
      h.indexOf(`${r}x${a}`) >= 0 &&
      ((u = s.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (p = !1)),
    l && !f && ((o.os = "android"), (o.android = !0)),
    (u || d || c) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function Aa(i = {}) {
  return Ot || (Ot = Da(i)), Ot;
}
let Lt;
function Ma() {
  const i = re();
  function e() {
    const t = i.navigator.userAgent.toLowerCase();
    return (
      t.indexOf("safari") >= 0 &&
      t.indexOf("chrome") < 0 &&
      t.indexOf("android") < 0
    );
  }
  return {
    isSafari: e(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      i.navigator.userAgent
    ),
  };
}
function Pa() {
  return Lt || (Lt = Ma()), Lt;
}
function Oa({ swiper: i, on: e, emit: t }) {
  const n = re();
  let s = null;
  const o = () => {
      !i || i.destroyed || !i.initialized || (t("beforeResize"), t("resize"));
    },
    r = () => {
      !i ||
        i.destroyed ||
        !i.initialized ||
        ((s = new ResizeObserver((u) => {
          const { width: c, height: d } = i;
          let f = c,
            p = d;
          u.forEach(({ contentBoxSize: h, contentRect: g, target: y }) => {
            (y && y !== i.el) ||
              ((f = g ? g.width : (h[0] || h).inlineSize),
              (p = g ? g.height : (h[0] || h).blockSize));
          }),
            (f !== c || p !== d) && o();
        })),
        s.observe(i.el));
    },
    a = () => {
      s && s.unobserve && i.el && (s.unobserve(i.el), (s = null));
    },
    l = () => {
      !i || i.destroyed || !i.initialized || t("orientationchange");
    };
  e("init", () => {
    if (i.params.resizeObserver && typeof n.ResizeObserver < "u") {
      r();
      return;
    }
    n.addEventListener("resize", o), n.addEventListener("orientationchange", l);
  }),
    e("destroy", () => {
      a(),
        n.removeEventListener("resize", o),
        n.removeEventListener("orientationchange", l);
    });
}
function La({ swiper: i, extendParams: e, on: t, emit: n }) {
  const s = [],
    o = re(),
    r = (u, c = {}) => {
      const d = o.MutationObserver || o.WebkitMutationObserver,
        f = new d((p) => {
          if (p.length === 1) {
            n("observerUpdate", p[0]);
            return;
          }
          const h = function () {
            n("observerUpdate", p[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(h)
            : o.setTimeout(h, 0);
        });
      f.observe(u, {
        attributes: typeof c.attributes > "u" ? !0 : c.attributes,
        childList: typeof c.childList > "u" ? !0 : c.childList,
        characterData: typeof c.characterData > "u" ? !0 : c.characterData,
      }),
        s.push(f);
    },
    a = () => {
      if (!!i.params.observer) {
        if (i.params.observeParents) {
          const u = i.$el.parents();
          for (let c = 0; c < u.length; c += 1) r(u[c]);
        }
        r(i.$el[0], { childList: i.params.observeSlideChildren }),
          r(i.$wrapperEl[0], { attributes: !1 });
      }
    },
    l = () => {
      s.forEach((u) => {
        u.disconnect();
      }),
        s.splice(0, s.length);
    };
  e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    t("init", a),
    t("destroy", l);
}
const za = {
  on(i, e, t) {
    const n = this;
    if (typeof e != "function") return n;
    const s = t ? "unshift" : "push";
    return (
      i.split(" ").forEach((o) => {
        n.eventsListeners[o] || (n.eventsListeners[o] = []),
          n.eventsListeners[o][s](e);
      }),
      n
    );
  },
  once(i, e, t) {
    const n = this;
    if (typeof e != "function") return n;
    function s(...o) {
      n.off(i, s), s.__emitterProxy && delete s.__emitterProxy, e.apply(n, o);
    }
    return (s.__emitterProxy = e), n.on(i, s, t);
  },
  onAny(i, e) {
    const t = this;
    if (typeof i != "function") return t;
    const n = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[n](i), t;
  },
  offAny(i) {
    const e = this;
    if (!e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(i);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(i, e) {
    const t = this;
    return (
      t.eventsListeners &&
        i.split(" ").forEach((n) => {
          typeof e > "u"
            ? (t.eventsListeners[n] = [])
            : t.eventsListeners[n] &&
              t.eventsListeners[n].forEach((s, o) => {
                (s === e || (s.__emitterProxy && s.__emitterProxy === e)) &&
                  t.eventsListeners[n].splice(o, 1);
              });
        }),
      t
    );
  },
  emit(...i) {
    const e = this;
    if (!e.eventsListeners) return e;
    let t, n, s;
    return (
      typeof i[0] == "string" || Array.isArray(i[0])
        ? ((t = i[0]), (n = i.slice(1, i.length)), (s = e))
        : ((t = i[0].events), (n = i[0].data), (s = i[0].context || e)),
      n.unshift(s),
      (Array.isArray(t) ? t : t.split(" ")).forEach((r) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((a) => {
            a.apply(s, [r, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[r] &&
            e.eventsListeners[r].forEach((a) => {
              a.apply(s, n);
            });
      }),
      e
    );
  },
};
function Ia() {
  const i = this;
  let e, t;
  const n = i.$el;
  typeof i.params.width < "u" && i.params.width !== null
    ? (e = i.params.width)
    : (e = n[0].clientWidth),
    typeof i.params.height < "u" && i.params.height !== null
      ? (t = i.params.height)
      : (t = n[0].clientHeight),
    !((e === 0 && i.isHorizontal()) || (t === 0 && i.isVertical())) &&
      ((e =
        e -
        parseInt(n.css("padding-left") || 0, 10) -
        parseInt(n.css("padding-right") || 0, 10)),
      (t =
        t -
        parseInt(n.css("padding-top") || 0, 10) -
        parseInt(n.css("padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(t) && (t = 0),
      Object.assign(i, {
        width: e,
        height: t,
        size: i.isHorizontal() ? e : t,
      }));
}
function Ra() {
  const i = this;
  function e(B) {
    return i.isHorizontal()
      ? B
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[B];
  }
  function t(B, D) {
    return parseFloat(B.getPropertyValue(e(D)) || 0);
  }
  const n = i.params,
    { $wrapperEl: s, size: o, rtlTranslate: r, wrongRTL: a } = i,
    l = i.virtual && n.virtual.enabled,
    u = l ? i.virtual.slides.length : i.slides.length,
    c = s.children(`.${i.params.slideClass}`),
    d = l ? i.virtual.slides.length : c.length;
  let f = [];
  const p = [],
    h = [];
  let g = n.slidesOffsetBefore;
  typeof g == "function" && (g = n.slidesOffsetBefore.call(i));
  let y = n.slidesOffsetAfter;
  typeof y == "function" && (y = n.slidesOffsetAfter.call(i));
  const x = i.snapGrid.length,
    C = i.slidesGrid.length;
  let b = n.spaceBetween,
    _ = -g,
    E = 0,
    w = 0;
  if (typeof o > "u") return;
  typeof b == "string" &&
    b.indexOf("%") >= 0 &&
    (b = (parseFloat(b.replace("%", "")) / 100) * o),
    (i.virtualSize = -b),
    r
      ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    n.centeredSlides &&
      n.cssMode &&
      (Ct(i.wrapperEl, "--swiper-centered-offset-before", ""),
      Ct(i.wrapperEl, "--swiper-centered-offset-after", ""));
  const F = n.grid && n.grid.rows > 1 && i.grid;
  F && i.grid.initSlides(d);
  let k;
  const T =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (B) => typeof n.breakpoints[B].slidesPerView < "u"
    ).length > 0;
  for (let B = 0; B < d; B += 1) {
    k = 0;
    const D = c.eq(B);
    if ((F && i.grid.updateSlide(B, D, d, e), D.css("display") !== "none")) {
      if (n.slidesPerView === "auto") {
        T && (c[B].style[e("width")] = "");
        const z = getComputedStyle(D[0]),
          V = D[0].style.transform,
          U = D[0].style.webkitTransform;
        if (
          (V && (D[0].style.transform = "none"),
          U && (D[0].style.webkitTransform = "none"),
          n.roundLengths)
        )
          k = i.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
        else {
          const S = t(z, "width"),
            A = t(z, "padding-left"),
            M = t(z, "padding-right"),
            O = t(z, "margin-left"),
            W = t(z, "margin-right"),
            Me = z.getPropertyValue("box-sizing");
          if (Me && Me === "border-box") k = S + O + W;
          else {
            const { clientWidth: We, offsetWidth: Pe } = D[0];
            k = S + A + M + O + W + (Pe - We);
          }
        }
        V && (D[0].style.transform = V),
          U && (D[0].style.webkitTransform = U),
          n.roundLengths && (k = Math.floor(k));
      } else
        (k = (o - (n.slidesPerView - 1) * b) / n.slidesPerView),
          n.roundLengths && (k = Math.floor(k)),
          c[B] && (c[B].style[e("width")] = `${k}px`);
      c[B] && (c[B].swiperSlideSize = k),
        h.push(k),
        n.centeredSlides
          ? ((_ = _ + k / 2 + E / 2 + b),
            E === 0 && B !== 0 && (_ = _ - o / 2 - b),
            B === 0 && (_ = _ - o / 2 - b),
            Math.abs(_) < 1 / 1e3 && (_ = 0),
            n.roundLengths && (_ = Math.floor(_)),
            w % n.slidesPerGroup === 0 && f.push(_),
            p.push(_))
          : (n.roundLengths && (_ = Math.floor(_)),
            (w - Math.min(i.params.slidesPerGroupSkip, w)) %
              i.params.slidesPerGroup ===
              0 && f.push(_),
            p.push(_),
            (_ = _ + k + b)),
        (i.virtualSize += k + b),
        (E = k),
        (w += 1);
    }
  }
  if (
    ((i.virtualSize = Math.max(i.virtualSize, o) + y),
    r &&
      a &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      s.css({ width: `${i.virtualSize + n.spaceBetween}px` }),
    n.setWrapperSize &&
      s.css({ [e("width")]: `${i.virtualSize + n.spaceBetween}px` }),
    F && i.grid.updateWrapperSize(k, f, e),
    !n.centeredSlides)
  ) {
    const B = [];
    for (let D = 0; D < f.length; D += 1) {
      let z = f[D];
      n.roundLengths && (z = Math.floor(z)),
        f[D] <= i.virtualSize - o && B.push(z);
    }
    (f = B),
      Math.floor(i.virtualSize - o) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(i.virtualSize - o);
  }
  if ((f.length === 0 && (f = [0]), n.spaceBetween !== 0)) {
    const B = i.isHorizontal() && r ? "marginLeft" : e("marginRight");
    c.filter((D, z) => (n.cssMode ? z !== c.length - 1 : !0)).css({
      [B]: `${b}px`,
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let B = 0;
    h.forEach((z) => {
      B += z + (n.spaceBetween ? n.spaceBetween : 0);
    }),
      (B -= n.spaceBetween);
    const D = B - o;
    f = f.map((z) => (z < 0 ? -g : z > D ? D + y : z));
  }
  if (n.centerInsufficientSlides) {
    let B = 0;
    if (
      (h.forEach((D) => {
        B += D + (n.spaceBetween ? n.spaceBetween : 0);
      }),
      (B -= n.spaceBetween),
      B < o)
    ) {
      const D = (o - B) / 2;
      f.forEach((z, V) => {
        f[V] = z - D;
      }),
        p.forEach((z, V) => {
          p[V] = z + D;
        });
    }
  }
  if (
    (Object.assign(i, {
      slides: c,
      snapGrid: f,
      slidesGrid: p,
      slidesSizesGrid: h,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Ct(i.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
      Ct(
        i.wrapperEl,
        "--swiper-centered-offset-after",
        `${i.size / 2 - h[h.length - 1] / 2}px`
      );
    const B = -i.snapGrid[0],
      D = -i.slidesGrid[0];
    (i.snapGrid = i.snapGrid.map((z) => z + B)),
      (i.slidesGrid = i.slidesGrid.map((z) => z + D));
  }
  d !== u && i.emit("slidesLengthChange"),
    f.length !== x &&
      (i.params.watchOverflow && i.checkOverflow(),
      i.emit("snapGridLengthChange")),
    p.length !== C && i.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && i.updateSlidesOffset();
}
function $a(i) {
  const e = this,
    t = [],
    n = e.virtual && e.params.virtual.enabled;
  let s = 0,
    o;
  typeof i == "number"
    ? e.setTransition(i)
    : i === !0 && e.setTransition(e.params.speed);
  const r = (a) =>
    n
      ? e.slides.filter(
          (l) => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === a
        )[0]
      : e.slides.eq(a)[0];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      e.visibleSlides.each((a) => {
        t.push(a);
      });
    else
      for (o = 0; o < Math.ceil(e.params.slidesPerView); o += 1) {
        const a = e.activeIndex + o;
        if (a > e.slides.length && !n) break;
        t.push(r(a));
      }
  else t.push(r(e.activeIndex));
  for (o = 0; o < t.length; o += 1)
    if (typeof t[o] < "u") {
      const a = t[o].offsetHeight;
      s = a > s ? a : s;
    }
  (s || s === 0) && e.$wrapperEl.css("height", `${s}px`);
}
function Na() {
  const i = this,
    e = i.slides;
  for (let t = 0; t < e.length; t += 1)
    e[t].swiperSlideOffset = i.isHorizontal()
      ? e[t].offsetLeft
      : e[t].offsetTop;
}
function Ha(i = (this && this.translate) || 0) {
  const e = this,
    t = e.params,
    { slides: n, rtlTranslate: s, snapGrid: o } = e;
  if (n.length === 0) return;
  typeof n[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let r = -i;
  s && (r = i),
    n.removeClass(t.slideVisibleClass),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  for (let a = 0; a < n.length; a += 1) {
    const l = n[a];
    let u = l.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (u -= n[0].swiperSlideOffset);
    const c =
        (r + (t.centeredSlides ? e.minTranslate() : 0) - u) /
        (l.swiperSlideSize + t.spaceBetween),
      d =
        (r - o[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) /
        (l.swiperSlideSize + t.spaceBetween),
      f = -(r - u),
      p = f + e.slidesSizesGrid[a];
    ((f >= 0 && f < e.size - 1) ||
      (p > 1 && p <= e.size) ||
      (f <= 0 && p >= e.size)) &&
      (e.visibleSlides.push(l),
      e.visibleSlidesIndexes.push(a),
      n.eq(a).addClass(t.slideVisibleClass)),
      (l.progress = s ? -c : c),
      (l.originalProgress = s ? -d : d);
  }
  e.visibleSlides = $(e.visibleSlides);
}
function Va(i) {
  const e = this;
  if (typeof i > "u") {
    const u = e.rtlTranslate ? -1 : 1;
    i = (e && e.translate && e.translate * u) || 0;
  }
  const t = e.params,
    n = e.maxTranslate() - e.minTranslate();
  let { progress: s, isBeginning: o, isEnd: r } = e;
  const a = o,
    l = r;
  n === 0
    ? ((s = 0), (o = !0), (r = !0))
    : ((s = (i - e.minTranslate()) / n), (o = s <= 0), (r = s >= 1)),
    Object.assign(e, { progress: s, isBeginning: o, isEnd: r }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(i),
    o && !a && e.emit("reachBeginning toEdge"),
    r && !l && e.emit("reachEnd toEdge"),
    ((a && !o) || (l && !r)) && e.emit("fromEdge"),
    e.emit("progress", s);
}
function ja() {
  const i = this,
    { slides: e, params: t, $wrapperEl: n, activeIndex: s, realIndex: o } = i,
    r = i.virtual && t.virtual.enabled;
  e.removeClass(
    `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`
  );
  let a;
  r
    ? (a = i.$wrapperEl.find(
        `.${t.slideClass}[data-swiper-slide-index="${s}"]`
      ))
    : (a = e.eq(s)),
    a.addClass(t.slideActiveClass),
    t.loop &&
      (a.hasClass(t.slideDuplicateClass)
        ? n
            .children(
              `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${o}"]`
            )
            .addClass(t.slideDuplicateActiveClass)
        : n
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${o}"]`
            )
            .addClass(t.slideDuplicateActiveClass));
  let l = a.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
  t.loop && l.length === 0 && ((l = e.eq(0)), l.addClass(t.slideNextClass));
  let u = a.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
  t.loop && u.length === 0 && ((u = e.eq(-1)), u.addClass(t.slidePrevClass)),
    t.loop &&
      (l.hasClass(t.slideDuplicateClass)
        ? n
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${l.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(t.slideDuplicateNextClass)
        : n
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`
            )
            .addClass(t.slideDuplicateNextClass),
      u.hasClass(t.slideDuplicateClass)
        ? n
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${u.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(t.slideDuplicatePrevClass)
        : n
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`
            )
            .addClass(t.slideDuplicatePrevClass)),
    i.emitSlidesClasses();
}
function qa(i) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    {
      slidesGrid: n,
      snapGrid: s,
      params: o,
      activeIndex: r,
      realIndex: a,
      snapIndex: l,
    } = e;
  let u = i,
    c;
  if (typeof u > "u") {
    for (let f = 0; f < n.length; f += 1)
      typeof n[f + 1] < "u"
        ? t >= n[f] && t < n[f + 1] - (n[f + 1] - n[f]) / 2
          ? (u = f)
          : t >= n[f] && t < n[f + 1] && (u = f + 1)
        : t >= n[f] && (u = f);
    o.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0);
  }
  if (s.indexOf(t) >= 0) c = s.indexOf(t);
  else {
    const f = Math.min(o.slidesPerGroupSkip, u);
    c = f + Math.floor((u - f) / o.slidesPerGroup);
  }
  if ((c >= s.length && (c = s.length - 1), u === r)) {
    c !== l && ((e.snapIndex = c), e.emit("snapIndexChange"));
    return;
  }
  const d = parseInt(e.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
  Object.assign(e, {
    snapIndex: c,
    realIndex: d,
    previousIndex: r,
    activeIndex: u,
  }),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    a !== d && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
function Ua(i) {
  const e = this,
    t = e.params,
    n = $(i).closest(`.${t.slideClass}`)[0];
  let s = !1,
    o;
  if (n) {
    for (let r = 0; r < e.slides.length; r += 1)
      if (e.slides[r] === n) {
        (s = !0), (o = r);
        break;
      }
  }
  if (n && s)
    (e.clickedSlide = n),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt($(n).attr("data-swiper-slide-index"), 10))
        : (e.clickedIndex = o);
  else {
    (e.clickedSlide = void 0), (e.clickedIndex = void 0);
    return;
  }
  t.slideToClickedSlide &&
    e.clickedIndex !== void 0 &&
    e.clickedIndex !== e.activeIndex &&
    e.slideToClickedSlide();
}
const Ga = {
  updateSize: Ia,
  updateSlides: Ra,
  updateAutoHeight: $a,
  updateSlidesOffset: Na,
  updateSlidesProgress: Ha,
  updateProgress: Va,
  updateSlidesClasses: ja,
  updateActiveIndex: qa,
  updateClickedSlide: Ua,
};
function Wa(i = this.isHorizontal() ? "x" : "y") {
  const e = this,
    { params: t, rtlTranslate: n, translate: s, $wrapperEl: o } = e;
  if (t.virtualTranslate) return n ? -s : s;
  if (t.cssMode) return s;
  let r = Ta(o[0], i);
  return n && (r = -r), r || 0;
}
function Xa(i, e) {
  const t = this,
    {
      rtlTranslate: n,
      params: s,
      $wrapperEl: o,
      wrapperEl: r,
      progress: a,
    } = t;
  let l = 0,
    u = 0;
  const c = 0;
  t.isHorizontal() ? (l = n ? -i : i) : (u = i),
    s.roundLengths && ((l = Math.floor(l)), (u = Math.floor(u))),
    s.cssMode
      ? (r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
          ? -l
          : -u)
      : s.virtualTranslate ||
        o.transform(`translate3d(${l}px, ${u}px, ${c}px)`),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? l : u);
  let d;
  const f = t.maxTranslate() - t.minTranslate();
  f === 0 ? (d = 0) : (d = (i - t.minTranslate()) / f),
    d !== a && t.updateProgress(i),
    t.emit("setTranslate", t.translate, e);
}
function Ya() {
  return -this.snapGrid[0];
}
function Za() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Ka(i = 0, e = this.params.speed, t = !0, n = !0, s) {
  const o = this,
    { params: r, wrapperEl: a } = o;
  if (o.animating && r.preventInteractionOnTransition) return !1;
  const l = o.minTranslate(),
    u = o.maxTranslate();
  let c;
  if (
    (n && i > l ? (c = l) : n && i < u ? (c = u) : (c = i),
    o.updateProgress(c),
    r.cssMode)
  ) {
    const d = o.isHorizontal();
    if (e === 0) a[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!o.support.smoothScroll)
        return (
          mn({ swiper: o, targetPosition: -c, side: d ? "left" : "top" }), !0
        );
      a.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (o.setTransition(0),
        o.setTranslate(c),
        t && (o.emit("beforeTransitionStart", e, s), o.emit("transitionEnd")))
      : (o.setTransition(e),
        o.setTranslate(c),
        t && (o.emit("beforeTransitionStart", e, s), o.emit("transitionStart")),
        o.animating ||
          ((o.animating = !0),
          o.onTranslateToWrapperTransitionEnd ||
            (o.onTranslateToWrapperTransitionEnd = function (f) {
              !o ||
                o.destroyed ||
                (f.target === this &&
                  (o.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  (o.onTranslateToWrapperTransitionEnd = null),
                  delete o.onTranslateToWrapperTransitionEnd,
                  t && o.emit("transitionEnd")));
            }),
          o.$wrapperEl[0].addEventListener(
            "transitionend",
            o.onTranslateToWrapperTransitionEnd
          ),
          o.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            o.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const Ja = {
  getTranslate: Wa,
  setTranslate: Xa,
  minTranslate: Ya,
  maxTranslate: Za,
  translateTo: Ka,
};
function Qa(i, e) {
  const t = this;
  t.params.cssMode || t.$wrapperEl.transition(i), t.emit("setTransition", i, e);
}
function yn({ swiper: i, runCallbacks: e, direction: t, step: n }) {
  const { activeIndex: s, previousIndex: o } = i;
  let r = t;
  if (
    (r || (s > o ? (r = "next") : s < o ? (r = "prev") : (r = "reset")),
    i.emit(`transition${n}`),
    e && s !== o)
  ) {
    if (r === "reset") {
      i.emit(`slideResetTransition${n}`);
      return;
    }
    i.emit(`slideChangeTransition${n}`),
      r === "next"
        ? i.emit(`slideNextTransition${n}`)
        : i.emit(`slidePrevTransition${n}`);
  }
}
function el(i = !0, e) {
  const t = this,
    { params: n } = t;
  n.cssMode ||
    (n.autoHeight && t.updateAutoHeight(),
    yn({ swiper: t, runCallbacks: i, direction: e, step: "Start" }));
}
function tl(i = !0, e) {
  const t = this,
    { params: n } = t;
  (t.animating = !1),
    !n.cssMode &&
      (t.setTransition(0),
      yn({ swiper: t, runCallbacks: i, direction: e, step: "End" }));
}
const il = { setTransition: Qa, transitionStart: el, transitionEnd: tl };
function nl(i = 0, e = this.params.speed, t = !0, n, s) {
  if (typeof i != "number" && typeof i != "string")
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof i}] given.`
    );
  if (typeof i == "string") {
    const b = parseInt(i, 10);
    if (!isFinite(b))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${i}] given.`
      );
    i = b;
  }
  const o = this;
  let r = i;
  r < 0 && (r = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: p,
    enabled: h,
  } = o;
  if ((o.animating && a.preventInteractionOnTransition) || (!h && !n && !s))
    return !1;
  const g = Math.min(o.params.slidesPerGroupSkip, r);
  let y = g + Math.floor((r - g) / o.params.slidesPerGroup);
  y >= l.length && (y = l.length - 1),
    (d || a.initialSlide || 0) === (c || 0) &&
      t &&
      o.emit("beforeSlideChangeStart");
  const x = -l[y];
  if ((o.updateProgress(x), a.normalizeSlideIndex))
    for (let b = 0; b < u.length; b += 1) {
      const _ = -Math.floor(x * 100),
        E = Math.floor(u[b] * 100),
        w = Math.floor(u[b + 1] * 100);
      typeof u[b + 1] < "u"
        ? _ >= E && _ < w - (w - E) / 2
          ? (r = b)
          : _ >= E && _ < w && (r = b + 1)
        : _ >= E && (r = b);
    }
  if (
    o.initialized &&
    r !== d &&
    ((!o.allowSlideNext && x < o.translate && x < o.minTranslate()) ||
      (!o.allowSlidePrev &&
        x > o.translate &&
        x > o.maxTranslate() &&
        (d || 0) !== r))
  )
    return !1;
  let C;
  if (
    (r > d ? (C = "next") : r < d ? (C = "prev") : (C = "reset"),
    (f && -x === o.translate) || (!f && x === o.translate))
  )
    return (
      o.updateActiveIndex(r),
      a.autoHeight && o.updateAutoHeight(),
      o.updateSlidesClasses(),
      a.effect !== "slide" && o.setTranslate(x),
      C !== "reset" && (o.transitionStart(t, C), o.transitionEnd(t, C)),
      !1
    );
  if (a.cssMode) {
    const b = o.isHorizontal(),
      _ = f ? x : -x;
    if (e === 0) {
      const E = o.virtual && o.params.virtual.enabled;
      E &&
        ((o.wrapperEl.style.scrollSnapType = "none"),
        (o._immediateVirtual = !0)),
        (p[b ? "scrollLeft" : "scrollTop"] = _),
        E &&
          requestAnimationFrame(() => {
            (o.wrapperEl.style.scrollSnapType = ""),
              (o._swiperImmediateVirtual = !1);
          });
    } else {
      if (!o.support.smoothScroll)
        return (
          mn({ swiper: o, targetPosition: _, side: b ? "left" : "top" }), !0
        );
      p.scrollTo({ [b ? "left" : "top"]: _, behavior: "smooth" });
    }
    return !0;
  }
  return (
    o.setTransition(e),
    o.setTranslate(x),
    o.updateActiveIndex(r),
    o.updateSlidesClasses(),
    o.emit("beforeTransitionStart", e, n),
    o.transitionStart(t, C),
    e === 0
      ? o.transitionEnd(t, C)
      : o.animating ||
        ((o.animating = !0),
        o.onSlideToWrapperTransitionEnd ||
          (o.onSlideToWrapperTransitionEnd = function (_) {
            !o ||
              o.destroyed ||
              (_.target === this &&
                (o.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  o.onSlideToWrapperTransitionEnd
                ),
                o.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  o.onSlideToWrapperTransitionEnd
                ),
                (o.onSlideToWrapperTransitionEnd = null),
                delete o.onSlideToWrapperTransitionEnd,
                o.transitionEnd(t, C)));
          }),
        o.$wrapperEl[0].addEventListener(
          "transitionend",
          o.onSlideToWrapperTransitionEnd
        ),
        o.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          o.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function sl(i = 0, e = this.params.speed, t = !0, n) {
  const s = this;
  let o = i;
  return s.params.loop && (o += s.loopedSlides), s.slideTo(o, e, t, n);
}
function ol(i = this.params.speed, e = !0, t) {
  const n = this,
    { animating: s, enabled: o, params: r } = n;
  if (!o) return n;
  let a = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
  const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : a;
  if (r.loop) {
    if (s && r.loopPreventsSlide) return !1;
    n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
  }
  return r.rewind && n.isEnd
    ? n.slideTo(0, i, e, t)
    : n.slideTo(n.activeIndex + l, i, e, t);
}
function rl(i = this.params.speed, e = !0, t) {
  const n = this,
    {
      params: s,
      animating: o,
      snapGrid: r,
      slidesGrid: a,
      rtlTranslate: l,
      enabled: u,
    } = n;
  if (!u) return n;
  if (s.loop) {
    if (o && s.loopPreventsSlide) return !1;
    n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
  }
  const c = l ? n.translate : -n.translate;
  function d(y) {
    return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y);
  }
  const f = d(c),
    p = r.map((y) => d(y));
  let h = r[p.indexOf(f) - 1];
  if (typeof h > "u" && s.cssMode) {
    let y;
    r.forEach((x, C) => {
      f >= x && (y = C);
    }),
      typeof y < "u" && (h = r[y > 0 ? y - 1 : y]);
  }
  let g = 0;
  return (
    typeof h < "u" &&
      ((g = a.indexOf(h)),
      g < 0 && (g = n.activeIndex - 1),
      s.slidesPerView === "auto" &&
        s.slidesPerGroup === 1 &&
        s.slidesPerGroupAuto &&
        ((g = g - n.slidesPerViewDynamic("previous", !0) + 1),
        (g = Math.max(g, 0)))),
    s.rewind && n.isBeginning
      ? n.slideTo(n.slides.length - 1, i, e, t)
      : n.slideTo(g, i, e, t)
  );
}
function al(i = this.params.speed, e = !0, t) {
  const n = this;
  return n.slideTo(n.activeIndex, i, e, t);
}
function ll(i = this.params.speed, e = !0, t, n = 0.5) {
  const s = this;
  let o = s.activeIndex;
  const r = Math.min(s.params.slidesPerGroupSkip, o),
    a = r + Math.floor((o - r) / s.params.slidesPerGroup),
    l = s.rtlTranslate ? s.translate : -s.translate;
  if (l >= s.snapGrid[a]) {
    const u = s.snapGrid[a],
      c = s.snapGrid[a + 1];
    l - u > (c - u) * n && (o += s.params.slidesPerGroup);
  } else {
    const u = s.snapGrid[a - 1],
      c = s.snapGrid[a];
    l - u <= (c - u) * n && (o -= s.params.slidesPerGroup);
  }
  return (
    (o = Math.max(o, 0)),
    (o = Math.min(o, s.slidesGrid.length - 1)),
    s.slideTo(o, i, e, t)
  );
}
function ul() {
  const i = this,
    { params: e, $wrapperEl: t } = i,
    n = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
  let s = i.clickedIndex,
    o;
  if (e.loop) {
    if (i.animating) return;
    (o = parseInt($(i.clickedSlide).attr("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? s < i.loopedSlides - n / 2 ||
          s > i.slides.length - i.loopedSlides + n / 2
          ? (i.loopFix(),
            (s = t
              .children(
                `.${e.slideClass}[data-swiper-slide-index="${o}"]:not(.${e.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            dt(() => {
              i.slideTo(s);
            }))
          : i.slideTo(s)
        : s > i.slides.length - n
        ? (i.loopFix(),
          (s = t
            .children(
              `.${e.slideClass}[data-swiper-slide-index="${o}"]:not(.${e.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          dt(() => {
            i.slideTo(s);
          }))
        : i.slideTo(s);
  } else i.slideTo(s);
}
const cl = {
  slideTo: nl,
  slideToLoop: sl,
  slideNext: ol,
  slidePrev: rl,
  slideReset: al,
  slideToClosest: ll,
  slideToClickedSlide: ul,
};
function dl() {
  const i = this,
    e = be(),
    { params: t, $wrapperEl: n } = i,
    s = n.children().length > 0 ? $(n.children()[0].parentNode) : n;
  s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
  let o = s.children(`.${t.slideClass}`);
  if (t.loopFillGroupWithBlank) {
    const l = t.slidesPerGroup - (o.length % t.slidesPerGroup);
    if (l !== t.slidesPerGroup) {
      for (let u = 0; u < l; u += 1) {
        const c = $(e.createElement("div")).addClass(
          `${t.slideClass} ${t.slideBlankClass}`
        );
        s.append(c);
      }
      o = s.children(`.${t.slideClass}`);
    }
  }
  t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = o.length),
    (i.loopedSlides = Math.ceil(
      parseFloat(t.loopedSlides || t.slidesPerView, 10)
    )),
    (i.loopedSlides += t.loopAdditionalSlides),
    i.loopedSlides > o.length && (i.loopedSlides = o.length);
  const r = [],
    a = [];
  o.each((l, u) => {
    const c = $(l);
    u < i.loopedSlides && a.push(l),
      u < o.length && u >= o.length - i.loopedSlides && r.push(l),
      c.attr("data-swiper-slide-index", u);
  });
  for (let l = 0; l < a.length; l += 1)
    s.append($(a[l].cloneNode(!0)).addClass(t.slideDuplicateClass));
  for (let l = r.length - 1; l >= 0; l -= 1)
    s.prepend($(r[l].cloneNode(!0)).addClass(t.slideDuplicateClass));
}
function fl() {
  const i = this;
  i.emit("beforeLoopFix");
  const {
    activeIndex: e,
    slides: t,
    loopedSlides: n,
    allowSlidePrev: s,
    allowSlideNext: o,
    snapGrid: r,
    rtlTranslate: a,
  } = i;
  let l;
  (i.allowSlidePrev = !0), (i.allowSlideNext = !0);
  const c = -r[e] - i.getTranslate();
  e < n
    ? ((l = t.length - n * 3 + e),
      (l += n),
      i.slideTo(l, 0, !1, !0) &&
        c !== 0 &&
        i.setTranslate((a ? -i.translate : i.translate) - c))
    : e >= t.length - n &&
      ((l = -t.length + e + n),
      (l += n),
      i.slideTo(l, 0, !1, !0) &&
        c !== 0 &&
        i.setTranslate((a ? -i.translate : i.translate) - c)),
    (i.allowSlidePrev = s),
    (i.allowSlideNext = o),
    i.emit("loopFix");
}
function hl() {
  const i = this,
    { $wrapperEl: e, params: t, slides: n } = i;
  e
    .children(
      `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
    )
    .remove(),
    n.removeAttr("data-swiper-slide-index");
}
const pl = { loopCreate: dl, loopFix: fl, loopDestroy: hl };
function vl(i) {
  const e = this;
  if (
    e.support.touch ||
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  (t.style.cursor = "move"),
    (t.style.cursor = i ? "-webkit-grabbing" : "-webkit-grab"),
    (t.style.cursor = i ? "-moz-grabbin" : "-moz-grab"),
    (t.style.cursor = i ? "grabbing" : "grab");
}
function ml() {
  const i = this;
  i.support.touch ||
    (i.params.watchOverflow && i.isLocked) ||
    i.params.cssMode ||
    (i[
      i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const gl = { setGrabCursor: vl, unsetGrabCursor: ml };
function yl(i, e = this) {
  function t(n) {
    return !n || n === be() || n === re()
      ? null
      : (n.assignedSlot && (n = n.assignedSlot),
        n.closest(i) || t(n.getRootNode().host));
  }
  return t(e);
}
function Cl(i) {
  const e = this,
    t = be(),
    n = re(),
    s = e.touchEventsData,
    { params: o, touches: r, enabled: a } = e;
  if (!a || (e.animating && o.preventInteractionOnTransition)) return;
  !e.animating && o.cssMode && o.loop && e.loopFix();
  let l = i;
  l.originalEvent && (l = l.originalEvent);
  let u = $(l.target);
  if (
    (o.touchEventsTarget === "wrapper" && !u.closest(e.wrapperEl).length) ||
    ((s.isTouchEvent = l.type === "touchstart"),
    !s.isTouchEvent && "which" in l && l.which === 3) ||
    (!s.isTouchEvent && "button" in l && l.button > 0) ||
    (s.isTouched && s.isMoved)
  )
    return;
  !!o.noSwipingClass &&
    o.noSwipingClass !== "" &&
    l.target &&
    l.target.shadowRoot &&
    i.path &&
    i.path[0] &&
    (u = $(i.path[0]));
  const d = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
    f = !!(l.target && l.target.shadowRoot);
  if (o.noSwiping && (f ? yl(d, l.target) : u.closest(d)[0])) {
    e.allowClick = !0;
    return;
  }
  if (o.swipeHandler && !u.closest(o.swipeHandler)[0]) return;
  (r.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX),
    (r.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY);
  const p = r.currentX,
    h = r.currentY,
    g = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
    y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
  if (g && (p <= y || p >= n.innerWidth - y))
    if (g === "prevent") i.preventDefault();
    else return;
  if (
    (Object.assign(s, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (r.startX = p),
    (r.startY = h),
    (s.touchStartTime = Oe()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    o.threshold > 0 && (s.allowThresholdMove = !1),
    l.type !== "touchstart")
  ) {
    let x = !0;
    u.is(s.focusableElements) && (x = !1),
      t.activeElement &&
        $(t.activeElement).is(s.focusableElements) &&
        t.activeElement !== u[0] &&
        t.activeElement.blur();
    const C = x && e.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || C) &&
      !u[0].isContentEditable &&
      l.preventDefault();
  }
  e.emit("touchStart", l);
}
function bl(i) {
  const e = be(),
    t = this,
    n = t.touchEventsData,
    { params: s, touches: o, rtlTranslate: r, enabled: a } = t;
  if (!a) return;
  let l = i;
  if ((l.originalEvent && (l = l.originalEvent), !n.isTouched)) {
    n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", l);
    return;
  }
  if (n.isTouchEvent && l.type !== "touchmove") return;
  const u =
      l.type === "touchmove" &&
      l.targetTouches &&
      (l.targetTouches[0] || l.changedTouches[0]),
    c = l.type === "touchmove" ? u.pageX : l.pageX,
    d = l.type === "touchmove" ? u.pageY : l.pageY;
  if (l.preventedByNestedSwiper) {
    (o.startX = c), (o.startY = d);
    return;
  }
  if (!t.allowTouchMove) {
    (t.allowClick = !1),
      n.isTouched &&
        (Object.assign(o, { startX: c, startY: d, currentX: c, currentY: d }),
        (n.touchStartTime = Oe()));
    return;
  }
  if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
    if (t.isVertical()) {
      if (
        (d < o.startY && t.translate <= t.maxTranslate()) ||
        (d > o.startY && t.translate >= t.minTranslate())
      ) {
        (n.isTouched = !1), (n.isMoved = !1);
        return;
      }
    } else if (
      (c < o.startX && t.translate <= t.maxTranslate()) ||
      (c > o.startX && t.translate >= t.minTranslate())
    )
      return;
  }
  if (
    n.isTouchEvent &&
    e.activeElement &&
    l.target === e.activeElement &&
    $(l.target).is(n.focusableElements)
  ) {
    (n.isMoved = !0), (t.allowClick = !1);
    return;
  }
  if (
    (n.allowTouchCallbacks && t.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
  )
    return;
  (o.currentX = c), (o.currentY = d);
  const f = o.currentX - o.startX,
    p = o.currentY - o.startY;
  if (t.params.threshold && Math.sqrt(f ** 2 + p ** 2) < t.params.threshold)
    return;
  if (typeof n.isScrolling > "u") {
    let x;
    (t.isHorizontal() && o.currentY === o.startY) ||
    (t.isVertical() && o.currentX === o.startX)
      ? (n.isScrolling = !1)
      : f * f + p * p >= 25 &&
        ((x = (Math.atan2(Math.abs(p), Math.abs(f)) * 180) / Math.PI),
        (n.isScrolling = t.isHorizontal()
          ? x > s.touchAngle
          : 90 - x > s.touchAngle));
  }
  if (
    (n.isScrolling && t.emit("touchMoveOpposite", l),
    typeof n.startMoving > "u" &&
      (o.currentX !== o.startX || o.currentY !== o.startY) &&
      (n.startMoving = !0),
    n.isScrolling)
  ) {
    n.isTouched = !1;
    return;
  }
  if (!n.startMoving) return;
  (t.allowClick = !1),
    !s.cssMode && l.cancelable && l.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
    n.isMoved ||
      (s.loop && !s.cssMode && t.loopFix(),
      (n.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (n.allowMomentumBounce = !1),
      s.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit("sliderFirstMove", l)),
    t.emit("sliderMove", l),
    (n.isMoved = !0);
  let h = t.isHorizontal() ? f : p;
  (o.diff = h),
    (h *= s.touchRatio),
    r && (h = -h),
    (t.swipeDirection = h > 0 ? "prev" : "next"),
    (n.currentTranslate = h + n.startTranslate);
  let g = !0,
    y = s.resistanceRatio;
  if (
    (s.touchReleaseOnEdges && (y = 0),
    h > 0 && n.currentTranslate > t.minTranslate()
      ? ((g = !1),
        s.resistance &&
          (n.currentTranslate =
            t.minTranslate() -
            1 +
            (-t.minTranslate() + n.startTranslate + h) ** y))
      : h < 0 &&
        n.currentTranslate < t.maxTranslate() &&
        ((g = !1),
        s.resistance &&
          (n.currentTranslate =
            t.maxTranslate() +
            1 -
            (t.maxTranslate() - n.startTranslate - h) ** y)),
    g && (l.preventedByNestedSwiper = !0),
    !t.allowSlideNext &&
      t.swipeDirection === "next" &&
      n.currentTranslate < n.startTranslate &&
      (n.currentTranslate = n.startTranslate),
    !t.allowSlidePrev &&
      t.swipeDirection === "prev" &&
      n.currentTranslate > n.startTranslate &&
      (n.currentTranslate = n.startTranslate),
    !t.allowSlidePrev &&
      !t.allowSlideNext &&
      (n.currentTranslate = n.startTranslate),
    s.threshold > 0)
  )
    if (Math.abs(h) > s.threshold || n.allowThresholdMove) {
      if (!n.allowThresholdMove) {
        (n.allowThresholdMove = !0),
          (o.startX = o.currentX),
          (o.startY = o.currentY),
          (n.currentTranslate = n.startTranslate),
          (o.diff = t.isHorizontal()
            ? o.currentX - o.startX
            : o.currentY - o.startY);
        return;
      }
    } else {
      n.currentTranslate = n.startTranslate;
      return;
    }
  !s.followFinger ||
    s.cssMode ||
    (((s.freeMode && s.freeMode.enabled && t.freeMode) ||
      s.watchSlidesProgress) &&
      (t.updateActiveIndex(), t.updateSlidesClasses()),
    t.params.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.freeMode.onTouchMove(),
    t.updateProgress(n.currentTranslate),
    t.setTranslate(n.currentTranslate));
}
function _l(i) {
  const e = this,
    t = e.touchEventsData,
    { params: n, touches: s, rtlTranslate: o, slidesGrid: r, enabled: a } = e;
  if (!a) return;
  let l = i;
  if (
    (l.originalEvent && (l = l.originalEvent),
    t.allowTouchCallbacks && e.emit("touchEnd", l),
    (t.allowTouchCallbacks = !1),
    !t.isTouched)
  ) {
    t.isMoved && n.grabCursor && e.setGrabCursor(!1),
      (t.isMoved = !1),
      (t.startMoving = !1);
    return;
  }
  n.grabCursor &&
    t.isMoved &&
    t.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const u = Oe(),
    c = u - t.touchStartTime;
  if (e.allowClick) {
    const y = l.path || (l.composedPath && l.composedPath());
    e.updateClickedSlide((y && y[0]) || l.target),
      e.emit("tap click", l),
      c < 300 &&
        u - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", l);
  }
  if (
    ((t.lastClickTime = Oe()),
    dt(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !t.isTouched ||
      !t.isMoved ||
      !e.swipeDirection ||
      s.diff === 0 ||
      t.currentTranslate === t.startTranslate)
  ) {
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    return;
  }
  (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
  let d;
  if (
    (n.followFinger
      ? (d = o ? e.translate : -e.translate)
      : (d = -t.currentTranslate),
    n.cssMode)
  )
    return;
  if (e.params.freeMode && n.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: d });
    return;
  }
  let f = 0,
    p = e.slidesSizesGrid[0];
  for (
    let y = 0;
    y < r.length;
    y += y < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
  ) {
    const x = y < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof r[y + x] < "u"
      ? d >= r[y] && d < r[y + x] && ((f = y), (p = r[y + x] - r[y]))
      : d >= r[y] && ((f = y), (p = r[r.length - 1] - r[r.length - 2]));
  }
  const h = (d - r[f]) / p,
    g = f < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (c > n.longSwipesMs) {
    if (!n.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (h >= n.longSwipesRatio ? e.slideTo(f + g) : e.slideTo(f)),
      e.swipeDirection === "prev" &&
        (h > 1 - n.longSwipesRatio ? e.slideTo(f + g) : e.slideTo(f));
  } else {
    if (!n.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl)
      ? l.target === e.navigation.nextEl
        ? e.slideTo(f + g)
        : e.slideTo(f)
      : (e.swipeDirection === "next" && e.slideTo(f + g),
        e.swipeDirection === "prev" && e.slideTo(f));
  }
}
function Bi() {
  const i = this,
    { params: e, el: t } = i;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && i.setBreakpoint();
  const { allowSlideNext: n, allowSlidePrev: s, snapGrid: o } = i;
  (i.allowSlideNext = !0),
    (i.allowSlidePrev = !0),
    i.updateSize(),
    i.updateSlides(),
    i.updateSlidesClasses(),
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    i.isEnd &&
    !i.isBeginning &&
    !i.params.centeredSlides
      ? i.slideTo(i.slides.length - 1, 0, !1, !0)
      : i.slideTo(i.activeIndex, 0, !1, !0),
    i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.run(),
    (i.allowSlidePrev = s),
    (i.allowSlideNext = n),
    i.params.watchOverflow && o !== i.snapGrid && i.checkOverflow();
}
function wl(i) {
  const e = this;
  !e.enabled ||
    e.allowClick ||
    (e.params.preventClicks && i.preventDefault(),
    e.params.preventClicksPropagation &&
      e.animating &&
      (i.stopPropagation(), i.stopImmediatePropagation()));
}
function El() {
  const i = this,
    { wrapperEl: e, rtlTranslate: t, enabled: n } = i;
  if (!n) return;
  (i.previousTranslate = i.translate),
    i.isHorizontal()
      ? (i.translate = -e.scrollLeft)
      : (i.translate = -e.scrollTop),
    i.translate === -0 && (i.translate = 0),
    i.updateActiveIndex(),
    i.updateSlidesClasses();
  let s;
  const o = i.maxTranslate() - i.minTranslate();
  o === 0 ? (s = 0) : (s = (i.translate - i.minTranslate()) / o),
    s !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
    i.emit("setTranslate", i.translate, !1);
}
let ki = !1;
function xl() {}
const Cn = (i, e) => {
  const t = be(),
    {
      params: n,
      touchEvents: s,
      el: o,
      wrapperEl: r,
      device: a,
      support: l,
    } = i,
    u = !!n.nested,
    c = e === "on" ? "addEventListener" : "removeEventListener",
    d = e;
  if (!l.touch)
    o[c](s.start, i.onTouchStart, !1),
      t[c](s.move, i.onTouchMove, u),
      t[c](s.end, i.onTouchEnd, !1);
  else {
    const f =
      s.start === "touchstart" && l.passiveListener && n.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    o[c](s.start, i.onTouchStart, f),
      o[c](
        s.move,
        i.onTouchMove,
        l.passiveListener ? { passive: !1, capture: u } : u
      ),
      o[c](s.end, i.onTouchEnd, f),
      s.cancel && o[c](s.cancel, i.onTouchEnd, f);
  }
  (n.preventClicks || n.preventClicksPropagation) &&
    o[c]("click", i.onClick, !0),
    n.cssMode && r[c]("scroll", i.onScroll),
    n.updateOnWindowResize
      ? i[d](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Bi,
          !0
        )
      : i[d]("observerUpdate", Bi, !0);
};
function Fl() {
  const i = this,
    e = be(),
    { params: t, support: n } = i;
  (i.onTouchStart = Cl.bind(i)),
    (i.onTouchMove = bl.bind(i)),
    (i.onTouchEnd = _l.bind(i)),
    t.cssMode && (i.onScroll = El.bind(i)),
    (i.onClick = wl.bind(i)),
    n.touch && !ki && (e.addEventListener("touchstart", xl), (ki = !0)),
    Cn(i, "on");
}
function Sl() {
  Cn(this, "off");
}
const Tl = { attachEvents: Fl, detachEvents: Sl },
  Di = (i, e) => i.grid && e.grid && e.grid.rows > 1;
function Bl() {
  const i = this,
    {
      activeIndex: e,
      initialized: t,
      loopedSlides: n = 0,
      params: s,
      $el: o,
    } = i,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const a = i.getBreakpoint(r, i.params.breakpointsBase, i.el);
  if (!a || i.currentBreakpoint === a) return;
  const u = (a in r ? r[a] : void 0) || i.originalParams,
    c = Di(i, s),
    d = Di(i, u),
    f = s.enabled;
  c && !d
    ? (o.removeClass(
        `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
      ),
      i.emitContainerClasses())
    : !c &&
      d &&
      (o.addClass(`${s.containerModifierClass}grid`),
      ((u.grid.fill && u.grid.fill === "column") ||
        (!u.grid.fill && s.grid.fill === "column")) &&
        o.addClass(`${s.containerModifierClass}grid-column`),
      i.emitContainerClasses());
  const p = u.direction && u.direction !== s.direction,
    h = s.loop && (u.slidesPerView !== s.slidesPerView || p);
  p && t && i.changeDirection(), ye(i.params, u);
  const g = i.params.enabled;
  Object.assign(i, {
    allowTouchMove: i.params.allowTouchMove,
    allowSlideNext: i.params.allowSlideNext,
    allowSlidePrev: i.params.allowSlidePrev,
  }),
    f && !g ? i.disable() : !f && g && i.enable(),
    (i.currentBreakpoint = a),
    i.emit("_beforeBreakpoint", u),
    h &&
      t &&
      (i.loopDestroy(),
      i.loopCreate(),
      i.updateSlides(),
      i.slideTo(e - n + i.loopedSlides, 0, !1)),
    i.emit("breakpoint", u);
}
function kl(i, e = "window", t) {
  if (!i || (e === "container" && !t)) return;
  let n = !1;
  const s = re(),
    o = e === "window" ? s.innerHeight : t.clientHeight,
    r = Object.keys(i).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: o * l, point: a };
      }
      return { value: a, point: a };
    });
  r.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < r.length; a += 1) {
    const { point: l, value: u } = r[a];
    e === "window"
      ? s.matchMedia(`(min-width: ${u}px)`).matches && (n = l)
      : u <= t.clientWidth && (n = l);
  }
  return n || "max";
}
const Dl = { setBreakpoint: Bl, getBreakpoint: kl };
function Al(i, e) {
  const t = [];
  return (
    i.forEach((n) => {
      typeof n == "object"
        ? Object.keys(n).forEach((s) => {
            n[s] && t.push(e + s);
          })
        : typeof n == "string" && t.push(e + n);
    }),
    t
  );
}
function Ml() {
  const i = this,
    { classNames: e, params: t, rtl: n, $el: s, device: o, support: r } = i,
    a = Al(
      [
        "initialized",
        t.direction,
        { "pointer-events": !r.touch },
        { "free-mode": i.params.freeMode && t.freeMode.enabled },
        { autoheight: t.autoHeight },
        { rtl: n },
        { grid: t.grid && t.grid.rows > 1 },
        {
          "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column",
        },
        { android: o.android },
        { ios: o.ios },
        { "css-mode": t.cssMode },
        { centered: t.cssMode && t.centeredSlides },
      ],
      t.containerModifierClass
    );
  e.push(...a), s.addClass([...e].join(" ")), i.emitContainerClasses();
}
function Pl() {
  const i = this,
    { $el: e, classNames: t } = i;
  e.removeClass(t.join(" ")), i.emitContainerClasses();
}
const Ol = { addClasses: Ml, removeClasses: Pl };
function Ll(i, e, t, n, s, o) {
  const r = re();
  let a;
  function l() {
    o && o();
  }
  !$(i).parent("picture")[0] && (!i.complete || !s) && e
    ? ((a = new r.Image()),
      (a.onload = l),
      (a.onerror = l),
      n && (a.sizes = n),
      t && (a.srcset = t),
      e && (a.src = e))
    : l();
}
function zl() {
  const i = this;
  i.imagesToLoad = i.$el.find("img");
  function e() {
    typeof i > "u" ||
      i === null ||
      !i ||
      i.destroyed ||
      (i.imagesLoaded !== void 0 && (i.imagesLoaded += 1),
      i.imagesLoaded === i.imagesToLoad.length &&
        (i.params.updateOnImagesReady && i.update(), i.emit("imagesReady")));
  }
  for (let t = 0; t < i.imagesToLoad.length; t += 1) {
    const n = i.imagesToLoad[t];
    i.loadImage(
      n,
      n.currentSrc || n.getAttribute("src"),
      n.srcset || n.getAttribute("srcset"),
      n.sizes || n.getAttribute("sizes"),
      !0,
      e
    );
  }
}
const Il = { loadImage: Ll, preloadImages: zl };
function Rl() {
  const i = this,
    { isLocked: e, params: t } = i,
    { slidesOffsetBefore: n } = t;
  if (n) {
    const s = i.slides.length - 1,
      o = i.slidesGrid[s] + i.slidesSizesGrid[s] + n * 2;
    i.isLocked = i.size > o;
  } else i.isLocked = i.snapGrid.length === 1;
  t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
    t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
    e && e !== i.isLocked && (i.isEnd = !1),
    e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
}
const $l = { checkOverflow: Rl },
  Ai = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Nl(i, e) {
  return function (n = {}) {
    const s = Object.keys(n)[0],
      o = n[s];
    if (typeof o != "object" || o === null) {
      ye(e, n);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
        i[s] === !0 &&
        (i[s] = { auto: !0 }),
      !(s in i && "enabled" in o))
    ) {
      ye(e, n);
      return;
    }
    i[s] === !0 && (i[s] = { enabled: !0 }),
      typeof i[s] == "object" && !("enabled" in i[s]) && (i[s].enabled = !0),
      i[s] || (i[s] = { enabled: !1 }),
      ye(e, n);
  };
}
const zt = {
    eventsEmitter: za,
    update: Ga,
    translate: Ja,
    transition: il,
    slide: cl,
    loop: pl,
    grabCursor: gl,
    events: Tl,
    breakpoints: Dl,
    checkOverflow: $l,
    classes: Ol,
    images: Il,
  },
  It = {};
class ue {
  constructor(...e) {
    let t, n;
    if (
      (e.length === 1 &&
      e[0].constructor &&
      Object.prototype.toString.call(e[0]).slice(8, -1) === "Object"
        ? (n = e[0])
        : ([t, n] = e),
      n || (n = {}),
      (n = ye({}, n)),
      t && !n.el && (n.el = t),
      n.el && $(n.el).length > 1)
    ) {
      const a = [];
      return (
        $(n.el).each((l) => {
          const u = ye({}, n, { el: l });
          a.push(new ue(u));
        }),
        a
      );
    }
    const s = this;
    (s.__swiper__ = !0),
      (s.support = gn()),
      (s.device = Aa({ userAgent: n.userAgent })),
      (s.browser = Pa()),
      (s.eventsListeners = {}),
      (s.eventsAnyListeners = []),
      (s.modules = [...s.__modules__]),
      n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules);
    const o = {};
    s.modules.forEach((a) => {
      a({
        swiper: s,
        extendParams: Nl(n, o),
        on: s.on.bind(s),
        once: s.once.bind(s),
        off: s.off.bind(s),
        emit: s.emit.bind(s),
      });
    });
    const r = ye({}, Ai, o);
    return (
      (s.params = ye({}, r, It, n)),
      (s.originalParams = ye({}, s.params)),
      (s.passedParams = ye({}, n)),
      s.params &&
        s.params.on &&
        Object.keys(s.params.on).forEach((a) => {
          s.on(a, s.params.on[a]);
        }),
      s.params && s.params.onAny && s.onAny(s.params.onAny),
      (s.$ = $),
      Object.assign(s, {
        enabled: s.params.enabled,
        el: t,
        classNames: [],
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return s.params.direction === "horizontal";
        },
        isVertical() {
          return s.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: s.params.allowSlideNext,
        allowSlidePrev: s.params.allowSlidePrev,
        touchEvents: (function () {
          const l = ["touchstart", "touchmove", "touchend", "touchcancel"],
            u = ["pointerdown", "pointermove", "pointerup"];
          return (
            (s.touchEventsTouch = {
              start: l[0],
              move: l[1],
              end: l[2],
              cancel: l[3],
            }),
            (s.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
            s.support.touch || !s.params.simulateTouch
              ? s.touchEventsTouch
              : s.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: s.params.focusableElements,
          lastClickTime: Oe(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: s.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      s.emit("_swiper"),
      s.params.init && s.init(),
      s
    );
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    !e.enabled ||
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, t) {
    const n = this;
    e = Math.min(Math.max(e, 0), 1);
    const s = n.minTranslate(),
      r = (n.maxTranslate() - s) * e + s;
    n.translateTo(r, typeof t > "u" ? 0 : t),
      n.updateActiveIndex(),
      n.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className
      .split(" ")
      .filter(
        (n) =>
          n.indexOf("swiper") === 0 ||
          n.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return e.className
      .split(" ")
      .filter(
        (n) =>
          n.indexOf("swiper-slide") === 0 ||
          n.indexOf(t.params.slideClass) === 0
      )
      .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.each((n) => {
      const s = e.getSlideClasses(n);
      t.push({ slideEl: n, classNames: s }), e.emit("_slideClass", n, s);
    }),
      e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e = "current", t = !1) {
    const n = this,
      {
        params: s,
        slides: o,
        slidesGrid: r,
        slidesSizesGrid: a,
        size: l,
        activeIndex: u,
      } = n;
    let c = 1;
    if (s.centeredSlides) {
      let d = o[u].swiperSlideSize,
        f;
      for (let p = u + 1; p < o.length; p += 1)
        o[p] &&
          !f &&
          ((d += o[p].swiperSlideSize), (c += 1), d > l && (f = !0));
      for (let p = u - 1; p >= 0; p -= 1)
        o[p] &&
          !f &&
          ((d += o[p].swiperSlideSize), (c += 1), d > l && (f = !0));
    } else if (e === "current")
      for (let d = u + 1; d < o.length; d += 1)
        (t ? r[d] + a[d] - r[u] < l : r[d] - r[u] < l) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) r[u] - r[d] < l && (c += 1);
    return c;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: t, params: n } = e;
    n.breakpoints && e.setBreakpoint(),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function s() {
      const r = e.rtlTranslate ? e.translate * -1 : e.translate,
        a = Math.min(Math.max(r, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let o;
    e.params.freeMode && e.params.freeMode.enabled
      ? (s(), e.params.autoHeight && e.updateAutoHeight())
      : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) &&
        e.isEnd &&
        !e.params.centeredSlides
          ? (o = e.slideTo(e.slides.length - 1, 0, !1, !0))
          : (o = e.slideTo(e.activeIndex, 0, !1, !0)),
        o || s()),
      n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
      e.emit("update");
  }
  changeDirection(e, t = !0) {
    const n = this,
      s = n.params.direction;
    return (
      e || (e = s === "horizontal" ? "vertical" : "horizontal"),
      e === s ||
        (e !== "horizontal" && e !== "vertical") ||
        (n.$el
          .removeClass(`${n.params.containerModifierClass}${s}`)
          .addClass(`${n.params.containerModifierClass}${e}`),
        n.emitContainerClasses(),
        (n.params.direction = e),
        n.slides.each((o) => {
          e === "vertical" ? (o.style.width = "") : (o.style.height = "");
        }),
        n.emit("changeDirection"),
        t && n.update()),
      n
    );
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    const n = $(e || t.params.el);
    if (((e = n[0]), !e)) return !1;
    e.swiper = t;
    const s = () =>
      `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let r = (() => {
      if (e && e.shadowRoot && e.shadowRoot.querySelector) {
        const a = $(e.shadowRoot.querySelector(s()));
        return (a.children = (l) => n.children(l)), a;
      }
      return n.children(s());
    })();
    if (r.length === 0 && t.params.createElements) {
      const l = be().createElement("div");
      (r = $(l)),
        (l.className = t.params.wrapperClass),
        n.append(l),
        n.children(`.${t.params.slideClass}`).each((u) => {
          r.append(u);
        });
    }
    return (
      Object.assign(t, {
        $el: n,
        el: e,
        $wrapperEl: r,
        wrapperEl: r[0],
        mounted: !0,
        rtl: e.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl",
        rtlTranslate:
          t.params.direction === "horizontal" &&
          (e.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl"),
        wrongRTL: r.css("display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const t = this;
    return (
      t.initialized ||
        t.mount(e) === !1 ||
        (t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.params.loop && t.loopCreate(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.preloadImages && t.preloadImages(),
        t.params.loop
          ? t.slideTo(
              t.params.initialSlide + t.loopedSlides,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.attachEvents(),
        (t.initialized = !0),
        t.emit("init"),
        t.emit("afterInit")),
      t
    );
  }
  destroy(e = !0, t = !0) {
    const n = this,
      { params: s, $el: o, $wrapperEl: r, slides: a } = n;
    return (
      typeof n.params > "u" ||
        n.destroyed ||
        (n.emit("beforeDestroy"),
        (n.initialized = !1),
        n.detachEvents(),
        s.loop && n.loopDestroy(),
        t &&
          (n.removeClasses(),
          o.removeAttr("style"),
          r.removeAttr("style"),
          a &&
            a.length &&
            a
              .removeClass(
                [
                  s.slideVisibleClass,
                  s.slideActiveClass,
                  s.slideNextClass,
                  s.slidePrevClass,
                ].join(" ")
              )
              .removeAttr("style")
              .removeAttr("data-swiper-slide-index")),
        n.emit("destroy"),
        Object.keys(n.eventsListeners).forEach((l) => {
          n.off(l);
        }),
        e !== !1 && ((n.$el[0].swiper = null), Fa(n)),
        (n.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    ye(It, e);
  }
  static get extendedDefaults() {
    return It;
  }
  static get defaults() {
    return Ai;
  }
  static installModule(e) {
    ue.prototype.__modules__ || (ue.prototype.__modules__ = []);
    const t = ue.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((t) => ue.installModule(t)), ue)
      : (ue.installModule(e), ue);
  }
}
Object.keys(zt).forEach((i) => {
  Object.keys(zt[i]).forEach((e) => {
    ue.prototype[e] = zt[i][e];
  });
});
ue.use([Oa, La]);
function bn({ swiper: i, extendParams: e, on: t, emit: n }) {
  const s = re();
  e({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
    },
  }),
    (i.mousewheel = { enabled: !1 });
  let o,
    r = Oe(),
    a;
  const l = [];
  function u(C) {
    let w = 0,
      F = 0,
      k = 0,
      T = 0;
    return (
      "detail" in C && (F = C.detail),
      "wheelDelta" in C && (F = -C.wheelDelta / 120),
      "wheelDeltaY" in C && (F = -C.wheelDeltaY / 120),
      "wheelDeltaX" in C && (w = -C.wheelDeltaX / 120),
      "axis" in C && C.axis === C.HORIZONTAL_AXIS && ((w = F), (F = 0)),
      (k = w * 10),
      (T = F * 10),
      "deltaY" in C && (T = C.deltaY),
      "deltaX" in C && (k = C.deltaX),
      C.shiftKey && !k && ((k = T), (T = 0)),
      (k || T) &&
        C.deltaMode &&
        (C.deltaMode === 1 ? ((k *= 40), (T *= 40)) : ((k *= 800), (T *= 800))),
      k && !w && (w = k < 1 ? -1 : 1),
      T && !F && (F = T < 1 ? -1 : 1),
      { spinX: w, spinY: F, pixelX: k, pixelY: T }
    );
  }
  function c() {
    !i.enabled || (i.mouseEntered = !0);
  }
  function d() {
    !i.enabled || (i.mouseEntered = !1);
  }
  function f(C) {
    return (i.params.mousewheel.thresholdDelta &&
      C.delta < i.params.mousewheel.thresholdDelta) ||
      (i.params.mousewheel.thresholdTime &&
        Oe() - r < i.params.mousewheel.thresholdTime)
      ? !1
      : C.delta >= 6 && Oe() - r < 60
      ? !0
      : (C.direction < 0
          ? (!i.isEnd || i.params.loop) &&
            !i.animating &&
            (i.slideNext(), n("scroll", C.raw))
          : (!i.isBeginning || i.params.loop) &&
            !i.animating &&
            (i.slidePrev(), n("scroll", C.raw)),
        (r = new s.Date().getTime()),
        !1);
  }
  function p(C) {
    const b = i.params.mousewheel;
    if (C.direction < 0) {
      if (i.isEnd && !i.params.loop && b.releaseOnEdges) return !0;
    } else if (i.isBeginning && !i.params.loop && b.releaseOnEdges) return !0;
    return !1;
  }
  function h(C) {
    let b = C,
      _ = !0;
    if (!i.enabled) return;
    const E = i.params.mousewheel;
    i.params.cssMode && b.preventDefault();
    let w = i.$el;
    if (
      (i.params.mousewheel.eventsTarget !== "container" &&
        (w = $(i.params.mousewheel.eventsTarget)),
      !i.mouseEntered && !w[0].contains(b.target) && !E.releaseOnEdges)
    )
      return !0;
    b.originalEvent && (b = b.originalEvent);
    let F = 0;
    const k = i.rtlTranslate ? -1 : 1,
      T = u(b);
    if (E.forceToAxis)
      if (i.isHorizontal())
        if (Math.abs(T.pixelX) > Math.abs(T.pixelY)) F = -T.pixelX * k;
        else return !0;
      else if (Math.abs(T.pixelY) > Math.abs(T.pixelX)) F = -T.pixelY;
      else return !0;
    else
      F = Math.abs(T.pixelX) > Math.abs(T.pixelY) ? -T.pixelX * k : -T.pixelY;
    if (F === 0) return !0;
    E.invert && (F = -F);
    let B = i.getTranslate() + F * E.sensitivity;
    if (
      (B >= i.minTranslate() && (B = i.minTranslate()),
      B <= i.maxTranslate() && (B = i.maxTranslate()),
      (_ = i.params.loop
        ? !0
        : !(B === i.minTranslate() || B === i.maxTranslate())),
      _ && i.params.nested && b.stopPropagation(),
      !i.params.freeMode || !i.params.freeMode.enabled)
    ) {
      const D = {
        time: Oe(),
        delta: Math.abs(F),
        direction: Math.sign(F),
        raw: C,
      };
      l.length >= 2 && l.shift();
      const z = l.length ? l[l.length - 1] : void 0;
      if (
        (l.push(D),
        z
          ? (D.direction !== z.direction ||
              D.delta > z.delta ||
              D.time > z.time + 150) &&
            f(D)
          : f(D),
        p(D))
      )
        return !0;
    } else {
      const D = { time: Oe(), delta: Math.abs(F), direction: Math.sign(F) },
        z =
          a &&
          D.time < a.time + 500 &&
          D.delta <= a.delta &&
          D.direction === a.direction;
      if (!z) {
        (a = void 0), i.params.loop && i.loopFix();
        let V = i.getTranslate() + F * E.sensitivity;
        const U = i.isBeginning,
          S = i.isEnd;
        if (
          (V >= i.minTranslate() && (V = i.minTranslate()),
          V <= i.maxTranslate() && (V = i.maxTranslate()),
          i.setTransition(0),
          i.setTranslate(V),
          i.updateProgress(),
          i.updateActiveIndex(),
          i.updateSlidesClasses(),
          ((!U && i.isBeginning) || (!S && i.isEnd)) && i.updateSlidesClasses(),
          i.params.freeMode.sticky)
        ) {
          clearTimeout(o), (o = void 0), l.length >= 15 && l.shift();
          const A = l.length ? l[l.length - 1] : void 0,
            M = l[0];
          if (
            (l.push(D), A && (D.delta > A.delta || D.direction !== A.direction))
          )
            l.splice(0);
          else if (
            l.length >= 15 &&
            D.time - M.time < 500 &&
            M.delta - D.delta >= 1 &&
            D.delta <= 6
          ) {
            const O = F > 0 ? 0.8 : 0.2;
            (a = D),
              l.splice(0),
              (o = dt(() => {
                i.slideToClosest(i.params.speed, !0, void 0, O);
              }, 0));
          }
          o ||
            (o = dt(() => {
              (a = D),
                l.splice(0),
                i.slideToClosest(i.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if (
          (z || n("scroll", b),
          i.params.autoplay &&
            i.params.autoplayDisableOnInteraction &&
            i.autoplay.stop(),
          V === i.minTranslate() || V === i.maxTranslate())
        )
          return !0;
      }
    }
    return b.preventDefault ? b.preventDefault() : (b.returnValue = !1), !1;
  }
  function g(C) {
    let b = i.$el;
    i.params.mousewheel.eventsTarget !== "container" &&
      (b = $(i.params.mousewheel.eventsTarget)),
      b[C]("mouseenter", c),
      b[C]("mouseleave", d),
      b[C]("wheel", h);
  }
  function y() {
    return i.params.cssMode
      ? (i.wrapperEl.removeEventListener("wheel", h), !0)
      : i.mousewheel.enabled
      ? !1
      : (g("on"), (i.mousewheel.enabled = !0), !0);
  }
  function x() {
    return i.params.cssMode
      ? (i.wrapperEl.addEventListener(event, h), !0)
      : i.mousewheel.enabled
      ? (g("off"), (i.mousewheel.enabled = !1), !0)
      : !1;
  }
  t("init", () => {
    !i.params.mousewheel.enabled && i.params.cssMode && x(),
      i.params.mousewheel.enabled && y();
  }),
    t("destroy", () => {
      i.params.cssMode && y(), i.mousewheel.enabled && x();
    }),
    Object.assign(i.mousewheel, { enable: y, disable: x });
}
function Ze(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    i.constructor &&
    Object.prototype.toString.call(i).slice(8, -1) === "Object"
  );
}
function je(i, e) {
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((n) => t.indexOf(n) < 0)
    .forEach((n) => {
      typeof i[n] > "u"
        ? (i[n] = e[n])
        : Ze(e[n]) && Ze(i[n]) && Object.keys(e[n]).length > 0
        ? e[n].__swiper__
          ? (i[n] = e[n])
          : je(i[n], e[n])
        : (i[n] = e[n]);
    });
}
function _n(i = {}) {
  return (
    i.navigation &&
    typeof i.navigation.nextEl > "u" &&
    typeof i.navigation.prevEl > "u"
  );
}
function wn(i = {}) {
  return i.pagination && typeof i.pagination.el > "u";
}
function En(i = {}) {
  return i.scrollbar && typeof i.scrollbar.el > "u";
}
function xn(i = "") {
  const e = i
      .split(" ")
      .map((n) => n.trim())
      .filter((n) => !!n),
    t = [];
  return (
    e.forEach((n) => {
      t.indexOf(n) < 0 && t.push(n);
    }),
    t.join(" ")
  );
}
const Fn = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
];
function Mi(i = {}) {
  const e = { on: {} },
    t = {};
  je(e, ue.defaults),
    je(e, ue.extendedDefaults),
    (e._emitClasses = !0),
    (e.init = !1);
  const n = {},
    s = Fn.map((r) => r.replace(/_/, "")),
    o = Object.assign({}, i);
  return (
    Object.keys(o).forEach((r) => {
      typeof i[r] > "u" ||
        (s.indexOf(r) >= 0
          ? Ze(i[r])
            ? ((e[r] = {}), (t[r] = {}), je(e[r], i[r]), je(t[r], i[r]))
            : ((e[r] = i[r]), (t[r] = i[r]))
          : r.search(/on[A-Z]/) === 0 && typeof i[r] == "function"
          ? (e.on[`${r[2].toLowerCase()}${r.substr(3)}`] = i[r])
          : (n[r] = i[r]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((r) => {
      e[r] === !0 && (e[r] = {}), e[r] === !1 && delete e[r];
    }),
    { params: e, passedParams: t, rest: n }
  );
}
function Hl(i) {
  return new ue(i);
}
function Vl(
  { el: i, nextEl: e, prevEl: t, paginationEl: n, scrollbarEl: s, swiper: o },
  r
) {
  _n(r) &&
    e &&
    t &&
    ((o.params.navigation.nextEl = e),
    (o.originalParams.navigation.nextEl = e),
    (o.params.navigation.prevEl = t),
    (o.originalParams.navigation.prevEl = t)),
    wn(r) &&
      n &&
      ((o.params.pagination.el = n), (o.originalParams.pagination.el = n)),
    En(r) &&
      s &&
      ((o.params.scrollbar.el = s), (o.originalParams.scrollbar.el = s)),
    o.init(i);
}
function Sn(i, e) {
  let t = e.slidesPerView;
  if (e.breakpoints) {
    const s = ue.prototype.getBreakpoint(e.breakpoints),
      o = s in e.breakpoints ? e.breakpoints[s] : void 0;
    o && o.slidesPerView && (t = o.slidesPerView);
  }
  let n = Math.ceil(parseFloat(e.loopedSlides || t, 10));
  return (n += e.loopAdditionalSlides), n > i.length && (n = i.length), n;
}
function jl(i, e, t) {
  const n = e.map(
    (l, u) => (
      l.props || (l.props = {}),
      (l.props.swiperRef = i),
      (l.props["data-swiper-slide-index"] = u),
      l
    )
  );
  function s(l, u, c) {
    return (
      l.props || (l.props = {}),
      Te(
        l.type,
        {
          ...l.props,
          key: `${l.key}-duplicate-${u}-${c}`,
          class: `${l.props.className || ""} ${t.slideDuplicateClass} ${
            l.props.class || ""
          }`,
        },
        l.children
      )
    );
  }
  if (t.loopFillGroupWithBlank) {
    const l = t.slidesPerGroup - (n.length % t.slidesPerGroup);
    if (l !== t.slidesPerGroup)
      for (let u = 0; u < l; u += 1) {
        const c = Te("div", { class: `${t.slideClass} ${t.slideBlankClass}` });
        n.push(c);
      }
  }
  t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = n.length);
  const o = Sn(n, t),
    r = [],
    a = [];
  return (
    n.forEach((l, u) => {
      u < o && a.push(s(l, u, "prepend")),
        u < n.length && u >= n.length - o && r.push(s(l, u, "append"));
    }),
    i.value && (i.value.loopedSlides = o),
    [...r, ...n, ...a]
  );
}
function ql(i, e, t, n) {
  const s = [];
  if (!e) return s;
  const o = (u) => {
      s.indexOf(u) < 0 && s.push(u);
    },
    r = n.map((u) => u.props && u.props.key),
    a = t.map((u) => u.props && u.props.key);
  return (
    r.join("") !== a.join("") && s.push("children"),
    n.length !== t.length && s.push("children"),
    Fn.filter((u) => u[0] === "_")
      .map((u) => u.replace(/_/, ""))
      .forEach((u) => {
        if (u in i && u in e)
          if (Ze(i[u]) && Ze(e[u])) {
            const c = Object.keys(i[u]),
              d = Object.keys(e[u]);
            c.length !== d.length
              ? o(u)
              : (c.forEach((f) => {
                  i[u][f] !== e[u][f] && o(u);
                }),
                d.forEach((f) => {
                  i[u][f] !== e[u][f] && o(u);
                }));
          } else i[u] !== e[u] && o(u);
      }),
    s
  );
}
function Rt(i = {}, e, t) {
  const n = [],
    s = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    o = (r, a) => {
      !Array.isArray(r) ||
        r.forEach((l) => {
          const u = typeof l.type == "symbol";
          a === "default" && (a = "container-end"),
            u && l.children
              ? o(l.children, "default")
              : l.type &&
                (l.type.name === "SwiperSlide" ||
                  l.type.name === "AsyncComponentWrapper")
              ? n.push(l)
              : s[a] && s[a].push(l);
        });
    };
  return (
    Object.keys(i).forEach((r) => {
      const a = i[r]();
      o(a, r);
    }),
    (t.value = e.value),
    (e.value = n),
    { slides: n, slots: s }
  );
}
function Ul({
  swiper: i,
  slides: e,
  passedParams: t,
  changedParams: n,
  nextEl: s,
  prevEl: o,
  paginationEl: r,
  scrollbarEl: a,
}) {
  const l = n.filter((E) => E !== "children" && E !== "direction"),
    {
      params: u,
      pagination: c,
      navigation: d,
      scrollbar: f,
      virtual: p,
      thumbs: h,
    } = i;
  let g, y, x, C, b;
  n.includes("thumbs") &&
    t.thumbs &&
    t.thumbs.swiper &&
    u.thumbs &&
    !u.thumbs.swiper &&
    (g = !0),
    n.includes("controller") &&
      t.controller &&
      t.controller.control &&
      u.controller &&
      !u.controller.control &&
      (y = !0),
    n.includes("pagination") &&
      t.pagination &&
      (t.pagination.el || r) &&
      (u.pagination || u.pagination === !1) &&
      c &&
      !c.el &&
      (x = !0),
    n.includes("scrollbar") &&
      t.scrollbar &&
      (t.scrollbar.el || a) &&
      (u.scrollbar || u.scrollbar === !1) &&
      f &&
      !f.el &&
      (C = !0),
    n.includes("navigation") &&
      t.navigation &&
      (t.navigation.prevEl || o) &&
      (t.navigation.nextEl || s) &&
      (u.navigation || u.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (b = !0);
  const _ = (E) => {
    !i[E] ||
      (i[E].destroy(),
      E === "navigation"
        ? ((u[E].prevEl = void 0),
          (u[E].nextEl = void 0),
          (i[E].prevEl = void 0),
          (i[E].nextEl = void 0))
        : ((u[E].el = void 0), (i[E].el = void 0)));
  };
  l.forEach((E) => {
    if (Ze(u[E]) && Ze(t[E])) je(u[E], t[E]);
    else {
      const w = t[E];
      (w === !0 || w === !1) &&
      (E === "navigation" || E === "pagination" || E === "scrollbar")
        ? w === !1 && _(E)
        : (u[E] = t[E]);
    }
  }),
    n.includes("children") && p && u.virtual.enabled
      ? ((p.slides = e), p.update(!0))
      : n.includes("children") &&
        i.lazy &&
        i.params.lazy.enabled &&
        i.lazy.load(),
    g && h.init() && h.update(!0),
    y && (i.controller.control = u.controller.control),
    x && (r && (u.pagination.el = r), c.init(), c.render(), c.update()),
    C &&
      (a && (u.scrollbar.el = a), f.init(), f.updateSize(), f.setTranslate()),
    b &&
      (s && (u.navigation.nextEl = s),
      o && (u.navigation.prevEl = o),
      d.init(),
      d.update()),
    n.includes("allowSlideNext") && (i.allowSlideNext = t.allowSlideNext),
    n.includes("allowSlidePrev") && (i.allowSlidePrev = t.allowSlidePrev),
    n.includes("direction") && i.changeDirection(t.direction, !1),
    i.update();
}
function Gl(i) {
  !i ||
    i.destroyed ||
    !i.params.virtual ||
    (i.params.virtual && !i.params.virtual.enabled) ||
    (i.updateSlides(),
    i.updateProgress(),
    i.updateSlidesClasses(),
    i.lazy && i.params.lazy.enabled && i.lazy.load(),
    i.parallax &&
      i.params.parallax &&
      i.params.parallax.enabled &&
      i.parallax.setTranslate());
}
function Wl(i, e, t) {
  if (!t) return null;
  const n = i.value.isHorizontal()
    ? { [i.value.rtlTranslate ? "right" : "left"]: `${t.offset}px` }
    : { top: `${t.offset}px` };
  return e
    .filter((s, o) => o >= t.from && o <= t.to)
    .map(
      (s) => (
        s.props || (s.props = {}),
        s.props.style || (s.props.style = {}),
        (s.props.swiperRef = i),
        (s.props.style = n),
        Te(s.type, { ...s.props }, s.children)
      )
    );
}
const Tn = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: Number, default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      preloadImages: { type: Boolean, default: void 0 },
      updateOnImagesReady: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopAdditionalSlides: { type: Number, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopFillGroupWithBlank: { type: Boolean, default: void 0 },
      loopPreventsSlide: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideDuplicateActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideDuplicateClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slideDuplicateNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      slideDuplicatePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      lazy: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "imagesReady",
      "init",
      "keyPress",
      "lazyImageLoad",
      "lazyImageReady",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "zoomChange",
    ],
    setup(i, { slots: e, emit: t }) {
      const { tag: n, wrapperTag: s } = i,
        o = L("swiper"),
        r = L(null),
        a = L(!1),
        l = L(!1),
        u = L(null),
        c = L(null),
        d = L(null),
        f = { value: [] },
        p = { value: [] },
        h = L(null),
        g = L(null),
        y = L(null),
        x = L(null),
        { params: C, passedParams: b } = Mi(i);
      Rt(e, f, p), (d.value = b), (p.value = f.value);
      const _ = () => {
        Rt(e, f, p), (a.value = !0);
      };
      if (
        ((C.onAny = (w, ...F) => {
          t(w, ...F);
        }),
        Object.assign(C.on, {
          _beforeBreakpoint: _,
          _containerClasses(w, F) {
            o.value = F;
          },
        }),
        (c.value = Hl(C)),
        (c.value.loopCreate = () => {}),
        (c.value.loopDestroy = () => {}),
        C.loop && (c.value.loopedSlides = Sn(f.value, C)),
        c.value.virtual && c.value.params.virtual.enabled)
      ) {
        c.value.virtual.slides = f.value;
        const w = {
          cache: !1,
          slides: f.value,
          renderExternal: (F) => {
            r.value = F;
          },
          renderExternalUpdate: !1,
        };
        je(c.value.params.virtual, w), je(c.value.originalParams.virtual, w);
      }
      an(() => {
        !l.value && c.value && (c.value.emitSlidesClasses(), (l.value = !0));
        const { passedParams: w } = Mi(i),
          F = ql(w, d.value, f.value, p.value);
        (d.value = w),
          (F.length || a.value) &&
            c.value &&
            !c.value.destroyed &&
            Ul({
              swiper: c.value,
              slides: f.value,
              passedParams: w,
              changedParams: F,
              nextEl: h.value,
              prevEl: g.value,
              scrollbarEl: x.value,
              paginationEl: y.value,
            }),
          (a.value = !1);
      }),
        we(r, () => {
          ln(() => {
            Gl(c.value);
          });
        }),
        ke(() => {
          !u.value ||
            (Vl(
              {
                el: u.value,
                nextEl: h.value,
                prevEl: g.value,
                paginationEl: y.value,
                scrollbarEl: x.value,
                swiper: c.value,
              },
              C
            ),
            t("swiper", c.value));
        }),
        Tt(() => {
          c.value && !c.value.destroyed && c.value.destroy(!0, !1);
        });
      function E(w) {
        return C.virtual
          ? Wl(c, w, r.value)
          : !C.loop || (c.value && c.value.destroyed)
          ? (w.forEach((F) => {
              F.props || (F.props = {}), (F.props.swiperRef = c);
            }),
            w)
          : jl(c, w, C);
      }
      return () => {
        const { slides: w, slots: F } = Rt(e, f, p);
        return Te(n, { ref: u, class: xn(o.value) }, [
          F["container-start"],
          _n(i) && [
            Te("div", { ref: g, class: "swiper-button-prev" }),
            Te("div", { ref: h, class: "swiper-button-next" }),
          ],
          En(i) && Te("div", { ref: x, class: "swiper-scrollbar" }),
          wn(i) && Te("div", { ref: y, class: "swiper-pagination" }),
          Te(s, { class: "swiper-wrapper" }, [
            F["wrapper-start"],
            E(w),
            F["wrapper-end"],
          ]),
          F["container-end"],
        ]);
      };
    },
  },
  Qe = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      zoom: { type: Boolean, default: void 0 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(i, { slots: e }) {
      let t = !1;
      const { swiperRef: n } = i,
        s = L(null),
        o = L("swiper-slide");
      function r(l, u, c) {
        u === s.value && (o.value = c);
      }
      ke(() => {
        !n.value || (n.value.on("_slideClass", r), (t = !0));
      }),
        bs(() => {
          t || !n || !n.value || (n.value.on("_slideClass", r), (t = !0));
        }),
        an(() => {
          !s.value ||
            !n ||
            !n.value ||
            (n.value.destroyed &&
              o.value !== "swiper-slide" &&
              (o.value = "swiper-slide"));
        }),
        Tt(() => {
          !n || !n.value || n.value.off("_slideClass", r);
        });
      const a = Le(() => ({
        isActive:
          o.value.indexOf("swiper-slide-active") >= 0 ||
          o.value.indexOf("swiper-slide-duplicate-active") >= 0,
        isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
        isDuplicate: o.value.indexOf("swiper-slide-duplicate") >= 0,
        isPrev:
          o.value.indexOf("swiper-slide-prev") >= 0 ||
          o.value.indexOf("swiper-slide-duplicate-prev") >= 0,
        isNext:
          o.value.indexOf("swiper-slide-next") >= 0 ||
          o.value.indexOf("swiper-slide-duplicate-next") >= 0,
      }));
      return () =>
        Te(
          i.tag,
          {
            class: xn(`${o.value}`),
            ref: s,
            "data-swiper-slide-index": i.virtualIndex,
          },
          i.zoom
            ? Te(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof i.zoom == "number" ? i.zoom : void 0,
                },
                e.default && e.default(a.value)
              )
            : e.default && e.default(a.value)
        );
    },
  };
const hi = (i) => (Ue("data-v-0b190a95"), (i = i()), Ge(), i),
  Xl = { class: "sctionDisplay" },
  Yl = { class: "staffDisplay" },
  Zl = { class: "staffDisplayLeft" },
  Kl = hi(() => m("div", { class: "staffHeader" }, "02 - STAFF", -1)),
  Jl = { class: "ListContainer" },
  Ql = { class: "staffIdex", "data-cursor": "pointer" },
  eu = { class: "staffCareer", "data-cursor": "pointer" },
  tu = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 30 30",
  },
  iu = ["xlink:href"],
  nu = { class: "staffName", "data-cursor": "pointer" },
  su = { class: "staffFooter" },
  ou = { class: "staffDetailRights" },
  ru = { class: "particle" },
  au = { class: "staffDetailWrapper" },
  lu = { class: "staffContent" },
  uu = { class: "staffInfo" },
  cu = { class: "staffBack" },
  du = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 480 50",
  },
  fu = { x: "0", y: "50", "font-size": "67", fill: "none", stroke: "#333333" },
  hu = { class: "staffTop" },
  pu = { class: "staffName" },
  vu = { class: "staffBottom" },
  mu = { class: "staffNameEn" },
  gu = { class: "staffNameCV" },
  yu = hi(() => m("span", null, "GZHU.", -1)),
  Cu = { class: "staffCVName" },
  bu = hi(() =>
    m(
      "div",
      { class: "staffCVButton" },
      [
        m(
          "svg",
          {
            class: "staffDetailInfoCvButtonIcon",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            viewBox: "0 0 36 20",
          },
          [
            m("rect", {
              x: "27",
              y: "8 ",
              width: "2",
              height: "4",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
            m("rect", {
              x: "23.5",
              y: "6 ",
              width: "2",
              height: "8",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
            m("rect", {
              x: "20",
              y: "7",
              width: "2",
              height: "6",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
            m("rect", {
              x: "16.5",
              y: "5",
              width: "2",
              height: "10",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
            m("rect", {
              x: "13",
              y: "2",
              width: "2",
              height: "16",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
            m("rect", {
              x: "9.5",
              y: "5",
              width: "2",
              height: "10",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
            m("rect", {
              x: "6",
              y: "7",
              width: "2",
              height: "6",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  _u = { class: "staffDesc" },
  wu = { class: "staffimgWapper" },
  Eu = { class: "staffimg" },
  xu = ["src"],
  Fu = _s(
    '<svg data-v-0b190a95><g data-v-0b190a95><path id="staff-career-icon-special" d="M29.116,28.057 C28.428,27.707 27.740,27.356 27.049,27.010 C26.982,26.976 26.899,26.956 26.823,26.956 C19.138,26.953 11.452,26.953 3.767,26.956 C3.687,26.956 3.599,26.978 3.528,27.014 C2.687,27.437 1.849,27.864 1.010,28.290 C0.974,28.308 0.936,28.322 0.899,28.338 C0.895,28.329 0.890,28.320 0.885,28.311 C1.213,28.040 1.540,27.768 1.868,27.496 C2.320,27.123 2.773,26.752 3.220,26.374 C3.293,26.314 3.351,26.228 3.394,26.142 C4.493,23.978 5.590,21.813 6.682,19.646 C6.739,19.534 6.800,19.493 6.927,19.494 C7.658,19.501 8.388,19.498 9.119,19.498 C9.168,19.498 9.218,19.498 9.299,19.498 C8.461,21.152 7.637,22.780 6.803,24.428 C12.449,24.428 18.076,24.428 23.725,24.428 C23.394,23.771 23.068,23.126 22.730,22.458 C22.799,22.454 22.847,22.449 22.895,22.449 C23.635,22.448 24.375,22.451 25.115,22.446 C25.223,22.445 25.280,22.476 25.330,22.576 C25.913,23.736 26.499,24.894 27.089,26.049 C27.142,26.154 27.221,26.255 27.311,26.330 C28.069,26.965 28.833,27.593 29.594,28.223 C29.636,28.257 29.676,28.292 29.699,28.352 C29.505,28.254 29.311,28.155 29.116,28.057 ZM16.208,19.791 C16.588,19.038 16.971,18.286 17.348,17.532 C17.393,17.441 17.449,17.417 17.544,17.417 C18.359,17.421 19.174,17.419 19.989,17.419 C20.040,17.419 20.091,17.419 20.177,17.419 C18.538,14.184 16.911,10.970 15.265,7.719 C14.119,9.983 12.989,12.214 11.845,14.473 C13.176,14.473 14.479,14.473 15.811,14.473 C15.666,14.762 15.535,15.024 15.402,15.286 C15.135,15.813 14.866,16.338 14.603,16.866 C14.559,16.954 14.509,16.986 14.410,16.986 C12.335,16.983 10.261,16.984 8.186,16.983 C8.145,16.983 8.105,16.978 8.042,16.974 C8.158,16.743 8.266,16.527 8.375,16.311 C10.282,12.545 12.189,8.778 14.096,5.012 C14.314,4.581 14.518,4.142 14.756,3.723 C14.917,3.439 14.970,3.142 14.997,2.827 C15.072,1.944 15.157,1.062 15.238,0.180 C15.241,0.141 15.251,0.102 15.282,0.065 C15.310,0.370 15.338,0.674 15.367,0.979 C15.437,1.745 15.508,2.510 15.581,3.275 C15.586,3.325 15.604,3.376 15.627,3.420 C17.997,8.103 20.368,12.784 22.739,17.466 C23.131,18.239 23.522,19.013 23.913,19.787 C23.934,19.827 23.952,19.868 23.978,19.923 C21.364,19.923 18.771,19.923 16.155,19.923 C16.175,19.871 16.188,19.829 16.208,19.791 Z" data-v-0b190a95></path><path id="staff-career-icon-caster" d="M28.239,29.879 C27.943,29.646 27.624,29.395 27.305,29.143 C27.257,29.106 27.211,29.065 27.161,29.031 C27.034,28.946 26.940,28.853 26.984,28.676 C26.994,28.636 26.941,28.568 26.902,28.529 C25.817,27.440 24.731,26.353 23.645,25.265 C22.194,23.813 20.745,22.361 19.293,20.911 C19.224,20.842 19.145,20.782 19.062,20.731 C18.535,20.407 18.006,20.088 17.478,19.766 C17.427,19.735 17.376,19.700 17.333,19.658 C16.888,19.215 16.445,18.770 16.001,18.326 C15.985,18.310 15.971,18.291 15.932,18.244 C16.059,18.136 16.177,18.036 16.307,17.925 C16.239,17.855 16.193,17.805 16.145,17.757 C13.728,15.337 11.311,12.916 8.893,10.498 C8.822,10.427 8.789,10.357 8.789,10.254 C8.793,9.147 8.792,8.040 8.792,6.933 C8.792,6.884 8.792,6.836 8.792,6.755 C8.849,6.807 8.881,6.832 8.909,6.861 C9.353,7.305 9.796,7.750 10.242,8.192 C10.312,8.261 10.336,8.332 10.335,8.427 C10.331,8.887 10.330,9.346 10.337,9.806 C10.338,9.872 10.369,9.955 10.415,10.001 C12.683,12.278 14.955,14.552 17.227,16.825 C17.246,16.845 17.268,16.863 17.328,16.916 C17.424,16.784 17.520,16.653 17.620,16.517 C17.700,16.591 17.734,16.621 17.767,16.653 C18.184,17.070 18.602,17.487 19.018,17.907 C19.073,17.963 19.123,18.026 19.164,18.093 C19.491,18.629 19.815,19.168 20.142,19.703 C20.183,19.771 20.233,19.834 20.289,19.890 C22.821,22.427 25.355,24.962 27.886,27.500 C27.964,27.579 28.036,27.606 28.145,27.583 C28.202,27.572 28.295,27.588 28.328,27.628 C28.656,28.031 28.975,28.442 29.290,28.843 C28.940,29.188 28.595,29.528 28.239,29.879 ZM15.000,0.775 C13.957,0.865 12.913,0.951 11.870,1.042 C10.961,1.121 10.053,1.205 9.145,1.285 C8.824,1.313 8.503,1.338 8.155,1.366 C8.483,2.422 8.805,3.459 9.139,4.532 C9.085,4.494 9.059,4.481 9.040,4.462 C7.725,3.147 6.411,1.832 5.098,0.516 C5.078,0.497 5.064,0.472 5.047,0.450 C9.513,0.450 13.979,0.450 18.446,0.450 C18.387,0.463 18.330,0.483 18.271,0.488 C17.181,0.585 16.091,0.681 15.000,0.775 ZM4.617,7.946 C4.542,7.945 4.449,7.911 4.397,7.859 C3.869,7.341 3.347,6.816 2.827,6.289 C2.785,6.247 2.743,6.181 2.743,6.125 C2.738,5.230 2.739,4.334 2.740,3.439 C2.740,3.420 2.744,3.402 2.749,3.369 C2.799,3.366 2.848,3.361 2.898,3.361 C3.750,3.360 4.602,3.358 5.454,3.364 C5.527,3.365 5.619,3.403 5.671,3.455 C6.196,3.970 6.715,4.491 7.231,5.015 C7.279,5.063 7.322,5.141 7.322,5.205 C7.328,6.082 7.326,6.959 7.326,7.836 C7.326,7.867 7.319,7.899 7.314,7.942 C7.259,7.945 7.209,7.949 7.158,7.949 C6.311,7.950 5.464,7.952 4.617,7.946 ZM1.965,2.968 C1.914,3.021 1.874,3.111 1.873,3.184 C1.868,4.356 1.868,5.527 1.873,6.699 C1.874,6.773 1.911,6.865 1.962,6.917 C2.544,7.508 3.130,8.094 3.721,8.675 C3.773,8.727 3.866,8.762 3.940,8.763 C5.189,8.768 6.439,8.766 7.688,8.766 C7.748,8.766 7.808,8.766 7.876,8.766 C7.876,9.222 7.876,9.661 7.876,10.115 C7.826,10.117 7.776,10.122 7.727,10.122 C6.276,10.122 4.825,10.121 3.374,10.124 C3.276,10.124 3.210,10.092 3.142,10.025 C2.300,9.178 1.456,8.333 0.610,7.490 C0.541,7.421 0.515,7.352 0.515,7.255 C0.518,5.713 0.516,4.171 0.520,2.629 C0.520,2.561 0.543,2.475 0.587,2.430 C1.036,1.971 1.491,1.519 1.945,1.065 C1.958,1.052 1.973,1.042 1.993,1.026 C2.308,1.346 2.617,1.659 2.935,1.982 C2.916,2.003 2.888,2.038 2.856,2.070 C2.558,2.368 2.257,2.664 1.965,2.968 ZM4.350,13.304 C3.315,12.981 2.281,12.659 1.226,12.331 C1.211,12.455 1.194,12.564 1.184,12.673 C1.095,13.719 1.008,14.765 0.917,15.810 C0.838,16.716 0.754,17.621 0.675,18.526 C0.585,19.572 0.498,20.617 0.409,21.663 C0.385,21.943 0.361,22.223 0.335,22.503 C0.331,22.544 0.312,22.582 0.300,22.622 C0.300,18.157 0.300,13.693 0.300,9.229 C0.330,9.249 0.364,9.265 0.389,9.290 C1.697,10.598 3.004,11.907 4.312,13.216 C4.330,13.234 4.347,13.255 4.350,13.304 Z" data-v-0b190a95></path><path id="staff-career-icon-sniper" d="M28.348,1.103 C28.349,4.101 28.349,7.099 28.349,10.097 C28.349,10.137 28.346,10.177 28.317,10.219 C28.277,9.979 28.237,9.739 28.198,9.498 C28.056,8.630 27.913,7.763 27.772,6.895 C27.634,6.045 27.498,5.195 27.359,4.346 C27.254,3.699 27.144,3.054 27.041,2.407 C27.028,2.330 27.002,2.300 26.921,2.287 C26.040,2.144 25.160,1.998 24.280,1.851 C23.496,1.721 22.713,1.590 21.929,1.460 C21.040,1.313 20.150,1.168 19.260,1.021 C19.210,1.013 19.163,0.992 19.114,0.977 C22.194,0.977 25.274,0.977 28.354,0.977 C28.352,1.019 28.348,1.061 28.348,1.103 ZM8.297,8.072 C8.411,10.714 8.525,13.356 8.639,16.008 C8.397,16.008 8.175,16.008 7.929,16.008 C8.043,13.358 8.157,10.714 8.271,8.070 C8.280,8.070 8.288,8.071 8.297,8.072 ZM21.971,4.296 C22.328,4.641 22.679,4.992 23.027,5.346 C23.097,5.416 23.154,5.429 23.247,5.392 C23.708,5.212 24.172,5.039 24.636,4.863 C24.675,4.849 24.714,4.837 24.780,4.814 C24.758,4.884 24.745,4.935 24.727,4.984 C24.562,5.432 24.400,5.881 24.229,6.326 C24.184,6.443 24.198,6.518 24.290,6.607 C24.640,6.945 24.984,7.290 25.324,7.639 C25.386,7.702 25.437,7.790 25.458,7.875 C25.983,9.975 26.503,12.077 27.024,14.179 C27.262,15.142 27.500,16.104 27.734,17.068 C27.746,17.116 27.741,17.182 27.716,17.223 C26.825,18.653 25.931,20.082 25.036,21.511 C25.024,21.530 25.008,21.546 24.977,21.583 C24.772,21.374 24.573,21.171 24.374,20.969 C24.187,20.782 24.187,20.783 24.328,20.555 C24.486,20.302 24.643,20.049 24.816,19.770 C24.733,19.770 24.679,19.770 24.625,19.770 C20.647,19.787 16.669,19.811 12.691,19.812 C12.255,19.812 11.949,19.928 11.648,20.249 C10.901,21.044 10.114,21.801 9.343,22.573 C9.314,22.602 9.288,22.633 9.269,22.696 C10.126,22.628 10.984,22.561 11.863,22.491 C11.853,22.624 11.846,22.743 11.837,22.861 C11.796,23.384 11.752,23.907 11.716,24.430 C11.707,24.556 11.662,24.606 11.534,24.616 C10.881,24.663 10.228,24.717 9.575,24.769 C8.862,24.826 8.148,24.884 7.435,24.941 C7.076,24.970 6.717,25.003 6.358,25.023 C6.223,25.030 6.123,25.069 6.026,25.167 C4.665,26.535 3.301,27.899 1.939,29.265 C1.900,29.304 1.876,29.358 1.822,29.440 C1.269,28.877 0.756,28.353 0.242,27.829 C0.242,27.820 0.242,27.811 0.242,27.801 C0.282,27.771 0.326,27.746 0.361,27.711 C1.741,26.330 3.121,24.948 4.498,23.563 C4.551,23.509 4.595,23.422 4.601,23.346 C4.671,22.520 4.731,21.693 4.797,20.867 C4.863,20.036 4.933,19.205 5.001,18.375 C5.010,18.267 5.018,18.160 5.021,18.052 C5.023,17.960 5.064,17.920 5.157,17.913 C5.656,17.876 6.155,17.836 6.654,17.797 C6.807,17.785 6.960,17.773 7.140,17.759 C7.071,18.632 7.004,19.492 6.933,20.386 C6.989,20.339 7.020,20.315 7.048,20.287 C7.942,19.393 8.834,18.498 9.730,17.605 C9.803,17.533 9.831,17.459 9.833,17.359 C9.893,14.670 9.956,11.982 10.018,9.293 C10.053,7.794 10.088,6.295 10.122,4.796 C10.123,4.751 10.122,4.706 10.122,4.629 C9.685,4.902 9.271,5.161 8.866,5.414 C8.598,5.144 8.338,4.883 8.071,4.614 C8.098,4.594 8.130,4.568 8.164,4.547 C9.563,3.670 10.963,2.792 12.365,1.919 C12.419,1.885 12.506,1.871 12.569,1.887 C13.971,2.230 15.372,2.578 16.773,2.926 C18.423,3.335 20.074,3.743 21.723,4.157 C21.812,4.179 21.905,4.232 21.971,4.296 ZM20.794,10.707 C20.300,11.193 19.813,11.686 19.323,12.176 C19.290,12.209 19.256,12.239 19.191,12.299 C19.108,12.190 19.028,12.086 18.946,11.978 C18.884,12.036 18.849,12.067 18.817,12.099 C18.175,12.742 17.533,13.384 16.891,14.027 C15.395,15.525 13.899,17.023 12.401,18.518 C12.349,18.570 12.274,18.624 12.205,18.632 C11.898,18.668 11.590,18.688 11.282,18.711 C11.154,18.721 11.025,18.724 10.889,18.731 C10.889,18.679 10.886,18.642 10.889,18.605 C10.920,18.237 10.958,17.868 10.981,17.499 C10.989,17.377 11.035,17.293 11.119,17.209 C13.252,15.078 15.383,12.944 17.514,10.810 C17.550,10.774 17.583,10.737 17.652,10.664 C17.541,10.584 17.439,10.510 17.301,10.411 C17.381,10.353 17.427,10.328 17.464,10.292 C17.961,9.796 18.458,9.299 18.952,8.800 C19.006,8.746 19.054,8.677 19.083,8.605 C19.429,7.726 19.774,6.846 20.112,5.964 C20.139,5.893 20.139,5.799 20.119,5.725 C20.067,5.541 19.983,5.365 19.939,5.180 C19.899,5.013 19.806,4.953 19.648,4.915 C18.395,4.611 17.144,4.297 15.893,3.987 C14.800,3.715 13.708,3.442 12.614,3.176 C12.543,3.159 12.445,3.177 12.382,3.216 C11.796,3.576 11.215,3.944 10.631,4.307 C10.555,4.354 10.524,4.406 10.522,4.498 C10.475,7.027 10.425,9.557 10.374,12.086 C10.328,14.386 10.280,16.686 10.227,18.986 C10.226,19.055 10.182,19.138 10.132,19.188 C9.046,20.281 7.958,21.372 6.865,22.457 C6.733,22.588 6.738,22.732 6.738,22.895 C6.919,22.896 7.059,22.873 7.192,22.739 C8.261,21.656 9.340,20.583 10.413,19.504 C10.488,19.429 10.563,19.395 10.670,19.395 C11.321,19.399 11.971,19.397 12.622,19.395 C15.023,19.389 17.423,19.382 19.824,19.376 C21.514,19.372 23.203,19.369 24.892,19.371 C25.028,19.371 25.100,19.327 25.170,19.214 C25.569,18.564 25.974,17.917 26.384,17.273 C26.454,17.164 26.463,17.067 26.432,16.946 C26.034,15.354 25.640,13.761 25.245,12.168 C25.059,11.414 24.871,10.661 24.690,9.906 C24.664,9.796 24.611,9.740 24.505,9.708 C24.300,9.646 24.099,9.566 23.893,9.506 C23.824,9.486 23.734,9.484 23.668,9.509 C22.800,9.844 21.934,10.182 21.070,10.526 C20.970,10.566 20.871,10.631 20.794,10.707 ZM21.456,21.385 C18.852,21.497 16.247,21.610 13.633,21.723 C13.633,21.480 13.633,21.258 13.633,21.012 C16.242,21.125 18.848,21.237 21.455,21.349 C21.455,21.361 21.456,21.373 21.456,21.385 Z" data-v-0b190a95></path><path id="staff-career-icon-pioneer" d="M29.313,14.190 C29.182,14.196 29.051,14.193 28.920,14.197 C28.497,14.208 28.073,14.219 27.650,14.234 C27.367,14.243 27.083,14.256 26.800,14.272 C26.455,14.291 26.110,14.320 25.766,14.335 C25.518,14.346 25.269,14.337 25.021,14.344 C24.814,14.351 24.606,14.358 24.402,14.386 C24.334,14.396 24.259,14.460 24.216,14.520 C24.106,14.675 24.010,14.842 23.910,15.004 C23.876,15.060 23.846,15.119 23.814,15.177 C23.726,15.342 23.554,15.391 23.404,15.471 C23.237,15.560 23.071,15.650 22.902,15.737 C22.701,15.841 22.497,15.938 22.298,16.047 C22.058,16.178 21.823,16.319 21.584,16.453 C21.489,16.506 21.391,16.553 21.293,16.602 C21.065,16.714 20.834,16.819 20.610,16.938 C20.407,17.046 20.214,17.173 20.013,17.284 C19.866,17.365 19.712,17.433 19.562,17.511 C19.404,17.593 19.248,17.679 19.092,17.765 C18.943,17.848 18.800,17.938 18.649,18.016 C18.495,18.097 18.332,18.160 18.179,18.243 C17.976,18.352 17.783,18.481 17.578,18.587 C17.339,18.711 17.089,18.814 16.849,18.936 C16.708,19.008 16.581,19.104 16.442,19.179 C16.316,19.246 16.178,19.292 16.052,19.360 C15.940,19.421 15.823,19.487 15.737,19.577 C15.695,19.622 15.716,19.729 15.714,19.808 C15.703,20.184 15.703,20.561 15.680,20.936 C15.660,21.263 15.600,21.587 15.583,21.914 C15.564,22.280 15.597,22.650 15.565,23.014 C15.525,23.462 15.582,23.914 15.478,24.361 C15.425,24.590 15.470,24.840 15.461,25.080 C15.450,25.385 15.424,25.689 15.416,25.994 C15.406,26.352 15.411,26.710 15.405,27.068 C15.403,27.230 15.391,27.392 15.383,27.562 C15.315,27.562 15.253,27.562 15.168,27.562 C15.168,27.293 15.171,27.030 15.167,26.767 C15.161,26.362 15.147,25.958 15.140,25.554 C15.135,25.271 15.135,24.988 15.132,24.705 C15.132,24.696 15.133,24.687 15.132,24.678 C15.097,24.419 15.046,24.162 15.032,23.902 C15.007,23.454 15.006,23.004 14.991,22.556 C14.986,22.399 14.963,22.243 14.958,22.086 C14.951,21.896 14.958,21.705 14.952,21.514 C14.949,21.423 14.928,21.332 14.918,21.241 C14.905,21.134 14.887,21.028 14.884,20.921 C14.879,20.690 14.880,20.458 14.883,20.226 C14.885,20.076 14.821,20.024 14.686,20.091 C14.560,20.154 14.446,20.239 14.323,20.309 C14.204,20.376 14.081,20.437 13.959,20.499 C13.782,20.590 13.605,20.681 13.427,20.770 C13.216,20.875 13.002,20.973 12.794,21.085 C12.663,21.155 12.546,21.252 12.414,21.322 C12.273,21.398 12.120,21.451 11.978,21.526 C11.746,21.650 11.520,21.787 11.289,21.912 C11.057,22.037 10.820,22.152 10.588,22.274 C10.494,22.324 10.405,22.382 10.313,22.436 C10.294,22.428 10.275,22.419 10.255,22.410 C10.271,22.344 10.274,22.271 10.304,22.212 C10.369,22.085 10.448,21.964 10.523,21.841 C10.564,21.774 10.610,21.711 10.649,21.643 C10.717,21.524 10.778,21.401 10.846,21.281 C10.967,21.070 11.093,20.861 11.212,20.648 C11.331,20.437 11.440,20.220 11.560,20.009 C11.634,19.878 11.724,19.755 11.802,19.625 C11.844,19.556 11.869,19.475 11.914,19.408 C12.029,19.234 12.208,19.151 12.393,19.066 C12.627,18.959 12.842,18.810 13.070,18.688 C13.274,18.580 13.487,18.490 13.691,18.382 C13.832,18.308 13.964,18.217 14.102,18.137 C14.208,18.076 14.315,18.018 14.423,17.963 C14.690,17.826 14.959,17.693 15.226,17.557 C15.566,17.384 15.908,17.213 16.245,17.035 C16.459,16.921 16.664,16.790 16.877,16.675 C17.087,16.561 17.305,16.460 17.517,16.349 C17.715,16.245 17.910,16.135 18.107,16.030 C18.188,15.987 18.277,15.959 18.356,15.913 C18.481,15.842 18.600,15.759 18.725,15.687 C18.838,15.622 18.957,15.565 19.072,15.502 C19.241,15.409 19.436,15.367 19.586,15.229 C19.658,15.163 19.775,15.149 19.865,15.100 C20.127,14.958 20.385,14.808 20.647,14.667 C20.749,14.611 20.853,14.554 20.964,14.524 C21.105,14.485 21.161,14.394 21.163,14.264 C21.164,14.130 21.157,13.995 21.140,13.863 C21.117,13.680 21.156,13.622 21.333,13.636 C21.522,13.651 21.709,13.688 21.898,13.706 C22.063,13.723 22.230,13.737 22.396,13.732 C22.468,13.731 22.542,13.686 22.609,13.651 C22.852,13.521 23.091,13.384 23.335,13.255 C23.469,13.184 23.612,13.129 23.748,13.059 C23.870,12.997 23.985,12.921 24.106,12.857 C24.368,12.719 24.635,12.590 24.894,12.448 C25.079,12.347 25.256,12.232 25.442,12.120 C25.532,12.210 25.493,12.283 25.435,12.373 C25.343,12.514 25.270,12.667 25.189,12.815 C25.179,12.835 25.180,12.865 25.165,12.877 C25.028,12.998 24.977,13.168 24.899,13.323 C24.842,13.435 24.750,13.530 24.685,13.638 C24.656,13.687 24.637,13.754 24.645,13.808 C24.649,13.834 24.730,13.872 24.768,13.865 C24.932,13.836 25.087,13.856 25.242,13.906 C25.268,13.914 25.298,13.907 25.326,13.908 C25.902,13.918 26.479,13.922 27.054,13.941 C27.544,13.956 28.034,13.990 28.523,14.012 C28.691,14.020 28.859,14.008 29.026,14.022 C29.135,14.030 29.242,14.066 29.348,14.094 C29.363,14.098 29.384,14.139 29.379,14.144 C29.362,14.164 29.336,14.189 29.313,14.190 ZM28.940,6.203 C28.849,6.355 28.754,6.506 28.667,6.661 C28.559,6.855 28.460,7.055 28.350,7.249 C28.224,7.472 28.088,7.690 27.959,7.912 C27.913,7.990 27.871,8.071 27.829,8.152 C27.761,8.281 27.708,8.422 27.623,8.539 C27.556,8.631 27.455,8.703 27.360,8.771 C27.284,8.825 27.193,8.859 27.109,8.903 C26.841,9.043 26.571,9.179 26.306,9.325 C26.091,9.443 25.884,9.575 25.671,9.696 C25.552,9.764 25.426,9.820 25.305,9.883 C25.074,10.002 24.844,10.124 24.612,10.242 C24.362,10.370 24.109,10.492 23.861,10.622 C23.738,10.687 23.622,10.767 23.501,10.836 C23.394,10.896 23.285,10.951 23.176,11.007 C22.862,11.168 22.547,11.325 22.235,11.490 C21.922,11.656 21.615,11.833 21.302,11.998 C20.977,12.169 20.643,12.326 20.319,12.499 C20.030,12.654 19.749,12.827 19.461,12.985 C19.322,13.062 19.173,13.119 19.032,13.194 C18.893,13.267 18.761,13.353 18.623,13.429 C18.515,13.489 18.403,13.539 18.294,13.597 C18.047,13.730 17.804,13.870 17.554,13.997 C17.325,14.113 17.087,14.210 16.859,14.328 C16.715,14.402 16.585,14.501 16.446,14.584 C16.358,14.637 16.268,14.687 16.176,14.732 C15.954,14.842 15.729,14.944 15.509,15.057 C15.296,15.165 15.087,15.282 14.876,15.395 C14.736,15.470 14.596,15.545 14.457,15.622 C14.308,15.704 14.164,15.794 14.013,15.871 C13.881,15.939 13.741,15.992 13.606,16.056 C13.508,16.103 13.412,16.155 13.317,16.210 C13.105,16.333 12.898,16.463 12.684,16.581 C12.556,16.652 12.416,16.700 12.287,16.769 C12.051,16.895 11.820,17.031 11.583,17.158 C11.447,17.230 11.303,17.290 11.164,17.358 C11.048,17.416 10.934,17.475 10.820,17.537 C10.685,17.611 10.552,17.690 10.417,17.765 C10.170,17.901 9.924,18.038 9.674,18.171 C9.550,18.237 9.419,18.290 9.294,18.355 C9.159,18.424 9.028,18.502 8.893,18.572 C8.569,18.742 8.243,18.910 7.918,19.079 C7.841,19.119 7.766,19.163 7.690,19.206 C7.540,19.292 7.391,19.381 7.239,19.463 C7.125,19.525 7.006,19.575 6.891,19.636 C6.725,19.724 6.562,19.816 6.396,19.906 C6.309,19.953 6.221,20.000 6.133,20.045 C5.922,20.152 5.708,20.254 5.499,20.365 C5.269,20.488 5.044,20.621 4.814,20.745 C4.583,20.870 4.348,20.985 4.116,21.109 C3.900,21.225 3.688,21.352 3.470,21.465 C3.244,21.582 3.011,21.684 2.786,21.801 C2.633,21.881 2.489,21.977 2.339,22.061 C2.240,22.117 2.137,22.164 2.035,22.214 C1.814,22.323 1.589,22.425 1.373,22.542 C1.164,22.655 0.964,22.787 0.758,22.905 C0.633,22.977 0.504,23.039 0.365,23.111 C0.354,23.099 0.330,23.073 0.306,23.047 C0.306,23.000 0.306,22.954 0.306,22.907 C0.344,22.885 0.397,22.873 0.417,22.840 C0.494,22.714 0.556,22.579 0.632,22.453 C0.708,22.326 0.798,22.208 0.874,22.081 C0.929,21.991 0.968,21.891 1.018,21.798 C1.134,21.585 1.247,21.371 1.370,21.161 C1.533,20.881 1.705,20.606 1.872,20.327 C1.925,20.238 1.963,20.139 2.025,20.057 C2.082,19.982 2.153,19.910 2.233,19.861 C2.378,19.773 2.534,19.706 2.683,19.625 C2.893,19.511 3.098,19.389 3.309,19.279 C3.536,19.160 3.770,19.055 3.997,18.936 C4.206,18.826 4.409,18.703 4.618,18.593 C4.764,18.516 4.921,18.456 5.066,18.376 C5.205,18.300 5.332,18.204 5.469,18.125 C5.593,18.053 5.723,17.992 5.851,17.927 C5.995,17.854 6.139,17.784 6.282,17.709 C6.382,17.657 6.478,17.598 6.579,17.546 C6.791,17.438 7.008,17.336 7.218,17.223 C7.458,17.095 7.690,16.953 7.929,16.826 C8.145,16.711 8.368,16.607 8.587,16.497 C8.686,16.447 8.785,16.397 8.882,16.342 C9.107,16.216 9.326,16.081 9.554,15.961 C9.690,15.890 9.839,15.846 9.978,15.781 C10.064,15.742 10.143,15.687 10.225,15.638 C10.351,15.562 10.472,15.477 10.602,15.408 C10.741,15.334 10.888,15.276 11.029,15.206 C11.145,15.149 11.258,15.085 11.372,15.024 C11.617,14.894 11.863,14.766 12.108,14.634 C12.432,14.460 12.756,14.283 13.080,14.108 C13.294,13.994 13.511,13.885 13.724,13.770 C13.953,13.645 14.179,13.512 14.409,13.387 C14.532,13.321 14.661,13.266 14.787,13.203 C14.849,13.172 14.907,13.135 14.969,13.103 C15.108,13.033 15.249,12.966 15.388,12.894 C15.510,12.831 15.629,12.759 15.752,12.696 C15.897,12.623 16.047,12.559 16.190,12.483 C16.307,12.421 16.416,12.343 16.532,12.279 C16.682,12.198 16.837,12.125 16.989,12.047 C17.085,11.999 17.182,11.950 17.275,11.897 C17.491,11.773 17.702,11.639 17.920,11.521 C18.137,11.403 18.364,11.303 18.583,11.188 C18.727,11.113 18.865,11.024 19.007,10.944 C19.100,10.891 19.195,10.841 19.290,10.793 C19.516,10.680 19.744,10.574 19.967,10.456 C20.183,10.342 20.391,10.216 20.605,10.099 C20.740,10.025 20.881,9.962 21.017,9.889 C21.154,9.816 21.287,9.734 21.425,9.661 C21.535,9.602 21.652,9.553 21.763,9.494 C21.937,9.402 22.107,9.302 22.281,9.211 C22.510,9.091 22.742,8.976 22.973,8.860 C23.157,8.768 23.346,8.682 23.526,8.583 C23.663,8.508 23.786,8.411 23.922,8.335 C24.044,8.266 24.178,8.217 24.303,8.153 C24.523,8.040 24.741,7.922 24.961,7.807 C25.094,7.738 25.230,7.674 25.363,7.604 C25.487,7.539 25.609,7.469 25.733,7.403 C25.877,7.326 26.024,7.251 26.168,7.173 C26.301,7.100 26.431,7.024 26.562,6.950 C26.680,6.885 26.798,6.819 26.916,6.756 C27.080,6.668 27.245,6.582 27.409,6.495 C27.518,6.438 27.628,6.383 27.736,6.325 C27.891,6.242 28.044,6.154 28.199,6.072 C28.320,6.008 28.446,5.951 28.567,5.886 C28.748,5.787 28.927,5.684 29.108,5.583 C29.124,5.574 29.143,5.571 29.168,5.563 C29.251,5.656 29.258,5.732 29.167,5.837 C29.074,5.944 29.014,6.079 28.940,6.203 ZM18.870,7.160 C18.809,7.273 18.753,7.389 18.687,7.499 C18.514,7.789 18.330,8.074 18.161,8.367 C18.043,8.570 17.952,8.790 17.830,8.990 C17.712,9.183 17.624,9.391 17.359,9.475 C17.131,9.548 16.939,9.728 16.724,9.846 C16.584,9.923 16.426,9.968 16.282,10.039 C16.153,10.102 16.032,10.183 15.905,10.252 C15.678,10.376 15.451,10.497 15.224,10.620 C15.004,10.739 14.785,10.860 14.565,10.979 C14.450,11.041 14.333,11.099 14.218,11.160 C13.981,11.286 13.745,11.414 13.506,11.538 C13.277,11.657 13.044,11.769 12.815,11.890 C12.598,12.004 12.384,12.124 12.170,12.242 C12.043,12.312 11.917,12.384 11.790,12.453 C11.626,12.543 11.462,12.634 11.296,12.719 C11.165,12.785 11.030,12.839 10.898,12.903 C10.787,12.957 10.678,13.015 10.570,13.074 C10.431,13.152 10.297,13.237 10.156,13.311 C9.951,13.418 9.739,13.514 9.535,13.624 C9.433,13.678 9.399,13.775 9.403,13.894 C9.410,14.090 9.404,14.287 9.395,14.483 C9.393,14.508 9.341,14.553 9.315,14.551 C9.162,14.541 9.010,14.510 8.856,14.504 C8.551,14.491 8.245,14.477 7.941,14.490 C7.837,14.495 7.736,14.577 7.635,14.626 C7.542,14.672 7.447,14.714 7.358,14.767 C7.220,14.851 7.090,14.949 6.950,15.029 C6.837,15.094 6.712,15.138 6.594,15.196 C6.372,15.307 6.152,15.420 5.932,15.533 C5.792,15.605 5.650,15.675 5.513,15.753 C5.371,15.834 5.237,15.932 5.092,16.010 C4.960,16.081 4.815,16.129 4.683,16.200 C4.544,16.273 4.415,16.364 4.278,16.441 C4.223,16.471 4.131,16.519 4.105,16.498 C4.025,16.433 4.102,16.377 4.143,16.313 C4.229,16.181 4.297,16.038 4.375,15.901 C4.425,15.814 4.477,15.728 4.532,15.644 C4.614,15.521 4.705,15.404 4.783,15.279 C4.827,15.208 4.848,15.122 4.889,15.049 C4.985,14.880 5.091,14.718 5.184,14.548 C5.215,14.490 5.216,14.415 5.241,14.306 C4.848,14.306 4.488,14.317 4.128,14.303 C3.810,14.291 3.493,14.250 3.175,14.227 C3.058,14.219 2.939,14.226 2.822,14.224 C2.280,14.211 1.739,14.197 1.172,14.182 C1.192,14.144 1.199,14.106 1.221,14.094 C1.389,14.004 1.575,14.019 1.756,14.011 C2.219,13.989 2.683,13.971 3.146,13.954 C3.581,13.939 4.015,13.925 4.449,13.914 C4.756,13.907 5.064,13.906 5.372,13.902 C5.423,13.901 5.637,13.715 5.663,13.665 C5.753,13.492 5.855,13.324 6.035,13.232 C6.365,13.064 6.702,12.910 7.031,12.739 C7.239,12.630 7.436,12.498 7.640,12.382 C7.754,12.317 7.876,12.266 7.992,12.206 C8.304,12.042 8.613,11.876 8.925,11.713 C9.070,11.637 9.221,11.570 9.366,11.493 C9.516,11.412 9.661,11.321 9.811,11.238 C9.922,11.176 10.037,11.119 10.150,11.060 C10.214,11.026 10.279,10.990 10.344,10.958 C10.483,10.890 10.623,10.825 10.761,10.756 C10.871,10.701 10.978,10.639 11.087,10.581 C11.245,10.497 11.405,10.416 11.561,10.329 C11.788,10.202 12.011,10.068 12.237,9.940 C12.329,9.888 12.426,9.844 12.521,9.798 C12.662,9.730 12.805,9.668 12.944,9.597 C13.078,9.529 13.208,9.455 13.339,9.382 C13.434,9.329 13.527,9.271 13.623,9.221 C13.842,9.107 14.064,9.001 14.281,8.884 C14.451,8.792 14.619,8.696 14.778,8.587 C14.824,8.555 14.854,8.472 14.857,8.411 C14.876,7.996 14.883,7.581 14.901,7.166 C14.906,7.038 14.945,6.911 14.952,6.783 C14.971,6.434 14.983,6.085 14.994,5.736 C15.009,5.279 15.014,4.821 15.034,4.364 C15.041,4.194 15.086,4.027 15.099,3.858 C15.115,3.660 15.113,3.461 15.120,3.263 C15.132,2.889 15.147,2.514 15.156,2.139 C15.166,1.752 15.171,1.364 15.175,0.977 C15.177,0.878 15.171,0.779 15.168,0.680 C15.243,0.680 15.319,0.680 15.394,0.680 C15.392,0.878 15.388,1.076 15.391,1.273 C15.400,1.817 15.413,2.361 15.423,2.904 C15.427,3.109 15.401,3.320 15.435,3.519 C15.524,4.030 15.540,4.544 15.552,5.060 C15.560,5.361 15.561,5.662 15.572,5.963 C15.577,6.114 15.599,6.264 15.609,6.414 C15.636,6.800 15.662,7.186 15.686,7.571 C15.692,7.654 15.689,7.738 15.697,7.821 C15.703,7.895 15.719,7.969 15.730,8.043 C15.818,8.027 15.913,8.027 15.991,7.989 C16.149,7.913 16.296,7.815 16.450,7.728 C16.580,7.655 16.712,7.586 16.843,7.515 C17.048,7.405 17.255,7.298 17.459,7.187 C17.697,7.057 17.933,6.923 18.171,6.794 C18.276,6.737 18.385,6.689 18.491,6.633 C18.673,6.536 18.851,6.430 19.038,6.340 C19.121,6.300 19.220,6.292 19.311,6.269 C19.324,6.287 19.337,6.306 19.349,6.324 C19.251,6.486 19.149,6.647 19.054,6.810 C18.988,6.924 18.931,7.043 18.870,7.160 Z" data-v-0b190a95></path><path id="staff-career-icon-support" d="M15.170,0.031 C19.186,0.031 23.201,0.031 27.216,0.031 C27.224,0.091 27.240,0.151 27.240,0.211 C27.241,8.844 27.241,17.476 27.244,26.108 C27.244,26.244 27.207,26.279 27.073,26.279 C23.226,26.275 19.380,26.276 15.534,26.276 C15.484,26.276 15.434,26.276 15.376,26.276 C15.376,25.464 15.376,24.670 15.376,23.877 C15.399,23.871 15.412,23.864 15.425,23.864 C16.499,23.863 17.573,23.862 18.647,23.863 C18.677,23.863 18.707,23.879 18.737,23.889 C18.793,23.909 18.849,23.948 18.905,23.948 C20.856,23.952 22.807,23.950 24.759,23.954 C24.890,23.954 24.923,23.914 24.923,23.786 C24.921,16.701 24.921,9.616 24.923,2.531 C24.923,2.405 24.893,2.365 24.760,2.365 C22.536,2.370 20.313,2.368 18.090,2.368 C18.040,2.368 17.990,2.368 17.940,2.368 C17.940,3.047 17.940,3.705 17.940,4.378 C19.535,4.378 21.118,4.378 22.702,4.378 C22.702,9.525 22.702,14.656 22.702,19.787 C22.684,19.801 22.667,19.815 22.650,19.829 C22.625,19.784 22.609,19.730 22.574,19.695 C18.469,15.590 14.363,11.485 10.256,7.382 C10.177,7.303 10.142,7.225 10.142,7.112 C10.145,5.593 10.144,4.074 10.144,2.555 C10.144,2.496 10.138,2.438 10.133,2.368 C10.072,2.368 10.026,2.368 9.980,2.368 C9.389,2.368 8.798,2.373 8.207,2.365 C8.068,2.363 8.037,2.406 8.037,2.539 C8.042,3.997 8.040,5.456 8.045,6.914 C8.046,7.049 8.010,7.086 7.874,7.086 C6.420,7.081 4.966,7.083 3.512,7.083 C3.326,7.083 3.326,7.083 3.326,7.264 C3.326,12.740 3.326,18.217 3.326,23.694 C3.326,23.744 3.326,23.794 3.326,23.850 C3.374,23.855 3.405,23.861 3.437,23.861 C4.811,23.862 6.185,23.861 7.560,23.864 C7.664,23.864 7.684,23.825 7.684,23.732 C7.681,23.151 7.680,22.569 7.685,21.988 C7.686,21.879 7.647,21.855 7.546,21.856 C6.936,21.860 6.327,21.858 5.717,21.858 C5.662,21.858 5.607,21.858 5.538,21.858 C5.538,21.792 5.538,21.746 5.538,21.700 C5.538,17.579 5.539,13.457 5.536,9.336 C5.535,9.209 5.573,9.179 5.695,9.179 C6.497,9.184 7.299,9.180 8.101,9.186 C8.175,9.187 8.266,9.226 8.319,9.278 C12.484,13.436 16.646,17.597 20.808,21.759 C20.831,21.783 20.851,21.811 20.882,21.849 C19.035,21.849 17.208,21.849 15.367,21.849 C15.367,21.785 15.367,21.730 15.367,21.675 C15.367,20.428 15.368,19.180 15.364,17.933 C15.364,17.862 15.339,17.770 15.291,17.722 C14.662,17.084 14.028,16.452 13.394,15.819 C13.373,15.798 13.346,15.784 13.298,15.749 C13.298,19.270 13.298,22.765 13.298,26.276 C13.221,26.276 13.162,26.276 13.102,26.276 C9.143,26.276 5.184,26.276 1.226,26.276 C0.978,26.276 1.005,26.298 1.005,26.059 C1.005,20.522 1.005,14.984 1.005,9.446 C1.005,6.375 1.005,3.304 1.006,0.233 C1.006,0.165 1.030,0.098 1.042,0.031 C5.048,0.031 9.054,0.031 13.060,0.031 C13.070,0.099 13.090,0.167 13.090,0.235 C13.092,3.048 13.091,5.861 13.095,8.674 C13.095,8.754 13.123,8.856 13.176,8.910 C13.801,9.545 14.432,10.173 15.063,10.803 C15.083,10.823 15.110,10.837 15.150,10.865 C15.150,10.787 15.150,10.731 15.150,10.675 C15.150,7.192 15.150,3.709 15.151,0.225 C15.151,0.161 15.164,0.096 15.170,0.031 ZM3.326,2.373 C3.326,2.434 3.326,2.480 3.326,2.525 C3.326,3.660 3.328,4.794 3.322,5.929 C3.322,6.066 3.369,6.089 3.491,6.089 C4.621,6.085 5.751,6.086 6.882,6.086 C6.931,6.086 6.981,6.086 7.032,6.086 C7.032,4.837 7.032,3.608 7.032,2.373 C5.797,2.373 4.574,2.373 3.326,2.373 Z" data-v-0b190a95></path><path id="staff-career-icon-tank" d="M22.659,3.601 C24.067,2.484 25.481,1.362 26.895,0.241 C26.903,0.248 26.912,0.256 26.921,0.263 C25.799,1.676 24.678,3.089 23.559,4.500 C23.252,4.194 22.962,3.903 22.659,3.601 ZM24.174,6.594 C24.067,8.240 23.972,9.887 23.876,11.533 C23.786,13.076 23.700,14.620 23.610,16.164 C23.527,17.571 23.443,18.979 23.354,20.387 C23.351,20.440 23.304,20.505 23.259,20.541 C21.832,21.676 20.404,22.809 18.975,23.942 C17.223,25.331 15.470,26.719 13.721,28.110 C13.638,28.177 13.589,28.174 13.507,28.111 C10.279,25.589 7.048,23.071 3.820,20.548 C3.766,20.506 3.719,20.423 3.714,20.356 C3.637,19.249 3.568,18.141 3.496,17.033 C3.427,15.981 3.356,14.929 3.288,13.877 C3.234,13.040 3.185,12.203 3.131,11.366 C3.064,10.324 2.995,9.281 2.928,8.238 C2.889,7.654 2.855,7.069 2.812,6.485 C2.804,6.388 2.859,6.367 2.925,6.338 C4.051,5.842 5.177,5.342 6.306,4.850 C6.419,4.801 6.457,4.743 6.455,4.622 C6.448,4.144 6.452,3.666 6.452,3.188 C6.452,3.138 6.452,3.088 6.452,3.021 C6.525,3.021 6.580,3.021 6.635,3.021 C7.648,3.021 8.661,3.018 9.673,3.023 C9.812,3.024 9.924,2.987 10.038,2.912 C11.175,2.159 12.316,1.411 13.453,0.658 C13.548,0.595 13.613,0.591 13.711,0.656 C14.847,1.419 15.986,2.178 17.128,2.933 C17.207,2.985 17.317,3.016 17.412,3.017 C18.359,3.023 19.307,3.023 20.254,3.018 C20.376,3.017 20.414,3.048 20.412,3.174 C20.405,3.661 20.413,4.148 20.406,4.636 C20.405,4.749 20.443,4.799 20.545,4.842 C21.692,5.326 22.837,5.817 23.985,6.300 C24.127,6.360 24.185,6.423 24.174,6.594 ZM22.576,7.290 C21.530,6.868 20.487,6.438 19.441,6.015 C19.342,5.975 19.308,5.925 19.310,5.819 C19.317,5.463 19.313,5.107 19.313,4.751 C19.313,4.487 19.313,4.487 19.042,4.487 C18.338,4.487 17.635,4.489 16.932,4.484 C16.854,4.483 16.764,4.456 16.699,4.413 C15.702,3.755 14.707,3.092 13.715,2.427 C13.620,2.363 13.556,2.355 13.455,2.422 C12.456,3.086 11.454,3.745 10.448,4.399 C10.368,4.451 10.259,4.482 10.163,4.483 C9.352,4.490 8.541,4.490 7.730,4.484 C7.594,4.483 7.543,4.509 7.548,4.659 C7.560,5.043 7.547,5.428 7.554,5.812 C7.556,5.921 7.525,5.974 7.420,6.018 C6.418,6.439 5.421,6.868 4.419,7.289 C4.284,7.345 4.222,7.407 4.248,7.565 C4.277,7.749 4.272,7.939 4.282,8.126 C4.283,8.126 4.284,8.126 4.284,8.126 C4.333,9.010 4.382,9.894 4.432,10.778 C4.486,11.728 4.542,12.677 4.596,13.627 C4.654,14.665 4.712,15.704 4.770,16.742 C4.823,17.687 4.878,18.632 4.925,19.577 C4.930,19.688 4.969,19.755 5.053,19.821 C6.027,20.577 6.998,21.336 7.970,22.095 C9.817,23.537 11.664,24.978 13.511,26.421 C13.581,26.476 13.629,26.499 13.714,26.432 C16.520,24.223 19.327,22.015 22.137,19.810 C22.216,19.749 22.248,19.683 22.251,19.587 C22.263,19.189 22.279,18.791 22.296,18.393 C22.335,17.424 22.374,16.455 22.415,15.485 C22.472,14.142 22.532,12.798 22.588,11.455 C22.642,10.158 22.690,8.861 22.752,7.565 C22.759,7.408 22.713,7.345 22.576,7.290 ZM21.141,17.873 C21.123,18.200 21.115,18.528 21.090,18.855 C21.084,18.929 21.044,19.021 20.988,19.065 C18.574,20.970 16.156,22.869 13.740,24.771 C13.670,24.826 13.623,24.851 13.538,24.784 C11.109,22.875 8.679,20.970 6.246,19.067 C6.158,18.998 6.131,18.925 6.126,18.819 C6.072,17.860 6.012,16.901 5.955,15.942 C5.902,15.035 5.851,14.128 5.798,13.220 C5.745,12.299 5.689,11.378 5.634,10.456 C5.593,9.769 5.551,9.081 5.509,8.394 C5.504,8.316 5.506,8.256 5.598,8.215 C6.177,7.962 6.753,7.701 7.330,7.442 C7.346,7.435 7.365,7.433 7.400,7.424 C7.428,7.831 7.456,8.224 7.481,8.616 C7.539,9.518 7.595,10.421 7.652,11.323 C7.717,12.370 7.782,13.418 7.848,14.465 C7.908,15.419 7.967,16.373 8.033,17.326 C8.036,17.379 8.088,17.442 8.134,17.477 C8.916,18.075 9.700,18.670 10.484,19.265 C11.380,19.946 12.275,20.626 13.171,21.306 C13.336,21.431 13.696,21.439 13.853,21.319 C15.590,20.003 17.326,18.685 19.064,17.371 C19.139,17.314 19.174,17.255 19.180,17.163 C19.219,16.466 19.262,15.769 19.304,15.072 C19.346,14.371 19.388,13.669 19.430,12.968 C19.485,12.051 19.539,11.135 19.595,10.218 C19.649,9.315 19.705,8.413 19.760,7.510 C19.763,7.475 19.773,7.440 19.783,7.388 C20.042,7.514 20.289,7.634 20.536,7.754 C20.873,7.918 21.209,8.084 21.548,8.243 C21.634,8.283 21.658,8.332 21.653,8.427 C21.561,10.121 21.475,11.815 21.383,13.508 C21.305,14.963 21.221,16.418 21.141,17.873 ZM18.464,13.122 C18.385,14.422 18.301,15.721 18.223,17.021 C18.217,17.114 18.184,17.172 18.110,17.229 C16.633,18.345 15.158,19.463 13.685,20.583 C13.604,20.645 13.555,20.637 13.480,20.578 C11.969,19.406 10.456,18.237 8.945,17.066 C8.909,17.038 8.872,16.987 8.869,16.945 C8.803,16.118 8.743,15.292 8.682,14.465 C8.625,13.708 8.569,12.951 8.513,12.195 C8.447,11.298 8.382,10.401 8.316,9.504 C8.260,8.757 8.189,8.010 8.153,7.262 C8.128,6.716 8.148,6.168 8.148,5.598 C8.214,5.598 8.270,5.598 8.325,5.598 C9.075,5.598 9.825,5.596 10.575,5.600 C10.699,5.601 10.798,5.568 10.897,5.494 C11.560,4.996 12.227,4.503 12.893,4.008 C12.921,3.987 12.953,3.970 13.009,3.936 C13.009,4.015 13.009,4.069 13.009,4.123 C13.009,7.032 13.009,9.942 13.009,12.852 C13.009,13.048 13.009,13.048 13.206,13.048 C13.515,13.048 13.824,13.048 14.148,13.048 C14.148,10.012 14.148,6.988 14.148,3.925 C14.215,3.971 14.255,3.996 14.292,4.024 C14.947,4.518 15.600,5.015 16.259,5.503 C16.334,5.559 16.444,5.593 16.538,5.594 C17.242,5.602 17.945,5.601 18.648,5.595 C18.773,5.594 18.802,5.631 18.805,5.754 C18.830,7.104 18.755,8.451 18.664,9.797 C18.589,10.905 18.532,12.014 18.464,13.122 ZM0.400,0.273 C0.409,0.264 0.418,0.255 0.426,0.247 C1.837,1.365 3.247,2.484 4.647,3.594 C4.347,3.892 4.053,4.184 3.746,4.489 C2.638,3.092 1.519,1.682 0.400,0.273 ZM4.649,23.765 C3.245,24.879 1.831,26.001 0.416,27.124 C0.408,27.115 0.400,27.107 0.393,27.099 C1.515,25.685 2.637,24.271 3.753,22.864 C4.055,23.168 4.347,23.462 4.649,23.765 ZM26.923,27.101 C26.916,27.109 26.908,27.118 26.901,27.126 C25.485,26.002 24.069,24.879 22.660,23.761 C22.964,23.460 23.259,23.168 23.563,22.867 C24.677,24.271 25.800,25.686 26.923,27.101 Z" data-v-0b190a95></path><path id="staff-career-icon-medic" d="M21.821,13.422 C21.716,13.482 21.640,13.491 21.531,13.426 C20.971,13.094 20.407,12.768 19.839,12.450 C19.720,12.383 19.682,12.309 19.684,12.175 C19.691,11.524 19.690,10.874 19.684,10.223 C19.683,10.107 19.715,10.041 19.820,9.981 C21.993,8.733 24.164,7.481 26.335,6.229 C26.383,6.202 26.431,6.176 26.493,6.142 C27.157,7.289 27.815,8.426 28.480,9.576 C28.426,9.610 28.380,9.640 28.333,9.667 C26.162,10.918 23.990,12.168 21.821,13.422 ZM23.531,6.231 C23.119,6.224 22.706,6.223 22.294,6.232 C22.158,6.235 22.132,6.186 22.133,6.063 C22.138,5.268 22.136,4.472 22.136,3.677 C22.136,3.490 22.135,3.490 21.942,3.490 C21.140,3.490 20.339,3.488 19.537,3.492 C19.423,3.493 19.384,3.462 19.386,3.343 C19.393,2.922 19.392,2.501 19.386,2.080 C19.384,1.967 19.423,1.938 19.531,1.939 C20.201,1.943 20.872,1.941 21.542,1.941 C22.207,1.941 22.873,1.943 23.538,1.938 C23.654,1.938 23.691,1.969 23.690,2.088 C23.686,3.416 23.686,4.745 23.690,6.074 C23.691,6.199 23.653,6.233 23.531,6.231 ZM28.679,20.318 C28.016,21.463 27.357,22.603 26.691,23.754 C26.578,23.689 26.477,23.632 26.377,23.574 C22.733,21.474 19.088,19.375 15.445,17.272 C15.331,17.206 15.250,17.199 15.131,17.268 C11.297,19.481 7.462,21.689 3.626,23.898 C3.583,23.924 3.538,23.948 3.477,23.981 C2.814,22.835 2.157,21.699 1.492,20.550 C1.543,20.517 1.587,20.485 1.634,20.458 C5.478,18.244 9.321,16.030 13.166,13.820 C13.271,13.759 13.301,13.690 13.301,13.574 C13.298,9.343 13.298,5.112 13.298,0.881 C13.298,0.825 13.304,0.769 13.308,0.713 C14.630,0.713 15.952,0.713 17.274,0.713 C17.274,4.996 17.275,9.278 17.271,13.561 C17.271,13.695 17.310,13.768 17.428,13.836 C21.140,15.969 24.849,18.106 28.559,20.242 C28.595,20.263 28.629,20.287 28.679,20.318 ZM8.575,3.487 C8.442,3.486 8.413,3.528 8.413,3.653 C8.419,4.463 8.414,5.273 8.419,6.082 C8.419,6.201 8.384,6.232 8.268,6.231 C7.846,6.225 7.424,6.225 7.002,6.230 C6.894,6.232 6.857,6.201 6.857,6.088 C6.861,4.754 6.861,3.420 6.857,2.087 C6.857,1.967 6.897,1.938 7.010,1.939 C8.346,1.942 9.682,1.941 11.018,1.941 C11.059,1.941 11.100,1.946 11.149,1.949 C11.149,2.462 11.149,2.965 11.149,3.490 C11.088,3.490 11.034,3.490 10.980,3.490 C10.179,3.490 9.377,3.493 8.575,3.487 ZM10.883,10.260 C10.873,10.906 10.876,11.552 10.882,12.197 C10.883,12.314 10.850,12.382 10.745,12.441 C10.162,12.770 9.582,13.105 9.004,13.443 C8.917,13.495 8.857,13.484 8.776,13.438 C6.692,12.234 4.606,11.033 2.521,9.832 C2.286,9.696 2.050,9.561 1.815,9.425 C1.776,9.402 1.737,9.377 1.689,9.347 C2.352,8.201 3.010,7.064 3.674,5.917 C3.730,5.946 3.779,5.969 3.826,5.996 C6.119,7.317 8.410,8.639 10.705,9.955 C10.835,10.030 10.885,10.108 10.883,10.260 ZM3.951,12.079 C4.316,12.445 4.675,12.804 5.040,13.170 C4.421,13.787 3.779,14.427 3.131,15.074 C3.792,15.728 4.433,16.363 5.063,16.985 C4.683,17.363 4.323,17.721 3.950,18.092 C3.940,18.082 3.902,18.050 3.867,18.016 C2.942,17.093 2.017,16.170 1.092,15.248 C1.039,15.195 0.984,15.144 0.929,15.093 C0.929,15.083 0.929,15.074 0.929,15.064 C0.972,15.030 1.019,14.999 1.057,14.960 C1.993,14.028 2.928,13.095 3.863,12.162 C3.896,12.130 3.930,12.099 3.951,12.079 ZM6.859,23.960 C7.386,23.960 7.894,23.960 8.414,23.960 C8.414,24.866 8.414,25.763 8.414,26.686 C9.337,26.686 10.239,26.686 11.148,26.686 C11.148,27.209 11.148,27.717 11.148,28.241 C11.088,28.241 11.038,28.241 10.988,28.241 C9.670,28.241 8.353,28.239 7.036,28.244 C6.892,28.245 6.856,28.205 6.856,28.064 C6.861,26.749 6.859,25.434 6.859,24.119 C6.859,24.069 6.859,24.019 6.859,23.960 ZM13.445,20.980 C14.021,20.656 14.593,20.325 15.163,19.993 C15.251,19.941 15.317,19.939 15.406,19.992 C15.984,20.331 16.564,20.665 17.147,20.996 C17.240,21.049 17.277,21.106 17.277,21.215 C17.274,23.986 17.274,26.757 17.274,29.528 C15.952,29.528 14.630,29.528 13.308,29.528 C13.304,29.472 13.298,29.416 13.298,29.360 C13.298,26.655 13.299,23.949 13.295,21.244 C13.295,21.116 13.332,21.044 13.445,20.980 ZM19.396,26.686 C19.466,26.686 19.522,26.686 19.577,26.686 C20.379,26.686 21.180,26.683 21.981,26.689 C22.106,26.690 22.139,26.656 22.138,26.532 C22.133,25.727 22.136,24.922 22.136,24.118 C22.136,24.068 22.136,24.018 22.136,23.959 C22.657,23.959 23.161,23.959 23.680,23.959 C23.683,24.014 23.687,24.063 23.687,24.112 C23.688,25.432 23.686,26.751 23.691,28.071 C23.691,28.204 23.657,28.245 23.519,28.244 C22.198,28.239 20.876,28.240 19.554,28.243 C19.431,28.244 19.382,28.218 19.385,28.082 C19.394,27.666 19.388,27.249 19.389,26.833 C19.389,26.792 19.393,26.750 19.396,26.686 ZM26.316,12.096 C27.306,13.088 28.311,14.093 29.304,15.086 C28.314,16.076 27.309,17.081 26.304,18.086 C25.952,17.734 25.592,17.374 25.220,17.003 C25.854,16.372 26.495,15.733 27.139,15.091 C26.492,14.445 25.853,13.808 25.220,13.177 C25.595,12.807 25.959,12.448 26.316,12.096 Z" data-v-0b190a95></path><path id="staff-career-icon-warrior" d="M30.032,27.175 C28.608,23.640 27.184,20.106 25.759,16.572 C25.769,16.565 25.778,16.558 25.788,16.551 C26.864,17.719 27.940,18.886 29.046,20.087 C29.379,17.012 29.707,13.980 30.035,10.947 C30.044,10.948 30.053,10.948 30.062,10.949 C30.062,16.356 30.062,21.763 30.062,27.171 C30.052,27.172 30.042,27.173 30.032,27.175 ZM28.906,28.538 C28.922,28.570 28.936,28.603 28.968,28.672 C28.295,28.331 27.661,28.009 27.027,27.687 C25.621,26.973 24.214,26.261 22.810,25.544 C22.739,25.508 22.672,25.445 22.630,25.378 C22.224,24.743 21.826,24.104 21.421,23.469 C21.354,23.363 21.275,23.263 21.186,23.175 C17.670,19.673 14.152,16.172 10.634,12.672 C9.519,11.562 8.405,10.452 7.288,9.345 C7.216,9.273 7.184,9.202 7.185,9.099 C7.190,8.608 7.187,8.117 7.187,7.626 C7.187,7.585 7.187,7.544 7.187,7.504 C7.197,7.498 7.208,7.492 7.219,7.485 C11.416,11.663 15.613,15.840 19.807,20.014 C19.951,19.866 20.084,19.729 20.234,19.574 C16.051,15.410 11.852,11.231 7.639,7.038 C7.683,7.029 7.712,7.019 7.740,7.018 C8.269,7.017 8.799,7.015 9.328,7.022 C9.392,7.023 9.469,7.066 9.517,7.113 C10.979,8.564 12.438,10.019 13.898,11.472 C17.091,14.649 20.281,17.828 23.481,20.998 C23.669,21.185 23.924,21.307 24.154,21.451 C24.649,21.762 25.149,22.066 25.644,22.379 C25.711,22.421 25.774,22.487 25.810,22.557 C26.845,24.550 27.875,26.544 28.906,28.538 ZM10.712,6.093 C9.278,6.089 7.845,6.090 6.411,6.090 C6.352,6.090 6.292,6.090 6.217,6.090 C6.217,7.644 6.217,9.181 6.217,10.730 C5.573,10.730 4.944,10.730 4.297,10.730 C4.297,10.663 4.297,10.604 4.297,10.544 C4.297,8.986 4.297,7.428 4.299,5.871 C4.299,5.770 4.273,5.696 4.200,5.623 C3.053,4.486 1.908,3.346 0.763,2.208 C0.724,2.170 0.676,2.142 0.633,2.110 C0.633,2.100 0.633,2.091 0.633,2.082 C1.148,1.567 1.664,1.052 2.179,0.538 C2.189,0.538 2.198,0.538 2.208,0.538 C2.235,0.574 2.258,0.614 2.289,0.646 C3.430,1.783 4.572,2.918 5.710,4.057 C5.800,4.147 5.889,4.185 6.016,4.184 C7.577,4.180 9.137,4.182 10.697,4.182 C10.752,4.182 10.808,4.182 10.876,4.182 C10.880,4.232 10.885,4.272 10.885,4.313 C10.886,4.851 10.881,5.389 10.889,5.926 C10.892,6.069 10.841,6.093 10.712,6.093 ZM14.658,29.365 C15.504,29.274 16.351,29.185 17.198,29.094 C17.938,29.015 18.678,28.933 19.417,28.853 C19.678,28.825 19.938,28.799 20.199,28.771 C20.230,28.768 20.261,28.761 20.326,28.750 C19.133,27.661 17.960,26.591 16.787,25.521 C16.792,25.511 16.796,25.501 16.800,25.492 C16.844,25.506 16.888,25.519 16.930,25.536 C20.404,26.923 23.877,28.309 27.350,29.698 C27.399,29.717 27.439,29.760 27.483,29.791 C21.991,29.791 16.499,29.791 11.007,29.791 C11.470,29.730 11.933,29.662 12.397,29.609 C13.150,29.522 13.904,29.445 14.658,29.365 Z" data-v-0b190a95></path></g></svg>',
    1
  ),
  Su = ae({
    __name: "Section3_Three",
    setup(i) {
      ht((_) => ({ "13475fdc": v(g) }));
      const e = kt(),
        t = [bn],
        n = L();
      let s = G([
          { label: "rhodes", url: "" },
          { label: "rhine", url: "" },
          { label: "yan", url: "" },
          { label: "penguin", url: "" },
        ]),
        o = G([]);
      o.push(...tt(s, o, e.ThreeParticlesLogo)),
        we(
          () => e.ThreeParticlesLogo,
          (_, E) => {
            o.push(...tt(s, o, _)),
              e.ThreeParticlesLogo && n.value.clearCanvas();
          }
        );
      const r = G([
          {
            id: 0,
            name: "柊野",
            idex: "01",
            career: "#staff-career-icon-special",
            active: !0,
            footer: "BOO1 AMIYA",
            camp: "rhodes",
          },
          {
            id: 1,
            name: "DESC",
            idex: "02",
            career: "#staff-career-icon-medic",
            active: !1,
            footer: "BOO3 KAL'TSIT",
            camp: "rhodes",
          },
        ]),
        a = G([
          {
            id: 1,
            name: "Zhongye",
            EN: "zhongye",
            CV: "█████",
            desc: `本站点站长，站点工作筹建中`,
          },
          ,
          {
            id: 2,
            name: "小海",
            EN: "xiaohai",
            CV: "█████",
            desc: `加人事栏请加入组织在该GithubPage仓库的Index.5887384c.js的line6328行添加描述，并在1840行处更新自己的头像url，并提交PR`,
          },
          {
            id: 2,
            name: "[待定]",
            EN: "[null]",
            CV: "█████",
            desc: `我爱叶航天`,
          },

        ]),
        l = G({ width: 300, height: 300 });
      let u;
      const c = (_) => {
          u = _;
        },
        d = Object.assign({
          "../../assets/img/Three/0.webp": pr,
          "../../assets/img/Three/1.webp": mr,
          "../../assets/img/Three/10.webp": yr,
          "../../assets/img/Three/11.webp": br,
          "../../assets/img/Three/12.webp": wr,
          "../../assets/img/Three/2.webp": xr,
          "../../assets/img/Three/3.webp": Sr,
          "../../assets/img/Three/4.webp": Br,
          "../../assets/img/Three/5.webp": Dr,
          "../../assets/img/Three/6.webp": Mr,
          "../../assets/img/Three/7.webp": Or,
          "../../assets/img/Three/8.webp": zr,
          "../../assets/img/Three/9.webp": Rr,
        });
      let f = G([]);
      f.push(...Object.values(d).map((_) => _.default));
      let p = G([
          { name: "staffTop", state: !0 },
          { name: "staffBottom", state: !0 },
          { name: "staffDesc", state: !0 },
        ]),
        h = L(0),
        g = L("100%"),
        y = L(!0),
        x = L(""),
        C = L(!0);
      const b = async (_, E, w, F) => {
        if (y.value && !w.active) {
          switch (
            ((y.value = !1),
            E.forEach((k) => {
              k.active = !1;
            }),
            (E[_].active = !0),
            u.slideToLoop(_, 500),
            F)
          ) {
            case (F = "rhodes"):
              n.value.ChoiceImg(0), (x.value = F);
              break;
            case (F = "rhine"):
              n.value.ChoiceImg(1), (x.value = F);
              break;
            case (F = "yan"):
              n.value.ChoiceImg(2), (x.value = F);
              break;
            case (F = "penguin"):
              n.value.ChoiceImg(3), (x.value = F);
              break;
          }
          await ge(50),
            (p[0].state = !1),
            (C.value = !1),
            (g.value = "0%"),
            await ge(100),
            (p[2].state = !1),
            await ge(50),
            (p[1].state = !1),
            await ge(500),
            (g.value = "100%"),
            await ge(100),
            (h.value = _),
            (p[0].state = !0),
            (C.value = !0),
            await ge(100),
            (p[2].state = !0),
            await ge(50),
            (p[1].state = !0),
            (y.value = !0);
        }
      };
      return (_, E) => {
        const w = ci;
        return (
          P(),
          I(
            de,
            null,
            [
              m("div", Xl, [
                m("div", Yl, [
                  m("div", Zl, [
                    Kl,
                    m("div", Jl, [
                      N(
                        v(Tn),
                        {
                          modules: t,
                          "slides-per-view": 7,
                          direction: "vertical",
                          "centered-slides": !0,
                          "centered-slides-bounds": !0,
                          onSwiper: c,
                        },
                        {
                          default: q(() => [
                            (P(!0),
                            I(
                              de,
                              null,
                              Ee(
                                v(r),
                                (F) => (
                                  P(),
                                  Re(
                                    v(Qe),
                                    {
                                      key: F.id,
                                      onClick: (k) => b(F.id, v(r), F, F.camp),
                                      class: le(F.active ? "slideAcive" : ""),
                                      "data-cursor": "pointer",
                                    },
                                    {
                                      default: q(() => [
                                        m("span", Ql, Y(F.idex), 1),
                                        m("span", eu, [
                                          (P(),
                                          I("svg", tu, [
                                            m(
                                              "use",
                                              { "xlink:href": F.career },
                                              null,
                                              8,
                                              iu
                                            ),
                                          ])),
                                        ]),
                                        m("span", nu, Y(F.name), 1),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["onClick", "class"]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    m("div", su, Y(v(r)[v(h)].footer), 1),
                  ]),
                  m("div", ou, [
                    m("div", ru, [
                      N(
                        w,
                        {
                          canvasRect: v(l),
                          logos: v(o),
                          ref_key: "LiziChild",
                          ref: n,
                        },
                        null,
                        8,
                        ["canvasRect", "logos"]
                      ),
                    ]),
                    m("div", au, [
                      m("div", lu, [
                        m("div", uu, [
                          N(
                            te,
                            { name: "StaffBottom" },
                            {
                              default: q(() => [
                                ce(
                                  m(
                                    "div",
                                    cu,
                                    [
                                      (P(),
                                      I("svg", du, [
                                        m("text", fu, Y(v(a)[v(h)].EN), 1),
                                      ])),
                                    ],
                                    512
                                  ),
                                  [[he, v(p)[0].state]]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          m("div", hu, [
                            N(
                              te,
                              { name: "StaffTop" },
                              {
                                default: q(() => [
                                  ce(
                                    m(
                                      "div",
                                      pu,
                                      [m("span", null, Y(v(a)[v(h)].name), 1)],
                                      512
                                    ),
                                    [[he, v(p)[0].state]]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          N(
                            te,
                            { name: "StaffBottom" },
                            {
                              default: q(() => [
                                ce(
                                  m(
                                    "div",
                                    vu,
                                    [
                                      m("div", mu, [
                                        m("span", null, Y(v(a)[v(h)].EN), 1),
                                      ]),
                                      m("div", gu, [
                                        yu,
                                        m("span", Cu, Y(v(a)[v(h)].CV), 1),
                                        bu,
                                      ]),
                                    ],
                                    512
                                  ),
                                  [[he, v(p)[1].state]]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        N(
                          te,
                          { name: "Desc" },
                          {
                            default: q(() => [
                              ce(
                                m(
                                  "div",
                                  _u,
                                  [m("span", null, Y(v(a)[v(h)].desc), 1)],
                                  512
                                ),
                                [[he, v(p)[2].state]]
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                  m("div", wu, [
                    N(
                      te,
                      { name: "staffimg" },
                      {
                        default: q(() => [
                          ce(
                            m(
                              "div",
                              Eu,
                              [m("img", { src: v(f)[v(h)] }, null, 8, xu)],
                              512
                            ),
                            [[he, v(C)]]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
              ]),
              Fu,
            ],
            64
          )
        );
      };
    },
  });
const Tu = Ce(Su, [["__scopeId", "data-v-0b190a95"]]);
var Bu =
  typeof global == "object" && global && global.Object === Object && global;
const ku = Bu;
var Du = typeof self == "object" && self && self.Object === Object && self,
  Au = ku || Du || Function("return this")();
const Bn = Au;
var Mu = Bn.Symbol;
const Et = Mu;
var kn = Object.prototype,
  Pu = kn.hasOwnProperty,
  Ou = kn.toString,
  at = Et ? Et.toStringTag : void 0;
function Lu(i) {
  var e = Pu.call(i, at),
    t = i[at];
  try {
    i[at] = void 0;
    var n = !0;
  } catch {}
  var s = Ou.call(i);
  return n && (e ? (i[at] = t) : delete i[at]), s;
}
var zu = Object.prototype,
  Iu = zu.toString;
function Ru(i) {
  return Iu.call(i);
}
var $u = "[object Null]",
  Nu = "[object Undefined]",
  Pi = Et ? Et.toStringTag : void 0;
function Hu(i) {
  return i == null
    ? i === void 0
      ? Nu
      : $u
    : Pi && Pi in Object(i)
    ? Lu(i)
    : Ru(i);
}
function Vu(i) {
  return i != null && typeof i == "object";
}
var ju = "[object Symbol]";
function qu(i) {
  return typeof i == "symbol" || (Vu(i) && Hu(i) == ju);
}
var Uu = /\s/;
function Gu(i) {
  for (var e = i.length; e-- && Uu.test(i.charAt(e)); );
  return e;
}
var Wu = /^\s+/;
function Xu(i) {
  return i && i.slice(0, Gu(i) + 1).replace(Wu, "");
}
function xt(i) {
  var e = typeof i;
  return i != null && (e == "object" || e == "function");
}
var Oi = 0 / 0,
  Yu = /^[-+]0x[0-9a-f]+$/i,
  Zu = /^0b[01]+$/i,
  Ku = /^0o[0-7]+$/i,
  Ju = parseInt;
function Li(i) {
  if (typeof i == "number") return i;
  if (qu(i)) return Oi;
  if (xt(i)) {
    var e = typeof i.valueOf == "function" ? i.valueOf() : i;
    i = xt(e) ? e + "" : e;
  }
  if (typeof i != "string") return i === 0 ? i : +i;
  i = Xu(i);
  var t = Zu.test(i);
  return t || Ku.test(i) ? Ju(i.slice(2), t ? 2 : 8) : Yu.test(i) ? Oi : +i;
}
var Qu = function () {
  return Bn.Date.now();
};
const $t = Qu;
var ec = "Expected a function",
  tc = Math.max,
  ic = Math.min;
function nc(i, e, t) {
  var n,
    s,
    o,
    r,
    a,
    l,
    u = 0,
    c = !1,
    d = !1,
    f = !0;
  if (typeof i != "function") throw new TypeError(ec);
  (e = Li(e) || 0),
    xt(t) &&
      ((c = !!t.leading),
      (d = "maxWait" in t),
      (o = d ? tc(Li(t.maxWait) || 0, e) : o),
      (f = "trailing" in t ? !!t.trailing : f));
  function p(w) {
    var F = n,
      k = s;
    return (n = s = void 0), (u = w), (r = i.apply(k, F)), r;
  }
  function h(w) {
    return (u = w), (a = setTimeout(x, e)), c ? p(w) : r;
  }
  function g(w) {
    var F = w - l,
      k = w - u,
      T = e - F;
    return d ? ic(T, o - k) : T;
  }
  function y(w) {
    var F = w - l,
      k = w - u;
    return l === void 0 || F >= e || F < 0 || (d && k >= o);
  }
  function x() {
    var w = $t();
    if (y(w)) return C(w);
    a = setTimeout(x, g(w));
  }
  function C(w) {
    return (a = void 0), f && n ? p(w) : ((n = s = void 0), r);
  }
  function b() {
    a !== void 0 && clearTimeout(a), (u = 0), (n = l = s = a = void 0);
  }
  function _() {
    return a === void 0 ? r : C($t());
  }
  function E() {
    var w = $t(),
      F = y(w);
    if (((n = arguments), (s = this), (l = w), F)) {
      if (a === void 0) return h(l);
      if (d) return clearTimeout(a), (a = setTimeout(x, e)), p(l);
    }
    return a === void 0 && (a = setTimeout(x, e)), r;
  }
  return (E.cancel = b), (E.flush = _), E;
}
function sc(i) {
  for (var e = -1, t = i == null ? 0 : i.length, n = {}; ++e < t; ) {
    var s = i[e];
    n[s[0]] = s[1];
  }
  return n;
}
var oc = "Expected a function";
function zi(i, e, t) {
  var n = !0,
    s = !0;
  if (typeof i != "function") throw new TypeError(oc);
  return (
    xt(t) &&
      ((n = "leading" in t ? !!t.leading : n),
      (s = "trailing" in t ? !!t.trailing : s)),
    nc(i, e, { leading: n, maxWait: e, trailing: s })
  );
}
var Ii;
const Dn = typeof window < "u",
  An = (i) => typeof i == "number";
Dn &&
  ((Ii = window == null ? void 0 : window.navigator) == null
    ? void 0
    : Ii.userAgent) &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function rc(i) {
  return typeof i == "function" ? i() : v(i);
}
function ac(i) {
  return i;
}
function lc(i) {
  return ws() ? (Es(i), !0) : !1;
}
function uc(i, e = !0) {
  Bt() ? ke(i) : e ? i() : ln(i);
}
function cc(i) {
  var e;
  const t = rc(i);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const dc = Dn ? window : void 0;
function fc(i, e = !1) {
  const t = L(),
    n = () => (t.value = Boolean(i()));
  return n(), uc(n, e), t;
}
const ii =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  ni = "__vueuse_ssr_handlers__";
ii[ni] = ii[ni] || {};
ii[ni];
var Ri = Object.getOwnPropertySymbols,
  hc = Object.prototype.hasOwnProperty,
  pc = Object.prototype.propertyIsEnumerable,
  vc = (i, e) => {
    var t = {};
    for (var n in i) hc.call(i, n) && e.indexOf(n) < 0 && (t[n] = i[n]);
    if (i != null && Ri)
      for (var n of Ri(i)) e.indexOf(n) < 0 && pc.call(i, n) && (t[n] = i[n]);
    return t;
  };
function mc(i, e, t = {}) {
  const n = t,
    { window: s = dc } = n,
    o = vc(n, ["window"]);
  let r;
  const a = fc(() => s && "ResizeObserver" in s),
    l = () => {
      r && (r.disconnect(), (r = void 0));
    },
    u = we(
      () => cc(i),
      (d) => {
        l(),
          a.value && s && d && ((r = new ResizeObserver(e)), r.observe(d, o));
      },
      { immediate: !0, flush: "post" }
    ),
    c = () => {
      l(), u();
    };
  return lc(c), { isSupported: a, stop: c };
}
var $i;
(function (i) {
  (i.UP = "UP"),
    (i.RIGHT = "RIGHT"),
    (i.DOWN = "DOWN"),
    (i.LEFT = "LEFT"),
    (i.NONE = "NONE");
})($i || ($i = {}));
var gc = Object.defineProperty,
  Ni = Object.getOwnPropertySymbols,
  yc = Object.prototype.hasOwnProperty,
  Cc = Object.prototype.propertyIsEnumerable,
  Hi = (i, e, t) =>
    e in i
      ? gc(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  bc = (i, e) => {
    for (var t in e || (e = {})) yc.call(e, t) && Hi(i, t, e[t]);
    if (Ni) for (var t of Ni(e)) Cc.call(e, t) && Hi(i, t, e[t]);
    return i;
  };
const _c = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
bc({ linear: ac }, _c);
const Mn = (i) => i === void 0,
  wc = (i) => (li(i) ? !Number.isNaN(Number(i)) : !1);
function Ec(i, e = "px") {
  if (!i) return "";
  if (An(i) || wc(i)) return `${i}${e}`;
  if (li(i)) return i;
}
/*! Element Plus Icons Vue v2.0.10 */ var Pn = (i, e) => {
    let t = i.__vccOpts || i;
    for (let [n, s] of e) t[n] = s;
    return t;
  },
  xc = { name: "ArrowLeft" },
  Fc = { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
  Sc = m(
    "path",
    {
      fill: "currentColor",
      d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z",
    },
    null,
    -1
  ),
  Tc = [Sc];
function Bc(i, e, t, n, s, o) {
  return P(), I("svg", Fc, Tc);
}
var kc = Pn(xc, [
    ["render", Bc],
    ["__file", "arrow-left.vue"],
  ]),
  Dc = { name: "ArrowRight" },
  Ac = { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
  Mc = m(
    "path",
    {
      fill: "currentColor",
      d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z",
    },
    null,
    -1
  ),
  Pc = [Mc];
function Oc(i, e, t, n, s, o) {
  return P(), I("svg", Ac, Pc);
}
var Lc = Pn(Dc, [
  ["render", Oc],
  ["__file", "arrow-right.vue"],
]);
const On = "__epPropKey",
  zc = (i) => i,
  Ic = (i) => un(i) && !!i[On],
  Rc = (i, e) => {
    if (!un(i) || Ic(i)) return i;
    const { values: t, required: n, default: s, type: o, validator: r } = i,
      l = {
        type: o,
        required: !!n,
        validator:
          t || r
            ? (u) => {
                let c = !1,
                  d = [];
                if (
                  (t &&
                    ((d = Array.from(t)),
                    Fi(i, "default") && d.push(s),
                    c || (c = d.includes(u))),
                  r && (c || (c = r(u))),
                  !c && d.length > 0)
                ) {
                  const f = [...new Set(d)]
                    .map((p) => JSON.stringify(p))
                    .join(", ");
                  xs(
                    `Invalid prop: validation failed${
                      e ? ` for prop "${e}"` : ""
                    }. Expected one of [${f}], got value ${JSON.stringify(u)}.`
                  );
                }
                return c;
              }
            : void 0,
        [On]: !0,
      };
    return Fi(i, "default") && (l.default = s), l;
  },
  pi = (i) => sc(Object.entries(i).map(([e, t]) => [e, Rc(t, e)])),
  Ln = (i, e) => {
    if (
      ((i.install = (t) => {
        for (const n of [i, ...Object.values(e != null ? e : {})])
          t.component(n.name, n);
      }),
      e)
    )
      for (const [t, n] of Object.entries(e)) i[t] = n;
    return i;
  },
  $c = (i) => ((i.install = Fs), i),
  _t = (i) => {
    const e = Mt(i) ? i : [i],
      t = [];
    return (
      e.forEach((n) => {
        var s;
        Mt(n)
          ? t.push(..._t(n))
          : ti(n) && Mt(n.children)
          ? t.push(..._t(n.children))
          : (t.push(n),
            ti(n) &&
              ((s = n.component) == null ? void 0 : s.subTree) &&
              t.push(..._t(n.component.subTree)));
      }),
      t
    );
  },
  zn = Symbol("carouselContextKey"),
  Nc = Symbol(),
  Vi = L();
function Hc(i, e = void 0) {
  const t = Bt() ? cn(Nc, Vi) : Vi;
  return i
    ? Le(() => {
        var n, s;
        return (s = (n = t.value) == null ? void 0 : n[i]) != null ? s : e;
      })
    : t;
}
const Vc = "el",
  jc = "is-",
  Xe = (i, e, t, n, s) => {
    let o = `${i}-${e}`;
    return t && (o += `-${t}`), n && (o += `__${n}`), s && (o += `--${s}`), o;
  },
  vi = (i) => {
    const e = Hc("namespace", Vc);
    return {
      namespace: e,
      b: (h = "") => Xe(e.value, i, h, "", ""),
      e: (h) => (h ? Xe(e.value, i, "", h, "") : ""),
      m: (h) => (h ? Xe(e.value, i, "", "", h) : ""),
      be: (h, g) => (h && g ? Xe(e.value, i, h, g, "") : ""),
      em: (h, g) => (h && g ? Xe(e.value, i, "", h, g) : ""),
      bm: (h, g) => (h && g ? Xe(e.value, i, h, "", g) : ""),
      bem: (h, g, y) => (h && g && y ? Xe(e.value, i, h, g, y) : ""),
      is: (h, ...g) => {
        const y = g.length >= 1 ? g[0] : !0;
        return h && y ? `${jc}${h}` : "";
      },
      cssVar: (h) => {
        const g = {};
        for (const y in h) h[y] && (g[`--${e.value}-${y}`] = h[y]);
        return g;
      },
      cssVarName: (h) => `--${e.value}-${h}`,
      cssVarBlock: (h) => {
        const g = {};
        for (const y in h) h[y] && (g[`--${e.value}-${i}-${y}`] = h[y]);
        return g;
      },
      cssVarBlockName: (h) => `--${e.value}-${i}-${h}`,
    };
  },
  qc = (i, e, t) =>
    _t(i.subTree)
      .filter((o) => {
        var r;
        return (
          ti(o) &&
          ((r = o.type) == null ? void 0 : r.name) === e &&
          !!o.component
        );
      })
      .map((o) => o.component.uid)
      .map((o) => t[o])
      .filter((o) => !!o),
  Uc = (i, e) => {
    const t = {},
      n = dn([]);
    return {
      children: n,
      addChild: (r) => {
        (t[r.uid] = r), (n.value = qc(i, e, t));
      },
      removeChild: (r) => {
        delete t[r], (n.value = n.value.filter((a) => a.uid !== r));
      },
    };
  };
var mi = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [n, s] of e) t[n] = s;
  return t;
};
const Gc = pi({
    size: { type: zc([Number, String]) },
    color: { type: String },
  }),
  Wc = ae({ name: "ElIcon", inheritAttrs: !1 }),
  Xc = ae({
    ...Wc,
    props: Gc,
    setup(i) {
      const e = i,
        t = vi("icon"),
        n = Le(() => {
          const { size: s, color: o } = e;
          return !s && !o
            ? {}
            : { fontSize: Mn(s) ? void 0 : Ec(s), "--color": o };
        });
      return (s, o) => (
        P(),
        I(
          "i",
          Ss({ class: v(t).b(), style: v(n) }, s.$attrs),
          [ui(s.$slots, "default")],
          16
        )
      );
    },
  });
var Yc = mi(Xc, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue",
  ],
]);
const ji = Ln(Yc),
  Zc = pi({
    initialIndex: { type: Number, default: 0 },
    height: { type: String, default: "" },
    trigger: { type: String, values: ["hover", "click"], default: "hover" },
    autoplay: { type: Boolean, default: !0 },
    interval: { type: Number, default: 3e3 },
    indicatorPosition: {
      type: String,
      values: ["", "none", "outside"],
      default: "",
    },
    indicator: { type: Boolean, default: !0 },
    arrow: {
      type: String,
      values: ["always", "hover", "never"],
      default: "hover",
    },
    type: { type: String, values: ["", "card"], default: "" },
    loop: { type: Boolean, default: !0 },
    direction: {
      type: String,
      values: ["horizontal", "vertical"],
      default: "horizontal",
    },
    pauseOnHover: { type: Boolean, default: !0 },
  }),
  Kc = { change: (i, e) => [i, e].every(An) },
  qi = 300,
  Jc = (i, e, t) => {
    const {
        children: n,
        addChild: s,
        removeChild: o,
      } = Uc(Bt(), "ElCarouselItem"),
      r = L(-1),
      a = L(null),
      l = L(!1),
      u = L(),
      c = Le(() => i.arrow !== "never" && !v(p)),
      d = Le(() => n.value.some((A) => A.props.label.toString().length > 0)),
      f = Le(() => i.type === "card"),
      p = Le(() => i.direction === "vertical"),
      h = zi(
        (A) => {
          b(A);
        },
        qi,
        { trailing: !0 }
      ),
      g = zi((A) => {
        D(A);
      }, qi);
    function y() {
      a.value && (clearInterval(a.value), (a.value = null));
    }
    function x() {
      i.interval <= 0 ||
        !i.autoplay ||
        a.value ||
        (a.value = setInterval(() => C(), i.interval));
    }
    const C = () => {
      r.value < n.value.length - 1
        ? (r.value = r.value + 1)
        : i.loop && (r.value = 0);
    };
    function b(A) {
      if (li(A)) {
        const W = n.value.filter((Me) => Me.props.name === A);
        W.length > 0 && (A = n.value.indexOf(W[0]));
      }
      if (((A = Number(A)), Number.isNaN(A) || A !== Math.floor(A))) return;
      const M = n.value.length,
        O = r.value;
      A < 0
        ? (r.value = i.loop ? M - 1 : 0)
        : A >= M
        ? (r.value = i.loop ? 0 : M - 1)
        : (r.value = A),
        O === r.value && _(O),
        U();
    }
    function _(A) {
      n.value.forEach((M, O) => {
        M.translateItem(O, r.value, A);
      });
    }
    function E(A, M) {
      var O, W, Me, We;
      const Pe = v(n),
        ot = Pe.length;
      if (ot === 0 || !A.states.inStage) return !1;
      const Ei = M + 1,
        At = M - 1,
        xi = ot - 1,
        fs = Pe[xi].states.active,
        hs = Pe[0].states.active,
        ps =
          (W = (O = Pe[Ei]) == null ? void 0 : O.states) == null
            ? void 0
            : W.active,
        vs =
          (We = (Me = Pe[At]) == null ? void 0 : Me.states) == null
            ? void 0
            : We.active;
      return (M === xi && hs) || ps
        ? "left"
        : (M === 0 && fs) || vs
        ? "right"
        : !1;
    }
    function w() {
      (l.value = !0), i.pauseOnHover && y();
    }
    function F() {
      (l.value = !1), x();
    }
    function k(A) {
      v(p) ||
        n.value.forEach((M, O) => {
          A === E(M, O) && (M.states.hover = !0);
        });
    }
    function T() {
      v(p) ||
        n.value.forEach((A) => {
          A.states.hover = !1;
        });
    }
    function B(A) {
      r.value = A;
    }
    function D(A) {
      i.trigger === "hover" && A !== r.value && (r.value = A);
    }
    function z() {
      b(r.value - 1);
    }
    function V() {
      b(r.value + 1);
    }
    function U() {
      y(), x();
    }
    we(
      () => r.value,
      (A, M) => {
        _(M), M > -1 && e("change", A, M);
      }
    ),
      we(
        () => i.autoplay,
        (A) => {
          A ? x() : y();
        }
      ),
      we(
        () => i.loop,
        () => {
          b(r.value);
        }
      ),
      we(
        () => i.interval,
        () => {
          U();
        }
      ),
      we(
        () => n.value,
        () => {
          n.value.length > 0 && b(i.initialIndex);
        }
      );
    const S = dn();
    return (
      ke(() => {
        (S.value = mc(u.value, () => {
          _();
        })),
          x();
      }),
      Tt(() => {
        y(), u.value && S.value && S.value.stop();
      }),
      Ts(zn, {
        root: u,
        isCardType: f,
        isVertical: p,
        items: n,
        loop: i.loop,
        addItem: s,
        removeItem: o,
        setActiveItem: b,
      }),
      {
        root: u,
        activeIndex: r,
        arrowDisplay: c,
        hasLabel: d,
        hover: l,
        isCardType: f,
        items: n,
        handleButtonEnter: k,
        handleButtonLeave: T,
        handleIndicatorClick: B,
        handleMouseEnter: w,
        handleMouseLeave: F,
        setActiveItem: b,
        prev: z,
        next: V,
        throttledArrowClick: h,
        throttledIndicatorHover: g,
      }
    );
  },
  Qc = ["onMouseenter", "onClick"],
  e1 = { key: 0 },
  t1 = "ElCarousel",
  i1 = ae({ name: t1 }),
  n1 = ae({
    ...i1,
    props: Zc,
    emits: Kc,
    setup(i, { expose: e, emit: t }) {
      const n = i,
        {
          root: s,
          activeIndex: o,
          arrowDisplay: r,
          hasLabel: a,
          hover: l,
          isCardType: u,
          items: c,
          handleButtonEnter: d,
          handleButtonLeave: f,
          handleIndicatorClick: p,
          handleMouseEnter: h,
          handleMouseLeave: g,
          setActiveItem: y,
          prev: x,
          next: C,
          throttledArrowClick: b,
          throttledIndicatorHover: _,
        } = Jc(n, t),
        E = vi("carousel"),
        w = Le(() => {
          const k = [E.b(), E.m(n.direction)];
          return v(u) && k.push(E.m("card")), k;
        }),
        F = Le(() => {
          const k = [E.e("indicators"), E.em("indicators", n.direction)];
          return (
            v(a) && k.push(E.em("indicators", "labels")),
            (n.indicatorPosition === "outside" || v(u)) &&
              k.push(E.em("indicators", "outside")),
            k
          );
        });
      return (
        e({ setActiveItem: y, prev: x, next: C }),
        (k, T) => (
          P(),
          I(
            "div",
            {
              ref_key: "root",
              ref: s,
              class: le(v(w)),
              onMouseenter:
                T[6] || (T[6] = rt((...B) => v(h) && v(h)(...B), ["stop"])),
              onMouseleave:
                T[7] || (T[7] = rt((...B) => v(g) && v(g)(...B), ["stop"])),
            },
            [
              m(
                "div",
                {
                  class: le(v(E).e("container")),
                  style: $e({ height: k.height }),
                },
                [
                  v(r)
                    ? (P(),
                      Re(
                        te,
                        { key: 0, name: "carousel-arrow-left", persisted: "" },
                        {
                          default: q(() => [
                            ce(
                              m(
                                "button",
                                {
                                  type: "button",
                                  class: le([
                                    v(E).e("arrow"),
                                    v(E).em("arrow", "left"),
                                  ]),
                                  onMouseenter:
                                    T[0] || (T[0] = (B) => v(d)("left")),
                                  onMouseleave:
                                    T[1] ||
                                    (T[1] = (...B) => v(f) && v(f)(...B)),
                                  onClick:
                                    T[2] ||
                                    (T[2] = rt(
                                      (B) => v(b)(v(o) - 1),
                                      ["stop"]
                                    )),
                                },
                                [
                                  N(v(ji), null, {
                                    default: q(() => [N(v(kc))]),
                                    _: 1,
                                  }),
                                ],
                                34
                              ),
                              [
                                [
                                  he,
                                  (k.arrow === "always" || v(l)) &&
                                    (n.loop || v(o) > 0),
                                ],
                              ]
                            ),
                          ]),
                          _: 1,
                        }
                      ))
                    : X("v-if", !0),
                  v(r)
                    ? (P(),
                      Re(
                        te,
                        { key: 1, name: "carousel-arrow-right", persisted: "" },
                        {
                          default: q(() => [
                            ce(
                              m(
                                "button",
                                {
                                  type: "button",
                                  class: le([
                                    v(E).e("arrow"),
                                    v(E).em("arrow", "right"),
                                  ]),
                                  onMouseenter:
                                    T[3] || (T[3] = (B) => v(d)("right")),
                                  onMouseleave:
                                    T[4] ||
                                    (T[4] = (...B) => v(f) && v(f)(...B)),
                                  onClick:
                                    T[5] ||
                                    (T[5] = rt(
                                      (B) => v(b)(v(o) + 1),
                                      ["stop"]
                                    )),
                                },
                                [
                                  N(v(ji), null, {
                                    default: q(() => [N(v(Lc))]),
                                    _: 1,
                                  }),
                                ],
                                34
                              ),
                              [
                                [
                                  he,
                                  (k.arrow === "always" || v(l)) &&
                                    (n.loop || v(o) < v(c).length - 1),
                                ],
                              ]
                            ),
                          ]),
                          _: 1,
                        }
                      ))
                    : X("v-if", !0),
                  ui(k.$slots, "default"),
                ],
                6
              ),
              k.indicatorPosition !== "none"
                ? (P(),
                  I(
                    "ul",
                    { key: 0, class: le(v(F)) },
                    [
                      (P(!0),
                      I(
                        de,
                        null,
                        Ee(
                          v(c),
                          (B, D) => (
                            P(),
                            I(
                              "li",
                              {
                                key: D,
                                class: le([
                                  v(E).e("indicator"),
                                  v(E).em("indicator", k.direction),
                                  v(E).is("active", D === v(o)),
                                ]),
                                onMouseenter: (z) => v(_)(D),
                                onClick: rt((z) => v(p)(D), ["stop"]),
                              },
                              [
                                m(
                                  "button",
                                  { class: le(v(E).e("button")) },
                                  [
                                    v(a)
                                      ? (P(),
                                        I("span", e1, Y(B.props.label), 1))
                                      : X("v-if", !0),
                                  ],
                                  2
                                ),
                              ],
                              42,
                              Qc
                            )
                          )
                        ),
                        128
                      )),
                    ],
                    2
                  ))
                : X("v-if", !0),
            ],
            34
          )
        )
      );
    },
  });
var s1 = mi(n1, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue",
  ],
]);
const o1 = pi({
    name: { type: String, default: "" },
    label: { type: [String, Number], default: "" },
  }),
  r1 = (i, e) => {
    const t = cn(zn),
      n = Bt(),
      s = 0.83,
      o = L(!1),
      r = L(0),
      a = L(1),
      l = L(!1),
      u = L(!1),
      c = L(!1),
      d = L(!1),
      { isCardType: f, isVertical: p } = t;
    function h(b, _, E) {
      const w = E - 1,
        F = _ - 1,
        k = _ + 1,
        T = E / 2;
      return _ === 0 && b === w
        ? -1
        : _ === w && b === 0
        ? E
        : b < F && _ - b >= T
        ? E + 1
        : b > k && b - _ >= T
        ? -2
        : b;
    }
    function g(b, _) {
      var E;
      const w = ((E = t.root.value) == null ? void 0 : E.offsetWidth) || 0;
      return c.value
        ? (w * ((2 - s) * (b - _) + 1)) / 4
        : b < _
        ? (-(1 + s) * w) / 4
        : ((3 + s) * w) / 4;
    }
    function y(b, _, E) {
      const w = t.root.value;
      return w ? ((E ? w.offsetHeight : w.offsetWidth) || 0) * (b - _) : 0;
    }
    const x = (b, _, E) => {
      var w;
      const F = v(f),
        k = (w = t.items.value.length) != null ? w : Number.NaN,
        T = b === _;
      !F && !Mn(E) && (d.value = T || b === E),
        !T && k > 2 && t.loop && (b = h(b, _, k));
      const B = v(p);
      (l.value = T),
        F
          ? ((c.value = Math.round(Math.abs(b - _)) <= 1),
            (r.value = g(b, _)),
            (a.value = v(l) ? 1 : s))
          : (r.value = y(b, _, B)),
        (u.value = !0);
    };
    function C() {
      if (t && v(f)) {
        const b = t.items.value.findIndex(({ uid: _ }) => _ === n.uid);
        t.setActiveItem(b);
      }
    }
    return (
      ke(() => {
        t.addItem({
          props: i,
          states: G({
            hover: o,
            translate: r,
            scale: a,
            active: l,
            ready: u,
            inStage: c,
            animating: d,
          }),
          uid: n.uid,
          translateItem: x,
        });
      }),
      Bs(() => {
        t.removeItem(n.uid);
      }),
      {
        active: l,
        animating: d,
        hover: o,
        inStage: c,
        isVertical: p,
        translate: r,
        isCardType: f,
        scale: a,
        ready: u,
        handleItemClick: C,
      }
    );
  },
  a1 = ae({ name: "ElCarouselItem" }),
  l1 = ae({
    ...a1,
    props: o1,
    setup(i) {
      const e = i,
        t = vi("carousel"),
        {
          active: n,
          animating: s,
          hover: o,
          inStage: r,
          isVertical: a,
          translate: l,
          isCardType: u,
          scale: c,
          ready: d,
          handleItemClick: f,
        } = r1(e),
        p = Le(() => {
          const g = `${`translate${v(a) ? "Y" : "X"}`}(${v(l)}px)`,
            y = `scale(${v(c)})`;
          return { transform: [g, y].join(" ") };
        });
      return (h, g) =>
        ce(
          (P(),
          I(
            "div",
            {
              class: le([
                v(t).e("item"),
                v(t).is("active", v(n)),
                v(t).is("in-stage", v(r)),
                v(t).is("hover", v(o)),
                v(t).is("animating", v(s)),
                { [v(t).em("item", "card")]: v(u) },
              ]),
              style: $e(v(p)),
              onClick: g[0] || (g[0] = (...y) => v(f) && v(f)(...y)),
            },
            [
              v(u)
                ? ce(
                    (P(),
                    I("div", { key: 0, class: le(v(t).e("mask")) }, null, 2)),
                    [[he, !v(n)]]
                  )
                : X("v-if", !0),
              ui(h.$slots, "default"),
            ],
            6
          )),
          [[he, v(d)]]
        );
    },
  });
var In = mi(l1, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue",
  ],
]);
const u1 = Ln(s1, { CarouselItem: In }),
  c1 = $c(In);
const d1 = "" + new URL("https://pic4.zhimg.com/80/v2-e5cc625ebde4177fccedc126bbb4f4b7_720w.webp", import.meta.url).href,
  f1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: d1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  h1 = "" + new URL("https://pic4.zhimg.com/80/v2-e5cc625ebde4177fccedc126bbb4f4b7_720w.webp", import.meta.url).href,
  p1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: h1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  v1 = "" + new URL("https://pic4.zhimg.com/80/v2-e5cc625ebde4177fccedc126bbb4f4b7_720w.webp", import.meta.url).href,
  m1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: v1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  g1 = "" + new URL("https://pic4.zhimg.com/80/v2-e5cc625ebde4177fccedc126bbb4f4b7_720w.webp", import.meta.url).href,
  y1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: g1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  C1 = "" + new URL("https://pic4.zhimg.com/80/v2-e5cc625ebde4177fccedc126bbb4f4b7_720w.webp", import.meta.url).href,
  b1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: C1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _1 = (i) => (Ue("data-v-40681bb9"), (i = i()), Ge(), i),
  w1 = { class: "sctionDisplay" },
  E1 = { class: "sctionWapper" },
  x1 = { class: "article" },
  F1 = ["onClick"],
  S1 = { class: "inforBanner" },
  T1 = { class: "banner" },
  B1 = { class: "articleConner" },
  k1 = { class: "acticleWapper" },
  D1 = { key: 0, class: "acticleList" },
  A1 = {
    href: "javascript:void(0)",
    class: "acticleLink",
    "data-cursor": "pointer",
  },
  M1 = { class: "acticleDate", "data-cursor": "pointer" },
  P1 = { class: "acticleCate", "data-cursor": "pointer" },
  O1 = { class: "acticleTitle", "data-cursor": "pointer" },
  L1 = _1(() =>
    m(
      "div",
      { class: "acticleFooter" },
      [
        m("div", { class: "articleMore" }, [
          m(
            "a",
            {
              href: "javascript:void(0)",
              class: "articleButton",
              "data-cursor": "pointer",
            },
            [
              m("span", null, ""),
              m(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: "0 0 48 18",
                },
                [m("path", { d: "M6 13 h35 l-6 -6", fill: "none" })]
              ),
            ]
          ),
        ]),
      ],
      -1
    )
  ),
  z1 = { class: "particle" },
  I1 = ae({
    __name: "Section2_Two",
    setup(i) {
      const e = kt(),
        t = L();
      let n = G([
          { label: "rhodes", url: "" },
          { label: "rhine", url: "" },
          { label: "yan", url: "" },
          { label: "penguin", url: "" },
        ]),
        s = G([]);
      s.push(...tt(n, s, e.TwoParticlesLogo)),
        we(
          () => e.TwoParticlesLogo,
          (h, g) => {
            s.push(...tt(n, s, h)), e.TwoParticlesLogo && t.value.clearCanvas();
          }
        );
      const o = Object.assign({
        "../../assets/img/Two/banner_1.jpg": f1,
        "../../assets/img/Two/banner_2.jpg": p1,
        "../../assets/img/Two/banner_3.jpg": m1,
        "../../assets/img/Two/banner_4.jpg": y1,
        "../../assets/img/Two/banner_5.jpg": b1,
      });
      let r = G([]);
      r.push(...Object.values(o).map((h) => h.default));
      const a = G({ width: 400, height: 400 }),
        l = G([
          {
            id: 1,
            Date: "2024 - 11 - 08",
            Cate: "公告",
            Title:
              "欢迎来到GZHU-SITE-193！",
          },
 {
            id: 2,
            Date: "2024 - 11 - 08",
            Cate: "公告",
            Title:
              "GZHU-193号工作站站点已成功建立，欢迎加入并维护我们的站点！",
          },
 {
            id: 3,
            Date: "2024 - 11 - 08",
            Cate: "公告",
            Title:
              "关注站长博客：zhongye1.github.io !",
          },
 {
            id: 4,
            Date: "1967 - 10 - 12",
            Cate: "公告",
            Title:
              "敢为人先，携手共进，共克时艰，只争朝夕：8062设施会议通知",
          },
        ]),
        u = G([
          {
            id: 1,
            Date: "2022 - 12 - 15",
            Cate: "\u516C\u544A",
            Title:
              "[活动公告]金枪鱼之夜：支持多种 ISA 扩展的二进制背后的秘密",
          },
          
        ]),
        c = G([
          {
            id: 1,
            Date: "2022 - 12 - 17",
            Cate: "\u6D3B\u52A8",
            Title:
              "[杂谈]关于最近",
          },
          
        ]),
        d = G([
          {
            id: 1,
            Date: "2022 - 12 - 01",
            Cate: "\u65B0\u95FB",
            Title:
              "金枪鱼之夜：关于CodeGeeX 自动代码生成插件",
          },
          
          
        ]),
        f = G([
          { id: 0, name: "\u6700\u65B0", active: !0, articleobj: l },
          { id: 1, name: "\u516C\u544A", active: !1, articleobj: u },
          { id: 2, name: "\u6D3B\u52A8", active: !1, articleobj: c },
          { id: 3, name: "\u65B0\u95FB", active: !1, articleobj: d },
        ]),
        p = (h, g) => {
          g.forEach((y) => {
            y.active = !1;
          }),
            (h.active = !0);
        };
      return (h, g) => {
        const y = c1,
          x = u1,
          C = ci,
          b = ks("lazy");
        return (
          P(),
          I("div", w1, [
            m("div", E1, [
              m("div", x1, [
                (P(!0),
                I(
                  de,
                  null,
                  Ee(
                    v(f),
                    (_) => (
                      P(),
                      I(
                        "ol",
                        {
                          class: "articleList",
                          key: _.id,
                          "data-cursor": "pointer",
                        },
                        [
                          m(
                            "li",
                            {
                              class: le([
                                "acticleItem",
                                _.active ? "active" : "",
                              ]),
                              onClick: (E) => p(_, v(f)),
                              "data-cursor": "pointer",
                              ref_for: !0,
                              ref: "articleOl",
                            },
                            Y(_.name),
                            11,
                            F1
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
              m("div", S1, [
                m("div", T1, [
                  N(
                    x,
                    {
                      trigger: "click",
                      height: "16rem",
                      loop: "",
                      interval: 4e3,
                      arrow: "never",
                    },
                    {
                      default: q(() => [
                        (P(!0),
                        I(
                          de,
                          null,
                          Ee(
                            v(r),
                            (_) => (
                              P(),
                              Re(
                                y,
                                { key: _ },
                                {
                                  default: q(() => [
                                    ce(m("img", null, null, 512), [[b, _]]),
                                    Ds(" \u61D2\u52A0\u8F7D\u56FE\u7247 "),
                                  ]),
                                  _: 2,
                                },
                                1024
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              m("div", B1, [
                m("div", k1, [
                  (P(!0),
                  I(
                    de,
                    null,
                    Ee(
                      v(f),
                      (_) => (
                        P(),
                        I(
                          de,
                          { key: _.id },
                          [
                            _.active
                              ? (P(),
                                I("ol", D1, [
                                  (P(!0),
                                  I(
                                    de,
                                    null,
                                    Ee(
                                      _.articleobj,
                                      (E) => (
                                        P(),
                                        I(
                                          "li",
                                          {
                                            class: le([
                                              "articleItem",
                                              E.id === 6 ? "articleItemNo" : "",
                                            ]),
                                            key: E.id,
                                            "data-cursor": "pointer",
                                          },
                                          [
                                            m("a", A1, [
                                              m("span", M1, Y(E.Date), 1),
                                              m("span", P1, Y(E.Cate), 1),
                                              m("h1", O1, Y(E.Title), 1),
                                            ]),
                                          ],
                                          2
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]))
                              : X("", !0),
                          ],
                          64
                        )
                      )
                    ),
                    128
                  )),
                ]),
                L1,
              ]),
            ]),
            m("div", z1, [
              N(
                C,
                {
                  canvasRect: v(a),
                  logos: v(s),
                  ParticlesBoolean: !0,
                  ref_key: "LiziChild",
                  ref: t,
                },
                null,
                8,
                ["canvasRect", "logos"]
              ),
            ]),
          ])
        );
      };
    },
  });
const R1 = Ce(I1, [["__scopeId", "data-v-40681bb9"]]);
function $1(i) {
  return {
    all: (i = i || new Map()),
    on: function (e, t) {
      var n = i.get(e);
      n ? n.push(t) : i.set(e, [t]);
    },
    off: function (e, t) {
      var n = i.get(e);
      n && (t ? n.splice(n.indexOf(t) >>> 0, 1) : i.set(e, []));
    },
    emit: function (e, t) {
      var n = i.get(e);
      n &&
        n.slice().map(function (s) {
          s(t);
        }),
        (n = i.get("*")) &&
          n.slice().map(function (s) {
            s(e, t);
          });
    },
  };
}
const N1 = $1(),
  Rn = N1,
  De = (i) => (Ue("data-v-563ab70f"), (i = i()), Ge(), i),
  H1 = { id: "section-home" },
  V1 = { class: "homepage" },
  j1 = { class: "homeLogo" },
  q1 = ["src"],
  U1 = { class: "homeDisplay" },
  G1 = { class: "homeTitleGrid" },
  W1 = { key: 0, class: "homeGridWapper" },
  X1 = De(() =>
    m(
      "span",
      { class: "homeSpan" },
      [m("span", null, "A"), m("span", null, "R"), m("span", null, "K")],
      -1
    )
  ),
  Y1 = De(() =>
    m(
      "span",
      { class: "homeSpan" },
      [m("span", null, "N"), m("span", null, "I"), m("span", null, "G")],
      -1
    )
  ),
  Z1 = De(() =>
    m(
      "span",
      { class: "homeSpan" },
      [m("span", null, "H"), m("span", null, "T"), m("span", null, "S")],
      -1
    )
  ),
  K1 = [X1, Y1, Z1],
  J1 = { class: "homeDesc" },
  Q1 = { class: "homeTitleWapper" },
  ed = { key: 0, class: "homeTitle" },
  td = De(() =>
    m(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 652 93",
      },
      [
        m("path", {
          d: "M 50.294 8.35 L 45.899 13.428 A 20.942 20.942 0 0 0 40.346 9.196 A 23.902 23.902 0 0 0 39.796 8.912 A 16.085 16.085 0 0 0 35.717 7.548 Q 33.876 7.182 31.762 7.136 A 28.167 28.167 0 0 0 31.153 7.129 A 23.843 23.843 0 0 0 24.671 7.978 A 19.716 19.716 0 0 0 19.092 10.523 A 21.347 21.347 0 0 0 12.299 17.896 A 26.675 26.675 0 0 0 11.158 20.142 A 30.46 30.46 0 0 0 8.977 27.367 Q 8.399 30.624 8.354 34.33 A 51.812 51.812 0 0 0 8.35 34.961 A 46.203 46.203 0 0 0 9.048 43.25 Q 9.881 47.813 11.708 51.465 A 24.063 24.063 0 0 0 14.258 55.518 A 19.206 19.206 0 0 0 27.369 62.842 A 28.282 28.282 0 0 0 31.153 63.086 A 23.663 23.663 0 0 0 38.233 62.037 A 16.306 16.306 0 0 0 41.026 60.89 A 11.982 11.982 0 0 0 43.702 58.985 L 43.702 40.821 L 29.102 40.821 L 29.102 34.131 L 51.124 34.131 L 51.124 62.354 A 20.963 20.963 0 0 1 46.956 65.727 Q 44.964 66.974 42.53 67.969 A 29.309 29.309 0 0 1 34.989 69.895 A 37.283 37.283 0 0 1 30.421 70.166 A 32.192 32.192 0 0 1 21.087 68.855 A 27.882 27.882 0 0 1 14.649 65.992 A 27.831 27.831 0 0 1 4.9 55.882 A 34.037 34.037 0 0 1 3.882 53.98 Q 0.143 46.43 0.006 35.957 A 61.216 61.216 0 0 1 0.001 35.157 A 49.664 49.664 0 0 1 0.767 26.209 A 35.606 35.606 0 0 1 4.005 16.407 A 31.07 31.07 0 0 1 10.15 8.004 A 28.284 28.284 0 0 1 14.991 4.273 A 29.216 29.216 0 0 1 28.199 0.105 A 35.934 35.934 0 0 1 30.958 0 Q 36.822 0 41.055 1.834 A 17.455 17.455 0 0 1 42.676 2.637 A 39.572 39.572 0 0 1 46.442 5.028 Q 48.646 6.62 50.294 8.35 Z M 130.958 68.946 L 122.95 68.946 L 122.95 1.27 L 130.958 1.27 L 130.958 29.786 L 163.135 29.786 L 163.135 1.27 L 171.192 1.27 L 171.192 68.946 L 163.135 68.946 L 163.135 36.817 L 130.958 36.817 L 130.958 68.946 Z M 557.52 63.282 L 561.964 58.35 A 15.077 15.077 0 0 0 566.846 62.183 A 13.366 13.366 0 0 0 572.901 63.624 Q 577.686 63.624 581.69 60.791 A 14.173 14.173 0 0 0 584.89 57.589 Q 586.053 56.011 587.021 53.966 A 31.072 31.072 0 0 0 588.111 51.343 A 33.301 33.301 0 0 0 589.487 46.249 Q 590.524 40.888 590.528 33.554 A 103.438 103.438 0 0 0 590.528 33.497 A 61.172 61.172 0 0 0 590.156 26.51 Q 589.33 19.348 586.671 14.82 Q 582.969 8.518 576.076 8.263 A 15.881 15.881 0 0 0 575.489 8.252 A 10.157 10.157 0 0 0 567.833 11.592 A 13.7 13.7 0 0 0 567.164 12.354 Q 563.819 16.456 563.819 22.999 A 22.443 22.443 0 0 0 564.209 27.31 Q 564.707 29.854 565.842 31.858 A 12.524 12.524 0 0 0 566.871 33.399 Q 569.923 37.305 576.27 37.305 Q 579.542 37.305 583.399 35.157 Q 586.5 33.429 589.349 29.746 A 34.642 34.642 0 0 0 590.723 27.832 L 591.016 34.229 A 24.514 24.514 0 0 1 583.594 40.845 A 19.304 19.304 0 0 1 579.285 42.695 A 15.728 15.728 0 0 1 574.952 43.311 A 23.255 23.255 0 0 1 569.091 42.612 A 16.578 16.578 0 0 1 561.353 38.233 Q 557.171 34.031 556.45 26.352 A 35.874 35.874 0 0 1 556.299 22.999 A 25.104 25.104 0 0 1 556.959 17.127 A 20.105 20.105 0 0 1 558.936 12.012 Q 561.573 7.276 565.943 4.615 A 18.186 18.186 0 0 1 575.587 1.954 A 19.744 19.744 0 0 1 587.159 5.494 A 20.606 20.606 0 0 1 592.482 11.007 A 28.874 28.874 0 0 1 595.142 16.041 Q 597.536 21.814 597.957 29.923 A 68.874 68.874 0 0 1 598.048 33.497 Q 598.048 42.668 596.371 49.36 A 35.256 35.256 0 0 1 594.532 54.859 Q 591.604 61.59 587.168 65.221 A 18.908 18.908 0 0 1 585.328 66.553 A 22.4 22.4 0 0 1 573.096 70.166 A 23.414 23.414 0 0 1 568.61 69.757 A 17.436 17.436 0 0 1 564.088 68.238 A 22.185 22.185 0 0 1 557.52 63.282 Z M 464.503 68.946 L 424.757 68.946 L 424.757 1.27 L 463.477 1.27 L 463.477 8.057 L 432.764 8.057 L 432.764 29.883 L 458.643 29.883 L 458.643 36.817 L 432.764 36.817 L 432.764 62.159 L 464.503 62.159 L 464.503 68.946 Z M 189.6 41.358 L 189.6 1.27 L 197.657 1.27 L 197.657 41.456 A 51.59 51.59 0 0 0 197.867 46.267 Q 198.328 51.18 199.805 54.419 A 17.503 17.503 0 0 0 201.693 57.655 Q 203.37 59.896 205.616 61.109 A 16.647 16.647 0 0 0 213.152 63.078 A 19.637 19.637 0 0 0 213.721 63.086 A 18.046 18.046 0 0 0 219.584 62.152 A 16.601 16.601 0 0 0 221.998 61.109 A 12.236 12.236 0 0 0 226.023 57.626 A 17.499 17.499 0 0 0 227.93 54.419 A 19.844 19.844 0 0 0 229.226 50.576 Q 229.677 48.659 229.902 46.379 A 50.187 50.187 0 0 0 230.128 41.456 L 230.128 1.27 L 237.842 1.27 L 237.842 41.358 Q 237.842 48.694 236.353 53.965 A 24.697 24.697 0 0 1 234.62 58.472 A 22.978 22.978 0 0 1 231.391 63.29 A 17.624 17.624 0 0 1 225.953 67.481 A 26.165 26.165 0 0 1 216.829 70.019 A 32.098 32.098 0 0 1 213.721 70.166 A 29.236 29.236 0 0 1 206.167 69.22 A 25.313 25.313 0 0 1 201.514 67.481 A 18.101 18.101 0 0 1 194.821 61.752 A 24.319 24.319 0 0 1 192.823 58.472 Q 190.497 53.909 189.85 47.019 A 60.638 60.638 0 0 1 189.6 41.358 Z M 109.18 68.946 L 62.647 68.946 L 62.647 64.209 L 98.829 8.057 L 65.967 8.057 L 65.967 1.27 L 108.839 1.27 L 108.839 6.006 L 72.657 62.159 L 109.18 62.159 L 109.18 68.946 Z M 283.155 60.108 L 287.696 54.737 Q 291.309 58.692 296.339 60.889 Q 301.368 63.086 306.788 63.086 A 24.482 24.482 0 0 0 310.98 62.75 Q 313.268 62.352 315.1 61.482 A 12.059 12.059 0 0 0 317.53 59.961 A 9.939 9.939 0 0 0 321.351 52.731 A 12.662 12.662 0 0 0 321.387 51.758 A 14.075 14.075 0 0 0 321.209 49.444 Q 320.995 48.165 320.527 47.129 A 7.205 7.205 0 0 0 319.874 45.972 A 11.488 11.488 0 0 0 316.999 43.125 A 14.068 14.068 0 0 0 315.772 42.359 A 60.847 60.847 0 0 0 313.026 40.925 A 78.834 78.834 0 0 0 309.962 39.502 L 300.196 35.157 Q 297.071 33.79 293.897 31.641 A 18.452 18.452 0 0 1 288.599 26.124 A 13.339 13.339 0 0 1 286.853 21.706 Q 286.487 19.96 286.476 17.952 A 22.756 22.756 0 0 1 286.475 17.823 A 16.653 16.653 0 0 1 287.491 11.95 A 15.399 15.399 0 0 1 289.21 8.643 A 18.402 18.402 0 0 1 295.266 3.086 A 22.299 22.299 0 0 1 296.705 2.32 A 22.968 22.968 0 0 1 304.192 0.184 A 28.614 28.614 0 0 1 307.471 0 Q 313.673 0 318.751 2.344 A 32.094 32.094 0 0 1 323.954 5.336 A 26.356 26.356 0 0 1 327.296 8.155 L 322.852 13.526 A 24.394 24.394 0 0 0 315.87 8.863 Q 311.964 7.129 307.471 7.129 A 19.43 19.43 0 0 0 303.54 7.505 Q 301.094 8.01 299.192 9.195 A 11.462 11.462 0 0 0 298.17 9.913 A 8.846 8.846 0 0 0 294.672 16.342 A 11.411 11.411 0 0 0 294.63 17.334 A 10.583 10.583 0 0 0 294.901 19.794 A 7.596 7.596 0 0 0 296.339 22.803 A 13.547 13.547 0 0 0 300.158 26.076 A 15.639 15.639 0 0 0 300.635 26.343 A 63.908 63.908 0 0 0 305.86 28.858 L 315.528 33.008 A 36.999 36.999 0 0 1 320.916 35.789 A 32.464 32.464 0 0 1 322.657 36.963 A 17.019 17.019 0 0 1 327.686 42.652 A 14.252 14.252 0 0 1 329.071 46.433 Q 329.446 48.132 329.522 50.102 A 26.419 26.419 0 0 1 329.542 51.124 A 17.433 17.433 0 0 1 326.758 60.767 Q 323.975 65.088 318.873 67.627 Q 313.915 70.095 307.09 70.164 A 39.021 39.021 0 0 1 306.69 70.166 A 33.883 33.883 0 0 1 298.515 69.211 A 29.076 29.076 0 0 1 293.458 67.457 A 32.266 32.266 0 0 1 283.155 60.108 Z M 605.811 60.938 L 609.864 55.762 A 29.447 29.447 0 0 0 614.904 60.024 A 34.46 34.46 0 0 0 616.871 61.255 A 16.854 16.854 0 0 0 621.957 63.154 Q 624.225 63.624 626.856 63.624 A 17.88 17.88 0 0 0 631.425 63.067 A 13.485 13.485 0 0 0 636.841 60.254 A 11.056 11.056 0 0 0 640.703 52.612 A 15.589 15.589 0 0 0 640.772 51.124 A 12.903 12.903 0 0 0 640.128 46.989 A 11.45 11.45 0 0 0 638.721 44.166 Q 636.963 41.591 633.286 40.004 A 20.984 20.984 0 0 0 632.007 39.502 Q 627.356 37.847 619.475 37.842 A 76.022 76.022 0 0 0 619.434 37.842 L 619.434 31.641 Q 626.514 31.641 630.665 29.957 Q 633.984 28.609 635.804 26.512 A 9.06 9.06 0 0 0 636.622 25.416 Q 638.428 22.559 638.428 19.092 A 12.218 12.218 0 0 0 637.967 15.647 A 9.279 9.279 0 0 0 635.279 11.329 A 10.596 10.596 0 0 0 630.545 8.87 Q 628.923 8.474 627.014 8.449 A 19.732 19.732 0 0 0 626.758 8.448 A 16.287 16.287 0 0 0 619.044 10.328 A 26.259 26.259 0 0 0 612.549 15.186 L 608.301 10.108 A 36.224 36.224 0 0 1 616.602 4.297 A 21.515 21.515 0 0 1 624.317 2.082 A 26.458 26.458 0 0 1 626.954 1.954 A 27.48 27.48 0 0 1 633.133 2.613 A 19.547 19.547 0 0 1 640.943 6.275 Q 646.436 10.596 646.436 18.555 A 17.413 17.413 0 0 1 645.863 23.133 A 13.284 13.284 0 0 1 643.091 28.394 A 19.69 19.69 0 0 1 636.629 33.282 A 24.358 24.358 0 0 1 634.376 34.229 L 634.376 34.668 A 20.51 20.51 0 0 1 644.581 40.332 A 14.513 14.513 0 0 1 648.679 48.991 A 19.904 19.904 0 0 1 648.829 51.465 A 19.47 19.47 0 0 1 648.169 56.638 A 15.778 15.778 0 0 1 645.923 61.475 A 18.802 18.802 0 0 1 638.212 67.885 A 22.162 22.162 0 0 1 638.135 67.92 A 24.727 24.727 0 0 1 629.85 70.059 A 29.855 29.855 0 0 1 627.296 70.166 Q 620.93 70.166 616.352 68.333 A 19.232 19.232 0 0 1 614.234 67.334 A 38.172 38.172 0 0 1 609.685 64.419 A 28.361 28.361 0 0 1 605.811 60.938 Z M 391.846 68.946 L 383.839 68.946 L 383.839 8.057 L 363.233 8.057 L 363.233 1.27 L 412.501 1.27 L 412.501 8.057 L 391.846 8.057 L 391.846 68.946 Z M 546.241 68.946 L 509.424 68.946 L 509.424 62.354 L 524.61 62.354 L 524.61 13.086 L 512.647 13.086 L 512.647 7.959 A 53.223 53.223 0 0 0 518.573 6.607 Q 521.427 5.77 523.796 4.657 A 27.026 27.026 0 0 0 526.465 3.223 L 532.52 3.223 L 532.52 62.354 L 546.241 62.354 L 546.241 68.946 Z M 350.977 68.946 L 342.969 68.946 L 342.969 1.27 L 350.977 1.27 L 350.977 68.946 Z M 274.61 46.192 L 251.124 46.192 L 251.124 40.088 L 274.61 40.088 L 274.61 46.192 Z M 497.169 46.192 L 473.682 46.192 L 473.682 40.088 L 497.169 40.088 L 497.169 46.192 Z",
        }),
      ],
      -1
    )
  ),
  id = [td],
  nd = { key: 0, class: "homeWapper" },
  sd = { class: "homeWapperContainer" },
  od = { class: "homePV" },
  rd = ["data-active", "onClick"],
  ad = { class: "homePVInfo" },
  ld = De(() =>
    m(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 100 100",
      },
      [
        m("path", {
          id: "play-btn-outline",
          "data-cursor": "pointer",
          d: "",
        }),
        m("path", {
          id: "play-btn-triangle",
          "data-cursor": "pointer",
          d: "M66.875,50.000 L41.562,64.614 L41.562,35.386 Z",
        }),
        m("use", {
          "xlink:href": "#play-btn-outline",
          fill: "none",
          stroke: "#ffffff",
          "transform-origin": "50 50",
        }),
        m("use", {
          "xlink:href": "#play-btn-triangle",
          fill: "none",
          stroke: "#ffffff",
          "transform-origin": "50 50",
        }),
      ],
      -1
    )
  ),
  ud = [ld],
  cd = { class: "homeDownBtn" },
  dd = { key: 0, class: "homewapper" },
  fd = De(() =>
    m(
      "div",
      { class: "ImageText" },
      [m("span", { "data-cursor": "pointer" }, "GZHU")],
      -1
    )
  ),
  hd = De(() =>
    m(
      "div",
      { class: "ImageText" },
      [m("span", { "data-cursor": "pointer" }, "Zhongye")],
      -1
    )
  ),
  pd = { class: "DownLinks" },
  vd = {
    key: 0,
    href: "http://wpa.qq.com/msgrd?v=3&uin=2760913192&site=qq&menu=yes",
    class: "ios",
  },
  md = De(() =>
    m(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 152 44",
        "data-cursor": "pointer",
      },
      [
        m("g", null, [
          m("path", {
            id: "download-ios",
            d: "M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z",
          }),
        ]),
        m("g", { transform: "translate(15, 8)" }, [
          m("use", {
            transform: "scale(0.04734375, 0.04734375)",
            "xlink:href": "#download-ios",
            fill: "#fff",
            "data-cursor": "pointer",
          }),
        ]),
        m(
          "text",
          { x: "50", y: "20", "font-size": "15", "data-cursor": "pointer" },
          "QQ"
        ),
        m(
          "text",
          { x: "50", y: "34", "font-size": "10", "data-cursor": "pointer" },
          "2760913192"
        ),
      ],
      -1
    )
  ),
  gd = [md],
  yd = {
    key: 1,
    href: "https://zhongye1.github.io/assets/QRCode.jpg",
    class: "android",
  },
  Cd = De(() =>
    m(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 152 44",
        "data-cursor": "pointer",
      },
      [
        m("g", null, [
          m("path", {
            id: "download-android",
            "data-cursor": "pointer",
            d: "微信",
          }),
        ]),
        m("g", { transform: "translate(15, 8)" }, [
          m("use", {
            transform: "scale(0.02734375, 0.02734375)",
            "xlink:href": "#download-android",
            fill: "#fff",
            "data-cursor": "pointer",
          }),
        ]),
        m(
          "text",
          { x: "50", y: "20", "font-size": "16", "data-cursor": "pointer" },
          "微信"
        ),
        m(
          "text",
          { x: "50", y: "34", "font-size": "10", "data-cursor": "pointer" },
          "Zhong_ye1"
        ),
      ],
      -1
    )
  ),
  bd = [Cd],
  _d = { key: 2, href: "https://zhongye1.github.io/", class: "taptap" },
  wd = De(() =>
    m(
      "div",
      { style: { display: "none" } },
      [
        m(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            viewBox: "0 0 2186.86 999.65",
          },
          [
            m("g", { id: "taptap-icon" }, [
              m("path", {
                d: "",
              }),
              m("path", {
                d: "",
              }),
              m("path", {
                d: "",
              }),
            ]),
          ]
        ),
      ],
      -1
    )
  ),
  Ed = De(() =>
    m(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 152 44",
        "data-cursor": "pointer",
      },
      [
        m("g", { transform: "translate(15, 8)" }, [
          m("rect", {
            x: "0",
            y: "0",
            rx: "4",
            ry: "4",
            width: "26",
            height: "26",
            fill: "#00b9c8",
            "data-cursor": "pointer",
          }),
          m("use", {
            transform: "translate(1, 7) scale(0.11, 0.11)",
            "xlink:href": "#taptap-icon",
            "data-cursor": "pointer",
            fill: "#fff",
          }),
        ]),
        m(
          "text",
          { x: "50", y: "26", "font-size": "12", "data-cursor": "pointer" },
          " 博客主页 "
        ),
      ],
      -1
    )
  ),
  xd = [wd, Ed],
  Fd = { key: 0, class: "DownImg" },
  Sd = ae({
    __name: "Section1_One",
    setup(i) {
      ht((C) => ({ ef286188: v(g), 35922990: v(y) }));
      let e = new URL(
          "" + new URL("https://pic3.zhimg.com/80/v2-877d3f1d4b679305ba4c5974187fdb3a_720w.webp", import.meta.url).href,
          self.location
        ).href,
        t = new URL(
          "" +
            new URL(
              "https://pic2.zhimg.com/80/v2-1f17f1defa5434c7d9687caf4e6a676b_720w.webp",
              import.meta.url
            ).href,
          self.location
        ).href,
        n = new URL(
          "" + new URL("https://pic4.zhimg.com/80/v2-d9884f32711e19e80979eac58e943897_720w.webp", import.meta.url).href,
          self.location
        ).href,
        s = new URL(
          "" + new URL("https://pic4.zhimg.com/80/v2-d9884f32711e19e80979eac58e943897_720w.webp", import.meta.url).href,
          self.location
        ).href,
        o = G({ throttle: !0, Down: !0, DownBtn: !0, DownBtn2: !1 });
      const r = async () => {
          o.throttle &&
            ((o.throttle = !1),
            o.DownBtn
              ? ((o.DownBtn = !o.DownBtn),
                await ge(300),
                (o.DownBtn2 = !o.DownBtn2),
                (o.throttle = !0),
                (o.Down = !o.Down))
              : ((o.DownBtn2 = !o.DownBtn2),
                await await ge(300),
                (o.DownBtn = !o.DownBtn),
                (o.throttle = !0),
                (o.Down = !o.Down)));
        },
        a = G([
          {
            id: "001",
            isActive: !0,
            dataSource: "https://web.hycdn.cn/pv/pv.m3u8",
            Title: "https://zhongye1.github.io",
            BGM: "https://zhongye1.github.io",
          },
          {
            id: "002",
            isActive: !1,
            dataSource: "https://web.hycdn.cn/pv/pv2.m3u8",
            Title: "THE OVERTURE",
            BGM: "BGM-UNBECOMING-STARSET",
          },
          {
            id: "003",
            isActive: !1,
            dataSource: "https://web.hycdn.cn/pv/pv3.m3u8",
            Title: "THE ECHO",
            BGM: "BGM-INFECTED-STARSET",
          },
        ]);
      let l = G({ name: "THE PRELUDE", bgm: "BGM-MONSTER-STARSET" });
      L("https://web.hycdn.cn/pv/pv.m3u8");
      let u = 0;
      const c = (C) => {
          if (u == C) return !1;
          u = C;
          for (let b = 0; b < a.length; b++) a[b].isActive = !1;
          (a[C].isActive = !0), (l.name = a[C].Title), (l.bgm = a[C].BGM);
        },
        d = () => {
          alert("\u62B1\u6B49\u65E0\u6CD5\u64AD\u653E\u8BE5\u89C6\u5C4F");
        },
        f = L(!1),
        p = L(!1),
        h = L(!1);
      let g = L("none"),
        y = L(0);
      const x = async (C, b, _) => {
        await ge(_), (C.value = b);
      };
      return (
        ke(async () => {
          x(f, !0, 0),
            x(p, !0, 1e3),
            await ge(1500),
            Rn.emit("Nav", !0),
            await ge(500),
            (g.value = "block"),
            await ge(10),
            (y.value = 0.15),
            x(h, !0, 200);
        }),
        (C, b) => (
          P(),
          I("div", H1, [
            m("div", V1, [
              m("div", j1, [
                N(
                  te,
                  { name: "homeDown" },
                  {
                    default: q(() => [
                      v(p)
                        ? (P(), I("img", { key: 0, src: v(e) }, null, 8, q1))
                        : X("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              m("div", U1, [
                m("div", G1, [
                  N(
                    te,
                    { name: "homeDown" },
                    {
                      default: q(() => [
                        v(h) ? (P(), I("div", W1, K1)) : X("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                m("div", J1, [
                  m("div", Q1, [
                    N(
                      te,
                      { name: "homeTitle" },
                      {
                        default: q(() => [
                          v(f) ? (P(), I("div", ed, id)) : X("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  N(
                    te,
                    { name: "homeWapperLi" },
                    {
                      default: q(() => [
                        v(f)
                          ? (P(),
                            I("div", nd, [
                              m("div", sd, [
                                m("div", od, [
                                  (P(!0),
                                  I(
                                    de,
                                    null,
                                    Ee(
                                      v(a),
                                      (_, E) => (
                                        P(),
                                        I(
                                          "ul",
                                          { class: "homePVList", key: _.id },
                                          [
                                            m(
                                              "li",
                                              {
                                                "data-active": _.isActive,
                                                onClick: (w) => c(E),
                                                "data-cursor": "pointer",
                                              },
                                              Y(_.id),
                                              9,
                                              rd
                                            ),
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                  m("div", ad, [
                                    m("span", null, Y(v(l).name), 1),
                                    m("span", null, Y(v(l).bgm), 1),
                                  ]),
                                ]),
                                m("div", { class: "PVBtn" }, [
                                  m(
                                    "a",
                                    { href: "javascript:void(0)", onClick: d },
                                    ud
                                  ),
                                ]),
                              ]),
                            ]))
                          : X("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              m("div", cd, [
                N(
                  te,
                  { name: "homeDown" },
                  {
                    default: q(() => [
                      v(p)
                        ? (P(),
                          I("div", dd, [
                            N(
                              et,
                              { name: "DownBtnHide" },
                              {
                                default: q(() => [
                                  v(o).DownBtn
                                    ? (P(),
                                      I(
                                        "a",
                                        {
                                          key: 0,
                                          class: "DownBtnLoad1",
                                          onClick: r,
                                          "data-cursor": "pointer",
                                        },
                                        [
                                          m(
                                            "div",
                                            {
                                              class: "ImageDiv",
                                              style: $e({
                                                backgroundImage: `url(${v(t)})`,
                                              }),
                                              "data-cursor": "pointer",
                                            },
                                            null,
                                            4
                                          ),
                                          fd,
                                        ]
                                      ))
                                    : X("", !0),
                                  v(o).DownBtn2
                                    ? (P(),
                                      I(
                                        "a",
                                        {
                                          key: 1,
                                          class: "DownBtnLoad2",
                                          onClick: r,
                                          "data-cursor": "pointer",
                                        },
                                        [
                                          m(
                                            "div",
                                            {
                                              class: "ImageDiv",
                                              style: $e({
                                                backgroundImage: `url(${v(s)})`,
                                              }),
                                              "data-cursor": "pointer",
                                            },
                                            null,
                                            4
                                          ),
                                          hd,
                                        ]
                                      ))
                                    : X("", !0),
                                ]),
                                _: 1,
                              }
                            ),
                            m("div", pd, [
                              N(
                                et,
                                { name: "DownHide" },
                                {
                                  default: q(() => [
                                    v(o).Down
                                      ? (P(), I("a", vd, gd))
                                      : X("", !0),
                                    v(o).Down
                                      ? (P(), I("a", yd, bd))
                                      : X("", !0),
                                    v(o).Down
                                      ? (P(), I("a", _d, xd))
                                      : X("", !0),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            N(
                              te,
                              { name: "DownHide" },
                              {
                                default: q(() => [
                                  v(o).Down
                                    ? (P(),
                                      I("div", Fd, [
                                        m(
                                          "a",
                                          {
                                            href: "https://scp-wiki-cn.wikidot.com/site-cn-21-security-dept", 
                                            style: $e({
                                              backgroundImage: `url(${v(n)})`,
                                            }),
                                          },
                                          null,
                                          4
                                        ),
                                      ]))
                                    : X("", !0),
                                ]),
                                _: 1,
                              }
                            ),
                          ]))
                        : X("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ]),
          ])
        )
      );
    },
  });
const Td = Ce(Sd, [["__scopeId", "data-v-563ab70f"]]),
  $n = (i) => (Ue("data-v-8748e9ba"), (i = i()), Ge(), i),
  Bd = { id: "nav" },
  kd = { class: "navContent" },
  Dd = { class: "navMenu" },
  Ad = ["onClick"],
  Md = { href: "javascript:void(0)" },
  Pd = { class: "navPagintion" },
  Od = { key: 0, class: "navPaginCurrent" },
  Ld = $n(() => m("span", { class: "navSpan" }, "/", -1)),
  zd = $n(() => m("span", { class: "navPaginTotal" }, "05", -1)),
  Id = ae({
    __name: "Nav",
    props: { swiper: null, PagintionNum: null },
    setup(i, { expose: e }) {
      const t = i,
        n = G([
          { id: 0, name: "\u9996\u9875", actions: !0, sectiontext: "/01" },
          { id: 1, name: "最近", actions: !1, sectiontext: "//02" },
          { id: 2, name: "简介", actions: !1, sectiontext: "///03" },
          { id: 3, name: "相关", actions: !1, sectiontext: "////04" },
          { id: 4, name: "图集", actions: !1, sectiontext: "/////05" },
        ]),
        s = L(t.PagintionNum);
      we(
        () => t.PagintionNum,
        (r, a) => {
          s.value = r;
        }
      );
      const o = (r, a) => {
        a.forEach((l) => {
          l.actions = !1;
        }),
          (a[r].actions = !0),
          (s.value = r),
          t.swiper.slideTo(r, 500);
      };
      return (
        e({ NavList: n }),
        (r, a) => (
          P(),
          I("nav", Bd, [
            m("div", kd, [
              m("ol", Dd, [
                (P(!0),
                I(
                  de,
                  null,
                  Ee(
                    v(n),
                    (l) => (
                      P(),
                      I(
                        "li",
                        {
                          key: l.id,
                          class: "navMenuItem",
                          onClick: (u) => o(l.id, v(n)),
                          "data-cursor": "pointer",
                        },
                        [
                          m("a", Md, [
                            m(
                              "span",
                              {
                                class: le(l.actions ? "navItemTitle" : ""),
                                "data-cursor": "pointer",
                              },
                              Y(l.name),
                              3
                            ),
                          ]),
                        ],
                        8,
                        Ad
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            m("div", Pd, [
              (P(!0),
              I(
                de,
                null,
                Ee(
                  v(n),
                  (l) => (
                    P(),
                    Re(
                      te,
                      { key: l.id, name: "sectiontext", mode: "out-in" },
                      {
                        default: q(() => [
                          l.id == v(s)
                            ? (P(),
                              I("span", Od, [
                                m("span", null, Y(l.sectiontext), 1),
                              ]))
                            : X("", !0),
                        ]),
                        _: 2,
                      },
                      1024
                    )
                  )
                ),
                128
              )),
              Ld,
              zd,
            ]),
          ])
        )
      );
    },
  });
const Rd = Ce(Id, [["__scopeId", "data-v-8748e9ba"]]);
const $d = {},
  Nn = (i) => (Ue("data-v-5c9052ec"), (i = i()), Ge(), i),
  Nd = { class: "mainHeader" },
  Hd = Nn(() =>
    m(
      "div",
      { class: "headerUser" },
      [
        m(
          "a",
          { class: "headerUserBtn", href: "javascript:void(0)" },
          "Github Page"
        ),
        m("span", { class: "sep" }, "|"),
        m(
          "a",
          { class: "headerUserBtn", href: "javascript:void(0)" },
          "dev by 柊野"
        ),
      ],
      -1
    )
  ),
  Vd = Nn(() =>
    m(
      "div",
      { class: "headerMedia" },
      [
        m("div", { class: "headerMediaSwitch" }, [
          m(
            "svg",
            {
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              viewBox: "0 0 300 300",
            },
            [
              m("circle", { cx: "242", cy: "49", r: "35" }),
              m("circle", { cx: "242", cy: "251", r: "35" }),
              m("circle", { cx: "58", cy: "150", r: "35" }),
              m("line", {
                x1: "242",
                y1: "49",
                x2: "59",
                y2: "150",
                "stroke-width": "20",
              }),
              m("line", {
                x1: "242",
                y1: "251",
                x2: "59",
                y2: "150",
                "stroke-width": "20",
              }),
            ]
          ),
        ]),
      ],
      -1
    )
  ),
  jd = [Hd, Vd];
function qd(i, e) {
  return P(), I("div", Nd, jd);
}
const Ud = Ce($d, [
  ["render", qd],
  ["__scopeId", "data-v-5c9052ec"],
]);
class Gd {
  constructor() {
    this._listeners = new Map();
  }
  addEventListener(e, t) {
    var n;
    this.removeEventListener(e, t),
      this._listeners.get(e) || this._listeners.set(e, []),
      (n = this._listeners.get(e)) === null || n === void 0 || n.push(t);
  }
  dispatchEvent(e, t) {
    var n;
    (n = this._listeners.get(e)) === null ||
      n === void 0 ||
      n.forEach((s) => s(t));
  }
  hasEventListener(e) {
    return !!this._listeners.get(e);
  }
  removeAllEventListeners(e) {
    e ? this._listeners.delete(e) : (this._listeners = new Map());
  }
  removeEventListener(e, t) {
    const n = this._listeners.get(e);
    if (!n) return;
    const s = n.length,
      o = n.indexOf(t);
    o < 0 || (s === 1 ? this._listeners.delete(e) : n.splice(o, 1));
  }
}
class me {
  constructor(e, t, n) {
    if (typeof e != "number" && e) {
      (this.x = e.x), (this.y = e.y);
      const s = e;
      this.z = s.z ? s.z : 0;
    } else if (e !== void 0 && t !== void 0)
      (this.x = e), (this.y = t), (this.z = n != null ? n : 0);
    else throw new Error("tsParticles - Vector3d not initialized correctly");
  }
  static get origin() {
    return me.create(0, 0, 0);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  set angle(e) {
    this.updateFromAngle(e, this.length);
  }
  get length() {
    return Math.sqrt(this.getLengthSq());
  }
  set length(e) {
    this.updateFromAngle(this.angle, e);
  }
  static clone(e) {
    return me.create(e.x, e.y, e.z);
  }
  static create(e, t, n) {
    return new me(e, t, n);
  }
  add(e) {
    return me.create(this.x + e.x, this.y + e.y, this.z + e.z);
  }
  addTo(e) {
    (this.x += e.x), (this.y += e.y), (this.z += e.z);
  }
  copy() {
    return me.clone(this);
  }
  distanceTo(e) {
    return this.sub(e).length;
  }
  distanceToSq(e) {
    return this.sub(e).getLengthSq();
  }
  div(e) {
    return me.create(this.x / e, this.y / e, this.z / e);
  }
  divTo(e) {
    (this.x /= e), (this.y /= e), (this.z /= e);
  }
  getLengthSq() {
    return this.x ** 2 + this.y ** 2;
  }
  mult(e) {
    return me.create(this.x * e, this.y * e, this.z * e);
  }
  multTo(e) {
    (this.x *= e), (this.y *= e), (this.z *= e);
  }
  rotate(e) {
    return me.create(
      this.x * Math.cos(e) - this.y * Math.sin(e),
      this.x * Math.sin(e) + this.y * Math.cos(e),
      0
    );
  }
  setTo(e) {
    (this.x = e.x), (this.y = e.y);
    const t = e;
    this.z = t.z ? t.z : 0;
  }
  sub(e) {
    return me.create(this.x - e.x, this.y - e.y, this.z - e.z);
  }
  subFrom(e) {
    (this.x -= e.x), (this.y -= e.y), (this.z -= e.z);
  }
  updateFromAngle(e, t) {
    (this.x = Math.cos(e) * t), (this.y = Math.sin(e) * t);
  }
}
class Z extends me {
  constructor(e, t) {
    super(e, t, 0);
  }
  static get origin() {
    return Z.create(0, 0);
  }
  static clone(e) {
    return Z.create(e.x, e.y);
  }
  static create(e, t) {
    return new Z(e, t);
  }
}
let Wd = Math.random;
const Xd = new Map();
function Hn(i) {
  var e;
  const t = (n) => n;
  return (e = Xd.get(i)) !== null && e !== void 0 ? e : t;
}
function j() {
  return Be(Wd(), 0, 1 - 1e-16);
}
function Be(i, e, t) {
  return Math.min(Math.max(i, e), t);
}
function Nt(i, e, t, n) {
  return Math.floor((i * t + e * n) / (t + n));
}
function se(i) {
  const e = ze(i);
  let t = ft(i);
  return e === t && (t = 0), j() * (e - t) + t;
}
function R(i) {
  return typeof i == "number" ? i : se(i);
}
function ft(i) {
  return typeof i == "number" ? i : i.min;
}
function ze(i) {
  return typeof i == "number" ? i : i.max;
}
function H(i, e) {
  if (i === e || (e === void 0 && typeof i == "number")) return i;
  const t = ft(i),
    n = ze(i);
  return e !== void 0 ? { min: Math.min(t, e), max: Math.max(n, e) } : H(t, n);
}
function Ne(i) {
  const e = i.random,
    { enable: t, minimumValue: n } =
      typeof e == "boolean" ? { enable: e, minimumValue: 0 } : e;
  return R(t ? H(i.value, n) : i.value);
}
function fe(i, e) {
  const t = i.x - e.x,
    n = i.y - e.y;
  return { dx: t, dy: n, distance: Math.sqrt(t * t + n * n) };
}
function oe(i, e) {
  return fe(i, e).distance;
}
function Yd(i, e, t) {
  if (typeof i == "number") return (i * Math.PI) / 180;
  switch (i) {
    case "top":
      return -Math.PI / 2;
    case "top-right":
      return -Math.PI / 4;
    case "right":
      return 0;
    case "bottom-right":
      return Math.PI / 4;
    case "bottom":
      return Math.PI / 2;
    case "bottom-left":
      return (3 * Math.PI) / 4;
    case "left":
      return Math.PI;
    case "top-left":
      return (-3 * Math.PI) / 4;
    case "inside":
      return Math.atan2(t.y - e.y, t.x - e.x);
    case "outside":
      return Math.atan2(e.y - t.y, e.x - t.x);
    default:
      return j() * Math.PI * 2;
  }
}
function Zd(i) {
  const e = Z.origin;
  return (e.length = 1), (e.angle = i), e;
}
function Ui(i, e, t, n) {
  return Z.create((i.x * (t - n)) / (t + n) + (e.x * 2 * n) / (t + n), i.y);
}
function Kd(i) {
  return i.position && i.position.x !== void 0 && i.position.y !== void 0
    ? {
        x: (i.position.x * i.size.width) / 100,
        y: (i.position.y * i.size.height) / 100,
      }
    : void 0;
}
function Vn(i) {
  var e, t, n, s;
  return {
    x:
      (((t = (e = i.position) === null || e === void 0 ? void 0 : e.x) !==
        null && t !== void 0
        ? t
        : j() * 100) *
        i.size.width) /
      100,
    y:
      (((s = (n = i.position) === null || n === void 0 ? void 0 : n.y) !==
        null && s !== void 0
        ? s
        : j() * 100) *
        i.size.height) /
      100,
  };
}
function jn(i) {
  var e, t;
  const n = {
    x:
      ((e = i.position) === null || e === void 0 ? void 0 : e.x) !== void 0
        ? R(i.position.x)
        : void 0,
    y:
      ((t = i.position) === null || t === void 0 ? void 0 : t.y) !== void 0
        ? R(i.position.y)
        : void 0,
  };
  return Vn({ size: i.size, position: n });
}
function Jd(i) {
  var e, t, n, s;
  return {
    x:
      (t = (e = i.position) === null || e === void 0 ? void 0 : e.x) !== null &&
      t !== void 0
        ? t
        : j() * i.size.width,
    y:
      (s = (n = i.position) === null || n === void 0 ? void 0 : n.y) !== null &&
      s !== void 0
        ? s
        : j() * i.size.height,
  };
}
function qn(i) {
  return i ? (i.endsWith("%") ? parseFloat(i) / 100 : parseFloat(i)) : 1;
}
function Gi(i, e, t, n, s, o) {
  const r = { bounced: !1 };
  return (
    e.min < n.min ||
      e.min > n.max ||
      e.max < n.min ||
      e.max > n.max ||
      (((i.max >= t.min && i.max <= (t.max + t.min) / 2 && s > 0) ||
        (i.min <= t.max && i.min > (t.max + t.min) / 2 && s < 0)) &&
        ((r.velocity = s * -o), (r.bounced = !0))),
    r
  );
}
function Qd(i, e) {
  const t = J(e, (n) => i.matches(n));
  return t instanceof Array ? t.some((n) => n) : t;
}
function Ke() {
  return (
    typeof window > "u" ||
    !window ||
    typeof window.document > "u" ||
    !window.document
  );
}
function e0() {
  return !Ke() && typeof matchMedia < "u";
}
function Un(i) {
  if (!!e0()) return matchMedia(i);
}
function t0() {
  return Ke()
    ? (i) => setTimeout(i)
    : (i) => (requestAnimationFrame || setTimeout)(i);
}
function i0() {
  return Ke()
    ? (i) => clearTimeout(i)
    : (i) => (cancelAnimationFrame || clearTimeout)(i);
}
function K(i, e) {
  return i === e || (e instanceof Array && e.indexOf(i) > -1);
}
async function n0(i, e) {
  try {
    await document.fonts.load(
      `${e != null ? e : "400"} 36px '${i != null ? i : "Verdana"}'`
    );
  } catch {}
}
function Gn(i) {
  return Math.floor(j() * i.length);
}
function vt(i, e, t = !0) {
  return i[e !== void 0 && t ? e % i.length : Gn(i)];
}
function mt(i, e, t, n, s) {
  return s0(gt(i, n != null ? n : 0), e, t, s);
}
function s0(i, e, t, n) {
  let s = !0;
  return (
    (!n || n === "bottom") && (s = i.top < e.height + t.x),
    s && (!n || n === "left") && (s = i.right > t.x),
    s && (!n || n === "right") && (s = i.left < e.width + t.y),
    s && (!n || n === "top") && (s = i.bottom > t.y),
    s
  );
}
function gt(i, e) {
  return { bottom: i.y + e, left: i.x - e, right: i.x + e, top: i.y - e };
}
function ne(i, ...e) {
  for (const t of e) {
    if (t == null) continue;
    if (typeof t != "object") {
      i = t;
      continue;
    }
    const n = Array.isArray(t);
    n && (typeof i != "object" || !i || !Array.isArray(i))
      ? (i = [])
      : !n && (typeof i != "object" || !i || Array.isArray(i)) && (i = {});
    for (const s in t) {
      if (s === "__proto__") continue;
      const o = t,
        r = o[s],
        a = typeof r == "object",
        l = i;
      l[s] = a && Array.isArray(r) ? r.map((u) => ne(l[s], u)) : ne(l[s], r);
    }
  }
  return i;
}
function gi(i, e) {
  return !!Yn(e, (t) => t.enable && K(i, t.mode));
}
function yi(i, e, t) {
  J(e, (n) => {
    const s = n.mode;
    n.enable && K(i, s) && o0(n, t);
  });
}
function o0(i, e) {
  const t = i.selectors;
  J(t, (n) => {
    e(n, i);
  });
}
function Wn(i, e) {
  if (!(!e || !i)) return Yn(i, (t) => Qd(e, t.selectors));
}
function si(i) {
  return {
    position: i.getPosition(),
    radius: i.getRadius(),
    mass: i.getMass(),
    velocity: i.velocity,
    factor: Z.create(
      Ne(i.options.bounce.horizontal),
      Ne(i.options.bounce.vertical)
    ),
  };
}
function Xn(i, e) {
  const { x: t, y: n } = i.velocity.sub(e.velocity),
    [s, o] = [i.position, e.position],
    { dx: r, dy: a } = fe(o, s);
  if (t * r + n * a < 0) return;
  const l = -Math.atan2(a, r),
    u = i.mass,
    c = e.mass,
    d = i.velocity.rotate(l),
    f = e.velocity.rotate(l),
    p = Ui(d, f, u, c),
    h = Ui(f, d, u, c),
    g = p.rotate(-l),
    y = h.rotate(-l);
  (i.velocity.x = g.x * i.factor.x),
    (i.velocity.y = g.y * i.factor.y),
    (e.velocity.x = y.x * e.factor.x),
    (e.velocity.y = y.y * e.factor.y);
}
function r0(i, e) {
  const t = i.getPosition(),
    n = i.getRadius(),
    s = gt(t, n),
    o = Gi(
      { min: s.left, max: s.right },
      { min: s.top, max: s.bottom },
      { min: e.left, max: e.right },
      { min: e.top, max: e.bottom },
      i.velocity.x,
      Ne(i.options.bounce.horizontal)
    );
  o.bounced &&
    (o.velocity !== void 0 && (i.velocity.x = o.velocity),
    o.position !== void 0 && (i.position.x = o.position));
  const r = Gi(
    { min: s.top, max: s.bottom },
    { min: s.left, max: s.right },
    { min: e.top, max: e.bottom },
    { min: e.left, max: e.right },
    i.velocity.y,
    Ne(i.options.bounce.vertical)
  );
  r.bounced &&
    (r.velocity !== void 0 && (i.velocity.y = r.velocity),
    r.position !== void 0 && (i.position.y = r.position));
}
function J(i, e) {
  return i instanceof Array ? i.map((t) => e(t)) : e(i);
}
function xe(i, e, t) {
  return i instanceof Array ? vt(i, e, t) : i;
}
function Yn(i, e) {
  return i instanceof Array ? i.find((t) => e(t)) : e(i) ? i : void 0;
}
const Ft = "random",
  wt = "mid",
  Dt = new Map();
function Zn(i) {
  Dt.set(i.key, i);
}
function Ht(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? i + (e - i) * (2 / 3 - t) * 6
      : i
  );
}
function a0(i) {
  for (const [, o] of Dt)
    if (i.startsWith(o.stringPrefix)) return o.parseString(i);
  const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
    t = i.replace(
      e,
      (o, r, a, l, u) => r + r + a + a + l + l + (u !== void 0 ? u + u : "")
    ),
    n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
    s = n.exec(t);
  return s
    ? {
        a: s[4] !== void 0 ? parseInt(s[4], 16) / 255 : 1,
        b: parseInt(s[3], 16),
        g: parseInt(s[2], 16),
        r: parseInt(s[1], 16),
      }
    : void 0;
}
function Fe(i, e, t = !0) {
  if (!i) return;
  const n = typeof i == "string" ? { value: i } : i;
  if (typeof n.value == "string") return Kn(n.value, e, t);
  if (n.value instanceof Array) return Fe({ value: vt(n.value, e, t) });
  for (const [, s] of Dt) {
    const o = s.handleRangeColor(n);
    if (o) return o;
  }
}
function Kn(i, e, t = !0) {
  if (!i) return;
  const n = typeof i == "string" ? { value: i } : i;
  if (typeof n.value == "string") return n.value === Ft ? Qn() : l0(n.value);
  if (n.value instanceof Array) return Kn({ value: vt(n.value, e, t) });
  for (const [, s] of Dt) {
    const o = s.handleColor(n);
    if (o) return o;
  }
}
function qe(i, e, t = !0) {
  const n = Fe(i, e, t);
  return n ? Jn(n) : void 0;
}
function Jn(i) {
  const e = i.r / 255,
    t = i.g / 255,
    n = i.b / 255,
    s = Math.max(e, t, n),
    o = Math.min(e, t, n),
    r = { h: 0, l: (s + o) / 2, s: 0 };
  return (
    s !== o &&
      ((r.s = r.l < 0.5 ? (s - o) / (s + o) : (s - o) / (2 - s - o)),
      (r.h =
        e === s
          ? (t - n) / (s - o)
          : (r.h = t === s ? 2 + (n - e) / (s - o) : 4 + (e - t) / (s - o)))),
    (r.l *= 100),
    (r.s *= 100),
    (r.h *= 60),
    r.h < 0 && (r.h += 360),
    r.h >= 360 && (r.h -= 360),
    r
  );
}
function l0(i) {
  return a0(i);
}
function it(i) {
  const e = { b: 0, g: 0, r: 0 },
    t = { h: i.h / 360, l: i.l / 100, s: i.s / 100 };
  if (!t.s) (e.b = t.l), (e.g = t.l), (e.r = t.l);
  else {
    const n = t.l < 0.5 ? t.l * (1 + t.s) : t.l + t.s - t.l * t.s,
      s = 2 * t.l - n;
    (e.r = Ht(s, n, t.h + 1 / 3)),
      (e.g = Ht(s, n, t.h)),
      (e.b = Ht(s, n, t.h - 1 / 3));
  }
  return (
    (e.r = Math.floor(e.r * 255)),
    (e.g = Math.floor(e.g * 255)),
    (e.b = Math.floor(e.b * 255)),
    e
  );
}
function u0(i) {
  const e = it(i);
  return { a: i.a, b: e.b, g: e.g, r: e.r };
}
function Qn(i) {
  const e = i != null ? i : 0;
  return {
    b: Math.floor(se(H(e, 256))),
    g: Math.floor(se(H(e, 256))),
    r: Math.floor(se(H(e, 256))),
  };
}
function Ie(i, e) {
  return `rgba(${i.r}, ${i.g}, ${i.b}, ${e != null ? e : 1})`;
}
function nt(i, e) {
  return `hsla(${i.h}, ${i.s}%, ${i.l}%, ${e != null ? e : 1})`;
}
function Ci(i, e, t, n) {
  let s = i,
    o = e;
  return (
    s.r === void 0 && (s = it(i)),
    o.r === void 0 && (o = it(e)),
    { b: Nt(s.b, o.b, t, n), g: Nt(s.g, o.g, t, n), r: Nt(s.r, o.r, t, n) }
  );
}
function oi(i, e, t) {
  var n, s;
  if (t === Ft) return Qn();
  if (t === wt) {
    const o =
        (n = i.getFillColor()) !== null && n !== void 0
          ? n
          : i.getStrokeColor(),
      r =
        (s = e == null ? void 0 : e.getFillColor()) !== null && s !== void 0
          ? s
          : e == null
          ? void 0
          : e.getStrokeColor();
    if (o && r && e) return Ci(o, r, i.getRadius(), e.getRadius());
    {
      const a = o != null ? o : r;
      if (a) return it(a);
    }
  } else return t;
}
function es(i, e, t) {
  const n = typeof i == "string" ? i : i.value;
  return n === Ft
    ? t
      ? Fe({ value: n })
      : e
      ? Ft
      : wt
    : n === wt
    ? wt
    : Fe({ value: n });
}
function Wi(i) {
  return i !== void 0 ? { h: i.h.value, s: i.s.value, l: i.l.value } : void 0;
}
function ts(i, e, t) {
  const n = {
    h: { enable: !1, value: i.h },
    s: { enable: !1, value: i.s },
    l: { enable: !1, value: i.l },
  };
  return e && (Vt(n.h, e.h, t), Vt(n.s, e.s, t), Vt(n.l, e.l, t)), n;
}
function Vt(i, e, t) {
  (i.enable = e.enable),
    i.enable
      ? ((i.velocity = (R(e.speed) / 100) * t),
        (i.decay = 1 - R(e.decay)),
        (i.status = 0),
        e.sync || ((i.velocity *= j()), (i.value *= j())))
      : (i.velocity = 0);
}
function ut(i, e, t) {
  i.beginPath(), i.moveTo(e.x, e.y), i.lineTo(t.x, t.y), i.closePath();
}
function c0(i, e, t, n) {
  i.beginPath(),
    i.moveTo(e.x, e.y),
    i.lineTo(t.x, t.y),
    i.lineTo(n.x, n.y),
    i.closePath();
}
function d0(i, e, t) {
  (i.fillStyle = t != null ? t : "rgba(0,0,0,0)"),
    i.fillRect(0, 0, e.width, e.height);
}
function jt(i, e) {
  i.clearRect(0, 0, e.width, e.height);
}
function f0(i) {
  var e, t, n, s, o, r;
  const {
      container: a,
      context: l,
      particle: u,
      delta: c,
      colorStyles: d,
      backgroundMask: f,
      composite: p,
      radius: h,
      opacity: g,
      shadow: y,
      transform: x,
    } = i,
    C = u.getPosition(),
    b = u.rotation + (u.pathRotation ? u.velocity.angle : 0),
    _ = { sin: Math.sin(b), cos: Math.cos(b) },
    E = {
      a: _.cos * ((e = x.a) !== null && e !== void 0 ? e : 1),
      b: _.sin * ((t = x.b) !== null && t !== void 0 ? t : 1),
      c: -_.sin * ((n = x.c) !== null && n !== void 0 ? n : 1),
      d: _.cos * ((s = x.d) !== null && s !== void 0 ? s : 1),
    };
  l.setTransform(E.a, E.b, E.c, E.d, C.x, C.y),
    l.beginPath(),
    f && (l.globalCompositeOperation = p);
  const w = u.shadowColor;
  y.enable &&
    w &&
    ((l.shadowBlur = y.blur),
    (l.shadowColor = Ie(w)),
    (l.shadowOffsetX = y.offset.x),
    (l.shadowOffsetY = y.offset.y)),
    d.fill && (l.fillStyle = d.fill);
  const F = u.stroke;
  (l.lineWidth = (o = u.strokeWidth) !== null && o !== void 0 ? o : 0),
    d.stroke && (l.strokeStyle = d.stroke),
    h0(a, l, u, h, g, c),
    ((r = F == null ? void 0 : F.width) !== null && r !== void 0 ? r : 0) > 0 &&
      l.stroke(),
    u.close && l.closePath(),
    u.fill && l.fill(),
    p0(a, l, u, h, g, c),
    (l.globalCompositeOperation = "source-over"),
    l.setTransform(1, 0, 0, 1, 0, 0);
}
function h0(i, e, t, n, s, o) {
  if (!t.shape) return;
  const r = i.drawers.get(t.shape);
  !r || r.draw(e, t, n, s, o, i.retina.pixelRatio);
}
function p0(i, e, t, n, s, o) {
  if (!t.shape) return;
  const r = i.drawers.get(t.shape);
  !(r != null && r.afterEffect) ||
    r.afterEffect(e, t, n, s, o, i.retina.pixelRatio);
}
function v0(i, e, t) {
  !e.draw || e.draw(i, t);
}
function m0(i, e, t, n) {
  !e.drawParticle || e.drawParticle(i, t, n);
}
function g0(i, e, t) {
  return { h: i.h, s: i.s, l: i.l + (e === "darken" ? -1 : 1) * t };
}
const ct = "generated",
  Xi = "touchend",
  y0 = "pointerdown",
  C0 = "pointerup",
  Je = "pointermove",
  b0 = "touchstart",
  _0 = "touchmove",
  ri = "pointerleave",
  w0 = "pointerout",
  E0 = "touchcancel",
  x0 = "resize",
  F0 = "visibilitychange";
function S0(i, e, t) {
  var n;
  const s = e[t];
  s !== void 0 && (i[t] = ((n = i[t]) !== null && n !== void 0 ? n : 1) * s);
}
class T0 {
  constructor(e) {
    (this.container = e),
      (this.size = { height: 0, width: 0 }),
      (this._context = null),
      (this._generated = !1),
      (this._preDrawUpdaters = []),
      (this._postDrawUpdaters = []),
      (this._resizePlugins = []),
      (this._colorPlugins = []),
      (this._mutationObserver =
        !Ke() && typeof MutationObserver < "u"
          ? new MutationObserver((t) => {
              for (const n of t)
                n.type === "attributes" &&
                  n.attributeName === "style" &&
                  this._repairStyle();
            })
          : void 0);
  }
  get _fullScreen() {
    return this.container.actualOptions.fullScreen.enable;
  }
  clear() {
    const e = this.container.actualOptions,
      t = e.particles.move.trail;
    e.backgroundMask.enable
      ? this.paint()
      : t.enable && t.length > 0 && this._trailFillColor
      ? this._paintBase(Ie(this._trailFillColor, 1 / t.length))
      : this.draw((n) => {
          jt(n, this.size);
        });
  }
  destroy() {
    var e, t;
    (e = this._mutationObserver) === null || e === void 0 || e.disconnect(),
      this._generated
        ? (t = this.element) === null || t === void 0 || t.remove()
        : this._resetOriginalStyle(),
      this.draw((n) => {
        jt(n, this.size);
      }),
      (this._preDrawUpdaters = []),
      (this._postDrawUpdaters = []),
      (this._resizePlugins = []),
      (this._colorPlugins = []);
  }
  draw(e) {
    if (!!this._context) return e(this._context);
  }
  drawParticle(e, t) {
    var n;
    if (e.spawning || e.destroyed) return;
    const s = e.getRadius();
    if (s <= 0) return;
    const o = e.getFillColor(),
      r = (n = e.getStrokeColor()) !== null && n !== void 0 ? n : o;
    let [a, l] = this._getPluginParticleColors(e);
    a || (a = o),
      l || (l = r),
      !(!a && !l) &&
        this.draw((u) => {
          var c, d, f, p, h;
          const g = this.container.actualOptions,
            y = e.options.zIndex,
            x = (1 - e.zIndexFactor) ** y.opacityRate,
            C =
              (f =
                (c = e.bubble.opacity) !== null && c !== void 0
                  ? c
                  : (d = e.opacity) === null || d === void 0
                  ? void 0
                  : d.value) !== null && f !== void 0
                ? f
                : 1,
            b =
              (h =
                (p = e.stroke) === null || p === void 0
                  ? void 0
                  : p.opacity) !== null && h !== void 0
                ? h
                : C,
            _ = C * x,
            E = b * x,
            w = {},
            F = { fill: a ? nt(a, _) : void 0 };
          (F.stroke = l ? nt(l, E) : F.fill),
            this._applyPreDrawUpdaters(u, e, s, _, F, w),
            f0({
              container: this.container,
              context: u,
              particle: e,
              delta: t,
              colorStyles: F,
              backgroundMask: g.backgroundMask.enable,
              composite: g.backgroundMask.composite,
              radius: s * (1 - e.zIndexFactor) ** y.sizeRate,
              opacity: _,
              shadow: e.options.shadow,
              transform: w,
            }),
            this._applyPostDrawUpdaters(e);
        });
  }
  drawParticlePlugin(e, t, n) {
    this.draw((s) => {
      m0(s, e, t, n);
    });
  }
  drawPlugin(e, t) {
    this.draw((n) => {
      v0(n, e, t);
    });
  }
  init() {
    var e;
    this.resize(),
      this._initStyle(),
      this._initCover(),
      this._initTrail(),
      this.initBackground(),
      this.element &&
        ((e = this._mutationObserver) === null ||
          e === void 0 ||
          e.observe(this.element, { attributes: !0 })),
      this.initUpdaters(),
      this.initPlugins(),
      this.paint();
  }
  initBackground() {
    const e = this.container.actualOptions,
      t = e.background,
      n = this.element,
      s = n == null ? void 0 : n.style;
    if (!!s) {
      if (t.color) {
        const o = Fe(t.color);
        s.backgroundColor = o ? Ie(o, t.opacity) : "";
      } else s.backgroundColor = "";
      (s.backgroundImage = t.image || ""),
        (s.backgroundPosition = t.position || ""),
        (s.backgroundRepeat = t.repeat || ""),
        (s.backgroundSize = t.size || "");
    }
  }
  initPlugins() {
    this._resizePlugins = [];
    for (const [, e] of this.container.plugins)
      e.resize && this._resizePlugins.push(e),
        (e.particleFillColor || e.particleStrokeColor) &&
          this._colorPlugins.push(e);
  }
  initUpdaters() {
    (this._preDrawUpdaters = []), (this._postDrawUpdaters = []);
    for (const e of this.container.particles.updaters)
      e.afterDraw && this._postDrawUpdaters.push(e),
        (e.getColorStyles || e.getTransformValues || e.beforeDraw) &&
          this._preDrawUpdaters.push(e);
  }
  loadCanvas(e) {
    var t, n;
    this._generated &&
      ((t = this.element) === null || t === void 0 || t.remove()),
      (this._generated =
        e.dataset && ct in e.dataset
          ? e.dataset[ct] === "true"
          : this._generated),
      (this.element = e),
      (this.element.ariaHidden = "true"),
      (this._originalStyle = ne({}, this.element.style)),
      (this.size.height = e.offsetHeight),
      (this.size.width = e.offsetWidth),
      (this._context = this.element.getContext("2d")),
      (n = this._mutationObserver) === null ||
        n === void 0 ||
        n.observe(this.element, { attributes: !0 }),
      this.container.retina.init(),
      this.initBackground();
  }
  paint() {
    const e = this.container.actualOptions;
    this.draw((t) => {
      e.backgroundMask.enable && e.backgroundMask.cover
        ? (jt(t, this.size), this._paintBase(this._coverColorStyle))
        : this._paintBase();
    });
  }
  resize() {
    if (!this.element) return;
    const e = this.container,
      t = e.retina.pixelRatio,
      n = e.canvas.size,
      s = {
        width: this.element.offsetWidth * t,
        height: this.element.offsetHeight * t,
      };
    if (
      s.height === n.height &&
      s.width === n.width &&
      s.height === this.element.height &&
      s.width === this.element.width
    )
      return;
    const o = Object.assign({}, n);
    (this.element.width = n.width = this.element.offsetWidth * t),
      (this.element.height = n.height = this.element.offsetHeight * t),
      this.container.started &&
        (this.resizeFactor = {
          width: n.width / o.width,
          height: n.height / o.height,
        });
  }
  async windowResize() {
    if (!this.element) return;
    this.resize();
    const e = this.container,
      t = e.updateActualOptions();
    e.particles.setDensity(),
      this._applyResizePlugins(),
      t && (await e.refresh());
  }
  _applyPostDrawUpdaters(e) {
    var t;
    for (const n of this._postDrawUpdaters)
      (t = n.afterDraw) === null || t === void 0 || t.call(n, e);
  }
  _applyPreDrawUpdaters(e, t, n, s, o, r) {
    var a;
    for (const l of this._preDrawUpdaters) {
      if (l.getColorStyles) {
        const { fill: u, stroke: c } = l.getColorStyles(t, e, n, s);
        u && (o.fill = u), c && (o.stroke = c);
      }
      if (l.getTransformValues) {
        const u = l.getTransformValues(t);
        for (const c in u) S0(r, u, c);
      }
      (a = l.beforeDraw) === null || a === void 0 || a.call(l, t);
    }
  }
  _applyResizePlugins() {
    for (const e of this._resizePlugins) e.resize && e.resize();
  }
  _getPluginParticleColors(e) {
    let t, n;
    for (const s of this._colorPlugins)
      if (
        (!t && s.particleFillColor && (t = qe(s.particleFillColor(e))),
        !n && s.particleStrokeColor && (n = qe(s.particleStrokeColor(e))),
        t && n)
      )
        break;
    return [t, n];
  }
  _initCover() {
    const e = this.container.actualOptions,
      t = e.backgroundMask.cover,
      n = t.color,
      s = Fe(n);
    if (s) {
      const o = { r: s.r, g: s.g, b: s.b, a: t.opacity };
      this._coverColorStyle = Ie(o, o.a);
    }
  }
  _initStyle() {
    const e = this.element,
      t = this.container.actualOptions;
    if (!!e) {
      this._fullScreen
        ? ((this._originalStyle = ne({}, e.style)), this._setFullScreenStyle())
        : this._resetOriginalStyle();
      for (const n in t.style) {
        if (!n || !t.style) continue;
        const s = t.style[n];
        !s || e.style.setProperty(n, s, "important");
      }
    }
  }
  _initTrail() {
    const e = this.container.actualOptions,
      t = e.particles.move.trail,
      n = Fe(t.fillColor);
    if (n) {
      const s = e.particles.move.trail;
      this._trailFillColor = Object.assign(Object.assign({}, n), {
        a: 1 / s.length,
      });
    }
  }
  _paintBase(e) {
    this.draw((t) => {
      d0(t, this.size, e);
    });
  }
  _repairStyle() {
    var e, t;
    const n = this.element;
    !n ||
      ((e = this._mutationObserver) === null || e === void 0 || e.disconnect(),
      this._initStyle(),
      this.initBackground(),
      (t = this._mutationObserver) === null ||
        t === void 0 ||
        t.observe(n, { attributes: !0 }));
  }
  _resetOriginalStyle() {
    const e = this.element,
      t = this._originalStyle;
    !(e && t) ||
      ((e.style.position = t.position),
      (e.style.zIndex = t.zIndex),
      (e.style.top = t.top),
      (e.style.left = t.left),
      (e.style.width = t.width),
      (e.style.height = t.height));
  }
  _setFullScreenStyle() {
    const e = this.element;
    if (!e) return;
    const t = "important";
    e.style.setProperty("position", "fixed", t),
      e.style.setProperty(
        "z-index",
        this.container.actualOptions.fullScreen.zIndex.toString(10),
        t
      ),
      e.style.setProperty("top", "0", t),
      e.style.setProperty("left", "0", t),
      e.style.setProperty("width", "100%", t),
      e.style.setProperty("height", "100%", t);
  }
}
function _e(i, e, t, n, s) {
  if (n) {
    let o = { passive: !0 };
    typeof s == "boolean" ? (o.capture = s) : s !== void 0 && (o = s),
      i.addEventListener(e, t, o);
  } else {
    const o = s;
    i.removeEventListener(e, t, o);
  }
}
class B0 {
  constructor(e) {
    (this.container = e),
      (this.canPush = !0),
      (this.mouseMoveHandler = (t) => this.mouseTouchMove(t)),
      (this.touchStartHandler = (t) => this.mouseTouchMove(t)),
      (this.touchMoveHandler = (t) => this.mouseTouchMove(t)),
      (this.touchEndHandler = () => this.mouseTouchFinish()),
      (this.mouseLeaveHandler = () => this.mouseTouchFinish()),
      (this.touchCancelHandler = () => this.mouseTouchFinish()),
      (this.touchEndClickHandler = (t) => this.mouseTouchClick(t)),
      (this.mouseUpHandler = (t) => this.mouseTouchClick(t)),
      (this.mouseDownHandler = () => this.mouseDown()),
      (this.visibilityChangeHandler = () => this.handleVisibilityChange()),
      (this.themeChangeHandler = (t) => this.handleThemeChange(t)),
      (this.oldThemeChangeHandler = (t) => this.handleThemeChange(t)),
      (this.resizeHandler = () => this.handleWindowResize());
  }
  addListeners() {
    this.manageListeners(!0);
  }
  removeListeners() {
    this.manageListeners(!1);
  }
  doMouseTouchClick(e) {
    const t = this.container,
      n = t.actualOptions;
    if (this.canPush) {
      const s = t.interactivity.mouse.position;
      if (!s) return;
      (t.interactivity.mouse.clickPosition = Object.assign({}, s)),
        (t.interactivity.mouse.clickTime = new Date().getTime());
      const o = n.interactivity.events.onClick;
      J(o.mode, (r) => this.handleClickMode(r));
    }
    e.type === "touchend" && setTimeout(() => this.mouseTouchFinish(), 500);
  }
  handleClickMode(e) {
    this.container.handleClickMode(e);
  }
  handleThemeChange(e) {
    const t = e,
      n = t.matches
        ? this.container.options.defaultThemes.dark
        : this.container.options.defaultThemes.light,
      s = this.container.options.themes.find((o) => o.name === n);
    s && s.default.auto && this.container.loadTheme(n);
  }
  handleVisibilityChange() {
    const e = this.container,
      t = e.actualOptions;
    this.mouseTouchFinish(),
      t.pauseOnBlur &&
        (document != null && document.hidden
          ? ((e.pageHidden = !0), e.pause())
          : ((e.pageHidden = !1),
            e.getAnimationStatus() ? e.play(!0) : e.draw(!0)));
  }
  handleWindowResize() {
    this.resizeTimeout &&
      (clearTimeout(this.resizeTimeout), delete this.resizeTimeout),
      (this.resizeTimeout = setTimeout(async () => {
        var e;
        return (e = this.container.canvas) === null || e === void 0
          ? void 0
          : e.windowResize();
      }, 500));
  }
  manageListeners(e) {
    var t;
    const n = this.container,
      s = n.actualOptions,
      o = s.interactivity.detectsOn;
    let r = ri;
    if (o === "window") (n.interactivity.element = window), (r = w0);
    else if (o === "parent" && n.canvas.element) {
      const c = n.canvas.element;
      n.interactivity.element =
        (t = c.parentElement) !== null && t !== void 0 ? t : c.parentNode;
    } else n.interactivity.element = n.canvas.element;
    const a = Un("(prefers-color-scheme: dark)");
    a &&
      (a.addEventListener !== void 0
        ? _e(a, "change", this.themeChangeHandler, e)
        : a.addListener !== void 0 &&
          (e
            ? a.addListener(this.oldThemeChangeHandler)
            : a.removeListener(this.oldThemeChangeHandler)));
    const l = n.interactivity.element;
    if (!l) return;
    const u = l;
    (s.interactivity.events.onHover.enable ||
      s.interactivity.events.onClick.enable) &&
      (_e(l, Je, this.mouseMoveHandler, e),
      _e(l, b0, this.touchStartHandler, e),
      _e(l, _0, this.touchMoveHandler, e),
      s.interactivity.events.onClick.enable
        ? (_e(l, Xi, this.touchEndClickHandler, e),
          _e(l, C0, this.mouseUpHandler, e),
          _e(l, y0, this.mouseDownHandler, e))
        : _e(l, Xi, this.touchEndHandler, e),
      _e(l, r, this.mouseLeaveHandler, e),
      _e(l, E0, this.touchCancelHandler, e)),
      n.canvas.element &&
        (n.canvas.element.style.pointerEvents =
          u === n.canvas.element ? "initial" : "none"),
      s.interactivity.events.resize &&
        (typeof ResizeObserver < "u"
          ? this.resizeObserver && !e
            ? (n.canvas.element &&
                this.resizeObserver.unobserve(n.canvas.element),
              this.resizeObserver.disconnect(),
              delete this.resizeObserver)
            : !this.resizeObserver &&
              e &&
              n.canvas.element &&
              ((this.resizeObserver = new ResizeObserver((c) => {
                !c.find((f) => f.target === n.canvas.element) ||
                  this.handleWindowResize();
              })),
              this.resizeObserver.observe(n.canvas.element))
          : _e(window, x0, this.resizeHandler, e)),
      document && _e(document, F0, this.visibilityChangeHandler, e, !1);
  }
  mouseDown() {
    const e = this.container.interactivity;
    if (e) {
      const t = e.mouse;
      (t.clicking = !0), (t.downPosition = t.position);
    }
  }
  mouseTouchClick(e) {
    const t = this.container,
      n = t.actualOptions,
      s = t.interactivity.mouse;
    s.inside = !0;
    let o = !1;
    const r = s.position;
    if (!(!r || !n.interactivity.events.onClick.enable)) {
      for (const [, a] of t.plugins)
        if (!!a.clickPositionValid && ((o = a.clickPositionValid(r)), o)) break;
      o || this.doMouseTouchClick(e), (s.clicking = !1);
    }
  }
  mouseTouchFinish() {
    const e = this.container.interactivity;
    if (!e) return;
    const t = e.mouse;
    delete t.position,
      delete t.clickPosition,
      delete t.downPosition,
      (e.status = ri),
      (t.inside = !1),
      (t.clicking = !1);
  }
  mouseTouchMove(e) {
    var t, n, s, o, r, a, l;
    const u = this.container,
      c = u.actualOptions;
    if (!(!((t = u.interactivity) === null || t === void 0) && t.element))
      return;
    u.interactivity.mouse.inside = !0;
    let d;
    const f = u.canvas.element;
    if (e.type.startsWith("pointer")) {
      this.canPush = !0;
      const h = e;
      if (u.interactivity.element === window) {
        if (f) {
          const g = f.getBoundingClientRect();
          d = { x: h.clientX - g.left, y: h.clientY - g.top };
        }
      } else if (c.interactivity.detectsOn === "parent") {
        const g = h.target,
          y = h.currentTarget,
          x = u.canvas.element;
        if (g && y && x) {
          const C = g.getBoundingClientRect(),
            b = y.getBoundingClientRect(),
            _ = x.getBoundingClientRect();
          d = {
            x: h.offsetX + 2 * C.left - (b.left + _.left),
            y: h.offsetY + 2 * C.top - (b.top + _.top),
          };
        } else
          d = {
            x: (n = h.offsetX) !== null && n !== void 0 ? n : h.clientX,
            y: (s = h.offsetY) !== null && s !== void 0 ? s : h.clientY,
          };
      } else
        h.target === u.canvas.element &&
          (d = {
            x: (o = h.offsetX) !== null && o !== void 0 ? o : h.clientX,
            y: (r = h.offsetY) !== null && r !== void 0 ? r : h.clientY,
          });
    } else {
      this.canPush = e.type !== "touchmove";
      const h = e,
        g = h.touches[h.touches.length - 1],
        y = f == null ? void 0 : f.getBoundingClientRect();
      d = {
        x:
          g.clientX -
          ((a = y == null ? void 0 : y.left) !== null && a !== void 0 ? a : 0),
        y:
          g.clientY -
          ((l = y == null ? void 0 : y.top) !== null && l !== void 0 ? l : 0),
      };
    }
    const p = u.retina.pixelRatio;
    d && ((d.x *= p), (d.y *= p)),
      (u.interactivity.mouse.position = d),
      (u.interactivity.status = Je);
  }
}
function k0(i, e = 60, t = !1) {
  return { value: i, factor: t ? 60 / e : (60 * i) / 1e3 };
}
class D0 {
  constructor(e) {
    this.container = e;
  }
  async nextFrame(e) {
    var t;
    try {
      const n = this.container;
      if (
        !n.smooth &&
        n.lastFrameTime !== void 0 &&
        e < n.lastFrameTime + 1e3 / n.fpsLimit
      ) {
        n.draw(!1);
        return;
      }
      ((t = n.lastFrameTime) !== null && t !== void 0) || (n.lastFrameTime = e);
      const s = k0(e - n.lastFrameTime, n.fpsLimit, n.smooth);
      if (((n.lifeTime += s.value), (n.lastFrameTime = e), s.value > 1e3)) {
        n.draw(!1);
        return;
      }
      if (
        (await n.particles.draw(s), n.duration > 0 && n.lifeTime > n.duration)
      ) {
        n.destroy();
        return;
      }
      n.getAnimationStatus() && n.draw(!1);
    } catch (n) {
      console.error("tsParticles error in animation loop", n);
    }
  }
}
class ie {
  constructor() {
    this.value = "";
  }
  static create(e, t) {
    const n = new ie();
    return (
      n.load(e),
      t !== void 0 &&
        (typeof t == "string" || t instanceof Array
          ? n.load({ value: t })
          : n.load(t)),
      n
    );
  }
  load(e) {
    (e == null ? void 0 : e.value) !== void 0 && (this.value = e.value);
  }
}
class A0 {
  constructor() {
    (this.color = new ie()),
      (this.color.value = ""),
      (this.image = ""),
      (this.position = ""),
      (this.repeat = ""),
      (this.size = ""),
      (this.opacity = 1);
  }
  load(e) {
    !e ||
      (e.color !== void 0 && (this.color = ie.create(this.color, e.color)),
      e.image !== void 0 && (this.image = e.image),
      e.position !== void 0 && (this.position = e.position),
      e.repeat !== void 0 && (this.repeat = e.repeat),
      e.size !== void 0 && (this.size = e.size),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class M0 {
  constructor() {
    (this.color = new ie()), (this.color.value = "#fff"), (this.opacity = 1);
  }
  load(e) {
    !e ||
      (e.color !== void 0 && (this.color = ie.create(this.color, e.color)),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class P0 {
  constructor() {
    (this.composite = "destination-out"),
      (this.cover = new M0()),
      (this.enable = !1);
  }
  load(e) {
    if (!!e) {
      if (
        (e.composite !== void 0 && (this.composite = e.composite),
        e.cover !== void 0)
      ) {
        const t = e.cover,
          n = typeof e.cover == "string" ? { color: e.cover } : e.cover;
        this.cover.load(t.color !== void 0 ? t : { color: n });
      }
      e.enable !== void 0 && (this.enable = e.enable);
    }
  }
}
class O0 {
  constructor() {
    (this.enable = !0), (this.zIndex = 0);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.zIndex !== void 0 && (this.zIndex = e.zIndex));
  }
}
class L0 {
  constructor() {
    (this.enable = !1), (this.mode = []);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode));
  }
}
class Yi {
  constructor() {
    (this.selectors = []),
      (this.enable = !1),
      (this.mode = []),
      (this.type = "circle");
  }
  get el() {
    return this.elementId;
  }
  set el(e) {
    this.elementId = e;
  }
  get elementId() {
    return this.ids;
  }
  set elementId(e) {
    this.ids = e;
  }
  get ids() {
    return J(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = J(e, (t) => `#${t}`);
  }
  load(e) {
    var t, n;
    if (!e) return;
    const s =
      (n = (t = e.ids) !== null && t !== void 0 ? t : e.elementId) !== null &&
      n !== void 0
        ? n
        : e.el;
    s !== void 0 && (this.ids = s),
      e.selectors !== void 0 && (this.selectors = e.selectors),
      e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode),
      e.type !== void 0 && (this.type = e.type);
  }
}
class z0 {
  constructor() {
    (this.enable = !1), (this.force = 2), (this.smooth = 10);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.force !== void 0 && (this.force = e.force),
      e.smooth !== void 0 && (this.smooth = e.smooth));
  }
}
class I0 {
  constructor() {
    (this.enable = !1), (this.mode = []), (this.parallax = new z0());
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode),
      this.parallax.load(e.parallax));
  }
}
class R0 {
  constructor() {
    (this.onClick = new L0()),
      (this.onDiv = new Yi()),
      (this.onHover = new I0()),
      (this.resize = !0);
  }
  get onclick() {
    return this.onClick;
  }
  set onclick(e) {
    this.onClick = e;
  }
  get ondiv() {
    return this.onDiv;
  }
  set ondiv(e) {
    this.onDiv = e;
  }
  get onhover() {
    return this.onHover;
  }
  set onhover(e) {
    this.onHover = e;
  }
  load(e) {
    var t, n, s;
    if (!e) return;
    this.onClick.load((t = e.onClick) !== null && t !== void 0 ? t : e.onclick);
    const o = (n = e.onDiv) !== null && n !== void 0 ? n : e.ondiv;
    o !== void 0 &&
      (this.onDiv = J(o, (r) => {
        const a = new Yi();
        return a.load(r), a;
      })),
      this.onHover.load(
        (s = e.onHover) !== null && s !== void 0 ? s : e.onhover
      ),
      e.resize !== void 0 && (this.resize = e.resize);
  }
}
class $0 {
  constructor(e, t) {
    (this._engine = e), (this._container = t);
  }
  load(e) {
    if (!!e && this._container) {
      const t = this._engine.plugins.interactors.get(this._container);
      if (t) for (const n of t) n.loadModeOptions && n.loadModeOptions(this, e);
    }
  }
}
class is {
  constructor(e, t) {
    (this.detectsOn = "window"),
      (this.events = new R0()),
      (this.modes = new $0(e, t));
  }
  get detect_on() {
    return this.detectsOn;
  }
  set detect_on(e) {
    this.detectsOn = e;
  }
  load(e) {
    var t;
    if (!e) return;
    const n = (t = e.detectsOn) !== null && t !== void 0 ? t : e.detect_on;
    n !== void 0 && (this.detectsOn = n),
      this.events.load(e.events),
      this.modes.load(e.modes);
  }
}
class N0 {
  load(e) {
    var t, n;
    !e ||
      (e.position !== void 0 &&
        (this.position = {
          x: (t = e.position.x) !== null && t !== void 0 ? t : 50,
          y: (n = e.position.y) !== null && n !== void 0 ? n : 50,
        }),
      e.options !== void 0 && (this.options = ne({}, e.options)));
  }
}
class H0 {
  constructor() {
    (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = "canvas");
  }
  load(e) {
    !e ||
      (e.maxWidth !== void 0 && (this.maxWidth = e.maxWidth),
      e.mode !== void 0 &&
        (e.mode === "screen" ? (this.mode = "screen") : (this.mode = "canvas")),
      e.options !== void 0 && (this.options = ne({}, e.options)));
  }
}
class V0 {
  constructor() {
    (this.auto = !1), (this.mode = "any"), (this.value = !1);
  }
  load(e) {
    !e ||
      (e.auto !== void 0 && (this.auto = e.auto),
      e.mode !== void 0 && (this.mode = e.mode),
      e.value !== void 0 && (this.value = e.value));
  }
}
class j0 {
  constructor() {
    (this.name = ""), (this.default = new V0());
  }
  load(e) {
    !e ||
      (e.name !== void 0 && (this.name = e.name),
      this.default.load(e.default),
      e.options !== void 0 && (this.options = ne({}, e.options)));
  }
}
class qt {
  constructor() {
    (this.count = 0),
      (this.enable = !1),
      (this.offset = 0),
      (this.speed = 1),
      (this.decay = 0),
      (this.sync = !0);
  }
  load(e) {
    !e ||
      (e.count !== void 0 && (this.count = H(e.count)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.offset !== void 0 && (this.offset = H(e.offset)),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class q0 {
  constructor() {
    (this.h = new qt()), (this.s = new qt()), (this.l = new qt());
  }
  load(e) {
    !e || (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l));
  }
}
class st extends ie {
  constructor() {
    super(), (this.animation = new q0());
  }
  static create(e, t) {
    const n = new st();
    return (
      n.load(e),
      t !== void 0 &&
        (typeof t == "string" || t instanceof Array
          ? n.load({ value: t })
          : n.load(t)),
      n
    );
  }
  load(e) {
    if ((super.load(e), !e)) return;
    const t = e.animation;
    t !== void 0 &&
      (t.enable !== void 0
        ? this.animation.h.load(t)
        : this.animation.load(e.animation));
  }
}
class U0 {
  constructor() {
    this.speed = 2;
  }
  load(e) {
    !e || (e.speed !== void 0 && (this.speed = e.speed));
  }
}
class G0 {
  constructor() {
    (this.enable = !0), (this.retries = 0);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.retries !== void 0 && (this.retries = e.retries));
  }
}
class W0 {
  constructor() {
    (this.enable = !1), (this.minimumValue = 0);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.minimumValue !== void 0 && (this.minimumValue = e.minimumValue));
  }
}
class Se {
  constructor() {
    (this.random = new W0()), (this.value = 0);
  }
  load(e) {
    !e ||
      (typeof e.random == "boolean"
        ? (this.random.enable = e.random)
        : this.random.load(e.random),
      e.value !== void 0 &&
        (this.value = H(
          e.value,
          this.random.enable ? this.random.minimumValue : void 0
        )));
  }
}
class Zi extends Se {
  constructor() {
    super(), (this.random.minimumValue = 0.1), (this.value = 1);
  }
}
class ns {
  constructor() {
    (this.horizontal = new Zi()), (this.vertical = new Zi());
  }
  load(e) {
    !e || (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical));
  }
}
class X0 {
  constructor() {
    (this.absorb = new U0()),
      (this.bounce = new ns()),
      (this.enable = !1),
      (this.mode = "bounce"),
      (this.overlap = new G0());
  }
  load(e) {
    !e ||
      (this.absorb.load(e.absorb),
      this.bounce.load(e.bounce),
      e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode),
      this.overlap.load(e.overlap));
  }
}
class Y0 {
  constructor() {
    (this.offset = 0), (this.value = 90);
  }
  load(e) {
    !e ||
      (e.offset !== void 0 && (this.offset = H(e.offset)),
      e.value !== void 0 && (this.value = H(e.value)));
  }
}
class Z0 {
  constructor() {
    (this.distance = 200),
      (this.enable = !1),
      (this.rotate = { x: 3e3, y: 3e3 });
  }
  get rotateX() {
    return this.rotate.x;
  }
  set rotateX(e) {
    this.rotate.x = e;
  }
  get rotateY() {
    return this.rotate.y;
  }
  set rotateY(e) {
    this.rotate.y = e;
  }
  load(e) {
    var t, n, s, o;
    if (!e) return;
    e.distance !== void 0 && (this.distance = H(e.distance)),
      e.enable !== void 0 && (this.enable = e.enable);
    const r =
      (n = (t = e.rotate) === null || t === void 0 ? void 0 : t.x) !== null &&
      n !== void 0
        ? n
        : e.rotateX;
    r !== void 0 && (this.rotate.x = r);
    const a =
      (o = (s = e.rotate) === null || s === void 0 ? void 0 : s.y) !== null &&
      o !== void 0
        ? o
        : e.rotateY;
    a !== void 0 && (this.rotate.y = a);
  }
}
class K0 {
  constructor() {
    (this.x = 50), (this.y = 50), (this.mode = "percent"), (this.radius = 0);
  }
  load(e) {
    !e ||
      (e.x !== void 0 && (this.x = e.x),
      e.y !== void 0 && (this.y = e.y),
      e.mode !== void 0 && (this.mode = e.mode),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class J0 {
  constructor() {
    (this.acceleration = 9.81),
      (this.enable = !1),
      (this.inverse = !1),
      (this.maxSpeed = 50);
  }
  load(e) {
    !e ||
      (e.acceleration !== void 0 && (this.acceleration = H(e.acceleration)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.inverse !== void 0 && (this.inverse = e.inverse),
      e.maxSpeed !== void 0 && (this.maxSpeed = H(e.maxSpeed)));
  }
}
class Q0 {
  constructor() {
    (this.clamp = !0),
      (this.delay = new Se()),
      (this.enable = !1),
      (this.options = {});
  }
  load(e) {
    !e ||
      (e.clamp !== void 0 && (this.clamp = e.clamp),
      this.delay.load(e.delay),
      e.enable !== void 0 && (this.enable = e.enable),
      (this.generator = e.generator),
      e.options && (this.options = ne(this.options, e.options)));
  }
}
class e2 {
  constructor() {
    (this.enable = !1),
      (this.length = 10),
      (this.fillColor = new ie()),
      (this.fillColor.value = "#000000");
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      (this.fillColor = ie.create(this.fillColor, e.fillColor)),
      e.length !== void 0 && (this.length = e.length));
  }
}
class t2 {
  constructor() {
    this.default = "out";
  }
  load(e) {
    var t, n, s, o;
    !e ||
      (e.default !== void 0 && (this.default = e.default),
      (this.bottom = (t = e.bottom) !== null && t !== void 0 ? t : e.default),
      (this.left = (n = e.left) !== null && n !== void 0 ? n : e.default),
      (this.right = (s = e.right) !== null && s !== void 0 ? s : e.default),
      (this.top = (o = e.top) !== null && o !== void 0 ? o : e.default));
  }
}
class i2 {
  constructor() {
    (this.acceleration = 0), (this.enable = !1);
  }
  load(e) {
    !e ||
      (e.acceleration !== void 0 && (this.acceleration = H(e.acceleration)),
      e.enable !== void 0 && (this.enable = e.enable),
      (this.position = e.position ? ne({}, e.position) : void 0));
  }
}
class n2 {
  constructor() {
    (this.angle = new Y0()),
      (this.attract = new Z0()),
      (this.center = new K0()),
      (this.decay = 0),
      (this.distance = {}),
      (this.direction = "none"),
      (this.drift = 0),
      (this.enable = !1),
      (this.gravity = new J0()),
      (this.path = new Q0()),
      (this.outModes = new t2()),
      (this.random = !1),
      (this.size = !1),
      (this.speed = 2),
      (this.spin = new i2()),
      (this.straight = !1),
      (this.trail = new e2()),
      (this.vibrate = !1),
      (this.warp = !1);
  }
  get bounce() {
    return this.collisions;
  }
  set bounce(e) {
    this.collisions = e;
  }
  get collisions() {
    return !1;
  }
  set collisions(e) {}
  get noise() {
    return this.path;
  }
  set noise(e) {
    this.path = e;
  }
  get outMode() {
    return this.outModes.default;
  }
  set outMode(e) {
    this.outModes.default = e;
  }
  get out_mode() {
    return this.outMode;
  }
  set out_mode(e) {
    this.outMode = e;
  }
  load(e) {
    var t, n, s;
    if (!e) return;
    this.angle.load(typeof e.angle == "number" ? { value: e.angle } : e.angle),
      this.attract.load(e.attract),
      this.center.load(e.center),
      e.decay !== void 0 && (this.decay = e.decay),
      e.direction !== void 0 && (this.direction = e.direction),
      e.distance !== void 0 &&
        (this.distance =
          typeof e.distance == "number"
            ? { horizontal: e.distance, vertical: e.distance }
            : Object.assign({}, e.distance)),
      e.drift !== void 0 && (this.drift = H(e.drift)),
      e.enable !== void 0 && (this.enable = e.enable),
      this.gravity.load(e.gravity);
    const o =
      (n = (t = e.outModes) !== null && t !== void 0 ? t : e.outMode) !==
        null && n !== void 0
        ? n
        : e.out_mode;
    o !== void 0 &&
      (typeof o == "object"
        ? this.outModes.load(o)
        : this.outModes.load({ default: o })),
      this.path.load((s = e.path) !== null && s !== void 0 ? s : e.noise),
      e.random !== void 0 && (this.random = e.random),
      e.size !== void 0 && (this.size = e.size),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      this.spin.load(e.spin),
      e.straight !== void 0 && (this.straight = e.straight),
      this.trail.load(e.trail),
      e.vibrate !== void 0 && (this.vibrate = e.vibrate),
      e.warp !== void 0 && (this.warp = e.warp);
  }
}
class ss {
  constructor() {
    (this.count = 0),
      (this.enable = !1),
      (this.speed = 1),
      (this.decay = 0),
      (this.sync = !1);
  }
  load(e) {
    !e ||
      (e.count !== void 0 && (this.count = H(e.count)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class s2 extends ss {
  constructor() {
    super(),
      (this.destroy = "none"),
      (this.enable = !1),
      (this.speed = 2),
      (this.startValue = "random"),
      (this.sync = !1);
  }
  get opacity_min() {
    return this.minimumValue;
  }
  set opacity_min(e) {
    this.minimumValue = e;
  }
  load(e) {
    var t;
    !e ||
      (super.load(e),
      e.destroy !== void 0 && (this.destroy = e.destroy),
      e.enable !== void 0 && (this.enable = e.enable),
      (this.minimumValue =
        (t = e.minimumValue) !== null && t !== void 0 ? t : e.opacity_min),
      e.speed !== void 0 && (this.speed = e.speed),
      e.startValue !== void 0 && (this.startValue = e.startValue),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class o2 extends Se {
  constructor() {
    super(),
      (this.animation = new s2()),
      (this.random.minimumValue = 0.1),
      (this.value = 1);
  }
  get anim() {
    return this.animation;
  }
  set anim(e) {
    this.animation = e;
  }
  load(e) {
    var t;
    if (!e) return;
    super.load(e);
    const n = (t = e.animation) !== null && t !== void 0 ? t : e.anim;
    n !== void 0 &&
      (this.animation.load(n),
      (this.value = H(
        this.value,
        this.animation.enable ? this.animation.minimumValue : void 0
      )));
  }
}
class r2 {
  constructor() {
    (this.enable = !1), (this.area = 800), (this.factor = 1e3);
  }
  get value_area() {
    return this.area;
  }
  set value_area(e) {
    this.area = e;
  }
  load(e) {
    var t;
    if (!e) return;
    e.enable !== void 0 && (this.enable = e.enable);
    const n = (t = e.area) !== null && t !== void 0 ? t : e.value_area;
    n !== void 0 && (this.area = n),
      e.factor !== void 0 && (this.factor = e.factor);
  }
}
class a2 {
  constructor() {
    (this.density = new r2()), (this.limit = 0), (this.value = 100);
  }
  get max() {
    return this.limit;
  }
  set max(e) {
    this.limit = e;
  }
  load(e) {
    var t;
    if (!e) return;
    this.density.load(e.density);
    const n = (t = e.limit) !== null && t !== void 0 ? t : e.max;
    n !== void 0 && (this.limit = n),
      e.value !== void 0 && (this.value = e.value);
  }
}
class l2 {
  constructor() {
    (this.blur = 0),
      (this.color = new ie()),
      (this.enable = !1),
      (this.offset = { x: 0, y: 0 }),
      (this.color.value = "#000");
  }
  load(e) {
    !e ||
      (e.blur !== void 0 && (this.blur = e.blur),
      (this.color = ie.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.offset !== void 0 &&
        (e.offset.x !== void 0 && (this.offset.x = e.offset.x),
        e.offset.y !== void 0 && (this.offset.y = e.offset.y)));
  }
}
const Ut = "character",
  Gt = "char",
  Wt = "image",
  Xt = "images",
  Yt = "polygon",
  Zt = "star";
class u2 {
  constructor() {
    (this.options = {}), (this.type = "circle");
  }
  get character() {
    var e;
    return (e = this.options[Ut]) !== null && e !== void 0
      ? e
      : this.options[Gt];
  }
  set character(e) {
    this.options[Gt] = this.options[Ut] = e;
  }
  get custom() {
    return this.options;
  }
  set custom(e) {
    this.options = e;
  }
  get image() {
    var e;
    return (e = this.options[Wt]) !== null && e !== void 0
      ? e
      : this.options[Xt];
  }
  set image(e) {
    this.options[Xt] = this.options[Wt] = e;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
  get polygon() {
    var e;
    return (e = this.options[Yt]) !== null && e !== void 0
      ? e
      : this.options[Zt];
  }
  set polygon(e) {
    this.options[Zt] = this.options[Yt] = e;
  }
  get stroke() {
    return [];
  }
  set stroke(e) {}
  load(e) {
    var t, n, s;
    if (!e) return;
    const o = (t = e.options) !== null && t !== void 0 ? t : e.custom;
    if (o !== void 0)
      for (const r in o) {
        const a = o[r];
        a &&
          (this.options[r] = ne(
            (n = this.options[r]) !== null && n !== void 0 ? n : {},
            a
          ));
      }
    this.loadShape(e.character, Ut, Gt, !0),
      this.loadShape(e.polygon, Yt, Zt, !1),
      this.loadShape(
        (s = e.image) !== null && s !== void 0 ? s : e.images,
        Wt,
        Xt,
        !0
      ),
      e.type !== void 0 && (this.type = e.type);
  }
  loadShape(e, t, n, s) {
    var o, r;
    if (!e) return;
    const a = e instanceof Array,
      l = a ? [] : {},
      u = a !== this.options[t] instanceof Array,
      c = a !== this.options[n] instanceof Array;
    u && (this.options[t] = l),
      c && s && (this.options[n] = l),
      (this.options[t] = ne(
        (o = this.options[t]) !== null && o !== void 0 ? o : l,
        e
      )),
      (!this.options[n] || s) &&
        (this.options[n] = ne(
          (r = this.options[n]) !== null && r !== void 0 ? r : l,
          e
        ));
  }
}
class c2 extends ss {
  constructor() {
    super(),
      (this.destroy = "none"),
      (this.enable = !1),
      (this.speed = 5),
      (this.startValue = "random"),
      (this.sync = !1);
  }
  get size_min() {
    return this.minimumValue;
  }
  set size_min(e) {
    this.minimumValue = e;
  }
  load(e) {
    var t;
    super.load(e),
      e &&
        (e.destroy !== void 0 && (this.destroy = e.destroy),
        e.enable !== void 0 && (this.enable = e.enable),
        (this.minimumValue =
          (t = e.minimumValue) !== null && t !== void 0 ? t : e.size_min),
        e.speed !== void 0 && (this.speed = e.speed),
        e.startValue !== void 0 && (this.startValue = e.startValue),
        e.sync !== void 0 && (this.sync = e.sync));
  }
}
class d2 extends Se {
  constructor() {
    super(),
      (this.animation = new c2()),
      (this.random.minimumValue = 1),
      (this.value = 3);
  }
  get anim() {
    return this.animation;
  }
  set anim(e) {
    this.animation = e;
  }
  load(e) {
    var t;
    if ((super.load(e), !e)) return;
    const n = (t = e.animation) !== null && t !== void 0 ? t : e.anim;
    n !== void 0 &&
      (this.animation.load(n),
      (this.value = H(
        this.value,
        this.animation.enable ? this.animation.minimumValue : void 0
      )));
  }
}
class Ki {
  constructor() {
    this.width = 0;
  }
  load(e) {
    !e ||
      (e.color !== void 0 && (this.color = st.create(this.color, e.color)),
      e.width !== void 0 && (this.width = e.width),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class f2 extends Se {
  constructor() {
    super(),
      (this.opacityRate = 1),
      (this.sizeRate = 1),
      (this.velocityRate = 1);
  }
  load(e) {
    super.load(e),
      e &&
        (e.opacityRate !== void 0 && (this.opacityRate = e.opacityRate),
        e.sizeRate !== void 0 && (this.sizeRate = e.sizeRate),
        e.velocityRate !== void 0 && (this.velocityRate = e.velocityRate));
  }
}
class h2 {
  constructor(e, t) {
    (this._engine = e),
      (this._container = t),
      (this.bounce = new ns()),
      (this.collisions = new X0()),
      (this.color = new st()),
      (this.color.value = "#fff"),
      (this.groups = {}),
      (this.move = new n2()),
      (this.number = new a2()),
      (this.opacity = new o2()),
      (this.reduceDuplicates = !1),
      (this.shadow = new l2()),
      (this.shape = new u2()),
      (this.size = new d2()),
      (this.stroke = new Ki()),
      (this.zIndex = new f2());
  }
  load(e) {
    var t, n, s, o, r, a;
    if (!e) return;
    if (
      (this.bounce.load(e.bounce),
      this.color.load(st.create(this.color, e.color)),
      e.groups !== void 0)
    )
      for (const c in e.groups) {
        const d = e.groups[c];
        d !== void 0 &&
          (this.groups[c] = ne(
            (t = this.groups[c]) !== null && t !== void 0 ? t : {},
            d
          ));
      }
    this.move.load(e.move),
      this.number.load(e.number),
      this.opacity.load(e.opacity),
      e.reduceDuplicates !== void 0 &&
        (this.reduceDuplicates = e.reduceDuplicates),
      this.shape.load(e.shape),
      this.size.load(e.size),
      this.shadow.load(e.shadow),
      this.zIndex.load(e.zIndex);
    const l =
      (s = (n = e.move) === null || n === void 0 ? void 0 : n.collisions) !==
        null && s !== void 0
        ? s
        : (o = e.move) === null || o === void 0
        ? void 0
        : o.bounce;
    l !== void 0 && (this.collisions.enable = l),
      this.collisions.load(e.collisions),
      e.interactivity !== void 0 &&
        (this.interactivity = ne({}, e.interactivity));
    const u =
      (r = e.stroke) !== null && r !== void 0
        ? r
        : (a = e.shape) === null || a === void 0
        ? void 0
        : a.stroke;
    if (
      (u &&
        (this.stroke = J(u, (c) => {
          const d = new Ki();
          return d.load(c), d;
        })),
      this._container)
    ) {
      const c = this._engine.plugins.updaters.get(this._container);
      if (c) for (const f of c) f.loadOptions && f.loadOptions(this, e);
      const d = this._engine.plugins.interactors.get(this._container);
      if (d)
        for (const f of d)
          f.loadParticlesOptions && f.loadParticlesOptions(this, e);
    }
  }
}
function os(i, ...e) {
  for (const t of e) i.load(t);
}
function bi(i, e, ...t) {
  const n = new h2(i, e);
  return os(n, ...t), n;
}
class p2 {
  constructor(e, t) {
    (this._engine = e),
      (this._container = t),
      (this.autoPlay = !0),
      (this.background = new A0()),
      (this.backgroundMask = new P0()),
      (this.defaultThemes = {}),
      (this.delay = 0),
      (this.fullScreen = new O0()),
      (this.detectRetina = !0),
      (this.duration = 0),
      (this.fpsLimit = 120),
      (this.interactivity = new is(e, t)),
      (this.manualParticles = []),
      (this.particles = bi(this._engine, this._container)),
      (this.pauseOnBlur = !0),
      (this.pauseOnOutsideViewport = !0),
      (this.responsive = []),
      (this.smooth = !1),
      (this.style = {}),
      (this.themes = []),
      (this.zLayers = 100);
  }
  get backgroundMode() {
    return this.fullScreen;
  }
  set backgroundMode(e) {
    this.fullScreen.load(e);
  }
  get fps_limit() {
    return this.fpsLimit;
  }
  set fps_limit(e) {
    this.fpsLimit = e;
  }
  get retina_detect() {
    return this.detectRetina;
  }
  set retina_detect(e) {
    this.detectRetina = e;
  }
  load(e) {
    var t, n, s, o, r;
    if (!e) return;
    e.preset !== void 0 && J(e.preset, (d) => this._importPreset(d)),
      e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
      e.delay !== void 0 && (this.delay = H(e.delay));
    const a =
      (t = e.detectRetina) !== null && t !== void 0 ? t : e.retina_detect;
    a !== void 0 && (this.detectRetina = a),
      e.duration !== void 0 && (this.duration = H(e.duration));
    const l = (n = e.fpsLimit) !== null && n !== void 0 ? n : e.fps_limit;
    l !== void 0 && (this.fpsLimit = l),
      e.pauseOnBlur !== void 0 && (this.pauseOnBlur = e.pauseOnBlur),
      e.pauseOnOutsideViewport !== void 0 &&
        (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport),
      e.zLayers !== void 0 && (this.zLayers = e.zLayers),
      this.background.load(e.background);
    const u =
      (s = e.fullScreen) !== null && s !== void 0 ? s : e.backgroundMode;
    typeof u == "boolean"
      ? (this.fullScreen.enable = u)
      : this.fullScreen.load(u),
      this.backgroundMask.load(e.backgroundMask),
      this.interactivity.load(e.interactivity),
      e.manualParticles !== void 0 &&
        (this.manualParticles = e.manualParticles.map((d) => {
          const f = new N0();
          return f.load(d), f;
        })),
      this.particles.load(e.particles),
      (this.style = ne(this.style, e.style)),
      this._engine.plugins.loadOptions(this, e),
      e.smooth !== void 0 && (this.smooth = e.smooth);
    const c = this._engine.plugins.interactors.get(this._container);
    if (c) for (const d of c) d.loadOptions && d.loadOptions(this, e);
    if (e.responsive !== void 0)
      for (const d of e.responsive) {
        const f = new H0();
        f.load(d), this.responsive.push(f);
      }
    if (
      (this.responsive.sort((d, f) => d.maxWidth - f.maxWidth),
      e.themes !== void 0)
    )
      for (const d of e.themes) {
        const f = new j0();
        f.load(d), this.themes.push(f);
      }
    (this.defaultThemes.dark =
      (o = this._findDefaultTheme("dark")) === null || o === void 0
        ? void 0
        : o.name),
      (this.defaultThemes.light =
        (r = this._findDefaultTheme("light")) === null || r === void 0
          ? void 0
          : r.name);
  }
  setResponsive(e, t, n) {
    this.load(n);
    const s = this.responsive.find((o) =>
      o.mode === "screen" && screen
        ? o.maxWidth > screen.availWidth
        : o.maxWidth * t > e
    );
    return (
      this.load(s == null ? void 0 : s.options), s == null ? void 0 : s.maxWidth
    );
  }
  setTheme(e) {
    if (e) {
      const t = this.themes.find((n) => n.name === e);
      t && this.load(t.options);
    } else {
      const t = Un("(prefers-color-scheme: dark)"),
        n = t && t.matches,
        s = this._findDefaultTheme(n ? "dark" : "light");
      s && this.load(s.options);
    }
  }
  _findDefaultTheme(e) {
    var t;
    return (t = this.themes.find(
      (n) => n.default.value && n.default.mode === e
    )) !== null && t !== void 0
      ? t
      : this.themes.find((n) => n.default.value && n.default.mode === "any");
  }
  _importPreset(e) {
    this.load(this._engine.plugins.getPreset(e));
  }
}
class v2 {
  constructor(e, t) {
    (this.container = t),
      (this._engine = e),
      (this._interactors = this._engine.plugins.getInteractors(
        this.container,
        !0
      )),
      (this._externalInteractors = []),
      (this._particleInteractors = []);
  }
  async externalInteract(e) {
    for (const t of this._externalInteractors)
      t.isEnabled() && (await t.interact(e));
  }
  handleClickMode(e) {
    for (const t of this._externalInteractors)
      t.handleClickMode && t.handleClickMode(e);
  }
  init() {
    (this._externalInteractors = []), (this._particleInteractors = []);
    for (const e of this._interactors) {
      switch (e.type) {
        case 0:
          this._externalInteractors.push(e);
          break;
        case 1:
          this._particleInteractors.push(e);
          break;
      }
      e.init();
    }
  }
  async particlesInteract(e, t) {
    for (const n of this._externalInteractors) n.clear(e, t);
    for (const n of this._particleInteractors)
      n.isEnabled(e) && (await n.interact(e, t));
  }
  async reset(e) {
    for (const t of this._externalInteractors)
      t.isEnabled() && (await t.reset(e));
    for (const t of this._particleInteractors)
      t.isEnabled(e) && (await t.reset(e));
  }
}
const Ji = (i) => {
  !K(i.outMode, i.checkModes) ||
    (i.coord > i.maxCoord - i.radius * 2
      ? i.setCb(-i.radius)
      : i.coord < i.radius * 2 && i.setCb(i.radius));
};
class m2 {
  constructor(e, t, n, s, o, r) {
    (this.container = n), (this._engine = e), this.init(t, s, o, r);
  }
  destroy(e) {
    if (!(this.unbreakable || this.destroyed)) {
      (this.destroyed = !0),
        (this.bubble.inRange = !1),
        (this.slow.inRange = !1);
      for (const [, t] of this.container.plugins)
        t.particleDestroyed && t.particleDestroyed(this, e);
      for (const t of this.container.particles.updaters)
        t.particleDestroyed && t.particleDestroyed(this, e);
    }
  }
  draw(e) {
    const t = this.container;
    for (const [, n] of t.plugins) t.canvas.drawParticlePlugin(n, this, e);
    t.canvas.drawParticle(this, e);
  }
  getFillColor() {
    var e, t;
    const n =
      (e = this.bubble.color) !== null && e !== void 0 ? e : Wi(this.color);
    if (n && this.roll && (this.backColor || this.roll.alter)) {
      const s = this.roll.horizontal && this.roll.vertical ? 2 : 1,
        o = this.roll.horizontal ? Math.PI / 2 : 0;
      if (
        Math.floor(
          (((t = this.roll.angle) !== null && t !== void 0 ? t : 0) + o) /
            (Math.PI / s)
        ) % 2
      ) {
        if (this.backColor) return this.backColor;
        if (this.roll.alter)
          return g0(n, this.roll.alter.type, this.roll.alter.value);
      }
    }
    return n;
  }
  getMass() {
    return (this.getRadius() ** 2 * Math.PI) / 2;
  }
  getPosition() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y,
      z: this.position.z,
    };
  }
  getRadius() {
    var e;
    return (e = this.bubble.radius) !== null && e !== void 0
      ? e
      : this.size.value;
  }
  getStrokeColor() {
    var e, t;
    return (t =
      (e = this.bubble.color) !== null && e !== void 0
        ? e
        : Wi(this.strokeColor)) !== null && t !== void 0
      ? t
      : this.getFillColor();
  }
  init(e, t, n, s) {
    var o, r, a, l, u, c, d, f, p;
    const h = this.container,
      g = this._engine;
    (this.id = e),
      (this.group = s),
      (this.fill = !0),
      (this.pathRotation = !1),
      (this.close = !0),
      (this.lastPathTime = 0),
      (this.destroyed = !1),
      (this.unbreakable = !1),
      (this.rotation = 0),
      (this.misplaced = !1),
      (this.retina = { maxDistance: {} }),
      (this.outType = "normal"),
      (this.ignoresResizeRatio = !0);
    const y = h.retina.pixelRatio,
      x = h.actualOptions,
      C = bi(this._engine, h, x.particles),
      b = C.shape.type,
      { reduceDuplicates: _ } = C;
    this.shape = xe(b, this.id, _);
    const E = C.shape;
    if (n && n.shape && n.shape.type) {
      const M = n.shape.type,
        O = xe(M, this.id, _);
      O && ((this.shape = O), E.load(n.shape));
    }
    (this.shapeData = this._loadShapeData(E, _)),
      C.load(n),
      C.load(
        (o = this.shapeData) === null || o === void 0 ? void 0 : o.particles
      ),
      (this.interactivity = new is(g, h)),
      this.interactivity.load(h.actualOptions.interactivity),
      this.interactivity.load(C.interactivity),
      (this.fill =
        (a =
          (r = this.shapeData) === null || r === void 0 ? void 0 : r.fill) !==
          null && a !== void 0
          ? a
          : this.fill),
      (this.close =
        (u =
          (l = this.shapeData) === null || l === void 0 ? void 0 : l.close) !==
          null && u !== void 0
          ? u
          : this.close),
      (this.options = C);
    const w = this.options.move.path;
    (this.pathDelay = Ne(w.delay) * 1e3),
      w.generator &&
        ((this.pathGenerator = this._engine.plugins.getPathGenerator(
          w.generator
        )),
        this.pathGenerator &&
          h.addPath(w.generator, this.pathGenerator) &&
          this.pathGenerator.init(h));
    const F = R(this.options.zIndex.value);
    h.retina.initParticle(this);
    const k = this.options.size,
      T = k.value,
      B = k.animation;
    if (
      ((this.size = {
        enable: k.animation.enable,
        value: R(k.value) * h.retina.pixelRatio,
        max: ze(T) * y,
        min: ft(T) * y,
        loops: 0,
        maxLoops: R(k.animation.count),
      }),
      B.enable)
    )
      switch (
        ((this.size.status = 0),
        (this.size.decay = 1 - R(B.decay)),
        B.startValue)
      ) {
        case "min":
          (this.size.value = this.size.min), (this.size.status = 0);
          break;
        case "random":
          (this.size.value = se(this.size) * y),
            (this.size.status = j() >= 0.5 ? 0 : 1);
          break;
        case "max":
        default:
          (this.size.value = this.size.max), (this.size.status = 1);
          break;
      }
    (this.bubble = { inRange: !1 }),
      (this.slow = { inRange: !1, factor: 1 }),
      (this.position = this._calcPosition(h, t, Be(F, 0, h.zLayers))),
      (this.initialPosition = this.position.copy());
    const D = h.canvas.size,
      z = Object.assign({}, this.options.move.center),
      V = z.mode === "percent";
    switch (
      ((this.moveCenter = {
        x: z.x * (V ? D.width / 100 : 1),
        y: z.y * (V ? D.height / 100 : 1),
        radius:
          (c = this.options.move.center.radius) !== null && c !== void 0
            ? c
            : 0,
        mode:
          (d = this.options.move.center.mode) !== null && d !== void 0
            ? d
            : "percent",
      }),
      (this.direction = Yd(
        this.options.move.direction,
        this.position,
        this.moveCenter
      )),
      this.options.move.direction)
    ) {
      case "inside":
        this.outType = "inside";
        break;
      case "outside":
        this.outType = "outside";
        break;
    }
    (this.initialVelocity = this._calculateVelocity()),
      (this.velocity = this.initialVelocity.copy()),
      (this.moveDecay = 1 - R(this.options.move.decay)),
      (this.offset = Z.origin);
    const U = h.particles;
    (U.needsSort = U.needsSort || U.lastZIndex < this.position.z),
      (U.lastZIndex = this.position.z),
      (this.zIndexFactor = this.position.z / h.zLayers),
      (this.sides = 24);
    let S = h.drawers.get(this.shape);
    S ||
      ((S = this._engine.plugins.getShapeDrawer(this.shape)),
      S && h.drawers.set(this.shape, S)),
      S != null && S.loadShape && (S == null || S.loadShape(this));
    const A = S == null ? void 0 : S.getSidesCount;
    A && (this.sides = A(this)),
      (this.spawning = !1),
      (this.shadowColor = Fe(this.options.shadow.color));
    for (const M of h.particles.updaters) M.init(this);
    for (const M of h.particles.movers)
      (f = M.init) === null || f === void 0 || f.call(M, this);
    S != null && S.particleInit && S.particleInit(h, this);
    for (const [, M] of h.plugins)
      (p = M.particleCreated) === null || p === void 0 || p.call(M, this);
  }
  isInsideCanvas() {
    const e = this.getRadius(),
      t = this.container.canvas.size;
    return (
      this.position.x >= -e &&
      this.position.y >= -e &&
      this.position.y <= t.height + e &&
      this.position.x <= t.width + e
    );
  }
  isVisible() {
    return !this.destroyed && !this.spawning && this.isInsideCanvas();
  }
  reset() {
    var e;
    for (const t of this.container.particles.updaters)
      (e = t.reset) === null || e === void 0 || e.call(t, this);
  }
  _calcPosition(e, t, n, s = 0) {
    var o, r, a, l;
    for (const [, y] of e.plugins) {
      const x =
        y.particlePosition !== void 0 ? y.particlePosition(t, this) : void 0;
      if (x !== void 0) return me.create(x.x, x.y, n);
    }
    const u = e.canvas.size,
      c = Jd({ size: u, position: t }),
      d = me.create(c.x, c.y, n),
      f = this.getRadius(),
      p = this.options.move.outModes,
      h = (y) => {
        Ji({
          outMode: y,
          checkModes: ["bounce", "bounce-horizontal"],
          coord: d.x,
          maxCoord: e.canvas.size.width,
          setCb: (x) => (d.x += x),
          radius: f,
        });
      },
      g = (y) => {
        Ji({
          outMode: y,
          checkModes: ["bounce", "bounce-vertical"],
          coord: d.y,
          maxCoord: e.canvas.size.height,
          setCb: (x) => (d.y += x),
          radius: f,
        });
      };
    return (
      h((o = p.left) !== null && o !== void 0 ? o : p.default),
      h((r = p.right) !== null && r !== void 0 ? r : p.default),
      g((a = p.top) !== null && a !== void 0 ? a : p.default),
      g((l = p.bottom) !== null && l !== void 0 ? l : p.default),
      this._checkOverlap(d, s) ? this._calcPosition(e, void 0, n, s + 1) : d
    );
  }
  _calculateVelocity() {
    const t = Zd(this.direction).copy(),
      n = this.options.move;
    if (n.direction === "inside" || n.direction === "outside") return t;
    const s = (Math.PI / 180) * R(n.angle.value),
      o = (Math.PI / 180) * R(n.angle.offset),
      r = { left: o - s / 2, right: o + s / 2 };
    return (
      n.straight || (t.angle += se(H(r.left, r.right))),
      n.random && typeof n.speed == "number" && (t.length *= j()),
      t
    );
  }
  _checkOverlap(e, t = 0) {
    const n = this.options.collisions,
      s = this.getRadius();
    if (!n.enable) return !1;
    const o = n.overlap;
    if (o.enable) return !1;
    const r = o.retries;
    if (r >= 0 && t > r)
      throw new Error("Particle is overlapping and can't be placed");
    let a = !1;
    for (const l of this.container.particles.array)
      if (oe(e, l.position) < s + l.getRadius()) {
        a = !0;
        break;
      }
    return a;
  }
  _loadShapeData(e, t) {
    const n = e.options[this.shape];
    if (n) return ne({}, xe(n, this.id, t));
  }
}
class g2 {
  constructor(e, t) {
    (this.position = e), (this.particle = t);
  }
}
class rs {
  constructor(e, t) {
    this.position = { x: e, y: t };
  }
}
class ve extends rs {
  constructor(e, t, n) {
    super(e, t), (this.radius = n);
  }
  contains(e) {
    return oe(e, this.position) <= this.radius;
  }
  intersects(e) {
    const t = e,
      n = e,
      s = this.position,
      o = e.position,
      r = { x: Math.abs(o.x - s.x), y: Math.abs(o.y - s.y) },
      a = this.radius;
    if (n.radius !== void 0) {
      const l = a + n.radius,
        u = Math.sqrt(r.x ** 2 + r.y ** 2);
      return l > u;
    } else if (t.size !== void 0) {
      const l = t.size.width,
        u = t.size.height;
      return (
        Math.pow(r.x - l, 2) + Math.pow(r.y - u, 2) <= a ** 2 ||
        (r.x <= a + l && r.y <= a + u) ||
        r.x <= l ||
        r.y <= u
      );
    }
    return !1;
  }
}
class pe extends rs {
  constructor(e, t, n, s) {
    super(e, t), (this.size = { height: s, width: n });
  }
  contains(e) {
    const t = this.size.width,
      n = this.size.height,
      s = this.position;
    return e.x >= s.x && e.x <= s.x + t && e.y >= s.y && e.y <= s.y + n;
  }
  intersects(e) {
    e instanceof ve && e.intersects(this);
    const t = this.size.width,
      n = this.size.height,
      s = this.position,
      o = e.position,
      r = e instanceof pe ? e.size : { width: 0, height: 0 },
      a = r.width,
      l = r.height;
    return o.x < s.x + t && o.x + a > s.x && o.y < s.y + n && o.y + l > s.y;
  }
}
class Ye {
  constructor(e, t) {
    (this.rectangle = e),
      (this.capacity = t),
      (this._points = []),
      (this._divided = !1);
  }
  insert(e) {
    var t, n, s, o, r;
    return this.rectangle.contains(e.position)
      ? this._points.length < this.capacity
        ? (this._points.push(e), !0)
        : (this._divided || this.subdivide(),
          (r =
            ((t = this._NE) === null || t === void 0 ? void 0 : t.insert(e)) ||
            ((n = this._NW) === null || n === void 0 ? void 0 : n.insert(e)) ||
            ((s = this._SE) === null || s === void 0 ? void 0 : s.insert(e)) ||
            ((o = this._SW) === null || o === void 0
              ? void 0
              : o.insert(e))) !== null && r !== void 0
            ? r
            : !1)
      : !1;
  }
  query(e, t, n) {
    var s, o, r, a;
    const l = n != null ? n : [];
    if (!e.intersects(this.rectangle)) return [];
    for (const u of this._points)
      (!e.contains(u.position) &&
        oe(e.position, u.position) > u.particle.getRadius() &&
        (!t || t(u.particle))) ||
        l.push(u.particle);
    return (
      this._divided &&
        ((s = this._NE) === null || s === void 0 || s.query(e, t, l),
        (o = this._NW) === null || o === void 0 || o.query(e, t, l),
        (r = this._SE) === null || r === void 0 || r.query(e, t, l),
        (a = this._SW) === null || a === void 0 || a.query(e, t, l)),
      l
    );
  }
  queryCircle(e, t, n) {
    return this.query(new ve(e.x, e.y, t), n);
  }
  queryRectangle(e, t, n) {
    return this.query(new pe(e.x, e.y, t.width, t.height), n);
  }
  subdivide() {
    const e = this.rectangle.position.x,
      t = this.rectangle.position.y,
      n = this.rectangle.size.width,
      s = this.rectangle.size.height,
      o = this.capacity;
    (this._NE = new Ye(new pe(e, t, n / 2, s / 2), o)),
      (this._NW = new Ye(new pe(e + n / 2, t, n / 2, s / 2), o)),
      (this._SE = new Ye(new pe(e, t + s / 2, n / 2, s / 2), o)),
      (this._SW = new Ye(new pe(e + n / 2, t + s / 2, n / 2, s / 2), o)),
      (this._divided = !0);
  }
}
class y2 {
  constructor(e, t) {
    (this.container = t),
      (this._engine = e),
      (this.nextId = 0),
      (this.array = []),
      (this.zArray = []),
      (this.pool = []),
      (this.limit = 0),
      (this.needsSort = !1),
      (this.lastZIndex = 0),
      (this.interactionManager = new v2(this._engine, t));
    const n = this.container.canvas.size;
    (this.quadTree = new Ye(
      new pe(
        -n.width / 4,
        -n.height / 4,
        (n.width * 3) / 2,
        (n.height * 3) / 2
      ),
      4
    )),
      (this.movers = this._engine.plugins.getMovers(t, !0)),
      (this.updaters = this._engine.plugins.getUpdaters(t, !0));
  }
  get count() {
    return this.array.length;
  }
  addManualParticles() {
    const e = this.container,
      t = e.actualOptions;
    for (const n of t.manualParticles)
      this.addParticle(
        Kd({ size: e.canvas.size, position: n.position }),
        n.options
      );
  }
  addParticle(e, t, n, s) {
    const o = this.container,
      r = o.actualOptions,
      a = r.particles.number.limit;
    if (a > 0) {
      const l = this.count + 1 - a;
      l > 0 && this.removeQuantity(l);
    }
    return this._pushParticle(e, t, n, s);
  }
  clear() {
    (this.array = []), (this.zArray = []);
  }
  destroy() {
    (this.array = []),
      (this.zArray = []),
      (this.movers = []),
      (this.updaters = []);
  }
  async draw(e) {
    const t = this.container,
      n = this.container.canvas.size;
    (this.quadTree = new Ye(
      new pe(
        -n.width / 4,
        -n.height / 4,
        (n.width * 3) / 2,
        (n.height * 3) / 2
      ),
      4
    )),
      t.canvas.clear(),
      await this.update(e),
      this.needsSort &&
        (this.zArray.sort((s, o) => o.position.z - s.position.z || s.id - o.id),
        (this.lastZIndex = this.zArray[this.zArray.length - 1].position.z),
        (this.needsSort = !1));
    for (const [, s] of t.plugins) t.canvas.drawPlugin(s, e);
    for (const s of this.zArray) s.draw(e);
  }
  handleClickMode(e) {
    this.interactionManager.handleClickMode(e);
  }
  init() {
    var e;
    const t = this.container,
      n = t.actualOptions;
    (this.lastZIndex = 0), (this.needsSort = !1);
    let s = !1;
    (this.updaters = this._engine.plugins.getUpdaters(t, !0)),
      this.interactionManager.init();
    for (const [, o] of t.plugins)
      if (
        (o.particlesInitialization !== void 0 &&
          (s = o.particlesInitialization()),
        s)
      )
        break;
    this.interactionManager.init();
    for (const [, o] of t.pathGenerators) o.init(t);
    if ((this.addManualParticles(), !s)) {
      for (const o in n.particles.groups) {
        const r = n.particles.groups[o];
        for (
          let a = this.count, l = 0;
          l < ((e = r.number) === null || e === void 0 ? void 0 : e.value) &&
          a < n.particles.number.value;
          a++, l++
        )
          this.addParticle(void 0, r, o);
      }
      for (let o = this.count; o < n.particles.number.value; o++)
        this.addParticle();
    }
  }
  push(e, t, n, s) {
    this.pushing = !0;
    for (let o = 0; o < e; o++)
      this.addParticle(t == null ? void 0 : t.position, n, s);
    this.pushing = !1;
  }
  async redraw() {
    this.clear(), this.init(), await this.draw({ value: 0, factor: 0 });
  }
  remove(e, t, n) {
    this.removeAt(this.array.indexOf(e), void 0, t, n);
  }
  removeAt(e, t = 1, n, s) {
    if (e < 0 || e > this.count) return;
    let o = 0;
    for (let r = e; o < t && r < this.count; r++) {
      const a = this.array[r];
      if (!a || a.group !== n) continue;
      a.destroy(s), this.array.splice(r--, 1);
      const l = this.zArray.indexOf(a);
      this.zArray.splice(l, 1),
        this.pool.push(a),
        o++,
        this._engine.dispatchEvent("particleRemoved", {
          container: this.container,
          data: { particle: a },
        });
    }
  }
  removeQuantity(e, t) {
    this.removeAt(0, e, t);
  }
  setDensity() {
    const e = this.container.actualOptions;
    for (const t in e.particles.groups)
      this._applyDensity(e.particles.groups[t], 0, t);
    this._applyDensity(e.particles, e.manualParticles.length);
  }
  async update(e) {
    var t, n;
    const s = this.container,
      o = [];
    for (const [, r] of s.pathGenerators) r.update();
    for (const [, r] of s.plugins)
      (t = r.update) === null || t === void 0 || t.call(r, e);
    for (const r of this.array) {
      const a = s.canvas.resizeFactor;
      a &&
        !r.ignoresResizeRatio &&
        ((r.position.x *= a.width),
        (r.position.y *= a.height),
        (r.initialPosition.x *= a.width),
        (r.initialPosition.y *= a.height)),
        (r.ignoresResizeRatio = !1),
        await this.interactionManager.reset(r);
      for (const [, l] of this.container.plugins) {
        if (r.destroyed) break;
        (n = l.particleUpdate) === null || n === void 0 || n.call(l, r, e);
      }
      for (const l of this.movers) l.isEnabled(r) && l.move(r, e);
      if (r.destroyed) {
        o.push(r);
        continue;
      }
      this.quadTree.insert(new g2(r.getPosition(), r));
    }
    for (const r of o) this.remove(r);
    await this.interactionManager.externalInteract(e);
    for (const r of this.array) {
      for (const a of this.updaters) a.update(r, e);
      !r.destroyed &&
        !r.spawning &&
        (await this.interactionManager.particlesInteract(r, e));
    }
    delete s.canvas.resizeFactor;
  }
  _applyDensity(e, t, n) {
    var s;
    if (!(!((s = e.number.density) === null || s === void 0) && s.enable))
      return;
    const o = e.number,
      r = this._initDensityFactor(o.density),
      a = o.value,
      l = o.limit > 0 ? o.limit : a,
      u = Math.min(a, l) * r + t,
      c = Math.min(this.count, this.array.filter((d) => d.group === n).length);
    (this.limit = o.limit * r),
      c < u
        ? this.push(Math.abs(u - c), void 0, e, n)
        : c > u && this.removeQuantity(c - u, n);
  }
  _initDensityFactor(e) {
    const t = this.container;
    if (!t.canvas.element || !e.enable) return 1;
    const n = t.canvas.element,
      s = t.retina.pixelRatio;
    return (n.width * n.height) / (e.factor * s ** 2 * e.area);
  }
  _pushParticle(e, t, n, s) {
    try {
      let o = this.pool.pop();
      o
        ? o.init(this.nextId, e, t, n)
        : (o = new m2(this._engine, this.nextId, this.container, e, t, n));
      let r = !0;
      return (
        s && (r = s(o)),
        r
          ? (this.array.push(o),
            this.zArray.push(o),
            this.nextId++,
            this._engine.dispatchEvent("particleAdded", {
              container: this.container,
              data: { particle: o },
            }),
            o)
          : void 0
      );
    } catch (o) {
      console.warn(`error adding particle: ${o}`);
      return;
    }
  }
}
class C2 {
  constructor(e) {
    this.container = e;
  }
  init() {
    const e = this.container,
      t = e.actualOptions;
    (this.pixelRatio = !t.detectRetina || Ke() ? 1 : window.devicePixelRatio),
      (this.reduceFactor = 1);
    const n = this.pixelRatio;
    if (e.canvas.element) {
      const o = e.canvas.element;
      (e.canvas.size.width = o.offsetWidth * n),
        (e.canvas.size.height = o.offsetHeight * n);
    }
    const s = t.particles;
    (this.attractDistance = R(s.move.attract.distance) * n),
      (this.sizeAnimationSpeed = R(s.size.animation.speed) * n),
      (this.maxSpeed = R(s.move.gravity.maxSpeed) * n);
  }
  initParticle(e) {
    const t = e.options,
      n = this.pixelRatio,
      s = t.move.distance,
      o = e.retina;
    (o.attractDistance = R(t.move.attract.distance) * n),
      (o.moveDrift = R(t.move.drift) * n),
      (o.moveSpeed = R(t.move.speed) * n),
      (o.sizeAnimationSpeed = R(t.size.animation.speed) * n);
    const r = o.maxDistance;
    (r.horizontal = s.horizontal !== void 0 ? s.horizontal * n : void 0),
      (r.vertical = s.vertical !== void 0 ? s.vertical * n : void 0),
      (o.maxSpeed = R(t.move.gravity.maxSpeed) * n);
  }
}
function ee(i) {
  return i && !i.destroyed;
}
function lt(i, e, ...t) {
  const n = new p2(i, e);
  return os(n, ...t), n;
}
const b2 = "default",
  Qi = {
    generate: (i) => {
      const e = i.velocity.copy();
      return (e.angle += (e.length * Math.PI) / 180), e;
    },
    init: () => {},
    update: () => {},
  };
class _2 {
  constructor(e, t, n) {
    (this.id = t),
      (this._engine = e),
      (this.fpsLimit = 120),
      (this.smooth = !1),
      (this._delay = 0),
      (this.duration = 0),
      (this.lifeTime = 0),
      (this._firstStart = !0),
      (this.started = !1),
      (this.destroyed = !1),
      (this._paused = !0),
      (this.lastFrameTime = 0),
      (this.zLayers = 100),
      (this.pageHidden = !1),
      (this._sourceOptions = n),
      (this._initialSourceOptions = n),
      (this.retina = new C2(this)),
      (this.canvas = new T0(this)),
      (this.particles = new y2(this._engine, this)),
      (this.frameManager = new D0(this)),
      (this.pathGenerators = new Map()),
      (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
      (this.plugins = new Map()),
      (this.drawers = new Map()),
      (this._options = lt(this._engine, this)),
      (this.actualOptions = lt(this._engine, this)),
      (this._eventListeners = new B0(this)),
      typeof IntersectionObserver < "u" &&
        IntersectionObserver &&
        (this._intersectionObserver = new IntersectionObserver((s) =>
          this._intersectionManager(s)
        )),
      this._engine.dispatchEvent("containerBuilt", { container: this });
  }
  get options() {
    return this._options;
  }
  get sourceOptions() {
    return this._sourceOptions;
  }
  addClickHandler(e) {
    if (!ee(this)) return;
    const t = this.interactivity.element;
    if (!t) return;
    const n = (d, f, p) => {
        if (!ee(this)) return;
        const h = this.retina.pixelRatio,
          g = { x: f.x * h, y: f.y * h },
          y = this.particles.quadTree.queryCircle(g, p * h);
        e(d, y);
      },
      s = (d) => {
        if (!ee(this)) return;
        const f = d,
          p = { x: f.offsetX || f.clientX, y: f.offsetY || f.clientY };
        n(d, p, 1);
      },
      o = () => {
        !ee(this) || ((u = !0), (c = !1));
      },
      r = () => {
        !ee(this) || (c = !0);
      },
      a = (d) => {
        if (!!ee(this)) {
          if (u && !c) {
            const f = d;
            let p = f.touches[f.touches.length - 1];
            if (!p && ((p = f.changedTouches[f.changedTouches.length - 1]), !p))
              return;
            const h = this.canvas.element,
              g = h ? h.getBoundingClientRect() : void 0,
              y = {
                x: p.clientX - (g ? g.left : 0),
                y: p.clientY - (g ? g.top : 0),
              };
            n(d, y, Math.max(p.radiusX, p.radiusY));
          }
          (u = !1), (c = !1);
        }
      },
      l = () => {
        !ee(this) || ((u = !1), (c = !1));
      };
    let u = !1,
      c = !1;
    t.addEventListener("click", s),
      t.addEventListener("touchstart", o),
      t.addEventListener("touchmove", r),
      t.addEventListener("touchend", a),
      t.addEventListener("touchcancel", l);
  }
  addPath(e, t, n = !1) {
    return !ee(this) || (!n && this.pathGenerators.has(e))
      ? !1
      : (this.pathGenerators.set(e, t != null ? t : Qi), !0);
  }
  destroy() {
    if (!ee(this)) return;
    this.stop(), this.particles.destroy(), this.canvas.destroy();
    for (const [, n] of this.drawers) n.destroy && n.destroy(this);
    for (const n of this.drawers.keys()) this.drawers.delete(n);
    this._engine.plugins.destroy(this), (this.destroyed = !0);
    const e = this._engine.dom(),
      t = e.findIndex((n) => n === this);
    t >= 0 && e.splice(t, 1),
      this._engine.dispatchEvent("containerDestroyed", { container: this });
  }
  draw(e) {
    if (!ee(this)) return;
    let t = e;
    this._drawAnimationFrame = t0()(async (n) => {
      t && ((this.lastFrameTime = void 0), (t = !1)),
        await this.frameManager.nextFrame(n);
    });
  }
  exportConfiguration() {
    return JSON.stringify(
      this.actualOptions,
      (e, t) => {
        if (!(e === "_engine" || e === "_container")) return t;
      },
      2
    );
  }
  exportImage(e, t, n) {
    const s = this.canvas.element;
    s && s.toBlob(e, t != null ? t : "image/png", n);
  }
  exportImg(e) {
    this.exportImage(e);
  }
  getAnimationStatus() {
    return !this._paused && !this.pageHidden && ee(this);
  }
  handleClickMode(e) {
    if (!!ee(this)) {
      this.particles.handleClickMode(e);
      for (const [, t] of this.plugins)
        t.handleClickMode && t.handleClickMode(e);
    }
  }
  async init() {
    if (!ee(this)) return;
    const e = this._engine.plugins.getSupportedShapes();
    for (const n of e) {
      const s = this._engine.plugins.getShapeDrawer(n);
      s && this.drawers.set(n, s);
    }
    (this._options = lt(
      this._engine,
      this,
      this._initialSourceOptions,
      this.sourceOptions
    )),
      (this.actualOptions = lt(this._engine, this, this._options));
    const t = this._engine.plugins.getAvailablePlugins(this);
    for (const [n, s] of t) this.plugins.set(n, s);
    this.retina.init(),
      this.canvas.init(),
      this.updateActualOptions(),
      this.canvas.initBackground(),
      this.canvas.resize(),
      (this.zLayers = this.actualOptions.zLayers),
      (this.duration = R(this.actualOptions.duration) * 1e3),
      (this._delay = R(this.actualOptions.delay) * 1e3),
      (this.lifeTime = 0),
      (this.fpsLimit =
        this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120),
      (this.smooth = this.actualOptions.smooth);
    for (const [, n] of this.drawers) n.init && (await n.init(this));
    for (const [, n] of this.plugins) n.init && (await n.init());
    this._engine.dispatchEvent("containerInit", { container: this }),
      this.particles.init(),
      this.particles.setDensity();
    for (const [, n] of this.plugins) n.particlesSetup && n.particlesSetup();
    this._engine.dispatchEvent("particlesSetup", { container: this });
  }
  async loadTheme(e) {
    !ee(this) || ((this._currentTheme = e), await this.refresh());
  }
  pause() {
    if (
      !!ee(this) &&
      (this._drawAnimationFrame !== void 0 &&
        (i0()(this._drawAnimationFrame), delete this._drawAnimationFrame),
      !this._paused)
    ) {
      for (const [, e] of this.plugins) e.pause && e.pause();
      this.pageHidden || (this._paused = !0),
        this._engine.dispatchEvent("containerPaused", { container: this });
    }
  }
  play(e) {
    if (!ee(this)) return;
    const t = this._paused || e;
    if (this._firstStart && !this.actualOptions.autoPlay) {
      this._firstStart = !1;
      return;
    }
    if ((this._paused && (this._paused = !1), t))
      for (const [, n] of this.plugins) n.play && n.play();
    this._engine.dispatchEvent("containerPlay", { container: this }),
      this.draw(t || !1);
  }
  async refresh() {
    if (!!ee(this)) return this.stop(), this.start();
  }
  async reset() {
    if (!!ee(this))
      return (this._options = lt(this._engine, this)), this.refresh();
  }
  setNoise(e, t, n) {
    !ee(this) || this.setPath(e, t, n);
  }
  setPath(e, t, n) {
    if (!e || !ee(this)) return;
    const s = Object.assign({}, Qi);
    if (typeof e == "function")
      (s.generate = e), t && (s.init = t), n && (s.update = n);
    else {
      const o = s;
      (s.generate = e.generate || o.generate),
        (s.init = e.init || o.init),
        (s.update = e.update || o.update);
    }
    this.addPath(b2, s, !0);
  }
  async start() {
    !ee(this) ||
      this.started ||
      (await this.init(),
      (this.started = !0),
      await new Promise((e) => {
        this._delayTimeout = setTimeout(async () => {
          this._eventListeners.addListeners(),
            this.interactivity.element instanceof HTMLElement &&
              this._intersectionObserver &&
              this._intersectionObserver.observe(this.interactivity.element);
          for (const [, t] of this.plugins) t.start && (await t.start());
          this._engine.dispatchEvent("containerStarted", { container: this }),
            this.play(),
            e();
        }, this._delay);
      }));
  }
  stop() {
    if (!(!ee(this) || !this.started)) {
      this._delayTimeout &&
        (clearTimeout(this._delayTimeout), delete this._delayTimeout),
        (this._firstStart = !0),
        (this.started = !1),
        this._eventListeners.removeListeners(),
        this.pause(),
        this.particles.clear(),
        this.canvas.clear(),
        this.interactivity.element instanceof HTMLElement &&
          this._intersectionObserver &&
          this._intersectionObserver.unobserve(this.interactivity.element);
      for (const [, e] of this.plugins) e.stop && e.stop();
      for (const e of this.plugins.keys()) this.plugins.delete(e);
      (this._sourceOptions = this._options),
        this._engine.dispatchEvent("containerStopped", { container: this });
    }
  }
  updateActualOptions() {
    this.actualOptions.responsive = [];
    const e = this.actualOptions.setResponsive(
      this.canvas.size.width,
      this.retina.pixelRatio,
      this._options
    );
    return (
      this.actualOptions.setTheme(this._currentTheme),
      this.responsiveMaxWidth === e ? !1 : ((this.responsiveMaxWidth = e), !0)
    );
  }
  _intersectionManager(e) {
    if (!(!ee(this) || !this.actualOptions.pauseOnOutsideViewport))
      for (const t of e)
        t.target === this.interactivity.element &&
          (t.isIntersecting ? this.play : this.pause)();
  }
}
function w2(i) {
  console.error(`tsParticles - Error ${i} while retrieving config file`);
}
async function E2(i, e) {
  const t = xe(i, e);
  if (!t) return;
  const n = await fetch(t);
  if (n.ok) return n.json();
  w2(n.status);
}
class x2 {
  constructor(e) {
    this._engine = e;
  }
  load(e, t, n) {
    const s = { index: n, remote: !1 };
    return (
      typeof e == "string" ? (s.tagId = e) : (s.options = e),
      typeof t == "number"
        ? (s.index = t)
        : (s.options = t != null ? t : s.options),
      this.loadOptions(s)
    );
  }
  async loadJSON(e, t, n) {
    let s, o;
    return (
      typeof t == "number" || t === void 0 ? (s = e) : ((o = e), (s = t)),
      this.loadRemoteOptions({ tagId: o, url: s, index: n, remote: !0 })
    );
  }
  async loadOptions(e) {
    var t, n, s;
    const o =
        (t = e.tagId) !== null && t !== void 0
          ? t
          : `tsparticles${Math.floor(j() * 1e4)}`,
      { index: r, url: a, remote: l } = e,
      u = l ? await E2(a, r) : e.options;
    let c =
      (n = e.element) !== null && n !== void 0 ? n : document.getElementById(o);
    c ||
      ((c = document.createElement("div")),
      (c.id = o),
      (s = document.querySelector("body")) === null ||
        s === void 0 ||
        s.append(c));
    const d = xe(u, r),
      f = this._engine.dom(),
      p = f.findIndex((y) => y.id === o);
    if (p >= 0) {
      const y = this._engine.domItem(p);
      y && !y.destroyed && (y.destroy(), f.splice(p, 1));
    }
    let h;
    if (c.tagName.toLowerCase() === "canvas")
      (h = c), (h.dataset[ct] = "false");
    else {
      const y = c.getElementsByTagName("canvas");
      y.length
        ? ((h = y[0]), (h.dataset[ct] = "false"))
        : ((h = document.createElement("canvas")),
          (h.dataset[ct] = "true"),
          c.appendChild(h));
    }
    h.style.width || (h.style.width = "100%"),
      h.style.height || (h.style.height = "100%");
    const g = new _2(this._engine, o, d);
    return (
      p >= 0 ? f.splice(p, 0, g) : f.push(g),
      g.canvas.loadCanvas(h),
      await g.start(),
      g
    );
  }
  async loadRemoteOptions(e) {
    return this.loadOptions(e);
  }
  async set(e, t, n, s) {
    const o = { index: s, remote: !1 };
    return (
      typeof e == "string" ? (o.tagId = e) : (o.element = e),
      t instanceof HTMLElement ? (o.element = t) : (o.options = t),
      typeof n == "number"
        ? (o.index = n)
        : (o.options = n != null ? n : o.options),
      this.loadOptions(o)
    );
  }
  async setJSON(e, t, n, s) {
    let o, r, a, l;
    return (
      e instanceof HTMLElement
        ? ((l = e), (o = t), (a = n))
        : ((r = e), (l = t), (o = n), (a = s)),
      this.loadRemoteOptions({
        tagId: r,
        url: o,
        index: a,
        element: l,
        remote: !0,
      })
    );
  }
}
function Kt(i, e, t, n = !1) {
  let s = e.get(i);
  return (!s || n) && ((s = [...t.values()].map((o) => o(i))), e.set(i, s)), s;
}
class F2 {
  constructor(e) {
    (this._engine = e),
      (this.plugins = []),
      (this._initializers = {
        interactors: new Map(),
        movers: new Map(),
        updaters: new Map(),
      }),
      (this.interactors = new Map()),
      (this.movers = new Map()),
      (this.updaters = new Map()),
      (this.presets = new Map()),
      (this.drawers = new Map()),
      (this.pathGenerators = new Map());
  }
  addInteractor(e, t) {
    this._initializers.interactors.set(e, t);
  }
  addParticleMover(e, t) {
    this._initializers.movers.set(e, t);
  }
  addParticleUpdater(e, t) {
    this._initializers.updaters.set(e, t);
  }
  addPathGenerator(e, t) {
    this.getPathGenerator(e) || this.pathGenerators.set(e, t);
  }
  addPlugin(e) {
    this.getPlugin(e.id) || this.plugins.push(e);
  }
  addPreset(e, t, n = !1) {
    (n || !this.getPreset(e)) && this.presets.set(e, t);
  }
  addShapeDrawer(e, t) {
    this.getShapeDrawer(e) || this.drawers.set(e, t);
  }
  destroy(e) {
    this.updaters.delete(e), this.movers.delete(e), this.interactors.delete(e);
  }
  getAvailablePlugins(e) {
    const t = new Map();
    for (const n of this.plugins)
      !n.needsPlugin(e.actualOptions) || t.set(n.id, n.getPlugin(e));
    return t;
  }
  getInteractors(e, t = !1) {
    return Kt(e, this.interactors, this._initializers.interactors, t);
  }
  getMovers(e, t = !1) {
    return Kt(e, this.movers, this._initializers.movers, t);
  }
  getPathGenerator(e) {
    return this.pathGenerators.get(e);
  }
  getPlugin(e) {
    return this.plugins.find((t) => t.id === e);
  }
  getPreset(e) {
    return this.presets.get(e);
  }
  getShapeDrawer(e) {
    return this.drawers.get(e);
  }
  getSupportedShapes() {
    return this.drawers.keys();
  }
  getUpdaters(e, t = !1) {
    return Kt(e, this.updaters, this._initializers.updaters, t);
  }
  loadOptions(e, t) {
    for (const n of this.plugins) n.loadOptions(e, t);
  }
  loadParticlesOptions(e, t, ...n) {
    const s = this.updaters.get(e);
    if (!!s) for (const o of s) o.loadOptions && o.loadOptions(t, ...n);
  }
}
class S2 {
  constructor() {
    (this._domArray = []),
      (this._eventDispatcher = new Gd()),
      (this._initialized = !1),
      (this._loader = new x2(this)),
      (this.plugins = new F2(this));
  }
  addEventListener(e, t) {
    this._eventDispatcher.addEventListener(e, t);
  }
  async addInteractor(e, t) {
    this.plugins.addInteractor(e, t), await this.refresh();
  }
  async addMover(e, t) {
    this.plugins.addParticleMover(e, t), await this.refresh();
  }
  async addParticleUpdater(e, t) {
    this.plugins.addParticleUpdater(e, t), await this.refresh();
  }
  async addPathGenerator(e, t) {
    this.plugins.addPathGenerator(e, t), await this.refresh();
  }
  async addPlugin(e) {
    this.plugins.addPlugin(e), await this.refresh();
  }
  async addPreset(e, t, n = !1) {
    this.plugins.addPreset(e, t, n), await this.refresh();
  }
  async addShape(e, t, n, s, o) {
    let r;
    typeof t == "function"
      ? (r = { afterEffect: s, destroy: o, draw: t, init: n })
      : (r = t),
      this.plugins.addShapeDrawer(e, r),
      await this.refresh();
  }
  dispatchEvent(e, t) {
    this._eventDispatcher.dispatchEvent(e, t);
  }
  dom() {
    return this._domArray;
  }
  domItem(e) {
    const t = this.dom(),
      n = t[e];
    if (n && !n.destroyed) return n;
    t.splice(e, 1);
  }
  init() {
    this._initialized || (this._initialized = !0);
  }
  async load(e, t) {
    return this._loader.load(e, t);
  }
  async loadFromArray(e, t, n) {
    return this._loader.load(e, t, n);
  }
  async loadJSON(e, t, n) {
    return this._loader.loadJSON(e, t, n);
  }
  async refresh() {
    for (const e of this.dom()) await e.refresh();
  }
  removeEventListener(e, t) {
    this._eventDispatcher.removeEventListener(e, t);
  }
  async set(e, t, n) {
    return this._loader.set(e, t, n);
  }
  async setJSON(e, t, n, s) {
    return this._loader.setJSON(e, t, n, s);
  }
  setOnClickHandler(e) {
    const t = this.dom();
    if (!t.length)
      throw new Error(
        "Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()"
      );
    for (const n of t) n.addClickHandler(e);
  }
}
class T2 {
  constructor() {
    (this.key = "hsl"), (this.stringPrefix = "hsl");
  }
  handleColor(e) {
    var t;
    const n = e.value,
      s = (t = n.hsl) !== null && t !== void 0 ? t : e.value;
    if (s.h !== void 0 && s.l !== void 0) return it(s);
  }
  handleRangeColor(e) {
    var t;
    const n = e.value,
      s = (t = n.hsl) !== null && t !== void 0 ? t : e.value;
    if (s.h !== void 0 && s.l !== void 0)
      return it({ h: R(s.h), l: R(s.l), s: R(s.s) });
  }
  parseString(e) {
    if (!e.startsWith("hsl")) return;
    const t =
        /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,
      n = t.exec(e);
    return n
      ? u0({
          a: n.length > 4 ? qn(n[5]) : 1,
          h: parseInt(n[1], 10),
          l: parseInt(n[3], 10),
          s: parseInt(n[2], 10),
        })
      : void 0;
  }
}
class B2 {
  constructor() {
    (this.key = "rgb"), (this.stringPrefix = "rgb");
  }
  handleColor(e) {
    var t;
    const n = e.value,
      s = (t = n.rgb) !== null && t !== void 0 ? t : e.value;
    if (s.r !== void 0) return s;
  }
  handleRangeColor(e) {
    var t;
    const n = e.value,
      s = (t = n.rgb) !== null && t !== void 0 ? t : e.value;
    if (s.r !== void 0) return { r: R(s.r), g: R(s.g), b: R(s.b) };
  }
  parseString(e) {
    if (!e.startsWith(this.stringPrefix)) return;
    const t =
        /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,
      n = t.exec(e);
    return n
      ? {
          a: n.length > 4 ? qn(n[5]) : 1,
          b: parseInt(n[3], 10),
          g: parseInt(n[2], 10),
          r: parseInt(n[1], 10),
        }
      : void 0;
  }
}
class Ae {
  constructor(e) {
    (this.container = e), (this.type = 0);
  }
}
class _i {
  constructor(e) {
    (this.container = e), (this.type = 1);
  }
}
const k2 = new B2(),
  D2 = new T2();
Zn(k2);
Zn(D2);
const A2 = new S2();
A2.init();
class M2 {
  constructor() {
    (this.radius = 0), (this.mass = 0);
  }
  load(e) {
    !e ||
      (e.mass !== void 0 && (this.mass = e.mass),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class P2 extends Se {
  constructor() {
    super(), (this.density = 5), (this.value = 50), (this.limit = new M2());
  }
  load(e) {
    !e ||
      (super.load(e),
      e.density !== void 0 && (this.density = e.density),
      typeof e.limit == "number"
        ? (this.limit.radius = e.limit)
        : this.limit.load(e.limit));
  }
}
class St {
  constructor() {
    (this.color = new ie()),
      (this.color.value = "#000000"),
      (this.draggable = !1),
      (this.opacity = 1),
      (this.destroy = !0),
      (this.orbits = !1),
      (this.size = new P2());
  }
  load(e) {
    e !== void 0 &&
      (e.color !== void 0 && (this.color = ie.create(this.color, e.color)),
      e.draggable !== void 0 && (this.draggable = e.draggable),
      (this.name = e.name),
      e.opacity !== void 0 && (this.opacity = e.opacity),
      e.position !== void 0 &&
        ((this.position = {}),
        e.position.x !== void 0 && (this.position.x = H(e.position.x)),
        e.position.y !== void 0 && (this.position.y = H(e.position.y))),
      e.size !== void 0 && this.size.load(e.size),
      e.destroy !== void 0 && (this.destroy = e.destroy),
      e.orbits !== void 0 && (this.orbits = e.orbits));
  }
}
class O2 {
  constructor(e, t, n, s) {
    var o, r, a;
    (this.absorbers = e),
      (this.container = t),
      (this.initialPosition = s ? Z.create(s.x, s.y) : void 0),
      n instanceof St
        ? (this.options = n)
        : ((this.options = new St()), this.options.load(n)),
      (this.dragging = !1),
      (this.name = this.options.name),
      (this.opacity = this.options.opacity),
      (this.size = R(this.options.size.value) * t.retina.pixelRatio),
      (this.mass =
        this.size * this.options.size.density * t.retina.reduceFactor);
    const l = this.options.size.limit;
    (this.limit = {
      radius: l.radius * t.retina.pixelRatio * t.retina.reduceFactor,
      mass: l.mass,
    }),
      (this.color =
        (o = Fe(this.options.color)) !== null && o !== void 0
          ? o
          : { b: 0, g: 0, r: 0 }),
      (this.position =
        (a =
          (r = this.initialPosition) === null || r === void 0
            ? void 0
            : r.copy()) !== null && a !== void 0
          ? a
          : this.calcPosition());
  }
  attract(e) {
    const t = this.container,
      n = this.options;
    if (n.draggable) {
      const u = t.interactivity.mouse;
      u.clicking && u.downPosition
        ? oe(this.position, u.downPosition) <= this.size && (this.dragging = !0)
        : (this.dragging = !1),
        this.dragging &&
          u.position &&
          ((this.position.x = u.position.x), (this.position.y = u.position.y));
    }
    const s = e.getPosition(),
      { dx: o, dy: r, distance: a } = fe(this.position, s),
      l = Z.create(o, r);
    if (
      ((l.length = (this.mass / Math.pow(a, 2)) * t.retina.reduceFactor),
      a < this.size + e.getRadius())
    ) {
      const u = e.getRadius() * 0.033 * t.retina.pixelRatio;
      (this.size > e.getRadius() && a < this.size - e.getRadius()) ||
      (e.absorberOrbit !== void 0 && e.absorberOrbit.length < 0)
        ? n.destroy
          ? e.destroy()
          : ((e.needsNewPosition = !0), this.updateParticlePosition(e, l))
        : (n.destroy && (e.size.value -= u), this.updateParticlePosition(e, l)),
        (this.limit.radius <= 0 || this.size < this.limit.radius) &&
          (this.size += u),
        (this.limit.mass <= 0 || this.mass < this.limit.mass) &&
          (this.mass += u * this.options.size.density * t.retina.reduceFactor);
    } else this.updateParticlePosition(e, l);
  }
  draw(e) {
    e.translate(this.position.x, this.position.y),
      e.beginPath(),
      e.arc(0, 0, this.size, 0, Math.PI * 2, !1),
      e.closePath(),
      (e.fillStyle = Ie(this.color, this.opacity)),
      e.fill();
  }
  resize() {
    const e = this.initialPosition;
    this.position =
      e && mt(e, this.container.canvas.size, Z.origin)
        ? e
        : this.calcPosition();
  }
  calcPosition() {
    const e = jn({
      size: this.container.canvas.size,
      position: this.options.position,
    });
    return Z.create(e.x, e.y);
  }
  updateParticlePosition(e, t) {
    var n;
    if (e.destroyed) return;
    const s = this.container,
      o = s.canvas.size;
    if (e.needsNewPosition) {
      const r = Vn({ size: o });
      e.position.setTo(r),
        e.velocity.setTo(e.initialVelocity),
        (e.absorberOrbit = void 0),
        (e.needsNewPosition = !1);
    }
    if (this.options.orbits) {
      if (
        (e.absorberOrbit === void 0 &&
          ((e.absorberOrbit = Z.create(0, 0)),
          (e.absorberOrbit.length = oe(e.getPosition(), this.position)),
          (e.absorberOrbit.angle = j() * Math.PI * 2)),
        e.absorberOrbit.length <= this.size && !this.options.destroy)
      ) {
        const c = Math.min(o.width, o.height);
        e.absorberOrbit.length = c * (1 + (j() * 0.2 - 0.1));
      }
      e.absorberOrbitDirection === void 0 &&
        (e.absorberOrbitDirection =
          e.velocity.x >= 0 ? "clockwise" : "counter-clockwise");
      const r = e.absorberOrbit.length,
        a = e.absorberOrbit.angle,
        l = e.absorberOrbitDirection;
      e.velocity.setTo(Z.origin);
      const u = {
        x: l === "clockwise" ? Math.cos : Math.sin,
        y: l === "clockwise" ? Math.sin : Math.cos,
      };
      (e.position.x = this.position.x + r * u.x(a)),
        (e.position.y = this.position.y + r * u.y(a)),
        (e.absorberOrbit.length -= t.length),
        (e.absorberOrbit.angle +=
          ((((n = e.retina.moveSpeed) !== null && n !== void 0 ? n : 0) *
            s.retina.pixelRatio) /
            100) *
          s.retina.reduceFactor);
    } else {
      const r = Z.origin;
      (r.length = t.length), (r.angle = t.angle), e.velocity.addTo(r);
    }
  }
}
class L2 {
  constructor(e) {
    (this.container = e),
      (this.array = []),
      (this.absorbers = []),
      (this.interactivityAbsorbers = []),
      (e.getAbsorber = (t) =>
        t === void 0 || typeof t == "number"
          ? this.array[t || 0]
          : this.array.find((n) => n.name === t)),
      (e.addAbsorber = (t, n) => this.addAbsorber(t, n));
  }
  addAbsorber(e, t) {
    const n = new O2(this, this.container, e, t);
    return this.array.push(n), n;
  }
  draw(e) {
    for (const t of this.array) t.draw(e);
  }
  handleClickMode(e) {
    const t = this.absorbers,
      n = this.interactivityAbsorbers;
    if (e === "absorber") {
      const s = xe(n),
        o = s != null ? s : xe(t),
        r = this.container.interactivity.mouse.clickPosition;
      this.addAbsorber(o, r);
    }
  }
  async init() {
    (this.absorbers = this.container.actualOptions.absorbers),
      (this.interactivityAbsorbers =
        this.container.actualOptions.interactivity.modes.absorbers),
      J(this.absorbers, (e) => {
        this.addAbsorber(e);
      });
  }
  particleUpdate(e) {
    for (const t of this.array) if ((t.attract(e), e.destroyed)) break;
  }
  removeAbsorber(e) {
    const t = this.array.indexOf(e);
    t >= 0 && this.array.splice(t, 1);
  }
  resize() {
    for (const e of this.array) e.resize();
  }
  stop() {
    this.array = [];
  }
}
class z2 {
  constructor() {
    this.id = "absorbers";
  }
  getPlugin(e) {
    return new L2(e);
  }
  loadOptions(e, t) {
    var n, s;
    (!this.needsPlugin(e) && !this.needsPlugin(t)) ||
      (t != null &&
        t.absorbers &&
        (e.absorbers = J(t.absorbers, (o) => {
          const r = new St();
          return r.load(o), r;
        })),
      (e.interactivity.modes.absorbers = J(
        (s =
          (n = t == null ? void 0 : t.interactivity) === null || n === void 0
            ? void 0
            : n.modes) === null || s === void 0
          ? void 0
          : s.absorbers,
        (o) => {
          const r = new St();
          return r.load(o), r;
        }
      )));
  }
  needsPlugin(e) {
    var t, n, s;
    if (!e) return !1;
    const o = e.absorbers;
    return o instanceof Array
      ? !!o.length
      : o
      ? !0
      : !!(
          ((s =
            (n =
              (t = e.interactivity) === null || t === void 0
                ? void 0
                : t.events) === null || n === void 0
              ? void 0
              : n.onClick) === null || s === void 0
            ? void 0
            : s.mode) && K("absorber", e.interactivity.events.onClick.mode)
        );
  }
}
async function I2(i) {
  const e = new z2();
  await i.addPlugin(e);
}
class R2 {
  load(e) {
    !e ||
      (e.bottom !== void 0 && (this.bottom = H(e.bottom)),
      e.left !== void 0 && (this.left = H(e.left)),
      e.right !== void 0 && (this.right = H(e.right)),
      e.top !== void 0 && (this.top = H(e.top)));
  }
}
class $2 extends Se {
  constructor() {
    super(), (this.value = 3);
  }
}
class N2 extends Se {
  constructor() {
    super(), (this.value = { min: 4, max: 9 });
  }
}
class H2 {
  constructor() {
    (this.count = 1),
      (this.factor = new $2()),
      (this.rate = new N2()),
      (this.sizeOffset = !0);
  }
  load(e) {
    !e ||
      (e.count !== void 0 && (this.count = e.count),
      this.factor.load(e.factor),
      this.rate.load(e.rate),
      (this.particles = J(e.particles, (t) => ne({}, t))),
      e.sizeOffset !== void 0 && (this.sizeOffset = e.sizeOffset));
  }
}
class V2 {
  constructor() {
    (this.bounds = new R2()), (this.mode = "none"), (this.split = new H2());
  }
  load(e) {
    !e ||
      (e.mode && (this.mode = e.mode),
      e.bounds && this.bounds.load(e.bounds),
      this.split.load(e.split));
  }
}
class j2 {
  constructor(e, t) {
    (this.engine = e), (this.container = t);
  }
  init(e) {
    const t = this.container,
      n = e.options,
      s = n.destroy;
    if (!s) return;
    e.splitCount = 0;
    const o = s.bounds;
    e.destroyBounds || (e.destroyBounds = {}),
      o.bottom &&
        (e.destroyBounds.bottom = (R(o.bottom) * t.canvas.size.height) / 100),
      o.left &&
        (e.destroyBounds.left = (R(o.left) * t.canvas.size.width) / 100),
      o.right &&
        (e.destroyBounds.right = (R(o.right) * t.canvas.size.width) / 100),
      o.top && (e.destroyBounds.top = (R(o.top) * t.canvas.size.height) / 100);
  }
  isEnabled(e) {
    return !e.destroyed;
  }
  loadOptions(e, ...t) {
    e.destroy || (e.destroy = new V2());
    for (const n of t) e.destroy.load(n == null ? void 0 : n.destroy);
  }
  particleDestroyed(e, t) {
    if (t) return;
    const n = e.options.destroy;
    n && n.mode === "split" && this.split(e);
  }
  update(e) {
    if (!this.isEnabled(e)) return;
    const t = e.getPosition(),
      n = e.destroyBounds;
    !n ||
      (((n.bottom !== void 0 && t.y >= n.bottom) ||
        (n.left !== void 0 && t.x <= n.left) ||
        (n.right !== void 0 && t.x >= n.right) ||
        (n.top !== void 0 && t.y <= n.top)) &&
        e.destroy());
  }
  addSplitParticle(e, t) {
    const n = e.options.destroy;
    if (!n) return;
    const s = n.split,
      o = bi(this.engine, this.container, e.options),
      r = Ne(s.factor);
    o.color.load({ value: { hsl: e.getFillColor() } }),
      o.move.load({
        center: { x: e.position.x, y: e.position.y, mode: "precise" },
      }),
      typeof o.size.value == "number"
        ? (o.size.value /= r)
        : ((o.size.value.min /= r), (o.size.value.max /= r)),
      o.load(t);
    const a = s.sizeOffset ? H(-e.size.value, e.size.value) : 0,
      l = { x: e.position.x + se(a), y: e.position.y + se(a) };
    return this.container.particles.addParticle(l, o, e.group, (u) => {
      var c;
      return u.size.value < 0.5
        ? !1
        : ((u.velocity.length = se(H(e.velocity.length, u.velocity.length))),
          (u.splitCount =
            ((c = e.splitCount) !== null && c !== void 0 ? c : 0) + 1),
          (u.unbreakable = !0),
          setTimeout(() => {
            u.unbreakable = !1;
          }, 500),
          !0);
    });
  }
  split(e) {
    const t = e.options.destroy;
    if (!t) return;
    const n = t.split;
    if (n.count >= 0 && (e.splitCount === void 0 || e.splitCount++ > n.count))
      return;
    const s = Ne(n.rate),
      o = xe(n.particles);
    for (let r = 0; r < s; r++) this.addSplitParticle(e, o);
  }
}
async function q2(i) {
  await i.addParticleUpdater("destroy", (e) => new j2(i, e));
}
class U2 {
  randomPosition(e, t, n) {
    const s = (d, f) => {
        const p = j() / 4,
          h = Math.atan((f / d) * Math.tan(2 * Math.PI * p)),
          g = j();
        return g < 0.25
          ? h
          : g < 0.5
          ? Math.PI - h
          : g < 0.75
          ? Math.PI + h
          : -h;
      },
      o = (d, f, p) =>
        (d * f) / Math.sqrt((f * Math.cos(p)) ** 2 + (d * Math.sin(p)) ** 2),
      [r, a] = [t.width / 2, t.height / 2],
      l = s(r, a),
      u = o(r, a, l),
      c = n ? u * Math.sqrt(j()) : u;
    return { x: e.x + c * Math.cos(l), y: e.y + c * Math.sin(l) };
  }
}
class G2 {
  constructor() {
    this.wait = !1;
  }
  load(e) {
    e !== void 0 &&
      (e.count !== void 0 && (this.count = e.count),
      e.delay !== void 0 && (this.delay = e.delay),
      e.duration !== void 0 && (this.duration = e.duration),
      e.wait !== void 0 && (this.wait = e.wait));
  }
}
class W2 {
  constructor() {
    (this.quantity = 1), (this.delay = 0.1);
  }
  load(e) {
    e !== void 0 &&
      (e.quantity !== void 0 && (this.quantity = H(e.quantity)),
      e.delay !== void 0 && (this.delay = H(e.delay)));
  }
}
class as {
  constructor() {
    (this.mode = "percent"), (this.height = 0), (this.width = 0);
  }
  load(e) {
    e !== void 0 &&
      (e.mode !== void 0 && (this.mode = e.mode),
      e.height !== void 0 && (this.height = e.height),
      e.width !== void 0 && (this.width = e.width));
  }
}
class He {
  constructor() {
    (this.autoPlay = !0),
      (this.fill = !0),
      (this.life = new G2()),
      (this.rate = new W2()),
      (this.shape = "square"),
      (this.startCount = 0);
  }
  load(e) {
    e !== void 0 &&
      (e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
      e.size !== void 0 &&
        (this.size === void 0 && (this.size = new as()),
        this.size.load(e.size)),
      e.direction !== void 0 && (this.direction = e.direction),
      (this.domId = e.domId),
      e.fill !== void 0 && (this.fill = e.fill),
      this.life.load(e.life),
      (this.name = e.name),
      (this.particles = J(e.particles, (t) => ne({}, t))),
      this.rate.load(e.rate),
      e.shape !== void 0 && (this.shape = e.shape),
      e.position !== void 0 &&
        ((this.position = {}),
        e.position.x !== void 0 && (this.position.x = H(e.position.x)),
        e.position.y !== void 0 && (this.position.y = H(e.position.y))),
      e.spawnColor !== void 0 &&
        (this.spawnColor === void 0 && (this.spawnColor = new st()),
        this.spawnColor.load(e.spawnColor)),
      e.startCount !== void 0 && (this.startCount = e.startCount));
  }
}
class X2 {
  constructor(e, t, n, s, o) {
    var r, a, l, u, c, d, f, p;
    (this.emitters = t),
      (this.container = n),
      (this._engine = e),
      (this._currentDuration = 0),
      (this._currentEmitDelay = 0),
      (this._currentSpawnDelay = 0),
      (this._initialPosition = o),
      s instanceof He
        ? (this.options = s)
        : ((this.options = new He()), this.options.load(s)),
      (this._spawnDelay =
        (((r = this.options.life.delay) !== null && r !== void 0 ? r : 0) *
          1e3) /
        this.container.retina.reduceFactor),
      (this.position =
        (a = this._initialPosition) !== null && a !== void 0
          ? a
          : this.calcPosition()),
      (this.name = this.options.name),
      (this._shape =
        (l = this._engine.emitterShapeManager) === null || l === void 0
          ? void 0
          : l.getShape(this.options.shape)),
      (this.fill = this.options.fill),
      (this._firstSpawn = !this.options.life.wait),
      (this._startParticlesAdded = !1);
    let h = ne({}, this.options.particles);
    h != null || (h = {}),
      ((u = h.move) !== null && u !== void 0) || (h.move = {}),
      ((c = (p = h.move).direction) !== null && c !== void 0) ||
        (p.direction = this.options.direction),
      this.options.spawnColor &&
        (this.spawnColor = qe(this.options.spawnColor)),
      (this._paused = !this.options.autoPlay),
      (this._particlesOptions = h),
      (this.size =
        (d = this.options.size) !== null && d !== void 0
          ? d
          : (() => {
              const g = new as();
              return g.load({ height: 0, mode: "percent", width: 0 }), g;
            })()),
      (this._lifeCount =
        (f = this.options.life.count) !== null && f !== void 0 ? f : -1),
      (this._immortal = this._lifeCount <= 0),
      this._engine.dispatchEvent("emitterCreated", {
        container: n,
        data: { emitter: this },
      }),
      this.play();
  }
  externalPause() {
    (this._paused = !0), this.pause();
  }
  externalPlay() {
    (this._paused = !1), this.play();
  }
  getPosition() {
    if (this.options.domId) {
      const e = this.container,
        t = document.getElementById(this.options.domId);
      if (t) {
        const n = t.getBoundingClientRect();
        return {
          x: (n.x + n.width / 2) * e.retina.pixelRatio,
          y: (n.y + n.height / 2) * e.retina.pixelRatio,
        };
      }
    }
    return this.position;
  }
  getSize() {
    const e = this.container;
    if (this.options.domId) {
      const t = document.getElementById(this.options.domId);
      if (t) {
        const n = t.getBoundingClientRect();
        return {
          width: n.width * e.retina.pixelRatio,
          height: n.height * e.retina.pixelRatio,
        };
      }
    }
    return {
      width:
        this.size.mode === "percent"
          ? (e.canvas.size.width * this.size.width) / 100
          : this.size.width,
      height:
        this.size.mode === "percent"
          ? (e.canvas.size.height * this.size.height) / 100
          : this.size.height,
    };
  }
  pause() {
    this._paused || delete this._emitDelay;
  }
  play() {
    var e;
    if (
      !this._paused &&
      !!(
        this.container.retina.reduceFactor &&
        (this._lifeCount > 0 || this._immortal || !this.options.life.count) &&
        (this._firstSpawn ||
          this._currentSpawnDelay >=
            ((e = this._spawnDelay) !== null && e !== void 0 ? e : 0))
      )
    ) {
      if (this._emitDelay === void 0) {
        const t = R(this.options.rate.delay);
        this._emitDelay = (1e3 * t) / this.container.retina.reduceFactor;
      }
      (this._lifeCount > 0 || this._immortal) && this.prepareToDie();
    }
  }
  resize() {
    const e = this._initialPosition;
    this.position =
      e && mt(e, this.container.canvas.size, Z.origin)
        ? e
        : this.calcPosition();
  }
  update(e) {
    var t, n, s;
    this._paused ||
      (this._firstSpawn &&
        ((this._firstSpawn = !1),
        (this._currentSpawnDelay =
          (t = this._spawnDelay) !== null && t !== void 0 ? t : 0),
        (this._currentEmitDelay =
          (n = this._emitDelay) !== null && n !== void 0 ? n : 0)),
      this._startParticlesAdded ||
        ((this._startParticlesAdded = !0),
        this.emitParticles(this.options.startCount)),
      this._duration !== void 0 &&
        ((this._currentDuration += e.value),
        this._currentDuration >= this._duration &&
          (this.pause(),
          this._spawnDelay !== void 0 && delete this._spawnDelay,
          this._immortal || this._lifeCount--,
          this._lifeCount > 0 || this._immortal
            ? ((this.position = this.calcPosition()),
              (this._spawnDelay =
                (((s = this.options.life.delay) !== null && s !== void 0
                  ? s
                  : 0) *
                  1e3) /
                this.container.retina.reduceFactor))
            : this.destroy(),
          (this._currentDuration -= this._duration),
          delete this._duration)),
      this._spawnDelay !== void 0 &&
        ((this._currentSpawnDelay += e.value),
        this._currentSpawnDelay >= this._spawnDelay &&
          (this._engine.dispatchEvent("emitterPlay", {
            container: this.container,
          }),
          this.play(),
          (this._currentSpawnDelay -= this._currentSpawnDelay),
          delete this._spawnDelay)),
      this._emitDelay !== void 0 &&
        ((this._currentEmitDelay += e.value),
        this._currentEmitDelay >= this._emitDelay &&
          (this.emit(), (this._currentEmitDelay -= this._emitDelay))));
  }
  calcPosition() {
    return jn({
      size: this.container.canvas.size,
      position: this.options.position,
    });
  }
  destroy() {
    this.emitters.removeEmitter(this),
      this._engine.dispatchEvent("emitterDestroyed", {
        container: this.container,
        data: { emitter: this },
      });
  }
  emit() {
    if (this._paused) return;
    const e = R(this.options.rate.quantity);
    this.emitParticles(e);
  }
  emitParticles(e) {
    var t, n, s;
    const o = this.getPosition(),
      r = this.getSize(),
      a = xe(this._particlesOptions);
    for (let l = 0; l < e; l++) {
      const u = ne({}, a);
      if (this.spawnColor) {
        const d =
          (t = this.options.spawnColor) === null || t === void 0
            ? void 0
            : t.animation;
        d &&
          ((this.spawnColor.h = this.setColorAnimation(
            d.h,
            this.spawnColor.h,
            360
          )),
          (this.spawnColor.s = this.setColorAnimation(
            d.s,
            this.spawnColor.s,
            100
          )),
          (this.spawnColor.l = this.setColorAnimation(
            d.l,
            this.spawnColor.l,
            100
          ))),
          u.color
            ? (u.color.value = this.spawnColor)
            : (u.color = { value: this.spawnColor });
      }
      if (!o) return;
      const c =
        (s =
          (n = this._shape) === null || n === void 0
            ? void 0
            : n.randomPosition(o, r, this.fill)) !== null && s !== void 0
          ? s
          : o;
      this.container.particles.addParticle(c, u);
    }
  }
  prepareToDie() {
    var e;
    if (this._paused) return;
    const t =
      (e = this.options.life) === null || e === void 0 ? void 0 : e.duration;
    this.container.retina.reduceFactor &&
      (this._lifeCount > 0 || this._immortal) &&
      t !== void 0 &&
      t > 0 &&
      (this._duration = t * 1e3);
  }
  setColorAnimation(e, t, n) {
    var s;
    const o = this.container;
    if (!e.enable) return t;
    const r = se(e.offset),
      a = R(this.options.rate.delay),
      l = (1e3 * a) / o.retina.reduceFactor,
      u = R((s = e.speed) !== null && s !== void 0 ? s : 0);
    return (t + (u * o.fpsLimit) / l + r * 3.6) % n;
  }
}
class Y2 {
  constructor(e, t) {
    (this.container = t),
      (this._engine = e),
      (this.array = []),
      (this.emitters = []),
      (this.interactivityEmitters = {
        random: { count: 1, enable: !1 },
        value: [],
      }),
      (t.getEmitter = (n) =>
        n === void 0 || typeof n == "number"
          ? this.array[n || 0]
          : this.array.find((s) => s.name === n)),
      (t.addEmitter = (n, s) => this.addEmitter(n, s)),
      (t.removeEmitter = (n) => {
        const s = t.getEmitter(n);
        s && this.removeEmitter(s);
      }),
      (t.playEmitter = (n) => {
        const s = t.getEmitter(n);
        s && s.externalPlay();
      }),
      (t.pauseEmitter = (n) => {
        const s = t.getEmitter(n);
        s && s.externalPause();
      });
  }
  addEmitter(e, t) {
    const n = new He();
    n.load(e);
    const s = new X2(this._engine, this, this.container, n, t);
    return this.array.push(s), s;
  }
  handleClickMode(e) {
    const t = this.emitters,
      n = this.interactivityEmitters;
    if (e === "emitter") {
      let s;
      if (n && n.value instanceof Array)
        if (n.value.length > 0 && n.random.enable) {
          s = [];
          const a = [];
          for (let l = 0; l < n.random.count; l++) {
            const u = Gn(n.value);
            if (a.includes(u) && a.length < n.value.length) {
              l--;
              continue;
            }
            a.push(u), s.push(vt(n.value, u));
          }
        } else s = n.value;
      else s = n == null ? void 0 : n.value;
      const o = s != null ? s : t,
        r = this.container.interactivity.mouse.clickPosition;
      J(o, (a) => {
        this.addEmitter(a, r);
      });
    }
  }
  async init() {
    if (
      ((this.emitters = this.container.actualOptions.emitters),
      (this.interactivityEmitters =
        this.container.actualOptions.interactivity.modes.emitters),
      this.emitters instanceof Array)
    )
      for (const e of this.emitters) this.addEmitter(e);
    else this.addEmitter(this.emitters);
  }
  pause() {
    for (const e of this.array) e.pause();
  }
  play() {
    for (const e of this.array) e.play();
  }
  removeEmitter(e) {
    const t = this.array.indexOf(e);
    t >= 0 && this.array.splice(t, 1);
  }
  resize() {
    for (const e of this.array) e.resize();
  }
  stop() {
    this.array = [];
  }
  update(e) {
    for (const t of this.array) t.update(e);
  }
}
const Jt = new Map();
class Z2 {
  constructor(e) {
    this._engine = e;
  }
  addShape(e, t) {
    this.getShape(e) || Jt.set(e, t);
  }
  getShape(e) {
    return Jt.get(e);
  }
  getSupportedShapes() {
    return Jt.keys();
  }
}
function en(i, e) {
  return i + e * (j() - 0.5);
}
class K2 {
  randomPosition(e, t, n) {
    if (n) return { x: en(e.x, t.width), y: en(e.y, t.height) };
    {
      const s = t.width / 2,
        o = t.height / 2,
        r = Math.floor(j() * 4),
        a = (j() - 0.5) * 2;
      switch (r) {
        case 0:
          return { x: e.x + a * s, y: e.y - o };
        case 1:
          return { x: e.x - s, y: e.y + a * o };
        case 2:
          return { x: e.x + a * s, y: e.y + o };
        case 3:
        default:
          return { x: e.x + s, y: e.y + a * o };
      }
    }
  }
}
class J2 {
  constructor(e) {
    (this._engine = e), (this.id = "emitters");
  }
  getPlugin(e) {
    return new Y2(this._engine, e);
  }
  loadOptions(e, t) {
    var n, s, o, r, a, l;
    if (!this.needsPlugin(e) && !this.needsPlugin(t)) return;
    t != null &&
      t.emitters &&
      (e.emitters = J(t.emitters, (c) => {
        const d = new He();
        return d.load(c), d;
      }));
    const u =
      (s =
        (n = t == null ? void 0 : t.interactivity) === null || n === void 0
          ? void 0
          : n.modes) === null || s === void 0
        ? void 0
        : s.emitters;
    if (u)
      if (u instanceof Array)
        e.interactivity.modes.emitters = {
          random: { count: 1, enable: !0 },
          value: u.map((c) => {
            const d = new He();
            return d.load(c), d;
          }),
        };
      else {
        const c = u;
        if (c.value !== void 0)
          if (c.value instanceof Array)
            e.interactivity.modes.emitters = {
              random: {
                count: (o = c.random.count) !== null && o !== void 0 ? o : 1,
                enable: (r = c.random.enable) !== null && r !== void 0 ? r : !1,
              },
              value: c.value.map((d) => {
                const f = new He();
                return f.load(d), f;
              }),
            };
          else {
            const d = new He();
            d.load(c.value),
              (e.interactivity.modes.emitters = {
                random: {
                  count: (a = c.random.count) !== null && a !== void 0 ? a : 1,
                  enable:
                    (l = c.random.enable) !== null && l !== void 0 ? l : !1,
                },
                value: d,
              });
          }
        else
          (e.interactivity.modes.emitters = {
            random: { count: 1, enable: !1 },
            value: new He(),
          }).value.load(u);
      }
  }
  needsPlugin(e) {
    var t, n, s;
    if (!e) return !1;
    const o = e.emitters;
    return (
      (o instanceof Array && !!o.length) ||
      o !== void 0 ||
      (!!(
        !(
          (s =
            (n =
              (t = e.interactivity) === null || t === void 0
                ? void 0
                : t.events) === null || n === void 0
              ? void 0
              : n.onClick) === null || s === void 0
        ) && s.mode
      ) &&
        K("emitter", e.interactivity.events.onClick.mode))
    );
  }
}
async function Q2(i) {
  i.emitterShapeManager || (i.emitterShapeManager = new Z2(i)),
    i.addEmitterShape ||
      (i.addEmitterShape = (t, n) => {
        var s;
        (s = i.emitterShapeManager) === null ||
          s === void 0 ||
          s.addShape(t, n);
      });
  const e = new J2(i);
  await i.addPlugin(e),
    i.addEmitterShape("circle", new U2()),
    i.addEmitterShape("square", new K2());
}
class ef {
  constructor() {
    (this.delay = 1), (this.pauseOnStop = !1), (this.quantity = 1);
  }
  load(e) {
    !e ||
      (e.delay !== void 0 && (this.delay = e.delay),
      e.quantity !== void 0 && (this.quantity = e.quantity),
      e.particles !== void 0 && (this.particles = ne({}, e.particles)),
      e.pauseOnStop !== void 0 && (this.pauseOnStop = e.pauseOnStop));
  }
}
class tf extends Ae {
  constructor(e) {
    super(e), (this._delay = 0);
  }
  clear() {}
  init() {}
  async interact(e) {
    var t, n, s, o;
    if (!this.container.retina.reduceFactor) return;
    const r = this.container,
      a = r.actualOptions,
      l = a.interactivity.modes.trail;
    if (!l) return;
    const u = (l.delay * 1e3) / this.container.retina.reduceFactor;
    if ((this._delay < u && (this._delay += e.value), this._delay < u)) return;
    let c = !0;
    l.pauseOnStop &&
      (r.interactivity.mouse.position === this._lastPosition ||
        (((t = r.interactivity.mouse.position) === null || t === void 0
          ? void 0
          : t.x) ===
          ((n = this._lastPosition) === null || n === void 0 ? void 0 : n.x) &&
          ((s = r.interactivity.mouse.position) === null || s === void 0
            ? void 0
            : s.y) ===
            ((o = this._lastPosition) === null || o === void 0
              ? void 0
              : o.y))) &&
      (c = !1),
      r.interactivity.mouse.position
        ? (this._lastPosition = {
            x: r.interactivity.mouse.position.x,
            y: r.interactivity.mouse.position.y,
          })
        : delete this._lastPosition,
      c && r.particles.push(l.quantity, r.interactivity.mouse, l.particles),
      (this._delay -= u);
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.actualOptions,
      o = n.interactivity.mouse,
      r = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : s.interactivity
      ).events;
    return (
      (o.clicking && o.inside && !!o.position && K("trail", r.onClick.mode)) ||
      (o.inside && !!o.position && K("trail", r.onHover.mode))
    );
  }
  loadModeOptions(e, ...t) {
    e.trail || (e.trail = new ef());
    for (const n of t) e.trail.load(n == null ? void 0 : n.trail);
  }
  reset() {}
}
async function nf(i) {
  await i.addInteractor("externalTrail", (e) => new tf(e));
}
class tn {
  constructor() {
    (this.enable = !1), (this.value = 0);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.value !== void 0 && (this.value = H(e.value)));
  }
}
class sf {
  constructor() {
    (this.darken = new tn()),
      (this.enable = !1),
      (this.enlighten = new tn()),
      (this.mode = "vertical"),
      (this.speed = 25);
  }
  load(e) {
    !e ||
      (e.backColor !== void 0 &&
        (this.backColor = ie.create(this.backColor, e.backColor)),
      this.darken.load(e.darken),
      e.enable !== void 0 && (this.enable = e.enable),
      this.enlighten.load(e.enlighten),
      e.mode !== void 0 && (this.mode = e.mode),
      e.speed !== void 0 && (this.speed = H(e.speed)));
  }
}
function of(i, e) {
  const t = i.options.roll;
  if (!i.roll || !(t != null && t.enable)) return;
  const n = i.roll.speed * e.factor,
    s = 2 * Math.PI;
  (i.roll.angle += n), i.roll.angle > s && (i.roll.angle -= s);
}
class rf {
  getTransformValues(e) {
    var t;
    const n =
        ((t = e.roll) === null || t === void 0 ? void 0 : t.enable) && e.roll,
      s = n && n.horizontal,
      o = n && n.vertical;
    return {
      a: s ? Math.cos(n.angle) : void 0,
      d: o ? Math.sin(n.angle) : void 0,
    };
  }
  init(e) {
    const t = e.options.roll;
    if (t != null && t.enable)
      if (
        ((e.roll = {
          enable: t.enable,
          horizontal: t.mode === "horizontal" || t.mode === "both",
          vertical: t.mode === "vertical" || t.mode === "both",
          angle: j() * Math.PI * 2,
          speed: R(t.speed) / 360,
        }),
        t.backColor)
      )
        e.backColor = qe(t.backColor);
      else if (t.darken.enable && t.enlighten.enable) {
        const n = j() >= 0.5 ? "darken" : "enlighten";
        e.roll.alter = {
          type: n,
          value: R(n === "darken" ? t.darken.value : t.enlighten.value),
        };
      } else
        t.darken.enable
          ? (e.roll.alter = { type: "darken", value: R(t.darken.value) })
          : t.enlighten.enable &&
            (e.roll.alter = { type: "enlighten", value: R(t.enlighten.value) });
    else
      e.roll = { enable: !1, horizontal: !1, vertical: !1, angle: 0, speed: 0 };
  }
  isEnabled(e) {
    const t = e.options.roll;
    return !e.destroyed && !e.spawning && !!(t != null && t.enable);
  }
  loadOptions(e, ...t) {
    e.roll || (e.roll = new sf());
    for (const n of t) e.roll.load(n == null ? void 0 : n.roll);
  }
  update(e, t) {
    !this.isEnabled(e) || of(e, t);
  }
}
async function af(i) {
  await i.addParticleUpdater("roll", () => new rf());
}
const lf = (i) => {
  const e = (n, s) => i.load(n, s);
  (e.load = (n, s, o) => {
    i.loadJSON(n, s)
      .then((r) => {
        r && o(r);
      })
      .catch(() => {
        o(void 0);
      });
  }),
    (e.setOnClickHandler = (n) => {
      i.setOnClickHandler(n);
    });
  const t = i.dom();
  return { particlesJS: e, pJSDom: t };
};
class uf {
  constructor() {
    (this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class cf extends Se {
  constructor() {
    super(),
      (this.animation = new uf()),
      (this.direction = "clockwise"),
      (this.path = !1),
      (this.value = 0);
  }
  load(e) {
    !e ||
      (super.load(e),
      e.direction !== void 0 && (this.direction = e.direction),
      this.animation.load(e.animation),
      e.path !== void 0 && (this.path = e.path));
  }
}
function df(i, e) {
  var t, n;
  const s = i.rotate,
    o = i.options.rotate;
  if (!s || !o) return;
  const r = o.animation,
    a = ((t = s.velocity) !== null && t !== void 0 ? t : 0) * e.factor,
    l = 2 * Math.PI,
    u = (n = s.decay) !== null && n !== void 0 ? n : 1;
  if (!!r.enable) {
    switch (s.status) {
      case 0:
        (s.value += a), s.value > l && (s.value -= l);
        break;
      case 1:
      default:
        (s.value -= a), s.value < 0 && (s.value += l);
        break;
    }
    s.velocity && u !== 1 && (s.velocity *= u);
  }
}
class ff {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const t = e.options.rotate;
    if (!t) return;
    (e.rotate = {
      enable: t.animation.enable,
      value: (R(t.value) * Math.PI) / 180,
    }),
      (e.pathRotation = t.path);
    let n = t.direction;
    switch (
      (n === "random" &&
        (n = Math.floor(j() * 2) > 0 ? "counter-clockwise" : "clockwise"),
      n)
    ) {
      case "counter-clockwise":
      case "counterClockwise":
        e.rotate.status = 1;
        break;
      case "clockwise":
        e.rotate.status = 0;
        break;
    }
    const s = t.animation;
    s.enable &&
      ((e.rotate.decay = 1 - R(s.decay)),
      (e.rotate.velocity =
        (R(s.speed) / 360) * this.container.retina.reduceFactor),
      s.sync || (e.rotate.velocity *= j())),
      (e.rotation = e.rotate.value);
  }
  isEnabled(e) {
    const t = e.options.rotate;
    return t
      ? !e.destroyed && !e.spawning && t.animation.enable && !t.path
      : !1;
  }
  loadOptions(e, ...t) {
    e.rotate || (e.rotate = new cf());
    for (const n of t) e.rotate.load(n == null ? void 0 : n.rotate);
  }
  update(e, t) {
    var n, s;
    !this.isEnabled(e) ||
      (df(e, t),
      (e.rotation =
        (s = (n = e.rotate) === null || n === void 0 ? void 0 : n.value) !==
          null && s !== void 0
          ? s
          : 0));
  }
}
async function hf(i) {
  await i.addParticleUpdater("rotate", (e) => new ff(e));
}
function pf(i) {
  const e = i.initialPosition,
    { dx: t, dy: n } = fe(e, i.position),
    s = Math.abs(t),
    o = Math.abs(n),
    r = i.retina.maxDistance.horizontal,
    a = i.retina.maxDistance.vertical;
  if (!(!r && !a)) {
    if (((r && s >= r) || (a && o >= a)) && !i.misplaced)
      (i.misplaced = (!!r && s > r) || (!!a && o > a)),
        r && (i.velocity.x = i.velocity.y / 2 - i.velocity.x),
        a && (i.velocity.y = i.velocity.x / 2 - i.velocity.y);
    else if ((!r || s < r) && (!a || o < a) && i.misplaced) i.misplaced = !1;
    else if (i.misplaced) {
      const l = i.position,
        u = i.velocity;
      r && ((l.x < e.x && u.x < 0) || (l.x > e.x && u.x > 0)) && (u.x *= -j()),
        a &&
          ((l.y < e.y && u.y < 0) || (l.y > e.y && u.y > 0)) &&
          (u.y *= -j());
    }
  }
}
function vf(i, e) {
  const t = i.container;
  if (!i.spin) return;
  const n = {
    x: i.spin.direction === "clockwise" ? Math.cos : Math.sin,
    y: i.spin.direction === "clockwise" ? Math.sin : Math.cos,
  };
  (i.position.x = i.spin.center.x + i.spin.radius * n.x(i.spin.angle)),
    (i.position.y = i.spin.center.y + i.spin.radius * n.y(i.spin.angle)),
    (i.spin.radius += i.spin.acceleration);
  const s = Math.max(t.canvas.size.width, t.canvas.size.height);
  i.spin.radius > s / 2
    ? ((i.spin.radius = s / 2), (i.spin.acceleration *= -1))
    : i.spin.radius < 0 && ((i.spin.radius = 0), (i.spin.acceleration *= -1)),
    (i.spin.angle += (e / 100) * (1 - i.spin.radius / s));
}
function mf(i, e) {
  var t;
  const n = i.options,
    s = n.move.path;
  if (!s.enable) return;
  if (i.lastPathTime <= i.pathDelay) {
    i.lastPathTime += e.value;
    return;
  }
  const r =
    (t = i.pathGenerator) === null || t === void 0 ? void 0 : t.generate(i);
  r && i.velocity.addTo(r),
    s.clamp &&
      ((i.velocity.x = Be(i.velocity.x, -1, 1)),
      (i.velocity.y = Be(i.velocity.y, -1, 1))),
    (i.lastPathTime -= i.pathDelay);
}
function gf(i) {
  return i.slow.inRange ? i.slow.factor : 1;
}
class yf {
  init(e) {
    var t;
    const n = e.container,
      s = e.options,
      o = s.move.gravity,
      r = s.move.spin;
    if (
      ((e.gravity = {
        enable: o.enable,
        acceleration: R(o.acceleration),
        inverse: o.inverse,
      }),
      r.enable)
    ) {
      const a =
          (t = r.position) !== null && t !== void 0 ? t : { x: 50, y: 50 },
        l = {
          x: (a.x / 100) * n.canvas.size.width,
          y: (a.y / 100) * n.canvas.size.height,
        },
        u = e.getPosition(),
        c = oe(u, l),
        d = R(r.acceleration);
      (e.retina.spinAcceleration = d * n.retina.pixelRatio),
        (e.spin = {
          center: l,
          direction: e.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
          angle: e.velocity.angle,
          radius: c,
          acceleration: e.retina.spinAcceleration,
        });
    }
  }
  isEnabled(e) {
    return !e.destroyed && e.options.move.enable;
  }
  move(e, t) {
    var n, s, o, r, a;
    const l = e.options,
      u = l.move;
    if (!u.enable) return;
    const c = e.container,
      d = gf(e),
      f =
        ((n = (r = e.retina).moveSpeed) !== null && n !== void 0
          ? n
          : (r.moveSpeed = R(u.speed) * c.retina.pixelRatio)) *
        c.retina.reduceFactor,
      p =
        (s = (a = e.retina).moveDrift) !== null && s !== void 0
          ? s
          : (a.moveDrift = R(e.options.move.drift) * c.retina.pixelRatio),
      h = ze(l.size.value) * c.retina.pixelRatio,
      g = u.size ? e.getRadius() / h : 1,
      y = g * d * (t.factor || 1),
      x = 2,
      C = (f * y) / x;
    if (u.spin.enable) vf(e, C);
    else {
      mf(e, t);
      const b = e.gravity,
        _ = (b == null ? void 0 : b.enable) && b.inverse ? -1 : 1;
      (b == null ? void 0 : b.enable) &&
        C &&
        (e.velocity.y += (_ * (b.acceleration * t.factor)) / (60 * C)),
        p && C && (e.velocity.x += (p * t.factor) / (60 * C));
      const E = e.moveDecay;
      E != 1 && e.velocity.multTo(E);
      const w = e.velocity.mult(C),
        F =
          (o = e.retina.maxSpeed) !== null && o !== void 0
            ? o
            : c.retina.maxSpeed;
      (b == null ? void 0 : b.enable) &&
        F > 0 &&
        ((!b.inverse && w.y >= 0 && w.y >= F) ||
          (b.inverse && w.y <= 0 && w.y <= -F)) &&
        ((w.y = _ * F), C && (e.velocity.y = w.y / C));
      const k = e.options.zIndex,
        T = (1 - e.zIndexFactor) ** k.velocityRate;
      T != 1 && w.multTo(T),
        e.position.addTo(w),
        u.vibrate &&
          ((e.position.x += Math.sin(e.position.x * Math.cos(e.position.y))),
          (e.position.y += Math.cos(e.position.y * Math.sin(e.position.x))));
    }
    pf(e);
  }
}
async function Cf(i) {
  i.addMover("base", () => new yf());
}
class bf {
  draw(e, t, n) {
    e.arc(0, 0, n, 0, Math.PI * 2, !1);
  }
  getSidesCount() {
    return 12;
  }
}
async function _f(i) {
  await i.addShape("circle", new bf());
}
function Qt(i, e, t, n, s) {
  var o, r;
  const a = e;
  if (!a || !t.enable) return;
  const l = se(t.offset),
    u =
      ((o = e.velocity) !== null && o !== void 0 ? o : 0) * i.factor + l * 3.6,
    c = (r = e.decay) !== null && r !== void 0 ? r : 1;
  !s || a.status === 0
    ? ((a.value += u),
      s && a.value > n && ((a.status = 1), (a.value -= a.value % n)))
    : ((a.value -= u), a.value < 0 && ((a.status = 0), (a.value += a.value))),
    a.velocity && c !== 1 && (a.velocity *= c),
    a.value > n && (a.value %= n);
}
function wf(i, e) {
  var t, n, s;
  const o = i.options.color.animation;
  ((t = i.color) === null || t === void 0 ? void 0 : t.h) !== void 0 &&
    Qt(e, i.color.h, o.h, 360, !1),
    ((n = i.color) === null || n === void 0 ? void 0 : n.s) !== void 0 &&
      Qt(e, i.color.s, o.s, 100, !0),
    ((s = i.color) === null || s === void 0 ? void 0 : s.l) !== void 0 &&
      Qt(e, i.color.l, o.l, 100, !0);
}
class Ef {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const t = qe(e.options.color, e.id, e.options.reduceDuplicates);
    t &&
      (e.color = ts(
        t,
        e.options.color.animation,
        this.container.retina.reduceFactor
      ));
  }
  isEnabled(e) {
    var t, n, s;
    const o = e.options.color.animation;
    return (
      !e.destroyed &&
      !e.spawning &&
      ((((t = e.color) === null || t === void 0 ? void 0 : t.h.value) !==
        void 0 &&
        o.h.enable) ||
        (((n = e.color) === null || n === void 0 ? void 0 : n.s.value) !==
          void 0 &&
          o.s.enable) ||
        (((s = e.color) === null || s === void 0 ? void 0 : s.l.value) !==
          void 0 &&
          o.l.enable))
    );
  }
  update(e, t) {
    wf(e, t);
  }
}
async function xf(i) {
  await i.addParticleUpdater("color", (e) => new Ef(e));
}
class Ff {
  constructor() {
    (this.distance = 200),
      (this.duration = 0.4),
      (this.easing = "ease-out-quad"),
      (this.factor = 1),
      (this.maxSpeed = 50),
      (this.speed = 1);
  }
  load(e) {
    !e ||
      (e.distance !== void 0 && (this.distance = e.distance),
      e.duration !== void 0 && (this.duration = e.duration),
      e.easing !== void 0 && (this.easing = e.easing),
      e.factor !== void 0 && (this.factor = e.factor),
      e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed),
      e.speed !== void 0 && (this.speed = e.speed));
  }
}
class Sf extends Ae {
  constructor(e, t) {
    super(t),
      (this._engine = e),
      t.attract || (t.attract = { particles: [] }),
      (this.handleClickMode = (n) => {
        const s = this.container.actualOptions,
          o = s.interactivity.modes.attract;
        if (!(!o || n !== "attract")) {
          t.attract || (t.attract = { particles: [] }),
            (t.attract.clicking = !0),
            (t.attract.count = 0);
          for (const r of t.attract.particles)
            !this.isEnabled(r) || r.velocity.setTo(r.initialVelocity);
          (t.attract.particles = []),
            (t.attract.finish = !1),
            setTimeout(() => {
              t.destroyed ||
                (t.attract || (t.attract = { particles: [] }),
                (t.attract.clicking = !1));
            }, o.duration * 1e3);
        }
      });
  }
  clear() {}
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.attract;
    !t || (e.retina.attractModeDistance = t.distance * e.retina.pixelRatio);
  }
  async interact() {
    const e = this.container,
      t = e.actualOptions,
      n = e.interactivity.status === Je,
      s = t.interactivity.events,
      o = s.onHover.enable,
      r = s.onHover.mode,
      a = s.onClick.enable,
      l = s.onClick.mode;
    n && o && K("attract", r)
      ? this.hoverAttract()
      : a && K("attract", l) && this.clickAttract();
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.actualOptions,
      o = n.interactivity.mouse,
      r = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : s.interactivity
      ).events;
    if (
      (!o.position || !r.onHover.enable) &&
      (!o.clickPosition || !r.onClick.enable)
    )
      return !1;
    const a = r.onHover.mode,
      l = r.onClick.mode;
    return K("attract", a) || K("attract", l);
  }
  loadModeOptions(e, ...t) {
    e.attract || (e.attract = new Ff());
    for (const n of t) e.attract.load(n == null ? void 0 : n.attract);
  }
  reset() {}
  clickAttract() {
    const e = this.container;
    if (
      (e.attract || (e.attract = { particles: [] }),
      e.attract.finish ||
        (e.attract.count || (e.attract.count = 0),
        e.attract.count++,
        e.attract.count === e.particles.count && (e.attract.finish = !0)),
      e.attract.clicking)
    ) {
      const t = e.interactivity.mouse.clickPosition,
        n = e.retina.attractModeDistance;
      if (!n || n < 0 || !t) return;
      this.processAttract(t, n, new ve(t.x, t.y, n));
    } else e.attract.clicking === !1 && (e.attract.particles = []);
  }
  hoverAttract() {
    const e = this.container,
      t = e.interactivity.mouse.position,
      n = e.retina.attractModeDistance;
    !n || n < 0 || !t || this.processAttract(t, n, new ve(t.x, t.y, n));
  }
  processAttract(e, t, n) {
    const s = this.container,
      o = s.actualOptions.interactivity.modes.attract;
    if (!o) return;
    const r = s.particles.quadTree.query(n, (a) => this.isEnabled(a));
    for (const a of r) {
      const { dx: l, dy: u, distance: c } = fe(a.position, e),
        d = o.speed * o.factor,
        f = Be(Hn(o.easing)(1 - c / t) * d, 0, o.maxSpeed),
        p = Z.create(c === 0 ? d : (l / c) * f, c === 0 ? d : (u / c) * f);
      a.position.subFrom(p);
    }
  }
}
async function Tf(i) {
  await i.addInteractor("externalAttract", (e) => new Sf(i, e));
}
class Bf {
  constructor() {
    this.distance = 200;
  }
  load(e) {
    !e || (e.distance !== void 0 && (this.distance = e.distance));
  }
}
class kf extends Ae {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.bounce;
    !t || (e.retina.bounceModeDistance = t.distance * e.retina.pixelRatio);
  }
  async interact() {
    const e = this.container,
      t = e.actualOptions,
      n = t.interactivity.events,
      s = e.interactivity.status === Je,
      o = n.onHover.enable,
      r = n.onHover.mode,
      a = n.onDiv;
    s && o && K("bounce", r)
      ? this.processMouseBounce()
      : yi("bounce", a, (l, u) => this.singleSelectorBounce(l, u));
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.actualOptions,
      o = n.interactivity.mouse,
      r = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : s.interactivity
      ).events,
      a = r.onDiv;
    return (
      (o.position && r.onHover.enable && K("bounce", r.onHover.mode)) ||
      gi("bounce", a)
    );
  }
  loadModeOptions(e, ...t) {
    e.bounce || (e.bounce = new Bf());
    for (const n of t) e.bounce.load(n == null ? void 0 : n.bounce);
  }
  reset() {}
  processBounce(e, t, n) {
    const s = this.container.particles.quadTree.query(n, (o) =>
      this.isEnabled(o)
    );
    for (const o of s)
      n instanceof ve
        ? Xn(si(o), {
            position: e,
            radius: t,
            mass: (t ** 2 * Math.PI) / 2,
            velocity: Z.origin,
            factor: Z.origin,
          })
        : n instanceof pe && r0(o, gt(e, t));
  }
  processMouseBounce() {
    const e = this.container,
      t = e.retina.pixelRatio,
      n = 10 * t,
      s = e.interactivity.mouse.position,
      o = e.retina.bounceModeDistance;
    !o || o < 0 || !s || this.processBounce(s, o, new ve(s.x, s.y, o + n));
  }
  singleSelectorBounce(e, t) {
    const n = this.container,
      s = document.querySelectorAll(e);
    !s.length ||
      s.forEach((o) => {
        const r = o,
          a = n.retina.pixelRatio,
          l = {
            x: (r.offsetLeft + r.offsetWidth / 2) * a,
            y: (r.offsetTop + r.offsetHeight / 2) * a,
          },
          u = (r.offsetWidth / 2) * a,
          c = 10 * a,
          d =
            t.type === "circle"
              ? new ve(l.x, l.y, u + c)
              : new pe(
                  r.offsetLeft * a - c,
                  r.offsetTop * a - c,
                  r.offsetWidth * a + c * 2,
                  r.offsetHeight * a + c * 2
                );
        this.processBounce(l, u, d);
      });
  }
}
async function Df(i) {
  await i.addInteractor("externalBounce", (e) => new kf(e));
}
class ls {
  constructor() {
    (this.distance = 200), (this.duration = 0.4), (this.mix = !1);
  }
  load(e) {
    if (!!e) {
      if (
        (e.distance !== void 0 && (this.distance = e.distance),
        e.duration !== void 0 && (this.duration = e.duration),
        e.mix !== void 0 && (this.mix = e.mix),
        e.opacity !== void 0 && (this.opacity = e.opacity),
        e.color !== void 0)
      ) {
        const t = this.color instanceof Array ? void 0 : this.color;
        this.color = J(e.color, (n) => ie.create(t, n));
      }
      e.size !== void 0 && (this.size = e.size);
    }
  }
}
class Af extends ls {
  constructor() {
    super(), (this.selectors = []);
  }
  get ids() {
    return J(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = J(e, (t) => `#${t}`);
  }
  load(e) {
    super.load(e),
      e &&
        (e.ids !== void 0 && (this.ids = e.ids),
        e.selectors !== void 0 && (this.selectors = e.selectors));
  }
}
class Mf extends ls {
  load(e) {
    super.load(e),
      e &&
        (this.divs = J(e.divs, (t) => {
          const n = new Af();
          return n.load(t), n;
        }));
  }
}
function nn(i, e, t, n) {
  if (e >= t) {
    const s = i + (e - t) * n;
    return Be(s, i, e);
  } else if (e < t) {
    const s = i - (t - e) * n;
    return Be(s, e, i);
  }
}
class Pf extends Ae {
  constructor(e) {
    super(e),
      e.bubble || (e.bubble = {}),
      (this.handleClickMode = (t) => {
        t === "bubble" &&
          (e.bubble || (e.bubble = {}), (e.bubble.clicking = !0));
      });
  }
  clear(e, t, n) {
    (e.bubble.inRange && !n) ||
      (delete e.bubble.div,
      delete e.bubble.opacity,
      delete e.bubble.radius,
      delete e.bubble.color);
  }
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.bubble;
    !t ||
      ((e.retina.bubbleModeDistance = t.distance * e.retina.pixelRatio),
      t.size !== void 0 &&
        (e.retina.bubbleModeSize = t.size * e.retina.pixelRatio));
  }
  async interact(e) {
    const t = this.container.actualOptions,
      n = t.interactivity.events,
      s = n.onHover,
      o = n.onClick,
      r = s.enable,
      a = s.mode,
      l = o.enable,
      u = o.mode,
      c = n.onDiv;
    r && K("bubble", a)
      ? this.hoverBubble(e)
      : l && K("bubble", u)
      ? this.clickBubble(e)
      : yi("bubble", c, (d, f) => this.singleSelectorHover(e, d, f));
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.actualOptions,
      o = n.interactivity.mouse,
      r = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : s.interactivity
      ).events,
      a = r.onDiv,
      l = gi("bubble", a);
    if (
      !(
        l ||
        (r.onHover.enable && o.position) ||
        (r.onClick.enable && o.clickPosition)
      )
    )
      return !1;
    const u = r.onHover.mode,
      c = r.onClick.mode;
    return K("bubble", u) || K("bubble", c) || l;
  }
  loadModeOptions(e, ...t) {
    e.bubble || (e.bubble = new Mf());
    for (const n of t) e.bubble.load(n == null ? void 0 : n.bubble);
  }
  reset(e) {
    e.bubble.inRange = !1;
  }
  clickBubble(e) {
    var t, n;
    const s = this.container,
      o = s.actualOptions,
      r = s.interactivity.mouse.clickPosition,
      a = o.interactivity.modes.bubble;
    if (!a || !r) return;
    s.bubble || (s.bubble = {});
    const l = s.retina.bubbleModeDistance;
    if (!l || l < 0) return;
    const u = s.particles.quadTree.queryCircle(r, l, (c) => this.isEnabled(c));
    for (const c of u) {
      if (!s.bubble.clicking) continue;
      c.bubble.inRange = !s.bubble.durationEnd;
      const d = c.getPosition(),
        f = oe(d, r),
        p =
          (new Date().getTime() - (s.interactivity.mouse.clickTime || 0)) / 1e3;
      p > a.duration && (s.bubble.durationEnd = !0),
        p > a.duration * 2 &&
          ((s.bubble.clicking = !1), (s.bubble.durationEnd = !1));
      const h = {
        bubbleObj: {
          optValue: s.retina.bubbleModeSize,
          value: c.bubble.radius,
        },
        particlesObj: {
          optValue: ze(c.options.size.value) * s.retina.pixelRatio,
          value: c.size.value,
        },
        type: "size",
      };
      this.process(c, f, p, h);
      const g = {
        bubbleObj: { optValue: a.opacity, value: c.bubble.opacity },
        particlesObj: {
          optValue: ze(c.options.opacity.value),
          value:
            (n =
              (t = c.opacity) === null || t === void 0 ? void 0 : t.value) !==
              null && n !== void 0
              ? n
              : 1,
        },
        type: "opacity",
      };
      this.process(c, f, p, g),
        s.bubble.durationEnd
          ? delete c.bubble.color
          : f <= l
          ? this.hoverBubbleColor(c, f)
          : delete c.bubble.color;
    }
  }
  hoverBubble(e) {
    const t = this.container,
      n = t.interactivity.mouse.position,
      s = t.retina.bubbleModeDistance;
    if (!s || s < 0 || n === void 0) return;
    const o = t.particles.quadTree.queryCircle(n, s, (r) => this.isEnabled(r));
    for (const r of o) {
      r.bubble.inRange = !0;
      const a = r.getPosition(),
        l = oe(a, n),
        u = 1 - l / s;
      l <= s
        ? u >= 0 &&
          t.interactivity.status === Je &&
          (this.hoverBubbleSize(r, u),
          this.hoverBubbleOpacity(r, u),
          this.hoverBubbleColor(r, u))
        : this.reset(r),
        t.interactivity.status === ri && this.reset(r);
    }
  }
  hoverBubbleColor(e, t, n) {
    const s = this.container.actualOptions,
      o = n != null ? n : s.interactivity.modes.bubble;
    if (!!o) {
      if (!e.bubble.finalColor) {
        const r = o.color;
        if (!r) return;
        const a = xe(r);
        e.bubble.finalColor = qe(a);
      }
      if (!!e.bubble.finalColor)
        if (o.mix) {
          e.bubble.color = void 0;
          const r = e.getFillColor();
          e.bubble.color = r
            ? Jn(Ci(r, e.bubble.finalColor, 1 - t, t))
            : e.bubble.finalColor;
        } else e.bubble.color = e.bubble.finalColor;
    }
  }
  hoverBubbleOpacity(e, t, n) {
    var s, o, r, a;
    const l = this.container,
      u = l.actualOptions,
      c =
        (s = n == null ? void 0 : n.opacity) !== null && s !== void 0
          ? s
          : (o = u.interactivity.modes.bubble) === null || o === void 0
          ? void 0
          : o.opacity;
    if (!c) return;
    const d = e.options.opacity.value,
      f =
        (a = (r = e.opacity) === null || r === void 0 ? void 0 : r.value) !==
          null && a !== void 0
          ? a
          : 1,
      p = nn(f, c, ze(d), t);
    p !== void 0 && (e.bubble.opacity = p);
  }
  hoverBubbleSize(e, t, n) {
    const s = this.container,
      o =
        n != null && n.size
          ? n.size * s.retina.pixelRatio
          : s.retina.bubbleModeSize;
    if (o === void 0) return;
    const r = ze(e.options.size.value) * s.retina.pixelRatio,
      a = e.size.value,
      l = nn(a, o, r, t);
    l !== void 0 && (e.bubble.radius = l);
  }
  process(e, t, n, s) {
    const o = this.container,
      r = s.bubbleObj.optValue,
      a = o.actualOptions,
      l = a.interactivity.modes.bubble;
    if (!l || r === void 0) return;
    const u = l.duration,
      c = o.retina.bubbleModeDistance,
      d = s.particlesObj.optValue,
      f = s.bubbleObj.value,
      p = s.particlesObj.value || 0,
      h = s.type;
    if (!(!c || c < 0 || r === d))
      if ((o.bubble || (o.bubble = {}), o.bubble.durationEnd))
        f &&
          (h === "size" && delete e.bubble.radius,
          h === "opacity" && delete e.bubble.opacity);
      else if (t <= c) {
        if ((f != null ? f : p) !== r) {
          const y = p - (n * (p - r)) / u;
          h === "size" && (e.bubble.radius = y),
            h === "opacity" && (e.bubble.opacity = y);
        }
      } else
        h === "size" && delete e.bubble.radius,
          h === "opacity" && delete e.bubble.opacity;
  }
  singleSelectorHover(e, t, n) {
    const s = this.container,
      o = document.querySelectorAll(t),
      r = s.actualOptions.interactivity.modes.bubble;
    !r ||
      !o.length ||
      o.forEach((a) => {
        const l = a,
          u = s.retina.pixelRatio,
          c = {
            x: (l.offsetLeft + l.offsetWidth / 2) * u,
            y: (l.offsetTop + l.offsetHeight / 2) * u,
          },
          d = (l.offsetWidth / 2) * u,
          f =
            n.type === "circle"
              ? new ve(c.x, c.y, d)
              : new pe(
                  l.offsetLeft * u,
                  l.offsetTop * u,
                  l.offsetWidth * u,
                  l.offsetHeight * u
                ),
          p = s.particles.quadTree.query(f, (h) => this.isEnabled(h));
        for (const h of p) {
          if (!f.contains(h.getPosition())) continue;
          h.bubble.inRange = !0;
          const g = r.divs,
            y = Wn(g, l);
          (!h.bubble.div || h.bubble.div !== l) &&
            (this.clear(h, e, !0), (h.bubble.div = l)),
            this.hoverBubbleSize(h, 1, y),
            this.hoverBubbleOpacity(h, 1, y),
            this.hoverBubbleColor(h, 1, y);
        }
      });
  }
}
async function Of(i) {
  await i.addInteractor("externalBubble", (e) => new Pf(e));
}
class Lf {
  constructor() {
    this.opacity = 0.5;
  }
  load(e) {
    !e || (e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class zf {
  constructor() {
    (this.distance = 80), (this.links = new Lf()), (this.radius = 60);
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(e) {
    this.links = e;
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(e) {
    this.links = e;
  }
  load(e) {
    var t, n;
    !e ||
      (e.distance !== void 0 && (this.distance = e.distance),
      this.links.load(
        (n = (t = e.links) !== null && t !== void 0 ? t : e.lineLinked) !==
          null && n !== void 0
          ? n
          : e.line_linked
      ),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
function If(i, e, t, n) {
  const s = Math.floor(t.getRadius() / e.getRadius()),
    o = e.getFillColor(),
    r = t.getFillColor();
  if (!o || !r) return;
  const a = e.getPosition(),
    l = t.getPosition(),
    u = Ci(o, r, e.getRadius(), t.getRadius()),
    c = i.createLinearGradient(a.x, a.y, l.x, l.y);
  return (
    c.addColorStop(0, nt(o, n)),
    c.addColorStop(s > 1 ? 1 : s, Ie(u, n)),
    c.addColorStop(1, nt(r, n)),
    c
  );
}
function Rf(i, e, t, n, s) {
  ut(i, n, s), (i.lineWidth = e), (i.strokeStyle = t), i.stroke();
}
function $f(i, e, t, n) {
  const s = i.actualOptions,
    o = s.interactivity.modes.connect;
  if (!!o) return If(e, t, n, o.links.opacity);
}
function Nf(i, e, t) {
  i.canvas.draw((n) => {
    var s;
    const o = $f(i, n, e, t);
    if (!o) return;
    const r = e.getPosition(),
      a = t.getPosition();
    Rf(n, (s = e.retina.linksWidth) !== null && s !== void 0 ? s : 0, o, r, a);
  });
}
class Hf extends Ae {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.connect;
    !t ||
      ((e.retina.connectModeDistance = t.distance * e.retina.pixelRatio),
      (e.retina.connectModeRadius = t.radius * e.retina.pixelRatio));
  }
  async interact() {
    const e = this.container;
    if (
      e.actualOptions.interactivity.events.onHover.enable &&
      e.interactivity.status === "pointermove"
    ) {
      const n = e.interactivity.mouse.position;
      if (
        !e.retina.connectModeDistance ||
        e.retina.connectModeDistance < 0 ||
        !e.retina.connectModeRadius ||
        e.retina.connectModeRadius < 0 ||
        !n
      )
        return;
      const s = Math.abs(e.retina.connectModeRadius),
        o = e.particles.quadTree.queryCircle(n, s, (a) => this.isEnabled(a));
      let r = 0;
      for (const a of o) {
        const l = a.getPosition();
        for (const u of o.slice(r + 1)) {
          const c = u.getPosition(),
            d = Math.abs(e.retina.connectModeDistance),
            f = Math.abs(l.x - c.x),
            p = Math.abs(l.y - c.y);
          f < d && p < d && Nf(e, a, u);
        }
        ++r;
      }
    }
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.interactivity.mouse,
      o = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : n.actualOptions.interactivity
      ).events;
    return o.onHover.enable && s.position ? K("connect", o.onHover.mode) : !1;
  }
  loadModeOptions(e, ...t) {
    e.connect || (e.connect = new zf());
    for (const n of t) e.connect.load(n == null ? void 0 : n.connect);
  }
  reset() {}
}
async function Vf(i) {
  await i.addInteractor("externalConnect", (e) => new Hf(e));
}
class jf {
  constructor() {
    (this.blink = !1), (this.consent = !1), (this.opacity = 1);
  }
  load(e) {
    !e ||
      (e.blink !== void 0 && (this.blink = e.blink),
      e.color !== void 0 && (this.color = ie.create(this.color, e.color)),
      e.consent !== void 0 && (this.consent = e.consent),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class qf {
  constructor() {
    (this.distance = 100), (this.links = new jf());
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(e) {
    this.links = e;
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(e) {
    this.links = e;
  }
  load(e) {
    var t, n;
    !e ||
      (e.distance !== void 0 && (this.distance = e.distance),
      this.links.load(
        (n = (t = e.links) !== null && t !== void 0 ? t : e.lineLinked) !==
          null && n !== void 0
          ? n
          : e.line_linked
      ));
  }
}
function Uf(i, e, t, n, s, o) {
  ut(i, t, n), (i.strokeStyle = Ie(s, o)), (i.lineWidth = e), i.stroke();
}
function Gf(i, e, t, n, s) {
  i.canvas.draw((o) => {
    var r;
    const a = e.getPosition();
    Uf(
      o,
      (r = e.retina.linksWidth) !== null && r !== void 0 ? r : 0,
      a,
      s,
      t,
      n
    );
  });
}
class Wf extends Ae {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.grab;
    !t || (e.retina.grabModeDistance = t.distance * e.retina.pixelRatio);
  }
  async interact() {
    var e, t;
    const n = this.container,
      s = n.actualOptions,
      o = s.interactivity;
    if (
      !o.modes.grab ||
      !o.events.onHover.enable ||
      n.interactivity.status !== Je
    )
      return;
    const r = n.interactivity.mouse.position;
    if (!r) return;
    const a = n.retina.grabModeDistance;
    if (!a || a < 0) return;
    const l = n.particles.quadTree.queryCircle(r, a, (u) => this.isEnabled(u));
    for (const u of l) {
      const c = u.getPosition(),
        d = oe(c, r);
      if (d > a) continue;
      const f = o.modes.grab.links,
        p = f.opacity,
        h = p - (d * p) / a;
      if (h <= 0) continue;
      const g =
        (e = f.color) !== null && e !== void 0
          ? e
          : (t = u.options.links) === null || t === void 0
          ? void 0
          : t.color;
      if (!n.particles.grabLineColor && g) {
        const x = o.modes.grab.links;
        n.particles.grabLineColor = es(g, x.blink, x.consent);
      }
      const y = oi(u, void 0, n.particles.grabLineColor);
      if (!y) return;
      Gf(n, u, y, h, r);
    }
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.interactivity.mouse,
      o = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : n.actualOptions.interactivity
      ).events;
    return o.onHover.enable && !!s.position && K("grab", o.onHover.mode);
  }
  loadModeOptions(e, ...t) {
    e.grab || (e.grab = new qf());
    for (const n of t) e.grab.load(n == null ? void 0 : n.grab);
  }
  reset() {}
}
async function Xf(i) {
  await i.addInteractor("externalGrab", (e) => new Wf(e));
}
class Yf extends Ae {
  constructor(e) {
    super(e),
      (this.handleClickMode = (t) => {
        if (t !== "pause") return;
        const n = this.container;
        n.getAnimationStatus() ? n.pause() : n.play();
      });
  }
  clear() {}
  init() {}
  async interact() {}
  isEnabled() {
    return !0;
  }
  reset() {}
}
function Zf(i) {
  i.addInteractor("externalPause", (e) => new Yf(e));
}
class Kf {
  constructor() {
    (this.default = !0), (this.groups = []), (this.quantity = 4);
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(e) {
    this.quantity = e;
  }
  load(e) {
    var t;
    if (!e) return;
    e.default !== void 0 && (this.default = e.default),
      e.groups !== void 0 && (this.groups = e.groups.map((s) => s)),
      this.groups.length || (this.default = !0);
    const n = (t = e.quantity) !== null && t !== void 0 ? t : e.particles_nb;
    n !== void 0 && (this.quantity = n);
  }
}
class Jf extends Ae {
  constructor(e) {
    super(e),
      (this.handleClickMode = (t) => {
        if (t !== "push") return;
        const n = this.container,
          s = n.actualOptions,
          o = s.interactivity.modes.push;
        if (!o) return;
        const r = o.quantity;
        if (r <= 0) return;
        const a = vt([void 0, ...o.groups]),
          l = a !== void 0 ? n.actualOptions.particles.groups[a] : void 0;
        n.particles.push(r, n.interactivity.mouse, l, a);
      });
  }
  clear() {}
  init() {}
  async interact() {}
  isEnabled() {
    return !0;
  }
  loadModeOptions(e, ...t) {
    e.push || (e.push = new Kf());
    for (const n of t) e.push.load(n == null ? void 0 : n.push);
  }
  reset() {}
}
async function Qf(i) {
  await i.addInteractor("externalPush", (e) => new Jf(e));
}
class eh {
  constructor() {
    this.quantity = 2;
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(e) {
    this.quantity = e;
  }
  load(e) {
    var t;
    if (!e) return;
    const n = (t = e.quantity) !== null && t !== void 0 ? t : e.particles_nb;
    n !== void 0 && (this.quantity = n);
  }
}
class th extends Ae {
  constructor(e) {
    super(e),
      (this.handleClickMode = (t) => {
        const n = this.container,
          s = n.actualOptions;
        if (!s.interactivity.modes.remove || t !== "remove") return;
        const o = s.interactivity.modes.remove.quantity;
        n.particles.removeQuantity(o);
      });
  }
  clear() {}
  init() {}
  async interact() {}
  isEnabled() {
    return !0;
  }
  loadModeOptions(e, ...t) {
    e.remove || (e.remove = new eh());
    for (const n of t) e.remove.load(n == null ? void 0 : n.remove);
  }
  reset() {}
}
function ih(i) {
  i.addInteractor("externalRemove", (e) => new th(e));
}
class us {
  constructor() {
    (this.distance = 200),
      (this.duration = 0.4),
      (this.factor = 100),
      (this.speed = 1),
      (this.maxSpeed = 50),
      (this.easing = "ease-out-quad");
  }
  load(e) {
    !e ||
      (e.distance !== void 0 && (this.distance = e.distance),
      e.duration !== void 0 && (this.duration = e.duration),
      e.easing !== void 0 && (this.easing = e.easing),
      e.factor !== void 0 && (this.factor = e.factor),
      e.speed !== void 0 && (this.speed = e.speed),
      e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed));
  }
}
class nh extends us {
  constructor() {
    super(), (this.selectors = []);
  }
  get ids() {
    return J(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = J(e, (t) => `#${t}`);
  }
  load(e) {
    super.load(e),
      e &&
        (e.ids !== void 0 && (this.ids = e.ids),
        e.selectors !== void 0 && (this.selectors = e.selectors));
  }
}
class sh extends us {
  load(e) {
    super.load(e),
      e &&
        (this.divs = J(e.divs, (t) => {
          const n = new nh();
          return n.load(t), n;
        }));
  }
}
class oh extends Ae {
  constructor(e, t) {
    super(t),
      (this._engine = e),
      t.repulse || (t.repulse = { particles: [] }),
      (this.handleClickMode = (n) => {
        const s = this.container.actualOptions,
          o = s.interactivity.modes.repulse;
        if (!(!o || n !== "repulse")) {
          t.repulse || (t.repulse = { particles: [] }),
            (t.repulse.clicking = !0),
            (t.repulse.count = 0);
          for (const r of t.repulse.particles)
            !this.isEnabled(r) || r.velocity.setTo(r.initialVelocity);
          (t.repulse.particles = []),
            (t.repulse.finish = !1),
            setTimeout(() => {
              t.destroyed ||
                (t.repulse || (t.repulse = { particles: [] }),
                (t.repulse.clicking = !1));
            }, o.duration * 1e3);
        }
      });
  }
  clear() {}
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.repulse;
    !t || (e.retina.repulseModeDistance = t.distance * e.retina.pixelRatio);
  }
  async interact() {
    const e = this.container,
      t = e.actualOptions,
      n = e.interactivity.status === Je,
      s = t.interactivity.events,
      o = s.onHover.enable,
      r = s.onHover.mode,
      a = s.onClick.enable,
      l = s.onClick.mode,
      u = s.onDiv;
    n && o && K("repulse", r)
      ? this.hoverRepulse()
      : a && K("repulse", l)
      ? this.clickRepulse()
      : yi("repulse", u, (c, d) => this.singleSelectorRepulse(c, d));
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.actualOptions,
      o = n.interactivity.mouse,
      r = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : s.interactivity
      ).events,
      a = r.onDiv,
      l = gi("repulse", a);
    if (
      !(
        l ||
        (r.onHover.enable && o.position) ||
        (r.onClick.enable && o.clickPosition)
      )
    )
      return !1;
    const u = r.onHover.mode,
      c = r.onClick.mode;
    return K("repulse", u) || K("repulse", c) || l;
  }
  loadModeOptions(e, ...t) {
    e.repulse || (e.repulse = new sh());
    for (const n of t) e.repulse.load(n == null ? void 0 : n.repulse);
  }
  reset() {}
  clickRepulse() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.repulse;
    if (!!t) {
      if (
        (e.repulse || (e.repulse = { particles: [] }),
        e.repulse.finish ||
          (e.repulse.count || (e.repulse.count = 0),
          e.repulse.count++,
          e.repulse.count === e.particles.count && (e.repulse.finish = !0)),
        e.repulse.clicking)
      ) {
        const n = e.retina.repulseModeDistance;
        if (!n || n < 0) return;
        const s = Math.pow(n / 6, 3),
          o = e.interactivity.mouse.clickPosition;
        if (o === void 0) return;
        const r = new ve(o.x, o.y, s),
          a = e.particles.quadTree.query(r, (l) => this.isEnabled(l));
        for (const l of a) {
          const { dx: u, dy: c, distance: d } = fe(o, l.position),
            f = d ** 2,
            p = t.speed,
            h = (-s * p) / f;
          if (f <= s) {
            e.repulse.particles.push(l);
            const g = Z.create(u, c);
            (g.length = h), l.velocity.setTo(g);
          }
        }
      } else if (e.repulse.clicking === !1) {
        for (const n of e.repulse.particles)
          n.velocity.setTo(n.initialVelocity);
        e.repulse.particles = [];
      }
    }
  }
  hoverRepulse() {
    const e = this.container,
      t = e.interactivity.mouse.position,
      n = e.retina.repulseModeDistance;
    !n || n < 0 || !t || this.processRepulse(t, n, new ve(t.x, t.y, n));
  }
  processRepulse(e, t, n, s) {
    var o;
    const r = this.container,
      a = r.particles.quadTree.query(n, (u) => this.isEnabled(u)),
      l = r.actualOptions.interactivity.modes.repulse;
    if (!!l)
      for (const u of a) {
        const { dx: c, dy: d, distance: f } = fe(u.position, e),
          p =
            ((o = s == null ? void 0 : s.speed) !== null && o !== void 0
              ? o
              : l.speed) * l.factor,
          h = Be(Hn(l.easing)(1 - f / t) * p, 0, l.maxSpeed),
          g = Z.create(f === 0 ? p : (c / f) * h, f === 0 ? p : (d / f) * h);
        u.position.addTo(g);
      }
  }
  singleSelectorRepulse(e, t) {
    const n = this.container,
      s = n.actualOptions.interactivity.modes.repulse;
    if (!s) return;
    const o = document.querySelectorAll(e);
    !o.length ||
      o.forEach((r) => {
        const a = r,
          l = n.retina.pixelRatio,
          u = {
            x: (a.offsetLeft + a.offsetWidth / 2) * l,
            y: (a.offsetTop + a.offsetHeight / 2) * l,
          },
          c = (a.offsetWidth / 2) * l,
          d =
            t.type === "circle"
              ? new ve(u.x, u.y, c)
              : new pe(
                  a.offsetLeft * l,
                  a.offsetTop * l,
                  a.offsetWidth * l,
                  a.offsetHeight * l
                ),
          f = s.divs,
          p = Wn(f, a);
        this.processRepulse(u, c, d, p);
      });
  }
}
async function rh(i) {
  await i.addInteractor("externalRepulse", (e) => new oh(i, e));
}
class ah {
  constructor() {
    (this.factor = 3), (this.radius = 200);
  }
  load(e) {
    !e ||
      (e.factor !== void 0 && (this.factor = e.factor),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class lh extends Ae {
  constructor(e) {
    super(e);
  }
  clear(e, t, n) {
    (e.slow.inRange && !n) || (e.slow.factor = 1);
  }
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.slow;
    !t || (e.retina.slowModeRadius = t.radius * e.retina.pixelRatio);
  }
  async interact() {}
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.interactivity.mouse,
      o = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : n.actualOptions.interactivity
      ).events;
    return o.onHover.enable && !!s.position && K("slow", o.onHover.mode);
  }
  loadModeOptions(e, ...t) {
    e.slow || (e.slow = new ah());
    for (const n of t) e.slow.load(n == null ? void 0 : n.slow);
  }
  reset(e) {
    e.slow.inRange = !1;
    const t = this.container,
      n = t.actualOptions,
      s = t.interactivity.mouse.position,
      o = t.retina.slowModeRadius,
      r = n.interactivity.modes.slow;
    if (!r || !o || o < 0 || !s) return;
    const a = e.getPosition(),
      l = oe(s, a),
      u = l / o,
      c = r.factor;
    l <= o && ((e.slow.inRange = !0), (e.slow.factor = u / c));
  }
}
async function uh(i) {
  await i.addInteractor("externalSlow", (e) => new lh(e));
}
const ch =
  /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function dh(i, e, t) {
  const { svgData: n } = i;
  if (!n) return "";
  const s = nt(e, t);
  if (n.includes("fill")) return n.replace(ch, () => s);
  const o = n.indexOf(">");
  return `${n.substring(0, o)} fill="${s}"${n.substring(o)}`;
}
async function wi(i) {
  return new Promise((e) => {
    i.loading = !0;
    const t = new Image();
    (i.element = t),
      t.addEventListener("load", () => {
        (i.loading = !1), e();
      }),
      t.addEventListener("error", () => {
        (i.element = void 0),
          (i.error = !0),
          (i.loading = !1),
          console.error(`Error tsParticles - loading image: ${i.source}`),
          e();
      }),
      (t.src = i.source);
  });
}
async function fh(i) {
  if (i.type !== "svg") {
    await wi(i);
    return;
  }
  i.loading = !0;
  const e = await fetch(i.source);
  e.ok ||
    (console.error("Error tsParticles - Image not found"), (i.error = !0)),
    i.error || (i.svgData = await e.text()),
    (i.loading = !1);
}
function hh(i, e, t, n) {
  var s, o, r;
  const a = dh(
      i,
      t,
      (o = (s = n.opacity) === null || s === void 0 ? void 0 : s.value) !==
        null && o !== void 0
        ? o
        : 1
    ),
    l = {
      color: t,
      data: Object.assign(Object.assign({}, i), { svgData: a }),
      loaded: !1,
      ratio: e.width / e.height,
      replaceColor:
        (r = e.replaceColor) !== null && r !== void 0 ? r : e.replace_color,
      source: e.src,
    };
  return new Promise((u) => {
    const c = new Blob([a], { type: "image/svg+xml" }),
      d = URL || window.URL || window.webkitURL || window,
      f = d.createObjectURL(c),
      p = new Image();
    p.addEventListener("load", () => {
      (l.loaded = !0), (l.element = p), u(l), d.revokeObjectURL(f);
    }),
      p.addEventListener("error", async () => {
        d.revokeObjectURL(f);
        const h = Object.assign(Object.assign({}, i), {
          error: !1,
          loading: !0,
        });
        await wi(h), (l.loaded = !0), (l.element = h.element), u(l);
      }),
      (p.src = f);
  });
}
class ph {
  constructor() {
    this._images = [];
  }
  addImage(e, t) {
    const n = this.getImages(e);
    n == null || n.images.push(t);
  }
  destroy() {
    this._images = [];
  }
  draw(e, t, n, s) {
    var o;
    const r = t.image,
      a = r == null ? void 0 : r.element;
    if (!a) return;
    const l =
        (o = r == null ? void 0 : r.ratio) !== null && o !== void 0 ? o : 1,
      u = { x: -n, y: -n };
    (e.globalAlpha = s),
      e.drawImage(a, u.x, u.y, n * 2, (n * 2) / l),
      (e.globalAlpha = 1);
  }
  getImages(e) {
    const t = this._images.find((n) => n.id === e.id);
    return (
      t || (this._images.push({ id: e.id, images: [] }), this.getImages(e))
    );
  }
  getSidesCount() {
    return 12;
  }
  loadShape(e) {
    if (e.shape !== "image" && e.shape !== "images") return;
    const t = e.container,
      n = this.getImages(t).images,
      s = e.shapeData;
    n.find((r) => r.source === s.src) ||
      this.loadImageShape(t, s).then(() => {
        this.loadShape(e);
      });
  }
  particleInit(e, t) {
    var n;
    if (t.shape !== "image" && t.shape !== "images") return;
    const s = this.getImages(e).images,
      o = t.shapeData,
      r = t.getFillColor(),
      a = (n = o.replaceColor) !== null && n !== void 0 ? n : o.replace_color,
      l = s.find((u) => u.source === o.src);
    if (!!l) {
      if (l.loading) {
        setTimeout(() => {
          this.particleInit(e, t);
        });
        return;
      }
      (async () => {
        var u, c;
        let d;
        l.svgData && r
          ? (d = await hh(l, o, r, t))
          : (d = {
              color: r,
              data: l,
              element: l.element,
              loaded: !0,
              ratio: o.width / o.height,
              replaceColor: a,
              source: o.src,
            }),
          d.ratio || (d.ratio = 1);
        const f = (u = o.fill) !== null && u !== void 0 ? u : t.fill,
          p = (c = o.close) !== null && c !== void 0 ? c : t.close,
          h = { image: d, fill: f, close: p };
        (t.image = h.image), (t.fill = h.fill), (t.close = h.close);
      })();
    }
  }
  async loadImageShape(e, t) {
    var n;
    const s = t.src;
    if (!s) throw new Error("Error tsParticles - No image.src");
    try {
      const o = {
        source: s,
        type: s.substring(s.length - 3),
        error: !1,
        loading: !0,
      };
      this.addImage(e, o),
        await ((
          (n = t.replaceColor) !== null && n !== void 0 ? n : t.replace_color
        )
          ? fh
          : wi)(o);
    } catch {
      throw new Error(`tsParticles error - ${t.src} not found`);
    }
  }
}
async function vh(i) {
  const e = new ph();
  await i.addShape("image", e), await i.addShape("images", e);
}
class mh extends Se {
  constructor() {
    super(), (this.sync = !1);
  }
  load(e) {
    !e || (super.load(e), e.sync !== void 0 && (this.sync = e.sync));
  }
}
class gh extends Se {
  constructor() {
    super(), (this.random.minimumValue = 1e-4), (this.sync = !1);
  }
  load(e) {
    !e || (super.load(e), e.sync !== void 0 && (this.sync = e.sync));
  }
}
class yh {
  constructor() {
    (this.count = 0), (this.delay = new mh()), (this.duration = new gh());
  }
  load(e) {
    !e ||
      (e.count !== void 0 && (this.count = e.count),
      this.delay.load(e.delay),
      this.duration.load(e.duration));
  }
}
class Ch {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const t = this.container,
      n = e.options,
      s = n.life;
    !s ||
      ((e.life = {
        delay: t.retina.reduceFactor
          ? ((R(s.delay.value) * (s.delay.sync ? 1 : j())) /
              t.retina.reduceFactor) *
            1e3
          : 0,
        delayTime: 0,
        duration: t.retina.reduceFactor
          ? ((R(s.duration.value) * (s.duration.sync ? 1 : j())) /
              t.retina.reduceFactor) *
            1e3
          : 0,
        time: 0,
        count: s.count,
      }),
      e.life.duration <= 0 && (e.life.duration = -1),
      e.life.count <= 0 && (e.life.count = -1),
      e.life && (e.spawning = e.life.delay > 0));
  }
  isEnabled(e) {
    return !e.destroyed;
  }
  loadOptions(e, ...t) {
    e.life || (e.life = new yh());
    for (const n of t) e.life.load(n == null ? void 0 : n.life);
  }
  update(e, t) {
    if (!this.isEnabled(e) || !e.life) return;
    const n = e.life;
    let s = !1;
    if (e.spawning)
      if (((n.delayTime += t.value), n.delayTime >= e.life.delay))
        (s = !0), (e.spawning = !1), (n.delayTime = 0), (n.time = 0);
      else return;
    if (
      n.duration === -1 ||
      e.spawning ||
      (s ? (n.time = 0) : (n.time += t.value), n.time < n.duration)
    )
      return;
    if (
      ((n.time = 0), e.life.count > 0 && e.life.count--, e.life.count === 0)
    ) {
      e.destroy();
      return;
    }
    const o = this.container.canvas.size,
      r = H(0, o.width),
      a = H(0, o.width);
    (e.position.x = se(r)),
      (e.position.y = se(a)),
      (e.spawning = !0),
      (n.delayTime = 0),
      (n.time = 0),
      e.reset();
    const l = e.options.life;
    l &&
      ((n.delay = R(l.delay.value) * 1e3),
      (n.duration = R(l.duration.value) * 1e3));
  }
}
async function bh(i) {
  await i.addParticleUpdater("life", (e) => new Ch(e));
}
class _h {
  draw(e, t, n) {
    e.moveTo(-n / 2, 0), e.lineTo(n / 2, 0);
  }
  getSidesCount() {
    return 1;
  }
}
async function wh(i) {
  await i.addShape("line", new _h());
}
function Eh(i, e, t, n) {
  switch (i.options.opacity.animation.destroy) {
    case "max":
      e >= n && i.destroy();
      break;
    case "min":
      e <= t && i.destroy();
      break;
  }
}
function xh(i, e) {
  var t, n, s, o, r, a;
  if (!i.opacity) return;
  const l = i.opacity.min,
    u = i.opacity.max,
    c = (t = i.opacity.decay) !== null && t !== void 0 ? t : 1;
  if (
    !(
      i.destroyed ||
      !i.opacity.enable ||
      (((n = i.opacity.maxLoops) !== null && n !== void 0 ? n : 0) > 0 &&
        ((s = i.opacity.loops) !== null && s !== void 0 ? s : 0) >
          ((o = i.opacity.maxLoops) !== null && o !== void 0 ? o : 0))
    )
  ) {
    switch (i.opacity.status) {
      case 0:
        i.opacity.value >= u
          ? ((i.opacity.status = 1),
            i.opacity.loops || (i.opacity.loops = 0),
            i.opacity.loops++)
          : (i.opacity.value +=
              ((r = i.opacity.velocity) !== null && r !== void 0 ? r : 0) *
              e.factor);
        break;
      case 1:
        i.opacity.value <= l
          ? ((i.opacity.status = 0),
            i.opacity.loops || (i.opacity.loops = 0),
            i.opacity.loops++)
          : (i.opacity.value -=
              ((a = i.opacity.velocity) !== null && a !== void 0 ? a : 0) *
              e.factor);
        break;
    }
    i.opacity.velocity && i.opacity.decay !== 1 && (i.opacity.velocity *= c),
      Eh(i, i.opacity.value, l, u),
      i.destroyed || (i.opacity.value = Be(i.opacity.value, l, u));
  }
}
class Fh {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const t = e.options.opacity;
    e.opacity = {
      enable: t.animation.enable,
      max: ze(t.value),
      min: ft(t.value),
      value: R(t.value),
      loops: 0,
      maxLoops: R(t.animation.count),
    };
    const n = t.animation;
    if (n.enable) {
      (e.opacity.decay = 1 - R(n.decay)), (e.opacity.status = 0);
      const s = t.value;
      switch (
        ((e.opacity.min = ft(s)), (e.opacity.max = ze(s)), n.startValue)
      ) {
        case "min":
          (e.opacity.value = e.opacity.min), (e.opacity.status = 0);
          break;
        case "random":
          (e.opacity.value = se(e.opacity)),
            (e.opacity.status = j() >= 0.5 ? 0 : 1);
          break;
        case "max":
        default:
          (e.opacity.value = e.opacity.max), (e.opacity.status = 1);
          break;
      }
      (e.opacity.velocity =
        (R(n.speed) / 100) * this.container.retina.reduceFactor),
        n.sync || (e.opacity.velocity *= j());
    }
  }
  isEnabled(e) {
    var t, n, s, o;
    return (
      !e.destroyed &&
      !e.spawning &&
      !!e.opacity &&
      e.opacity.enable &&
      (((t = e.opacity.maxLoops) !== null && t !== void 0 ? t : 0) <= 0 ||
        (((n = e.opacity.maxLoops) !== null && n !== void 0 ? n : 0) > 0 &&
          ((s = e.opacity.loops) !== null && s !== void 0 ? s : 0) <
            ((o = e.opacity.maxLoops) !== null && o !== void 0 ? o : 0)))
    );
  }
  reset(e) {
    e.opacity && (e.opacity.loops = 0);
  }
  update(e, t) {
    !this.isEnabled(e) || xh(e, t);
  }
}
async function Sh(i) {
  await i.addParticleUpdater("opacity", (e) => new Fh(e));
}
function Th(i) {
  if (
    i.outMode !== "bounce" &&
    i.outMode !== "bounce-horizontal" &&
    i.outMode !== "bounceHorizontal" &&
    i.outMode !== "split"
  )
    return;
  i.bounds.right < 0
    ? (i.particle.position.x = i.size + i.offset.x)
    : i.bounds.left > i.canvasSize.width &&
      (i.particle.position.x = i.canvasSize.width - i.size - i.offset.x);
  const e = i.particle.velocity.x;
  let t = !1;
  if (
    (i.direction === "right" &&
      i.bounds.right >= i.canvasSize.width &&
      e > 0) ||
    (i.direction === "left" && i.bounds.left <= 0 && e < 0)
  ) {
    const s = Ne(i.particle.options.bounce.horizontal);
    (i.particle.velocity.x *= -s), (t = !0);
  }
  if (!t) return;
  const n = i.offset.x + i.size;
  i.bounds.right >= i.canvasSize.width
    ? (i.particle.position.x = i.canvasSize.width - n)
    : i.bounds.left <= 0 && (i.particle.position.x = n),
    i.outMode === "split" && i.particle.destroy();
}
function Bh(i) {
  if (
    i.outMode !== "bounce" &&
    i.outMode !== "bounce-vertical" &&
    i.outMode !== "bounceVertical" &&
    i.outMode !== "split"
  )
    return;
  i.bounds.bottom < 0
    ? (i.particle.position.y = i.size + i.offset.y)
    : i.bounds.top > i.canvasSize.height &&
      (i.particle.position.y = i.canvasSize.height - i.size - i.offset.y);
  const e = i.particle.velocity.y;
  let t = !1;
  if (
    (i.direction === "bottom" &&
      i.bounds.bottom >= i.canvasSize.height &&
      e > 0) ||
    (i.direction === "top" && i.bounds.top <= 0 && e < 0)
  ) {
    const s = Ne(i.particle.options.bounce.vertical);
    (i.particle.velocity.y *= -s), (t = !0);
  }
  if (!t) return;
  const n = i.offset.y + i.size;
  i.bounds.bottom >= i.canvasSize.height
    ? (i.particle.position.y = i.canvasSize.height - n)
    : i.bounds.top <= 0 && (i.particle.position.y = n),
    i.outMode === "split" && i.particle.destroy();
}
class kh {
  constructor(e) {
    (this.container = e),
      (this.modes = [
        "bounce",
        "bounce-vertical",
        "bounce-horizontal",
        "bounceVertical",
        "bounceHorizontal",
        "split",
      ]);
  }
  update(e, t, n, s) {
    if (!this.modes.includes(s)) return;
    const o = this.container;
    let r = !1;
    for (const [, f] of o.plugins)
      if ((f.particleBounce !== void 0 && (r = f.particleBounce(e, n, t)), r))
        break;
    if (r) return;
    const a = e.getPosition(),
      l = e.offset,
      u = e.getRadius(),
      c = gt(a, u),
      d = o.canvas.size;
    Th({
      particle: e,
      outMode: s,
      direction: t,
      bounds: c,
      canvasSize: d,
      offset: l,
      size: u,
    }),
      Bh({
        particle: e,
        outMode: s,
        direction: t,
        bounds: c,
        canvasSize: d,
        offset: l,
        size: u,
      });
  }
}
class Dh {
  constructor(e) {
    (this.container = e), (this.modes = ["destroy"]);
  }
  update(e, t, n, s) {
    if (!this.modes.includes(s)) return;
    const o = this.container;
    switch (e.outType) {
      case "normal":
      case "outside":
        if (mt(e.position, o.canvas.size, Z.origin, e.getRadius(), t)) return;
        break;
      case "inside": {
        const { dx: r, dy: a } = fe(e.position, e.moveCenter),
          { x: l, y: u } = e.velocity;
        if (
          (l < 0 && r > e.moveCenter.radius) ||
          (u < 0 && a > e.moveCenter.radius) ||
          (l >= 0 && r < -e.moveCenter.radius) ||
          (u >= 0 && a < -e.moveCenter.radius)
        )
          return;
        break;
      }
    }
    o.particles.remove(e, void 0, !0);
  }
}
class Ah {
  constructor(e) {
    (this.container = e), (this.modes = ["none"]);
  }
  update(e, t, n, s) {
    if (
      !this.modes.includes(s) ||
      (e.options.move.distance.horizontal && (t === "left" || t === "right")) ||
      (e.options.move.distance.vertical && (t === "top" || t === "bottom"))
    )
      return;
    const o = e.options.move.gravity,
      r = this.container,
      a = r.canvas.size,
      l = e.getRadius();
    if (o.enable) {
      const u = e.position;
      ((!o.inverse && u.y > a.height + l && t === "bottom") ||
        (o.inverse && u.y < -l && t === "top")) &&
        r.particles.remove(e);
    } else {
      if (
        (e.velocity.y > 0 && e.position.y <= a.height + l) ||
        (e.velocity.y < 0 && e.position.y >= -l) ||
        (e.velocity.x > 0 && e.position.x <= a.width + l) ||
        (e.velocity.x < 0 && e.position.x >= -l)
      )
        return;
      mt(e.position, r.canvas.size, Z.origin, l, t) || r.particles.remove(e);
    }
  }
}
class Mh {
  constructor(e) {
    (this.container = e), (this.modes = ["out"]);
  }
  update(e, t, n, s) {
    if (!this.modes.includes(s)) return;
    const o = this.container;
    switch (e.outType) {
      case "inside": {
        const { x: r, y: a } = e.velocity,
          l = Z.origin;
        (l.length = e.moveCenter.radius),
          (l.angle = e.velocity.angle + Math.PI),
          l.addTo(Z.create(e.moveCenter));
        const { dx: u, dy: c } = fe(e.position, l);
        if (
          (r <= 0 && u >= 0) ||
          (a <= 0 && c >= 0) ||
          (r >= 0 && u <= 0) ||
          (a >= 0 && c <= 0)
        )
          return;
        (e.position.x = Math.floor(se({ min: 0, max: o.canvas.size.width }))),
          (e.position.y = Math.floor(
            se({ min: 0, max: o.canvas.size.height })
          ));
        const { dx: d, dy: f } = fe(e.position, e.moveCenter);
        (e.direction = Math.atan2(-f, -d)), (e.velocity.angle = e.direction);
        break;
      }
      default: {
        if (mt(e.position, o.canvas.size, Z.origin, e.getRadius(), t)) return;
        switch (e.outType) {
          case "outside": {
            (e.position.x =
              Math.floor(
                se({ min: -e.moveCenter.radius, max: e.moveCenter.radius })
              ) + e.moveCenter.x),
              (e.position.y =
                Math.floor(
                  se({ min: -e.moveCenter.radius, max: e.moveCenter.radius })
                ) + e.moveCenter.y);
            const { dx: r, dy: a } = fe(e.position, e.moveCenter);
            e.moveCenter.radius &&
              ((e.direction = Math.atan2(a, r)),
              (e.velocity.angle = e.direction));
            break;
          }
          case "normal": {
            const r = e.options.move.warp,
              a = o.canvas.size,
              l = {
                bottom: a.height + e.getRadius() + e.offset.y,
                left: -e.getRadius() - e.offset.x,
                right: a.width + e.getRadius() + e.offset.x,
                top: -e.getRadius() - e.offset.y,
              },
              u = e.getRadius(),
              c = gt(e.position, u);
            t === "right" && c.left > a.width + e.offset.x
              ? ((e.position.x = l.left),
                (e.initialPosition.x = e.position.x),
                r ||
                  ((e.position.y = j() * a.height),
                  (e.initialPosition.y = e.position.y)))
              : t === "left" &&
                c.right < -e.offset.x &&
                ((e.position.x = l.right),
                (e.initialPosition.x = e.position.x),
                r ||
                  ((e.position.y = j() * a.height),
                  (e.initialPosition.y = e.position.y))),
              t === "bottom" && c.top > a.height + e.offset.y
                ? (r ||
                    ((e.position.x = j() * a.width),
                    (e.initialPosition.x = e.position.x)),
                  (e.position.y = l.top),
                  (e.initialPosition.y = e.position.y))
                : t === "top" &&
                  c.bottom < -e.offset.y &&
                  (r ||
                    ((e.position.x = j() * a.width),
                    (e.initialPosition.x = e.position.x)),
                  (e.position.y = l.bottom),
                  (e.initialPosition.y = e.position.y));
            break;
          }
        }
        break;
      }
    }
  }
}
class Ph {
  constructor(e) {
    (this.container = e),
      (this.updaters = [new kh(e), new Dh(e), new Mh(e), new Ah(e)]);
  }
  init() {}
  isEnabled(e) {
    return !e.destroyed && !e.spawning;
  }
  update(e, t) {
    var n, s, o, r;
    const a = e.options.move.outModes;
    this.updateOutMode(
      e,
      t,
      (n = a.bottom) !== null && n !== void 0 ? n : a.default,
      "bottom"
    ),
      this.updateOutMode(
        e,
        t,
        (s = a.left) !== null && s !== void 0 ? s : a.default,
        "left"
      ),
      this.updateOutMode(
        e,
        t,
        (o = a.right) !== null && o !== void 0 ? o : a.default,
        "right"
      ),
      this.updateOutMode(
        e,
        t,
        (r = a.top) !== null && r !== void 0 ? r : a.default,
        "top"
      );
  }
  updateOutMode(e, t, n, s) {
    for (const o of this.updaters) o.update(e, s, t, n);
  }
}
async function Oh(i) {
  await i.addParticleUpdater("outModes", (e) => new Ph(e));
}
class Lh {
  init() {}
  isEnabled(e) {
    return (
      !Ke() &&
      !e.destroyed &&
      e.container.actualOptions.interactivity.events.onHover.parallax.enable
    );
  }
  move(e) {
    const t = e.container,
      n = t.actualOptions;
    if (Ke() || !n.interactivity.events.onHover.parallax.enable) return;
    const s = n.interactivity.events.onHover.parallax.force,
      o = t.interactivity.mouse.position;
    if (!o) return;
    const r = { x: t.canvas.size.width / 2, y: t.canvas.size.height / 2 },
      a = n.interactivity.events.onHover.parallax.smooth,
      l = e.getRadius() / s,
      u = { x: (o.x - r.x) * l, y: (o.y - r.y) * l };
    (e.offset.x += (u.x - e.offset.x) / a),
      (e.offset.y += (u.y - e.offset.y) / a);
  }
}
async function zh(i) {
  i.addMover("parallax", () => new Lh());
}
class Ih extends _i {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  async interact(e) {
    var t;
    const n = this.container,
      s =
        (t = e.retina.attractDistance) !== null && t !== void 0
          ? t
          : n.retina.attractDistance,
      o = e.getPosition(),
      r = n.particles.quadTree.queryCircle(o, s);
    for (const a of r) {
      if (
        e === a ||
        !a.options.move.attract.enable ||
        a.destroyed ||
        a.spawning
      )
        continue;
      const l = a.getPosition(),
        { dx: u, dy: c } = fe(o, l),
        d = e.options.move.attract.rotate,
        f = u / (d.x * 1e3),
        p = c / (d.y * 1e3),
        h = a.size.value / e.size.value,
        g = 1 / h;
      (e.velocity.x -= f * h),
        (e.velocity.y -= p * h),
        (a.velocity.x += f * g),
        (a.velocity.y += p * g);
    }
  }
  isEnabled(e) {
    return e.options.move.attract.enable;
  }
  reset() {}
}
async function Rh(i) {
  await i.addInteractor("particlesAttract", (e) => new Ih(e));
}
function sn(i, e, t, n, s, o) {
  const r = Be((i.options.collisions.absorb.speed * s.factor) / 10, 0, n);
  (i.size.value += r / 2),
    (t.size.value -= r),
    n <= o && ((t.size.value = 0), t.destroy());
}
function $h(i, e, t, n) {
  const s = i.getRadius(),
    o = e.getRadius();
  s === void 0 && o !== void 0
    ? i.destroy()
    : s !== void 0 && o === void 0
    ? e.destroy()
    : s !== void 0 &&
      o !== void 0 &&
      (s >= o ? sn(i, s, e, o, t, n) : sn(e, o, i, s, t, n));
}
function cs(i, e) {
  Xn(si(i), si(e));
}
function Nh(i, e) {
  !i.unbreakable && !e.unbreakable && cs(i, e),
    i.getRadius() === void 0 && e.getRadius() !== void 0
      ? i.destroy()
      : i.getRadius() !== void 0 && e.getRadius() === void 0
      ? e.destroy()
      : i.getRadius() !== void 0 &&
        e.getRadius() !== void 0 &&
        (i.getRadius() >= e.getRadius() ? i : e).destroy();
}
function Hh(i, e, t, n) {
  switch (i.options.collisions.mode) {
    case "absorb": {
      $h(i, e, t, n);
      break;
    }
    case "bounce": {
      cs(i, e);
      break;
    }
    case "destroy": {
      Nh(i, e);
      break;
    }
  }
}
class Vh extends _i {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  async interact(e, t) {
    const n = this.container,
      s = e.getPosition(),
      o = e.getRadius(),
      r = n.particles.quadTree.queryCircle(s, o * 2);
    for (const a of r) {
      if (
        e === a ||
        !a.options.collisions.enable ||
        e.options.collisions.mode !== a.options.collisions.mode ||
        a.destroyed ||
        a.spawning
      )
        continue;
      const l = a.getPosition(),
        u = a.getRadius();
      if (Math.abs(Math.round(s.z) - Math.round(l.z)) > o + u) continue;
      const c = oe(s, l),
        d = o + u;
      c > d || Hh(e, a, t, n.retina.pixelRatio);
    }
  }
  isEnabled(e) {
    return e.options.collisions.enable;
  }
  reset() {}
}
async function jh(i) {
  await i.addInteractor("particlesCollisions", (e) => new Vh(e));
}
class qh extends ve {
  constructor(e, t, n, s) {
    super(e, t, n),
      (this.canvasSize = s),
      (this.canvasSize = Object.assign({}, s));
  }
  contains(e) {
    if (super.contains(e)) return !0;
    const t = { x: e.x - this.canvasSize.width, y: e.y };
    if (super.contains(t)) return !0;
    const n = {
      x: e.x - this.canvasSize.width,
      y: e.y - this.canvasSize.height,
    };
    if (super.contains(n)) return !0;
    const s = { x: e.x, y: e.y - this.canvasSize.height };
    return super.contains(s);
  }
  intersects(e) {
    if (super.intersects(e)) return !0;
    const t = e,
      n = e,
      s = {
        x: e.position.x - this.canvasSize.width,
        y: e.position.y - this.canvasSize.height,
      };
    if (n.radius !== void 0) {
      const o = new ve(s.x, s.y, n.radius * 2);
      return super.intersects(o);
    } else if (t.size !== void 0) {
      const o = new pe(s.x, s.y, t.size.width * 2, t.size.height * 2);
      return super.intersects(o);
    }
    return !1;
  }
}
class Uh {
  constructor() {
    (this.blur = 5),
      (this.color = new ie()),
      (this.color.value = "#000"),
      (this.enable = !1);
  }
  load(e) {
    !e ||
      (e.blur !== void 0 && (this.blur = e.blur),
      (this.color = ie.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable));
  }
}
class Gh {
  constructor() {
    (this.enable = !1), (this.frequency = 1);
  }
  load(e) {
    !e ||
      (e.color !== void 0 && (this.color = ie.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class Wh {
  constructor() {
    (this.blink = !1),
      (this.color = new ie()),
      (this.color.value = "#fff"),
      (this.consent = !1),
      (this.distance = 100),
      (this.enable = !1),
      (this.frequency = 1),
      (this.opacity = 1),
      (this.shadow = new Uh()),
      (this.triangles = new Gh()),
      (this.width = 1),
      (this.warp = !1);
  }
  load(e) {
    !e ||
      (e.id !== void 0 && (this.id = e.id),
      e.blink !== void 0 && (this.blink = e.blink),
      (this.color = ie.create(this.color, e.color)),
      e.consent !== void 0 && (this.consent = e.consent),
      e.distance !== void 0 && (this.distance = e.distance),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = e.opacity),
      this.shadow.load(e.shadow),
      this.triangles.load(e.triangles),
      e.width !== void 0 && (this.width = e.width),
      e.warp !== void 0 && (this.warp = e.warp));
  }
}
function Xh(i, e, t, n, s) {
  let o = oe(i, e);
  if (!s || o <= t) return o;
  const r = { x: e.x - n.width, y: e.y };
  if (((o = oe(i, r)), o <= t)) return o;
  const a = { x: e.x - n.width, y: e.y - n.height };
  if (((o = oe(i, a)), o <= t)) return o;
  const l = { x: e.x, y: e.y - n.height };
  return (o = oe(i, l)), o;
}
class Yh extends _i {
  constructor(e) {
    super(e), (this.linkContainer = e);
  }
  clear() {}
  init() {
    this.linkContainer.particles.linksColors = new Map();
  }
  async interact(e) {
    var t;
    if (!e.options.links) return;
    e.links = [];
    const n = e.getPosition(),
      s = this.container,
      o = s.canvas.size;
    if (n.x < 0 || n.y < 0 || n.x > o.width || n.y > o.height) return;
    const r = e.options.links,
      a = r.opacity,
      l = (t = e.retina.linksDistance) !== null && t !== void 0 ? t : 0,
      u = r.warp,
      c = u ? new qh(n.x, n.y, l, o) : new ve(n.x, n.y, l),
      d = s.particles.quadTree.query(c);
    for (const f of d) {
      const p = f.options.links;
      if (
        e === f ||
        !(p != null && p.enable) ||
        r.id !== p.id ||
        f.spawning ||
        f.destroyed ||
        !f.links ||
        e.links.map((x) => x.destination).indexOf(f) !== -1 ||
        f.links.map((x) => x.destination).indexOf(e) !== -1
      )
        continue;
      const h = f.getPosition();
      if (h.x < 0 || h.y < 0 || h.x > o.width || h.y > o.height) continue;
      const g = Xh(n, h, l, o, u && p.warp);
      if (g > l) return;
      const y = (1 - g / l) * a;
      this.setColor(e), e.links.push({ destination: f, opacity: y });
    }
  }
  isEnabled(e) {
    var t;
    return !!(!((t = e.options.links) === null || t === void 0) && t.enable);
  }
  loadParticlesOptions(e, ...t) {
    var n, s;
    e.links || (e.links = new Wh());
    for (const o of t)
      e.links.load(
        (s =
          (n = o == null ? void 0 : o.links) !== null && n !== void 0
            ? n
            : o == null
            ? void 0
            : o.lineLinked) !== null && s !== void 0
          ? s
          : o == null
          ? void 0
          : o.line_linked
      );
  }
  reset() {}
  setColor(e) {
    if (!e.options.links) return;
    const t = this.linkContainer,
      n = e.options.links;
    let s =
      n.id === void 0
        ? t.particles.linksColor
        : t.particles.linksColors.get(n.id);
    if (s) return;
    const o = n.color;
    (s = es(o, n.blink, n.consent)),
      n.id === void 0
        ? (t.particles.linksColor = s)
        : t.particles.linksColors.set(n.id, s);
  }
}
async function Zh(i) {
  await i.addInteractor("particlesLinks", (e) => new Yh(e));
}
function Kh(i, e, t, n, s, o, r, a, l, u, c, d) {
  let f = !1;
  if (oe(t, n) <= s) ut(i, t, n), (f = !0);
  else if (r) {
    let p, h;
    const g = { x: n.x - o.width, y: n.y },
      y = fe(t, g);
    if (y.distance <= s) {
      const x = t.y - (y.dy / y.dx) * t.x;
      (p = { x: 0, y: x }), (h = { x: o.width, y: x });
    } else {
      const x = { x: n.x, y: n.y - o.height },
        C = fe(t, x);
      if (C.distance <= s) {
        const _ = -(t.y - (C.dy / C.dx) * t.x) / (C.dy / C.dx);
        (p = { x: _, y: 0 }), (h = { x: _, y: o.height });
      } else {
        const b = { x: n.x - o.width, y: n.y - o.height },
          _ = fe(t, b);
        if (_.distance <= s) {
          const E = t.y - (_.dy / _.dx) * t.x;
          (p = { x: -E / (_.dy / _.dx), y: E }),
            (h = { x: p.x + o.width, y: p.y + o.height });
        }
      }
    }
    p && h && (ut(i, t, p), ut(i, n, h), (f = !0));
  }
  if (!!f) {
    if (
      ((i.lineWidth = e),
      a && (i.globalCompositeOperation = l),
      (i.strokeStyle = Ie(u, c)),
      d.enable)
    ) {
      const p = Fe(d.color);
      p && ((i.shadowBlur = d.blur), (i.shadowColor = Ie(p)));
    }
    i.stroke();
  }
}
function Jh(i, e, t, n, s, o, r, a) {
  c0(i, e, t, n),
    s && (i.globalCompositeOperation = o),
    (i.fillStyle = Ie(r, a)),
    i.fill();
}
function Qh(i) {
  return i.sort((e, t) => e - t), i.join("_");
}
function on(i, e) {
  const t = Qh(i.map((s) => s.id));
  let n = e.get(t);
  return n === void 0 && ((n = j()), e.set(t, n)), n;
}
class e5 {
  constructor(e) {
    (this.container = e),
      (this._freqs = { links: new Map(), triangles: new Map() });
  }
  drawParticle(e, t) {
    var n;
    const s = this.container,
      o = t.options;
    if (!t.links || t.links.length <= 0) return;
    const r = t.links.filter(
      (a) =>
        o.links && this.getLinkFrequency(t, a.destination) <= o.links.frequency
    );
    for (const a of r)
      this.drawTriangles(s, o, t, a, r),
        a.opacity > 0 &&
          ((n = t.retina.linksWidth) !== null && n !== void 0 ? n : 0) > 0 &&
          this.drawLinkLine(t, a);
  }
  async init() {
    (this._freqs.links = new Map()), (this._freqs.triangles = new Map());
  }
  particleCreated(e) {
    if (((e.links = []), !e.options.links)) return;
    const t = this.container.retina.pixelRatio;
    (e.retina.linksDistance = e.options.links.distance * t),
      (e.retina.linksWidth = e.options.links.width * t);
  }
  particleDestroyed(e) {
    e.links = [];
  }
  drawLinkLine(e, t) {
    const n = this.container,
      s = n.actualOptions,
      o = t.destination,
      r = e.getPosition(),
      a = o.getPosition();
    let l = t.opacity;
    n.canvas.draw((u) => {
      var c, d, f;
      if (!e.options.links) return;
      let p;
      const h =
        (c = e.options.twinkle) === null || c === void 0 ? void 0 : c.lines;
      if (h != null && h.enable) {
        const x = h.frequency,
          C = Fe(h.color);
        j() < x && C && ((p = C), (l = R(h.opacity)));
      }
      if (!p) {
        const x = e.options.links,
          C =
            (x == null ? void 0 : x.id) !== void 0
              ? n.particles.linksColors.get(x.id)
              : n.particles.linksColor;
        p = oi(e, o, C);
      }
      if (!p) return;
      const g = (d = e.retina.linksWidth) !== null && d !== void 0 ? d : 0,
        y = (f = e.retina.linksDistance) !== null && f !== void 0 ? f : 0;
      Kh(
        u,
        g,
        r,
        a,
        y,
        n.canvas.size,
        e.options.links.warp,
        s.backgroundMask.enable,
        s.backgroundMask.composite,
        p,
        l,
        e.options.links.shadow
      );
    });
  }
  drawLinkTriangle(e, t, n) {
    var s;
    if (!e.options.links) return;
    const o = this.container,
      r = o.actualOptions,
      a = t.destination,
      l = n.destination,
      u = e.options.links.triangles,
      c =
        (s = u.opacity) !== null && s !== void 0
          ? s
          : (t.opacity + n.opacity) / 2;
    c <= 0 ||
      o.canvas.draw((d) => {
        var f;
        const p = e.getPosition(),
          h = a.getPosition(),
          g = l.getPosition(),
          y = (f = e.retina.linksDistance) !== null && f !== void 0 ? f : 0;
        if (oe(p, h) > y || oe(g, h) > y || oe(g, p) > y) return;
        let x = Fe(u.color);
        if (!x) {
          const C = e.options.links,
            b =
              (C == null ? void 0 : C.id) !== void 0
                ? o.particles.linksColors.get(C.id)
                : o.particles.linksColor;
          x = oi(e, a, b);
        }
        !x ||
          Jh(
            d,
            p,
            h,
            g,
            r.backgroundMask.enable,
            r.backgroundMask.composite,
            x,
            c
          );
      });
  }
  drawTriangles(e, t, n, s, o) {
    var r, a, l;
    const u = s.destination;
    if (
      !(
        ((r = t.links) === null || r === void 0
          ? void 0
          : r.triangles.enable) &&
        ((a = u.options.links) === null || a === void 0
          ? void 0
          : a.triangles.enable)
      )
    )
      return;
    const c =
      (l = u.links) === null || l === void 0
        ? void 0
        : l.filter((d) => {
            const f = this.getLinkFrequency(u, d.destination);
            return (
              u.options.links &&
              f <= u.options.links.frequency &&
              o.findIndex((p) => p.destination === d.destination) >= 0
            );
          });
    if (!!(c != null && c.length))
      for (const d of c) {
        const f = d.destination;
        this.getTriangleFrequency(n, u, f) > t.links.triangles.frequency ||
          this.drawLinkTriangle(n, s, d);
      }
  }
  getLinkFrequency(e, t) {
    return on([e, t], this._freqs.links);
  }
  getTriangleFrequency(e, t, n) {
    return on([e, t, n], this._freqs.triangles);
  }
}
class t5 {
  constructor() {
    this.id = "links";
  }
  getPlugin(e) {
    return new e5(e);
  }
  loadOptions() {}
  needsPlugin() {
    return !0;
  }
}
async function i5(i) {
  const e = new t5();
  await i.addPlugin(e);
}
async function n5(i) {
  await Zh(i), await i5(i);
}
class ds {
  draw(e, t, n) {
    const s = this.getCenter(t, n),
      o = this.getSidesData(t, n),
      r = o.count.numerator * o.count.denominator,
      a = o.count.numerator / o.count.denominator,
      l = (180 * (a - 2)) / a,
      u = Math.PI - (Math.PI * l) / 180;
    if (!!e) {
      e.beginPath(), e.translate(s.x, s.y), e.moveTo(0, 0);
      for (let c = 0; c < r; c++)
        e.lineTo(o.length, 0), e.translate(o.length, 0), e.rotate(u);
    }
  }
  getSidesCount(e) {
    var t, n;
    const s = e.shapeData;
    return (n =
      (t = s == null ? void 0 : s.sides) !== null && t !== void 0
        ? t
        : s == null
        ? void 0
        : s.nb_sides) !== null && n !== void 0
      ? n
      : 5;
  }
}
class s5 extends ds {
  getCenter(e, t) {
    const n = this.getSidesCount(e);
    return { x: -t / (n / 3.5), y: -t / (2.66 / 3.5) };
  }
  getSidesData(e, t) {
    var n, s;
    const o = e.shapeData,
      r =
        (s =
          (n = o == null ? void 0 : o.sides) !== null && n !== void 0
            ? n
            : o == null
            ? void 0
            : o.nb_sides) !== null && s !== void 0
          ? s
          : 5;
    return {
      count: { denominator: 1, numerator: r },
      length: (t * 2.66) / (r / 3),
    };
  }
}
class o5 extends ds {
  getCenter(e, t) {
    return { x: -t, y: t / 1.66 };
  }
  getSidesCount() {
    return 3;
  }
  getSidesData(e, t) {
    return { count: { denominator: 2, numerator: 3 }, length: t * 2 };
  }
}
async function r5(i) {
  await i.addShape("polygon", new s5());
}
async function a5(i) {
  await i.addShape("triangle", new o5());
}
async function l5(i) {
  await r5(i), await a5(i);
}
function u5(i, e, t, n) {
  switch (i.options.size.animation.destroy) {
    case "max":
      e >= n && i.destroy();
      break;
    case "min":
      e <= t && i.destroy();
      break;
  }
}
function c5(i, e) {
  var t, n, s, o, r;
  const a = ((t = i.size.velocity) !== null && t !== void 0 ? t : 0) * e.factor,
    l = i.size.min,
    u = i.size.max,
    c = (n = i.size.decay) !== null && n !== void 0 ? n : 1;
  if (
    !(
      i.destroyed ||
      !i.size.enable ||
      (((s = i.size.maxLoops) !== null && s !== void 0 ? s : 0) > 0 &&
        ((o = i.size.loops) !== null && o !== void 0 ? o : 0) >
          ((r = i.size.maxLoops) !== null && r !== void 0 ? r : 0))
    )
  ) {
    switch (i.size.status) {
      case 0:
        i.size.value >= u
          ? ((i.size.status = 1),
            i.size.loops || (i.size.loops = 0),
            i.size.loops++)
          : (i.size.value += a);
        break;
      case 1:
        i.size.value <= l
          ? ((i.size.status = 0),
            i.size.loops || (i.size.loops = 0),
            i.size.loops++)
          : (i.size.value -= a);
    }
    i.size.velocity && c !== 1 && (i.size.velocity *= c),
      u5(i, i.size.value, l, u),
      i.destroyed || (i.size.value = Be(i.size.value, l, u));
  }
}
class d5 {
  init(e) {
    var t;
    const n = e.container,
      s = e.options.size,
      o = s.animation;
    o.enable &&
      ((e.size.velocity =
        (((t = e.retina.sizeAnimationSpeed) !== null && t !== void 0
          ? t
          : n.retina.sizeAnimationSpeed) /
          100) *
        n.retina.reduceFactor),
      o.sync || (e.size.velocity *= j()));
  }
  isEnabled(e) {
    var t, n, s, o;
    return (
      !e.destroyed &&
      !e.spawning &&
      e.size.enable &&
      (((t = e.size.maxLoops) !== null && t !== void 0 ? t : 0) <= 0 ||
        (((n = e.size.maxLoops) !== null && n !== void 0 ? n : 0) > 0 &&
          ((s = e.size.loops) !== null && s !== void 0 ? s : 0) <
            ((o = e.size.maxLoops) !== null && o !== void 0 ? o : 0)))
    );
  }
  reset(e) {
    e.size.loops = 0;
  }
  update(e, t) {
    !this.isEnabled(e) || c5(e, t);
  }
}
async function f5(i) {
  await i.addParticleUpdater("size", () => new d5());
}
const bt = Math.sqrt(2);
class h5 {
  draw(e, t, n) {
    e.rect(-n / bt, -n / bt, (n * 2) / bt, (n * 2) / bt);
  }
  getSidesCount() {
    return 4;
  }
}
async function p5(i) {
  const e = new h5();
  await i.addShape("edge", e), await i.addShape("square", e);
}
class v5 {
  draw(e, t, n) {
    var s;
    const o = t.shapeData,
      r = this.getSidesCount(t),
      a = (s = o == null ? void 0 : o.inset) !== null && s !== void 0 ? s : 2;
    e.moveTo(0, 0 - n);
    for (let l = 0; l < r; l++)
      e.rotate(Math.PI / r),
        e.lineTo(0, 0 - n * a),
        e.rotate(Math.PI / r),
        e.lineTo(0, 0 - n);
  }
  getSidesCount(e) {
    var t, n;
    const s = e.shapeData;
    return (n =
      (t = s == null ? void 0 : s.sides) !== null && t !== void 0
        ? t
        : s == null
        ? void 0
        : s.nb_sides) !== null && n !== void 0
      ? n
      : 5;
  }
}
async function m5(i) {
  await i.addShape("star", new v5());
}
function ei(i, e, t, n, s) {
  var o, r;
  const a = e;
  if (!a || !a.enable) return;
  const l = se(t.offset),
    u =
      ((o = e.velocity) !== null && o !== void 0 ? o : 0) * i.factor + l * 3.6,
    c = (r = e.decay) !== null && r !== void 0 ? r : 1;
  !s || a.status === 0
    ? ((a.value += u),
      s && a.value > n && ((a.status = 1), (a.value -= a.value % n)))
    : ((a.value -= u), a.value < 0 && ((a.status = 0), (a.value += a.value))),
    a.velocity && c !== 1 && (a.velocity *= c),
    a.value > n && (a.value %= n);
}
function g5(i, e) {
  var t, n, s, o, r, a, l, u, c, d;
  if (!(!((t = i.stroke) === null || t === void 0) && t.color)) return;
  const f = i.stroke.color.animation,
    p =
      (s = (n = i.strokeColor) === null || n === void 0 ? void 0 : n.h) !==
        null && s !== void 0
        ? s
        : (o = i.color) === null || o === void 0
        ? void 0
        : o.h;
  p && ei(e, p, f.h, 360, !1);
  const h =
    (a = (r = i.strokeColor) === null || r === void 0 ? void 0 : r.s) !==
      null && a !== void 0
      ? a
      : (l = i.color) === null || l === void 0
      ? void 0
      : l.s;
  h && ei(e, h, f.s, 100, !0);
  const g =
    (c = (u = i.strokeColor) === null || u === void 0 ? void 0 : u.l) !==
      null && c !== void 0
      ? c
      : (d = i.color) === null || d === void 0
      ? void 0
      : d.l;
  g && ei(e, g, f.l, 100, !0);
}
class y5 {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    var t, n;
    const s = this.container;
    (e.stroke = xe(e.options.stroke, e.id, e.options.reduceDuplicates)),
      (e.strokeWidth = e.stroke.width * s.retina.pixelRatio);
    const o =
      (t = qe(e.stroke.color)) !== null && t !== void 0 ? t : e.getFillColor();
    o &&
      (e.strokeColor = ts(
        o,
        (n = e.stroke.color) === null || n === void 0 ? void 0 : n.animation,
        s.retina.reduceFactor
      ));
  }
  isEnabled(e) {
    var t, n, s, o;
    const r = (t = e.stroke) === null || t === void 0 ? void 0 : t.color;
    return (
      !e.destroyed &&
      !e.spawning &&
      !!r &&
      ((((n = e.strokeColor) === null || n === void 0 ? void 0 : n.h.value) !==
        void 0 &&
        r.animation.h.enable) ||
        (((s = e.strokeColor) === null || s === void 0 ? void 0 : s.s.value) !==
          void 0 &&
          r.animation.s.enable) ||
        (((o = e.strokeColor) === null || o === void 0 ? void 0 : o.l.value) !==
          void 0 &&
          r.animation.l.enable))
    );
  }
  update(e, t) {
    !this.isEnabled(e) || g5(e, t);
  }
}
async function C5(i) {
  await i.addParticleUpdater("strokeColor", (e) => new y5(e));
}
const ai = ["text", "character", "char"];
class b5 {
  draw(e, t, n, s) {
    var o, r, a;
    const l = t.shapeData;
    if (l === void 0) return;
    const u = l.value;
    if (u === void 0) return;
    const c = t;
    c.text === void 0 && (c.text = xe(u, t.randomIndexData));
    const d = c.text,
      f = (o = l.style) !== null && o !== void 0 ? o : "",
      p = (r = l.weight) !== null && r !== void 0 ? r : "400",
      h = Math.round(n) * 2,
      g = (a = l.font) !== null && a !== void 0 ? a : "Verdana",
      y = t.fill,
      x = (d.length * n) / 2;
    e.font = `${f} ${p} ${h}px "${g}"`;
    const C = { x: -x, y: n / 2 };
    (e.globalAlpha = s),
      y ? e.fillText(d, C.x, C.y) : e.strokeText(d, C.x, C.y),
      (e.globalAlpha = 1);
  }
  getSidesCount() {
    return 12;
  }
  async init(e) {
    const t = e.actualOptions;
    if (ai.find((n) => K(n, t.particles.shape.type))) {
      const n = ai.map((o) => t.particles.shape.options[o]).find((o) => !!o),
        s = [];
      J(n, (o) => {
        s.push(n0(o.font, o.weight));
      }),
        await Promise.all(s);
    }
  }
}
async function _5(i) {
  const e = new b5();
  for (const t of ai) await i.addShape(t, e);
}
async function w5(i) {
  await Cf(i),
    await zh(i),
    await Tf(i),
    await Df(i),
    await Of(i),
    await Vf(i),
    await Xf(i),
    await Zf(i),
    await Qf(i),
    await ih(i),
    await rh(i),
    await uh(i),
    await Rh(i),
    await jh(i),
    await n5(i),
    await _f(i),
    await vh(i),
    await wh(i),
    await l5(i),
    await p5(i),
    await m5(i),
    await _5(i),
    await bh(i),
    await Sh(i),
    await f5(i),
    await hf(i),
    await xf(i),
    await C5(i),
    await Oh(i),
    await lf(i);
}
class E5 {
  constructor() {
    (this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class x5 extends Se {
  constructor() {
    super(),
      (this.animation = new E5()),
      (this.direction = "clockwise"),
      (this.enable = !1),
      (this.value = 0);
  }
  load(e) {
    super.load(e),
      e &&
        (this.animation.load(e.animation),
        e.direction !== void 0 && (this.direction = e.direction),
        e.enable !== void 0 && (this.enable = e.enable));
  }
}
function F5(i, e) {
  var t, n;
  if (!i.tilt || !i.options.tilt) return;
  const s = i.options.tilt,
    o = s.animation,
    r = ((t = i.tilt.velocity) !== null && t !== void 0 ? t : 0) * e.factor,
    a = 2 * Math.PI,
    l = (n = i.tilt.decay) !== null && n !== void 0 ? n : 1;
  if (!!o.enable) {
    switch (i.tilt.status) {
      case 0:
        (i.tilt.value += r), i.tilt.value > a && (i.tilt.value -= a);
        break;
      case 1:
      default:
        (i.tilt.value -= r), i.tilt.value < 0 && (i.tilt.value += a);
        break;
    }
    i.tilt.velocity && l !== 1 && (i.tilt.velocity *= l);
  }
}
class S5 {
  constructor(e) {
    this.container = e;
  }
  getTransformValues(e) {
    var t;
    const n =
      ((t = e.tilt) === null || t === void 0 ? void 0 : t.enable) && e.tilt;
    return {
      b: n ? Math.cos(n.value) * n.cosDirection : void 0,
      c: n ? Math.sin(n.value) * n.sinDirection : void 0,
    };
  }
  init(e) {
    var t;
    const n = e.options.tilt;
    if (!n) return;
    e.tilt = {
      enable: n.enable,
      value: (R(n.value) * Math.PI) / 180,
      sinDirection: j() >= 0.5 ? 1 : -1,
      cosDirection: j() >= 0.5 ? 1 : -1,
    };
    let s = n.direction;
    switch (
      (s === "random" &&
        (s = Math.floor(j() * 2) > 0 ? "counter-clockwise" : "clockwise"),
      s)
    ) {
      case "counter-clockwise":
      case "counterClockwise":
        e.tilt.status = 1;
        break;
      case "clockwise":
        e.tilt.status = 0;
        break;
    }
    const o =
      (t = e.options.tilt) === null || t === void 0 ? void 0 : t.animation;
    o != null &&
      o.enable &&
      ((e.tilt.decay = 1 - R(o.decay)),
      (e.tilt.velocity =
        (R(o.speed) / 360) * this.container.retina.reduceFactor),
      o.sync || (e.tilt.velocity *= j()));
  }
  isEnabled(e) {
    var t;
    const n =
      (t = e.options.tilt) === null || t === void 0 ? void 0 : t.animation;
    return !e.destroyed && !e.spawning && !!(n != null && n.enable);
  }
  loadOptions(e, ...t) {
    e.tilt || (e.tilt = new x5());
    for (const n of t) e.tilt.load(n == null ? void 0 : n.tilt);
  }
  update(e, t) {
    !this.isEnabled(e) || F5(e, t);
  }
}
async function T5(i) {
  await i.addParticleUpdater("tilt", (e) => new S5(e));
}
class rn {
  constructor() {
    (this.enable = !1), (this.frequency = 0.05), (this.opacity = 1);
  }
  load(e) {
    !e ||
      (e.color !== void 0 && (this.color = ie.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = H(e.opacity)));
  }
}
class B5 {
  constructor() {
    (this.lines = new rn()), (this.particles = new rn());
  }
  load(e) {
    !e || (this.lines.load(e.lines), this.particles.load(e.particles));
  }
}
class k5 {
  getColorStyles(e, t, n, s) {
    const o = e.options,
      r = o.twinkle;
    if (!r) return {};
    const a = r.particles,
      l = a.enable && j() < a.frequency,
      u = e.options.zIndex,
      c = (1 - e.zIndexFactor) ** u.opacityRate,
      d = l ? R(a.opacity) * c : s,
      f = qe(a.color),
      p = f ? nt(f, d) : void 0,
      h = {},
      g = l && p;
    return (h.fill = g ? p : void 0), (h.stroke = g ? p : void 0), h;
  }
  init() {}
  isEnabled(e) {
    const t = e.options,
      n = t.twinkle;
    return n ? n.particles.enable : !1;
  }
  loadOptions(e, ...t) {
    e.twinkle || (e.twinkle = new B5());
    for (const n of t) e.twinkle.load(n == null ? void 0 : n.twinkle);
  }
  update() {}
}
async function D5(i) {
  await i.addParticleUpdater("twinkle", () => new k5());
}
class A5 {
  constructor() {
    (this.angle = 50), (this.move = 10);
  }
  load(e) {
    !e ||
      (e.angle !== void 0 && (this.angle = H(e.angle)),
      e.move !== void 0 && (this.move = H(e.move)));
  }
}
class M5 {
  constructor() {
    (this.distance = 5), (this.enable = !1), (this.speed = new A5());
  }
  load(e) {
    if (
      !!e &&
      (e.distance !== void 0 && (this.distance = H(e.distance)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0)
    )
      if (typeof e.speed == "number") this.speed.load({ angle: e.speed });
      else {
        const t = e.speed;
        t.min !== void 0
          ? this.speed.load({ angle: t })
          : this.speed.load(e.speed);
      }
  }
}
function P5(i, e) {
  var t;
  const n = i.options.wobble;
  if (!(n != null && n.enable) || !i.wobble) return;
  const s = i.wobble.angleSpeed * e.factor,
    o = i.wobble.moveSpeed * e.factor,
    r =
      (o *
        (((t = i.retina.wobbleDistance) !== null && t !== void 0 ? t : 0) *
          e.factor)) /
      (1e3 / 60),
    a = 2 * Math.PI;
  (i.wobble.angle += s),
    i.wobble.angle > a && (i.wobble.angle -= a),
    (i.position.x += r * Math.cos(i.wobble.angle)),
    (i.position.y += r * Math.abs(Math.sin(i.wobble.angle)));
}
class O5 {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    var t;
    const n = e.options.wobble;
    n != null && n.enable
      ? (e.wobble = {
          angle: j() * Math.PI * 2,
          angleSpeed: R(n.speed.angle) / 360,
          moveSpeed: R(n.speed.move) / 10,
        })
      : (e.wobble = { angle: 0, angleSpeed: 0, moveSpeed: 0 }),
      (e.retina.wobbleDistance =
        R(
          (t = n == null ? void 0 : n.distance) !== null && t !== void 0 ? t : 0
        ) * this.container.retina.pixelRatio);
  }
  isEnabled(e) {
    var t;
    return (
      !e.destroyed &&
      !e.spawning &&
      !!(!((t = e.options.wobble) === null || t === void 0) && t.enable)
    );
  }
  loadOptions(e, ...t) {
    e.wobble || (e.wobble = new M5());
    for (const n of t) e.wobble.load(n == null ? void 0 : n.wobble);
  }
  update(e, t) {
    !this.isEnabled(e) || P5(e, t);
  }
}
async function L5(i) {
  await i.addParticleUpdater("wobble", (e) => new O5(e));
}
async function z5(i) {
  await w5(i),
    await q2(i),
    await af(i),
    await T5(i),
    await D5(i),
    await L5(i),
    await nf(i),
    await I2(i),
    await Q2(i);
}
const I5 = {
    particles: {
      number: { value: 20, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !0,
        anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
      },
      size: {
        value: 2,
        random: !0,
        anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
      },
      line_linked: {
        enable: !1,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "top",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !1, mode: "bubble" },
        onclick: { enable: !1, mode: "repulse" },
        resize: !0,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: !1,
  },
  R5 = (i) =>
    new Promise((e, t) => {
      setTimeout(() => {
        e("\u6210\u529F");
      }, i);
    }),
  $5 = ae({
    __name: "Index",
    async setup(i) {
      let e, t;
      ([e, t] = As(() => R5(150))), await e, t();
      const n = L(!1);
      Rn.on("Nav", (h) => {
        n.value = h;
      });
      const s = kt(),
        o = (h) => {
          h === 1
            ? s.$patch((g) => {
                g.TwoParticlesLogo = !1;
              })
            : s.$patch((g) => {
                g.TwoParticlesLogo = !0;
              }),
            h === 2
              ? s.$patch((g) => {
                  g.ThreeParticlesLogo = !1;
                })
              : s.$patch((g) => {
                  g.ThreeParticlesLogo = !0;
                }),
            h === 3
              ? s.$patch((g) => {
                  g.FourParticlesLogo = !1;
                })
              : s.$patch((g) => {
                  g.FourParticlesLogo = !0;
                });
        };
      let r = L(),
        a = G({ api: "" }),
        l = G({ SlideNum: 0 });
      const u = (h) => {
          a.api = h;
        },
        c = (h) => {
          r.value.NavList.forEach((g) => {
            g.actions = !1;
          }),
            (r.value.NavList[h.activeIndex].actions = !0),
            (l.SlideNum = h.activeIndex),
            localStorage.setItem("SlideNum", h.activeIndex),
            (s.ParticlesOff = h.activeIndex),
            o(h.activeIndex);
        },
        d = [bn],
        f = I5;
      async function p(h) {
        await z5(h);
      }
      return (
        ke(() => {
          (l.SlideNum = +localStorage.getItem("SlideNum")),
            setTimeout(() => {
              a.api.slideTo(l.SlideNum, 0);
            }, 0);
        }),
        (h, g) => {
          const y = Ms("Particles"),
            x = Ud,
            C = Rd,
            b = Td,
            _ = R1,
            E = Tu,
            w = fr,
            F = _o;
          return (
            P(),
            Re(
              v(Tn),
              {
                modules: d,
                "slides-per-view": 1,
                direction: "vertical",
                "noSwiping:": "",
                true: "",
                mousewheel: { thresholdTime: 700 },
                onSwiper: u,
                onSlideChange: c,
              },
              {
                default: q(() => [
                  N(
                    y,
                    { id: "tsparticles", particlesInit: p, options: v(f) },
                    null,
                    8,
                    ["options"]
                  ),
                  N(
                    et,
                    { name: "homeDown" },
                    {
                      default: q(() => [
                        v(n) ? (P(), Re(x, { key: "1" })) : X("", !0),
                        ce(
                          N(
                            C,
                            {
                              swiper: v(a).api,
                              PagintionNum: v(l).SlideNum,
                              ref_key: "navlist",
                              ref: r,
                              key: "2",
                            },
                            null,
                            8,
                            ["swiper", "PagintionNum"]
                          ),
                          [[he, v(n)]]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  N(
                    v(Qe),
                    { class: "swiper-no-swiping" },
                    { default: q(() => [N(b)]), _: 1 }
                  ),
                  N(
                    v(Qe),
                    { class: "swiper-no-swiping" },
                    { default: q(() => [N(_)]), _: 1 }
                  ),
                  N(
                    v(Qe),
                    { class: "swiper-no-swiping" },
                    { default: q(() => [N(E)]), _: 1 }
                  ),
                  N(
                    v(Qe),
                    { class: "swiper-no-swiping" },
                    { default: q(() => [N(w)]), _: 1 }
                  ),
                  N(
                    v(Qe),
                    { class: "swiper-no-swiping" },
                    { default: q(() => [N(F)]), _: 1 }
                  ),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  });
const V5 = Ce($5, [["__scopeId", "data-v-f2dfeb36"]]);
export { V5 as default };
