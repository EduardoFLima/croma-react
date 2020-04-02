(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n(14),r=n.n(a),o=n(5),c=n.n(o),l=n(6),i=n.n(l),s=n(9),u=n.n(s),f=n(2),p=n.n(f),m=n(7),d=n.n(m),h=n(0),g=n(4),v=n(8),y=n(10),b=n(41),E=n(49);function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var w=function(e){d()(a,e);var t,n=(t=a,function(){var e,n=p()(t);if(P()){var a=p()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return u()(this,e)});function a(){return c()(this,a),n.apply(this,arguments)}return i()(a,[{key:"render",value:function(){return h.createElement(E.a,r()({},"web"===y.a.OS?{onClick:this.props.onPress}:{onPress:this.props.onPress},{style:[x.inner]}),h.createElement(v.a.View,this.props,this.props.children))}}]),a}(h.Component),x=g.a.create({inner:{backgroundColor:b.a.white,marginVertical:8,elevation:1}})},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(4),o=n(3);function c(e){var t=r.a.create({palette:{alignItems:"stretch",flexDirection:"row",height:112},color:{flex:1}});return a.createElement(o.a,{style:t.palette},e.colors&&e.colors.map((function(e){return a.createElement(o.a,{style:[t.color,{backgroundColor:e.color}],key:e.color})})))}},187:function(e,t,n){"use strict";var a=n(0),r=n(3);t.a=function(){return a.createElement(r.a,{style:{height:100}})}},290:function(e,t,n){"use strict";(function(e){var a=n(11),r=n.n(a),o=n(32),c=n.n(o),l=n(0),i=n.n(l),s=n(27),u=n(4),f=n(103),p=n(3),m=n(28),d=n(10),h=n(88),g=n(63),v=n(291),y=n(82),b=n(61),E=n(41),P=n(299),w=n(74),x=n(154),C=n(94),k=n(292),S=n(128),O=n.n(S),D=n(69),A=n(187),I=n(84),T=n(193),R=n(477),B=n(95),j=n.n(B),N=function(t){var n=m.a.get("window"),a=n.height,o=(n.width,i.a.useContext(b.a)),u=o.isLoading,S=o.allPalettes,B=o.deletedPalettes,N=o.undoDeletionByName,_=o.isPro,F=o.setPurchase,H=Object(l.useState)(!1),V=c()(H,2),G=V[0],z=V[1];return Object(l.useEffect)((function(){!function(){var e;r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!x.a.platform.ios){t.next=6;break}return t.next=3,r.a.awrap(C.c(C.b));case 3:e=t.sent,"granted"!==e.status&&alert("Sorry, we need camera roll permissions to make this work!");case 6:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]),u?i.a.createElement(f.a,null):i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{style:[L.container,{minHeight:a-D.Header.HEIGHT-16}]},G?i.a.createElement(f.a,null):i.a.createElement(p.a,null),i.a.createElement(s.a,{showsVerticalScrollIndicator:!1},Object.keys(S).map((function(e){return i.a.createElement(v.a,{key:e,colors:S[e].colors.slice(0,_?S[e].colors.length:4),name:e,navigation:t.navigation})})),i.a.createElement(A.a,null))),i.a.createElement(y.a,null,Object.keys(B).map((function(e){return i.a.createElement(y.c,{key:e,name:e,undoDeletionByName:N})}))),i.a.createElement(I.a,{bgColor:"rgba(68, 68, 68, 0.6)",hideShadow:"web"===d.a.OS,buttonColor:E.a.accent,offsetY:60,key:"action-button-home"},i.a.createElement(I.a.Item,{buttonColor:"#9b59b6",title:"Get palette from image",onPress:function(){z(!0),function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(P.a({mediaTypes:w.a.All,quality:1,base64:!0}));case 2:if(void 0===(t=n.sent).base64){n.next=9;break}return n.next=6,r.a.awrap(O.a.read(new e(t.base64,"base64")));case 6:return n.abrupt("return",n.sent);case 9:return n.next=11,r.a.awrap(O.a.read(t.uri));case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}),null,null,null,Promise)}().then((function(e,n){z(!1),t.navigation.navigate("ColorList",{colors:k.a.getProminentColors(e)})})).catch((function(e){"android"==d.a.OS&&g.a.show("Error while processing image: "+e,g.a.LONG),z(!1)}))}},i.a.createElement(T.a,{name:"md-camera",style:L.actionButtonIcon})),i.a.createElement(I.a.Item,{buttonColor:"#3498db",title:"Get palette from color",onPress:function(){t.navigation.navigate("ColorPicker",{onDone:function(e){t.navigation.navigate("Palettes",{color:e.color})}})}},i.a.createElement(T.a,{name:"md-color-palette",style:L.actionButtonIcon})),i.a.createElement(I.a.Item,{buttonColor:"#1abc9c",title:"Add colors manually",onPress:function(){return t.navigation.navigate("AddPaletteManually")}},i.a.createElement(T.a,{name:"md-color-filter",style:L.actionButtonIcon})),"web"===d.a.OS&&i.a.createElement(I.a.Item,{buttonColor:E.a.primary,title:"Get croma on playstore",onPress:function(){return h.a.openURL("https://play.google.com/store/apps/details?id=app.croma")}},i.a.createElement(R.a,{name:"google-play",style:L.actionButtonIcon})),"android"===d.a.OS&&!_&&i.a.createElement(I.a.Item,{buttonColor:E.a.primary,title:"Unlock pro",onPress:function(){console.log("Unlock pro"),function(){var e;r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("starting purchase"),t.next=4,r.a.awrap(j.a.open());case 4:return t.next=6,r.a.awrap(j.a.purchase("croma_pro"));case 6:e=t.sent,console.log("You purchased: ",e),g.a.show("Congrats, You are now a pro user!",g.a.LONG),F(e),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),g.a.show("Purchas unsucceessful "+t.t0,g.a.LONG);case 16:return t.prev=16,t.next=19,r.a.awrap(j.a.close());case 19:return t.finish(16);case 20:case"end":return t.stop()}}),null,null,[[0,12,16,20]],Promise)}()}},i.a.createElement(T.a,{name:"md-unlock",style:L.actionButtonIcon}))))};t.a=N,N.navigationOptions={title:"Croma"};var L=u.a.create({container:{margin:8,justifyContent:"center"},actionButtonIcon:{fontSize:20,height:22,color:"white"}})}).call(this,n(466).Buffer)},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n(14),r=n.n(a),o=n(11),c=n.n(o),l=n(32),i=n.n(l),s=n(0),u=n(4),f=n(3),p=n(18),m=n(10),d=n(115),h=n(122),g=n(41),v=n(123),y=n(186),b=n(237),E=n(49),P=n(61),w=function(e){var t=s.useState(!1),n=i()(t,2),a=n[0],o=n[1],l=s.useContext(P.a).deletePaletteByName;return s.createElement(h.a,r()({},e,{onPress:function(){e.navigation.navigate("Palette",e)}}),s.createElement(y.a,e),s.createElement(f.a,{style:x.bottom},s.createElement(p.a,{style:x.label},e.name),s.createElement(f.a,{style:x.actionButtonsView},a&&s.createElement(p.a,{style:{position:"absolute",backgroundColor:"rgb(64, 64, 58)",top:"-35px",right:"-10px",width:"148px",color:"#fff",padding:"5px ",textAlign:"center",borderRadius:"6px"}},"Copied to Clipboard!"),"web"===m.a.OS?s.createElement(E.a,{onClick:function(t){t.preventDefault(),t.stopPropagation(),d.a.setString("https://croma.app/#/Main/SavePalette?name="+e.name+"&colors="+encodeURIComponent(JSON.stringify(e.colors))),o(!0),setTimeout((function(){o(!1)}),3e3)},style:x.actionButton},s.createElement(b.a,{size:20,name:"share"})):s.createElement(E.a,{onPress:function(t){var n;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.awrap(v.a.share({title:"croma app",message:"https://croma.app/#/Main/SavePalette?name="+e.name+"&colors="+encodeURIComponent(JSON.stringify(e.colors))},{dialogTitle:"croma app "}));case 3:(n=t.sent).action===v.a.sharedAction?n.activityType:(n.action,v.a.dismissedAction),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),null,null,[[0,7]],Promise)},style:x.actionButton},s.createElement(b.a,{size:20,name:"share"})),s.createElement(E.a,{onPress:function(t){t.preventDefault(),t.stopPropagation(),l(e.name)},style:x.actionButton},s.createElement(b.a,{size:20,name:"trash"})))))},x=u.a.create({bottom:{flexDirection:"row",alignItems:"center",padding:16,height:54},actionButtonsView:{flexDirection:"row",alignItems:"flex-end"},actionButton:{paddingRight:16},label:{flex:1,marginHorizontal:16,color:g.a.darkGrey}})},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(5),r=n.n(a),o=n(6),c=n.n(o),l=n(297),i=n(128),s=n.n(i),u=n(62),f=n.n(u),p=function(){function e(){r()(this,e)}return c()(e,null,[{key:"getProminentColors",value:function(t){var n=this;t.resize(s.a.AUTO,100);var a=e._prepareDataForKmeans(t),r=(Date.now(),Object(l.a)(a,24,{initialization:"random",maxIterations:20}));r.centroids=r.centroids.sort((function(e,t){return t.size-e.size}));var o=r.centroids.map((function(e){return new f.a(n._labToHex(e.centroid))}));return this._getFinalColors(o).map((function(e){return{color:e.tohex()}}))}},{key:"_getFinalColors",value:function(e){var t=this;e.sort((function(e,n){return t._toArray(e.tohsv())[0]<t._toArray(n.tohsv())[0]}));for(var n=[],a=0;a<e.length;a+=4){for(var r=[],o=0;o<4;o++)r.push(e[a+o]);r.sort((function(e,n){return t._toArray(e.tohsv())[1]<t._toArray(n.tohsv())[1]})),n.push(r[r.length-1]),n.push(r[r.length-2])}for(var c=[],l=0;l<n.length;l+=2)this._toArray(n[l].tohsv())[2]>this._toArray(n[l+1].tohsv())[2]?c.push(n[l]):c.push(n[l+1]);return c}},{key:"_labToHex",value:function(e){return new f.a("lab("+e[0]+", "+e[1]+", "+e[2]+")").tohex()}},{key:"_prepareDataForKmeans",value:function(e){for(var t=[],n=0;n<e.bitmap.width;n++)for(var a=0;a<e.bitmap.height;a++){var r=e.getPixelColor(n,a),o=this._toHexColor(r),c=new f.a(o).tolab();c=c.substr(4,c.length-5).split(", ").map((function(e){return parseFloat(e)})),t.push(c)}return t}},{key:"_toHexColor",value:function(e){var t=s.a.intToRGBA(e);return new f.a("rgb("+t.r+", "+t.g+", "+t.b+")").tohex()}},{key:"_toArray",value:function(e){var t=e.indexOf("(");return(e=e.substr(t+1,e.length-t)).split(", ").map((function(e){return parseFloat(e)}))}}]),e}()},298:function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=n(32),c=n.n(o),l=n(0),i=n.n(l),s=n(10),u=n(70),f=n(4),p=n(3),m=n(41),d=n(279),h=n(69),g=n(27),v=n(18),y=n(115),b=n(63),E=n(237),P=n(49),w=n(62),x=n.n(w);function C(e){var t=Object(l.useState)(-1),n=c()(t,2),a=n[0],r=n[1],o=f.a.create({backgroundColor:{backgroundColor:e.color,height:112,alignSelf:"stretch"},info:{flexDirection:"row",justifyContent:"space-between",padding:10},colorNameText:{fontSize:16,fontWeight:"500"}}),u=new x.a(e.color),m=[{key:"HEX",value:u.tohex()},{key:"RGB",value:u.torgb()},{key:"HSL",value:u.tohsl()},{key:"HSV",value:u.tohsv()},{key:"HWB",value:u.tohwb()},{key:"CMYK",value:u.tocmyk()},{key:"CIELAB",value:u.tolab()},{key:"Luminance",value:(100*u.luminance()).toFixed(2)+"%"},{key:"Darkness",value:(100*u.darkness()).toFixed(2)+"%"}],d=function(e,t){var n;return function(){var a=this,r=arguments;clearTimeout(n),n=setTimeout((function(){return e.apply(a,r)}),t)}}((function(){return r(-1)}),2e3);return i.a.createElement(p.a,{style:{flex:1,flexDirection:"column",padding:8,backgroundColor:"#fff"}},i.a.createElement(p.a,{style:[o.backgroundColor]}),i.a.createElement(p.a,{style:{marginTop:20}},m.map((function(e,t){return i.a.createElement(P.a,{key:e.key,onPress:function(){return function(e,t){"android"===s.a.OS&&b.a.show("Text copied to clipboard!",b.a.LONG),y.a.setString(e),r(t),d()}(e.value,t)}},i.a.createElement(p.a,{style:o.info},i.a.createElement(v.a,{style:o.colorNameText},e.key," : "),i.a.createElement(v.a,null,e.value),t===a&&"web"===s.a.OS&&i.a.createElement(v.a,{style:{position:"absolute",backgroundColor:"rgb(64, 64, 58)",top:"-25px",right:"-10px",color:"#fff",padding:"5px",textAlign:"center",borderRadius:"6px"}},"Copied!"),i.a.createElement(E.a,{name:"copy"})))}))))}var k=n(5),S=n.n(k),O=n(6),D=n.n(O),A=n(9),I=n.n(A),T=n(2),R=n.n(T),B=n(7),j=n.n(B);function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var L=function(e){j()(a,e);var t,n=(t=a,function(){var e,n=R()(t);if(N()){var a=R()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return I()(this,e)});function a(){return S()(this,a),n.apply(this,arguments)}return D()(a,[{key:"render",value:function(){var e=this.props,t=e.style,n=e.onPress,a=e.children;return l.createElement(P.a,{style:[_.button,t],onPress:n},l.createElement(v.a,{style:{textTransform:"uppercase"}}," ",a," "))}}]),a}(l.Component),_=f.a.create({button:{shadowColor:"rgba(0,0,0, .4)",shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1,backgroundColor:"#fff",elevation:2,height:50,marginTop:10,marginBottom:10,justifyContent:"center",alignItems:"center"}});function F(e){var t=e.navigation.getParam("color");return i.a.createElement(g.a,{style:H.container,showsVerticalScrollIndicator:!1},i.a.createElement(C,{navigation:e.navigation,color:t},t),i.a.createElement(L,{onPress:function(){return e.navigation.navigate("Palettes",{color:t})}},"See color palettes"))}F.navigationOptions=function(e){return{title:e.navigation.getParam("color")}};var H=f.a.create({container:{flex:1,paddingLeft:12,paddingRight:12}}),V=n(288);var G=f.a.create({container:{flexDirection:"column",margin:8}}),z=n(122),U=n(186);function W(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var M=function(e){j()(a,e);var t,n=(t=a,function(){var e,n=R()(t);if(W()){var a=R()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return I()(this,e)});function a(){return S()(this,a),n.apply(this,arguments)}return D()(a,[{key:"render",value:function(){return l.createElement(z.a,this.props,l.createElement(p.a,null,l.createElement(U.a,this.props),l.createElement(p.a,{style:J.bottom},l.createElement(v.a,{style:J.label},this.props.name))))}}]),a}(l.Component),J=f.a.create({bottom:{flexDirection:"row",alignItems:"center",height:48},label:{flex:1,fontWeight:"500",marginHorizontal:16,color:m.a.darkGrey}});function Y(e){var t=new x.a(e.navigation.getParam("color")),n=[];for(var a in t)/.*scheme$/i.test(a)&&"function"===typeof t[a]&&function(){var r,o=[];t[a]().forEach((function(e){return o.push({color:e.tohex()})})),n.push(i.a.createElement(M,{onPress:function(){return e.navigation.navigate("ColorList",{colors:o})},key:a.toString(),colors:o,name:(r=a.toString(),"string"!==typeof r?"":r.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/,"$1 $2$3").replace(/^./,(function(e){return e.toUpperCase()})))}))}();return i.a.createElement(g.a,{style:$.container,showsVerticalScrollIndicator:!1},n)}Y.navigationOptions=function(e){return{title:e.navigation.getParam("color")}};var $=f.a.create({container:{paddingLeft:12,paddingRight:12}}),K=n(24),X=n.n(K),Z=n(51),q=n(75),Q=n(61),ee=n(82),te=function(e){var t=Object(l.useState)(e.navigation.getParam("name")?e.navigation.getParam("name"):""),n=c()(t,2),a=n[0],o=n[1],s=Object(l.useState)([]),u=c()(s,2),f=u[0],m=u[1],d=Object(l.useState)(!1),h=c()(d,2),g=h[0],y=h[1],b=i.a.useState(!1),E=c()(b,2),P=E[0],w=E[1],x=i.a.useContext(Q.a),C=x.addPalette,k=x.allPalettes,S=x.isPro;Object(l.useEffect)((function(){var t=e.navigation.getParam("colors");"string"===typeof t&&(t=JSON.parse(t));var n=X()(new Set(t||[]));y(!S&&n.length>4),m(n),setTimeout((function(){y(!1)}),5e3)}),[]);var O=e.title,D=e.navigationPath;return i.a.createElement(q.c,{showsVerticalScrollIndicator:!1},i.a.createElement(p.a,{style:ne.card},i.a.createElement(v.a,{style:ne.label},O),i.a.createElement(Z.a,{style:ne.input,value:a,placeholder:"Enter a name for the palette",onChangeText:function(e){return o(e)}})),i.a.createElement(L,{onPress:function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!k[a]){n.next=4;break}return w(!0),setTimeout((function(){w(!1)}),3e3),n.abrupt("return",null);case 4:C(t={name:a,colors:f}),"Palette"===D?e.navigation.navigate(D,t):e.navigation.navigate(D);case 7:case"end":return n.stop()}}),null,null,null,Promise)}},"Save palette"),P&&i.a.createElement(ee.b,{text:"A palette with same name already exists."}),g&&i.a.createElement(ee.b,{text:"Unlock pro to save more than 4 colors!"}))},ne=f.a.create({card:{flex:1,flexDirection:"column",justifyContent:"center",shadowColor:"rgba(0,0,0, .4)",shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1,backgroundColor:"#fff",elevation:2,height:92,marginVertical:10,padding:10},label:{flex:1,color:m.a.darkGrey,fontWeight:"700"},input:{flex:1,borderBottomColor:"black",borderBottomWidth:1}});function ae(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var re=function(e){j()(a,e);var t,n=(t=a,function(){var e,n=R()(t);if(ae()){var a=R()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return I()(this,e)});function a(){return S()(this,a),n.apply(this,arguments)}return D()(a,[{key:"render",value:function(){return l.createElement(p.a,{style:[oe.container,{backgroundColor:this.props.color}]},l.createElement(v.a,{style:oe.colorText},this.props.color))}}]),a}(l.Component),oe=f.a.create({container:{height:56,justifyContent:"center",alignItems:"center"},colorText:{fontWeight:"700",backgroundColor:"rgba(255, 255, 255, .3)",paddingLeft:8,paddingRight:8}});function ce(e){var t=function(e){var t=new Set,n=[];return e.forEach((function(e){t.has(e.color)||n.push(e),t.add(e.color)})),n}(e.navigation.getParam("colors"));return i.a.createElement(g.a,{style:le.listview,showsVerticalScrollIndicator:!1},t.map((function(e){return i.a.createElement(re,{key:e.color,color:e.color})})),i.a.createElement(L,{onPress:function(){return e.navigation.navigate("SavePalette",{colors:t})}},"SAVE AS NEW PALETTE"))}ce.navigationOptions={title:"Colors"};var le=f.a.create({listview:{margin:8}});function ie(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var se=function(e){j()(a,e);var t,n=(t=a,function(){var e,n=R()(t);if(ie()){var a=R()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return I()(this,e)});function a(){return S()(this,a),n.apply(this,arguments)}return D()(a,[{key:"render",value:function(){var e=this;return l.createElement(z.a,this.props,l.createElement(p.a,null,l.createElement(p.a,{style:{backgroundColor:this.props.color,height:100}}),l.createElement(p.a,{style:ue.bottom},l.createElement(v.a,{style:ue.label},this.props.color),l.createElement(p.a,{style:ue.actionButtonsView},l.createElement(P.a,{onPress:function(t){t.preventDefault(),t.stopPropagation(),e.props.colorDeleteFromPalette()},style:ue.actionButton},l.createElement(E.a,{size:20,name:"trash"}))))))}}]),a}(l.Component),ue=f.a.create({bottom:{flexDirection:"row",alignItems:"center",padding:16,height:54},actionButtonsView:{flexDirection:"row",alignItems:"flex-end"},actionButton:{paddingRight:16},label:{flex:1,marginHorizontal:16,fontWeight:"500",color:m.a.darkGrey}}),fe=n(28),pe=n(84),me=n(187);function de(e){var t=fe.a.get("window"),n=t.height,a=(t.width,e.navigation.getParam("name")),r=i.a.useContext(Q.a),o=r.isPro,c=r.allPalettes,l=r.colorDeleteFromPalette,u=r.undoColorDeletion,f=r.addColorToPalette,d=c[a].colors,v=c[a].deletedColors?c[a].deletedColors:[],y=function(t){l(e.navigation.getParam("name"),t)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{style:(he.container,{minHeight:n-h.Header.HEIGHT-16})},i.a.createElement(g.a,{style:he.listview,showsVerticalScrollIndicator:!1},d.slice(0,o?d.length:4).map((function(t,n){return i.a.createElement(se,{key:t.color,onPress:function(){return e.navigation.navigate("ColorDetails",{color:t.color})},color:t.color,colorDeleteFromPalette:function(){y(n)}})})),i.a.createElement(me.a,null)),i.a.createElement(pe.a,{offsetY:60,bgColor:"rgba(68, 68, 68, 0.6)",hideShadow:"web"===s.a.OS,buttonColor:m.a.accent,onPress:function(){e.navigation.navigate("ColorPicker",{onDone:function(e){f(a,e)}})}})),i.a.createElement(ee.a,null,v.map((function(e){return i.a.createElement(ee.c,{name:e.color,undoDeletionByName:function(e){u(a,e)}})}))))}de.navigationOptions=function(e){return{title:e.navigation.getParam("name")}};var he=f.a.create({container:{flex:1},listview:{margin:8}}),ge=n(290),ve=(s.a.select({web:{headerMode:"screen"},default:{}}),Object(h.createStackNavigator)({ColorDetails:F,ColorPicker:function(e){var t=Object(l.useState)("#db0a5b"),n=c()(t,2),a=n[0],r=n[1];return i.a.createElement(g.a,{showsVerticalScrollIndicator:!1},i.a.createElement(p.a,{style:G.container},i.a.createElement(V.a,{onChangeColor:function(e){r(e)},style:[{height:350,flex:1}]}),i.a.createElement(L,{onPress:function(){e.navigation.goBack(),e.navigation.getParam("onDone")({color:a})}},"Done")))},Palettes:Y,SavePalette:function(e){return i.a.createElement(g.a,{showsVerticalScrollIndicator:!1},i.a.createElement(te,{title:"ADD NEW PALETTE",navigationPath:"Home",navigation:e.navigation}))},ColorList:ce,Palette:de,Home:ge.a,AddPaletteManually:function(e){return i.a.createElement(g.a,{showsVerticalScrollIndicator:!1},i.a.createElement(te,{title:"ADD PALETTE NAME",navigationPath:"Palette",navigation:e.navigation}))}},{initialRouteName:"Home",transparentCard:!0,defaultNavigationOptions:{headerStyle:{backgroundColor:m.a.primary},headerTintColor:"#fff"}})),ye=(Object(h.createAppContainer)(ve),ve),be=Object(h.createSwitchNavigator)({Main:ye});be.path="";var Ee=Object(d.createBrowserApp)(be,{history:"hash"}),Pe=n(103);function we(e){var t=Object(l.useState)(!1),n=c()(t,2),a=n[0],o=n[1],f=Object(Q.b)(Q.c);return Object(l.useEffect)((function(){r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(f.loadInitPaletteFromStore());case 2:o(!0);case 3:case"end":return e.stop()}}),null,null,null,Promise),"web"===s.a.OS&&f.setPurchase({platfrom:"web"})}),[]),a?i.a.createElement(Q.a.Provider,{value:f},i.a.createElement(p.a,{style:[xe.container]},i.a.createElement(u.a,{barStyle:"light-content",hidden:!1,backgroundColor:m.a.primaryDark,translucent:!1,networkActivityIndicatorVisible:!0}),i.a.createElement(p.a,{style:[{flex:1,backgroundColor:"transparent",maxWidth:600}]},"ios"===s.a.OS&&i.a.createElement(u.a,{barStyle:"default"}),i.a.createElement(Ee,null)))):i.a.createElement(p.a,{style:{flex:1,marginTop:"20%"}},i.a.createElement(Pe.a,{size:"large",color:"#ef635f",animating:!0}))}n.d(t,"a",(function(){return we}));var xe=f.a.create({container:{flex:1,justifyContent:"center",backgroundColor:m.a.backgroundColor,flexDirection:"row"}})},300:function(e,t,n){n(301),e.exports=n(471)},301:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},41:function(e,t,n){"use strict";t.a={tintColor:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc",tabBar:"#fefefe",errorBackground:"red",errorText:"#fff",warningBackground:"#EAEB5E",warningText:"#666804",noticeBackground:"#2f95dc",noticeText:"#fff",primary:"#f1544d",primaryDark:"#c94740",text:"#fff",accent:"#f0d04c",grey:"#888",darkGrey:"#333",lightGrey:"#eee",white:"#fff",black:"#000",fadedBlack:"rgba(0, 0, 0, .5)",backgroundColor:"#f2f2f2"}},61:function(e,t,n){"use strict";var a=n(32),r=n.n(a),o=n(24),c=n.n(o),l=n(11),i=n.n(l),s=n(12),u=n.n(s),f=n(0),p=n.n(f),m=n(5),d=n.n(m),h=n(105),g=function e(){d()(this,e)};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}g.getApplicationState=function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(h.a.getItem("APLICATION_STATE"));case 2:if(!(e=t.sent)){t.next=7;break}return t.abrupt("return",JSON.parse(e));case 7:return t.abrupt("return",{});case 8:case"end":return t.stop()}}),null,null,null,Promise)},g.setApplicationState=function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(h.a.setItem("APLICATION_STATE",JSON.stringify(e)));case 2:case"end":return t.stop()}}),null,null,null,Promise)},g.setUserAlreadyExists=function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(h.a.setItem("IS_USER_ALREADY_EXIST","true"));case 2:case"end":return e.stop()}}),null,null,null,Promise)},g.checkUserAlreadyExists=function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(h.a.getItem("IS_USER_ALREADY_EXIST"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,null,null,Promise)},n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return P})),n.d(t,"a",(function(){return w}));var b={allPalettes:{},deletedPalettes:{},isLoading:!1,isPro:!1},E=function(e){return e.colors.sort((function(e,t){return e.color>t.color?1:-1}))};function P(e){var t=function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:u((function(t){var n=t.allPalettes;return E(e),n[e.name]=e,y({},t,{allPalettes:n})}));case 1:case"end":return t.stop()}}),null,null,null,Promise)},n=function(e){u((function(t){var n=t.deletedPalettes;return delete n[e],y({},t,{deletedPalettes:n})}))},a=function(e,t){u((function(n){var a=n.allPalettes;return a[e].deletedColors.forEach((function(n,r){n.color===t&&a[e].deletedColors.splice(r,1)})),y({},n,{allPalettes:a})}))},o=Object(f.useState)(y({},e,{loadInitPaletteFromStore:function(){var e;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(g.getApplicationState());case 2:return e=n.sent,u((function(t){return y({},t,{},e)})),{},n.next=7,i.a.awrap(g.checkUserAlreadyExists());case 7:"true"!=n.sent&&(g.setUserAlreadyExists(),t({name:"Croma example palette",colors:[{color:"#F0675F"},{color:"#F3D163"},{color:"#EBEF5C"},{color:"#C9EF5B"}]}));case 9:case"end":return n.stop()}}),null,null,null,Promise)},undoDeletionByName:function(e){u((function(a){var r=a.deletedPalettes;return r[e]&&(t(y({},r[e])),n(e)),y({},a)}))},deletePaletteByName:function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:u((function(t){var a=t.allPalettes,r=t.deletedPalettes;return a[e]?(r[e]=y({},a[e]),delete a[e],setTimeout((function(){n(e)}),3e3),y({},t,{allPalettes:a,deletedPalettes:r})):y({},t)}));case 1:case"end":return t.stop()}}),null,null,null,Promise)},addPalette:t,colorDeleteFromPalette:function(e,t){u((function(n){var r=n.allPalettes,o=r[e].colors.splice(t,1);return r[e].deletedColors?r[e].deletedColors.push(y({},o[0])):r[e].deletedColors=c()(o),setTimeout((function(){a(e,o[0].color)}),3e3),y({},n,{allPalettes:r})}))},undoColorDeletion:function(e,t){u((function(n){var a=n.allPalettes;return a[e].colors.push({color:t}),a[e].deletedColors.forEach((function(n,r){n.color===t&&a[e].deletedColors.splice(r,1)})),E(a[e]),y({},n,{allPalettes:a})}))},addColorToPalette:function(e,t){u((function(n){var a=n.allPalettes;return a[e].colors=a[e].colors.concat(t),E(a[e]),y({},n,{allPalettes:a})}))},setPurchase:function(e){u((function(t){return y({},t,{isPro:!0,purchaseDetails:e})}))}})),l=r()(o,2),s=l[0],u=l[1];return 0===Object.keys(s.allPalettes).length&&0===Object.keys(s.deletedPalettes).length&&s.isPro===e.isPro||function(e){g.setApplicationState(e)}(s),s}var w=p.a.createContext()},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a),o=n(3),c=n(18),l=n(4),i=n(49),s=function(e){return r.a.createElement(o.a,{style:{position:"absolute",bottom:0,width:"100%"}},e.children)},u=function(e){var t=e.name,n=e.undoDeletionByName;return r.a.createElement(o.a,{style:p.undoCard},r.a.createElement(o.a,{style:{width:"80%"}},r.a.createElement(c.a,{style:p.undoText},"Deleted ",t,". tab to dismiss.")),r.a.createElement(i.a,{onPress:function(e){e.stopPropagation(),e.preventDefault(),n(t)}},r.a.createElement(c.a,{style:p.undoButton}," UNDO ")))},f=function(e){return r.a.createElement(o.a,{style:p.undoCard},r.a.createElement(o.a,{style:{width:"80%"}},r.a.createElement(c.a,{style:p.undoText},e.text)))},p=l.a.create({undoCard:{backgroundColor:"#303036",flexDirection:"row",padding:15,marginTop:1},undoText:{color:"#fff"},undoButton:{fontWeight:"bold",color:"#e6be0b"}})}},[[300,1,2]]]);
//# sourceMappingURL=../../f533b9096ad263d8f4db.map