import React, { Component } from 'react'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            data:''
        }
    }

    handlChange=(e)=>{
        this.setState({inpValue:e.target.value})
    }



    render() {
        return (
            <div>
                 <ul>
                    <li title={this.state.inpValue}>{this.state.inpValue}</li>
                </ul>
            </div>
        )
    }
}
