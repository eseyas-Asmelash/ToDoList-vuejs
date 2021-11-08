<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      name: "Anthon"
    }
  },

  props: {
    msg: String
  }
};
</script>
