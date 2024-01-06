<template>
  <div class="my-3">
    <!-- {{ newTodo.title }} -->
  <b-input-group class="mt-3">
    <b-form-input v-model="newTodo.title"></b-form-input>
    <b-input-group-append>
      <b-button variant="primary" @click="addTodo(newTodo)">Button</b-button>
    </b-input-group-append>
  </b-input-group>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            newTodo: {
                title: ''
            }
        }
    },
    methods: mapActions(["addTodo"]),
}
</script>

<style>

</style>