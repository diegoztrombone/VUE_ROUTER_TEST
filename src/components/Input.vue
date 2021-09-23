<template>
    <input :value="value" @input="inputFn">
</template>
<script>
export default{
    name: "myInput",
    props: ['value'],
    methods: {
        inputFn(e){
            this.$emit('input-value', e.target.value)
        }
    }

}
</script>

<style scoped>
    input{
        text-align: center;
    }
</style>
