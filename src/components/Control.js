import React, { Component } from 'react';

class Control extends Component {
    constructor(){
        super();
        this.state = {
            inpValue: '',
            todos:[]
        }
    }
    handleChange = (e)=>{
        this.setState({inpValue:e.target.value})
    }
    componentDidMount(){
        // this.input.focus();
        let todos = localStorage.getItem('todos');
        if(todos){
            this.setState({
                todos: JSON.parse(todos)
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem(
            'todos',
            JSON.stringify(this.state.todos)
        )
    }
    addTodo = ()=>{
        if(this.state.inpValue==''){
            return;
        }
        this.setState({
            todos: [
                {
                    title: this.state.inpValue,
                    done: false
                },
                ...this.state.todos
            ]
        })
        this.setState({inpValue:''})

    }
    delTodo = (idx)=>{
        this.setState({
            todos: this.state.todos.filter((item,index)=>index!=idx)
        });
    }
    toggle = (index)=>{
        let newTodos = JSON.parse(JSON.stringify(this.state.todos))
        newTodos[index].done = !newTodos[index].done;
        this.setState({
            todos: newTodos
        })
    }
    renderTodos = (done)=>{
        return this.state.todos.map((todo,idx)=>{
            if(done==todo.done){
                return <li>
                    <input 
                        onClick={()=>this.toggle(idx)}
                        checked={done} 
                        type="checkbox"
                    />
                    <span dangerouslySetInnerHTML={{__html:todo.title}}></span>
                    <button 
                        onClick={()=>this.delTodo(idx)}
                    >
                        删除
                    </button>
                </li>
            }
        })
    }
    render() {
        
        const {todos,inpValue} = this.state;
        let arr1 = todos.filter( item => !item.done)
        return (
            <div className="box">
                <label htmlFor="inp">todolist</label>
                <input 
                    id='inp'
                    ref={inp=>this.input = inp}
                    value={inpValue} 
                    type="text" 
                    onChange={this.handleChange}
                />
                <button onClick={this.addTodo}>添加</button>
                <h2>正在进行{arr1.length}</h2>
                <ul>
                    {this.renderTodos(false)}
                </ul>
                <h2>已经完成</h2>
                <ul style={{color:3<2?'red':'green'}}>
                    {this.renderTodos(true)}
                </ul>
                
            </div>
        );
    }
}

export default Control;