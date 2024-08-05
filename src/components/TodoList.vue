<template lang="">
    <section>
        <todo-item
            :todo="todo"
            v-for="todo in todos"
            :key="todo.id"
            @remove="$emit('remove', todo)"
        />
    </section>
</template>
<script>
import TodoItem from './TodoItem.vue';

export default {
    components: {
        TodoItem,
    },
    props: {
        todos: {
            type: Array,
            required: true,
        },
    },
    methods: {

    },
}
</script>
<style lang="">
    
</style>