(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12],{"7l0s":function(n,e,t){"use strict";var i=t("MUpH"),r=t("q1tI"),a=t.n(r),o=t("vOnD"),d=t("9eSz"),l=t.n(d),p=t("Wbzz");function c(){var n=Object(i.a)(["\n  padding: 4px 10px;\n  color: black !important;\n  background-color: #fa7fe7;\n  position: absolute;\n  z-index: 500;\n  top: 120px;\n  right: 0;\n  font-weight: 500 !important;\n\n  @media (min-width: 1280px) {\n    top: 60%;\n  }\n"]);return c=function(){return n},n}function m(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100px;\n  text-decoration: none;\n  position: relative;\n\n  div {\n    width: 100%;\n    height: 180px;\n    background-color: #eee;\n  }\n\n  p {\n    color: #585050;\n    font-weight: ",";\n  }\n\n  @media (min-width: 1024px) {\n    div {\n      height: 270px;\n    }\n  }\n\n  @media (min-width: 1600px) {\n    p {\n      font-size: 18px;\n      line-height: 30px;\n    }\n  }\n"]);return m=function(){return n},n}var s=Object(o.d)(p.a)(m(),(function(n){return n.boldtext?"700":"normal"})),u=o.d.p(c());e.a=function(n){var e=n.url,t=n.image,i=n.text,r=n.sector,o=n.boldText;return a.a.createElement(s,{boldtext:o,to:e||"/"},r?a.a.createElement(u,null,r):null,t?a.a.createElement(l.a,{fluid:t}):a.a.createElement("div",null)," ",a.a.createElement("p",null,i))}},"8kVo":function(n,e,t){"use strict";var i=t("MUpH");function r(){var n=Object(i.a)(["\n  font-family: 'Bungee', cursive;\n  font-size: 32px;\n  line-height: 32px;\n  color: ",";\n  text-transform: uppercase;\n  margin: 0;\n  text-align: left;\n  width: min-content;\n\n  @media (min-width: 1024px) {\n    font-size: 60px;\n    line-height: 60px;\n  }\n"]);return r=function(){return n},n}var a=t("vOnD").d.h1(r(),(function(n){return n.light?"white":"black"}));e.a=a},DTWt:function(n,e,t){"use strict";var i=t("MUpH");function r(){var n=Object(i.a)(["\n  padding-top: 40px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-areas:\n    'left'\n    'bottom'\n    'right';\n\n  @media (min-width: 1024px) {\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-areas:\n      'left right right'\n      'left bottom bottom';\n  }\n"]);return r=function(){return n},n}var a=t("vOnD").d.div(r());e.a=a},Ofmp:function(n,e,t){"use strict";t.r(e),t.d(e,"TitleContainer",(function(){return g})),t.d(e,"ProjectsContent",(function(){return b})),t.d(e,"ProjectsContainer",(function(){return h}));var i=t("MUpH"),r=t("q1tI"),a=t.n(r),o=t("vOnD"),d=t("yBb5"),l=t("YDhB"),p=t("DTWt"),c=t("8kVo"),m=t("7l0s"),s=t("ZEsj");function u(){var n=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 12px;\n  margin-top: 16px;\n  padding: 0 16px;\n\n  @media (min-width: 1024px) {\n    grid-gap: 24px;\n    grid-template-columns: 1fr 1fr;\n    margin-top: 56px;\n    margin-bottom: 150px;\n  }\n\n  @media (min-width: 2000px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"]);return u=function(){return n},n}function x(){var n=Object(i.a)(["\n  grid-area: right;\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr;\n  margin-bottom: 80px;\n\n  @media (min-width: 1024px) {\n    padding: 0 16px;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 0 32px;\n  }\n"]);return x=function(){return n},n}function f(){var n=Object(i.a)(["\n  grid-area: left;\n  padding: 0 32px;\n  font-size: 16px;\n  margin-bottom: 10px;\n\n  h1,\n  h3 {\n    text-align: left;\n    margin-bottom: 16px;\n    padding-bottom: 16px;\n    border-bottom: 10px solid black;\n  }\n\n  @media (min-width: 1024px) {\n    max-width: 60%;\n\n    h1 {\n      border-bottom: none;\n      margin-top: 16px;\n    }\n  }\n\n  @media (min-width: 1280px) {\n    padding-left: 72px;\n    padding-right: 72px;\n  }\n"]);return f=function(){return n},n}var g=o.d.div(f()),b=o.d.div(x()),h=o.d.div(u());e.default=function(n){var e=n.data.allMarkdownRemark.nodes;return a.a.createElement(d.a,null,a.a.createElement(s.a,{title:"Our Work"}),a.a.createElement(p.a,null,a.a.createElement(g,null,a.a.createElement(c.a,null,"Our Work")),a.a.createElement(b,null,a.a.createElement(l.a,null),a.a.createElement(h,null,e.map((function(n){return a.a.createElement(m.a,{key:n.id,url:n.fields.slug,image:n.frontmatter.image.childImageSharp.fluid,text:n.frontmatter.name,sector:n.frontmatter.sector,boldText:!0})}))))))}},YDhB:function(n,e,t){"use strict";var i=t("MUpH"),r=t("q1tI"),a=t.n(r),o=t("vOnD"),d=t("Wbzz");function l(){var n=Object(i.a)(["\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n  padding-left: 16px;\n  margin: 16px 0;\n  max-width: 1200px;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  .active-sector {\n    color: white;\n    background-color: black;\n  }\n\n  @media (min-width: 1600px) {\n    justify-content: flex-start;\n  }\n"]);return l=function(){return n},n}function p(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  padding: 8px 25px;\n  border: 3px solid black;\n  text-decoration: none;\n  color: black;\n  background-color: white;\n  margin-right: 8px;\n  margin-bottom: 8px;\n  border-radius: 45px;\n  font-weight: 500;\n\n  &:hover {\n    color: white;\n    background-color: black;\n  }\n\n  @media (min-width: 1200px) {\n    font-size: 16px;\n  }\n\n  @media (min-width: 1440px) {\n    margin-right: 24px;\n  }\n\n  @media (min-width: 1600px) {\n    font-size: 20px;\n    padding: 6px 24px;\n    margin-right: 24px;\n  }\n"]);return p=function(){return n},n}var c=Object(o.d)(d.a)(p()),m=o.d.div(l());e.a=function(){var n=Object(d.c)("1001143701").allMarkdownRemark.edges;return a.a.createElement(m,null,a.a.createElement(c,{activeClassName:"active-sector",to:"/work/"},"All"),n.map((function(n){return a.a.createElement(c,{activeClassName:"active-sector",key:n.node.id,to:n.node.fields.slug},n.node.frontmatter.name)})))}},xkl6:function(n,e,t){"use strict";t.r(e),t.d(e,"CivicDays",(function(){return T}));var i=t("MUpH"),r=t("q1tI"),a=t.n(r),o=t("vOnD"),d=t("Wbzz"),l=t("yBb5"),p=t("9eSz"),c=t.n(p);function m(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  background: #f2f2f2;\n  position: relative;\n  text-decoration: none;\n\n  width: 125px;\n  height: 200px;\n\n  .gatsby-image-wrapper {\n    height: 100%;\n  }\n\n  .member-details {\n    position: absolute;\n    bottom: 0;\n    padding: 15px 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #ffffff;\n    background: #000000;\n    opacity: 0.76;\n  }\n\n  .member-name {\n    font-size: 16px;\n    font-family: Montserrat;\n  }\n\n  .member-desg {\n    font-style: italic;\n    font-size: 12px;\n    font-family: Montserrat;\n    text-align: center;\n  }\n\n  @media (min-width: 1280px) {\n    width: 220px;\n    height: 360px;\n\n    .member-name {\n      font-size: 20px;\n    }\n    .member-desg {\n      font-size: 14px;\n    }\n  }\n\n  @media (min-width: 1440px) {\n    width: 280px;\n    height: 400px;\n    .member-details {\n      padding: 21px 0 28px;\n    }\n  }\n"]);return m=function(){return n},n}var s=Object(o.d)(d.a)(m()),u=function(n){var e=n.link,t=n.name,i=n.role,r=n.image;return a.a.createElement(s,{to:e},a.a.createElement(c.a,{fluid:r}),a.a.createElement("span",{className:"member-details"},a.a.createElement("span",{className:"member-name"},t.split(" ")[0]),a.a.createElement("span",{className:"member-desg"},i)))};function x(){var n=Object(i.a)(["\n  font-family: 'Bungee';\n  font-size: 32px;\n  width: 100px;\n  color: ",";\n  text-transform: uppercase;\n  margin: 0;\n\n  @media (min-width: 1280px) {\n    font-size: 60px;\n    width: 150px;\n  }\n  @media (min-width: 1600px) {\n    font-size: 60px;\n  }\n  ","\n"]);return x=function(){return n},n}var f=o.d.h1(x(),(function(n){return n.light?"white":"black"}),(function(n){return n.addCSS})),g=t("DTWt"),b=t("Ofmp"),h=t("ZEsj");function w(){var n=Object(i.a)(["\n  display: grid;\n\n  .placeholder-container {\n    padding: 48px 18px 0;\n    display: none;\n  }\n\n  .section-text {\n    line-height: 1.4em;\n  }\n\n  @media (min-width: 1024px) {\n    grid-template-columns: 20% 60%;\n\n    .placeholder-container {\n      display: block;\n    }\n  }\n  @media (min-width: 1600px) {\n    grid-template-columns: 22% 58%;\n    column-gap: 100px;\n\n    .heading-border-bottom {\n      display: none;\n    }\n\n    .section-text {\n      margin-top: 20px;\n    }\n\n    .civic-days-section .heading-border-top {\n      display: block;\n    }\n  }\n"]);return w=function(){return n},n}function v(){var n=Object(i.a)(["\n  @media (min-width: 1600px) {\n    font-size: 44px;\n  }\n"]);return v=function(){return n},n}function y(){var n=Object(i.a)(["\n  display: flex;\n  flex: auto;\n  position: relative;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  border-top: 8px solid #000000;\n  border-bottom: 8px solid #000000;\n  background: #ffffff;\n  overflow-x: auto;\n  margin-top: 14px;\n  margin-bottom: 34px;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n\n  div {\n    min-width: 216px;\n    height: 170px;\n    background: #f2f2f2;\n  }\n\n  @media (min-width: 1280px) {\n    margin-top: 38px;\n    div {\n      min-width: 280px;\n      height: 280px;\n      margin-right: 20px;\n    }\n  }\n"]);return y=function(){return n},n}function E(){var n=Object(i.a)(["\n  padding: 32px 22px;\n  background: #000000;\n  width: 100%;\n  border-radius: 12px;\n  display: ",";\n  min-height: 230px;\n  box-sizing: border-box;\n\n  h1 {\n    font-family: 'Bungee';\n    font-size: 34px;\n    width: 100%;\n    color: #ffffff;\n    text-transform: uppercase;\n    margin: 0;\n  }\n\n  a {\n    display: inline-block;\n    font-family: Montserrat;\n    font-size: 20px;\n    color: #000000;\n    background: #ffffff;\n    padding: 10px 26px;\n    border-radius: 20px;\n    margin-top: 40px;\n    text-decoration: none;\n  }\n\n  @media (min-width: 1280px) {\n    display: ",";\n    position: absolute;\n    left: 0px;\n    top: 5%;\n    width: 250px;\n\n    h1 {\n      font-size: 28px;\n      width: 220px;\n    }\n\n    a {\n      font-size: 18px;\n    }\n  }\n\n  @media (min-width: 1440px) {\n    top: 10%;\n  }\n"]);return E=function(){return n},n}function k(){var n=Object(i.a)(["\n  display: grid;\n  grid-area: right;\n  grid-template-columns: 1fr 1fr;\n  row-gap: 25px;\n  column-gap: 25px;\n  padding: 0 32px;\n  box-sizing: border-box;\n  justify-content: space-around;\n  margin-bottom: 54px;\n  max-width: 1080px;\n\n  @media (min-width: 500px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (min-width: 1024px) {\n    justify-content: space-between;\n    row-gap: 50px;\n    padding: 0 16px;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 0 32px;\n    row-gap: 60px;\n  }\n"]);return k=function(){return n},n}function O(){var n=Object(i.a)(["\n  padding: 48px 16px 0;\n  max-width: 1140px;\n  .heading-border-bottom {\n    width: 42px;\n    margin-top: 12px;\n    margin-bottom: 18px;\n    border: 8px solid #000000;\n  }\n\n  .section-text {\n    font-size: 18px;\n    line-height: 27px;\n    color: #000000;\n    margin: 0;\n  }\n\n  .heading-border-top {\n    display: none;\n    width: 78px;\n    border: 10px solid #000000;\n    margin-bottom: 18px;\n  }\n\n  @media (min-width: 768px) {\n    .section-text {\n      max-width: 500px;\n    }\n  }\n\n  @media (min-width: 1280px) {\n    padding: 48px 32px;\n    .heading-border-bottom {\n      width: 78px;\n      margin-top: 12px;\n      margin-bottom: 18px;\n      border: 8px solid #000000;\n    }\n  }\n  @media (min-width: 1600px) {\n    .heading-border-bottom {\n      border: 10px solid #000000;\n    }\n    .civic-days-section .heading-border-bottom {\n      display: none;\n    }\n    .civic-days-section .heading-border-top {\n      display: block;\n    }\n    .heading-border-top {\n      display: block;\n    }\n  }\n"]);return O=function(){return n},n}var j=o.d.section(O()),z=o.d.div(k()),C=o.d.div(E(),(function(n){return n.mobile?"block":"none"}),(function(n){return n.mobile?"none":"block"})),D=o.d.div(y()),M=Object(o.c)(v()),N=o.d.div(w()),T=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{className:"civic-days-section"},a.a.createElement("div",{className:"placeholder-container"}),a.a.createElement(j,null,a.a.createElement("div",{className:"heading-border-top"}),a.a.createElement(f,{addCSS:M},"Civic Days"),a.a.createElement("div",{className:"heading-border-bottom"}),a.a.createElement("p",{className:"section-text"},"Our bandhus come together for a week to co-live and co-work and co-create. Check out how we do this CDL style"))),a.a.createElement(D,null,[1,1,1,11,1,1,1].map((function(n,e){return a.a.createElement("div",{key:e})}))))};e.default=function(n){var e=n.data.allMarkdownRemark.nodes,t=a.a.useRef(null),i=a.a.useRef(null);return a.a.useEffect((function(){var n=function(){window.innerWidth>=1280&&(t&&window.scrollY>t.current.scrollHeight/2+200?(i.current.style.top="90%",i.current.style.bottom="0px",i.current.style.left="0px"):(i.current.style.top="calc(10%)",i.current.style.bottom="80%"))};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),a.a.createElement(l.a,null,a.a.createElement(h.a,{title:"Team"}),a.a.createElement(g.a,null,a.a.createElement(b.TitleContainer,null,a.a.createElement(f,null,"The Team"),a.a.createElement("div",{className:"heading-border-bottom"}),a.a.createElement("p",{className:"section-text"},"Meet our Bandhus"),a.a.createElement("div",{style:{position:"relative",height:"80%"}},a.a.createElement(C,{ref:i},a.a.createElement("h1",null,"Current Job Openings"),a.a.createElement(d.a,{to:"/openings"},"browse jobs")))),a.a.createElement(z,{ref:t},e.map((function(n){var e;return a.a.createElement(u,{key:n.fields.slug,link:n.fields.slug,name:n.frontmatter.name,role:n.frontmatter.role.split(",")[0],image:null===(e=n.frontmatter.image)||void 0===e?void 0:e.childImageSharp.fluid})})))),a.a.createElement("div",{style:{position:"relative"}},a.a.createElement(C,{mobile:!0},a.a.createElement("h1",null,"Current Job Openings"),a.a.createElement(d.a,{to:"/openings"},"browse jobs"))),a.a.createElement(T,null))}}}]);
//# sourceMappingURL=component---src-pages-team-js-87bf7097531b992bb12c.js.map