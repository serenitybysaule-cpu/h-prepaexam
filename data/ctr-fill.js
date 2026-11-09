/* Traductions des consignes : si une partie d'un Modellsatz n'a pas sa propre traduction,
   on reprend celle de la même partie du Modellsatz 1 (même consigne officielle). */
(function(){
  ["GA1","OA1","GA2","OA2","GB2","OB2"].forEach(k=>{
    const P=window.POOLS[k]; if(!P||!P.sets.length) return; P.ctr=P.ctr||{};
    const s1=P.sets[0];
    ["lesen","hoeren","sprechen"].forEach(m=>(s1[m]?s1[m].teile:[]).forEach(t=>{ if(t.ctr&&!P.ctr[t.id]) P.ctr[t.id]=t.ctr; }));
    P.sets.forEach(s=>(s.schreiben?s.schreiben.aufgaben:[]).forEach((A,i)=>{ if(!A.ctr){ const B=s1.schreiben.aufgaben[i]; if(B&&B.ctr&&B.consigne===A.consigne) A.ctr=B.ctr; } }));
  });
})();
