const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "La tua Lista Attività",
            newTask: "",
            tasks: [
                {
                    text: 'fare i compiti',
                    done: false,
                },
                {
                    text: 'andare dal medico',
                    done: false,
                }
            ]
        };
    },
    methods: {
        addTask() {
            if (this.newTask!== '') {
                this.tasks.unshift({ text: this.newTask, done: false });
            }
            this.newTask = '';
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        toggleTaskStatus(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    }
}).mount('#app');