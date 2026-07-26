const I18N = {
  ja: {
    appName: "募集チャージ シミュレーター",
    appSub: "2026/07/29 リニューアル仕様",
    auto: "PUまで自動",
    period: "次の開催期間",
    reset: "全リセット",
    h1: "呼び出しチャージ",
    p1: "通常と限定は共有されない。同種類の募集でPU対象を獲得した時のみリセットされる。",
    lblN: "呼び出しチャージ",
    tagN: "通常PU A・B 共有",
    lblL: "限定・呼び出しチャージ",
    tagL: "限定PU C・D 共有",
    s100: "100<br>★3確定・PU 50%",
    s200: "200<br>PU確定",
    h2: "同時開催中の募集",
    p2: "通常PU 2件と限定PU 2件が同時開催中。募集は1回または10回。",
    bannerName: (id) =>
      ({
        A: "通常ピックアップ募集 A",
        B: "通常ピックアップ募集 B",
        C: "限定ピックアップ募集 C",
        D: "限定ピックアップ募集 D",
      })[id],
    chargeTagN: "呼び出しチャージ",
    chargeTagL: "限定・呼び出しチャージ",
    pull1: "1回募集",
    pull10: "10回募集",
    h3: "直前の募集結果",
    noPull: "まだ募集していません",
    lastLabel: (n, name) => `${name} — ${n}回募集`,
    h4: "募集回数特典",
    p4: (n) => `4バナー共通で累計。募集期間ごとにリセットされる。累計 ${n} 回`,
    rewards: [
      "育成素材",
      "10回募集チケット",
      "育成素材",
      "10回募集チケット×2",
      "育成素材",
      "特別報酬",
    ],
    h5: "確率設定",
    lbl3: "★3 合計確率",
    lblP: "うちPU1人あたり",
    lbl2: "★2 確率",
    noteRates: "★1 は残り全て。単位はパーセント。",
    h6: "ログ",
    pu: "PU",
    noteFar: (a, b, t) =>
      `あと ${a} 回で ★3確定（PU 50%）、${b} 回で PU 確定。`,
    noteMid: (b, t) => `100到達済み。あと ${b} 回で PU 確定。`,
    noteMax: (t) => `次の募集で${t}PU確定。`,
    tNormal: "通常",
    tLimited: "限定",
    logHit: (id, c, t) => `${id} / ${c}回目 → PU獲得。${t}チャージをリセット`,
    log3: (id, c, r) => `${id} / ${c}回目 → ★3（PU以外）${r ? " — " + r : ""}`,
    logAuto: (id, n) => `自動実行: ${id} を ${n} 回募集して PU 獲得`,
    logPeriod:
      "新しい開催期間: 募集回数特典をリセット（呼び出しチャージは維持）",
    r200: "200到達 PU確定",
    r100hit: "100到達 ★3確定 PU当選",
    r100miss: "100到達 ★3確定 PU外れ",
    langLabel: "言語",
    menuLabel: "メニュー",
  },
  en: {
    appName: "Recruitment charge simulator",
    appSub: "2026-07-29 revamp",
    auto: "Auto-pull to PU",
    period: "Next period",
    reset: "Reset all",
    h1: "Recruitment charge",
    p1: "Standard and limited charges are not shared. A charge resets only when a pickup student is obtained on a banner of the same type.",
    lblN: "Recruitment charge",
    tagN: "Shared by standard A and B",
    lblL: "Limited recruitment charge",
    tagL: "Shared by limited C and D",
    s100: "100<br>3★ guaranteed, 50% pickup",
    s200: "200<br>Pickup guaranteed",
    h2: "Concurrent banners",
    p2: "Two standard and two limited pickup banners in the same period. Pull 1 or 10 at a time.",
    bannerName: (id) =>
      ({
        A: "Standard pickup A",
        B: "Standard pickup B",
        C: "Limited pickup C",
        D: "Limited pickup D",
      })[id],
    chargeTagN: "Recruitment charge",
    chargeTagL: "Limited recruitment charge",
    pull1: "Pull 1",
    pull10: "Pull 10",
    h3: "Last recruitment",
    noPull: "No recruitment yet",
    lastLabel: (n, name) => `${name} — ${n} pull${n > 1 ? "s" : ""}`,
    h4: "Recruitment count rewards",
    p4: (n) =>
      `Accumulated across all four banners. Resets each period. Total ${n} pulls`,
    rewards: [
      "Upgrade materials",
      "10-pull ticket",
      "Upgrade materials",
      "10-pull ticket x2",
      "Upgrade materials",
      "Special reward",
    ],
    h5: "Rate settings",
    lbl3: "Total 3★ rate",
    lblP: "Per pickup student",
    lbl2: "2★ rate",
    noteRates: "1★ takes the remainder. Values are percentages.",
    h6: "Log",
    pu: "PICKUP",
    noteFar: (a, b, t) =>
      `${a} more pulls to a guaranteed 3★ with a 50% pickup chance, ${b} to a guaranteed pickup.`,
    noteMid: (b, t) => `Past 100. ${b} more pulls to a guaranteed pickup.`,
    noteMax: (t) => `Next pull guarantees the ${t} pickup.`,
    tNormal: "standard",
    tLimited: "limited",
    logHit: (id, c, t) =>
      `${id} / pull ${c} — pickup obtained, ${t} charge reset`,
    log3: (id, c, r) =>
      `${id} / pull ${c} — 3★ off-pickup${r ? " — " + r : ""}`,
    logAuto: (id, n) => `Auto: ${n} pulls on ${id} to reach the pickup`,
    logPeriod: "New period — recruitment count rewards reset, charges kept",
    r200: "200 reached, pickup guaranteed",
    r100hit: "100 reached, 3★ guaranteed, pickup won",
    r100miss: "100 reached, 3★ guaranteed, pickup missed",
    langLabel: "Language",
    menuLabel: "Menu",
  },
};

