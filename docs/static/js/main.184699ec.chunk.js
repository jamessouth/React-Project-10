(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMjCGJ1kDAAAADUlEQVQYV2P4//8/AwAI/AL+iF8G4AAAAABJRU5ErkJggg=="},,,,,function(e,t,a){e.exports=a(26)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(10),r=a.n(l),c=(a(18),a(2)),i=a(3),s=a(5),u=a(4),p=a(6),d=a(7),m=a.n(d),h=(a(19),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.modalOpen||e.inputInUse||this.li.getAttribute("data-key")!==e.focusBox.key||this.li.focus(),!0}},{key:"render",value:function(){var e=this;return o.a.createElement("li",{ref:function(t){return e.li=t},onKeyPress:this.props.handleModalOpen,onClick:this.props.handleModalOpen,"data-key":this.props.boxkey,className:"shown",tabIndex:this.props.modalOpen?"-1":"0"},o.a.createElement("img",{src:this.props.isLoaded?this.props.photo:m.a,alt:"employee"}),o.a.createElement("p",{className:"name"},this.props.isLoaded?this.props.name:""),o.a.createElement("p",{className:"user"},this.props.isLoaded?this.props.user:""),o.a.createElement("p",{className:"email"},this.props.isLoaded?this.props.email:""),o.a.createElement("p",{className:"city"},this.props.isLoaded?"".concat(this.props.city,", USA"):""))}}]),t}(n.Component)),A=(a(20),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={value:""},a.handleChange=function(e){a.props.filter(e.target.value),a.setState({value:e.target.value})},a.handleFocus=function(e){a.props.handleInputFocus(e)},a.handleBlur=function(e){a.props.handleInputBlur(e)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.input.focus()}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:"search"},"search"),o.a.createElement("input",{onBlur:this.handleBlur,onFocus:this.handleFocus,role:"searchbox",ref:function(t){return e.input=t},tabIndex:this.props.modalOpen?"-1":"0",value:this.state.value,onChange:this.handleChange,className:"search",id:"search",type:"search",name:"search_box",placeholder:"Search"}))}}]),t}(n.Component)),f=(a(21),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={value:"Select..."},a.handleChange=function(e){a.props.handleSort(e.target.value),a.setState({value:e.target.value})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"sort"},"Sort by:"),o.a.createElement("select",{tabIndex:this.props.modalOpen?"-1":"0",value:this.state.value,onChange:this.handleChange,id:"sort"},o.a.createElement("option",{hidden:!0},"Select..."),o.a.createElement("option",null,"first name"),o.a.createElement("option",null,"last name"),o.a.createElement("option",null,"city")))}}]),t}(n.Component)),E=function(e){return e.sing?null:o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{"aria-label":"previous",onClick:e.handleModalPrev,className:"prev"},"<"),o.a.createElement("button",{"aria-label":"next",onClick:e.handleModalNext,className:"next"},">"))},y=(a(22),function(e){return o.a.createElement("div",{"aria-live":"polite",onKeyUp:e.handleModalClose,className:"hidden"},o.a.createElement("button",{autoFocus:!0,"aria-label":"close",onClick:e.handleModalClose,className:"close"},"x"),o.a.createElement(E,{handleModalPrev:e.handleModalPrev,handleModalNext:e.handleModalNext,sing:e.sing}),o.a.createElement("img",{src:e.emp?e.emp.photo:m.a,alt:"employee"}),o.a.createElement("div",{className:"top-part"},o.a.createElement("p",{className:"name"},e.emp?e.emp.name:""),o.a.createElement("p",{className:"user"},e.emp?e.emp.username:""),o.a.createElement("p",{className:"email"},e.emp?e.emp.email:""),o.a.createElement("p",{className:"city"},e.emp?e.emp.city:"")),o.a.createElement("div",{className:"bottom-part"},o.a.createElement("p",{className:"phone"},e.emp?e.emp.cell:""),o.a.createElement("p",{className:"addy"},e.emp?"".concat(e.emp.street,", ").concat(e.emp.city,", ").concat(e.emp.state,", USA ").concat(e.emp.postcode):""),o.a.createElement("p",{className:"bday"},e.emp?"Birthday: ".concat(e.emp.month,"/").concat(e.emp.day,"/").concat(e.emp.year):"")))}),v=(a(23),function(e){return o.a.createElement("div",{id:"sw","aria-live":"polite"},"New content!",o.a.createElement("button",{autoFocus:!0,onClick:e.handleSWReload},"Reload"))}),w=(a(24),function(e){return document.body.style.overflowY=e.state&&e.state.modalEmployee?"hidden":"visible",document.addEventListener("swUpdated",e.handleNewSW),o.a.createElement(o.a.Fragment,null,e.state&&!!e.state.modalEmployee&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"overlay"}),o.a.createElement(y,{handleModalPrev:e.handleModalPrev,handleModalNext:e.handleModalNext,handleModalClose:e.handleModalClose,emp:e.state.modalEmployee,sing:e.state.singlet})),e.state&&!!e.state.newSW&&o.a.createElement(v,{state:e.state,handleSWReload:e.handleSWReload}),o.a.createElement("div",{className:"h1_input","aria-hidden":e.state&&!!e.state.modalEmployee},o.a.createElement("h1",null,"awesome startup employee directory"),o.a.createElement(A,{handleInputBlur:e.handleInputBlur,handleInputFocus:e.handleInputFocus,modalOpen:e.state&&!!e.state.modalEmployee,filter:e.filter}),o.a.createElement(f,{modalOpen:e.state&&!!e.state.modalEmployee,handleSort:e.handleSort})),o.a.createElement("ul",{"aria-hidden":e.state&&!!e.state.modalEmployee},e.state&&e.state.employees.filter(function(e){return e.isVisible}).map(function(t,a){return o.a.createElement(h,{inputInUse:e.state.inputInUse,focusBox:e.state.last||{key:"x"},modalOpen:!!e.state.modalEmployee,handleModalOpen:e.handleModalOpen,key:t.key,boxkey:t.key,isLoaded:e.state.isLoaded,photo:t.photo,name:t.name,user:t.username,email:t.email,city:t.city})})))}),N=a(1);function O(e){return e[0].toUpperCase()+e.substring(1)}function S(e){var t="".concat(e.name.first.trim().replace(/([A-z\xc0-\xff\u011f\u015e\u0131]+|\w+[A-z\xc0-\xff\u011f\u015e\u0131]*)\w*$/gi,O).replace(/jean-/,"Jean-").replace(/Tomothy|Timmothy/,"Timothy").replace(/filipe/,"Filipe").replace(/hans-/,"Hans-").replace(/zine-/,"Zine-").replace(/sue-/,"Sue-").replace(/ernst-/,"Ernst-").replace(/klaus-/,"Klaus-").replace(/aart-/,"Aart-").replace(/anne-/,"Anne-").replace(/franz-/,"Franz-")," ").concat(e.name.last.trim().replace(/([A-z\xc0-\xff\u011f\u015e\u0131]+|\w+[A-z\xc0-\xff\u011f\u015e\u0131]*)\w*$/gi,O).replace(/cdonal/,"cDonal").replace(/toole/,"'Toole").replace(/brien/,"'Brien").replace(/donoghue/,"'Donoghue").replace(/mahony/,"'Mahony").replace(/(\w)\1{2}/g,"$1$1").replace(/jean-/,"Jean-").replace(/^mccoy/i,"McCoy").replace(/^mck\w+/i,"McKinney"));return Object(N.a)({},e,{name:t})}function g(e){var t=e.location.city.trim().replace(/Lousville/i,"Louisville").replace(/Bueblo/i,"Pueblo").replace(/mcallen/i,"McAllen").replace(/flowermound/i,"Flower Mound").replace(/mckinney/i,"McKinney").replace(/rochmond/i,"Richmond");return Object(N.a)({},e,{city:t})}var I={ALABAMA:"AL",ALASKA:"AK","AMERICAN SAMOA":"AS",ARIZONA:"AZ",ARKANSAS:"AR",CALIFORNIA:"CA",COLORADO:"CO",CONNECTICUT:"CT",DELAWARE:"DE","DISTRICT OF COLUMBIA":"DC","FEDERATED STATES OF MICRONESIA":"FM",FLORIDA:"FL",GEORGIA:"GA",GUAM:"GU",HAWAII:"HI",IDAHO:"ID",ILLINOIS:"IL",INDIANA:"IN",IOWA:"IA",KANSAS:"KS",KENTUCKY:"KY",LOUISIANA:"LA",MAINE:"ME","MARSHALL ISLANDS":"MH",MARYLAND:"MD",MASSACHUSETTS:"MA",MICHIGAN:"MI",MINNESOTA:"MN",MISSISSIPPI:"MS",MISSOURI:"MO",MONTANA:"MT",NEBRASKA:"NE",NEVADA:"NV","NEW HAMPSHIRE":"NH","NEW JERSEY":"NJ","NEW MEXICO":"NM","NEW YORK":"NY","NORTH CAROLINA":"NC","NORTH DAKOTA":"ND","NORTHERN MARIANA ISLANDS":"MP",OHIO:"OH",OKLAHOMA:"OK",OREGON:"OR",PALAU:"PW",PENNSYLVANIA:"PA","PUERTO RICO":"PR","RHODE ISLAND":"RI","SOUTH CAROLINA":"SC","SOUTH DAKOTA":"SD",TENNESSEE:"TN",TEXAS:"TX",UTAH:"UT",VERMONT:"VT","VIRGIN ISLANDS":"VI",VIRGINIA:"VA",WASHINGTON:"WA","WEST VIRGINIA":"WV",WISCONSIN:"WI",WYOMING:"WY"};function b(e){var t=I[Object.keys(I).find(function(t){return t===e.location.state.trim().toUpperCase()})];return Object(N.a)({},e,{state:t})}function M(e){var t=e.location.street.replace(/Mcc/i,"McC").replace(/Mcg/i,"McG");return Object(N.a)({},e,{street:t})}function C(e){var t=e.location.postcode;return Object(N.a)({},e,{postcode:t})}function k(e){var t=new Date(e.dob.date),a=[t.getFullYear().toString().replace(/^\d{2}/,""),(t.getMonth()+1).toString(),t.getDate().toString()],n=a[0],o=a[1],l=a[2];return Object(N.a)({},e,{year:n,month:o,day:l})}function L(e){var t=e.login.username;return Object(N.a)({},e,{username:t})}function R(e){var t=e.picture.large;return Object(N.a)({},e,{photo:t})}function j(e){return Object(N.a)({},e,{isVisible:!0})}function W(e){var t=e.cell.replace("-"," ");return Object(N.a)({},e,{cell:t})}function T(e){return e.length>7?e[0]:e}function U(e){var t=e.email.replace(/^\w+(?=\.)/,T).replace(/(\w)\1{2}/g,"$1$1").replace(/^tomothy(?=\.)/,"timothy");return Object(N.a)({},e,{email:t})}function x(e){return["dob","location","login","picture"].forEach(function(t){return delete e[t]}),Object(N.a)({},e)}function D(e){return e.map(function(e,t){var a="".concat(e.login.salt,"_").concat(t);return Object(N.a)({},e,{key:a})}).map(function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduce(function(e,t){return t(e)},e)}}(S,g,b,M,C,k,L,R,j,W,U,x))}var F=a(8),B=a.n(F),H=a(11);function P(){return(P=Object(H.a)(B.a.mark(function e(t){var a;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Network problem - response not ok");case 6:return e.next=8,a.json();case 8:return a=e.sent,e.abrupt("return",a.results);case 12:e.prev=12,e.t0=e.catch(0),console.log("error on fetch: ",e.t0.message);case 15:case"end":return e.stop()}},e,null,[[0,12]])}))).apply(this,arguments)}var K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={employees:[],isLoaded:!1,modalEmployee:null,singlet:!1,last:null,inputInUse:!0,newSW:null,error:null},a.navigateEmployees=function(e,t){for(var n="next"===e?parseInt(t,10)+1:parseInt(t,10)-1,o=a.state.employees,l="next"===e?0:o.length;"next"===e?l<o.length:l>-1;"next"===e?l++:l--)if(o[(l+n)%o.length].isVisible){a.setState({modalEmployee:o[(l+n)%o.length]});break}},a.sortEmployees=function(e){var t=a.state.employees.sort(function(t,a){return"first name"===e?t.name.match(/^\w+/i)[0]>a.name.match(/^\w+/i)[0]?1:t.name.match(/^\w+/i)[0]<a.name.match(/^\w+/i)[0]?-1:t.name.match(/\w*-?'?\w+$/i)[0]>a.name.match(/\w*-?'?\w+$/i)[0]?1:-1:"last name"===e?t.name.match(/\w*-?'?\w+$/i)[0]>a.name.match(/\w*-?'?\w+$/i)[0]?1:t.name.match(/\w*-?'?\w+$/i)[0]<a.name.match(/\w*-?'?\w+$/i)[0]?-1:t.name.match(/^\w+/i)[0]>a.name.match(/^\w+/i)[0]?1:-1:t.city.toLowerCase()>a.city.toLowerCase()?1:t.city.toLowerCase()<a.city.toLowerCase()?-1:t.name.match(/^\w+/i)[0]>a.name.match(/^\w+/i)[0]?1:-1});a.setState({employees:t.map(function(e,t){return e.key=e.key.replace(/\d+$/,t),e})})},a.handleModalClose=function(e){"keyup"===e.type&&"Escape"!==e.key||(a.setState({last:a.state.modalEmployee,modalEmployee:null}),setTimeout(function(){a.setState({last:null})},500))},a.handleModalNext=function(e){var t=a.state.modalEmployee.key.match(/\d+$/)[0];a.navigateEmployees("next",t)},a.handleModalPrev=function(e){var t=a.state.modalEmployee.key.match(/\d+$/)[0];a.navigateEmployees("prev",t)},a.handleModalOpen=function(e){if("keypress"!==e.type||" "===e.key||"Enter"===e.key){var t=document.querySelectorAll(".shown").length,n=e.currentTarget.getAttribute("data-key").match(/\d+$/)[0];a.setState({modalEmployee:a.state.employees[n],singlet:1===t})}},a.filterEmployees=function(e){a.setState({employees:a.state.employees.map(function(t){return t.name.toLowerCase().includes(e.toLowerCase())?t.isVisible=!0:t.isVisible=!1,t})})},a.handleInputFocus=function(e){a.setState({inputInUse:!0})},a.handleInputBlur=function(e){setTimeout(function(){a.setState({inputInUse:!1})},500)},a.handleNewSW=function(e){a.setState({newSW:e.detail})},a.handleSWReload=function(e){a.state.newSW.waiting&&(a.state.newSW.waiting.postMessage("skipWaiting"),a.setState({newSW:null}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(e){return P.apply(this,arguments)})("https://randomuser.me/api/?results=12&nat=us&inc=name,location,email,login,dob,cell,picture&noinfo").then(D).then(function(t){return e.setState({employees:t,isLoaded:!0})},function(t){return e.setState({isLoaded:!0,error:t})});var t=window.matchMedia("(min-width: 768px)"),a=window.matchMedia("(min-width: 1024px)");t.addListener(this.handleModalClose),a.addListener(this.handleModalClose)}},{key:"render",value:function(){return o.a.createElement(w,{handleSort:this.sortEmployees,handleModalPrev:this.handleModalPrev,handleInputFocus:this.handleInputFocus,handleInputBlur:this.handleInputBlur,handleNewSW:this.handleNewSW,handleSWReload:this.handleSWReload,handleModalNext:this.handleModalNext,handleModalClose:this.handleModalClose,handleModalOpen:this.handleModalOpen,filter:this.filterEmployees,state:this.state})}}]),t}(n.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a;navigator.serviceWorker.addEventListener("controllerchange",function(){a||(window.location.reload(),a=!0)});var n=e.installing;null!=n&&(n.onstatechange=function(){if("installed"===n.state)if(navigator.serviceWorker.controller){console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA.");var a=new CustomEvent("swUpdated",{detail:e});document.dispatchEvent(a),t&&t.onUpdate&&t.onUpdate(e)}else console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(K,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");V?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):G(t,e)})}}()}],[[12,1,2]]]);
//# sourceMappingURL=main.184699ec.chunk.js.map