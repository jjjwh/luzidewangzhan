import {
  a9 as oe,
  S as J,
  i as K,
  s as O,
  l as C,
  f as P,
  x as j,
  W as B,
  X as D,
  a as E,
  d as v,
  b as f,
  a5 as W,
  aa as z,
  r as G,
  u as H,
  w as N,
  M as U,
  D as M,
  G as X,
  j as Y,
  m as Z,
  o as $,
  v as ee,
  A as ue,
  e as S,
  k as q,
  c as T,
  n as A,
  t as F,
  Q as he,
  g as Q,
  R as _e
} from "./vendor-ea8ed43c.js";
import {
  l as me,
  s as ge
} from "./linear-a465d416.js";
import {
  a as de
} from "./index-d573ac81.js";

function V(r, {
  delay: e = 0,
  duration: i = 400,
  easing: l = oe
} = {}) {
  const t = +getComputedStyle(r).opacity;
  return {
    delay: e,
    duration: i,
    easing: l,
    css: s => `opacity: ${s*t}`
  }
}

function le(r, e, i) {
  const l = r.slice();
  return l[7] = e[i], l
}

function te(r, e, i) {
  const l = r.slice();
  return l[7] = e[i], l
}

function ie(r) {
  let e, i, l, t, s, h, c;
  return {
    c() {
      e = B("ellipse"), this.h()
    },
    l(a) {
      e = D(a, "ellipse", {
        cx: !0,
        cy: !0,
        rx: !0,
        ry: !0,
        fill: !0,
        class: !0
      }), E(e).forEach(v), this.h()
    },
    h() {
      f(e, "cx", i = r[5](r[7].cx)), f(e, "cy", l = r[5](r[7].cy)), f(e, "rx", t = r[5](r[7].rx)), f(e, "ry", s = r[5](r[7].ry)), f(e, "fill", "white"), f(e, "class", "svelte-1a02lkq")
    },
    m(a, _) {
      P(a, e, _), c = !0
    },
    p(a, _) {
      (!c || _ & 44 && i !== (i = a[5](a[7].cx))) && f(e, "cx", i), (!c || _ & 44 && l !== (l = a[5](a[7].cy))) && f(e, "cy", l), (!c || _ & 44 && t !== (t = a[5](a[7].rx))) && f(e, "rx", t), (!c || _ & 44 && s !== (s = a[5](a[7].ry))) && f(e, "ry", s)
    },
    i(a) {
      c || (W(() => {
        h || (h = z(e, V, {}, !0)), h.run(1)
      }), c = !0)
    },
    o(a) {
      h || (h = z(e, V, {}, !1)), h.run(0), c = !1
    },
    d(a) {
      a && v(e), a && h && h.end()
    }
  }
}

function re(r) {
  let e, i, l = r[7].rx > 0 && ie(r);
  return {
    c() {
      l && l.c(), e = C()
    },
    l(t) {
      l && l.l(t), e = C()
    },
    m(t, s) {
      l && l.m(t, s), P(t, e, s), i = !0
    },
    p(t, s) {
      t[7].rx > 0 ? l ? (l.p(t, s), s & 12 && j(l, 1)) : (l = ie(t), l.c(), j(l, 1), l.m(e.parentNode, e)) : l && (G(), H(l, 1, 1, () => {
        l = null
      }), N())
    },
    i(t) {
      i || (j(l), i = !0)
    },
    o(t) {
      H(l), i = !1
    },
    d(t) {
      l && l.d(t), t && v(e)
    }
  }
}

function se(r) {
  let e, i, l, t, s, h, c;
  return {
    c() {
      e = B("ellipse"), this.h()
    },
    l(a) {
      e = D(a, "ellipse", {
        class: !0,
        cx: !0,
        cy: !0,
        rx: !0,
        ry: !0,
        fill: !0,
        "stroke-width": !0
      }), E(e).forEach(v), this.h()
    },
    h() {
      f(e, "class", "circle-overlay svelte-1a02lkq"), f(e, "cx", i = r[5](r[7].cx)), f(e, "cy", l = r[5](r[7].cy)), f(e, "rx", t = r[5](r[7].rx)), f(e, "ry", s = r[5](r[7].ry)), f(e, "fill", "none"), f(e, "stroke-width", "40")
    },
    m(a, _) {
      P(a, e, _), c = !0
    },
    p(a, _) {
      (!c || _ & 44 && i !== (i = a[5](a[7].cx))) && f(e, "cx", i), (!c || _ & 44 && l !== (l = a[5](a[7].cy))) && f(e, "cy", l), (!c || _ & 44 && t !== (t = a[5](a[7].rx))) && f(e, "rx", t), (!c || _ & 44 && s !== (s = a[5](a[7].ry))) && f(e, "ry", s)
    },
    i(a) {
      c || (W(() => {
        h || (h = z(e, V, {}, !0)), h.run(1)
      }), c = !0)
    },
    o(a) {
      h || (h = z(e, V, {}, !1)), h.run(0), c = !1
    },
    d(a) {
      a && v(e), a && h && h.end()
    }
  }
}

