new Vue({
    el: '#tasklist',
    data: {
        title: 'to do list',
        tasks: [
            { name: 'Today : International meeting' },
            { name: 'Tommorow :Read a book' },
            { name: 'Daily : Event Join' },
        ]
    },
    methods: {
        newItem: function() {
            if (!this.tasks.name) {
                return
            }

            this.tasks.push({
                name: this.tasks.name,
                del: ''
            });
            this.tasks.name = "";
        },
        delItem: function(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1)
        }
    }
})