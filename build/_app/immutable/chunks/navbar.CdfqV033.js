import{K as ae,w as re,L as W,z as N,G as L,D as se,M as ne,N as Z,H as ie,F as U,I as O,A as S,O as M,B as $,x as J,C as fe,P as le,Q as X,R as k,S as b,T as m,U as ve,V as te,W as ue,y as oe,X as de,Y as _e,Z as ce,_ as he,o as pe,$ as q,a0 as Ee,a1 as we,a2 as xe,a3 as z,a4 as Ae}from"./runtime.CL3famCj.js";import{a as ge,t as Ne}from"./disclose-version.x3bYR0Z8.js";import"./legacy.C4kSnO4a.js";function He(r,e){return e}function Te(r,e,a,i){for(var f=[],u=e.length,o=0;o<u;o++)ve(e[o].e,f,!0);var _=u>0&&f.length===0&&a!==null;if(_){var w=a.parentNode;te(w),w.append(a),i.clear(),T(r,e[0].prev,e[u-1].next)}ue(f,()=>{for(var h=0;h<u;h++){var d=e[h];_||(i.delete(d.k),T(r,d.prev,d.next)),oe(d.e,!_)}})}function Le(r,e,a,i,f,u=null){var o=r,_={flags:e,items:new Map,first:null},w=(e&W)!==0;if(w){var h=r;o=N?L(de(h)):h.appendChild(ae())}N&&se();var d=null,I=!1;re(()=>{var s=a(),t=ne(s)?s:s==null?[]:Z(s),v=t.length;if(I&&v===0)return;I=v===0;let A=!1;if(N){var p=o.data===ie;p!==(v===0)&&(o=U(),L(o),O(!1),A=!0)}if(N){for(var E=null,x,c=0;c<v;c++){if(S.nodeType===8&&S.data===_e){o=S,A=!0,O(!1);break}var n=t[c],l=i(n,c);x=j(S,_,E,null,n,l,c,f,e),_.items.set(l,x),E=x}v>0&&L(U())}if(!N){var R=ce;Ie(t,_,o,f,e,(R.f&M)!==0,i)}u!==null&&(v===0?d?$(d):d=J(()=>u(o)):d!==null&&fe(d,()=>{d=null})),A&&O(!0),a()}),N&&(o=S)}function Ie(r,e,a,i,f,u,o){var B,V,F,G;var _=(f&he)!==0,w=(f&(k|m))!==0,h=r.length,d=e.items,I=e.first,s=I,t,v=null,A,p=[],E=[],x,c,n,l;if(_)for(l=0;l<h;l+=1)x=r[l],c=o(x,l),n=d.get(c),n!==void 0&&((B=n.a)==null||B.measure(),(A??(A=new Set)).add(n));for(l=0;l<h;l+=1){if(x=r[l],c=o(x,l),n=d.get(c),n===void 0){var R=s?s.e.nodes_start:a;v=j(R,e,v,v===null?e.first:v.next,x,c,l,i,f),d.set(c,v),p=[],E=[],s=v.next;continue}if(w&&Ce(n,x,l,f),n.e.f&M&&($(n.e),_&&((V=n.a)==null||V.unfix(),(A??(A=new Set)).delete(n))),n!==s){if(t!==void 0&&t.has(n)){if(p.length<E.length){var y=E[0],g;v=y.prev;var Y=p[0],D=p[p.length-1];for(g=0;g<p.length;g+=1)P(p[g],y,a);for(g=0;g<E.length;g+=1)t.delete(E[g]);T(e,Y.prev,D.next),T(e,v,Y),T(e,D,y),s=y,v=D,l-=1,p=[],E=[]}else t.delete(n),P(n,s,a),T(e,n.prev,n.next),T(e,n,v===null?e.first:v.next),T(e,v,n),v=n;continue}for(p=[],E=[];s!==null&&s.k!==c;)(u||!(s.e.f&M))&&(t??(t=new Set)).add(s),E.push(s),s=s.next;if(s===null)continue;n=s}p.push(n),v=n,s=n.next}if(s!==null||t!==void 0){for(var C=t===void 0?[]:Z(t);s!==null;)(u||!(s.e.f&M))&&C.push(s),s=s.next;var H=C.length;if(H>0){var ee=f&W&&h===0?a:null;if(_){for(l=0;l<H;l+=1)(F=C[l].a)==null||F.measure();for(l=0;l<H;l+=1)(G=C[l].a)==null||G.fix()}Te(e,C,ee,d)}}_&&le(()=>{var K;if(A!==void 0)for(n of A)(K=n.a)==null||K.apply()}),X.first=e.first&&e.first.e,X.last=v&&v.e}function Ce(r,e,a,i){i&k&&b(r.v,e),i&m?b(r.i,a):r.i=a}function j(r,e,a,i,f,u,o,_,w){var h=(w&k)!==0,d=(w&Ee)===0,I=h?d?pe(f):q(f):f,s=w&m?q(o):o,t={i:s,v:I,k:u,a:null,e:null,prev:a,next:i};try{return t.e=J(()=>_(r,I,s),N),t.e.prev=a&&a.e,t.e.next=i&&i.e,a===null?e.first=t:(a.next=t,a.e.next=t.e),i!==null&&(i.prev=t,i.e.prev=t.e),t}finally{}}function P(r,e,a){for(var i=r.next?r.next.e.nodes_start:a,f=e?e.e.nodes_start:a,u=r.e.nodes_start;u!==i;){var o=we(u);f.before(u),u=o}}function T(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Oe(r,e,a,i){var f=r.__attributes??(r.__attributes={});N&&(f[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||f[e]!==(f[e]=a)&&(e==="style"&&"__styles"in r&&(r.__styles={}),e==="loading"&&(r[xe]=a),a==null?r.removeAttribute(e):typeof a!="string"&&Se(r).includes(e)?r[e]=a:r.setAttribute(e,a))}var Q=new Map;function Se(r){var e=Q.get(r.nodeName);if(e)return e;Q.set(r.nodeName,e=[]);for(var a,i=z(r),f=Element.prototype;f!==i;){a=Ae(i);for(var u in a)a[u].set&&e.push(u);i=z(i)}return e}var ye=Ne('<nav class="svelte-1ljhwvx"><div class="navbar-container svelte-1ljhwvx"><div class="logo svelte-1ljhwvx"><div class="logo-text svelte-1ljhwvx">ShopFlow</div></div> <ul class="nav-links svelte-1ljhwvx"></ul> <div class="menu svelte-1ljhwvx"></div></div></nav>');function ke(r){var e=ye();ge(r,e)}export{ke as N,Le as e,He as i,Oe as s};