function ae(r) {
  let e, i, l = r[7].rx > 0 && se(r);
  return {
    c() {
      l && l.c(), e = C()
    },
    l(t) {
      l && l.l(t), e = C()
    },
    m(t, s) {
      l && l.m(t, s), P(t, e, s), i = !0
    },
    p(t, s) {
      t[7].rx > 0 ? l ? (l.p(t, s), s & 12 && j(l, 1)) : (l = se(t), l.c(), j(l, 1), l.m(e.parentNode, e)) : l && (G(), H(l, 1, 1, () => {
        l = null
      }), N())
    },
    i(t) {
      i || (j(l), i = !0)
    },
    o(t) {
      H(l), i = !1
    },
    d(t) {
      l && l.d(t), t && v(e)
    }
  }
}

function ve(r) {
  let e, i, l, t, s, h, c, a, _, y, x, R, k;
  const positionsRoot = r[3] || {};
  const imgKey = (r[1] || "").split(".")[0];
  const baseKey = imgKey.replace(/(zhong|zuo|you)$/, "");
  const group = positionsRoot[baseKey] || {};
  let p = group[r[2]] || [],
    n = [];
  for (let o = 0; o < p.length; o += 1) n[o] = re(te(r, p, o));
  const d = o => H(n[o], 1, 1, () => {
    n[o] = null
  });
  let w = group[r[2]] || [],
    m = [];
  for (let o = 0; o < w.length; o += 1) m[o] = ae(le(r, w, o));
  const b = o => H(m[o], 1, 1, () => {
    m[o] = null
  });
  return {
    c() {
      e = B("svg"), i = B("g"), l = B("image"), h = B("mask"), c = B("rect");
      for (let o = 0; o < n.length; o += 1) n[o].c();
      for (let o = 0; o < m.length; o += 1) m[o].c();
      this.h()
    },
    l(o) {
      e = D(o, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        preserveAspectRatio: !0,
        xmlns: !0,
        "xml:space": !0,
        style: !0
      });
      var g = E(e);
      i = D(g, "g", {
        mask: !0
      });
      var u = E(i);
      l = D(u, "image", {
        href: !0,
        x: !0,
        y: !0,
        height: !0,
        width: !0,
        preserveAspectRatio: !0
      }), E(l).forEach(v), u.forEach(v), h = D(g, "mask", {
        id: !0
      });
      var I = E(h);
      c = D(I, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        fill: !0,
        "fill-opacity": !0
      }), E(c).forEach(v);
      for (let L = 0; L < n.length; L += 1) n[L].l(I);
      I.forEach(v);
      for (let L = 0; L < m.length; L += 1) m[L].l(g);
      g.forEach(v), this.h()
    },
    h() {
      f(l, "href", t = `assets/img/${r[1]}`), f(l, "x", "0"), f(l, "y", "0"), f(l, "height", "100%"), f(l, "width", "100%"), f(l, "preserveAspectRatio", "xMidYMin meet"), f(i, "mask", s = `url(#mask-${r[0]})`), f(c, "x", "0"), f(c, "y", "0"), f(c, "width", a = r[4][1]), f(c, "height", _ = r[4][1]), f(c, "fill", "white"), f(c, "fill-opacity", .1), f(h, "id", y = `mask-${r[0]}`), f(e, "width", "100%"), f(e, "height", "100%"), f(e, "viewBox", R = "0 0 " + r[4][1] + " " + r[4][1]), f(e, "preserveAspectRatio", "xMidYMin meet"), f(e, "xmlns", "http://www.w3.org/2000/svg"), f(e, "xml:space", "preserve"), U(e, "fill-rule", "evenodd"), U(e, "clip-rule", "evenodd"), U(e, "stroke-linecap", "round"), U(e, "stroke-linejoin", "round"), U(e, "overflow", "visible")
    },
    m(o, g) {
      P(o, e, g), M(e, i), M(i, l), M(e, h), M(h, c);
      for (let u = 0; u < n.length; u += 1) n[u].m(h, null);
      for (let u = 0; u < m.length; u += 1) m[u].m(e, null);
      k = !0
    },
    p(o, [g]) {
      const _pos = o[3] || {}, _key = ((o[1] || "").split(".")[0] || "").replace(/(zhong|zuo|you)$/, ""), _grp = _pos[_key] || {};
      if ((!k || g & 2 && t !== (t = `assets/img/${o[1]}`)) && f(l, "href", t), (!k || g & 1 && s !== (s = `url(#mask-${o[0]})`)) && f(i, "mask", s), (!k || g & 16 && a !== (a = o[4][1])) && f(c, "width", a), (!k || g & 16 && _ !== (_ = o[4][1])) && f(c, "height", _), g & 44) {
        p = _grp[o[2]] || [];
        let u;
        for (u = 0; u < p.length; u += 1) {
          const I = te(o, p, u);
          n[u] ? (n[u].p(I, g), j(n[u], 1)) : (n[u] = re(I), n[u].c(), j(n[u], 1), n[u].m(h, null))
        }
        for (G(), u = p.length; u < n.length; u += 1) d(u);
        N()
      }
      if ((!k || g & 1 && y !== (y = `mask-${o[0]}`)) && f(h, "id", y), g & 44) {
        w = _grp[o[2]] || [];
        let u;
        for (u = 0; u < w.length; u += 1) {
          const I = le(o, w, u);
          m[u] ? (m[u].p(I, g), j(m[u], 1)) : (m[u] = ae(I), m[u].c(), j(m[u], 1), m[u].m(e, null))
        }
        for (G(), u = w.length; u < m.length; u += 1) b(u);
        N()
      }(!k || g & 16 && R !== (R = "0 0 " + o[4][1] + " " + o[4][1])) && f(e, "viewBox", R)
    },
    i(o) {
      if (!k) {
        for (let g = 0; g < p.length; g += 1) j(n[g]);
        W(() => {
          x || (x = z(h, V, {}, !0)), x.run(1)
        });
        for (let g = 0; g < w.length; g += 1) j(m[g]);
        k = !0
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let g = 0; g < n.length; g += 1) H(n[g]);
      x || (x = z(h, V, {}, !1)), x.run(0), m = m.filter(Boolean);
      for (let g = 0; g < m.length; g += 1) H(m[g]);
      k = !1
    },
    d(o) {
      o && v(e), X(n, o), o && x && x.end(), X(m, o)
    }
  }
}

