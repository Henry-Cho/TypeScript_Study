{
    type ToDo = {
        title : string;
        description: string;
    }

    function updateToDo(todo: ToDo, fieldToUpdate: Partial<ToDo>) : ToDo {
        return {...todo, ...fieldToUpdate};
    }

    const todo : ToDo = {
        title: "Learn TypeScript",
        description: "From Ellie"
    }

    console.log(updateToDo(todo, {title: "Learn Java"}));
}