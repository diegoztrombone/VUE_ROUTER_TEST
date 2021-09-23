<template>
  <div>
    <h1>CONTADOR VUE</h1>
    <h2>Resultado: {{ counter }}</h2>
    <Button :text="text" @add-counter="updateCounter" />
  </div>
</template>
<script>
import Button from "@/components/Button.vue";

export default {
  name: "Hola",
  data() {
    return {
      counter: 0,
      text: {
        title: "Click me",
        incBtn: "More",
        decBtn: "Less",
      },
    };
  },
  components: {
    Button,
  },
  methods: {
    updateCounter(counter) {
      this.counter = counter;
    },
  },
};
</script>