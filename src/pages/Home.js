import React from 'react';
import List from '../components/List.js';
import Buttons from '../components/Btns.js';

class Home extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    }

    fetch('https://cnodejs.org/api/v1/topics')
    .then(res=>res.json())
    .then(({data})=>{
      this.setState({data})
    })
        // this.handleClick=this.handleClick.bind(this);
  }



  handleClick=(item)=>{
    fetch('https://cnodejs.org/api/v1/topics?page=' + item)
    .then(res=>res.json())
    .then(({data})=>{
      this.setState({data})
    })
  }

  render(){
    const {data}=this.state;
    return  <div>
        <Buttons handleClick={this.handleClick}/>
      <List data={data}/>
    </div>
    
  }
}
//命名导出
//默认导出(只能导出一个)
export default Home;