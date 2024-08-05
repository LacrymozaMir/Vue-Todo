<template lang="">
    <article>
        <div>
            <div 
                v-if="!isEditing"
                class="todo__content"
            >
            <h4>{{todo.title}}</h4>
            <input 
                type="checkbox"
                v-model="todo.completed"
            />
            </div>
            <input 
                type="text" 
                :value="todo.title"
                @input="event => todo.title = event.target.value"
                v-else
            /> 
        </div>
        <div class="todo__btns">
            <button
                @click="$emit('remove', todo)"
                style="margin: 0 8px 0 0"
            >
                X
            </button>
            <button
                v-if="!isEditing"
                @click="isEditing = true"
            >
                edit
            </button>
            <button v-else @click="isEditing = false">
                OK
            </button>
        </div>
    </article>
</template>
<script>

export default {
    props: {
        todo: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            isEditing: false,
        }
    },
    methods: {

    }
}
</script>
<style scoped>
    article {
        display: flex;
        border: 1px solid purple;
        align-items: center;
        margin: 16px 0;
        padding: 8px;
        justify-content: space-between;
    }

    .todo__content {
        display: flex;
        font-size: 18px;
    }

    .todo__btns {
        
    }
    
</style>