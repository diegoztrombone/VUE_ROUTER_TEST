<template>
  <div id="#app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/services">Services</router-link>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.scale-leave-from,
.scale-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
