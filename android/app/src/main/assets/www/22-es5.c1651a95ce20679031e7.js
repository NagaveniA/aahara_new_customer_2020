(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{J6EC:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("mrSG"),o=u("r28Q"),r=u("gTw3"),i=u("23JA"),s=u("ZZ/e"),a=function(){function l(l,n,u,t,e){this.toastController=l,this.nav=n,this.server=u,this.geolocation=t,this.nativeGeocoder=e,this.status=0,this.progress=.016}return l.prototype.ngOnInit=function(){var l=this;this.data=JSON.parse(localStorage.getItem("order_data")),this.text=JSON.parse(localStorage.getItem("app_text")),this.currency=this.data.currency,this.data=this.data.data,this.getStatus(),this.intrr=setInterval((function(){l.progress=.016,l.getStatus()}),6e4),this.intr=setInterval((function(){l.progress=1*l.progress+.016}),1e3)},l.prototype.getStatus=function(){var l=this;this.server.getStatus(this.data.id).subscribe((function(n){l.status=n.data.status,4==l.status&&l.loadMap(n.dboy),2==l.status&&(l.presentToast("Sorry! Your order is cancelled."),clearInterval(l.intrr),l.nav.navigateRoot("order")),5==l.status&&(l.presentToast("Order Delivered Successfully"),clearInterval(l.intrr),l.nav.navigateRoot("order"))}))},l.prototype.getColor=function(l){if(1==l){if(this.status<1)return"medium"}else if(3==l){if(this.status<3)return"medium"}else if(4==l&&this.status<4)return"medium";return"primary"},l.prototype.loadMap=function(l){return e.b(this,void 0,void 0,(function(){var n=this;return e.e(this,(function(u){return this.geolocation.getCurrentPosition().then((function(u){var t={center:new google.maps.LatLng(l.lat,l.lng),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP};n.getAddressFromCoords(u.coords.latitude,u.coords.longitude),n.map=new google.maps.Map(n.mapElement.nativeElement,t)})).catch((function(l){console.log("Error getting location",l)})),[2]}))}))},l.prototype.getAddressFromCoords=function(l,n){return e.b(this,void 0,void 0,(function(){var u=this;return e.e(this,(function(t){return console.log("getAddressFromCoords "+l+" "+n),this.nativeGeocoder.reverseGeocode(l,n,{useLocale:!0,maxResults:5}).then((function(l){u.address="";for(var n=[],t=0,e=Object.entries(l[0]);t<e.length;t++)(i=e[t][1]).length>0&&n.push(i);n.reverse();for(var o=0,r=n;o<r.length;o++){var i;u.address+=(i=r[o])+", "}u.address=u.address.slice(0,-2)})).catch((function(l){u.address="Address Not Available!"})),[2]}))}))},l.prototype.presentToast=function(l){return e.b(this,void 0,void 0,(function(){return e.e(this,(function(n){switch(n.label){case 0:return[4,this.toastController.create({message:l,duration:3e3,position:"top",mode:"ios",color:"dark"})];case 1:return n.sent().present(),[2]}}))}))},l}(),b=function(){return function(){}}(),c=u("pMnS"),d=u("oBZk"),p=u("ZYCi"),h=u("Ip0R"),m=t.rb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:12px}ion-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:12px;color:gray;margin-right:10%}ion-content[_ngcontent-%COMP%]{--background:#f9f8f8}.light[_ngcontent-%COMP%]{color:gray}#map_canvas[_ngcontent-%COMP%]{width:90%;height:60%;border:1px solid red}#address[_ngcontent-%COMP%]{padding:10px;font-size:18px;font-weight:700}#map[_ngcontent-%COMP%]{width:100%;height:60vh}.map-wrapper[_ngcontent-%COMP%]{position:relative}.map-wrapper[_ngcontent-%COMP%]   #map_center[_ngcontent-%COMP%]{position:absolute;z-index:99;height:60px;width:60px;top:50%;left:50%}"]],data:{}});function g(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,1,"p",[["style","font-size: 12px"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Order Placed Successfully. Waiting for restaurant confirmation"]))],null,null)}function f(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,1,"p",[["style","font-size: 12px"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Order Confirmed. Your food is being prepared."]))],null,null)}function k(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,1,"p",[["style","font-size: 12px"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["A delivery partner has been assigned to your order."]))],null,null)}function v(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,1,"p",[["style","font-size: 12px"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Your order is one the way"]))],null,null)}function z(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,5,"div",[["class","map-wrapper"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"div",[["id","map_center"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,0,"img",[["src","assets/d.png"]],null,null,null,null,null)),(l()(),t.tb(3,0,[[1,0],["map",1]],null,0,"div",[["id","map"]],null,null,null,null,null)),(l()(),t.tb(4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(5,null,["",""]))],null,(function(l,n){l(n,5,0,n.component.address)}))}function w(l){return t.Lb(0,[t.Ib(671088640,1,{mapElement:0}),t.Ib(671088640,2,{directionsPanel:0}),(l()(),t.tb(2,0,null,null,16,"ion-header",[["no-border",""]],null,null,null,d.mb,d.r)),t.sb(3,49152,null,0,s.D,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,14,"ion-toolbar",[["color","primary"]],null,null,null,d.Pb,d.U)),t.sb(5,49152,null,0,s.Eb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(6,0,null,0,5,"ion-buttons",[["routerDirection","root"],["routerLink","/home"],["slot","start"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,8).onClick()&&e),"click"===n&&(e=!1!==t.Fb(l,9).onClick(u)&&e),e}),d.ab,d.f)),t.sb(7,49152,null,0,s.n,[t.h,t.k,t.z],null,null),t.sb(8,16384,null,0,p.n,[p.m,p.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(9,737280,null,0,s.Pb,[h.g,s.Kb,t.k,p.m,[2,p.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.tb(10,0,null,0,1,"ion-icon",[["name","home"],["style","font-size: 29px"]],null,null,null,d.nb,d.s)),t.sb(11,49152,null,0,s.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(12,0,null,0,6,"ion-buttons",[["slot","end"]],null,null,null,d.ab,d.f)),t.sb(13,49152,null,0,s.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(14,0,null,0,4,"ion-button",[["fill","outline"],["mode","ios"],["routerDirection","forward"],["routerLink","/order"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,16).onClick()&&e),"click"===n&&(e=!1!==t.Fb(l,17).onClick(u)&&e),e}),d.Z,d.e)),t.sb(15,49152,null,0,s.m,[t.h,t.k,t.z],{fill:[0,"fill"],mode:[1,"mode"],routerDirection:[2,"routerDirection"],size:[3,"size"]},null),t.sb(16,16384,null,0,p.n,[p.m,p.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(17,737280,null,0,s.Pb,[h.g,s.Kb,t.k,p.m,[2,p.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.Kb(-1,0,["View Order Detail"])),(l()(),t.tb(19,0,null,null,67,"ion-content",[["mode","ios"]],null,null,null,d.ib,d.n)),t.sb(20,49152,null,0,s.w,[t.h,t.k,t.z],null,null),(l()(),t.tb(21,0,null,0,1,"div",[["style","width:100%;background-color: #f44336;height: 80px;color:white"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["\n\xa0 "])),(l()(),t.tb(23,0,null,0,11,"ion-card",[["class","welcome-card"],["mode","ios"],["style","margin-top: -15%;background-color: white;width: 98%;margin-left: 1%"]],null,null,null,d.fb,d.g)),t.sb(24,49152,null,0,s.o,[t.h,t.k,t.z],{mode:[0,"mode"]},null),(l()(),t.tb(25,0,null,0,9,"ion-card-header",[],null,null,null,d.cb,d.i)),t.sb(26,49152,null,0,s.q,[t.h,t.k,t.z],null,null),(l()(),t.tb(27,0,null,0,2,"ion-card-title",[],null,null,null,d.eb,d.k)),t.sb(28,49152,null,0,s.s,[t.h,t.k,t.z],null,null),(l()(),t.Kb(29,0,["",""])),(l()(),t.tb(30,0,null,0,4,"ion-card-subtitle",[],null,null,null,d.db,d.j)),t.sb(31,49152,null,0,s.r,[t.h,t.k,t.z],null,null),(l()(),t.tb(32,0,null,0,1,"ion-icon",[["name","restaurant"]],null,null,null,d.nb,d.s)),t.sb(33,49152,null,0,s.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.Kb(34,0,[" ",""])),(l()(),t.tb(35,0,null,0,12,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,g)),t.sb(37,16384,null,0,h.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,f)),t.sb(39,16384,null,0,h.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,k)),t.sb(41,16384,null,0,h.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,v)),t.sb(43,16384,null,0,h.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,z)),t.sb(45,16384,null,0,h.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(46,0,null,null,1,"ion-progress-bar",[["buffer","0.5"]],null,null,null,d.wb,d.B)),t.sb(47,49152,null,0,s.bb,[t.h,t.k,t.z],{buffer:[0,"buffer"],value:[1,"value"]},null),(l()(),t.tb(48,0,null,0,38,"ion-card",[["class","welcome-card"],["mode","ios"],["style","width: 98%;margin-left: 1%"]],null,null,null,d.fb,d.g)),t.sb(49,49152,null,0,s.o,[t.h,t.k,t.z],{mode:[0,"mode"]},null),(l()(),t.tb(50,0,null,0,4,"ion-card-header",[],null,null,null,d.cb,d.i)),t.sb(51,49152,null,0,s.q,[t.h,t.k,t.z],null,null),(l()(),t.tb(52,0,null,0,2,"ion-card-title",[],null,null,null,d.eb,d.k)),t.sb(53,49152,null,0,s.s,[t.h,t.k,t.z],null,null),(l()(),t.Kb(-1,0,["Order Status"])),(l()(),t.tb(55,0,null,0,31,"ion-list",[["lines","none"]],null,null,null,d.sb,d.w)),t.sb(56,49152,null,0,s.Q,[t.h,t.k,t.z],{lines:[0,"lines"]},null),(l()(),t.tb(57,0,null,0,8,"ion-item",[["routerDirection","forward"],["routerLink","/order"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,59).onClick()&&e),"click"===n&&(e=!1!==t.Fb(l,60).onClick(u)&&e),e}),d.pb,d.u)),t.sb(58,49152,null,0,s.J,[t.h,t.k,t.z],{routerDirection:[0,"routerDirection"]},null),t.sb(59,16384,null,0,p.n,[p.m,p.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(60,737280,null,0,s.Pb,[h.g,s.Kb,t.k,p.m,[2,p.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.tb(61,0,null,0,1,"ion-icon",[["color","primary"],["name","cart"],["slot","start"]],null,null,null,d.nb,d.s)),t.sb(62,49152,null,0,s.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(63,0,null,0,2,"ion-label",[],null,null,null,d.qb,d.v)),t.sb(64,49152,null,0,s.P,[t.h,t.k,t.z],null,null),(l()(),t.Kb(-1,0,["Order Placed"])),(l()(),t.tb(66,0,null,0,6,"ion-item",[],null,null,null,d.pb,d.u)),t.sb(67,49152,null,0,s.J,[t.h,t.k,t.z],null,null),(l()(),t.tb(68,0,null,0,1,"ion-icon",[["name","checkmark-circle"],["slot","start"]],null,null,null,d.nb,d.s)),t.sb(69,49152,null,0,s.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(70,0,null,0,2,"ion-label",[],[[2,"light",null]],null,null,d.qb,d.v)),t.sb(71,49152,null,0,s.P,[t.h,t.k,t.z],null,null),(l()(),t.Kb(-1,0,["Order Confirmed"])),(l()(),t.tb(73,0,null,0,6,"ion-item",[],null,null,null,d.pb,d.u)),t.sb(74,49152,null,0,s.J,[t.h,t.k,t.z],null,null),(l()(),t.tb(75,0,null,0,1,"ion-icon",[["name","link"],["slot","start"]],null,null,null,d.nb,d.s)),t.sb(76,49152,null,0,s.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(77,0,null,0,2,"ion-label",[],[[2,"light",null]],null,null,d.qb,d.v)),t.sb(78,49152,null,0,s.P,[t.h,t.k,t.z],null,null),(l()(),t.Kb(-1,0,["Assigned Delivery Partner"])),(l()(),t.tb(80,0,null,0,6,"ion-item",[],null,null,null,d.pb,d.u)),t.sb(81,49152,null,0,s.J,[t.h,t.k,t.z],null,null),(l()(),t.tb(82,0,null,0,1,"ion-icon",[["name","bus"],["slot","start"]],null,null,null,d.nb,d.s)),t.sb(83,49152,null,0,s.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(84,0,null,0,2,"ion-label",[],[[2,"light",null]],null,null,d.qb,d.v)),t.sb(85,49152,null,0,s.P,[t.h,t.k,t.z],null,null),(l()(),t.Kb(-1,0,["Order picked up"]))],(function(l,n){var u=n.component;l(n,5,0,"primary"),l(n,8,0,"/home"),l(n,9,0,"root"),l(n,11,0,"home"),l(n,15,0,"outline","ios","forward","small"),l(n,16,0,"/order"),l(n,17,0,"forward"),l(n,24,0,"ios"),l(n,33,0,"restaurant"),l(n,37,0,0==u.status),l(n,39,0,1==u.status),l(n,41,0,3==u.status),l(n,43,0,4==u.status),l(n,45,0,4==u.status),l(n,47,0,"0.5",t.xb(1,"",u.progress,"")),l(n,49,0,"ios"),l(n,56,0,"none"),l(n,58,0,"forward"),l(n,59,0,"/order"),l(n,60,0,"forward"),l(n,62,0,"primary","cart"),l(n,69,0,u.getColor(1),"checkmark-circle"),l(n,76,0,u.getColor(3),"link"),l(n,83,0,u.getColor(4),"bus")}),(function(l,n){var u=n.component;l(n,29,0,u.text.confirm_title),l(n,34,0,u.data.store),l(n,70,0,u.status<1),l(n,77,0,u.status<3),l(n,84,0,u.status<4)}))}function y(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,1,"app-done",[],null,null,null,w,m)),t.sb(1,114688,null,0,a,[s.Sb,s.Kb,o.a,r.a,i.a],null,null)],(function(l,n){l(n,1,0)}),null)}var D=t.pb("app-done",a,y,{},{},[]),C=u("gIcY");u.d(n,"DonePageModuleNgFactory",(function(){return O}));var O=t.qb(b,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[c.a,D]],[3,t.j],t.x]),t.Db(4608,h.k,h.j,[t.u,[2,h.q]]),t.Db(4608,C.l,C.l,[]),t.Db(4608,s.b,s.b,[t.z,t.g]),t.Db(4608,s.Jb,s.Jb,[s.b,t.j,t.q]),t.Db(4608,s.Nb,s.Nb,[s.b,t.j,t.q]),t.Db(1073742336,h.b,h.b,[]),t.Db(1073742336,C.k,C.k,[]),t.Db(1073742336,C.b,C.b,[]),t.Db(1073742336,s.Gb,s.Gb,[]),t.Db(1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),t.Db(1073742336,b,b,[]),t.Db(1024,p.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);