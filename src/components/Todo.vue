<template lang="">
    <main>
        <todo-form
            @create="createTodo"
        />
        <h2>{{ todoName }}</h2>
        <div>
            <todo-list
                v-if="todos.length" 
                :todos="todos"
                @remove="removeTodo"
                @update="updateTodo"
            />
            <h2 v-else>Todo has not founded!</h2>
        </div>
    </main>
</template>
<script>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

export default {
    components: {
        TodoList, TodoForm,
    },
    data() {
        return {
            todoName: 'test1',
            todos: [],

        }
    },
    methods: {
        createTodo(todo) {
            this.todos.push(todo);
        },
        removeTodo(todo){
            console.log('sds')
            this.todos = this.todos.filter(t => t.id !== todo.id);
        },
    },


}
</script>
<style lang="">
    
</style>