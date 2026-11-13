(function(){
var $=function(s){return document.querySelector(s)},$$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var root=document.documentElement;
$("#th").onclick=function(){var s=root.getAttribute("data-theme"),d=s?s==="dark":matchMedia("(prefers-color-scheme:dark)").matches;root.setAttribute("data-theme",d?"light":"dark")};
var mb=$("#mb"),ln=$(".links");
mb.onclick=function(){var o=ln.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
$$(".links a").forEach(function(a){a.onclick=function(){ln.classList.remove("open");mb.setAttribute("aria-expanded",false)}});
if(!matchMedia("(prefers-reduced-motion:reduce)").matches){$$("[data-count]").forEach(function(el){var end=+el.dataset.count,dec=+(el.dataset.dec||0),suf=el.dataset.suf||"",t0=performance.now();(function tick(t){var p=Math.min((t-t0)/1400,1),v=end*(1-Math.pow(1-p,3));el.textContent=(dec?v.toFixed(dec):Math.round(v).toLocaleString())+suf;if(p<1)requestAnimationFrame(tick)})(t0)})}
var sh=$("#sh"),sw=$("#sw"),shl=$("#shl"),tooth=$("#tooth"),a=[217,201,138],b=[251,251,246];
function col(){var t=sh.value/7;return "rgb("+a.map(function(x,i){return Math.round(x+(b[i]-x)*t)}).join(",")+")"}
sw.style.background=col();
sh.oninput=function(){var c=col();sw.style.background=c;tooth.style.fill=c;shl.textContent=sh.value==0?"Natural shade":sh.value+(sh.value==1?" shade brighter":" shades brighter")};
var tr=["Teeth whitening","Check-up & cleaning","Braces & aligners","Dental implants","Children’s dentistry"],sel=$("select[name=t]");
$$("#services .card").forEach(function(c,i){c.tabIndex=0;function go(e){if(e.target.closest("input,a")&&e.target.closest("a")){sel.value=tr[i];return}if(e.target.closest("input"))return;sel.value=tr[i];$("#book").scrollIntoView({behavior:"smooth"})}c.addEventListener("click",go);c.addEventListener("keydown",function(e){if(e.key==="Enter"&&e.target===c)go(e)})});
var slot="";$$("#sl button").forEach(function(btn){btn.onclick=function(){$$("#sl button").forEach(function(o){o.setAttribute("aria-pressed","false")});btn.setAttribute("aria-pressed","true");slot=btn.textContent}});
$("#dt").min=new Date().toISOString().slice(0,10);
$$("details").forEach(function(d){d.addEventListener("toggle",function(){if(d.open)$$("details").forEach(function(o){if(o!==d)o.open=false})})});
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){$$(".links a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id)})}})},{rootMargin:"-40% 0px -55% 0px"});$$("section[id]").forEach(function(s){io.observe(s)})}
$("#f").addEventListener("submit",function(e){e.preventDefault();var f=this,ok=$("#ok");ok.textContent="Thank you, "+f.n.value+". We’ll confirm your "+f.t.value.toLowerCase()+(f.d.value?" on "+f.d.value:"")+(slot?" at "+slot:"")+" shortly.";ok.style.display="block";f.reset();$$("#sl button").forEach(function(o){o.setAttribute("aria-pressed","false")});slot=""});
})();
