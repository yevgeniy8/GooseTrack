"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[54],{3054:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var i,r,o,a,l,d=t(9439),c=t(2791),p=t(9434),s=t(2544),u=t(7476),x=t(3433),h=["M","T","W","T","F","S","S"],f=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],g=function(n){return new Date(n.getFullYear(),n.getMonth()+1,0).getDate()},m=function(n){var e,t=(e=g(n),Array.from({length:e}).reduce((function(n){var e=n.result,t=n.current;return{result:[].concat((0,x.Z)(e),[t]),current:t+1}}),{result:[],current:1}).result),i=new Date(n.getFullYear(),n.getMonth(),1).getDay(),r=new Date(n.getFullYear(),n.getMonth()+1,0).getDay();return[].concat((0,x.Z)(Array(0===i?6:i-1)),(0,x.Z)(t),(0,x.Z)(Array(0===r?0:7-r)))},b=t(168),v=t(3081),w=v.Z.div(i||(i=(0,b.Z)(["\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    border-radius: 8px;\n    ","\n    ","\n    div {\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n        align-items: flex-end;\n        padding: 4px;\n        overflow: hidden;\n        // max-width: 165px;\n        height: 95px;\n        background-color: white;\n        border: 1px solid rgba(220, 227, 229, 0.8);\n        \n            @media screen and (min-width: ",") {\n              max-width: 155px;\n              height: 134px;\n              padding: 8px;\n            };\n        span {\n            font-family: Inter;\n            font-size: 12px;\n            font-weight: 700;\n            line-height: 14px;\n            letter-spacing: 0em;\n            text-align: center;\n            width: 22px;\n            height: 22px;\n            border-radius: 8px;\n            padding: 4px 8px;\n            // margin: 8px 4px 0 0;\n            // height: fit-content;\n            color: #343434;\n                @media screen and (min-width: ",") {\n                //   margin: 14px 14px 0 0;\n                  font-size: 16px;\n                  font-weight: 700;\n                  line-height: 18px;\n                  width: 26px;\n                  height: 26px;\n    };\n        }\n\n        span.active {\n            color: #FFF;\n            background-color: #3E85F3;\n        }\n        // span.active::before {\n        //     color: #3e85f3;\n        //     content: 'Today   ';\n        //     font-size: 16px;\n        // }\n    }\n"])),(function(n){return n.fullheight}),(function(n){return n.fullheight&&"grid-template-rows: repeat(".concat(n.is28Days?4:5,", 1fr);")}),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.breakpoints.m})),y=t(7689),Z=t(1267),j=t(184),k=function(n){var e=n.currentDate,t=n.day,i=n.tasks,r=n.openModal;if(t){var o=e+"-"+t.toString().padStart(2,"0"),a=i.filter((function(n){return n.date===o}));return(0,j.jsx)(C,{children:null===a||void 0===a?void 0:a.map((function(n){return(0,j.jsx)(D,{onClick:function(){r(n._id)},color:"color".concat(n.priority),bg:"bgcolor".concat(n.priority),children:(0,j.jsx)("p",{children:n.title})},n._id)}))})}},C=v.Z.ul(r||(r=(0,b.Z)(["\n    list-style: none;\n    height: 65px;\n    max-width: 44px;\n    padding: 0 2px;\n    margin: 0;\n    overflow: hidden;\n    // overflow-y: auto;\n    @media screen and (min-width: ",") {\n        max-width: 100%;\n        padding: 0 4px;\n    }\n"])),(function(n){return n.theme.breakpoints.m})),D=v.Z.li(o||(o=(0,b.Z)(["\n    padding: 2px 4px;\n    border-radius: 8px;\n    margin-bottom: 8px;\n    max-width: 100%;\n    color: #3E85F3; //\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0441\u0442\u0438\u043b\u0438\n    background-color: #CEEEFD; //\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0441\u0442\u0438\u043b\u0438\n    // background-color: ",";\n    // color: ",";\n    font-family: Inter;\n    font-size: 10px;\n    font-weight: 700;\n    line-height: 14px;\n    letter-spacing: 0em;\n    text-align: left;\n    white-space: nowrap; /* \u0422\u0435\u043a\u0441\u0442 \u043d\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u0441\u044f */\n    overflow: hidden; /* \u041e\u0431\u0440\u0435\u0437\u0430\u0435\u043c \u0432\u0441\u0451 \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u043c\u0438 \u0431\u043b\u043e\u043a\u0430 */\n    text-overflow: ellipsis; /* \u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043c\u043d\u043e\u0433\u043e\u0442\u043e\u0447\u0438\u0435 */\n    @media screen and (min-width: ",") {\n        font-size: 14px;\n        line-height: 18px;\n        padding: 4px 10px;\n  };\n    "])),(function(n){return n.bg}),(function(n){return n.color}),(function(n){return n.theme.breakpoints.m})),F=t(1087),z=function(){var n=(0,y.UO)().currentDate,e=new Date(n),t=(0,p.I0)(),i=(0,p.v9)(u.Uq);(0,c.useEffect)((function(){t((0,s.Jv)())}),[t]);var r=(0,c.useState)(!1),o=(0,d.Z)(r,2),a=o[0],l=o[1],x=function(){return l(!0)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{fullheight:!0,is28Days:28===g(e),children:m(e).map((function(t,r){return(0,j.jsxs)("div",{id:"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(t),children:[(0,j.jsx)(F.OL,{to:"/calendar/day/".concat(n+"-"+t),children:(0,j.jsx)("span",{className:"nonDRAG ".concat((o=new Date,a=new Date(e.getFullYear(),e.getMonth(),t),o.getFullYear()===a.getFullYear()&&o.getMonth()===a.getMonth()&&o.getDate()===a.getDate()?"active":"")),children:t})}),(0,j.jsx)(k,{openModal:x,currentDate:n,day:t,tasks:i})]},r);var o,a}))}),a&&(0,j.jsx)(Z.K,{closeModal:function(){l(!1)}})]})},E=t(4805),P=v.Z.ul(a||(a=(0,b.Z)(["\n    display: flex;\n    justify-content: space-around;\n    padding: 14px 0;\n    background-color: rgba(255, 255, 255, 1);\n    border: 1px solid rgba(220, 227, 229, 0.8);\n    border-radius: 8px;\n    overflow: hidden;\n    margin-bottom: 15px;\n"]))),M=v.Z.li(l||(l=(0,b.Z)(["\n    font-family: Inter;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 18px;\n    letter-spacing: 0em;\n    text-align: left;\n    text-transform: uppercase;\n    /* &:nth-last-child(-n + 2) {\n        color: #3e85f3;\n    } */\n\n    &:nth-last-of-type(-n + 2) {\n        color: #3e85f3;\n    }\n"]))),I=function(){var n=(0,E.useMediaQuery)({maxWidth:767});return(0,j.jsx)(P,{children:n?h.map((function(n,e){return(0,j.jsx)(M,{children:n},e)})):f.map((function(n,e){return(0,j.jsx)(M,{children:n},e)}))})},S=function(){return(0,j.jsxs)("div",{children:[(0,j.jsx)(I,{}),(0,j.jsx)(z,{})]})}},2658:function(n,e,t){t.d(e,{Z:function(){return x}});var i,r,o=t(2791),a=t(4164),l=t(168),d=t(3081),c=d.Z.div(i||(i=(0,l.Z)(["\n    position: fixed;\n    z-index: 999;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.1);\n"]))),p=d.Z.div(r||(r=(0,l.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"]))),s=t(184),u=document.querySelector("#modal"),x=function(n){var e=n.children,t=n.onClose;(0,o.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return(0,a.createPortal)((0,s.jsx)(c,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,s.jsx)(p,{children:(0,s.jsx)("div",{children:e})})}),u)}},1267:function(n,e,t){t.d(e,{K:function(){return W}});var i,r,o,a,l,d,c,p,s,u,x,h,f,g,m=t(2658),b=t(1413),v=t(5705),w=t(8007),y=t(3439),Z=t(168),j=t(9256),k=(0,j.ZP)(v.l0)(i||(i=(0,Z.Z)(["\n    position: relative;\n    width: 303px;\n    max-height: 420px;\n    padding: 48px 18px 40px;\n    background-color: #fff;\n   \n\n    border-radius: 8px;\n    border: #fff;\n\n    @media (min-width: 768px) {\n        width: 396px;\n        padding: 40px 28px;\n    }\n"]))),C=j.ZP.label(r||(r=(0,Z.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n\n    color: rgba(52, 52, 52, 0.8);\n\n    font-size: 12px;\n    font-family: Inter;\n    font-weight: 500;\n    line-height: 14px;\n"]))),D=(0,j.ZP)(v.gN)(o||(o=(0,Z.Z)(["\n    width: 267px;\n    height: 42px;\n    padding: 12px 14px;\n    border-radius: 8px;\n    background: #f6f6f6;\n    border: 1px solid #f6f6f6;\n\n    color: #343434;\n    font-size: 14px;\n    font-family: Inter;\n    font-weight: 600;\n    line-height: 18px;\n\n    @media (min-width: 768px) {\n        width: 340px;\n        height: 46px;\n        padding: 14px 18px;\n    }\n\n    &::placeholder {\n        opacity: 1;\n        color: #343434;\n        font-size: 14px;\n        font-family: Inter;\n        font-weight: 600;\n        line-height: 18px;\n    }\n"]))),F=j.ZP.div(a||(a=(0,Z.Z)(["\n    display: flex;\n    gap: 14px;\n    margin-top: 16px;\n\n    @media (min-width: 768px) {\n        margin-top: 18px;\n    }\n"]))),z=(0,j.ZP)(v.gN)(l||(l=(0,Z.Z)(["\n    width: 126px;\n    height: 42px;\n    padding: 12px 14px;\n    border-radius: 8px;\n    background: #f6f6f6;\n    border: 1px solid #f6f6f6;\n    cursor: pointer;\n\n    color: #343434;\n    font-size: 14px;\n    font-family: Inter;\n    font-weight: 600;\n    line-height: 18px;\n\n    @media (min-width: 768px) {\n        width: 163px;\n        height: 46px;\n        padding: 14px 18px;\n    }\n\n    &::-webkit-calendar-picker-indicator {\n        display: none;\n    }\n"]))),E=j.ZP.div(d||(d=(0,Z.Z)(["\n    display: flex;\n    gap: 16px;\n"]))),P=(0,j.ZP)(v.gN)(c||(c=(0,Z.Z)(["\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n"]))),M=j.ZP.label(p||(p=(0,Z.Z)(["\n    position: relative;\n    padding-left: 16px;\n    display: flex;\n    align-items: center;\n    margin-top: 16px;\n\n    color: #343434;\n    font-size: 12px;\n    font-family: Inter;\n    font-weight: 600;\n    line-height: 14px;\n    cursor: pointer;\n\n    @media (min-width: 768px) {\n        font-size: 14px;\n        line-height: 18px;\n        margin-top: 28px;\n    }\n"]))),I=j.ZP.span(s||(s=(0,Z.Z)(["\n    position: absolute;\n    left: 0;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: ",";\n\n    ",":nth-child(1) ",":checked + & {\n        outline: 1.2px solid #72c2f8;\n        outline-offset: 1px;\n    }\n\n    ",":nth-child(2) ",":checked + & {\n        outline: 1.2px solid #f3b249;\n        outline-offset: 1px;\n    }\n\n    ",":nth-child(3) ",":checked + & {\n        outline: 1.2px solid #ea3d65;\n        outline-offset: 1px;\n    }\n"])),(function(n){switch(n.value){case"low":return"#72C2F8";case"medium":return"#F3B249";case"high":return"#EA3D65";default:return"black"}}),M,P,M,P,M,P),S=j.ZP.div(u||(u=(0,Z.Z)(["\n    display: flex;\n    gap: 14px;\n    margin-top: 32px;\n"]))),q=j.ZP.button(x||(x=(0,Z.Z)(["\n    display: flex;\n    width: 135px;\n    height: 42px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    padding: 12px;\n\n    border-radius: 8px;\n    border: none;\n    background-color: #3e85f3;\n    cursor: pointer;\n\n    color: #fff;\n    text-align: center;\n    font-size: 14px;\n    font-family: Inter;\n    font-weight: 600;\n    line-height: 18px;\n\n    transition: background-color 250ms linear;\n\n    &:hover,\n    &:focus {\n        background-color: #2b78ef;\n    }\n\n    @media (min-width: 768px) {\n        width: 182px;\n        height: 48px;\n        padding: 15px;\n    }\n"]))),_=j.ZP.button(h||(h=(0,Z.Z)(["\n    width: 118px;\n    height: 42px;\n    padding: 12px;\n\n    border-radius: 8px;\n    border: none;\n    background: #efefef;\n    cursor: pointer;\n\n    color: #111;\n    text-align: center;\n    font-size: 14px;\n    font-family: Inter;\n    font-weight: 600;\n    line-height: 18px;\n\n    transition: background-color 250ms linear;\n\n    &:hover,\n    &:focus {\n        background-color: #e7e3e3;\n    }\n\n    @media (min-width: 768px) {\n        width: 182px;\n        height: 48px;\n        padding: 15px;\n    }\n"]))),B=j.ZP.button(f||(f=(0,Z.Z)(["\n    position: absolute;\n    top: 14px;\n    right: 18px;\n\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    stroke: #111111;\n\n    transition: stroke 300ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n        stroke: #2b78ef;\n    }\n"]))),T=(0,j.ZP)(v.Bc)(g||(g=(0,Z.Z)(["\n    margin-left: 18px;\n    max-width: 100%;\n    color: #da1414;\n    font-size: 12px;\n    font-family: Inter;\n    line-height: 14px;\n"]))),Y=t(2544),A=t(9434),L=t(7689),N=t(2791),O=t(184),U=w.Ry().shape({title:w.Z_().max(250,"Title is too long").required("Title is required"),start:w.Z_().required("Start time is required"),end:w.Z_().required("End time is required"),priority:w.Z_().oneOf(["low","medium","high"]).required("Priority is required")}),J=function(n){var e=n.value,t=n.onClose,i=n.action,r=n.task;console.log(r);var o=(0,A.I0)(),a=(0,A.v9)((function(n){return n.calendar.tasks}));console.log(a),(0,N.useEffect)((function(){o((0,Y.Jv)())}),[o]);var l=(0,L.UO)().currentDay;return(0,O.jsx)(v.J9,{validationSchema:U,initialValues:{title:(null===r||void 0===r?void 0:r.title)||"",start:(null===r||void 0===r?void 0:r.start)||"11:00",end:(null===r||void 0===r?void 0:r.end)||"11:30",priority:(null===r||void 0===r?void 0:r.priority)||""},onSubmit:function(n,r){if(i)return console.log(i);var a=(0,b.Z)((0,b.Z)({},n),{},{category:e,date:l});console.log(a),o((0,Y.gI)(a)),t()},children:function(n){var e=n.values,r=(n.errors,n.touched,n.handleChange),o=n.handleBlur;n.handleSubmit,n.isSubmitting;return(0,O.jsxs)(k,{children:[(0,O.jsxs)(C,{children:["Title",(0,O.jsx)(D,{type:"text",name:"title",placeholder:"Enter text",value:e.title,onBlur:o,onChange:r}),(0,O.jsx)(T,{name:"title",component:"div"})]}),(0,O.jsxs)(F,{children:[(0,O.jsxs)(C,{children:["Start",(0,O.jsx)(z,{type:"time",name:"start",value:e.start,onBlur:o,onChange:r}),(0,O.jsx)(T,{name:"start",component:"div"})]}),(0,O.jsxs)(C,{children:["End",(0,O.jsx)(z,{type:"time",name:"end",value:e.end,onBlur:o,onChange:r}),(0,O.jsx)(T,{name:"end",component:"div"})]})]}),(0,O.jsxs)(E,{role:"group","aria-labelledby":"my-radio-group",children:[(0,O.jsxs)(M,{children:[(0,O.jsx)(P,{type:"radio",name:"priority",value:"low",onBlur:o,onChange:r}),(0,O.jsx)(I,{value:"low"}),"Low"]}),(0,O.jsxs)(M,{children:[(0,O.jsx)(P,{type:"radio",name:"priority",value:"medium",onBlur:o,onChange:r}),(0,O.jsx)(I,{value:"medium"}),"Medium"]}),(0,O.jsxs)(M,{children:[(0,O.jsx)(P,{type:"radio",name:"priority",value:"high",onBlur:o,onChange:r}),(0,O.jsx)(I,{value:"high"}),"High"]})]}),(0,O.jsxs)(S,{children:[(0,O.jsx)(q,{type:"submit",children:"edit"===i?"Edit":"Add"}),(0,O.jsx)(_,{type:"button",onClick:t,children:"Cancel"})]}),(0,O.jsx)(B,{type:"button","aria-label":"close button",onClick:t,children:(0,O.jsx)("svg",{width:"24",height:"24",children:(0,O.jsx)("use",{href:"".concat(y.Z,"#x-close")})})})]})}})},W=function(n){var e=n.action,t=n.value,i=n.closeModal,r=n.task;return(0,O.jsx)(m.Z,{onClose:i,children:(0,O.jsx)(J,{action:e,value:t,onClose:i,task:r})})}},7476:function(n,e,t){t.d(e,{Uq:function(){return i}});var i=function(n){return n.calendar.tasks}}}]);
//# sourceMappingURL=54.83233120.chunk.js.map