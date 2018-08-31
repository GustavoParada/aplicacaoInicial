import React from 'react'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { markAsDone, markAsPeding, remove } from './todoActions'

const todoList = props => {

    const renderRows = () => {

        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : 'markAsUnDone'}>
                    {todo.description}
                </td>
                <td className='todoActions'>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)} />
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPeding(todo)} />
                    <IconButton style='danger' icon='trash' hide={!todo.done}
                        onClick={() => props.remove(todo)} />
                </td>
            </tr>
        ))
    }
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th> Descrição </th>
                        <th> Ações </th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = (dispatch) => bindActionCreators({ markAsDone,markAsPeding, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(todoList)