const $ = {};
[
  "hName",
  "headerActions",
  "overflowBtn",
  "langMenu",
  "langTrigger",
  "langLabel",
  "langList",
  "autoBtn",
  "periodBtn",
  "resetBtn",
  "h1",
  "p1",
  "lblN",
  "tagN",
  "lblL",
  "tagL",
  "s100n",
  "s200n",
  "s100l",
  "s200l",
  "h2",
  "p2",
  "h3",
  "h4",
  "h5",
  "h6",
  "lbl3",
  "lblP",
  "lbl2",
  "noteRates",
  "banners",
  "cn",
  "cl",
  "fn",
  "fl",
  "nn",
  "nl",
  "p4",
  "bonus",
  "lastLabel",
  "slots",
  "log",
  "r3",
  "r3v",
  "rp",
  "rpv",
  "r2",
  "r2v",
].forEach((id) => {
  $[id] = document.getElementById(id);
});

function initialLang() {
  try {
    const s = localStorage.getItem("rcs-lang");
    if (s && I18N[s]) return s;
  } catch (e) {}
  const n =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    "ja";
  return n.toLowerCase().startsWith("en") ? "en" : "ja";
}
let L = initialLang();
const t = () => I18N[L];

const BANNERS = [
  { id: "A", type: "normal" },
  { id: "B", type: "normal" },
  { id: "C", type: "limited" },
  { id: "D", type: "limited" },
];
const MILESTONES = [10, 30, 60, 100, 150, 200];
const S = {
  charge: { normal: 0, limited: 0 },
  pulls: {},
  got: {},
  bonus: 0,
  log: [],
  last: null,
  lastBanner: null,
};
BANNERS.forEach((b) => {
  S.pulls[b.id] = 0;
  S.got[b.id] = 0;
});

const rates = () => ({
  three: +$.r3.value / 100,
  pick: +$.rp.value / 100,
  two: +$.r2.value / 100,
});

function pullOnce(banner) {
  const type = banner.type;
  S.charge[type] += 1;
  S.bonus += 1;
  S.pulls[banner.id] += 1;
  const c = S.charge[type],
    R = rates();
  let star = 1,
    isPU = false,
    reasonKey = "";
  if (c >= 200) {
    star = 3;
    isPU = true;
    reasonKey = "r200";
  } else if (c === 100) {
    star = 3;
    isPU = Math.random() < 0.5;
    reasonKey = isPU ? "r100hit" : "r100miss";
  } else {
    const x = Math.random();
    star = x < R.three ? 3 : x < R.three + R.two ? 2 : 1;
    if (star === 3) isPU = Math.random() < Math.min(1, R.pick / R.three);
  }
  if (isPU) {
    S.got[banner.id] += 1;
    S.charge[type] = 0;
  }
  return { star, isPU, charge: c, reasonKey };
}

function pull(banner, n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    const r = pullOnce(banner);
    res.push(r);
    if (r.isPU)
      S.log.unshift({
        k: "hit",
        id: banner.id,
        c: r.charge,
        type: banner.type,
        cls: "hit",
      });
    else if (r.star === 3)
      S.log.unshift({
        k: "g3",
        id: banner.id,
        c: r.charge,
        reasonKey: r.reasonKey,
        cls: "g3",
      });
  }
  while (S.log.length > 240) S.log.pop();
  S.last = res;
  S.lastBanner = banner;
  render();
}

