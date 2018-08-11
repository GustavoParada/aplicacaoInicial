import React from 'react'

export default props => (
    <nav className='navbar navbar-expand-lg  navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
            <i className='fa fa-calendar-check-o'> Todo App
                    </i>
        </a>
        <ul className='nav navbar-nav'>
            <li className="nav-item active"><a className="nav-link" href="#/todos">Tarefas</a></li>
            <li className="nav-item "><a className="nav-link" href="#/todo">Sobre</a></li>
        </ul>
    </nav>
)