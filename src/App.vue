<template>
  <div id="#app">
    <div id="nav">
      <router-link to="/" class="nav-text">Home</router-link> |
      <router-link to="/about" class="nav-text">About</router-link> |
      <router-link to="/services" class="nav-text">Services</router-link>
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

#nav a.router-link-exact-hover {
  color: #11613d;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease-in-out;
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

.bn3637 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 2rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: #2c3e50;
  backface-visibility: hidden;
  border: 2px solid #2c3e50;
  border-radius: 3rem;
}

.bn37 {
  border-color: #2c3e50;
  background-color: white;
  color: #2c3e50;
  transition: transform 0.2s ease-in-out;
}
  
.bn37:hover {
  transform: scale3d(1.044, 1.044, 1)
}

.nav-text {
  font-size: 24px;
  margin: 5px;
  
  
}

.nav {
  height: 150px;
}
</style>
