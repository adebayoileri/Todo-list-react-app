(this["webpackJsonptodo-list-react-app"]=this["webpackJsonptodo-list-react-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),l=a.n(r),i=a(17),c=a(5),d=a(6),s=a(8),u=a(7),p=a(9),m=a(13),f=a(10);function b(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{style:h},"About Page For Todo List App v1.0.0"),o.a.createElement("p",{style:y},"App was developed by Adebayo Ilerioluwa"),o.a.createElement("p",{style:y},"CC: Brad Traversy React 2019 Crash Course"))}var h={textAlign:"center",color:"#39f"},y={textAlign:"center",margin:"1em"},g=(a(29),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",margin:"10px",border:"1px solid #39f",borderRadius:"4px",color:"#fff",backgroundColor:"#6dd5ed",textDecoration:a.props.todo.done?"line-through":"none"}},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," "," "," ",a,o.a.createElement("button",{title:"Remove todo",onClick:this.props.delTodo.bind(this,t),style:v}," \xd7 "))}}]),t}(n.Component)),v={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",cursor:"pointer",borderRadius:"50%",float:"right"},E=g,j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(E,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})}))}}]),t}(o.a.Component),O=a(21),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},a.onSubmit=function(e){e.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a.onChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{style:{display:"flex"},onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Type  In A New Todo",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Add New Todo +",style:{flex:"1"},className:"btn"}))}}]),t}(n.Component);var k={background:"#6dd5ed",color:"#fff",textAlign:"center",padding:"10px"},C={fontSize:"24px",color:"#ffff",margin:"1em"},A=function(){return o.a.createElement("header",{style:k},o.a.createElement("h1",null,"TodoList App"),o.a.createElement(m.b,{style:C,to:"/"},"Home")," ",o.a.createElement(m.b,{style:C,to:"/about"},"About"))};function T(){return o.a.createElement("footer",{style:S},"App developed by Adebayo Ilerioluwa",o.a.createElement("p",null,o.a.createElement("a",{href:"github.com/adebayoileri"},"Github")))}var S={background:"linear-gradient(to right, #4286f4, #6dd5ed)",padding:"1em",width:"100%",position:"fixed",textAlign:"center",left:0,bottom:0},w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[{id:1,title:"Wash all plates",done:!1},{id:2,title:"Play PS4",done:!1},{id:3,title:"Read books on reactjs",done:!1}]},a.markComplete=function(e){a.setState({todos:a.state.todos.map((function(t){return t.id===e&&(t.done=!t.done),t}))})},a.delTodo=function(e){a.setState({todos:Object(i.a)(a.state.todos.filter((function(t){return t.id!==e})))})},a.addTodo=function(e){var t={id:a.state.todos.length+1,title:e,done:!1};a.setState({todos:[].concat(Object(i.a)(a.state.todos),[t])})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(A,null),o.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{addTodo:e.addTodo}),o.a.createElement(j,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),o.a.createElement(f.a,{path:"/about",component:b})),o.a.createElement(T,null)))}}]),t}(o.a.Component);l.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e8e8f16e.chunk.js.map