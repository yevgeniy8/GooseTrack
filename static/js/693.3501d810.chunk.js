"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[693],{3693:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,o,i,a,c,l,d,s,x,p,u,h,g=t(168),b=t(2791),f=t(3081),m=f.Z.button(r||(r=(0,g.Z)(["\n    color: white;\n    font-size: 16px;\n    font-family: Inter;\n    font-weight: 700;\n    text-transform: uppercase;\n    line-height: 18px;\n    word-wrap: break-word    \n    font-family: Inter;\n    width: 131px;\n    height: 34px;\n    padding: 8px, 12px;\n    border-radius: 8px;\n    border: none;\n    background-color: #3E85F3;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n        background-color: #2b78ef;\n    };\n"]))),j=f.Z.div(o||(o=(0,g.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 32px;\n"]))),w=f.Z.div(i||(i=(0,g.Z)(["\n    display: flex;\n    gap: 8px;\n    align-items: center;\n"]))),Z=f.Z.button(a||(a=(0,g.Z)(["\n    padding: 8px 10px;\n    width: 38px;\n    height: 34px;\n    background-color: #fff;\n    border: solid 1px rgba(220, 227, 229, 0.8);\n    border-radius: 8px 0 0 8px;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),k=f.Z.button(c||(c=(0,g.Z)(["\n    padding: 8px 10px;\n    width: 38px;\n    height: 34px;\n    background-color: #fff;\n    border: solid 1px rgba(220, 227, 229, 0.8);\n    border-radius: 0 8px 8px 0;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),v=f.Z.svg(l||(l=(0,g.Z)(["\n    stroke: #343434"]))),y=f.Z.button(d||(d=(0,g.Z)(["\n    width: 82px;\n    height: 34px;\n    padding: 8px 16px;\n    border: none;\n    border-radius: 8px 0 0 8px;\n    border-right: 1px solid rgba(62, 133, 243, 0.2);\n    background-color: #E3F3FF;\n    font-family: Inter;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 18px;\n    letter-spacing: 0em;\n    text-align: center;\n    color: #3E85F3;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus,\n    &:active {\n    background-color: rgba(62, 133, 243, 0.2);\n    }\n"]))),F=f.Z.button(s||(s=(0,g.Z)(["\n    width: 82px;\n    height: 34px;\n    padding: 8px 16px;\n    border: none;\n    border-radius: 0 8px 8px 0;\n    border-left: 1px solid rgba(62, 133, 243, 0.2);\n    background-color: #E3F3FF;\n    font-family: Inter;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 18px;\n    letter-spacing: 0em;\n    text-align: center;\n    color: #3E85F3;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus,\n    &:active {\n    background-color: rgba(62, 133, 243, 0.2);\n    }\n"]))),z=t(9439),M=t(3439),D=["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],C=function(n){var e=n.toDateString().split(" ");return"".concat(e[1]," ").concat(e[3])},E=t(184),I=function(){var n=(0,b.useState)(new Date(2023,9,1)),e=(0,z.Z)(n,2),t=e[0],r=e[1];return(0,E.jsxs)(w,{children:[(0,E.jsx)(m,{type:"button",children:C(t)}),(0,E.jsxs)("div",{children:[(0,E.jsx)(Z,{type:"button",onClick:function(){return function(n,e){var t=n.getMonth();t>0?n.setMonth(t-1):(n.setMonth(11),n.setFullYear(n.getFullYear()-1)),e(new Date(n))}(t,r)},children:(0,E.jsx)(v,{width:"18",height:"18",children:(0,E.jsx)("use",{href:"".concat(M.Z,"#chevron-left")})})}),(0,E.jsx)(k,{type:"button",onClick:function(){return function(n,e){var t=n.getMonth();t<11?n.setMonth(t+1):(n.setMonth(0),n.setFullYear(n.getFullYear()+1)),e(new Date(n))}(t,r)},children:(0,E.jsx)(v,{width:"18",height:"18",children:(0,E.jsx)("use",{href:"".concat(M.Z,"#chevron-right")})})})]})]})},S=t(1087),Y=function(){return(0,E.jsxs)("div",{children:[(0,E.jsx)(S.OL,{to:"/user/calendar/month/:currentDate",children:(0,E.jsx)(y,{type:"button",children:"Month"})}),(0,E.jsx)(S.OL,{to:"/user/calendar/day/:currentDay",children:(0,E.jsx)(F,{type:"button",children:"Day"})})]})},_=function(){return(0,E.jsxs)(j,{children:[(0,E.jsx)(I,{}),(0,E.jsx)(Y,{})]})},L=f.Z.ul(x||(x=(0,g.Z)(["\n    display: flex;\n    justify-content: space-around;\n    padding: 14px 0;\n    background-color: rgba(255, 255, 255, 1);\n    border: 1px solid rgba(220, 227, 229, 0.8);\n    border-radius: 8px;\n    overflow: hidden;\n    "]))),O=f.Z.li(p||(p=(0,g.Z)(["\n    font-family: Inter;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 18px;\n    letter-spacing: 0em;\n    text-align: left;\n    text-transform: uppercase;\n    &:nth-last-child(-n+2) {\n        color: #3E85F3;\n    };\n"]))),T=function(){return(0,E.jsx)(L,{children:D.map((function(n){return(0,E.jsx)(O,{children:n})}))})},W=function(){return(0,E.jsx)("div",{style:{backgroundColor:"rgba(202, 232, 255, 1)"},children:(0,E.jsx)(T,{})})},q=f.Z.div(u||(u=(0,g.Z)(["\n    padding: 32px;\n    background-color: #F7F6F9;\n    "]))),A=f.Z.h2(h||(h=(0,g.Z)(["\n    font-family: Inter;\n    font-size: 32px;\n    font-weight: 700;\n    line-height: 32px;\n    letter-spacing: 0em;\n    text-align: left;\n    margin-bottom: 38px;\n    box-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04);\n    box-shadow: 0px 47px 355px 0px rgba(0, 0, 0, 0.07);\n"]))),B=function(){return(0,E.jsxs)(q,{children:[(0,E.jsx)(A,{children:"Calendar"}),(0,E.jsx)(_,{}),(0,E.jsx)(W,{})]})}}}]);
//# sourceMappingURL=693.3501d810.chunk.js.map