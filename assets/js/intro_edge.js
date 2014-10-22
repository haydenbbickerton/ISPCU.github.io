
(function(compId){"use strict";var _=null,y=true,n=false,x11='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',e12='${Ellipse2Copy2}',x1='5.0.0',e13='${tiny_dots}',x3='rgba(0,0,0,0)',lf='left',g='image',cl='clip',e10='${Ellipse2Copy9}',e14='${Ellipse4Copy8}',e18='${Ellipse2Copy}',o='opacity',e17='${big_dots}',x8='rgba(255,255,255,1)',tp='top',e16='${Ellipse2Copy10}',e15='${Ellipse4Copy7}',x2='5.0.0.375',i='none';var g6='google4.svg',g4='facebook3.svg',g7='ISP2.svg',g5='netflix3.svg',g9='house.svg';var im='images/intro/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x1,b:x2,stf:i,cg:i,rI:n,cn:{dom:[{id:'facebook3',t:g,r:['1186px','119px','307px','343px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'netflix3',t:g,r:['947px','120px','306px','343px','auto','auto'],f:[x3,im+g5,'0px','0px']},{id:'google4',t:g,r:['706px','119px','306px','344px','auto','auto'],f:[x3,im+g6,'0px','0px']},{id:'ISP2',t:g,r:['178px','144px','618px','396px','auto','auto'],f:[x3,im+g7,'0px','0px']},{id:'tiny_dots',t:'group',r:['334px','416px','134','5','auto','auto'],c:[{id:'Ellipse4Copy8',t:'ellipse',r:['146px','-4px','12px','12px','auto','auto'],overflow:'visible',cl:'rect(0px 0px 12px 0px)',br:["50%","50%","50%","50%"],o:0,f:[x8],s:[0,"rgb(0, 0, 0)",i],tf:[[],[],[],['0.39','0.39']]},{id:'Ellipse4',t:'ellipse',r:['126px','-4px','12px','12px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i],tf:[[],[],[],['0.39','0.39']]},{id:'Ellipse4Copy',t:'ellipse',r:['106px','-4px','12px','12px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i],tf:[[],[],[],['0.39','0.39']]},{id:'Ellipse4Copy2',t:'ellipse',r:['86px','-4px','12px','12px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i],tf:[[],[],[],['0.39','0.39']]},{id:'Ellipse4Copy3',t:'ellipse',r:['66px','-4px','12px','12px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i],tf:[[],[],[],['0.39','0.39']]},{id:'Ellipse4Copy4',t:'ellipse',r:['46px','-4px','12px','12px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i],tf:[[],[],[],['0.39','0.39']]},{id:'Ellipse4Copy5',t:'ellipse',r:['26px','-4px','12px','12px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i],tf:[[],[],[],['0.39','0.39']]},{id:'Ellipse4Copy6',t:'ellipse',r:['6px','-4px','12px','12px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i],tf:[[],[],[],['0.39','0.39']]},{id:'Ellipse4Copy7',t:'ellipse',r:['-14px','-4px','12px','12px','auto','auto'],cl:'rect(0px 12px 12px 0px)',br:["50%","50%","50%","50%"],o:1,f:[x8],s:[0,"rgb(0, 0, 0)",i],tf:[[],[],[],['0.39','0.39']]}]},{id:'house',t:g,r:['1px','206px','197px','255px','auto','auto'],f:[x3,im+g9,'0px','0px']},{id:'big_dots',t:'group',r:['465px','412px','127','12','auto','auto'],tf:[[],[],[],[],['1%']],c:[{id:'Ellipse2Copy2',t:'ellipse',r:['152px','0px','12px','12px','auto','auto'],cl:'rect(0px 0px 12px 0px)',br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'Ellipse2Copy',t:'ellipse',r:['132px','0px','12px','12px','auto','auto'],cl:'rect(0px 0px 12px 0px)',br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'Ellipse2',t:'ellipse',r:['112px','0px','12px','12px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'Ellipse2Copy5',t:'ellipse',r:['92px','0px','12px','12px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'Ellipse2Copy6',t:'ellipse',r:['72px','0px','12px','12px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'Ellipse2Copy7',t:'ellipse',r:['52px','0px','12px','12px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'Ellipse2Copy8',t:'ellipse',r:['32px','0px','12px','12px','auto','auto'],br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'Ellipse2Copy9',t:'ellipse',r:['12px','0px','12px','12px','auto','auto'],cl:'rect(0px 12px 12px 0px)',br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'Ellipse2Copy10',t:'ellipse',r:['-8px','0px','12px','12px','auto','auto'],cl:'rect(0px 12px 12px 12px)',br:["50%","50%","50%","50%"],f:[x8],s:[0,"rgb(0, 0, 0)",i]}]}],style:{'${Stage}':{isStage:true,r:['null','null','100%','525px','auto','auto'],overflow:'hidden',f:[x8]}}},tt:{d:1000,a:y,l:{"Label 1":1000},data:[["eid32",cl,545,319,"linear",e10,[0,12,12,0],[0,12,12,12],{vt:x11}],["eid33",cl,516,303,"linear",e12,[0,0,12,0],[0,12,12,0],{vt:x11}],["eid19",lf,0,1000,"linear",e13,'354px','334px'],["eid29",cl,706,294,"linear",e14,[0,0,12,0],[0,12,12,0],{vt:x11}],["eid28",cl,192,261,"linear",e15,[0,12,12,0],[0,12,12,12],{vt:x11}],["eid37",cl,481,9,"linear",e15,[0,12,12,12],[0,12,12,0],{vt:x11}],["eid50",tp,1000,0,"linear",e13,'416px','416px'],["eid10",cl,59,308,"linear",e16,[0,12,12,0],[0,12,12,12],{vt:x11}],["eid7",lf,0,1000,"linear",e17,'505px','465px'],["eid49",tp,1000,0,"linear",e17,'412px','412px'],["eid46",o,0,0,"linear",e14,'0','0'],["eid45",o,679,11,"linear",e14,'0','1'],["eid16",cl,18,305,"linear",e18,[0,0,12,0],[0,12,12,0],{vt:x11}],["eid40",o,462,9,"linear",e15,'1','0']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-14686906");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){this.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-14686906");
