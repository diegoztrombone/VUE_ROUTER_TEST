<template>
  <div>
    <input type="text" v-model="newUser.id" placeholder="Type your ID" />
    <input
      type="text"
      v-model="newUser.name"
      placeholder="Type your Username"
    />
    <button @click="add">ADD</button>
    <div v-for="(item, index) in products" :key="index">
      <h1>{{ item.name }}</h1>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import { mapState, mapMutations, mapActions } from "vuex";
import store from "../store/index.js";

export default {
  components: { Button },
  mounted() {
    console.log("created");
  },
  destroyed() {
    console.log("destroyed");
  },
  created() {
    console.log("mounted");
    if (!this.products.length) store.dispatch("getApi");
  },
  name: "Services",
  data() {
    return {
      flag: false,
      newUser: {
        id: null,
        name: "",
      },
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapMutations(["setProducts"]),
    ...mapActions(["getApi"]),
    add() {
      this.setProducts([
        { id: parseInt(this.newUser.id), name: this.newUser.name },
      ]);
      localStorage.setItem("users", JSON.stringify(this.newUser));
      this.newUser.id = "";
      this.newUser.name = "";
    },
  },
};
</script>