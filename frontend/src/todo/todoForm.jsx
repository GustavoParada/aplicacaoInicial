import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }
    keyHandler(e) {

        const { add, search, description, clear } = this.props;

        if (e.key === 'Enter') {
            if (e.shiftKey) {
                search()
            }
            else {
                add(description);
            }
        }
        if (e.key === 'Escape') {
            this.props.clear();
        }
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const { add, search, description, clear } = this.props;
        return (
            <div role='form' className='todoForm' >
                <div className='row'>
                    <Grid cols='12 9 10'>
                        <input
                            id='description'
                            className='form-control'
                            placeholder='Adicione uma tarefa'
                            onChange={this.props.changeDescription}
                            value={this.props.description}
                            onKeyUp={this.keyHandler}
                        >
                        </input>

                    </Grid>
                    <Grid cols='12 3 2'>
                        <IconButton style='primary' icon='plus' onClick={() => add(description)}></IconButton>
                        <IconButton style='info' icon='search' onClick={() => search()}></IconButton>
                        <IconButton style='default' icon='close' onClick={() => clear()}></IconButton>
                    </Grid>
                </div>
            </div >
        )
    }
}
const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)