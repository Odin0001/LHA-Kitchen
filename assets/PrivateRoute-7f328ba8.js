import{r as s,j as a,O as g,N as i}from"./index-56e58669.js";import{g as c,o as f}from"./index-e3d5d3f4-e6ed04b4.js";import{S}from"./Spinner-82b55c3e.js";function h(){const[t,e]=s.useState(!1),[o,n]=s.useState(!0);return s.useEffect(()=>{const r=c();f(r,u=>{u&&e(!0),n(!1)})},[]),{loggedIn:t,checkingStatus:o}}const x=()=>{const{loggedIn:t,checkingStatus:e}=h();return e?a.jsx(S,{}):t?a.jsx(g,{}):a.jsx(i,{to:"login"})};export{x as default};