"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{8135:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,i,a,o=t(2791),c=t(9434),u=t(2544),l=t(7476),s=t(3433),h=["M","T","W","T","F","S","S"],d=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],p=function(n){return new Date(n.getFullYear(),n.getMonth()+1,0).getDate()},f=function(n){var e,t=(e=p(n),Array.from({length:e}).reduce((function(n){var e=n.result,t=n.current;return{result:[].concat((0,s.Z)(e),[t]),current:t+1}}),{result:[],current:1}).result),r=new Date(n.getFullYear(),n.getMonth(),1).getDay();return[].concat((0,s.Z)(Array(0===r?6:r-1)),(0,s.Z)(t))},g=t(168),x=t(3081),m=x.Z.div(r||(r=(0,g.Z)(["\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    ","\n    ","\n    div {\n        display: grid;\n        justify-content: end;\n        // max-width: 165px;\n        height: 95px;\n        background-color: white;\n        border: 1px solid rgba(220, 227, 229, 0.8);\n            @media screen and (min-width: ",") {\n              max-width: 155px;\n              height: 125px;\n            };\n        span {\n            font-family: Inter;\n            font-size: 12px;\n            font-weight: 700;\n            line-height: 14px;\n            letter-spacing: 0em;\n            text-align: center;\n            width: 22px;\n            height: 22px;\n            border-radius: 8px;\n            padding: 4px;\n            margin: 8px 4px 0 0;\n            // height: fit-content;\n            color: #343434;\n                @media screen and (min-width: ",") {\n                  margin: 14px 14px 0 0;\n                  font-size: 16px;\n                  font-weight: 700;\n                  line-height: 18px;\n                  width: 26px;\n                  height: 26px;\n    };\n        }\n\n        span.active {\n            color: #FFF;\n            background-color: #3E85F3;\n        }\n        // span.active::before {\n        //     color: #3e85f3;\n        //     content: 'Today   ';\n        //     font-size: 16px;\n        // }\n    }\n"])),(function(n){return n.fullheight}),(function(n){return n.fullheight&&"grid-template-rows: repeat(".concat(n.is28Days?4:5,", 1fr);")}),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.breakpoints.m})),w=t(7689),v=t(184),b=function(){var n=(0,w.UO)().currentDate,e=new Date(n),t=(0,c.I0)(),r=(0,c.v9)(l.Uq);return(0,o.useEffect)((function(){t((0,u.Jv)())}),[t]),console.log(r),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m,{fullheight:!0,is28Days:28===p(e),children:f(e).map((function(n,t){return(0,v.jsx)("div",{id:"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(n),children:(0,v.jsx)("span",{className:"nonDRAG ".concat((r=new Date,i=new Date(e.getFullYear(),e.getMonth(),n),r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()&&r.getDate()===i.getDate()?"active":"")),children:n})},t);var r,i}))})})},y=t(4805),D=x.Z.ul(i||(i=(0,g.Z)(["\n    display: flex;\n    justify-content: space-around;\n    padding: 14px 0;\n    background-color: rgba(255, 255, 255, 1);\n    border: 1px solid rgba(220, 227, 229, 0.8);\n    border-radius: 8px;\n    overflow: hidden;\n    margin-bottom: 15px;\n"]))),F=x.Z.li(a||(a=(0,g.Z)(["\n    font-family: Inter;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 18px;\n    letter-spacing: 0em;\n    text-align: left;\n    text-transform: uppercase;\n    /* &:nth-last-child(-n + 2) {\n        color: #3e85f3;\n    } */\n\n    &:nth-last-of-type(-n + 2) {\n        color: #3e85f3;\n    }\n"]))),j=function(){var n=(0,y.useMediaQuery)({maxWidth:767});return(0,v.jsx)(D,{children:n?h.map((function(n,e){return(0,v.jsx)(F,{children:n},e)})):d.map((function(n,e){return(0,v.jsx)(F,{children:n},e)}))})},k=function(){return(0,v.jsxs)("div",{children:[(0,v.jsx)(j,{}),(0,v.jsx)(b,{})]})}},7476:function(n,e,t){t.d(e,{Uq:function(){return r}});var r=function(n){return n.calendar.tasks}}}]);
//# sourceMappingURL=135.28a05a1c.chunk.js.map