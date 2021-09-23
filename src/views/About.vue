<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Input @input-value="inputUpdate" placeholder="Type something" />
    <h2>{{ this.search }}</h2>
  </div>
</template>


<script>

import Input from '@/components/Input.vue';

export default {
  components: {
    Input
  },
  data () {
    return {
      search: '',
    }
  },
  methods: {
    inputUpdate(value){
      this.search = value
    }
  }

  
}
</script>
