export let tasks = [
    {
        description: "Comprar pan",
        completed: true
    },
    {
        description: "Comprar chorizos",
        completed: false
    },
];

export function getTasks () {
    return tasks;
}

export function setTasks (newTasks) {
    tasks = newTasks;
}