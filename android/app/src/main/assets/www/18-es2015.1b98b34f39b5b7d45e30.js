(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+3cH":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=u("mrSG"),i=u("r28Q"),o=u("ZZ/e");class r{constructor(l,n,u,e,t){this.route=l,this.server=n,this.toastController=u,this.nav=e,this.loadingController=t,this.text=JSON.parse(localStorage.getItem("app_text"))}ngOnInit(){}ionViewWillEnter(){localStorage.getItem("user_id")&&"null"!=localStorage.getItem("user_id")?this.loadData():(this.nav.navigateRoot("/login"),this.presentToast("Please login for access your profile"))}takeAction(l){return t.b(this,void 0,void 0,(function*(){this.action=l}))}loadData(){return t.b(this,void 0,void 0,(function*(){const l=yield this.loadingController.create({message:"Please wait..."});yield l.present(),this.server.userInfo(localStorage.getItem("user_id")).subscribe(n=>{this.data=n.data,console.log(n.data),l.dismiss()})}))}update(l){return t.b(this,void 0,void 0,(function*(){const n=yield this.loadingController.create({message:"Please wait..."});yield n.present(),this.server.updateInfo(l,localStorage.getItem("user_id")).subscribe(l=>{"done"==l.msg?(this.action=0,this.data=l.data,this.presentToast("Updated Successfully")):this.presentToast(l.error),n.dismiss()})}))}presentToast(l){return t.b(this,void 0,void 0,(function*(){(yield this.toastController.create({message:l,duration:3e3,position:"top",mode:"ios",color:"dark"})).present()}))}logout(){localStorage.setItem("user_id",null),this.nav.navigateForward("/login")}}class a{}var b=u("pMnS"),s=u("oBZk"),d=u("s7LF"),g=u("iInd"),c=u("SVse"),m=e.pb({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Jb(0,[(l()(),e.rb(0,0,null,null,69,"ion-card",[["mode","ios"]],null,null,null,s.fb,s.g)),e.qb(1,49152,null,0,o.o,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(l()(),e.rb(2,0,null,0,67,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Db(l,4).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Db(l,4).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.update(e.Db(l,4).value)&&t),t}),null,null)),e.qb(3,16384,null,0,d.m,[],null,null),e.qb(4,4210688,[["form",4]],0,d.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Fb(2048,null,d.a,null,[d.h]),e.qb(6,16384,null,0,d.g,[[4,d.a]],null,null),(l()(),e.rb(7,0,null,null,4,"ion-card-header",[],null,null,null,s.cb,s.i)),e.qb(8,49152,null,0,o.q,[e.h,e.k,e.x],null,null),(l()(),e.rb(9,0,null,0,2,"ion-card-subtitle",[],null,null,null,s.db,s.j)),e.qb(10,49152,null,0,o.r,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Update Your Account Setting"])),(l()(),e.rb(12,0,null,null,13,"ion-item",[],null,null,null,s.pb,s.u)),e.qb(13,49152,null,0,o.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(14,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,s.qb,s.v)),e.qb(15,49152,null,0,o.P,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Your Name"])),(l()(),e.rb(17,0,null,0,8,"ion-input",[["name","name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,20)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,20)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.data.name=u)&&t),t}),s.ob,s.t)),e.qb(18,16384,null,0,d.j,[],{required:[0,"required"]},null),e.Fb(1024,null,d.c,(function(l){return[l]}),[d.j]),e.qb(20,16384,null,0,o.Rb,[e.k],null,null),e.Fb(1024,null,d.d,(function(l){return[l]}),[o.Rb]),e.qb(22,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,d.e,null,[d.i]),e.qb(24,16384,null,0,d.f,[[4,d.e]],null,null),e.qb(25,49152,null,0,o.I,[e.h,e.k,e.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.rb(26,0,null,null,13,"ion-item",[],null,null,null,s.pb,s.u)),e.qb(27,49152,null,0,o.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(28,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,s.qb,s.v)),e.qb(29,49152,null,0,o.P,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Email"])),(l()(),e.rb(31,0,null,0,8,"ion-input",[["name","email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,34)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,34)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.data.email=u)&&t),t}),s.ob,s.t)),e.qb(32,16384,null,0,d.j,[],{required:[0,"required"]},null),e.Fb(1024,null,d.c,(function(l){return[l]}),[d.j]),e.qb(34,16384,null,0,o.Rb,[e.k],null,null),e.Fb(1024,null,d.d,(function(l){return[l]}),[o.Rb]),e.qb(36,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,d.e,null,[d.i]),e.qb(38,16384,null,0,d.f,[[4,d.e]],null,null),e.qb(39,49152,null,0,o.I,[e.h,e.k,e.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.rb(40,0,null,null,13,"ion-item",[],null,null,null,s.pb,s.u)),e.qb(41,49152,null,0,o.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(42,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,s.qb,s.v)),e.qb(43,49152,null,0,o.P,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Phone"])),(l()(),e.rb(45,0,null,0,8,"ion-input",[["name","phone"],["required",""],["type","tel"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,48)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,48)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.data.phone=u)&&t),t}),s.ob,s.t)),e.qb(46,16384,null,0,d.j,[],{required:[0,"required"]},null),e.Fb(1024,null,d.c,(function(l){return[l]}),[d.j]),e.qb(48,16384,null,0,o.Rb,[e.k],null,null),e.Fb(1024,null,d.d,(function(l){return[l]}),[o.Rb]),e.qb(50,671744,null,0,d.i,[[2,d.a],[6,d.c],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,d.e,null,[d.i]),e.qb(52,16384,null,0,d.f,[[4,d.e]],null,null),e.qb(53,49152,null,0,o.I,[e.h,e.k,e.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.rb(54,0,null,null,11,"ion-item",[],null,null,null,s.pb,s.u)),e.qb(55,49152,null,0,o.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(56,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,s.qb,s.v)),e.qb(57,49152,null,0,o.P,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Ib(-1,0,["Change Password"])),(l()(),e.rb(59,0,null,0,6,"ion-input",[["name","password"],["ngModel",""],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Db(l,60)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,60)._handleInputEvent(u.target)&&t),t}),s.ob,s.t)),e.qb(60,16384,null,0,o.Rb,[e.k],null,null),e.Fb(1024,null,d.d,(function(l){return[l]}),[o.Rb]),e.qb(62,671744,null,0,d.i,[[2,d.a],[8,null],[8,null],[6,d.d]],{name:[0,"name"],model:[1,"model"]},null),e.Fb(2048,null,d.e,null,[d.i]),e.qb(64,16384,null,0,d.f,[[4,d.e]],null,null),e.qb(65,49152,null,0,o.I,[e.h,e.k,e.x],{name:[0,"name"],type:[1,"type"]},null),(l()(),e.rb(66,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(67,0,null,null,2,"ion-button",[["expand","block"],["mode","ios"],["style","width: 90%;margin-left: 5%"],["type","submit"]],null,null,null,s.Z,s.e)),e.qb(68,49152,null,0,o.m,[e.h,e.k,e.x],{disabled:[0,"disabled"],expand:[1,"expand"],mode:[2,"mode"],type:[3,"type"]},null),(l()(),e.Ib(-1,0,["Update"]))],(function(l,n){var u=n.component;l(n,1,0,"ios"),l(n,15,0,"floating"),l(n,18,0,""),l(n,22,0,"name",u.data.name),l(n,25,0,"name","","text"),l(n,29,0,"floating"),l(n,32,0,""),l(n,36,0,"email",u.data.email),l(n,39,0,"email","","email"),l(n,43,0,"floating"),l(n,46,0,""),l(n,50,0,"phone",u.data.phone),l(n,53,0,"phone","","tel"),l(n,57,0,"floating"),l(n,62,0,"password",""),l(n,65,0,"password","password"),l(n,68,0,!e.Db(n,4),"block","ios","submit")}),(function(l,n){l(n,2,0,e.Db(n,6).ngClassUntouched,e.Db(n,6).ngClassTouched,e.Db(n,6).ngClassPristine,e.Db(n,6).ngClassDirty,e.Db(n,6).ngClassValid,e.Db(n,6).ngClassInvalid,e.Db(n,6).ngClassPending),l(n,17,0,e.Db(n,18).required?"":null,e.Db(n,24).ngClassUntouched,e.Db(n,24).ngClassTouched,e.Db(n,24).ngClassPristine,e.Db(n,24).ngClassDirty,e.Db(n,24).ngClassValid,e.Db(n,24).ngClassInvalid,e.Db(n,24).ngClassPending),l(n,31,0,e.Db(n,32).required?"":null,e.Db(n,38).ngClassUntouched,e.Db(n,38).ngClassTouched,e.Db(n,38).ngClassPristine,e.Db(n,38).ngClassDirty,e.Db(n,38).ngClassValid,e.Db(n,38).ngClassInvalid,e.Db(n,38).ngClassPending),l(n,45,0,e.Db(n,46).required?"":null,e.Db(n,52).ngClassUntouched,e.Db(n,52).ngClassTouched,e.Db(n,52).ngClassPristine,e.Db(n,52).ngClassDirty,e.Db(n,52).ngClassValid,e.Db(n,52).ngClassInvalid,e.Db(n,52).ngClassPending),l(n,59,0,e.Db(n,64).ngClassUntouched,e.Db(n,64).ngClassTouched,e.Db(n,64).ngClassPristine,e.Db(n,64).ngClassDirty,e.Db(n,64).ngClassValid,e.Db(n,64).ngClassInvalid,e.Db(n,64).ngClassPending)}))}function h(l){return e.Jb(0,[(l()(),e.rb(0,0,null,null,42,"ion-content",[],null,null,null,s.ib,s.n)),e.qb(1,49152,null,0,o.w,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,38,"ion-card",[["class","welcome-card"],["mode","ios"]],null,null,null,s.fb,s.g)),e.qb(3,49152,null,0,o.o,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(l()(),e.rb(4,0,null,0,4,"ion-card-header",[],null,null,null,s.cb,s.i)),e.qb(5,49152,null,0,o.q,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,2,"ion-card-title",[],null,null,null,s.eb,s.k)),e.qb(7,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.Ib(8,0,["",""])),(l()(),e.rb(9,0,null,0,31,"ion-list",[["lines","none"]],null,null,null,s.sb,s.w)),e.qb(10,49152,null,0,o.Q,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.rb(11,0,null,0,6,"ion-list-header",[],null,null,null,s.rb,s.x)),e.qb(12,49152,null,0,o.R,[e.h,e.k,e.x],null,null),(l()(),e.rb(13,0,null,0,4,"ion-label",[],null,null,null,s.qb,s.v)),e.qb(14,49152,null,0,o.P,[e.h,e.k,e.x],null,null),(l()(),e.Ib(15,0,[""," "])),(l()(),e.rb(16,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(17,null,["",""])),(l()(),e.rb(18,0,null,0,8,"ion-item",[["routerDirection","forward"],["routerLink","/order"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Db(l,20).onClick()&&t),"click"===n&&(t=!1!==e.Db(l,21).onClick(u)&&t),t}),s.pb,s.u)),e.qb(19,49152,null,0,o.J,[e.h,e.k,e.x],{routerDirection:[0,"routerDirection"]},null),e.qb(20,16384,null,0,g.n,[g.m,g.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.qb(21,737280,null,0,o.Pb,[c.g,o.Kb,e.k,g.m,[2,g.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.rb(22,0,null,0,1,"ion-icon",[["color","medium"],["name","cart"],["slot","start"]],null,null,null,s.nb,s.s)),e.qb(23,49152,null,0,o.E,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.rb(24,0,null,0,2,"ion-label",[],null,null,null,s.qb,s.v)),e.qb(25,49152,null,0,o.P,[e.h,e.k,e.x],null,null),(l()(),e.Ib(26,0,["",""])),(l()(),e.rb(27,0,null,0,6,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.takeAction(1)&&e),e}),s.pb,s.u)),e.qb(28,49152,null,0,o.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(29,0,null,0,1,"ion-icon",[["color","medium"],["name","build"],["slot","start"]],null,null,null,s.nb,s.s)),e.qb(30,49152,null,0,o.E,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.rb(31,0,null,0,2,"ion-label",[],null,null,null,s.qb,s.v)),e.qb(32,49152,null,0,o.P,[e.h,e.k,e.x],null,null),(l()(),e.Ib(33,0,["",""])),(l()(),e.rb(34,0,null,0,6,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.logout()&&e),e}),s.pb,s.u)),e.qb(35,49152,null,0,o.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(36,0,null,0,1,"ion-icon",[["color","medium"],["name","log-out"],["slot","start"]],null,null,null,s.nb,s.s)),e.qb(37,49152,null,0,o.E,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.rb(38,0,null,0,2,"ion-label",[],null,null,null,s.qb,s.v)),e.qb(39,49152,null,0,o.P,[e.h,e.k,e.x],null,null),(l()(),e.Ib(40,0,["",""])),(l()(),e.gb(16777216,null,0,1,null,p)),e.qb(42,16384,null,0,c.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"ios"),l(n,10,0,"none"),l(n,19,0,"forward"),l(n,20,0,"/order"),l(n,21,0,"forward"),l(n,23,0,"medium","cart"),l(n,30,0,"medium","build"),l(n,37,0,"medium","log-out"),l(n,42,0,1==u.action)}),(function(l,n){var u=n.component;l(n,8,0,u.text.profile_heading),l(n,15,0,u.text.profile_welcome),l(n,17,0,u.data.name),l(n,26,0,u.text.profile_order_history),l(n,33,0,u.text.profile_setting),l(n,40,0,u.text.profile_logout)}))}function q(l){return e.Jb(0,[e.Gb(671088640,1,{content:0}),(l()(),e.rb(1,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,s.mb,s.r)),e.qb(2,49152,null,0,o.D,[e.h,e.k,e.x],null,null),(l()(),e.rb(3,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,s.Pb,s.U)),e.qb(4,49152,null,0,o.Eb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.ab,s.f)),e.qb(6,49152,null,0,o.n,[e.h,e.k,e.x],null,null),(l()(),e.rb(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Db(l,9).onClick(u)&&t),t}),s.W,s.b)),e.qb(8,49152,null,0,o.i,[e.h,e.k,e.x],null,null),e.qb(9,16384,null,0,o.j,[[2,o.kb],o.Kb],null,null),(l()(),e.rb(10,0,null,0,2,"ion-title",[],null,null,null,s.Nb,s.S)),e.qb(11,49152,null,0,o.Cb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(12,0,[" "," "])),(l()(),e.gb(16777216,null,null,1,null,h)),e.qb(14,16384,null,0,c.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,4,0,"primary"),l(n,14,0,u.data)}),(function(l,n){l(n,12,0,n.component.text.profile_title)}))}function f(l){return e.Jb(0,[(l()(),e.rb(0,0,null,null,1,"app-profile",[],null,null,null,q,m)),e.qb(1,114688,null,0,r,[g.a,i.a,o.Sb,o.Kb,o.Ib],null,null)],(function(l,n){l(n,1,0)}),null)}var k=e.nb("app-profile",r,f,{},{},[]);u.d(n,"ProfilePageModuleNgFactory",(function(){return v}));var v=e.ob(a,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[b.a,k]],[3,e.j],e.v]),e.Bb(4608,c.k,c.j,[e.s,[2,c.q]]),e.Bb(4608,d.l,d.l,[]),e.Bb(4608,o.b,o.b,[e.x,e.g]),e.Bb(4608,o.Jb,o.Jb,[o.b,e.j,e.p]),e.Bb(4608,o.Nb,o.Nb,[o.b,e.j,e.p]),e.Bb(1073742336,c.b,c.b,[]),e.Bb(1073742336,d.k,d.k,[]),e.Bb(1073742336,d.b,d.b,[]),e.Bb(1073742336,o.Gb,o.Gb,[]),e.Bb(1073742336,g.p,g.p,[[2,g.u],[2,g.m]]),e.Bb(1073742336,a,a,[]),e.Bb(1024,g.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);