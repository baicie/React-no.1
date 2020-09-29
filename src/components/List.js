import React, { Component } from 'react'

export default class List extends Component {
  render() {
    let arr1 = this.props.todos.filter(item => item.done)
    let arr2 = this.props.todos.filter(item => !item.done)
    return <div>
      <h2>正在进行{arr2.length}</h2>
      <ul>
        {this.props.renderTodos(false)}
      </ul>
      <h2>已经完成{arr1.length}</h2>
      <ul>
        {this.props.renderTodos(true)}
      </ul>
    </div>
  }
}