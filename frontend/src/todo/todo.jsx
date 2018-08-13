import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.state = { description: '', list: [] }

        this.refresh()
    }
    handleAdd() {
        const description = this.state.description

        Axios.post(URL, { description }).then(resp => this.refresh())
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    refresh() {
        Axios.get(URL + '?sort=-CreatedAt')
            .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
    }

    handleRemove(todo) {
        Axios.delete(URL + '/' + todo._id)
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div className="container">
                <PageHeader name='Tarefas' small='Cadastro'> </PageHeader>
                <TodoForm
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleRemove={this.handleRemove}> </TodoForm>
                <TodoList list={this.state.list}  handleRemove={this.handleRemove}> </TodoList>
            </div>
        )
    }
}