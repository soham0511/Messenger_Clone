(this.webpackJsonpfb_msngr_clone=this.webpackJsonpfb_msngr_clone||[]).push([[0],{54:function(e,s,n){},55:function(e,s,n){},56:function(e,s,n){},70:function(e,s,n){"use strict";n.r(s);var t=n(2),a=n.n(t),c=n(18),r=n.n(c),o=(n(54),n(35)),i=(n(55),n(89)),m=n(91),u=n(92),l=n(87),d=n(88),j=(n(56),n(12)),p=Object(t.forwardRef)((function(e,s){var n=e.message,t=e.username===n.username;return Object(j.jsx)("div",{ref:s,className:"message ".concat(t&&"message__user"),children:Object(j.jsx)(u.a,{className:t?"message__userCard":"message__guestCard",children:Object(j.jsx)(l.a,{children:Object(j.jsxs)(d.a,{color:"white",variant:"h5",component:"h2",children:[!t&&"".concat(n.username||"Unknown User",": ")," ",n.message]})})})})})),b=n(34),f=b.a.initializeApp({apiKey:"AIzaSyA3zOlfx8HHlOp8FgDH9jVLm0ue04w1Gjs",authDomain:"messenger-clone-d5e14.firebaseapp.com",projectId:"messenger-clone-d5e14",storageBucket:"messenger-clone-d5e14.appspot.com",messagingSenderId:"823940201302",appId:"1:823940201302:web:5f630e0e108fa99a2734f7",measurementId:"G-1GJVC0HJ5S"}).firestore(),g=n(47),h=n(46),O=n.n(h),x=n(90);var _=function(){var e=Object(t.useState)(""),s=Object(o.a)(e,2),n=s[0],a=s[1],c=Object(t.useState)([]),r=Object(o.a)(c,2),u=r[0],l=r[1],d=Object(t.useState)(""),h=Object(o.a)(d,2),_=h[0],v=h[1];return Object(t.useEffect)((function(){f.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(t.useEffect)((function(){v(prompt("Please enter your name"))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("img",{src:"https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"}),Object(j.jsx)("h1",{children:"Srimany Messenger Clone"}),Object(j.jsxs)("h3",{children:["Welcome ",_]}),Object(j.jsx)("form",{className:"app__form",children:Object(j.jsxs)(i.a,{className:"app__formControl",children:[Object(j.jsx)(m.a,{className:"app__input",placeholder:"Enter a Message...",value:n,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)(x.a,{className:"app__iconButton",disabled:!n,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),f.collection("messages").add({message:n,username:_,timestamp:b.a.firestore.FieldValue.serverTimestamp()}),a("")},children:Object(j.jsx)(O.a,{})})]})}),Object(j.jsx)(g.a,{children:u.map((function(e){var s=e.id,n=e.message;return Object(j.jsx)(p,{username:_,message:n},s)}))})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(s){var n=s.getCLS,t=s.getFID,a=s.getFCP,c=s.getLCP,r=s.getTTFB;n(e),t(e),a(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),v()}},[[70,1,2]]]);
//# sourceMappingURL=main.f2bde4c5.chunk.js.map