"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[813],{8813:function(n,e,t){t.r(e),t.d(e,{default:function(){return On}});var r,o,i,a,c,l,s,d,u,x,p,h,f,g,m,b,Z,k,y,j,v,w,V,z,S,M,D,C,q,T,F,H,I,Y,_=t(3433),P=t(9439),A=t(168),O=t(4709),U=O.Z.ul(r||(r=(0,A.Z)(["\n  display: flex;\n  justify-content: space-around;\n\n  border-radius: 8px;\n  padding: 14px 18px;\n  margin-bottom: 14px;\n\n  overflow: hidden;\n\n  color: ",";\n  background: ",";\n  border: ",";\n"])),(function(n){return n.theme.colors.textTitleHeader}),(function(n){return n.theme.colors.backgroundSecondary}),(function(n){return n.theme.borders.calendar})),E=O.Z.li(o||(o=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0em;\n  text-align: center;\n  text-transform: uppercase;\n\n  cursor: pointer;\n"]))),N=O.Z.div(i||(i=(0,A.Z)(["\n  padding: 4px 6px;\n  &.current-day {\n    font-weight: bold;\n\n    border-radius: 8px;\n\n    color: white;\n    background-color: #3e85f3;\n  }\n"]))),R=O.Z.div(a||(a=(0,A.Z)(["\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 18px;\n  text-transform: uppercase;\n\n  margin-bottom: 6px;\n\n  color: ",";\n"])),(function(n){return n.theme.colors.nameDay})),B=t(4805),K=t(7689),L=t(438),W=t.n(L),J=t(2791),Q=t(184),G=function(){var n=(0,B.useMediaQuery)({maxWidth:767}),e=(0,K.s0)(),t=(0,J.useState)(""),r=(0,P.Z)(t,2),o=r[0],i=r[1],a=(0,K.UO)().currentDay;(0,J.useEffect)((function(){W().updateLocale("en",{week:{dow:1}}),(0,_.Z)(Array(7)).map((function(n,e){return W()(a).clone().startOf("week").day(e+1).format("DD")===a.split("-")[2]&&i(e),null}))}),[a]);return(0,Q.jsx)(U,{children:(0,_.Z)(Array(7)).map((function(t,r){return(0,Q.jsxs)(E,{onClick:function(){return function(n){var t=n.format("YYYY-MM-DD");localStorage.setItem("date",t),e("/calendar/day/".concat(t))}(W()(a).clone().startOf("week").day(r+1))},children:[(0,Q.jsx)(R,{children:n?W()().day(r+1).format("ddd")[0]:W()().day(r+1).format("ddd")}),(0,Q.jsx)(N,{className:r===o?"current-day":"",children:W()(a).clone().startOf("week").day(r+1).format("D")})]},r)}))})},X=t(399),$=O.Z.ul(c||(c=(0,A.Z)(["\n    display: flex;\n    justify-content: space-between;\n    gap: 16px;\n\n    "," {\n        gap: 27px;\n    }\n"])),(0,X.VV)(X.gv)),nn=O.Z.div(l||(l=(0,A.Z)(["\n    overflow: auto hidden;\n\n    width: 100%;\n\n    "," {\n        max-width: 335px;\n    }\n    "," {\n        max-width: 1024px;\n    }\n\n    "," {\n        max-width: 1087px;\n    }\n\n    scroll-snap-type: x mandatory;\n    &::-webkit-scrollbar {\n        width: 8px;\n        -webkit-scrollbar-placement: bottom;\n    }\n\n    &::-webkit-scrollbar-thumb {\n        border-radius: 12px;\n\n        background: ",";\n    }\n\n    &::-webkit-scrollbar-track {\n        background-color: ",";\n    }\n"])),(0,X.VV)(X.ai),(0,X.VV)(X.Mq),(0,X.VV)(X.gv),(function(n){return n.theme.colors.horizontalScroll}),(function(n){return n.theme.colors.backgroundHorizontalScroll})),en=t(9434),tn=t(2544),rn=t(7476),on=t(3439),an=O.Z.svg(s||(s=(0,A.Z)(["\n    width: 100%;\n    height: 100%;\n\n    stroke: ",";\n"])),(function(n){return n.theme.colors.textTitleHeader})),cn=O.Z.button(d||(d=(0,A.Z)(["\n    display: flex;\n\n    width: 24px;\n    height: 24px;\n    padding: 0px;\n\n    border: none;\n    background: transparent;\n    align-items: center;\n    cursor: pointer;\n\n    stroke: ",";\n"])),(function(n){return n.theme.colors.textTitleHeader})),ln=O.Z.button(u||(u=(0,A.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    text-align: center;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 1.28;\n    border-radius: 8px;\n    border: 1px dashed #3e85f3;\n\n    margin-top: 10px;\n    padding: 0px;\n\n    height: 48px;\n    width: 100%;\n\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n    background: ",";\n    color: ",";\n\n    &:hover {\n        background: ",";\n    }\n\n    &:focus {\n        outline: none;\n        box-shadow: 0 0 4px #3e85f3;\n    }\n\n    &:disabled {\n        background-color: ",";\n        color: ",";\n        cursor: not-allowed;\n    }\n"])),(function(n){return n.theme.colors.backgroundSideBarCurrentPage}),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.buttonAddTaskHover}),(function(n){return n.theme.colors.disabledBtn}),(function(n){return n.theme.colors.white})),sn=O.Z.svg(x||(x=(0,A.Z)(["\n    width: 24px;\n    height: 24px;\n\n    margin-right: 8px;\n\n    stroke: ",";\n"])),(function(n){return n.theme.colors.textTitleHeader})),dn=t(1267),un=function(n){var e=n.value,t=(0,J.useState)(!1),r=(0,P.Z)(t,2),o=r[0],i=r[1];return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(ln,{type:"button",onClick:function(){return i(!0)},disabled:localStorage.getItem("date")<W()().format("YYYY-MM-DD"),children:[(0,Q.jsx)(sn,{children:(0,Q.jsx)("use",{href:"".concat(on.Z,"#add-plus")})}),"Add task"]}),o&&(0,Q.jsx)(dn.K,{value:e,closeModal:function(){i(!1)}})]})},xn=O.Z.h2(p||(p=(0,A.Z)(["\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 1.2;\n\n    color: ",";\n"])),(function(n){return n.theme.colors.textPrimary})),pn=O.Z.div(h||(h=(0,A.Z)(["\n    display: flex;\n    justify-content: space-between;\n"]))),hn=(O.Z.svg(f||(f=(0,A.Z)(["\n    width: 100%;\n    height: 100%;\n\n    stroke: ",";\n"])),(function(n){return n.theme.colors.textTitleHeader})),function(n){var e=n.value,t=(0,J.useState)(!1),r=(0,P.Z)(t,2),o=r[0],i=r[1];return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(cn,{"aria-label":"add-task-button",type:"button",onClick:function(){return i(!0)},children:(0,Q.jsx)(an,{children:(0,Q.jsx)("use",{href:"".concat(on.Z,"#icon-plus-add")})})}),o&&(0,Q.jsx)(dn.K,{value:e,closeModal:function(){i(!1)}})]})}),fn=function(n){var e=n.header,t=n.value;return(0,Q.jsxs)(pn,{children:[(0,Q.jsx)(xn,{children:e}),(0,Q.jsx)(hn,{value:t,children:(0,Q.jsx)(an,{children:(0,Q.jsx)("use",{href:"".concat(on.Z,"#icon-plus-add")})})})]})},gn=O.Z.ul(g||(g=(0,A.Z)(["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    gap: 17px;\n\n    max-height: 255px;\n    padding-right: 7px;\n    margin-top: 24px;\n\n    margin-bottom: 22px;\n    overflow-y: auto;\n    &::-webkit-scrollbar {\n        width: 8px;\n        padding: 50px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n        padding: 50px;\n        border-radius: 12px;\n        background: ",";\n    }\n\n    &::-webkit-scrollbar-track {\n        background-color: ",";\n    }\n    "," {\n        max-height: 255px;\n    }\n    "," {\n        max-height: 324px;\n    }\n\n    "," {\n        max-height: 378px;\n    }\n"])),(function(n){return n.theme.colors.scrollbar}),(function(n){return n.theme.colors.backgroundScrollbar}),(0,X.VV)(X.ai),(0,X.VV)(X.Mq),(0,X.VV)(X.gv)),mn=(O.Z.ul(m||(m=(0,A.Z)(["\n    display: flex;\n    gap: 27px;\n"]))),O.Z.li(b||(b=(0,A.Z)(["\n    border: 1px solid rgba(220, 227, 229, 0.8);\n    border-radius: 8px;\n    padding: 20px;\n    background: #fff;\n"]))),t(7834)),bn=t(3352),Zn=O.Z.li(Z||(Z=(0,A.Z)(["\n    padding: 14px 14px 18px 14px;\n    border-radius: 8px;\n\n    word-wrap: break-word;\n\n    background: ",";\n    border: ",";\n"])),(function(n){return n.theme.colors.backgroundPrimary}),(function(n){return n.theme.borders.calendar})),kn=O.Z.div(k||(k=(0,A.Z)(["\n    width: 100%;\n"]))),yn=O.Z.div(y||(y=(0,A.Z)(["\n    display: flex;\n\n    justify-content: space-between;\n\n    align-items: flex-end;\n"]))),jn=O.Z.h3(j||(j=(0,A.Z)(["\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 1.28;\n\n    padding: 0px;\n    margin-bottom: 30px;\n\n    color: ",";\n"])),(function(n){return n.theme.colors.textPrimary})),vn=O.Z.div(v||(v=(0,A.Z)(["\n    display: flex;\n    align-items: flex-end;\n"]))),wn=O.Z.p(w||(w=(0,A.Z)(["\n    border-radius: 4px;\n\n    text-align: center;\n    font-size: 10px;\n    line-height: 1.2;\n\n    max-height: 20px;\n    padding: 4px 12px;\n\n    color: white;\n    background-color: #ea3d65;\n"]))),Vn=O.Z.p(V||(V=(0,A.Z)(["\n    border-radius: 4px;\n    font-size: 10px;\n    line-height: 1.2;\n\n    max-height: 20px;\n    padding: 4px 12px;\n\n    color: white;\n    background-color: #72c2f8;\n"]))),zn=O.Z.p(z||(z=(0,A.Z)(["\n    border-radius: 4px;\n    font-size: 10px;\n    line-height: 1.2;\n\n    max-height: 20px;\n    padding: 4px 12px;\n\n    color: white;\n    background-color: #f3b249;\n"]))),Sn=O.Z.div(S||(S=(0,A.Z)(["\n    display: flex;\n    justify-content: center;\n\n    gap: 8px;\n    height: 32px;\n    width: 32px;\n    margin-right: 8px;\n    border-radius: 50%;\n    border: 1.8px solid #3e85f3;\n"]))),Mn=O.Z.div(M||(M=(0,A.Z)(["\n    display: flex;\n    justify-content: center;\n"]))),Dn=O.Z.svg(D||(D=(0,A.Z)(["\n    width: 16px;\n    height: 16px;\n\n    stroke: ",";\n"])),(function(n){return n.theme.colors.iconTasks})),Cn=O.Z.ul(C||(C=(0,A.Z)(["\n    display: flex;\n    padding: 0px;\n    gap: 10px;\n"]))),qn=O.Z.button(q||(q=(0,A.Z)(["\n    display: flex;\n    position: relative;\n\n    border: none;\n    padding: 0px;\n\n    background-color: inherit;\n    &:hover {\n        svg {\n            stroke: #3e85f3;\n        }\n\n        &:focus {\n            svg {\n                stroke: #3e85f3;\n            }\n        }\n    }\n"]))),Tn=O.Z.div(T||(T=(0,A.Z)(["\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    align-items: center;\n\n    padding: 16px 24px;\n    width: 140px;\n    gap: 14px;\n    left: -60px;\n    top: 20px;\n    border-radius: 8px;\n\n    background: ",";\n    border: ",";\n"])),(function(n){return n.theme.colors.backgroundSecondary}),(function(n){return n.theme.borders.calendar})),Fn=O.Z.button(F||(F=(0,A.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 1.28;\n    text-transform: capitalize;\n\n    width: 100%;\n    padding: 0px;\n\n    background: none;\n    border: none;\n    color: ",";\n"])),(function(n){return n.theme.colors.textPrimary})),Hn=function(n){var e=n.taskId,t=n.task,r=(0,J.useState)(!1),o=(0,P.Z)(r,2),i=o[0],a=o[1],c=(0,J.useState)(!1),l=(0,P.Z)(c,2),s=l[0],d=l[1],u=["to-do","in-progress","done"].filter((function(n){return n!==t.category})),x=(0,en.I0)(),p=function(n){d((function(n){return!n})),x((0,tn.eT)({id:e,task:{category:n}}))};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(Cn,{children:[(0,Q.jsxs)("li",{style:{position:"relative"},children:[(0,Q.jsx)(qn,{type:"button","aria-label":"change-category",onClick:function(){d((function(n){return!n}))},children:(0,Q.jsx)(Dn,{children:(0,Q.jsx)("use",{href:"".concat(on.Z,"#arrow-circle-broken-right")})})}),s&&(0,Q.jsxs)(Tn,{children:[(0,Q.jsxs)(Fn,{type:"button","aria-label":"first-category",onClick:function(){p(u[0])},children:[u[0],(0,Q.jsx)(Dn,{children:(0,Q.jsx)("use",{href:"".concat(on.Z,"#arrow-circle-broken-right")})})]}),(0,Q.jsxs)(Fn,{type:"button","aria-label":"second-category",onClick:function(){p(u[1])},children:[u[1],(0,Q.jsx)(Dn,{children:(0,Q.jsx)("use",{href:"".concat(on.Z,"#arrow-circle-broken-right")})})]})]})]}),(0,Q.jsx)("li",{children:(0,Q.jsx)(qn,{type:"button","aria-label":"edit-card",onClick:function(){a(!0)},children:(0,Q.jsx)(Dn,{children:(0,Q.jsx)("use",{href:"".concat(on.Z,"#pencil")})})})}),(0,Q.jsx)("li",{children:(0,Q.jsx)(qn,{type:"button","aria-label":"delete-card",onClick:function(){x((0,tn._5)(e))},children:(0,Q.jsx)(Dn,{children:(0,Q.jsx)("use",{href:"".concat(on.Z,"#trash")})})})})]}),i&&(0,Q.jsx)(dn.K,{action:"edit",closeModal:function(){a(!1)},task:t})]})},In=function(n){var e=n.tasks,t=(0,mn.Z)().user,r=t.name,o=t.avatarURL;return(0,Q.jsx)(Q.Fragment,{children:e.map((function(n){return(0,Q.jsx)(Zn,{children:(0,Q.jsxs)(kn,{children:[(0,Q.jsx)(jn,{children:n.title}),(0,Q.jsxs)(yn,{children:[(0,Q.jsxs)(Mn,{children:[(0,Q.jsx)(Sn,{children:""!==o&&o||!r?""!==o?(0,Q.jsx)(bn.Ei,{src:o,alt:r}):null:(0,Q.jsx)(bn.FN,{children:r[0]})}),(0,Q.jsxs)(vn,{children:["high"===n.priority&&(0,Q.jsx)(wn,{children:n.priority}),"medium"===n.priority&&(0,Q.jsx)(zn,{children:n.priority}),"low"===n.priority&&(0,Q.jsx)(Vn,{children:n.priority})]})]}),(0,Q.jsx)(Hn,{taskId:n._id,task:n})]})]})},n._id)}))})},Yn=function(n){var e=n.tasks;return(0,Q.jsx)(gn,{children:e.length>0?(0,Q.jsx)(In,{tasks:e}):(0,Q.jsx)(Q.Fragment,{})})},_n=(O.Z.ul(H||(H=(0,A.Z)(["\n    gap: 18px;\n    display: flex;\n    flex-direction: column;\n    padding: 0px;\n"]))),O.Z.li(I||(I=(0,A.Z)(["\n    display: flex;\n    flex-direction: column;\n    border-radius: 8px;\n    border: ",";\n    background: ",";\n    min-width: 335px;\n\n    padding: 18px 18px 18px 14px;\n    padding-right: 18px;\n\n    "," {\n        min-width: 344px;\n    }\n\n    scroll-snap-align: start;\n"])),(function(n){return n.theme.borders.calendar}),(function(n){return n.theme.colors.backgroundSecondary}),(0,X.VV)(X.Mq))),Pn=(O.Z.div(Y||(Y=(0,A.Z)([""]))),function(n){var e=n.header,t=n.tasks,r=n.value;return(0,Q.jsxs)(_n,{children:[(0,Q.jsx)(fn,{header:e,value:r}),(0,Q.jsx)(Yn,{tasks:t}),(0,Q.jsx)(un,{value:r})]})}),An=function(){var n=(0,K.UO)().currentDay,e=(0,en.I0)(),t=(0,en.v9)(rn.Uq);(0,J.useEffect)((function(){e((0,tn.Jv)(n))}),[n,e]);var r=t.filter((function(e){return e.date===n}));return(0,Q.jsx)(nn,{children:(0,Q.jsx)($,{children:[{name:"To do",value:"to-do",id:1},{name:"In progress",value:"in-progress",id:2},{name:"Done",value:"done",id:3}].map((function(n){return(0,Q.jsx)(Pn,{header:n.name,tasks:(e=n.value,r.filter((function(n){return n.category===e}))),value:n.value},n.id);var e}))})})},On=function(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(G,{}),(0,Q.jsx)(An,{})]})}},3352:function(n,e,t){t.d(e,{Ei:function(){return f},FN:function(){return g},H8:function(){return m},IR:function(){return h},LZ:function(){return x},pq:function(){return p}});var r,o,i,a,c,l,s=t(168),d=t(4709),u=t(399),x=d.Z.div(r||(r=(0,s.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n\n    "," {\n        gap: 14px;\n    }\n"])),(0,u.VV)(u.Mq)),p=d.Z.p(o||(o=(0,s.Z)(["\n    font-size: ",";\n    font-weight: ",";\n    line-height: calc(18 / 14);\n    color: ",";\n\n    "," {\n        font-size: ",";\n        line-height: calc(18 / 18);\n    }\n    transition: ",";\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeight.b}),(function(n){return n.theme.colors.textUserName}),(0,u.VV)(u.Mq),(function(n){return n.theme.fontSizes.l}),(function(n){var e=n.theme;return"color ".concat(e.animations.duration," ").concat(e.animations.cubicBezier)})),h=d.Z.div(i||(i=(0,s.Z)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    width: 32px;\n    height: 32px;\n    border-radius: ",";\n    background-color: ",";\n    border: ",";\n\n    "," {\n        width: 44px;\n        height: 44px;\n    }\n"])),(function(n){return n.theme.borderRadius.xl}),(function(n){return n.theme.colors.backgroundDefaultAvatar}),(function(n){return n.theme.borders.avatar}),(0,u.VV)(u.Mq)),f=d.Z.img(a||(a=(0,s.Z)(["\n    width: 100%;\n    height: 100%;\n    border-radius: ",";\n"])),(function(n){return n.theme.borderRadius.xl})),g=d.Z.div(c||(c=(0,s.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: ",";\n    font-weight: ",";\n    background-color: transparent;\n    color: ",";\n"])),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.fontWeight.b}),(function(n){return n.theme.colors.userDefaults})),m=d.Z.div(l||(l=(0,s.Z)(["\n    position: absolute;\n    top: -28%;\n    left: 30px;\n    transform: translate(-50%, -50%) rotate(40deg);\n    width: 100%;\n    height: auto;\n\n    "," {\n        top: -15%;\n        left: 45px;\n    }\n"])),(0,u.VV)(u.Mq))}}]);
//# sourceMappingURL=813.d64c1f76.chunk.js.map