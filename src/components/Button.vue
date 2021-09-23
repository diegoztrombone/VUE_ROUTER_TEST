<template>
  <div>
    <h2>{{ text.title }}</h2>
    <button @click="addCounter">{{ text.incBtn }}</button>
    <button :disabled="!changeFlag" @click="dimCounter">{{ text.decBtn }}</button>
  </div>
</template>
<script>
export default {
  props: ["text"],
  data() {
    return {
      localCounter: 0,
      flag: false,
      
    };
  },
  name: "Button",
  methods: {
    addCounter() {
      this.localCounter++;
      this.$emit("add-counter", this.localCounter);
    },
    dimCounter() {
      this.localCounter--;
      this.$emit("add-counter", this.localCounter);
    },
  },
  computed: {
    changeFlag() {
      if (this.localCounter > 0) {
        return !this.flag;
      }
    },
  },
};
</script>