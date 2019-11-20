<template>
  <div>
    <button :style={background:bgColor} @click="decline">decline</button>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  name: "buttonA",
  props:{
        bgColor:String,
  },
  data() {
    return {
      privateMsg: "vue",
      sharedState: store.number
    };
  },
  methods: {
    decline: function() {
      this.$emit("decline",store.state.number);
      store.setMessageAction(20);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>