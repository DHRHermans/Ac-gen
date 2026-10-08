(()=>{
const $=id=>document.getElementById(id),NS='http://www.w3.org/2000/svg';
function el(s,t,a={},text){const e=document.createElementNS(NS,t);Object.entries(a).forEach(([k,v])=>e.setAttribute(k,v));if(text!==undefined)e.textContent=text;s.appendChild(e);return e;}
function draw(){
 const mode=$('terminal-mode').value,s=$('terminal-svg'),w=Math.max(280,s.parentElement.clientWidth),h=225,pad=48,xs=[pad,w/2,w-pad],top=80,bottom=167;
 s.innerHTML='';s.setAttribute('viewBox',`0 0 ${w} ${h}`);
 function line(x1,y1,x2,y2,bold=false){el(s,'line',{x1,y1,x2,y2,stroke:bold?'var(--foreground)':'var(--border)','stroke-width':bold?6:2,'stroke-linecap':'round'});}
 function text(x,y,value){el(s,'text',{x,y,'text-anchor':'middle'},value);}
 for(let i=0;i<3;i++){text(xs[i],20,'L'+(i+1));line(xs[i],28,xs[i],top);}
 if(mode==='star'){line(xs[0],bottom,xs[2],bottom,true);}
 if(mode==='delta')xs.forEach(x=>line(x,top,x,bottom,true));
 for(let row=0;row<2;row++)for(let i=0;i<3;i++){const y=row?bottom:top,label=row?['W2','U2','V2'][i]:['U1','V1','W1'][i];el(s,'circle',{cx:xs[i],cy:y,r:8,fill:'var(--background)',stroke:'var(--foreground)','stroke-width':2});text(xs[i],row?bottom+30:top-17,label);}
 let rms=Number($('ac-u').value);if(!Number.isFinite(rms))rms=230;const f=n=>n.toLocaleString('nl-BE',{maximumFractionDigits:3});
 $('terminal-details').textContent=mode==='star'?`Ster: U2, V2 en W2 vormen het sterpunt N. L1 = U1, L2 = V1, L3 = W1.\nUf = ${f(rms)} V per wikkeling → UL = √3 Uf = ${f(rms*Math.sqrt(3))} V effectief.`:mode==='delta'?`Driehoek: U1–W2, V1–U2 en W1–V2 zijn de drie knooppunten. L1, L2 en L3 sluiten daarop aan.\nUf = ${f(rms)} V per wikkeling → UL = Uf = ${f(rms)} V effectief. Er is geen sterpunt.`:'Open: geen bruggen. U1–U2, V1–V2 en W1–W2 zijn drie afzonderlijke windingen. L1, L2 en L3 zijn hier alleen de mogelijke lijnlabels bij de beginpunten.';
}
$('terminal-mode').addEventListener('change',draw);$('ac-u').addEventListener('change',draw);new ResizeObserver(draw).observe($('terminal-svg').parentElement);draw();
})();
