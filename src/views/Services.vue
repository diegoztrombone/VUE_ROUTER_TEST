<template>
  <div>
    <Input @input-value="updateId" placeholder="Type your ID" :clear="flag"  />
    <Input @input-value="updateUser" placeholder="Type your Name" :clear="flag"   />
    <button @click="add" class="bn3637 bn37">ADD</button>
      <transition-group name="scale" mode="out-in">
        <div v-for="(item, index) in products" :key="index">
          <h3>{{ item.name }}</h3>
        </div>
      </transition-group>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import { mapState, mapMutations, mapActions } from "vuex";
import store from "../store/index.js";

export default {
  components: { Button, Input },
  created() {
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
      this.flag = !this.flag
    },
    updateId(value) {
      this.newUser.id = value;
    },
    updateUser(value) {
      this.newUser.name = value;
    },
  },
};
</script>

<style scoped>
button {
  display: block;
  margin: 5px auto;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.scale-leave-from,
.scale-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>