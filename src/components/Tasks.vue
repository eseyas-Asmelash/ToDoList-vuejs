<template>
  <div>
    <h3 class="title">My ToDo List</h3>
    <task v-for="task in tasks" v-bind:key="task.id" v-bind:task="task"
     v-on:Del="onDeleteTask" v-on:Edi="onEditTask" v-on:Save="onSaveTask" >
    </task>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "Tasks",

  props: {
    tasks: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    Task
  },
  methods: {
    onDeleteTask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    },
    onEditTask(task) {
      task.task.edit = true;
      console.log(task.task.edit);
    },
    onSaveTask(task) {
      task.task.edit = false;
    }
  }
};
</script>
