/* ========================= APP ========================= */
(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(hover: hover) and (pointer: fine)').matches;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const I={mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',in:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
 gh:'<path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.5 5.5 2.8 5.5 2.8a4.3 4.3 0 0 0-.1 3.2A4.7 4.7 0 0 0 4 9.2c0 4.6 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21"/>',
 file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M12 11v6M9 14l3 3 3-3"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',ext:'<path d="M7 17 17 7M8 7h9v9"/>',book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
 award:'<circle cx="12" cy="9" r="6"/><path d="M8.5 14 7 22l5-3 5 3-1.5-8"/>',pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>'};
const ic=(k,w=17)=>`<svg viewBox="0 0 24 24" width="${w}" height="${w}">${I[k]}</svg>`;
const mailto=(s='',b='')=>`mailto:${CONFIG.email}${s||b?`?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`:''}`;

/* ---------- links ---------- */
const LINKS=[{k:'mail',label:'Email',href:mailto()},CONFIG.linkedin&&{k:'in',label:'LinkedIn',href:CONFIG.linkedin},CONFIG.github&&{k:'gh',label:'GitHub',href:CONFIG.github}].filter(Boolean);
const ext=l=>l.k==='mail'?'':' target="_blank" rel="noopener"';
$('#rail').innerHTML=LINKS.map(l=>`<a href="${esc(l.href)}"${ext(l)} aria-label="${l.label}">${ic(l.k)}</a>`).join('')+`<button type="button" data-resume-download aria-label="Download resume">${ic('file')}</button>`;
$('#cside').innerHTML=LINKS.map(l=>`<a href="${esc(l.href)}"${ext(l)}>${esc(l.k==='mail'?CONFIG.email:l.label)}<span>${l.label}</span></a>`).join('')+`<button type="button" data-resume-view>Resume<span>View</span></button>`;
$('#fLinks').innerHTML=[...LINKS.map(l=>`<a href="${esc(l.href)}"${ext(l)}>${l.label}</a>`),'<button type="button" data-resume-view style="background:none;border:0;padding:0;cursor:pointer;color:inherit">Resume</button>','<a href="#home">Back to top</a>'].join('');
$('#mailDirect').href=mailto('Hello Dhanush');
$('#fname').innerHTML=[...CONFIG.name.toLowerCase()].map(c=>`<span>${esc(c)}</span>`).join('');

/* ---------- skillset ---------- */
$('#skGrid').innerHTML=SKILLSET.map(c=>`<article class="skc rv"><h3><i></i>${esc(c.title)}</h3>${c.items.map(([n,w])=>`<div class="sr-row"><span>${esc(n)}</span>${w?`<em>${esc(w)}</em>`:''}</div>`).join('')}</article>`).join('');

/* ---------- mocks + thumbs ---------- */
const MOCK={
 audit:()=>`<div class="mock audit"><div class="mtop"><span class="dots"><i></i><i></i><i></i></span><span class="url">globalcert / audits / ISO 9001</span><span class="sd">Sample data</span></div><div class="body"><aside><span class="on">Overview</span><span>Documents</span><span>Clauses</span><span>Findings</span><span>Report</span></aside><div class="main">
  <div class="mc ringc"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="32" fill="none" stroke="#232326" stroke-width="8"/><circle class="rg" data-p=".86" cx="40" cy="40" r="32" fill="none" stroke="#EC2229" stroke-width="8" stroke-linecap="round" stroke-dasharray="201" stroke-dashoffset="201" transform="rotate(-90 40 40)"/></svg><div><h5>Compliance</h5><div class="v"><span data-to="86">0</span>%</div><span class="mpill">In review</span></div></div>
  <div class="mc"><h5>Non-conformities</h5><div class="ncs"><div class="maj"><b data-to="1">0</b><span>Major</span></div><div><b data-to="3">0</b><span>Minor</span></div><div><b data-to="5">0</b><span>Observ.</span></div></div></div>
  <div class="mc clauses"><h5>Clause scores</h5>${[['4.1 Context',92],['5.2 Quality policy',88],['7.5 Documented info',61,1],['8.4 Suppliers',74],['9.2 Internal audit',81]].map(([n,v,l])=>`<div class="cl${l?' low':''}"><span>${n}</span><div class="tr"><i style="--v:${v}%"></i></div><b>${v}</b></div>`).join('')}</div>
  <div class="mc aibox"><h5>AI analysis</h5><p class="type"></p></div><div class="mc report"><h5>Final audit report</h5><div class="pb"><i></i></div><span class="ok">Compiling findings…</span></div></div></div></div>`,
 safety:()=>`<div class="mock safety"><div class="mtop"><span class="dots"><i></i><i></i><i></i></span><span class="url">azure ai foundry / content filters</span><span class="sd">Sample data</span></div>
  <div class="flow"><div class="wire"></div><span class="pk"></span>${[['User input','<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>'],['AI model','<rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>'],['Safety filter','<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>'],['Safe response','<path d="M4 5h16v11H9l-5 4z"/>']].map(([n,p])=>`<div class="fnode"><svg viewBox="0 0 24 24">${p}</svg><b>${n}</b></div>`).join('')}</div>
  <div class="sgrid"><div class="mc prompt"><h5>Incoming prompt</h5><div class="q"></div><span class="verdict">Checking…</span><div class="resp"></div></div><div class="mc"><h5>Category / threshold</h5><div class="cats">${[['Hate','Medium'],['Sexual','Medium'],['Violence','Medium'],['Self-harm','Low']].map(([c,t])=>`<div class="cat" data-c="${c}"><span>${c}</span><em>${t}</em></div>`).join('')}</div></div>
  <div class="mc" style="grid-column:1/-1"><h5>Monitoring / last 24 h</h5><div class="monitor">${[38,52,44,61,70,58,49,66,74,63,55,68,72,60].map((h,i)=>`<i style="--h:${h}%;--b:${[4,6,3,9,5,7,4,6,10,5,3,8,6,4][i]}%"></i>`).join('')}</div></div></div></div>`,
 wellbeing:()=>`<div class="mock"><div class="mtop"><span class="dots"><i></i><i></i><i></i></span><span class="url">wellbeing / parent dashboard</span><span class="sd">Sample data</span></div><div class="wb"><div class="par">
  <div class="mc"><h5>Screen time today</h5><div class="big"><span data-to="2">0</span>h <span data-to="14">0</span>m</div><div class="lim"><i></i></div></div>
  <div class="mc"><h5>Usage</h5><div class="apps">${[['Video',82,'58m'],['Games',58,'41m'],['Learning',32,'22m'],['Chat',18,'13m']].map(([n,v,t])=>`<div class="app"><span>${n}</span><div class="tr"><i style="--v:${v}%"></i></div><b>${t}</b></div>`).join('')}</div></div>
  <div class="mc dev"><span>Child's phone</span><b><i></i>Online</b></div><div class="noti">Daily limit 75% reached — 46 min left</div></div>
  <div class="api"><small>Parent</small><div class="lane dn"><i></i></div><div class="node">API</div><div class="lane"><i></i></div><small>Device</small></div>
  <div class="phone"><div class="toast">Screen time: 30 minutes left today</div><div class="clock">16:42</div><div class="pair"><small>● Paired with parent</small><b>482 913</b></div><svg class="ring" viewBox="0 0 80 80"><circle cx="40" cy="40" r="30" fill="none" stroke="#232326" stroke-width="7"/><circle class="rg" data-p=".74" cx="40" cy="40" r="30" fill="none" stroke="#EC2229" stroke-width="7" stroke-linecap="round" stroke-dasharray="188.5" stroke-dashoffset="188.5" transform="rotate(-90 40 40)"/><text x="40" y="45" text-anchor="middle" fill="#fff" font-size="15" font-weight="700" font-family="Archivo, sans-serif">74%</text></svg></div></div></div>`
};
const THUMB={
 route:'<svg viewBox="0 0 300 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><g stroke="rgba(255,255,255,.06)"><path d="M0 45H300M0 90H300M0 135H300M60 0V180M120 0V180M180 0V180M240 0V180"/></g><path d="M30 140c30-50 60-10 90-60s70-40 90-6 40 40 70-30" fill="none" stroke="#EC2229" stroke-width="3" stroke-dasharray="7 7"><animate attributeName="stroke-dashoffset" from="0" to="-140" dur="6s" repeatCount="indefinite"/></path><g fill="#fff"><circle cx="30" cy="140" r="6"/><circle cx="120" cy="80" r="5"/><circle cx="210" cy="74" r="5"/><circle cx="280" cy="44" r="7" fill="#EC2229"/></g></svg>',
 wave:'<div style="display:flex;gap:5px;align-items:center;height:90px">'+Array.from({length:26},(_,i)=>`<i style="width:5px;border-radius:3px;background:${i%5===0?'#EC2229':'#fff'};height:30%;animation:wvb 1.3s ease-in-out ${-(i*.11).toFixed(2)}s infinite"></i>`).join('')+'</div><style>@keyframes wvb{50%{height:100%}}</style>',
 band:'<svg viewBox="0 0 120 120" width="130" height="130"><circle cx="60" cy="60" r="36" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="12"/><circle cx="60" cy="60" r="36" fill="none" stroke="#EC2229" stroke-width="12" stroke-dasharray="42 190" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="5s" repeatCount="indefinite"/></circle><circle cx="60" cy="60" r="20" fill="#232326"/><path d="M60 50l8 14H52z" fill="#fff"><animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite"/></path></svg>',
 seats:'<div><div style="width:190px;height:12px;border-top:2px solid #EC2229;border-radius:50% 50% 0 0/100% 100% 0 0;margin:0 auto 12px"></div><div style="display:grid;grid-template-columns:repeat(10,14px);gap:6px">'+Array.from({length:40},(_,i)=>`<i style="height:12px;border-radius:3px 3px 5px 5px;background:${[14,15].includes(i)?'#EC2229':[3,4,22,27,33].includes(i)?'rgba(255,255,255,.05)':'rgba(255,255,255,.2)'}"></i>`).join('')+'</div></div>'
};
const vis=p=>p.visual?`<div class="pprev" data-mock="${p.visual}">${MOCK[p.visual]()}</div>`:`<div class="pprev"><div class="thumbwrap">${THUMB[p.thumb]||''}</div></div>`;
function linkBtns(p){let h='';if(p.links.live)h+=`<a class="btn b-red sm" href="${esc(p.links.live)}" target="_blank" rel="noopener" data-stop>${ic('ext',15)}Live demo</a>`;if(p.links.github)h+=`<a class="btn b-card sm" href="${esc(p.links.github)}" target="_blank" rel="noopener" data-stop>${ic('gh',15)}GitHub</a>`;return h;}

/* ---------- projects (stacked) ---------- */
$('#pStack').innerHTML=PROJECTS.map((p,i)=>`<article class="pcard${i===0?' flag':''}" style="--i:${i}" data-cursor="view">
  <div><span class="ptag${i===0?'':' alt'}">${i===0?'★ Flagship project':esc(p.kicker)}</span>
   <div class="ttl"><span class="num">${String(i+1).padStart(2,'0')}</span><h3>${esc(p.title)}</h3></div>
   <p>${esc(p.summary)}</p><ul class="chips">${p.tags.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>
   <div class="row"><button class="btn b-card sm" type="button" data-open="${p.id}">${ic('book',15)}Case study</button>${linkBtns(p)}</div></div>
  ${vis(p)}</article>`).join('');
$('#moreRow').innerHTML=(CONFIG.github?`<a class="btn b-card" href="${esc(CONFIG.github)}" target="_blank" rel="noopener">${ic('gh',16)}Explore all my repositories</a>`:'')+`<a class="btn b-red magnetic" href="#contact">Start a project with me ${ic('arrow',16)}</a>`;
$('#bGrid').innerHTML=BEYOND.map(b=>`<article class="bcard rv"><span class="k">${esc(b.kicker)}</span><div class="ic">${ic(b.icon,24)}</div><h3>${esc(b.title)}</h3><p>${esc(b.text)}</p><ul class="chips">${b.tags.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></article>`).join('');

/* ---------- experience / journey / certs / soft ---------- */
$('#xGrid').innerHTML=EXPERIENCE.map(e=>`<article class="xc rv"><div class="top"><span class="dt">${esc(e.when.toUpperCase())}</span><span class="bd">INTERNSHIP</span></div><h3>${esc(e.role)}</h3><div class="org">${esc(e.org)}</div><p style="margin:0 0 16px;font-size:16px">${esc(e.text)}</p><h4>Key contributions</h4><ul class="pts">${e.points.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>${e.metric?`<div class="met"><b>${esc(e.metric[0])}</b><span>${esc(e.metric[1])}</span></div>`:''}<h4>Technologies</h4><ul class="chips">${e.tech.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></article>`).join('');
$('#tl').insertAdjacentHTML('beforeend',JOURNEY.map(j=>`<article class="ti rv${j.hot?' hot':''}"><span class="bd">${esc(j.badge)}</span><h3>${esc(j.title)}</h3><div class="sub">${esc(j.sub)}</div><p>${esc(j.text)}</p><div class="when">${esc(j.when)}</div></article>`).join(''));
$('#cGrid').innerHTML=CERTS.map(c=>`<article class="cc rv${c.course?' course':''}"><span class="ic">${ic(c.course?'book':'award',20)}</span><div><b>${esc(c.title)}</b><span>${esc(c.by)}</span></div></article>`).join('');
$('#ssGrid').innerHTML=SOFT.map(s=>`<article class="ss rv"><div class="e" aria-hidden="true">${s.e}</div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`).join('');

/* ---------- resume ---------- */
$('#rdBody').innerHTML=`<h3>${esc(CONFIG.fullName)}</h3><p>${esc(CONFIG.email)}</p>
 <h4>Profile</h4><p>Computer Science graduate (CGPA 8.86) with hands-on experience building data-driven applications in Python and Java, integrating custom software with third-party APIs and open-source AI models, and working with relational databases. Hands-on exposure to Microsoft Azure AI Foundry.</p>
 <h4>Experience</h4><p><b>AI Engineer Intern, Hrudai NCPL</b> — Dec 2025 to Jul 2026</p><ul><li>Independently designed, developed and deployed Ram Setu (ramsetu.ai), a full-stack AI travel planner</li><li>React / Next.js frontend, Node.js server and database; AI itineraries, flight and hotel search, maps, route planning and recommendations</li><li>Claude Code as the primary AI development environment</li></ul>
 <p style="margin-top:12px"><b>Intern, Ideabytes</b> — May 2025 to Jul 2025</p><ul><li>Integrated custom applications with LLaMA and Mistral</li><li>Built RAG pipelines combining database lookups with LLM responses</li><li>Voice-controlled assistant using the Google Forms API</li><li>90%+ accuracy in LLM output testing</li></ul>
 <h4>Skills</h4><ul><li>Languages: C, Java, Python</li><li>Databases and pipelines: MySQL; retrieval pipelines combining database queries with LLM outputs</li><li>Integration: LLaMA, Mistral; Google Forms API</li><li>Cloud: Microsoft Azure AI Foundry</li><li>Web: HTML, CSS, React, Next.js, Node.js</li><li>Tools: Unity3D, Software Testing, Power BI; UX design</li></ul>
 <h4>Education</h4><ul><li>B.Tech in Computer Science, GITAM University (2022–2026) — CGPA 8.86</li><li>Intermediate, Sri Chaitanya Junior College — 909/1000</li><li>Class X, KKR Gowtham Concept School — 595/600</li></ul>
 <h4>Certificates</h4><ul><li>IT Automation with Python — Google, via Coursera</li><li>AI with Python</li><li>Software Testing — NPTEL</li></ul>`;
const rd=$('#rd');let DL=null;
try{if(window.claude&&typeof window.claude.use==='function')window.claude.use('downloads').then(d=>{DL=d;}).catch(()=>{});}catch(e){}
function pdfBlob(){const el=$('#resume-pdf');if(!el)return null;const b=atob(el.textContent.trim());const u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return new Blob([u],{type:'application/pdf'});}
async function download(){const blob=pdfBlob();
  if(DL&&blob){try{await DL.save({filename:CONFIG.resumeFileName,data:blob});}catch(err){if(!(err&&err.code==='declined'))openResume();}return;}
  const a=document.createElement('a');a.href=blob?URL.createObjectURL(blob):CONFIG.resumeUrl;a.download=CONFIG.resumeFileName;a.rel='noopener';document.body.appendChild(a);a.click();setTimeout(()=>{if(blob)URL.revokeObjectURL(a.href);a.remove();},1500);}
function openResume(){closeMenu();rd.showModal?rd.showModal():rd.setAttribute('open','');}
document.addEventListener('click',e=>{if(e.target.closest('[data-resume-download]')){e.preventDefault();download();}if(e.target.closest('[data-resume-view]'))openResume();if(e.target.closest('[data-rd-close]'))rd.close();});
rd.addEventListener('click',e=>{if(e.target===rd)rd.close();});

/* ---------- case study ---------- */
const cs=$('#cs'),csBody=$('#csBody'),csPanel=$('#csPanel');let lastFocus=null,lenis=null;
function openCase(id,push=true){const p=PROJECTS.find(x=>x.id===id);if(!p)return;lastFocus=document.activeElement;const c=p.cs||{};let n=0;
  const sec=(t,h)=>h?`<section class="csec"><h3><b>${String(++n).padStart(2,'0')}</b>${t}</h3><div>${h}</div></section>`:'';
  const nx=PROJECTS[(PROJECTS.indexOf(p)+1)%PROJECTS.length];
  csBody.innerHTML=`<span class="kick">${esc(p.kicker)}</span><h2 id="csTitle">${esc(p.title)}</h2><p class="sum">${esc(p.summary)}</p><ul class="chips">${p.tags.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>
   ${p.visual?`<div class="cvis" data-mock="${p.visual}">${MOCK[p.visual]()}</div>`:`<div class="cvis" style="min-height:300px;display:grid;place-items:center">${THUMB[p.thumb]||''}</div>`}
   ${sec('Problem',c.problem&&`<p>${esc(c.problem)}</p>`)}${sec('Solution',c.solution&&`<p>${esc(c.solution)}</p>`)}
   ${sec('Architecture',c.architecture&&`<div class="arch">${c.architecture.map((a,i)=>`${i?'<em aria-hidden="true">→</em>':''}<span>${esc(a)}</span>`).join('')}</div>`)}
   ${sec('Technologies',`<ul class="chips">${p.tags.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`)}${sec('My contribution',c.contribution&&`<p>${esc(c.contribution)}</p>`)}
   ${sec('Challenges',c.challenges&&`<p>${esc(c.challenges)}</p>`)}${sec('Results',c.results&&`<p>${esc(c.results)}</p>`)}
   ${sec('Screenshots',c.screenshots&&c.screenshots.length?c.screenshots.map(s=>`<img src="${esc(s)}" alt="${esc(p.title)} screenshot" loading="lazy" style="border-radius:16px;margin-bottom:10px">`).join(''):'')}
   ${sec('Links',(p.links.live||p.links.github)?`<div class="row">${linkBtns(p)}</div>`:'')}
   <div class="next" data-open="${nx.id}" role="button" tabindex="0"><div><span style="font:600 12px var(--mono);letter-spacing:.1em;opacity:.8">NEXT PROJECT</span><br><b>${esc(nx.title)}</b></div><span class="btn b-white sm" aria-hidden="true">Open ${ic('arrow',15)}</span></div>`;
  cs.classList.add('open');requestAnimationFrame(()=>requestAnimationFrame(()=>cs.classList.add('show')));csPanel.scrollTop=0;document.documentElement.style.overflow='hidden';if(lenis)lenis.stop();
  $$('[data-mock]',csBody).forEach(v=>mio.observe(v));setTimeout(()=>$('.close',cs).focus(),60);if(push&&location.hash!=='#project/'+id)history.pushState(null,'','#project/'+id);}
function closeCase(push=true){if(!cs.classList.contains('open'))return;cs.classList.remove('show');setTimeout(()=>{cs.classList.remove('open');csBody.innerHTML='';},reduce?0:650);
  document.documentElement.style.overflow='';if(lenis)lenis.start();if(lastFocus&&lastFocus.focus)lastFocus.focus({preventScroll:true});if(push&&location.hash.startsWith('#project/'))history.pushState(null,'',location.pathname+location.search+'#projects');}
document.addEventListener('click',e=>{if(e.target.closest('[data-stop]'))return;const o=e.target.closest('[data-open]');if(o){e.preventDefault();openCase(o.dataset.open);}if(e.target.closest('[data-cs-close]'))closeCase();});
document.addEventListener('keydown',e=>{const o=e.target.closest&&e.target.closest('[data-open]');if(o&&o.tagName!=='BUTTON'&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openCase(o.dataset.open);}
  if(e.key==='Escape'&&cs.classList.contains('open'))closeCase();
  if(e.key==='Tab'&&cs.classList.contains('open')){const f=$$('button,a[href],[tabindex="0"]',cs).filter(x=>x.offsetParent!==null);if(!f.length)return;const a=f[0],b=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();b.focus();}else if(!e.shiftKey&&document.activeElement===b){e.preventDefault();a.focus();}}});
function route(){const m=location.hash.match(/^#project\/(.+)$/);if(m)openCase(m[1],false);else closeCase(false);}addEventListener('popstate',route);

/* ---------- mock engines ---------- */
const running=new Map();
function countUp(el,to,dur=1400){const t0=performance.now(),dec=+(el.dataset.dec||0);(function f(t){const k=clamp((t-t0)/dur,0,1),e=1-Math.pow(1-k,3);el.textContent=(to*e).toFixed(dec);if(k<1)requestAnimationFrame(f);})(t0);}
function startMock(v){if(running.has(v))return;v.classList.add('live');const type=v.dataset.mock,T=[];running.set(v,T);
  $$('[data-to]',v).forEach(el=>reduce?el.textContent=el.dataset.to:countUp(el,+el.dataset.to));
  $$('.rg',v).forEach(c=>{const L=+c.getAttribute('stroke-dasharray');c.style.transition='stroke-dashoffset 1.6s cubic-bezier(.2,.8,.2,1)';requestAnimationFrame(()=>c.style.strokeDashoffset=L*(1-+c.dataset.p));});
  if(type==='audit'){const p=$('.type',v),ok=$('.report .ok',v);const L=['Clause 7.5 — the document control procedure has no revision history. Add version and approval records.','Clause 8.4 — supplier evaluation criteria are defined, but re-evaluation dates are missing for two suppliers.','Clause 9.2 — the internal audit programme covers all processes. No action needed.'];let li=0;
    const ty=()=>{const s=L[li++%L.length];let i=0;const tk=setInterval(()=>{i+=2;p.innerHTML=esc(s.slice(0,i))+'<span class="caret2"></span>';if(i>=s.length){clearInterval(tk);T.push(setTimeout(ty,2600));}},28);T.push(tk);};
    if(reduce)p.textContent=L[0];else ty();const rp=()=>{ok.textContent='Compiling findings…';T.push(setTimeout(()=>ok.textContent='Report ready — 9 findings, 5 clauses',2700));};rp();T.push(setInterval(rp,4500));}
  if(type==='safety'){const EX=[{p:'Summarise this quarterly report in three bullet points.',ok:1,r:'Here\u2019s a three-point summary of the report…'},{p:'Explain how to seriously hurt someone.',c:'Violence',r:'Blocked by the input filter — Violence, above threshold.'},{p:'Translate this customer email into Hindi.',ok:1,r:'Here\u2019s the translated email…'},{p:'Write hateful jokes about a religion.',c:'Hate',r:'Blocked by the input filter — Hate, above threshold.'}];
    const q=$('.q',v),ver=$('.verdict',v),resp=$('.resp',v),pk=$('.pk',v),nodes=$$('.fnode',v),cats=$$('.cat',v);let k=0;const pos=n=>`calc(12% + ${n}*(76%/3) - 5px)`;
    const step=()=>{const ex=EX[k++%EX.length];q.textContent=ex.p;ver.className='verdict';ver.textContent='Checking…';resp.textContent='';nodes.forEach(n=>n.classList.remove('hot','block'));cats.forEach(c=>c.classList.remove('trip'));pk.classList.toggle('bad',!ex.ok);pk.style.transition='none';pk.style.left=pos(0);pk.style.opacity=1;nodes[0].classList.add('hot');
      (ex.ok?[1,2,3]:[1,2]).forEach((n,i)=>T.push(setTimeout(()=>{pk.style.transition='left .6s linear';pk.style.left=pos(n);nodes.forEach(x=>x.classList.remove('hot'));
        if(!ex.ok&&n===2){nodes[2].classList.add('block');cats.forEach(c=>c.classList.toggle('trip',c.dataset.c===ex.c));ver.className='verdict no';ver.textContent='Blocked / '+ex.c;resp.textContent=ex.r;}
        else{nodes[n].classList.add('hot');if(n===3){ver.className='verdict ok';ver.textContent='Allowed';resp.textContent=ex.r;}}},700+i*800)));T.push(setTimeout(step,4600));};step();}
  if(type==='wellbeing'){const t=$('.toast',v);const cyc=()=>{t.classList.add('show');T.push(setTimeout(()=>t.classList.remove('show'),2600));};T.push(setTimeout(cyc,1200));T.push(setInterval(cyc,5200));}}
function stopMock(v){const t=running.get(v);if(!t)return;t.forEach(x=>{clearTimeout(x);clearInterval(x);});running.delete(v);}
const mio=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?startMock(e.target):stopMock(e.target)),{threshold:.2});
$$('[data-mock]').forEach(v=>mio.observe(v));

/* ---------- typing roles ---------- */
const roleEl=$('#roleText');
if(!reduce){let ri=0,ci=ROLES[0].length,del=true;const tick=()=>{const w=ROLES[ri];if(del){ci--;roleEl.textContent=w.slice(0,ci);if(ci<=0){del=false;ri=(ri+1)%ROLES.length;}setTimeout(tick,ci<=0?300:45);}
  else{ci++;roleEl.textContent=ROLES[ri].slice(0,ci);if(ci>=ROLES[ri].length){del=true;setTimeout(tick,2200);}else setTimeout(tick,85);}};setTimeout(tick,4200);}

/* ---------- nav, menu, active ---------- */
const nav=$('#nav'),menuBtn=$('#menuBtn'),mmenu=$('#mmenu'),rail=$('#rail');
function closeMenu(){document.documentElement.classList.remove('menu-open');menuBtn.setAttribute('aria-expanded','false');mmenu.setAttribute('aria-hidden','true');if(lenis&&!cs.classList.contains('open'))lenis.start();}
menuBtn.addEventListener('click',()=>{const o=document.documentElement.classList.toggle('menu-open');menuBtn.setAttribute('aria-expanded',o);mmenu.setAttribute('aria-hidden',!o);if(lenis)o?lenis.stop():lenis.start();});
const toNav={home:'home',about:'about',skills:'skills',process:'skills',projects:'projects',beyond:'projects',experience:'experience',journey:'experience',certifications:'experience',soft:'experience',contact:'contact'};
const aio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const id=toNav[e.target.id];$$('[data-nav]').forEach(a=>{const on=a.dataset.nav===id;a.classList.toggle('active',on);on?a.setAttribute('aria-current','true'):a.removeAttribute('aria-current');});
  rail.classList.toggle('on-light',e.target.classList.contains('white'));}),{rootMargin:'-45% 0px -50% 0px'});
