import React, { Component } from 'react'
import Input from '../components/Input.js';
import List from '../components/List.js';

export default class TodoList extends Component {
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
    addTodo = ()=>{//现在的问题是每输入就会存储，而不是等我点击
    console.log('!!!!!!!!!!!!');
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
                    <input onClick={()=>this.toggle(idx)} checked={done} type="checkbox"/>
                    <span dangerouslySetInnerHTML={{__html:todo.title}}></span>
                    <button onClick={()=>this.delTodo(idx)}>删除</button>
                </li>
            }
        })
    }
    render() {
        const { todos, inpValue} = this.state;
        return (
            <div className="box">
                <Input inpValue={inpValue} handleChange={this.handleChange} addTodo={this.addTodo}/>
                <List todos={todos} renderTodos={this.renderTodos}/>
            </div>
        )
    }
}
