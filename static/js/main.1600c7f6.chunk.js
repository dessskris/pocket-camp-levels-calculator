(this["webpackJsonppocket-camp-levels-calculator"]=this["webpackJsonppocket-camp-levels-calculator"]||[]).push([[0],{27:function(e){e.exports=JSON.parse('{"totalPriorFriendshipPoints":[0,1,5,9,15,24,35,49,65,84,105,129,155,184,215,249,285,324,365,409,455,504,555,609,665,724,785,849,915,984,1055,1104,1155,1209,1265,1324,1384,1446,1511,1582,1663,1746,1833,1928,2035,2162,2299,2456,2633,2830,3077]}')},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(12),i=n.n(a),r=(n(40),n(41),n(20)),l=n(74),o=n(69),j=n(72),u=n(73),h=n(75),b=n(71),d=n(70),p=n(27),v=(n(42),n(4)),O=function(){var e=Object(c.useState)("0"),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("0"),i=Object(r.a)(a,2),O=i[0],x=i[1],f=Object(c.useState)("15"),m=Object(r.a)(f,2),g=m[0],k=m[1],F=Object(c.useState)(),L=Object(r.a)(F,2),y=L[0],C=L[1];return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)(l.a,{children:[Object(v.jsx)(o.a,{htmlFor:"from-level",children:"From Level:"}),Object(v.jsx)(j.a,{id:"from-level",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(o.a,{htmlFor:"points-next",children:"Points to Next Level:"}),Object(v.jsx)(j.a,{id:"points-next",value:O,onChange:function(e){return x(e.target.value)}})]}),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(o.a,{children:"To Level:"}),Object(v.jsxs)(u.a,{"aria-label":"to level",name:"to-level",value:g,onChange:function(e){return k(e.target.value)},children:[Object(v.jsx)(h.a,{value:"7",control:Object(v.jsx)(b.a,{}),label:"Level 7"}),Object(v.jsx)(h.a,{value:"10",control:Object(v.jsx)(b.a,{}),label:"Level 10"}),Object(v.jsx)(h.a,{value:"15",control:Object(v.jsx)(b.a,{}),label:"Level 15"})]})]}),Object(v.jsx)(d.a,{variant:"contained",onClick:function(){if(n>=g)C("0");else{var e=p.totalPriorFriendshipPoints[parseInt(n)+1]-parseInt(O),t=p.totalPriorFriendshipPoints[parseInt(g)];C((t-e).toString())}},children:"Level Up!"}),y&&Object(v.jsxs)("p",{children:["Required Points: ",y]})]})};var x=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h2",{children:"Animal Crossing: Pocket Camp"}),Object(v.jsx)("h1",{children:"Friendship Levels Calculator"}),Object(v.jsxs)("p",{children:["Have you ever found yourself stuck on a Happy Homeroom class because you can't craft a furniture? Look it up on the ",Object(v.jsx)("a",{href:"https://animalcrossingpocketcamp.fandom.com/wiki",children:"ACPC Wiki"})," and it turns out you have to reach Level 15 Friendship with a villager and start their Special Request."]}),Object(v.jsx)("p",{children:"Fortunately you have plenty of snacks to give them, but how many do you need?"}),Object(v.jsx)("p",{children:"Let us help you calculate it below!"}),Object(v.jsx)(O,{}),Object(v.jsxs)("div",{className:"footer",children:[Object(v.jsxs)("p",{children:["Developed by Desy Kristianti ",Object(v.jsx)("a",{href:"https://twitter.com/dessskris",children:"@dessskris"})]}),Object(v.jsxs)("p",{children:["Friendship Levels Points Source: ",Object(v.jsx)("a",{href:"https://animalcrossingpocketcamp.fandom.com/wiki/Villagers#Friendship_Levels",children:"ACPC Wiki"})]})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(x,{})}),document.getElementById("root")),f()}},[[48,1,2]]]);
//# sourceMappingURL=main.1600c7f6.chunk.js.map