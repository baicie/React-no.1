import React from 'react'
import Context from './Context'
import Demo01 from './Demo01';
import {render} from 'react-dom';
import Demo02 from './Demo02';

console.log(Context);
class App extends React.Component{
    constructor(){
        super();
        this.state ={
            data:['hello','context'],
        }
    }

    changeData = (newData)=>{
        this.setState({data:[...this.state.data,newData]})
    }
    render(){
        return(
            <Context.Provider value={{
                data:this.state.data,
                changeData:this.changeData
            }}>
                <Demo01/>
            </Context.Provider>
        )
    }
}

export default App