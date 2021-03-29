!function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{r6jk:function(e,o,i){"use strict";i.r(o),i.d(o,"LoanFormModule",function(){return Y});var a,c,u=i("ofXK"),l=i("FpXt"),p=i("tyNb"),f=i("B/XX"),b=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),this.value=t.value,this.key=t.key||"",this.placeholder=t.placeholder||"",this.label=t.label||"",this.required=!!t.required,this.order=void 0===t.order?1:t.order,this.controlType=t.controlType||"",this.type=t.type||"",this.options=t.options||[]},m=function(e){n(o,e);var t=r(o);function o(){var e;return s(this,o),(e=t.apply(this,arguments)).controlType="dropdown",e}return o}(b),d=function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,e),this.label=null!==(t=n.label)&&void 0!==t?t:"",this.key=n.key,this.required=!!n.required,this.order=void 0===n.order?1:n.order,this.isEditable=n.isEditable,this.questions=n.questions,this.text=n.text},h=function(e){n(o,e);var t=r(o);function o(){var e;return s(this,o),(e=t.apply(this,arguments)).controlType="textbox",e}return o}(b),y=i("LRne"),g=i("fXoL"),v=((a=function(){function e(){s(this,e)}return t(e,[{key:"getLoanStepsWithQuestions",value:function(){var e=[new d({key:1,required:!0,order:0,isEditable:!0,label:"Intro",text:'Press "next" to start applying for a loan.'}),new d({key:1,required:!0,order:0,isEditable:!0,label:"Income",questions:[new h({key:"income",label:"Income",placeholder:"Monthy Income After Taxes (EUR)",required:!0,type:"number"})]}),new d({key:2,required:!0,order:1,isEditable:!0,label:"Reason",questions:[new m({key:"reason",label:"Loan reason",placeholder:"Loan reason",required:!0,options:[{key:"car",value:"Buy car"},{key:"phone",value:"Buy phone"},{key:"home",value:"Home enhancements"},{key:"other",value:"Other"}]})]}),new d({key:3,required:!0,order:1,isEditable:!0,label:"Contact",questions:[new m({key:"contact",label:"Preferred contact method",placeholder:"Preferred contact method",required:!0,options:[{key:"call",value:"Call"},{key:"sms",value:"SMS"},{key:"email",value:"Email"}]})]}),new d({key:4,required:!0,order:3,isEditable:!0,label:"Amount",questions:[new h({key:"amount",label:"Loan amount",placeholder:"Loan Amount (EUR)",required:!0,options:[{key:"solid",value:"Solid"},{key:"great",value:"Great"},{key:"good",value:"Good"},{key:"unproven",value:"Unproven"}],order:3})]}),new d({key:5,required:!1,order:5,label:"Summary",isEditable:!0,text:"Please review entered information below before submitting the form."})];return Object(y.a)(e.sort(function(e,t){return e.order-t.order}))}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275prov=g.Ib({token:a,factory:a.\u0275fac}),a),k=i("3Pt+"),w=((c=function(){function e(t){s(this,e),this._formBuilder=t}return t(e,[{key:"toFormStepsArray",value:function(e){for(var t,n=this._formBuilder.array([]),o=0;o<(null==e?void 0:e.length);o++){for(var r={},i=0;i<(null===(t=e[o].questions)||void 0===t?void 0:t.length);i++)r[e[o].questions[i].key]=e[o].questions[i].required?new k.d(e[o].questions[i].value||"",k.p.required):new k.d(e[o].questions[i].value||"");n.push(new k.f(r))}return n}}]),e}()).\u0275fac=function(e){return new(e||c)(g.Wb(k.c))},c.\u0275prov=g.Ib({token:c,factory:c.\u0275fac}),c),q=i("xHqg");function S(e,t){if(1&e&&(g.Qb(0),g.qc(1),g.Sb(2,"span",4),g.qc(3),g.Rb(),g.Pb()),2&e){var n=t.$implicit,o=g.bc(2).index,r=g.bc(2);g.Bb(1),g.sc(" ",n.placeholder," : "),g.Bb(2),g.rc(r.payLoad[o][n.key])}}function B(e,t){if(1&e&&(g.Sb(0,"div",3),g.pc(1,S,4,2,"ng-container",1),g.Nb(2,"br"),g.Rb()),2&e){var n=g.bc().$implicit;g.Bb(1),g.gc("ngForOf",n.questions)}}function R(e,t){if(1&e&&(g.Qb(0),g.pc(1,B,3,1,"div",2),g.Pb()),2&e){var n=t.$implicit;g.Bb(1),g.gc("ngIf",(null==n.questions?null:n.questions.length)>0)}}function F(e,t){if(1&e&&(g.Sb(0,"div"),g.pc(1,R,2,1,"ng-container",1),g.Rb()),2&e){var n=g.bc();g.Bb(1),g.gc("ngForOf",n.steps)}}var C,I=((C=function(){function e(){s(this,e),this.payLoad={},this.steps=[]}return t(e,[{key:"ngOnInit",value:function(){}},{key:"handleChanges",value:function(e){console.log(e)}}]),e}()).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=g.Gb({type:C,selectors:[["form-summary"]],inputs:{payLoad:"payLoad",steps:"steps"},decls:2,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["class","mb-3",4,"ngIf"],[1,"mb-3"],[1,"text-uppercase"]],template:function(e,t){1&e&&(g.Nb(0,"br"),g.pc(1,F,2,1,"div",0)),2&e&&(g.Bb(1),g.gc("ngIf",t.steps))},directives:[u.k,u.j],styles:[""]}),C),O=i("kmnG"),L=i("qFsG"),x=i("d3UM"),N=i("FKr1"),P=i("bTqV");function E(e,t){if(1&e&&g.qc(0),2&e){var n=g.bc().$implicit;g.rc(n.label)}}function j(e,t){if(1&e&&(g.Sb(0,"div"),g.qc(1),g.Rb()),2&e){var n=g.bc().$implicit;g.Bb(1),g.rc(n.text)}}function _(e,t){if(1&e&&g.Nb(0,"form-summary",10),2&e){var n=g.bc(2);g.gc("steps",n.steps)("payLoad",n.stepsForm.getRawValue().steps)}}function $(e,t){if(1&e&&g.Nb(0,"input",16),2&e){var n=g.bc().$implicit;g.hc("placeholder",n.placeholder),g.gc("formControlName",n.key)("id",n.key)("type",n.type)}}function A(e,t){if(1&e&&(g.Sb(0,"mat-option",19),g.qc(1),g.Rb()),2&e){var n=t.$implicit;g.gc("value",n.key),g.Bb(1),g.rc(n.value)}}function G(e,t){if(1&e&&(g.Sb(0,"mat-select",17),g.pc(1,A,2,2,"mat-option",18),g.Rb()),2&e){var n=g.bc().$implicit;g.hc("placeholder",n.placeholder),g.gc("id",n.key)("formControlName",n.key),g.Bb(1),g.gc("ngForOf",n.options)}}function T(e,t){if(1&e&&(g.Qb(0),g.Sb(1,"mat-form-field",11),g.Sb(2,"div",12),g.pc(3,$,1,4,"input",13),g.pc(4,G,2,4,"mat-select",14),g.Rb(),g.Sb(5,"mat-error"),g.Sb(6,"span",15),g.qc(7),g.Rb(),g.qc(8," is invalid!"),g.Rb(),g.Rb(),g.Pb()),2&e){var n=t.$implicit;g.Bb(2),g.gc("ngSwitch",n.controlType),g.Bb(1),g.gc("ngSwitchCase","textbox"),g.Bb(1),g.gc("ngSwitchCase","dropdown"),g.Bb(3),g.rc(n.key)}}function V(e,t){1&e&&(g.Sb(0,"button",20),g.qc(1,"Back"),g.Rb())}function M(e,t){1&e&&(g.Sb(0,"button",21),g.qc(1,"Next"),g.Rb())}function Q(e,t){if(1&e){var n=g.Tb();g.Sb(0,"button",22),g.Zb("click",function(){return g.lc(n),g.bc(2).onSubmit}),g.qc(1,"Submit"),g.Rb()}}var J=function(e){return[e]};function X(e,t){if(1&e&&(g.Qb(0),g.Sb(1,"mat-step",3),g.pc(2,E,1,1,"ng-template",4),g.pc(3,j,2,1,"div",5),g.pc(4,_,1,2,"form-summary",6),g.pc(5,T,9,4,"ng-container",2),g.Nb(6,"br"),g.Sb(7,"div"),g.pc(8,V,2,0,"button",7),g.pc(9,M,2,0,"button",8),g.pc(10,Q,2,0,"button",9),g.Rb(),g.Rb(),g.Pb()),2&e){var n=t.$implicit,o=t.index,r=g.bc(),i=null;g.Bb(1),g.gc("editable",n.isEditable)("formGroupName",o)("stepControl",null==(i=r.stepsForm.get("steps"))?null:i.get(g.ic(9,J,o))),g.Bb(2),g.gc("ngIf",n.text),g.Bb(1),g.gc("ngIf",o==r.steps.length-1),g.Bb(1),g.gc("ngForOf",r.steps[o].questions),g.Bb(3),g.gc("ngIf",0!==o||1!==o),g.Bb(1),g.gc("ngIf",o!==r.steps.length-1),g.Bb(1),g.gc("ngIf",o==r.steps.length-1)}}var K,U,W,z,H=((K=function(){function e(t,n){s(this,e),this._formBuilder=t,this.qcs=n,this.steps=[],this.onFormValueChanges=new g.n,this.payLoad="",this.isLinear=!0}return t(e,[{key:"ngOnInit",value:function(){this.stepsForm=this._formBuilder.group({steps:this.qcs.toFormStepsArray(this.steps)}),this.onChanges()}},{key:"onChanges",value:function(){var e=this;this.stepsForm.valueChanges.subscribe(function(t){e.onFormValueChanges.emit(e.stepsForm.getRawValue())})}},{key:"onSubmit",value:function(){this.payLoad=JSON.stringify(this.stepsForm.getRawValue())}}]),e}()).\u0275fac=function(e){return new(e||K)(g.Mb(k.c),g.Mb(w))},K.\u0275cmp=g.Gb({type:K,selectors:[["app-dynamic-form"]],inputs:{steps:"steps"},outputs:{onFormValueChanges:"onFormValueChanges"},features:[g.Ab([w])],decls:3,vars:3,consts:[[3,"formGroup"],["labelPosition","bottom","formArrayName","steps",3,"linear"],[4,"ngFor","ngForOf"],[1,"mt-3",3,"editable","formGroupName","stepControl"],["class","mt-3","matStepLabel",""],[4,"ngIf"],[3,"steps","payLoad",4,"ngIf"],["mat-button","","matStepperPrevious","","type","button",4,"ngIf"],["mat-button","","matStepperNext","","type","button",4,"ngIf"],["mat-button","",3,"click",4,"ngIf"],[3,"steps","payLoad"],[1,"mr-3","mt-3"],[3,"ngSwitch"],["matInput","",3,"placeholder","formControlName","id","type",4,"ngSwitchCase"],["matInput","",3,"placeholder","id","formControlName",4,"ngSwitchCase"],[1,"text-capitalize"],["matInput","",3,"placeholder","formControlName","id","type"],["matInput","",3,"placeholder","id","formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["mat-button","","matStepperPrevious","","type","button"],["mat-button","","matStepperNext","","type","button"],["mat-button","",3,"click"]],template:function(e,t){1&e&&(g.Sb(0,"form",0),g.Sb(1,"mat-horizontal-stepper",1),g.pc(2,X,11,11,"ng-container",2),g.Rb(),g.Rb()),2&e&&(g.gc("formGroup",t.stepsForm),g.Bb(1),g.gc("linear",t.isLinear),g.Bb(1),g.gc("ngForOf",t.steps))},directives:[k.q,k.m,k.g,q.a,k.b,u.j,q.b,k.h,q.c,u.k,I,O.c,u.l,u.m,O.b,L.a,k.a,k.l,k.e,x.a,N.h,P.a,q.f,q.e],encapsulation:2}),K),Z=[{path:"",component:(U=function(){function e(t,n){s(this,e),this.service=t,this._formBuilder=n,this.isLinear=!0,this.steps$=t.getLoanStepsWithQuestions()}return t(e,[{key:"ngOnInit",value:function(){}},{key:"handleChanges",value:function(e){}},{key:"submit",value:function(){}}]),e}(),U.\u0275fac=function(e){return new(e||U)(g.Mb(v),g.Mb(k.c))},U.\u0275cmp=g.Gb({type:U,selectors:[["app-loan-form"]],features:[g.Ab([{provide:f.h,useValue:{showError:!0}},v])],decls:4,vars:3,consts:[[1,"pt-3"],[3,"steps","onFormValueChanges"]],template:function(e,t){1&e&&(g.Sb(0,"h1",0),g.qc(1,"LOAN APPLICATION"),g.Rb(),g.Sb(2,"app-dynamic-form",1),g.Zb("onFormValueChanges",function(e){return t.handleChanges(e)}),g.cc(3,"async"),g.Rb()),2&e&&(g.Bb(2),g.gc("steps",g.dc(3,1,t.steps$)))},directives:[H],pipes:[u.b],styles:[""]}),U)}],D=((z=function e(){s(this,e)}).\u0275fac=function(e){return new(e||z)},z.\u0275mod=g.Kb({type:z}),z.\u0275inj=g.Jb({imports:[[p.a.forChild(Z)],p.a]}),z),Y=((W=function e(){s(this,e)}).\u0275fac=function(e){return new(e||W)},W.\u0275mod=g.Kb({type:W}),W.\u0275inj=g.Jb({imports:[[u.c,l.a,D]]}),W)}}])}();