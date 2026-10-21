const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
function card(p){return `<article class="card" data-field="${p.field}" data-cred="${p.cred}"><span class="tag">${FIELDS[p.field]}</span><span class="tag">${p.cred}</span>${FEATURED.includes(p.n)?'<span class="tag">★ Featured</span>':''}<h3 style="margin-top:.7rem">${p.name}</h3><p class="meta">${p.h} hours · ${p.w} weeks</p><p class="fee">${money(p.loc)} domestic · ${money(p.intl)} international</p><p style="margin-top:.8rem"><a class="more" href="program.html?p=${p.id}">Program details →</a></p></article>`}
/* catalogue */
const cat=$('#catalogue');
if(cat){let f='all';const q=$('#q');
 const draw=()=>{const t=(q.value||'').toLowerCase();const list=PROGRAMS.filter(p=>(f==='all'||p.field===f||p.cred===f)&&p.name.toLowerCase().includes(t));cat.innerHTML=list.map(card).join('')||'<p class="ph">No programs match. Try another filter.</p>';$('#count').textContent=list.length+' of '+PROGRAMS.length+' programs';$$('.reveal',cat).forEach(e=>e.classList.add('in'))};
 $$('.chip').forEach(c=>c.addEventListener('click',()=>{$$('.chip').forEach(x=>x.setAttribute('aria-pressed','false'));c.setAttribute('aria-pressed','true');f=c.dataset.f;draw()}));
 q.addEventListener('input',draw);const h=new URLSearchParams(location.search).get('field');if(h){const c=$(`.chip[data-f="${h}"]`);c&&c.click()}else draw();}
/* featured on home */
const fe=$('#featured');if(fe)fe.innerHTML=[20,24,9].map(n=>card(PROGRAMS[n-1])).join('');
/* fee table */
const ft=$('#feetable');if(ft)ft.innerHTML=PROGRAMS.map(p=>`<tr><td>${p.n}</td><td><a href="program.html?p=${p.id}">${p.name}</a></td><td class="n">${p.h}</td><td class="n">${p.w}</td><td class="n">${money(p.loc)}</td><td class="n">${money(p.intl)}</td></tr>`).join('');
/* program detail */
const pd=$('#program');
if(pd){const id=new URLSearchParams(location.search).get('p');const p=PROGRAMS.find(x=>x.id===id)||PROGRAMS[19];document.title=p.name+' | CCHS';
 const rel=PROGRAMS.filter(x=>x.field===p.field&&x.n!==p.n).slice(0,3);
 pd.innerHTML=`<p class="crumb"><a href="programs.html">Programs</a> / ${FIELDS[p.field]}</p><span class="tag">${p.cred}</span><span class="tag">${FIELDS[p.field]}</span><h1 style="margin-top:.6rem">${p.name}</h1>
 <div class="kv"><div><b>${p.h}</b><span>instructional hours</span></div><div><b>${p.w}</b><span>weeks</span></div><div><b>${money(p.loc)}</b><span>tuition, domestic students</span></div><div><b>${money(p.intl)}</b><span>tuition, international students</span></div></div>
 <div class="two"><div><h2>At a glance</h2><ul style="color:var(--muted);padding-left:1.2rem;line-height:2">
 <li>Next start date: <span class="phx">Intake dates to be confirmed by CCHS</span></li>
 <li>Delivery: <span class="phx">In-person / online / hybrid to be confirmed</span></li>
 <li>Campus: 705 Progress Ave, Scarborough, Toronto</li>
 <li>Course outline and learning outcomes: <span class="phx">Curriculum summary to be supplied by CCHS</span></li>
 <li>Admission: see <a href="admissions.html">admission requirements</a></li></ul>
 <p class="note" style="margin-top:1rem">Fees from the official CCHS program sheet. Funding such as Better Jobs Ontario may cover tuition for eligible students; see <a href="tuition.html">Tuition &amp; Funding</a>.</p></div>
 <div class="card"><h3>Interested?</h3><p>Book a free advising call or request the full program outline.</p><div class="ctas" style="margin-top:1rem"><a class="btn btn-g" href="contact.html?program=${p.id}">Request info</a><a class="btn btn-o" href="tuition.html#calc">Estimate my cost</a></div></div></div>
 ${rel.length?`<h2 style="margin-top:3rem">Related programs</h2><div class="grid">${rel.map(card).join('')}</div>`:''}`;$$('.reveal',pd).forEach(e=>e.classList.add('in'))}
/* fee calculator */
const cs=$('#c-prog');
if(cs){cs.innerHTML=PROGRAMS.map(p=>`<option value="${p.n}">${p.name}</option>`).join('');cs.value=20;
 const calc=()=>{const p=PROGRAMS[cs.value-1],intl=$('#c-type').value==='intl',fee=intl?p.intl:p.loc,fund=Math.min(+$('#c-fund').value||0,fee),m=Math.max(1,Math.round(p.w/4.33)),bal=fee-fund;
  $('#c-out').innerHTML=`<p>Tuition: <b>${money(fee)}</b> · ${p.w} weeks</p><p>Less funding/credits entered: <b>−${money(fund)}</b></p><p class="big grad">${money(bal)}</p><p class="note">Spread evenly over ~${m} months that would be about <b>${money(Math.round(bal/m))}/month</b> — an illustration only. <span class="phx">Actual payment plan terms (deposit, schedule, any fees) to be confirmed by CCHS</span></p>`};
 ['c-prog','c-type','c-fund'].forEach(i=>$('#'+i).addEventListener('input',calc));calc()}
/* quiz */
const qz=$('#quiz');
if(qz)qz.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(qz),f=d.get('field'),t=d.get('time'),g=d.get('goal');if(!f||!t||!g){$('#quiz-out').innerHTML='<p class="note">Please answer all three questions.</p>';return}
 let l=PROGRAMS.filter(p=>p.field===f);if(g==='post')l=l.filter(p=>p.cred==='Post-Graduate Diploma'||p.cred==='Advanced Diploma').concat(l);if(g==='start')l=l.filter(p=>p.cred==='Diploma'||p.cred==='Certificate').concat(l);
 l.sort((a,b)=>t==='short'?a.w-b.w:t==='long'?b.w-a.w:Math.abs(a.w-40)-Math.abs(b.w-40));l=[...new Map(l.map(p=>[p.n,p])).values()].slice(0,3);
 $('#quiz-out').innerHTML=`<h3>Your top matches</h3><div class="grid">${l.map(card).join('')}</div><p class="note" style="margin-top:1rem">These are suggestions only. An advisor will confirm fit and admission requirements.</p>`;$$('#quiz-out .reveal').forEach(e=>e.classList.add('in'))});
/* contact prefill */
const cp=$('#f-prog');if(cp){cp.innerHTML='<option value="">Not sure yet</option>'+PROGRAMS.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');const v=new URLSearchParams(location.search).get('program');if(v)cp.value=v}
