<template lang="">
    <form @submit.prevent>
        <input 
            type="text" 
            v-model="todo.title"
            placeholder="Task name"
        >
        <button
            @click="createTodo"
        >
        Create</button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            todo: {
                title: '',
                completed: false,
            }
        }
    },
    methods: {
        createTodo(){
            if (this.todo.title.trim() === '') return;
            this.todo.id = Date.now();
            this.$emit('create', this.todo);
            console.log(this.todo);
            this.todo = {
                title: '',
                completed: false,
            }
        }
    }
    
}
</script>
<style lang="">
    
</style>