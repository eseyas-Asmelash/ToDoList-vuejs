<template>
  <div class="box">
    <div class="columns">
      <div class="column">
        <h3 class="title is-3">
          <span v-show="!task.edit">{{ task.title }}</span>
          <input type="text" class="input" v-model="task.title" v-show="task.edit" />
        </h3>
      </div>
      <div class="column is-narrow">
        <button v-show="!task.edit" class="button is-warning" v-on:click="onEdit">Edit</button>
        <button v-show="task.edit" class="button is-success" v-on:click="onSave">Save</button>
      </div>
      <div class="column is-narrow">
        <button class="button is-danger" v-on:click="onDelete">delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",

  props: {
    task: {
      type: Object,
      edit: false,
      required: true,
      default: () => {}
    }
  },
  methods: {
    onDelete() {
      this.$emit("Del", {
        task: this.task
      });
    },
    onEdit() {
      this.$emit("Edi", {
        task: this.task
      });
    },
    onSave() {
      this.$emit("Save", {
        task: this.task
      });
    }
  }
};
</script>
