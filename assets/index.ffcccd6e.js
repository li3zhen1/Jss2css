import{j as jsxRuntime,r as react,P as PrimaryButton,T as TextField,R as ReactDOM,a as React}from"./vendor.62a1f470.js";const p=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}};p();var index="",App$1="";const doesValObject=e=>typeof e=="object"&&e!==void 0&&e!==null,doesValNumber=e=>typeof e=="number"&&e!==void 0&&e!==null,styleObjectToString=e=>Object.keys(e).reduce((s,r)=>s+camelCaseToCssProp(r,e[r]),""),camelCaseToCssProp=(e,s)=>doesValNumber(s)?e.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+s+`px;
`:e.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+s+`;
`,isLastNest=e=>{let s=!0;return doesValObject(e)?(Object.keys(e).forEach(r=>{doesValObject(e[r])&&(s=!1)}),s):!0},convertNestedStylesToCssString=e=>{let s="";return isLastNest(e)?s=s+`${styleObjectToString(e)}`:s=s+jssToCss(e),s};function jssToCss(e){let s="";return Object.keys(e).forEach(r=>{doesValObject(e[r])?s+=`
.${r} {
${convertNestedStylesToCssString(e[r])}
}`:s=s+camelCaseToCssProp(r,e[r])}),s}const jsx=jsxRuntime.exports.jsx,jsxs=jsxRuntime.exports.jsxs;let jss;const examplejss=`{
    backgroundColor: "#fff"
}`;function App(){const[_jss,setJss]=react.exports.useState(examplejss),[res,setRes]=react.exports.useState("");return jsxs("div",{style:{padding:16},children:[jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 240px",gridColumnGap:16,alignItems:"end"},children:[jsx("h1",{children:"JSS to CSS"}),jsx(PrimaryButton,{onClick:_=>{eval(`jss=${_jss}`),setRes(jssToCss(jss))},children:"Generate CSS"})]}),jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gridColumnGap:16,height:"40vh"},children:[jsx(TextField,{defaultValue:_jss,style:{height:"100%",font:"var(--mono)"},multiline:!0,max:20}),jsx("div",{style:{border:"1px solid #aaa"},children:res})]})]})}ReactDOM.render(jsx(React.StrictMode,{children:jsx(App,{})}),document.getElementById("root"));
