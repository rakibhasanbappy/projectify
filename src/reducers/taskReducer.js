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
            const newTasks = tasks.filter((task) => task.category !== action.payload.type);
            newTasks.push(...action.payload.sortedTask);
            return newTasks;
        }
        default:
            return tasks;
    }

}