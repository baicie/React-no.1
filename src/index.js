import React from 'react';
import ReactDOM from 'react-dom';
// import Control from './components/Control.js';
// import Demo01 from './pages/Demo01.js';
// import Home from './pages/Home.js';
// import App from './pages/App'
// import Hoc,{Detail} from './pages/Hoc';
// import Hook from './pages/Hook.js';
// import $, { readyException } from 'jquery';
import TodoList from './pages/TodoList';

ReactDOM.render(
  <TodoList/>,
  document.getElementById('root')
);

//const List = (props)=>{
//   return <ul>{
//    props.data.map(
//       (item) => <li>{item.title}</li>
//       )
//   }
//   </ul>
// }

// class Home extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       data:[]
//     }

//     fetch('https://cnodejs.org/api/v1/topics')
//     .then(res=>res.json())
//     .then(({data})=>{
//       this.setState({data})
//     })
//         // this.handleClick=this.handleClick.bind(this);
//   }

//   handleClick=(item)=>{
//     fetch('https://cnodejs.org/api/v1/topics?page=' + item)
//     .then(res=>res.json())
//     .then(({data})=>{
//       this.setState({data})
//     })
//   }

//   render(){
//   const btns =[1,2,3,4,5];
//     const {data}=this.state;
//     return  <div>
//       {
//         btns.map((item)=><button key={item} onClick={()=>this.handleClick(item)}>{item}</button>)
//       }
//       <List data={data}/>
//     </div>
    
//   }
// }

// function App(props){
// //函数组件 UI组件（展示），木偶组件
//   const {title,id}=props;
//   return <div>
//   <h1>App组件内容</h1>
//     <div>{title}</div>
//     <div>{id}</div>
//   </div>
// }
// //智能组件
// class Demo extends React.Component{
//   constructor(){  
//     super();
//     //声明状态
//     this.state={
//       name:new Date().toLocaleString()
//     }
//     setInterval(() => {
//       this.setState({name:new Date().toLocaleString()})
//     }, 1000);
//   }
//   render(){
//     return <div>
//       <App title={this.state.name} id='app'/>
//       <div>name:{this.state.name}</div>
//     </div>
//   }
// }

// setInterval(() => {
//   let ele = <h1 id='title' className='tit'>
//   <div>当前时间</div>
//   {new Date().toLocaleString()}
//   </h1>;

//   ReactDOM.render(
//   ele,
//   document.getElementById('root')
// );
// }, 1000);

  // 1、原生JS，DOM操作（jQ）
  // 2、React：开发效率高、性能高
  // 3、环境搭建、创建一个项目、运行
  // 4、JSX语法

// 将jsx对象渲染到DOM中
// let ReactDOM = {
//   render(eleObj,container){
//     // 解构
//     const { type,props } = eleObj;
//     // 创建第一层节点
//     let ele = document.createElement(type);
//     // 遍历属性对象，将属性添加到第一层节点对象上
//     for (const prop i props) {
//       if(prop == 'children'){
//         if(typeof props.children =='string'){
//             const txtNode = document.createTextNode(props.children);
//             ele.appendChild(txtNode);
//             break;
//         }
//         // 将第一层节点对象的子元素添加进去
//         props.children.forEach( child => {
//           if(typeof child == 'string'){
//             const txtNode = document.createTextNode(child);
//             ele.appendChild(txtNode);
//           }else{
//             ReactDOM.render(child,ele);
//           }
//         })
//       }else{
//         ele[prop] = props[prop];
//       }
//     }

//     // 将第一层DOM节点添加到container中
//     container.appendChild(ele);
//   }
// }

// let ele = React.createElement(
//   'h1',
//   {id:'title'},
//   React.createElement('div',{},'hello'),
//   'react'
// )