function ye(r, e, i) {
  let l, {
      name: t = "mask-name"
    } = e,
    {
      imgPath: s = ""
    } = e,
    {
      selected: h = ""
    } = e,
    {
      positions: c = []
    } = e,
    {
      imageRange: a = [0, 1]
    } = e;
  const _ = !0;
  return r.$$set = y => {
    "name" in y && i(0, t = y.name), "imgPath" in y && i(1, s = y.imgPath), "selected" in y && i(2, h = y.selected), "positions" in y && i(3, c = y.positions), "imageRange" in y && i(4, a = y.imageRange)
  }, r.$$.update = () => {
    r.$$.dirty & 16 && i(5, l = me().domain([0, 1]).range(a))
  }, [t, s, h, c, a, l, _]
}
class ke extends J {
  constructor(e) {
    super();
    K(this, e, ye, ve, O, {
      name: 0,
      imgPath: 1,
      selected: 2,
      positions: 3,
      imageRange: 4
    })
  }
}

function ne(r, e, i) {
  const l = r.slice();
  return l[12] = e[i], l[14] = i, l
}

function we(r) {
  let e, i, l;
  return {
    c() {
      e = F(""), i = new he, l = F(""), this.h()
    },
    l(t) {
      e = Q(t, ""), i = _e(t), l = Q(t, ""), this.h()
    },
    h() {
      i.a = l
    },
    m(t, s) {
      P(t, e, s), i.m(r[2], t, s), P(t, l, s)
    },
    p(t, s) {
      s & 4 && i.p(t[2])
    },
    d(t) {
      t && v(e), t && i.d(), t && v(l)
    }
  }
}

