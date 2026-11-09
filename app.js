/* =========================================================
   Prüfungstrainer v3 — H Conseil & Formation
   Interface : malagasy + français (termes techniques en français)
   Questions : en allemand, avec petite traduction FR / MG
   ========================================================= */
const CFG = window.APP_CONFIG, CAT = window.CATALOG, POOLS = window.POOLS;
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt = s => { s=Math.max(0,Math.round(s)); return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0"); };
const LET = "abcdefghijk";
const bl = (mg, fr) => `<span class="lbl">${mg}<small>${fr}</small></span>`;
const MODS = {
  lesen:     { de:"Lesen",     mg:"Famakiana",  fr:"Compréhension écrite", ic:"📖", bg:"#fde8df" },
  hoeren:    { de:"Hören",     mg:"Fihainoana", fr:"Compréhension orale",  ic:"🎧", bg:"#e3f3ef" },
  schreiben: { de:"Schreiben", mg:"Fanoratana", fr:"Expression écrite",    ic:"✍️", bg:"#e8eefc" },
  sprechen:  { de:"Sprechen",  mg:"Fitenenana", fr:"Expression orale",     ic:"🗣️", bg:"#f1e6fb" }
};
const FOLIEN = [
  { de:"Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.", mg:"Ampahafantaro ny lohahevitrao sy ny drafitry ny kabarinao.", fr:"Présente ton thème et la structure de ta présentation." },
  { de:"Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.", mg:"Tantarao ny zavatra iainanao na traikefa momba io lohahevitra io.", fr:"Raconte ta situation ou une expérience liée au thème." },
  { de:"Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.", mg:"Lazao ny toe-javatra any Madagasikara ary omeo ohatra.", fr:"Décris la situation dans ton pays, avec des exemples." },
  { de:"Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.", mg:"Lazao ny tombony sy ny fatiantoka, ary ny hevitrao.", fr:"Avantages, inconvénients et ton opinion, avec exemples." },
  { de:"Beenden Sie Ihre Präsentation und bedanken Sie sich bei den Zuhörern.", mg:"Faranao ny kabary ary misaora ny mpihaino.", fr:"Conclus et remercie le public." }
];
const LBL = { r:"Richtig", f:"Falsch", j:"Ja", n:"Nein" };

/* ---------- stockage ---------- */
const KEY = "hcf_pruefung_v3";
let DB = { user:null, inst:"goethe", results:{}, vocab:{}, drafts:{}, notes:{}, ai:{}, tr:true };
try { const raw = localStorage.getItem(KEY); if (raw) DB = Object.assign(DB, JSON.parse(raw)); } catch(e) {}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch(e) {} }
let S = { view:"login", inst:DB.inst||"goethe", level:null, set:null, mod:null, mode:null, teil:0, answers:{}, checked:{}, plays:{}, lectureDone:{}, lectureEnd:{}, ai:{} };

/* ---------- accès ---------- */
const user = () => DB.user;
const isTrial = () => !!(user() && user().trial);
const examKey = (inst, lvl) => inst+"-"+lvl;
function hasExam(inst, lvl){
  const u=user(); if (!u) return false;
  const list = u.trial ? CFG.essai.acces : (u.acces||[]);
  return list.includes("*") || list.includes(lvl) || list.includes(examKey(inst,lvl));
}
function trialAllowed(mod, teilId){ if (!isTrial()) return true; if (S.set!==CFG.essai.set) return false; const l=CFG.essai[mod]; return Array.isArray(l)&&l.includes(teilId); }
const waLink = t => "https://wa.me/"+CFG.whatsapp+"?text="+encodeURIComponent(t);
function toast(m){ const t=document.createElement("div"); t.className="toast"; t.innerHTML=m; document.body.appendChild(t); setTimeout(()=>t.remove(),2600); }
function applyInstColors(){ const c=CAT[S.inst]; document.documentElement.style.setProperty("--inst",c.couleur); document.documentElement.style.setProperty("--instbg",c.fond); }
const trOn = () => DB.tr && S.mode!=="exam";

