export default function taskReducer(tasks, action) {

    switch (action.type) {
        case "ADD_TASK":{
            const newTasks = [...tasks, action.payload];
            newTasks.sort(function(a,b){
                return new Date(b.date) - new Date(a.date);
              });
            return newTasks;
        }

        case "DELETE_TASK":
            return tasks.filter((task) => task.id !== action.payload);

        case "UPDATE_TASK":{
            const newTasks = tasks.map((task) =>
                task.id === action.payload.id ? action.payload : task
            );
            newTasks.sort(function(a,b){
                return new Date(b.date) - new Date(a.date);
              });
            return newTasks;
        }

        case "SORT_TASKS":{
            // get the specific type tasks
            const filteredTasks = tasks.filter((task) => task.category === action.payload.type);
            // sort the tasks based on date
            const sortedTask = [...filteredTasks].sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
            });
            const newTasks = tasks.filter((task) => task.category !== action.payload.type);
            newTasks.push(...sortedTask);
            return newTasks;
        }
        default:
            return tasks;
    }

}