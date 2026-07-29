const I18N = {
  ja: {
    appName: "募集チャージ シミュレーター",
    appSub: "2026/07/29 リニューアル仕様",
    period: "次のバナー",
    reset: "全リセット",
    h1: "呼び出しチャージ",
    p1: "通常募集と呼び出しポイントは廃止。チャージは通常と限定で共有されない。募集したバナーのPU対象を獲得した時のみリセットされ、他バナーのPU対象やPU以外の★3ではリセットされない。",
    lblN: "呼び出しチャージ",
    tagN: "通常PU A・B 共有",
    lblL: "限定・呼び出しチャージ",
    tagL: "限定PU C・D 共有",
    s100: "100<br>★3確定・PU 50%",
    s200: "200<br>PU確定",
    h7: "青輝石",
    p7: "1回募集は 120、10回募集は 1200 を消費する。所持数が足りない募集は選択できない。",
    lblBal: "所持青輝石",
    tagCost: "1回 120 / 10回 1200",
    lblStart: "初期所持数",
    lblSpent: "消費した青輝石",
    pyroLabel: "青輝石",
    pyroHint: "募集済みの分はそのまま維持される。",
    pyroPulls: (n) => `${n} 回募集した。`,
    pyroOf: (n) => `/ ${n}`,
    pyroNote: (one, ten) => `あと 1回募集 ${one} 回分、10回募集 ${ten} 回分。`,
    pyroEmpty: "青輝石が不足している。初期所持数を増やすか、全リセットする。",
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
    p4: (n) =>
      `4バナー共通で累計。募集期間の終了でカウントと報酬獲得状況がリセットされる。アーカイブ募集と有償商品での募集はカウントされない。累計 ${n} 回`,
    bonusFirst: "初回特典",
    bonusRepeat: (c) => `繰り返し特典（${c} 巡目）`,
    items: {
      bdAdv: "上級戦術教育BD選択ボックス",
      bdSup: "最上級戦術教育BD選択ボックス",
      eligma: "神名のカケラ",
      techAdv: "上級技術ノート選択ボックス",
      techSup: "最上級技術ノート選択ボックス",
      techSecret: "秘伝ノート",
      ticket10: "期間限定10回募集チケット",
      gift: "贈り物ボックス",
      giftPremium: "高級贈り物ボックス",
      keystone: "キーストーンのカケラ",
    },
    reward: (name, x) => `${name}×${x}`,
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
    period: "Next banner",
    reset: "Reset all",
    h1: "Recruitment charge",
    p1: "Standard recruitment and recruitment points are discontinued. Standard and limited charges are not shared. A charge resets only when the pulled banner's own pickup student is obtained — not for another banner's pickup, and not for an off-pickup 3★.",
    lblN: "Recruitment charge",
    tagN: "Shared by standard A and B",
    lblL: "Limited recruitment charge",
    tagL: "Shared by limited C and D",
    s100: "100<br>3★ guaranteed, 50% pickup",
    s200: "200<br>Pickup guaranteed",
    h7: "Pyroxene",
    p7: "A single pull costs 120 and a 10-pull costs 1200. Pulls you cannot afford are disabled.",
    lblBal: "Current pyroxene",
    tagCost: "120 per pull / 1200 per 10",
    lblStart: "Starting amount",
    lblSpent: "Pyroxene spent",
    pyroLabel: "Pyroxene",
    pyroHint: "Pulls already made are kept.",
    pyroPulls: (n) => `Across ${n} pull${n === 1 ? "" : "s"}.`,
    pyroOf: (n) => `/ ${n}`,
    pyroNote: (one, ten) =>
      `Enough for ${one} more single pull${one === 1 ? "" : "s"} or ${ten} 10-pull${ten === 1 ? "" : "s"}.`,
    pyroEmpty: "Not enough pyroxene. Raise the starting amount or reset.",
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
      `Accumulated across all four banners. The count and the claimed rewards reset when the recruitment period ends. Archive recruitment and paid recruitment do not count. Total ${n} pulls`,
    bonusFirst: "First-time rewards",
    bonusRepeat: (c) => `Repeat rewards (cycle ${c})`,
    items: {
      bdAdv: "Advanced Tactical Training BD Select Box",
      bdSup: "Superior Tactical Training BD Select Box",
      eligma: "Eligma",
      techAdv: "Advanced Tech Notes Select Box",
      techSup: "Superior Tech Notes Select Box",
      techSecret: "Secret Tech Notes",
      ticket10: "Limited-time 10-recruitment ticket",
      gift: "Gift Box",
      giftPremium: "Premium Gift Box",
      keystone: "Keystone Fragment",
    },
    reward: (name, x) => `${name} x${x}`,
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
  "h7",
  "p7",
  "lblBal",
  "tagCost",
  "lblStart",
  "lblSpent",
  "pyroBal",
  "pyroOf",
  "pyroSpent",
  "pyroPulls",
  "pyroStart",
  "pyroNote",
  "pyroMenu",
  "pyroTrigger",
  "pyroPanel",
  "pyroCount",
  "pyroHint",
  "fp",
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
/* 募集回数特典: the first-time track runs 10 → 390, then the repeat track
   cycles every 200 pulls starting from 410. */
const FIRST_BONUS = [
  [10, "bdAdv", 2],
  [30, "eligma", 10],
  [50, "techAdv", 5],
  [70, "ticket10", 1],
  [90, "gift", 2],
  [110, "eligma", 20],
  [130, "ticket10", 1],
  [150, "ticket10", 1],
  [170, "ticket10", 1],
  [190, "techSup", 5],
  [210, "bdAdv", 2],
  [230, "eligma", 10],
  [250, "techAdv", 5],
  [270, "ticket10", 1],
  [290, "gift", 2],
  [310, "eligma", 20],
  [330, "ticket10", 1],
  [350, "ticket10", 1],
  [370, "ticket10", 1],
  [390, "techSup", 5],
];
const REPEAT_BASE = 390;
const REPEAT_SPAN = 200;
const REPEAT_BONUS = [
  [20, "bdAdv", 1],
  [40, "techAdv", 3],
  [60, "gift", 1],
  [80, "keystone", 30],
  [100, "eligma", 10],
  [120, "techSecret", 1],
  [140, "bdSup", 1],
  [160, "giftPremium", 1],
  [180, "techSup", 3],
  [200, "eligma", 10],
];

/* Cycle 0 covers 410–590; once past its last node the next cycle is shown. */
function repeatCycle(bonus) {
  return Math.max(0, Math.ceil((bonus - REPEAT_BASE) / REPEAT_SPAN) - 1);
}
/* 青輝石: a single pull costs 120 and a 10-pull costs exactly 10x that, so
   one per-pull constant covers both. */
const PYRO_PER_PULL = 120;
const S = {
  charge: { normal: 0, limited: 0 },
  pulls: {},
  got: {},
  bonus: 0,
  pyro: { start: 12000, spent: 0 },
  log: [],
  last: null,
  lastBanner: null,
};
const balance = () => S.pyro.start - S.pyro.spent;
const affords = (n) => balance() >= n * PYRO_PER_PULL;
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
  S.pyro.spent += PYRO_PER_PULL;
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
  if (!affords(n)) return;
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

function logText(l) {
  const T = t();
  if (l.k === "hit")
    return T.logHit(l.id, l.c, l.type === "normal" ? T.tNormal : T.tLimited);
  if (l.k === "g3") return T.log3(l.id, l.c, l.reasonKey ? T[l.reasonKey] : "");
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
  $.h7.textContent = T.h7;
  $.p7.textContent = T.p7;
  $.lblBal.textContent = T.lblBal;
  $.tagCost.textContent = T.tagCost;
  $.lblStart.textContent = T.lblStart;
  $.lblSpent.textContent = T.lblSpent;
  $.pyroHint.textContent = T.pyroHint;
  $.pyroTrigger.setAttribute("aria-label", T.pyroLabel);
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

  const bal = balance();
  $.pyroBal.textContent = bal;
  $.pyroCount.textContent = bal.toLocaleString();
  $.pyroOf.textContent = T.pyroOf(S.pyro.start);
  $.pyroSpent.textContent = S.pyro.spent;
  $.pyroPulls.textContent = T.pyroPulls(S.pyro.spent / PYRO_PER_PULL);
  $.fp.style.width =
    (S.pyro.start > 0 ? Math.max(0, (bal / S.pyro.start) * 100) : 0) + "%";
  $.fp.classList.toggle("low", !affords(10));
  $.pyroNote.textContent = affords(1)
    ? T.pyroNote(Math.floor(bal / PYRO_PER_PULL), Math.floor(bal / (PYRO_PER_PULL * 10)))
    : T.pyroEmpty;
  $.banners.querySelectorAll("[data-b]").forEach((el) => {
    el.disabled = !affords(+el.dataset.n);
  });

  $.p4.innerHTML = T.p4(`<b class="mono">${S.bonus}</b>`);
  const cycle = repeatCycle(S.bonus);
  const base = REPEAT_BASE + cycle * REPEAT_SPAN;
  const node = (n, item, x, tag) =>
    `<div class="node ${S.bonus >= n ? "done" : ""}"><div class="n">${n}${tag ? `<span class="node__tag">${tag}</span>` : ""}</div><div class="r">${T.reward(T.items[item], x)}</div></div>`;
  $.bonus.innerHTML = [
    `<div class="bonus__head">${T.bonusFirst}</div>`,
    ...FIRST_BONUS.map(([n, item, x]) => node(n, item, x)),
    `<div class="bonus__head">${T.bonusRepeat(cycle + 1)}</div>`,
    ...REPEAT_BONUS.map(([offset, item, x]) =>
      node(base + offset, item, x, `${offset}`),
    ),
  ].join("");

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
  S.pyro.spent = 0;
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
function setPyroOpen(open) {
  $.pyroPanel.hidden = !open;
  $.pyroTrigger.setAttribute("aria-expanded", String(open));
  if (open) $.pyroStart.focus();
}
function closeMenus() {
  setLangOpen(false);
  setOverflowOpen(false);
  setPyroOpen(false);
}
const langOpen = () => $.langTrigger.getAttribute("aria-expanded") === "true";
const overflowOpen = () =>
  $.overflowBtn.getAttribute("aria-expanded") === "true";
const pyroOpen = () => $.pyroTrigger.getAttribute("aria-expanded") === "true";

$.langTrigger.onclick = () => {
  const open = !langOpen();
  setOverflowOpen(false);
  setPyroOpen(false);
  setLangOpen(open);
};
$.overflowBtn.onclick = () => {
  const open = !overflowOpen();
  setLangOpen(false);
  setPyroOpen(false);
  setOverflowOpen(open);
};
$.pyroTrigger.onclick = () => {
  const open = !pyroOpen();
  setLangOpen(false);
  setOverflowOpen(false);
  setPyroOpen(open);
};

/* The starting amount may be lowered below what has already been spent, so
   keep the two consistent rather than letting the balance go negative. */
$.pyroStart.oninput = () => {
  S.pyro.start = Math.max(0, Math.floor(+$.pyroStart.value || 0));
  S.pyro.spent = Math.min(S.pyro.spent, S.pyro.start);
  render();
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
  if (pyroOpen()) {
    setPyroOpen(false);
    $.pyroTrigger.focus();
  }
});
document.addEventListener("click", (e) => {
  if (!$.langMenu.contains(e.target) && langOpen()) setLangOpen(false);
  if (!$.pyroMenu.contains(e.target) && pyroOpen()) setPyroOpen(false);
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
