(window.webpackJsonp=window.webpackJsonp||[]).push([[14,9],{"3ErN":function(n,e,t){"use strict";t.r(e);var i=t("MUpH"),a=t("q1tI"),r=t.n(a),o=(t("Wbzz"),t("vOnD")),l=t("7oih"),c=t("GWHM"),p=t("YDhB"),d=t("DTWt"),m=t("8kVo"),s=t("7l0s"),u=t("fwOy"),x=t("iVr1"),f=t("p2Js");function g(){var n=Object(i.a)(["\n  display: none;\n  @media (min-width: 1024px) {\n    display: block;\n    background-color: #fa7fe7;\n    width: max-content;\n    padding: 15px 26px;\n    font-size: 25px;\n    font-weight: 500;\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(i.a)(["\n  a {\n    display: inline-block;\n    color: #1eb0d3;\n    width: 200px;\n  }\n\n  @media (min-width: 1024px) {\n    a {\n      width: 200px;\n      font-size: 18px;\n      line-height: 27px;\n      margin-top: 20px;\n    }\n  }\n"]);return h=function(){return n},n}var b=o.d.div(h()),w=o.d.div(g());e.default=function(n){var e,t=n.data,i=t.members.nodes,a=t.projects.nodes;return r.a.createElement(l.a,null,r.a.createElement(d.a,null,r.a.createElement(c.TitleContainer,null,r.a.createElement(m.a,null,"Our Work"),r.a.createElement(b,null,r.a.createElement(w,null,t.markdownRemark.frontmatter.name),r.a.createElement("a",{href:"#"},"View All ",t.markdownRemark.frontmatter.name," Case Studies"))),r.a.createElement(c.ProjectsContent,null,r.a.createElement(p.a,null),r.a.createElement(c.ProjectsContainer,null,a.map((function(n){return r.a.createElement(s.a,{key:n.id,url:n.fields.slug,image:n.frontmatter.image.childImageSharp.fluid,text:n.frontmatter.name})}))),r.a.createElement(f.a,{members:i}))),r.a.createElement("div",{className:"slider-wrapper",style:{width:"100%",display:"flex",overflow:"auto",marginTop:"18px",marginBottom:"60px"}},null===(e=t.markdownRemark.frontmatter.events)||void 0===e?void 0:e.map((function(n,e){return r.a.createElement(x.a,{key:n.title,dark:e%2!=0,theme:"true",project:n.project,title:n.title,link:n.url})}))),r.a.createElement(u.a,null))}},"7l0s":function(n,e,t){"use strict";var i=t("MUpH"),a=t("q1tI"),r=t.n(a),o=t("vOnD"),l=t("9eSz"),c=t.n(l),p=t("Wbzz");function d(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100px;\n  text-decoration: none;\n\n  div {\n    width: 100%;\n    height: 180px;\n    background-color: #eee;\n  }\n\n  p {\n    color: #585050;\n  }\n\n  @media (min-width: 1024px) {\n    div {\n      height: 270px;\n    }\n  }\n\n  @media (min-width: 1600px) {\n    p {\n      font-size: 18px;\n      line-height: 30px;\n    }\n  }\n"]);return d=function(){return n},n}var m=Object(o.d)(p.a)(d());e.a=function(n){var e=n.url,t=n.image,i=n.text;return r.a.createElement(m,{to:e||"/"},t?r.a.createElement(c.a,{fluid:t}):r.a.createElement("div",null)," ",r.a.createElement("p",null,i))}},"8kVo":function(n,e,t){"use strict";var i=t("MUpH");function a(){var n=Object(i.a)(["\n  font-family: 'Bungee', cursive;\n  font-size: 32px;\n  line-height: 32px;\n  color: ",";\n  text-transform: uppercase;\n  margin: 0;\n  text-align: left;\n  width: min-content;\n\n  @media (min-width: 1024px) {\n    font-size: 60px;\n    line-height: 60px;\n  }\n"]);return a=function(){return n},n}var r=t("vOnD").d.h1(a(),(function(n){return n.light?"white":"black"}));e.a=r},DTWt:function(n,e,t){"use strict";var i=t("MUpH");function a(){var n=Object(i.a)(["\n  padding-top: 50px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-areas:\n    'left'\n    'bottom'\n    'right';\n\n  @media (min-width: 1024px) {\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-areas:\n      'left right right'\n      'left bottom bottom';\n  }\n"]);return a=function(){return n},n}var r=t("vOnD").d.div(a());e.a=r},GE6W:function(n,e,t){n.exports=t.p+"static/partner-icon-5683a5a8981c955b6613b22edc57f5ca.svg"},GWHM:function(n,e,t){"use strict";t.r(e),t.d(e,"TitleContainer",(function(){return g})),t.d(e,"ProjectsContent",(function(){return h})),t.d(e,"ProjectsContainer",(function(){return b}));var i=t("MUpH"),a=t("q1tI"),r=t.n(a),o=t("vOnD"),l=t("7oih"),c=t("YDhB"),p=t("DTWt"),d=t("8kVo"),m=t("7l0s");function s(){var n=Object(i.a)([""]);return s=function(){return n},n}function u(){var n=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 12px;\n  margin-top: 16px;\n  padding: 0 16px;\n\n  @media (min-width: 1024px) {\n    grid-gap: 24px;\n    grid-template-columns: 1fr 1fr;\n    margin-top: 56px;\n    margin-bottom: 150px;\n  }\n\n  @media (min-width: 2000px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"]);return u=function(){return n},n}function x(){var n=Object(i.a)(["\n  grid-area: right;\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr;\n  margin-bottom: 80px;\n\n  @media (min-width: 1024px) {\n    padding: 0 16px;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 0 32px;\n  }\n"]);return x=function(){return n},n}function f(){var n=Object(i.a)(["\n  grid-area: left;\n  padding: 0 32px;\n  font-size: 16px;\n  margin-bottom: 10px;\n\n  h1,\n  h3 {\n    text-align: left;\n    margin-bottom: 16px;\n    padding-bottom: 16px;\n    border-bottom: 10px solid black;\n  }\n\n  @media (min-width: 1024px) {\n    max-width: 60%;\n\n    h1 {\n      border-bottom: none;\n      margin-top: 16px;\n    }\n  }\n\n  @media (min-width: 1280px) {\n    padding-left: 72px;\n    padding-right: 72px;\n  }\n"]);return f=function(){return n},n}var g=o.d.div(f()),h=o.d.div(x()),b=o.d.div(u());o.d.div(s());e.default=function(n){var e=n.data.allMarkdownRemark.nodes;return r.a.createElement(l.a,null,r.a.createElement(p.a,null,r.a.createElement(g,null,r.a.createElement(d.a,null,"Our Work")),r.a.createElement(h,null,r.a.createElement(c.a,null),r.a.createElement(b,null,e.map((function(n){return r.a.createElement(m.a,{key:n.id,url:n.fields.slug,image:n.frontmatter.image.childImageSharp.fluid,text:n.frontmatter.name})}))))))}},XfyV:function(n,e,t){n.exports=t.p+"static/join-icon-bcdd60df168e7f25f85e8f445c9a18f3.svg"},YDhB:function(n,e,t){"use strict";var i=t("MUpH"),a=t("q1tI"),r=t.n(a),o=t("vOnD"),l=t("Wbzz");function c(){var n=Object(i.a)(["\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n  padding-left: 16px;\n  margin: 16px 0;\n  max-width: 1200px;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  \n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  .active-sector {\n    color: white;\n    background-color: black;\n  }\n\n  @media (min-width: 1600px) {\n    justify-content: flex-start;\n  }\n"]);return c=function(){return n},n}function p(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  padding: 8px 25px;\n  border: 3px solid black;\n  text-decoration: none;\n  color: black;\n  background-color: white;\n  margin-right: 8px;\n  margin-bottom: 8px;\n  border-radius: 45px;\n  font-weight: 500;\n\n  &:hover {\n    color: white;\n    background-color: black;\n  }\n\n  @media (min-width: 1200px) {\n    font-size: 16px;\n  }\n\n  @media (min-width: 1440px) {\n    margin-right: 24px;\n  }\n\n  @media (min-width: 1600px) {\n    font-size: 20px;\n    padding: 6px 24px;\n    margin-right: 24px;\n  }\n\n"]);return p=function(){return n},n}var d=Object(o.d)(l.a)(p()),m=o.d.div(c());e.a=function(){var n=Object(l.c)("806702743").allMarkdownRemark.edges;return r.a.createElement(m,null,r.a.createElement(d,{activeClassName:"active-sector",to:"/sectors/"},"All"),n.map((function(n){return r.a.createElement(d,{activeClassName:"active-sector",key:n.node.id,to:n.node.fields.slug},n.node.frontmatter.name)})))}},fwOy:function(n,e,t){"use strict";var i=t("q1tI"),a=t.n(i),r=t("MUpH");function o(){var n=Object(r.a)(["\n  background: rgba(178, 201, 229, 0.27);\n  display: flex;\n  box-sizing: border-box;\n\n  .sub-text {\n    width: 100%;\n  }\n\n  hr {\n    border: 8px solid #000000;\n    opacity: 1;\n    width: 58px;\n    margin-left: 0px;\n    margin-top: 18px;\n  }\n\n  .container-work-section {\n    padding: 40px 20px 50px;\n    width: 100%;\n  }\n\n  .content {\n    margin-bottom: 20px;\n  }\n\n  .first-text-block {\n    text-align: left;\n    font-size: 18px;\n    line-height: 20px;\n    font-family: Montserrat;\n    letter-spacing: 0px;\n    color: #000000;\n    opacity: 1;\n    margin-top: 16px;\n    padding-left: 0px;\n  }\n\n  .circle-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 40px;\n  }\n\n  .circle {\n    height: 159px;\n    width: 159px;\n    background-color: #ffffff;\n    border-radius: 50%;\n    margin-bottom: 30px;\n\n    img {\n      width: inherit;\n      height: inherit;\n      border-radius: inherit;\n    }\n  }\n\n  .below-text {\n    background-color: black;\n    text-align: left;\n    font: normal normal medium;\n    font-size: 18px;\n    line-height: 31px;\n    font-family: Montserrat;\n    letter-spacing: 0px;\n    color: #ffffff;\n    width: 100%;\n    text-decoration: none;\n  }\n  p {\n    padding-left: 22px;\n    padding-right: 21px;\n    padding-top: 4px;\n    padding-bottom: 5px;\n    display: flex;\n    justify-content: center;\n    margin: 0;\n  }\n\n  .content-circle {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 550px) {\n    .circle-wrapper {\n      flex-direction: row;\n      justify-content: space-around;\n    }\n\n    .content-circle {\n      margin-right: 40px;\n    }\n  }\n\n  @media (min-width: 900px) {\n    padding-top: 40px;\n    padding-bottom: 40px;\n    max-width: 100%;\n    .container-work-section {\n      display: flex;\n    }\n    .circle-wrapper {\n      justify-content: flex-start;\n      width: 50%;\n    }\n    .content {\n      width: 50%;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .work-part {\n      font-size: 70px;\n      line-height: 70px;\n    }\n    .sub-text {\n      font-size: 70px;\n      line-height: 70px;\n    }\n    .first-text-block {\n      font-size: 18px;\n      line-height: 25px;\n      width: 50%;\n    }\n    .circle {\n      margin-bottom: 60px;\n    }\n  }\n\n  @media (min-width: 1440px) {\n    padding-top: 100px;\n    padding-bottom: 100px;\n    .work-part {\n      font-size: 60px;\n      line-height: 60px;\n    }\n    .sub-text {\n      font-size: 60px;\n      line-height: 60px;\n    }\n    .container-work-section {\n      display: flex;\n      justify-content: space-between;\n      padding: 0 72px;\n    }\n\n    .circle {\n      width: 200px;\n      height: 200px;\n    }\n\n    .content-circle {\n      margin-right: 120px;\n    }\n\n    .first-text-block {\n      font-size: 18px;\n      line-height: 27px;\n      width: 615px;\n    }\n    .work-home-page {\n      width: 94px;\n    }\n    .circle-wraper {\n      width: 50%;\n    }\n  }\n\n  @media (min-width: 1920px) {\n    .circle {\n      width: 300px;\n      height: 300px;\n    }\n  }\n"]);return o=function(){return n},n}var l=t("vOnD").d.div(o()),c=t("Wbzz"),p=t("8kVo");e.a=function(){return a.a.createElement(l,null,a.a.createElement("div",{className:"container-work-section"},a.a.createElement("div",{className:"content"},a.a.createElement(p.a,{className:"work-part"},"Work "),a.a.createElement(p.a,{className:"sub-text"}," With Us!"),a.a.createElement("hr",{className:"work-home-page"}),a.a.createElement("p",{className:"first-text-block"},"Let’s co-create the next solution enabling sustainable social change in your area of work")),a.a.createElement("div",{className:"circle-wrapper"},a.a.createElement("div",{className:"content-circle",id:"first-circle"},a.a.createElement("div",{className:"circle"},a.a.createElement("img",{src:t("XfyV")})),a.a.createElement("div",{className:"below-text"},a.a.createElement("p",null,"Partner With Us"))),a.a.createElement("div",{className:"content-circle"},a.a.createElement("div",{className:"circle"},a.a.createElement("img",{src:t("GE6W")})),a.a.createElement(c.a,{to:"/openings",className:"below-text"},a.a.createElement("p",null,"Join Us"))))))}},iVr1:function(n,e,t){"use strict";var i=t("q1tI"),a=t.n(i),r=t("MUpH");function o(){var n=Object(r.a)(["\n  background:",";\n  width: 281px;\n  height: 125px;\n  padding-left:21px;\n  padding-top: 10px;\n  padding-right: 24px;\n  flex: 1;\n  margin-top: 40px;\n \n  .heading-scroll-section {\n    text-align: left;\n    font-size: 10px;\n    line-height: 12px;\n    font-family: 'Helvetica', 'Neue';\n    letter-spacing: 0px;\n    \n    color:",";\n    opacity: 1;\n    display: flex;\n  }\n  .circle-scroll-section {\n    height: 24px;\n    width: 23px;\n    background-color:"," ;\n    border-radius: 50%;\n    display: flex;\n  }\n  .circle-container{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .line-scroll-section {\n    width: 32px;\n    height: 0px;\n    border: 5px solid;\n    border-color:"," ;\n    opacity: 1;\n    margin-left:0px;\n   \n  }\n  .content-scroll-section {\n    display: block;\n    text-align: left;\n    font-size: 20px;\n    line-height: 24px;\n    font-family: 'Helvetica', 'Neue';\n    letter-spacing: 0px;\n    color: "," ;\n    opacity: 1;\n    margin-top: 10px;\n    width: 225px;\n  }\n\n  @media (min-width: 1024px) {\n    height: 240px;\n\n    .circle-container > div {\n      width: 80%;\n    }\n\n    .heading-scroll-section {\n      font-size: 23px;\n      line-height:23px;\n    }\n\n    .content-scroll-section {\n      margin-top: 36px;\n      width: 80%;\n    }\n  }\n}\n"]);return o=function(){return n},n}var l=t("vOnD").d.div(o(),(function(n){return!0===n.dark?"black":"#eaf0f8"}),(function(n){return!0===n.dark?"white":"#707070"}),(function(n){return!0===n.dark?"white":"black"}),(function(n){return!0===n.dark?"#DDF521":"#707070"}),(function(n){return!0===n.dark?"white":"#585050"}));e.a=function(n){return a.a.createElement(l,{dark:n.dark},a.a.createElement("div",{className:"circle-container"},a.a.createElement("div",null,a.a.createElement("p",{className:"heading-scroll-section"},n.project||"HEADER COMES HERE"),a.a.createElement("hr",{className:"line-scroll-section"})),a.a.createElement("span",{className:"circle-scroll-section"})),a.a.createElement("a",{href:n.link,target:"_blank",rel:"noreferrer noopener",className:"content-scroll-section"},n.title||"Lorem ipsum dolor sit amet"))}},p2Js:function(n,e,t){"use strict";var i=t("MUpH"),a=t("q1tI"),r=t.n(a),o=t("Wbzz"),l=t("vOnD"),c=t("9eSz"),p=t.n(c);function d(){var n=Object(i.a)(["\n  text-decoration: none;\n  p {\n    font-size: 16px;\n    font-weight: 500;\n    text-align: center;\n    font-weight: 600;\n    color: black;\n  }\n\n  @media (min-width: 1440px) {\n    p {\n      font-size: 18px;\n    }\n\n    .gatsby-image-wrapper {\n      height: 300px;\n      width: 100%;\n    }\n  }\n"]);return d=function(){return n},n}function m(){var n=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n\n  @media (min-width: 1024px) {\n    grid-template-columns: repeat(4, 200px);\n    column-gap: 90px;\n    row-gap: 60px;\n  }\n"]);return m=function(){return n},n}function s(){var n=Object(i.a)(["\n  h3 {\n    font-family: Bungee;\n    font-size: 32px;\n    width: 60px;\n    display: inline-block;\n    text-align: left;\n    margin-bottom: 16px;\n  }\n\n  @media (min-width: 1024px) {\n    margin-bottom: 50px;\n    h3 {\n      font-size: 44px;\n      width: max-content;\n      margin-bottom: 35px;\n    }\n  }\n"]);return s=function(){return n},n}var u=l.d.div(s()),x=l.d.div(m()),f=Object(l.d)(o.a)(d()),g=function(n){var e=n.image,t=n.name,i=n.link;return r.a.createElement(f,{to:i},r.a.createElement(p.a,{fluid:e}),r.a.createElement("p",null,t))};e.a=function(n){var e=n.members;return r.a.createElement(u,null,r.a.createElement("h3",null,"Team"),r.a.createElement(x,null,e.map((function(n){return r.a.createElement(g,{key:n.id,link:n.fields.slug,image:n.frontmatter.image.childImageSharp.fluid,name:n.frontmatter.name})}))))}}}]);
//# sourceMappingURL=component---src-templates-sector-js-b7bf054b14d6edebb738.js.map