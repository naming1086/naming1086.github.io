(this.webpackJsonpcar=this.webpackJsonpcar||[]).push([[0],{107:function(t,e,i){},108:function(t,e,i){},109:function(t,e,i){},110:function(t,e,i){},111:function(t,e,i){},112:function(t,e,i){},113:function(t,e,i){},116:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i(5),s=i.n(a),c=i(66),o=i.n(c),l=(i(74),i(1)),r=i(4),m=i(2),u=i(3),d=(i(35),i(7)),h=(i(75),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={listItems:[]},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.forEachLi=n.forEachLi.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=this,e=this.props.imageFunctions.map((function(e,i){return t.forEachLi(!1===e.bln?e.image:image.imageclick,i)}));this.setState({listItems:e})}},{key:"componentWillReceiveProps",value:function(t){for(var e=[],i=0;i<t.imageFunctions.length;i++){var n=t.imageFunctions[i];e.push(this.forEachLi(!1===n.bln?n.image:n.imageclick,i))}this.setState({listItems:e})}},{key:"componentWillUnmount",value:function(){for(var t,e=[],i=0;i<this.props.imageFunctions.length;i++){var n=this.props.imageFunctions[i];!1===n.bln?t=this.forEachLi(n.image,i):(n.bln=!1,t=this.forEachLi(n.image,i),void 0!==n.function&&n.function(null,n)),e.push(t)}this.setState({listItems:e})}},{key:"forEachLi",value:function(t,e){return Object(n.jsx)("div",{className:"fix-item",children:Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("img",{src:t,"data-index":e,onClick:this.handleClick})})},e)}},{key:"handleClick",value:function(t){for(var e,i=t.target.getAttribute("data-index"),n=[],a=0;a<this.props.imageFunctions.length;a++){var s=this.props.imageFunctions[a];i==a&&(s.bln=!s.bln,void 0!==s.function&&s.function(t,s),e=this.forEachLi(!1===s.bln?s.image:s.imageclick,a)),i!=a&&(!1===s.bln||(s.bln=!1,void 0!==s.function&&s.function(t,s)),e=this.forEachLi(s.image,a)),n.push(e)}this.setState({listItems:n})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"fix-service",style:this.props.stylePosition,children:Object(n.jsx)("div",{className:"servise-list",children:this.state.listItems})})}}]),i}(s.a.Component)),g=(i(76),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={listItems:[]},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=this,e=this.props.styles.map((function(e,i){return t.forEachLi(e.style,i)}));this.setState({listItems:e})}},{key:"componentWillReceiveProps",value:function(t){var e=this,i=t.styles.map((function(t,i){return e.forEachLi(t.style,i)}));this.setState({listItems:i})}},{key:"forEachLi",value:function(t,e,i){return Object(n.jsx)("div",{className:"divcoloreach",style:i,children:Object(n.jsx)("div",{className:"divcolorone",style:t,"data-index":e,onClick:this.handleClick})},e)}},{key:"handleClick",value:function(t){for(var e,i=t.target.getAttribute("data-index"),n=[],a=0;a<this.props.styles.length;a++){var s=this.props.styles[a];if(i==a){s.bln=!s.bln;e=this.forEachLi(s.style,a,{border:"2px solid #42E2FF",boxSizing:"border-box"})}else!1===s.bln||(s.bln=!1),e=this.forEachLi(s.style,a);n.push(e)}this.setState({listItems:n})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"divcolorchoose",style:this.props.top,children:this.state.listItems})}}]),i}(s.a.Component)),p=(i(77),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={strHtml:""},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=Object(n.jsx)("div",{className:"divbackground3",children:Object(n.jsxs)("div",{className:"divQRcodeContainer3",children:[Object(n.jsx)("img",{src:"./images/close.svg",className:"imgclose3",onClick:this.handleClick}),Object(n.jsx)("img",{src:"./images/QRcodescan.png",className:"imgQRcode3"}),Object(n.jsxs)("div",{className:"divcompanyandcontact3",children:[Object(n.jsxs)("div",{className:"company",children:[Object(n.jsx)("img",{src:"./images/company.svg"}),"\u5b98\u65b9\u7f51\u7ad9\uff1awww.guanfang.com"]}),Object(n.jsxs)("div",{className:"contact",children:[Object(n.jsx)("img",{src:"./images/phone.svg"}),"\u8054\u7cfb\u65b9\u5f0f\uff1a188 1234 5678"]})]})]})});this.setState({strHtml:t})}},{key:"handleClick",value:function(t){this.props.target.click()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.strHtml})}}]),i}(s.a.Component)),b=(i(78),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={strHtml:""},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=Object(n.jsx)("img",{src:"./images/robot.png",className:"robot-question"});this.setState({strHtml:t})}},{key:"handleClick",value:function(t){this.props.target.click()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.strHtml})}}]),i}(s.a.Component)),v=(s.a.Component,i(79),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={listItems:[]},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.forEachLi=n.forEachLi.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=this,e=this.props.imageFunctions.map((function(e,i){return t.forEachLi(!1===e.bln?e.image:image.imageclick,i)}));this.setState({listItems:e})}},{key:"componentWillReceiveProps",value:function(t){for(var e=[],i=0;i<t.imageFunctions.length;i++){var n=t.imageFunctions[i];e.push(this.forEachLi(!1===n.bln?n.image:n.imageclick,i))}this.setState({listItems:e})}},{key:"componentWillUnmount",value:function(){for(var t,e=[],i=0;i<this.props.imageFunctions.length;i++){var n=this.props.imageFunctions[i];!1===n.bln?t=this.forEachLi(n.image,i):(n.bln=!1,t=this.forEachLi(n.image,i),void 0!==n.function&&n.function(null,n)),e.push(t)}this.setState({listItems:e})}},{key:"forEachLi",value:function(t,e){return Object(n.jsx)("div",{className:"icon-each",children:Object(n.jsx)("img",{src:t,"data-index":e,onClick:this.handleClick,className:"icon-each-img"})},e)}},{key:"handleClick",value:function(t){for(var e,i=t.target.getAttribute("data-index"),n=[],a=0;a<this.props.imageFunctions.length;a++){var s=this.props.imageFunctions[a];i==a&&(s.bln=!s.bln,void 0!==s.function&&s.function(t,s),e=this.forEachLi(!1===s.bln?s.image:s.imageclick,a)),i!=a&&(!1===s.bln||(s.bln=!1,void 0!==s.function&&s.function(t,s)),e=this.forEachLi(s.image,a)),n.push(e)}this.setState({listItems:n})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"icon-container",style:this.props.stylePosition,children:this.state.listItems})}}]),i}(s.a.Component)),f=(i(80),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={listItems:[]},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=this,e=this.props.styles.map((function(e,i){return t.forEachLi(e.style,i)}));this.setState({listItems:e})}},{key:"componentWillReceiveProps",value:function(t){var e=this,i=t.styles.map((function(t,i){return e.forEachLi(t.style,i)}));this.setState({listItems:i})}},{key:"forEachLi",value:function(t,e,i){return Object(n.jsx)("div",{className:"icon-each2",style:i,"data-index":e,onClick:this.handleClick,children:Object(n.jsx)("div",{className:"icon-icon2",style:t,"data-index":e,onClick:this.handleClick})},e)}},{key:"handleClick",value:function(t){for(var e,i=t.target.getAttribute("data-index"),n=[],a=0;a<this.props.styles.length;a++){var s=this.props.styles[a];if(i==a){s.bln=!s.bln;e=this.forEachLi(s.style,a,{border:"4px solid rgba(255, 101, 39, 1)",boxSizing:"border-box"})}else!1===s.bln||(s.bln=!1),e=this.forEachLi(s.style,a);n.push(e)}this.setState({listItems:n})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"icons-container2",style:this.props.stylePosition,children:this.state.listItems})}}]),i}(s.a.Component)),j=(i(81),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={strHtml:""},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=Object(n.jsx)("div",{className:"divbackground",children:Object(n.jsxs)("div",{className:"divQRcodeContainer2",children:[Object(n.jsx)("img",{src:"./images/close.svg",className:"imgclose",onClick:this.handleClick}),Object(n.jsx)("img",{src:"./images/QRcodescan.png",className:"imgQRcode"}),Object(n.jsxs)("div",{className:"divcompanyandcontact",children:[Object(n.jsxs)("div",{className:"company",children:[Object(n.jsx)("img",{src:"./images/company.svg"}),"\u5b98\u65b9\u7f51\u7ad9\uff1awww.guanfang.com"]}),Object(n.jsxs)("div",{className:"contact",children:[Object(n.jsx)("img",{src:"./images/phone.svg"}),"\u8054\u7cfb\u65b9\u5f0f\uff1a188 1234 5678"]})]})]})});this.setState({strHtml:t})}},{key:"handleClick",value:function(t){this.props.target.click()}},{key:"render",value:function(){return Object(n.jsx)("div",{id:"Contactid",children:this.state.strHtml})}}]),i}(s.a.Component)),y=(i(82),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={strHtml:""},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=Object(n.jsx)("img",{src:"./images/robot.png",className:"robot-question2"});this.setState({strHtml:t})}},{key:"handleClick",value:function(t){this.props.target.click()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.strHtml})}}]),i}(s.a.Component)),k=(i(83),i(22)),x=(i(65),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={blnshow:!0},n.CloseVideo=n.CloseVideo.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"CloseVideo",value:function(){this.setState({blnshow:!1})}},{key:"render",value:function(){return this.state.blnshow?Object(n.jsx)("div",{className:"mask-layer2",id:"maskLayer",children:Object(n.jsxs)("div",{className:"video-box2",id:"videoBox",children:[Object(n.jsx)(k.Player,{playsInline:!0,src:"./video/\u75c5\u6bd2\u7bc715s.mp4",autoPlay:!0}),Object(n.jsx)("div",{className:"close-box2",id:"closeBox",children:Object(n.jsx)("img",{src:"./images/close2.svg",onClick:this.CloseVideo})})]})}):null}}]),i}(s.a.Component)),O=(s.a.Component,i(107),i(108),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={listItems:[]},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.forEachLi=n.forEachLi.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=this,e=this.props.imageFunctions.map((function(e,i){return t.forEachLi(!1===e.bln?e.image:image.imageclick,i)}));this.setState({listItems:e})}},{key:"componentWillReceiveProps",value:function(t){for(var e=[],i=0;i<t.imageFunctions.length;i++){var n=t.imageFunctions[i];e.push(this.forEachLi(!1===n.bln?n.image:n.imageclick,i))}this.setState({listItems:e})}},{key:"componentWillUnmount",value:function(){for(var t,e=[],i=0;i<this.props.imageFunctions.length;i++){var n=this.props.imageFunctions[i];!1===n.bln?t=this.forEachLi(n.image,i):(n.bln=!1,t=this.forEachLi(n.image,i),void 0!==n.function&&n.function(null,n)),e.push(t)}this.setState({listItems:e})}},{key:"forEachLi",value:function(t,e){return Object(n.jsx)("div",{className:"fix-item",children:Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("img",{src:t,"data-index":e,onClick:this.handleClick})})},e)}},{key:"handleClick",value:function(t){for(var e,i=t.target.getAttribute("data-index"),n=[],a=0;a<this.props.imageFunctions.length;a++){var s=this.props.imageFunctions[a];i==a&&(s.bln=!s.bln,void 0!==s.function&&s.function(t,s),e=this.forEachLi(!1===s.bln?s.image:s.imageclick,a)),i!=a&&(!1===s.bln||(s.bln=!1,void 0!==s.function&&s.function(t,s)),e=this.forEachLi(s.image,a)),n.push(e)}this.setState({listItems:n})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"fix-service",style:this.props.stylePosition,children:Object(n.jsx)("div",{className:"servise-list",children:this.state.listItems})})}}]),i}(s.a.Component)),C=(i(109),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={listItems:[],blndownorup:!1,styledown:{backgroundImage:"url(./images/down.svg)"},styleup:{backgroundImage:"url(./images/up.svg)"},styledownmove:{transform:"translateY(0px)"},styledownup:{transform:"translateY(70px)"}},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.handleClick2=n.handleClick2.bind(Object(d.a)(n)),n.forEachLi=n.forEachLi.bind(Object(d.a)(n)),n.cancelFunction=n.cancelFunction.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=this,e=this.props.imageFunctions.map((function(e,i){return t.forEachLi(!1===e.bln?e.image:image.imageclick,i)}));this.setState({listItems:e})}},{key:"componentWillReceiveProps",value:function(t){for(var e=[],i=0;i<t.imageFunctions.length;i++){var n=t.imageFunctions[i];e.push(this.forEachLi(!1===n.bln?n.image:n.imageclick,i))}this.setState({listItems:e})}},{key:"componentWillUnmount",value:function(){this.cancelFunction()}},{key:"cancelFunction",value:function(){for(var t,e=[],i=0;i<this.props.imageFunctions.length;i++){var n=this.props.imageFunctions[i];!1===n.bln?t=this.forEachLi(n.image,i):(n.bln=!1,t=this.forEachLi(n.image,i),void 0!==n.function&&n.function(null,n)),e.push(t)}this.setState({listItems:e})}},{key:"forEachLi",value:function(t,e){return Object(n.jsx)("div",{className:"icon-each3",children:Object(n.jsx)("img",{src:t,"data-index":e,onClick:this.handleClick,className:"icon-each-img3"})},e)}},{key:"handleClick",value:function(t){for(var e,i=t.target.getAttribute("data-index"),n=[],a=0;a<this.props.imageFunctions.length;a++){var s=this.props.imageFunctions[a];i==a&&(s.bln=!s.bln,void 0!==s.function&&s.function(t,s),e=this.forEachLi(!1===s.bln?s.image:s.imageclick,a)),i!=a&&(!1===s.bln||(s.bln=!1,void 0!==s.function&&s.function(t,s)),e=this.forEachLi(s.image,a)),n.push(e)}this.setState({listItems:n})}},{key:"handleClick2",value:function(t){this.cancelFunction(),this.setState({blndownorup:!this.state.blndownorup})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"icon-containerparent3",style:this.state.blndownorup?this.state.styledownup:this.state.styledownmove,children:[Object(n.jsx)("div",{className:"LowerMenuOpenClose3",style:this.state.blndownorup?this.state.styleup:this.state.styledown,onClick:this.handleClick2}),Object(n.jsx)("div",{className:"icon-container3",children:this.state.listItems})]})}}]),i}(s.a.Component)),w=(i(110),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={strHtml:""},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=Object(n.jsx)("div",{className:"divbackground4",children:Object(n.jsxs)("div",{className:"divQRcodeContainer4",children:[Object(n.jsx)("img",{src:"./images/close.svg",className:"imgclose4",onClick:this.handleClick}),Object(n.jsx)("img",{src:"./images/QRcodescan.png",className:"imgQRcode4"}),Object(n.jsxs)("div",{className:"divcompanyandcontact4",children:[Object(n.jsxs)("div",{className:"company",children:[Object(n.jsx)("img",{src:"./images/company.svg"}),"\u5b98\u65b9\u7f51\u7ad9\uff1awww.guanfang.com"]}),Object(n.jsxs)("div",{className:"contact",children:[Object(n.jsx)("img",{src:"./images/phone.svg"}),"\u8054\u7cfb\u65b9\u5f0f\uff1a188 1234 5678"]})]})]})});this.setState({strHtml:t})}},{key:"handleClick",value:function(t){this.props.target.click()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.strHtml})}}]),i}(s.a.Component)),L=(i(111),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={strHtml:""},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=Object(n.jsx)("img",{src:"./images/robot.png",className:"robot-question3"});this.setState({strHtml:t})}},{key:"handleClick",value:function(t){this.props.target.click()}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.strHtml})}}]),i}(s.a.Component)),E=(i(112),function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).state={listItems:[]},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=this,e=this.props.styles.map((function(e,i){return t.forEachLi(e.style,i)}));this.setState({listItems:e})}},{key:"componentWillReceiveProps",value:function(t){var e=this,i=t.styles.map((function(t,i){return e.forEachLi(t.style,i)}));this.setState({listItems:i})}},{key:"forEachLi",value:function(t,e,i){return Object(n.jsx)("div",{className:"icon-each4",style:i,"data-index":e,onClick:this.handleClick,children:Object(n.jsx)("div",{className:"icon-icon4",style:t,"data-index":e,onClick:this.handleClick})},e)}},{key:"handleClick",value:function(t){for(var e,i=t.target.getAttribute("data-index"),n=[],a=0;a<this.props.styles.length;a++){var s=this.props.styles[a];if(i==a){s.bln=!s.bln;e=this.forEachLi(s.style,a,{border:"2px solid rgba(66, 226, 255, 1)",boxSizing:"border-box"})}else!1===s.bln||(s.bln=!1),e=this.forEachLi(s.style,a);n.push(e)}this.setState({listItems:n})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"icons-container4",style:this.props.stylePosition,children:this.state.listItems})}}]),i}(s.a.Component)),F=(i(113),s.a.Component,i(6)),H=i(68),S=i(26),I=function(){function t(){Object(l.a)(this,t)}return Object(r.a)(t,[{key:"initThree",value:function(t){var e,i,n,a;function s(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}!function(){var c=document.getElementById(t);(n=new F.WebGLRenderer({antialias:!0})).antialias=!0,n.autoClear=!0,n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(16777215,1),n.toneMappingExposure=1,c.appendChild(n.domElement),a=new F.Scene,(e=new F.PerspectiveCamera(90,window.innerWidth/window.innerHeight,.1,2e3)).position.z=.01,(i=new H.a(e,n.domElement)).enableZoom=!0,i.enablePan=!0,i.enableDamping=!0,i.rotateSpeed=-.25;var o=new F.AmbientLight(4210752);o.intensity=10,a.add(o);var l=[];l.push((new F.TextureLoader).load("./AboutCar/panorama/Lightgrey/r.jpg")),l.push((new F.TextureLoader).load("./AboutCar/panorama/Lightgrey/l.jpg")),l.push((new F.TextureLoader).load("./AboutCar/panorama/Lightgrey/u.jpg")),l.push((new F.TextureLoader).load("./AboutCar/panorama/Lightgrey/d.jpg")),l.push((new F.TextureLoader).load("./AboutCar/panorama/Lightgrey/f.jpg")),l.push((new F.TextureLoader).load("./AboutCar/panorama/Lightgrey/b.jpg"));for(var r=[],m=0;m<6;m++)r.push(new F.MeshBasicMaterial({map:l[m],transparent:!0}));var u=new F.Mesh(new F.BoxBufferGeometry(10,10,10),r);u.geometry.scale(1,1,-1),a.add(u),a.fog=new F.Fog(13426943,500,1e4);var d=new F.BoxGeometry,h=new F.MeshBasicMaterial({color:255}),g=new F.Mesh(d,h);a.add(g),window.addEventListener("resize",s,!1)}(),function t(){requestAnimationFrame(t),i.update(),S.a.update(),n.render(a,e)}(),function(){for(var t=[],i=[{position:{x:-1.52,y:-.58,z:-3},name:"videoplay1",img:"./images/playvideo.png"},{position:{x:-2.14,y:-1.24,z:-3},name:"videoplay1",img:"./images/showpic.png"},{position:{x:0,y:-.38,z:-3},name:"videoplay1",img:"./images/playvideo.png"},{position:{x:-.7,y:-2.82,z:-3},name:"videoplay1",img:"./images/playvideo.png"},{position:{x:2,y:-4.5,z:-3},name:"videoplay1",img:"./images/playvideo.png"},{position:{x:1.62,y:-.78,z:-2.66},name:"videoplay1",img:"./images/playvideo.png"},{position:{x:2.42,y:.16,z:-2.22},name:"videoplay1",img:"./images/playvideo.png"},{position:{x:2.22,y:-.64,z:-1.52},name:"videoplay1",img:"./images/showpic.png"}],n=function(t){var e=new S.a.Tween(t.scale);e.to({x:.13,y:.13,z:.13},2e3),e.start(),e.onUpdate((function(){}));var i=new S.a.Tween(t.scale);i.to({x:.1,y:.1,z:.1},2e3),i.onUpdate((function(){})),e.chain(i),i.chain(e)},s=0;s<i.length;s++){var c=(new F.TextureLoader).load(i[s].img);c.needsUpdate=!0;var o=new F.SpriteMaterial({map:c,color:16777215,transparent:!0,side:F.DoubleSide,sizeAttenuation:!1}),l=new F.Sprite(o);l.position.set(i[s].position.x,i[s].position.y,i[s].position.z),l.scale.set(.1,.1,.1),l.renderOrder=1,t.push(l),n(l),a.add(l)}var r=new F.Raycaster,m=new F.Vector2;window.addEventListener("mousemove",(function(i){var n,a;n=i.clientX,a=i.clientY,m.x=n/window.innerWidth*2-1,m.y=-a/window.innerHeight*2+1,r.setFromCamera(m,e),r.intersectObjects(t).length>0?document.body.style.cursor="pointer":document.body.style.cursor=""}))}(),window.scene=a,window.THREE=F}}]),t}(),N=function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var a;return Object(l.a)(this,i),(a=e.call(this,t)).state={style2:{top:"25px"},strChoose:"",q:new I,strHtml:"",mapHtml:new Map,images1:[{bln:!1,image:"./images/color.svg",imageclick:"./images/color-click.svg",function:function(t,e){if(a.state.mapHtml.has("color")||a.state.mapHtml.set("color",""),e.bln){if(window.document.body.getBoundingClientRect().width<425)var i={top:"-1.6rem"};else i={top:"-1.2rem"};a.state.mapHtml.set("color",Object(n.jsx)(E,{stylePosition:i,styles:a.state.colorsImage}))}else a.state.mapHtml.set("color","");a.setState({mapHtml:a.state.mapHtml})}},{bln:!1,image:"./images/tire.svg",imageclick:"./images/tire-click.svg",function:function(t,e){if(a.state.mapHtml.has("tire")||a.state.mapHtml.set("tire",""),e.bln){if(window.document.body.getBoundingClientRect().width<425)var i={top:"-1.6rem"};else i={top:"-1.2rem"};a.state.mapHtml.set("tire",Object(n.jsx)(E,{stylePosition:i,styles:a.state.textureImage}))}else a.state.mapHtml.set("tire","");a.setState({mapHtml:a.state.mapHtml})}},{bln:!1,image:"./images/tagshow.svg",imageclick:"./images/tagshow-click.svg"},{bln:!1,image:"./images/inner.svg",imageclick:"./images/inner-click.svg"},{bln:!1,image:"./images/split.svg",imageclick:"./images/split-click.svg"},{bln:!1,image:"./images/inner2.svg",imageclick:"./images/inner2-click.svg"},{bln:!1,image:"./images/contact.svg",imageclick:"./images/contact-click.svg",function:function(t,e){a.state.mapHtml.has("contact")||a.state.mapHtml.set("contact",""),e.bln?a.state.mapHtml.set("contact",Object(n.jsx)(L,{target:t.target})):a.state.mapHtml.set("contact",""),a.setState({mapHtml:a.state.mapHtml})}},{bln:!1,image:"./images/QRcode.svg",imageclick:"./images/QRcode-click.svg",function:function(t,e){a.state.mapHtml.has("QRcode")||a.state.mapHtml.set("QRcode",""),e.bln?a.state.mapHtml.set("QRcode",Object(n.jsx)(w,{target:t.target})):a.state.mapHtml.set("QRcode",""),a.setState({mapHtml:a.state.mapHtml})}},{bln:!1,image:"./images/gift.svg",imageclick:"./images/gift-click.svg",function:function(){console.log(123)}}],images3:[{bln:!1,image:"./images/color.svg",imageclick:"./images/color-click.svg",function:function(t,e){if(a.state.mapHtml.has("color")||a.state.mapHtml.set("color",""),e.bln){if(window.document.body.getBoundingClientRect().width<425)var i={top:"-1.6rem"};else i={top:"-1.2rem"};a.state.mapHtml.set("color",Object(n.jsx)(E,{stylePosition:i,styles:a.state.colorsImage2}))}else a.state.mapHtml.set("color","");a.setState({mapHtml:a.state.mapHtml})}},{bln:!1,image:"./images/tagshow.svg",imageclick:"./images/tagshow-click.svg"},{bln:!1,image:"./images/contact.svg",imageclick:"./images/contact-click.svg",function:function(t,e){a.state.mapHtml.has("contact")||a.state.mapHtml.set("contact",""),e.bln?a.state.mapHtml.set("contact",Object(n.jsx)(L,{target:t.target})):a.state.mapHtml.set("contact",""),a.setState({mapHtml:a.state.mapHtml})}},{bln:!1,image:"./images/QRcode.svg",imageclick:"./images/QRcode-click.svg",function:function(t,e){a.state.mapHtml.has("QRcode")||a.state.mapHtml.set("QRcode",""),e.bln?a.state.mapHtml.set("QRcode",Object(n.jsx)(w,{target:t.target})):a.state.mapHtml.set("QRcode",""),console.log(a.state.mapHtml.QRcode),a.setState({mapHtml:a.state.mapHtml})}},{bln:!1,image:"./images/gift.svg",imageclick:"./images/gift-click.svg",function:function(){console.log(123)}}],images2:[{bln:!1,image:"./images/goin.svg",imageclick:"./images/car.svg",function:function(t,e){var i="";console.log(e.bln),i=!1===e.bln?Object(n.jsx)(C,{imageFunctions:a.state.images1}):Object(n.jsx)(C,{imageFunctions:a.state.images3}),setTimeout((function(){a.setState({strChoose:""}),a.setState({strChoose:i})}),0)}}],colorsImage:[{bln:!1,style:{background:"#A1152A"}},{bln:!1,style:{background:"#000000"}},{bln:!1,style:{background:"#5398DC"}},{bln:!1,style:{background:"#FFCC02"}},{bln:!1,style:{background:"#990033"}},{bln:!1,style:{background:"#D7361D"}},{bln:!1,style:{background:"#3C9243"}}],colorsImage2:[{bln:!1,style:{background:"#000000"}},{bln:!1,style:{background:"#782E2F"}},{bln:!1,style:{background:"linear-gradient(to right, #000000 0%,#000000 50%,#C7C7BF 51%,#C7C7BF 100%)"}},{bln:!1,style:{background:"linear-gradient(to right, #3A4047 0%,#3A4047 50%,#C7C7BF 51%,#C7C7BF 100%)"}},{bln:!1,style:{background:"linear-gradient(to right, #782E2F 0%,#782E2F 50%,#C7C7BF 51%,#C7C7BF 100%)"}},{bln:!1,style:{background:"linear-gradient(to right, #000000 0%,#000000 50%,#A09B82 51%,#A09B82 100%)"}},{bln:!1,style:{background:"linear-gradient(to right, #000000 0%,#000000 50%,#782E2F 51%,#782E2F 100%)"}}],textureImage:[{bln:!1,style:{backgroundImage:"url(./images/tireTexture1.jpg)"}},{bln:!1,style:{backgroundImage:"url(./images/tireTexture2.jpg)"}},{bln:!1,style:{backgroundImage:"url(./images/tireTexture3.jpg)"}},{bln:!1,style:{backgroundImage:"url(./images/tireTexture4.jpg)"}},{bln:!1,style:{backgroundImage:"url(./images/tireTexture5.jpg)"}},{bln:!1,style:{backgroundImage:"url(./images/tireTexture6.jpg)"}},{bln:!1,style:{backgroundImage:"url(./images/tireTexture7.jpg)"}}]},a}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.state.q.initThree("threejs"),this.setState({strChoose:Object(n.jsx)(C,{imageFunctions:this.state.images1})})}},{key:"render",value:function(){var t=[];return this.state.mapHtml.size>0&&this.state.mapHtml.forEach((function(e){""!==e&&t.push(e)})),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"threejs",className:"threejs-container"}),Object(n.jsx)("div",{children:Object(n.jsx)(O,{imageFunctions:this.state.images2,stylePosition:this.state.style2})}),Object(n.jsxs)("div",{className:"app-container",children:[t,this.state.strChoose]})]})}}]),i}(s.a.Component),R=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,117)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;i(t),n(t),a(t),s(t),c(t)}))};!function(t,e){new VConsole;var i,n=t.document,a=n.documentElement,s=n.querySelector('meta[name="viewport"]'),c=n.querySelector('meta[name="flexible"]'),o=0,l=0,r=e.flexible||(e.flexible={});if(s){var m=s.getAttribute("content").match(/initial\-scale=([\d\.]+)/);m&&(l=parseFloat(m[1]),o=parseInt(1/l))}else if(c){var u=c.getAttribute("content");if(u){var d=u.match(/initial\-dpr=([\d\.]+)/),h=u.match(/maximum\-dpr=([\d\.]+)/);d&&(o=parseFloat(d[1]),l=parseFloat((1/o).toFixed(2))),h&&(o=parseFloat(h[1]),l=parseFloat((1/o).toFixed(2)))}}if(!o&&!l){t.navigator.appVersion.match(/android/gi);var g=t.navigator.appVersion.match(/iphone/gi),p=t.devicePixelRatio;l=1/(o=g?p>=3&&(!o||o>=3)?3:p>=2&&(!o||o>=2)?2:1:v?2:1)}if(a.setAttribute("data-dpr",o),!s)if((s=n.createElement("meta")).setAttribute("name","viewport"),s.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(s);else{var b=n.createElement("div");b.appendChild(s),n.write(b.innerHTML)}var v=-1!=t.navigator.userAgent.toLowerCase().indexOf("micromessenger");function f(){var e=a.getBoundingClientRect().width;console.log(e),e/o>750&&(e=750*o);var i=e/750*100;if(a.style.fontSize=i+"px",r.rem=t.rem=i,v)for(var n,s=document.getElementsByTagName("html")[0],c=n=parseFloat(s.style.fontSize).toFixed(4),l=0;;){var m=parseFloat(window.getComputedStyle(s).fontSize).toFixed(4);console.log("device html fontSize "+c+" actual rem unit "+m);var u=m-c;if(!(Math.abs(u)>=1))break;var d=n*n/m;if(console.log("calc html fontsize "+d),s.setAttribute("style","font-size:"+d.toFixed(4)+"px!important"),l++>10)break}}console.log(v),t.addEventListener("resize",(function(){clearTimeout(i),i=setTimeout(f,300)}),!1),t.addEventListener("pageshow",(function(t){t.persisted&&(clearTimeout(i),i=setTimeout(f,300))}),!1),"complete"===n.readyState?n.body.style.fontSize=12*o+"px":n.addEventListener("DOMContentLoaded",(function(t){n.body.style.fontSize=12*o+"px"}),!1),f(),r.dpr=t.dpr=o,r.refreshRem=f,r.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"===typeof t&&t.match(/rem$/)&&(e+="px"),e},r.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"===typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={})),o.a.render(Object(n.jsx)(N,{}),document.getElementById("root")),R()},35:function(t,e,i){},74:function(t,e,i){},75:function(t,e,i){},76:function(t,e,i){},77:function(t,e,i){},78:function(t,e,i){},79:function(t,e,i){},80:function(t,e,i){},81:function(t,e,i){},82:function(t,e,i){},83:function(t,e,i){}},[[116,1,2]]]);
//# sourceMappingURL=main.c40a3bcb.chunk.js.map