function autoRun() {
  const b = BANNERS[2];
  let n = 0;
  const start = S.got[b.id];
  while (S.got[b.id] === start && n < 400) {
    pullOnce(b);
    n++;
  }
  S.log.unshift({ k: "auto", id: b.id, n, cls: "hit" });
  S.last = null;
  render();
}

function logText(l) {
  const T = t();
  if (l.k === "hit")
    return T.logHit(l.id, l.c, l.type === "normal" ? T.tNormal : T.tLimited);
  if (l.k === "g3") return T.log3(l.id, l.c, l.reasonKey ? T[l.reasonKey] : "");
  if (l.k === "auto") return T.logAuto(l.id, l.n);
  if (l.k === "period") return T.logPeriod;
  return "";
}

function note(c, typeWord) {
  const T = t();
  if (c >= 200) return T.noteMax(typeWord);
  if (c >= 100) return T.noteMid(200 - c, typeWord);
  return T.noteFar(100 - c, 200 - c, typeWord);
}

function renderStatic() {
  const T = t();
  document.documentElement.lang = L;
  document.title = T.appName;
  $.hName.innerHTML = `${T.appName}<em>${T.appSub}</em>`;
  $.autoBtn.textContent = T.auto;
  $.periodBtn.textContent = T.period;
  $.resetBtn.textContent = T.reset;
  $.h1.textContent = T.h1;
  $.p1.textContent = T.p1;
  $.lblN.textContent = T.lblN;
  $.tagN.textContent = T.tagN;
  $.lblL.textContent = T.lblL;
  $.tagL.textContent = T.tagL;
  $.s100n.innerHTML = T.s100;
  $.s200n.innerHTML = T.s200;
  $.s100l.innerHTML = T.s100;
  $.s200l.innerHTML = T.s200;
  $.h2.textContent = T.h2;
  $.p2.textContent = T.p2;
  $.h3.textContent = T.h3;
  $.h4.textContent = T.h4;
  $.h5.textContent = T.h5;
  $.h6.textContent = T.h6;
  $.lbl3.textContent = T.lbl3;
  $.lblP.textContent = T.lblP;
  $.lbl2.textContent = T.lbl2;
  $.noteRates.textContent = T.noteRates;
  $.langList.setAttribute("aria-label", T.langLabel);
  $.overflowBtn.setAttribute("aria-label", T.menuLabel);
  $.banners.innerHTML = BANNERS.map(
    (b) => `
    <div class="tile">
      <span class="lbl">${T.bannerName(b.id)}</span>
      <span class="tag ${b.type === "normal" ? "b" : "m"}">${b.type === "normal" ? T.chargeTagN : T.chargeTagL}</span>
      <div class="btnset">
        <button class="btn tert" data-b="${b.id}" data-n="1">${T.pull1}</button>
        <button class="btn" data-b="${b.id}" data-n="10">${T.pull10}</button>
      </div>
    </div>`,
  ).join("");
}

function render() {
  const T = t();
  $.cn.textContent = S.charge.normal;
  $.cl.textContent = S.charge.limited;
  $.fn.style.width = Math.min(100, S.charge.normal / 2) + "%";
  $.fl.style.width = Math.min(100, S.charge.limited / 2) + "%";
  $.nn.textContent = note(S.charge.normal, T.tNormal);
  $.nl.textContent = note(S.charge.limited, T.tLimited);

  $.p4.innerHTML = T.p4(`<b class="mono">${S.bonus}</b>`);
  $.bonus.innerHTML = MILESTONES.map(
    (n, i) =>
      `<div class="node ${S.bonus >= n ? "done" : ""}"><div class="n">${n}</div><div class="r">${T.rewards[i]}</div></div>`,
  ).join("");

  if (S.last) {
    $.lastLabel.textContent = T.lastLabel(
      S.last.length,
      T.bannerName(S.lastBanner.id),
    );
    $.slots.innerHTML = S.last
      .slice(-60)
      .map(
        (r) =>
          `<div class="slot ${r.isPU ? "pu" : "r" + r.star}"><span class="s">${"★".repeat(r.star)}</span>${r.isPU ? `<span class="pill">${T.pu}</span>` : ""}</div>`,
      )
      .join("");
  } else {
    $.lastLabel.textContent = T.noPull;
    $.slots.innerHTML = "";
  }

  $.log.innerHTML =
    S.log
      .map((l) => `<div class="${l.cls || ""}">${logText(l)}</div>`)
      .join("") || "<div>—</div>";
}

$.banners.addEventListener("click", (e) => {
  const el = e.target.closest("[data-b]");
  if (!el) return;
  pull(
    BANNERS.find((b) => b.id === el.dataset.b),
    +el.dataset.n,
  );
});

