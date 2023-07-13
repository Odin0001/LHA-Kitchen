import{f as m,r as a,j as e,g as p,d as h,a as g}from"./index-56e58669.js";import{S as u}from"./Spinner-82b55c3e.js";import{a as f}from"./index.esm-513aad6d.js";import"./iconBase-4240f7eb.js";const y=()=>{const r=m(),[s,n]=a.useState(null),[o,c]=a.useState(!0),[d,l]=a.useState(!1);return a.useEffect(()=>{async function t(){const x=p(h,"recipes",r.recipeId),i=await g(x);i.exists()&&(n(i.data()),c(!1))}t()},[r.recipeId]),o?e.jsx(u,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full h-[350px] relative",children:[e.jsx("img",{src:s.imgUrls[0],alt:"Recipe Cover",loading:"lazy",className:"w-full max-h-[350px] object-cover"}),e.jsx(f,{size:40,onClick:()=>{navigator.clipboard.writeText(window.location.href),l(!0),setTimeout(()=>{l(!1)},2e3)},className:"absolute top-[50%] right-12 cursor-pointer text-white bg-green-600 hover:border border border-transparent hover:border-white hover:bg-transparent rounded-full p-1 z-10 transition duration-500 ease"}),d&&e.jsx("p",{className:"absolute top-[65%] right-5 font-semibold p-1 border-2 border-gray-400 rounded-md bg-white z-10",children:"Link Copied !"})]}),e.jsx("h1",{className:"text-green-500 text-4xl text-center my-6",children:s.items[0].title}),e.jsxs("div",{className:"flex flex-col md:flex-row max-w-6xl lg:mx-auto m-4 p-4 mb-10 rounded-lg bg-green-100 shadow-xl lg:space-x-5",children:[e.jsxs("div",{className:"w-full min-h-[200px] lg:min-h-[400px]",children:[e.jsx("h2",{className:"text-2xl mt-8",children:"How to Prepare:"}),e.jsx("p",{className:"text-xl mt-2 bg-white my-2 p-2 rounded shadow-lg text-gray-600",children:s.desc})]}),e.jsxs("div",{className:"w-full min-h-[200px] lg:min-h-[400px]",children:[e.jsx("h2",{className:"text-2xl mt-8",children:"Ingredients:"}),e.jsxs("ul",{className:"p-4",children:[e.jsxs("div",{className:"w-full flex justify-between py-2 mb-4 pr-4 border-b border-gray-500",children:[e.jsx("span",{className:"text-lg",children:"Item:"}),e.jsx("span",{className:"text-lg",children:"Quantity:"})]}),e.jsx("li",{children:s.items.map(t=>e.jsxs("div",{className:"w-full flex justify-between bg-white my-2 p-2 rounded shadow-lg",children:[e.jsxs("p",{className:"text-lg text-gray-600",children:["- ",t.name]}),e.jsx("p",{className:"text-lg text-gray-600 mr-10",children:t.quantity})]},(Math.random()*1e4).toFixed()))})]})]})]})]})};export{y as default};
