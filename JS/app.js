
const todoList = [
    {
        todo: "Clone the repo",
        status: "started"
    },
    {
        todo: "make a commit",
        status: "completed"
    },
    {
        todo: "Submit the repo link",
        status: "completed"
    }
]
const completedTodos = []

for (const element in todoList){
    if (todoList[element].status === "completed"){
        completedTodos.push(todoList[element])
    }
}
console.log(completedTodos)

const [{todo: a, status:ab}, {todo:b, status:ba}] = completedTodos

for (const item in [{todo: a, status:ab}, {todo:b, status:ba}]){
    console.log([{todo: a, status:ab}, {todo:b, status:ba}][item].todo)
}


