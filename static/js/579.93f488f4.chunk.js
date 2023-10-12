"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[579],{9962:function(n,t,e){e.r(t),e.d(t,{default:function(){return Y}});var o,r,i,a,c,l=e(2791),u=e(9434),d=e(2544),s=e(7476),h=e(3433),g=["M","T","W","T","F","S","S"],p=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],f=function(n){return new Date(n.getFullYear(),n.getMonth()+1,0).getDate()},m=function(n){var t,e=(t=f(n),Array.from({length:t}).reduce((function(n){var t=n.result,e=n.current;return{result:[].concat((0,h.Z)(t),[e]),current:e+1}}),{result:[],current:1}).result),o=new Date(n.getFullYear(),n.getMonth(),1).getDay(),r=new Date(n.getFullYear(),n.getMonth()+1,0).getDay();return[].concat((0,h.Z)(Array(0===o?6:o-1)),(0,h.Z)(e),(0,h.Z)(Array(0===r?0:7-r)))},x=e(168),w=e(4709),b=e(399),v=w.Z.div(o||(o=(0,x.Z)(["\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    border: ",";\n    border-radius: 12px;\n    overflow: hidden;\n    ","\n    ","\n    div {\n        display: flex;\n        gap: 8px;\n        justify-content: space-around;\n        flex-direction: column;\n        align-items: flex-end;\n        padding: 4px;\n        overflow: hidden;\n        height: 95px;\n        background-color: ",";\n        border: ",";\n\n        transition: ",";\n\n        "," {\n            gap: 4px;\n            max-width: 156px;\n            height: 125px;\n        }\n        span {\n            font-family: Inter;\n            font-size: 12px;\n            font-weight: 700;\n            line-height: 14px;\n            letter-spacing: 0em;\n            text-align: center;\n            width: 22px;\n            height: 22px;\n            border-radius: 8px;\n            padding: 4px 6px;\n\n            color: ",";\n\n            transition: ",";\n\n            "," {\n                font-size: 16px;\n                font-weight: 700;\n                line-height: 18px;\n                width: 26px;\n                height: 26px;\n            }\n        }\n\n        span.active {\n            color: ",";\n            background-color: ",";\n        }\n    }\n"])),(function(n){return n.theme.borders.calendar}),(function(n){return n.fullheight}),(function(n){return n.fullheight&&"grid-template-rows: repeat(".concat(n.is28Days?4:5,", 1fr);")}),(function(n){return n.theme.colors.backgroundSecondary}),(function(n){return n.theme.borders.calendar}),(function(n){var t=n.theme;return"background-color ".concat(t.animations.duration," ").concat(t.animations.cubicBezier,", border ").concat(t.animations.duration," ").concat(t.animations.cubicBezier)}),(0,b.VV)(b.Mq),(function(n){return n.theme.colors.textPrimary}),(function(n){var t=n.theme;return"color ".concat(t.animations.duration," ").concat(t.animations.cubicBezier)}),(0,b.VV)(b.Mq),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.brand})),y=e(7689),k=e(9439),M=e(1087),j=w.Z.ul(r||(r=(0,x.Z)(["\n    list-style: none;\n    height: 65px;\n    max-width: 44px;\n    padding: 0 2px 0 8px;\n    overflow: hidden;\n    "," {\n        max-width: 100%;\n        padding: 0 4px;\n    }\n"])),(0,b.VV)(b.Mq)),D=w.Z.li(i||(i=(0,x.Z)(["\n    padding: 2px 4px;\n    border-radius: 8px;\n    margin-bottom: 8px;\n    width: 44px;\n    height: 22px;\n    max-width: 100%;\n    color: ",";\n    background-color: ",";\n    font-family: Inter;\n    font-size: 10px;\n    font-weight: 700;\n    line-height: 14px;\n    letter-spacing: 0em;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    cursor: pointer;\n\n    transition: ",";\n\n    &:hover,\n    :active {\n        color: ",";\n        background-color: ",";\n    }\n\n    "," {\n        width: 92px;\n        height: 26px;\n        font-size: 14px;\n        line-height: 18px;\n        padding: 4px 10px;\n    }\n\n    "," {\n        width: 140px;\n        height: 26px;\n    }\n"])),(function(n){var t=n.theme,e=n.priority;return"low"===e?t.colors.colorLow:"medium"===e?t.colors.colorMedium:"high"===e?t.colors.colorHigh:t.colors.colorLow}),(function(n){var t=n.theme,e=n.priority;return"low"===e?t.colors.bgColorLow:"medium"===e?t.colors.bgColorMedium:"high"===e?t.colors.bgColorHigh:t.colors.bgColorLow}),(function(n){var t=n.theme;return"background-color ".concat(t.animations.duration," ").concat(t.animations.cubicBezier,", color ").concat(t.animations.duration," ").concat(t.animations.cubicBezier)}),(function(n){var t=n.theme,e=n.priority;return"low"===e?t.colors.bgColorLow:"medium"===e?t.colors.bgColorMedium:"high"===e?t.colors.bgColorHigh:t.colors.bgColorLow}),(function(n){var t=n.theme,e=n.priority;return"low"===e?t.colors.colorLow:"medium"===e?t.colors.colorMedium:"high"===e?t.colors.colorHigh:t.colors.colorLow}),(0,b.VV)(b.Mq),(0,b.VV)(b.gv)),Z=e(1267),z=e(184),C=function(n){var t=n.currentDate,e=n.day,o=n.tasks,r=(0,l.useState)(!1),i=(0,k.Z)(r,2),a=i[0],c=i[1],u=(0,l.useState)({}),d=(0,k.Z)(u,2),s=d[0],h=d[1];if(e){var g=t+"-"+e.toString().padStart(2,"0"),p=o.filter((function(n){return n.date===g})),f=function(){c(!1),h({})};return(0,z.jsx)(j,{children:null===p||void 0===p?void 0:p.map((function(n){return(0,z.jsxs)(D,{priority:n.priority,children:[(0,z.jsx)(M.OL,{onClick:function(){return function(n){h(n),c(!0)}(n)},children:n.title}),a&&(0,z.jsx)(Z.K,{action:"edit",modalOpen:a,closeModal:f,category:n.category,task:s})]},n._id)}))})}},S=function(){var n=(0,y.UO)().currentDate,t=(0,y.s0)(),e=new Date(n),o=(0,u.I0)(),r=(0,u.v9)(s.Uq);(0,l.useEffect)((function(){o((0,d.Jv)(n))}),[n,o]);return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(v,{fullheight:!0,is28Days:28===f(e),children:m(e).map((function(o,i){return(0,z.jsxs)("div",{id:"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(o),children:[(0,z.jsx)(M.OL,{onClick:function(){return function(e){e<10&&(e="".concat(0,e)),localStorage.setItem("type","day"),localStorage.setItem("date",n+"-"+e),t("/day/".concat(n+"-"+e))}(o)},children:(0,z.jsx)("span",{className:"nonDRAG ".concat((a=new Date,c=new Date(e.getFullYear(),e.getMonth(),o),a.getFullYear()===c.getFullYear()&&a.getMonth()===c.getMonth()&&a.getDate()===c.getDate()?"active":"")),children:o})}),(0,z.jsx)(C,{currentDate:n,day:o,tasks:r})]},i);var a,c}))})})},F=e(4805),L=w.Z.ul(a||(a=(0,x.Z)(["\n    display: flex;\n    justify-content: space-around;\n    padding: 14px 0;\n    background-color: ",";\n    border: ",";\n    border-radius: 8px;\n    overflow: hidden;\n    margin-bottom: 15px;\n\n    transition: ",";\n"])),(function(n){return n.theme.colors.backgroundSecondary}),(function(n){return n.theme.borders.calendar}),(function(n){var t=n.theme;return"background-color ".concat(t.animations.duration," ").concat(t.animations.cubicBezier,", border ").concat(t.animations.duration," ").concat(t.animations.cubicBezier)})),V=w.Z.li(c||(c=(0,x.Z)(["\n    font-family: Inter;\n    font-size: 16px;\n    font-weight: 600;\n    color: ",";\n    line-height: 18px;\n    letter-spacing: 0em;\n    text-align: left;\n    text-transform: uppercase;\n\n    transition: ",";\n\n    &:nth-last-of-type(-n + 2) {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){var t=n.theme;return"color ".concat(t.animations.duration," ").concat(t.animations.cubicBezier)}),(function(n){return n.theme.colors.brand})),B=function(){var n=(0,F.useMediaQuery)({maxWidth:767});return(0,z.jsx)(L,{children:n?g.map((function(n,t){return(0,z.jsx)(V,{children:n},t)})):p.map((function(n,t){return(0,z.jsx)(V,{children:n},t)}))})},Y=function(){return(0,z.jsxs)("div",{children:[(0,z.jsx)(B,{}),(0,z.jsx)(S,{})]})}}}]);
//# sourceMappingURL=579.93f488f4.chunk.js.map