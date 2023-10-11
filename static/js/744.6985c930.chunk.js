"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[744],{6744:function(n,e,t){t.r(e),t.d(e,{default:function(){return Pn}});var r,i,o,a,d,l,c,s,u,x,p,h,f,g,m,b,Z,k,y,j,w,v,z,S,C,V,I,M,D,H,T,F,q,_,O=t(3433),P=t(9439),U=t(168),A=t(4709),E=A.Z.ul(r||(r=(0,U.Z)(["\n    display: flex;\n    justify-content: space-around;\n    padding: 14px 0;\n    color: ",";\n    background: ",";\n    border: 1px solid rgba(220, 227, 229, 0.8);\n    border-radius: 8px;\n    overflow: hidden;\n    margin-bottom: 15px;\n"])),(function(n){return n.theme.colors.textTitleHeader}),(function(n){return n.theme.colors.backgroundSecondary})),N=A.Z.li(i||(i=(0,U.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center; /* \u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443 \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438 */\n    text-align: center; /* \u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443 */\n    font-family: Inter;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 18px;\n    letter-spacing: 0em;\n    text-align: left;\n    text-transform: uppercase;\n\n    cursor: pointer;\n    /* &:nth-last-child(-n + 2) {\n        color: #3e85f3;\n    } */\n\n    /* &:nth-last-of-type(-n + 2) {\n    color: #3e85f3;\n  } */\n\n    /* &.current-day {\n        border-radius: 8px;\n        color: white;\n        width: 45px;\n        padding: 2px;\n        background-color: #3e85f3; /* \u0426\u0432\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \n        font-weight: bold; /* \u0416\u0438\u0440\u043d\u044b\u0439 \u0448\u0440\u0438\u0444\u0442 \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0434\u043d\u044f \n    } */\n"]))),R=A.Z.div(o||(o=(0,U.Z)(["\n    &.current-day {\n        border-radius: 8px;\n        color: white;\n        ","\n        padding: 4px 8px;\n        background-color: #3e85f3; /* \u0426\u0432\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f */\n        font-weight: bold; /* \u0416\u0438\u0440\u043d\u044b\u0439 \u0448\u0440\u0438\u0444\u0442 \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0434\u043d\u044f */\n    }\n"])),""),Y=A.Z.div(a||(a=(0,U.Z)(["\n    color: #343434;\n    font-family: Inter;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 18px; /* 128.571% */\n    text-transform: uppercase;\n\n    margin-bottom: 4px;\n"]))),K=t(4805),L=t(7689),W=t(438),B=t.n(W),J=t(2791),Q=t(184),G=function(){var n=(0,K.useMediaQuery)({maxWidth:767}),e=(0,L.s0)(),t=(0,J.useState)(""),r=(0,P.Z)(t,2),i=r[0],o=r[1],a=(0,L.UO)().currentDay;(0,J.useEffect)((function(){B().updateLocale("en",{week:{dow:1}}),(0,O.Z)(Array(7)).map((function(n,e){return B()(a).clone().startOf("week").day(e+1).format("DD")===a.split("-")[2]&&o(e),null}))}),[a]);return(0,Q.jsx)(E,{children:(0,O.Z)(Array(7)).map((function(t,r){return(0,Q.jsxs)(N,{onClick:function(){return function(n){var t=n.format("YYYY-MM-DD");localStorage.setItem("date",t),e("/calendar/day/".concat(t))}(B()(a).clone().startOf("week").day(r+1))},children:[(0,Q.jsx)(Y,{children:n?B()().day(r+1).format("ddd")[0]:B()().day(r+1).format("ddd")}),(0,Q.jsx)(R,{className:r===i?"current-day":"",children:B()(a).clone().startOf("week").day(r+1).format("D")})]},r)}))})},X=t(399),$=A.Z.ul(d||(d=(0,U.Z)(["\n    display: flex;\n    justify-content: space-between;\n    gap: 16px;\n    // height: 100vh;\n    overflow: auto hidden;\n    scroll-snap-type: x mandatory;\n\n    "," {\n        gap: 27px;\n    }\n\n    &::-webkit-scrollbar {\n        width: 8px;\n        scrollbar-placement: bottom;\n    }\n\n    &::-webkit-scrollbar-thumb {\n        border-radius: 12px;\n\n        background: ",";\n    }\n\n    &::-webkit-scrollbar-track {\n        background-color: ",";\n    }\n"])),(0,X.VV)(X.gv),(function(n){return n.theme.colors.horizontalScroll}),(function(n){return n.theme.colors.backgroundHorizontalScroll})),nn=t(9434),en=t(2544),tn=t(7476),rn=t(3439),on=A.Z.svg(l||(l=(0,U.Z)(["\n  width: 50px;\n  height: 100%;\n\n  stroke: ",";\n\n  // @media (min-width: 768px) {\n  //   width: 34px;\n  //   height: 34px;\n  // }\n"])),(function(n){return n.theme.colors.textTitleHeader})),an=A.Z.button(c||(c=(0,U.Z)(["\n  display: flex;\n  width: 24px;\n  height: 24px;\n  padding: 0px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  align-items: center;\n  ","\n\n  cursor: pointer;\n  stroke: ",";\n  display: flex;\n\n  ","\n"])),"",(function(n){return n.theme.colors.textTitleHeader}),""),dn=A.Z.button(s||(s=(0,U.Z)(["\n  color: ",";\n  text-align: center;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 18px; /* 128.571% */\n\n  border-radius: 8px;\n  border: 1px dashed #3e85f3;\n  background: ",";\n\n  margin-top: 32px;\n  margin-bottom: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 52px;\n  width: 100%;\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  &:hover {\n    background: ",";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 4px #3e85f3;\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.backgroundSideBarCurrentPage}),(function(n){return n.theme.colors.buttonAddTaskHover})),ln=A.Z.svg(u||(u=(0,U.Z)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n  stroke: ",";\n\n  // @media (min-width: 768px) {\n  //   width: 34px;\n  //   height: 34px;\n  // }\n"])),(function(n){return n.theme.colors.textTitleHeader})),cn=t(1267),sn=function(n){var e=n.value,t=(0,J.useState)(!1),r=(0,P.Z)(t,2),i=r[0],o=r[1];return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(dn,{onClick:function(){return o(!0)},children:[(0,Q.jsx)(ln,{children:(0,Q.jsx)("use",{href:"".concat(rn.Z,"#add-plus")})}),"Add task"]}),i&&(0,Q.jsx)(cn.K,{value:e,closeModal:function(){o(!1)}})]})},un=A.Z.h2(x||(x=(0,U.Z)(["\n  color: ",";\n  ","\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.2; /* 120% */\n"])),(function(n){return n.theme.colors.textPrimary}),""),xn=A.Z.div(p||(p=(0,U.Z)(["\n  display: flex;\n  margin-top: 27px;\n  margin-bottom: 47px;\n  justify-content: space-between;\n"]))),pn=(A.Z.svg(h||(h=(0,U.Z)(["\n  width: 100%;\n  height: 100%;\n\n  stroke: ",";\n\n  // @media (min-width: 768px) {\n  //   width: 34px;\n  //   height: 34px;\n  // }\n"])),(function(n){return n.theme.colors.textTitleHeader})),A.Z.button(f||(f=(0,U.Z)(["\n  display: flex;\n  padding: 0px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  margin-left: auto;\n  cursor: pointer;\n  stroke: ",";\n  display: flex;\n\n  border: none;\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n  // @media (min-width: 768px) {\n  //   width: 34px;\n  //   height: 34px;\n  // }\n"])),(function(n){return n.theme.colors.textTitleHeader})),function(n){var e=n.value,t=(0,J.useState)(!1),r=(0,P.Z)(t,2),i=r[0],o=r[1];return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(an,{onClick:function(){return o(!0)},children:(0,Q.jsx)(on,{children:(0,Q.jsx)("use",{href:"".concat(rn.Z,"#icon-plus-add")})})}),i&&(0,Q.jsx)(cn.K,{value:e,closeModal:function(){o(!1)}})]})}),hn=function(n){var e=n.header,t=n.value;return(0,Q.jsxs)(xn,{children:[(0,Q.jsx)(un,{children:e}),(0,Q.jsx)(pn,{value:t,children:(0,Q.jsx)(on,{children:(0,Q.jsx)("use",{href:"".concat(rn.Z,"#icon-plus-add")})})})]})},fn=A.Z.ul(g||(g=(0,U.Z)(["\n  gap: 17px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  overflow-y: auto;\n  max-height: 380px;\n  padding-right: 7px;\n\n  &::-webkit-scrollbar {\n    width: 8px;\n    padding: 50px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    padding: 50px;\n    border-radius: 12px;\n    background: ",";\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.scrollbar}),(function(n){return n.theme.colors.backgroundScrollbar})),gn=(A.Z.ul(m||(m=(0,U.Z)(["\n  display: flex;\n  gap: 27px;\n"]))),A.Z.li(b||(b=(0,U.Z)(["\n  flex-basis: calc((100% - 2 * 27px) / 3);\n  background: snow;\n  padding: 20px;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  background: #fff;\n  min-width: 135px;\n"]))),t(7834)),mn=t(3352),bn=A.Z.li(Z||(Z=(0,U.Z)(["\n  ","\n  padding: 14px 14px 18px 14px;\n  background: ",";\n  border-radius: 8px;\n  border: ",";\n"])),"",(function(n){return n.theme.colors.backgroundPrimary}),(function(n){return n.theme.borders.calendar})),Zn=A.Z.div(k||(k=(0,U.Z)(["\n  width: 100%;\n"]))),kn=A.Z.div(y||(y=(0,U.Z)(["\n  display: flex;\n"]))),yn=A.Z.h3(j||(j=(0,U.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  padding: 0px;\n  margin-bottom: 30px;\n"])),(function(n){return n.theme.colors.textPrimary})),jn=A.Z.div(w||(w=(0,U.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n"]))),wn=A.Z.div(v||(v=(0,U.Z)(["\n  height: 32px;\n  width: 32px;\n  ","\n  border-radius: 50%;\n  border: 1.8px solid #3e85f3;\n"])),""),vn=(A.Z.img(z||(z=(0,U.Z)(["\n  width: 16px;\n  height: 16px;\n"]))),A.Z.p(S||(S=(0,U.Z)(["\n  padding: 4px 12px;\n  border-radius: 4px;\n  max-height: 20px;\n  text-align: center;\n  font-size: 10px;\n  line-height: 1.2;\n  color: white;\n\n  background-color: #f00;\n"])))),zn=A.Z.p(C||(C=(0,U.Z)(["\n  padding: 4px 12px;\n  border-radius: 4px;\n  max-height: 20px;\n  font-size: 10px;\n  line-height: 1.2;\n  color: white;\n\n  background-color: #0015ff;\n"]))),Sn=A.Z.p(V||(V=(0,U.Z)(["\n  padding: 4px 12px;\n  border-radius: 4px;\n  max-height: 20px;\n  font-size: 10px;\n  line-height: 1.2;\n  color: white;\n\n  background-color: #ff7700;\n"]))),Cn=A.Z.svg(I||(I=(0,U.Z)(["\n  width: 16px;\n  height: 16px;\n  stroke: ",";\n"])),(function(n){return n.theme.colors.iconTasks})),Vn=A.Z.ul(M||(M=(0,U.Z)(["\n  padding: 0px;\n  gap: 10px;\n  margin-left: auto;\n  margin-right: 14px;\n  margin-top: auto;\n  display: flex;\n  list-style: none;\n"]))),In=A.Z.button(D||(D=(0,U.Z)(["\n  padding: 0px;\n  border: none;\n  border-radius: 2px;\n  display: flex;\n  background-color: inherit;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n  &:hover {\n    /* outline: none;\n        border: none; */\n    svg {\n      stroke: #3e85f3;\n    }\n  }\n\n  &:focus {\n    /* outline: none; */\n    /* border: none; */\n    /* box-shadow: 0 0 2px 2px #3e85f3; */\n  }\n"]))),Mn=A.Z.div(H||(H=(0,U.Z)(["\n  width: 140px;\n  align-items: center;\n  padding: 14px 16px;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 8px;\n"]))),Dn=A.Z.button(T||(T=(0,U.Z)(["\n  ","\n  background: #fff;\n  ","\n  border:none;\n  padding: 7px 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n"])),"",""),Hn=function(n){var e=n.taskId,t=n.task,r=(0,J.useState)(!1),i=(0,P.Z)(r,2),o=i[0],a=i[1],d=(0,J.useState)(!1),l=(0,P.Z)(d,2),c=l[0],s=l[1],u=(0,nn.I0)(),x=function(){s((function(n){return!n}))};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(Vn,{children:[(0,Q.jsxs)("li",{children:[(0,Q.jsx)(In,{type:"button",onClick:x,children:(0,Q.jsx)(Cn,{children:(0,Q.jsx)("use",{href:"".concat(rn.Z,"#arrow-circle-broken-right")})})}),c&&(0,Q.jsxs)(Mn,{children:[(0,Q.jsxs)(Dn,{type:"button",onClick:x,children:["Category1",(0,Q.jsx)(Cn,{children:(0,Q.jsx)("use",{href:"".concat(rn.Z,"#arrow-circle-broken-right")})})]}),(0,Q.jsxs)(Dn,{type:"button",onClick:x,children:["Category2",(0,Q.jsx)(Cn,{children:(0,Q.jsx)("use",{href:"".concat(rn.Z,"#arrow-circle-broken-right")})})]})]})]}),(0,Q.jsx)("li",{children:(0,Q.jsx)(In,{type:"button",onClick:function(){return a(!0)},children:(0,Q.jsx)(Cn,{children:(0,Q.jsx)("use",{href:"".concat(rn.Z,"#pencil")})})})}),(0,Q.jsx)("li",{children:(0,Q.jsx)(In,{type:"button",onClick:function(){u((0,en._5)(e))},children:(0,Q.jsx)(Cn,{children:(0,Q.jsx)("use",{href:"".concat(rn.Z,"#trash")})})})})]}),o&&(0,Q.jsx)(cn.K,{action:"edit",closeModal:function(){a(!1)},task:t})]})},Tn=function(n){var e=n.tasks,t=(0,gn.Z)().user,r=t.name,i=t.avatarURL;return(0,Q.jsx)(Q.Fragment,{children:e.map((function(n){return(0,Q.jsx)(bn,{children:(0,Q.jsxs)(Zn,{children:[(0,Q.jsx)(yn,{children:n.title}),(0,Q.jsxs)(kn,{children:[(0,Q.jsxs)(jn,{children:[(0,Q.jsx)(wn,{children:""!==i&&i||!r?""!==i?(0,Q.jsx)(mn.Ei,{src:i,alt:r}):null:(0,Q.jsx)(mn.FN,{children:r[0]})}),"high"===n.priority&&(0,Q.jsx)(vn,{children:n.priority}),"medium"===n.priority&&(0,Q.jsx)(Sn,{children:n.priority}),"low"===n.priority&&(0,Q.jsx)(zn,{children:n.priority})]}),(0,Q.jsx)(Hn,{taskId:n._id,task:n})]})]})},n._id)}))})},Fn=function(n){var e=n.tasks;return(0,Q.jsx)(fn,{children:e.length>0?(0,Q.jsx)(Tn,{tasks:e}):(0,Q.jsx)(Q.Fragment,{})})},qn=(A.Z.ul(F||(F=(0,U.Z)(["\n  gap: 18px;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n"]))),A.Z.li(q||(q=(0,U.Z)(["\n  border-radius: 8px;\n  border: ",";\n  background: ",";\n  /* margin-bottom: 100%; */\n  min-width: 335px;\n  padding-left: 14px;\n  padding-right: 18px;\n\n  "," {\n    min-width: 344px;\n  }\n"])),(function(n){return n.theme.borders.calendar}),(function(n){return n.theme.colors.backgroundSecondary}),(0,X.VV)(X.Mq))),_n=(A.Z.div(_||(_=(0,U.Z)(["\n  ","\n"])),""),function(n){var e=n.header,t=n.tasks,r=n.value;return(0,Q.jsxs)(qn,{children:[(0,Q.jsx)(hn,{header:e,value:r}),(0,Q.jsx)(Fn,{tasks:t}),(0,Q.jsx)(sn,{value:r})]})}),On=function(){var n=(0,L.UO)().currentDay,e=(0,nn.I0)(),t=(0,nn.v9)(tn.Uq);(0,J.useEffect)((function(){e((0,en.Jv)(n))}),[n,e]);var r=t.filter((function(e){return e.date===n}));return(0,Q.jsx)($,{children:[{name:"To do",value:"to-do",id:1},{name:"In progress",value:"in-progress",id:2},{name:"Done",value:"done",id:3}].map((function(n){return(0,Q.jsx)(_n,{header:n.name,tasks:(e=n.value,r.filter((function(n){return n.category===e}))),value:n.value},n.id);var e}))})},Pn=function(){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(G,{}),(0,Q.jsx)(On,{})]})}},3352:function(n,e,t){t.d(e,{Ei:function(){return f},FN:function(){return g},H8:function(){return m},IR:function(){return h},LZ:function(){return x},pq:function(){return p}});var r,i,o,a,d,l,c=t(168),s=t(4709),u=t(399),x=s.Z.div(r||(r=(0,c.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n\n    "," {\n        gap: 14px;\n    }\n"])),(0,u.VV)(u.Mq)),p=s.Z.p(i||(i=(0,c.Z)(["\n    font-size: ",";\n    font-weight: ",";\n    line-height: calc(18 / 14);\n    color: ",";\n\n    "," {\n        font-size: ",";\n        line-height: calc(18 / 18);\n    }\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeight.b}),(function(n){return n.theme.colors.textUserName}),(0,u.VV)(u.Mq),(function(n){return n.theme.fontSizes.l})),h=s.Z.div(o||(o=(0,c.Z)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    width: 32px;\n    height: 32px;\n    border-radius: ",";\n    background-color: transparent;\n    border: ",";\n\n    "," {\n        width: 44px;\n        height: 44px;\n    }\n"])),(function(n){return n.theme.borderRadius.xl}),(function(n){return n.theme.borders.avatar}),(0,u.VV)(u.Mq)),f=s.Z.img(a||(a=(0,c.Z)(["\n    width: 100%;\n    height: 100%;\n    border-radius: ",";\n"])),(function(n){return n.theme.borderRadius.xl})),g=s.Z.div(d||(d=(0,c.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: ",";\n    font-weight: ",";\n    background-color: transparent;\n    color: ",";\n"])),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.fontWeight.b}),(function(n){return n.theme.colors.userDefaults})),m=s.Z.div(l||(l=(0,c.Z)(["\n    position: absolute;\n    top: -28%;\n    left: 30px;\n    transform: translate(-50%, -50%) rotate(40deg);\n    width: 100%;\n    height: auto;\n\n    "," {\n        top: -15%;\n        left: 45px;\n    }\n"])),(0,u.VV)(u.Mq))}}]);
//# sourceMappingURL=744.6985c930.chunk.js.map