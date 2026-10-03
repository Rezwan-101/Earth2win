(function(){var cv=document.getElementById('gx'),c=cv.getContext('2d'),root=document.documentElement,btn=document.getElementById('theme'),W,H,P=[],R0,still=matchMedia('(prefers-reduced-motion: reduce)').matches;
var COL={light:['124,58,237','13,148,136','192,38,211','22,163,74'],dark:['167,139,250','45,212,191','240,171,252','134,239,172','255,255,255']};
function label(){var d=root.dataset.theme==='dark';btn.textContent=d?'☀ Light':'🌙 Dark';btn.setAttribute('aria-pressed',d)}
btn.onclick=function(){var t=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('ew-theme',t)}catch(e){}label();if(still)draw(0)};
function size(){var d=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;c.setTransform(d,0,0,d,0,0);R0=Math.max(W,H)*.8;P=[];var n=W<700?900:1700;
for(var i=0;i<n;i++){var r=Math.pow(Math.random(),.65)*R0,arm=i%4,j=(Math.random()+Math.random()+Math.random()-1.5)*(.55-.3*r/R0);P.push({r:r,a:arm*Math.PI/2+r/R0*3.6+j,s:Math.random()*1.7+.4,k:i%5,t:Math.random()*6.28})}}
function draw(t){var dk=root.dataset.theme==='dark',cl=dk?COL.dark:COL.light,x0=W*.62,y0=H*.45;c.globalCompositeOperation='source-over';c.fillStyle=dk?'#06050e':'#ffffff';c.fillRect(0,0,W,H);
var g=c.createRadialGradient(x0,y0,0,x0,y0,R0*.45);g.addColorStop(0,dk?'rgba(167,139,250,.30)':'rgba(124,58,237,.14)');g.addColorStop(.4,dk?'rgba(45,212,191,.08)':'rgba(13,148,136,.05)');g.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g;c.fillRect(0,0,W,H);
if(dk)c.globalCompositeOperation='lighter';
for(var i=0;i<P.length;i++){var p=P[i],a=p.a+t*.000045*(1.3-p.r/R0),x=x0+Math.cos(a)*p.r,y=y0+Math.sin(a)*p.r*.5;if(x<-5||x>W+5||y<-5||y>H+5)continue;
var tw=.65+.35*Math.sin(t*.0015+p.t),al=(dk?.55:.32)*tw*(1-p.r/R0*.55);c.fillStyle='rgba('+cl[p.k%cl.length]+','+al.toFixed(3)+')';c.beginPath();c.arc(x,y,p.s*(dk?1:1.1),0,6.283);c.fill()}}
function loop(t){draw(t);requestAnimationFrame(loop)}
size();label();addEventListener('resize',function(){size();if(still)draw(0)});if(still)draw(0);else requestAnimationFrame(loop)})();
