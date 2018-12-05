import Vue from "vue";
import HelloComponent from "./components/hello/hello";
import Test from './components/test.vue';

let v = new Vue({
  el: "#app",
  template: `
    <div>
        <div>Hello {{name}}!</div>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello :name="name" :initialEnthusiasm="5"></hello>
        <test></test>
    </div>`,
  data: {
    name: "World"
  },
  components: {
    "hello": HelloComponent,
    "test": Test
  }
});