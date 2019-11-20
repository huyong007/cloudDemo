<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <h2>{{count}}</h2>
    <button @click="increment">add</button>
    <button @click="reduce">reduce</button>
    <buttonA bgColor='rgb(100,149,237)' class="comButton" @decline="countChange" />
    <buttonB bgColor='rgb(221,160,221)' class="comButton" @add="countChange"/>

  </div>
</template>

<script>
import buttonB from './buttonB.vue'
import buttonA from "./buttonA.vue";
export default {
  name: "HelloWorld",
  components: {
    buttonA,
    buttonB,
  },
  props: {
    msg: String
  },
  // state
  data() {
    return {
      count: 0
    };
  },
  // actions
  methods: {
    increment() {
      this.count++;
    },
    reduce() {
      --this.count;
    },
    countChange(val){
            // eslint-disable-next-line no-console
        console.log(val,'val')
        this.count +=val;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 0px 20px;
}
.comButton{
  display:inline-block;
}
</style>