/* ---------- préparation des sujets ---------- */
const CACHE = {};
function hash(str){ let h=2166136261; for (const ch of str){ h^=ch.charCodeAt(0); h=Math.imul(h,16777619); } return h>>>0; }
function seededShuffle(arr, seed){ const a=arr.slice(); let s=seed; for(let i=a.length-1;i>0;i--){ s=(Math.imul(s,1103515245)+12345)>>>0; const j=s%(i+1); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function fixLetters(s, map){
  if (!s) return s;
  return s.replace(/→ <b>([abc])<\/b>/g,(m,l)=>"→ <b>"+map[l]+"</b>").replace(/→ ([abc])(?=[\s.,;]|$)/g,(m,l)=>"→ "+map[l])
          .replace(/(^|[\s(>])([abc])\)/g,(m,p,l)=>p+map[l]+")").replace(/\bny ([abc])([:\s])/g,(m,l,e)=>"ny "+map[l]+e);
}
function allItems(t){ return t.clips ? t.clips.flatMap(c=>c.items) : (t.items||[]); }
function rebalance(set){
  if (set.noRebalance) return;
  ["lesen","hoeren"].forEach(mod => (set[mod]?set[mod].teile:[]).forEach(t => {
    if (t.noShuffle) return;
    const mcs = allItems(t).filter(it => (it.type||t.type)==="mc" && it.opts && it.opts.length===3);
    const targets = seededShuffle(mcs.map((_,i)=>"abc"[i%3]), hash(set.id+t.id));
    mcs.forEach((it,i) => {
      const tgt=targets[i]; if (tgt===it.a) return;
      const ci="abc".indexOf(it.a), order=[0,1,2].filter(k=>k!==ci), ti="abc".indexOf(tgt);
      order.splice(ti,0,ci);
      const map={}; order.forEach((old,nw)=>{ map["abc"[old]]="abc"[nw]; });
      it.opts=order.map(k=>it.opts[k]); if (it.otr) it.otr=order.map(k=>it.otr[k]); it.a=tgt;
      if (it.exp){ it.exp.mg=fixLetters(it.exp.mg,map); it.exp.fr=fixLetters(it.exp.fr,map); }
    });
  }));
}
function variantAT(obj){
  const SKIP=new Set(["script","partenaire","partenaire_presentation","question_pour_toi","id","tr","otr"]);
  const tr=s=>window.VARIANT_AT.reduce((a,[x,y])=>a.split(x).join(y),s);
  const walk=o=>{ if (Array.isArray(o)) return o.map(walk); if (o&&typeof o==="object"){ const r={}; for (const k in o) r[k]=SKIP.has(k)?o[k]:walk(o[k]); return r; } return typeof o==="string"?tr(o):o; };
  return walk(obj);
}
function applyTR(set){
  const T=(window.TR||{})[set.id]; if (!T) return;
  const put=(mod,key)=>{ if (!set[mod]) return; set[mod].teile.forEach(t=>{ allItems(t).forEach(it=>{ const x=(T[key]||{})[it.n]; if (!x) return; it.tr=[x[0],x[1]]; if (x[2]) it.otr=x[2]; }); const c=(T.X||{})[key+t.id]; if (c) t.xtr=c; }); };
  put("lesen","L"); put("hoeren","H");
  if (T.sprechen) set.sprechen.teile.forEach(t=>{ const x=T.sprechen[t.id]; if (x) Object.assign(t,x); });
  if (T.vocab) set.vocab=set.vocab.concat(T.vocab);
}
function getSet(id){
  const lv=CAT[S.inst].niveaux[S.level], k=S.inst+"|"+S.level+"|"+id;
  if (CACHE[k]) return CACHE[k];
  let s=JSON.parse(JSON.stringify(POOLS[lv.pool].sets.find(x=>x.id===id)));
  applyTR(s);
  const P=POOLS[lv.pool];
  if (P.ctr) ["lesen","hoeren","sprechen"].forEach(m=>(s[m]?s[m].teile:[]).forEach(t=>{ if (!t.ctr&&P.ctr[t.id]) t.ctr=P.ctr[t.id]; }));
  if (lv.variant==="at") s=variantAT(s);
  rebalance(s); CACHE[k]=s; return s;
}
const curSet = () => getSet(S.set);
const pool = () => POOLS[CAT[S.inst].niveaux[S.level].pool];
const resKey = () => examKey(S.inst,S.level)+"|"+S.set;
const res = mod => ((DB.results[resKey()]||{})[mod]) || null;
function setRes(mod,obj){ const k=resKey(); DB.results[k]=DB.results[k]||{}; DB.results[k][mod]=Object.assign({date:new Date().toISOString().slice(0,10)},obj); save(); syncSoon(); }
const examTitle = () => CAT[S.inst].niveaux[S.level].titre;
const modsOf = set => ["lesen","hoeren","schreiben","sprechen"].filter(m=>set[m]);

/* ---------- timers & navigation ---------- */
function stopTimer(){ if (S.timer) clearInterval(S.timer); S.timer=null; }
function startTimer(min,onEnd){ stopTimer(); S.timeLeft=min*60; const tick=()=>{ const el=$("#timer"); if (el){ el.textContent="⏱ "+fmt(S.timeLeft); el.classList.toggle("warn",S.timeLeft<300); } if (S.timeLeft<=0){ stopTimer(); onEnd&&onEnd(); return; } S.timeLeft--; }; tick(); S.timer=setInterval(tick,1000); }
function go(view,extra){ stopTimer(); Audio2.stop(); Rec.stop(); clearInterval(S._ring); S._timerKey=null; Object.assign(S,{view},extra||{}); render(); window.scrollTo(0,0); }
function topbar(right){ return `<div class="top"><div class="in"><div class="logo"><i>H</i><div>Prüfungstrainer<small>${esc(CFG.brand)}</small></div></div><div class="sp"></div>${right||""}</div></div>`; }
const backBtn = (l,fn) => `<button class="back" onclick="${fn}">← ${l}</button>`;
function modal(html){ closeModal(); const m=document.createElement("div"); m.className="modal"; m.id="modal"; m.innerHTML=`<div class="card">${html}</div>`; m.onclick=e=>{if(e.target===m)closeModal();}; document.body.appendChild(m); }
function closeModal(){ const m=$("#modal"); if (m) m.remove(); }
function ctaBox(txt){ return `<div class="cta"><p>${txt}</p><a class="btn wa" target="_blank" rel="noopener" href="${waLink("Salama, te hisoratra amin'ny Prüfungstrainer aho (fanadinana: ...)")}">Hisoratra anarana · S'inscrire</a></div>`; }
function lockedModal(){ modal(`<h3>🔒 Ho an'ny mpikambana ihany</h3><p class="muted">Ity ampahany ity dia ao anatin'ny fidirana feno.<br><span class="fr">Réservé aux membres (accès complet).</span></p><div class="row"><a class="btn wa" target="_blank" rel="noopener" href="${waLink("Salama, te hahazo fidirana feno amin'ny Prüfungstrainer aho.")}">Hisoratra anarana</a><button class="btn ghost" onclick="closeModal()">Hidy · Fermer</button></div>`); }
const bi = o => o ? `<div class="mgl">🇲🇬 ${o.mg||""}</div>${o.fr?`<div class="frl">🇫🇷 ${o.fr}</div>`:""}` : "";
const trLine = t => (t && trOn()) ? `<div class="trl">🇫🇷 <i>${esc(t[0])}</i>${t[1]?` · 🇲🇬 <i>${esc(t[1])}</i>`:""}</div>` : "";
function trToggle(){ return S.mode==="exam" ? `<span class="pill">🚫 Tsy misy dikanteny · Sans traduction (examen)</span>` : `<button class="trtoggle ${DB.tr?"on":""}" onclick="DB.tr=!DB.tr;save();render()">🌐 ${DB.tr?"Dikanteny: MISOKATRA · Traductions ON":"Dikanteny: MIHIDY · Traductions OFF"}</button>`; }

/* =========================================================
   LOGIN
   ========================================================= */
function vLogin(){
  return `<div class="login"><div class="box">
    <div class="logo"><i>H</i><div>${esc(CFG.brand)}<small>Fiomanana amin'ny fanadinana alemana · Préparation aux examens</small></div></div>
    <h1>Miomàna toy ny amin'ny andro fanadinana.</h1>
    <p class="muted">Examens blancs Goethe sy ÖSD (A1 → B2), fanazavana amin'ny teny malagasy sy frantsay, astuces ary voambolana.</p>
    <div class="badges" style="margin:10px 0 4px"><span class="pill o">A1</span><span class="pill o">A2</span><span class="pill o">B1</span><span class="pill o">B2</span><span class="pill g">Goethe</span><span class="pill r">ÖSD</span></div>
    <form class="card" style="margin-top:16px" onsubmit="event.preventDefault();doLogin()">
      <label class="field"><span>ID mpianatra · Identifiant</span><input id="lid" autocomplete="username" placeholder="ohatra: HG-B1-01" autocapitalize="characters"></label>
      <label class="field"><span>Teny miafina · Mot de passe</span><input id="lpw" type="password" autocomplete="current-password"></label>
      <div class="err" id="lerr"></div>
      <button class="btn" id="lbtn" style="width:100%">Hiditra · Connexion</button>
      <button type="button" class="btn ghost" style="width:100%;margin-top:8px" onclick="doTrial()">Andramana maimaim-poana · Essai gratuit</button>
    </form>
    <p class="small muted center" style="margin-top:14px">Mbola tsy manana kaonty? <a href="${waLink("Salama, te hisoratra amin'ny Prüfungstrainer aho (fanadinana: ...)")}" target="_blank" rel="noopener">Hisoratra anarana amin'ny WhatsApp</a></p>
  </div></div>`;
}
function doTrial(){ DB.user={id:"ESSAI",nom:"Vahiny",trial:true}; DB.token=null; save(); go("home"); }

/* =========================================================
   ACCUEIL
   ========================================================= */
function vHome(){
  const u=user(), C=CAT[S.inst];
  const sw=Object.entries(CAT).map(([k,c])=>`<button class="instb ${k===S.inst?"on":""}" style="--c:${c.couleur};--cb:${c.fond}" onclick="S.inst=DB.inst='${k}';save();render()"><b>${esc(c.court)}</b><span>${esc(c.desc_mg)}</span><span>${esc(c.desc_fr)}</span></button>`).join("");
  const tiles=Object.entries(C.niveaux).map(([lv,L])=>{
    const open=hasExam(S.inst,lv), P=L.pool&&POOLS[L.pool], ready=!!(P&&P.sets.length);
    const st=!open?`<span class="pill">Tsy tafiditra · Non inclus</span>`:!ready?`<span class="pill o">Ho avy · Bientôt</span>`:`<span class="pill g">Misokatra · Ouvert</span>`;
    return `<button class="lvl ${open&&ready?"":"locked"}" onclick="openLevel('${lv}')"><span class="lock">${!open?"🔒":!ready?"⏳":""}</span><span class="code">${lv}</span><b class="small">${esc(L.titre)}</b><span class="small muted">${ready?P.sets.length+" Modellsatz / examen blanc":""}</span><span style="margin-top:auto">${st}</span></button>`;
  }).join("");
  return topbar(`${isAdmin()?`<button class="btn sm" onclick="AD.list=null;go('admin')">🛠️ Admin</button>`:""}<button class="btn ghost sm" onclick="logout()">Hivoaka</button>`)+`<div class="wrap">
    <div class="hero"><h1>Salama ${esc(u.nom)} 👋</h1>
    <p>${isTrial()?"Ianao dia ao amin'ny <b>andramana</b> (essai) : misokatra ny ampahany amin'ny B1.":`Ny fidiranao (accès) : <b>${(u.acces||[]).join(", ")}</b>${u.fin?` · hatramin'ny ${u.fin}`:""}`}</p></div>
    <div class="sec"><h2>1 · Safidio ny fanadinana</h2><span class="fr">Choisis l'institut</span></div>
    <div class="instsw">${sw}</div>
    <div class="sec"><h2>2 · Safidio ny ambaratonga</h2><span class="fr">Choisis le niveau</span></div>
    <div class="grid g2 g4">${tiles}</div>
    ${isTrial()?ctaBox("Te hanokatra ny zava-drehetra? · Débloque tous les examens blancs, corrigés et vocabulaire."):""}
    <div class="sec"><h2>Ahoana no fampiasana azy</h2><span class="fr">Mode d'emploi</span></div>
    <div class="grid g3">
      <div class="card"><b>1 · Guide 🧭</b><p class="small muted" style="margin:4px 0 0">Fantaro ny format sy ny fandrika. · Format et pièges de chaque partie.</p></div>
      <div class="card"><b>2 · Entraînement 💪</b><p class="small muted" style="margin:4px 0 0">Teil tsirairay, misy correction sy fanazavana avy hatrany.</p></div>
      <div class="card"><b>3 · Examen blanc 🏁</b><p class="small muted" style="margin:4px 0 0">Toy ny tena izy : chrono, écoutes limitées, naoty /100.</p></div>
    </div>
    <p class="foot">Fitaovana fiomanana tsy miankina. Tsy fampiharana ofisialin'ny Goethe-Institut na ny ÖSD. · Outil indépendant, non officiel.</p></div>`;
}
function openLevel(lv){
  const L=CAT[S.inst].niveaux[lv], P=L.pool&&POOLS[L.pool];
  if (!hasExam(S.inst,lv)){ modal(`<h3>${esc(L.titre)} 🔒</h3><p class="muted">Tsy tafiditra ao amin'ny fidiranao.<br><span class="fr">Non inclus dans ton accès.</span></p><div class="row"><a class="btn wa" target="_blank" rel="noopener" href="${waLink("Salama, te hanampy "+L.titre+" amin'ny fidirako aho.")}">Hangataka fidirana</a><button class="btn ghost" onclick="closeModal()">Hidy</button></div>`); return; }
  if (!P||!P.sets.length){ modal(`<h3>${esc(L.titre)} ⏳</h3><p class="muted">Eo am-panomanana. · En préparation.</p><button class="btn" onclick="closeModal()">OK</button>`); return; }
  go("level",{level:lv,set:isTrial()?CFG.essai.set:P.sets[0].id});
}

/* =========================================================
   TABLEAU DU NIVEAU
   ========================================================= */
function vLevel(){
  const P=pool(), set=curSet(), mods=modsOf(set);
  const sets=P.sets.map(s=>{ const r=DB.results[examKey(S.inst,S.level)+"|"+s.id]||{}; const n=mods.filter(m=>r[m]).length; const lock=isTrial()&&s.id!==CFG.essai.set;
    return `<button class="setc ${s.id===S.set?"on":""}" onclick="${lock?"lockedModal()":`S.set='${s.id}';render()`}"><b>${lock?"🔒 ":""}${esc(s.titre)}</b><span>${esc(s.theme||"")}</span><span>${n}/${mods.length} vita · fait</span></button>`; }).join("");
  const tiles=mods.map(k=>{ const m=MODS[k], r=res(k), locked=isTrial()&&!(k==="lesen"||k==="hoeren");
    const sc=r?`<span class="small" style="font-weight:700;color:${r.score>=60?"var(--teal)":"var(--red)"}">Naoty farany · Dernière note : ${r.score}/100</span>`:`<span class="small muted">Mbola tsy natao · Pas encore fait</span>`;
    const tm=set[k].temps?` · ${set[k].temps} min`:"";
    return `<div class="mod ${locked?"locked":""}"><div class="row"><div class="ic" style="background:${m.bg}">${m.ic}</div><div><h3>${m.de}</h3><span class="small muted">${m.mg} · ${m.fr}${tm}</span></div></div>${sc}
      <div class="row" style="margin-top:auto"><button class="btn sm" onclick="startMod('${k}','train')">${locked?"🔒 ":""}${k==="sprechen"?"Hanomboka 🎤":"Entraînement"}</button>
      ${k!=="sprechen"?`<button class="btn sm ghost" onclick="startMod('${k}','exam')">${locked?"🔒 ":""}Examen blanc</button>`:""}</div></div>`; }).join("");
  return topbar(`<button class="btn ghost sm" onclick="logout()">Hivoaka</button>`)+`<div class="wrap">${backBtn("Ambaratonga · Niveaux","go('home')")}
    <div class="hero"><div class="badges"><span class="pill i">${esc(CAT[S.inst].nom)}</span><span class="pill">${S.level}</span></div>
      <h1 style="margin-top:8px">${esc(examTitle())}</h1><p>${P.info.reussite.mg}</p><p class="fr">${P.info.reussite.fr}</p></div>
    <div class="sec"><h2>Modellsätze · examens blancs</h2><span class="fr">${P.sets.length} disponible(s)</span></div>
    <div class="tabs">${sets}</div>
    <div class="grid g2">${tiles}</div>
    <div class="card" style="margin-top:12px"><b>📊 Naoty ankapobeny · Bilan ${esc(set.titre)}</b>
      <div class="grid g4" style="margin-top:10px">${mods.map(m=>{ const r=res(m); return `<div><div class="small muted">${MODS[m].de}</div><div style="font:800 22px 'Bricolage Grotesque';color:${r?(r.score>=60?"var(--teal)":"var(--red)"):"var(--muted)"}">${r?r.score:"–"}</div></div>`; }).join("")}</div>
      <p class="small muted" style="margin:8px 0 0">Tanjona · Objectif : 60 % isaky ny module. Sprechen = auto-évaluation.</p></div>
    <div class="sec"><h2>Hianatra</h2><span class="fr">Apprendre</span></div>
    <div class="grid g3">
      <button class="mod" onclick="go('guide')"><div class="ic" style="background:#fdf0dc">🧭</div><h3>Guide & astuces</h3><span class="small muted">Format, timing, fandrika · pièges</span></button>
      <button class="mod" onclick="go('vocab',{vmode:'cards',vi:0,vsrc:'set'})"><div class="ic" style="background:#e3f3ef">🃏</div><h3>Voambolana</h3><span class="small muted">${set.vocab.length} + ${(P.vocabOfficiel||[]).length} teny · DE / MG / FR</span></button>
      <button class="mod" onclick="go('results')"><div class="ic" style="background:#e8eefc">📊</div><h3>Ny vokatro</h3><span class="small muted">Résultats</span></button>
    </div>
    ${isTrial()?ctaBox("Andramana : Modellsatz 1 ihany (Lesen Teil 1 sy Hören Teil 1)."):""}</div>`;
}
function startMod(mod,mode){
  if (isTrial()&&(!(mod==="lesen"||mod==="hoeren")||mode==="exam")){ lockedModal(); return; }
  const set=curSet();
  if (mod==="lesen"||mod==="hoeren"){
    const tl=set[mod].teile, start=isTrial()?Math.max(0,tl.findIndex(t=>trialAllowed(mod,t.id))):0;
    go("run",{mod,mode,teil:start,answers:{},checked:{},plays:{},lectureDone:{},lectureEnd:{},ai:{}});
    if (mode==="exam") startTimer(set[mod].temps,()=>finishExam(true));
  } else if (mod==="schreiben"){ go("write",{teil:0,mode,showModel:false,fchk:{}}); if (mode==="exam") startTimer(set.schreiben.temps,()=>{ toast("⏰ Tapitra ny fotoana!"); finishWriteExam(); }); }
  else go("speak",{mode:"train",sp:{teil:null,step:0,theme:null,eval:{},show:{}}});
}

/* =========================================================
   LESEN / HÖREN
   ========================================================= */
function itemsOf(t){ return t.clips ? t.clips.flatMap(c=>c.items.map(it=>Object.assign({type:it.type||t.type},it))) : t.items.map(it=>Object.assign({type:t.type},it)); }
function findItem(n){ for (const t of curSet()[S.mod].teile){ const it=itemsOf(t).find(x=>x.n===n); if (it) return {it,t}; } }
const choixOf = t => t.choix || t.annonces || {};
const norm = s => String(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss").replace(/[^a-z0-9]/g,"");
function itemScore(it){
  const g=S.answers[it.n];
  if (it.type==="fill") return (g&&[].concat(it.a).some(a=>norm(a)===norm(g)))?1:0;
  if (it.type==="multi"){ const sel=g||[], hits=sel.filter(x=>it.a.includes(x)).length, wrong=sel.length-hits; return Math.max(0,hits-wrong)/it.a.length; }
  return g===it.a?1:0;
}
const scoreTeil = t => itemsOf(t).reduce((a,it)=>a+itemScore(it),0);
const answered = it => { const g=S.answers[it.n]; return Array.isArray(g)?g.length>0:(g!=null&&g!==""); };

function vRun(){
  const M=curSet()[S.mod], teil=M.teile[S.teil], exam=S.mode==="exam";
  const tabs=M.teile.map((t,i)=>{ const ok=trialAllowed(S.mod,t.id), an=itemsOf(t).some(answered); return `<button class="tab ${i===S.teil?"on":""}" onclick="${ok?`S.teil=${i};render();scrollTo(0,0)`:"lockedModal()"}">${ok?"":"🔒 "}${t.nom}${an&&!S.checked[t.id]?'<span class="dot"></span>':""}</button>`; }).join("");
  const right=exam?`<span class="timer" id="timer">⏱ --:--</span>`:(teil.temps?`<span class="pill">≈ ${teil.temps} min</span>`:"");
  let body=`<div class="instr">${esc(teil.consigne)}${trOn()&&teil.ctr?`<div class="ctr">🇫🇷 ${esc(teil.ctr[0])}<br>🇲🇬 ${esc(teil.ctr[1])}</div>`:""}</div>`;
  if (teil.contexte) body+=`<p class="ctx">${esc(teil.contexte)}</p>${trLine(teil.xtr)}`;
  body+= S.mod==="lesen" ? lesenBody(teil) : hoerenBody(teil);
  const total=itemsOf(teil).length, nAll=M.teile.reduce((a,t)=>a+itemsOf(t).length,0), nAns=M.teile.reduce((a,t)=>a+itemsOf(t).filter(answered).length,0);
  const checked=S.checked[teil.id];
  const bar=exam
    ? `<span class="small muted">${nAns} / ${nAll} voavaly</span><div class="sp"></div>${S.teil>0?`<button class="btn ghost sm" onclick="S.teil--;render();scrollTo(0,0)">←</button>`:""}${S.teil<M.teile.length-1?`<button class="btn sm" onclick="S.teil++;render();scrollTo(0,0)">Manaraka · Suivant →</button>`:`<button class="btn acc sm" onclick="confirmFinish()">Hamarana · Terminer</button>`}`
    : `<span class="small muted">${checked?(Math.round(scoreTeil(teil)*10)/10)+" / "+total+" marina":"Valio dia hamarino"}</span><div class="sp"></div>${checked?`<button class="btn ghost sm" onclick="resetTeil()">Averina</button>${nextTeilBtn()}`:`<button class="btn teal" onclick="checkTeil()">Hamarino · Corriger ✓</button>`}`;
  return topbar(right)+`<div class="wrap">${backBtn("Hiala · Quitter",exam?"confirmQuit()":"go('level')")}
    <div class="row"><span class="pill i">${esc(CAT[S.inst].court)} ${S.level}</span><span class="pill">${esc(curSet().titre)}</span><div class="sp"></div>${trToggle()}</div>
    <h2 class="disp" style="font-size:22px;margin-top:6px">${MODS[S.mod].de} · ${exam?"Examen blanc":S.mode==="review"?"Correction":"Entraînement"}</h2>
    <div class="tabs" style="margin-top:10px">${tabs}</div>${body}</div><div class="bar"><div class="in">${bar}</div></div>`;
}
function nextTeilBtn(){ const M=curSet()[S.mod], n=S.teil+1;
  if (n<M.teile.length&&trialAllowed(S.mod,M.teile[n].id)) return `<button class="btn sm" onclick="S.teil=${n};render();scrollTo(0,0)">Manaraka →</button>`;
  if (isTrial()) return `<button class="btn wa sm" onclick="lockedModal()">Hanokatra ny ambiny</button>`;
  return `<button class="btn sm" onclick="go('level')">Vita ✓</button>`; }
function qBlock(it, t){
  let opts="";
  const ch=(v,label,cls,sty)=>`<button class="chip ${cls||""}" ${sty?`style="${sty}"`:""} data-q="${it.n}" data-v="${v}" onclick="pick(${it.n},'${v}')">${label}</button>`;
  if (it.type==="rf"||it.type==="jn"){ const v=it.type==="rf"?["r","f"]:["j","n"]; opts=`<div class="opts inline">${v.map(x=>ch(x,LBL[x],"","min-width:96px")).join("")}</div>`; }
  else if (it.type==="mc"){ const L=it.letters||LET; opts=`<div class="opts">${it.opts.map((o,i)=>`<button class="opt" data-q="${it.n}" data-v="${L[i]}" onclick="pick(${it.n},'${L[i]}')"><b>${L[i]}</b><span>${esc(o)}${trOn()&&it.otr&&it.otr[i]?`<span class="otr">🇫🇷 ${esc(it.otr[i][0])} · 🇲🇬 ${esc(it.otr[i][1])}</span>`:""}</span></button>`).join("")}</div>`; }
  else if (it.type==="match"){ const ks=Object.keys(choixOf(t)).filter(k=>!(t.exemple&&k===t.exemple.a&&!t.exempleReuse)).concat(t.zero===false||!("zero" in t)&&!t.annonces?[]:["0"]); opts=`<div class="opts inline">${ks.map(k=>ch(k,k==="0"?"0 / X":k)).join("")}</div>`; }
  else if (it.type==="who"){ opts=`<div class="opts inline">${Object.entries(t.personnes).map(([k,p])=>ch(k,`${k} · ${esc(p)}`)).join("")}</div>`; }
  else if (it.type==="multi"){ opts=`<div class="opts inline">${it.opts.map((o,i)=>ch(LET[i],esc(o),"multi")).join("")}</div><div class="small muted" style="margin-top:4px">${it.hint||"Mety maromaro ny valiny · Plusieurs réponses possibles"}</div>`; }
  else if (it.type==="fill"){ opts=`<div class="fillin">${it.label?`<b class="small">${esc(it.label)}</b>`:""}<input data-fill="${it.n}" placeholder="${esc(it.ph||"…")}" value="${esc(S.answers[it.n]||"")}" oninput="S.answers[${it.n}]=this.value"></div>`; }
  const head = it.type==="jn"&&it.nom
    ? `<div class="qh"><div class="qn">${it.n}</div><div class="qt"><div class="cmt" style="margin:0"><div class="who">${esc(it.nom)}</div>${esc(it.q)}</div><div class="small muted" style="margin-top:6px">${esc(t.jnq||("Ist "+it.nom.split(",")[0]+" für ein Verbot?"))}</div>${trLine(it.tr)}</div></div>`
    : `<div class="qh"><div class="qn">${it.n}</div><div class="qt">${it.q?esc(it.q):""}${trLine(it.tr)}</div></div>`;
  return `<div class="q" id="q${it.n}">${head}${opts}<div class="expbox"></div></div>`;
}
function exampleBlock(t){
  const e=t.exemple; if (!e) return "";
  if (e.nom) return `<div class="q ex"><div class="qh"><div class="qn">0</div><div class="qt"><div class="small muted">Beispiel · Ohatra · Exemple</div><div class="cmt"><div class="who">${esc(e.nom)}</div>${esc(e.texte)}</div><span class="chip ok">${esc(e.a)}</span></div></div></div>`;
  const ans = e.opts ? e.opts.map((o,i)=>`<div class="opt ${LET[i]===e.a?"ok":""}" style="pointer-events:none"><b>${LET[i]}</b><span>${esc(o)}</span></div>`).join("") : `<span class="chip ok">${esc(e.a)}</span>`;
  return `<div class="q ex"><div class="qh"><div class="qn">0</div><div class="qt"><div class="small muted">Beispiel · Ohatra · Exemple</div>${esc(e.q)}</div></div><div class="opts ${e.opts?"":"inline"}">${ans}</div></div>`;
}
function choixHtml(t){ const C=choixOf(t); return `<div class="paper">${t.choixTitre?`<h3 style="font-size:16px;margin-bottom:8px">${esc(t.choixTitre)}</h3>`:""}<div class="ads">${Object.entries(C).map(([k,v])=>`<div class="ad ${t.exemple&&k===t.exemple.a&&!t.exempleReuse?"used":""}"><span class="l">${k}</span>${v}</div>`).join("")}</div></div>`; }
function lesenBody(t){
  const items=itemsOf(t).map(it=>qBlock(it,t)).join("");
  const txt=t.texte?`<div class="paper ${t.gap?"gaptext":""}">${t.texte}</div>`:"";
  if (t.type==="match"||t.choix||t.annonces){
    if (t.layout==="choixFirst") return choixHtml(t)+exampleBlock(t)+items+txt;
    return txt+exampleBlock(t)+items+choixHtml(t);
  }
  if (t.layout==="textAfter") return exampleBlock(t)+items+txt;
  return txt+exampleBlock(t)+items;
}
function hoerenBody(t){
  const exam=S.mode==="exam";
  let h=`<p class="small muted">${t.ecoutes===2?"🔁 Indroa no henoinao · Tu entends 2 fois.":"1️⃣ Indray mandeha ihany · Tu entends 1 seule fois."} ${exam?"":"(Entraînement : azonao henoina imbetsaka.)"}</p>`;
  if (t.lecture&&exam&&!S.lectureDone[t.id]){
    if (!S.lectureEnd[t.id]) S.lectureEnd[t.id]=Date.now()+t.lecture*1000;
    const left=Math.max(0,Math.ceil((S.lectureEnd[t.id]-Date.now())/1000));
    h+=`<div class="countdown"><span style="flex:1">📖 Temps de lecture : <b id="cdt">${left}</b> s — vakio aloha ny fanontaniana.</span><button class="btn sm ghost" onclick="S.lectureDone['${t.id}']=true;render()">Dinganina · Passer</button></div>`;
    setTimeout(()=>lectureCountdown(t),30);
  }
  if (t.choix&&!t.choixAfter) h+=choixHtml(t);
  if (t.exemple) h+=exampleBlock(t);
  t.clips.forEach(c=>{
    if (t.clips.length>1) h+=`<h3 style="margin-top:20px;font-size:17px">${esc(c.titre)}</h3>`;
    h+=playerHtml(c,t)+c.items.map(it=>qBlock(Object.assign({type:it.type||t.type},it),t)).join("");
    if (S.checked[t.id]) h+=`<details><summary>Transcription · ${esc(c.titre)}</summary><div class="in transcript">${c.script.map(l=>`<p><b>${esc(l.n)}:</b> ${esc(l.t)}</p>`).join("")}</div></details>`;
  });
  if (t.choix&&t.choixAfter) h+=choixHtml(t);
  return h;
}
function lectureCountdown(t){ clearInterval(S._lv); if (S.lectureDone[t.id]) return; S._lv=setInterval(()=>{ const el=$("#cdt"); if (!el||S.view!=="run"){clearInterval(S._lv);return;} const left=Math.ceil((S.lectureEnd[t.id]-Date.now())/1000); if (left<=0){clearInterval(S._lv);S.lectureDone[t.id]=true;render();return;} el.textContent=left; },250); }
function playerHtml(c,t){ const exam=S.mode==="exam", used=S.plays[c.id]||0, max=t.ecoutes, blocked=exam&&(used>=max||(t.lecture&&!S.lectureDone[t.id]));
  return `<div class="player ${Audio2.cur===c.id?"on":""}" id="pl-${c.id}"><button class="pb" ${blocked?"disabled":""} onclick="playClip('${c.id}')">${Audio2.cur===c.id?"■":"▶"}</button><div class="meta"><b>${esc(c.titre)}</b><span>${exam?`Écoute ${Math.min(used,max)}/${max}${used>=max?" · vita":""}`:`Henoina · écoutes : ${used}`}</span></div><div class="wave"><i></i><i></i><i></i><i></i><i></i></div></div>`; }
function findClip(id){ for (const t of curSet().hoeren.teile) for (const c of t.clips) if (c.id===id) return {c,t}; }
function playClip(id){ const {c,t}=findClip(id); if (Audio2.cur===id){ Audio2.stop(); refreshPlayer(id); return; } if (S.mode==="exam"&&(S.plays[id]||0)>=t.ecoutes) return; S.plays[id]=(S.plays[id]||0)+1; Audio2.play(id,"audio/"+id+".mp3",c.script,()=>{ if (S.view==="run") refreshPlayer(id); }); refreshPlayer(id); }
function refreshPlayer(id){ const {c,t}=findClip(id), el=$("#pl-"+id); if (el){ const d=document.createElement("div"); d.innerHTML=playerHtml(c,t); el.replaceWith(d.firstElementChild); } }
function pick(n,v){ const {it,t}=findItem(n); if (S.checked[t.id]) return;
  if (it.type==="multi"){ const a=S.answers[n]||[]; S.answers[n]=a.includes(v)?a.filter(x=>x!==v):a.concat([v]); } else S.answers[n]=v; paintQ(n); }
function paintQ(n){ const b=$("#q"+n); if (!b) return; const g=S.answers[n]; b.querySelectorAll("[data-q]").forEach(x=>x.classList.toggle("sel",Array.isArray(g)?g.includes(x.dataset.v):x.dataset.v===g)); }
function paintAll(){ const t=curSet()[S.mod].teile[S.teil]; itemsOf(t).forEach(it=>{ paintQ(it.n); if (S.checked[t.id]) paintCorrection(it); }); }
function rightLabel(it){
  if (it.type==="mc") return it.a+") "+it.opts[(it.letters||LET).indexOf(it.a)];
  if (it.type==="fill") return [].concat(it.a)[0];
  if (it.type==="multi") return it.a.map(l=>it.opts[LET.indexOf(l)]).join(", ");
  return LBL[it.a]||it.a;
}
function paintCorrection(it){
  const b=$("#q"+it.n); if (!b) return;
  const sc=itemScore(it), ok=sc===1, g=S.answers[it.n], none=!answered(it);
  if (it.type==="fill"){ const inp=b.querySelector("input"); if (inp){ inp.disabled=true; inp.classList.add(ok?"ok":"ko"); } }
  else b.querySelectorAll("[data-q]").forEach(x=>{ x.classList.remove("sel"); const v=x.dataset.v, isA=Array.isArray(it.a)?it.a.includes(v):v===it.a, isG=Array.isArray(g)?g.includes(v):v===g; if (isA) x.classList.add("ok"); else if (isG) x.classList.add("ko"); x.style.pointerEvents="none"; });
  const aiOn=CFG.gemini&&!isTrial();
  b.querySelector(".expbox").innerHTML=`<div class="exp"><span class="v" style="color:${ok?"var(--teal)":sc>0?"#a8640a":"var(--red)"}">${ok?"✓ Marina · Juste":none?"— Tsy namaly · Sans réponse":sc>0?"◐ Ampahany · Partiel":"✗ Diso · Faux"}</span>${ok?"":`Valiny marina · Bonne réponse : <b>${esc(rightLabel(it))}</b>`}${bi(it.exp)}
    ${aiOn?`<div style="margin-top:8px"><button class="btn ai sm" onclick="aiExplain(${it.n})">🤖 Hazavao bebe kokoa (Gemini)</button></div><div id="ai${it.n}">${S.ai[it.n]?aiHtml(S.ai[it.n]):""}</div>`:""}</div>`;
}
function checkTeil(){
  const t=curSet()[S.mod].teile[S.teil], items=itemsOf(t), miss=items.filter(it=>!answered(it)).length;
  if (miss&&!S._cm){ S._cm=true; toast(miss+" tsy voavaly · sans réponse — tsindrio indray « Corriger »."); return; }
  S._cm=false; S.checked[t.id]=true; Audio2.stop(); render();
  const sc=scoreTeil(t); toast((Math.round(sc*10)/10)+" / "+items.length+" — "+(sc/items.length>=.6?"Tsara be! 🎉":"Vakio ny fanazavana 👇"));
}
function resetTeil(){ const t=curSet()[S.mod].teile[S.teil]; itemsOf(t).forEach(it=>{delete S.answers[it.n];delete S.ai[it.n];}); delete S.checked[t.id]; (t.clips||[]).forEach(c=>delete S.plays[c.id]); render(); scrollTo(0,0); }
function confirmQuit(){ modal(`<h3>Hiala? · Quitter ?</h3><p class="muted">Tsy ho voatahiry ny valinao. · Tes réponses ne seront pas enregistrées.</p><div class="row"><button class="btn acc" onclick="closeModal();go('level')">Hiala</button><button class="btn ghost" onclick="closeModal()">Hanohy · Continuer</button></div>`); }
function confirmFinish(){ const M=curSet()[S.mod], left=M.teile.reduce((a,t)=>a+itemsOf(t).filter(it=>!answered(it)).length,0);
  modal(`<h3>Hamarana? · Terminer ?</h3><p class="muted">${left>0?`Mbola misy <b>${left}</b> tsy voavaly.`:"Voavalinao avokoa."}</p><div class="row"><button class="btn acc" onclick="closeModal();finishExam()">Hijery ny naotiko · Ma note</button><button class="btn ghost" onclick="closeModal()">Hiverina</button></div>`); }
function finishExam(timeout){
  stopTimer(); Audio2.stop();
  const M=curSet()[S.mod], parts=M.teile.map(t=>{ const tot=itemsOf(t).length; return {nom:t.nom,ok:Math.round(scoreTeil(t)*10)/10,tot,pts:t.points||tot}; });
  const wsum=parts.reduce((a,p)=>a+p.pts,0), score=Math.round(parts.reduce((a,p)=>a+p.pts*p.ok/p.tot,0)/wsum*100);
  setRes(S.mod,{score,parts}); M.teile.forEach(t=>S.checked[t.id]=true);
  S.view="examres"; S.timeout=!!timeout; render(); scrollTo(0,0);
}
function resultCard(score,title,extra){ const pass=score>=60; return `<div class="card center"><p class="muted" style="margin:6px 0">${title}</p><div class="big" style="color:${pass?"var(--teal)":"var(--red)"}">${score}<span style="font-size:24px;color:var(--muted)">/100</span></div><div class="meter ${pass?"":"fail"}"><i style="width:${score}%"></i></div><p style="margin:6px 0 0;font-weight:600">${pass?"Afaka ✅ — 60 % farafahakeliny ! · Réussi":"Mbola tsy 60 % — tohizo! 💪 · Pas encore"}</p>${extra||""}</div>`; }
function vExamRes(){ const r=res(S.mod);
  return topbar()+`<div class="wrap">${backBtn("Hiverina","go('level')")}${S.timeout?`<p class="pill r">Tapitra ny fotoana · Temps écoulé</p>`:""}
    ${resultCard(r.score,`${MODS[S.mod].de} · ${esc(curSet().titre)}`)}
    <div class="card" style="margin-top:12px"><table class="t"><tr><th>Teil</th><th>Marina</th><th>Points</th><th></th></tr>${r.parts.map((p,i)=>`<tr><td><b>${p.nom}</b></td><td>${p.ok} / ${p.tot}</td><td>${Math.round(p.pts*p.ok/p.tot*10)/10} / ${p.pts}</td><td style="text-align:right"><button class="btn ghost sm" onclick="reviewTeil(${i})">Correction</button></td></tr>`).join("")}</table></div>
    <div class="row" style="margin-top:14px"><button class="btn" onclick="startMod('${S.mod}','exam')">Averina · Refaire</button><button class="btn ghost" onclick="go('guide')">Astuces</button></div></div>`; }
function reviewTeil(i){ S.view="run"; S.mode="review"; S.teil=i; render(); scrollTo(0,0); }

/* =========================================================
   GEMINI
   ========================================================= */
async function callGemini(task,data){ try{ const r=await fetch("/api/gemini",{method:"POST",headers:{"Content-Type":"application/json",...(DB.token&&!String(DB.token).startsWith("local:")?{authorization:"Bearer "+DB.token}:{})},body:JSON.stringify({task,data})}); const j=await r.json().catch(()=>({})); if (!r.ok||!j.ok) throw 0; return j.result; }catch(e){ return {_err:true}; } }
const AI_OFF=`<div class="aibox">⚠️ Tsy mandeha eto ny Gemini. Mandeha izy rehefa ao amin'ny site Netlify misy ny clé GEMINI_API_KEY.<br><span class="fr">Gemini fonctionne une fois le site en ligne sur Netlify avec la clé.</span></div>`;
const aiHtml = r => r._err ? AI_OFF : `<div class="aibox"><b>🤖 Gemini</b>${bi(r)}</div>`;
function stripHtml(h){ const d=document.createElement("div"); d.innerHTML=h||""; return d.textContent; }
async function aiExplain(n){
  const {it,t}=findItem(n), box=$("#ai"+n); if (!box) return;
  box.innerHTML=`<div class="aibox"><span class="spin"></span> Mieritreritra i Gemini…</div>`;
  let texte=""; if (t.clips){ const c=t.clips.find(c=>c.items.some(x=>x.n===n)); texte=c.script.map(l=>l.n+": "+l.t).join("\n"); } else if (t.texte) texte=stripHtml(t.texte);
  if (t.choix||t.annonces) texte+="\n"+Object.entries(choixOf(t)).map(([k,v])=>k+") "+stripHtml(v)).join("\n");
  let opts=it.opts; if (it.type==="rf") opts=["Richtig","Falsch"]; if (it.type==="jn") opts=["Ja","Nein"]; if (it.type==="who") opts=Object.entries(t.personnes).map(([k,p])=>k+" = "+p);
  const g=S.answers[n]; const lab=v=>Array.isArray(v)?v.join(","):(it.type==="mc"?v+") "+it.opts[LET.indexOf(v)]:(LBL[v]||v));
  const r=await callGemini("explain",{examen:examTitle(),niveau:S.level,module:MODS[S.mod].de,teil:t.nom,consigne:t.consigne,texte,question:(it.nom?it.nom+": ":"")+(it.q||it.label||""),options:opts,correct:rightLabel(it),eleve:g?lab(g):""});
  S.ai[n]=r; const b2=$("#ai"+n); if (b2) b2.innerHTML=aiHtml(r);
}

/* =========================================================
   AUDIO & ENREGISTREUR
   ========================================================= */
const Audio2={ cur:null, el:null,
  stop(){ this.cur=null; if (this.el){ this.el.pause(); this.el=null; } try{ speechSynthesis.cancel(); }catch(e){} },
  play(id,src,script,onEnd){ this.stop(); this.cur=id; const done=()=>{ if (this.cur===id){ this.cur=null; onEnd&&onEnd(); } };
    if (!src){ this.tts(id,script,done); return; }
    const a=new Audio(src); this.el=a; a.onended=done; a.onerror=()=>{ if (this.cur===id){ this.el=null; this.tts(id,script,done); } };
    const p=a.play(); if (p&&p.catch) p.catch(()=>{ if (this.cur===id&&this.el===a){ this.el=null; this.tts(id,script,done); } }); },
  voices(){ let v=[]; try{ v=speechSynthesis.getVoices().filter(x=>/^de/i.test(x.lang)); }catch(e){}
    const fem=/(anna|petra|katja|hedda|marlene|vicki|helena|female|amala|seraphina|elke|gisela|ingrid|louisa|maja|tanja)/i, mal=/(stefan|hans|conrad|markus|yannick|male|florian|killian|ralf|bernd|christoph|klaus|kasper|jonas)/i;
    const F=v.filter(x=>fem.test(x.name)), Ma=v.filter(x=>mal.test(x.name));
    return {f:F[0]||v[0],f2:F[1]||F[0]||v[1]||v[0],m:Ma[0]||v[1]||v[0],m2:Ma[1]||Ma[0]||v[2]||v[0]}; },
  tts(id,script,done){ let V; try{ if (!window.speechSynthesis) throw 0; V=this.voices(); }catch(e){ toast("Tsy misy feo · Pas d'audio sur cet appareil."); done(); return; }
    const pitch={f:1.1,f2:1.25,m:.9,m2:.75}; let i=0;
    const next=()=>{ if (this.cur!==id) return; if (i>=script.length){ done(); return; } const l=script[i++], u=new SpeechSynthesisUtterance(l.t); u.lang="de-DE"; u.rate=.92; u.pitch=pitch[l.s]||1; if (V[l.s]) u.voice=V[l.s]; u.onend=()=>setTimeout(next,350); u.onerror=()=>setTimeout(next,50); speechSynthesis.speak(u); };
    next(); } };
try{ speechSynthesis.getVoices(); }catch(e){}
const RECS={};
const Rec={ mr:null, key:null, noMic:false,
  async start(key,onStop){ this.stop(); try{ const stream=await navigator.mediaDevices.getUserMedia({audio:true}); const mr=new MediaRecorder(stream), chunks=[]; this.mr=mr; this.key=key; mr.ondataavailable=e=>chunks.push(e.data); mr.onstop=()=>{ stream.getTracks().forEach(t=>t.stop()); RECS[key]=URL.createObjectURL(new Blob(chunks,{type:mr.mimeType||"audio/webm"})); if (this.mr===mr) this.mr=null; onStop&&onStop(); }; mr.start(); return true; }catch(e){ this.noMic=true; return false; } },
  stop(){ if (this.mr&&this.mr.state!=="inactive") this.mr.stop(); },
  on(key){ return this.mr&&this.key===key; } };

/* =========================================================
   SCHREIBEN
   ========================================================= */
const GRADE={A:1,B:.75,C:.5,D:.25,E:0};
const wpts = A => A.points || 10;
function vWrite(){
  const W=curSet().schreiben, A=W.aufgaben[S.teil], dk=resKey()+"_"+A.id, exam=S.mode==="exam";
  const tabs=W.aufgaben.map((a,i)=>`<button class="tab ${i===S.teil?"on":""}" onclick="S.teil=${i};S.showModel=false;render();scrollTo(0,0)">${a.nom} · ${a.temps} min${DB.ai[resKey()+"_"+a.id]||(DB.notes[resKey()+"_"+a.id+"_form"]||{}).done?" ✓":""}</button>`).join("");
  const head=topbar(`<span class="timer" id="timer">⏱ ${fmt((exam?W.temps:A.temps)*60)}</span>`)+`<div class="wrap">${backBtn("Hiala · Quitter",exam?"confirmQuit()":"go('level')")}
    <div class="row"><span class="pill i">${esc(CAT[S.inst].court)} ${S.level}</span><span class="pill">${esc(curSet().titre)}</span><div class="sp"></div>${trToggle()}</div>
    <h2 class="disp" style="font-size:22px;margin-top:6px">Schreiben · ${exam?`Examen blanc (${W.temps} min)`:"Entraînement"}</h2>
    <div class="tabs" style="margin-top:10px">${tabs}</div>
    <div class="row"><span class="pill b">${esc(A.type)}</span>${A.mots?`<span class="pill">≈ ${A.mots} teny / mots</span>`:""}<span class="pill">${A.temps} min</span><span class="pill">${wpts(A)} points</span></div>
    <div class="paper">${A.consigne}${trOn()&&A.ctr?`<div class="ctr" style="border-top:1px dashed var(--line);padding-top:8px">🇫🇷 ${esc(A.ctr[0])}<br>🇲🇬 ${esc(A.ctr[1])}</div>`:""}</div>`;
  if (A.form) return head+formHtml(A,dk)+`</div>`;
  const ai=DB.ai[dk], txt=DB.drafts[dk]||"";
  return head+`<div class="row" style="justify-content:space-between;margin:6px 0"><b>Ny lahatsoratrao · Ton texte</b><span>Teny · Mots : <span class="wc" id="wc">0</span> / ${A.mots}</span></div>
    <textarea id="ta" placeholder="Soraty eto amin'ny teny alemana… · Écris ici en allemand…" oninput="onWrite('${dk}',${A.mots})">${esc(txt)}</textarea>
    ${exam?"":`<div class="row" style="margin-top:8px"><button class="btn sm ghost" id="tbtn" onclick="toggleWriteTimer(${A.temps})">▶ Chrono</button></div>
    <details><summary>Redemittel — fehezanteny ilaina · phrases utiles</summary><div class="in rm"><ul>${A.redemittel.map(r=>`<li>${esc(r)}</li>`).join("")}</ul></div></details>
    <div class="card" style="margin-top:12px"><h3 style="font-size:16px">✔️ Checklist · Hamarino ny lahatsoratrao</h3>${A.checklist.map((c,i)=>`<label class="check"><input type="checkbox" ${DB.notes[dk+"_c"+i]?"checked":""} onchange="DB.notes['${dk}_c${i}']=this.checked;save()"><span>${esc(c)}</span></label>`).join("")}</div>`}
    <div class="row" style="margin-top:12px">
      ${CFG.gemini&&!isTrial()?`<button class="btn ai" onclick="aiWrite(${S.teil})">🤖 Correction Gemini</button>`:""}
      ${exam?`<button class="btn acc" onclick="confirmWriteFinish()">Hamarana · Terminer et noter</button>`:`<button class="btn teal" onclick="S.showModel=!S.showModel;render()">${S.showModel?"Afeno":"Jereo"} ny modèle</button>`}
      ${isTrial()||exam?"":`<a class="btn wa" target="_blank" rel="noopener" href="#" onclick="this.href=waLink('Schreiben ${S.level} – ${A.nom} ('+DB.user.id+'):\\n\\n'+($('#ta').value||''))">Alefa amin'ny mpampianatra</a>`}
    </div>
    <div id="aiw">${ai?writeAiHtml(ai,A):""}</div>
    ${S.showModel&&!exam?`<div class="model" style="margin-top:10px">${esc(A.modele)}</div><p class="small muted">Modèle mahazo naoty ambony. Ampitahao ny drafitra (structure), fa tsy ny teny.</p>`:""}
    ${exam?"":`<details style="margin-top:14px"><summary>Critères de notation</summary><div class="in">${W.criteres.map(c=>`<p class="small"><b>${c.nom}</b> — ${esc(c.desc)}</p>`).join("")}</div></details>`}</div>`;
}
function formHtml(A,dk){
  const st=DB.notes[dk+"_form"]||{v:{}}, done=st.done;
  const rows=A.form.champs.map((c,i)=>{
    if (c.v!=null) return `<div class="fr2"><span>${esc(c.label)}</span><b>${esc(c.v)}</b></div>`;
    let inp;
    if (c.choix) inp=`<div class="opts inline" style="margin:0">${c.choix.map(o=>`<button class="chip ${st.v[i]===o?(done?(c.a.includes(o)?"ok":"ko"):"sel"):(done&&c.a.includes(o)?"ok":"")}" onclick="formSet('${dk}',${i},${esc(JSON.stringify(o))})">${esc(o)}</button>`).join("")}</div>`;
    else { const ok=done&&c.a.some(a=>norm(a)===norm(st.v[i])); inp=`<input value="${esc(st.v[i]||"")}" ${done?`disabled class="${ok?"ok":"ko"}"`:""} oninput="formSetQ('${dk}',${i},this.value)">${done&&!ok?`<div class="small" style="color:var(--teal)">✓ ${esc(c.a[0])}</div>`:""}`; }
    return `<div class="fr2"><span>${c.n?`<b>(${c.n})</b> `:""}${esc(c.label)}</span><div>${inp}</div></div>`;
  }).join("");
  const sc=done?formScore(A,st):null;
  return `<div class="formx"><h3 style="font-size:17px;margin-bottom:6px">${esc(A.form.titre)}</h3>${rows}</div>
    <div class="row" style="margin-top:12px">${done?`<span class="pill ${sc.ok/sc.tot>=.6?"g":"r"}" style="font-size:14px">${sc.ok} / ${sc.tot} marina</span><button class="btn ghost sm" onclick="DB.notes['${dk}_form']={v:{}};save();render()">Averina</button>`:`<button class="btn teal" onclick="formCheck('${dk}')">Hamarino · Corriger ✓</button>`}</div>
    ${done&&A.exp?`<div class="exp" style="margin-top:10px">${bi(A.exp)}</div>`:""}`;
}
function formSet(dk,i,v){ const st=DB.notes[dk+"_form"]||{v:{}}; if (st.done) return; st.v[i]=v; DB.notes[dk+"_form"]=st; save(); render(); }
function formSetQ(dk,i,v){ const st=DB.notes[dk+"_form"]||{v:{}}; st.v[i]=v; DB.notes[dk+"_form"]=st; save(); }
function formScore(A,st){ let ok=0,tot=0; A.form.champs.forEach((c,i)=>{ if (c.v!=null) return; tot++; if (c.choix?c.a.includes(st.v[i]):c.a.some(a=>norm(a)===norm(st.v[i]))) ok++; }); return {ok,tot}; }
function formCheck(dk){ const st=DB.notes[dk+"_form"]||{v:{}}; st.done=true; DB.notes[dk+"_form"]=st; save(); render(); }
function onWrite(dk,target){ const v=$("#ta").value; DB.drafts[dk]=v; save(); const n=(v.trim().match(/\S+/g)||[]).length, el=$("#wc"); el.textContent=n; el.style.color=n<target*.85?"var(--ink2)":n>target*1.4?"var(--red)":"var(--teal)"; }
function toggleWriteTimer(min){ if (S.timer){ stopTimer(); $("#tbtn").textContent="▶ Chrono"; return; } startTimer(min,()=>toast("⏰ Tapitra ny fotoana!")); $("#tbtn").textContent="⏸ Pause"; }
function writePoints(ai,A){ if (!ai||ai._err||!ai.criteres) return null; const vals=Object.values(ai.criteres).map(c=>GRADE[(c.note||"E").trim()[0]]??0); return Math.round(vals.reduce((a,b)=>a+b,0)/Math.max(vals.length,1)*wpts(A)*10)/10; }
function writeAiHtml(ai,A){
  if (ai._err) return AI_OFF;
  return `<div class="card" style="margin-top:12px;border-color:#c9b8f7"><div class="row"><h3 style="font-size:17px">🤖 Correction Gemini</h3><div class="sp"></div><span class="pill b" style="font-size:14px">${writePoints(ai,A)} / ${wpts(A)} points</span></div>
    <table class="t" style="margin-top:8px">${Object.entries(ai.criteres||{}).map(([k,c])=>`<tr><td style="width:44px"><span class="grade g${(c.note||"E").trim()[0]}">${esc((c.note||"").trim()[0])}</span></td><td><b>${esc(k)}</b>${bi(c)}</td></tr>`).join("")}</table>
    ${(ai.fautes||[]).length?`<h4 style="margin:14px 0 4px">Hadisoana · Fautes</h4>${ai.fautes.map(f=>`<div class="fault"><s>${esc(f.faux)}</s> → <b>${esc(f.correct)}</b>${bi(f)}</div>`).join("")}`:""}
    ${ai.points_forts?`<h4 style="margin:14px 0 4px">👍 Ny tsara · Points forts</h4>${bi(ai.points_forts)}`:""}
    ${ai.conseil?`<h4 style="margin:14px 0 4px">🎯 Torohevitra · Conseil</h4>${bi(ai.conseil)}`:""}
    ${ai.version_corrigee?`<details><summary>Texte corrigé</summary><div class="in"><div class="model">${esc(ai.version_corrigee)}</div></div></details>`:""}
    <p class="small muted">Naoty tombana avy amin'ny IA. · Note estimée par l'IA ; le professeur donne la note finale.</p></div>`;
}
function aiPayload(A,texte){ const W=curSet().schreiben; return {examen:examTitle(),niveau:S.level,nom:A.nom,mots:A.mots,type:A.type,consigne:stripHtml(A.consigne),texte,criteres:W.criteres.map(c=>c.nom)}; }
async function aiWrite(idx){
  const A=curSet().schreiben.aufgaben[idx], dk=resKey()+"_"+A.id, texte=DB.drafts[dk]||"";
  if ((texte.trim().match(/\S+/g)||[]).length<5){ toast("Soraty aloha ny lahatsoratrao 🙂 · Écris d'abord ton texte."); return; }
  const box=$("#aiw"); if (box) box.innerHTML=`<div class="aibox"><span class="spin"></span> Manitsy i Gemini… · Correction en cours…</div>`;
  const r=await callGemini("schreiben",aiPayload(A,texte)); DB.ai[dk]=r; save(); const b=$("#aiw"); if (b&&S.teil===idx) b.innerHTML=writeAiHtml(r,A);
}
function confirmWriteFinish(){ modal(`<h3>Hamarana ny Schreiben?</h3><p class="muted">Hitsirin'i Gemini ireo asa soratra ary homena naoty /100 ianao. · Correction et note /100.</p><div class="row"><button class="btn acc" onclick="closeModal();finishWriteExam()">Eny · Oui</button><button class="btn ghost" onclick="closeModal()">Hiverina</button></div>`); }
async function finishWriteExam(){
  stopTimer(); const W=curSet().schreiben;
  modal(`<h3><span class="spin"></span> Correction…</h3><p class="muted">Andraso kely. · Patiente un instant.</p>`);
  const pts=[]; let max=0;
  for (const A of W.aufgaben){ const dk=resKey()+"_"+A.id; max+=wpts(A);
    if (A.form){ const st=DB.notes[dk+"_form"]||{v:{}}; st.done=true; DB.notes[dk+"_form"]=st; const sc=formScore(A,st); pts.push(Math.round(sc.ok/sc.tot*wpts(A)*10)/10); continue; }
    const t=(DB.drafts[dk]||"").trim(); if (!t){ pts.push(0); continue; }
    const r=DB.ai[dk]&&!DB.ai[dk]._err?DB.ai[dk]:await callGemini("schreiben",aiPayload(A,t)); DB.ai[dk]=r;
    if (r._err){ closeModal(); save(); modal(`<h3>Gemini tsy mandeha</h3>${AI_OFF}<button class="btn" style="margin-top:10px" onclick="closeModal()">OK</button>`); return; }
    pts.push(writePoints(r,A)); }
  closeModal(); const score=Math.round(pts.reduce((a,b)=>a+b,0)/max*100); setRes("schreiben",{score,parts:pts});
  modal(`${resultCard(score,"Schreiben · "+esc(curSet().titre),`<p class="small muted">${W.aufgaben.map((A,i)=>`${A.nom}: ${pts[i]}/${wpts(A)}`).join(" · ")}</p>`)}<div class="row" style="margin-top:10px"><button class="btn" onclick="closeModal();S.mode='train';render()">Correction</button><button class="btn ghost" onclick="closeModal();go('level')">Hiverina</button></div>`);
}

/* =========================================================
   SPRECHEN — moteur guidé (dialog / present / qa)
   ========================================================= */
const SP_CRIT=[["Erfüllung","Voaresaka avokoa ve ny hevitra? · Tâche réalisée ?"],["Interaktion","Namaly ny namako ve aho? · J'ai réagi ?"],["Wortschatz","Teny maro samihafa? · Vocabulaire varié ?"],["Strukturen","Marina ny grammaire?"],["Aussprache","Mazava ny fanononako? · Prononciation claire ?"]];
const spT = () => curSet().sprechen.teile.find(t=>t.id===S.sp.teil);
const spMode = T => T.mode || ({P1:"dialog",P2:"present",P3:"qa"}[T.id]) || "dialog";
const spThemes = T => T.themes || [{titre:T.nom}];
function spPoints(T){ const th=spThemes(T)[S.sp.theme||0]; if (th.points) return th.points.map(p=>typeof p==="string"?{de:p}:p); return FOLIEN; }
function spSteps(){ const T=spT(), m=spMode(T); if (m==="dialog") return T.partenaire.length+2; if (m==="present") return spPoints(T).length+3; return 4; }
function spGo(step){ Audio2.stop(); Rec.stop(); clearInterval(S._ring); S._timerKey=null; S.sp.step=step; render(); scrollTo(0,0); }
function spOpen(id){ Audio2.stop(); S.sp={teil:id,step:0,theme:null,eval:(S.sp&&S.sp.eval)||{},show:{}}; render(); scrollTo(0,0); }
function hintsHtml(list){ if (!list||!list.length) return ""; return `<div class="small muted center" style="margin-top:6px">💡 Tsindrio raha mila fanampiana · Touche pour une aide :</div><div class="hints">${list.map(h=>`<span class="hint hid" onclick="this.classList.remove('hid')">${esc(h)}</span>`).join("")}</div>`; }
function rmHints(T,i){ const g=T.redemittel||[]; if (i!=null&&g[i]) return g[i][1].slice(0,4); return g.flatMap(x=>x[1]).slice(0,4); }
function spLine(id){ const T=spT(); const all=[].concat(T.partenaire||[],T.partenaire_presentation?[T.partenaire_presentation]:[],T.question_pour_toi?[T.question_pour_toi]:[]); const p=all.find(x=>x.id===id); return p?p.t:""; }
function spPlay(id,sex){ if (Audio2.cur===id){ Audio2.stop(); render(); return; } Audio2.play(id,"audio/"+id+".mp3",[{s:sex,n:"",t:spLine(id)}],()=>render()); render(); }
function bubble(who,av,p,sex){ const on=Audio2.cur===p.id, shown=S.sp.show[p.id];
  return `<div class="bubble"><div class="av">${av}</div><div class="bx"><div class="small muted">${who}</div><div style="margin-top:6px" class="row"><button class="bigplay ${on?"on":""}" onclick="spPlay('${p.id}','${p.s||sex}')">${on?"■ Ajanony":"▶ Henoy · Écouter"}</button><button class="btn ghost sm" onclick="S.sp.show['${p.id}']=!S.sp.show['${p.id}'];render()">${shown?"🙈 Afeno":"👀 Asehoy ny soratra"}</button></div>${shown?`<div class="txt">${esc(p.t)}${p.tr&&DB.tr?`<div class="trl">🇫🇷 ${esc(p.tr[0])}<br>🇲🇬 ${esc(p.tr[1])}</div>`:""}</div>`:""}</div></div>`; }
const sid = k => k.replace(/[^\w-]/g,"_");
function micHtml(key,sec,label){ const on=Rec.on(key)||S._timerKey===key, url=RECS[key], C=2*Math.PI*70;
  return `<div class="mic"><button class="micbtn ${on?"rec":""}" onclick="micTap('${key}',${sec})"><svg viewBox="0 0 148 148"><circle cx="74" cy="74" r="70" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="6"/><circle id="ring-${sid(key)}" cx="74" cy="74" r="70" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${on?0:C}"/></svg>${on?"■":"🎙️"}<span class="sec2" id="rs-${sid(key)}">${on?fmt(S._left||sec):fmt(sec)}</span></button>
    <div class="miclbl">${on?"Mitenena izao! · Parle ! Touche quand c'est fini.":url?"✅ Voaraikitra! · Enregistré":esc(label)}</div>
    ${url&&!on?`<audio controls src="${url}" style="width:100%;max-width:340px"></audio><button class="btn ghost sm" onclick="delete RECS['${key}'];render()">↺ Averina</button>`:""}
    ${Rec.noMic&&!on?`<div class="small muted center">ℹ️ Tsy misy micro eto : miresaha mafy fotsiny miaraka amin'ny chrono.</div>`:""}</div>`; }
async function micTap(key,sec){
  if (Rec.on(key)||S._timerKey===key){ endMic(); return; }
  Audio2.stop(); S._timerKey=key; S._left=sec; const C=2*Math.PI*70, t0=Date.now(); clearInterval(S._ring);
  S._ring=setInterval(()=>{ const el=$("#ring-"+sid(key)), lab=$("#rs-"+sid(key)); const left=Math.max(0,sec-(Date.now()-t0)/1000); S._left=Math.ceil(left); if (el) el.setAttribute("stroke-dashoffset",String(C*(1-left/sec))); if (lab) lab.textContent=fmt(left); if (left<=0){ toast("⏰ Tapitra ny fotoana!"); endMic(); } },200);
  render(); const ok=await Rec.start(key,()=>render()); if (!ok) toast("ℹ️ Tsy misy micro : miresaha mafy fotsiny."); else if (S._timerKey!==key) Rec.stop();
}
function endMic(){ clearInterval(S._ring); S._timerKey=null; Rec.stop(); setTimeout(render,150); }
function stepsDots(){ const n=spSteps(); return `<div class="steps">${Array.from({length:n},(_,i)=>`<i class="${i===S.sp.step?"on":i<S.sp.step?"ok":""}"></i>`).join("")}</div>`; }
function navSp(prev,nextLabel,nextFn){ return `<div class="navsp">${prev?`<button class="btn ghost" onclick="spGo(${S.sp.step-1})">← Hiverina</button>`:"<span></span>"}${nextLabel?`<button class="btn big acc" onclick="${nextFn||`spGo(${S.sp.step+1})`}">${nextLabel}</button>`:""}</div>`; }
function evalHtml(){ const k=S.sp.teil; S.sp.eval[k]=S.sp.eval[k]||{};
  return `<div class="card" style="margin-top:14px"><h3 style="font-size:16px">⭐ Auto-évaluation · Omeo naoty ny tenanao</h3><p class="small muted">Henoy ny feonao ary valio marina.</p>${SP_CRIT.map(([c,q],i)=>`<div class="row" style="justify-content:space-between;margin:8px 0"><div><b>${c}</b><div class="small muted">${q}</div></div><div class="emo">${["😟","🙂","😃"].map((e,v)=>`<button class="${S.sp.eval[k][i]===v?"on":""}" onclick="S.sp.eval['${k}'][${i}]=${v};saveSpEval();render()">${e}</button>`).join("")}</div></div>`).join("")}</div>`; }
function saveSpEval(){ const all=Object.values(S.sp.eval).flatMap(o=>Object.values(o)); if (!all.length) return; setRes("sprechen",{score:Math.round(all.reduce((a,b)=>a+b,0)/(all.length*2)*100),self:true}); }
function recList(keys,labels){ return `<div class="card" style="margin-top:12px"><b>🎧 Henoy indray · Réécoute</b>${keys.map((k,i)=>{ const u=RECS[k]; return `<div style="margin:8px 0"><div class="small muted">${esc(labels[i])}</div>${u?`<audio controls src="${u}" style="width:100%"></audio>`:`<span class="small muted">— tsy voaraikitra · non enregistré</span>`}</div>`; }).join("")}</div>`; }
function modelForTeil(T){ const m=spMode(T); if (m==="present"){ const th=spThemes(T)[S.sp.theme||0]; return th&&th.modele; } return T.modele; }
function spHelpPanels(T){
  const rm=(T.redemittel||[]).length?`<div class="rmbox"><b>📚 Redemittel · fehezanteny ilaina · phrases utiles</b>${T.redemittel.map(([h,l])=>`<h4>${esc(h)}</h4><ul>${l.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`).join("")}</div>`:"";
  const mo=modelForTeil(T);
  const model=mo?`<details style="margin-top:10px"><summary>🏆 Ohatra tsara · Exemple réussi${spMode(T)==="present"&&spThemes(T).length>1?` (Thema ${(S.sp.theme||0)+1})`:""}</summary><div class="in"><div class="model">${esc(mo)}</div><p class="small muted">Aza tadidiana teny aman-teny : ampiasao ho ohatra ny drafitra sy ny Redemittel. · Ne l'apprends pas par cœur : inspire-toi de la structure.</p></div></details>`:"";
  return rm+model;
}
function vSpeak(){
  const SP=curSet().sprechen;
  const head=topbar(`<span class="timer" id="timer">⏱ ${fmt((SP.preparation||15)*60)}</span>`)+`<div class="wrap">${backBtn(S.sp.teil?"Sprechen":"Hiverina",S.sp.teil?"Audio2.stop();Rec.stop();S.sp.teil=null;render()":"go('level')")}
    <div class="row"><span class="pill i">${esc(CAT[S.inst].court)} ${S.level}</span><span class="pill">${esc(curSet().titre)}</span><div class="sp"></div>${trToggle()}</div>`;
  if (!S.sp.teil){
    return head+`<div class="hero"><h1>Sprechen 🗣️</h1><p>Misafidiana Teil iray. Dingana tsirairay : henoy, mitenena, henoy ny feonao.</p><p class="fr">Choisis une partie. Tout se fait étape par étape : écouter, parler, se réécouter.</p></div>
      ${SP.preparation?`<div class="card" style="margin:12px 0;display:flex;gap:10px;align-items:center;flex-wrap:wrap"><span>📝 Préparation : <b>${SP.preparation} min</b></span><div class="sp"></div><button class="btn sm ghost" onclick="startTimer(${SP.preparation},()=>toast('⏰ Vita ny fanomanana!'));this.disabled=true">▶ Lancer la préparation</button></div>`:""}
      <div class="sptiles">${SP.teile.map((T,i)=>{ const d=S.sp.eval[T.id]&&Object.keys(S.sp.eval[T.id]).length; const ic=T.em||({dialog:"🤝",present:"🎤",qa:"💬"}[spMode(T)]); return `<button class="sptile" onclick="spOpen('${T.id}')"><div class="em" style="background:${["#fde8df","#e8eefc","#e3f3ef"][i%3]}">${ic}</div><div><b>${esc(T.nom)}</b><span class="small muted">${esc(T.mg||"")} · ≈ ${T.duree||3} min</span></div><span class="done">${d?"✅":"›"}</span></button>`; }).join("")}</div>
      <details style="margin-top:14px"><summary>Critères de notation</summary><div class="in">${SP.criteres.map(c=>`<p class="small"><b>${c.nom}</b> — ${esc(c.desc)}</p>`).join("")}</div></details></div>`;
  }
  const T=spT(), mode=spMode(T), st=S.sp.step, K=resKey()+"_"+T.id;
  const task=T.task||({dialog:"Miresaka amin'ny namanao ianao. <b>Manolora hevitra, valio ny azy, ary manapaha hevitra miaraka.</b> · Dialogue : propose, réagis, décidez ensemble.",present:"Manao kabary fohy ianao araka ny teboka rehetra. · Présentation : traite tous les points.",qa:"<b>(1)</b> Henoy ny namanao, omeo valin-kafatra + fanontaniana. <b>(2)</b> Valio ny fanontaniana. · Feedback, question, réponse."}[mode]);
  let body="";
  if (st===0 && !(mode==="present"&&spThemes(T).length>1)){
    body=`<div style="font-size:44px">${T.em||({dialog:"🤝",present:"🎤",qa:"💬"}[mode])}</div><h2 class="disp" style="font-size:22px;margin:6px 0">${esc(T.nom)}</h2><p>${task}</p><div class="paper">${T.consigne}${trOn()&&T.ctr?`<div class="ctr">🇫🇷 ${esc(T.ctr[0])}<br>🇲🇬 ${esc(T.ctr[1])}</div>`:""}</div>${navSp(false,"Hanomboka · Commencer 🎬", mode==="present"?"S.sp.theme=0;spGo(1)":null)}`;
  } else if (mode==="dialog"){
    const turns=T.partenaire;
    if (st<=turns.length){ const p=turns[st-1];
      body=`<p class="small muted center">Fifampiresahana · Échange ${st} / ${turns.length}</p>${bubble(T.partnerLabel||"Ny namanao · Partenaire",T.av||"👩",p,"f")}
        <div class="center"><b>🎯 Ny anjaranao! · À toi !</b> ${esc(p.cue||"")}</div>${hintsHtml(p.aide||rmHints(T))}
        ${micHtml(K+"_"+st,p.sec||30,`Tsindrio ary mitenena (${p.sec||30} s) · Touche et parle`)}${navSp(true,st===turns.length?"Vita · Fini 🎉":"Manaraka →")}`;
    } else body=`<div class="confetti">🎉</div><h2 class="disp center" style="font-size:22px">Vitanao! · Terminé !</h2>${recList(turns.map((_,i)=>K+"_"+(i+1)),turns.map((p,i)=>(i+1)+". "+p.t.slice(0,70)+"…"))}${evalHtml()}<div class="navsp"><button class="btn ghost" onclick="spGo(1)">↺ Averina</button><button class="btn big teal" onclick="nextSpTeil()">Manaraka →</button></div>`;
  } else if (mode==="present"){
    const ths=spThemes(T), th=S.sp.theme, pts=spPoints(T), np=pts.length;
    if (st===0){ body=`<div style="font-size:44px">🎤</div><h2 class="disp" style="font-size:22px;margin:6px 0">${esc(T.nom)}</h2><p>${task}</p><div class="paper">${T.consigne}</div>
        <div class="grid g2" style="margin-top:12px">${ths.map((t,i)=>`<button class="themec" onclick="S.sp.theme=${i};spGo(1)"><div class="small muted">Thema ${i+1}</div>${esc(t.titre)}${t.bild?`<div class="small muted" style="margin-top:6px">${t.bild.e||"🖼️"} ${esc(t.bild.de||"")}</div>`:""}</button>`).join("")}</div>`; }
    else if (st<=np){ const i=st-1, p=pts[i], nk=K+"_"+th+"_"+i, the=ths[th];
      body=`<p class="small muted center">Fanomanana · Préparation ${st} / ${np}</p>${the.bild&&i===0?bildHtml(the.bild):""}<div class="slide c${i%5}"><span class="n">${esc(T.ptLabel||"PUNKT")} ${st} · ${esc(the.titre)}</span><span class="de">${esc(p.de)}</span>${p.mg||p.fr?`<span class="mgx">🇲🇬 ${esc(p.mg||"")}${p.fr?`<br>🇫🇷 ${esc(p.fr)}`:""}</span>`:""}</div>
        <p class="small" style="margin:12px 0 4px"><b>✏️ Mots-clés · teny lehibe fotsiny :</b></p><textarea class="notes" placeholder="ohatra: Fahrrad, 20 Minuten, gesund…" oninput="DB.notes['${nk}']=this.value;save()">${esc(DB.notes[nk]||"")}</textarea>
        ${hintsHtml(rmHints(T,i))}${navSp(true,st===np?"Vonona! · Prêt 🎤":"Manaraka →")}`; }
    else if (st===np+1){ const i=Math.min(S.sp.slide||0,np-1), p=pts[i];
      body=`<p class="small muted center">🎤 Présentation · ~${Math.round((T.duree||3)*60/np)} s isaky ny teboka</p>${ths[th].bild?bildHtml(ths[th].bild):""}<div class="slide c${i%5}"><span class="n">${i+1} / ${np}</span><span class="de">${esc(p.de)}</span><span class="mgx">📝 ${esc(DB.notes[K+"_"+th+"_"+i]||"—")}</span></div>
        <div class="row" style="justify-content:center;margin-top:10px"><button class="btn ghost sm" ${i===0?"disabled":""} onclick="S.sp.slide=${i-1};render()">←</button><button class="btn sm" ${i===np-1?"disabled":""} onclick="S.sp.slide=${i+1};render()">→</button></div>
        ${micHtml(K+"_"+th,(T.duree||3)*60,`Tsindrio ary atombohy (${T.duree||3} min) · Touche et commence`)}${navSp(true,"Vita · Fini 🎉")}`; }
    else body=`<div class="confetti">🏆</div><h2 class="disp center" style="font-size:22px">Tsara be! · Bravo !</h2>${recList([K+"_"+th],["Ny kabarinao · Ta présentation"])}${evalHtml()}<div class="navsp"><button class="btn ghost" onclick="S.sp.slide=0;spGo(${np+1})">↺ Averina</button><button class="btn big teal" onclick="nextSpTeil()">Manaraka →</button></div>`;
  } else {
    if (st===1){ const p=T.partenaire_presentation; body=`<p class="small muted center">1 / 2</p>${bubble("Ny namanao manao kabary · Présentation du partenaire","🧑",p,"m")}<div class="center"><b>🎯 Feedback + 1 question</b></div>${hintsHtml(rmHints(T,0).concat(rmHints(T,1)).slice(0,5))}${micHtml(K+"_a",45,"Feedback + question (45 s)")}${navSp(true,"Manaraka →")}`; }
    else if (st===2){ const q=T.question_pour_toi; body=`<p class="small muted center">2 / 2</p>${bubble("Fanontaniana ho anao · Question pour toi","👩‍🏫",q,"f")}<div class="center"><b>🎯 Valio · Réponds</b> (2–3 fehezanteny + weil…)</div>${hintsHtml(rmHints(T,2))}${micHtml(K+"_b",40,"Ny valinao · Ta réponse (40 s)")}${navSp(true,"Vita · Fini 🎉")}`; }
    else body=`<div class="confetti">🌟</div><h2 class="disp center" style="font-size:22px">Vitanao! · Terminé !</h2>${recList([K+"_a",K+"_b"],["Feedback","Réponse"])}${evalHtml()}<div class="navsp"><button class="btn ghost" onclick="spGo(1)">↺ Averina</button><button class="btn big teal" onclick="nextSpTeil()">Vita ✓</button></div>`;
  }
  return head+`<h2 class="disp" style="font-size:20px;margin:8px 0 0">${esc(T.nom)}</h2>${stepsDots()}<div class="stage">${body}</div>${spHelpPanels(T)}</div>`;
}
function bildHtml(b){ return `<div class="bild" style="margin-bottom:10px">${b.img?`<img src="${b.img}" alt="">`:`<span class="e">${b.e||"🖼️"}</span>`}<div><b>Bild</b><div>${esc(b.de)}</div>${DB.tr&&b.tr?`<div class="trl">🇫🇷 ${esc(b.tr[0])} · 🇲🇬 ${esc(b.tr[1])}</div>`:""}</div></div>`; }
function nextSpTeil(){ const L=curSet().sprechen.teile, i=L.findIndex(t=>t.id===S.sp.teil); if (i<L.length-1) spOpen(L[i+1].id); else { Audio2.stop(); S.sp.teil=null; render(); } }

/* =========================================================
   GUIDE, VOCABULAIRE, RÉSULTATS
   ========================================================= */
function vGuide(){
  const I=pool().info, g=I.guides;
  const sec=k=>g[k]?`<div class="sec"><h2>${MODS[k].ic} ${MODS[k].de}</h2><span class="fr">${MODS[k].mg} · ${MODS[k].fr}</span></div>`+g[k].map(p=>`<details><summary>${esc(p.t)}</summary><div class="in">${p.tips.map(t=>`<div class="tip"><span>${t.mg}<br><span class="fr">${t.fr}</span></span></div>`).join("")}</div></details>`).join(""):"";
  return topbar()+`<div class="wrap">${backBtn("Hiverina","go('level')")}
    <div class="hero"><span class="pill i">${esc(CAT[S.inst].nom)}</span><h1 style="margin-top:8px">Guide · ${esc(examTitle())}</h1></div>
    ${I.institut&&I.institut[S.inst]?`<div class="card" style="margin-top:12px;border-color:var(--inst)">${bi(I.institut[S.inst])}</div>`:""}
    <div class="card" style="margin-top:12px"><table class="t"><tr><th>Module</th><th>Durée</th><th>Contenu</th></tr>${I.modules.map(m=>`<tr><td><b>${m.m}</b><div class="small muted">${m.mg}</div></td><td>${m.t}</td><td>${m.parts}</td></tr>`).join("")}</table><div style="margin-top:10px">${bi(I.reussite)}</div></div>
    <div class="card" style="margin-top:12px;background:#fdf6e6;border-color:#f1dfb5"><b>🎯 Stratégie générale · Paikady</b>${(I.strategie||POOLS.B1.info.strategie).map(t=>`<div class="tip"><span>${t.mg}<br><span class="fr">${t.fr}</span></span></div>`).join("")}</div>
    ${["lesen","hoeren","schreiben","sprechen"].map(sec).join("")}</div>`;
}
function vocabList(){ const v=S.vsrc==="off"?(pool().vocabOfficiel||[]):curSet().vocab; return isTrial()?v.slice(0,CFG.essai.vocab):v; }
const box = w => DB.vocab[S.level+"|"+w.de]||0;
function vVocab(){
  const list=vocabList(), cnt=[0,0,0]; list.forEach(w=>cnt[Math.min(2,box(w))]++); const off=(pool().vocabOfficiel||[]).length;
  const src=`<div class="tabs"><button class="tab ${S.vsrc!=="off"?"on":""}" onclick="go('vocab',{vmode:S.vmode,vi:0,vsrc:'set'})">📘 ${esc(curSet().titre)} (${curSet().vocab.length})</button>${off?`<button class="tab ${S.vsrc==="off"?"on":""}" onclick="go('vocab',{vmode:S.vmode==='quiz'?'cards':S.vmode,vi:0,vsrc:'off'})">🏛️ Modèle officiel (${off})</button>`:""}</div>`;
  const tabs=`<div class="tabs"><button class="tab ${S.vmode==="cards"?"on":""}" onclick="go('vocab',{vmode:'cards',vi:0,vsrc:S.vsrc})">🃏 Karatra · Cartes</button><button class="tab ${S.vmode==="quiz"?"on":""}" onclick="startQuiz()">❓ Quiz</button><button class="tab ${S.vmode==="list"?"on":""}" onclick="go('vocab',{vmode:'list',vsrc:S.vsrc})">📋 Lisitra · Liste</button></div>`;
  let body="";
  if (!list.length) body=`<p class="muted">—</p>`;
  else if (S.vmode==="cards"){ const deck=list.slice().sort((a,b)=>box(a)-box(b)), w=deck[S.vi%deck.length]; S._w=w;
    body=`<div class="flash" id="fc" onclick="this.classList.toggle('flip')"><div class="fi"><div class="side front"><div class="small" style="opacity:.6">Inona no dikan'ity? · Que veut dire… ?</div><div class="w">${esc(w.de)}</div><div class="small" style="opacity:.6;margin-top:14px">Tsindrio · Touche pour retourner</div></div>
      <div class="side back"><div class="mg">🇲🇬 ${esc(w.mg)}</div><div class="frx">🇫🇷 ${esc(w.fr)}</div>${w.ex?`<div class="ex">„${esc(w.ex)}“</div>`:""}</div></div></div>
      <div class="row" style="justify-content:center"><button class="btn sm ghost" onclick="Audio2.play('w',null,[{s:'f',t:S._w.de+(S._w.ex?'. '+S._w.ex:'')}])">🔊 Henoy</button><button class="btn acc" onclick="rate(0)">Averina · À revoir</button><button class="btn teal" onclick="rate(1)">Fantatro · Je sais ✓</button></div>`; }
  else if (S.vmode==="quiz"){ const Q=S.quiz;
    if (Q.i>=Q.items.length) body=`<div class="card center"><div class="big">${Q.ok}<span style="font-size:22px;color:var(--muted)">/${Q.items.length}</span></div><p>${Q.ok>=Q.items.length*.8?"Tena tsara! 🎉":"Tohizo 💪"}</p><button class="btn" onclick="startQuiz()">Quiz vaovao · Nouveau quiz</button></div>`;
    else { const it=Q.items[Q.i]; body=`<div class="card"><p class="small muted">${Q.i+1} / ${Q.items.length}</p><h3 style="font-size:26px;margin:4px 0 12px">${esc(it.w.de)}</h3><div class="opts">${it.opts.map((o,k)=>`<button class="opt ${Q.ans!=null?(o===it.w.mg?"ok":(k===Q.ans?"ko":"")):""}" onclick="quizPick(${k})"><b>${LET[k]}</b><span>${esc(o)}</span></button>`).join("")}</div>
      ${Q.ans!=null?`<div class="exp"><b>${esc(it.w.de)}</b> = 🇲🇬 ${esc(it.w.mg)} · 🇫🇷 ${esc(it.w.fr)}${it.w.ex?`<br><i>„${esc(it.w.ex)}“</i>`:""}</div><button class="btn" style="margin-top:10px" onclick="S.quiz.i++;S.quiz.ans=null;render()">Manaraka →</button>`:""}</div>`; } }
  else body=`<div class="card"><table class="t"><tr><th>Deutsch</th><th>Malagasy</th><th>Français</th></tr>${list.map(w=>`<tr><td><b>${esc(w.de)}</b></td><td>${esc(w.mg)}</td><td>${esc(w.fr)}</td></tr>`).join("")}</table></div>`;
  return topbar()+`<div class="wrap">${backBtn("Hiverina","go('level')")}<div class="hero"><h1>Voambolana · Vocabulaire ${S.level}</h1><p>${S.vsrc==="off"?"Teny nalaina tao amin'ny Modellsatz ofisialy. · Mots tirés du modèle officiel de l'examen.":"Ny teny ao amin'ity examen blanc ity."}</p></div>
    ${src}<div class="boxes" style="margin:12px 0"><span><b>${cnt[0]}</b>Vaovao · Nouveaux</span><span><b>${cnt[1]}</b>Am-pianarana</span><span><b>${cnt[2]}</b>Fantatra · Acquis</span></div>${tabs}${body}${isTrial()?ctaBox("Andramana : teny "+CFG.essai.vocab+" ihany."):""}</div>`;
}
function rate(good){ const k=S.level+"|"+S._w.de; DB.vocab[k]=good?Math.min(2,(DB.vocab[k]||0)+1):0; save(); S.vi++; render(); }
function startQuiz(){ const all=vocabList(); if (all.length<4){ toast("—"); return; } const list=all.slice().sort(()=>Math.random()-.5).slice(0,10);
  const items=list.map(w=>({w,opts:all.filter(x=>x!==w).sort(()=>Math.random()-.5).slice(0,3).map(x=>x.mg).concat([w.mg]).sort(()=>Math.random()-.5)}));
  go("vocab",{vmode:"quiz",vsrc:S.vsrc,quiz:{items,i:0,ok:0,ans:null}}); }
function quizPick(k){ const Q=S.quiz; if (Q.ans!=null) return; Q.ans=k; const it=Q.items[Q.i], good=it.opts[k]===it.w.mg; if (good) Q.ok++; const key=S.level+"|"+it.w.de; DB.vocab[key]=good?Math.min(2,(DB.vocab[key]||0)+1):0; save(); render(); }
function vResults(){ const mods=modsOf(curSet());
  const rows=pool().sets.map(s=>{ const r=DB.results[examKey(S.inst,S.level)+"|"+s.id]||{}; return `<tr><td><b>${esc(s.titre)}</b></td>${mods.map(k=>`<td>${r[k]?`<span class="pill ${r[k].score>=60?"g":"r"}">${r[k].score}</span>`:`<span class="muted small">—</span>`}</td>`).join("")}</tr>`; }).join("");
  return topbar()+`<div class="wrap">${backBtn("Hiverina","go('level')")}<div class="hero"><h1>Ny vokatro · Résultats</h1><p>${esc(examTitle())} · Objectif : <b>60 %</b> isaky ny module.</p></div>
    <div class="card" style="margin-top:12px;overflow-x:auto"><table class="t"><tr><th>Modellsatz</th>${mods.map(k=>`<th>${MODS[k].de}</th>`).join("")}</tr>${rows}</table><p class="small muted" style="margin:10px 0 0">Sprechen = auto-évaluation. Schreiben = note Gemini.</p></div></div>`; }

/* =========================================================
   RENDU
   ========================================================= */
function render(){
  applyInstColors();
  if (!DB.user&&S.view!=="login") S.view="login";
  if (DB.user&&S.view==="login") S.view="home";
  const V={login:vLogin,home:vHome,level:vLevel,run:vRun,examres:vExamRes,write:vWrite,speak:vSpeak,guide:vGuide,vocab:vVocab,results:vResults,admin:vAdmin,astudent:vAdminStudent};
  $("#app").innerHTML=(V[S.view]||vHome)();
  if (S.view==="run"){ paintAll(); if (S.mode==="review"){ const t=curSet()[S.mod].teile[S.teil]; S.checked[t.id]=true; itemsOf(t).forEach(paintCorrection); document.querySelector(".bar .in").innerHTML=`<div class="sp"></div><button class="btn sm" onclick="S.view='examres';render()">← Ma note</button>`; } }
  if (S.view==="write"){ const A=curSet().schreiben.aufgaben[S.teil]; if ($("#ta")) onWrite(resKey()+"_"+A.id,A.mots); if (S.timer&&$("#tbtn")) $("#tbtn").textContent="⏸ Pause"; }
  if (S.timer&&$("#timer")) $("#timer").textContent="⏱ "+fmt(S.timeLeft);
}
boot();