const RATE_SLIDERS = [
  ["r3", "r3v"],
  ["rp", "rpv"],
  ["r2", "r2v"],
];
function afterRates() {
  if (+$.rp.value > +$.r3.value) $.rp.value = $.r3.value;
  RATE_SLIDERS.forEach(([range, out]) => {
    $[out].textContent = $[range].value;
  });
}
RATE_SLIDERS.forEach(([range]) => {
  $[range].oninput = afterRates;
});

/* The thumb's hover state must not trigger from anywhere on the track, so
   track the pointer against the thumb's own position. */
const THUMB = 14;
function thumbCenter(el) {
  const r = el.getBoundingClientRect();
  const pct = (+el.value - +el.min) / (+el.max - +el.min);
  return r.left + THUMB / 2 + pct * (r.width - THUMB);
}
RATE_SLIDERS.forEach(([range]) => {
  const el = $[range];
  el.addEventListener("pointermove", (e) => {
    el.classList.toggle(
      "is-thumb-hover",
      Math.abs(e.clientX - thumbCenter(el)) <= THUMB,
    );
  });
  el.addEventListener("pointerleave", () =>
    el.classList.remove("is-thumb-hover"),
  );
});

$.autoBtn.onclick = () => {
  closeMenus();
  autoRun();
};
$.periodBtn.onclick = () => {
  closeMenus();
  S.bonus = 0;
  S.log.unshift({ k: "period" });
  S.last = null;
  render();
};
$.resetBtn.onclick = () => {
  closeMenus();
  S.charge = { normal: 0, limited: 0 };
  S.bonus = 0;
  S.log = [];
  S.last = null;
  BANNERS.forEach((b) => {
    S.pulls[b.id] = 0;
    S.got[b.id] = 0;
  });
  render();
};

/* ---------- Header menus ---------- */
const LANG_ITEMS = [...$.langList.querySelectorAll(".menu__item")];
LANG_ITEMS.forEach((li) => (li.tabIndex = -1));

function setLangOpen(open) {
  $.langList.hidden = !open;
  $.langTrigger.setAttribute("aria-expanded", String(open));
  if (open)
    (LANG_ITEMS.find((li) => li.dataset.value === L) || LANG_ITEMS[0]).focus();
}
function setOverflowOpen(open) {
  $.headerActions.classList.toggle("is-open", open);
  $.overflowBtn.setAttribute("aria-expanded", String(open));
}
function closeMenus() {
  setLangOpen(false);
  setOverflowOpen(false);
}
const langOpen = () => $.langTrigger.getAttribute("aria-expanded") === "true";
const overflowOpen = () =>
  $.overflowBtn.getAttribute("aria-expanded") === "true";

$.langTrigger.onclick = () => {
  const open = !langOpen();
  setOverflowOpen(false);
  setLangOpen(open);
};
$.overflowBtn.onclick = () => {
  const open = !overflowOpen();
  setLangOpen(false);
  setOverflowOpen(open);
};

$.langList.addEventListener("click", (e) => {
  const li = e.target.closest(".menu__item");
  if (li) selectLang(li.dataset.value);
});
$.langList.addEventListener("keydown", (e) => {
  const i = LANG_ITEMS.indexOf(document.activeElement);
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    const next =
      (i +
        (e.key === "ArrowDown" ? 1 : LANG_ITEMS.length - 1) +
        LANG_ITEMS.length) %
      LANG_ITEMS.length;
    LANG_ITEMS[next].focus();
  } else if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    if (i > -1) selectLang(LANG_ITEMS[i].dataset.value);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (langOpen()) {
    setLangOpen(false);
    $.langTrigger.focus();
  }
  if (overflowOpen()) {
    setOverflowOpen(false);
    $.overflowBtn.focus();
  }
});
document.addEventListener("click", (e) => {
  if (!$.langMenu.contains(e.target) && langOpen()) setLangOpen(false);
  if (
    !$.headerActions.contains(e.target) &&
    e.target !== $.overflowBtn &&
    !$.overflowBtn.contains(e.target) &&
    overflowOpen()
  )
    setOverflowOpen(false);
});

function selectLang(value) {
  const changed = value !== L;
  L = value;
  try {
    localStorage.setItem("rcs-lang", L);
  } catch (e) {}
  setLangOpen(false);
  $.langTrigger.focus();
  if (changed) {
    syncLangUI();
    renderStatic();
    render();
  }
}
function syncLangUI() {
  LANG_ITEMS.forEach((li) => {
    const on = li.dataset.value === L;
    li.setAttribute("aria-selected", String(on));
    if (on) {
      $.langLabel.textContent = li.textContent.trim();
      $.langLabel.lang = li.lang;
    }
  });
}

syncLangUI();
afterRates();
renderStatic();
render();
