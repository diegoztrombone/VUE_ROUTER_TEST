<template>
  <input :value="value" @input="inputFn" :placeholder="placeholder" />
</template>
<script>
export default {
  name: "myInput",
  props: ["value", "placeholder", "clear"],
  methods: {
    inputFn(e) {
      if (this.flag) {
        e.target.value = "";
      }
      this.$emit("input-value", e.target.value);
    },
  },
};
</script>

<style scoped>
input {
  display: block;
  margin: 0 auto;
  font-family: inherit;
  width: 40%;
  border: 0;
  border-bottom: 2px solid lightgrey;
  outline: 0;
  font-size: 1.3rem;
  color: #2c3e50;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
</style>
