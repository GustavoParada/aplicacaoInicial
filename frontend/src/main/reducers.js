import {
    combineReducers
} from 'redux'

const rootReducers = combineReducers({

    todo: () => ({
        description: 'Ler livro',
        list: [{
                _id = 1,
                description: 'Pagar o cartao',
                done: true
            },
            {
                _id = 2,
                description: 'Reunião as 10',
                done: false
            },
            {
                _id = 3,
                description: 'Consulta médica terça depois do almoço',
                done: false
            }
        ]
    })
})

export default rootReducer