const inpTodo = document.querySelector('#todo')
const addTodo = document.querySelector('#addTodo')
const todoItems = document.querySelector('.todoItems')

let state = {
    todos: [],
}

let title = ''

inpTodo.addEventListener('keyup', (e) => {
    title = e.target.value
})

let counter = 0

addTodo.addEventListener('click', (e) => {
    e.preventDefault()

    let newTodo = {
        id: counter,
        title,
    }
    let todoHtml = `
    <div class="item">
    <h1 class="itemCount" >${newTodo.id}</h1>
    <p class="itemText">${newTodo.title}</p>
  </div>
    `

    todoItems.insertAdjacentHTML('beforeend', todoHtml)

    state.todos.push(newTodo)

    counter++
    newTodo.id = counter
    inpTodo.value = ''
})