function pe(r) {
  let e, i, l;
  return {
    c() {
      e = F(""), i = S("a"), l = F(""), this.h()
    },
    l(t) {
      e = Q(t, ""), i = T(t, "A", {
        href: !0
      });
      var s = E(i);
      s.forEach(v), l = Q(t, ""), this.h()
    },
    h() {
      f(i, "href", r[3])
    },
    m(t, s) {
      P(t, e, s), P(t, i, s), i.innerHTML = r[2], P(t, l, s)
    },
    p(t, s) {
      s & 4 && (i.innerHTML = t[2]), s & 8 && f(i, "href", t[3])
    },
    d(t) {
      t && v(e), t && v(i), t && v(l)
    }
  }
}

function ce(r) {
  let e, i = r[12].title + "";
  return {
    c() {
      e = S("div"), this.h()
    },
    l(l) {
      e = T(l, "DIV", {
        class: !0
      });
      var t = E(e);
      t.forEach(v), this.h()
    },
    h() {
      f(e, "class", "step-title svelte-1ifywjh")
    },
    m(l, t) {
      P(l, e, t), e.innerHTML = i
    },
    p(l, t) {
      t & 32 && i !== (i = l[12].title + "") && (e.innerHTML = i)
    },
    d(l) {
      l && v(e)
    }
  }
}

function fe(r) {
  let e, i, l, t = r[12].text + "",
    s, h, c = r[12].title && ce(r);
  return {
    c() {
      e = S("div"), c && c.c(), i = q(), l = S("div"), s = q(), this.h()
    },
    l(a) {
      e = T(a, "DIV", {
        class: !0
      });
      var _ = E(e);
      c && c.l(_), i = A(_), l = T(_, "DIV", {
        class: !0
      });
      var y = E(l);
      y.forEach(v), s = A(_), _.forEach(v), this.h()
    },
    h() {
      f(l, "class", "step-text svelte-1ifywjh"), f(e, "class", h = "step step-" + r[1] + " svelte-1ifywjh")
    },
    m(a, _) {
      P(a, e, _), c && c.m(e, null), M(e, i), M(e, l), l.innerHTML = t, M(e, s)
    },
    p(a, _) {
      a[12].title ? c ? c.p(a, _) : (c = ce(a), c.c(), c.m(e, i)) : c && (c.d(1), c = null), _ & 32 && t !== (t = a[12].text + "") && (l.innerHTML = t), _ & 1 && h !== (h = "step step-" + a[0] + " svelte-1ifywjh") && f(e, "class", h)
    },
    d(a) {
      a && v(e), c && c.d()
    }
  }
}

function be(r) {
  let e, i, l, t, s, h, c, a, _, y;

  function x(d, w) {
    return d[3] ? pe : we
  }
  let R = x(r),
    k = R(r);
  c = new ke({
    props: {
      name: r[1],
      selected: r[8].id,
      imgPath: r[4],
      positions: r[6],
      imageRange: r[7]
    }
  });
  let p = r[5],
    n = [];
  for (let d = 0; d < p.length; d += 1) n[d] = fe(ne(r, p, d));
  return {
    c() {
      e = S("div"), i = S("figure"), l = S("h3"), t = q(), s = S("div"), k.c(), h = q(), Y(c.$$.fragment), a = q(), _ = S("div");
      for (let d = 0; d < n.length; d += 1) n[d].c();
      this.h()
    },
    l(d) {
      e = T(d, "DIV", {
        id: !0,
        class: !0
      });
      var w = E(e);
      i = T(w, "FIGURE", {
        class: !0
      });
      var m = E(i);
      l = T(m, "H3", {
        class: !0
      });
      var b = E(l);
      b.forEach(v), t = A(m), s = T(m, "DIV", {
        class: !0
      });
      var o = E(s);
      k.l(o), o.forEach(v), h = A(m), Z(c.$$.fragment, m), m.forEach(v), a = A(w), _ = T(w, "DIV", {
        class: !0
      });
      var g = E(_);
      for (let u = 0; u < n.length; u += 1) n[u].l(g);
      g.forEach(v), w.forEach(v), this.h()
    },
    h() {
      f(l, "class", "svelte-1ifywjh"), f(s, "class", "illustration-source svelte-1ifywjh"), f(i, "class", "svelte-1ifywjh"), f(_, "class", "scroll-area svelte-1ifywjh"), f(e, "id", "scrolly"), f(e, "class", "svelte-1ifywjh")
    },
    m(d, w) {
      P(d, e, w), M(e, i), M(i, l), l.innerHTML = r[0], M(i, t), M(i, s), k.m(s, null), M(i, h), $(c, i, null), M(e, a), M(e, _);
      for (let m = 0; m < n.length; m += 1) n[m].m(_, null);
      y = !0
    },
    p(d, w) {
      (!y || w & 1) && (l.innerHTML = d[0]), R === (R = x(d)) && k ? k.p(d, w) : (k.d(1), k = R(d), k && (k.c(), k.m(s, null)));
      const m = {};
      if (w & 2 && (m.name = d[1]), w & 256 && (m.selected = d[8].id), w & 16 && (m.imgPath = d[4]), w & 64 && (m.positions = d[6]), w & 128 && (m.imageRange = d[7]), c.$set(m), w & 33) {
        p = d[5];
        let b;
        for (b = 0; b < p.length; b += 1) {
          const o = ne(d, p, b);
          n[b] ? n[b].p(o, w) : (n[b] = fe(o), n[b].c(), n[b].m(_, null))
        }
        for (; b < n.length; b += 1) n[b].d(1);
        n.length = p.length
      }
    },
    i(d) {
      y || (j(c.$$.fragment, d), y = !0)
    },
    o(d) {
      H(c.$$.fragment, d), y = !1
    },
    d(d) {
      d && v(e), k.d(), ee(c), X(n, d)
    }
  }
}

function Ee(r) {
  let e, i;
  return e = new de({
    props: {
      id: "gods-iconography-" + r[1],
      fullBleed: !0,
      $$slots: {
        default: [be]
      },
      $$scope: {
        ctx: r
      }
    }
  }), {
    c() {
      Y(e.$$.fragment)
    },
    l(l) {
      Z(e.$$.fragment, l)
    },
    m(l, t) {
      $(e, l, t), i = !0
    },
    p(l, [t]) {
      const s = {};
      t & 1 && (s.id = "gods-iconography-" + l[1]), t & 33279 && (s.$$scope = {
        dirty: t,
        ctx: l
      }), e.$set(s)
    },
    i(l) {
      i || (j(e.$$.fragment, l), i = !0)
    },
    o(l) {
      H(e.$$.fragment, l), i = !1
    },
    d(l) {
      ee(e, l)
    }
  }
}

function xe(r, e, i) {
  const l = !1;
  let {
    title: t = "Tezcatlipoca"
  } = e, {
    name: s = "mask-name"
  } = e, {
    source: h = "illustration source"
  } = e, {
    sourceUrl: c = void 0
  } = e, {
    imgPath: a = ""
  } = e, {
    selected: _ = ""
  } = e, {
    steps: y = []
  } = e, {
    positions: x = []
  } = e, {
    imageRange: R = [0, 1]
  } = e, k = {
    id: "init"
  };
  const p = n => {
    i(9, _ = n.index), i(8, k = y[n.index])
  };
        // tu模块文字消失的地方调整
  return ue(() => {
    const sc = ge().setup({
      step: `div .step-${s}`,
      offset: .73,
      progress: true
    });
    sc.onStepEnter(p);
    sc.onStepProgress(function(evt){
      try {
        if(!evt || !evt.element) return;
        const texts = evt.element.querySelectorAll && evt.element.querySelectorAll('.step-text, .step-title');
        if(!texts || !texts.length) return;
        for(let i=0;i<texts.length;i++){
          /* 阈值越接近 1：要滚过更多本步区域才隐藏文字；0.5 时略滑一下就会没 */
          if(typeof evt.progress === 'number' && evt.progress > 0.88) {
            // 立即隐藏：临时禁用过渡以实现“突然消失”效果
            texts[i].style.transition = 'none';
            texts[i].style.opacity = '0';
          } else {
            // 恢复平滑过渡
            texts[i].style.transition = 'opacity .3s ease';
            texts[i].style.opacity = '1';
          }
        }
        try {
          // 同时将步骤卡片的背景设为透明（否则文字消失但背景仍可见）
          if(evt.element && evt.element.style) {
            if(typeof evt.progress === 'number' && evt.progress > 0.88) {
              evt.element.style.backgroundColor = 'transparent';
            } else {
              // 清除内联样式以恢复到 CSS 定义的背景色
              evt.element.style.backgroundColor = '';
            }
          }
        } catch (e) {
          // 忽略背景设置错误
        }
      } catch (e) {
        // 忽略任何意外错误，避免影响主逻辑
      }
    });
  }), r.$$set = n => {
    "title" in n && i(0, t = n.title), "name" in n && i(1, s = n.name), "source" in n && i(2, h = n.source), "sourceUrl" in n && i(3, c = n.sourceUrl), "imgPath" in n && i(4, a = n.imgPath), "selected" in n && i(9, _ = n.selected), "steps" in n && i(5, y = n.steps), "positions" in n && i(6, x = n.positions), "imageRange" in n && i(7, R = n.imageRange)
  }, [t, s, h, c, a, y, x, R, k, _, l]
}
class Re extends J {
  constructor(e) {
    super();
    K(this, e, xe, Ee, O, {
      ssr: 10,
      title: 0,
      name: 1,
      source: 2,
      sourceUrl: 3,
      imgPath: 4,
      selected: 9,
      steps: 5,
      positions: 6,
      imageRange: 7
    })
  }
  get ssr() {
    return this.$$.ctx[10]
  }
}

 // 改变图片圆圈位置
