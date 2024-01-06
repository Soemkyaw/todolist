<template>
  <div class="row">
    <div class="col-md-4">
      <select class="form-select" v-model="limit" @change="filterTodos(limit)">
        <option value="" actived>Select limit option</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="100">100</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            limit : null
        }
    },
    methods: {
        ...mapActions(['filterTodos'])
    },
    mounted() {
        if (!this.limit) {
            this.limit = ""
        }
    }
};
</script>

<style></style>
