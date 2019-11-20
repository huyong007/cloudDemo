<template>
<button :style="{background:bgColor}" @click="add">add</button>
</template>

<script>
import store from '../store/index.js'
    export default {
        name:'buttonB',
        props:{
            bgColor:String,
        },
        methods:{
            add(){
            // eslint-disable-next-line no-console
            this.$emit('add',store.state.number);
            store.setMessageAction(-10);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>