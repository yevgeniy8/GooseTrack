"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[579],{9962:function(n,t,e){e.r(t),e.d(t,{default:function(){return Y}});var o,r,i,a,c,l=e(2791),u=e(9434),s=e(2544),d=e(7476),h=e(3433),g=["M","T","W","T","F","S","S"],f=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],p=function(n){return new Date(n.getFullYear(),n.getMonth()+1,0).getDate()},m=function(n){var t,e=(t=p(n),Array.from({length:t}).reduce((function(n){var t=n.result,e=n.current;return{result:[].concat((0,h.Z)(t),[e]),current:e+1}}),{result:[],current:1}).result),o=new Date(n.getFullYear(),n.getMonth(),1).getDay(),r=new Date(n.getFullYear(),n.getMonth()+1,0).getDay();return[].concat((0,h.Z)(Array(0===o?6:o-1)),(0,h.Z)(e),(0,h.Z)(Array(0===r?0:7-r)))},x=e(168),b=e(4709),w=e(399),y=b.Z.div(o||(o=(0,x.Z)(["\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    border: ",";\n    border-radius: 8px;\n    overflow: hidden;\n    ","\n    ","\n    div {\n        display: flex;\n        gap: 4px;\n        justify-content: space-around;\n        // justify-content: space-between;\n        flex-direction: column;\n        align-items: flex-end;\n        padding: 4px;\n        overflow: hidden;\n        // max-width: 165px;\n        height: 95px;\n        background-color: ",";\n        border: ",";\n\n        transition: ",";\n\n        "," {\n            max-width: 156px;\n            height: 125px;\n        }\n        span {\n            font-family: Inter;\n            font-size: 12px;\n            font-weight: 700;\n            line-height: 14px;\n            letter-spacing: 0em;\n            text-align: center;\n            width: 22px;\n            height: 22px;\n            border-radius: 8px;\n            padding: 4px 6px;\n            // margin: 8px 4px 0 0;\n            // height: fit-content;\n            color: ",";\n\n            transition: ",";\n\n            "," {\n                //   margin: 14px 14px 0 0;\n                font-size: 16px;\n                font-weight: 700;\n                line-height: 18px;\n                width: 26px;\n                height: 26px;\n            }\n        }\n\n        span.active {\n            color: ",";\n            background-color: ",";\n        }\n        // span.active::before {\n        //     color: #3e85f3;\n        //     content: 'Today   ';\n        //     font-size: 16px;\n        // }\n    }\n"])),(function(n){return n.theme.borders.calendar}),(function(n){return n.fullheight}),(function(n){return n.fullheight&&"grid-template-rows: repeat(".concat(n.is28Days?4:5,", 1fr);")}),(function(n){return n.theme.colors.backgroundSecondary}),(function(n){return n.theme.borders.calendar}),(function(n){var t=n.theme;return"background-color ".concat(t.animations.duration," ").concat(t.animations.cubicBezier,", border ").concat(t.animations.duration," ").concat(t.animations.cubicBezier)}),(0,w.VV)(w.Mq),(function(n){return n.theme.colors.textPrimary}),(function(n){var t=n.theme;return"color ".concat(t.animations.duration," ").concat(t.animations.cubicBezier)}),(0,w.VV)(w.Mq),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.brand})),v=e(7689),k=e(9439),j=b.Z.ul(r||(r=(0,x.Z)(["\n    list-style: none;\n    height: 65px;\n    max-width: 44px;\n    padding: 0 2px;\n    margin: 0;\n    overflow: hidden;\n    // overflow-y: auto;\n    "," {\n        max-width: 100%;\n        padding: 0 4px;\n    }\n"])),(0,w.VV)(w.Mq)),M=b.Z.li(i||(i=(0,x.Z)(["\n    padding: 2px 4px;\n    border-radius: 8px;\n    margin-bottom: 8px;\n    max-width: 100%;\n    color: ",";\n    background-color: ",";\n    font-family: Inter;\n    font-size: 10px;\n    font-weight: 700;\n    line-height: 14px;\n    letter-spacing: 0em;\n    text-align: left;\n    white-space: nowrap; /* \u0422\u0435\u043a\u0441\u0442 \u043d\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f */\n    overflow: hidden; /* \u041e\u0431\u0440\u0456\u0437\u0430\u0454\u043c\u043e \u0432\u0441\u0451 \u0437\u0430 \u043c\u0435\u0436\u0430\u043c\u0438 \u0431\u043b\u043e\u043a\u0443 */\n    text-overflow: ellipsis; /* \u0414\u043e\u0434\u0430\u0454\u043c\u043e \u043c\u043d\u043e\u0433\u043e\u0442\u043e\u0447\u0438\u0435 */\n    cursor: pointer;\n\n    transition: ",";\n\n    &:hover,\n    :active {\n        color: ",";\n        background-color: ",";\n    }\n\n    "," {\n        font-size: 14px;\n        line-height: 18px;\n        padding: 4px 10px;\n    }\n"])),(function(n){var t=n.theme,e=n.priority;return"low"===e?t.colors.colorLow:"medium"===e?t.colors.colorMedium:"high"===e?t.colors.colorHigh:t.colors.colorLow}),(function(n){var t=n.theme,e=n.priority;return"low"===e?t.colors.bgColorLow:"medium"===e?t.colors.bgColorMedium:"high"===e?t.colors.bgColorHigh:t.colors.bgColorLow}),(function(n){var t=n.theme;return"background-color ".concat(t.animations.duration," ").concat(t.animations.cubicBezier,", color ").concat(t.animations.duration," ").concat(t.animations.cubicBezier)}),(function(n){var t=n.theme,e=n.priority;return"low"===e?t.colors.bgColorLow:"medium"===e?t.colors.bgColorMedium:"high"===e?t.colors.bgColorHigh:t.colors.bgColorLow}),(function(n){var t=n.theme,e=n.priority;return"low"===e?t.colors.colorLow:"medium"===e?t.colors.colorMedium:"high"===e?t.colors.colorHigh:t.colors.colorLow}),(0,w.VV)(w.Mq)),D=e(1087),Z=e(1267),z=e(184),C=function(n){var t=n.currentDate,e=n.day,o=n.tasks,r=(0,l.useState)(!1),i=(0,k.Z)(r,2),a=i[0],c=i[1],u=(0,l.useState)({}),s=(0,k.Z)(u,2),d=s[0],h=s[1];if(e){var g=t+"-"+e.toString().padStart(2,"0"),f=o.filter((function(n){return n.date===g})),p=function(){c(!1),h({})};return(0,z.jsx)(j,{children:null===f||void 0===f?void 0:f.map((function(n){return(0,z.jsxs)(M,{priority:n.priority,children:[(0,z.jsx)(D.OL,{onClick:function(){return function(n){h(n),c(!0)}(n)},children:n.title}),a&&(0,z.jsx)(Z.K,{action:"edit",modalOpen:a,closeModal:p,category:n.category,task:d})]},n._id)}))})}},S=function(){var n=(0,v.UO)().currentDate,t=(0,v.s0)(),e=new Date(n),o=(0,u.I0)(),r=(0,u.v9)(d.Uq);(0,l.useEffect)((function(){o((0,s.Jv)(n))}),[n,o]);return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(y,{fullheight:!0,is28Days:28===p(e),children:m(e).map((function(o,i){return(0,z.jsxs)("div",{id:"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(o),children:[(0,z.jsx)(D.OL,{onClick:function(){return function(e){e<10&&(e="".concat(0,e),console.log(e)),localStorage.setItem("type","day"),localStorage.setItem("date",n+"-"+e),t("/day/".concat(n+"-"+e))}(o)},children:(0,z.jsx)("span",{className:"nonDRAG ".concat((a=new Date,c=new Date(e.getFullYear(),e.getMonth(),o),a.getFullYear()===c.getFullYear()&&a.getMonth()===c.getMonth()&&a.getDate()===c.getDate()?"active":"")),children:o})}),(0,z.jsx)(C,{currentDate:n,day:o,tasks:r})]},i);var a,c}))})})},F=e(4805),L=b.Z.ul(a||(a=(0,x.Z)(["\n    display: flex;\n    justify-content: space-around;\n    padding: 14px 0;\n    background-color: ",";\n    border: ",";\n    border-radius: 8px;\n    overflow: hidden;\n    margin-bottom: 15px;\n\n    transition: ",";\n"])),(function(n){return n.theme.colors.backgroundSecondary}),(function(n){return n.theme.borders.calendar}),(function(n){var t=n.theme;return"background-color ".concat(t.animations.duration," ").concat(t.animations.cubicBezier,", border ").concat(t.animations.duration," ").concat(t.animations.cubicBezier)})),B=b.Z.li(c||(c=(0,x.Z)(["\n    font-family: Inter;\n    font-size: 16px;\n    font-weight: 600;\n    color: ",";\n    line-height: 18px;\n    letter-spacing: 0em;\n    text-align: left;\n    text-transform: uppercase;\n\n    transition: ",";\n    /* &:nth-last-child(-n + 2) {\n        color: #3e85f3;\n    } */\n\n    &:nth-last-of-type(-n + 2) {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){var t=n.theme;return"color ".concat(t.animations.duration," ").concat(t.animations.cubicBezier)}),(function(n){return n.theme.colors.brand})),V=function(){var n=(0,F.useMediaQuery)({maxWidth:767});return(0,z.jsx)(L,{children:n?g.map((function(n,t){return(0,z.jsx)(B,{children:n},t)})):f.map((function(n,t){return(0,z.jsx)(B,{children:n},t)}))})},Y=function(){return(0,z.jsxs)("div",{children:[(0,z.jsx)(V,{}),(0,z.jsx)(S,{})]})}}}]);
//# sourceMappingURL=579.1949e27d.chunk.js.map