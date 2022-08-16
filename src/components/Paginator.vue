<template>
    <div>
        // make pagination button clickable
        <button
            class="btn btn-primary"
            v-on:click="goToPage(page - 1)"
            v-if="page > 1"
        >
            Previous
        </button>
        <button
            class="btn btn-primary"
            v-on:click="goToPage(page + 1)"
            v-if="page < totalPages"
        >
            Next
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>