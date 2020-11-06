(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6k/y":function(e,t,n){"use strict";n.r(t),t.default="// RECOMMENDED\nimport { SortableModule } from 'ngx-bootstrap/sortable';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { SortableModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [SortableModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},Bijr:function(e,t,n){"use strict";n.r(t),t.default='<div class="row">\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemObjectsLeft"\n      fieldName="name"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n    <pre class="code-preview">{{ itemObjectsLeft | json }}</pre>\n  </div>\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemObjectsRight"\n      fieldName="name"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n    <pre class="code-preview">{{ itemObjectsRight | json }}</pre>\n  </div>\n</div>\n'},K19f:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'custom-item-template-demo',\n  templateUrl: './custom-item-template.html'\n})\nexport class CustomItemTemplateDemoComponent {\n  itemStringsLeft: any[] = [\n    'Windstorm',\n    'Bombasto',\n    'Magneta',\n    'Tornado'\n  ];\n\n  itemStringsRight: any[] = ['Mr. O', 'Tomato'];\n}\n"},PmAR:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'basic-demo',\n  templateUrl: './basic.component.html'\n})\nexport class DemoBasicComponent {\n  itemStringsLeft = [\n    'Windstorm',\n    'Bombasto',\n    'Magneta',\n    'Tornado'\n  ];\n\n  itemStringsRight = ['Mr. O', 'Tomato'];\n}\n"},Sxso:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'complex-datamodel-demo',\n  templateUrl: './complex-datamodel.component.html'\n})\nexport class ComplexDatamodelDemoComponent {\n  itemObjectsLeft: any[] = [\n    { id: 1, name: 'Windstorm' },\n    { id: 2, name: 'Bombasto' },\n    { id: 3, name: 'Magneta' }\n  ];\n\n  itemObjectsRight: any[] = [\n    { id: 4, name: 'Tornado' },\n    { id: 5, name: 'Mr. O' },\n    { id: 6, name: 'Tomato' }\n  ];\n}\n"},lWZg:function(e,t,n){"use strict";n.r(t),t.default='<div class="row">\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemStringsLeft"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n    <pre class="code-preview">model: {{ itemStringsLeft | json }}</pre>\n  </div>\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemStringsRight"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n    <pre class="code-preview">model: {{ itemStringsRight | json }}</pre>\n  </div>\n</div>\n'},x7VU:function(e,t,n){"use strict";n.r(t);var o=n("QJY3"),r=n("Valr"),a=n("DUip"),i=n("TYT/"),s=n("mrSG"),l=n("K9Ia");function c(e,t){if(1&e){var n=i.Tb();i.Sb(0,"div",4),i.ac("dragover",(function(e){return i.vc(n),i.cc().onItemDragover(e,0)}))("dragenter",(function(e){return i.vc(n),i.cc().cancelEvent(e)})),i.Fc(1),i.Rb()}if(2&e){var o=i.cc();i.ic("ngClass",o.placeholderClass)("ngStyle",o.placeholderStyle),i.Ab(1),i.Gc(o.placeholderItem)}}function m(e,t){}var d=function(e,t){return[e,t]},p=function(e,t){return{item:e,index:t}};function b(e,t){if(1&e){var n=i.Tb();i.Sb(0,"div",5),i.ac("dragstart",(function(e){i.vc(n);var o=t.$implicit,r=t.index;return i.cc().onItemDragstart(e,o,r)}))("dragend",(function(e){return i.vc(n),i.cc().resetActiveItem(e)}))("dragover",(function(e){i.vc(n);var o=t.index;return i.cc().onItemDragover(e,o)}))("dragenter",(function(e){return i.vc(n),i.cc().cancelEvent(e)})),i.Dc(1,m,0,0,"ng-template",6),i.Rb()}if(2&e){var o=t.$implicit,r=t.index,a=i.cc(),s=i.sc(4);i.ic("ngClass",i.nc(5,d,a.itemClass,r===a.activeItem?a.itemActiveClass:""))("ngStyle",a.getItemStyle(r===a.activeItem)),i.Bb("aria-grabbed",r===a.activeItem),i.Ab(1),i.ic("ngTemplateOutlet",a.itemTemplate||s)("ngTemplateOutletContext",i.nc(8,p,o,r))}}function g(e,t){1&e&&i.Fc(0),2&e&&i.Gc(t.item.value)}var u=function(){function e(){this.onCapture=new l.a}return e.prototype.dragStart=function(e){this.draggableItem=e},e.prototype.getItem=function(){return this.draggableItem},e.prototype.captureItem=function(e,t){return this.draggableItem.overZoneIndex!==e&&(this.draggableItem.lastZoneIndex=this.draggableItem.overZoneIndex,this.draggableItem.overZoneIndex=e,this.onCapture.next(this.draggableItem),this.draggableItem=Object.assign({},this.draggableItem,{overZoneIndex:e,i:t})),this.draggableItem},e.prototype.onCaptureItem=function(){return this.onCapture},e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Ib({token:e,factory:function(t){return e.\u0275fac(t)}}),e}(),h=function(){function e(t){var n=this;this.wrapperClass="",this.wrapperStyle={},this.itemClass="",this.itemStyle={},this.itemActiveClass="",this.itemActiveStyle={},this.placeholderClass="",this.placeholderStyle={},this.placeholderItem="",this.onChange=new i.n,this.showPlaceholder=!1,this.activeItem=-1,this.onTouched=Function.prototype,this.onChanged=Function.prototype,this.transfer=t,this.currentZoneIndex=e.globalZoneIndex++,this.transfer.onCaptureItem().subscribe((function(e){return n.onDrop(e)}))}return Object.defineProperty(e.prototype,"items",{get:function(){return this._items},set:function(e){this._items=e;var t=this.items.map((function(e){return e.initData}));this.onChanged(t),this.onChange.emit(t)},enumerable:!0,configurable:!0}),e.prototype.onItemDragstart=function(e,t,n){this.initDragstartEvent(e),this.onTouched(),this.transfer.dragStart({event:e,item:t,i:n,initialIndex:n,lastZoneIndex:this.currentZoneIndex,overZoneIndex:this.currentZoneIndex})},e.prototype.onItemDragover=function(e,t){if(this.transfer.getItem()){e.preventDefault();var n,o=this.transfer.captureItem(this.currentZoneIndex,this.items.length);n=this.items.length?o.i>t?Object(s.f)(this.items.slice(0,t),[o.item],this.items.slice(t,o.i),this.items.slice(o.i+1)):Object(s.f)(this.items.slice(0,o.i),this.items.slice(o.i+1,t+1),[o.item],this.items.slice(t+1)):[o.item],this.items=n,o.i=t,this.activeItem=t,this.updatePlaceholderState()}},e.prototype.cancelEvent=function(e){this.transfer.getItem()&&e&&e.preventDefault()},e.prototype.onDrop=function(e){e&&e.overZoneIndex!==this.currentZoneIndex&&e.lastZoneIndex===this.currentZoneIndex&&(this.items=this.items.filter((function(t,n){return n!==e.i})),this.updatePlaceholderState()),this.resetActiveItem(void 0)},e.prototype.resetActiveItem=function(e){this.cancelEvent(e),this.activeItem=-1},e.prototype.registerOnChange=function(e){this.onChanged=e},e.prototype.registerOnTouched=function(e){this.onTouched=e},e.prototype.writeValue=function(e){var t=this;this.items=e?e.map((function(e,n){return{id:n,initData:e,value:t.fieldName?e[t.fieldName]:e}})):[],this.updatePlaceholderState()},e.prototype.updatePlaceholderState=function(){this.showPlaceholder=!this._items.length},e.prototype.getItemStyle=function(e){return e?Object.assign({},this.itemStyle,this.itemActiveStyle):this.itemStyle},e.prototype.initDragstartEvent=function(e){e.dataTransfer.setData("Text","placeholder")},e.globalZoneIndex=0,e.\u0275fac=function(t){return new(t||e)(i.Mb(u))},e.\u0275cmp=i.Gb({type:e,selectors:[["bs-sortable"]],inputs:{wrapperClass:"wrapperClass",wrapperStyle:"wrapperStyle",itemClass:"itemClass",itemStyle:"itemStyle",itemActiveClass:"itemActiveClass",itemActiveStyle:"itemActiveStyle",placeholderClass:"placeholderClass",placeholderStyle:"placeholderStyle",placeholderItem:"placeholderItem",fieldName:"fieldName",itemTemplate:"itemTemplate"},outputs:{onChange:"onChange"},exportAs:["bs-sortable"],features:[i.zb([{provide:o.o,useExisting:Object(i.T)((function(){return e})),multi:!0}])],decls:5,vars:4,consts:[[3,"ngClass","ngStyle","dragover","dragenter","drop","mouseleave"],[3,"ngClass","ngStyle","dragover","dragenter",4,"ngIf"],["draggable","true","aria-dropeffect","move",3,"ngClass","ngStyle","dragstart","dragend","dragover","dragenter",4,"ngFor","ngForOf"],["defItemTemplate",""],[3,"ngClass","ngStyle","dragover","dragenter"],["draggable","true","aria-dropeffect","move",3,"ngClass","ngStyle","dragstart","dragend","dragover","dragenter"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,t){1&e&&(i.Sb(0,"div",0),i.ac("dragover",(function(e){return t.cancelEvent(e)}))("dragenter",(function(e){return t.cancelEvent(e)}))("drop",(function(e){return t.resetActiveItem(e)}))("mouseleave",(function(e){return t.resetActiveItem(e)})),i.Dc(1,c,2,3,"div",1),i.Dc(2,b,2,11,"div",2),i.Rb(),i.Dc(3,g,1,1,"ng-template",null,3,i.Ec)),2&e&&(i.ic("ngClass",t.wrapperClass)("ngStyle",t.wrapperStyle),i.Ab(1),i.ic("ngIf",t.showPlaceholder),i.Ab(1),i.ic("ngForOf",t.items))},directives:[r.q,r.w,r.t,r.s,r.A],encapsulation:2}),e}(),f=function(){function e(){}return e.forRoot=function(){return{ngModule:e,providers:[u]}},e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},imports:[[r.c]]}),e}(),v=n("k3/p"),S=function(){function e(){this.itemStringsLeft=["Windstorm","Bombasto","Magneta","Tornado"],this.itemStringsRight=["Mr. O","Tomato"]}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["basic-demo"]],decls:11,vars:8,consts:[[1,"row"],[1,"col-xs-6","col-6","col-md-5","col-lg-3"],["itemClass","sortable-item","itemActiveClass","sortable-item-active","placeholderItem","Drag here","placeholderClass","placeholderStyle","wrapperClass","sortable-wrapper",3,"ngModel","ngModelChange"],[1,"code-preview"]],template:function(e,t){1&e&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"bs-sortable",2),i.ac("ngModelChange",(function(e){return t.itemStringsLeft=e})),i.Rb(),i.Sb(3,"pre",3),i.Fc(4),i.dc(5,"json"),i.Rb(),i.Rb(),i.Sb(6,"div",1),i.Sb(7,"bs-sortable",2),i.ac("ngModelChange",(function(e){return t.itemStringsRight=e})),i.Rb(),i.Sb(8,"pre",3),i.Fc(9),i.dc(10,"json"),i.Rb(),i.Rb(),i.Rb()),2&e&&(i.Ab(2),i.ic("ngModel",t.itemStringsLeft),i.Ab(2),i.Hc("model: ",i.ec(5,4,t.itemStringsLeft),""),i.Ab(3),i.ic("ngModel",t.itemStringsRight),i.Ab(2),i.Hc("model: ",i.ec(10,6,t.itemStringsRight),""))},directives:[h,o.q,o.t],pipes:[r.k],encapsulation:2}),e}(),C=function(){function e(){this.itemObjectsLeft=[{id:1,name:"Windstorm"},{id:2,name:"Bombasto"},{id:3,name:"Magneta"}],this.itemObjectsRight=[{id:4,name:"Tornado"},{id:5,name:"Mr. O"},{id:6,name:"Tomato"}]}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["complex-datamodel-demo"]],decls:11,vars:8,consts:[[1,"row"],[1,"col-xs-6","col-6","col-md-5","col-lg-3"],["fieldName","name","itemClass","sortable-item","itemActiveClass","sortable-item-active","placeholderItem","Drag here","placeholderClass","placeholderStyle","wrapperClass","sortable-wrapper",3,"ngModel","ngModelChange"],[1,"code-preview"]],template:function(e,t){1&e&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"bs-sortable",2),i.ac("ngModelChange",(function(e){return t.itemObjectsLeft=e})),i.Rb(),i.Sb(3,"pre",3),i.Fc(4),i.dc(5,"json"),i.Rb(),i.Rb(),i.Sb(6,"div",1),i.Sb(7,"bs-sortable",2),i.ac("ngModelChange",(function(e){return t.itemObjectsRight=e})),i.Rb(),i.Sb(8,"pre",3),i.Fc(9),i.dc(10,"json"),i.Rb(),i.Rb(),i.Rb()),2&e&&(i.Ab(2),i.ic("ngModel",t.itemObjectsLeft),i.Ab(2),i.Gc(i.ec(5,4,t.itemObjectsLeft)),i.Ab(3),i.ic("ngModel",t.itemObjectsRight),i.Ab(2),i.Gc(i.ec(10,6,t.itemObjectsRight)))},directives:[h,o.q,o.t],pipes:[r.k],encapsulation:2}),e}();function y(e,t){if(1&e&&(i.Sb(0,"span"),i.Fc(1),i.Rb()),2&e){var n=t.item,o=t.index;i.Ab(1),i.Ic("",o,": ",n.value,"")}}var w=function(){function e(){this.itemStringsLeft=["Windstorm","Bombasto","Magneta","Tornado"],this.itemStringsRight=["Mr. O","Tomato"]}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["custom-item-template-demo"]],decls:13,vars:9,consts:[["itemTemplate",""],[1,"row"],[1,"col-xs-6","col-6","col-md-5","col-lg-3"],["itemClass","sortable-item","itemActiveClass","sortable-item-active","placeholderItem","Drag here","placeholderClass","placeholderStyle","wrapperClass","sortable-wrapper",3,"ngModel","itemTemplate","ngModelChange"],[1,"code-preview"],["itemClass","sortable-item","itemActiveClass","sortable-item-active","placeholderItem","Drag here","placeholderClass","placeholderStyle","wrapperClass","sortable-wrapper",3,"ngModel","ngModelChange"]],template:function(e,t){if(1&e&&(i.Dc(0,y,2,2,"ng-template",null,0,i.Ec),i.Sb(2,"div",1),i.Sb(3,"div",2),i.Sb(4,"bs-sortable",3),i.ac("ngModelChange",(function(e){return t.itemStringsLeft=e})),i.Rb(),i.Sb(5,"pre",4),i.Fc(6),i.dc(7,"json"),i.Rb(),i.Rb(),i.Sb(8,"div",2),i.Sb(9,"bs-sortable",5),i.ac("ngModelChange",(function(e){return t.itemStringsRight=e})),i.Rb(),i.Sb(10,"pre",4),i.Fc(11),i.dc(12,"json"),i.Rb(),i.Rb(),i.Rb()),2&e){var n=i.sc(1);i.Ab(4),i.ic("ngModel",t.itemStringsLeft)("itemTemplate",n),i.Ab(2),i.Hc("model: ",i.ec(7,5,t.itemStringsLeft),""),i.Ab(3),i.ic("ngModel",t.itemStringsRight),i.Ab(2),i.Hc("model: ",i.ec(12,7,t.itemStringsRight),"")}},directives:[h,o.q,o.t],pipes:[r.k],encapsulation:2}),e}(),I=n("ClAA"),R=n("y20O"),x=n("nk7K"),A=n("l3GJ"),M=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["demo-accessibility"]],decls:26,vars:0,consts:[["href","https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect"],[1,"highlighter-rouge"]],template:function(e,t){1&e&&(i.Sb(0,"p"),i.Fc(1,"You can use "),i.Sb(2,"code"),i.Fc(3,'aria-dropeffect="..."'),i.Rb(),i.Fc(4," and "),i.Sb(5,"code"),i.Fc(6,"aria-grabbed"),i.Rb(),i.Fc(7," for "),i.Sb(8,"code"),i.Fc(9,".sortable-item"),i.Rb(),i.Fc(10,". When you start drag item "),i.Sb(11,"code"),i.Fc(12,"aria-grabbed"),i.Rb(),i.Fc(13," must have "),i.Sb(14,"code"),i.Fc(15,"true"),i.Rb(),i.Fc(16," state. "),i.Sb(17,"code"),i.Fc(18,"aria-dropeffect"),i.Rb(),i.Fc(19," property is defined depending on the grabbed object."),i.Rb(),i.Sb(20,"p"),i.Fc(21,"But be careful, these attributes are "),i.Sb(22,"a",0),i.Sb(23,"code",1),i.Fc(24,"deprecated"),i.Rb(),i.Rb(),i.Fc(25,"."),i.Rb())},encapsulation:2}),e}(),F=[{name:"Usage",anchor:"usage",outlet:I.a,content:{doc:n("6k/y")}},{name:"Examples",anchor:"examples",outlet:R.a,content:[{title:"Basic",anchor:"basic",component:n("PmAR"),html:n("lWZg"),outlet:S},{title:"Complex data model",anchor:"complexDatamodel",component:n("Sxso"),html:n("Bijr"),outlet:C},{title:"Custom item template",anchor:"itemTemplate",component:n("K19f"),html:n("xiAJ"),outlet:w},{title:"Accessibility",anchor:"accessibility",outlet:M}]},{name:"API Reference",anchor:"api-reference",outlet:x.a,content:[{title:"SortableComponent",anchor:"sortable-component",outlet:A.b}]}],T=n("ybC4"),D=n("oxqd"),O=[{path:"",component:function(){function e(){this.name="Sortable",this.src="https://github.com/valor-software/ngx-bootstrap/blob/development/src/sortable",this.componentContent=F}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["sortable-section"]],decls:25,vars:4,consts:[[3,"name","src","componentContent"],[1,"prettyprint","lang-bash","prettyprinted"],[1,"pln"],[1,"pun"],[3,"content"]],template:function(e,t){1&e&&(i.Sb(0,"demo-section",0),i.Sb(1,"p"),i.Fc(2,"The "),i.Sb(3,"strong"),i.Fc(4,"sortable component"),i.Rb(),i.Fc(5," represents a list of items, with ability to sort them or move to another container via drag&drop. Input collection isn't mutated by the component, so events "),i.Sb(6,"code"),i.Fc(7,"ngModelChange"),i.Rb(),i.Fc(8,", "),i.Sb(9,"code"),i.Fc(10,"onChange"),i.Rb(),i.Fc(11," are using new collections."),i.Rb(),i.Sb(12,"p"),i.Fc(13,"The easiest way to add the sortable component to your app (will be added to the root module)"),i.Rb(),i.Sb(14,"pre",1),i.Sb(15,"span",2),i.Fc(16,"ng add ngx"),i.Rb(),i.Sb(17,"span",3),i.Fc(18,"-"),i.Rb(),i.Sb(19,"span",2),i.Fc(20,"bootstrap "),i.Rb(),i.Fc(21," --component "),i.Sb(22,"span",2),i.Fc(23,"sortable"),i.Rb(),i.Rb(),i.Nb(24,"docs-section",4),i.Rb()),2&e&&(i.ic("name",t.name)("src",t.src)("componentContent",t.componentContent),i.Ab(24),i.ic("content",t.componentContent))},directives:[T.a,D.a],styles:["\n    .sortable-item {\n      padding: 6px 12px;\n      margin-bottom: 4px;\n      font-size: 14px;\n      line-height: 1.4em;\n      text-align: center;\n      cursor: grab;\n      border: 1px solid transparent;\n      border-radius: 4px;\n      border-color: #adadad;\n    }\n\n    .sortable-item-active {\n      background-color: #e6e6e6;\n      box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n    }\n\n    .sortable-wrapper {\n      min-height: 150px;\n    }\n  "],encapsulation:2,changeDetection:0}),e}()}];n.d(t,"DemoSortableModule",(function(){return j}));var j=function(){function e(){}return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},imports:[[r.c,o.k,v.a,f.forRoot(),a.i.forChild(O)]]}),e}()},xiAJ:function(e,t,n){"use strict";n.r(t),t.default='<ng-template #itemTemplate let-item="item" let-index="index"><span>{{index}}: {{item.value}}</span></ng-template>\n\n<div class="row">\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemStringsLeft"\n      [itemTemplate]="itemTemplate"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n    <pre class="code-preview">model: {{ itemStringsLeft | json }}</pre>\n  </div>\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemStringsRight"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n    <pre class="code-preview">model: {{ itemStringsRight | json }}</pre>\n  </div>\n</div>\n\n'}}]);