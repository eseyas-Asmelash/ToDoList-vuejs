<template>
  <form class="box" v-on:submit.prevent="onSubmitForm">
    <div class="field">
      <label class="label">Task:</label>
      <div class="control">
        <input class="input" type="text" v-model="title" required placeholder="Task Title"/>
      </div>
    </div>
    <button class="button is-primary" type="submit">Add Task</button>
  </form>
</template>

<script>
export default {
  name: "AddTask",

  data() {
    return {
      title: ""
    };
  },
  methods: {
    onSubmitForm() {
      this.$emit("AddTask", {
        title: this.title,
        edit: false
      });
      this.title = "";
    }
  }
};
</script>
