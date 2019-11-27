import { TaskList } from "../components/taskList";
import { InputForm } from "../components/inputForm";
import { UserForm } from "../components/userForm";
import { Task } from "../components/task";
import { getToDo, deleteToDo } from "../utilities/todo-service";
import { addToDo } from "../utilities/todo-service";

class Main {
    constructor() {
        let inputForm = new InputForm();
        let taskList = new TaskList();
        let username = new UserForm();

        this.node = document.createElement('main');
        this.node.appendChild(username.getNode());
        this.node.appendChild(inputForm.getNode());
        this.node.appendChild(taskList.getNode());
        
        inputForm.setBtnAddOnClick(function () {
            let text = inputForm.txtTitle.value;
            text = text.trim();

            if (text == '') return;

            let task = new Task(text);
            task.setBtnDeleteClickEvent(() => {
                deleteToDo(username.username.value, text).then( () => {
                task.deleteItem();
            });
        });
            // taskList.addTask(task);

            addToDo(username.username.value, text).then( () => {
                let task = new Task(text);
                task.setBtnDeleteClickEvent(() => {
                    task.deleteItem();
                })
                taskList.addTask(task);
            });

            username.selectBtnOnClick(function () {
                getToDo(username.username.value).then(data => {
                    let items = data.items;
                    items.forEach(item => {
                        let task = new Task(item.title);
                        task.setBtnDeleteClickEvent(() => {
                            task.deleteItem();
                        });
                        taskList.addTask(task);
                    });
                });
            });
        });
        

    }

    getNode() {
        return this.node;
    }

}

export {
    Main
}