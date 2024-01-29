const { createApp } = Vue
 
  createApp({
    data() {
      return {
        newTask: '',
        message: 'La mia lista della spesa!',
        tasks: [
            'fare i compiti',
            'andare dal dottore',
            'aggiustare la tv'
        ]
      }
    },

    methods: {
        addTask() {
            if (this.newTask !== '') {
                this.tasks.push(this.newTask);
            }
            this.newTask = '';
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
}).mount('#app');
