(window.webpackJsonp=window.webpackJsonp||[]).push([[13,9],{"+yCD":function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n("q1tI");e.isMouseMoveEvent=function(t){return"clientY"in t};var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(o.Component);e.default=a},"2ZXj":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("q1tI"),r=n("m1kc"),o=n("m1kc");e.populatePreviousSlides=function(t,e,n){void 0===n&&(n=0);var a,s,l=t.currentSlide,u=t.itemWidth,d=t.slidesToShow,c=e.children,h=e.showDots,p=e.infinite,m=r.getSlidesToSlide(t,e),f=l-n-(0<n?0:m),g=(i.Children.toArray(c).length-d)%m;return s=0<=f?(a=f,h&&!p&&0<g&&o.isInRightEnd(t)&&(a=l-g),-u*a):a=f<0&&0!==l?0:void 0,{nextSlides:a,nextPosition:s}}},"3TDQ":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("v5rg");e.getOriginalCounterPart=i.getOriginalCounterPart,e.getClones=i.getClones,e.checkClonesPosition=i.checkClonesPosition,e.getInitialSlideInInfiniteMode=i.getInitialSlideInInfiniteMode;var r=n("ztRg");e.getWidthFromDeviceType=r.getWidthFromDeviceType,e.getPartialVisibilityGutter=r.getPartialVisibilityGutter,e.getItemClientSideWidth=r.getItemClientSideWidth;var o=n("m1kc");e.getInitialState=o.getInitialState,e.getIfSlideIsVisbile=o.getIfSlideIsVisbile,e.getTransformForCenterMode=o.getTransformForCenterMode,e.getTransformForPartialVsibile=o.getTransformForPartialVsibile,e.isInLeftEnd=o.isInLeftEnd,e.isInRightEnd=o.isInRightEnd,e.notEnoughChildren=o.notEnoughChildren,e.getSlidesToSlide=o.getSlidesToSlide;var a=n("7XbK");e.throttle=a.default;var s=n("oQ0E");e.throwError=s.default;var l=n("DhR6");e.populateNextSlides=l.populateNextSlides;var u=n("2ZXj");e.populatePreviousSlides=u.populatePreviousSlides;var d=n("zwN0");e.populateSlidesOnMouseTouchMove=d.populateSlidesOnMouseTouchMove},"40+L":function(t,e,n){t.exports=n("41yN")},"41yN":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("sW6s");e.default=i.default},"7XbK":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e,n){var i;return function(){var r=arguments;i||(t.apply(this,r),i=!0,"function"==typeof n&&n(!0),setTimeout((function(){i=!1,"function"==typeof n&&n(!1)}),e))}}},"7l0s":function(t,e,n){"use strict";var i=n("MUpH"),r=n("q1tI"),o=n.n(r),a=n("vOnD"),s=n("9eSz"),l=n.n(s),u=n("Wbzz");function d(){var t=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100px;\n  text-decoration: none;\n\n  div {\n    width: 100%;\n    height: 180px;\n    background-color: #eee;\n  }\n\n  p {\n    color: #585050;\n  }\n\n  @media (min-width: 1024px) {\n    div {\n      height: 270px;\n    }\n  }\n\n  @media (min-width: 1600px) {\n    p {\n      font-size: 18px;\n      line-height: 30px;\n    }\n  }\n"]);return d=function(){return t},t}var c=Object(a.d)(u.a)(d());e.a=function(t){var e=t.url,n=t.image,i=t.text;return o.a.createElement(c,{to:e||"/"},n?o.a.createElement(l.a,{fluid:n}):o.a.createElement("div",null)," ",o.a.createElement("p",null,i))}},"8kVo":function(t,e,n){"use strict";var i=n("MUpH");function r(){var t=Object(i.a)(["\n  font-family: 'Bungee', cursive;\n  font-size: 32px;\n  line-height: 32px;\n  color: ",";\n  text-transform: uppercase;\n  margin: 0;\n  text-align: left;\n  width: min-content;\n\n  @media (min-width: 1024px) {\n    font-size: 60px;\n    line-height: 60px;\n  }\n"]);return r=function(){return t},t}var o=n("vOnD").d.h1(r(),(function(t){return t.light?"white":"black"}));e.a=o},DTWt:function(t,e,n){"use strict";var i=n("MUpH");function r(){var t=Object(i.a)(["\n  padding-top: 50px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-areas:\n    'left'\n    'bottom'\n    'right';\n\n  @media (min-width: 1024px) {\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-areas:\n      'left right right'\n      'left bottom bottom';\n  }\n"]);return r=function(){return t},t}var o=n("vOnD").d.div(r());e.a=o},DhR6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("m1kc");e.populateNextSlides=function(t,e,n){void 0===n&&(n=0);var r,o,a=t.slidesToShow,s=t.currentSlide,l=t.itemWidth,u=t.totalItems,d=i.getSlidesToSlide(t,e),c=s+1+n+a+(0<n?0:d);return o=c<=u?-l*(r=s+n+(0<n?0:d)):u<c&&s!==u-a?-l*(r=u-a):r=void 0,{nextSlides:r,nextPosition:o}}},GWHM:function(t,e,n){"use strict";n.r(e),n.d(e,"TitleContainer",(function(){return g})),n.d(e,"ProjectsContent",(function(){return v})),n.d(e,"ProjectsContainer",(function(){return x}));var i=n("MUpH"),r=n("q1tI"),o=n.n(r),a=n("vOnD"),s=n("7oih"),l=n("YDhB"),u=n("DTWt"),d=n("8kVo"),c=n("7l0s");function h(){var t=Object(i.a)([""]);return h=function(){return t},t}function p(){var t=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 12px;\n  margin-top: 16px;\n  padding: 0 16px;\n\n  @media (min-width: 1024px) {\n    grid-gap: 24px;\n    grid-template-columns: 1fr 1fr;\n    margin-top: 56px;\n    margin-bottom: 150px;\n  }\n\n  @media (min-width: 2000px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"]);return p=function(){return t},t}function m(){var t=Object(i.a)(["\n  grid-area: right;\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr;\n  margin-bottom: 80px;\n\n  @media (min-width: 1024px) {\n    padding: 0 16px;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 0 32px;\n  }\n"]);return m=function(){return t},t}function f(){var t=Object(i.a)(["\n  grid-area: left;\n  padding: 0 32px;\n  font-size: 16px;\n  margin-bottom: 10px;\n\n  h1,\n  h3 {\n    text-align: left;\n    margin-bottom: 16px;\n    padding-bottom: 16px;\n    border-bottom: 10px solid black;\n  }\n\n  @media (min-width: 1024px) {\n    max-width: 60%;\n\n    h1 {\n      border-bottom: none;\n      margin-top: 16px;\n    }\n  }\n\n  @media (min-width: 1280px) {\n    padding-left: 72px;\n    padding-right: 72px;\n  }\n"]);return f=function(){return t},t}var g=a.d.div(f()),v=a.d.div(m()),x=a.d.div(p());a.d.div(h());e.default=function(t){var e=t.data.allMarkdownRemark.nodes;return o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement(g,null,o.a.createElement(d.a,null,"Our Work")),o.a.createElement(v,null,o.a.createElement(l.a,null),o.a.createElement(x,null,e.map((function(t){return o.a.createElement(c.a,{key:t.id,url:t.fields.slug,image:t.frontmatter.image.childImageSharp.fluid,text:t.frontmatter.name})}))))))}},GhMY:function(t,e,n){"use strict";n.r(e);var i=n("MUpH"),r=n("q1tI"),o=n.n(r),a=n("vOnD"),s=n("Wbzz"),l=n("9eSz"),u=n.n(l),d=n("ma3e"),c=n("40+L"),h=n.n(c),p=(n("VLDe"),n("7oih")),m=n("DTWt"),f=n("8kVo"),g=n("GWHM"),v=n("p2Js");function x(){var t=Object(i.a)(["\n  li > div {\n    max-height: 300px;\n  }\n\n  @media (min-width: 1024px) {\n    li > div {\n      max-height: 600px;\n      margin-left: 4px;\n      margin-right: 4px;\n    }\n  }\n"]);return x=function(){return t},t}function b(){var t=Object(i.a)(["\n  display: inline-block;\n  background-color: #080808;\n  padding: 8px 20px;\n  color: white;\n  border-radius: 45px;\n  cursor: pointer;\n  text-decoration: none;\n"]);return b=function(){return t},t}function y(){var t=Object(i.a)(["\n  padding: 0 32px;\n  margin: 40px 0 80px;\n\n  p {\n    margin-top: 0;\n  }\n\n  h3 {\n    font-family: Bungee;\n    font-size: 32px;\n    width: 60px;\n    display: inline-block;\n    text-align: left;\n    margin-bottom: 16px;\n    padding-top: 16px;\n    border-top: 10px solid black;\n  }\n\n  @media (min-width: 1024px) {\n    padding: 0;\n    width: 50%;\n\n    p {\n      font-size: 20px;\n      line-height: 1.5em;\n    }\n\n    h3 {\n      font-size: 44px;\n      width: max-content;\n    }\n  }\n"]);return y=function(){return t},t}function w(){var t=Object(i.a)(["\n  a {\n    display: block;\n    margin-top: 20px;\n  }\n\n  @media (min-width: 1024px) {\n    margin-bottom: 60px;\n  }\n"]);return w=function(){return t},t}function S(){var t=Object(i.a)(["\n  display: flex;\n  margin-top: 20px;\n\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-decoration: none;\n    background-color: black;\n    width: 45px;\n    height: 45px;\n    border-radius: 100%;\n    color: white;\n    margin-right: 12px;\n  }\n\n  @media (min-width: 1024px) {\n    margin-bottom: 60px;\n  }\n"]);return S=function(){return t},t}function T(){var t=Object(i.a)(["\n  padding: 0 32px;\n  margin: 30px 0;\n\n  a {\n    display: inline-block;\n    color: #05b7be;\n    text-decoration: none;\n    margin-top: 4px;\n  }\n\n  p {\n    line-height: 1.5em;\n    font-size: 20px;\n  }\n\n  p:first-of-type {\n    font-weight: 700;\n    margin-bottom: 0;\n  }\n\n  p:last-of-type {\n    margin-top: 8px;\n  }\n\n  @media (min-width: 1024px) {\n    padding: 0;\n    margin: 60px 0;\n  }\n\n  @media (min-width: 1440px) {\n    width: 50%;\n  }\n"]);return T=function(){return t},t}function E(){var t=Object(i.a)(["\n  background-color: #dded1b;\n  font-weight: 500;\n  font-size: 25px;\n  width: 75%;\n  position: absolute;\n  bottom: -100px;\n  padding: 50px 32px;\n  box-sizing: border-box;\n\n  @media (min-width: 1024px) {\n    left: -32px;\n  }\n\n  @media (min-width: 1440px) {\n    font-size: 45px;\n    line-height: 1.5em;\n    left: -90px;\n    padding: 45px;\n  }\n\n  @media (min-width: 1600px) {\n    padding: 60px;\n  }\n"]);return E=function(){return t},t}function I(){var t=Object(i.a)(["\n  position: relative;\n  margin-bottom: 80px;\n\n  .gatsby-image-wrapper {\n    max-height: 400px;\n  }\n\n  @media (min-width: 1280px) {\n    .gatsby-image-wrapper {\n      max-height: 750px;\n    }\n  }\n"]);return I=function(){return t},t}function k(){var t=Object(i.a)(["\n  grid-area: right;\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr;\n\n  @media (min-width: 1024px) {\n    padding: 0 16px;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 0 32px;\n  }\n"]);return k=function(){return t},t}var C=a.d.div(k()),M=a.d.div(I()),P=a.d.div(E()),O=a.d.div(T()),_=a.d.div(S()),D=a.d.div(w()),A=a.d.div(y()),R=Object(a.d)(s.a)(b()),j=Object(a.d)(h.a)(x()),W={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}};e.default=function(t){var e=t.data,n=e.markdownRemark,i=e.members.nodes,r=e.partners.nodes;return o.a.createElement(p.a,null,o.a.createElement(m.a,null,o.a.createElement(g.TitleContainer,null,o.a.createElement(f.a,null,n.frontmatter.name)),o.a.createElement(C,null,o.a.createElement(M,null,o.a.createElement(u.a,{fluid:n.frontmatter.image.childImageSharp.fluid}),o.a.createElement(P,null,n.frontmatter.summary)),o.a.createElement(O,null,o.a.createElement("p",null,"Context:"),o.a.createElement("p",null,n.frontmatter.context)),n.frontmatter.solution&&o.a.createElement(O,null,o.a.createElement("p",null,"Our solution:"),o.a.createElement("p",null,n.frontmatter.solution)))),o.a.createElement(j,{responsive:W},o.a.createElement(u.a,{fluid:n.frontmatter.image.childImageSharp.fluid}),o.a.createElement(u.a,{fluid:n.frontmatter.image.childImageSharp.fluid}),o.a.createElement(u.a,{fluid:n.frontmatter.image.childImageSharp.fluid}),o.a.createElement(u.a,{fluid:n.frontmatter.image.childImageSharp.fluid})),o.a.createElement(m.a,null,o.a.createElement(C,null,o.a.createElement(v.a,{members:i}),o.a.createElement(O,null,o.a.createElement("p",null,"Check us here:"),o.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:"https://"+n.frontmatter.url},n.frontmatter.url),o.a.createElement(_,null,o.a.createElement("a",{href:n.frontmatter.twitter,target:"_blank",rel:"noreferrer noopener"},o.a.createElement(d.c,null)),o.a.createElement("a",{href:n.frontmatter.linkedin,target:"_blank",rel:"noreferrer noopener"},o.a.createElement(d.b,null)),o.a.createElement("a",{href:n.frontmatter.github,target:"_blank",rel:"noreferrer noopener"},o.a.createElement(d.a,null)))),r&&o.a.createElement(O,null,o.a.createElement("p",null,"In partnership with:"),o.a.createElement(D,null,r.map((function(t){return o.a.createElement("a",{key:t.id,href:t.frontmatter.website,target:"_blank",rel:"noreferrer noopener"},o.a.createElement(u.a,{fixed:t.frontmatter.logo.childImageSharp.fixed}))})))),o.a.createElement(A,null,o.a.createElement("h3",null,"Join Us"),o.a.createElement("p",null,"CivicDataLab works across sectors to increase access to information."),o.a.createElement(R,{to:"/about"},"read more")))))}},S9TR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("q1tI"),r=n("3TDQ");e.default=function(t){var e=t.props,n=t.state,o=t.goToSlide,a=t.clones,s=t.notEnoughChildren,l=n.itemWidth,u=e.children,d=e.infinite,c=e.itemClass,h=e.itemAriaLabel,p=e.partialVisbile,m=e.partialVisible,f=r.getInitialState(n,e),g=f.flexBisis,v=f.shouldRenderOnSSR,x=f.domFullyLoaded,b=f.partialVisibilityGutter;return f.shouldRenderAtAll?(p&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),i.createElement(i.Fragment,null,(d?a:i.Children.toArray(u)).map((function(t,a){return i.createElement("li",{key:a,"data-index":a,onClick:function(){e.focusOnSelect&&o(a)},"aria-hidden":r.getIfSlideIsVisbile(a,n)?"false":"true","aria-label":h||(t.props.ariaLabel?t.props.ariaLabel:null),style:{flex:v?"1 0 "+g+"%":"auto",position:"relative",width:x?((p||m)&&b&&!s?l-b:l)+"px":"auto"},className:"react-multi-carousel-item "+(r.getIfSlideIsVisbile(a,n)?"react-multi-carousel-item--active":"")+" "+c},t)})))):null}},SSZS:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("q1tI"),r=n("v5rg"),o=n("bwfW"),a=n("m1kc");e.default=function(t){var e=t.props,n=t.state,s=t.goToSlide,l=t.getState,u=e.showDots,d=e.customDot,c=e.dotListClass,h=e.infinite,p=e.children;if(!u||a.notEnoughChildren(n))return null;var m,f=n.currentSlide,g=n.slidesToShow,v=a.getSlidesToSlide(n,e),x=i.Children.toArray(p);m=h?Math.ceil(x.length/v):Math.ceil((x.length-g)/v)+1;var b=o.getLookupTableForNextSlides(m,n,e,x),y=r.getOriginalIndexLookupTableByClones(g,x),w=y[f];return i.createElement("ul",{className:"react-multi-carousel-dot-list "+c},Array(m).fill(0).map((function(t,e){var n,r;if(h){r=b[e];var o=y[r];n=w===o||o<=w&&w<o+v}else{var a=x.length-g,u=e*v;n=(r=a<u?a:u)===f||r<f&&f<r+v&&f<x.length-g}return d?i.cloneElement(d,{index:e,active:n,key:e,onClick:function(){return s(r)},carouselState:l()}):i.createElement("li",{"data-index":e,key:e,className:"react-multi-carousel-dot "+(n?"react-multi-carousel-dot--active":"")},i.createElement("button",{"aria-label":"Go to slide "+(e+1),onClick:function(){return s(r)}}))})))}},VLDe:function(t,e,n){},YDhB:function(t,e,n){"use strict";var i=n("MUpH"),r=n("q1tI"),o=n.n(r),a=n("vOnD"),s=n("Wbzz");function l(){var t=Object(i.a)(["\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n  padding-left: 16px;\n  margin: 16px 0;\n  max-width: 1200px;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  \n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  .active-sector {\n    color: white;\n    background-color: black;\n  }\n\n  @media (min-width: 1600px) {\n    justify-content: flex-start;\n  }\n"]);return l=function(){return t},t}function u(){var t=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  padding: 8px 25px;\n  border: 3px solid black;\n  text-decoration: none;\n  color: black;\n  background-color: white;\n  margin-right: 8px;\n  margin-bottom: 8px;\n  border-radius: 45px;\n  font-weight: 500;\n\n  &:hover {\n    color: white;\n    background-color: black;\n  }\n\n  @media (min-width: 1200px) {\n    font-size: 16px;\n  }\n\n  @media (min-width: 1440px) {\n    margin-right: 24px;\n  }\n\n  @media (min-width: 1600px) {\n    font-size: 20px;\n    padding: 6px 24px;\n    margin-right: 24px;\n  }\n\n"]);return u=function(){return t},t}var d=Object(a.d)(s.a)(u()),c=a.d.div(l());e.a=function(){var t=Object(s.c)("806702743").allMarkdownRemark.edges;return o.a.createElement(c,null,o.a.createElement(d,{activeClassName:"active-sector",to:"/sectors/"},"All"),t.map((function(t){return o.a.createElement(d,{activeClassName:"active-sector",key:t.node.id,to:t.node.fields.slug},t.node.frontmatter.name)})))}},bwfW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("v5rg"),r=n("m1kc");e.getLookupTableForNextSlides=function(t,e,n,o){var a={},s=r.getSlidesToSlide(e,n);return Array(t).fill(0).forEach((function(t,n){var r=i.getOriginalCounterPart(n,e,o);if(0===n)a[0]=r;else{var l=a[n-1]+s;a[n]=l}})),a}},m1kc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("ztRg");function r(t){var e=t.slidesToShow;return t.totalItems<e}function o(t,e,n){var i=n||t.transform;return!e.infinite&&0===t.currentSlide||r(t)?i:i+t.itemWidth/2}function a(t){var e=t.currentSlide,n=t.totalItems;return!(e+t.slidesToShow<n)}function s(t,e,n,i){void 0===e&&(e=0);var o=t.currentSlide,s=t.slidesToShow,l=a(t),u=!n.infinite&&l,d=i||t.transform;if(r(t))return d;var c=d+o*e;return u?c+(t.containerWidth-(t.itemWidth-e)*s):c}e.notEnoughChildren=r,e.getInitialState=function(t,e){var n,r=t.domLoaded,o=t.slidesToShow,a=t.containerWidth,s=t.itemWidth,l=e.deviceType,u=e.responsive,d=e.ssr,c=e.partialVisbile,h=e.partialVisible,p=Boolean(r&&o&&a&&s);d&&l&&!p&&(n=i.getWidthFromDeviceType(l,u));var m=Boolean(d&&l&&!p&&n);return{shouldRenderOnSSR:m,flexBisis:n,domFullyLoaded:p,partialVisibilityGutter:i.getPartialVisibilityGutter(u,c||h,l,t.deviceType),shouldRenderAtAll:m||p}},e.getIfSlideIsVisbile=function(t,e){var n=e.currentSlide,i=e.slidesToShow;return n<=t&&t<n+i},e.getTransformForCenterMode=o,e.isInLeftEnd=function(t){return!(0<t.currentSlide)},e.isInRightEnd=a,e.getTransformForPartialVsibile=s,e.getTransform=function(t,e,n){var r=e.partialVisbile,a=e.partialVisible,l=e.responsive,u=e.deviceType,d=e.centerMode,c=n||t.transform,h=i.getPartialVisibilityGutter(l,r||a,u,t.deviceType);return a||r?s(t,h,e,n):d?o(t,e,n):c},e.getSlidesToSlide=function(t,e){var n=t.domLoaded,i=t.slidesToShow,r=t.containerWidth,o=t.itemWidth,a=e.deviceType,s=e.responsive,l=e.slidesToSlide||1,u=Boolean(n&&i&&r&&o);return e.ssr&&e.deviceType&&!u&&Object.keys(s).forEach((function(t){var e=s[t].slidesToSlide;a===t&&e&&(l=e)})),u&&Object.keys(s).forEach((function(t){var e=s[t],n=e.breakpoint,i=e.slidesToSlide,r=n.max,o=n.min;i&&window.innerWidth>=o&&window.innerWidth<=r&&(l=i)})),l}},oQ0E:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=e.partialVisbile,i=e.partialVisible,r=e.centerMode,o=e.ssr,a=e.responsive;if((n||i)&&r)throw new Error("center mode can not be used at the same time with partialVisible");if(!a)throw o?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(a&&"object"!=typeof a)throw new Error("responsive prop must be an object")}},p2Js:function(t,e,n){"use strict";var i=n("MUpH"),r=n("q1tI"),o=n.n(r),a=n("Wbzz"),s=n("vOnD"),l=n("9eSz"),u=n.n(l);function d(){var t=Object(i.a)(["\n  text-decoration: none;\n  p {\n    font-size: 16px;\n    font-weight: 500;\n    text-align: center;\n    font-weight: 600;\n    color: black;\n  }\n\n  @media (min-width: 1440px) {\n    p {\n      font-size: 18px;\n    }\n\n    .gatsby-image-wrapper {\n      height: 300px;\n      width: 100%;\n    }\n  }\n"]);return d=function(){return t},t}function c(){var t=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n\n  @media (min-width: 1024px) {\n    grid-template-columns: repeat(4, 200px);\n    column-gap: 90px;\n    row-gap: 60px;\n  }\n"]);return c=function(){return t},t}function h(){var t=Object(i.a)(["\n  h3 {\n    font-family: Bungee;\n    font-size: 32px;\n    width: 60px;\n    display: inline-block;\n    text-align: left;\n    margin-bottom: 16px;\n  }\n\n  @media (min-width: 1024px) {\n    margin-bottom: 50px;\n    h3 {\n      font-size: 44px;\n      width: max-content;\n      margin-bottom: 35px;\n    }\n  }\n"]);return h=function(){return t},t}var p=s.d.div(h()),m=s.d.div(c()),f=Object(s.d)(a.a)(d()),g=function(t){var e=t.image,n=t.name,i=t.link;return o.a.createElement(f,{to:i},o.a.createElement(u.a,{fluid:e}),o.a.createElement("p",null,n))};e.a=function(t){var e=t.members;return o.a.createElement(p,null,o.a.createElement("h3",null,"Team"),o.a.createElement(m,null,e.map((function(t){return o.a.createElement(g,{key:t.id,link:t.fields.slug,image:t.frontmatter.image.childImageSharp.fluid,name:t.frontmatter.name})}))))}},sW6s:function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n("q1tI"),a=n("3TDQ"),s=n("+yCD"),l=n("SSZS"),u=n("yQRQ"),d=n("S9TR"),c=n("m1kc"),h=function(t){function e(e){var n=t.call(this,e)||this;return n.containerRef=o.createRef(),n.listRef=o.createRef(),n.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:o.Children.count(e.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},n.onResize=n.onResize.bind(n),n.handleDown=n.handleDown.bind(n),n.handleMove=n.handleMove.bind(n),n.handleOut=n.handleOut.bind(n),n.onKeyUp=n.onKeyUp.bind(n),n.handleEnter=n.handleEnter.bind(n),n.setIsInThrottle=n.setIsInThrottle.bind(n),n.next=a.throttle(n.next.bind(n),e.transitionDuration||400,n.setIsInThrottle),n.previous=a.throttle(n.previous.bind(n),e.transitionDuration||400,n.setIsInThrottle),n.goToSlide=a.throttle(n.goToSlide.bind(n),e.transitionDuration||400,n.setIsInThrottle),n.onMove=!1,n.initialX=0,n.lastX=0,n.isAnimationAllowed=!1,n.direction="",n.initialY=0,n.isInThrottle=!1,n.transformPlaceHolder=0,n}return r(e,t),e.prototype.resetTotalItems=function(){var t=this,e=o.Children.count(this.props.children),n=a.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,e));this.setState({totalItems:e,currentSlide:n},(function(){t.setContainerAndItemWidth(t.state.slidesToShow,!0)}))},e.prototype.setIsInThrottle=function(t){void 0===t&&(t=!1),this.isInThrottle=t},e.prototype.setTransformDirectly=function(t,e){var n=this.props.additionalTransfrom,i=c.getTransform(this.state,this.props,t);this.transformPlaceHolder=t,this.listRef&&this.listRef.current&&(this.setAnimationDirectly(e),this.listRef.current.style.transform="translate3d("+(i+n)+"px,0,0)")},e.prototype.setAnimationDirectly=function(t){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=t?this.props.customTransition||"transform 400ms ease-in-out":"none")},e.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.props.autoPlaySpeed&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.setClones=function(t,e,n,i){var r=this;void 0===i&&(i=!1),this.isAnimationAllowed=!1;var s=o.Children.toArray(this.props.children),l=a.getInitialSlideInInfiniteMode(t||this.state.slidesToShow,s),u=a.getClones(this.state.slidesToShow,s),d=s.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:u.length,currentSlide:n&&!i?d:l},(function(){r.correctItemsPosition(e||r.state.itemWidth)}))},e.prototype.setItemsToShow=function(t,e){var n=this,i=this.props.responsive;Object.keys(i).forEach((function(r){var o=i[r],a=o.breakpoint,s=o.items,l=a.max,u=a.min;window.innerWidth>=u&&window.innerWidth<=l&&(n.setState({slidesToShow:s,deviceType:r}),n.setContainerAndItemWidth(s,t,e))}))},e.prototype.setContainerAndItemWidth=function(t,e,n){var i=this;if(this.containerRef&&this.containerRef.current){var r=this.containerRef.current.offsetWidth,o=a.getItemClientSideWidth(this.props,t,r);this.setState({containerWidth:r,itemWidth:o},(function(){i.props.infinite&&i.setClones(t,o,e,n)})),e&&this.correctItemsPosition(o)}},e.prototype.correctItemsPosition=function(t,e,n){e&&(this.isAnimationAllowed=!0),!e&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var i=this.state.totalItems<this.state.slidesToShow?0:-t*this.state.currentSlide;n&&this.setTransformDirectly(i,!0),this.setState({transform:i})},e.prototype.onResize=function(t){var e;e=!(!this.props.infinite||"boolean"==typeof t&&t),this.setItemsToShow(e)},e.prototype.componentDidUpdate=function(t,e){var n=this,i=t.keyBoardControl,r=t.autoPlay,o=t.children,a=e.containerWidth,s=e.domLoaded,l=e.currentSlide;this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==a&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout((function(){n.setItemsToShow(!0)}),this.props.transitionDuration||400)),i&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!i&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),r&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),r||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),o.length!==this.props.children.length?setTimeout((function(){n.props.infinite?n.setClones(n.state.slidesToShow,n.state.itemWidth,!0,!0):n.resetTotalItems()}),this.props.transitionDuration||400):this.props.infinite&&this.state.currentSlide!==l&&this.correctClonesPosition({domLoaded:s}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform)},e.prototype.correctClonesPosition=function(t){var e=this,n=t.domLoaded,i=o.Children.toArray(this.props.children),r=a.checkClonesPosition(this.state,i,this.props),s=r.isReachingTheEnd,l=r.isReachingTheStart,u=r.nextSlide,d=r.nextPosition;this.state.domLoaded&&n&&(s||l)&&(this.isAnimationAllowed=!1,setTimeout((function(){e.setState({transform:d,currentSlide:u})}),this.props.transitionDuration||400))},e.prototype.next=function(t){var e=this;void 0===t&&(t=0);var n=this.props,i=n.afterChange,r=n.beforeChange;if(!a.notEnoughChildren(this.state)){var o=a.populateNextSlides(this.state,this.props,t),s=o.nextSlides,l=o.nextPosition,u=this.state.currentSlide;void 0!==s&&void 0!==l&&("function"==typeof r&&r(s,this.getState()),this.isAnimationAllowed=!0,this.setState({transform:l,currentSlide:s},(function(){"function"==typeof i&&setTimeout((function(){i(u,e.getState())}),e.props.transitionDuration||400)})))}},e.prototype.previous=function(t){var e=this;void 0===t&&(t=0);var n=this.props,i=n.afterChange,r=n.beforeChange;if(!a.notEnoughChildren(this.state)){var o=a.populatePreviousSlides(this.state,this.props,t),s=o.nextSlides,l=o.nextPosition;if(void 0!==s&&void 0!==l){var u=this.state.currentSlide;"function"==typeof r&&r(s,this.getState()),this.isAnimationAllowed=!0,this.setState({transform:l,currentSlide:s},(function(){"function"==typeof i&&setTimeout((function(){i(u,e.getState())}),e.props.transitionDuration||400)}))}}},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout)},e.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},e.prototype.handleDown=function(t){if(!(!s.isMouseMoveEvent(t)&&!this.props.swipeable||s.isMouseMoveEvent(t)&&!this.props.draggable||this.isInThrottle)){var e=s.isMouseMoveEvent(t)?t:t.touches[0],n=e.clientX,i=e.clientY;this.onMove=!0,this.initialX=n,this.initialY=i,this.lastX=n,this.isAnimationAllowed=!1}},e.prototype.handleMove=function(t){if(!(!s.isMouseMoveEvent(t)&&!this.props.swipeable||s.isMouseMoveEvent(t)&&!this.props.draggable||a.notEnoughChildren(this.state))){var e=s.isMouseMoveEvent(t)?t:t.touches[0],n=e.clientX,i=e.clientY,r=this.initialX-n,o=this.initialY-i;if(!s.isMouseMoveEvent(t)&&this.autoPlay&&this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.onMove){if(!(Math.abs(r)>Math.abs(o)))return;var l=a.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,n,this.transformPlaceHolder),u=l.direction,d=l.nextPosition,c=l.canContinue;u&&(this.direction=u,c&&void 0!==d&&this.setTransformDirectly(d)),this.lastX=n}}},e.prototype.handleOut=function(t){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var e="touchend"===t.type&&!this.props.swipeable,n=("mouseleave"===t.type||"mouseup"===t.type)&&!this.props.draggable;if(!e&&!n&&this.onMove){if(this.setAnimationDirectly(!0),"right"===this.direction)if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var i=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(i)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);"left"===this.direction&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(i=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(i)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},e.prototype.onKeyUp=function(t){switch(t.keyCode){case 37:return this.previous();case 39:return this.next()}},e.prototype.handleEnter=function(){this.autoPlay&&this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},e.prototype.goToSlide=function(t,e){var n=this;if(!this.isInThrottle){var i=this.state.itemWidth,r=this.props,o=r.afterChange,a=r.beforeChange,s=this.state.currentSlide;"function"!=typeof a||e&&("object"!=typeof e||e.skipBeforeChange)||a(t,this.getState()),this.isAnimationAllowed=!0,this.setState({currentSlide:t,transform:-i*t},(function(){n.props.infinite&&n.correctClonesPosition({domLoaded:!0}),"function"!=typeof o||e&&("object"!=typeof e||e.skipAfterChange)||setTimeout((function(){o(s,n.getState())}),n.props.transitionDuration||400)}))}},e.prototype.getState=function(){return this.state},e.prototype.renderLeftArrow=function(){var t=this,e=this.props.customLeftArrow;return o.createElement(u.LeftArrow,{customLeftArrow:e,getState:function(){return t.getState()},previous:this.previous})},e.prototype.renderRightArrow=function(){var t=this,e=this.props.customRightArrow;return o.createElement(u.RightArrow,{customRightArrow:e,getState:function(){return t.getState()},next:this.next})},e.prototype.renderButtonGroups=function(){var t=this,e=this.props.customButtonGroup;return e?o.cloneElement(e,{previous:function(){return t.previous()},next:function(){return t.next()},goToSlide:function(e,n){return t.goToSlide(e,n)},carouselState:this.getState()}):null},e.prototype.renderDotsList=function(){var t=this;return o.createElement(l.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return t.getState()}})},e.prototype.renderCarouselItems=function(){var t=[];if(this.props.infinite){var e=o.Children.toArray(this.props.children);t=a.getClones(this.state.slidesToShow,e)}return o.createElement(d.default,{clones:t,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:a.notEnoughChildren(this.state),props:this.props})},e.prototype.render=function(){var t=this.props,e=t.deviceType,n=t.arrows,i=t.removeArrowOnDeviceType,r=t.infinite,s=t.containerClass,l=t.sliderClass,u=t.customTransition,d=t.additionalTransfrom,h=t.renderDotsOutside,p=t.renderButtonGroupOutside,m=t.className,f=a.getInitialState(this.state,this.props),g=f.shouldRenderOnSSR,v=f.shouldRenderAtAll,x=a.isInLeftEnd(this.state),b=a.isInRightEnd(this.state),y=n&&!(i&&(e&&-1<i.indexOf(e)||this.state.deviceType&&-1<i.indexOf(this.state.deviceType)))&&!a.notEnoughChildren(this.state)&&v,w=!r&&x,S=!r&&b,T=c.getTransform(this.state,this.props);return o.createElement(o.Fragment,null,o.createElement("div",{className:"react-multi-carousel-list "+s+" "+m,ref:this.containerRef},o.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+l,style:{transition:this.isAnimationAllowed?u||"transform 400ms ease-in-out":"none",overflow:g?"hidden":"unset",transform:"translate3d("+(T+d)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),y&&!w&&this.renderLeftArrow(),y&&!S&&this.renderRightArrow(),v&&!p&&this.renderButtonGroups(),v&&!h&&this.renderDotsList()),v&&h&&this.renderDotsList(),v&&p&&this.renderButtonGroups())},e.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0},e}(o.Component);e.default=h},v5rg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getOriginalCounterPart=function(t,e,n){var i=e.slidesToShow,r=e.currentSlide;return n.length>2*i?t+2*i:r>=n.length?n.length+t:t},e.getOriginalIndexLookupTableByClones=function(t,e){if(e.length>2*t){for(var n={},i=e.length-2*t,r=e.length-i,o=i,a=0;a<r;a++)n[a]=o,o++;var s=e.length+r,l=s+e.slice(0,2*t).length,u=0;for(a=s;a<=l;a++)n[a]=u,u++;var d=s,c=0;for(a=r;a<d;a++)n[a]=c,c++;return n}n={};var h=3*e.length,p=0;for(a=0;a<h;a++)n[a]=p,++p===e.length&&(p=0);return n},e.getClones=function(t,e){return e.length<t?e:e.length>2*t?e.slice(e.length-2*t,e.length).concat(e,e.slice(0,2*t)):e.concat(e,e)},e.getInitialSlideInInfiniteMode=function(t,e){return e.length>2*t?2*t:e.length},e.checkClonesPosition=function(t,e,n){var i,r=t.currentSlide,o=t.slidesToShow,a=t.itemWidth,s=t.totalItems,l=0,u=0,d=0===r,c=e.length-(e.length-2*o);return e.length<o?(u=l=0,d=i=!1):e.length>2*o?((i=r>=c+e.length)&&(u=-a*(l=r-e.length)),d&&(u=-a*(l=c+(e.length-2*o)))):((i=r>=2*e.length)&&(u=-a*(l=r-e.length)),d&&(u=n.showDots?-a*(l=e.length):-a*(l=s-2*o))),{isReachingTheEnd:i,isReachingTheStart:d,nextSlide:l,nextPosition:u}}},yQRQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("q1tI");e.LeftArrow=function(t){var e=t.customLeftArrow,n=t.getState,r=t.previous;return e?i.cloneElement(e,{onClick:function(){return r()},carouselState:n()}):i.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left",onClick:function(){return r()},type:"button"})};e.RightArrow=function(t){var e=t.customRightArrow,n=t.next,r=t.getState;return e?i.cloneElement(e,{onClick:function(){return n()},carouselState:r()}):i.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right",onClick:function(){return n()},type:"button"})}},ztRg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getPartialVisibilityGutter=function(t,e,n,i){var r=0,o=i||n;return e&&o&&(r=t[o].partialVisibilityGutter||t[o].paritialVisibilityGutter),r},e.getWidthFromDeviceType=function(t,e){var n;return e[t]&&(n=(100/e[t].items).toFixed(1)),n},e.getItemClientSideWidth=function(t,e,n){return Math.round(n/(e+(t.centerMode?1:0)))}},zwN0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.populateSlidesOnMouseTouchMove=function(t,e,n,i,r,o){var a,s,l=t.itemWidth,u=t.slidesToShow,d=t.totalItems,c=t.currentSlide,h=e.infinite,p=!1,m=Math.round((n-i)/l),f=Math.round((i-n)/l),g=n<r;if(r<n&&m<=u){a="right";var v=Math.abs(-l*(d-u)),x=o-(i-r),b=c===d-u;(Math.abs(x)<=v||b&&h)&&(s=x,p=!0)}return g&&f<=u&&(a="left",((x=o+(r-i))<=0||0===c&&h)&&(p=!0,s=x)),{direction:a,nextPosition:s,canContinue:p}}}}]);
//# sourceMappingURL=component---src-templates-project-js-ba3747e0e96c35ae4c26.js.map