$$('main > section').forEach(s=>aio.observe(s));
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const id=a.getAttribute('href');if(id.length<2||id.startsWith('#project/'))return;const t=document.querySelector(id);if(!t)return;e.preventDefault();closeMenu();
  if(lenis)lenis.scrollTo(t,{offset:0,duration:1.4});else t.scrollIntoView({behavior:reduce?'auto':'smooth'});history.replaceState(null,'',id);});
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40),{passive:true});

/* ---------- form ---------- */
const cf=$('#cf'),cst=$('#cStatus');
cf.addEventListener('submit',e=>{e.preventDefault();const F={first:$('#fFirst'),last:$('#fLast'),email:$('#fEmail'),msg:$('#fMsg'),ok:$('#fOk')};let good=true;
  [[F.first,v=>v.trim().length>0],[F.email,v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())],[F.msg,v=>v.trim().length>4]].forEach(([el,t])=>{const g=t(el.value);el.parentElement.classList.toggle('bad',!g);el.setAttribute('aria-invalid',!g);if(!g&&good){el.focus();good=false;}});
  if(good&&!F.ok.checked){good=false;cst.textContent='Please tick the permission box so I can reply.';F.ok.focus();return;}
  if(!good){cst.textContent='Please fix the highlighted fields.';return;}
  const name=`${F.first.value.trim()} ${F.last.value.trim()}`.trim();const href=mailto(`Portfolio enquiry from ${name}`,`${F.msg.value.trim()}\n\n— ${name} (${F.email.value.trim()})`);
  const btn=$('.send',cf);btn.classList.add('busy');btn.disabled=true;
  setTimeout(()=>{const a=document.createElement('a');a.href=href;a.target='_top';document.body.appendChild(a);a.click();a.remove();btn.classList.remove('busy');btn.disabled=false;
    cst.innerHTML=`Your email app should now be open with the message ready. If not, write to <a href="${esc(href)}" style="text-decoration:underline">${esc(CONFIG.email)}</a>.`;},500);});
