import React from 'react'
import IconButton from '../template/iconButton'
export default props => {

    const renderRows = () => {

        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : 'markAsUnDone'}>
                    {todo.description}
                </td>
                <td className='todoActions'>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)} />
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsUnDone(todo)} />
                    <IconButton style='danger' icon='trash' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)} />
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