const He = {
    tu2: {
      init: [{
        cx: .5,
        cy: .5,
        rx: 0,
        ry: 0
      }],
      intro: [{
        cx: .5,
        cy: .45,
        rx: .52,
        ry: .41
      }],
      colors: [{
        cx: .18,
        cy: .65,
        rx: .19,
        ry: .19
      }],
      face: [{
        cx: .32,
        cy: .25,
        rx: .18,
        ry: .18
      }, {
        cx: .6,
        cy: .23,
        rx: .1,
        ry: .15
      }],
      spear: [{
        cx: .81,
        cy: .65,
        rx: .22,
        ry: .17
      }]
    },
    tu4: {
      init: [{
        cx: .3,
        cy: .3,
        rx: 0,
        ry: 0
      }],
      intro: [{
        cx: .505,
        cy: .45,
        rx: .43,
        ry: .43
      }],
      colors: [{
        cx: .507,
        cy: .45,
        rx: .38,
        ry: .38
      }],
      face: [{
        cx: .505,
        cy: .45,
        rx: .24,
        ry: .24
      }],
      spear: [{
        cx: .505,
        cy: .45,
        rx: .19,
        ry: .19
      }]
    },
    tu6: {
      init: [{
        cx: .5,
        cy: .5,
        rx: 0,
        ry: 0
      }],
      intro: [{
        cx: .5,
        cy: .43,
        rx: .49,
        ry: .4
      }],
      colors: [{
        cx: .57,
        cy: .28,
        rx: .23,
        ry: .24
      }],
      face: [{
        cx: .253,
        cy: .34,
        rx: .1,
        ry: .16
      }],
      spear: [{
        cx: .86,
        cy: .39,
        rx: .16,
        ry: .3
      }]
    }
  },
  Ie = {
    tu1: {
      init: [{
        cx: .4,
        cy: .4,
        rx: 0,
        ry: -0.4
      }],
      intro: [{
        cx: .5,
        cy: .45,
        rx: .48,
        ry: .43
      }],
      cycle_timing: [{
        cx: .20,
        cy: .7,
        rx: .18,
        ry: .11
      }, {
        cx: .77,
        cy: .7,
        rx: .18,
        ry: .11
      }],
      hair: [{
        cx: .5,
        cy: .6,
        rx: .22,
        ry: .15
      }],
      mouth: [{
        cx: .28,
        cy: .25,
        rx: .13,
        ry: .18
      }]
    },
    tu3: {
      init: [{
        cx: .5,
        cy: .5,
        rx: 0,
        ry: 0
      }],
      intro: [{
        cx: .505,
        cy: .44,
        rx: .52,
        ry: .43
      }],
      claws: [{
        cx: .87,
        cy: .3,
        rx: .19,
        ry: .16
      }],
      hair: [{
        cx: .1,
        cy: .55,
        rx: .14,
        ry: .17
      }],
      mouth: [{
        cx: .23,
        cy: .26,
        rx: .17,
        ry: .17
      }]
    },
    tu5: {
      init: [{
        cx: .5,
        cy: .5,
        rx: 0,
        ry: 0
      }],
      intro: [{
        cx: .5,
        cy: .47,
        rx: .5,
        ry: .44
      }],
      claws: [{
        cx: .46,
        cy: .26,
        rx: .27,
        ry: .19
      }],
      hair: [{
        cx: .2,
        cy: .59,
        rx: .24,
        ry: .2
      }],
      mouth: [{
        cx: .83,
        cy: .41,
        rx: .18,
        ry: .1
      }]
    }
  };
export {
  Re as S, He as a, Ie as t
};
