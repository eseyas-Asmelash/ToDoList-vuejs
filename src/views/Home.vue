<template>
  <div class="home pt-5">
    <div class="box ">
      <div class="is-three-fifths is-offset-one-fifth py-5">
        <add-task-form v-on:AddTask="onAddTask" />
      </div>
      <div class="is-three-fifths is-offset-one-fifth">
        <tasks v-bind:tasks="tasks" />
      </div>
    </div>
  </div>
</template>

<script>
import AddTaskForm from "../components/AddTaskForm.vue";
import Tasks from "../components/Tasks.vue";

export default {
  name: "Home",

  data() {
    return {
      tasks: [
        {
          title: "",
          edit: false
        }
      ]
    };
  },
  components: {
    Tasks,
    AddTaskForm
  },
  async created() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    this.tasks[0].title = json[0].title;
  },
  methods: {
    onAddTask(task) {
      this.tasks.push(task);
      console.log(task);
    }
  }
};
</script>
