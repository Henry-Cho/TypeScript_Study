{
    type ToDo = {
        title : string;
        description: string;
    }

    function display(todo: Readonly<ToDo>) {
        let yoyo: string = todo.title;
        //todo.description = "ddddd"; -> error!
    }
}