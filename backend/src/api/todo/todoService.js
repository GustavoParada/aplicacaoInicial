const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
//new vai trazer o objeto atualizado
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo