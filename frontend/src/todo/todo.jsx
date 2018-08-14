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
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsUnDone = this.handleMarkAsUnDone.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.state = { description: '', list: [] }

        this.refresh()
    }
    handleAdd() {
        const description = this.state.description

        Axios.post(URL, { description }).then(resp => this.refresh())
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    refresh(description = '') {
        const serach = description ? '&description__regex=' + description : '';
        Axios.get(URL + '?sort=-CreatedAt' + serach)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    handleClear() {
        this.refresh()
    }

    handleRemove(todo) {
        Axios.delete(URL + '/' + todo._id)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        Axios.put(URL + '/' + todo._id, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsUnDone(todo) {
        Axios.put(URL + '/' + todo._id, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    render() {
        return (
            <div className="container">
                <PageHeader name='Tarefas' small='Cadastro'> </PageHeader>
                <TodoForm
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                > </TodoForm>
                <TodoList list={this.state.list} handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsUnDone={this.handleMarkAsUnDone}
                >
                </TodoList>
            </div>
        )
    }
}