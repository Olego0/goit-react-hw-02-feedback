(this["webpackJsonpreact-hw2"]=this["webpackJsonpreact-hw2"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={title:"Section_title__3s6tK"}},function(e,t,a){e.exports={wrapper:"Statistics_wrapper__SplX6"}},function(e,t,a){e.exports={button:"FeedbackOptions_button__1pobc"}},,function(e,t,a){e.exports={message:"Notification_message__ddPhK"}},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(20),a(9)),l=a(1),s=a(2),u=a(4),p=a(3),d=(a(21),a(10)),b=a.n(d),m=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.children;return r.a.createElement("div",null,r.a.createElement("h2",{className:b.a.title},t),a)}}]),a}(r.a.Component);m.defaultProps={title:""};var v=m,h=a(11),f=a.n(h),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.good,a=e.neutral,n=e.bad,o=e.total,c=e.positivePercentage;return r.a.createElement("div",{className:f.a.wrapper},r.a.createElement("p",null,"Good: ",t),r.a.createElement("p",null,"Neutral: ",a),r.a.createElement("p",null,"Bad: ",n," "),r.a.createElement("p",null,"Total: ",o),r.a.createElement("p",null,"Positive percentage: ",c,"%"))}}]),a}(r.a.Component),k=a(12),O=a.n(k),j=a(13),E=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onLeaveFeedback,a=e.options;return r.a.createElement("div",null,a.map((function(e){return r.a.createElement("button",{key:Object(j.v4)(),onClick:t,name:e,className:O.a.button},e)})))}}]),a}(r.a.Component),w=a(14),y=a.n(w),F=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.message;return r.a.createElement("div",null,r.a.createElement("h2",{className:y.a.message}," ",e," "))}}]),a}(r.a.Component),_=["good","neutral","bad"],P=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return e.state.good+e.state.bad+e.state.neutral},e.countPositiveFeedbackPercentage=function(){return 0===e.countTotalFeedback()?0:Math.round(e.state.good/e.countTotalFeedback()*100)},e.onLeaveFeedback=function(t){var a=t.target.name;e.setState((function(e,t){return Object(i.a)({},a,e[a]+t.step)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{title:"Please leave feedback"},r.a.createElement(E,{options:_,onLeaveFeedback:this.onLeaveFeedback})),0===this.countTotalFeedback()?r.a.createElement(F,{message:"No feedback given"}):r.a.createElement(v,{title:"Statistics"},r.a.createElement(g,{good:this.state.good,bad:this.state.bad,neutral:this.state.neutral,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,{step:1})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.ecfb8b44.chunk.js.map