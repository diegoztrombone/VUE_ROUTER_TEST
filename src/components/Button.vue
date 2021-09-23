<template>
  <div>
    <button @click="addCounter" class="bn3637 bn37">{{ text.incBtn }}</button>
    <button :disabled="!changeFlag" @click="dimCounter" class="bn3637 bn37">{{ text.decBtn }}</button>
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