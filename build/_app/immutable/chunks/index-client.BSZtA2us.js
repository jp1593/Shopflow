import{w as v,B as r,x as u,C as _,z as l,D as E,E as b,H as T,F as g,G as A,I as d,A as k,c as o,J as x,a as R,b as w}from"./runtime.CL3famCj.js";function F(a){throw new Error("lifecycle_outside_component")}function C(a,e,m,i=null,h=!1){l&&E();var n=a,t=null,s=null,f=null,p=h?b:0;v(()=>{if(f===(f=!!e()))return;let c=!1;if(l){const y=n.data===T;f===y&&(n=g(),A(n),d(!1),c=!0)}f?(t?r(t):t=u(()=>m(n)),s&&_(s,()=>{s=null})):(s?r(s):i&&(s=u(()=>i(n))),t&&_(t,()=>{t=null})),c&&d(!0)},p),l&&(n=k)}function D(a){o===null&&F(),x&&o.l!==null?N(o).m.push(a):R(()=>{const e=w(a);if(typeof e=="function")return e})}function N(a){var e=a.l;return e.u??(e.u={a:[],b:[],m:[]})}export{C as i,D as o};
