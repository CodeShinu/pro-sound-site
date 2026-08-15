const services=[
 {label:'EXPERIÊNCIA A BORDO',title:'Seu trajeto com outra trilha sonora.',copy:'Soluções de som e centrais multimídia para deixar cada viagem mais conectada, prática e envolvente.',icon:'♪'},
 {label:'PROTEÇÃO EM MOVIMENTO',title:'Mais controle. Mais tranquilidade.',copy:'Alarmes e rastreadores para reforçar a proteção do veículo e acompanhar o que importa para você.',icon:'⌖'},
 {label:'ESTILO & PRIVACIDADE',title:'Visual marcante, cuidado em cada detalhe.',copy:'Insulfilm e envelopamento para personalizar o acabamento, reforçar a privacidade e renovar a presença do carro.',icon:'◩'},
 {label:'PRATICIDADE NO DIA A DIA',title:'Os detalhes que completam seu carro.',copy:'Acessórios em geral para trazer mais conveniência, organização e personalidade à sua rotina ao volante.',icon:'+'}
];
const header=document.querySelector('.header'), menu=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav'), preview=document.querySelector('.service-preview');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>100),{passive:true});
const setMenu=open=>{menu.classList.toggle('open',open);nav.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')};
menu.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
nav.addEventListener('click',e=>{if(e.target===nav)setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false);menu.focus()}});
document.querySelectorAll('.service').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.service').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false')});btn.classList.add('active');btn.setAttribute('aria-selected','true');const s=services[btn.dataset.service];preview.animate([{opacity:.55,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:380});preview.querySelector('.preview-label').textContent=s.label;preview.querySelector('h3').textContent=s.title;preview.querySelector('.preview-copy').textContent=s.copy;preview.querySelector('.preview-orbit span').textContent=s.icon}));
const galleryToggle=document.querySelector('.gallery-toggle'),workGrid=document.querySelector('.work-grid');
galleryToggle?.addEventListener('click',()=>{const expanded=workGrid.classList.toggle('expanded');galleryToggle.setAttribute('aria-expanded',expanded);galleryToggle.innerHTML=expanded?'Mostrar menos <span>−</span>':'Ver mais trabalhos <span>＋</span>';if(expanded)document.querySelectorAll('.gallery-extra').forEach(el=>io.observe(el))});
const io=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const sectionLinks=[...document.querySelectorAll('.header .nav a[href^="#"]')];
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;sectionLinks.forEach(link=>{const active=link.getAttribute('href')===`#${entry.target.id}`;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')})}),{rootMargin:'-35% 0px -55%',threshold:0});
document.querySelectorAll('main section[id]').forEach(section=>sectionObserver.observe(section));
document.querySelectorAll('.work-item img').forEach(img=>img.addEventListener('error',()=>img.closest('.work-item')?.classList.add('image-error')));
if(matchMedia('(pointer:fine)').matches){const cursor=document.querySelector('.cursor');addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('hover'));el.addEventListener('mouseleave',()=>cursor.classList.remove('hover'))})}
document.getElementById('year').textContent=new Date().getFullYear();
