(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{102:function(e,a,t){"use strict";t.r(a),function(e){var c=t(0),l=t.n(c),n=t(205),i=t(211),o=t(232),r=t(234),m=t(233),s=t(27),d=t(21),u=Object(n.a)((function(e){return{root:{display:"flex",flexDirection:"column",width:"1140px",margin:"0 auto"},title:{},faculty:{width:"100%",margin:"0 auto"},facultyItem:{},facultyItemItem:{padding:"10px",height:"180px",width:"23%",display:"inline-block",float:"left"},asso_faculty:{width:"100%"},PhD_Candidate:{width:"100%",display:"flex",flexDirection:"column"},master_Candidate:{width:"100%",display:"flex",flexDirection:"column"},img:{width:"100px",height:"100px"},card_root:{display:"flex",height:"100%"},details:{flexDirection:"column",position:"relative",float:"right",margin:"0 auto"},content:{flex:"1 0 auto",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0px",paddingTop:"20px",height:"50%",margin:"auto","& a":{fontSize:"16px"}},cover:{width:"45%"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},contact:{width:"100%",display:"flex",justifyContent:"space-around",backgroundColor:"#303440"},contact_item:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"}}}));a.default=function(){var a=u(),t=Object(s.useRouteData)(),c=t.people,n=t.images,p=t.imageList,f=c.Faculty;console.log(f);for(var g=c.Master,v=c.Associated_Faculty,E={},h=0;h<p.length;++h){var y=e.from(n[p[h].split("/")[p[h].split("/").length-1]],"binary");E[p[h].split("/")[p[h].split("/").length-1]]=y}return l.a.createElement("div",{className:a.root},l.a.createElement("div",{className:a.title},l.a.createElement("div",null,l.a.createElement(i.a,{gutterBottom:!0,variant:"h4",style:{color:"#333333",paddingTop:"20px"},align:"center"},"People"))),l.a.createElement("div",{className:a.faculty},l.a.createElement("div",null,l.a.createElement(i.a,{gutterBottom:!0,variant:"h5",style:{color:"#333333"}},"Faculty")),l.a.createElement("div",{className:a.facultyItem},f.map((function(e){return l.a.createElement("div",{className:a.facultyItemItem,key:e.id},l.a.createElement(o.a,{className:a.card_root},l.a.createElement(m.a,{className:a.cover,image:"data:image/jpg;charset=utf-8;base64,".concat(E[e.account]),title:"Live from space album cover"}),l.a.createElement("div",{className:a.details},l.a.createElement(r.a,{className:a.content},l.a.createElement("a",{href:"/people/user/".concat(e.account)},e.Eng_name),l.a.createElement("br",null),l.a.createElement("a",null,e.name)),l.a.createElement("div",{style:{fontSize:"14px",margin:"0 auto",color:"#808080"}},e.job_title),l.a.createElement("div",{className:a.controls}))))})))),l.a.createElement("div",{className:a.asso_faculty},l.a.createElement("div",null,l.a.createElement(i.a,{gutterBottom:!0,variant:"h5",style:{color:"#333333",paddingTop:"20px"}},"Master")),l.a.createElement("div",{className:a.facultyItem},g.map((function(e){return l.a.createElement("div",{className:a.facultyItemItem,key:e.id},l.a.createElement(o.a,{className:a.card_root},l.a.createElement(m.a,{className:a.cover,image:"data:image/jpg;charset=utf-8;base64,".concat(E[e.account]),title:"Live from space album cover"}),l.a.createElement("div",{className:a.details},l.a.createElement(r.a,{className:a.content},l.a.createElement(i.a,{component:"h5",variant:"h5"},l.a.createElement(d.a,{to:"/people/user/".concat(e.account,"/")},e.name)),l.a.createElement(i.a,{variant:"subtitle1",color:"textSecondary"},e.name)),l.a.createElement("div",{className:a.controls}))))})))),l.a.createElement("div",{className:a.asso_faculty},l.a.createElement("div",null,l.a.createElement(i.a,{gutterBottom:!0,variant:"h5",style:{color:"#333333"}},"Associated Faculty")),l.a.createElement("div",{className:a.facultyItem},v.map((function(e){return l.a.createElement("div",{className:a.facultyItemItem,key:e.id},l.a.createElement(o.a,{className:a.card_root},l.a.createElement(m.a,{className:a.cover,image:"data:image/jpg;charset=utf-8;base64,".concat(E[e.account]),title:"Live from space album cover"}),l.a.createElement("div",{className:a.details},l.a.createElement(r.a,{className:a.content},l.a.createElement(i.a,{component:"h5",variant:"h5"},l.a.createElement(d.a,{to:"/people/user/".concat(e.account,"/")},e.name)),l.a.createElement(i.a,{variant:"subtitle1",color:"textSecondary"},e.name)),l.a.createElement("div",{className:a.controls}))))})))))}}.call(this,t(225).Buffer)}}]);