$$('.uf input,.uf textarea',cf).forEach(el=>el.addEventListener('input',()=>el.parentElement.classList.remove('bad')));

/* ---------- cursor, magnetic, hero parallax ---------- */
if(fine&&!reduce){document.documentElement.classList.add('has-cursor');const dot=$('.cur'),ring=$('.cur-ring');let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y;
  addEventListener('pointermove',e=>{x=e.clientX;y=e.clientY;dot.style.transform=`translate(${x}px,${y}px)`;},{passive:true});
  (function f(){rx+=(x-rx)*.18;ry+=(y-ry)*.18;ring.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(f);})();
  document.addEventListener('pointerover',e=>{const v=e.target.closest('.pprev');const l=e.target.closest('a,button,summary,.sr-row,.pc');ring.classList.toggle('view',!!v);ring.classList.toggle('link',!v&&!!l);});
  $$('.magnetic').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.22}px,${(e.clientY-r.top-r.height/2)*.35}px)`;});b.addEventListener('pointerleave',()=>b.style.transform='');});
}
/* hero image follows the cursor (and touch) */
if(!reduce){const me=$('#heroMe'),glow=$('.hero .glow'),badge=$('#badgePhoto img');let tx=0,ty=0,cx=0,cy=0,run=true;
  const set=(x,y)=>{tx=x/innerWidth-.5;ty=y/innerHeight-.5;};
  addEventListener('pointermove',e=>set(e.clientX,e.clientY),{passive:true});
  addEventListener('touchmove',e=>{const t=e.touches[0];if(t)set(t.clientX,t.clientY);},{passive:true});
  document.addEventListener('pointerleave',()=>{tx=0;ty=0;});
  new IntersectionObserver(es=>{run=es[0].isIntersecting||true;}).observe($('#home'));
  (function f(){cx+=(tx-cx)*.07;cy+=(ty-cy)*.07;const mob=innerWidth<=600;
    const x=cx*(mob?22:46),y=cy*(mob?12:22);
    me.style.translate=`calc(${mob?'50%':'0px'} + ${x.toFixed(1)}px) ${y.toFixed(1)}px`;
    const mag=Math.hypot(cx,cy);me.style.rotate=mag>.001?`${(-cy).toFixed(3)} ${cx.toFixed(3)} 0 ${(mag*16).toFixed(2)}deg`:'0deg';
    glow.style.translate=`${(-cx*60).toFixed(1)}px ${(-cy*40).toFixed(1)}px`;
    if(badge)badge.style.translate=`${(cx*14).toFixed(1)}px ${(cy*10).toFixed(1)}px`;
    requestAnimationFrame(f);})();}
$('.pprev')&&document.addEventListener('click',e=>{const p=e.target.closest('.pprev');if(p){const c=p.closest('.pcard');const b=c&&$('[data-open]',c);if(b)openCase(b.dataset.open);}});

/* ---------- split ---------- */
function split(el){const t=el.textContent.trim();el.setAttribute('aria-label',t);el.innerHTML=t.split(/\s+/).map(w=>`<span class="w" aria-hidden="true"><span class="wi">${esc(w)}</span></span>`).join(' ');return $$('.wi',el);}

/* ---------- animations ---------- */
const G=window.gsap,ST=window.ScrollTrigger;
const loader=$('#loader');
if(G&&ST&&!reduce){
  G.registerPlugin(ST);document.documentElement.classList.add('anim');
  if(window.Lenis){lenis=new Lenis({duration:1.15,smoothWheel:true});lenis.on('scroll',ST.update);G.ticker.add(t=>lenis.raf(t*1000));G.ticker.lagSmoothing(0);lenis.stop();}
  const tl=G.timeline({defaults:{ease:'expo.out'},onComplete:()=>{loader.remove();if(lenis)lenis.start();}});
  tl.from('#loaderName span',{yPercent:110,opacity:0,duration:.9,stagger:.05})
    .to('#loaderName',{scale:.9,opacity:0,duration:.6,ease:'power3.in'},'+=.45')
    .to(loader,{clipPath:'inset(0 0 100% 0)',duration:1.05,ease:'expo.inOut'},'-=.25')
    .from('#meWrap',{y:120,opacity:0,duration:1.4},'-=.7')
    .from('#nav .bar',{y:-30,opacity:0,duration:1},'-=1.1')
    .from('.hero .h-in',{y:40,opacity:0,duration:1,stagger:.1},'-=1.1')
    .from('.spinb,.rail',{scale:.6,opacity:0,duration:.8,ease:'back.out(1.8)'},'-=.8');
  $$('[data-split]').forEach(el=>{const w=split(el);G.from(w,{yPercent:110,duration:1.05,ease:'expo.out',stagger:.05,scrollTrigger:{trigger:el,start:'top 86%'}});});
  G.utils.toArray('.rv').forEach(el=>G.to(el,{opacity:1,y:0,duration:1,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 90%'}}));
  G.to('#meWrap',{yPercent:10,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  G.to('.hero .copy',{yPercent:-30,opacity:0,ease:'none',scrollTrigger:{trigger:'.hero',start:'center center',end:'bottom top',scrub:true}});
  G.fromTo('#idcard',{'--sr':'-14deg'},{'--sr':'6deg',ease:'none',scrollTrigger:{trigger:'#about',start:'top bottom',end:'center center',scrub:1}});
  G.utils.toArray('.star').forEach(s=>G.to(s,{yPercent:-120,rotate:90,ease:'none',scrollTrigger:{trigger:s.parentElement,start:'top bottom',end:'bottom top',scrub:true}}));
  G.from('.sr-row',{'--s':0,duration:1.2,ease:'expo.out',stagger:.02,scrollTrigger:{trigger:'#skGrid',start:'top 80%'}});
  const pm=$('#pmask');if(pm&&innerWidth>900){const L=pm.getTotalLength();pm.style.strokeDasharray=L;pm.style.strokeDashoffset=L;G.to(pm,{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'#proc',start:'top 60%',end:'bottom 70%',scrub:true}});
    G.utils.toArray('.pc').forEach(c=>G.from(c,{scale:.6,opacity:0,rotate:0,duration:1,ease:'back.out(1.5)',scrollTrigger:{trigger:c,start:'top 85%'}}));G.from('.ship',{opacity:0,y:20,duration:1,scrollTrigger:{trigger:'.ship',start:'top 90%'}});}
  if(innerWidth>900){const cards=G.utils.toArray('.pcard');cards.forEach((c,i)=>{if(i===cards.length-1)return;G.to(c,{scale:.94,opacity:.55,ease:'none',scrollTrigger:{trigger:cards[i+1],start:'top 85%',end:'top 20%',scrub:true}});});}
  G.fromTo('#tlLine',{'--p':0},{'--p':1,ease:'none',scrollTrigger:{trigger:'#tl',start:'top 70%',end:'bottom 70%',scrub:true}});
  G.utils.toArray('.ti').forEach((t,i)=>G.fromTo(t,{x:innerWidth>860?(i%2?-60:60):30},{x:0,duration:1.1,ease:'expo.out',scrollTrigger:{trigger:t,start:'top 88%'}}));
  G.fromTo('#bigword',{xPercent:12},{xPercent:-12,ease:'none',scrollTrigger:{trigger:'#contact',start:'top bottom',end:'bottom top',scrub:true}});
  G.from('#fname span',{yPercent:100,duration:1.2,stagger:.06,ease:'expo.out',scrollTrigger:{trigger:'#fname',start:'top 95%'}});
  addEventListener('load',()=>ST.refresh());
}else{loader.remove();document.documentElement.classList.add('no-anim');}
route();
})();
